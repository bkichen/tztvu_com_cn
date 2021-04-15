var i18nCodeData=jQuery.fn.countryCodeMap,i18nCodeDataEn=jQuery.fn.countryCodeMapEn,i18nCodeDataTw=jQuery.fn.countryCodeMapTw,Dropdown=jQuery.fn.Dropdown;
var I18nCodeSelect={initialize:function(e){
var f=this;
f.container=jQuery(e.container);
f.container.addClass(e.className);
var c;
if(e.lang=='en')
{
c=i18nCodeDataEn;
}
else if(e.lang=='tw')
{
c=i18nCodeDataTw;
}
else{
c=i18nCodeData;
}
var d=JSON.parse(JSON.stringify(c));
if(e.render&&typeof e.render)
{
e.renderHtml='';
jQuery.each(e.data,function(g,h){
e.renderHtml+=e.render(h);
});
}
e.dropdownInputClass=e.dropdownInputClass||'qy_inputText';
if(e.data.length>0)
{
f.container.html(e.tpl(e));
}
var a=f.container.find('.'+this.getSplitClass(e.dropDownClass));
var b=f.container.find('.'+this.getSplitClass(e.dropDownMenuClass));
this.$dropDownInput=this.container.find('.'+this.getSplitClass(e.dropdownInputClass));
this.$dropDownInput.attr('autocomplete','off');
f.$dropDown=a;
f.$dropdownMenu=b;
if(e.disabled)
{
f.$dropDown.attr('disabled','disabled');
}
f._data={};
this.bindData(f.opt);
this.bindEvent(f.opt);
jQuery.map(d,function(g){
g.value=g.code;
g.text=g.name;
g.name=g.text+' +'+g.code;
return g;
});
this.renderList(d);
},bindEvent:function(a){
var b=this;
this.$dropDownInput.on('keyup',jQuery.debounce(100,true,function(c,f){
if(c.which==40||c.which==38||c.which==13||b.$dropdownMenu.is(':hidden'))
{
c.preventDefault();
return;
}
if(!f)
{
f=b.getText().trim();
}
if(!f)
{
b.$dropdownMenu.find('.'+b.getSplitClass(a.menuItemClass)).show();
return;
}
var d=false;
b.$dropdownMenu.find('.'+b.getSplitClass(a.menuItemClass)).each(function(g){
var e=jQuery(this);
if(e.find('.qy_dropdownMenu_itemLink_text').text().indexOf(f)!=-1)
{
e.show();
d=true;
}
else{
e.hide();
}
});
if(!d)
{
b.$dropdownMenu.find('.'+b.getSplitClass(a.menuItemClass)).show();
}
}));
this.$dropDownInput.on('click',function(c){
if(!b.$dropdownMenu.is(':hidden'))
{
c.stopPropagation();
}
});
this.bindBaseEvent.apply(this,arguments);
},setText:function(a){
this.$dropDownInput.val(a);
},getText:function(){
return this.$dropDownInput.val();
},isValidCode:function(a){
var b=false;
this.opt.data.forEach(function(c){
if(c.code==a)
{
b=true;
}
});
return b;
},isValidMobile:function(a,b){
if(a.value==86)
{
return b.length==11;
}
return true;
},_onShow:function(){
this.$dropDownInput.focus();
this.opt.onShow&&this.opt.onShow();
},_onHide:function(){
var a=this;
this.opt.onHide&&this.opt.onHide();
setTimeout(function(){
a.$dropdownMenu.find('.'+a.getSplitClass(a.opt.menuItemClass)).show();
a.scrollToSelectedItem();
a.$dropdownMenu.find('.qy_dropdownMenu_item_Hover').removeClass('qy_dropdownMenu_item_Hover');
},0);
}};
jQuery.fn.countryCodeDropdown=I18nCodeSelect;
