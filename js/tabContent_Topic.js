<!--
//切换到相关页
function gopage(n) 
{
  var tag = document.getElementById("index_tabContent_menu").getElementsByTagName("li");
  var taglength = tag.length;

  for (i=1;i<=taglength;i++)
  {
    document.getElementById("m"+i).className="";
    document.getElementById("c"+i).style.display='none';
  }
    document.getElementById("m"+n).className="on";
    document.getElementById("c"+n).style.display='';
}
//-->