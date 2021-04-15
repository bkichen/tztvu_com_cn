/*M5.7 from M5.3EN MODIFY by zhangyi*/
(function(){
	var formatArgsStore, locationStore;
	//语言包使用的是HTML语法格式，需转换成JavaScript String格式
	var jsString = (function(){
		var rs = [/&quot;/g, /&lt;/g, /&gt;/g, /&amp;/g];
		return function(str){
			return String(str).replace(rs[0], '"').replace(rs[1], '<').replace(rs[2], '>').replace(rs[3], '&');
		}
	})();
	
	//HTML代码中存在<br>等情况，需要转换成HTML String格式
	var htmlKey = (function(){
		var rs = [/&/g, /</g, />/g, /"/g];
		return function(str){
			return String(str).replace(rs[0], '&amp;').replace(rs[1], '&lt;').replace(rs[2], '&gt;').replace(rs[3], '&quot;');
		}
	})();
	
	//HTML中存在&amp;nbsp;等情况的转义，需要转换成&nbsp;
	var htmlString = (function(){
		var rs = [/&lt;/g, /&gt;/g, /&amp;/g];
		return function(str){
			return String(str).replace(rs[0], '<').replace(rs[1], '>').replace(rs[2], '&');
		}
	})();
	
	//多语言包支持
	function _get(json_key){
		if(!window.VSP_LANG){
			window.VSP_LANG = {};
		}
		if(window.VSP_LANG[json_key] != null){
			return window.VSP_LANG[json_key];
		}
		
		return null;
	}
	//输出JavaScript多语言文字
	window.tr = function(json_key){
		var result = _get(json_key);
		if(result == null && json_key.length > 16){	//编写Key，前8个字符+后8个字符
			result = _get(json_key.substr(0, 8) + '+' + json_key.substr(json_key.length - 8));
		}
		if(result == null){
			result = json_key;
		}
		result = result.replace(/\{#[\d]+\}/g, '');
		if(arguments.length > 1){
			var values = Array.prototype.slice.call(arguments, 1);
			return jsString(result.replace(/\{(\d+)\}/g, function(m, i){
				return values[i] == null ? '' : values[i];
			}));
		}else{
			return jsString(result);
		}
	}
	//输出HTML多语言文字（主要是放弃处理转义符）
	window.htmltr = function(json_key){
		var html_key = htmlKey(json_key),
			result = _get(html_key);
		if(result == null && html_key.length > 16){	//编写Key，前8个字符+后8个字符
			result = _get(html_key.substr(0, 8) + '+' + html_key.substr(html_key.length - 8));
		}
		if(result == null){
			result = json_key;
		}
		result = result.replace(/\{#[\d]+\}/g, '');
		if(arguments.length > 1){
			var values = Array.prototype.slice.call(arguments, 1);
			return htmlString(result.replace(/\{(\d+)\}/g, function(m, i){
				return values[i] == null ? '' : values[i];
			}));
		}else{
			return htmlString(result);
		}
	}
	//用于名称做id时的语言支持
	window.pagelanguage = 'vsp';
	window.pagetr = function(json_key){
		var result = json_key;
		result = result.replace(/\{#[\d]+\}/g, '');
		if(arguments.length > 1){
			var values = Array.prototype.slice.call(arguments, 1);
			return result.replace(/\{(\d+)\}/g, function(m, i){
				return values[i] == null ? '' : values[i];
			});
		}else{
			return result;
		}
	}
	//格式化字符串
	window.format = function(str){
		if(arguments.length > 1){
			var values = Array.prototype.slice.call(arguments, 1);
			return str.replace(/\{(\d+)\}/g, function(m, i){
				return values[i] == null ? '' : values[i];
			});
		}else{
			return str;
		}
	}
	//内部函数，处理自定义HTML属性输出
	function _setLang(){
		var els = document.getElementsByTagName('*'),
			nameArr = ['html', 'value', 'title', 'alt', 'qtip'],
			_els = [];
		for(var i=0, len = els.length; i<len; i++){	//注意：getElementsByTagName('*')返回的是可变列表，必需先转成数组
			_els[i] = els[i];
		}
		for(var i=0, len = _els.length; i<len; i++){
			var el = _els[i];
			for(var j=0, jlen = nameArr.length; j<jlen; j++){
				var name = nameArr[j],
					_name = '_' + name,
					_formatArgsName = _name + 'FormatArgs',
					_index = 0,
					_el = null,
					args = null,
					text = null,
					formatArgsEl = null;
				if(el.getAttribute(_name)){
					if(el.getAttribute(_formatArgsName)){
						args = formatArgsStore[el.getAttribute(_formatArgsName)];	//正常的字符串，可以用变量声明
						if(args == null){
							formatArgsEl = document.getElementById(el.getAttribute(_formatArgsName));	//带换行的字符串，请使用元素声明
							if(formatArgsEl && formatArgsEl.childNodes.length > 0){
								args = [];
								_index = 0;
								for(var x=0, xlen = formatArgsEl.childNodes.length; x<xlen; x++){
									_el = formatArgsEl.childNodes[x];
									if(_el && _el.tagName){
										args[_index] = _el.innerHTML;
										_index++;
									}
								}
							}
						}
					}
					if(args != null){
						if(Object.prototype.toString.apply(args) === '[object Array]'){
							text = htmltr.apply(window, [el.getAttribute(_name)].concat(args));
						}else{
							text = htmltr(el.getAttribute(_name), args);
						}
					}else{
						text = htmltr(el.getAttribute(_name));
					}
					if(name === 'html'){
						try{
							el.innerHTML = text;
						}catch(e){
							var div = document.createElement('div');
							div.innerHTML = text;
							for(var n=0; n<div.childNodes.length; n++){
								el.appendChild(div.childNodes[n]);
							}
						}
					}else{
						el.setAttribute(name, text);
					}
				}
			}
		}
	}
	//获取URL参数
	function _request(name){
		if(!locationStore){
			var search = window.location.search.substr(1),
				store = {},
				joinKey = '&',
				equalKey = '=',
				i = 0,
				len = search.length;
			while(i < len){
				var index = search.indexOf(joinKey, i),
					key,
					value,
					equalIndex = -1,
					item;
				if(index !== -1){
					item = search.substr(i, index - i);
					i = index + joinKey.length;
				}else{
					item = search.substr(i);
					i = search.length;
				}
				equalIndex = item.indexOf(equalKey);
				if(equalIndex !== -1){
					key = item.substr(0, equalIndex);
					value = item.substr(equalIndex + equalKey.length);
					try{
						store[key.toLowerCase()] = decodeURIComponent(value);
					}catch(ex){
						try{
							store[key.toLowerCase()] = unescape(value);
						}catch(ex2){
							store[key.toLowerCase()] = value;
						}
					}
				}
			}
			locationStore = store;
		}
		return locationStore[String(name).toLowerCase()];
	}
	window.setLang = function(formatArgs){
		formatArgsStore = formatArgs || {};
		if(_getCookie('language')){	//延时处理
			if(window.attachEvent){
				window.attachEvent('onload', _setLang);
			}else{
				window.addEventListener('load', _setLang, false);
			}
		}else if(window.Ext && window.Ext.onReady && /msie/.test(navigator.userAgent.toLowerCase())){	//处理IE bug
			Ext.onReady(function(){
				_setLang();
			});
		}else{
			_setLang();
		}
	}
	//切换语言
	window.toLang = function(language){
		_setCookie('language', language);
		window.location.reload();
	}
	function _getCookie(name){
		var arg = name + '=',
			alen = arg.length,
			clen = document.cookie.length,
			ret = '',
			i = 0;
		while (i < clen) {
			var j = i + alen;
			if (document.cookie.substring(i, j) === arg) {
				var index = document.cookie.indexOf(';', j);
				if (index === -1) {
					index = clen;
				}
				ret = unescape(document.cookie.substring(j, index));
			}
			i = document.cookie.indexOf(' ', i) + 1;
			if (i === 0) {
				break;
			}
		}
		return ret;
	}
	function _setCookie(name, value){
		var argv = arguments;
		var argc = arguments.length;
		var expires = (argc > 2) ? argv[2] : null;
		var path = (argc > 3) ? argv[3] : '/';
		var domain = (argc > 4) ? argv[4] : null;
		var secure = (argc > 5) ? argv[5] : false;
		document.cookie = name + "=" + escape(value) + ((expires === null) ? "" : ("; expires=" + expires.toGMTString())) + ((path === null) ? "" : ("; path=" + path)) + ((domain === null) ? "" : ("; domain=" + domain)) + ((secure === true) ? "; secure" : "");
	}
	if(window.parent && window.parent.VSP_LANG){
		window.VSP_LANG = window.parent.VSP_LANG;
	}else{
		var language = _request('language');
		if(!language){
			language = _getCookie('language');
		}else{
			_setCookie('language', language, new Date(2999, 1, 1));
		}
		if(!language){
			language = 'vsp';
		}
		window.language = language;
		if(language !== 'sslvpn'){
			document.write(['<script src="/com/lang/language.', language, '.json"><\/script>'].join(''));
		}	
	}
})();
/*end M5.7*/