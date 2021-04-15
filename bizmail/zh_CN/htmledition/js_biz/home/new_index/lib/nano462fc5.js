function nano(b,a)
{
return b.replace(/\{([\w\.]*)\}/g,function(g,d){
var e=d.split("."),h=a[e.shift()];
for(var c=0,f=e.length;c<f;c++)
h=h[e[c]];
return (typeof h!=="undefined"&&h!==null)?h:"";
});
}
jQuery.fn.nano=nano;
