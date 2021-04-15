var nano=jQuery.fn.nano;
function dropDownTpl(b)
{
var d;
var c=['<a class="qui_btn qy_btn {dropDownClass}" href="javascript:;">','<span class="{labelClass}">{label}</span>','<span class="qy_btn_Dropdown_arrow"></span>','</a>','<div class="qui_dropdownMenu {dropDownMenuClass}">','<ul>'].join('');
d=nano(c,b);
var a=['<li data-value="{value}" data-index="{index}" class="qui_dropdownMenu_item {menuItemClass}">','<a href="javascript:;" class="qui_dropdownMenu_itemLink {menuItemLinkClass}">','<span class="qy_commonImg qy_commonImg_TimePickerChecked"></span>','<span class="qy_dropdownMenu_itemLink_text">{name}</span>','</a>','</li>'].join('');
jQuery.each(b.data,function(e,f){
f.index=e;
d+=nano(a,f);
});
d+=['</ul>','</div>'];
return d;
}
jQuery.fn.dropDownTpl=dropDownTpl;
