// JavaScript Document

jQuery.fn.imageScroller = function(params){
	var p = params || {
		next:"buttonNext",
		prev:"buttonPrev",
		frame:"viewerFrame",
		scrolltime:1000,
		width:220,
		child:"a",
		auto:true
	}; 
	var _btnNext = $("#"+ p.next);
	var _btnPrev = $("#"+ p.prev);
	var _imgFrame = $("#"+ p.frame);
	var _width = p.width;
	var _height = p.height;
	var _child = p.child;
	var _auto = p.auto;
	var _itv;
	var _scrolltime=p.scrolltime;
	var _turndirection=p.turndirection;

	
	var turnLeft = function(){
		_btnPrev.unbind("click",turnLeft);
		if(_auto) autoStop();
		_imgFrame.animate( {marginLeft:-_width}, 'slow', '', function(){
			_imgFrame.find(_child+":first").appendTo( _imgFrame );
			_imgFrame.css("marginLeft",0);
			_btnPrev.bind("click",turnLeft);
			if(_auto) autoPlay();
		});
	};
	
	var turnRight = function(){
		_btnNext.unbind("click",turnRight);
		if(_auto) autoStop();
		_imgFrame.find(_child+":last").clone().show().prependTo( _imgFrame );
		_imgFrame.css("marginLeft",-_width);
		_imgFrame.animate( {marginLeft:0}, 'slow' ,'', function(){
			_imgFrame.find(_child+":last").remove();
			_btnNext.bind("click",turnRight);
			if(_auto) autoPlay(); 
		});
	};
	
	
	var turnTop = function(){
		_btnPrev.unbind("click",turnTop);
		if(_auto) autoStop();
		_imgFrame.animate( {marginTop:-_height}, 'slow', '', function(){
			_imgFrame.find(_child+":first").appendTo( _imgFrame );
			_imgFrame.css("marginTop",0);
			_btnPrev.bind("click",turnTop);
			if(_auto && _turndirection=='turnTop') autoTopPlay();
		});

	};
	
	_btnNext.css("cursor","hand").click( turnRight );
	_btnPrev.css("cursor","hand").click( turnLeft );
	
	var autoPlay = function(){
	  _itv = window.setInterval(turnLeft, _scrolltime);
	};
	var autoTopPlay = function(){
	  _itv = window.setInterval(turnTop, _scrolltime);
	};
	var autoStop = function(){
		window.clearInterval(_itv);
	};
	if(_auto && _turndirection=='turnTop'){
			autoTopPlay();
		}else{ autoPlay();}
	};

	
	$(function(){
		$("#index_3Row_C").imageScroller({
			next:"caseleft3",
			prev:"caseright3",							
			frame:"case_wrap3",
			width:230,
			child: "a",
			auto: true,
			scrolltime:3000
		});
	});
	
	$(function(){
		$("#index_4Row_C").imageScroller({
			next:"caseleft",
			prev:"caseright",							
			frame:"case_wrap",
			width:230,
			child: "a",
			auto: true,
			scrolltime:3000
		});
	});