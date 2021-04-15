var curIndex=0;
var timeInterval=3000; //切换时间 3000ms = 3秒 可以修改
var arr=new Array();
arr[0]="images/picture1.png"; //这里的是图片存放的相对路径 可以修改的
arr[1]="images/picture2.png";
arr[2]="images/picture3.png";
arr[3]="images/picture4.png";
setInterval(changeImg,timeInterval);
function changeImg()
{
    var obj=document.getElementById("obj");
    if (curIndex==arr.length-1)
    {
        curIndex=0;
    }
    else
    {
        curIndex+=1;
    }
    obj.src=arr[curIndex];
}
