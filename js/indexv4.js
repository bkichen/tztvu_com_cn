var CEAT_SERVER = 'http://study.enaea.edu.cn/',
	PASSPORT_SERVER = 'http://passport.enaea.edu.cn/',
	CEAT_CMS_SERVER = 'http://www.enaea.edu.cn/';
$.ajaxSetup({
	jsonp: 'jsonp',
	cache: false,
	jsonpCallback: function() {
		return 'ablesky_' + jQuery.now();
	}
});
$(function() {
	 var $ns = $(".container .index"),
		$slides = $(".slide-list li",$ns),
		$slideNums = $(".slide-news .slide-num li",$ns),
		slideLen = $slides.length,
		slideTimer = null;
	
//alert('indevv3')
	// login module init
	checkUser(function(data){
		if(!data.ASUSS) {	// currently not online
			initLogin();
		} else {	// currently is online, write the cookie to ceat.
			getCurrentUser(data.ASUSS, function(data){
				if(data && data.username && 'GUEST' != data.username) {
					showWelcomInfo(data);
				} else {
					initLogin(); // 当前登录用户仅存在于ajaxableskydb中，不是行政学院的用户
				}
			});
		}
	});
	function initLogin(){
		AbleSky_Api_Login.init({
			id: 'J_loginMain',
			//home: CEAT_SERVER + 'myOffice.do', //登录成功后要跳转的页面
			avoidAutoRedirect: true, //阻止程序在登录后自动跳转(默认是跳转到home指定的页面)
			useRegister: false,
			useMyButton: true,
			useSaveUser: true,
			useAutoLogin :false,
			open: false, //whether open a new window,is set to false, will jump to the url defined by home
			renderCallback: function() {//will be invoke after login				
				//analog placeholder
				var $nameInput = $(".name-input",$ns),
					$pwdInput = $(".psd-input",$ns);
				$nameInput.before('<label id="nameTip" class="input-label name-label" for="'+ $nameInput.attr('id') +'">用户名/邮箱</label>');
				$pwdInput.before('<label id="pwdTip" class="input-label pwd-label" for="'+ $pwdInput.attr('id') +'">请输入密码</label>');

				$(".name-input,.psd-input",$ns).live({
					focus: function() {
						var $this = $(this),
							$label = $this.prev("label"),
							isEmpty = $.trim($this.val()).length == 0;

						if(isEmpty) {
							$label.hide();
						}
					},
					blur: function() {
						var $this = $(this),
							$label = $this.prev("label"),
							isEmpty = $.trim($this.val()).length == 0;
						if(isEmpty) {
							$label.show();
						}
					}
				});
			},
			loginCallback: function() {
				checkUser(function(data){
					if(data.ASUSS) {
						fetchCookie(data);
					}
				});
			}
		});	
	}
	
	function fetchCookie(data){	
		var ASUSS = data.ASUSS;
		getCurrentUser(ASUSS, function(data){
			if(data.username == 'GUEST' && ASUSS){
				getCurrentUser(ASUSS, function(data){
					redirectToStudy(data);
				});
			} else {
				redirectToStudy(data);
			}
		});
	}
	
	function redirectToStudy(data){
		//myOffice.do会判断当前用户是否为管理员,若是则跳转到系统后台
		window.location.href = data.organizationId == 0 ? (CEAT_SERVER + 'studyCenterRedirect.do?action=showCourseList&username=' + data.username ) : (CEAT_SERVER + 'myOffice.do');
	}

	//从AS域名上获取ASUSS
	function checkUser(callbackFn) {
		!$.isFunction(callbackFn) && (callbackFn = $.noop());
		$.ajax({
			url: PASSPORT_SERVER + 'check.do?action=check',
			dataType: 'jsonp'
		}).done(callbackFn);
	}

	//将ASUSS写入独立域名
	function getCurrentUser(ASUSS, callbackFn) {
		!$.isFunction(callbackFn) && (callbackFn = $.noop);
		var url = CEAT_SERVER + 'getCurrentUser.do?_=' + jQuery.now();
		if(ASUSS) {
			url += '&ASUSS=' + ASUSS;
		}
		//debugger;
		$.ajax({
			url: url,
			dataType: 'jsonp'
		}).done(callbackFn);
	}
	
	function showWelcomInfo(data) {
		//alert($.cookie("ASUSS"))	
		//var $welcome = $("#J_welcomeInfo",$ns);
		var btn_value =  data.organizationId == 0 ? '个人空间' : '系统后台',
			btn_url = data.organizationId == 0 ? (CEAT_SERVER + 'studyCenterRedirect.do?action=showCourseList&username='+ data.username ) : (CEAT_SERVER + 'myOffice.do'); //myOffice.do会判断当前用户是否为管理员,若是则跳转到系统后台
		//$('.username',$welcome).text(data.username);
		//var btn_out = <a href='http://passport.enaea.edu.cn/logout.do'>退出</a>;
		//btn_value=btn_value+btn_out;
		//$('.text',$ns).append('<a href="javascript:void(0);" id="J_logout" class="log-out">&nbsp;&nbsp;[退出]</a>');
		//$("#loginAbleSky").html("<a></a><span>|</span><a href='http://passport.enaea.edu.cn/logout.do'>退出</a>");
		//$("#loginAbleSky").text(btn_value).attr('href', btn_url);	

		//$("#J_loginMain",$ns).hide();
		//$welcome.show();		
		 $("#loginAbleSky").html("<a href="+btn_url+">"+btn_value+"</a><span>|</span><a href='http://passport.enaea.edu.cn/logout.do'>退出</a>");
	    
	}

	//log out
	$("#J_logout",$ns).live("click",function() {
		//$.cookie('LOGIN_USRE_NAME',null);
		var ref = encodeURIComponent(CEAT_SERVER);
		var callbackUrl = encodeURIComponent(CEAT_CMS_SERVER);
		window.location.href = PASSPORT_SERVER +'logout.do?ref=' + ref + '&callbackUrl=' + callbackUrl;
	});
	/*End login.*/

	/* init slide */
	$slideNums.click(function() {
		var $this = $(this);
		var idx = parseInt($.trim($this.html())) -1; //idx starts from 0
		$slideNums.removeClass("current");
		$this.addClass("current");
		$($slides.removeClass("current").get(idx)).addClass("current");
		//??μ?ò???D?μ?í???oó,òaè·±￡?a??D?í?????ê?5??,?òDèòa?????°μ?timer????
		resetSlideTimer()
	});

	function changeSlide(current) {
		//if nextIdx is not provided, calculates it from the current one
		if(typeof current === 'undefined' || typeof current != 'number') {			
			var $numList = $(".slide-news .slide-num",$ns);
			var $currentNumDom = $("li.current",$numList) || $("li:first",$numList);
			current = parseInt($.trim($currentNumDom.html()));
		}

		var next = current == slideLen ? 1 : (current+1),
			nextIdx = next -1; //index starts form 0
		
		//do change
		$($slideNums.removeClass("current").get(nextIdx)).addClass("current");
		$($slides.removeClass("current").get(nextIdx)).addClass("current");
	}

	function resetSlideTimer() {
		clearInterval(slideTimer);
		slideTimer = setInterval(changeSlide,5000);
	}

	//auto change slide per 5 sec
	slideTimer = setInterval(changeSlide,5000);
	/*-----End slide.-------*/

	//tab switch
	$("a.tab", $ns).live({
		mouseenter: function() {
			var $this = $(this);
			$this.addClass("current").siblings(".tab").removeClass("current");
			$("#"+$this.attr('data-area'), $ns).addClass("current").siblings('.tab-content').removeClass("current");
		}
	});

	//expert matrix: expert switch per 3 sec
	var $expertsContainer = $(".expert-matrix ",$ns),
		$experts = $(".expert",$expertsContainer),			
		expertNum = $experts.length;
	function switchExpert (speed) {
		var $currentExpert = $(".expert.current",$expertsContainer),
			$next = $currentExpert.next(),
			$next =  $next.is(".expert")? $next : $(".expert:first",$expertsContainer);
		
		$next.addClass("current").siblings().removeClass("current");
	};
	setInterval(switchExpert,3000);

	$(".photo-gallery-wrap", $ns).each(function() {
		var $photoGalleryContainer = $(this),
			$photoGallery = $("ul.photo-gallery",$photoGalleryContainer), 
			photoNum = $("li",$photoGallery).length,
			containerWidth = $photoGalleryContainer.width(),
			$photos = $("li",$photoGallery),			
			photoMarginRightStr = $photos.css("margin-right"),
			photoMarginRight = parseInt(photoMarginRightStr.substring(0,photoMarginRightStr.indexOf('px'))),
			photoOuterWidth = $photos.width() + photoMarginRight,
			maxShowNum = containerWidth / photoOuterWidth; //??ê???óò?éí?ê±??ê?μ?×??àí???êy
		
		var doScroll = function() {
			var $firstPhoto = $('li:first', $photoGallery);							
			$photoGallery.animate({
				left: -photoOuterWidth
			}, 6000, 'linear',function() {
				// ??μúò????a??2?è?μ?×?oóò????a????oó	
				$photoGallery.append($firstPhoto);
				$photoGallery.css('left', 0);
				doScroll(); //continue animate
			});
		};
				
		var startAnimate = function() {			
			doScroll();
		};
		
		var stopAnimate = function() {
			$photoGallery.stop();
		};
		
		if(photoNum > maxShowNum) { //×ó????μ?×üêyòa′óóú??ê???óò×??à?é??ê?μ?×ó????êy￡?·??ò1??ˉê±?22??á3?????°×
	    	$('li', $photoGallery).hover(function() {
				stopAnimate();
			}, function() {
				startAnimate();
			});
		    //?aê?1??ˉ
			startAnimate();
		} 
	});
});
