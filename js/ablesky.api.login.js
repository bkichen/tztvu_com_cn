AbleSky_Api_Login = (function() {
	var rprotocolExpr = /https?:\/\//;
	var rableskyExpr = /ablesky.com/;
	var trimLeft = /^\s+/,
		trimRight = /\s+$/,
		isAbleskyDomainDom = document.getElementById('isAbleskyDomain'), 
		// AbleSky应用程序内，包括独立域名和AbleSky域名
		isAbleSkyApp = isAbleskyDomainDom != null, 
		// 当前是httpServer域名内
//		isAbleskyDomain = isAbleskyDomainDom ? isAbleskyDomainDom.value.toString().trim() == 'true' : false,
		timeRand = (new Date()).getTime(),
		temWindow = null,
		loginInfo = '', //登录模块str
		home = 'http://www.ablesky.com', //登录成功后要跳转的地址，注册地址为home#register
		open = false, //true:登录成功打开一个新页面，页面地址为home指定的地址，false:跳转到home指定页面
		useButton = false, //是否显示登录和注册按钮，要显示注册按钮，除了将此选项置为true外，还需设置useRegister为true
		useMyButton = false, //使用自定义的按钮,使用此项时,需要保证useButton为false
		useRegister = false, //是否显示注册按钮
		PASSPORT_SERVER = 'http://passport.enaea.edu.cn/', 
		loginStr = '登&nbsp;&nbsp;&nbsp;&nbsp;录',
		registerStr = '注&nbsp;&nbsp;&nbsp;&nbsp;册',
		usernameTabStr = '用户名：',
		passwordTabStr = '密码：',
		internalSuffix = '', // 是否是内训学员
		useSaveUser = false, // 是否显示记住我checkbox
		useAutoLogin = false,  // 是否使用一周内自动为我登陆
		LOGIN_COOKIE_NAME = 'ASUSS', //登录成功后会生成这个名字的cookie，客户端会以是否存在这个cookie作为判断登录与否的条件
		config = null //外部调用此组件时的配置
	;

	var trim = String.prototype.trim ?
		function( text ) {
			return text == null ?
				"" :
				String.prototype.trim.call( text );
		} :

		// Otherwise use our own trimming functionality
		function( text ) {
			return text == null ?
				"" :
				text.toString().replace( trimLeft, "" ).replace( trimRight, "" );
		};
		
		
	// login success redirect
	var redirect = function(cookieName) {
		if (config.avoidAutoRedirect) {
			if (typeof(config.loginCallback) === 'function') {
				config.loginCallback();
			}
		} else {
			if (!(isAbleSkyApp && window.Ablesky) && /\.do/i.test(home)) {
				home += (/\?/i.test(home) ? '&' : '?') + LOGIN_COOKIE_NAME + '=' + cookieName;
			}
			
			if (open) {
				temWindow.location.href = home;
			} else {
				window.location.href = home;
			}
		}
	};

	var register = function() {
		var organizationId = parseInt(config.organizationId);
		
		//var host = rableskyExpr.test(home) ? 'www.ablesky.com' : (rprotocolExpr.test(home) ? home.split(rprotocolExpr)[1].split('/')[0] : home.split('/')[0]);
		
		var hostCaptureRe = /https?:\/\/([^\/]+)(?:\/.+)?/;
		var captureResults = hostCaptureRe.exec(home);
		var host = captureResults && captureResults[1] || 'unknown';
		host = host.replace(/(.+)\.ablesky\.com$/, "www.ablesky.com");
		
		var url = rableskyExpr.test(home) ? home : ('http://' + home.split('http://')[1].split('/')[0]);
		var redirectURL = '';
		
		
		
		if (!isNaN(organizationId)) {
			// 根据organizationId定位机构
			redirectURL = 'http://'+ host +'/orgHomePageRedirect.do?action=domainRegisiter&organizationId='+ organizationId +'&fromurl=' + encodeURIComponent(url);
		} else if (!rableskyExpr.test(home)) {
			// 独立域名下，不需配置organizationId
			redirectURL = 'http://'+ host +'/orgHomePageRedirect.do?action=domainRegisiter&fromurl=' + encodeURIComponent(url);
		} else {
			alert('请在外链登录代码中，配置organizationId参数!');
			return;
		}
		
		if (open) {
			window.open(redirectURL,'_blank');
		} else {
			window.location.href = redirectURL;
		}
	};
	
	var requestScriptProxy = function(id, url) {
		var head = document.getElementsByTagName('head').item(0);
		dynamicScript = document.createElement('script');
		dynamicScript.setAttribute('src', url);
		dynamicScript.setAttribute('type', 'text/javascript');
		head.appendChild(dynamicScript);
		return dynamicScript;
	};
	
	var checkLogin = function(ret) {
		var ASUSS = ret.ASUSS;
		
		try {
			if (ret.success && ASUSS != '' && ASUSS != 'false') {
				
				if (isAbleSkyApp && window.Ablesky) {
					Ablesky.app.common.GetCurrentUser(true, ASUSS);
				}
				
				AbleSky_Api_Login.redirect(ASUSS);
			}
		} catch (e) {
		}
	};
	
	var checkCookie = function() {
		var url = PASSPORT_SERVER + 'check.do?action=check&jsonp=AbleSky_Api_Login.checkLogin&_=' + new Date().getTime();
		requestScriptProxy('loginScript', url);
	};
	
	
	var login = function() {
		var username_input = document.getElementById('ablesky_username');
		var password_input = document.getElementById('ablesky_password');
		
		
		var saveAccount = document.getElementById('J_rememberMe_'+ timeRand) && document.getElementById('J_rememberMe_'+ timeRand).checked ? 'on' : 'off';
		if (saveAccount == 'on') { //存储cookie
			var today = new Date();
            var expires = new Date();
            expires.setTime(today.getTime() + 1000 * 60 * 60 * 24);
            document.cookie = 'SA=' + encodeURIComponent(username_input.value) + ';path=/; expires=' + expires.toGMTString();
		}
		
		
		if (username_input && password_input) {
			if (username_input.value != '' && password_input.value != '') {
				if (open) {
					temWindow = window.open();
				}
				var username = username_input.value;
				var password = hex_md5(password_input.value);
				
				if(internalSuffix !='' && internalSuffix != null){
					username = username+'*'+internalSuffix ;	
				}
				var url = PASSPORT_SERVER + 'login.do?jsonp=AbleSky_Api_Login._loginCallback&ajax=true&isPopUp=true&_acegi_save_account='+ saveAccount +'&_acegi_security_remember_me=false&j_username=' + username + '&j_password=' + password + '&s=' + (new Date()).getTime();
				requestScriptProxy('loginScript', url);
			} else {
				alert('用户名或密码不能为空，请重新输入！');
			}
		}
		
		errId = 'loginFailedSignIn';
		usernameCmpId = 'login_username';
	};
	
	var responseEnter = function(e) {
		var key = window.event ? e.keyCode : e.which;
		if (key == 13) {
			login();
		}
	};
	
	var formLogin = function() {
		var loginAry = [];
		loginAry.push('<div class="name-main">',
				'<div class="name-tab">',usernameTabStr,'</div>',
				'<div class="name-input-main"><input class="name-input" type="text" id="ablesky_username_', timeRand, '" /></div>',
				'<div class="name-bottom"></div>',
			'</div>',
			'<div class="psd-main">',
				'<div class="psd-tab">',passwordTabStr,'</div>',
				'<div class="psd-input-main"><input class="psd-input" type="password" id="ablesky_password_', timeRand, '" onkeypress="AbleSky_Api_Login.responseEnter(event);" /></div>',
				'<div class="psd-bottom"></div>',
			'</div>');
			
		//增加自动登录和记住我的Dom节点
		if(useSaveUser){
			loginAry.push('<div class="remember-main" >',
				'<input id="J_rememberMe_', timeRand, '" class="rememberme-check" type="checkbox" name="save-account" tabindex="0" />',
				'<label for="J_rememberMe_', timeRand,'" class="rememberme-text">记住我</label>',
			'</div>');
		}
		if(useAutoLogin){
			loginAry.push('<div class="weekautologin-main" >',
				'<input id="J_weekautoLogin_', timeRand, '" class="weekautologin-check" type="checkbox" name="save-account" tabindex="0" />',
				'<label for="J_weekautoLogin_', timeRand, '" class="weekautologin-text">一周内自动为我登陆</label>',
			'</div>');
		}
		
		if (useButton) {
			loginAry.push('<div class="btn-main">');
			loginAry.push('<div class="login-main">',
				'<button onclick="AbleSky_Api_Login.login();" class="login-btn">',loginStr,'</button>',
			'</div>');
			if(useRegister) {
				loginAry.push('<div class="register-main">',
					'<button onclick="AbleSky_Api_Login.register();" class="login-btn">',registerStr,'</button>',
				'</div>');
			}
			loginAry.push('<div class="btn-bottom"></div>');
			loginAry.push('</div>');
		} else if(useMyButton) {
			loginAry.push('<div class="btn-main">');
			loginAry.push('<div class="login-main" onclick="AbleSky_Api_Login.login();">',
				'<div class="login-left"></div>',
				'<div class="login-center">',loginStr,'</div>',
				'<div class="login-right"></div>',
			'</div>');
			
			if (useRegister) {
				loginAry.push('<div class="register-main" onclick="AbleSky_Api_Login.register();">',
					'<div class="register-left"></div>',
					'<div class="register-center">', registerStr, '</div>',
					'<div class="register-right"></div>',
				'</div>');
			}
			loginAry.push('<div class="btn-bottom"></div>');
			loginAry.push('</div>');
		}
		loginInfo = loginAry.join('');
	};
	
	var AbleSky_Error = function(msg) {
		alert(msg);
	};
	
	// 作为全局变量，复写站内已有的loginFail函数
	var loginFail = function(loginState,alertMsg) {
		if (loginState == 101) {
			if (alertMsg){
				AbleSky_Error('错误的用户名或密码，' + alertMsg);
			}else{
				AbleSky_Error('错误的用户名或密码');
			}
		} else if (loginState == 102) {
			AbleSky_Error('无法登陆到客户端');
		} else if (loginState == 105) {
			AbleSky_Error('验证码错误');
		} else if (loginState == 107) {
			AbleSky_Error('账户已冻结，请在3小时之后再试');
		}  else {
			AbleSky_Error(loginState);
		}
	};
	
	var _loginCallback = function(data) {
		var serverState = data.sS; // , isPopUp = data.iP, isInternal = data.iI
		var alertMessage = data.alertMessage;
		if (serverState == 0) {
			AbleSky_Api_Login.checkCookie();
		} else {
			if (temWindow) {
				temWindow.close();
			}
			AbleSky_Api_Login.loginFail(serverState,alertMessage);
		}
	};
	
	
	// MD5 Tool
	/*
	 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
	 * Digest Algorithm, as defined in RFC 1321. Version 2.1 Copyright (C) Paul
	 * Johnston 1999 - 2002. Other contributors: Greg Holt, Andrew Kepert,
	 * Ydnar, Lostinet Distributed under the BSD License See
	 * http://pajhome.org.uk/crypt/md5 for more info.
	 */

	/*
	 * Configurable variables. You may need to tweak these to be compatible with
	 * the server-side, but the defaults work in most cases.
	 */
	var hexcase = 0; /* hex output format. 0 - lowercase; 1 - uppercase */
	var b64pad = ""; /* base-64 pad character. "=" for strict RFC compliance */
	var chrsz = 8; /* bits per input character. 8 - ASCII; 16 - Unicode */

	/*
	 * These are the functions you'll usually want to call They take string
	 * arguments and return either hex or base-64 encoded strings
	 */
	function hex_md5(s) {
		return binl2hex(core_md5(str2binl(s), s.length * chrsz));
	}
	function b64_md5(s) {
		return binl2b64(core_md5(str2binl(s), s.length * chrsz));
	}
	function str_md5(s) {
		return binl2str(core_md5(str2binl(s), s.length * chrsz));
	}
	function hex_hmac_md5(key, data) {
		return binl2hex(core_hmac_md5(key, data));
	}
	function b64_hmac_md5(key, data) {
		return binl2b64(core_hmac_md5(key, data));
	}
	function str_hmac_md5(key, data) {
		return binl2str(core_hmac_md5(key, data));
	}

	/*
	 * Perform a simple self-test to see if the VM is working
	 */
	function md5_vm_test() {
		return hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72";
	}

	/*
	 * Calculate the MD5 of an array of little-endian words, and a bit length
	 */
	function core_md5(x, len) {
		/* append padding */
		x[len >> 5] |= 0x80 << ((len) % 32);
		x[(((len + 64) >>> 9) << 4) + 14] = len;

		var a = 1732584193;
		var b = -271733879;
		var c = -1732584194;
		var d = 271733878;

		for (var i = 0; i < x.length; i += 16) {
			var olda = a;
			var oldb = b;
			var oldc = c;
			var oldd = d;

			a = md5_ff(a, b, c, d, x[i + 0], 7, -680876936);
			d = md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
			c = md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
			b = md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
			a = md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
			d = md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
			c = md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
			b = md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
			a = md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
			d = md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
			c = md5_ff(c, d, a, b, x[i + 10], 17, -42063);
			b = md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
			a = md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
			d = md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
			c = md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
			b = md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);

			a = md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
			d = md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
			c = md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
			b = md5_gg(b, c, d, a, x[i + 0], 20, -373897302);
			a = md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
			d = md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
			c = md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
			b = md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
			a = md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
			d = md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
			c = md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
			b = md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
			a = md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
			d = md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
			c = md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
			b = md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);

			a = md5_hh(a, b, c, d, x[i + 5], 4, -378558);
			d = md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
			c = md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
			b = md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
			a = md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
			d = md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
			c = md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
			b = md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
			a = md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
			d = md5_hh(d, a, b, c, x[i + 0], 11, -358537222);
			c = md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
			b = md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
			a = md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
			d = md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
			c = md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
			b = md5_hh(b, c, d, a, x[i + 2], 23, -995338651);

			a = md5_ii(a, b, c, d, x[i + 0], 6, -198630844);
			d = md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
			c = md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
			b = md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
			a = md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
			d = md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
			c = md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
			b = md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
			a = md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
			d = md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
			c = md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
			b = md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
			a = md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
			d = md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
			c = md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
			b = md5_ii(b, c, d, a, x[i + 9], 21, -343485551);

			a = safe_add(a, olda);
			b = safe_add(b, oldb);
			c = safe_add(c, oldc);
			d = safe_add(d, oldd);
		}
		return Array(a, b, c, d);

	}

	/*
	 * These functions implement the four basic operations the algorithm uses.
	 */
	function md5_cmn(q, a, b, x, s, t) {
		return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
	}
	function md5_ff(a, b, c, d, x, s, t) {
		return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
	}
	function md5_gg(a, b, c, d, x, s, t) {
		return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
	}
	function md5_hh(a, b, c, d, x, s, t) {
		return md5_cmn(b ^ c ^ d, a, b, x, s, t);
	}
	function md5_ii(a, b, c, d, x, s, t) {
		return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
	}

	/*
	 * Calculate the HMAC-MD5, of a key and some data
	 */
	function core_hmac_md5(key, data) {
		var bkey = str2binl(key);
		if (bkey.length > 16)
			bkey = core_md5(bkey, key.length * chrsz);

		var ipad = Array(16), opad = Array(16);
		for (var i = 0; i < 16; i++) {
			ipad[i] = bkey[i] ^ 0x36363636;
			opad[i] = bkey[i] ^ 0x5C5C5C5C;
		}

		var hash = core_md5(ipad.concat(str2binl(data)), 512 + data.length
						* chrsz);
		return core_md5(opad.concat(hash), 512 + 128);
	}

	/*
	 * Add integers, wrapping at 2^32. This uses 16-bit operations internally to
	 * work around bugs in some JS interpreters.
	 */
	function safe_add(x, y) {
		var lsw = (x & 0xFFFF) + (y & 0xFFFF);
		var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
		return (msw << 16) | (lsw & 0xFFFF);
	}

	/*
	 * Bitwise rotate a 32-bit number to the left.
	 */
	function bit_rol(num, cnt) {
		return (num << cnt) | (num >>> (32 - cnt));
	}

	/*
	 * Convert a string to an array of little-endian words If chrsz is ASCII,
	 * characters >255 have their hi-byte silently ignored.
	 */
	function str2binl(str) {
		var bin = Array();
		var mask = (1 << chrsz) - 1;
		for (var i = 0; i < str.length * chrsz; i += chrsz)
			bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << (i % 32);
		return bin;
	}

	/*
	 * Convert an array of little-endian words to a string
	 */
	function binl2str(bin) {
		var str = "";
		var mask = (1 << chrsz) - 1;
		for (var i = 0; i < bin.length * 32; i += chrsz)
			str += String.fromCharCode((bin[i >> 5] >>> (i % 32)) & mask);
		return str;
	}

	/*
	 * Convert an array of little-endian words to a hex string.
	 */
	function binl2hex(binarray) {
		var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
		var str = "";
		for (var i = 0; i < binarray.length * 4; i++) {
			str += hex_tab
					.charAt((binarray[i >> 2] >> ((i % 4) * 8 + 4)) & 0xF)
					+ hex_tab.charAt((binarray[i >> 2] >> ((i % 4) * 8)) & 0xF);
		}
		return str;
	}

	/*
	 * Convert an array of little-endian words to a base-64 string
	 */
	function binl2b64(binarray) {
		var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
		var str = "";
		for (var i = 0; i < binarray.length * 4; i += 3) {
			var triplet = (((binarray[i >> 2] >> 8 * (i % 4)) & 0xFF) << 16)
					| (((binarray[i + 1 >> 2] >> 8 * ((i + 1) % 4)) & 0xFF) << 8)
					| ((binarray[i + 2 >> 2] >> 8 * ((i + 2) % 4)) & 0xFF);
			for (var j = 0; j < 4; j++) {
				if (i * 8 + j * 6 > binarray.length * 32)
					str += b64pad;
				else
					str += tab.charAt((triplet >> 6 * (3 - j)) & 0x3F);
			}
		}
		return str;
	}
	
	return {
		/* 
		 * @param {Object} config
		 * id: for show login panel
		 * home: ex www.kaoyan007
		 * open: false
		 * useButton: false
		 * useMyButton: false
		 * usernameTabStr: '用户名：',
		 * passwordTabStr: '密码：',
		 * loginStr: '登录'
		 * registerStr: '注册',
		 * useRegister: false
		 * internalSuffix : '' //获取机构学员后缀
		 * useSaveUser : false //记住我 功能
		 * useAutoLogin : false //一周内自动为我登陆
		 */
		init: function(cfg) {			
			cfg.home = trim(cfg.home);
			cfg.avoidAutoRedirect = cfg.avoidAutoRedirect == true ? true : false; //阻止程序默认的登录后跳转
			config = cfg;
			
			if (cfg.home) {
				home = cfg.home.indexOf('http://') > -1 ? cfg.home : ('http://' + cfg.home);
			}
			open = false; //cfg.open || false  暂时关闭令弹出的功能
			useRegister = cfg.useRegister || false;
			useButton = cfg.useButton || false;
			useMyButton = cfg.useMyButton || false;
			
			internalSuffix = cfg.internalSuffix ; //获取机构学员后缀
			useSaveUser = cfg.useSaveUser || false;//获取记住我参数配置
			useAutoLogin = cfg.useAutoLogin || false;//获取使用一周内自动为我登陆参数配置
			
			if (typeof(cfg.usernameTabStr) != 'undefined') {
				usernameTabStr = cfg.usernameTabStr;
			}
			if (typeof(cfg.passwordTabStr) != 'undefined') {
				passwordTabStr = cfg.passwordTabStr;
			}
			if (typeof(cfg.loginStr) != 'undefined') {
				loginStr = cfg.loginStr;
			}
			if (typeof(cfg.registerStr) != 'undefined') {
				registerStr = cfg.registerStr;
			}
			
			var mainDiv = document.getElementById(cfg.id);
			if (mainDiv) {
				formLogin();
				mainDiv.innerHTML += loginInfo;
				if(typeof cfg.renderCallback === 'function') {
					cfg.renderCallback();
				}
			}
    		
    		// 取cookie
    		var result;
    		cookieUsername = (result = new RegExp('(?:^|; )' + encodeURIComponent('SA') + '=([^;]*)').exec(document.cookie)) ? result[1] : null;
			
			if (useSaveUser && cookieUsername) {
				username.value =cookieUsername;
				document.getElementById('J_rememberMe_'+ timeRand).checked = true;
			}
		},
		login: login,
		register: register,
		redirect: redirect,
		responseEnter: responseEnter,
		loginFail: loginFail,
		_loginCallback: _loginCallback,
		checkCookie: checkCookie,
		checkLogin: checkLogin,
		getLoginCookieName: function() {
			return LOGIN_COOKIE_NAME;
		},
		getTimeStamp: function(){
			return timeRand;
		}
	};
})();

