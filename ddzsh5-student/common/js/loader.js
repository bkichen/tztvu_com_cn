/**
 * 支持跨上下文动态js及css加载及运行
 *  */
(function($){
	$.djs = function(){};
	$.djs.call= function(cfg,callback){	
		var ctxPath=cfg.ctxPath;
		var jsUrl=cfg.js;		
		loadAllCss(ctxPath,cfg.css);		
		var ns=getNs(ctxPath,jsUrl);		
		if(jQuery.isEmptyObject(ns)){
			var jsFullPath=ctxPath+jsUrl;
			if(ctxPath=="/"||ctxPath==""){
				jsFullPath=jsUrl;
			}
			loadJs(true,ns,jsFullPath,callback);	
		}else{
			if(callback){
				callback.apply(ns);
			}
		}	
	};
	$.djs.syncCall= function(cfg,callback){	
		var ctxPath=cfg.ctxPath;
		var jsUrl=cfg.js;		
		loadAllCss(ctxPath,cfg.css);		
		var ns=getNs(ctxPath,jsUrl);		
		if(jQuery.isEmptyObject(ns)){
			var jsFullPath=ctxPath+jsUrl;
			if(ctxPath=="/"||ctxPath==""){
				jsFullPath=jsUrl;
			}
			return loadJs(false,ns,jsFullPath,callback);	
		}else{
			if(callback){
				return callback.apply(ns);
			}
		}	
	};	
	function loadJs(isAsync,ns,url,callback){
		var liResult=null;
		$.ajax({
				async : isAsync,
			 	url : url,
			 	dataType: "script",
			 	cache: true,		 	
			 	type : "GET",
			 	success : function(data) {
			 		if (callback){
			 			liResult=callback.apply(ns);
		            }
			 	}
		 });
		return liResult;
	}
	$.djs.invoke=function(cfg,funcName,params){				
		var ctxPath=cfg.ctxPath;
		var jsUrl=cfg.js;
		loadAllCss(ctxPath,cfg.css);
		var ns=getNs(ctxPath,jsUrl);
		var sParams=new Array();
		for(var i=2;i<arguments.length;i++){
			sParams[i-2]=arguments[i];
		}
		if(jQuery.isEmptyObject(ns)){		
			var jsFullPath=ctxPath+jsUrl;
			if(ctxPath=="/"||ctxPath==""){
				jsFullPath=jsUrl;
			}
			loadJs_invoke(true,jsFullPath,function(){
				var func=ns[funcName];				
				if(func){
					func.apply(ns,sParams);					
				}
			});	
		}else{
			var func=ns[funcName];			
			if(func){
				func.apply(ns,sParams);	
			}
		}				
	};
	$.djs.syncInvoke=function(cfg,funcName,params){				
		var ctxPath=cfg.ctxPath;
		var jsUrl=cfg.js;
		loadAllCss(ctxPath,cfg.css);
		var ns=getNs(ctxPath,jsUrl);
		var sParams=new Array();
		for(var i=2;i<arguments.length;i++){
			sParams[i-2]=arguments[i];
		}
		if(jQuery.isEmptyObject(ns)){		
			var jsFullPath=ctxPath+jsUrl;
			if(ctxPath=="/"||ctxPath==""){
				jsFullPath=jsUrl;
			}
			return loadJs_invoke(false,jsFullPath,function(){
				var func=ns[funcName];				
				if(func){
					return func.apply(ns,sParams);					
				}
			});	
		}else{
			var func=ns[funcName];			
			if(func){
				return func.apply(ns,sParams);	
			}
		}				
	};	
	$.djs.namespace = function(ctxPath,url,cb){		
		var o=getNs(ctxPath,url);	
		o.__ctxPath=ctxPath;
		o.__jsPath=url;
		if (cb && typeof cb === 'function') cb.apply(o);  
	};			
	function getNs(ctxPath,url){
		var o=window["__ctx_js_app"]=window["__ctx_js_app"]||{};
		var ctxName=ctxPath.replace("/","");
		if(ctxPath=="/"||ctxPath==""){
			ctxName="root";
		}
		o=o[ctxName]=o[ctxName]||{};
		var urlName=url.replace(".js","");
		urlName=urlName.replace(/[/]/g,"_");		
		o=o[urlName]=o[urlName]||{};
		return o;
	}
	function loadAllCss(ctxPath,cssUrls){		
		var prexPath=ctxPath;
		if(ctxPath=="/"||ctxPath==""){
			prexPath="";
		}
		if(cssUrls){
			var cssArray=cssUrls.split(",");
			if(cssArray.length>0){
				for(var i=0;i<cssArray.length;i++){
					loadCss(prexPath+cssArray[i]);
				}
			}
		}
	}
	function loadCss(url){  
		var cssTag="link[href='"+url+"' ]"
    	var cssLink="<link rel=\"stylesheet\" type=\"text/css\" href=\""+url+"\"/>"
    	if($(cssTag).length<=0){
    		$("head").append(cssLink);
    	}else{
    		//alert("existed!");
    	}
    }
	function loadJs_invoke(isAsync,url,callback){
		var liResult=null;
		$.ajax({
				async : isAsync,
			 	url : url,
			 	dataType: "script",
			 	cache: true,		 	
			 	type : "GET",
			 	success : function(data) {
			 		if (callback){
			 			liResult=callback();
		            }
			 	}
		 });
		return liResult;
	}
})(jQuery);
/**
 * 本插件提供表单JSON处理方法
 */
(function($){
    $.fn.toJSON = function(options){
		var result = [],
		settings = {
			mode: 'first', // what to convert: 'all' or 'first' matched node
			delimiter: ".",
			skipEmpty: true,
			nodeCallback: null,
			useIdIfEmptyName: false
		};
		if (options){
			$.extend(settings, options);
		}
		switch(settings.mode){
			case 'first':
				return form2js(this.get(0), settings.delimiter, settings.skipEmpty, settings.nodeCallback, settings.useIdIfEmptyName);
				break;
			case 'all':
				this.each(function(){
					result.push(form2js(this, settings.delimiter, settings.skipEmpty, settings.nodeCallback, settings.useIdIfEmptyName));
				});
				return result;
				break;
			case 'combine':
				return form2js(Array.prototype.slice.call(this), settings.delimiter, settings.skipEmpty, settings.nodeCallback, settings.useIdIfEmptyName);
				break;
		}
    };
    $.fn.clearForm = function() {
    	return this.each(function() {
    		$('input,select,textarea', this).clearFields();
    	});
    };
    $.fn.resetForm = function() {
    	return this.each(function() {
    		if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType)) {
    			this.reset();
    		}
    	});
    };
})(jQuery);

//定义将表单转化为json的函数
var form2js = (function()
		{
			"use strict";
			/**
			 * Returns form values represented as Javascript object
			 * "name" attribute defines structure of resulting object
			 * @param rootNode {Element|String} root form element (or it's id) or array of root elements
			 * @param delimiter {String} structure parts delimiter defaults to '.'
			 * @param skipEmpty {Boolean} should skip empty text values, defaults to true
			 * @param nodeCallback {Function} custom function to get node value
			 * @param useIdIfEmptyName {Boolean} if true value of id attribute of field will be used if name of field is empty
			 */
			function form2js(rootNode, delimiter, skipEmpty, nodeCallback, useIdIfEmptyName){
				if (typeof skipEmpty == 'undefined' || skipEmpty == null) skipEmpty = true;
				if (typeof delimiter == 'undefined' || delimiter == null) delimiter = '.';
				if (arguments.length < 5) useIdIfEmptyName = false;

				rootNode = typeof rootNode == 'string' ? document.getElementById(rootNode) : rootNode;

				var formValues = [],
					currNode,
					i = 0;

				/* If rootNode is array - combine values */
				if (rootNode.constructor == Array || (typeof NodeList != "undefined" && rootNode.constructor == NodeList)){
					while(currNode = rootNode[i++]){
						formValues = formValues.concat(getFormValues(currNode, nodeCallback, useIdIfEmptyName));
					}
				}else{
					formValues = getFormValues(rootNode, nodeCallback, useIdIfEmptyName);
				}

				return processNameValues(formValues, skipEmpty, delimiter);
			}
			/**
			 * Processes collection of { name: 'name', value: 'value' } objects.
			 * @param nameValues
			 * @param skipEmpty if true skips elements with value == '' or value == null
			 * @param delimiter
			 */
			function processNameValues(nameValues, skipEmpty, delimiter){
				var result = {},
					arrays = {},
					i, j, k, l,
					value,
					nameParts,
					currResult,
					arrNameFull,
					arrName,
					arrIdx,
					namePart,
					name,
					_nameParts;

				for (i = 0; i < nameValues.length; i++){
					value = nameValues[i].value;
					if (skipEmpty && (value === '' || value === null)) continue;
					name = nameValues[i].name;
					_nameParts = name.split(delimiter);
					nameParts = [];
					currResult = result;
					arrNameFull = '';

					for(j = 0; j < _nameParts.length; j++){
						namePart = _nameParts[j].split('][');
						if (namePart.length > 1){
							for(k = 0; k < namePart.length; k++){
								if (k == 0){
									namePart[k] = namePart[k] + ']';
								}else if (k == namePart.length - 1){
									namePart[k] = '[' + namePart[k];
								}else{
									namePart[k] = '[' + namePart[k] + ']';
								}

								arrIdx = namePart[k].match(/([a-z_]+)?\[([a-z_][a-z0-9_]+?)\]/i);
								if (arrIdx){
									for(l = 1; l < arrIdx.length; l++){
										if (arrIdx[l]) nameParts.push(arrIdx[l]);
									}
								}else{
									nameParts.push(namePart[k]);
								}
							}
						}else{
							nameParts = nameParts.concat(namePart);
						}							
					}

					for (j = 0; j < nameParts.length; j++){
						namePart = nameParts[j];

						if (namePart.indexOf('[]') > -1 && j == nameParts.length - 1){
							arrName = namePart.substr(0, namePart.indexOf('['));
							arrNameFull += arrName;

							if (!currResult[arrName]) currResult[arrName] = [];
							currResult[arrName].push(value);
						}else if (namePart.indexOf('[') > -1){
							arrName = namePart.substr(0, namePart.indexOf('['));
							arrIdx = namePart.replace(/(^([a-z_]+)?\[)|(\]$)/gi, '');

							/* Unique array name */
							arrNameFull += '_' + arrName + '_' + arrIdx;

							/*
							 * Because arrIdx in field name can be not zero-based and step can be
							 * other than 1, we can't use them in target array directly.
							 * Instead we're making a hash where key is arrIdx and value is a reference to
							 * added array element
							 */

							if (!arrays[arrNameFull]) arrays[arrNameFull] = {};
							if (arrName != '' && !currResult[arrName]) currResult[arrName] = [];

							if (j == nameParts.length - 1){
								if (arrName == ''){
									currResult.push(value);
									arrays[arrNameFull][arrIdx] = currResult[currResult.length - 1];
								}else{
									currResult[arrName].push(value);
									arrays[arrNameFull][arrIdx] = currResult[arrName][currResult[arrName].length - 1];
								}
							}else{
								if (!arrays[arrNameFull][arrIdx]){
									if ((/^[a-z_]+\[?/i).test(nameParts[j+1])) currResult[arrName].push({});
									else currResult[arrName].push([]);

									arrays[arrNameFull][arrIdx] = currResult[arrName][currResult[arrName].length - 1];
								}
							}

							currResult = arrays[arrNameFull][arrIdx];
						}else{
							arrNameFull += namePart;
							if (j < nameParts.length - 1){
								if (!currResult[namePart]) currResult[namePart] = {};
								currResult = currResult[namePart];
							}else{
								currResult[namePart] = value;
							}
						}
					}
				}
				return result;
			}

		    function getFormValues(rootNode, nodeCallback, useIdIfEmptyName){
		        var result = extractNodeValues(rootNode, nodeCallback, useIdIfEmptyName);
		        return result.length > 0 ? result : getSubFormValues(rootNode, nodeCallback, useIdIfEmptyName);
		    }

		    function getSubFormValues(rootNode, nodeCallback, useIdIfEmptyName){
				var result = [],
					currentNode = rootNode.firstChild;
				
				while (currentNode){
					result = result.concat(extractNodeValues(currentNode, nodeCallback, useIdIfEmptyName));
					currentNode = currentNode.nextSibling;
				}
				return result;
			}

		    function extractNodeValues(node, nodeCallback, useIdIfEmptyName) {
		        var callbackResult, fieldValue, result, fieldName = getFieldName(node, useIdIfEmptyName);
		        callbackResult = nodeCallback && nodeCallback(node);
		        if (callbackResult && callbackResult.name) {
		            result = [callbackResult];
		        }else if (fieldName != '' && node.nodeName.match(/INPUT|TEXTAREA/i)) {
		            fieldValue = getFieldValue(node);
					result = [ { name: fieldName, value: fieldValue} ];
		        }else if (fieldName != '' && node.nodeName.match(/SELECT/i)) {
			        fieldValue = getFieldValue(node);
			        result = [ { name: fieldName.replace(/\[\]$/, ''), value: fieldValue } ];
		        }else {
		            result = getSubFormValues(node, nodeCallback, useIdIfEmptyName);
		        }
		        return result;
		    }
			function getFieldName(node, useIdIfEmptyName){
				if (node.name && node.name != '') return node.name;
				else if (useIdIfEmptyName && node.id && node.id != '') return node.id;
				else return '';
			}
			function getFieldValue(fieldNode){
				if (fieldNode.disabled) return null;				
				switch (fieldNode.nodeName) {
					case 'INPUT':
					case 'TEXTAREA':
						switch (fieldNode.type.toLowerCase()) {
							case 'radio':
							case 'checkbox':
		                        if (fieldNode.checked && fieldNode.value === "true") return true;
		                        if (!fieldNode.checked && fieldNode.value === "true") return false;
								if (fieldNode.checked) return fieldNode.value;
								break;

							case 'button':
							case 'reset':
							case 'submit':
							case 'image':
								return '';
								break;

							default:
								return fieldNode.value;
								break;
						}
						break;
					case 'SELECT':
						return getSelectedOptionValue(fieldNode);
						break;
					default:
						break;
				}
				return null;
			}

			function getSelectedOptionValue(selectNode){
				var multiple = selectNode.multiple,
					result = [],
					options,
					i, l;

				if (!multiple) return selectNode.value;

				for (options = selectNode.getElementsByTagName("option"), i = 0, l = options.length; i < l; i++){
					if (options[i].selected) result.push(options[i].value);
				}
				return result;
			}
			return form2js;
})();
Date.prototype.format = function(fmt){ 
    var o = {         
    	    "M+" : this.getMonth()+1, //月份         
    	    "d+" : this.getDate(), //日         
    	    "h+" : this.getHours()%12 == 0 ? 12 : this.getHours()%12, //小时         
    	    "H+" : this.getHours(), //小时         
    	    "m+" : this.getMinutes(), //分         
    	    "s+" : this.getSeconds(), //秒         
    	    "q+" : Math.floor((this.getMonth()+3)/3), //季度         
    	    "S" : this.getMilliseconds() //毫秒         
    	    };         
    	    var week = {         
    	    "0" : "日",         
    	    "1" : "一",         
    	    "2" : "二",         
    	    "3" : "三",         
    	    "4" : "四",         
    	    "5" : "五",         
    	    "6" : "六"        
    	    };         
    	    if(/(y+)/.test(fmt)){         
    	        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));         
    	    }         
    	    if(/(E+)/.test(fmt)){         
    	        fmt=fmt.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "星期" : "周") : "")+week[this.getDay()+""]);         
    	    }         
    	    for(var k in o){         
    	        if(new RegExp("("+ k +")").test(fmt)){         
    	            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));         
    	        }         
    	    }         
    	    return fmt; 
};
(function($){
	$.webUtils = function(){};
	$.webUtils.trim=function(val){//消除空格
		if(val==undefined||val==null){
			return "";
		}else{
			return val.replace(/^\s\s*/, '' ).replace(/\s\s*$/, '' );
		}
	};
	$.webUtils.leftTrim=function(val){//消除空格
		if(val==undefined||val==null){
			return "";
		}else{
			return val.replace(/(^\s*)/g,""); 
		}
	};
	$.webUtils.rightTrim=function(val){//消除空格
		if(val==undefined||val==null){
			return "";
		}else{
			return val.replace(/(\s*$)/g,"");
		}
	};
	$.webUtils.formatNull=function(val){//格式化空值
		if(val==undefined||val==null){
			return "";
		}else{
			return val;
		}
	};
	$.webUtils.formatDate=function(val,fmt){//格式date为字符串
		if(val==undefined||val==null){
			return "";
		}else{
			var date=new Date(val);
			if(fmt==undefined||fmt==null){
				fmt="yyyy-MM-dd";
			}
			return date.format(fmt);
		}
	};	
	$.webUtils.formatKeyVal=function(key,map){//从map中获得对应key的value值.
		if(key==undefined||key==null||map==undefined||map==null){
			return "";
		}else{
			var result=map[""+key];
			if(result){
				return result;
			}else{
				return "";
			}
		}
	};
	$.webUtils.formatYesNo=function(val){//返回是或者否
		if(val){
			return "是";
		}else{
			return "否";
		}
	};
	$.webUtils.uuid=function(len, radix){//返回UUID
		 var CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
		 var chars = CHARS, uuid = [], i;
		 radix = radix || chars.length;
		 if (len) {
		      for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
		 } else {
		      var r;
		      uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
		      uuid[14] = '4';
		      for (i = 0; i < 36; i++) {
		        if (!uuid[i]) {
		          r = 0 | Math.random()*16;
		          uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
		        }
		      }
		 }
		 return uuid.join('');
	};	
})(jQuery);