(function(d,c){
'$:nomunge';
var a=d.jQuery||d.Cowboy||(d.Cowboy={}),b;
a.throttle=b=function(g,i,e,f){
var j,h=0;
if(typeof i!=='boolean')
{
f=e;
e=i;
i=c;
}
function k()
{
var p=this,n=+new Date()-h,l=arguments;
function o()
{
h=+new Date();
e.apply(p,l);
}
function m()
{
j=c;
}
if(f&&!j)
{
o();
}
j&&clearTimeout(j);
if(f===c&&n>g)
{
o();
}
else if(i!==true)
{
j=setTimeout(f?m:o,f===c?g-n:g);
}
}
if(a.guid)
{
k.guid=e.guid=e.guid||a.guid++;
}
return k;
};
a.debounce=function(g,e,f){
return f===c?b(g,e,false):b(g,f,e!==false);
};
})(this);
