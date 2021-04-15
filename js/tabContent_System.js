$(function(){		
	//设计案例切换
	$('.title-list li').mouseover(function(){
		var liindex = $('.title-list li').index(this);
		$(this).addClass('on').siblings().removeClass('on');
		$('.scrtvuSystem-wrap div.scrtvuSystem').eq(liindex).fadeIn(150).siblings('div.scrtvuSystem').hide();
		var liWidth = $('.title-list li').width();
		$('.index_system .title-list p').stop(false,true).animate({'left' : liindex * liWidth + 'px'},300);
	});
	
	//设计案例hover效果
	$('.scrtvuSystem-wrap .scrtvuSystem li').hover(function(){
		$(this).css("border-color","#ff6600");
		$(this).find('p > a').css('color','#ff6600');
	},function(){
		$(this).css("border-color","#fafafa");
		$(this).find('p > a').css('color','#666666');
	});
	});