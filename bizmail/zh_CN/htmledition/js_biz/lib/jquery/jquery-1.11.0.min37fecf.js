!function(c,d){
"object"==typeof module&&"object"==typeof module.exports?module.exports=c.document?d(c,!0):function(b){
if(!b.document)
throw new Error("jQuery requires a window with a document");
return d(b);
}:d(c);
}("undefined"!=typeof window?window:this,function(bD,bH){
var bL=[],bP=bL.slice,bT=bL.concat,bX=bL.push,b1=bL.indexOf,b5={},b8=b5.toString,ce=b5.hasOwnProperty,ch="".trim,ck={},cn="1.11.0",cq=function(c,d){
return new cq.fn.init(c,d);
},ct=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,cw=/^-ms-/,cz=/-([\da-z])/gi,cC=function(c,d){
return d.toUpperCase();
};
cq.fn=cq.prototype={jquery:cn,constructor:cq,selector:"",length:0,toArray:function(){
return bP.call(this);
},get:function(b){
return null!=b?0>b?this[b+this.length]:this[b]:bP.call(this);
},pushStack:function(c){
var d=cq.merge(this.constructor(),c);
return d.prevObject=this,d.context=this.context,d;
},each:function(c,d){
return cq.each(this,c,d);
},map:function(b){
return this.pushStack(cq.map(this,function(a,d){
return b.call(a,d,a);
}));
},slice:function(){
return this.pushStack(bP.apply(this,arguments));
},first:function(){
return this.eq(0);
},last:function(){
return this.eq(-1);
},eq:function(d){
var e=this.length,f=+d+(0>d?e:0);
return this.pushStack(f>=0&&e>f?[this[f]]:[]);
},end:function(){
return this.prevObject||this.constructor(null);
},push:bX,sort:bL.sort,splice:bL.splice},cq.extend=cq.fn.extend=function(){
var k,l,m,n,o,p,q=arguments[0]||{},r=1,s=arguments.length,t=!1;
for("boolean"==typeof q&&(t=q,q=arguments[r]||{},r++),"object"==typeof q||cq.isFunction(q)||(q={}),r===s&&(q=this,r--);s>r;r++)
if(null!=(o=arguments[r]))
for(n in o)
k=q[n],m=o[n],q!==m&&(t&&m&&(cq.isPlainObject(m)||(l=cq.isArray(m)))?(l?(l=!1,p=k&&cq.isArray(k)?k:[]):p=k&&cq.isPlainObject(k)?k:{},q[n]=cq.extend(t,p,m)):void 0!==m&&(q[n]=m));
return q;
},cq.extend({expando:"jQuery"+(cn+Math.random()).replace(/\D/g,""),isReady:!0,error:function(b){
throw new Error(b);
},noop:function(){
},isFunction:function(b){
return "function"===cq.type(b);
},isArray:Array.isArray||function(b){
return "array"===cq.type(b);
},isWindow:function(b){
return null!=b&&b==b.window;
},isNumeric:function(b){
return b-parseFloat(b)>=0;
},isEmptyObject:function(c){
var d;
for(d in c)
{
return !1;
}
return !0;
},isPlainObject:function(d){
var e;
if(!d||"object"!==cq.type(d)||d.nodeType||cq.isWindow(d))
{
return !1;
}
try{
if(d.constructor&&!ce.call(d,"constructor")&&!ce.call(d.constructor.prototype,"isPrototypeOf"))
{
return !1;
}
}
catch(f)
{
return !1;
}
if(ck.ownLast)
for(e in d)
{
return ce.call(d,e);
}
for(e in d)
;
return void 0===e||ce.call(d,e);
},type:function(b){
return null==b?b+"":"object"==typeof b||"function"==typeof b?b5[b8.call(b)]||"object":typeof b;
},globalEval:function(a){
a&&cq.trim(a)&&(bD.execScript||function(c){
bD.eval.call(bD,c);
})(a);
},camelCase:function(b){
return b.replace(cw,"ms-").replace(cz,cC);
},nodeName:function(c,d){
return c.nodeName&&c.nodeName.toLowerCase()===d.toLowerCase();
},each:function(h,i,j){
var k,l=0,m=h.length,n=cF(h);
if(j)
{
if(n)
{
for(;m>l;l++)
if(k=i.apply(h[l],j),k===!1)
break;
}
else for(l in h)
if(k=i.apply(h[l],j),k===!1)
break;
}
else if(n)
{
for(;m>l;l++)
if(k=i.call(h[l],l,h[l]),k===!1)
break;
}
else for(l in h)
if(k=i.call(h[l],l,h[l]),k===!1)
break;
return h;
},trim:ch&&!ch.call("\ufeff\xa0")?function(b){
return null==b?"":ch.call(b);
}:function(b){
return null==b?"":(b+"").replace(ct,"");
},makeArray:function(d,e){
var f=e||[];
return null!=d&&(cF(Object(d))?cq.merge(f,"string"==typeof d?[d]:d):bX.call(f,d)),f;
},inArray:function(e,f,g){
var h;
if(f)
{
if(b1)
{
return b1.call(f,e,g);
}
for(h=f.length,g=g?0>g?Math.max(0,h+g):g:0;h>g;g++)
if(g in f&&f[g]===e)
{
return g;
}
}
return -1;
},merge:function(f,g){
var h=+g.length,i=0,j=f.length;
while(h>i)
f[j++]=g[i++];
if(h!==h)
while(void 0!==g[i])
f[j++]=g[i++];
return f.length=j,f;
},grep:function(i,j,k){
for(var l,m=[],n=0,o=i.length,p=!k;o>n;n++)
l=!j(i[n],n),l!==p&&m.push(i[n]);
return m;
},map:function(e,j,k){
var l,m=0,n=e.length,o=cF(e),p=[];
if(o)
for(;n>m;m++)
l=j(e[m],m,k),null!=l&&p.push(l);
else for(m in e)
l=j(e[m],m,k),null!=l&&p.push(l);
return bT.apply([],p);
},guid:1,proxy:function(d,g){
var h,i,j;
return "string"==typeof g&&(j=d[g],g=d,d=j),cq.isFunction(d)?(h=bP.call(arguments,2),i=function(){
return d.apply(g||this,h.concat(bP.call(arguments)));
},i.guid=d.guid=d.guid||cq.guid++,i):void 0;
},now:function(){
return +new Date();
},support:ck}),cq.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(c,d){
b5["[object "+d+"]"]=d.toLowerCase();
});
function cF(d)
{
var e=d.length,f=cq.type(d);
return "function"===f||cq.isWindow(d)?!1:1===d.nodeType&&e?!0:"array"===f||0===e||"number"==typeof e&&e>0&&e-1 in d;
}
var cI=function(dr){
var dt,dv,dx,dz,dB,dD,dF,dH,dJ,dL,dN,dP,dR,dT,dV,dX,dZ,d1="sizzle"+-new Date(),d3=dr.document,d5=0,d7=0,d9=dA(),ec=dA(),ee=dA(),ef=function(c,d){
return c===d&&(dJ=!0),0;
},ad="undefined",bc=1<<31,bd={}.hasOwnProperty,cc=[],cd=cc.pop,c3=cc.push,c4=cc.push,c5=cc.slice,c6=cc.indexOf||function(d){
for(var e=0,f=this.length;f>e;e++)
if(this[e]===d)
{
return e;
}
return -1;
},c7="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",c8="[\\x20\\t\\r\\n\\f]",c9="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",da=c9.replace("w","w#"),dc="\\["+c8+"*("+c9+")"+c8+"*(?:([*^$|!~]?=)"+c8+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+da+")|)|)"+c8+"*\\]",dd=":("+c9+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+dc.replace(3,8)+")*)|.*)\\)|)",de=new RegExp("^"+c8+"+|((?:^|[^\\\\])(?:\\\\.)*)"+c8+"+$","g"),df=new RegExp("^"+c8+"*,"+c8+"*"),dg=new RegExp("^"+c8+"*([>+~]|"+c8+")"+c8+"*"),dh=new RegExp("="+c8+"*([^\\]'\"]*?)"+c8+"*\\]","g"),di=new RegExp(dd),dj=new RegExp("^"+da+"$"),dk={ID:new RegExp("^#("+c9+")"),CLASS:new RegExp("^\\.("+c9+")"),TAG:new RegExp("^("+c9.replace("w","w*")+")"),ATTR:new RegExp("^"+dc),PSEUDO:new RegExp("^"+dd),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+c8+"*(even|odd|(([+-]|)(\\d*)n|)"+c8+"*(?:([+-]|)"+c8+"*(\\d+)|))"+c8+"*\\)|)","i"),bool:new RegExp("^(?:"+c7+")$","i"),needsContext:new RegExp("^"+c8+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+c8+"*((?:-\\d)?\\d*)"+c8+"*\\)|)(?=[^-]|$)","i")},dl=/^(?:input|select|textarea|button)$/i,dm=/^h\d$/i,dn=/^[^{]+\{\s*\[native \w/,dp=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ac=/[+~]/,dq=/'|\\/g,ds=new RegExp("\\\\([\\da-f]{1,6}"+c8+"?|("+c8+")|.)","ig"),du=function(e,f,g){
var h="0x"+f-65536;
return h!==h||g?f:0>h?String.fromCharCode(h+65536):String.fromCharCode(h>>10|55296,1023&h|56320);
};
try{
c4.apply(cc=c5.call(d3.childNodes),d3.childNodes),cc[d3.childNodes.length].nodeType;
}
catch(dw)
{
c4={apply:cc.length?function(c,d){
c3.apply(c,c5.call(d));
}:function(e,f){
var g=e.length,h=0;
while(e[g++]=f[h++])
;
e.length=g-1;
}};
}
function dy(c,k,l,n)
{
var o,r,s,t,x,y,z,A,B,C;
if((k?k.ownerDocument||k:d3)!==dN&&dL(k),k=k||dN,l=l||[],!c||"string"!=typeof c)
{
return l;
}
if(1!==(t=k.nodeType)&&9!==t)
{
return [];
}
if(dR&&!n)
{
if(o=dp.exec(c))
if(s=o[1])
{
if(9===t)
{
if(r=k.getElementById(s),!r||!r.parentNode)
{
return l;
}
if(r.id===s)
{
return l.push(r),l;
}
}
else if(k.ownerDocument&&(r=k.ownerDocument.getElementById(s))&&dZ(k,r)&&r.id===s)
{
return l.push(r),l;
}
}
else{
if(o[2])
{
return c4.apply(l,k.getElementsByTagName(c)),l;
}
if((s=o[3])&&dv.getElementsByClassName&&k.getElementsByClassName)
{
return c4.apply(l,k.getElementsByClassName(s)),l;
}
}
if(dv.qsa&&(!dT||!dT.test(c)))
{
if(A=z=d1,B=k,C=9===t&&c,1===t&&"object"!==k.nodeName.toLowerCase())
{
y=dU(c),(z=k.getAttribute("id"))?A=z.replace(dq,"\\$&"):k.setAttribute("id",A),A="[id='"+A+"'] ",x=y.length;
while(x--)
y[x]=A+dW(y[x]);
B=ac.test(c)&&dQ(k.parentNode)||k,C=y.join(",");
}
if(C)
try{
return c4.apply(l,B.querySelectorAll(C)),l;
}
catch(D)
{
}
finally 
{
z||k.removeAttribute("id");
}
}
}
return ed(c.replace(de,"$1"),k,l,n);
}
function dA()
{
var c=[];
function d(a,b)
{
return c.push(a+" ")>dx.cacheLength&&delete d[c.shift()],d[a+" "]=b;
}
return d;
}
function dC(b)
{
return b[d1]=!0,b;
}
function dE(d)
{
var e=dN.createElement("div");
try{
return !!d(e);
}
catch(f)
{
return !1;
}
finally 
{
e.parentNode&&e.parentNode.removeChild(e),e=null;
}
}
function dG(d,f)
{
var g=d.split("|"),h=d.length;
while(h--)
dx.attrHandle[g[h]]=f;
}
function dI(e,f)
{
var g=f&&e,h=g&&1===e.nodeType&&1===f.nodeType&&(~f.sourceIndex||bc)-(~e.sourceIndex||bc);
if(h)
{
return h;
}
if(g)
while(g=g.nextSibling)
if(g===f)
{
return -1;
}
return e?1:-1;
}
function dK(b)
{
return function(a){
var d=a.nodeName.toLowerCase();
return "input"===d&&a.type===b;
};
}
function dM(b)
{
return function(a){
var d=a.nodeName.toLowerCase();
return ("input"===d||"button"===d)&&a.type===b;
};
}
function dO(b)
{
return dC(function(a){
return a=+a,dC(function(h,i){
var j,k=b([],h.length,a),l=k.length;
while(l--)
h[j=k[l]]&&(h[j]=!(i[j]=h[j]));
});
});
}
function dQ(b)
{
return b&&typeof b.getElementsByTagName!==ad&&b;
}
dv=dy.support={},dB=dy.isXML=function(c){
var d=c&&(c.ownerDocument||c).documentElement;
return d?"HTML"!==d.nodeName:!1;
},dL=dy.setDocument=function(c){
var d,f=c?c.ownerDocument||c:d3,h=f.defaultView;
return f!==dN&&9===f.nodeType&&f.documentElement?(dN=f,dP=f.documentElement,dR=!dB(f),h&&h!==h.top&&(h.addEventListener?h.addEventListener("unload",function(){
dL();
},!1):h.attachEvent&&h.attachEvent("onunload",function(){
dL();
})),dv.attributes=dE(function(b){
return b.className="i",!b.getAttribute("className");
}),dv.getElementsByTagName=dE(function(b){
return b.appendChild(f.createComment("")),!b.getElementsByTagName("*").length;
}),dv.getElementsByClassName=dn.test(f.getElementsByClassName)&&dE(function(b){
return b.innerHTML="<div class='a'></div><div class='a i'></div>",b.firstChild.className="i",2===b.getElementsByClassName("i").length;
}),dv.getById=dE(function(b){
return dP.appendChild(b).id=d1,!f.getElementsByName||!f.getElementsByName(d1).length;
}),dv.getById?(dx.find.ID=function(e,g){
if(typeof g.getElementById!==ad&&dR)
{
var i=g.getElementById(e);
return i&&i.parentNode?[i]:[];
}
},dx.filter.ID=function(e){
var g=e.replace(ds,du);
return function(b){
return b.getAttribute("id")===g;
};
}):(delete dx.find.ID,dx.filter.ID=function(e){
var g=e.replace(ds,du);
return function(b){
var i=typeof b.getAttributeNode!==ad&&b.getAttributeNode("id");
return i&&i.value===g;
};
}),dx.find.TAG=dv.getElementsByTagName?function(e,g){
return typeof g.getElementsByTagName!==ad?g.getElementsByTagName(e):void 0;
}:function(g,i){
var j,k=[],l=0,m=i.getElementsByTagName(g);
if("*"===g)
{
while(j=m[l++])
1===j.nodeType&&k.push(j);
return k;
}
return m;
},dx.find.CLASS=dv.getElementsByClassName&&function(e,g){
return typeof g.getElementsByClassName!==ad&&dR?g.getElementsByClassName(e):void 0;
},dV=[],dT=[],(dv.qsa=dn.test(f.querySelectorAll))&&(dE(function(b){
b.innerHTML="<select t=''><option selected=''></option></select>",b.querySelectorAll("[t^='']").length&&dT.push("[*^$]="+c8+"*(?:''|\"\")"),b.querySelectorAll("[selected]").length||dT.push("\\["+c8+"*(?:value|"+c7+")"),b.querySelectorAll(":checked").length||dT.push(":checked");
}),dE(function(e){
var g=f.createElement("input");
g.setAttribute("type","hidden"),e.appendChild(g).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&dT.push("name"+c8+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||dT.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),dT.push(",.*:");
})),(dv.matchesSelector=dn.test(dX=dP.webkitMatchesSelector||dP.mozMatchesSelector||dP.oMatchesSelector||dP.msMatchesSelector))&&dE(function(b){
dv.disconnectedMatch=dX.call(b,"div"),dX.call(b,"[s!='']:x"),dV.push("!=",dd);
}),dT=dT.length&&new RegExp(dT.join("|")),dV=dV.length&&new RegExp(dV.join("|")),d=dn.test(dP.compareDocumentPosition),dZ=d||dn.test(dP.contains)?function(e,g){
var i=9===e.nodeType?e.documentElement:e,j=g&&g.parentNode;
return e===j||!(!j||1!==j.nodeType||!(i.contains?i.contains(j):e.compareDocumentPosition&&16&e.compareDocumentPosition(j)));
}:function(e,g){
if(g)
while(g=g.parentNode)
if(g===e)
{
return !0;
}
return !1;
},ef=d?function(e,g){
if(e===g)
{
return dJ=!0,0;
}
var i=!e.compareDocumentPosition-!g.compareDocumentPosition;
return i?i:(i=(e.ownerDocument||e)===(g.ownerDocument||g)?e.compareDocumentPosition(g):1,1&i||!dv.sortDetached&&g.compareDocumentPosition(e)===i?e===f||e.ownerDocument===d3&&dZ(d3,e)?-1:g===f||g.ownerDocument===d3&&dZ(d3,g)?1:dH?c6.call(dH,e)-c6.call(dH,g):0:4&i?-1:1);
}:function(e,i){
if(e===i)
{
return dJ=!0,0;
}
var j,l=0,m=e.parentNode,n=i.parentNode,o=[e],p=[i];
if(!m||!n)
{
return e===f?-1:i===f?1:m?-1:n?1:dH?c6.call(dH,e)-c6.call(dH,i):0;
}
if(m===n)
{
return dI(e,i);
}
j=e;
while(j=j.parentNode)
o.unshift(j);
j=i;
while(j=j.parentNode)
p.unshift(j);
while(o[l]===p[l])
l++;
return l?dI(o[l],p[l]):o[l]===d3?-1:p[l]===d3?1:0;
},f):dN;
},dy.matches=function(c,d){
return dy(c,null,null,d);
},dy.matchesSelector=function(c,f){
if((c.ownerDocument||c)!==dN&&dL(c),f=f.replace(dh,"='$1']"),!(!dv.matchesSelector||!dR||dV&&dV.test(f)||dT&&dT.test(f)))
try{
var g=dX.call(c,f);
if(g||dv.disconnectedMatch||c.document&&11!==c.document.nodeType)
{
return g;
}
}
catch(h)
{
}
return dy(f,dN,null,[c]).length>0;
},dy.contains=function(c,d){
return (c.ownerDocument||c)!==dN&&dL(c),dZ(c,d);
},dy.attr=function(c,d){
(c.ownerDocument||c)!==dN&&dL(c);
var g=dx.attrHandle[d.toLowerCase()],h=g&&bd.call(dx.attrHandle,d.toLowerCase())?g(c,d,!dR):void 0;
return void 0!==h?h:dv.attributes||!dR?c.getAttribute(d):(h=c.getAttributeNode(d))&&h.specified?h.value:null;
},dy.error=function(b){
throw new Error("Syntax error, unrecognized expression: "+b);
},dy.uniqueSort=function(c){
var g,h=[],i=0,j=0;
if(dJ=!dv.detectDuplicates,dH=!dv.sortStable&&c.slice(0),c.sort(ef),dJ)
{
while(g=c[j++])
g===c[j]&&(i=h.push(j));
while(i--)
c.splice(h[i],1);
}
return dH=null,c;
},dz=dy.getText=function(e){
var g,h="",i=0,j=e.nodeType;
if(j)
{
if(1===j||9===j||11===j)
{
if("string"==typeof e.textContent)
{
return e.textContent;
}
for(e=e.firstChild;e;e=e.nextSibling)
h+=dz(e);
}
else if(3===j||4===j)
{
return e.nodeValue;
}
}
else while(g=e[i++])
h+=dz(g);
return h;
},dx=dy.selectors={cacheLength:50,createPseudo:dC,match:dk,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(b){
return b[1]=b[1].replace(ds,du),b[3]=(b[4]||b[5]||"").replace(ds,du),"~="===b[2]&&(b[3]=" "+b[3]+" "),b.slice(0,4);
},CHILD:function(b){
return b[1]=b[1].toLowerCase(),"nth"===b[1].slice(0,3)?(b[3]||dy.error(b[0]),b[4]=+(b[4]?b[5]+(b[6]||1):2*("even"===b[3]||"odd"===b[3])),b[5]=+(b[7]+b[8]||"odd"===b[3])):b[3]&&dy.error(b[0]),b;
},PSEUDO:function(d){
var e,f=!d[5]&&d[2];
return dk.CHILD.test(d[0])?null:(d[3]&&void 0!==d[4]?d[2]=d[4]:f&&di.test(f)&&(e=dU(f,!0))&&(e=f.indexOf(")",f.length-e)-f.length)&&(d[0]=d[0].slice(0,e),d[2]=f.slice(0,e)),d.slice(0,3));
}},filter:{TAG:function(c){
var d=c.replace(ds,du).toLowerCase();
return "*"===c?function(){
return !0;
}:function(b){
return b.nodeName&&b.nodeName.toLowerCase()===d;
};
},CLASS:function(c){
var d=d9[c+" "];
return d||(d=new RegExp("(^|"+c8+")"+c+"("+c8+"|$)"))&&d9(c,function(b){
return d.test("string"==typeof b.className&&b.className||typeof b.getAttribute!==ad&&b.getAttribute("class")||"");
});
},ATTR:function(d,e,f){
return function(a){
var b=dy.attr(a,d);
return null==b?"!="===e:e?(b+="","="===e?b===f:"!="===e?b!==f:"^="===e?f&&0===b.indexOf(f):"*="===e?f&&b.indexOf(f)>-1:"$="===e?f&&b.slice(-f.length)===f:"~="===e?(" "+b+" ").indexOf(f)>-1:"|="===e?b===f||b.slice(0,f.length+1)===f+"-":!1):!0;
};
},CHILD:function(i,j,k,l,m){
var n="nth"!==i.slice(0,3),o="last"!==i.slice(-4),p="of-type"===j;
return 1===l&&0===m?function(b){
return !!b.parentNode;
}:function(a,d,e){
var f,g,h,s,u,v,w=n!==o?"nextSibling":"previousSibling",x=a.parentNode,y=p&&a.nodeName.toLowerCase(),z=!e&&!p;
if(x)
{
if(n)
{
while(w)
{
h=a;
while(h=h[w])
if(p?h.nodeName.toLowerCase()===y:1===h.nodeType)
{
return !1;
}
v=w="only"===i&&!v&&"nextSibling";
}
return !0;
}
if(v=[o?x.firstChild:x.lastChild],o&&z)
{
g=x[d1]||(x[d1]={}),f=g[i]||[],u=f[0]===d5&&f[1],s=f[0]===d5&&f[2],h=u&&x.childNodes[u];
while(h=++u&&h&&h[w]||(s=u=0)||v.pop())
if(1===h.nodeType&&++s&&h===a)
{
g[i]=[d5,u,s];
break;
}
}
else if(z&&(f=(a[d1]||(a[d1]={}))[i])&&f[0]===d5)
s=f[1];
else while(h=++u&&h&&h[w]||(s=u=0)||v.pop())
if((p?h.nodeName.toLowerCase()===y:1===h.nodeType)&&++s&&(z&&((h[d1]||(h[d1]={}))[i]=[d5,s]),h===a))
break;
return s-=m,s===l||s%l===0&&s/l>=0;
}
};
},PSEUDO:function(d,f){
var g,h=dx.pseudos[d]||dx.setFilters[d.toLowerCase()]||dy.error("unsupported pseudo: "+d);
return h[d1]?h(f):h.length>1?(g=[d,d,"",f],dx.setFilters.hasOwnProperty(d.toLowerCase())?dC(function(b,e){
var i,j=h(b,f),k=j.length;
while(k--)
i=c6.call(b,j[k]),b[i]=!(e[i]=j[k]);
}):function(b){
return h(b,0,g);
}):h;
}},pseudos:{not:dC(function(e){
var f=[],g=[],h=dD(e.replace(de,"$1"));
return h[d1]?dC(function(d,i,j,k){
var l,m=h(d,null,k,[]),n=d.length;
while(n--)
(l=m[n])&&(d[n]=!(i[n]=l));
}):function(b,c,d){
return f[0]=b,h(f,null,d,g),!g.pop();
};
}),has:dC(function(b){
return function(a){
return dy(b,a).length>0;
};
}),contains:dC(function(b){
return function(a){
return (a.textContent||a.innerText||dz(a)).indexOf(b)>-1;
};
}),lang:dC(function(b){
return dj.test(b||"")||dy.error("unsupported lang: "+b),b=b.replace(ds,du).toLowerCase(),function(a){
var d;
do if(d=dR?a.lang:a.getAttribute("xml:lang")||a.getAttribute("lang"))
{
return d=d.toLowerCase(),d===b||0===d.indexOf(b+"-");
}
while((a=a.parentNode)&&1===a.nodeType);
return !1;
};
}),target:function(a){
var d=dr.location&&dr.location.hash;
return d&&d.slice(1)===a.id;
},root:function(b){
return b===dP;
},focus:function(b){
return b===dN.activeElement&&(!dN.hasFocus||dN.hasFocus())&&!!(b.type||b.href||~b.tabIndex);
},enabled:function(b){
return b.disabled===!1;
},disabled:function(b){
return b.disabled===!0;
},checked:function(c){
var d=c.nodeName.toLowerCase();
return "input"===d&&!!c.checked||"option"===d&&!!c.selected;
},selected:function(b){
return b.parentNode&&b.parentNode.selectedIndex,b.selected===!0;
},empty:function(b){
for(b=b.firstChild;b;b=b.nextSibling)
if(b.nodeType<6)
{
return !1;
}
return !0;
},parent:function(b){
return !dx.pseudos.empty(b);
},header:function(b){
return dm.test(b.nodeName);
},input:function(b){
return dl.test(b.nodeName);
},button:function(c){
var d=c.nodeName.toLowerCase();
return "input"===d&&"button"===c.type||"button"===d;
},text:function(c){
var d;
return "input"===c.nodeName.toLowerCase()&&"text"===c.type&&(null==(d=c.getAttribute("type"))||"text"===d.toLowerCase());
},first:dO(function(){
return [0];
}),last:dO(function(c,d){
return [d-1];
}),eq:dO(function(d,e,f){
return [0>f?f+e:f];
}),even:dO(function(d,e){
for(var f=0;e>f;f+=2)
d.push(f);
return d;
}),odd:dO(function(d,e){
for(var f=1;e>f;f+=2)
d.push(f);
return d;
}),lt:dO(function(e,f,g){
for(var h=0>g?g+f:g;--h>=0;)
e.push(h);
return e;
}),gt:dO(function(e,f,g){
for(var h=0>g?g+f:g;++h<f;)
e.push(h);
return e;
})}},dx.pseudos.nth=dx.pseudos.eq;
for(dt in {radio:!0,checkbox:!0,file:!0,password:!0,image:!0})
dx.pseudos[dt]=dK(dt);
for(dt in {submit:!0,reset:!0})
dx.pseudos[dt]=dM(dt);
function dS()
{
}
dS.prototype=dx.filters=dx.pseudos,dx.setFilters=new dS();
function dU(d,l)
{
var m,n,o,p,q,r,s,t=ec[d+" "];
if(t)
{
return l?0:t.slice(0);
}
q=d,r=[],s=dx.preFilter;
while(q)
{
(!m||(n=df.exec(q)))&&(n&&(q=q.slice(n[0].length)||q),r.push(o=[])),m=!1,(n=dg.exec(q))&&(m=n.shift(),o.push({value:m,type:n[0].replace(de," ")}),q=q.slice(m.length));
for(p in dx.filter)
!(n=dk[p].exec(q))||s[p]&&!(n=s[p](n))||(m=n.shift(),o.push({value:m,type:p,matches:n}),q=q.slice(m.length));
if(!m)
break;
}
return l?q.length:q?dy.error(d):ec(d,r).slice(0);
}
function dW(e)
{
for(var f=0,g=e.length,h="";g>f;f++)
h+=e[f].value;
return h;
}
function dY(g,h,i)
{
var j=h.dir,k=i&&"parentNode"===j,l=d7++;
return h.first?function(a,d,e){
while(a=a[j])
if(1===a.nodeType||k)
{
return g(a,d,e);
}
}:function(a,d,e){
var f,m,n=[d5,l];
if(e)
{
while(a=a[j])
if((1===a.nodeType||k)&&g(a,d,e))
{
return !0;
}
}
else while(a=a[j])
if(1===a.nodeType||k)
{
if(m=a[d1]||(a[d1]={}),(f=m[j])&&f[0]===d5&&f[1]===l)
{
return n[2]=f[2];
}
if(m[j]=n,n[2]=g(a,d,e))
{
return !0;
}
}
};
}
function d0(b)
{
return b.length>1?function(a,f,g){
var h=b.length;
while(h--)
if(!b[h](a,f,g))
{
return !1;
}
return !0;
}:b[0];
}
function d2(k,l,m,n,o)
{
for(var p,q=[],r=0,s=k.length,t=null!=l;s>r;r++)
(p=k[r])&&(!m||m(p,n,o))&&(q.push(p),t&&l.push(r));
return q;
}
function d4(g,h,i,j,k,l)
{
return j&&!j[d1]&&(j=d4(j)),k&&!k[d1]&&(k=d4(k,l)),dC(function(a,b,c,d){
var e,s,t,u=[],v=[],w=b.length,x=a||ea(h||"*",c.nodeType?[c]:c,[]),y=!g||!a&&h?x:d2(x,u,g,c,d),z=i?k||(a?g:w||j)?[]:b:y;
if(i&&i(y,z,c,d),j)
{
e=d2(z,v),j(e,[],c,d),s=e.length;
while(s--)
(t=e[s])&&(z[v[s]]=!(y[v[s]]=t));
}
if(a)
{
if(k||g)
{
if(k)
{
e=[],s=z.length;
while(s--)
(t=z[s])&&e.push(y[s]=t);
k(null,z=[],e,d);
}
s=z.length;
while(s--)
(t=z[s])&&(e=k?c6.call(a,t):u[s])>-1&&(a[e]=!(b[e]=t));
}
}
else z=d2(z===b?z.splice(w,z.length):z),k?k(null,b,z,d):c4.apply(b,z);
});
}
function d6(d)
{
for(var h,n,o,p=d.length,q=dx.relative[d[0].type],r=q||dx.relative[" "],s=q?1:0,t=dY(function(b){
return b===h;
},r,!0),u=dY(function(b){
return c6.call(h,b)>-1;
},r,!0),v=[function(b,e,f){
return !q&&(f||e!==dF)||((h=e).nodeType?t(b,e,f):u(b,e,f));
}];p>s;s++)
if(n=dx.relative[d[s].type])
v=[dY(d0(v),n)];
else{
if(n=dx.filter[d[s].type].apply(null,d[s].matches),n[d1])
{
for(o=++s;p>o;o++)
if(dx.relative[d[o].type])
break;
return d4(s>1&&d0(v),s>1&&dW(d.slice(0,s-1).concat({value:" "===d[s-2].type?"*":""})).replace(de,"$1"),n,o>s&&d6(d.slice(s,o)),p>o&&d6(d=d.slice(o)),p>o&&dW(d));
}
v.push(n);
}
return d0(v);
}
function d8(d,g)
{
var h=g.length>0,i=d.length>0,j=function(a,b,c,e,l){
var u,y,z,A=0,B="0",C=a&&[],D=[],E=dF,F=a||i&&dx.find.TAG("*",l),G=d5+=null==E?1:Math.random()||.1,H=F.length;
for(l&&(dF=b!==dN&&b);B!==H&&null!=(u=F[B]);B++)
{
if(i&&u)
{
y=0;
while(z=d[y++])
if(z(u,b,c))
{
e.push(u);
break;
}
l&&(d5=G);
}
h&&((u=!z&&u)&&A--,a&&C.push(u));
}
if(A+=B,h&&B!==A)
{
y=0;
while(z=g[y++])
z(C,D,b,c);
if(a)
{
if(A>0)
while(B--)
C[B]||D[B]||(D[B]=cd.call(e));
D=d2(D);
}
c4.apply(e,D),l&&!a&&D.length>0&&A+g.length>1&&dy.uniqueSort(e);
}
return l&&(d5=G,dF=E),C;
};
return h?dC(j):j;
}
dD=dy.compile=function(g,h){
var i,j=[],k=[],l=ee[g+" "];
if(!l)
{
h||(h=dU(g)),i=h.length;
while(i--)
l=d6(h[i]),l[d1]?j.push(l):k.push(l);
l=ee(g,d8(k,j));
}
return l;
};
function ea(f,g,h)
{
for(var i=0,j=g.length;j>i;i++)
dy(f,g[i],h);
return h;
}
function ed(c,d,g,n)
{
var o,p,q,r,s,t=dU(c);
if(!n&&1===t.length)
{
if(p=t[0]=t[0].slice(0),p.length>2&&"ID"===(q=p[0]).type&&dv.getById&&9===d.nodeType&&dR&&dx.relative[p[1].type])
{
if(d=(dx.find.ID(q.matches[0].replace(ds,du),d)||[])[0],!d)
{
return g;
}
c=c.slice(p.shift().value.length);
}
o=dk.needsContext.test(c)?0:p.length;
while(o--)
{
if(q=p[o],dx.relative[r=q.type])
break;
if((s=dx.find[r])&&(n=s(q.matches[0].replace(ds,du),ac.test(p[0].type)&&dQ(d.parentNode)||d)))
{
if(p.splice(o,1),c=n.length&&dW(p),!c)
{
return c4.apply(g,n),g;
}
break;
}
}
}
return dD(c,t)(n,d,!dR,g,ac.test(c)&&dQ(d.parentNode)||d),g;
}
return dv.sortStable=d1.split("").sort(ef).join("")===d1,dv.detectDuplicates=!!dJ,dL(),dv.sortDetached=dE(function(b){
return 1&b.compareDocumentPosition(dN.createElement("div"));
}),dE(function(b){
return b.innerHTML="<a href='#'></a>","#"===b.firstChild.getAttribute("href");
})||dG("type|href|height|width",function(d,e,f){
return f?void 0:d.getAttribute(e,"type"===e.toLowerCase()?1:2);
}),dv.attributes&&dE(function(b){
return b.innerHTML="<input/>",b.firstChild.setAttribute("value",""),""===b.firstChild.getAttribute("value");
})||dG("value",function(d,e,f){
return f||"input"!==d.nodeName.toLowerCase()?void 0:d.defaultValue;
}),dE(function(b){
return null==b.getAttribute("disabled");
})||dG(c7,function(e,f,g){
var h;
return g?void 0:e[f]===!0?f.toLowerCase():(h=e.getAttributeNode(f))&&h.specified?h.value:null;
}),dy;
}(bD);
cq.find=cI,cq.expr=cI.selectors,cq.expr[":"]=cq.expr.pseudos,cq.unique=cI.uniqueSort,cq.text=cI.getText,cq.isXMLDoc=cI.isXML,cq.contains=cI.contains;
var cL=cq.expr.match.needsContext,cO=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,cR=/^.[^:#\[\.,]*$/;
function cU(d,e,f)
{
if(cq.isFunction(e))
{
return cq.grep(d,function(b,c){
return !!e.call(b,c,b)!==f;
});
}
if(e.nodeType)
{
return cq.grep(d,function(b){
return b===e!==f;
});
}
if("string"==typeof e)
{
if(cR.test(e))
{
return cq.filter(e,d,f);
}
e=cq.filter(e,d);
}
return cq.grep(d,function(b){
return cq.inArray(b,e)>=0!==f;
});
}
cq.filter=function(e,f,g){
var h=f[0];
return g&&(e=":not("+e+")"),1===f.length&&1===h.nodeType?cq.find.matchesSelector(h,e)?[h]:[]:cq.find.matches(e,cq.grep(f,function(b){
return 1===b.nodeType;
}));
},cq.fn.extend({find:function(f){
var g,h=[],i=this,j=i.length;
if("string"!=typeof f)
{
return this.pushStack(cq(f).filter(function(){
for(g=0;j>g;g++)
if(cq.contains(i[g],this))
{
return !0;
}
}));
}
for(g=0;j>g;g++)
cq.find(f,i[g],h);
return h=this.pushStack(j>1?cq.unique(h):h),h.selector=this.selector?this.selector+" "+f:f,h;
},filter:function(b){
return this.pushStack(cU(this,b||[],!1));
},not:function(b){
return this.pushStack(cU(this,b||[],!0));
},is:function(b){
return !!cU(this,"string"==typeof b&&cL.test(b)?cq(b):b||[],!1).length;
}});
var cX,c0=bD.document,ag=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,aj=cq.fn.init=function(e,f){
var g,h;
if(!e)
{
return this;
}
if("string"==typeof e)
{
if(g="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:ag.exec(e),!g||!g[1]&&f)
{
return !f||f.jquery?(f||cX).find(e):this.constructor(f).find(e);
}
if(g[1])
{
if(f=f instanceof cq?f[0]:f,cq.merge(this,cq.parseHTML(g[1],f&&f.nodeType?f.ownerDocument||f:c0,!0)),cO.test(g[1])&&cq.isPlainObject(f))
for(g in f)
cq.isFunction(this[g])?this[g](f[g]):this.attr(g,f[g]);
return this;
}
if(h=c0.getElementById(g[2]),h&&h.parentNode)
{
if(h.id!==g[2])
{
return cX.find(e);
}
this.length=1,this[0]=h;
}
return this.context=c0,this.selector=e,this;
}
return e.nodeType?(this.context=this[0]=e,this.length=1,this):cq.isFunction(e)?"undefined"!=typeof cX.ready?cX.ready(e):e(cq):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),cq.makeArray(e,this));
};
aj.prototype=cq.fn,cX=cq(c0);
var am=/^(?:parents|prev(?:Until|All))/,ap={children:!0,contents:!0,next:!0,prev:!0};
cq.extend({dir:function(f,g,h){
var i=[],j=f[g];
while(j&&9!==j.nodeType&&(void 0===h||1!==j.nodeType||!cq(j).is(h)))
1===j.nodeType&&i.push(j),j=j[g];
return i;
},sibling:function(d,e){
for(var f=[];d;d=d.nextSibling)
1===d.nodeType&&d!==e&&f.push(d);
return f;
}}),cq.fn.extend({has:function(e){
var f,g=cq(e,this),h=g.length;
return this.filter(function(){
for(f=0;h>f;f++)
if(cq.contains(this,g[f]))
{
return !0;
}
});
},closest:function(h,i){
for(var j,k=0,l=this.length,m=[],n=cL.test(h)||"string"!=typeof h?cq(h,i||this.context):0;l>k;k++)
for(j=this[k];j&&j!==i;j=j.parentNode)
if(j.nodeType<11&&(n?n.index(j)>-1:1===j.nodeType&&cq.find.matchesSelector(j,h)))
{
m.push(j);
break;
}
return this.pushStack(m.length>1?cq.unique(m):m);
},index:function(b){
return b?"string"==typeof b?cq.inArray(this[0],cq(b)):cq.inArray(b.jquery?b[0]:b,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1;
},add:function(c,d){
return this.pushStack(cq.unique(cq.merge(this.get(),cq(c,d))));
},addBack:function(b){
return this.add(null==b?this.prevObject:this.prevObject.filter(b));
}});
function at(c,d)
{
do c=c[d];
while(c&&1!==c.nodeType);
return c;
}
cq.each({parent:function(c){
var d=c.parentNode;
return d&&11!==d.nodeType?d:null;
},parents:function(b){
return cq.dir(b,"parentNode");
},parentsUntil:function(d,e,f){
return cq.dir(d,"parentNode",f);
},next:function(b){
return at(b,"nextSibling");
},prev:function(b){
return at(b,"previousSibling");
},nextAll:function(b){
return cq.dir(b,"nextSibling");
},prevAll:function(b){
return cq.dir(b,"previousSibling");
},nextUntil:function(d,e,f){
return cq.dir(d,"nextSibling",f);
},prevUntil:function(d,e,f){
return cq.dir(d,"previousSibling",f);
},siblings:function(b){
return cq.sibling((b.parentNode||{}).firstChild,b);
},children:function(b){
return cq.sibling(b.firstChild);
},contents:function(b){
return cq.nodeName(b,"iframe")?b.contentDocument||b.contentWindow.document:cq.merge([],b.childNodes);
}},function(c,d){
cq.fn[c]=function(a,b){
var f=cq.map(this,d,a);
return "Until"!==c.slice(-5)&&(b=a),b&&"string"==typeof b&&(f=cq.filter(b,f)),this.length>1&&(ap[c]||(f=cq.unique(f)),am.test(c)&&(f=f.reverse())),this.pushStack(f);
};
});
var aw=/\S+/g,az={};
function aC(c)
{
var d=az[c]={};
return cq.each(c.match(aw)||[],function(b,e){
d[e]=!0;
}),d;
}
cq.Callbacks=function(l){
l="string"==typeof l?az[l]||aC(l):cq.extend({},l);
var m,n,o,p,q,r,s=[],t=!l.once&&[],u=function(a){
for(n=l.memory&&a,o=!0,q=r||0,r=0,p=s.length,m=!0;s&&p>q;q++)
if(s[q].apply(a[0],a[1])===!1&&l.stopOnFalse)
{
n=!1;
break;
}
m=!1,s&&(t?t.length&&u(t.shift()):n?s=[]:v.disable());
},v={add:function(){
if(s)
{
var a=s.length;
!function b(c){
cq.each(c,function(e,f){
var g=cq.type(f);
"function"===g?l.unique&&v.has(f)||s.push(f):f&&f.length&&"string"!==g&&b(f);
});
}(arguments),m?p=s.length:n&&(r=a,u(n));
}
return this;
},remove:function(){
return s&&cq.each(arguments,function(b,e){
var f;
while((f=cq.inArray(e,s,f))>-1)
s.splice(f,1),m&&(p>=f&&p--,q>=f&&q--);
}),this;
},has:function(b){
return b?cq.inArray(b,s)>-1:!(!s||!s.length);
},empty:function(){
return s=[],p=0,this;
},disable:function(){
return s=t=n=void 0,this;
},disabled:function(){
return !s;
},lock:function(){
return t=void 0,n||v.disable(),this;
},locked:function(){
return !t;
},fireWith:function(b,d){
return !s||o&&!t||(d=d||[],d=[b,d.slice?d.slice():d],m?t.push(d):u(d)),this;
},fire:function(){
return v.fireWith(this,arguments),this;
},fired:function(){
return !!o;
}};
return v;
},cq.extend({Deferred:function(f){
var g=[["resolve","done",cq.Callbacks("once memory"),"resolved"],["reject","fail",cq.Callbacks("once memory"),"rejected"],["notify","progress",cq.Callbacks("memory")]],h="pending",i={state:function(){
return h;
},always:function(){
return j.done(arguments).fail(arguments),this;
},then:function(){
var b=arguments;
return cq.Deferred(function(a){
cq.each(g,function(c,d){
var e=cq.isFunction(b[c])&&b[c];
j[d[1]](function(){
var k=e&&e.apply(this,arguments);
k&&cq.isFunction(k.promise)?k.promise().done(a.resolve).fail(a.reject).progress(a.notify):a[d[0]+"With"](this===i?a.promise():this,e?[k]:arguments);
});
}),b=null;
}).promise();
},promise:function(b){
return null!=b?cq.extend(b,i):i;
}},j={};
return i.pipe=i.then,cq.each(g,function(b,c){
var d=c[2],e=c[3];
i[c[1]]=d.add,e&&d.add(function(){
h=e;
},g[1^b][2].disable,g[2][2].lock),j[c[0]]=function(){
return j[c[0]+"With"](this===j?i:this,arguments),this;
},j[c[0]+"With"]=d.fireWith;
}),i.promise(j),f&&f.call(j,j),j;
},when:function(d){
var l=0,m=bP.call(arguments),n=m.length,o=1!==n||d&&cq.isFunction(d.promise)?n:0,p=1===o?d:cq.Deferred(),q=function(e,f,g){
return function(a){
f[e]=this,g[e]=arguments.length>1?bP.call(arguments):a,g===r?p.notifyWith(f,g):--o||p.resolveWith(f,g);
};
},r,s,t;
if(n>1)
for(r=new Array(n),s=new Array(n),t=new Array(n);n>l;l++)
m[l]&&cq.isFunction(m[l].promise)?m[l].promise().done(q(l,t,m)).fail(p.reject).progress(q(l,s,r)):--o;
return o||p.resolveWith(t,m),p.promise();
}});
var aF;
cq.fn.ready=function(b){
return cq.ready.promise().done(b),this;
},cq.extend({isReady:!1,readyWait:1,holdReady:function(b){
b?cq.readyWait++:cq.ready(!0);
},ready:function(b){
if(b===!0?!--cq.readyWait:!cq.isReady)
{
if(!c0.body)
{
return setTimeout(cq.ready);
}
cq.isReady=!0,b!==!0&&--cq.readyWait>0||(aF.resolveWith(c0,[cq]),cq.fn.trigger&&cq(c0).trigger("ready").off("ready"));
}
}});
function aI()
{
c0.addEventListener?(c0.removeEventListener("DOMContentLoaded",aL,!1),bD.removeEventListener("load",aL,!1)):(c0.detachEvent("onreadystatechange",aL),bD.detachEvent("onload",aL));
}
function aL()
{
(c0.addEventListener||"load"===event.type||"complete"===c0.readyState)&&(aI(),cq.ready());
}
cq.ready.promise=function(a){
if(!aF)
if(aF=cq.Deferred(),"complete"===c0.readyState)
setTimeout(cq.ready);
else if(c0.addEventListener)
c0.addEventListener("DOMContentLoaded",aL,!1),bD.addEventListener("load",aL,!1);
else{
c0.attachEvent("onreadystatechange",aL),bD.attachEvent("onload",aL);
var f=!1;
try{
f=null==bD.frameElement&&c0.documentElement;
}
catch(g)
{
}
f&&f.doScroll&&!function h(){
if(!cq.isReady)
{
try{
f.doScroll("left");
}
catch(b)
{
return setTimeout(h,50);
}
aI(),cq.ready();
}
}();
}
return aF.promise(a);
};
var aO="undefined",aR;
for(aR in cq(ck))
break;
ck.ownLast="0"!==aR,ck.inlineBlockNeedsLayout=!1,cq(function(){
var d,e,f=c0.getElementsByTagName("body")[0];
f&&(d=c0.createElement("div"),d.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",e=c0.createElement("div"),f.appendChild(d).appendChild(e),typeof e.style.zoom!==aO&&(e.style.cssText="border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1",(ck.inlineBlockNeedsLayout=3===e.offsetWidth)&&(f.style.zoom=1)),f.removeChild(d),d=e=null);
}),function(){
var c=c0.createElement("div");
if(null==ck.deleteExpando)
{
ck.deleteExpando=!0;
try{
delete c.test;
}
catch(d)
{
ck.deleteExpando=!1;
}
}
c=null;
}(),cq.acceptData=function(d){
var e=cq.noData[(d.nodeName+" ").toLowerCase()],f=+d.nodeType||1;
return 1!==f&&9!==f?!1:!e||e!==!0&&d.getAttribute("classid")===e;
};
var aU=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,aX=/([A-Z])/g;
function a0(f,g,h)
{
if(void 0===h&&1===f.nodeType)
{
var i="data-"+g.replace(aX,"-$1").toLowerCase();
if(h=f.getAttribute(i),"string"==typeof h)
{
try{
h="true"===h?!0:"false"===h?!1:"null"===h?null:+h+""===h?+h:aU.test(h)?cq.parseJSON(h):h;
}
catch(j)
{
}
cq.data(f,g,h);
}
else h=void 0;
}
return h;
}
function a3(c)
{
var d;
for(d in c)
if(("data"!==d||!cq.isEmptyObject(c[d]))&&"toJSON"!==d)
{
return !1;
}
return !0;
}
function a6(c,l,m,n)
{
if(cq.acceptData(c))
{
var o,p,q=cq.expando,r=c.nodeType,s=r?cq.cache:c,t=r?c[q]:c[q]&&q;
if(t&&s[t]&&(n||s[t].data)||void 0!==m||"string"!=typeof l)
{
return t||(t=r?c[q]=bL.pop()||cq.guid++:q),s[t]||(s[t]=r?{}:{toJSON:cq.noop}),("object"==typeof l||"function"==typeof l)&&(n?s[t]=cq.extend(s[t],l):s[t].data=cq.extend(s[t].data,l)),p=s[t],n||(p.data||(p.data={}),p=p.data),void 0!==m&&(p[cq.camelCase(l)]=m),"string"==typeof l?(o=p[l],null==o&&(o=p[cq.camelCase(l)])):o=p,o;
}
}
}
function a9(i,j,k)
{
if(cq.acceptData(i))
{
var l,m,n=i.nodeType,o=n?cq.cache:i,p=n?i[cq.expando]:cq.expando;
if(o[p])
{
if(j&&(l=k?o[p]:o[p].data))
{
cq.isArray(j)?j=j.concat(cq.map(j,cq.camelCase)):j in l?j=[j]:(j=cq.camelCase(j),j=j in l?[j]:j.split(" ")),m=j.length;
while(m--)
delete l[j[m]];
if(k?!a3(l):!cq.isEmptyObject(l))
{
return;
}
}
(k||(delete o[p].data,a3(o[p])))&&(n?cq.cleanData([i],!0):ck.deleteExpando||o!=o.window?delete o[p]:o[p]=null);
}
}
}
cq.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(b){
return b=b.nodeType?cq.cache[b[cq.expando]]:b[cq.expando],!!b&&!a3(b);
},data:function(d,e,f){
return a6(d,e,f);
},removeData:function(c,d){
return a9(c,d);
},_data:function(d,e,f){
return a6(d,e,f,!0);
},_removeData:function(c,d){
return a9(c,d,!0);
}}),cq.fn.extend({data:function(h,i){
var j,k,l,m=this[0],n=m&&m.attributes;
if(void 0===h)
{
if(this.length&&(l=cq.data(m),1===m.nodeType&&!cq._data(m,"parsedAttrs")))
{
j=n.length;
while(j--)
k=n[j].name,0===k.indexOf("data-")&&(k=cq.camelCase(k.slice(5)),a0(m,k,l[k]));
cq._data(m,"parsedAttrs",!0);
}
return l;
}
return "object"==typeof h?this.each(function(){
cq.data(this,h);
}):arguments.length>1?this.each(function(){
cq.data(this,h,i);
}):m?a0(m,h,cq.data(m,h)):void 0;
},removeData:function(b){
return this.each(function(){
cq.removeData(this,b);
});
}}),cq.extend({queue:function(e,f,g){
var h;
return e?(f=(f||"fx")+"queue",h=cq._data(e,f),g&&(!h||cq.isArray(g)?h=cq._data(e,f,cq.makeArray(g)):h.push(g)),h||[]):void 0;
},dequeue:function(h,i){
i=i||"fx";
var j=cq.queue(h,i),k=j.length,l=j.shift(),m=cq._queueHooks(h,i),n=function(){
cq.dequeue(h,i);
};
"inprogress"===l&&(l=j.shift(),k--),l&&("fx"===i&&j.unshift("inprogress"),delete m.stop,l.call(h,n,m)),!k&&m&&m.empty.fire();
},_queueHooks:function(d,e){
var f=e+"queueHooks";
return cq._data(d,f)||cq._data(d,f,{empty:cq.Callbacks("once memory").add(function(){
cq._removeData(d,e+"queue"),cq._removeData(d,f);
})});
}}),cq.fn.extend({queue:function(d,e){
var f=2;
return "string"!=typeof d&&(e=d,d="fx",f--),arguments.length<f?cq.queue(this[0],d):void 0===e?this:this.each(function(){
var a=cq.queue(this,d,e);
cq._queueHooks(this,d),"fx"===d&&"inprogress"!==a[0]&&cq.dequeue(this,d);
});
},dequeue:function(b){
return this.each(function(){
cq.dequeue(this,b);
});
},clearQueue:function(b){
return this.queue(b||"fx",[]);
},promise:function(i,j){
var k,l=1,m=cq.Deferred(),n=this,o=this.length,p=function(){
--l||m.resolveWith(n,[n]);
};
"string"!=typeof i&&(j=i,i=void 0),i=i||"fx";
while(o--)
k=cq._data(n[o],i+"queueHooks"),k&&k.empty&&(l++,k.empty.add(p));
return p(),m.promise(j);
}});
var bf=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,bi=["Top","Right","Bottom","Left"],bl=function(c,d){
return c=d||c,"none"===cq.css(c,"display")||!cq.contains(c.ownerDocument,c);
},bo=cq.access=function(k,l,m,n,o,p,q){
var r=0,s=k.length,t=null==m;
if("object"===cq.type(m))
{
o=!0;
for(r in m)
cq.access(k,l,r,m[r],!0,p,q);
}
else if(void 0!==n&&(o=!0,cq.isFunction(n)||(q=!0),t&&(q?(l.call(k,n),l=null):(t=l,l=function(d,e,f){
return t.call(cq(d),f);
})),l))
for(;s>r;r++)
l(k[r],m,q?n:n.call(k[r],r,l(k[r],m)));
return o?k:t?l.call(k):s?l(k[0],m):p;
},br=/^(?:checkbox|radio)$/i;
!function(){
var e=c0.createDocumentFragment(),f=c0.createElement("div"),g=c0.createElement("input");
if(f.setAttribute("className","t"),f.innerHTML="  <link/><table></table><a href='/a'>a</a>",ck.leadingWhitespace=3===f.firstChild.nodeType,ck.tbody=!f.getElementsByTagName("tbody").length,ck.htmlSerialize=!!f.getElementsByTagName("link").length,ck.html5Clone="<:nav></:nav>"!==c0.createElement("nav").cloneNode(!0).outerHTML,g.type="checkbox",g.checked=!0,e.appendChild(g),ck.appendChecked=g.checked,f.innerHTML="<textarea>x</textarea>",ck.noCloneChecked=!!f.cloneNode(!0).lastChild.defaultValue,e.appendChild(f),f.innerHTML="<input type='radio' checked='checked' name='t'/>",ck.checkClone=f.cloneNode(!0).cloneNode(!0).lastChild.checked,ck.noCloneEvent=!0,f.attachEvent&&(f.attachEvent("onclick",function(){
ck.noCloneEvent=!1;
}),f.cloneNode(!0).click()),null==ck.deleteExpando)
{
ck.deleteExpando=!0;
try{
delete f.test;
}
catch(h)
{
ck.deleteExpando=!1;
}
}
e=f=g=null;
}(),function(){
var a,e,f=c0.createElement("div");
for(a in {submit:!0,change:!0,focusin:!0})
e="on"+a,(ck[a+"Bubbles"]=e in bD)||(f.setAttribute(e,"t"),ck[a+"Bubbles"]=f.attributes[e].expando===!1);
f=null;
}();
var bu=/^(?:input|select|textarea)$/i,bx=/^key/,aa=/^(?:mouse|contextmenu)|click/,bA=/^(?:focusinfocus|focusoutblur)$/,bE=/^([^.]*)(?:\.(.+)|)$/;
function bI()
{
return !0;
}
function bM()
{
return !1;
}
function bQ()
{
try{
return c0.activeElement;
}
catch(b)
{
}
}
cq.event={global:{},add:function(n,s,t,u,v){
var w,x,y,z,A,B,C,D,E,F,G,H=cq._data(n);
if(H)
{
t.handler&&(z=t,t=z.handler,v=z.selector),t.guid||(t.guid=cq.guid++),(x=H.events)||(x=H.events={}),(B=H.handle)||(B=H.handle=function(b){
return typeof cq===aO||b&&cq.event.triggered===b.type?void 0:cq.event.dispatch.apply(B.elem,arguments);
},B.elem=n),s=(s||"").match(aw)||[""],y=s.length;
while(y--)
w=bE.exec(s[y])||[],E=G=w[1],F=(w[2]||"").split(".").sort(),E&&(A=cq.event.special[E]||{},E=(v?A.delegateType:A.bindType)||E,A=cq.event.special[E]||{},C=cq.extend({type:E,origType:G,data:u,handler:t,guid:t.guid,selector:v,needsContext:v&&cq.expr.match.needsContext.test(v),namespace:F.join(".")},z),(D=x[E])||(D=x[E]=[],D.delegateCount=0,A.setup&&A.setup.call(n,u,F,B)!==!1||(n.addEventListener?n.addEventListener(E,B,!1):n.attachEvent&&n.attachEvent("on"+E,B))),A.add&&(A.add.call(n,C),C.handler.guid||(C.handler.guid=t.guid)),v?D.splice(D.delegateCount++,0,C):D.push(C),cq.event.global[E]=!0);
n=null;
}
},remove:function(n,s,t,u,v){
var w,x,y,z,A,B,C,D,E,F,G,H=cq.hasData(n)&&cq._data(n);
if(H&&(B=H.events))
{
s=(s||"").match(aw)||[""],A=s.length;
while(A--)
if(y=bE.exec(s[A])||[],E=G=y[1],F=(y[2]||"").split(".").sort(),E)
{
C=cq.event.special[E]||{},E=(u?C.delegateType:C.bindType)||E,D=B[E]||[],y=y[2]&&new RegExp("(^|\\.)"+F.join("\\.(?:.*\\.|)")+"(\\.|$)"),z=w=D.length;
while(w--)
x=D[w],!v&&G!==x.origType||t&&t.guid!==x.guid||y&&!y.test(x.namespace)||u&&u!==x.selector&&("**"!==u||!x.selector)||(D.splice(w,1),x.selector&&D.delegateCount--,C.remove&&C.remove.call(n,x));
z&&!D.length&&(C.teardown&&C.teardown.call(n,F,H.handle)!==!1||cq.removeEvent(n,E,H.handle),delete B[E]);
}
else for(E in B)
cq.event.remove(n,E+s[A],t,u,!0);
cq.isEmptyObject(B)&&(delete H.handle,cq._removeData(n,"events"));
}
},trigger:function(a,j,n,s){
var t,u,v,w,x,y,z,A=[n||c0],B=ce.call(a,"type")?a.type:a,C=ce.call(a,"namespace")?a.namespace.split("."):[];
if(v=y=n=n||c0,3!==n.nodeType&&8!==n.nodeType&&!bA.test(B+cq.event.triggered)&&(B.indexOf(".")>=0&&(C=B.split("."),B=C.shift(),C.sort()),u=B.indexOf(":")<0&&"on"+B,a=a[cq.expando]?a:new cq.Event(B,"object"==typeof a&&a),a.isTrigger=s?2:3,a.namespace=C.join("."),a.namespace_re=a.namespace?new RegExp("(^|\\.)"+C.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,a.result=void 0,a.target||(a.target=n),j=null==j?[a]:cq.makeArray(j,[a]),x=cq.event.special[B]||{},s||!x.trigger||x.trigger.apply(n,j)!==!1))
{
if(!s&&!x.noBubble&&!cq.isWindow(n))
{
for(w=x.delegateType||B,bA.test(w+B)||(v=v.parentNode);v;v=v.parentNode)
A.push(v),y=v;
y===(n.ownerDocument||c0)&&A.push(y.defaultView||y.parentWindow||bD);
}
z=0;
while((v=A[z++])&&!a.isPropagationStopped())
a.type=z>1?w:x.bindType||B,t=(cq._data(v,"events")||{})[a.type]&&cq._data(v,"handle"),t&&t.apply(v,j),t=u&&v[u],t&&t.apply&&cq.acceptData(v)&&(a.result=t.apply(v,j),a.result===!1&&a.preventDefault());
if(a.type=B,!s&&!a.isDefaultPrevented()&&(!x._default||x._default.apply(A.pop(),j)===!1)&&cq.acceptData(n)&&u&&n[B]&&!cq.isWindow(n))
{
y=n[u],y&&(n[u]=null),cq.event.triggered=B;
try{
n[B]();
}
catch(D)
{
}
cq.event.triggered=void 0,y&&(n[u]=y);
}
return a.result;
}
},dispatch:function(d){
d=cq.event.fix(d);
var l,m,n,o,p,q=[],r=bP.call(arguments),s=(cq._data(this,"events")||{})[d.type]||[],t=cq.event.special[d.type]||{};
if(r[0]=d,d.delegateTarget=this,!t.preDispatch||t.preDispatch.call(this,d)!==!1)
{
q=cq.event.handlers.call(this,d,s),l=0;
while((o=q[l++])&&!d.isPropagationStopped())
{
d.currentTarget=o.elem,p=0;
while((n=o.handlers[p++])&&!d.isImmediatePropagationStopped())
(!d.namespace_re||d.namespace_re.test(n.namespace))&&(d.handleObj=n,d.data=n.data,m=((cq.event.special[n.origType]||{}).handle||n.handler).apply(o.elem,r),void 0!==m&&(d.result=m)===!1&&(d.preventDefault(),d.stopPropagation()));
}
return t.postDispatch&&t.postDispatch.call(this,d),d.result;
}
},handlers:function(j,k){
var l,m,n,o,p=[],q=k.delegateCount,r=j.target;
if(q&&r.nodeType&&(!j.button||"click"!==j.type))
for(;r!=this;r=r.parentNode||this)
if(1===r.nodeType&&(r.disabled!==!0||"click"!==j.type))
{
for(n=[],o=0;q>o;o++)
m=k[o],l=m.selector+" ",void 0===n[l]&&(n[l]=m.needsContext?cq(l,this).index(r)>=0:cq.find(l,this,null,[r]).length),n[l]&&n.push(m);
n.length&&p.push({elem:r,handlers:n});
}
return q<k.length&&p.push({elem:this,handlers:k.slice(q)}),p;
},fix:function(h){
if(h[cq.expando])
{
return h;
}
var i,j,k,l=h.type,m=h,n=this.fixHooks[l];
n||(this.fixHooks[l]=n=aa.test(l)?this.mouseHooks:bx.test(l)?this.keyHooks:{}),k=n.props?this.props.concat(n.props):this.props,h=new cq.Event(m),i=k.length;
while(i--)
j=k[i],h[j]=m[j];
return h.target||(h.target=m.srcElement||c0),3===h.target.nodeType&&(h.target=h.target.parentNode),h.metaKey=!!h.metaKey,n.filter?n.filter(h,m):h;
},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(c,d){
return null==c.which&&(c.which=null!=d.charCode?d.charCode:d.keyCode),c;
}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(h,i){
var j,k,l,m=i.button,n=i.fromElement;
return null==h.pageX&&null!=i.clientX&&(k=h.target.ownerDocument||c0,l=k.documentElement,j=k.body,h.pageX=i.clientX+(l&&l.scrollLeft||j&&j.scrollLeft||0)-(l&&l.clientLeft||j&&j.clientLeft||0),h.pageY=i.clientY+(l&&l.scrollTop||j&&j.scrollTop||0)-(l&&l.clientTop||j&&j.clientTop||0)),!h.relatedTarget&&n&&(h.relatedTarget=n===h.target?i.toElement:n),h.which||void 0===m||(h.which=1&m?1:2&m?3:4&m?2:0),h;
}},special:{load:{noBubble:!0},focus:{trigger:function(){
if(this!==bQ()&&this.focus)
try{
return this.focus(),!1;
}
catch(b)
{
}
},delegateType:"focusin"},blur:{trigger:function(){
return this===bQ()&&this.blur?(this.blur(),!1):void 0;
},delegateType:"focusout"},click:{trigger:function(){
return cq.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0;
},_default:function(b){
return cq.nodeName(b.target,"a");
}},beforeunload:{postDispatch:function(b){
void 0!==b.result&&(b.originalEvent.returnValue=b.result);
}}},simulate:function(f,g,h,i){
var j=cq.extend(new cq.Event(),h,{type:f,isSimulated:!0,originalEvent:{}});
i?cq.event.trigger(j,null,g):cq.event.dispatch.call(g,j),j.isDefaultPrevented()&&h.preventDefault();
}},cq.removeEvent=c0.removeEventListener?function(d,e,f){
d.removeEventListener&&d.removeEventListener(e,f,!1);
}:function(e,f,g){
var h="on"+f;
e.detachEvent&&(typeof e[h]===aO&&(e[h]=null),e.detachEvent(h,g));
},cq.Event=function(c,d){
return this instanceof cq.Event?(c&&c.type?(this.originalEvent=c,this.type=c.type,this.isDefaultPrevented=c.defaultPrevented||void 0===c.defaultPrevented&&(c.returnValue===!1||c.getPreventDefault&&c.getPreventDefault())?bI:bM):this.type=c,d&&cq.extend(this,d),this.timeStamp=c&&c.timeStamp||cq.now(),void (this[cq.expando]=!0)):new cq.Event(c,d);
},cq.Event.prototype={isDefaultPrevented:bM,isPropagationStopped:bM,isImmediatePropagationStopped:bM,preventDefault:function(){
var b=this.originalEvent;
this.isDefaultPrevented=bI,b&&(b.preventDefault?b.preventDefault():b.returnValue=!1);
},stopPropagation:function(){
var b=this.originalEvent;
this.isPropagationStopped=bI,b&&(b.stopPropagation&&b.stopPropagation(),b.cancelBubble=!0);
},stopImmediatePropagation:function(){
this.isImmediatePropagationStopped=bI,this.stopPropagation();
}},cq.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(c,d){
cq.event.special[c]={delegateType:d,bindType:d,handle:function(b){
var g,h=this,i=b.relatedTarget,j=b.handleObj;
return (!i||i!==h&&!cq.contains(h,i))&&(b.type=j.origType,g=j.handler.apply(this,arguments),b.type=d),g;
}};
}),ck.submitBubbles||(cq.event.special.submit={setup:function(){
return cq.nodeName(this,"form")?!1:void cq.event.add(this,"click._submit keypress._submit",function(d){
var e=d.target,f=cq.nodeName(e,"input")||cq.nodeName(e,"button")?e.form:void 0;
f&&!cq._data(f,"submitBubbles")&&(cq.event.add(f,"submit._submit",function(b){
b._submit_bubble=!0;
}),cq._data(f,"submitBubbles",!0));
});
},postDispatch:function(b){
b._submit_bubble&&(delete b._submit_bubble,this.parentNode&&!b.isTrigger&&cq.event.simulate("submit",this.parentNode,b,!0));
},teardown:function(){
return cq.nodeName(this,"form")?!1:void cq.event.remove(this,"._submit");
}}),ck.changeBubbles||(cq.event.special.change={setup:function(){
return bu.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(cq.event.add(this,"propertychange._change",function(b){
"checked"===b.originalEvent.propertyName&&(this._just_changed=!0);
}),cq.event.add(this,"click._change",function(b){
this._just_changed&&!b.isTrigger&&(this._just_changed=!1),cq.event.simulate("change",this,b,!0);
})),!1):void cq.event.add(this,"beforeactivate._change",function(c){
var d=c.target;
bu.test(d.nodeName)&&!cq._data(d,"changeBubbles")&&(cq.event.add(d,"change._change",function(b){
!this.parentNode||b.isSimulated||b.isTrigger||cq.event.simulate("change",this.parentNode,b,!0);
}),cq._data(d,"changeBubbles",!0));
});
},handle:function(c){
var d=c.target;
return this!==d||c.isSimulated||c.isTrigger||"radio"!==d.type&&"checkbox"!==d.type?c.handleObj.handler.apply(this,arguments):void 0;
},teardown:function(){
return cq.event.remove(this,"._change"),!bu.test(this.nodeName);
}}),ck.focusinBubbles||cq.each({focus:"focusin",blur:"focusout"},function(d,e){
var f=function(b){
cq.event.simulate(e,b.target,cq.event.fix(b),!0);
};
cq.event.special[e]={setup:function(){
var a=this.ownerDocument||this,b=cq._data(a,e);
b||a.addEventListener(d,f,!0),cq._data(a,e,(b||0)+1);
},teardown:function(){
var a=this.ownerDocument||this,b=cq._data(a,e)-1;
b?cq._data(a,e,b):(a.removeEventListener(d,f,!0),cq._removeData(a,e));
}};
}),cq.fn.extend({on:function(h,i,j,k,l){
var m,n;
if("object"==typeof h)
{
"string"!=typeof i&&(j=j||i,i=void 0);
for(m in h)
this.on(m,i,j,h[m],l);
return this;
}
if(null==j&&null==k?(k=i,j=i=void 0):null==k&&("string"==typeof i?(k=j,j=void 0):(k=j,j=i,i=void 0)),k===!1)
k=bM;
else if(!k)
{
return this;
}
return 1===l&&(n=k,k=function(b){
return cq().off(b),n.apply(this,arguments);
},k.guid=n.guid||(n.guid=cq.guid++)),this.each(function(){
cq.event.add(this,h,k,j,i);
});
},one:function(e,f,g,h){
return this.on(e,f,g,h,1);
},off:function(f,g,h){
var i,j;
if(f&&f.preventDefault&&f.handleObj)
{
return i=f.handleObj,cq(f.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;
}
if("object"==typeof f)
{
for(j in f)
this.off(j,g,f[j]);
return this;
}
return (g===!1||"function"==typeof g)&&(h=g,g=void 0),h===!1&&(h=bM),this.each(function(){
cq.event.remove(this,f,h,g);
});
},trigger:function(c,d){
return this.each(function(){
cq.event.trigger(c,d,this);
});
},triggerHandler:function(d,e){
var f=this[0];
return f?cq.event.trigger(d,e,f,!0):void 0;
}});
function bU(d)
{
var e=bY.split("|"),f=d.createDocumentFragment();
if(f.createElement)
while(e.length)
f.createElement(e.pop());
return f;
}
var bY="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",b2=/ jQuery\d+="(?:null|\d+)"/g,b6=new RegExp("<(?:"+bY+")[\\s/>]","i"),b9=/^\s+/,cf=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ci=/<([\w:]+)/,cl=/<tbody/i,co=/<|&#?\w+;/,cr=/<(?:script|style|link)/i,cu=/checked\s*(?:[^=]|=\s*.checked.)/i,cx=/^$|\/(?:java|ecma)script/i,cA=/^true\/(.*)/,cD=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,cG={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:ck.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},cJ=bU(c0),cM=cJ.appendChild(c0.createElement("div"));
cG.optgroup=cG.option,cG.tbody=cG.tfoot=cG.colgroup=cG.caption=cG.thead,cG.th=cG.td;
function cP(g,h)
{
var i,j,k=0,l=typeof g.getElementsByTagName!==aO?g.getElementsByTagName(h||"*"):typeof g.querySelectorAll!==aO?g.querySelectorAll(h||"*"):void 0;
if(!l)
for(l=[],i=g.childNodes||g;null!=(j=i[k]);k++)
!h||cq.nodeName(j,h)?l.push(j):cq.merge(l,cP(j,h));
return void 0===h||h&&cq.nodeName(g,h)?cq.merge([g],l):l;
}
function cS(b)
{
br.test(b.type)&&(b.defaultChecked=b.checked);
}
function cV(c,d)
{
return cq.nodeName(c,"table")&&cq.nodeName(11!==d.nodeType?d:d.firstChild,"tr")?c.getElementsByTagName("tbody")[0]||c.appendChild(c.ownerDocument.createElement("tbody")):c;
}
function cY(b)
{
return b.type=(null!==cq.find.attr(b,"type"))+"/"+b.type,b;
}
function c1(c)
{
var d=cA.exec(c.type);
return d?c.type=d[1]:c.removeAttribute("type"),c;
}
function ah(e,f)
{
for(var g,h=0;null!=(g=e[h]);h++)
cq._data(g,"globalEval",!f||cq._data(f[h],"globalEval"));
}
function ak(i,j)
{
if(1===j.nodeType&&cq.hasData(i))
{
var k,l,m,n=cq._data(i),o=cq._data(j,n),p=n.events;
if(p)
{
delete o.handle,o.events={};
for(k in p)
for(l=0,m=p[k].length;m>l;l++)
cq.event.add(j,k,p[k][l]);
}
o.data&&(o.data=cq.extend({},o.data));
}
}
function an(f,g)
{
var h,i,j;
if(1===g.nodeType)
{
if(h=g.nodeName.toLowerCase(),!ck.noCloneEvent&&g[cq.expando])
{
j=cq._data(g);
for(i in j.events)
cq.removeEvent(g,i,j.handle);
g.removeAttribute(cq.expando);
}
"script"===h&&g.text!==f.text?(cY(g).text=f.text,c1(g)):"object"===h?(g.parentNode&&(g.outerHTML=f.outerHTML),ck.html5Clone&&f.innerHTML&&!cq.trim(g.innerHTML)&&(g.innerHTML=f.innerHTML)):"input"===h&&br.test(f.type)?(g.defaultChecked=g.checked=f.checked,g.value!==f.value&&(g.value=f.value)):"option"===h?g.defaultSelected=g.selected=f.defaultSelected:("input"===h||"textarea"===h)&&(g.defaultValue=f.defaultValue);
}
}
cq.extend({clone:function(j,k,l){
var m,n,o,p,q,r=cq.contains(j.ownerDocument,j);
if(ck.html5Clone||cq.isXMLDoc(j)||!b6.test("<"+j.nodeName+">")?o=j.cloneNode(!0):(cM.innerHTML=j.outerHTML,cM.removeChild(o=cM.firstChild)),!(ck.noCloneEvent&&ck.noCloneChecked||1!==j.nodeType&&11!==j.nodeType||cq.isXMLDoc(j)))
for(m=cP(o),q=cP(j),p=0;null!=(n=q[p]);++p)
m[p]&&an(n,m[p]);
if(k)
if(l)
for(q=q||cP(j),m=m||cP(o),p=0;null!=(n=q[p]);p++)
ak(n,m[p]);
else ak(j,o);
return m=cP(o,"script"),m.length>0&&ah(m,!r&&cP(j,"script")),m=q=n=null,o;
},buildFragment:function(l,n,r,s){
for(var t,u,v,w,x,y,z,A=l.length,B=bU(n),C=[],D=0;A>D;D++)
if(u=l[D],u||0===u)
if("object"===cq.type(u))
cq.merge(C,u.nodeType?[u]:u);
else if(co.test(u))
{
w=w||B.appendChild(n.createElement("div")),x=(ci.exec(u)||["",""])[1].toLowerCase(),z=cG[x]||cG._default,w.innerHTML=z[1]+u.replace(cf,"<$1></$2>")+z[2],t=z[0];
while(t--)
w=w.lastChild;
if(!ck.leadingWhitespace&&b9.test(u)&&C.push(n.createTextNode(b9.exec(u)[0])),!ck.tbody)
{
u="table"!==x||cl.test(u)?"<table>"!==z[1]||cl.test(u)?0:w:w.firstChild,t=u&&u.childNodes.length;
while(t--)
cq.nodeName(y=u.childNodes[t],"tbody")&&!y.childNodes.length&&u.removeChild(y);
}
cq.merge(C,w.childNodes),w.textContent="";
while(w.firstChild)
w.removeChild(w.firstChild);
w=B.lastChild;
}
else C.push(n.createTextNode(u));
w&&B.removeChild(w),ck.appendChecked||cq.grep(cP(C,"input"),cS),D=0;
while(u=C[D++])
if((!s||-1===cq.inArray(u,s))&&(v=cq.contains(u.ownerDocument,u),w=cP(B.appendChild(u),"script"),v&&ah(w),r))
{
t=0;
while(u=w[t++])
cx.test(u.type||"")&&r.push(u);
}
return w=null,B;
},cleanData:function(c,l){
for(var n,o,p,q,r=0,s=cq.expando,t=cq.cache,u=ck.deleteExpando,v=cq.event.special;null!=(n=c[r]);r++)
if((l||cq.acceptData(n))&&(p=n[s],q=p&&t[p]))
{
if(q.events)
for(o in q.events)
v[o]?cq.event.remove(n,o):cq.removeEvent(n,o,q.handle);
t[p]&&(delete t[p],u?delete n[s]:typeof n.removeAttribute!==aO?n.removeAttribute(s):n[s]=null,bL.push(p));
}
}}),cq.fn.extend({text:function(b){
return bo(this,function(c){
return void 0===c?cq.text(this):this.empty().append((this[0]&&this[0].ownerDocument||c0).createTextNode(c));
},null,b,arguments.length);
},append:function(){
return this.domManip(arguments,function(c){
if(1===this.nodeType||11===this.nodeType||9===this.nodeType)
{
var d=cV(this,c);
d.appendChild(c);
}
});
},prepend:function(){
return this.domManip(arguments,function(c){
if(1===this.nodeType||11===this.nodeType||9===this.nodeType)
{
var d=cV(this,c);
d.insertBefore(c,d.firstChild);
}
});
},before:function(){
return this.domManip(arguments,function(b){
this.parentNode&&this.parentNode.insertBefore(b,this);
});
},after:function(){
return this.domManip(arguments,function(b){
this.parentNode&&this.parentNode.insertBefore(b,this.nextSibling);
});
},remove:function(f,g){
for(var h,i=f?cq.filter(f,this):this,j=0;null!=(h=i[j]);j++)
g||1!==h.nodeType||cq.cleanData(cP(h)),h.parentNode&&(g&&cq.contains(h.ownerDocument,h)&&ah(cP(h,"script")),h.parentNode.removeChild(h));
return this;
},empty:function(){
for(var c,d=0;null!=(c=this[d]);d++)
{
1===c.nodeType&&cq.cleanData(cP(c,!1));
while(c.firstChild)
c.removeChild(c.firstChild);
c.options&&cq.nodeName(c,"select")&&(c.options.length=0);
}
return this;
},clone:function(c,d){
return c=null==c?!1:c,d=null==d?c:d,this.map(function(){
return cq.clone(this,c,d);
});
},html:function(b){
return bo(this,function(f){
var g=this[0]||{},h=0,i=this.length;
if(void 0===f)
{
return 1===g.nodeType?g.innerHTML.replace(b2,""):void 0;
}
if(!("string"!=typeof f||cr.test(f)||!ck.htmlSerialize&&b6.test(f)||!ck.leadingWhitespace&&b9.test(f)||cG[(ci.exec(f)||["",""])[1].toLowerCase()]))
{
f=f.replace(cf,"<$1></$2>");
try{
for(;i>h;h++)
g=this[h]||{},1===g.nodeType&&(cq.cleanData(cP(g,!1)),g.innerHTML=f);
g=0;
}
catch(j)
{
}
}
g&&this.empty().append(f);
},null,b,arguments.length);
},replaceWith:function(){
var b=arguments[0];
return this.domManip(arguments,function(a){
b=this.parentNode,cq.cleanData(cP(this)),b&&b.replaceChild(a,this);
}),b&&(b.length||b.nodeType)?this:this.remove();
},detach:function(b){
return this.remove(b,!0);
},domManip:function(e,l){
e=bT.apply([],e);
var n,r,s,t,u,v,w=0,x=this.length,y=this,z=x-1,A=e[0],B=cq.isFunction(A);
if(B||x>1&&"string"==typeof A&&!ck.checkClone&&cu.test(A))
{
return this.each(function(a){
var b=y.eq(a);
B&&(e[0]=A.call(this,a,b.html())),b.domManip(e,l);
});
}
if(x&&(v=cq.buildFragment(e,this[0].ownerDocument,!1,this),n=v.firstChild,1===v.childNodes.length&&(v=n),n))
{
for(t=cq.map(cP(v,"script"),cY),s=t.length;x>w;w++)
r=v,w!==z&&(r=cq.clone(r,!0,!0),s&&cq.merge(t,cP(r,"script"))),l.call(this[w],r,w);
if(s)
for(u=t[t.length-1].ownerDocument,cq.map(t,c1),w=0;s>w;w++)
r=t[w],cx.test(r.type||"")&&!cq._data(r,"globalEval")&&cq.contains(u,r)&&(r.src?cq._evalUrl&&cq._evalUrl(r.src):cq.globalEval((r.text||r.textContent||r.innerHTML||"").replace(cD,"")));
v=n=null;
}
return this;
}}),cq.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(c,d){
cq.fn[c]=function(b){
for(var f,i=0,j=[],k=cq(b),l=k.length-1;l>=i;i++)
f=i===l?this:this.clone(!0),cq(k[i])[d](f),bX.apply(j,f.get());
return this.pushStack(j);
};
});
var aq,au={};
function ax(a,f)
{
var g=cq(f.createElement(a)).appendTo(f.body),h=bD.getDefaultComputedStyle?bD.getDefaultComputedStyle(g[0]).display:cq.css(g[0],"display");
return g.detach(),h;
}
function aA(d)
{
var e=c0,f=au[d];
return f||(f=ax(d,e),"none"!==f&&f||(aq=(aq||cq("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement),e=(aq[0].contentWindow||aq[0].contentDocument).document,e.write(),e.close(),f=ax(d,e),aq.detach()),au[d]=f),f;
}
!function(){
var e,f,g=c0.createElement("div"),h="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
g.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",e=g.getElementsByTagName("a")[0],e.style.cssText="float:left;opacity:.5",ck.opacity=/^0.5/.test(e.style.opacity),ck.cssFloat=!!e.style.cssFloat,g.style.backgroundClip="content-box",g.cloneNode(!0).style.backgroundClip="",ck.clearCloneStyle="content-box"===g.style.backgroundClip,e=g=null,ck.shrinkWrapBlocks=function(){
var b,d,i,j;
if(null==f)
{
if(b=c0.getElementsByTagName("body")[0],!b)
{
return;
}
j="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",d=c0.createElement("div"),i=c0.createElement("div"),b.appendChild(d).appendChild(i),f=!1,typeof i.style.zoom!==aO&&(i.style.cssText=h+";width:1px;padding:1px;zoom:1",i.innerHTML="<div></div>",i.firstChild.style.width="5px",f=3!==i.offsetWidth),b.removeChild(d),b=d=i=null;
}
return f;
};
}();
var aD=/^margin/,aG=new RegExp("^("+bf+")(?!px)[a-z%]+$","i"),aJ,aM,aP=/^(top|right|bottom|left)$/;
bD.getComputedStyle?(aJ=function(b){
return b.ownerDocument.defaultView.getComputedStyle(b,null);
},aM=function(i,j,k){
var l,m,n,o,p=i.style;
return k=k||aJ(i),o=k?k.getPropertyValue(j)||k[j]:void 0,k&&(""!==o||cq.contains(i.ownerDocument,i)||(o=cq.style(i,j)),aG.test(o)&&aD.test(j)&&(l=p.width,m=p.minWidth,n=p.maxWidth,p.minWidth=p.maxWidth=p.width=o,o=k.width,p.width=l,p.minWidth=m,p.maxWidth=n)),void 0===o?o:o+"";
}):c0.documentElement.currentStyle&&(aJ=function(b){
return b.currentStyle;
},aM=function(i,j,k){
var l,m,n,o,p=i.style;
return k=k||aJ(i),o=k?k[j]:void 0,null==o&&p&&p[j]&&(o=p[j]),aG.test(o)&&!aP.test(j)&&(l=p.left,m=i.runtimeStyle,n=m&&m.left,n&&(m.left=i.currentStyle.left),p.left="fontSize"===j?"1em":o,o=p.pixelLeft+"px",p.left=l,n&&(m.left=n)),void 0===o?o:o+""||"auto";
});
function aS(c,d)
{
return {get:function(){
var a=c();
if(null!=a)
{
return a?void delete this.get:(this.get=d).apply(this,arguments);
}
}};
}
!function(){
var a,l,m,n,o,p,q=c0.createElement("div"),r="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",s="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
q.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=q.getElementsByTagName("a")[0],a.style.cssText="float:left;opacity:.5",ck.opacity=/^0.5/.test(a.style.opacity),ck.cssFloat=!!a.style.cssFloat,q.style.backgroundClip="content-box",q.cloneNode(!0).style.backgroundClip="",ck.clearCloneStyle="content-box"===q.style.backgroundClip,a=q=null,cq.extend(ck,{reliableHiddenOffsets:function(){
if(null!=l)
{
return l;
}
var c,g,h,i=c0.createElement("div"),j=c0.getElementsByTagName("body")[0];
if(j)
{
return i.setAttribute("className","t"),i.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",c=c0.createElement("div"),c.style.cssText=r,j.appendChild(c).appendChild(i),i.innerHTML="<table><tr><td></td><td>t</td></tr></table>",g=i.getElementsByTagName("td"),g[0].style.cssText="padding:0;margin:0;border:0;display:none",h=0===g[0].offsetHeight,g[0].style.display="",g[1].style.display="none",l=h&&0===g[0].offsetHeight,j.removeChild(c),i=j=null,l;
}
},boxSizing:function(){
return null==m&&t(),m;
},boxSizingReliable:function(){
return null==n&&t(),n;
},pixelPosition:function(){
return null==o&&t(),o;
},reliableMarginRight:function(){
var f,g,h,i;
if(null==p&&bD.getComputedStyle)
{
if(f=c0.getElementsByTagName("body")[0],!f)
{
return;
}
g=c0.createElement("div"),h=c0.createElement("div"),g.style.cssText=r,f.appendChild(g).appendChild(h),i=h.appendChild(c0.createElement("div")),i.style.cssText=h.style.cssText=s,i.style.marginRight=i.style.width="0",h.style.width="1px",p=!parseFloat((bD.getComputedStyle(i,null)||{}).marginRight),f.removeChild(g);
}
return p;
}});
function t()
{
var d,e,f=c0.getElementsByTagName("body")[0];
f&&(d=c0.createElement("div"),e=c0.createElement("div"),d.style.cssText=r,f.appendChild(d).appendChild(e),e.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%",cq.swap(f,null!=f.style.zoom?{zoom:1}:{},function(){
m=4===e.offsetWidth;
}),n=!0,o=!1,p=!0,bD.getComputedStyle&&(o="1%"!==(bD.getComputedStyle(e,null)||{}).top,n="4px"===(bD.getComputedStyle(e,null)||{width:"4px"}).width),f.removeChild(d),e=f=null);
}
}(),cq.swap=function(h,i,j,k){
var l,m,n={};
for(m in i)
n[m]=h.style[m],h.style[m]=i[m];
l=j.apply(h,k||[]);
for(m in i)
h.style[m]=n[m];
return l;
};
var aV=/alpha\([^)]*\)/i,aY=/opacity\s*=\s*([^)]*)/,a1=/^(none|table(?!-c[ea]).+)/,a4=new RegExp("^("+bf+")(.*)$","i"),a7=new RegExp("^([+-])=("+bf+")","i"),ba={position:"absolute",visibility:"hidden",display:"block"},bg={letterSpacing:0,fontWeight:400},bj=["Webkit","O","Moz","ms"];
function bm(f,g)
{
if(g in f)
{
return g;
}
var h=g.charAt(0).toUpperCase()+g.slice(1),i=g,j=bj.length;
while(j--)
if(g=bj[j]+h,g in f)
{
return g;
}
return i;
}
function bp(i,j)
{
for(var k,l,m,n=[],o=0,p=i.length;p>o;o++)
l=i[o],l.style&&(n[o]=cq._data(l,"olddisplay"),k=l.style.display,j?(n[o]||"none"!==k||(l.style.display=""),""===l.style.display&&bl(l)&&(n[o]=cq._data(l,"olddisplay",aA(l.nodeName)))):n[o]||(m=bl(l),(k&&"none"!==k||!m)&&cq._data(l,"olddisplay",m?k:cq.css(l,"display"))));
for(o=0;p>o;o++)
l=i[o],l.style&&(j&&"none"!==l.style.display&&""!==l.style.display||(l.style.display=j?n[o]||"":"none"));
return i;
}
function bs(e,f,g)
{
var h=a4.exec(f);
return h?Math.max(0,h[1]-(g||0))+(h[2]||"px"):f;
}
function bv(h,i,j,k,l)
{
for(var m=j===(k?"border":"content")?4:"width"===i?1:0,n=0;4>m;m+=2)
"margin"===j&&(n+=cq.css(h,j+bi[m],!0,l)),k?("content"===j&&(n-=cq.css(h,"padding"+bi[m],!0,l)),"margin"!==j&&(n-=cq.css(h,"border"+bi[m]+"Width",!0,l))):(n+=cq.css(h,"padding"+bi[m],!0,l),"padding"!==j&&(n+=cq.css(h,"border"+bi[m]+"Width",!0,l)));
return n;
}
function by(h,i,j)
{
var k=!0,l="width"===i?h.offsetWidth:h.offsetHeight,m=aJ(h),n=ck.boxSizing()&&"border-box"===cq.css(h,"boxSizing",!1,m);
if(0>=l||null==l)
{
if(l=aM(h,i,m),(0>l||null==l)&&(l=h.style[i]),aG.test(l))
{
return l;
}
k=n&&(ck.boxSizingReliable()||l===h.style[i]),l=parseFloat(l)||0;
}
return l+bv(h,i,j||(n?"border":"content"),k,m)+"px";
}
cq.extend({cssHooks:{opacity:{get:function(d,e){
if(e)
{
var f=aM(d,"opacity");
return ""===f?"1":f;
}
}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":ck.cssFloat?"cssFloat":"styleFloat"},style:function(k,l,m,n){
if(k&&3!==k.nodeType&&8!==k.nodeType&&k.style)
{
var o,p,q,r=cq.camelCase(l),s=k.style;
if(l=cq.cssProps[r]||(cq.cssProps[r]=bm(s,r)),q=cq.cssHooks[l]||cq.cssHooks[r],void 0===m)
{
return q&&"get" in q&&void 0!==(o=q.get(k,!1,n))?o:s[l];
}
if(p=typeof m,"string"===p&&(o=a7.exec(m))&&(m=(o[1]+1)*o[2]+parseFloat(cq.css(k,l)),p="number"),null!=m&&m===m&&("number"!==p||cq.cssNumber[r]||(m+="px"),ck.clearCloneStyle||""!==m||0!==l.indexOf("background")||(s[l]="inherit"),!(q&&"set" in q&&void 0===(m=q.set(k,m,n)))))
try{
s[l]="",s[l]=m;
}
catch(t)
{
}
}
},css:function(i,j,k,l){
var m,n,o,p=cq.camelCase(j);
return j=cq.cssProps[p]||(cq.cssProps[p]=bm(i.style,p)),o=cq.cssHooks[j]||cq.cssHooks[p],o&&"get" in o&&(n=o.get(i,!0,k)),void 0===n&&(n=aM(i,j,l)),"normal"===n&&j in bg&&(n=bg[j]),""===k||k?(m=parseFloat(n),k===!0||cq.isNumeric(m)?m||0:n):n;
}}),cq.each(["height","width"],function(c,d){
cq.cssHooks[d]={get:function(b,e,f){
return e?0===b.offsetWidth&&a1.test(cq.css(b,"display"))?cq.swap(b,ba,function(){
return by(b,d,f);
}):by(b,d,f):void 0;
},set:function(b,f,g){
var h=g&&aJ(b);
return bs(b,f,g?bv(b,d,g,ck.boxSizing()&&"border-box"===cq.css(b,"boxSizing",!1,h),h):0);
}};
}),ck.opacity||(cq.cssHooks.opacity={get:function(c,d){
return aY.test((d&&c.currentStyle?c.currentStyle.filter:c.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":d?"1":"";
},set:function(g,h){
var i=g.style,j=g.currentStyle,k=cq.isNumeric(h)?"alpha(opacity="+100*h+")":"",l=j&&j.filter||i.filter||"";
i.zoom=1,(h>=1||""===h)&&""===cq.trim(l.replace(aV,""))&&i.removeAttribute&&(i.removeAttribute("filter"),""===h||j&&!j.filter)||(i.filter=aV.test(l)?l.replace(aV,k):l+" "+k);
}}),cq.cssHooks.marginRight=aS(ck.reliableMarginRight,function(c,d){
return d?cq.swap(c,{display:"inline-block"},aM,[c,"marginRight"]):void 0;
}),cq.each({margin:"",padding:"",border:"Width"},function(c,d){
cq.cssHooks[c+d]={expand:function(a){
for(var b=0,g={},h="string"==typeof a?a.split(" "):[a];4>b;b++)
g[c+bi[b]+d]=h[b]||h[b-2]||h[0];
return g;
}},aD.test(c)||(cq.cssHooks[c+d].set=bs);
}),cq.fn.extend({css:function(c,d){
return bo(this,function(h,i,j){
var k,l,m={},n=0;
if(cq.isArray(i))
{
for(k=aJ(h),l=i.length;l>n;n++)
m[i[n]]=cq.css(h,i[n],!1,k);
return m;
}
return void 0!==j?cq.style(h,i,j):cq.css(h,i);
},c,d,arguments.length>1);
},show:function(){
return bp(this,!0);
},hide:function(){
return bp(this);
},toggle:function(b){
return "boolean"==typeof b?b?this.show():this.hide():this.each(function(){
bl(this)?cq(this).show():cq(this).hide();
});
}});
function ae(f,g,h,i,j)
{
return new ae.prototype.init(f,g,h,i,j);
}
cq.Tween=ae,ae.prototype={constructor:ae,init:function(g,h,i,j,k,l){
this.elem=g,this.prop=i,this.easing=k||"swing",this.options=h,this.start=this.now=this.cur(),this.end=j,this.unit=l||(cq.cssNumber[i]?"":"px");
},cur:function(){
var b=ae.propHooks[this.prop];
return b&&b.get?b.get(this):ae.propHooks._default.get(this);
},run:function(d){
var e,f=ae.propHooks[this.prop];
return this.pos=e=this.options.duration?cq.easing[this.easing](d,this.options.duration*d,0,1,this.options.duration):d,this.now=(this.end-this.start)*e+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),f&&f.set?f.set(this):ae.propHooks._default.set(this),this;
}},ae.prototype.init.prototype=ae.prototype,ae.propHooks={_default:{get:function(c){
var d;
return null==c.elem[c.prop]||c.elem.style&&null!=c.elem.style[c.prop]?(d=cq.css(c.elem,c.prop,""),d&&"auto"!==d?d:0):c.elem[c.prop];
},set:function(b){
cq.fx.step[b.prop]?cq.fx.step[b.prop](b):b.elem.style&&(null!=b.elem.style[cq.cssProps[b.prop]]||cq.cssHooks[b.prop])?cq.style(b.elem,b.prop,b.now+b.unit):b.elem[b.prop]=b.now;
}}},ae.propHooks.scrollTop=ae.propHooks.scrollLeft={set:function(b){
b.elem.nodeType&&b.elem.parentNode&&(b.elem[b.prop]=b.now);
}},cq.easing={linear:function(b){
return b;
},swing:function(b){
return .5-Math.cos(b*Math.PI)/2;
}},cq.fx=ae.prototype.init,cq.fx.step={};
var bB,bF,bJ=/^(?:toggle|show|hide)$/,bN=new RegExp("^(?:([+-])=|)("+bf+")([a-z%]*)$","i"),bR=/queueHooks$/,bV=[cg],bZ={"*":[function(j,k){
var l=this.createTween(j,k),m=l.cur(),n=bN.exec(k),o=n&&n[3]||(cq.cssNumber[j]?"":"px"),p=(cq.cssNumber[j]||"px"!==o&&+m)&&bN.exec(cq.css(l.elem,j)),q=1,r=20;
if(p&&p[3]!==o)
{
o=o||p[3],n=n||[],p=+m||1;
do q=q||".5",p/=q,cq.style(l.elem,j,p+o);
while(q!==(q=l.cur()/m)&&1!==q&&--r);
}
return n&&(p=l.start=+p||+m||0,l.unit=o,l.end=n[1]?p+(n[1]+1)*n[2]:+n[2]),l;
}]};
function b3()
{
return setTimeout(function(){
bB=void 0;
}),bB=cq.now();
}
function b7(f,g)
{
var h,i={height:f},j=0;
for(g=g?1:0;4>j;j+=2-g)
h=bi[j],i["margin"+h]=i["padding"+h]=f;
return g&&(i.opacity=i.width=f),i;
}
function ca(h,i,j)
{
for(var k,l=(bZ[i]||[]).concat(bZ["*"]),m=0,n=l.length;n>m;m++)
if(k=l[m].call(j,i,h))
{
return k;
}
}
function cg(l,n,s)
{
var t,u,v,w,x,y,z,A,B=this,C={},D=l.style,E=l.nodeType&&bl(l),F=cq._data(l,"fxshow");
s.queue||(x=cq._queueHooks(l,"fx"),null==x.unqueued&&(x.unqueued=0,y=x.empty.fire,x.empty.fire=function(){
x.unqueued||y();
}),x.unqueued++,B.always(function(){
B.always(function(){
x.unqueued--,cq.queue(l,"fx").length||x.empty.fire();
});
})),1===l.nodeType&&("height" in n||"width" in n)&&(s.overflow=[D.overflow,D.overflowX,D.overflowY],z=cq.css(l,"display"),A=aA(l.nodeName),"none"===z&&(z=A),"inline"===z&&"none"===cq.css(l,"float")&&(ck.inlineBlockNeedsLayout&&"inline"!==A?D.zoom=1:D.display="inline-block")),s.overflow&&(D.overflow="hidden",ck.shrinkWrapBlocks()||B.always(function(){
D.overflow=s.overflow[0],D.overflowX=s.overflow[1],D.overflowY=s.overflow[2];
}));
for(t in n)
if(u=n[t],bJ.exec(u))
{
if(delete n[t],v=v||"toggle"===u,u===(E?"hide":"show"))
{
if("show"!==u||!F||void 0===F[t])
continue;
E=!0;
}
C[t]=F&&F[t]||cq.style(l,t);
}
if(!cq.isEmptyObject(C))
{
F?"hidden" in F&&(E=F.hidden):F=cq._data(l,"fxshow",{}),v&&(F.hidden=!E),E?cq(l).show():B.done(function(){
cq(l).hide();
}),B.done(function(){
var a;
cq._removeData(l,"fxshow");
for(a in C)
cq.style(l,a,C[a]);
});
for(t in C)
w=ca(E?F[t]:0,t,B),t in F||(F[t]=w.start,E&&(w.end=w.start,w.start="width"===t||"height"===t?1:0));
}
}
function cj(h,i)
{
var j,k,l,m,n;
for(j in h)
if(k=cq.camelCase(j),l=i[k],m=h[j],cq.isArray(m)&&(l=m[1],m=h[j]=m[0]),j!==k&&(h[k]=m,delete h[j]),n=cq.cssHooks[k],n&&"expand" in n)
{
m=n.expand(m),delete h[k];
for(j in m)
j in h||(h[j]=m[j],i[j]=l);
}
else i[k]=l;
}
function cm(l,m,n)
{
var o,p,q=0,r=bV.length,s=cq.Deferred().always(function(){
delete t.elem;
}),t=function(){
if(p)
{
return !1;
}
for(var a=bB||b3(),e=Math.max(0,u.startTime+u.duration-a),h=e/u.duration||0,j=1-h,k=0,w=u.tweens.length;w>k;k++)
u.tweens[k].run(j);
return s.notifyWith(l,[u,j,e]),1>j&&w?e:(s.resolveWith(l,[u]),!1);
},u=s.promise({elem:l,props:cq.extend({},m),opts:cq.extend(!0,{specialEasing:{}},n),originalProperties:m,originalOptions:n,startTime:bB||b3(),duration:n.duration,tweens:[],createTween:function(a,e){
var f=cq.Tween(l,u.opts,a,e,u.opts.specialEasing[a]||u.opts.easing);
return u.tweens.push(f),f;
},stop:function(a){
var e=0,f=a?u.tweens.length:0;
if(p)
{
return this;
}
for(p=!0;f>e;e++)
u.tweens[e].run(1);
return a?s.resolveWith(l,[u,a]):s.rejectWith(l,[u,a]),this;
}}),v=u.props;
for(cj(v,u.opts.specialEasing);r>q;q++)
if(o=bV[q].call(u,l,v,u.opts))
{
return o;
}
return cq.map(v,ca,u),cq.isFunction(u.opts.start)&&u.opts.start.call(l,u),cq.fx.timer(cq.extend(t,{elem:l,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always);
}
cq.Animation=cq.extend(cm,{tweener:function(f,g){
cq.isFunction(f)?(g=f,f=["*"]):f=f.split(" ");
for(var h,i=0,j=f.length;j>i;i++)
h=f[i],bZ[h]=bZ[h]||[],bZ[h].unshift(g);
},prefilter:function(c,d){
d?bV.unshift(c):bV.push(c);
}}),cq.speed=function(e,f,g){
var h=e&&"object"==typeof e?cq.extend({},e):{complete:g||!g&&f||cq.isFunction(e)&&e,duration:e,easing:g&&f||f&&!cq.isFunction(f)&&f};
return h.duration=cq.fx.off?0:"number"==typeof h.duration?h.duration:h.duration in cq.fx.speeds?cq.fx.speeds[h.duration]:cq.fx.speeds._default,(null==h.queue||h.queue===!0)&&(h.queue="fx"),h.old=h.complete,h.complete=function(){
cq.isFunction(h.old)&&h.old.call(this),h.queue&&cq.dequeue(this,h.queue);
},h;
},cq.fn.extend({fadeTo:function(e,f,g,h){
return this.filter(bl).css("opacity",0).show().end().animate({opacity:f},e,g,h);
},animate:function(h,i,j,k){
var l=cq.isEmptyObject(h),m=cq.speed(i,j,k),n=function(){
var a=cm(this,cq.extend({},h),m);
(l||cq._data(this,"finish"))&&a.stop(!0);
};
return n.finish=n,l||m.queue===!1?this.each(n):this.queue(m.queue,n);
},stop:function(e,f,g){
var h=function(c){
var d=c.stop;
delete c.stop,d(g);
};
return "string"!=typeof e&&(g=f,f=e,e=void 0),f&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){
var a=!0,c=null!=e&&e+"queueHooks",d=cq.timers,i=cq._data(this);
if(c)
i[c]&&i[c].stop&&h(i[c]);
else for(c in i)
i[c]&&i[c].stop&&bR.test(c)&&h(i[c]);
for(c=d.length;c--;)
d[c].elem!==this||null!=e&&d[c].queue!==e||(d[c].anim.stop(g),a=!1,d.splice(c,1));
(a||!g)&&cq.dequeue(this,e);
});
},finish:function(b){
return b!==!1&&(b=b||"fx"),this.each(function(){
var a,h=cq._data(this),i=h[b+"queue"],j=h[b+"queueHooks"],k=cq.timers,l=i?i.length:0;
for(h.finish=!0,cq.queue(this,b,[]),j&&j.stop&&j.stop.call(this,!0),a=k.length;a--;)
k[a].elem===this&&k[a].queue===b&&(k[a].anim.stop(!0),k.splice(a,1));
for(a=0;l>a;a++)
i[a]&&i[a].finish&&i[a].finish.call(this);
delete h.finish;
});
}}),cq.each(["toggle","show","hide"],function(d,e){
var f=cq.fn[e];
cq.fn[e]=function(b,c,g){
return null==b||"boolean"==typeof b?f.apply(this,arguments):this.animate(b7(e,!0),b,c,g);
};
}),cq.each({slideDown:b7("show"),slideUp:b7("hide"),slideToggle:b7("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(c,d){
cq.fn[c]=function(b,e,f){
return this.animate(d,b,e,f);
};
}),cq.timers=[],cq.fx.tick=function(){
var d,e=cq.timers,f=0;
for(bB=cq.now();f<e.length;f++)
d=e[f],d()||e[f]!==d||e.splice(f--,1);
e.length||cq.fx.stop(),bB=void 0;
},cq.fx.timer=function(b){
cq.timers.push(b),b()?cq.fx.start():cq.timers.pop();
},cq.fx.interval=13,cq.fx.start=function(){
bF||(bF=setInterval(cq.fx.tick,cq.fx.interval));
},cq.fx.stop=function(){
clearInterval(bF),bF=null;
},cq.fx.speeds={slow:600,fast:200,_default:400},cq.fn.delay=function(c,d){
return c=cq.fx?cq.fx.speeds[c]||c:c,d=d||"fx",this.queue(d,function(a,e){
var f=setTimeout(a,c);
e.stop=function(){
clearTimeout(f);
};
});
},function(){
var f,g,h,i,j=c0.createElement("div");
j.setAttribute("className","t"),j.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",f=j.getElementsByTagName("a")[0],h=c0.createElement("select"),i=h.appendChild(c0.createElement("option")),g=j.getElementsByTagName("input")[0],f.style.cssText="top:1px",ck.getSetAttribute="t"!==j.className,ck.style=/top/.test(f.getAttribute("style")),ck.hrefNormalized="/a"===f.getAttribute("href"),ck.checkOn=!!g.value,ck.optSelected=i.selected,ck.enctype=!!c0.createElement("form").enctype,h.disabled=!0,ck.optDisabled=!i.disabled,g=c0.createElement("input"),g.setAttribute("value",""),ck.input=""===g.getAttribute("value"),g.value="t",g.setAttribute("type","radio"),ck.radioValue="t"===g.value,f=g=h=i=j=null;
}();
var cp=/\r/g;
cq.fn.extend({val:function(f){
var g,h,i,j=this[0];
{
if(arguments.length)
{
return i=cq.isFunction(f),this.each(function(a){
var b;
1===this.nodeType&&(b=i?f.call(this,a,cq(this).val()):f,null==b?b="":"number"==typeof b?b+="":cq.isArray(b)&&(b=cq.map(b,function(c){
return null==c?"":c+"";
})),g=cq.valHooks[this.type]||cq.valHooks[this.nodeName.toLowerCase()],g&&"set" in g&&void 0!==g.set(this,b,"value")||(this.value=b));
});
}
if(j)
{
return g=cq.valHooks[j.type]||cq.valHooks[j.nodeName.toLowerCase()],g&&"get" in g&&void 0!==(h=g.get(j,"value"))?h:(h=j.value,"string"==typeof h?h.replace(cp,""):null==h?"":h);
}
}
}}),cq.extend({valHooks:{option:{get:function(c){
var d=cq.find.attr(c,"value");
return null!=d?d:cq.text(c);
}},select:{get:function(j){
for(var k,l,m=j.options,n=j.selectedIndex,o="select-one"===j.type||0>n,p=o?null:[],q=o?n+1:m.length,r=0>n?q:o?n:0;q>r;r++)
if(l=m[r],!(!l.selected&&r!==n||(ck.optDisabled?l.disabled:null!==l.getAttribute("disabled"))||l.parentNode.disabled&&cq.nodeName(l.parentNode,"optgroup")))
{
if(k=cq(l).val(),o)
{
return k;
}
p.push(k);
}
return p;
},set:function(i,j){
var k,l,m=i.options,n=cq.makeArray(j),o=m.length;
while(o--)
if(l=m[o],cq.inArray(cq.valHooks.option.get(l),n)>=0)
try{
l.selected=k=!0;
}
catch(p)
{
l.scrollHeight;
}
else l.selected=!1;
return k||(i.selectedIndex=-1),m;
}}}}),cq.each(["radio","checkbox"],function(){
cq.valHooks[this]={set:function(c,d){
return cq.isArray(d)?c.checked=cq.inArray(cq(c).val(),d)>=0:void 0;
}},ck.checkOn||(cq.valHooks[this].get=function(b){
return null===b.getAttribute("value")?"on":b.value;
});
});
var cs,cv,cy=cq.expr.attrHandle,cB=/^(?:checked|selected)$/i,cE=ck.getSetAttribute,cH=ck.input;
cq.fn.extend({attr:function(c,d){
return bo(this,cq.attr,c,d,arguments.length>1);
},removeAttr:function(b){
return this.each(function(){
cq.removeAttr(this,b);
});
}}),cq.extend({attr:function(g,h,i){
var j,k,l=g.nodeType;
if(g&&3!==l&&8!==l&&2!==l)
{
return typeof g.getAttribute===aO?cq.prop(g,h,i):(1===l&&cq.isXMLDoc(g)||(h=h.toLowerCase(),j=cq.attrHooks[h]||(cq.expr.match.bool.test(h)?cv:cs)),void 0===i?j&&"get" in j&&null!==(k=j.get(g,h))?k:(k=cq.find.attr(g,h),null==k?void 0:k):null!==i?j&&"set" in j&&void 0!==(k=j.set(g,i,h))?k:(g.setAttribute(h,i+""),i):void cq.removeAttr(g,h));
}
},removeAttr:function(g,h){
var i,j,k=0,l=h&&h.match(aw);
if(l&&1===g.nodeType)
while(i=l[k++])
j=cq.propFix[i]||i,cq.expr.match.bool.test(i)?cH&&cE||!cB.test(i)?g[j]=!1:g[cq.camelCase("default-"+i)]=g[j]=!1:cq.attr(g,i,""),g.removeAttribute(cE?i:j);
},attrHooks:{type:{set:function(d,e){
if(!ck.radioValue&&"radio"===e&&cq.nodeName(d,"input"))
{
var f=d.value;
return d.setAttribute("type",e),f&&(d.value=f),e;
}
}}}}),cv={set:function(d,e,f){
return e===!1?cq.removeAttr(d,f):cH&&cE||!cB.test(f)?d.setAttribute(!cE&&cq.propFix[f]||f,f):d[cq.camelCase("default-"+f)]=d[f]=!0,f;
}},cq.each(cq.expr.match.bool.source.match(/\w+/g),function(d,e){
var f=cy[e]||cq.find.attr;
cy[e]=cH&&cE||!cB.test(e)?function(c,g,h){
var i,j;
return h||(j=cy[g],cy[g]=i,i=null!=f(c,g,h)?g.toLowerCase():null,cy[g]=j),i;
}:function(g,h,i){
return i?void 0:g[cq.camelCase("default-"+h)]?h.toLowerCase():null;
};
}),cH&&cE||(cq.attrHooks.value={set:function(d,e,f){
return cq.nodeName(d,"input")?void (d.defaultValue=e):cs&&cs.set(d,e,f);
}}),cE||(cs={set:function(e,f,g){
var h=e.getAttributeNode(g);
return h||e.setAttributeNode(h=e.ownerDocument.createAttribute(g)),h.value=f+="","value"===g||f===e.getAttribute(g)?f:void 0;
}},cy.id=cy.name=cy.coords=function(e,f,g){
var h;
return g?void 0:(h=e.getAttributeNode(f))&&""!==h.value?h.value:null;
},cq.valHooks.button={get:function(d,e){
var f=d.getAttributeNode(e);
return f&&f.specified?f.value:void 0;
},set:cs.set},cq.attrHooks.contenteditable={set:function(d,e,f){
cs.set(d,""===e?!1:e,f);
}},cq.each(["width","height"],function(c,d){
cq.attrHooks[d]={set:function(b,e){
return ""===e?(b.setAttribute(d,"auto"),e):void 0;
}};
})),ck.style||(cq.attrHooks.style={get:function(b){
return b.style.cssText||void 0;
},set:function(c,d){
return c.style.cssText=d+"";
}});
var cK=/^(?:input|select|textarea|button|object)$/i,cN=/^(?:a|area)$/i;
cq.fn.extend({prop:function(c,d){
return bo(this,cq.prop,c,d,arguments.length>1);
},removeProp:function(b){
return b=cq.propFix[b]||b,this.each(function(){
try{
this[b]=void 0,delete this[b];
}
catch(a)
{
}
});
}}),cq.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(h,i,j){
var k,l,m,n=h.nodeType;
if(h&&3!==n&&8!==n&&2!==n)
{
return m=1!==n||!cq.isXMLDoc(h),m&&(i=cq.propFix[i]||i,l=cq.propHooks[i]),void 0!==j?l&&"set" in l&&void 0!==(k=l.set(h,j,i))?k:h[i]=j:l&&"get" in l&&null!==(k=l.get(h,i))?k:h[i];
}
},propHooks:{tabIndex:{get:function(c){
var d=cq.find.attr(c,"tabindex");
return d?parseInt(d,10):cK.test(c.nodeName)||cN.test(c.nodeName)&&c.href?0:-1;
}}}}),ck.hrefNormalized||cq.each(["href","src"],function(c,d){
cq.propHooks[d]={get:function(b){
return b.getAttribute(d,4);
}};
}),ck.optSelected||(cq.propHooks.selected={get:function(c){
var d=c.parentNode;
return d&&(d.selectedIndex,d.parentNode&&d.parentNode.selectedIndex),null;
}}),cq.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){
cq.propFix[this.toLowerCase()]=this;
}),ck.enctype||(cq.propFix.enctype="encoding");
var cQ=/[\t\r\n\f]/g;
cq.fn.extend({addClass:function(k){
var l,m,n,o,p,q,r=0,s=this.length,t="string"==typeof k&&k;
if(cq.isFunction(k))
{
return this.each(function(a){
cq(this).addClass(k.call(this,a,this.className));
});
}
if(t)
for(l=(k||"").match(aw)||[];s>r;r++)
if(m=this[r],n=1===m.nodeType&&(m.className?(" "+m.className+" ").replace(cQ," "):" "))
{
p=0;
while(o=l[p++])
n.indexOf(" "+o+" ")<0&&(n+=o+" ");
q=cq.trim(n),m.className!==q&&(m.className=q);
}
return this;
},removeClass:function(k){
var l,m,n,o,p,q,r=0,s=this.length,t=0===arguments.length||"string"==typeof k&&k;
if(cq.isFunction(k))
{
return this.each(function(a){
cq(this).removeClass(k.call(this,a,this.className));
});
}
if(t)
for(l=(k||"").match(aw)||[];s>r;r++)
if(m=this[r],n=1===m.nodeType&&(m.className?(" "+m.className+" ").replace(cQ," "):""))
{
p=0;
while(o=l[p++])
while(n.indexOf(" "+o+" ")>=0)
n=n.replace(" "+o+" "," ");
q=k?cq.trim(n):"",m.className!==q&&(m.className=q);
}
return this;
},toggleClass:function(d,e){
var f=typeof d;
return "boolean"==typeof e&&"string"===f?e?this.addClass(d):this.removeClass(d):this.each(cq.isFunction(d)?function(a){
cq(this).toggleClass(d.call(this,a,this.className,e),e);
}:function(){
if("string"===f)
{
var a,c=0,g=cq(this),h=d.match(aw)||[];
while(a=h[c++])
g.hasClass(a)?g.removeClass(a):g.addClass(a);
}
else (f===aO||"boolean"===f)&&(this.className&&cq._data(this,"__className__",this.className),this.className=this.className||d===!1?"":cq._data(this,"__className__")||"");
});
},hasClass:function(e){
for(var f=" "+e+" ",g=0,h=this.length;h>g;g++)
if(1===this[g].nodeType&&(" "+this[g].className+" ").replace(cQ," ").indexOf(f)>=0)
{
return !0;
}
return !1;
}}),cq.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(c,d){
cq.fn[d]=function(b,e){
return arguments.length>0?this.on(d,null,b,e):this.trigger(d);
};
}),cq.fn.extend({hover:function(c,d){
return this.mouseenter(c).mouseleave(d||c);
},bind:function(d,e,f){
return this.on(d,null,e,f);
},unbind:function(c,d){
return this.off(c,null,d);
},delegate:function(e,f,g,h){
return this.on(f,e,g,h);
},undelegate:function(d,e,f){
return 1===arguments.length?this.off(d,"**"):this.off(e,d||"**",f);
}});
var cT=cq.now(),cW=/\?/,cZ=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
cq.parseJSON=function(a){
if(bD.JSON&&bD.JSON.parse)
{
return bD.JSON.parse(a+"");
}
var f,g=null,h=cq.trim(a+"");
return h&&!cq.trim(h.replace(cZ,function(c,d,i,j){
return f&&d&&(g=0),0===g?c:(f=i||d,g+=!j-!i,"");
}))?Function("return "+h)():cq.error("Invalid JSON: "+a);
},cq.parseXML=function(a){
var f,g;
if(!a||"string"!=typeof a)
{
return null;
}
try{
bD.DOMParser?(g=new DOMParser(),f=g.parseFromString(a,"text/xml")):(f=new ActiveXObject("Microsoft.XMLDOM"),f.async="false",f.loadXML(a));
}
catch(h)
{
f=void 0;
}
return f&&f.documentElement&&!f.getElementsByTagName("parsererror").length||cq.error("Invalid XML: "+a),f;
};
var c2,ai,al=/#.*$/,ao=/([?&])_=[^&]*/,ar=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,av=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ay=/^(?:GET|HEAD)$/,aB=/^\/\//,aE=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,aH={},aK={},aN="*/".concat("*");
try{
ai=location.href;
}
catch(aQ)
{
ai=c0.createElement("a"),ai.href="",ai=ai.href;
}
c2=aE.exec(ai.toLowerCase())||[];
function aT(b)
{
return function(a,g){
"string"!=typeof a&&(g=a,a="*");
var h,i=0,j=a.toLowerCase().match(aw)||[];
if(cq.isFunction(g))
while(h=j[i++])
"+"===h.charAt(0)?(h=h.slice(1)||"*",(b[h]=b[h]||[]).unshift(g)):(b[h]=b[h]||[]).push(g);
};
}
function aW(h,i,j,k)
{
var l={},m=h===aK;
function n(a)
{
var b;
return l[a]=!0,cq.each(h[a]||[],function(c,d){
var e=d(i,j,k);
return "string"!=typeof e||m||l[e]?m?!(b=e):void 0:(i.dataTypes.unshift(e),n(e),!1);
}),b;
}
return n(i.dataTypes[0])||!l["*"]&&n("*");
}
function aZ(f,g)
{
var h,i,j=cq.ajaxSettings.flatOptions||{};
for(i in g)
void 0!==g[i]&&((j[i]?f:h||(h={}))[i]=g[i]);
return h&&cq.extend(!0,f,h),f;
}
function a2(j,k,l)
{
var m,n,o,p,q=j.contents,r=j.dataTypes;
while("*"===r[0])
r.shift(),void 0===n&&(n=j.mimeType||k.getResponseHeader("Content-Type"));
if(n)
for(p in q)
if(q[p]&&q[p].test(n))
{
r.unshift(p);
break;
}
if(r[0] in l)
o=r[0];
else{
for(p in l)
{
if(!r[0]||j.converters[p+" "+r[0]])
{
o=p;
break;
}
m||(m=p);
}
o=o||m;
}
return o?(o!==r[0]&&r.unshift(o),l[o]):void 0;
}
function a5(m,n,o,p)
{
var q,r,s,t,u,v={},w=m.dataTypes.slice();
if(w[1])
for(s in m.converters)
v[s.toLowerCase()]=m.converters[s];
r=w.shift();
while(r)
if(m.responseFields[r]&&(o[m.responseFields[r]]=n),!u&&p&&m.dataFilter&&(n=m.dataFilter(n,m.dataType)),u=r,r=w.shift())
if("*"===r)
r=u;
else if("*"!==u&&u!==r)
{
if(s=v[u+" "+r]||v["* "+r],!s)
for(q in v)
if(t=q.split(" "),t[1]===r&&(s=v[u+" "+t[0]]||v["* "+t[0]]))
{
s===!0?s=v[q]:v[q]!==!0&&(r=t[0],w.unshift(t[1]));
break;
}
if(s!==!0)
if(s&&m["throws"])
n=s(n);
else try{
n=s(n);
}
catch(x)
{
return {state:"parsererror",error:s?x:"No conversion from "+u+" to "+r};
}
}
return {state:"success",data:n};
}
cq.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ai,type:"GET",isLocal:av.test(c2[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":aN,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":cq.parseJSON,"text xml":cq.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(c,d){
return d?aZ(aZ(c,cq.ajaxSettings),d):aZ(cq.ajaxSettings,c);
},ajaxPrefilter:aT(aH),ajaxTransport:aT(aK),ajax:function(n,y){
"object"==typeof n&&(y=n,n=void 0),y=y||{};
var z,A,B,C,D,E,F,G,H=cq.ajaxSetup({},y),I=H.context||H,J=H.context&&(I.nodeType||I.jquery)?cq(I):cq.event,K=cq.Deferred(),L=cq.Callbacks("once memory"),M=H.statusCode||{},N={},O={},P=0,Q="canceled",R={readyState:0,getResponseHeader:function(c){
var d;
if(2===P)
{
if(!G)
{
G={};
while(d=ar.exec(C))
G[d[1].toLowerCase()]=d[2];
}
d=G[c.toLowerCase()];
}
return null==d?null:d;
},getAllResponseHeaders:function(){
return 2===P?C:null;
},setRequestHeader:function(d,e){
var f=d.toLowerCase();
return P||(d=O[f]=O[f]||d,N[d]=e),this;
},overrideMimeType:function(b){
return P||(H.mimeType=b),this;
},statusCode:function(c){
var d;
if(c)
if(2>P)
for(d in c)
M[d]=[M[d],c[d]];
else R.always(c[R.status]);
return this;
},abort:function(c){
var d=c||Q;
return F&&F.abort(d),T(0,d),this;
}};
if(K.promise(R).complete=L.add,R.success=R.done,R.error=R.fail,H.url=((n||H.url||ai)+"").replace(al,"").replace(aB,c2[1]+"//"),H.type=y.method||y.type||H.method||H.type,H.dataTypes=cq.trim(H.dataType||"*").toLowerCase().match(aw)||[""],null==H.crossDomain&&(z=aE.exec(H.url.toLowerCase()),H.crossDomain=!(!z||z[1]===c2[1]&&z[2]===c2[2]&&(z[3]||("http:"===z[1]?"80":"443"))===(c2[3]||("http:"===c2[1]?"80":"443")))),H.data&&H.processData&&"string"!=typeof H.data&&(H.data=cq.param(H.data,H.traditional)),aW(aH,H,y,R),2===P)
{
return R;
}
E=H.global,E&&0===cq.active++&&cq.event.trigger("ajaxStart"),H.type=H.type.toUpperCase(),H.hasContent=!ay.test(H.type),B=H.url,H.hasContent||(H.data&&(B=H.url+=(cW.test(B)?"&":"?")+H.data,delete H.data),H.cache===!1&&(H.url=ao.test(B)?B.replace(ao,"$1_="+cT++):B+(cW.test(B)?"&":"?")+"_="+cT++)),H.ifModified&&(cq.lastModified[B]&&R.setRequestHeader("If-Modified-Since",cq.lastModified[B]),cq.etag[B]&&R.setRequestHeader("If-None-Match",cq.etag[B])),(H.data&&H.hasContent&&H.contentType!==!1||y.contentType)&&R.setRequestHeader("Content-Type",H.contentType),R.setRequestHeader("Accept",H.dataTypes[0]&&H.accepts[H.dataTypes[0]]?H.accepts[H.dataTypes[0]]+("*"!==H.dataTypes[0]?", "+aN+"; q=0.01":""):H.accepts["*"]);
for(A in H.headers)
R.setRequestHeader(A,H.headers[A]);
if(H.beforeSend&&(H.beforeSend.call(I,R,H)===!1||2===P))
{
return R.abort();
}
Q="abort";
for(A in {success:1,error:1,complete:1})
R[A](H[A]);
if(F=aW(aK,H,y,R))
{
R.readyState=1,E&&J.trigger("ajaxSend",[R,H]),H.async&&H.timeout>0&&(D=setTimeout(function(){
R.abort("timeout");
},H.timeout));
try{
P=1,F.send(N,T);
}
catch(S)
{
if(!(2>P))
throw S;
T(-1,S);
}
}
else T(-1,"No Transport");
function T(e,f,g,h)
{
var i,k,l,m,o,p=f;
2!==P&&(P=2,D&&clearTimeout(D),F=void 0,C=h||"",R.readyState=e>0?4:0,i=e>=200&&300>e||304===e,g&&(m=a2(H,R,g)),m=a5(H,m,R,i),i?(H.ifModified&&(o=R.getResponseHeader("Last-Modified"),o&&(cq.lastModified[B]=o),o=R.getResponseHeader("etag"),o&&(cq.etag[B]=o)),204===e||"HEAD"===H.type?p="nocontent":304===e?p="notmodified":(p=m.state,k=m.data,l=m.error,i=!l)):(l=p,(e||!p)&&(p="error",0>e&&(e=0))),R.status=e,R.statusText=(f||p)+"",i?K.resolveWith(I,[k,p,R]):K.rejectWith(I,[R,p,l]),R.statusCode(M),M=void 0,E&&J.trigger(i?"ajaxSuccess":"ajaxError",[R,H,i?k:l]),L.fireWith(I,[R,p]),E&&(J.trigger("ajaxComplete",[R,H]),--cq.active||cq.event.trigger("ajaxStop")));
}
return R;
},getJSON:function(d,e,f){
return cq.get(d,e,f,"json");
},getScript:function(c,d){
return cq.get(c,void 0,d,"script");
}}),cq.each(["get","post"],function(c,d){
cq[d]=function(b,f,g,h){
return cq.isFunction(f)&&(h=h||g,g=f,f=void 0),cq.ajax({url:b,type:d,dataType:h,data:f,success:g});
};
}),cq.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(c,d){
cq.fn[d]=function(b){
return this.on(d,b);
};
}),cq._evalUrl=function(b){
return cq.ajax({url:b,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0});
},cq.fn.extend({wrapAll:function(c){
if(cq.isFunction(c))
{
return this.each(function(a){
cq(this).wrapAll(c.call(this,a));
});
}
if(this[0])
{
var d=cq(c,this[0].ownerDocument).eq(0).clone(!0);
this[0].parentNode&&d.insertBefore(this[0]),d.map(function(){
var b=this;
while(b.firstChild&&1===b.firstChild.nodeType)
b=b.firstChild;
return b;
}).append(this);
}
return this;
},wrapInner:function(b){
return this.each(cq.isFunction(b)?function(a){
cq(this).wrapInner(b.call(this,a));
}:function(){
var a=cq(this),d=a.contents();
d.length?d.wrapAll(b):a.append(b);
});
},wrap:function(c){
var d=cq.isFunction(c);
return this.each(function(a){
cq(this).wrapAll(d?c.call(this,a):c);
});
},unwrap:function(){
return this.parent().each(function(){
cq.nodeName(this,"body")||cq(this).replaceWith(this.childNodes);
}).end();
}}),cq.expr.filters.hidden=function(b){
return b.offsetWidth<=0&&b.offsetHeight<=0||!ck.reliableHiddenOffsets()&&"none"===(b.style&&b.style.display||cq.css(b,"display"));
},cq.expr.filters.visible=function(b){
return !cq.expr.filters.hidden(b);
};
var a8=/%20/g,be=/\[\]$/,bh=/\r?\n/g,bk=/^(?:submit|button|image|reset|file)$/i,bn=/^(?:input|select|textarea|keygen)/i;
function bq(f,g,h,i)
{
var j;
if(cq.isArray(g))
cq.each(g,function(a,c){
h||be.test(f)?i(f,c):bq(f+"["+("object"==typeof c?a:"")+"]",c,h,i);
});
else if(h||"object"!==cq.type(g))
i(f,g);
else for(j in g)
bq(f+"["+j+"]",g[j],h,i);
}
cq.param=function(f,g){
var h,i=[],j=function(c,d){
d=cq.isFunction(d)?d():null==d?"":d,i[i.length]=encodeURIComponent(c)+"="+encodeURIComponent(d);
};
if(void 0===g&&(g=cq.ajaxSettings&&cq.ajaxSettings.traditional),cq.isArray(f)||f.jquery&&!cq.isPlainObject(f))
cq.each(f,function(){
j(this.name,this.value);
});
else for(h in f)
bq(h,f[h],g,j);
return i.join("&").replace(a8,"+");
},cq.fn.extend({serialize:function(){
return cq.param(this.serializeArray());
},serializeArray:function(){
return this.map(function(){
var b=cq.prop(this,"elements");
return b?cq.makeArray(b):this;
}).filter(function(){
var b=this.type;
return this.name&&!cq(this).is(":disabled")&&bn.test(this.nodeName)&&!bk.test(b)&&(this.checked||!br.test(b));
}).map(function(d,e){
var f=cq(this).val();
return null==f?null:cq.isArray(f)?cq.map(f,function(b){
return {name:e.name,value:b.replace(bh,"\r\n")};
}):{name:e.name,value:f.replace(bh,"\r\n")};
}).get();
}}),cq.ajaxSettings.xhr=void 0!==bD.ActiveXObject?function(){
return !this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&af()||bC();
}:af;
var bt=0,bw={},bz=cq.ajaxSettings.xhr();
bD.ActiveXObject&&cq(bD).on("unload",function(){
for(var b in bw)
bw[b](void 0,!0);
}),ck.cors=!!bz&&"withCredentials" in bz,bz=ck.ajax=!!bz,bz&&cq.ajaxTransport(function(c){
if(!c.crossDomain||ck.cors)
{
var d;
return {send:function(a,b){
var h,i=c.xhr(),j=++bt;
if(i.open(c.type,c.url,c.async,c.username,c.password),c.xhrFields)
for(h in c.xhrFields)
i[h]=c.xhrFields[h];
c.mimeType&&i.overrideMimeType&&i.overrideMimeType(c.mimeType),c.crossDomain||a["X-Requested-With"]||(a["X-Requested-With"]="XMLHttpRequest");
for(h in a)
void 0!==a[h]&&i.setRequestHeader(h,a[h]+"");
i.send(c.hasContent&&c.data||null),d=function(f,g){
var l,m,n;
if(d&&(g||4===i.readyState))
if(delete bw[j],d=void 0,i.onreadystatechange=cq.noop,g)
4!==i.readyState&&i.abort();
else{
n={},l=i.status,"string"==typeof i.responseText&&(n.text=i.responseText);
try{
m=i.statusText;
}
catch(o)
{
m="";
}
l||!c.isLocal||c.crossDomain?1223===l&&(l=204):l=n.text?200:404;
}
n&&b(l,m,n,i.getAllResponseHeaders());
},c.async?4===i.readyState?setTimeout(d):i.onreadystatechange=bw[j]=d:d();
},abort:function(){
d&&d(void 0,!0);
}};
}
});
function af()
{
try{
return new bD.XMLHttpRequest();
}
catch(a)
{
}
}
function bC()
{
try{
return new bD.ActiveXObject("Microsoft.XMLHTTP");
}
catch(a)
{
}
}
cq.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(b){
return cq.globalEval(b),b;
}}}),cq.ajaxPrefilter("script",function(b){
void 0===b.cache&&(b.cache=!1),b.crossDomain&&(b.type="GET",b.global=!1);
}),cq.ajaxTransport("script",function(d){
if(d.crossDomain)
{
var e,f=c0.head||cq("head")[0]||c0.documentElement;
return {send:function(a,b){
e=c0.createElement("script"),e.async=!0,d.scriptCharset&&(e.charset=d.scriptCharset),e.src=d.url,e.onload=e.onreadystatechange=function(g,h){
(h||!e.readyState||/loaded|complete/.test(e.readyState))&&(e.onload=e.onreadystatechange=null,e.parentNode&&e.parentNode.removeChild(e),e=null,h||b(200,"success"));
},f.insertBefore(e,f.firstChild);
},abort:function(){
e&&e.onload(void 0,!0);
}};
}
});
var bG=[],bK=/(=)\?(?=&|$)|\?\?/;
cq.ajaxSetup({jsonp:"callback",jsonpCallback:function(){
var b=bG.pop()||cq.expando+"_"+cT++;
return this[b]=!0,b;
}}),cq.ajaxPrefilter("json jsonp",function(a,i,j){
var k,l,m,n=a.jsonp!==!1&&(bK.test(a.url)?"url":"string"==typeof a.data&&!(a.contentType||"").indexOf("application/x-www-form-urlencoded")&&bK.test(a.data)&&"data");
return n||"jsonp"===a.dataTypes[0]?(k=a.jsonpCallback=cq.isFunction(a.jsonpCallback)?a.jsonpCallback():a.jsonpCallback,n?a[n]=a[n].replace(bK,"$1"+k):a.jsonp!==!1&&(a.url+=(cW.test(a.url)?"&":"?")+a.jsonp+"="+k),a.converters["script json"]=function(){
return m||cq.error(k+" was not called"),m[0];
},a.dataTypes[0]="json",l=bD[k],bD[k]=function(){
m=arguments;
},j.always(function(){
bD[k]=l,a[k]&&(a.jsonpCallback=i.jsonpCallback,bG.push(k)),m&&cq.isFunction(l)&&l(m[0]),m=l=void 0;
}),"script"):void 0;
}),cq.parseHTML=function(f,g,h){
if(!f||"string"!=typeof f)
{
return null;
}
"boolean"==typeof g&&(h=g,g=!1),g=g||c0;
var i=cO.exec(f),j=!h&&[];
return i?[g.createElement(i[1])]:(i=cq.buildFragment([f],g,j),j&&j.length&&cq(j).remove(),cq.merge([],i.childNodes));
};
var bO=cq.fn.load;
cq.fn.load=function(i,j,k){
if("string"!=typeof i&&bO)
{
return bO.apply(this,arguments);
}
var l,m,n,o=this,p=i.indexOf(" ");
return p>=0&&(l=i.slice(p,i.length),i=i.slice(0,p)),cq.isFunction(j)?(k=j,j=void 0):j&&"object"==typeof j&&(n="POST"),o.length>0&&cq.ajax({url:i,type:n,dataType:"html",data:j}).done(function(b){
m=arguments,o.html(l?cq("<div>").append(cq.parseHTML(b)).find(l):b);
}).complete(k&&function(c,d){
o.each(k,m||[c.responseText,d,c]);
}),this;
},cq.expr.filters.animated=function(b){
return cq.grep(cq.timers,function(a){
return b===a.elem;
}).length;
};
var bS=bD.document.documentElement;
function bW(b)
{
return cq.isWindow(b)?b:9===b.nodeType?b.defaultView||b.parentWindow:!1;
}
cq.offset={setOffset:function(n,o,p){
var q,r,s,t,u,v,w,x=cq.css(n,"position"),y=cq(n),z={};
"static"===x&&(n.style.position="relative"),u=y.offset(),s=cq.css(n,"top"),v=cq.css(n,"left"),w=("absolute"===x||"fixed"===x)&&cq.inArray("auto",[s,v])>-1,w?(q=y.position(),t=q.top,r=q.left):(t=parseFloat(s)||0,r=parseFloat(v)||0),cq.isFunction(o)&&(o=o.call(n,p,u)),null!=o.top&&(z.top=o.top-u.top+t),null!=o.left&&(z.left=o.left-u.left+r),"using" in o?o.using.call(n,z):y.css(z);
}},cq.fn.extend({offset:function(g){
if(arguments.length)
{
return void 0===g?this:this.each(function(a){
cq.offset.setOffset(this,g,a);
});
}
var h,i,j={top:0,left:0},k=this[0],l=k&&k.ownerDocument;
if(l)
{
return h=l.documentElement,cq.contains(h,k)?(typeof k.getBoundingClientRect!==aO&&(j=k.getBoundingClientRect()),i=bW(l),{top:j.top+(i.pageYOffset||h.scrollTop)-(h.clientTop||0),left:j.left+(i.pageXOffset||h.scrollLeft)-(h.clientLeft||0)}):j;
}
},position:function(){
if(this[0])
{
var e,f,g={top:0,left:0},h=this[0];
return "fixed"===cq.css(h,"position")?f=h.getBoundingClientRect():(e=this.offsetParent(),f=this.offset(),cq.nodeName(e[0],"html")||(g=e.offset()),g.top+=cq.css(e[0],"borderTopWidth",!0),g.left+=cq.css(e[0],"borderLeftWidth",!0)),{top:f.top-g.top-cq.css(h,"marginTop",!0),left:f.left-g.left-cq.css(h,"marginLeft",!0)};
}
},offsetParent:function(){
return this.map(function(){
var b=this.offsetParent||bS;
while(b&&!cq.nodeName(b,"html")&&"static"===cq.css(b,"position"))
b=b.offsetParent;
return b||bS;
});
}}),cq.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(d,e){
var f=/Y/.test(e);
cq.fn[d]=function(a){
return bo(this,function(b,c,g){
var h=bW(b);
return void 0===g?h?e in h?h[e]:h.document.documentElement[c]:b[c]:void (h?h.scrollTo(f?cq(h).scrollLeft():g,f?g:cq(h).scrollTop()):b[c]=g);
},d,a,arguments.length,null);
};
}),cq.each(["top","left"],function(c,d){
cq.cssHooks[d]=aS(ck.pixelPosition,function(b,e){
return e?(e=aM(b,d),aG.test(e)?cq(b).position()[d]+"px":e):void 0;
});
}),cq.each({Height:"height",Width:"width"},function(c,d){
cq.each({padding:"inner"+c,content:d,"":"outer"+c},function(a,b){
cq.fn[b]=function(h,i){
var j=arguments.length&&(a||"boolean"!=typeof h),k=a||(h===!0||i===!0?"margin":"border");
return bo(this,function(f,g,l){
var m;
return cq.isWindow(f)?f.document.documentElement["client"+c]:9===f.nodeType?(m=f.documentElement,Math.max(f.body["scroll"+c],m["scroll"+c],f.body["offset"+c],m["offset"+c],m["client"+c])):void 0===l?cq.css(f,g,k):cq.style(f,g,l,k);
},d,j?h:void 0,j,null);
};
});
}),cq.fn.size=function(){
return this.length;
},cq.fn.andSelf=cq.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){
return cq;
});
var b0=bD.jQuery,b4=bD.$;
return cq.noConflict=function(a){
return bD.$===cq&&(bD.$=b4),a&&bD.jQuery===cq&&(bD.jQuery=b0),cq;
},typeof bH===aO&&(bD.jQuery=bD.$=cq),cq;
});
