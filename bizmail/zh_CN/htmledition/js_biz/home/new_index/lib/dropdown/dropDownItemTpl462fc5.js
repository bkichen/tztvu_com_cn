var nano=jQuery.fn.nano;
function dropDownItemTpl(b)
{
var c=['<ul>'].join('');
var a=['<li data-value="{value}" data-index="{index}" class="qui_dropdownMenu_item '+b.menuItemClass+'">','<a href="javascript:;" class="qui_dropdownMenu_itemLink '+b.menuItemLinkClass+'">','<span class="qy_commonImg qy_commonImg_TimePickerChecked"></span>','<span class="qy_dropdownMenu_itemLink_text">{name}</span>','</a>','</li>'].join('');
jQuery.each(b.data,function(d,e){
e.index=d;
c+=nano(a,e);
});
c+=['</ul>'];
return c;
}
jQuery.fn.dropDownItemTpl=dropDownItemTpl;
