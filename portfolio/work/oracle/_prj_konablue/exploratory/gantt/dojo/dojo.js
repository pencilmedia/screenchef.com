/*
	Copyright (c) 2004-2006, The Dojo Foundation
	All Rights Reserved.

	Licensed under the Academic Free License version 2.1 or above OR the
	modified BSD license. For more information on Dojo licensing, see:

		http://dojotoolkit.org/community/licensing.shtml
*/

/*
	This is a compiled version of Dojo, built for deployment and not for
	development. To get an editable version, please visit:

		http://dojotoolkit.org

	for documentation and information on getting the source.
*/

if(typeof dojo=="undefined"){
var dj_global=this;
function dj_undef(_1,_2){
if(_2==null){
_2=dj_global;
}
return (typeof _2[_1]=="undefined");
}
if(dj_undef("djConfig")){
var djConfig={};
}
if(dj_undef("dojo")){
var dojo={};
}
dojo.version={major:0,minor:0,patch:0,flag:"dev",revision:Number("$Rev: 4364 $".match(/[0-9]+/)[0]),toString:function(){
with(dojo.version){
return major+"."+minor+"."+patch+flag+" ("+revision+")";
}
}};
dojo.evalProp=function(_3,_4,_5){
return (_4&&!dj_undef(_3,_4)?_4[_3]:(_5?(_4[_3]={}):undefined));
};
dojo.parseObjPath=function(_6,_7,_8){
var _9=(_7!=null?_7:dj_global);
var _a=_6.split(".");
var _b=_a.pop();
for(var i=0,l=_a.length;i<l&&_9;i++){
_9=dojo.evalProp(_a[i],_9,_8);
}
return {obj:_9,prop:_b};
};
dojo.evalObjPath=function(_d,_e){
if(typeof _d!="string"){
return dj_global;
}
if(_d.indexOf(".")==-1){
return dojo.evalProp(_d,dj_global,_e);
}
var _f=dojo.parseObjPath(_d,dj_global,_e);
if(_f){
return dojo.evalProp(_f.prop,_f.obj,_e);
}
return null;
};
dojo.errorToString=function(_10){
if(!dj_undef("message",_10)){
return _10.message;
}else{
if(!dj_undef("description",_10)){
return _10.description;
}else{
return _10;
}
}
};
dojo.raise=function(_11,_12){
if(_12){
_11=_11+": "+dojo.errorToString(_12);
}
try{
dojo.hostenv.println("FATAL: "+_11);
}
catch(e){
}
throw Error(_11);
};
dojo.debug=function(){
};
dojo.debugShallow=function(obj){
};
dojo.profile={start:function(){
},end:function(){
},stop:function(){
},dump:function(){
}};
function dj_eval(_14){
return dj_global.eval?dj_global.eval(_14):eval(_14);
}
dojo.unimplemented=function(_15,_16){
var _17="'"+_15+"' not implemented";
if(_16!=null){
_17+=" "+_16;
}
dojo.raise(_17);
};
dojo.deprecated=function(_18,_19,_1a){
var _1b="DEPRECATED: "+_18;
if(_19){
_1b+=" "+_19;
}
if(_1a){
_1b+=" -- will be removed in version: "+_1a;
}
dojo.debug(_1b);
};
dojo.inherits=function(_1c,_1d){
if(typeof _1d!="function"){
dojo.raise("dojo.inherits: superclass argument ["+_1d+"] must be a function (subclass: ["+_1c+"']");
}
_1c.prototype=new _1d();
_1c.prototype.constructor=_1c;
_1c.superclass=_1d.prototype;
_1c["super"]=_1d.prototype;
};
dojo.render=(function(){
function vscaffold(_1e,_1f){
var tmp={capable:false,support:{builtin:false,plugin:false},prefixes:_1e};
for(var _21 in _1f){
tmp[_21]=false;
}
return tmp;
}
return {name:"",ver:dojo.version,os:{win:false,linux:false,osx:false},html:vscaffold(["html"],["ie","opera","khtml","safari","moz"]),svg:vscaffold(["svg"],["corel","adobe","batik"]),vml:vscaffold(["vml"],["ie"]),swf:vscaffold(["Swf","Flash","Mm"],["mm"]),swt:vscaffold(["Swt"],["ibm"])};
})();
dojo.hostenv=(function(){
var _22={isDebug:false,allowQueryConfig:false,baseScriptUri:"",baseRelativePath:"",libraryScriptUri:"",iePreventClobber:false,ieClobberMinimal:true,preventBackButtonFix:true,searchIds:[],parseWidgets:true};
if(typeof djConfig=="undefined"){
djConfig=_22;
}else{
for(var _23 in _22){
if(typeof djConfig[_23]=="undefined"){
djConfig[_23]=_22[_23];
}
}
}
return {name_:"(unset)",version_:"(unset)",getName:function(){
return this.name_;
},getVersion:function(){
return this.version_;
},getText:function(uri){
dojo.unimplemented("getText","uri="+uri);
}};
})();
dojo.hostenv.getBaseScriptUri=function(){
if(djConfig.baseScriptUri.length){
return djConfig.baseScriptUri;
}
var uri=new String(djConfig.libraryScriptUri||djConfig.baseRelativePath);
if(!uri){
dojo.raise("Nothing returned by getLibraryScriptUri(): "+uri);
}
var _26=uri.lastIndexOf("/");
djConfig.baseScriptUri=djConfig.baseRelativePath;
return djConfig.baseScriptUri;
};
(function(){
var _27={pkgFileName:"__package__",loading_modules_:{},loaded_modules_:{},addedToLoadingCount:[],removedFromLoadingCount:[],inFlightCount:0,modulePrefixes_:{dojo:{name:"dojo",value:"src"}},setModulePrefix:function(_28,_29){
this.modulePrefixes_[_28]={name:_28,value:_29};
},getModulePrefix:function(_2a){
var mp=this.modulePrefixes_;
if((mp[_2a])&&(mp[_2a]["name"])){
return mp[_2a].value;
}
return _2a;
},getTextStack:[],loadUriStack:[],loadedUris:[],post_load_:false,modulesLoadedListeners:[],unloadListeners:[],loadNotifying:false};
for(var _2c in _27){
dojo.hostenv[_2c]=_27[_2c];
}
})();
dojo.hostenv.loadPath=function(_2d,_2e,cb){
var uri;
if((_2d.charAt(0)=="/")||(_2d.match(/^\w+:/))){
uri=_2d;
}else{
uri=this.getBaseScriptUri()+_2d;
}
if(djConfig.cacheBust&&dojo.render.html.capable){
uri+="?"+String(djConfig.cacheBust).replace(/\W+/g,"");
}
try{
return ((!_2e)?this.loadUri(uri,cb):this.loadUriAndCheck(uri,_2e,cb));
}
catch(e){
dojo.debug(e);
return false;
}
};
dojo.hostenv.loadUri=function(uri,cb){
if(this.loadedUris[uri]){
return 1;
}
var _33=this.getText(uri,null,true);
if(_33==null){
return 0;
}
this.loadedUris[uri]=true;
if(cb){
_33="("+_33+")";
}
var _34=dj_eval(_33);
if(cb){
cb(_34);
}
return 1;
};
dojo.hostenv.loadUriAndCheck=function(uri,_36,cb){
var ok=true;
try{
ok=this.loadUri(uri,cb);
}
catch(e){
dojo.debug("failed loading ",uri," with error: ",e);
}
return ((ok)&&(this.findModule(_36,false)))?true:false;
};
dojo.loaded=function(){
};
dojo.unloaded=function(){
};
dojo.hostenv.loaded=function(){
this.loadNotifying=true;
this.post_load_=true;
var mll=this.modulesLoadedListeners;
for(var x=0;x<mll.length;x++){
mll[x]();
}
this.modulesLoadedListeners=[];
this.loadNotifying=false;
dojo.loaded();
};
dojo.hostenv.unloaded=function(){
var mll=this.unloadListeners;
while(mll.length){
(mll.pop())();
}
dojo.unloaded();
};
dojo.addOnLoad=function(obj,_3d){
var dh=dojo.hostenv;
if(arguments.length==1){
dh.modulesLoadedListeners.push(obj);
}else{
if(arguments.length>1){
dh.modulesLoadedListeners.push(function(){
obj[_3d]();
});
}
}
if(dh.post_load_&&dh.inFlightCount==0&&!dh.loadNotifying){
dh.callLoaded();
}
};
dojo.addOnUnload=function(obj,_40){
var dh=dojo.hostenv;
if(arguments.length==1){
dh.unloadListeners.push(obj);
}else{
if(arguments.length>1){
dh.unloadListeners.push(function(){
obj[_40]();
});
}
}
};
dojo.hostenv.modulesLoaded=function(){
if(this.post_load_){
return;
}
if((this.loadUriStack.length==0)&&(this.getTextStack.length==0)){
if(this.inFlightCount>0){
dojo.debug("files still in flight!");
return;
}
dojo.hostenv.callLoaded();
}
};
dojo.hostenv.callLoaded=function(){
if(typeof setTimeout=="object"){
setTimeout("dojo.hostenv.loaded();",0);
}else{
dojo.hostenv.loaded();
}
};
dojo.hostenv.getModuleSymbols=function(_42){
var _43=_42.split(".");
for(var i=_43.length-1;i>0;i--){
var _45=_43.slice(0,i).join(".");
var _46=this.getModulePrefix(_45);
if(_46!=_45){
_43.splice(0,i,_46);
break;
}
}
return _43;
};
dojo.hostenv._global_omit_module_check=false;
dojo.hostenv.loadModule=function(_47,_48,_49){
if(!_47){
return;
}
_49=this._global_omit_module_check||_49;
var _4a=this.findModule(_47,false);
if(_4a){
return _4a;
}
if(dj_undef(_47,this.loading_modules_)){
this.addedToLoadingCount.push(_47);
}
this.loading_modules_[_47]=1;
var _4b=_47.replace(/\./g,"/")+".js";
var _4c=this.getModuleSymbols(_47);
var _4d=((_4c[0].charAt(0)!="/")&&(!_4c[0].match(/^\w+:/)));
var _4e=_4c[_4c.length-1];
var _4f=_47.split(".");
if(djConfig.autoLoadNamespace){
dojo.getNamespace(_4c[0]);
}
if(_4e=="*"){
_47=(_4f.slice(0,-1)).join(".");
while(_4c.length){
_4c.pop();
_4c.push(this.pkgFileName);
_4b=_4c.join("/")+".js";
if(_4d&&(_4b.charAt(0)=="/")){
_4b=_4b.slice(1);
}
ok=this.loadPath(_4b,((!_49)?_47:null));
if(ok){
break;
}
_4c.pop();
}
}else{
_4b=_4c.join("/")+".js";
_47=_4f.join(".");
var ok=this.loadPath(_4b,((!_49)?_47:null));
if((!ok)&&(!_48)){
_4c.pop();
while(_4c.length){
_4b=_4c.join("/")+".js";
ok=this.loadPath(_4b,((!_49)?_47:null));
if(ok){
break;
}
_4c.pop();
_4b=_4c.join("/")+"/"+this.pkgFileName+".js";
if(_4d&&(_4b.charAt(0)=="/")){
_4b=_4b.slice(1);
}
ok=this.loadPath(_4b,((!_49)?_47:null));
if(ok){
break;
}
}
}
if((!ok)&&(!_49)){
dojo.raise("Could not load '"+_47+"'; last tried '"+_4b+"'");
}
}
if(!_49&&!this["isXDomain"]){
_4a=this.findModule(_47,false);
if(!_4a){
dojo.raise("symbol '"+_47+"' is not defined after loading '"+_4b+"'");
}
}
return _4a;
};
dojo.hostenv.startPackage=function(_51){
var _52=dojo.evalObjPath((_51.split(".").slice(0,-1)).join("."));
this.loaded_modules_[(new String(_51)).toLowerCase()]=_52;
var _53=_51.split(/\./);
if(_53[_53.length-1]=="*"){
_53.pop();
}
return dojo.evalObjPath(_53.join("."),true);
};
dojo.hostenv.findModule=function(_54,_55){
var lmn=(new String(_54)).toLowerCase();
if(this.loaded_modules_[lmn]){
return this.loaded_modules_[lmn];
}
var _57=dojo.evalObjPath(_54);
if((_54)&&(typeof _57!="undefined")&&(_57)){
this.loaded_modules_[lmn]=_57;
return _57;
}
if(_55){
dojo.raise("no loaded module named '"+_54+"'");
}
return null;
};
dojo.kwCompoundRequire=function(_58){
var _59=_58["common"]||[];
var _5a=(_58[dojo.hostenv.name_])?_59.concat(_58[dojo.hostenv.name_]||[]):_59.concat(_58["default"]||[]);
for(var x=0;x<_5a.length;x++){
var _5c=_5a[x];
if(_5c.constructor==Array){
dojo.hostenv.loadModule.apply(dojo.hostenv,_5c);
}else{
dojo.hostenv.loadModule(_5c);
}
}
};
dojo.require=function(){
dojo.hostenv.loadModule.apply(dojo.hostenv,arguments);
};
dojo.requireIf=function(){
if((arguments[0]===true)||(arguments[0]=="common")||(arguments[0]&&dojo.render[arguments[0]].capable)){
var _5d=[];
for(var i=1;i<arguments.length;i++){
_5d.push(arguments[i]);
}
dojo.require.apply(dojo,_5d);
}
};
dojo.requireAfterIf=dojo.requireIf;
dojo.provide=function(){
return dojo.hostenv.startPackage.apply(dojo.hostenv,arguments);
};
dojo.setModulePrefix=function(_5f,_60){
return dojo.hostenv.setModulePrefix(_5f,_60);
};
dojo.exists=function(obj,_62){
var p=_62.split(".");
for(var i=0;i<p.length;i++){
if(!(obj[p[i]])){
return false;
}
obj=obj[p[i]];
}
return true;
};
}
if(typeof window=="undefined"){
dojo.raise("no window object");
}
(function(){
if(djConfig.allowQueryConfig){
var _65=document.location.toString();
var _66=_65.split("?",2);
if(_66.length>1){
var _67=_66[1];
var _68=_67.split("&");
for(var x in _68){
var sp=_68[x].split("=");
if((sp[0].length>9)&&(sp[0].substr(0,9)=="djConfig.")){
var opt=sp[0].substr(9);
try{
djConfig[opt]=eval(sp[1]);
}
catch(e){
djConfig[opt]=sp[1];
}
}
}
}
}
if(((djConfig["baseScriptUri"]=="")||(djConfig["baseRelativePath"]==""))&&(document&&document.getElementsByTagName)){
var _6c=document.getElementsByTagName("script");
var _6d=/(__package__|dojo|bootstrap1)\.js([\?\.]|$)/i;
for(var i=0;i<_6c.length;i++){
var src=_6c[i].getAttribute("src");
if(!src){
continue;
}
var m=src.match(_6d);
if(m){
var _71=src.substring(0,m.index);
if(src.indexOf("bootstrap1")>-1){
_71+="../";
}
if(!this["djConfig"]){
djConfig={};
}
if(djConfig["baseScriptUri"]==""){
djConfig["baseScriptUri"]=_71;
}
if(djConfig["baseRelativePath"]==""){
djConfig["baseRelativePath"]=_71;
}
break;
}
}
}
var dr=dojo.render;
var drh=dojo.render.html;
var drs=dojo.render.svg;
var dua=drh.UA=navigator.userAgent;
var dav=drh.AV=navigator.appVersion;
var t=true;
var f=false;
drh.capable=t;
drh.support.builtin=t;
dr.ver=parseFloat(drh.AV);
dr.os.mac=dav.indexOf("Macintosh")>=0;
dr.os.win=dav.indexOf("Windows")>=0;
dr.os.linux=dav.indexOf("X11")>=0;
drh.opera=dua.indexOf("Opera")>=0;
drh.khtml=(dav.indexOf("Konqueror")>=0)||(dav.indexOf("Safari")>=0);
drh.safari=dav.indexOf("Safari")>=0;
var _79=dua.indexOf("Gecko");
drh.mozilla=drh.moz=(_79>=0)&&(!drh.khtml);
if(drh.mozilla){
drh.geckoVersion=dua.substring(_79+6,_79+14);
}
drh.ie=(document.all)&&(!drh.opera);
drh.ie50=drh.ie&&dav.indexOf("MSIE 5.0")>=0;
drh.ie55=drh.ie&&dav.indexOf("MSIE 5.5")>=0;
drh.ie60=drh.ie&&dav.indexOf("MSIE 6.0")>=0;
drh.ie70=drh.ie&&dav.indexOf("MSIE 7.0")>=0;
dojo.locale=(drh.ie?navigator.userLanguage:navigator.language).toLowerCase();
dr.vml.capable=drh.ie;
drs.capable=f;
drs.support.plugin=f;
drs.support.builtin=f;
if(document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("org.w3c.dom.svg","1.0")){
drs.capable=t;
drs.support.builtin=t;
drs.support.plugin=f;
}
})();
dojo.hostenv.startPackage("dojo.hostenv");
dojo.render.name=dojo.hostenv.name_="browser";
dojo.hostenv.searchIds=[];
dojo.hostenv._XMLHTTP_PROGIDS=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"];
dojo.hostenv.getXmlhttpObject=function(){
var _7a=null;
var _7b=null;
try{
_7a=new XMLHttpRequest();
}
catch(e){
}
if(!_7a){
for(var i=0;i<3;++i){
var _7d=dojo.hostenv._XMLHTTP_PROGIDS[i];
try{
_7a=new ActiveXObject(_7d);
}
catch(e){
_7b=e;
}
if(_7a){
dojo.hostenv._XMLHTTP_PROGIDS=[_7d];
break;
}
}
}
if(!_7a){
return dojo.raise("XMLHTTP not available",_7b);
}
return _7a;
};
dojo.hostenv.getText=function(uri,_7f,_80){
var _81=this.getXmlhttpObject();
if(_7f){
_81.onreadystatechange=function(){
if(4==_81.readyState){
if((!_81["status"])||((200<=_81.status)&&(300>_81.status))){
_7f(_81.responseText);
}
}
};
}
_81.open("GET",uri,_7f?true:false);
try{
_81.send(null);
if(_7f){
return null;
}
if((_81["status"])&&((200>_81.status)||(300<=_81.status))){
throw Error("Unable to load "+uri+" status:"+_81.status);
}
}
catch(e){
if((_80)&&(!_7f)){
return null;
}else{
throw e;
}
}
return _81.responseText;
};
dojo.hostenv.defaultDebugContainerId="dojoDebug";
dojo.hostenv._println_buffer=[];
dojo.hostenv._println_safe=false;
dojo.hostenv.println=function(_82){
if(!dojo.hostenv._println_safe){
dojo.hostenv._println_buffer.push(_82);
}else{
try{
var _83=document.getElementById(djConfig.debugContainerId?djConfig.debugContainerId:dojo.hostenv.defaultDebugContainerId);
if(!_83){
_83=document.getElementsByTagName("body")[0]||document.body;
}
var div=document.createElement("div");
div.appendChild(document.createTextNode(_82));
_83.appendChild(div);
}
catch(e){
try{
document.write("<div>"+_82+"</div>");
}
catch(e2){
window.status=_82;
}
}
}
};
dojo.addOnLoad(function(){
dojo.hostenv._println_safe=true;
while(dojo.hostenv._println_buffer.length>0){
dojo.hostenv.println(dojo.hostenv._println_buffer.shift());
}
});
function dj_addNodeEvtHdlr(_85,_86,fp,_88){
var _89=_85["on"+_86]||function(){
};
_85["on"+_86]=function(){
fp.apply(_85,arguments);
_89.apply(_85,arguments);
};
return true;
}
dj_addNodeEvtHdlr(window,"load",function(){
if(arguments.callee.initialized){
return;
}
arguments.callee.initialized=true;
var _8a=function(){
if(dojo.render.html.ie){
dojo.hostenv.makeWidgets();
}
};
if(dojo.hostenv.inFlightCount==0){
_8a();
dojo.hostenv.modulesLoaded();
}else{
dojo.addOnLoad(_8a);
}
});
dj_addNodeEvtHdlr(window,"unload",function(){
dojo.hostenv.unloaded();
});
dojo.hostenv.makeWidgets=function(){
var _8b=[];
if(djConfig.searchIds&&djConfig.searchIds.length>0){
_8b=_8b.concat(djConfig.searchIds);
}
if(dojo.hostenv.searchIds&&dojo.hostenv.searchIds.length>0){
_8b=_8b.concat(dojo.hostenv.searchIds);
}
if((djConfig.parseWidgets)||(_8b.length>0)){
if(dojo.evalObjPath("dojo.widget.Parse")){
var _8c=new dojo.xml.Parse();
if(_8b.length>0){
for(var x=0;x<_8b.length;x++){
var _8e=document.getElementById(_8b[x]);
if(!_8e){
continue;
}
var _8f=_8c.parseElement(_8e,null,true);
dojo.widget.getParser().createComponents(_8f);
}
}else{
if(djConfig.parseWidgets){
var _8f=_8c.parseElement(document.getElementsByTagName("body")[0]||document.body,null,true);
dojo.widget.getParser().createComponents(_8f);
}
}
}
}
};
dojo.addOnLoad(function(){
if(!dojo.render.html.ie){
dojo.hostenv.makeWidgets();
}
});
try{
if(dojo.render.html.ie){
document.write("<style>v:*{ behavior:url(#default#VML); }</style>");
document.write("<xml:namespace ns=\"urn:schemas-microsoft-com:vml\" prefix=\"v\"/>");
}
}
catch(e){
}
dojo.hostenv.writeIncludes=function(){
};
dojo.byId=function(id,doc){
if(id&&(typeof id=="string"||id instanceof String)){
if(!doc){
doc=document;
}
return doc.getElementById(id);
}
return id;
};
(function(){
if(typeof dj_usingBootstrap!="undefined"){
return;
}
var _92=false;
var _93=false;
var _94=false;
if((typeof this["load"]=="function")&&((typeof this["Packages"]=="function")||(typeof this["Packages"]=="object"))){
_92=true;
}else{
if(typeof this["load"]=="function"){
_93=true;
}else{
if(window.widget){
_94=true;
}
}
}
var _95=[];
if((this["djConfig"])&&((djConfig["isDebug"])||(djConfig["debugAtAllCosts"]))){
_95.push("debug.js");
}
if((this["djConfig"])&&(djConfig["debugAtAllCosts"])&&(!_92)&&(!_94)){
_95.push("browser_debug.js");
}
if((this["djConfig"])&&(djConfig["compat"])){
_95.push("compat/"+djConfig["compat"]+".js");
}
var _96=djConfig["baseScriptUri"];
if((this["djConfig"])&&(djConfig["baseLoaderUri"])){
_96=djConfig["baseLoaderUri"];
}
for(var x=0;x<_95.length;x++){
var _98=_96+"src/"+_95[x];
if(_92||_93){
load(_98);
}else{
try{
document.write("<scr"+"ipt type='text/javascript' src='"+_98+"'></scr"+"ipt>");
}
catch(e){
var _99=document.createElement("script");
_99.src=_98;
document.getElementsByTagName("head")[0].appendChild(_99);
}
}
}
})();
dojo.fallback_locale="en";
dojo.normalizeLocale=function(_9a){
return _9a?_9a.toLowerCase():dojo.locale;
};
dojo.requireLocalization=function(_9b,_9c,_9d){
dojo.debug("EXPERIMENTAL: dojo.requireLocalization");
var _9e=dojo.hostenv.getModuleSymbols(_9b);
var _9f=_9e.concat("nls").join("/");
_9d=dojo.normalizeLocale(_9d);
var _a0=_9d.split("-");
var _a1=[];
for(var i=_a0.length;i>0;i--){
_a1.push(_a0.slice(0,i).join("-"));
}
if(_a1[_a1.length-1]!=dojo.fallback_locale){
_a1.push(dojo.fallback_locale);
}
var _a3=[_9b,"_nls",_9c].join(".");
var _a4=dojo.hostenv.startPackage(_a3);
dojo.hostenv.loaded_modules_[_a3]=_a4;
var _a5=false;
for(var i=_a1.length-1;i>=0;i--){
var loc=_a1[i];
var pkg=[_a3,loc].join(".");
var _a8=false;
if(!dojo.hostenv.findModule(pkg)){
dojo.hostenv.loaded_modules_[pkg]=null;
var _a9=[_9f,loc,_9c].join("/")+".js";
_a8=dojo.hostenv.loadPath(_a9,null,function(_aa){
_a4[loc]=_aa;
if(_a5){
for(var x in _a5){
if(!_a4[loc][x]){
_a4[loc][x]=_a5[x];
}
}
}
});
}else{
_a8=true;
}
if(_a8&&_a4[loc]){
_a5=_a4[loc];
}
}
};
dojo.Namespace=function(_ac,_ad,_ae,_af){
this.root=_ac;
this.location=_ad;
this.nsPrefix=_ae;
this.resolver=_af;
dojo.setModulePrefix(_ae,_ad);
};
dojo.Namespace.prototype.loaded=[];
dojo.Namespace.prototype.load=function(_b0,_b1){
if(this.resolver){
var _b2=this.resolver(_b0,_b1);
if(_b2&&!this.loaded[_b2]){
var req=dojo.require;
req(_b2);
this.loaded[_b2]="true";
}
if(this.loaded[_b2]){
return true;
}
}
return false;
};
djConfig.namespaces=[];
djConfig.failedNamespaces=[];
dojo.defineNamespace=function(_b4,_b5,_b6,_b7,_b8){
if(djConfig.namespaces[_b4]){
return;
}
var ns=new dojo.Namespace(_b4,_b5,_b6,_b7);
djConfig.namespaces[_b4]=ns;
if(_b6){
djConfig.namespaces[_b6]=ns;
}
if(_b8){
dojo.widget.manager.registerWidgetPackage(_b8);
}
};
dojo.getNamespace=function(_ba){
if(!djConfig.namespaces[_ba]&&!djConfig.failedNamespaces[_ba]){
var req=dojo.require;
req("dojo.namespaces."+_ba,false,true);
if(!djConfig.namespaces[_ba]){
djConfig.failedNamespaces[_ba]=true;
}
}
return djConfig.namespaces[_ba];
};
dojo.provide("dojo.string.common");
dojo.require("dojo.string");
dojo.string.trim=function(str,wh){
if(!str.replace){
return str;
}
if(!str.length){
return str;
}
var re=(wh>0)?(/^\s+/):(wh<0)?(/\s+$/):(/^\s+|\s+$/g);
return str.replace(re,"");
};
dojo.string.trimStart=function(str){
return dojo.string.trim(str,1);
};
dojo.string.trimEnd=function(str){
return dojo.string.trim(str,-1);
};
dojo.string.repeat=function(str,_c2,_c3){
var out="";
for(var i=0;i<_c2;i++){
out+=str;
if(_c3&&i<_c2-1){
out+=_c3;
}
}
return out;
};
dojo.string.pad=function(str,len,c,dir){
var out=String(str);
if(!c){
c="0";
}
if(!dir){
dir=1;
}
while(out.length<len){
if(dir>0){
out=c+out;
}else{
out+=c;
}
}
return out;
};
dojo.string.padLeft=function(str,len,c){
return dojo.string.pad(str,len,c,1);
};
dojo.string.padRight=function(str,len,c){
return dojo.string.pad(str,len,c,-1);
};
dojo.provide("dojo.string");
dojo.require("dojo.string.common");
dojo.provide("dojo.lang.common");
dojo.require("dojo.lang");
dojo.lang._mixin=function(obj,_d2){
var _d3={};
for(var x in _d2){
if(typeof _d3[x]=="undefined"||_d3[x]!=_d2[x]){
obj[x]=_d2[x];
}
}
if(dojo.render.html.ie&&dojo.lang.isFunction(_d2["toString"])&&_d2["toString"]!=obj["toString"]){
obj.toString=_d2.toString;
}
return obj;
};
dojo.lang.mixin=function(obj,_d6){
for(var i=1,l=arguments.length;i<l;i++){
dojo.lang._mixin(obj,arguments[i]);
}
return obj;
};
dojo.lang.extend=function(_d8,_d9){
for(var i=1,l=arguments.length;i<l;i++){
dojo.lang._mixin(_d8.prototype,arguments[i]);
}
return _d8;
};
dojo.lang.find=function(_db,_dc,_dd,_de){
if(!dojo.lang.isArrayLike(_db)&&dojo.lang.isArrayLike(_dc)){
var _df=_db;
_db=_dc;
_dc=_df;
}
var _e0=dojo.lang.isString(_db);
if(_e0){
_db=_db.split("");
}
if(_de){
var _e1=-1;
var i=_db.length-1;
var end=-1;
}else{
var _e1=1;
var i=0;
var end=_db.length;
}
if(_dd){
while(i!=end){
if(_db[i]===_dc){
return i;
}
i+=_e1;
}
}else{
while(i!=end){
if(_db[i]==_dc){
return i;
}
i+=_e1;
}
}
return -1;
};
dojo.lang.indexOf=dojo.lang.find;
dojo.lang.findLast=function(_e4,_e5,_e6){
return dojo.lang.find(_e4,_e5,_e6,true);
};
dojo.lang.lastIndexOf=dojo.lang.findLast;
dojo.lang.inArray=function(_e7,_e8){
return dojo.lang.find(_e7,_e8)>-1;
};
dojo.lang.isObject=function(it){
if(typeof it=="undefined"){
return false;
}
return (typeof it=="object"||it===null||dojo.lang.isArray(it)||dojo.lang.isFunction(it));
};
dojo.lang.isArray=function(it){
return (it instanceof Array||typeof it=="array");
};
dojo.lang.isArrayLike=function(it){
if(dojo.lang.isString(it)){
return false;
}
if(dojo.lang.isFunction(it)){
return false;
}
if(dojo.lang.isArray(it)){
return true;
}
if(typeof it!="undefined"&&it&&dojo.lang.isNumber(it.length)&&isFinite(it.length)){
return true;
}
return false;
};
dojo.lang.isFunction=function(it){
if(!it){
return false;
}
return (it instanceof Function||typeof it=="function");
};
dojo.lang.isString=function(it){
return (it instanceof String||typeof it=="string");
};
dojo.lang.isAlien=function(it){
if(!it){
return false;
}
return !dojo.lang.isFunction()&&/\{\s*\[native code\]\s*\}/.test(String(it));
};
dojo.lang.isBoolean=function(it){
return (it instanceof Boolean||typeof it=="boolean");
};
dojo.lang.isNumber=function(it){
return (it instanceof Number||typeof it=="number");
};
dojo.lang.isUndefined=function(it){
return ((it==undefined)&&(typeof it=="undefined"));
};
dojo.provide("dojo.lang.extras");
dojo.require("dojo.lang.common");
dojo.lang.setTimeout=function(_f2,_f3){
var _f4=window,argsStart=2;
if(!dojo.lang.isFunction(_f2)){
_f4=_f2;
_f2=_f3;
_f3=arguments[2];
argsStart++;
}
if(dojo.lang.isString(_f2)){
_f2=_f4[_f2];
}
var _f5=[];
for(var i=argsStart;i<arguments.length;i++){
_f5.push(arguments[i]);
}
return setTimeout(function(){
_f2.apply(_f4,_f5);
},_f3);
};
dojo.lang.getNameInObj=function(ns,_f8){
if(!ns){
ns=dj_global;
}
for(var x in ns){
if(ns[x]===_f8){
return new String(x);
}
}
return null;
};
dojo.lang.shallowCopy=function(obj){
var ret={},key;
for(key in obj){
if(dojo.lang.isUndefined(ret[key])){
ret[key]=obj[key];
}
}
return ret;
};
dojo.lang.firstValued=function(){
for(var i=0;i<arguments.length;i++){
if(typeof arguments[i]!="undefined"){
return arguments[i];
}
}
return undefined;
};
dojo.lang.getObjPathValue=function(_fd,_fe,_ff){
with(dojo.parseObjPath(_fd,_fe,_ff)){
return dojo.evalProp(prop,obj,_ff);
}
};
dojo.lang.setObjPathValue=function(_100,_101,_102,_103){
if(arguments.length<4){
_103=true;
}
with(dojo.parseObjPath(_100,_102,_103)){
if(obj&&(_103||(prop in obj))){
obj[prop]=_101;
}
}
};
dojo.provide("dojo.io.IO");
dojo.require("dojo.string");
dojo.require("dojo.lang.extras");
dojo.io.transports=[];
dojo.io.hdlrFuncNames=["load","error","timeout"];
dojo.io.Request=function(url,_105,_106,_107){
if((arguments.length==1)&&(arguments[0].constructor==Object)){
this.fromKwArgs(arguments[0]);
}else{
this.url=url;
if(_105){
this.mimetype=_105;
}
if(_106){
this.transport=_106;
}
if(arguments.length>=4){
this.changeUrl=_107;
}
}
};
dojo.lang.extend(dojo.io.Request,{url:"",mimetype:"text/plain",method:"GET",content:undefined,transport:undefined,changeUrl:undefined,formNode:undefined,sync:false,bindSuccess:false,useCache:false,preventCache:false,load:function(type,data,evt){
},error:function(type,_10c){
},timeout:function(type){
},handle:function(){
},timeoutSeconds:0,abort:function(){
},fromKwArgs:function(_10e){
if(_10e["url"]){
_10e.url=_10e.url.toString();
}
if(_10e["formNode"]){
_10e.formNode=dojo.byId(_10e.formNode);
}
if(!_10e["method"]&&_10e["formNode"]&&_10e["formNode"].method){
_10e.method=_10e["formNode"].method;
}
if(!_10e["handle"]&&_10e["handler"]){
_10e.handle=_10e.handler;
}
if(!_10e["load"]&&_10e["loaded"]){
_10e.load=_10e.loaded;
}
if(!_10e["changeUrl"]&&_10e["changeURL"]){
_10e.changeUrl=_10e.changeURL;
}
_10e.encoding=dojo.lang.firstValued(_10e["encoding"],djConfig["bindEncoding"],"");
_10e.sendTransport=dojo.lang.firstValued(_10e["sendTransport"],djConfig["ioSendTransport"],false);
var _10f=dojo.lang.isFunction;
for(var x=0;x<dojo.io.hdlrFuncNames.length;x++){
var fn=dojo.io.hdlrFuncNames[x];
if(_10f(_10e[fn])){
continue;
}
if(_10f(_10e["handle"])){
_10e[fn]=_10e.handle;
}
}
dojo.lang.mixin(this,_10e);
}});
dojo.io.Error=function(msg,type,num){
this.message=msg;
this.type=type||"unknown";
this.number=num||0;
};
dojo.io.transports.addTransport=function(name){
this.push(name);
this[name]=dojo.io[name];
};
dojo.io.bind=function(_116){
if(!(_116 instanceof dojo.io.Request)){
try{
_116=new dojo.io.Request(_116);
}
catch(e){
dojo.debug(e);
}
}
var _117="";
if(_116["transport"]){
_117=_116["transport"];
if(!this[_117]){
return _116;
}
}else{
for(var x=0;x<dojo.io.transports.length;x++){
var tmp=dojo.io.transports[x];
if((this[tmp])&&(this[tmp].canHandle(_116))){
_117=tmp;
}
}
if(_117==""){
return _116;
}
}
this[_117].bind(_116);
_116.bindSuccess=true;
return _116;
};
dojo.io.queueBind=function(_11a){
if(!(_11a instanceof dojo.io.Request)){
try{
_11a=new dojo.io.Request(_11a);
}
catch(e){
dojo.debug(e);
}
}
var _11b=_11a.load;
_11a.load=function(){
dojo.io._queueBindInFlight=false;
var ret=_11b.apply(this,arguments);
dojo.io._dispatchNextQueueBind();
return ret;
};
var _11d=_11a.error;
_11a.error=function(){
dojo.io._queueBindInFlight=false;
var ret=_11d.apply(this,arguments);
dojo.io._dispatchNextQueueBind();
return ret;
};
dojo.io._bindQueue.push(_11a);
dojo.io._dispatchNextQueueBind();
return _11a;
};
dojo.io._dispatchNextQueueBind=function(){
if(!dojo.io._queueBindInFlight){
dojo.io._queueBindInFlight=true;
if(dojo.io._bindQueue.length>0){
dojo.io.bind(dojo.io._bindQueue.shift());
}else{
dojo.io._queueBindInFlight=false;
}
}
};
dojo.io._bindQueue=[];
dojo.io._queueBindInFlight=false;
dojo.io.argsFromMap=function(map,_120,last){
var enc=/utf/i.test(_120||"")?encodeURIComponent:dojo.string.encodeAscii;
var _123=[];
var _124=new Object();
for(var name in map){
var _126=function(elt){
var val=enc(name)+"="+enc(elt);
_123[(last==name)?"push":"unshift"](val);
};
if(!_124[name]){
var _129=map[name];
if(dojo.lang.isArray(_129)){
dojo.lang.forEach(_129,_126);
}else{
_126(_129);
}
}
}
return _123.join("&");
};
dojo.io.setIFrameSrc=function(_12a,src,_12c){
try{
var r=dojo.render.html;
if(!_12c){
if(r.safari){
_12a.location=src;
}else{
frames[_12a.name].location=src;
}
}else{
var idoc;
if(r.ie){
idoc=_12a.contentWindow.document;
}else{
if(r.safari){
idoc=_12a.document;
}else{
idoc=_12a.contentWindow;
}
}
if(!idoc){
_12a.location=src;
return;
}else{
idoc.location.replace(src);
}
}
}
catch(e){
dojo.debug(e);
dojo.debug("setIFrameSrc: "+e);
}
};
dojo.provide("dojo.lang.array");
dojo.require("dojo.lang.common");
dojo.lang.has=function(obj,name){
try{
return (typeof obj[name]!="undefined");
}
catch(e){
return false;
}
};
dojo.lang.isEmpty=function(obj){
if(dojo.lang.isObject(obj)){
var tmp={};
var _133=0;
for(var x in obj){
if(obj[x]&&(!tmp[x])){
_133++;
break;
}
}
return (_133==0);
}else{
if(dojo.lang.isArrayLike(obj)||dojo.lang.isString(obj)){
return obj.length==0;
}
}
};
dojo.lang.map=function(arr,obj,_137){
var _138=dojo.lang.isString(arr);
if(_138){
arr=arr.split("");
}
if(dojo.lang.isFunction(obj)&&(!_137)){
_137=obj;
obj=dj_global;
}else{
if(dojo.lang.isFunction(obj)&&_137){
var _139=obj;
obj=_137;
_137=_139;
}
}
if(Array.map){
var _13a=Array.map(arr,_137,obj);
}else{
var _13a=[];
for(var i=0;i<arr.length;++i){
_13a.push(_137.call(obj,arr[i]));
}
}
if(_138){
return _13a.join("");
}else{
return _13a;
}
};
dojo.lang.forEach=function(_13c,_13d,_13e){
if(dojo.lang.isString(_13c)){
_13c=_13c.split("");
}
if(Array.forEach){
Array.forEach(_13c,_13d,_13e);
}else{
if(!_13e){
_13e=dj_global;
}
for(var i=0,l=_13c.length;i<l;i++){
_13d.call(_13e,_13c[i],i,_13c);
}
}
};
dojo.lang._everyOrSome=function(_140,arr,_142,_143){
if(dojo.lang.isString(arr)){
arr=arr.split("");
}
if(Array.every){
return Array[(_140)?"every":"some"](arr,_142,_143);
}else{
if(!_143){
_143=dj_global;
}
for(var i=0,l=arr.length;i<l;i++){
var _145=_142.call(_143,arr[i],i,arr);
if((_140)&&(!_145)){
return false;
}else{
if((!_140)&&(_145)){
return true;
}
}
}
return (_140)?true:false;
}
};
dojo.lang.every=function(arr,_147,_148){
return this._everyOrSome(true,arr,_147,_148);
};
dojo.lang.some=function(arr,_14a,_14b){
return this._everyOrSome(false,arr,_14a,_14b);
};
dojo.lang.filter=function(arr,_14d,_14e){
var _14f=dojo.lang.isString(arr);
if(_14f){
arr=arr.split("");
}
if(Array.filter){
var _150=Array.filter(arr,_14d,_14e);
}else{
if(!_14e){
if(arguments.length>=3){
dojo.raise("thisObject doesn't exist!");
}
_14e=dj_global;
}
var _150=[];
for(var i=0;i<arr.length;i++){
if(_14d.call(_14e,arr[i],i,arr)){
_150.push(arr[i]);
}
}
}
if(_14f){
return _150.join("");
}else{
return _150;
}
};
dojo.lang.unnest=function(){
var out=[];
for(var i=0;i<arguments.length;i++){
if(dojo.lang.isArrayLike(arguments[i])){
var add=dojo.lang.unnest.apply(this,arguments[i]);
out=out.concat(add);
}else{
out.push(arguments[i]);
}
}
return out;
};
dojo.lang.toArray=function(_155,_156){
var _157=[];
for(var i=_156||0;i<_155.length;i++){
_157.push(_155[i]);
}
return _157;
};
dojo.provide("dojo.lang.func");
dojo.require("dojo.lang.common");
dojo.lang.hitch=function(_159,_15a){
if(dojo.lang.isString(_15a)){
var fcn=_159[_15a];
}else{
var fcn=_15a;
}
return function(){
return fcn.apply(_159,arguments);
};
};
dojo.lang.anonCtr=0;
dojo.lang.anon={};
dojo.lang.nameAnonFunc=function(_15c,_15d,_15e){
var nso=(_15d||dojo.lang.anon);
if((_15e)||((dj_global["djConfig"])&&(djConfig["slowAnonFuncLookups"]==true))){
for(var x in nso){
if(nso[x]===_15c){
return x;
}
}
}
var ret="__"+dojo.lang.anonCtr++;
while(typeof nso[ret]!="undefined"){
ret="__"+dojo.lang.anonCtr++;
}
nso[ret]=_15c;
return ret;
};
dojo.lang.forward=function(_162){
return function(){
return this[_162].apply(this,arguments);
};
};
dojo.lang.curry=function(ns,func){
var _165=[];
ns=ns||dj_global;
if(dojo.lang.isString(func)){
func=ns[func];
}
for(var x=2;x<arguments.length;x++){
_165.push(arguments[x]);
}
var _167=(func["__preJoinArity"]||func.length)-_165.length;
function gather(_168,_169,_16a){
var _16b=_16a;
var _16c=_169.slice(0);
for(var x=0;x<_168.length;x++){
_16c.push(_168[x]);
}
_16a=_16a-_168.length;
if(_16a<=0){
var res=func.apply(ns,_16c);
_16a=_16b;
return res;
}else{
return function(){
return gather(arguments,_16c,_16a);
};
}
}
return gather([],_165,_167);
};
dojo.lang.curryArguments=function(ns,func,args,_172){
var _173=[];
var x=_172||0;
for(x=_172;x<args.length;x++){
_173.push(args[x]);
}
return dojo.lang.curry.apply(dojo.lang,[ns,func].concat(_173));
};
dojo.lang.tryThese=function(){
for(var x=0;x<arguments.length;x++){
try{
if(typeof arguments[x]=="function"){
var ret=(arguments[x]());
if(ret){
return ret;
}
}
}
catch(e){
dojo.debug(e);
}
}
};
dojo.lang.delayThese=function(farr,cb,_179,_17a){
if(!farr.length){
if(typeof _17a=="function"){
_17a();
}
return;
}
if((typeof _179=="undefined")&&(typeof cb=="number")){
_179=cb;
cb=function(){
};
}else{
if(!cb){
cb=function(){
};
if(!_179){
_179=0;
}
}
}
setTimeout(function(){
(farr.shift())();
cb();
dojo.lang.delayThese(farr,cb,_179,_17a);
},_179);
};
dojo.provide("dojo.string.extras");
dojo.require("dojo.string.common");
dojo.require("dojo.lang");
dojo.string.substituteParams=function(_17b,hash){
var map=(typeof hash=="object")?hash:dojo.lang.toArray(arguments,1);
return _17b.replace(/\%\{(\w+)\}/g,function(_17e,key){
return map[key]||dojo.raise("Substitution not found: "+key);
});
};
dojo.string.paramString=function(str,_181,_182){
dojo.deprecated("dojo.string.paramString","use dojo.string.substituteParams instead","0.4");
for(var name in _181){
var re=new RegExp("\\%\\{"+name+"\\}","g");
str=str.replace(re,_181[name]);
}
if(_182){
str=str.replace(/%\{([^\}\s]+)\}/g,"");
}
return str;
};
dojo.string.capitalize=function(str){
if(!dojo.lang.isString(str)){
return "";
}
if(arguments.length==0){
str=this;
}
var _186=str.split(" ");
for(var i=0;i<_186.length;i++){
_186[i]=_186[i].charAt(0).toUpperCase()+_186[i].substring(1);
}
return _186.join(" ");
};
dojo.string.isBlank=function(str){
if(!dojo.lang.isString(str)){
return true;
}
return (dojo.string.trim(str).length==0);
};
dojo.string.encodeAscii=function(str){
if(!dojo.lang.isString(str)){
return str;
}
var ret="";
var _18b=escape(str);
var _18c,re=/%u([0-9A-F]{4})/i;
while((_18c=_18b.match(re))){
var num=Number("0x"+_18c[1]);
var _18e=escape("&#"+num+";");
ret+=_18b.substring(0,_18c.index)+_18e;
_18b=_18b.substring(_18c.index+_18c[0].length);
}
ret+=_18b.replace(/\+/g,"%2B");
return ret;
};
dojo.string.escape=function(type,str){
var args=dojo.lang.toArray(arguments,1);
switch(type.toLowerCase()){
case "xml":
case "html":
case "xhtml":
return dojo.string.escapeXml.apply(this,args);
case "sql":
return dojo.string.escapeSql.apply(this,args);
case "regexp":
case "regex":
return dojo.string.escapeRegExp.apply(this,args);
case "javascript":
case "jscript":
case "js":
return dojo.string.escapeJavaScript.apply(this,args);
case "ascii":
return dojo.string.encodeAscii.apply(this,args);
default:
return str;
}
};
dojo.string.escapeXml=function(str,_193){
str=str.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;").replace(/"/gm,"&quot;");
if(!_193){
str=str.replace(/'/gm,"&#39;");
}
return str;
};
dojo.string.escapeSql=function(str){
return str.replace(/'/gm,"''");
};
dojo.string.escapeRegExp=function(str){
return str.replace(/\\/gm,"\\\\").replace(/([\f\b\n\t\r[\^$|?*+(){}])/gm,"\\$1");
};
dojo.string.escapeJavaScript=function(str){
return str.replace(/(["'\f\b\n\t\r])/gm,"\\$1");
};
dojo.string.escapeString=function(str){
return ("\""+str.replace(/(["\\])/g,"\\$1")+"\"").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r");
};
dojo.string.summary=function(str,len){
if(!len||str.length<=len){
return str;
}else{
return str.substring(0,len).replace(/\.+$/,"")+"...";
}
};
dojo.string.endsWith=function(str,end,_19c){
if(_19c){
str=str.toLowerCase();
end=end.toLowerCase();
}
if((str.length-end.length)<0){
return false;
}
return str.lastIndexOf(end)==str.length-end.length;
};
dojo.string.endsWithAny=function(str){
for(var i=1;i<arguments.length;i++){
if(dojo.string.endsWith(str,arguments[i])){
return true;
}
}
return false;
};
dojo.string.startsWith=function(str,_1a0,_1a1){
if(_1a1){
str=str.toLowerCase();
_1a0=_1a0.toLowerCase();
}
return str.indexOf(_1a0)==0;
};
dojo.string.startsWithAny=function(str){
for(var i=1;i<arguments.length;i++){
if(dojo.string.startsWith(str,arguments[i])){
return true;
}
}
return false;
};
dojo.string.has=function(str){
for(var i=1;i<arguments.length;i++){
if(str.indexOf(arguments[i])>-1){
return true;
}
}
return false;
};
dojo.string.normalizeNewlines=function(text,_1a7){
if(_1a7=="\n"){
text=text.replace(/\r\n/g,"\n");
text=text.replace(/\r/g,"\n");
}else{
if(_1a7=="\r"){
text=text.replace(/\r\n/g,"\r");
text=text.replace(/\n/g,"\r");
}else{
text=text.replace(/([^\r])\n/g,"$1\r\n");
text=text.replace(/\r([^\n])/g,"\r\n$1");
}
}
return text;
};
dojo.string.splitEscaped=function(str,_1a9){
var _1aa=[];
for(var i=0,prevcomma=0;i<str.length;i++){
if(str.charAt(i)=="\\"){
i++;
continue;
}
if(str.charAt(i)==_1a9){
_1aa.push(str.substring(prevcomma,i));
prevcomma=i+1;
}
}
_1aa.push(str.substr(prevcomma));
return _1aa;
};
dojo.provide("dojo.dom");
dojo.require("dojo.lang.array");
dojo.dom.ELEMENT_NODE=1;
dojo.dom.ATTRIBUTE_NODE=2;
dojo.dom.TEXT_NODE=3;
dojo.dom.CDATA_SECTION_NODE=4;
dojo.dom.ENTITY_REFERENCE_NODE=5;
dojo.dom.ENTITY_NODE=6;
dojo.dom.PROCESSING_INSTRUCTION_NODE=7;
dojo.dom.COMMENT_NODE=8;
dojo.dom.DOCUMENT_NODE=9;
dojo.dom.DOCUMENT_TYPE_NODE=10;
dojo.dom.DOCUMENT_FRAGMENT_NODE=11;
dojo.dom.NOTATION_NODE=12;
dojo.dom.dojoml="http://www.dojotoolkit.org/2004/dojoml";
dojo.dom.xmlns={svg:"http://www.w3.org/2000/svg",smil:"http://www.w3.org/2001/SMIL20/",mml:"http://www.w3.org/1998/Math/MathML",cml:"http://www.xml-cml.org",xlink:"http://www.w3.org/1999/xlink",xhtml:"http://www.w3.org/1999/xhtml",xul:"http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",xbl:"http://www.mozilla.org/xbl",fo:"http://www.w3.org/1999/XSL/Format",xsl:"http://www.w3.org/1999/XSL/Transform",xslt:"http://www.w3.org/1999/XSL/Transform",xi:"http://www.w3.org/2001/XInclude",xforms:"http://www.w3.org/2002/01/xforms",saxon:"http://icl.com/saxon",xalan:"http://xml.apache.org/xslt",xsd:"http://www.w3.org/2001/XMLSchema",dt:"http://www.w3.org/2001/XMLSchema-datatypes",xsi:"http://www.w3.org/2001/XMLSchema-instance",rdf:"http://www.w3.org/1999/02/22-rdf-syntax-ns#",rdfs:"http://www.w3.org/2000/01/rdf-schema#",dc:"http://purl.org/dc/elements/1.1/",dcq:"http://purl.org/dc/qualifiers/1.0","soap-env":"http://schemas.xmlsoap.org/soap/envelope/",wsdl:"http://schemas.xmlsoap.org/wsdl/",AdobeExtensions:"http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"};
dojo.dom.isNode=function(wh){
if(typeof Element=="object"){
try{
return wh instanceof Element;
}
catch(E){
}
}else{
return wh&&!isNaN(wh.nodeType);
}
};
dojo.dom.getTagName=function(node){
dojo.deprecated("dojo.dom.getTagName","use node.tagName instead","0.4");
var _1ae=node.tagName;
if(_1ae.substr(0,5).toLowerCase()!="dojo:"){
if(_1ae.substr(0,4).toLowerCase()=="dojo"){
return "dojo:"+_1ae.substring(4).toLowerCase();
}
var djt=node.getAttribute("dojoType")||node.getAttribute("dojotype");
if(djt){
return "dojo:"+djt.toLowerCase();
}
if((node.getAttributeNS)&&(node.getAttributeNS(this.dojoml,"type"))){
return "dojo:"+node.getAttributeNS(this.dojoml,"type").toLowerCase();
}
try{
djt=node.getAttribute("dojo:type");
}
catch(e){
}
if(djt){
return "dojo:"+djt.toLowerCase();
}
if((!dj_global["djConfig"])||(!djConfig["ignoreClassNames"])){
var _1b0=node.className||node.getAttribute("class");
if((_1b0)&&(_1b0.indexOf)&&(_1b0.indexOf("dojo-")!=-1)){
var _1b1=_1b0.split(" ");
for(var x=0;x<_1b1.length;x++){
if((_1b1[x].length>5)&&(_1b1[x].indexOf("dojo-")>=0)){
return "dojo:"+_1b1[x].substr(5).toLowerCase();
}
}
}
}
}
return _1ae.toLowerCase();
};
dojo.dom.getUniqueId=function(){
do{
var id="dj_unique_"+(++arguments.callee._idIncrement);
}while(document.getElementById(id));
return id;
};
dojo.dom.getUniqueId._idIncrement=0;
dojo.dom.firstElement=dojo.dom.getFirstChildElement=function(_1b4,_1b5){
var node=_1b4.firstChild;
while(node&&node.nodeType!=dojo.dom.ELEMENT_NODE){
node=node.nextSibling;
}
if(_1b5&&node&&node.tagName&&node.tagName.toLowerCase()!=_1b5.toLowerCase()){
node=dojo.dom.nextElement(node,_1b5);
}
return node;
};
dojo.dom.lastElement=dojo.dom.getLastChildElement=function(_1b7,_1b8){
var node=_1b7.lastChild;
while(node&&node.nodeType!=dojo.dom.ELEMENT_NODE){
node=node.previousSibling;
}
if(_1b8&&node&&node.tagName&&node.tagName.toLowerCase()!=_1b8.toLowerCase()){
node=dojo.dom.prevElement(node,_1b8);
}
return node;
};
dojo.dom.nextElement=dojo.dom.getNextSiblingElement=function(node,_1bb){
if(!node){
return null;
}
do{
node=node.nextSibling;
}while(node&&node.nodeType!=dojo.dom.ELEMENT_NODE);
if(node&&_1bb&&_1bb.toLowerCase()!=node.tagName.toLowerCase()){
return dojo.dom.nextElement(node,_1bb);
}
return node;
};
dojo.dom.prevElement=dojo.dom.getPreviousSiblingElement=function(node,_1bd){
if(!node){
return null;
}
if(_1bd){
_1bd=_1bd.toLowerCase();
}
do{
node=node.previousSibling;
}while(node&&node.nodeType!=dojo.dom.ELEMENT_NODE);
if(node&&_1bd&&_1bd.toLowerCase()!=node.tagName.toLowerCase()){
return dojo.dom.prevElement(node,_1bd);
}
return node;
};
dojo.dom.moveChildren=function(_1be,_1bf,trim){
var _1c1=0;
if(trim){
while(_1be.hasChildNodes()&&_1be.firstChild.nodeType==dojo.dom.TEXT_NODE){
_1be.removeChild(_1be.firstChild);
}
while(_1be.hasChildNodes()&&_1be.lastChild.nodeType==dojo.dom.TEXT_NODE){
_1be.removeChild(_1be.lastChild);
}
}
while(_1be.hasChildNodes()){
_1bf.appendChild(_1be.firstChild);
_1c1++;
}
return _1c1;
};
dojo.dom.copyChildren=function(_1c2,_1c3,trim){
var _1c5=_1c2.cloneNode(true);
return this.moveChildren(_1c5,_1c3,trim);
};
dojo.dom.removeChildren=function(node){
var _1c7=node.childNodes.length;
while(node.hasChildNodes()){
node.removeChild(node.firstChild);
}
return _1c7;
};
dojo.dom.replaceChildren=function(node,_1c9){
dojo.dom.removeChildren(node);
node.appendChild(_1c9);
};
dojo.dom.removeNode=function(node){
if(node&&node.parentNode){
return node.parentNode.removeChild(node);
}
};
dojo.dom.getAncestors=function(node,_1cc,_1cd){
var _1ce=[];
var _1cf=dojo.lang.isFunction(_1cc);
while(node){
if(!_1cf||_1cc(node)){
_1ce.push(node);
}
if(_1cd&&_1ce.length>0){
return _1ce[0];
}
node=node.parentNode;
}
if(_1cd){
return null;
}
return _1ce;
};
dojo.dom.getAncestorsByTag=function(node,tag,_1d2){
tag=tag.toLowerCase();
return dojo.dom.getAncestors(node,function(el){
return ((el.tagName)&&(el.tagName.toLowerCase()==tag));
},_1d2);
};
dojo.dom.getFirstAncestorByTag=function(node,tag){
return dojo.dom.getAncestorsByTag(node,tag,true);
};
dojo.dom.isDescendantOf=function(node,_1d7,_1d8){
if(_1d8&&node){
node=node.parentNode;
}
while(node){
if(node==_1d7){
return true;
}
node=node.parentNode;
}
return false;
};
dojo.dom.innerXML=function(node){
if(node.innerXML){
return node.innerXML;
}else{
if(node.xml){
return node.xml;
}else{
if(typeof XMLSerializer!="undefined"){
return (new XMLSerializer()).serializeToString(node);
}
}
}
};
dojo.dom.createDocument=function(){
var doc=null;
if(!dj_undef("ActiveXObject")){
var _1db=["MSXML2","Microsoft","MSXML","MSXML3"];
for(var i=0;i<_1db.length;i++){
try{
doc=new ActiveXObject(_1db[i]+".XMLDOM");
}
catch(e){
}
if(doc){
break;
}
}
}else{
if((document.implementation)&&(document.implementation.createDocument)){
doc=document.implementation.createDocument("","",null);
}
}
return doc;
};
dojo.dom.createDocumentFromText=function(str,_1de){
if(!_1de){
_1de="text/xml";
}
if(!dj_undef("DOMParser")){
var _1df=new DOMParser();
return _1df.parseFromString(str,_1de);
}else{
if(!dj_undef("ActiveXObject")){
var _1e0=dojo.dom.createDocument();
if(_1e0){
_1e0.async=false;
_1e0.loadXML(str);
return _1e0;
}else{
dojo.debug("toXml didn't work?");
}
}else{
if(document.createElement){
var tmp=document.createElement("xml");
tmp.innerHTML=str;
if(document.implementation&&document.implementation.createDocument){
var _1e2=document.implementation.createDocument("foo","",null);
for(var i=0;i<tmp.childNodes.length;i++){
_1e2.importNode(tmp.childNodes.item(i),true);
}
return _1e2;
}
return ((tmp.document)&&(tmp.document.firstChild?tmp.document.firstChild:tmp));
}
}
}
return null;
};
dojo.dom.prependChild=function(node,_1e5){
if(_1e5.firstChild){
_1e5.insertBefore(node,_1e5.firstChild);
}else{
_1e5.appendChild(node);
}
return true;
};
dojo.dom.insertBefore=function(node,ref,_1e8){
if(_1e8!=true&&(node===ref||node.nextSibling===ref)){
return false;
}
var _1e9=ref.parentNode;
_1e9.insertBefore(node,ref);
return true;
};
dojo.dom.insertAfter=function(node,ref,_1ec){
var pn=ref.parentNode;
if(ref==pn.lastChild){
if((_1ec!=true)&&(node===ref)){
return false;
}
pn.appendChild(node);
}else{
return this.insertBefore(node,ref.nextSibling,_1ec);
}
return true;
};
dojo.dom.insertAtPosition=function(node,ref,_1f0){
if((!node)||(!ref)||(!_1f0)){
return false;
}
switch(_1f0.toLowerCase()){
case "before":
return dojo.dom.insertBefore(node,ref);
case "after":
return dojo.dom.insertAfter(node,ref);
case "first":
if(ref.firstChild){
return dojo.dom.insertBefore(node,ref.firstChild);
}else{
ref.appendChild(node);
return true;
}
break;
default:
ref.appendChild(node);
return true;
}
};
dojo.dom.insertAtIndex=function(node,_1f2,_1f3){
var _1f4=_1f2.childNodes;
if(!_1f4.length){
_1f2.appendChild(node);
return true;
}
var _1f5=null;
for(var i=0;i<_1f4.length;i++){
var _1f7=_1f4.item(i)["getAttribute"]?parseInt(_1f4.item(i).getAttribute("dojoinsertionindex")):-1;
if(_1f7<_1f3){
_1f5=_1f4.item(i);
}
}
if(_1f5){
return dojo.dom.insertAfter(node,_1f5);
}else{
return dojo.dom.insertBefore(node,_1f4.item(0));
}
};
dojo.dom.textContent=function(node,text){
if(text){
dojo.dom.replaceChildren(node,document.createTextNode(text));
return text;
}else{
var _1fa="";
if(node==null){
return _1fa;
}
for(var i=0;i<node.childNodes.length;i++){
switch(node.childNodes[i].nodeType){
case 1:
case 5:
_1fa+=dojo.dom.textContent(node.childNodes[i]);
break;
case 3:
case 2:
case 4:
_1fa+=node.childNodes[i].nodeValue;
break;
default:
break;
}
}
return _1fa;
}
};
dojo.dom.collectionToArray=function(_1fc){
dojo.deprecated("dojo.dom.collectionToArray","use dojo.lang.toArray instead","0.4");
return dojo.lang.toArray(_1fc);
};
dojo.dom.hasParent=function(node){
return node&&node.parentNode&&dojo.dom.isNode(node.parentNode);
};
dojo.dom.isTag=function(node){
if(node&&node.tagName){
var arr=dojo.lang.toArray(arguments,1);
return arr[dojo.lang.find(node.tagName,arr)]||"";
}
return "";
};
dojo.dom.setAttributeNS=function(elem,_201,_202,_203){
if(elem==null||dojo.lang.isUndefined(elem)){
dojo.raise("No element given to dojo.dom.setAttributeNS");
}
if(dojo.lang.isUndefined(elem.setAttributeNS)==false){
elem.setAttributeNS(_201,_202,_203);
}else{
var _204=elem.ownerDocument;
var _205=_204.createNode(2,_202,_201);
_205.nodeValue=_203;
elem.setAttributeNode(_205);
}
};
dojo.provide("dojo.undo.browser");
dojo.require("dojo.io");
try{
if((!djConfig["preventBackButtonFix"])&&(!dojo.hostenv.post_load_)){
document.write("<iframe style='border: 0px; width: 1px; height: 1px; position: absolute; bottom: 0px; right: 0px; visibility: visible;' name='djhistory' id='djhistory' src='"+(dojo.hostenv.getBaseScriptUri()+"iframe_history.html")+"'></iframe>");
}
}
catch(e){
}
if(dojo.render.html.opera){
dojo.debug("Opera is not supported with dojo.undo.browser, so back/forward detection will not work.");
}
dojo.undo.browser={initialHref:window.location.href,initialHash:window.location.hash,moveForward:false,historyStack:[],forwardStack:[],historyIframe:null,bookmarkAnchor:null,locationTimer:null,setInitialState:function(args){
this.initialState={"url":this.initialHref,"kwArgs":args,"urlHash":this.initialHash};
},addToHistory:function(args){
var hash=null;
if(!this.historyIframe){
this.historyIframe=window.frames["djhistory"];
}
if(!this.bookmarkAnchor){
this.bookmarkAnchor=document.createElement("a");
(document.body||document.getElementsByTagName("body")[0]).appendChild(this.bookmarkAnchor);
this.bookmarkAnchor.style.display="none";
}
if((!args["changeUrl"])||(dojo.render.html.ie)){
var url=dojo.hostenv.getBaseScriptUri()+"iframe_history.html?"+(new Date()).getTime();
this.moveForward=true;
dojo.io.setIFrameSrc(this.historyIframe,url,false);
}
if(args["changeUrl"]){
this.changingUrl=true;
hash="#"+((args["changeUrl"]!==true)?args["changeUrl"]:(new Date()).getTime());
setTimeout("window.location.href = '"+hash+"'; dojo.undo.browser.changingUrl = false;",1);
this.bookmarkAnchor.href=hash;
if(dojo.render.html.ie){
var _20a=args["back"]||args["backButton"]||args["handle"];
var tcb=function(_20c){
if(window.location.hash!=""){
setTimeout("window.location.href = '"+hash+"';",1);
}
_20a.apply(this,[_20c]);
};
if(args["back"]){
args.back=tcb;
}else{
if(args["backButton"]){
args.backButton=tcb;
}else{
if(args["handle"]){
args.handle=tcb;
}
}
}
this.forwardStack=[];
var _20d=args["forward"]||args["forwardButton"]||args["handle"];
var tfw=function(_20f){
if(window.location.hash!=""){
window.location.href=hash;
}
if(_20d){
_20d.apply(this,[_20f]);
}
};
if(args["forward"]){
args.forward=tfw;
}else{
if(args["forwardButton"]){
args.forwardButton=tfw;
}else{
if(args["handle"]){
args.handle=tfw;
}
}
}
}else{
if(dojo.render.html.moz){
if(!this.locationTimer){
this.locationTimer=setInterval("dojo.undo.browser.checkLocation();",200);
}
}
}
}
this.historyStack.push({"url":url,"kwArgs":args,"urlHash":hash});
},checkLocation:function(){
if(!this.changingUrl){
var hsl=this.historyStack.length;
if((window.location.hash==this.initialHash||window.location.href==this.initialHref)&&(hsl==1)){
this.handleBackButton();
return;
}
if(this.forwardStack.length>0){
if(this.forwardStack[this.forwardStack.length-1].urlHash==window.location.hash){
this.handleForwardButton();
return;
}
}
if((hsl>=2)&&(this.historyStack[hsl-2])){
if(this.historyStack[hsl-2].urlHash==window.location.hash){
this.handleBackButton();
return;
}
}
}
},iframeLoaded:function(evt,_212){
if(!dojo.render.html.opera){
var _213=this._getUrlQuery(_212.href);
if(_213==null){
if(this.historyStack.length==1){
this.handleBackButton();
}
return;
}
if(this.moveForward){
this.moveForward=false;
return;
}
if(this.historyStack.length>=2&&_213==this._getUrlQuery(this.historyStack[this.historyStack.length-2].url)){
this.handleBackButton();
}else{
if(this.forwardStack.length>0&&_213==this._getUrlQuery(this.forwardStack[this.forwardStack.length-1].url)){
this.handleForwardButton();
}
}
}
},handleBackButton:function(){
var _214=this.historyStack.pop();
if(!_214){
return;
}
var last=this.historyStack[this.historyStack.length-1];
if(!last&&this.historyStack.length==0){
last=this.initialState;
}
if(last){
if(last.kwArgs["back"]){
last.kwArgs["back"]();
}else{
if(last.kwArgs["backButton"]){
last.kwArgs["backButton"]();
}else{
if(last.kwArgs["handle"]){
last.kwArgs.handle("back");
}
}
}
}
this.forwardStack.push(_214);
},handleForwardButton:function(){
var last=this.forwardStack.pop();
if(!last){
return;
}
if(last.kwArgs["forward"]){
last.kwArgs.forward();
}else{
if(last.kwArgs["forwardButton"]){
last.kwArgs.forwardButton();
}else{
if(last.kwArgs["handle"]){
last.kwArgs.handle("forward");
}
}
}
this.historyStack.push(last);
},_getUrlQuery:function(url){
var _218=url.split("?");
if(_218.length<2){
return null;
}else{
return _218[1];
}
}};
dojo.provide("dojo.io.BrowserIO");
dojo.require("dojo.io");
dojo.require("dojo.lang.array");
dojo.require("dojo.lang.func");
dojo.require("dojo.string.extras");
dojo.require("dojo.dom");
dojo.require("dojo.undo.browser");
dojo.io.checkChildrenForFile=function(node){
var _21a=false;
var _21b=node.getElementsByTagName("input");
dojo.lang.forEach(_21b,function(_21c){
if(_21a){
return;
}
if(_21c.getAttribute("type")=="file"){
_21a=true;
}
});
return _21a;
};
dojo.io.formHasFile=function(_21d){
return dojo.io.checkChildrenForFile(_21d);
};
dojo.io.updateNode=function(node,_21f){
node=dojo.byId(node);
var args=_21f;
if(dojo.lang.isString(_21f)){
args={url:_21f};
}
args.mimetype="text/html";
args.load=function(t,d,e){
while(node.firstChild){
if(dojo["event"]){
try{
dojo.event.browser.clean(node.firstChild);
}
catch(e){
}
}
node.removeChild(node.firstChild);
}
node.innerHTML=d;
};
dojo.io.bind(args);
};
dojo.io.formFilter=function(node){
var type=(node.type||"").toLowerCase();
return !node.disabled&&node.name&&!dojo.lang.inArray(type,["file","submit","image","reset","button"]);
};
dojo.io.encodeForm=function(_226,_227,_228){
if((!_226)||(!_226.tagName)||(!_226.tagName.toLowerCase()=="form")){
dojo.raise("Attempted to encode a non-form element.");
}
if(!_228){
_228=dojo.io.formFilter;
}
var enc=/utf/i.test(_227||"")?encodeURIComponent:dojo.string.encodeAscii;
var _22a=[];
for(var i=0;i<_226.elements.length;i++){
var elm=_226.elements[i];
if(!elm||elm.tagName.toLowerCase()=="fieldset"||!_228(elm)){
continue;
}
var name=enc(elm.name);
var type=elm.type.toLowerCase();
if(type=="select-multiple"){
for(var j=0;j<elm.options.length;j++){
if(elm.options[j].selected){
_22a.push(name+"="+enc(elm.options[j].value));
}
}
}else{
if(dojo.lang.inArray(type,["radio","checkbox"])){
if(elm.checked){
_22a.push(name+"="+enc(elm.value));
}
}else{
_22a.push(name+"="+enc(elm.value));
}
}
}
var _230=_226.getElementsByTagName("input");
for(var i=0;i<_230.length;i++){
var _231=_230[i];
if(_231.type.toLowerCase()=="image"&&_231.form==_226&&_228(_231)){
var name=enc(_231.name);
_22a.push(name+"="+enc(_231.value));
_22a.push(name+".x=0");
_22a.push(name+".y=0");
}
}
return _22a.join("&")+"&";
};
dojo.io.FormBind=function(args){
this.bindArgs={};
if(args&&args.formNode){
this.init(args);
}else{
if(args){
this.init({formNode:args});
}
}
};
dojo.lang.extend(dojo.io.FormBind,{form:null,bindArgs:null,clickedButton:null,init:function(args){
var form=dojo.byId(args.formNode);
if(!form||!form.tagName||form.tagName.toLowerCase()!="form"){
throw new Error("FormBind: Couldn't apply, invalid form");
}else{
if(this.form==form){
return;
}else{
if(this.form){
throw new Error("FormBind: Already applied to a form");
}
}
}
dojo.lang.mixin(this.bindArgs,args);
this.form=form;
this.connect(form,"onsubmit","submit");
for(var i=0;i<form.elements.length;i++){
var node=form.elements[i];
if(node&&node.type&&dojo.lang.inArray(node.type.toLowerCase(),["submit","button"])){
this.connect(node,"onclick","click");
}
}
var _237=form.getElementsByTagName("input");
for(var i=0;i<_237.length;i++){
var _238=_237[i];
if(_238.type.toLowerCase()=="image"&&_238.form==form){
this.connect(_238,"onclick","click");
}
}
},onSubmit:function(form){
return true;
},submit:function(e){
e.preventDefault();
if(this.onSubmit(this.form)){
dojo.io.bind(dojo.lang.mixin(this.bindArgs,{formFilter:dojo.lang.hitch(this,"formFilter")}));
}
},click:function(e){
var node=e.currentTarget;
if(node.disabled){
return;
}
this.clickedButton=node;
},formFilter:function(node){
var type=(node.type||"").toLowerCase();
var _23f=false;
if(node.disabled||!node.name){
_23f=false;
}else{
if(dojo.lang.inArray(type,["submit","button","image"])){
if(!this.clickedButton){
this.clickedButton=node;
}
_23f=node==this.clickedButton;
}else{
_23f=!dojo.lang.inArray(type,["file","submit","reset","button"]);
}
}
return _23f;
},connect:function(_240,_241,_242){
if(dojo.evalObjPath("dojo.event.connect")){
dojo.event.connect(_240,_241,this,_242);
}else{
var fcn=dojo.lang.hitch(this,_242);
_240[_241]=function(e){
if(!e){
e=window.event;
}
if(!e.currentTarget){
e.currentTarget=e.srcElement;
}
if(!e.preventDefault){
e.preventDefault=function(){
window.event.returnValue=false;
};
}
fcn(e);
};
}
}});
dojo.io.XMLHTTPTransport=new function(){
var _245=this;
var _246={};
this.useCache=false;
this.preventCache=false;
function getCacheKey(url,_248,_249){
return url+"|"+_248+"|"+_249.toLowerCase();
}
function addToCache(url,_24b,_24c,http){
_246[getCacheKey(url,_24b,_24c)]=http;
}
function getFromCache(url,_24f,_250){
return _246[getCacheKey(url,_24f,_250)];
}
this.clearCache=function(){
_246={};
};
function doLoad(_251,http,url,_254,_255){
if(((http.status>=200)&&(http.status<300))||(http.status==304)||(location.protocol=="file:"&&(http.status==0||http.status==undefined))||(location.protocol=="chrome:"&&(http.status==0||http.status==undefined))){
var ret;
if(_251.method.toLowerCase()=="head"){
var _257=http.getAllResponseHeaders();
ret={};
ret.toString=function(){
return _257;
};
var _258=_257.split(/[\r\n]+/g);
for(var i=0;i<_258.length;i++){
var pair=_258[i].match(/^([^:]+)\s*:\s*(.+)$/i);
if(pair){
ret[pair[1]]=pair[2];
}
}
}else{
if(_251.mimetype=="text/javascript"){
try{
ret=dj_eval(http.responseText);
}
catch(e){
dojo.debug(e);
dojo.debug(http.responseText);
ret=null;
}
}else{
if(_251.mimetype=="text/json"){
try{
ret=dj_eval("("+http.responseText+")");
}
catch(e){
dojo.debug(e);
dojo.debug(http.responseText);
ret=false;
}
}else{
if((_251.mimetype=="application/xml")||(_251.mimetype=="text/xml")){
ret=http.responseXML;
if(!ret||typeof ret=="string"||!http.getResponseHeader("Content-Type")){
ret=dojo.dom.createDocumentFromText(http.responseText);
}
}else{
ret=http.responseText;
}
}
}
}
if(_255){
addToCache(url,_254,_251.method,http);
}
_251[(typeof _251.load=="function")?"load":"handle"]("load",ret,http,_251);
}else{
var _25b=new dojo.io.Error("XMLHttpTransport Error: "+http.status+" "+http.statusText);
_251[(typeof _251.error=="function")?"error":"handle"]("error",_25b,http,_251);
}
}
function setHeaders(http,_25d){
if(_25d["headers"]){
for(var _25e in _25d["headers"]){
if(_25e.toLowerCase()=="content-type"&&!_25d["contentType"]){
_25d["contentType"]=_25d["headers"][_25e];
}else{
http.setRequestHeader(_25e,_25d["headers"][_25e]);
}
}
}
}
this.inFlight=[];
this.inFlightTimer=null;
this.startWatchingInFlight=function(){
if(!this.inFlightTimer){
this.inFlightTimer=setInterval("dojo.io.XMLHTTPTransport.watchInFlight();",10);
}
};
this.watchInFlight=function(){
var now=null;
for(var x=this.inFlight.length-1;x>=0;x--){
var tif=this.inFlight[x];
if(!tif){
this.inFlight.splice(x,1);
continue;
}
if(4==tif.http.readyState){
this.inFlight.splice(x,1);
doLoad(tif.req,tif.http,tif.url,tif.query,tif.useCache);
}else{
if(tif.startTime){
if(!now){
now=(new Date()).getTime();
}
if(tif.startTime+(tif.req.timeoutSeconds*1000)<now){
if(typeof tif.http.abort=="function"){
tif.http.abort();
}
this.inFlight.splice(x,1);
tif.req[(typeof tif.req.timeout=="function")?"timeout":"handle"]("timeout",null,tif.http,tif.req);
}
}
}
}
if(this.inFlight.length==0){
clearInterval(this.inFlightTimer);
this.inFlightTimer=null;
}
};
var _262=dojo.hostenv.getXmlhttpObject()?true:false;
this.canHandle=function(_263){
return _262&&dojo.lang.inArray((_263["mimetype"].toLowerCase()||""),["text/plain","text/html","application/xml","text/xml","text/javascript","text/json"])&&!(_263["formNode"]&&dojo.io.formHasFile(_263["formNode"]));
};
this.multipartBoundary="45309FFF-BD65-4d50-99C9-36986896A96F";
this.bind=function(_264){
if(!_264["url"]){
if(!_264["formNode"]&&(_264["backButton"]||_264["back"]||_264["changeUrl"]||_264["watchForURL"])&&(!djConfig.preventBackButtonFix)){
dojo.deprecated("Using dojo.io.XMLHTTPTransport.bind() to add to browser history without doing an IO request","Use dojo.undo.browser.addToHistory() instead.","0.4");
dojo.undo.browser.addToHistory(_264);
return true;
}
}
var url=_264.url;
var _266="";
if(_264["formNode"]){
var ta=_264.formNode.getAttribute("action");
if((ta)&&(!_264["url"])){
url=ta;
}
var tp=_264.formNode.getAttribute("method");
if((tp)&&(!_264["method"])){
_264.method=tp;
}
_266+=dojo.io.encodeForm(_264.formNode,_264.encoding,_264["formFilter"]);
}
if(url.indexOf("#")>-1){
dojo.debug("Warning: dojo.io.bind: stripping hash values from url:",url);
url=url.split("#")[0];
}
if(_264["file"]){
_264.method="post";
}
if(!_264["method"]){
_264.method="get";
}
if(_264.method.toLowerCase()=="get"){
_264.multipart=false;
}else{
if(_264["file"]){
_264.multipart=true;
}else{
if(!_264["multipart"]){
_264.multipart=false;
}
}
}
if(_264["backButton"]||_264["back"]||_264["changeUrl"]){
dojo.undo.browser.addToHistory(_264);
}
var _269=_264["content"]||{};
if(_264.sendTransport){
_269["dojo.transport"]="xmlhttp";
}
do{
if(_264.postContent){
_266=_264.postContent;
break;
}
if(_269){
_266+=dojo.io.argsFromMap(_269,_264.encoding);
}
if(_264.method.toLowerCase()=="get"||!_264.multipart){
break;
}
var t=[];
if(_266.length){
var q=_266.split("&");
for(var i=0;i<q.length;++i){
if(q[i].length){
var p=q[i].split("=");
t.push("--"+this.multipartBoundary,"Content-Disposition: form-data; name=\""+p[0]+"\"","",p[1]);
}
}
}
if(_264.file){
if(dojo.lang.isArray(_264.file)){
for(var i=0;i<_264.file.length;++i){
var o=_264.file[i];
t.push("--"+this.multipartBoundary,"Content-Disposition: form-data; name=\""+o.name+"\"; filename=\""+("fileName" in o?o.fileName:o.name)+"\"","Content-Type: "+("contentType" in o?o.contentType:"application/octet-stream"),"",o.content);
}
}else{
var o=_264.file;
t.push("--"+this.multipartBoundary,"Content-Disposition: form-data; name=\""+o.name+"\"; filename=\""+("fileName" in o?o.fileName:o.name)+"\"","Content-Type: "+("contentType" in o?o.contentType:"application/octet-stream"),"",o.content);
}
}
if(t.length){
t.push("--"+this.multipartBoundary+"--","");
_266=t.join("\r\n");
}
}while(false);
var _26f=_264["sync"]?false:true;
var _270=_264["preventCache"]||(this.preventCache==true&&_264["preventCache"]!=false);
var _271=_264["useCache"]==true||(this.useCache==true&&_264["useCache"]!=false);
if(!_270&&_271){
var _272=getFromCache(url,_266,_264.method);
if(_272){
doLoad(_264,_272,url,_266,false);
return;
}
}
var http=dojo.hostenv.getXmlhttpObject(_264);
var _274=false;
if(_26f){
var _275=this.inFlight.push({"req":_264,"http":http,"url":url,"query":_266,"useCache":_271,"startTime":_264.timeoutSeconds?(new Date()).getTime():0});
this.startWatchingInFlight();
}
if(_264.method.toLowerCase()=="post"){
http.open("POST",url,_26f);
setHeaders(http,_264);
http.setRequestHeader("Content-Type",_264.multipart?("multipart/form-data; boundary="+this.multipartBoundary):(_264.contentType||"application/x-www-form-urlencoded"));
try{
http.send(_266);
}
catch(e){
if(typeof http.abort=="function"){
http.abort();
}
doLoad(_264,{status:404},url,_266,_271);
}
}else{
var _276=url;
if(_266!=""){
_276+=(_276.indexOf("?")>-1?"&":"?")+_266;
}
if(_270){
_276+=(dojo.string.endsWithAny(_276,"?","&")?"":(_276.indexOf("?")>-1?"&":"?"))+"dojo.preventCache="+new Date().valueOf();
}
http.open(_264.method.toUpperCase(),_276,_26f);
setHeaders(http,_264);
try{
http.send(null);
}
catch(e){
if(typeof http.abort=="function"){
http.abort();
}
doLoad(_264,{status:404},url,_266,_271);
}
}
if(!_26f){
doLoad(_264,http,url,_266,_271);
}
_264.abort=function(){
return http.abort();
};
return;
};
dojo.io.transports.addTransport("XMLHTTPTransport");
};
dojo.provide("dojo.event");
dojo.require("dojo.lang.array");
dojo.require("dojo.lang.extras");
dojo.require("dojo.lang.func");
dojo.event=new function(){
this.canTimeout=dojo.lang.isFunction(dj_global["setTimeout"])||dojo.lang.isAlien(dj_global["setTimeout"]);
function interpolateArgs(args,_278){
var dl=dojo.lang;
var ao={srcObj:dj_global,srcFunc:null,adviceObj:dj_global,adviceFunc:null,aroundObj:null,aroundFunc:null,adviceType:(args.length>2)?args[0]:"after",precedence:"last",once:false,delay:null,rate:0,adviceMsg:false};
switch(args.length){
case 0:
return;
case 1:
return;
case 2:
ao.srcFunc=args[0];
ao.adviceFunc=args[1];
break;
case 3:
if((dl.isObject(args[0]))&&(dl.isString(args[1]))&&(dl.isString(args[2]))){
ao.adviceType="after";
ao.srcObj=args[0];
ao.srcFunc=args[1];
ao.adviceFunc=args[2];
}else{
if((dl.isString(args[1]))&&(dl.isString(args[2]))){
ao.srcFunc=args[1];
ao.adviceFunc=args[2];
}else{
if((dl.isObject(args[0]))&&(dl.isString(args[1]))&&(dl.isFunction(args[2]))){
ao.adviceType="after";
ao.srcObj=args[0];
ao.srcFunc=args[1];
var _27b=dl.nameAnonFunc(args[2],ao.adviceObj,_278);
ao.adviceFunc=_27b;
}else{
if((dl.isFunction(args[0]))&&(dl.isObject(args[1]))&&(dl.isString(args[2]))){
ao.adviceType="after";
ao.srcObj=dj_global;
var _27b=dl.nameAnonFunc(args[0],ao.srcObj,_278);
ao.srcFunc=_27b;
ao.adviceObj=args[1];
ao.adviceFunc=args[2];
}
}
}
}
break;
case 4:
if((dl.isObject(args[0]))&&(dl.isObject(args[2]))){
ao.adviceType="after";
ao.srcObj=args[0];
ao.srcFunc=args[1];
ao.adviceObj=args[2];
ao.adviceFunc=args[3];
}else{
if((dl.isString(args[0]))&&(dl.isString(args[1]))&&(dl.isObject(args[2]))){
ao.adviceType=args[0];
ao.srcObj=dj_global;
ao.srcFunc=args[1];
ao.adviceObj=args[2];
ao.adviceFunc=args[3];
}else{
if((dl.isString(args[0]))&&(dl.isFunction(args[1]))&&(dl.isObject(args[2]))){
ao.adviceType=args[0];
ao.srcObj=dj_global;
var _27b=dl.nameAnonFunc(args[1],dj_global,_278);
ao.srcFunc=_27b;
ao.adviceObj=args[2];
ao.adviceFunc=args[3];
}else{
if((dl.isString(args[0]))&&(dl.isObject(args[1]))&&(dl.isString(args[2]))&&(dl.isFunction(args[3]))){
ao.srcObj=args[1];
ao.srcFunc=args[2];
var _27b=dl.nameAnonFunc(args[3],dj_global,_278);
ao.adviceObj=dj_global;
ao.adviceFunc=_27b;
}else{
if(dl.isObject(args[1])){
ao.srcObj=args[1];
ao.srcFunc=args[2];
ao.adviceObj=dj_global;
ao.adviceFunc=args[3];
}else{
if(dl.isObject(args[2])){
ao.srcObj=dj_global;
ao.srcFunc=args[1];
ao.adviceObj=args[2];
ao.adviceFunc=args[3];
}else{
ao.srcObj=ao.adviceObj=ao.aroundObj=dj_global;
ao.srcFunc=args[1];
ao.adviceFunc=args[2];
ao.aroundFunc=args[3];
}
}
}
}
}
}
break;
case 6:
ao.srcObj=args[1];
ao.srcFunc=args[2];
ao.adviceObj=args[3];
ao.adviceFunc=args[4];
ao.aroundFunc=args[5];
ao.aroundObj=dj_global;
break;
default:
ao.srcObj=args[1];
ao.srcFunc=args[2];
ao.adviceObj=args[3];
ao.adviceFunc=args[4];
ao.aroundObj=args[5];
ao.aroundFunc=args[6];
ao.once=args[7];
ao.delay=args[8];
ao.rate=args[9];
ao.adviceMsg=args[10];
break;
}
if(dl.isFunction(ao.aroundFunc)){
var _27b=dl.nameAnonFunc(ao.aroundFunc,ao.aroundObj,_278);
ao.aroundFunc=_27b;
}
if(dl.isFunction(ao.srcFunc)){
ao.srcFunc=dl.getNameInObj(ao.srcObj,ao.srcFunc);
}
if(dl.isFunction(ao.adviceFunc)){
ao.adviceFunc=dl.getNameInObj(ao.adviceObj,ao.adviceFunc);
}
if((ao.aroundObj)&&(dl.isFunction(ao.aroundFunc))){
ao.aroundFunc=dl.getNameInObj(ao.aroundObj,ao.aroundFunc);
}
if(!ao.srcObj){
dojo.raise("bad srcObj for srcFunc: "+ao.srcFunc);
}
if(!ao.adviceObj){
dojo.raise("bad adviceObj for adviceFunc: "+ao.adviceFunc);
}
return ao;
}
this.connect=function(){
if(arguments.length==1){
var ao=arguments[0];
}else{
var ao=interpolateArgs(arguments,true);
}
if(dojo.lang.isArray(ao.srcObj)&&ao.srcObj!=""){
var _27d={};
for(var x in ao){
_27d[x]=ao[x];
}
var mjps=[];
dojo.lang.forEach(ao.srcObj,function(src){
if((dojo.render.html.capable)&&(dojo.lang.isString(src))){
src=dojo.byId(src);
}
_27d.srcObj=src;
mjps.push(dojo.event.connect.call(dojo.event,_27d));
});
return mjps;
}
var mjp=dojo.event.MethodJoinPoint.getForMethod(ao.srcObj,ao.srcFunc);
if(ao.adviceFunc){
var mjp2=dojo.event.MethodJoinPoint.getForMethod(ao.adviceObj,ao.adviceFunc);
}
mjp.kwAddAdvice(ao);
return mjp;
};
this.log=function(a1,a2){
var _285;
if((arguments.length==1)&&(typeof a1=="object")){
_285=a1;
}else{
_285={srcObj:a1,srcFunc:a2};
}
_285.adviceFunc=function(){
var _286=[];
for(var x=0;x<arguments.length;x++){
_286.push(arguments[x]);
}
dojo.debug("("+_285.srcObj+")."+_285.srcFunc,":",_286.join(", "));
};
this.kwConnect(_285);
};
this.connectBefore=function(){
var args=["before"];
for(var i=0;i<arguments.length;i++){
args.push(arguments[i]);
}
return this.connect.apply(this,args);
};
this.connectAround=function(){
var args=["around"];
for(var i=0;i<arguments.length;i++){
args.push(arguments[i]);
}
return this.connect.apply(this,args);
};
this.connectOnce=function(){
var ao=interpolateArgs(arguments,true);
ao.once=true;
return this.connect(ao);
};
this._kwConnectImpl=function(_28d,_28e){
var fn=(_28e)?"disconnect":"connect";
if(typeof _28d["srcFunc"]=="function"){
_28d.srcObj=_28d["srcObj"]||dj_global;
var _290=dojo.lang.nameAnonFunc(_28d.srcFunc,_28d.srcObj,true);
_28d.srcFunc=_290;
}
if(typeof _28d["adviceFunc"]=="function"){
_28d.adviceObj=_28d["adviceObj"]||dj_global;
var _290=dojo.lang.nameAnonFunc(_28d.adviceFunc,_28d.adviceObj,true);
_28d.adviceFunc=_290;
}
return dojo.event[fn]((_28d["type"]||_28d["adviceType"]||"after"),_28d["srcObj"]||dj_global,_28d["srcFunc"],_28d["adviceObj"]||_28d["targetObj"]||dj_global,_28d["adviceFunc"]||_28d["targetFunc"],_28d["aroundObj"],_28d["aroundFunc"],_28d["once"],_28d["delay"],_28d["rate"],_28d["adviceMsg"]||false);
};
this.kwConnect=function(_291){
return this._kwConnectImpl(_291,false);
};
this.disconnect=function(){
var ao=interpolateArgs(arguments,true);
if(!ao.adviceFunc){
return;
}
var mjp=dojo.event.MethodJoinPoint.getForMethod(ao.srcObj,ao.srcFunc);
return mjp.removeAdvice(ao.adviceObj,ao.adviceFunc,ao.adviceType,ao.once);
};
this.kwDisconnect=function(_294){
return this._kwConnectImpl(_294,true);
};
};
dojo.event.MethodInvocation=function(_295,obj,args){
this.jp_=_295;
this.object=obj;
this.args=[];
for(var x=0;x<args.length;x++){
this.args[x]=args[x];
}
this.around_index=-1;
};
dojo.event.MethodInvocation.prototype.proceed=function(){
this.around_index++;
if(this.around_index>=this.jp_.around.length){
return this.jp_.object[this.jp_.methodname].apply(this.jp_.object,this.args);
}else{
var ti=this.jp_.around[this.around_index];
var mobj=ti[0]||dj_global;
var meth=ti[1];
return mobj[meth].call(mobj,this);
}
};
dojo.event.MethodJoinPoint=function(obj,_29d){
this.object=obj||dj_global;
this.methodname=_29d;
this.methodfunc=this.object[_29d];
this.before=[];
this.after=[];
this.around=[];
};
dojo.event.MethodJoinPoint.getForMethod=function(obj,_29f){
if(!obj){
obj=dj_global;
}
if(!obj[_29f]){
obj[_29f]=function(){
};
if(!obj[_29f]){
dojo.raise("Cannot set do-nothing method on that object "+_29f);
}
}else{
if((!dojo.lang.isFunction(obj[_29f]))&&(!dojo.lang.isAlien(obj[_29f]))){
return null;
}
}
var _2a0=_29f+"$joinpoint";
var _2a1=_29f+"$joinpoint$method";
var _2a2=obj[_2a0];
if(!_2a2){
var _2a3=false;
if(dojo.event["browser"]){
if((obj["attachEvent"])||(obj["nodeType"])||(obj["addEventListener"])){
_2a3=true;
dojo.event.browser.addClobberNodeAttrs(obj,[_2a0,_2a1,_29f]);
}
}
var _2a4=obj[_29f].length;
obj[_2a1]=obj[_29f];
_2a2=obj[_2a0]=new dojo.event.MethodJoinPoint(obj,_2a1);
obj[_29f]=function(){
var args=[];
if((_2a3)&&(!arguments.length)){
var evt=null;
try{
if(obj.ownerDocument){
evt=obj.ownerDocument.parentWindow.event;
}else{
if(obj.documentElement){
evt=obj.documentElement.ownerDocument.parentWindow.event;
}else{
evt=window.event;
}
}
}
catch(e){
evt=window.event;
}
if(evt){
args.push(dojo.event.browser.fixEvent(evt,this));
}
}else{
for(var x=0;x<arguments.length;x++){
if((x==0)&&(_2a3)&&(dojo.event.browser.isEvent(arguments[x]))){
args.push(dojo.event.browser.fixEvent(arguments[x],this));
}else{
args.push(arguments[x]);
}
}
}
return _2a2.run.apply(_2a2,args);
};
obj[_29f].__preJoinArity=_2a4;
}
return _2a2;
};
dojo.lang.extend(dojo.event.MethodJoinPoint,{unintercept:function(){
this.object[this.methodname]=this.methodfunc;
this.before=[];
this.after=[];
this.around=[];
},disconnect:dojo.lang.forward("unintercept"),run:function(){
var obj=this.object||dj_global;
var args=arguments;
var _2aa=[];
for(var x=0;x<args.length;x++){
_2aa[x]=args[x];
}
var _2ac=function(marr){
if(!marr){
dojo.debug("Null argument to unrollAdvice()");
return;
}
var _2ae=marr[0]||dj_global;
var _2af=marr[1];
if(!_2ae[_2af]){
dojo.raise("function \""+_2af+"\" does not exist on \""+_2ae+"\"");
}
var _2b0=marr[2]||dj_global;
var _2b1=marr[3];
var msg=marr[6];
var _2b3;
var to={args:[],jp_:this,object:obj,proceed:function(){
return _2ae[_2af].apply(_2ae,to.args);
}};
to.args=_2aa;
var _2b5=parseInt(marr[4]);
var _2b6=((!isNaN(_2b5))&&(marr[4]!==null)&&(typeof marr[4]!="undefined"));
if(marr[5]){
var rate=parseInt(marr[5]);
var cur=new Date();
var _2b9=false;
if((marr["last"])&&((cur-marr.last)<=rate)){
if(dojo.event.canTimeout){
if(marr["delayTimer"]){
clearTimeout(marr.delayTimer);
}
var tod=parseInt(rate*2);
var mcpy=dojo.lang.shallowCopy(marr);
marr.delayTimer=setTimeout(function(){
mcpy[5]=0;
_2ac(mcpy);
},tod);
}
return;
}else{
marr.last=cur;
}
}
if(_2b1){
_2b0[_2b1].call(_2b0,to);
}else{
if((_2b6)&&((dojo.render.html)||(dojo.render.svg))){
dj_global["setTimeout"](function(){
if(msg){
_2ae[_2af].call(_2ae,to);
}else{
_2ae[_2af].apply(_2ae,args);
}
},_2b5);
}else{
if(msg){
_2ae[_2af].call(_2ae,to);
}else{
_2ae[_2af].apply(_2ae,args);
}
}
}
};
if(this.before.length>0){
dojo.lang.forEach(this.before,_2ac);
}
var _2bc;
if(this.around.length>0){
var mi=new dojo.event.MethodInvocation(this,obj,args);
_2bc=mi.proceed();
}else{
if(this.methodfunc){
_2bc=this.object[this.methodname].apply(this.object,args);
}
}
if(this.after.length>0){
dojo.lang.forEach(this.after,_2ac);
}
return (this.methodfunc)?_2bc:null;
},getArr:function(kind){
var arr=this.after;
if((typeof kind=="string")&&(kind.indexOf("before")!=-1)){
arr=this.before;
}else{
if(kind=="around"){
arr=this.around;
}
}
return arr;
},kwAddAdvice:function(args){
this.addAdvice(args["adviceObj"],args["adviceFunc"],args["aroundObj"],args["aroundFunc"],args["adviceType"],args["precedence"],args["once"],args["delay"],args["rate"],args["adviceMsg"]);
},addAdvice:function(_2c1,_2c2,_2c3,_2c4,_2c5,_2c6,once,_2c8,rate,_2ca){
var arr=this.getArr(_2c5);
if(!arr){
dojo.raise("bad this: "+this);
}
var ao=[_2c1,_2c2,_2c3,_2c4,_2c8,rate,_2ca];
if(once){
if(this.hasAdvice(_2c1,_2c2,_2c5,arr)>=0){
return;
}
}
if(_2c6=="first"){
arr.unshift(ao);
}else{
arr.push(ao);
}
},hasAdvice:function(_2cd,_2ce,_2cf,arr){
if(!arr){
arr=this.getArr(_2cf);
}
var ind=-1;
for(var x=0;x<arr.length;x++){
var aao=(typeof _2ce=="object")?(new String(_2ce)).toString():_2ce;
var a1o=(typeof arr[x][1]=="object")?(new String(arr[x][1])).toString():arr[x][1];
if((arr[x][0]==_2cd)&&(a1o==aao)){
ind=x;
}
}
return ind;
},removeAdvice:function(_2d5,_2d6,_2d7,once){
var arr=this.getArr(_2d7);
var ind=this.hasAdvice(_2d5,_2d6,_2d7,arr);
if(ind==-1){
return false;
}
while(ind!=-1){
arr.splice(ind,1);
if(once){
break;
}
ind=this.hasAdvice(_2d5,_2d6,_2d7,arr);
}
return true;
}});
dojo.require("dojo.event");
dojo.provide("dojo.event.topic");
dojo.event.topic=new function(){
this.topics={};
this.getTopic=function(_2db){
if(!this.topics[_2db]){
this.topics[_2db]=new this.TopicImpl(_2db);
}
return this.topics[_2db];
};
this.registerPublisher=function(_2dc,obj,_2de){
var _2dc=this.getTopic(_2dc);
_2dc.registerPublisher(obj,_2de);
};
this.subscribe=function(_2df,obj,_2e1){
var _2df=this.getTopic(_2df);
_2df.subscribe(obj,_2e1);
};
this.unsubscribe=function(_2e2,obj,_2e4){
var _2e2=this.getTopic(_2e2);
_2e2.unsubscribe(obj,_2e4);
};
this.destroy=function(_2e5){
this.getTopic(_2e5).destroy();
delete this.topics[_2e5];
};
this.publishApply=function(_2e6,args){
var _2e6=this.getTopic(_2e6);
_2e6.sendMessage.apply(_2e6,args);
};
this.publish=function(_2e8,_2e9){
var _2e8=this.getTopic(_2e8);
var args=[];
for(var x=1;x<arguments.length;x++){
args.push(arguments[x]);
}
_2e8.sendMessage.apply(_2e8,args);
};
};
dojo.event.topic.TopicImpl=function(_2ec){
this.topicName=_2ec;
this.subscribe=function(_2ed,_2ee){
var tf=_2ee||_2ed;
var to=(!_2ee)?dj_global:_2ed;
dojo.event.kwConnect({srcObj:this,srcFunc:"sendMessage",adviceObj:to,adviceFunc:tf});
};
this.unsubscribe=function(_2f1,_2f2){
var tf=(!_2f2)?_2f1:_2f2;
var to=(!_2f2)?null:_2f1;
dojo.event.kwDisconnect({srcObj:this,srcFunc:"sendMessage",adviceObj:to,adviceFunc:tf});
};
this.destroy=function(){
dojo.event.MethodJoinPoint.getForMethod(this,"sendMessage").disconnect();
};
this.registerPublisher=function(_2f5,_2f6){
dojo.event.connect(_2f5,_2f6,this,"sendMessage");
};
this.sendMessage=function(_2f7){
};
};
dojo.provide("dojo.event.browser");
dojo.require("dojo.event");
dojo._ie_clobber=new function(){
this.clobberNodes=[];
function nukeProp(node,prop){
try{
node[prop]=null;
}
catch(e){
}
try{
delete node[prop];
}
catch(e){
}
try{
node.removeAttribute(prop);
}
catch(e){
}
}
this.clobber=function(_2fa){
var na;
var tna;
if(_2fa){
tna=_2fa.all||_2fa.getElementsByTagName("*");
na=[_2fa];
for(var x=0;x<tna.length;x++){
if(tna[x]["__doClobber__"]){
na.push(tna[x]);
}
}
}else{
try{
window.onload=null;
}
catch(e){
}
na=(this.clobberNodes.length)?this.clobberNodes:document.all;
}
tna=null;
var _2fe={};
for(var i=na.length-1;i>=0;i=i-1){
var el=na[i];
if(el["__clobberAttrs__"]){
for(var j=0;j<el.__clobberAttrs__.length;j++){
nukeProp(el,el.__clobberAttrs__[j]);
}
nukeProp(el,"__clobberAttrs__");
nukeProp(el,"__doClobber__");
}
}
na=null;
};
};
if(dojo.render.html.ie){
dojo.addOnUnload(function(){
dojo._ie_clobber.clobber();
try{
if((dojo["widget"])&&(dojo.widget["manager"])){
dojo.widget.manager.destroyAll();
}
}
catch(e){
}
try{
window.onload=null;
}
catch(e){
}
try{
window.onunload=null;
}
catch(e){
}
dojo._ie_clobber.clobberNodes=[];
});
}
dojo.event.browser=new function(){
var _302=0;
this.clean=function(node){
if(dojo.render.html.ie){
dojo._ie_clobber.clobber(node);
}
};
this.addClobberNode=function(node){
if(!dojo.render.html.ie){
return;
}
if(!node["__doClobber__"]){
node.__doClobber__=true;
dojo._ie_clobber.clobberNodes.push(node);
node.__clobberAttrs__=[];
}
};
this.addClobberNodeAttrs=function(node,_306){
if(!dojo.render.html.ie){
return;
}
this.addClobberNode(node);
for(var x=0;x<_306.length;x++){
node.__clobberAttrs__.push(_306[x]);
}
};
this.removeListener=function(node,_309,fp,_30b){
if(!_30b){
var _30b=false;
}
_309=_309.toLowerCase();
if(_309.substr(0,2)=="on"){
_309=_309.substr(2);
}
if(node.removeEventListener){
node.removeEventListener(_309,fp,_30b);
}
};
this.addListener=function(node,_30d,fp,_30f,_310){
if(!node){
return;
}
if(!_30f){
var _30f=false;
}
_30d=_30d.toLowerCase();
if(_30d.substr(0,2)!="on"){
_30d="on"+_30d;
}
if(!_310){
var _311=function(evt){
if(!evt){
evt=window.event;
}
var ret=fp(dojo.event.browser.fixEvent(evt,this));
if(_30f){
dojo.event.browser.stopEvent(evt);
}
return ret;
};
}else{
_311=fp;
}
if(node.addEventListener){
node.addEventListener(_30d.substr(2),_311,_30f);
return _311;
}else{
if(typeof node[_30d]=="function"){
var _314=node[_30d];
node[_30d]=function(e){
_314(e);
return _311(e);
};
}else{
node[_30d]=_311;
}
if(dojo.render.html.ie){
this.addClobberNodeAttrs(node,[_30d]);
}
return _311;
}
};
this.isEvent=function(obj){
return (typeof obj!="undefined")&&(typeof Event!="undefined")&&(obj.eventPhase);
};
this.currentEvent=null;
this.callListener=function(_317,_318){
if(typeof _317!="function"){
dojo.raise("listener not a function: "+_317);
}
dojo.event.browser.currentEvent.currentTarget=_318;
return _317.call(_318,dojo.event.browser.currentEvent);
};
this.stopPropagation=function(){
dojo.event.browser.currentEvent.cancelBubble=true;
};
this.preventDefault=function(){
dojo.event.browser.currentEvent.returnValue=false;
};
this.keys={KEY_BACKSPACE:8,KEY_TAB:9,KEY_ENTER:13,KEY_SHIFT:16,KEY_CTRL:17,KEY_ALT:18,KEY_PAUSE:19,KEY_CAPS_LOCK:20,KEY_ESCAPE:27,KEY_SPACE:32,KEY_PAGE_UP:33,KEY_PAGE_DOWN:34,KEY_END:35,KEY_HOME:36,KEY_LEFT_ARROW:37,KEY_UP_ARROW:38,KEY_RIGHT_ARROW:39,KEY_DOWN_ARROW:40,KEY_INSERT:45,KEY_DELETE:46,KEY_LEFT_WINDOW:91,KEY_RIGHT_WINDOW:92,KEY_SELECT:93,KEY_F1:112,KEY_F2:113,KEY_F3:114,KEY_F4:115,KEY_F5:116,KEY_F6:117,KEY_F7:118,KEY_F8:119,KEY_F9:120,KEY_F10:121,KEY_F11:122,KEY_F12:123,KEY_NUM_LOCK:144,KEY_SCROLL_LOCK:145};
this.revKeys=[];
for(var key in this.keys){
this.revKeys[this.keys[key]]=key;
}
this.fixEvent=function(evt,_31b){
if((!evt)&&(window["event"])){
var evt=window.event;
}
if((evt["type"])&&(evt["type"].indexOf("key")==0)){
evt.keys=this.revKeys;
for(var key in this.keys){
evt[key]=this.keys[key];
}
if((dojo.render.html.ie)&&(evt["type"]=="keypress")){
evt.charCode=evt.keyCode;
}
}
if(dojo.render.html.ie){
if(!evt.target){
evt.target=evt.srcElement;
}
if(!evt.currentTarget){
evt.currentTarget=(_31b?_31b:evt.srcElement);
}
if(!evt.layerX){
evt.layerX=evt.offsetX;
}
if(!evt.layerY){
evt.layerY=evt.offsetY;
}
var _31d=((dojo.render.html.ie55)||(document["compatMode"]=="BackCompat"))?document.body:document.documentElement;
if(!evt.pageX){
evt.pageX=evt.clientX+(_31d.scrollLeft||0);
}
if(!evt.pageY){
evt.pageY=evt.clientY+(_31d.scrollTop||0);
}
if(evt.type=="mouseover"){
evt.relatedTarget=evt.fromElement;
}
if(evt.type=="mouseout"){
evt.relatedTarget=evt.toElement;
}
this.currentEvent=evt;
evt.callListener=this.callListener;
evt.stopPropagation=this.stopPropagation;
evt.preventDefault=this.preventDefault;
}
return evt;
};
this.stopEvent=function(ev){
if(window.event){
ev.returnValue=false;
ev.cancelBubble=true;
}else{
ev.preventDefault();
ev.stopPropagation();
}
};
};
dojo.kwCompoundRequire({common:["dojo.event","dojo.event.topic"],browser:["dojo.event.browser"],dashboard:["dojo.event.browser"]});
dojo.provide("dojo.event.*");
dojo.require("dojo.lang");
dojo.provide("dojo.dnd.DragSource");
dojo.provide("dojo.dnd.DropTarget");
dojo.provide("dojo.dnd.DragObject");
dojo.provide("dojo.dnd.DragAndDrop");
dojo.dnd.DragSource=function(){
var dm=dojo.dnd.dragManager;
if(dm["registerDragSource"]){
dm.registerDragSource(this);
}
};
dojo.lang.extend(dojo.dnd.DragSource,{type:"",onDragEnd:function(){
},onDragStart:function(){
},onSelected:function(){
},unregister:function(){
dojo.dnd.dragManager.unregisterDragSource(this);
},reregister:function(){
dojo.dnd.dragManager.registerDragSource(this);
}});
dojo.dnd.DragObject=function(){
var dm=dojo.dnd.dragManager;
if(dm["registerDragObject"]){
dm.registerDragObject(this);
}
};
dojo.lang.extend(dojo.dnd.DragObject,{type:"",onDragStart:function(){
},onDragMove:function(){
},onDragOver:function(){
},onDragOut:function(){
},onDragEnd:function(){
},onDragLeave:this.onDragOut,onDragEnter:this.onDragOver,ondragout:this.onDragOut,ondragover:this.onDragOver});
dojo.dnd.DropTarget=function(){
if(this.constructor==dojo.dnd.DropTarget){
return;
}
this.acceptedTypes=[];
dojo.dnd.dragManager.registerDropTarget(this);
};
dojo.lang.extend(dojo.dnd.DropTarget,{acceptsType:function(type){
if(!dojo.lang.inArray(this.acceptedTypes,"*")){
if(!dojo.lang.inArray(this.acceptedTypes,type)){
return false;
}
}
return true;
},accepts:function(_322){
if(!dojo.lang.inArray(this.acceptedTypes,"*")){
for(var i=0;i<_322.length;i++){
if(!dojo.lang.inArray(this.acceptedTypes,_322[i].type)){
return false;
}
}
}
return true;
},onDragOver:function(){
},onDragOut:function(){
},onDragMove:function(){
},onDropStart:function(){
},onDrop:function(){
},onDropEnd:function(){
}});
dojo.dnd.DragEvent=function(){
this.dragSource=null;
this.dragObject=null;
this.target=null;
this.eventStatus="success";
};
dojo.dnd.DragManager=function(){
};
dojo.lang.extend(dojo.dnd.DragManager,{selectedSources:[],dragObjects:[],dragSources:[],registerDragSource:function(){
},dropTargets:[],registerDropTarget:function(){
},lastDragTarget:null,currentDragTarget:null,onKeyDown:function(){
},onMouseOut:function(){
},onMouseMove:function(){
},onMouseUp:function(){
}});
dojo.provide("dojo.graphics.color");
dojo.require("dojo.lang.array");
dojo.graphics.color.Color=function(r,g,b,a){
if(dojo.lang.isArray(r)){
this.r=r[0];
this.g=r[1];
this.b=r[2];
this.a=r[3]||1;
}else{
if(dojo.lang.isString(r)){
var rgb=dojo.graphics.color.extractRGB(r);
this.r=rgb[0];
this.g=rgb[1];
this.b=rgb[2];
this.a=g||1;
}else{
if(r instanceof dojo.graphics.color.Color){
this.r=r.r;
this.b=r.b;
this.g=r.g;
this.a=r.a;
}else{
this.r=r;
this.g=g;
this.b=b;
this.a=a;
}
}
}
};
dojo.graphics.color.Color.fromArray=function(arr){
return new dojo.graphics.color.Color(arr[0],arr[1],arr[2],arr[3]);
};
dojo.lang.extend(dojo.graphics.color.Color,{toRgb:function(_32a){
if(_32a){
return this.toRgba();
}else{
return [this.r,this.g,this.b];
}
},toRgba:function(){
return [this.r,this.g,this.b,this.a];
},toHex:function(){
return dojo.graphics.color.rgb2hex(this.toRgb());
},toCss:function(){
return "rgb("+this.toRgb().join()+")";
},toString:function(){
return this.toHex();
},blend:function(_32b,_32c){
return dojo.graphics.color.blend(this.toRgb(),new dojo.graphics.color.Color(_32b).toRgb(),_32c);
}});
dojo.graphics.color.named={white:[255,255,255],black:[0,0,0],red:[255,0,0],green:[0,255,0],blue:[0,0,255],navy:[0,0,128],gray:[128,128,128],silver:[192,192,192]};
dojo.graphics.color.blend=function(a,b,_32f){
if(typeof a=="string"){
return dojo.graphics.color.blendHex(a,b,_32f);
}
if(!_32f){
_32f=0;
}else{
if(_32f>1){
_32f=1;
}else{
if(_32f<-1){
_32f=-1;
}
}
}
var c=new Array(3);
for(var i=0;i<3;i++){
var half=Math.abs(a[i]-b[i])/2;
c[i]=Math.floor(Math.min(a[i],b[i])+half+(half*_32f));
}
return c;
};
dojo.graphics.color.blendHex=function(a,b,_335){
return dojo.graphics.color.rgb2hex(dojo.graphics.color.blend(dojo.graphics.color.hex2rgb(a),dojo.graphics.color.hex2rgb(b),_335));
};
dojo.graphics.color.extractRGB=function(_336){
var hex="0123456789abcdef";
_336=_336.toLowerCase();
if(_336.indexOf("rgb")==0){
var _338=_336.match(/rgba*\((\d+), *(\d+), *(\d+)/i);
var ret=_338.splice(1,3);
return ret;
}else{
var _33a=dojo.graphics.color.hex2rgb(_336);
if(_33a){
return _33a;
}else{
return dojo.graphics.color.named[_336]||[255,255,255];
}
}
};
dojo.graphics.color.hex2rgb=function(hex){
var _33c="0123456789ABCDEF";
var rgb=new Array(3);
if(hex.indexOf("#")==0){
hex=hex.substring(1);
}
hex=hex.toUpperCase();
if(hex.replace(new RegExp("["+_33c+"]","g"),"")!=""){
return null;
}
if(hex.length==3){
rgb[0]=hex.charAt(0)+hex.charAt(0);
rgb[1]=hex.charAt(1)+hex.charAt(1);
rgb[2]=hex.charAt(2)+hex.charAt(2);
}else{
rgb[0]=hex.substring(0,2);
rgb[1]=hex.substring(2,4);
rgb[2]=hex.substring(4);
}
for(var i=0;i<rgb.length;i++){
rgb[i]=_33c.indexOf(rgb[i].charAt(0))*16+_33c.indexOf(rgb[i].charAt(1));
}
return rgb;
};
dojo.graphics.color.rgb2hex=function(r,g,b){
if(dojo.lang.isArray(r)){
g=r[1]||0;
b=r[2]||0;
r=r[0]||0;
}
var ret=dojo.lang.map([r,g,b],function(x){
x=new Number(x);
var s=x.toString(16);
while(s.length<2){
s="0"+s;
}
return s;
});
ret.unshift("#");
return ret.join("");
};
dojo.provide("dojo.uri.Uri");
dojo.uri=new function(){
this.joinPath=function(){
dojo.deprecated("dojo.uri.joinPath","use the dojo.uri.Uri object instead","0.4");
var arr=[];
for(var i=0;i<arguments.length;i++){
arr.push(arguments[i]);
}
return arr.join("/").replace(/\/{2,}/g,"/").replace(/((https*|ftps*):)/i,"$1/");
};
this.dojoUri=function(uri){
return new dojo.uri.Uri(dojo.hostenv.getBaseScriptUri(),uri);
};
this.nsUri=function(_348,uri){
var ns=dojo.getNamespace(_348);
if(!ns){
return null;
}
var loc=ns.location;
if(loc.lastIndexOf("/")!=loc.length-1){
loc+="/";
}
return new dojo.uri.Uri(dojo.hostenv.getBaseScriptUri()+loc,uri);
};
this.Uri=function(){
var uri=arguments[0];
for(var i=1;i<arguments.length;i++){
if(!arguments[i]){
continue;
}
var _34e=new dojo.uri.Uri(arguments[i].toString());
var _34f=new dojo.uri.Uri(uri.toString());
if(_34e.path==""&&_34e.scheme==null&&_34e.authority==null&&_34e.query==null){
if(_34e.fragment!=null){
_34f.fragment=_34e.fragment;
}
_34e=_34f;
}else{
if(_34e.scheme==null){
_34e.scheme=_34f.scheme;
if(_34e.authority==null){
_34e.authority=_34f.authority;
if(_34e.path.charAt(0)!="/"){
var path=_34f.path.substring(0,_34f.path.lastIndexOf("/")+1)+_34e.path;
var segs=path.split("/");
for(var j=0;j<segs.length;j++){
if(segs[j]=="."){
if(j==segs.length-1){
segs[j]="";
}else{
segs.splice(j,1);
j--;
}
}else{
if(j>0&&!(j==1&&segs[0]=="")&&segs[j]==".."&&segs[j-1]!=".."){
if(j==segs.length-1){
segs.splice(j,1);
segs[j-1]="";
}else{
segs.splice(j-1,2);
j-=2;
}
}
}
}
_34e.path=segs.join("/");
}
}
}
}
uri="";
if(_34e.scheme!=null){
uri+=_34e.scheme+":";
}
if(_34e.authority!=null){
uri+="//"+_34e.authority;
}
uri+=_34e.path;
if(_34e.query!=null){
uri+="?"+_34e.query;
}
if(_34e.fragment!=null){
uri+="#"+_34e.fragment;
}
}
this.uri=uri.toString();
var _353="^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?$";
var r=this.uri.match(new RegExp(_353));
this.scheme=r[2]||(r[1]?"":null);
this.authority=r[4]||(r[3]?"":null);
this.path=r[5];
this.query=r[7]||(r[6]?"":null);
this.fragment=r[9]||(r[8]?"":null);
if(this.authority!=null){
_353="^((([^:]+:)?([^@]+))@)?([^:]*)(:([0-9]+))?$";
r=this.authority.match(new RegExp(_353));
this.user=r[3]||null;
this.password=r[4]||null;
this.host=r[5];
this.port=r[7]||null;
}
this.toString=function(){
return this.uri;
};
};
};
dojo.provide("dojo.style");
dojo.require("dojo.graphics.color");
dojo.require("dojo.uri.Uri");
dojo.require("dojo.lang.common");
(function(){
var h=dojo.render.html;
var ds=dojo.style;
var db=document["body"]||document["documentElement"];
ds.boxSizing={MARGIN_BOX:"margin-box",BORDER_BOX:"border-box",PADDING_BOX:"padding-box",CONTENT_BOX:"content-box"};
var bs=ds.boxSizing;
ds.getBoxSizing=function(node){
if((h.ie)||(h.opera)){
var cm=document["compatMode"];
if((cm=="BackCompat")||(cm=="QuirksMode")){
return bs.BORDER_BOX;
}else{
return bs.CONTENT_BOX;
}
}else{
if(arguments.length==0){
node=document.documentElement;
}
var _35b=ds.getStyle(node,"-moz-box-sizing");
if(!_35b){
_35b=ds.getStyle(node,"box-sizing");
}
return (_35b?_35b:bs.CONTENT_BOX);
}
};
ds.isBorderBox=function(node){
return (ds.getBoxSizing(node)==bs.BORDER_BOX);
};
ds.getUnitValue=function(node,_35e,_35f){
var s=ds.getComputedStyle(node,_35e);
if((!s)||((s=="auto")&&(_35f))){
return {value:0,units:"px"};
}
if(dojo.lang.isUndefined(s)){
return ds.getUnitValue.bad;
}
var _361=s.match(/(\-?[\d.]+)([a-z%]*)/i);
if(!_361){
return ds.getUnitValue.bad;
}
return {value:Number(_361[1]),units:_361[2].toLowerCase()};
};
ds.getUnitValue.bad={value:NaN,units:""};
ds.getPixelValue=function(node,_363,_364){
var _365=ds.getUnitValue(node,_363,_364);
if(isNaN(_365.value)){
return 0;
}
if((_365.value)&&(_365.units!="px")){
return NaN;
}
return _365.value;
};
ds.getNumericStyle=function(){
dojo.deprecated("dojo.(style|html).getNumericStyle","in favor of dojo.(style|html).getPixelValue","0.4");
return ds.getPixelValue.apply(this,arguments);
};
ds.setPositivePixelValue=function(node,_367,_368){
if(isNaN(_368)){
return false;
}
node.style[_367]=Math.max(0,_368)+"px";
return true;
};
ds._sumPixelValues=function(node,_36a,_36b){
var _36c=0;
for(var x=0;x<_36a.length;x++){
_36c+=ds.getPixelValue(node,_36a[x],_36b);
}
return _36c;
};
ds.isPositionAbsolute=function(node){
return (ds.getComputedStyle(node,"position")=="absolute");
};
ds.getBorderExtent=function(node,side){
return (ds.getStyle(node,"border-"+side+"-style")=="none"?0:ds.getPixelValue(node,"border-"+side+"-width"));
};
ds.getMarginExtent=function(node,side){
return ds._sumPixelValues(node,["margin-"+side],ds.isPositionAbsolute(node));
};
ds.getPaddingExtent=function(node,side){
return ds._sumPixelValues(node,["padding-"+side],true);
};
ds.getMarginWidth=function(node){
return ds._sumPixelValues(node,["margin-left","margin-right"],ds.isPositionAbsolute(node));
};
ds.getBorderWidth=function(node){
return ds.getBorderExtent(node,"left")+ds.getBorderExtent(node,"right");
};
ds.getPaddingWidth=function(node){
return ds._sumPixelValues(node,["padding-left","padding-right"],true);
};
ds.getPadBorderWidth=function(node){
return ds.getPaddingWidth(node)+ds.getBorderWidth(node);
};
ds.getContentBoxWidth=function(node){
node=dojo.byId(node);
return node.offsetWidth-ds.getPadBorderWidth(node);
};
ds.getBorderBoxWidth=function(node){
node=dojo.byId(node);
return node.offsetWidth;
};
ds.getMarginBoxWidth=function(node){
return ds.getInnerWidth(node)+ds.getMarginWidth(node);
};
ds.setContentBoxWidth=function(node,_37d){
node=dojo.byId(node);
if(ds.isBorderBox(node)){
_37d+=ds.getPadBorderWidth(node);
}
return ds.setPositivePixelValue(node,"width",_37d);
};
ds.setMarginBoxWidth=function(node,_37f){
node=dojo.byId(node);
if(!ds.isBorderBox(node)){
_37f-=ds.getPadBorderWidth(node);
}
_37f-=ds.getMarginWidth(node);
return ds.setPositivePixelValue(node,"width",_37f);
};
ds.getContentWidth=ds.getContentBoxWidth;
ds.getInnerWidth=ds.getBorderBoxWidth;
ds.getOuterWidth=ds.getMarginBoxWidth;
ds.setContentWidth=ds.setContentBoxWidth;
ds.setOuterWidth=ds.setMarginBoxWidth;
ds.getMarginHeight=function(node){
return ds._sumPixelValues(node,["margin-top","margin-bottom"],ds.isPositionAbsolute(node));
};
ds.getBorderHeight=function(node){
return ds.getBorderExtent(node,"top")+ds.getBorderExtent(node,"bottom");
};
ds.getPaddingHeight=function(node){
return ds._sumPixelValues(node,["padding-top","padding-bottom"],true);
};
ds.getPadBorderHeight=function(node){
return ds.getPaddingHeight(node)+ds.getBorderHeight(node);
};
ds.getContentBoxHeight=function(node){
node=dojo.byId(node);
return node.offsetHeight-ds.getPadBorderHeight(node);
};
ds.getBorderBoxHeight=function(node){
node=dojo.byId(node);
return node.offsetHeight;
};
ds.getMarginBoxHeight=function(node){
return ds.getInnerHeight(node)+ds.getMarginHeight(node);
};
ds.setContentBoxHeight=function(node,_388){
node=dojo.byId(node);
if(ds.isBorderBox(node)){
_388+=ds.getPadBorderHeight(node);
}
return ds.setPositivePixelValue(node,"height",_388);
};
ds.setMarginBoxHeight=function(node,_38a){
node=dojo.byId(node);
if(!ds.isBorderBox(node)){
_38a-=ds.getPadBorderHeight(node);
}
_38a-=ds.getMarginHeight(node);
return ds.setPositivePixelValue(node,"height",_38a);
};
ds.getContentHeight=ds.getContentBoxHeight;
ds.getInnerHeight=ds.getBorderBoxHeight;
ds.getOuterHeight=ds.getMarginBoxHeight;
ds.setContentHeight=ds.setContentBoxHeight;
ds.setOuterHeight=ds.setMarginBoxHeight;
ds.getAbsolutePosition=ds.abs=function(node,_38c){
node=dojo.byId(node,node.ownerDocument);
var ret=[];
ret.x=ret.y=0;
var st=dojo.html.getScrollTop();
var sl=dojo.html.getScrollLeft();
if(h.ie){
with(node.getBoundingClientRect()){
ret.x=left-2;
ret.y=top-2;
}
}else{
if(document.getBoxObjectFor){
try{
var bo=node.ownerDocument.getBoxObjectFor(node);
ret.x=bo.x-ds.sumAncestorProperties(node,"scrollLeft");
ret.y=bo.y-ds.sumAncestorProperties(node,"scrollTop");
}
catch(e){
}
}else{
if(node["offsetParent"]){
var _391;
if((h.safari)&&(node.style.getPropertyValue("position")=="absolute")&&(node.parentNode==db)){
_391=db;
}else{
_391=db.parentNode;
}
if(node.parentNode!=db){
var nd=node;
if(window.opera){
nd=db;
}
ret.x-=ds.sumAncestorProperties(nd,"scrollLeft");
ret.y-=ds.sumAncestorProperties(nd,"scrollTop");
}
do{
var n=node["offsetLeft"];
ret.x+=isNaN(n)?0:n;
var m=node["offsetTop"];
ret.y+=isNaN(m)?0:m;
node=node.offsetParent;
}while((node!=_391)&&(node!=null));
}else{
if(node["x"]&&node["y"]){
ret.x+=isNaN(node.x)?0:node.x;
ret.y+=isNaN(node.y)?0:node.y;
}
}
}
}
if(_38c){
ret.y+=st;
ret.x+=sl;
}
ret[0]=ret.x;
ret[1]=ret.y;
return ret;
};
ds.sumAncestorProperties=function(node,prop){
node=dojo.byId(node);
if(!node){
return 0;
}
var _397=0;
while(node){
var val=node[prop];
if(val){
_397+=val-0;
if(node==document.body){
break;
}
}
node=node.parentNode;
}
return _397;
};
ds.getTotalOffset=function(node,type,_39b){
return ds.abs(node,_39b)[(type=="top")?"y":"x"];
};
ds.getAbsoluteX=ds.totalOffsetLeft=function(node,_39d){
return ds.getTotalOffset(node,"left",_39d);
};
ds.getAbsoluteY=ds.totalOffsetTop=function(node,_39f){
return ds.getTotalOffset(node,"top",_39f);
};
ds.styleSheet=null;
ds.insertCssRule=function(_3a0,_3a1,_3a2){
if(!ds.styleSheet){
if(document.createStyleSheet){
ds.styleSheet=document.createStyleSheet();
}else{
if(document.styleSheets[0]){
ds.styleSheet=document.styleSheets[0];
}else{
return null;
}
}
}
if(arguments.length<3){
if(ds.styleSheet.cssRules){
_3a2=ds.styleSheet.cssRules.length;
}else{
if(ds.styleSheet.rules){
_3a2=ds.styleSheet.rules.length;
}else{
return null;
}
}
}
if(ds.styleSheet.insertRule){
var rule=_3a0+" { "+_3a1+" }";
return ds.styleSheet.insertRule(rule,_3a2);
}else{
if(ds.styleSheet.addRule){
return ds.styleSheet.addRule(_3a0,_3a1,_3a2);
}else{
return null;
}
}
};
ds.removeCssRule=function(_3a4){
if(!ds.styleSheet){
dojo.debug("no stylesheet defined for removing rules");
return false;
}
if(h.ie){
if(!_3a4){
_3a4=ds.styleSheet.rules.length;
ds.styleSheet.removeRule(_3a4);
}
}else{
if(document.styleSheets[0]){
if(!_3a4){
_3a4=ds.styleSheet.cssRules.length;
}
ds.styleSheet.deleteRule(_3a4);
}
}
return true;
};
ds.insertCssFile=function(URI,doc,_3a7){
if(!URI){
return;
}
if(!doc){
doc=document;
}
var _3a8=dojo.hostenv.getText(URI);
_3a8=ds.fixPathsInCssText(_3a8,URI);
if(_3a7){
var _3a9=doc.getElementsByTagName("style");
var _3aa="";
for(var i=0;i<_3a9.length;i++){
_3aa=(_3a9[i].styleSheet&&_3a9[i].styleSheet.cssText)?_3a9[i].styleSheet.cssText:_3a9[i].innerHTML;
if(_3a8==_3aa){
return;
}
}
}
var _3ac=ds.insertCssText(_3a8);
if(_3ac&&djConfig.isDebug){
_3ac.setAttribute("dbgHref",URI);
}
return _3ac;
};
ds.insertCssText=function(_3ad,doc,URI){
if(!_3ad){
return;
}
if(!doc){
doc=document;
}
if(URI){
_3ad=ds.fixPathsInCssText(_3ad,URI);
}
var _3b0=doc.createElement("style");
_3b0.setAttribute("type","text/css");
var head=doc.getElementsByTagName("head")[0];
if(!head){
dojo.debug("No head tag in document, aborting styles");
return;
}else{
head.appendChild(_3b0);
}
if(_3b0.styleSheet){
_3b0.styleSheet.cssText=_3ad;
}else{
var _3b2=doc.createTextNode(_3ad);
_3b0.appendChild(_3b2);
}
return _3b0;
};
ds.fixPathsInCssText=function(_3b3,URI){
if(!_3b3||!URI){
return;
}
var pos=0;
var str="";
var url="";
while(pos!=-1){
pos=0;
url="";
pos=_3b3.indexOf("url(",pos);
if(pos<0){
break;
}
str+=_3b3.slice(0,pos+4);
_3b3=_3b3.substring(pos+4,_3b3.length);
url+=_3b3.match(/^[\t\s\w()\/.\\'"-:#=&?]*\)/)[0];
_3b3=_3b3.substring(url.length-1,_3b3.length);
url=url.replace(/^[\s\t]*(['"]?)([\w()\/.\\'"-:#=&?]*)\1[\s\t]*?\)/,"$2");
if(url.search(/(file|https?|ftps?):\/\//)==-1){
url=(new dojo.uri.Uri(URI,url).toString());
}
str+=url;
}
return str+_3b3;
};
ds.getBackgroundColor=function(node){
node=dojo.byId(node);
var _3b9;
do{
_3b9=ds.getStyle(node,"background-color");
if(_3b9.toLowerCase()=="rgba(0, 0, 0, 0)"){
_3b9="transparent";
}
if(node==document.getElementsByTagName("body")[0]){
node=null;
break;
}
node=node.parentNode;
}while(node&&dojo.lang.inArray(_3b9,["transparent",""]));
if(_3b9=="transparent"){
_3b9=[255,255,255,0];
}else{
_3b9=dojo.graphics.color.extractRGB(_3b9);
}
return _3b9;
};
ds.getComputedStyle=function(node,_3bb,_3bc){
node=dojo.byId(node);
var _3bb=ds.toSelectorCase(_3bb);
var _3bd=ds.toCamelCase(_3bb);
if(!node||!node.style){
return _3bc;
}else{
if(document.defaultView){
try{
var cs=document.defaultView.getComputedStyle(node,"");
if(cs){
return cs.getPropertyValue(_3bb);
}
}
catch(e){
if(node.style.getPropertyValue){
return node.style.getPropertyValue(_3bb);
}else{
return _3bc;
}
}
}else{
if(node.currentStyle){
return node.currentStyle[_3bd];
}
}
}
if(node.style.getPropertyValue){
return node.style.getPropertyValue(_3bb);
}else{
return _3bc;
}
};
ds.getStyleProperty=function(node,_3c0){
node=dojo.byId(node);
return (node&&node.style?node.style[ds.toCamelCase(_3c0)]:undefined);
};
ds.getStyle=function(node,_3c2){
var _3c3=ds.getStyleProperty(node,_3c2);
return (_3c3?_3c3:ds.getComputedStyle(node,_3c2));
};
ds.setStyle=function(node,_3c5,_3c6){
node=dojo.byId(node);
if(node&&node.style){
var _3c7=ds.toCamelCase(_3c5);
node.style[_3c7]=_3c6;
}
};
ds.toCamelCase=function(_3c8){
var arr=_3c8.split("-"),cc=arr[0];
for(var i=1;i<arr.length;i++){
cc+=arr[i].charAt(0).toUpperCase()+arr[i].substring(1);
}
return cc;
};
ds.toSelectorCase=function(_3cb){
return _3cb.replace(/([A-Z])/g,"-$1").toLowerCase();
};
ds.setOpacity=function setOpacity(node,_3cd,_3ce){
node=dojo.byId(node);
if(!_3ce){
if(_3cd>=1){
if(h.ie){
ds.clearOpacity(node);
return;
}else{
_3cd=0.999999;
}
}else{
if(_3cd<0){
_3cd=0;
}
}
}
if(h.ie){
if(node.nodeName.toLowerCase()=="tr"){
var tds=node.getElementsByTagName("td");
for(var x=0;x<tds.length;x++){
tds[x].style.filter="Alpha(Opacity="+_3cd*100+")";
}
}
node.style.filter="Alpha(Opacity="+_3cd*100+")";
}else{
if(h.moz){
node.style.opacity=_3cd;
node.style.MozOpacity=_3cd;
}else{
if(h.safari){
node.style.opacity=_3cd;
node.style.KhtmlOpacity=_3cd;
}else{
node.style.opacity=_3cd;
}
}
}
};
ds.getOpacity=function getOpacity(node){
node=dojo.byId(node);
if(h.ie){
var opac=(node.filters&&node.filters.alpha&&typeof node.filters.alpha.opacity=="number"?node.filters.alpha.opacity:100)/100;
}else{
var opac=node.style.opacity||node.style.MozOpacity||node.style.KhtmlOpacity||1;
}
return opac>=0.999999?1:Number(opac);
};
ds.clearOpacity=function clearOpacity(node){
node=dojo.byId(node);
var ns=node.style;
if(h.ie){
try{
if(node.filters&&node.filters.alpha){
ns.filter="";
}
}
catch(e){
}
}else{
if(h.moz){
ns.opacity=1;
ns.MozOpacity=1;
}else{
if(h.safari){
ns.opacity=1;
ns.KhtmlOpacity=1;
}else{
ns.opacity=1;
}
}
}
};
ds.setStyleAttributes=function(node,_3d6){
var _3d7={"opacity":dojo.style.setOpacity,"content-height":dojo.style.setContentHeight,"content-width":dojo.style.setContentWidth,"outer-height":dojo.style.setOuterHeight,"outer-width":dojo.style.setOuterWidth};
var _3d8=_3d6.replace(/(;)?\s*$/,"").split(";");
for(var i=0;i<_3d8.length;i++){
var _3da=_3d8[i].split(":");
var name=_3da[0].replace(/\s*$/,"").replace(/^\s*/,"").toLowerCase();
var _3dc=_3da[1].replace(/\s*$/,"").replace(/^\s*/,"");
if(dojo.lang.has(_3d7,name)){
_3d7[name](node,_3dc);
}else{
node.style[dojo.style.toCamelCase(name)]=_3dc;
}
}
};
ds._toggle=function(node,_3de,_3df){
node=dojo.byId(node);
_3df(node,!_3de(node));
return _3de(node);
};
ds.show=function(node){
node=dojo.byId(node);
if(ds.getStyleProperty(node,"display")=="none"){
ds.setStyle(node,"display",(node.dojoDisplayCache||""));
node.dojoDisplayCache=undefined;
}
};
ds.hide=function(node){
node=dojo.byId(node);
if(typeof node["dojoDisplayCache"]=="undefined"){
var d=ds.getStyleProperty(node,"display");
if(d!="none"){
node.dojoDisplayCache=d;
}
}
ds.setStyle(node,"display","none");
};
ds.setShowing=function(node,_3e4){
ds[(_3e4?"show":"hide")](node);
};
ds.isShowing=function(node){
return (ds.getStyleProperty(node,"display")!="none");
};
ds.toggleShowing=function(node){
return ds._toggle(node,ds.isShowing,ds.setShowing);
};
ds.displayMap={tr:"",td:"",th:"",img:"inline",span:"inline",input:"inline",button:"inline"};
ds.suggestDisplayByTagName=function(node){
node=dojo.byId(node);
if(node&&node.tagName){
var tag=node.tagName.toLowerCase();
return (tag in ds.displayMap?ds.displayMap[tag]:"block");
}
};
ds.setDisplay=function(node,_3ea){
ds.setStyle(node,"display",(dojo.lang.isString(_3ea)?_3ea:(_3ea?ds.suggestDisplayByTagName(node):"none")));
};
ds.isDisplayed=function(node){
return (ds.getComputedStyle(node,"display")!="none");
};
ds.toggleDisplay=function(node){
return ds._toggle(node,ds.isDisplayed,ds.setDisplay);
};
ds.setVisibility=function(node,_3ee){
ds.setStyle(node,"visibility",(dojo.lang.isString(_3ee)?_3ee:(_3ee?"visible":"hidden")));
};
ds.isVisible=function(node){
return (ds.getComputedStyle(node,"visibility")!="hidden");
};
ds.toggleVisibility=function(node){
return ds._toggle(node,ds.isVisible,ds.setVisibility);
};
ds.toCoordinateArray=function(_3f1,_3f2){
if(dojo.lang.isArray(_3f1)){
while(_3f1.length<4){
_3f1.push(0);
}
while(_3f1.length>4){
_3f1.pop();
}
var ret=_3f1;
}else{
var node=dojo.byId(_3f1);
var pos=ds.getAbsolutePosition(node,_3f2);
var ret=[pos.x,pos.y,ds.getBorderBoxWidth(node),ds.getBorderBoxHeight(node)];
}
ret.x=ret[0];
ret.y=ret[1];
ret.w=ret[2];
ret.h=ret[3];
return ret;
};
})();
dojo.provide("dojo.html");
dojo.require("dojo.lang.func");
dojo.require("dojo.dom");
dojo.require("dojo.style");
dojo.require("dojo.string");
dojo.lang.mixin(dojo.html,dojo.dom);
dojo.lang.mixin(dojo.html,dojo.style);
dojo.html.clearSelection=function(){
try{
if(window["getSelection"]){
if(dojo.render.html.safari){
window.getSelection().collapse();
}else{
window.getSelection().removeAllRanges();
}
}else{
if(document.selection){
if(document.selection.empty){
document.selection.empty();
}else{
if(document.selection.clear){
document.selection.clear();
}
}
}
}
return true;
}
catch(e){
dojo.debug(e);
return false;
}
};
dojo.html.disableSelection=function(_3f6){
_3f6=dojo.byId(_3f6)||document.body;
var h=dojo.render.html;
if(h.mozilla){
_3f6.style.MozUserSelect="none";
}else{
if(h.safari){
_3f6.style.KhtmlUserSelect="none";
}else{
if(h.ie){
_3f6.unselectable="on";
}else{
return false;
}
}
}
return true;
};
dojo.html.enableSelection=function(_3f8){
_3f8=dojo.byId(_3f8)||document.body;
var h=dojo.render.html;
if(h.mozilla){
_3f8.style.MozUserSelect="";
}else{
if(h.safari){
_3f8.style.KhtmlUserSelect="";
}else{
if(h.ie){
_3f8.unselectable="off";
}else{
return false;
}
}
}
return true;
};
dojo.html.selectElement=function(_3fa){
_3fa=dojo.byId(_3fa);
if(document.selection&&document.body.createTextRange){
var _3fb=document.body.createTextRange();
_3fb.moveToElementText(_3fa);
_3fb.select();
}else{
if(window["getSelection"]){
var _3fc=window.getSelection();
if(_3fc["selectAllChildren"]){
_3fc.selectAllChildren(_3fa);
}
}
}
};
dojo.html.selectInputText=function(_3fd){
_3fd=dojo.byId(_3fd);
if(document.selection&&document.body.createTextRange){
var _3fe=_3fd.createTextRange();
_3fe.moveStart("character",0);
_3fe.moveEnd("character",_3fd.value.length);
_3fe.select();
}else{
if(window["getSelection"]){
var _3ff=window.getSelection();
_3fd.setSelectionRange(0,_3fd.value.length);
}
}
_3fd.focus();
};
dojo.html.isSelectionCollapsed=function(){
if(document["selection"]){
return document.selection.createRange().text=="";
}else{
if(window["getSelection"]){
var _400=window.getSelection();
if(dojo.lang.isString(_400)){
return _400=="";
}else{
return _400.isCollapsed;
}
}
}
};
dojo.html.getEventTarget=function(evt){
if(!evt){
evt=window.event||{};
}
var t=(evt.srcElement?evt.srcElement:(evt.target?evt.target:null));
while((t)&&(t.nodeType!=1)){
t=t.parentNode;
}
return t;
};
dojo.html.getDocumentWidth=function(){
dojo.deprecated("dojo.html.getDocument*","replaced by dojo.html.getViewport*","0.4");
return dojo.html.getViewportWidth();
};
dojo.html.getDocumentHeight=function(){
dojo.deprecated("dojo.html.getDocument*","replaced by dojo.html.getViewport*","0.4");
return dojo.html.getViewportHeight();
};
dojo.html.getDocumentSize=function(){
dojo.deprecated("dojo.html.getDocument*","replaced of dojo.html.getViewport*","0.4");
return dojo.html.getViewportSize();
};
dojo.html.getViewportWidth=function(){
var w=0;
if(window.innerWidth){
w=window.innerWidth;
}
if(dojo.exists(document,"documentElement.clientWidth")){
var w2=document.documentElement.clientWidth;
if(!w||w2&&w2<w){
w=w2;
}
return w;
}
if(document.body){
return document.body.clientWidth;
}
return 0;
};
dojo.html.getViewportHeight=function(){
if(window.innerHeight){
return window.innerHeight;
}
if(dojo.exists(document,"documentElement.clientHeight")){
return document.documentElement.clientHeight;
}
if(document.body){
return document.body.clientHeight;
}
return 0;
};
dojo.html.getViewportSize=function(){
var ret=[dojo.html.getViewportWidth(),dojo.html.getViewportHeight()];
ret.w=ret[0];
ret.h=ret[1];
return ret;
};
dojo.html.getScrollTop=function(){
return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;
};
dojo.html.getScrollLeft=function(){
return window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;
};
dojo.html.getScrollOffset=function(){
var off=[dojo.html.getScrollLeft(),dojo.html.getScrollTop()];
off.x=off[0];
off.y=off[1];
return off;
};
dojo.html.getParentOfType=function(node,type){
dojo.deprecated("dojo.html.getParentOfType","replaced by dojo.html.getParentByType*","0.4");
return dojo.html.getParentByType(node,type);
};
dojo.html.getParentByType=function(node,type){
var _40b=dojo.byId(node);
type=type.toLowerCase();
while((_40b)&&(_40b.nodeName.toLowerCase()!=type)){
if(_40b==(document["body"]||document["documentElement"])){
return null;
}
_40b=_40b.parentNode;
}
return _40b;
};
dojo.html.getAttribute=function(node,attr){
node=dojo.byId(node);
if((!node)||(!node.getAttribute)){
return null;
}
var ta=typeof attr=="string"?attr:new String(attr);
var v=node.getAttribute(ta.toUpperCase());
if((v)&&(typeof v=="string")&&(v!="")){
return v;
}
if(v&&v.value){
return v.value;
}
if((node.getAttributeNode)&&(node.getAttributeNode(ta))){
return (node.getAttributeNode(ta)).value;
}else{
if(node.getAttribute(ta)){
return node.getAttribute(ta);
}else{
if(node.getAttribute(ta.toLowerCase())){
return node.getAttribute(ta.toLowerCase());
}
}
}
return null;
};
dojo.html.hasAttribute=function(node,attr){
node=dojo.byId(node);
return dojo.html.getAttribute(node,attr)?true:false;
};
dojo.html.getClass=function(node){
node=dojo.byId(node);
if(!node){
return "";
}
var cs="";
if(node.className){
cs=node.className;
}else{
if(dojo.html.hasAttribute(node,"class")){
cs=dojo.html.getAttribute(node,"class");
}
}
return dojo.string.trim(cs);
};
dojo.html.getClasses=function(node){
var c=dojo.html.getClass(node);
return (c=="")?[]:c.split(/\s+/g);
};
dojo.html.hasClass=function(node,_417){
return dojo.lang.inArray(dojo.html.getClasses(node),_417);
};
dojo.html.prependClass=function(node,_419){
_419+=" "+dojo.html.getClass(node);
return dojo.html.setClass(node,_419);
};
dojo.html.addClass=function(node,_41b){
if(dojo.html.hasClass(node,_41b)){
return false;
}
_41b=dojo.string.trim(dojo.html.getClass(node)+" "+_41b);
return dojo.html.setClass(node,_41b);
};
dojo.html.setClass=function(node,_41d){
node=dojo.byId(node);
var cs=new String(_41d);
try{
if(typeof node.className=="string"){
node.className=cs;
}else{
if(node.setAttribute){
node.setAttribute("class",_41d);
node.className=cs;
}else{
return false;
}
}
}
catch(e){
dojo.debug("dojo.html.setClass() failed",e);
}
return true;
};
dojo.html.removeClass=function(node,_420,_421){
var _420=dojo.string.trim(new String(_420));
try{
var cs=dojo.html.getClasses(node);
var nca=[];
if(_421){
for(var i=0;i<cs.length;i++){
if(cs[i].indexOf(_420)==-1){
nca.push(cs[i]);
}
}
}else{
for(var i=0;i<cs.length;i++){
if(cs[i]!=_420){
nca.push(cs[i]);
}
}
}
dojo.html.setClass(node,nca.join(" "));
}
catch(e){
dojo.debug("dojo.html.removeClass() failed",e);
}
return true;
};
dojo.html.replaceClass=function(node,_426,_427){
dojo.html.removeClass(node,_427);
dojo.html.addClass(node,_426);
};
dojo.html.classMatchType={ContainsAll:0,ContainsAny:1,IsOnly:2};
dojo.html.getElementsByClass=function(_428,_429,_42a,_42b,_42c){
_429=dojo.byId(_429)||document;
var _42d=_428.split(/\s+/g);
var _42e=[];
if(_42b!=1&&_42b!=2){
_42b=0;
}
var _42f=new RegExp("(\\s|^)(("+_42d.join(")|(")+"))(\\s|$)");
var _430=_42d.join(" ").length;
var _431=[];
if(!_42c&&document.evaluate){
var _432="//"+(_42a||"*")+"[contains(";
if(_42b!=dojo.html.classMatchType.ContainsAny){
_432+="concat(' ',@class,' '), ' "+_42d.join(" ') and contains(concat(' ',@class,' '), ' ")+" ')";
if(_42b==2){
_432+=" and string-length(@class)="+_430+"]";
}else{
_432+="]";
}
}else{
_432+="concat(' ',@class,' '), ' "+_42d.join(" ')) or contains(concat(' ',@class,' '), ' ")+" ')]";
}
var _433=document.evaluate(_432,_429,null,XPathResult.ANY_TYPE,null);
var _434=_433.iterateNext();
while(_434){
try{
_431.push(_434);
_434=_433.iterateNext();
}
catch(e){
break;
}
}
return _431;
}else{
if(!_42a){
_42a="*";
}
_431=_429.getElementsByTagName(_42a);
var node,i=0;
outer:
while(node=_431[i++]){
var _436=dojo.html.getClasses(node);
if(_436.length==0){
continue outer;
}
var _437=0;
for(var j=0;j<_436.length;j++){
if(_42f.test(_436[j])){
if(_42b==dojo.html.classMatchType.ContainsAny){
_42e.push(node);
continue outer;
}else{
_437++;
}
}else{
if(_42b==dojo.html.classMatchType.IsOnly){
continue outer;
}
}
}
if(_437==_42d.length){
if((_42b==dojo.html.classMatchType.IsOnly)&&(_437==_436.length)){
_42e.push(node);
}else{
if(_42b==dojo.html.classMatchType.ContainsAll){
_42e.push(node);
}
}
}
}
return _42e;
}
};
dojo.html.getElementsByClassName=dojo.html.getElementsByClass;
dojo.html.getCursorPosition=function(e){
e=e||window.event;
var _43a={x:0,y:0};
if(e.pageX||e.pageY){
_43a.x=e.pageX;
_43a.y=e.pageY;
}else{
var de=document.documentElement;
var db=document.body;
_43a.x=e.clientX+((de||db)["scrollLeft"])-((de||db)["clientLeft"]);
_43a.y=e.clientY+((de||db)["scrollTop"])-((de||db)["clientTop"]);
}
return _43a;
};
dojo.html.overElement=function(_43d,e){
_43d=dojo.byId(_43d);
var _43f=dojo.html.getCursorPosition(e);
with(dojo.html){
var top=getAbsoluteY(_43d,true);
var _441=top+getInnerHeight(_43d);
var left=getAbsoluteX(_43d,true);
var _443=left+getInnerWidth(_43d);
}
return (_43f.x>=left&&_43f.x<=_443&&_43f.y>=top&&_43f.y<=_441);
};
dojo.html.setActiveStyleSheet=function(_444){
var i=0,a,els=document.getElementsByTagName("link");
while(a=els[i++]){
if(a.getAttribute("rel").indexOf("style")!=-1&&a.getAttribute("title")){
a.disabled=true;
if(a.getAttribute("title")==_444){
a.disabled=false;
}
}
}
};
dojo.html.getActiveStyleSheet=function(){
var i=0,a,els=document.getElementsByTagName("link");
while(a=els[i++]){
if(a.getAttribute("rel").indexOf("style")!=-1&&a.getAttribute("title")&&!a.disabled){
return a.getAttribute("title");
}
}
return null;
};
dojo.html.getPreferredStyleSheet=function(){
var i=0,a,els=document.getElementsByTagName("link");
while(a=els[i++]){
if(a.getAttribute("rel").indexOf("style")!=-1&&a.getAttribute("rel").indexOf("alt")==-1&&a.getAttribute("title")){
return a.getAttribute("title");
}
}
return null;
};
dojo.html.body=function(){
return document.body||document.getElementsByTagName("body")[0];
};
dojo.html.isTag=function(node){
node=dojo.byId(node);
if(node&&node.tagName){
var arr=dojo.lang.map(dojo.lang.toArray(arguments,1),function(a){
return String(a).toLowerCase();
});
return arr[dojo.lang.find(node.tagName.toLowerCase(),arr)]||"";
}
return "";
};
dojo.html.copyStyle=function(_44b,_44c){
if(dojo.lang.isUndefined(_44c.style.cssText)){
_44b.setAttribute("style",_44c.getAttribute("style"));
}else{
_44b.style.cssText=_44c.style.cssText;
}
dojo.html.addClass(_44b,dojo.html.getClass(_44c));
};
dojo.html._callExtrasDeprecated=function(_44d,args){
var _44f="dojo.html.extras";
dojo.deprecated("dojo.html."+_44d,"moved to "+_44f,"0.4");
dojo["require"](_44f);
return dojo.html[_44d].apply(dojo.html,args);
};
dojo.html.createNodesFromText=function(){
return dojo.html._callExtrasDeprecated("createNodesFromText",arguments);
};
dojo.html.gravity=function(){
return dojo.html._callExtrasDeprecated("gravity",arguments);
};
dojo.html.placeOnScreen=function(){
return dojo.html._callExtrasDeprecated("placeOnScreen",arguments);
};
dojo.html.placeOnScreenPoint=function(){
return dojo.html._callExtrasDeprecated("placeOnScreenPoint",arguments);
};
dojo.html.renderedTextContent=function(){
return dojo.html._callExtrasDeprecated("renderedTextContent",arguments);
};
dojo.html.BackgroundIframe=function(){
return dojo.html._callExtrasDeprecated("BackgroundIframe",arguments);
};
dojo.provide("dojo.dnd.HtmlDragManager");
dojo.require("dojo.dnd.DragAndDrop");
dojo.require("dojo.event.*");
dojo.require("dojo.lang.array");
dojo.require("dojo.html");
dojo.require("dojo.style");
dojo.dnd.HtmlDragManager=function(){
};
dojo.inherits(dojo.dnd.HtmlDragManager,dojo.dnd.DragManager);
dojo.lang.extend(dojo.dnd.HtmlDragManager,{disabled:false,nestedTargets:false,mouseDownTimer:null,dsCounter:0,dsPrefix:"dojoDragSource",dropTargetDimensions:[],currentDropTarget:null,previousDropTarget:null,_dragTriggered:false,selectedSources:[],dragObjects:[],currentX:null,currentY:null,lastX:null,lastY:null,mouseDownX:null,mouseDownY:null,threshold:7,dropAcceptable:false,cancelEvent:function(e){
e.stopPropagation();
e.preventDefault();
},registerDragSource:function(ds){
if(ds["domNode"]){
var dp=this.dsPrefix;
var _453=dp+"Idx_"+(this.dsCounter++);
ds.dragSourceId=_453;
this.dragSources[_453]=ds;
ds.domNode.setAttribute(dp,_453);
if(dojo.render.html.ie){
dojo.event.connect(ds.domNode,"ondragstart",this.cancelEvent);
}
}
},unregisterDragSource:function(ds){
if(ds["domNode"]){
var dp=this.dsPrefix;
var _456=ds.dragSourceId;
delete ds.dragSourceId;
delete this.dragSources[_456];
ds.domNode.setAttribute(dp,null);
}
if(dojo.render.html.ie){
dojo.event.disconnect(ds.domNode,"ondragstart",this.cancelEvent);
}
},registerDropTarget:function(dt){
this.dropTargets.push(dt);
},unregisterDropTarget:function(dt){
var _459=dojo.lang.find(this.dropTargets,dt,true);
if(_459>=0){
this.dropTargets.splice(_459,1);
}
},getDragSource:function(e){
var tn=e.target;
if(tn===dojo.html.body()){
return;
}
var ta=dojo.html.getAttribute(tn,this.dsPrefix);
while((!ta)&&(tn)){
tn=tn.parentNode;
if((!tn)||(tn===dojo.html.body())){
return;
}
ta=dojo.html.getAttribute(tn,this.dsPrefix);
}
return this.dragSources[ta];
},onKeyDown:function(e){
},onMouseDown:function(e){
if(this.disabled){
return;
}
if(dojo.render.html.ie){
if(e.button!=1){
return;
}
}else{
if(e.which!=1){
return;
}
}
var _45f=e.target.nodeType==dojo.dom.TEXT_NODE?e.target.parentNode:e.target;
if(dojo.html.isTag(_45f,"button","textarea","input","select","option")){
return;
}
var ds=this.getDragSource(e);
if(!ds){
return;
}
if(!dojo.lang.inArray(this.selectedSources,ds)){
this.selectedSources.push(ds);
ds.onSelected();
}
this.mouseDownX=e.pageX;
this.mouseDownY=e.pageY;
e.preventDefault();
dojo.event.connect(document,"onmousemove",this,"onMouseMove");
},onMouseUp:function(e,_462){
if(this.selectedSources.length==0){
return;
}
this.mouseDownX=null;
this.mouseDownY=null;
this._dragTriggered=false;
e.dragSource=this.dragSource;
if((!e.shiftKey)&&(!e.ctrlKey)){
if(this.currentDropTarget){
this.currentDropTarget.onDropStart();
}
dojo.lang.forEach(this.dragObjects,function(_463){
var ret=null;
if(!_463){
return;
}
if(this.currentDropTarget){
e.dragObject=_463;
var ce=this.currentDropTarget.domNode.childNodes;
if(ce.length>0){
e.dropTarget=ce[0];
while(e.dropTarget==_463.domNode){
e.dropTarget=e.dropTarget.nextSibling;
}
}else{
e.dropTarget=this.currentDropTarget.domNode;
}
if(this.dropAcceptable){
ret=this.currentDropTarget.onDrop(e);
}else{
this.currentDropTarget.onDragOut(e);
}
}
e.dragStatus=this.dropAcceptable&&ret?"dropSuccess":"dropFailure";
dojo.lang.delayThese([function(){
try{
_463.dragSource.onDragEnd(e);
}
catch(err){
var _466={};
for(var i in e){
if(i=="type"){
_466.type="mouseup";
continue;
}
_466[i]=e[i];
}
_463.dragSource.onDragEnd(_466);
}
},function(){
_463.onDragEnd(e);
}]);
},this);
this.selectedSources=[];
this.dragObjects=[];
this.dragSource=null;
if(this.currentDropTarget){
this.currentDropTarget.onDropEnd();
}
}
dojo.event.disconnect(document,"onmousemove",this,"onMouseMove");
this.currentDropTarget=null;
},onScroll:function(){
for(var i=0;i<this.dragObjects.length;i++){
if(this.dragObjects[i].updateDragOffset){
this.dragObjects[i].updateDragOffset();
}
}
this.cacheTargetLocations();
},_dragStartDistance:function(x,y){
if((!this.mouseDownX)||(!this.mouseDownX)){
return;
}
var dx=Math.abs(x-this.mouseDownX);
var dx2=dx*dx;
var dy=Math.abs(y-this.mouseDownY);
var dy2=dy*dy;
return parseInt(Math.sqrt(dx2+dy2),10);
},cacheTargetLocations:function(){
this.dropTargetDimensions=[];
dojo.lang.forEach(this.dropTargets,function(_46f){
var tn=_46f.domNode;
if(!tn){
return;
}
var ttx=dojo.style.getAbsoluteX(tn,true);
var tty=dojo.style.getAbsoluteY(tn,true);
this.dropTargetDimensions.push([[ttx,tty],[ttx+dojo.style.getInnerWidth(tn),tty+dojo.style.getInnerHeight(tn)],_46f]);
},this);
},onMouseMove:function(e){
if((dojo.render.html.ie)&&(e.button!=1)){
this.currentDropTarget=null;
this.onMouseUp(e,true);
return;
}
if((this.selectedSources.length)&&(!this.dragObjects.length)){
var dx;
var dy;
if(!this._dragTriggered){
this._dragTriggered=(this._dragStartDistance(e.pageX,e.pageY)>this.threshold);
if(!this._dragTriggered){
return;
}
dx=e.pageX-this.mouseDownX;
dy=e.pageY-this.mouseDownY;
}
this.dragSource=this.selectedSources[0];
dojo.lang.forEach(this.selectedSources,function(_476){
if(!_476){
return;
}
var tdo=_476.onDragStart(e);
if(tdo){
tdo.onDragStart(e);
tdo.dragOffset.y+=dy;
tdo.dragOffset.x+=dx;
tdo.dragSource=_476;
this.dragObjects.push(tdo);
}
},this);
this.previousDropTarget=null;
this.cacheTargetLocations();
}
dojo.lang.forEach(this.dragObjects,function(_478){
if(_478){
_478.onDragMove(e);
}
});
if(this.currentDropTarget){
var c=dojo.style.toCoordinateArray(this.currentDropTarget.domNode,true);
var dtp=[[c[0],c[1]],[c[0]+c[2],c[1]+c[3]]];
}
if((!this.nestedTargets)&&(dtp)&&(this.isInsideBox(e,dtp))){
if(this.dropAcceptable){
this.currentDropTarget.onDragMove(e,this.dragObjects);
}
}else{
var _47b=this.findBestTarget(e);
if(_47b.target===null){
if(this.currentDropTarget){
this.currentDropTarget.onDragOut(e);
this.previousDropTarget=this.currentDropTarget;
this.currentDropTarget=null;
}
this.dropAcceptable=false;
return;
}
if(this.currentDropTarget!==_47b.target){
if(this.currentDropTarget){
this.previousDropTarget=this.currentDropTarget;
this.currentDropTarget.onDragOut(e);
}
this.currentDropTarget=_47b.target;
e.dragObjects=this.dragObjects;
this.dropAcceptable=this.currentDropTarget.onDragOver(e);
}else{
if(this.dropAcceptable){
this.currentDropTarget.onDragMove(e,this.dragObjects);
}
}
}
},findBestTarget:function(e){
var _47d=this;
var _47e=new Object();
_47e.target=null;
_47e.points=null;
dojo.lang.every(this.dropTargetDimensions,function(_47f){
if(!_47d.isInsideBox(e,_47f)){
return true;
}
_47e.target=_47f[2];
_47e.points=_47f;
return Boolean(_47d.nestedTargets);
});
return _47e;
},isInsideBox:function(e,_481){
if((e.pageX>_481[0][0])&&(e.pageX<_481[1][0])&&(e.pageY>_481[0][1])&&(e.pageY<_481[1][1])){
return true;
}
return false;
},onMouseOver:function(e){
},onMouseOut:function(e){
}});
dojo.dnd.dragManager=new dojo.dnd.HtmlDragManager();
(function(){
var d=document;
var dm=dojo.dnd.dragManager;
dojo.event.connect(d,"onkeydown",dm,"onKeyDown");
dojo.event.connect(d,"onmouseover",dm,"onMouseOver");
dojo.event.connect(d,"onmouseout",dm,"onMouseOut");
dojo.event.connect(d,"onmousedown",dm,"onMouseDown");
dojo.event.connect(d,"onmouseup",dm,"onMouseUp");
dojo.event.connect(window,"onscroll",dm,"onScroll");
})();
dojo.require("dojo.html");
dojo.provide("dojo.html.extras");
dojo.require("dojo.string.extras");
dojo.html.gravity=function(node,e){
node=dojo.byId(node);
var _488=dojo.html.getCursorPosition(e);
with(dojo.html){
var _489=getAbsoluteX(node,true)+(getInnerWidth(node)/2);
var _48a=getAbsoluteY(node,true)+(getInnerHeight(node)/2);
}
with(dojo.html.gravity){
return ((_488.x<_489?WEST:EAST)|(_488.y<_48a?NORTH:SOUTH));
}
};
dojo.html.gravity.NORTH=1;
dojo.html.gravity.SOUTH=1<<1;
dojo.html.gravity.EAST=1<<2;
dojo.html.gravity.WEST=1<<3;
dojo.html.renderedTextContent=function(node){
node=dojo.byId(node);
var _48c="";
if(node==null){
return _48c;
}
for(var i=0;i<node.childNodes.length;i++){
switch(node.childNodes[i].nodeType){
case 1:
case 5:
var _48e="unknown";
try{
_48e=dojo.style.getStyle(node.childNodes[i],"display");
}
catch(E){
}
switch(_48e){
case "block":
case "list-item":
case "run-in":
case "table":
case "table-row-group":
case "table-header-group":
case "table-footer-group":
case "table-row":
case "table-column-group":
case "table-column":
case "table-cell":
case "table-caption":
_48c+="\n";
_48c+=dojo.html.renderedTextContent(node.childNodes[i]);
_48c+="\n";
break;
case "none":
break;
default:
if(node.childNodes[i].tagName&&node.childNodes[i].tagName.toLowerCase()=="br"){
_48c+="\n";
}else{
_48c+=dojo.html.renderedTextContent(node.childNodes[i]);
}
break;
}
break;
case 3:
case 2:
case 4:
var text=node.childNodes[i].nodeValue;
var _490="unknown";
try{
_490=dojo.style.getStyle(node,"text-transform");
}
catch(E){
}
switch(_490){
case "capitalize":
text=dojo.string.capitalize(text);
break;
case "uppercase":
text=text.toUpperCase();
break;
case "lowercase":
text=text.toLowerCase();
break;
default:
break;
}
switch(_490){
case "nowrap":
break;
case "pre-wrap":
break;
case "pre-line":
break;
case "pre":
break;
default:
text=text.replace(/\s+/," ");
if(/\s$/.test(_48c)){
text.replace(/^\s/,"");
}
break;
}
_48c+=text;
break;
default:
break;
}
}
return _48c;
};
dojo.html.createNodesFromText=function(txt,trim){
if(trim){
txt=dojo.string.trim(txt);
}
var tn=document.createElement("div");
tn.style.visibility="hidden";
dojo.html.body().appendChild(tn);
var _494="none";
if((/^<t[dh][\s\r\n>]/i).test(dojo.string.trimStart(txt))){
txt="<table><tbody><tr>"+txt+"</tr></tbody></table>";
_494="cell";
}else{
if((/^<tr[\s\r\n>]/i).test(dojo.string.trimStart(txt))){
txt="<table><tbody>"+txt+"</tbody></table>";
_494="row";
}else{
if((/^<(thead|tbody|tfoot)[\s\r\n>]/i).test(dojo.string.trimStart(txt))){
txt="<table>"+txt+"</table>";
_494="section";
}
}
}
tn.innerHTML=txt;
if(tn["normalize"]){
tn.normalize();
}
var _495=null;
switch(_494){
case "cell":
_495=tn.getElementsByTagName("tr")[0];
break;
case "row":
_495=tn.getElementsByTagName("tbody")[0];
break;
case "section":
_495=tn.getElementsByTagName("table")[0];
break;
default:
_495=tn;
break;
}
var _496=[];
for(var x=0;x<_495.childNodes.length;x++){
_496.push(_495.childNodes[x].cloneNode(true));
}
tn.style.display="none";
dojo.html.body().removeChild(tn);
return _496;
};
dojo.html.placeOnScreen=function(node,_499,_49a,_49b,_49c){
if(dojo.lang.isArray(_499)){
_49c=_49b;
_49b=_49a;
_49a=_499[1];
_499=_499[0];
}
if(!isNaN(_49b)){
_49b=[Number(_49b),Number(_49b)];
}else{
if(!dojo.lang.isArray(_49b)){
_49b=[0,0];
}
}
var _49d=dojo.html.getScrollOffset();
var view=dojo.html.getViewportSize();
node=dojo.byId(node);
var w=node.offsetWidth+_49b[0];
var h=node.offsetHeight+_49b[1];
if(_49c){
_499-=_49d.x;
_49a-=_49d.y;
}
var x=_499+w;
if(x>view.w){
x=view.w-w;
}else{
x=_499;
}
x=Math.max(_49b[0],x)+_49d.x;
var y=_49a+h;
if(y>view.h){
y=view.h-h;
}else{
y=_49a;
}
y=Math.max(_49b[1],y)+_49d.y;
node.style.left=x+"px";
node.style.top=y+"px";
var ret=[x,y];
ret.x=x;
ret.y=y;
return ret;
};
dojo.html.placeOnScreenPoint=function(node,_4a5,_4a6,_4a7,_4a8){
if(dojo.lang.isArray(_4a5)){
_4a8=_4a7;
_4a7=_4a6;
_4a6=_4a5[1];
_4a5=_4a5[0];
}
if(!isNaN(_4a7)){
_4a7=[Number(_4a7),Number(_4a7)];
}else{
if(!dojo.lang.isArray(_4a7)){
_4a7=[0,0];
}
}
var _4a9=dojo.html.getScrollOffset();
var view=dojo.html.getViewportSize();
node=dojo.byId(node);
var _4ab=node.style.display;
node.style.display="";
var w=dojo.style.getInnerWidth(node);
var h=dojo.style.getInnerHeight(node);
node.style.display=_4ab;
if(_4a8){
_4a5-=_4a9.x;
_4a6-=_4a9.y;
}
var x=-1,y=-1;
if((_4a5+_4a7[0])+w<=view.w&&(_4a6+_4a7[1])+h<=view.h){
x=(_4a5+_4a7[0]);
y=(_4a6+_4a7[1]);
}
if((x<0||y<0)&&(_4a5-_4a7[0])<=view.w&&(_4a6+_4a7[1])+h<=view.h){
x=(_4a5-_4a7[0])-w;
y=(_4a6+_4a7[1]);
}
if((x<0||y<0)&&(_4a5+_4a7[0])+w<=view.w&&(_4a6-_4a7[1])<=view.h){
x=(_4a5+_4a7[0]);
y=(_4a6-_4a7[1])-h;
}
if((x<0||y<0)&&(_4a5-_4a7[0])<=view.w&&(_4a6-_4a7[1])<=view.h){
x=(_4a5-_4a7[0])-w;
y=(_4a6-_4a7[1])-h;
}
if(x<0||y<0||(x+w>view.w)||(y+h>view.h)){
return dojo.html.placeOnScreen(node,_4a5,_4a6,_4a7,_4a8);
}
x+=_4a9.x;
y+=_4a9.y;
node.style.left=x+"px";
node.style.top=y+"px";
var ret=[x,y];
ret.x=x;
ret.y=y;
return ret;
};
dojo.html.BackgroundIframe=function(node){
if(dojo.render.html.ie55||dojo.render.html.ie60){
var html="<iframe "+"style='position: absolute; left: 0px; top: 0px; width: 100%; height: 100%;"+"z-index: -1; filter:Alpha(Opacity=\"0\");' "+">";
this.iframe=document.createElement(html);
this.iframe.tabIndex=-1;
if(node){
node.appendChild(this.iframe);
this.domNode=node;
}else{
dojo.html.body().appendChild(this.iframe);
this.iframe.style.display="none";
}
}
};
dojo.lang.extend(dojo.html.BackgroundIframe,{iframe:null,onResized:function(){
if(this.iframe&&this.domNode&&this.domNode.parentElement){
var w=dojo.style.getOuterWidth(this.domNode);
var h=dojo.style.getOuterHeight(this.domNode);
if(w==0||h==0){
dojo.lang.setTimeout(this,this.onResized,50);
return;
}
var s=this.iframe.style;
s.width=w+"px";
s.height=h+"px";
}
},size:function(node){
if(!this.iframe){
return;
}
var _4b6=dojo.style.toCoordinateArray(node,true);
var s=this.iframe.style;
s.width=_4b6.w+"px";
s.height=_4b6.h+"px";
s.left=_4b6.x+"px";
s.top=_4b6.y+"px";
},setZIndex:function(node){
if(!this.iframe){
return;
}
if(dojo.dom.isNode(node)){
this.iframe.style.zIndex=dojo.html.getStyle(node,"z-index")-1;
}else{
if(!isNaN(node)){
this.iframe.style.zIndex=node;
}
}
},show:function(){
if(!this.iframe){
return;
}
this.iframe.style.display="block";
},hide:function(){
if(!this.ie){
return;
}
var s=this.iframe.style;
s.display="none";
},remove:function(){
dojo.dom.removeNode(this.iframe);
}});
dojo.provide("dojo.lfx.Animation");
dojo.provide("dojo.lfx.Line");
dojo.require("dojo.lang.func");
dojo.lfx.Line=function(_4ba,end){
this.start=_4ba;
this.end=end;
if(dojo.lang.isArray(_4ba)){
var diff=[];
dojo.lang.forEach(this.start,function(s,i){
diff[i]=this.end[i]-s;
},this);
this.getValue=function(n){
var res=[];
dojo.lang.forEach(this.start,function(s,i){
res[i]=(diff[i]*n)+s;
},this);
return res;
};
}else{
var diff=end-_4ba;
this.getValue=function(n){
return (diff*n)+this.start;
};
}
};
dojo.lfx.easeIn=function(n){
return Math.pow(n,3);
};
dojo.lfx.easeOut=function(n){
return (1-Math.pow(1-n,3));
};
dojo.lfx.easeInOut=function(n){
return ((3*Math.pow(n,2))-(2*Math.pow(n,3)));
};
dojo.lfx.IAnimation=function(){
};
dojo.lang.extend(dojo.lfx.IAnimation,{curve:null,duration:1000,easing:null,repeatCount:0,rate:25,handler:null,beforeBegin:null,onBegin:null,onAnimate:null,onEnd:null,onPlay:null,onPause:null,onStop:null,play:null,pause:null,stop:null,fire:function(evt,args){
if(this[evt]){
this[evt].apply(this,(args||[]));
}
},_active:false,_paused:false});
dojo.lfx.Animation=function(_4c9,_4ca,_4cb,_4cc,_4cd,rate){
dojo.lfx.IAnimation.call(this);
if(dojo.lang.isNumber(_4c9)||(!_4c9&&_4ca.getValue)){
rate=_4cd;
_4cd=_4cc;
_4cc=_4cb;
_4cb=_4ca;
_4ca=_4c9;
_4c9=null;
}else{
if(_4c9.getValue||dojo.lang.isArray(_4c9)){
rate=_4cc;
_4cd=_4cb;
_4cc=_4ca;
_4cb=_4c9;
_4ca=null;
_4c9=null;
}
}
if(dojo.lang.isArray(_4cb)){
this.curve=new dojo.lfx.Line(_4cb[0],_4cb[1]);
}else{
this.curve=_4cb;
}
if(_4ca!=null&&_4ca>0){
this.duration=_4ca;
}
if(_4cd){
this.repeatCount=_4cd;
}
if(rate){
this.rate=rate;
}
if(_4c9){
this.handler=_4c9.handler;
this.beforeBegin=_4c9.beforeBegin;
this.onBegin=_4c9.onBegin;
this.onEnd=_4c9.onEnd;
this.onPlay=_4c9.onPlay;
this.onPause=_4c9.onPause;
this.onStop=_4c9.onStop;
this.onAnimate=_4c9.onAnimate;
}
if(_4cc&&dojo.lang.isFunction(_4cc)){
this.easing=_4cc;
}
};
dojo.inherits(dojo.lfx.Animation,dojo.lfx.IAnimation);
dojo.lang.extend(dojo.lfx.Animation,{_startTime:null,_endTime:null,_timer:null,_percent:0,_startRepeatCount:0,play:function(_4cf,_4d0){
if(_4d0){
clearTimeout(this._timer);
this._active=false;
this._paused=false;
this._percent=0;
}else{
if(this._active&&!this._paused){
return this;
}
}
this.fire("handler",["beforeBegin"]);
this.fire("beforeBegin");
if(_4cf>0){
setTimeout(dojo.lang.hitch(this,function(){
this.play(null,_4d0);
}),_4cf);
return this;
}
this._startTime=new Date().valueOf();
if(this._paused){
this._startTime-=(this.duration*this._percent/100);
}
this._endTime=this._startTime+this.duration;
this._active=true;
this._paused=false;
var step=this._percent/100;
var _4d2=this.curve.getValue(step);
if(this._percent==0){
if(!this._startRepeatCount){
this._startRepeatCount=this.repeatCount;
}
this.fire("handler",["begin",_4d2]);
this.fire("onBegin",[_4d2]);
}
this.fire("handler",["play",_4d2]);
this.fire("onPlay",[_4d2]);
this._cycle();
return this;
},pause:function(){
clearTimeout(this._timer);
if(!this._active){
return this;
}
this._paused=true;
var _4d3=this.curve.getValue(this._percent/100);
this.fire("handler",["pause",_4d3]);
this.fire("onPause",[_4d3]);
return this;
},gotoPercent:function(pct,_4d5){
clearTimeout(this._timer);
this._active=true;
this._paused=true;
this._percent=pct;
if(_4d5){
this.play();
}
},stop:function(_4d6){
clearTimeout(this._timer);
var step=this._percent/100;
if(_4d6){
step=1;
}
var _4d8=this.curve.getValue(step);
this.fire("handler",["stop",_4d8]);
this.fire("onStop",[_4d8]);
this._active=false;
this._paused=false;
return this;
},status:function(){
if(this._active){
return this._paused?"paused":"playing";
}else{
return "stopped";
}
},_cycle:function(){
clearTimeout(this._timer);
if(this._active){
var curr=new Date().valueOf();
var step=(curr-this._startTime)/(this._endTime-this._startTime);
if(step>=1){
step=1;
this._percent=100;
}else{
this._percent=step*100;
}
if((this.easing)&&(dojo.lang.isFunction(this.easing))){
step=this.easing(step);
}
var _4db=this.curve.getValue(step);
this.fire("handler",["animate",_4db]);
this.fire("onAnimate",[_4db]);
if(step<1){
this._timer=setTimeout(dojo.lang.hitch(this,"_cycle"),this.rate);
}else{
this._active=false;
this.fire("handler",["end"]);
this.fire("onEnd");
if(this.repeatCount>0){
this.repeatCount--;
this.play(null,true);
}else{
if(this.repeatCount==-1){
this.play(null,true);
}else{
if(this._startRepeatCount){
this.repeatCount=this._startRepeatCount;
this._startRepeatCount=0;
}
}
}
}
}
return this;
}});
dojo.lfx.Combine=function(){
dojo.lfx.IAnimation.call(this);
this._anims=[];
this._animsEnded=0;
var _4dc=arguments;
if(_4dc.length==1&&(dojo.lang.isArray(_4dc[0])||dojo.lang.isArrayLike(_4dc[0]))){
_4dc=_4dc[0];
}
var _4dd=this;
dojo.lang.forEach(_4dc,function(anim){
_4dd._anims.push(anim);
var _4df=(anim["onEnd"])?dojo.lang.hitch(anim,"onEnd"):function(){
};
anim.onEnd=function(){
_4df();
_4dd._onAnimsEnded();
};
});
};
dojo.inherits(dojo.lfx.Combine,dojo.lfx.IAnimation);
dojo.lang.extend(dojo.lfx.Combine,{_animsEnded:0,play:function(_4e0,_4e1){
if(!this._anims.length){
return this;
}
this.fire("beforeBegin");
if(_4e0>0){
setTimeout(dojo.lang.hitch(this,function(){
this.play(null,_4e1);
}),_4e0);
return this;
}
if(_4e1||this._anims[0].percent==0){
this.fire("onBegin");
}
this.fire("onPlay");
this._animsCall("play",null,_4e1);
return this;
},pause:function(){
this.fire("onPause");
this._animsCall("pause");
return this;
},stop:function(_4e2){
this.fire("onStop");
this._animsCall("stop",_4e2);
return this;
},_onAnimsEnded:function(){
this._animsEnded++;
if(this._animsEnded>=this._anims.length){
this.fire("onEnd");
}
return this;
},_animsCall:function(_4e3){
var args=[];
if(arguments.length>1){
for(var i=1;i<arguments.length;i++){
args.push(arguments[i]);
}
}
var _4e6=this;
dojo.lang.forEach(this._anims,function(anim){
anim[_4e3](args);
},_4e6);
return this;
}});
dojo.lfx.Chain=function(){
dojo.lfx.IAnimation.call(this);
this._anims=[];
this._currAnim=-1;
var _4e8=arguments;
if(_4e8.length==1&&(dojo.lang.isArray(_4e8[0])||dojo.lang.isArrayLike(_4e8[0]))){
_4e8=_4e8[0];
}
var _4e9=this;
dojo.lang.forEach(_4e8,function(anim,i,_4ec){
_4e9._anims.push(anim);
var _4ed=(anim["onEnd"])?dojo.lang.hitch(anim,"onEnd"):function(){
};
if(i<_4ec.length-1){
anim.onEnd=function(){
_4ed();
_4e9._playNext();
};
}else{
anim.onEnd=function(){
_4ed();
_4e9.fire("onEnd");
};
}
},_4e9);
};
dojo.inherits(dojo.lfx.Chain,dojo.lfx.IAnimation);
dojo.lang.extend(dojo.lfx.Chain,{_currAnim:-1,play:function(_4ee,_4ef){
if(!this._anims.length){
return this;
}
if(_4ef||!this._anims[this._currAnim]){
this._currAnim=0;
}
var _4f0=this._anims[this._currAnim];
this.fire("beforeBegin");
if(_4ee>0){
setTimeout(dojo.lang.hitch(this,function(){
this.play(null,_4ef);
}),_4ee);
return this;
}
if(_4f0){
if(this._currAnim==0){
this.fire("handler",["begin",this._currAnim]);
this.fire("onBegin",[this._currAnim]);
}
this.fire("onPlay",[this._currAnim]);
_4f0.play(null,_4ef);
}
return this;
},pause:function(){
if(this._anims[this._currAnim]){
this._anims[this._currAnim].pause();
this.fire("onPause",[this._currAnim]);
}
return this;
},playPause:function(){
if(this._anims.length==0){
return this;
}
if(this._currAnim==-1){
this._currAnim=0;
}
var _4f1=this._anims[this._currAnim];
if(_4f1){
if(!_4f1._active||_4f1._paused){
this.play();
}else{
this.pause();
}
}
return this;
},stop:function(){
var _4f2=this._anims[this._currAnim];
if(_4f2){
_4f2.stop();
this.fire("onStop",[this._currAnim]);
}
return _4f2;
},_playNext:function(){
if(this._currAnim==-1||this._anims.length==0){
return this;
}
this._currAnim++;
if(this._anims[this._currAnim]){
this._anims[this._currAnim].play(null,true);
}
return this;
}});
dojo.lfx.combine=function(){
var _4f3=arguments;
if(dojo.lang.isArray(arguments[0])){
_4f3=arguments[0];
}
return new dojo.lfx.Combine(_4f3);
};
dojo.lfx.chain=function(){
var _4f4=arguments;
if(dojo.lang.isArray(arguments[0])){
_4f4=arguments[0];
}
return new dojo.lfx.Chain(_4f4);
};
dojo.provide("dojo.lfx.html");
dojo.require("dojo.lfx.Animation");
dojo.require("dojo.html");
dojo.lfx.html._byId=function(_4f5){
if(!_4f5){
return [];
}
if(dojo.lang.isArray(_4f5)){
if(!_4f5.alreadyChecked){
var n=[];
dojo.lang.forEach(_4f5,function(node){
n.push(dojo.byId(node));
});
n.alreadyChecked=true;
return n;
}else{
return _4f5;
}
}else{
var n=[];
n.push(dojo.byId(_4f5));
n.alreadyChecked=true;
return n;
}
};
dojo.lfx.html.propertyAnimation=function(_4f8,_4f9,_4fa,_4fb){
_4f8=dojo.lfx.html._byId(_4f8);
if(_4f8.length==1){
dojo.lang.forEach(_4f9,function(prop){
if(typeof prop["start"]=="undefined"){
if(prop.property!="opacity"){
prop.start=parseInt(dojo.style.getComputedStyle(_4f8[0],prop.property));
}else{
prop.start=dojo.style.getOpacity(_4f8[0]);
}
}
});
}
var _4fd=function(_4fe){
var _4ff=new Array(_4fe.length);
for(var i=0;i<_4fe.length;i++){
_4ff[i]=Math.round(_4fe[i]);
}
return _4ff;
};
var _501=function(n,_503){
n=dojo.byId(n);
if(!n||!n.style){
return;
}
for(var s in _503){
if(s=="opacity"){
dojo.style.setOpacity(n,_503[s]);
}else{
n.style[s]=_503[s];
}
}
};
var _505=function(_506){
this._properties=_506;
this.diffs=new Array(_506.length);
dojo.lang.forEach(_506,function(prop,i){
if(dojo.lang.isArray(prop.start)){
this.diffs[i]=null;
}else{
if(prop.start instanceof dojo.graphics.color.Color){
prop.startRgb=prop.start.toRgb();
prop.endRgb=prop.end.toRgb();
}else{
this.diffs[i]=prop.end-prop.start;
}
}
},this);
this.getValue=function(n){
var ret={};
dojo.lang.forEach(this._properties,function(prop,i){
var _50d=null;
if(dojo.lang.isArray(prop.start)){
}else{
if(prop.start instanceof dojo.graphics.color.Color){
_50d=(prop.units||"rgb")+"(";
for(var j=0;j<prop.startRgb.length;j++){
_50d+=Math.round(((prop.endRgb[j]-prop.startRgb[j])*n)+prop.startRgb[j])+(j<prop.startRgb.length-1?",":"");
}
_50d+=")";
}else{
_50d=((this.diffs[i])*n)+prop.start+(prop.property!="opacity"?prop.units||"px":"");
}
}
ret[dojo.style.toCamelCase(prop.property)]=_50d;
},this);
return ret;
};
};
var anim=new dojo.lfx.Animation({onAnimate:function(_510){
dojo.lang.forEach(_4f8,function(node){
_501(node,_510);
});
}},_4fa,new _505(_4f9),_4fb);
return anim;
};
dojo.lfx.html._makeFadeable=function(_512){
var _513=function(node){
if(dojo.render.html.ie){
if((node.style.zoom.length==0)&&(dojo.style.getStyle(node,"zoom")=="normal")){
node.style.zoom="1";
}
if((node.style.width.length==0)&&(dojo.style.getStyle(node,"width")=="auto")){
node.style.width="auto";
}
}
};
if(dojo.lang.isArrayLike(_512)){
dojo.lang.forEach(_512,_513);
}else{
_513(_512);
}
};
dojo.lfx.html.fadeIn=function(_515,_516,_517,_518){
_515=dojo.lfx.html._byId(_515);
dojo.lfx.html._makeFadeable(_515);
var anim=dojo.lfx.propertyAnimation(_515,[{property:"opacity",start:dojo.style.getOpacity(_515[0]),end:1}],_516,_517);
if(_518){
var _51a=(anim["onEnd"])?dojo.lang.hitch(anim,"onEnd"):function(){
};
anim.onEnd=function(){
_51a();
_518(_515,anim);
};
}
return anim;
};
dojo.lfx.html.fadeOut=function(_51b,_51c,_51d,_51e){
_51b=dojo.lfx.html._byId(_51b);
dojo.lfx.html._makeFadeable(_51b);
var anim=dojo.lfx.propertyAnimation(_51b,[{property:"opacity",start:dojo.style.getOpacity(_51b[0]),end:0}],_51c,_51d);
if(_51e){
var _520=(anim["onEnd"])?dojo.lang.hitch(anim,"onEnd"):function(){
};
anim.onEnd=function(){
_520();
_51e(_51b,anim);
};
}
return anim;
};
dojo.lfx.html.fadeShow=function(_521,_522,_523,_524){
var anim=dojo.lfx.html.fadeIn(_521,_522,_523,_524);
var _526=(anim["beforeBegin"])?dojo.lang.hitch(anim,"beforeBegin"):function(){
};
anim.beforeBegin=function(){
_526();
if(dojo.lang.isArrayLike(_521)){
dojo.lang.forEach(_521,dojo.style.show);
}else{
dojo.style.show(_521);
}
};
return anim;
};
dojo.lfx.html.fadeHide=function(_527,_528,_529,_52a){
var anim=dojo.lfx.html.fadeOut(_527,_528,_529,function(){
if(dojo.lang.isArrayLike(_527)){
dojo.lang.forEach(_527,dojo.style.hide);
}else{
dojo.style.hide(_527);
}
if(_52a){
_52a(_527,anim);
}
});
return anim;
};
dojo.lfx.html.wipeIn=function(_52c,_52d,_52e,_52f){
_52c=dojo.lfx.html._byId(_52c);
var _530=[];
dojo.lang.forEach(_52c,function(node){
var _532=dojo.style.getStyle(node,"overflow");
if(_532=="visible"){
node.style.overflow="hidden";
}
node.style.height="0px";
dojo.style.show(node);
var anim=dojo.lfx.propertyAnimation(node,[{property:"height",start:0,end:node.scrollHeight}],_52d,_52e);
var _534=(anim["onEnd"])?dojo.lang.hitch(anim,"onEnd"):function(){
};
anim.onEnd=function(){
_534();
node.style.overflow=_532;
node.style.height="auto";
if(_52f){
_52f(node,anim);
}
};
_530.push(anim);
});
if(_52c.length>1){
return dojo.lfx.combine(_530);
}else{
return _530[0];
}
};
dojo.lfx.html.wipeOut=function(_535,_536,_537,_538){
_535=dojo.lfx.html._byId(_535);
var _539=[];
dojo.lang.forEach(_535,function(node){
var _53b=dojo.style.getStyle(node,"overflow");
if(_53b=="visible"){
node.style.overflow="hidden";
}
dojo.style.show(node);
var anim=dojo.lfx.propertyAnimation(node,[{property:"height",start:dojo.style.getContentBoxHeight(node),end:0}],_536,_537);
var _53d=(anim["onEnd"])?dojo.lang.hitch(anim,"onEnd"):function(){
};
anim.onEnd=function(){
_53d();
dojo.style.hide(node);
node.style.overflow=_53b;
if(_538){
_538(node,anim);
}
};
_539.push(anim);
});
if(_535.length>1){
return dojo.lfx.combine(_539);
}else{
return _539[0];
}
};
dojo.lfx.html.slideTo=function(_53e,_53f,_540,_541,_542){
_53e=dojo.lfx.html._byId(_53e);
var _543=[];
dojo.lang.forEach(_53e,function(node){
var top=null;
var left=null;
var init=(function(){
var _548=node;
return function(){
var pos=dojo.style.getComputedStyle(_548,"position");
top=(pos=="absolute"?node.offsetTop:parseInt(dojo.style.getComputedStyle(node,"top"))||0);
left=(pos=="absolute"?node.offsetLeft:parseInt(dojo.style.getComputedStyle(node,"left"))||0);
if(!dojo.lang.inArray(["absolute","relative"],pos)){
var ret=dojo.style.abs(_548,true);
dojo.style.setStyleAttributes(_548,"position:absolute;top:"+ret.y+"px;left:"+ret.x+"px;");
top=ret.y;
left=ret.x;
}
};
})();
init();
var anim=dojo.lfx.propertyAnimation(node,[{property:"top",start:top,end:_53f[0]},{property:"left",start:left,end:_53f[1]}],_540,_541);
var _54c=(anim["beforeBegin"])?dojo.lang.hitch(anim,"beforeBegin"):function(){
};
anim.beforeBegin=function(){
_54c();
init();
};
if(_542){
var _54d=(anim["onEnd"])?dojo.lang.hitch(anim,"onEnd"):function(){
};
anim.onEnd=function(){
_54d();
_542(_53e,anim);
};
}
_543.push(anim);
});
if(_53e.length>1){
return dojo.lfx.combine(_543);
}else{
return _543[0];
}
};
dojo.lfx.html.slideBy=function(_54e,_54f,_550,_551,_552){
_54e=dojo.lfx.html._byId(_54e);
var _553=[];
dojo.lang.forEach(_54e,function(node){
var top=null;
var left=null;
var init=(function(){
var _558=node;
return function(){
var pos=dojo.style.getComputedStyle(_558,"position");
top=(pos=="absolute"?node.offsetTop:parseInt(dojo.style.getComputedStyle(node,"top"))||0);
left=(pos=="absolute"?node.offsetLeft:parseInt(dojo.style.getComputedStyle(node,"left"))||0);
if(!dojo.lang.inArray(["absolute","relative"],pos)){
var ret=dojo.style.abs(_558,true);
dojo.style.setStyleAttributes(_558,"position:absolute;top:"+ret.y+"px;left:"+ret.x+"px;");
top=ret.y;
left=ret.x;
}
};
})();
init();
var anim=dojo.lfx.propertyAnimation(node,[{property:"top",start:top,end:top+_54f[0]},{property:"left",start:left,end:left+_54f[1]}],_550,_551);
var _55c=(anim["beforeBegin"])?dojo.lang.hitch(anim,"beforeBegin"):function(){
};
anim.beforeBegin=function(){
_55c();
init();
};
if(_552){
var _55d=(anim["onEnd"])?dojo.lang.hitch(anim,"onEnd"):function(){
};
anim.onEnd=function(){
_55d();
_552(_54e,anim);
};
}
_553.push(anim);
});
if(_54e.length>1){
return dojo.lfx.combine(_553);
}else{
return _553[0];
}
};
dojo.lfx.html.explode=function(_55e,_55f,_560,_561,_562){
_55e=dojo.byId(_55e);
_55f=dojo.byId(_55f);
var _563=dojo.style.toCoordinateArray(_55e,true);
var _564=document.createElement("div");
dojo.html.copyStyle(_564,_55f);
with(_564.style){
position="absolute";
display="none";
}
dojo.html.body().appendChild(_564);
with(_55f.style){
visibility="hidden";
display="block";
}
var _565=dojo.style.toCoordinateArray(_55f,true);
with(_55f.style){
display="none";
visibility="visible";
}
var anim=new dojo.lfx.propertyAnimation(_564,[{property:"height",start:_563[3],end:_565[3]},{property:"width",start:_563[2],end:_565[2]},{property:"top",start:_563[1],end:_565[1]},{property:"left",start:_563[0],end:_565[0]},{property:"opacity",start:0.3,end:1}],_560,_561);
anim.beforeBegin=function(){
dojo.style.setDisplay(_564,"block");
};
anim.onEnd=function(){
dojo.style.setDisplay(_55f,"block");
_564.parentNode.removeChild(_564);
};
if(_562){
var _567=(anim["onEnd"])?dojo.lang.hitch(anim,"onEnd"):function(){
};
anim.onEnd=function(){
_567();
_562(_55f,anim);
};
}
return anim;
};
dojo.lfx.html.implode=function(_568,end,_56a,_56b,_56c){
_568=dojo.byId(_568);
end=dojo.byId(end);
var _56d=dojo.style.toCoordinateArray(_568,true);
var _56e=dojo.style.toCoordinateArray(end,true);
var _56f=document.createElement("div");
dojo.html.copyStyle(_56f,_568);
dojo.style.setOpacity(_56f,0.3);
with(_56f.style){
position="absolute";
display="none";
}
dojo.html.body().appendChild(_56f);
var anim=new dojo.lfx.propertyAnimation(_56f,[{property:"height",start:_56d[3],end:_56e[3]},{property:"width",start:_56d[2],end:_56e[2]},{property:"top",start:_56d[1],end:_56e[1]},{property:"left",start:_56d[0],end:_56e[0]},{property:"opacity",start:1,end:0.3}],_56a,_56b);
anim.beforeBegin=function(){
dojo.style.hide(_568);
dojo.style.show(_56f);
};
anim.onEnd=function(){
_56f.parentNode.removeChild(_56f);
};
if(_56c){
var _571=(anim["onEnd"])?dojo.lang.hitch(anim,"onEnd"):function(){
};
anim.onEnd=function(){
_571();
_56c(_568,anim);
};
}
return anim;
};
dojo.lfx.html.highlight=function(_572,_573,_574,_575,_576){
_572=dojo.lfx.html._byId(_572);
var _577=[];
dojo.lang.forEach(_572,function(node){
var _579=dojo.style.getBackgroundColor(node);
var bg=dojo.style.getStyle(node,"background-color").toLowerCase();
var _57b=dojo.style.getStyle(node,"background-image");
var _57c=(bg=="transparent"||bg=="rgba(0, 0, 0, 0)");
while(_579.length>3){
_579.pop();
}
var rgb=new dojo.graphics.color.Color(_573);
var _57e=new dojo.graphics.color.Color(_579);
var anim=dojo.lfx.propertyAnimation(node,[{property:"background-color",start:rgb,end:_57e}],_574,_575);
var _580=(anim["beforeBegin"])?dojo.lang.hitch(anim,"beforeBegin"):function(){
};
anim.beforeBegin=function(){
_580();
if(_57b){
node.style.backgroundImage="none";
}
node.style.backgroundColor="rgb("+rgb.toRgb().join(",")+")";
};
var _581=(anim["onEnd"])?dojo.lang.hitch(anim,"onEnd"):function(){
};
anim.onEnd=function(){
_581();
if(_57b){
node.style.backgroundImage=_57b;
}
if(_57c){
node.style.backgroundColor="transparent";
}
if(_576){
_576(node,anim);
}
};
_577.push(anim);
});
if(_572.length>1){
return dojo.lfx.combine(_577);
}else{
return _577[0];
}
};
dojo.lfx.html.unhighlight=function(_582,_583,_584,_585,_586){
_582=dojo.lfx.html._byId(_582);
var _587=[];
dojo.lang.forEach(_582,function(node){
var _589=new dojo.graphics.color.Color(dojo.style.getBackgroundColor(node));
var rgb=new dojo.graphics.color.Color(_583);
var _58b=dojo.style.getStyle(node,"background-image");
var anim=dojo.lfx.propertyAnimation(node,[{property:"background-color",start:_589,end:rgb}],_584,_585);
var _58d=(anim["beforeBegin"])?dojo.lang.hitch(anim,"beforeBegin"):function(){
};
anim.beforeBegin=function(){
_58d();
if(_58b){
node.style.backgroundImage="none";
}
node.style.backgroundColor="rgb("+_589.toRgb().join(",")+")";
};
var _58e=(anim["onEnd"])?dojo.lang.hitch(anim,"onEnd"):function(){
};
anim.onEnd=function(){
_58e();
if(_586){
_586(node,anim);
}
};
_587.push(anim);
});
if(_582.length>1){
return dojo.lfx.combine(_587);
}else{
return _587[0];
}
};
dojo.lang.mixin(dojo.lfx,dojo.lfx.html);
dojo.kwCompoundRequire({browser:["dojo.lfx.html"],dashboard:["dojo.lfx.html"]});
dojo.provide("dojo.lfx.*");
dojo.provide("dojo.dnd.HtmlDragAndDrop");
dojo.provide("dojo.dnd.HtmlDragSource");
dojo.provide("dojo.dnd.HtmlDropTarget");
dojo.provide("dojo.dnd.HtmlDragObject");
dojo.require("dojo.dnd.HtmlDragManager");
dojo.require("dojo.dnd.DragAndDrop");
dojo.require("dojo.dom");
dojo.require("dojo.style");
dojo.require("dojo.html");
dojo.require("dojo.html.extras");
dojo.require("dojo.lang.extras");
dojo.require("dojo.lfx.*");
dojo.require("dojo.event");
dojo.dnd.HtmlDragSource=function(node,type){
node=dojo.byId(node);
this.dragObjects=[];
this.constrainToContainer=false;
if(node){
this.domNode=node;
this.dragObject=node;
dojo.dnd.DragSource.call(this);
this.type=(type)||(this.domNode.nodeName.toLowerCase());
}
};
dojo.inherits(dojo.dnd.HtmlDragSource,dojo.dnd.DragSource);
dojo.lang.extend(dojo.dnd.HtmlDragSource,{dragClass:"",onDragStart:function(){
var _591=new dojo.dnd.HtmlDragObject(this.dragObject,this.type);
if(this.dragClass){
_591.dragClass=this.dragClass;
}
if(this.constrainToContainer){
_591.constrainTo(this.constrainingContainer||this.domNode.parentNode);
}
return _591;
},setDragHandle:function(node){
node=dojo.byId(node);
dojo.dnd.dragManager.unregisterDragSource(this);
this.domNode=node;
dojo.dnd.dragManager.registerDragSource(this);
},setDragTarget:function(node){
this.dragObject=node;
},constrainTo:function(_594){
this.constrainToContainer=true;
if(_594){
this.constrainingContainer=_594;
}
},onSelected:function(){
for(var i=0;i<this.dragObjects.length;i++){
dojo.dnd.dragManager.selectedSources.push(new dojo.dnd.HtmlDragSource(this.dragObjects[i]));
}
},addDragObjects:function(el){
for(var i=0;i<arguments.length;i++){
this.dragObjects.push(arguments[i]);
}
}});
dojo.dnd.HtmlDragObject=function(node,type){
this.domNode=dojo.byId(node);
this.type=type;
this.constrainToContainer=false;
this.dragSource=null;
};
dojo.inherits(dojo.dnd.HtmlDragObject,dojo.dnd.DragObject);
dojo.lang.extend(dojo.dnd.HtmlDragObject,{dragClass:"",opacity:0.5,createIframe:true,disableX:false,disableY:false,createDragNode:function(){
var node=this.domNode.cloneNode(true);
if(this.dragClass){
dojo.html.addClass(node,this.dragClass);
}
if(this.opacity<1){
dojo.style.setOpacity(node,this.opacity);
}
if(node.tagName.toLowerCase()=="tr"){
var doc=this.domNode.ownerDocument;
var _59c=doc.createElement("table");
var _59d=doc.createElement("tbody");
_59d.appendChild(node);
_59c.appendChild(_59d);
var _59e=this.domNode.childNodes;
var _59f=node.childNodes;
for(var i=0;i<_59e.length;i++){
if((_59f[i])&&(_59f[i].style)){
_59f[i].style.width=dojo.style.getContentWidth(_59e[i])+"px";
}
}
node=_59c;
}
if((dojo.render.html.ie55||dojo.render.html.ie60)&&this.createIframe){
with(node.style){
top="0px";
left="0px";
}
var _5a1=document.createElement("div");
_5a1.appendChild(node);
this.bgIframe=new dojo.html.BackgroundIframe(_5a1);
_5a1.appendChild(this.bgIframe.iframe);
node=_5a1;
}
node.style.zIndex=999;
return node;
},onDragStart:function(e){
dojo.html.clearSelection();
this.scrollOffset=dojo.html.getScrollOffset();
this.dragStartPosition=dojo.style.getAbsolutePosition(this.domNode,true);
this.dragOffset={y:this.dragStartPosition.y-e.pageY,x:this.dragStartPosition.x-e.pageX};
this.dragClone=this.createDragNode();
this.containingBlockPosition=this.domNode.offsetParent?dojo.style.getAbsolutePosition(this.domNode.offsetParent):{x:0,y:0};
if(this.constrainToContainer){
this.constraints=this.getConstraints();
}
with(this.dragClone.style){
position="absolute";
top=this.dragOffset.y+e.pageY+"px";
left=this.dragOffset.x+e.pageX+"px";
}
dojo.html.body().appendChild(this.dragClone);
dojo.event.topic.publish("dragStart",{source:this});
},getConstraints:function(){
if(this.constrainingContainer.nodeName.toLowerCase()=="body"){
var _5a3=dojo.html.getViewportWidth();
var _5a4=dojo.html.getViewportHeight();
var x=0;
var y=0;
}else{
_5a3=dojo.style.getContentWidth(this.constrainingContainer);
_5a4=dojo.style.getContentHeight(this.constrainingContainer);
x=this.containingBlockPosition.x+dojo.style.getPixelValue(this.constrainingContainer,"padding-left",true)+dojo.style.getBorderExtent(this.constrainingContainer,"left");
y=this.containingBlockPosition.y+dojo.style.getPixelValue(this.constrainingContainer,"padding-top",true)+dojo.style.getBorderExtent(this.constrainingContainer,"top");
}
return {minX:x,minY:y,maxX:x+_5a3-dojo.style.getOuterWidth(this.domNode),maxY:y+_5a4-dojo.style.getOuterHeight(this.domNode)};
},updateDragOffset:function(){
var _5a7=dojo.html.getScrollOffset();
if(_5a7.y!=this.scrollOffset.y){
var diff=_5a7.y-this.scrollOffset.y;
this.dragOffset.y+=diff;
this.scrollOffset.y=_5a7.y;
}
if(_5a7.x!=this.scrollOffset.x){
var diff=_5a7.x-this.scrollOffset.x;
this.dragOffset.x+=diff;
this.scrollOffset.x=_5a7.x;
}
},onDragMove:function(e){
this.updateDragOffset();
var x=this.dragOffset.x+e.pageX;
var y=this.dragOffset.y+e.pageY;
if(this.constrainToContainer){
if(x<this.constraints.minX){
x=this.constraints.minX;
}
if(y<this.constraints.minY){
y=this.constraints.minY;
}
if(x>this.constraints.maxX){
x=this.constraints.maxX;
}
if(y>this.constraints.maxY){
y=this.constraints.maxY;
}
}
this.setAbsolutePosition(x,y);
dojo.event.topic.publish("dragMove",{source:this});
},setAbsolutePosition:function(x,y){
if(!this.disableY){
this.dragClone.style.top=y+"px";
}
if(!this.disableX){
this.dragClone.style.left=x+"px";
}
},onDragEnd:function(e){
switch(e.dragStatus){
case "dropSuccess":
dojo.dom.removeNode(this.dragClone);
this.dragClone=null;
break;
case "dropFailure":
var _5af=dojo.style.getAbsolutePosition(this.dragClone,true);
var _5b0=[this.dragStartPosition.x+1,this.dragStartPosition.y+1];
var line=new dojo.lfx.Line(_5af,_5b0);
var anim=new dojo.lfx.Animation(500,line,dojo.lfx.easeOut);
var _5b3=this;
dojo.event.connect(anim,"onAnimate",function(e){
_5b3.dragClone.style.left=e[0]+"px";
_5b3.dragClone.style.top=e[1]+"px";
});
dojo.event.connect(anim,"onEnd",function(e){
dojo.lang.setTimeout(function(){
dojo.dom.removeNode(_5b3.dragClone);
_5b3.dragClone=null;
},200);
});
anim.play();
break;
}
dojo.event.connect(this.domNode,"onclick",this,"squelchOnClick");
dojo.event.topic.publish("dragEnd",{source:this});
},squelchOnClick:function(e){
e.preventDefault();
dojo.event.disconnect(this.domNode,"onclick",this,"squelchOnClick");
},constrainTo:function(_5b7){
this.constrainToContainer=true;
if(_5b7){
this.constrainingContainer=_5b7;
}else{
this.constrainingContainer=this.domNode.parentNode;
}
}});
dojo.dnd.HtmlDropTarget=function(node,_5b9){
if(arguments.length==0){
return;
}
this.domNode=dojo.byId(node);
dojo.dnd.DropTarget.call(this);
if(_5b9&&dojo.lang.isString(_5b9)){
_5b9=[_5b9];
}
this.acceptedTypes=_5b9||[];
};
dojo.inherits(dojo.dnd.HtmlDropTarget,dojo.dnd.DropTarget);
dojo.lang.extend(dojo.dnd.HtmlDropTarget,{onDragOver:function(e){
if(!this.accepts(e.dragObjects)){
return false;
}
this.childBoxes=[];
for(var i=0,child;i<this.domNode.childNodes.length;i++){
child=this.domNode.childNodes[i];
if(child.nodeType!=dojo.dom.ELEMENT_NODE){
continue;
}
var pos=dojo.style.getAbsolutePosition(child,true);
var _5bd=dojo.style.getInnerHeight(child);
var _5be=dojo.style.getInnerWidth(child);
this.childBoxes.push({top:pos.y,bottom:pos.y+_5bd,left:pos.x,right:pos.x+_5be,node:child});
}
return true;
},_getNodeUnderMouse:function(e){
for(var i=0,child;i<this.childBoxes.length;i++){
with(this.childBoxes[i]){
if(e.pageX>=left&&e.pageX<=right&&e.pageY>=top&&e.pageY<=bottom){
return i;
}
}
}
return -1;
},createDropIndicator:function(){
this.dropIndicator=document.createElement("div");
with(this.dropIndicator.style){
position="absolute";
zIndex=999;
borderTopWidth="1px";
borderTopColor="black";
borderTopStyle="solid";
width=dojo.style.getInnerWidth(this.domNode)+"px";
left=dojo.style.getAbsoluteX(this.domNode,true)+"px";
}
},onDragMove:function(e,_5c2){
var i=this._getNodeUnderMouse(e);
if(!this.dropIndicator){
this.createDropIndicator();
}
if(i<0){
if(this.childBoxes.length){
var _5c4=(dojo.html.gravity(this.childBoxes[0].node,e)&dojo.html.gravity.NORTH);
}else{
var _5c4=true;
}
}else{
var _5c5=this.childBoxes[i];
var _5c4=(dojo.html.gravity(_5c5.node,e)&dojo.html.gravity.NORTH);
}
this.placeIndicator(e,_5c2,i,_5c4);
if(!dojo.html.hasParent(this.dropIndicator)){
dojo.html.body().appendChild(this.dropIndicator);
}
},placeIndicator:function(e,_5c7,_5c8,_5c9){
with(this.dropIndicator.style){
if(_5c8<0){
if(this.childBoxes.length){
top=(_5c9?this.childBoxes[0].top:this.childBoxes[this.childBoxes.length-1].bottom)+"px";
}else{
top=dojo.style.getAbsoluteY(this.domNode,true)+"px";
}
}else{
var _5ca=this.childBoxes[_5c8];
top=(_5c9?_5ca.top:_5ca.bottom)+"px";
}
}
},onDragOut:function(e){
if(this.dropIndicator){
dojo.dom.removeNode(this.dropIndicator);
delete this.dropIndicator;
}
},onDrop:function(e){
this.onDragOut(e);
var i=this._getNodeUnderMouse(e);
if(i<0){
if(this.childBoxes.length){
if(dojo.html.gravity(this.childBoxes[0].node,e)&dojo.html.gravity.NORTH){
return this.insert(e,this.childBoxes[0].node,"before");
}else{
return this.insert(e,this.childBoxes[this.childBoxes.length-1].node,"after");
}
}
return this.insert(e,this.domNode,"append");
}
var _5ce=this.childBoxes[i];
if(dojo.html.gravity(_5ce.node,e)&dojo.html.gravity.NORTH){
return this.insert(e,_5ce.node,"before");
}else{
return this.insert(e,_5ce.node,"after");
}
},insert:function(e,_5d0,_5d1){
var node=e.dragObject.domNode;
if(_5d1=="before"){
return dojo.html.insertBefore(node,_5d0);
}else{
if(_5d1=="after"){
return dojo.html.insertAfter(node,_5d0);
}else{
if(_5d1=="append"){
_5d0.appendChild(node);
return true;
}
}
}
return false;
}});
dojo.kwCompoundRequire({common:["dojo.dnd.DragAndDrop"],browser:["dojo.dnd.HtmlDragAndDrop"],dashboard:["dojo.dnd.HtmlDragAndDrop"]});
dojo.provide("dojo.dnd.*");

