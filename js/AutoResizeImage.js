// JavaScript Document
function ImgZoom(Id)
{
var w = Id.width;
var m = 680;

	if(w < m)
		{
		return;
		}
	else
		{
		var h = Id.height;
		Id.height = parseInt(h*m/w);
		Id.width = m;
		}

}

window.onload = function()
{
var Imgs = document.getElementById('info_InfoBox_C').getElementsByTagName("img");
var i=0;
for(;i<Imgs.length;i++)
	{
	ImgZoom(Imgs[i]);
	}
}