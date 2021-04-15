var tpl=jQuery.fn.dropDownTpl;
var listTpl=jQuery.fn.dropDownItemTpl;
var _opt={label:'\u8BF7\u9009\u62E9',data:[],callback:jQuery.noop,render:jQuery.noop,delay:500,disabled:false,dropDownClass:'qy_btn_Dropdown',dropDownMenuClass:'qy_dropdownMenu',menuItemClass:'qy_dropdownMenu_item',menuItemLinkClass:'qy_dropdownMenu_itemLink',menuItemLinkLabelClass:'qy_dropdownMenu_itemLink_text',labelClass:'qy_btn_Dropdown_label',selectedClass:'qy_dropdownMenu_item_Curr',className:'qy_btnWithMenu'};
function Dropdown(a)
{
this.opt=jQuery.extend(true,{tpl:tpl,listTpl:listTpl},_opt,a);
this.initialize(this.opt);
return this;
}
Dropdown.prototype={initialize:function(e){
var f=this;
f.container=jQuery(e.container);
f.container.addClass(e.className);
if(e.render&&typeof e.render)
{
e.renderHtml='';
jQuery.each(e.data,function(g,h){
e.renderHtml+=e.render(h);
});
}
var c='.'+this.getSplitClass(e.dropDownClass);
var d='.'+this.getSplitClass(e.dropDownMenuClass);
var a=f.container.find(c);
var b=f.container.find(d);
if(!a.length||!b.length)
{
f.container.html(e.tpl(e));
a=f.container.find(c);
b=f.container.find(d);
}
f.$dropDown=a;
f.$dropdownMenu=b;
if(e.data.length>0)
{
f.renderList(e.data);
}
if(e.disabled)
{
f.$dropDown.attr('disabled','disabled');
}
f._data={};
this.bindData(f.opt);
this.bindEvent(f.opt);
},setDataValue:function(a){
if(!a||typeof a!='object')
a={name:a};
if(a.value===undefined)
{
a.value=a.name;
}
if(isNaN(a.index))
{
a.index=-1;
}
this._data=a;
this.$dropDown.find('.'+this.opt.labelClass).text(a.name);
},bindBaseEvent:function(a){
var c=this;
var b=false;
c.$dropDown.on('click',function(){
if(c.$dropDown.attr('disabled')=='disabled')
{
return;
}
c.$dropdownMenu.toggle();
if(c.$dropdownMenu.is(':hidden'))
{
c._onHide();
}
else{
c._onShow();
}
b=true;
});
this._id='dropdown_'+Math.floor(Math.random()*10000)+1;
jQuery(document).on('click.'+this._id,function(d){
if(!b)
{
c.hideDropdowns();
}
b=false;
});
c.$dropdownMenu.on('click','.'+this.getSplitClass(a.menuItemClass),function(g,h){
if(jQuery(g.target).attr('disabled')=='disabled'||jQuery(g.target).parents('.'+a.menuItemClass).attr('disabled')=='disabled')
{
b=true;
return;
}
var d=jQuery(this);
var f={value:d.data('value'),name:d.find('.'+a.menuItemLinkLabelClass).text()||d.text().trim(),index:d.data('index')};
if(f.value==undefined)
{
f.value=f.name;
}
if(c._data.value==undefined||(c._data.value!=undefined&&c._data.value!==f.value))
{
c.$dropdownMenu.find('.'+a.selectedClass).removeClass(a.selectedClass);
d.addClass(a.selectedClass);
c.setDataValue(f);
if(a.onChange&&typeof a.callback=='function'&&(!h||h.silent!=true))
{
a.onChange.call(jQuery(this),f);
}
}
b=false;
c.hideDropdowns();
g.stopPropagation();
});
c.$dropdownMenu.on('mouseover',function(f){
if(c.isScrolling)
{
c.isScrolling=false;
return;
}
c.$dropdownMenu.find('.qy_dropdownMenu_item_Hover').removeClass('qy_dropdownMenu_item_Hover');
var d=jQuery(f.target).parents('.qy_dropdownMenu_item');
if(d.hasClass('qy_dropdownMenu_item'))
{
d.addClass('qy_dropdownMenu_item_Hover');
}
});
c.$dropdownMenu.on('mouseout',function(f){
var d=jQuery(f.target).parents('.qy_dropdownMenu_item');
if(d.hasClass('qy_dropdownMenu_item'))
{
d.removeClass('qy_dropdownMenu_item_Hover');
}
});
c.$dropDown.on('keydown',jQuery.debounce(100,true,function(d,f){
if(d.which==40||d.which==38||d.which==13)
{
d.preventDefault();
c.processkeyborad(d.which);
return;
}
}));
c.$dropDown.on('keyup',function(d,f){
if(d.which==13)
{
d.stopPropagation();
}
});
c.$dropDown.on('keydown',function(d,f){
if(d.which==13)
{
d.stopPropagation();
}
});
},bindData:function(){
var b=this;
if(this.$dropdownMenu.length>0)
{
var a=0;
this.$dropdownMenu.find('.'+this.getSplitClass(this.opt.menuItemClass)).each(function(e){
var c=jQuery(this);
c.data('index',a);
c.attr('data-index',a);
var d=c.find('.'+b.opt.menuItemLinkLabelClass).text()||c.text().trim();
if(c.hasClass(b.opt.selectedClass))
{
b._data.value=c.data('value');
b._data.index=a;
b._data.name=d;
}
if(c.attr('data-value')==undefined)
{
c.attr('data-value',d);
}
a++;
});
}
},bindEvent:function(){
},renderList:function(a){
this.opt.data=a;
this.$dropdownMenu.html(this.opt.listTpl(this.opt));
},processkeyborad:function(c){
var a=this.$dropdownMenu.find('.qy_dropdownMenu_item_Hover:visible');
if(a.length==0)
{
a=this.$dropdownMenu.find('.'+this.opt.selectedClass+':visible');
}
if(c==13&&a.length==0)
{
var i=this.getText(),d=[],h=this.$dropdownMenu.find('.'+this.opt.menuItemClass+':visible');
if(h.length==1)
{
d=[h];
}
else{
h.each(function(){
if(jQuery(this).attr('data-value')==i)
{
d.push(jQuery(this));
}
});
}
if(d.length==1)
{
a=d[0];
}
else{
return;
}
}
var b=[];
switch(c)
{case 38:
if(a.length==0)
{
b=a=this.$dropdownMenu.find('.'+this.opt.menuItemClass+':visible:last');
}
else{
b=a.prevAll().filter(':visible:eq(0)');
}
break;
case 40:
if(this.$dropdownMenu.is(':hidden'))
{
this.$dropdownMenu.show();
a=this.$dropdownMenu.find('.'+this.opt.selectedClass+':visible');
break;
}
if(a.length==0)
{
b=a=this.$dropdownMenu.find('.'+this.opt.menuItemClass+':visible:eq(0)');
}
else{
b=a.nextAll().filter(':visible:eq(0)');
}
break;
case 13:
a.trigger('click');
this.$dropDown.blur();
return;
}if(b.length==0&&a.length!=0)
{
b=a;
}
if(b.length!=0)
{
a.removeClass('qy_dropdownMenu_item_Hover');
b.addClass('qy_dropdownMenu_item_Hover');
var e=b.position();
var g=this.$dropdownMenu.scrollTop();
var f=this.$dropdownMenu.height();
if(e.top+b.height()-5>f||e.top<-5)
{
this.$dropdownMenu.scrollTop(g+e.top-100);
this.isScrolling=true;
}
}
},hideDropdowns:function(){
var a=this;
if(!a.$dropdownMenu.is(':hidden'))
{
a.$dropdownMenu.hide();
a._onHide();
}
},scrollToSelectedItem:function(){
if(!this.$dropdownMenu.length)
{
return;
}
this.$dropdownMenu.css('visibility','hidden');
this.$dropdownMenu.show();
var a=this.$dropdownMenu.find('.'+this.opt.selectedClass).position();
if(!a)
{
this.$dropdownMenu.hide();
this.$dropdownMenu.css('visibility','inherit');
return;
}
var c=this.$dropdownMenu.scrollTop();
var b=this.$dropdownMenu.height();
if(a.top>b||a.top<0)
{
this.$dropdownMenu.scrollTop(c+a.top-100);
}
this.$dropdownMenu.hide();
this.$dropdownMenu.css('visibility','inherit');
},reset:function(){
this.$dropdownMenu.find('.'+this.opt.selectedClass).removeClass(this.opt.selectedClass);
this.$dropDown.find('.'+this.opt.labelClass).text(this.opt.label);
this._data={};
},select:function(a,b){
this.$dropdownMenu.find('.'+this.getSplitClass(this.opt.menuItemClass)+"[data-index='"+a+"']").trigger('click',b);
this.scrollToSelectedItem();
},selectByValue:function(b,a){
this.$dropdownMenu.find('.'+this.getSplitClass(this.opt.menuItemClass)+"[data-value='"+b+"']").trigger('click',a);
this.scrollToSelectedItem();
},selectByName:function(c,b){
var a;
this.$dropdownMenu.find('.'+this.getSplitClass(this.opt.menuItemClass)+' .'+this.opt.menuItemLinkLabelClass).each(function(){
if(this.innerText==c)
{
a=jQuery(this);
}
});
a&&a.trigger('click',b);
this.scrollToSelectedItem();
},getValue:function(){
return this._data;
},getSplitClass:function(a){
return (a||'').split(/\s+/)[0];
},setLabel:function(a){
this.$dropDown.find('.'+this.opt.labelClass).text(a);
},destroy:function(){
jQuery(document).off('click.'+this._id);
},enable:function(){
this.opt.disabled=false;
this.$dropDown.removeAttr('disabled');
return this;
},disable:function(){
this.opt.disabled=true;
this.$dropDown.attr('disabled','disabled');
return this;
},_onHide:function(){
var a=this;
this.opt.onHide&&this.opt.onHide();
a.container.removeClass('qy_btnWithMenu_Open');
setTimeout(function(){
a.scrollToSelectedItem();
a.$dropdownMenu.find('.qy_dropdownMenu_item_Hover').removeClass('qy_dropdownMenu_item_Hover');
},0);
},_onShow:function(){
this.container.addClass('qy_btnWithMenu_Open');
this.opt.onShow&&this.opt.onShow();
},extend:function(){
this.opt=jQuery.extend(true,{tpl:tpl,listTpl:listTpl},this,opt);
this.initialize(this.opt);
}};
Dropdown.extend=function(a){
this.prototype=jQuery.extend(true,{tpl:tpl,listTpl:listTpl},this.prototype,a);
return this;
};
jQuery.fn.Dropdown=Dropdown;
