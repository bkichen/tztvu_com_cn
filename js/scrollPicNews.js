function AutoScroll(){
	var _scroll = $("#index_slidePicNews>ul");
	//ul往左边移动300px
	_scroll.animate({marginLeft:"-153px"},1000,function(){
	//把第一个li丢最后面去
	_scroll.css({marginLeft:0}).find("li:first").appendTo(_scroll);
	});
}
$(function(){
	//两秒后调用
	var _scrolling=setInterval("AutoScroll()",3000);
	$("#slide>ul").hover(function(){
		//鼠标移动DIV上停止
		clearInterval(_scrolling);
	},function(){
		//离开继续调用
		_scrolling=setInterval("AutoScroll()",3000);
	});
});