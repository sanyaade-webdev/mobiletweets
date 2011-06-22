(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!qx.$$environment) qx.$$environment = {};
var envinfo = {"engine.name":"webkit","qx.application":"mobiletweets.Application","qx.debug":false,"qx.mobile.emulatetouch":true,"qx.mobile.nativescroll":false,"qx.optimization.basecalls":true,"qx.optimization.comments":true,"qx.optimization.privates":true,"qx.optimization.strings":true,"qx.optimization.variables":true,"qx.optimization.variants":true,"qx.revision":"exported","qx.theme":"qx.theme.Modern","qx.version":"1.5"};
for (var k in envinfo) qx.$$environment[k] = envinfo[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"script"},"mobiletweets":{"resourceUri":"resource","sourceUri":"script","version":"trunk"},"qx":{"resourceUri":"resource","sourceUri":"script","version":"1.5"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {};
qx.$$locales = {};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  packages : {"0":{"uris":["__out__:mobiletweets.6431702e7e03.js"]}},
  urisBefore : [],
  boot : "boot",
  closureParts : {},
  bootIsInline : true,
  addNoCacheParam : false,
  
  decodeUris : function(compressedUris)
  {
    var libs = qx.$$libraries;
    var uris = [];
    for (var i=0; i<compressedUris.length; i++)
    {
      var uri = compressedUris[i].split(":");
      var euri;
      if (uri.length==2 && uri[0] in libs) {
        var prefix = libs[uri[0]].sourceUri;
        euri = prefix + "/" + uri[1];
      } else {
        euri = compressedUris[i];
      }
      if (qx.$$loader.addNoCacheParam) {
        euri += "?nocache=" + Math.random();
      }
      
      uris.push(euri);
    }
    return uris;      
  }
};  

function loadScript(uri, callback) {
  var elem = document.createElement("script");
  elem.charset = "utf-8";
  elem.src = uri;
  elem.onreadystatechange = elem.onload = function()
  {
    if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")
    {
      elem.onreadystatechange = elem.onload = null;
      callback();
    }
  };
  var head = document.getElementsByTagName("head")[0];
  head.appendChild(elem);
}

var isWebkit = /AppleWebKit\/([^ ]+)/.test(navigator.userAgent);

function loadScriptList(list, callback) {
  if (list.length == 0) {
    callback();
    return;
  }
  loadScript(list.shift(), function() {
    if (isWebkit) {
      // force asynchronous load
      // Safari fails with an "maximum recursion depth exceeded" error if it is
      // called sync.      
      window.setTimeout(function() {
        loadScriptList(list, callback);
      }, 0);
    } else {
      loadScriptList(list, callback);
    }
  });
}

var fireContentLoadedEvent = function() {
  qx.$$domReady = true;
  document.removeEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
};
if (document.addEventListener) {
  document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
}

qx.$$loader.importPackageData = function (dataMap, callback) {
  if (dataMap["resources"]){
    var resMap = dataMap["resources"];
    for (var k in resMap) qx.$$resources[k] = resMap[k];
  }
  if (dataMap["locales"]){
    var locMap = dataMap["locales"];
    var qxlocs = qx.$$locales;
    for (var lang in locMap){
      if (!qxlocs[lang]) qxlocs[lang] = locMap[lang];
      else 
        for (var k in locMap[lang]) qxlocs[lang][k] = locMap[lang][k];
    }
  }
  if (dataMap["translations"]){
    var trMap   = dataMap["translations"];
    var qxtrans = qx.$$translations;
    for (var lang in trMap){
      if (!qxtrans[lang]) qxtrans[lang] = trMap[lang];
      else 
        for (var k in trMap[lang]) qxtrans[lang][k] = trMap[lang][k];
    }
  }
  if (callback){
    callback(dataMap);
  }
}

qx.$$loader.signalStartup = function () 
{
  qx.$$loader.scriptLoaded = true;
  if (window.qx && qx.event && qx.event.handler && qx.event.handler.Application) {
    qx.event.handler.Application.onScriptLoaded();
    qx.$$loader.applicationHandlerReady = true; 
  } else {
    qx.$$loader.applicationHandlerReady = false;
  }
}

qx.$$loader.init = function(){
  var l=qx.$$loader;
  if (l.urisBefore.length>0){
    loadScriptList(l.urisBefore, function(){
      l.initUris();
    });
  } else {
    l.initUris();
  }
}

qx.$$loader.initUris = function(){
  var l=qx.$$loader;
  var bootPackageHash=l.parts[l.boot][0];
  if (l.bootIsInline){
    l.importPackageData(qx.$$packageData[bootPackageHash]);
    l.signalStartup();
  } else {
    loadScriptList(l.decodeUris(l.packages[l.parts[l.boot][0]].uris), function(){
      // Opera needs this extra time to parse the scripts
      window.setTimeout(function(){
        l.importPackageData(qx.$$packageData[bootPackageHash] || {});
        l.signalStartup();
      }, 0);
    });
  }
}
})();

qx.$$packageData['0']={"locales":{"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"EEE, M/d/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yQ":"Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","day":"Day","dayperiod":"AM/PM","era":"Era","hour":"Hour","minute":"Minute","month":"Month","quotationEnd":"”","quotationStart":"“","second":"Second","week":"Week","weekday":"Day of the Week","year":"Year","zone":"Zone"},"en":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"EEE, M/d/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yQ":"Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","day":"Day","dayperiod":"AM/PM","era":"Era","hour":"Hour","minute":"Minute","month":"Month","quotationEnd":"”","quotationStart":"“","second":"Second","week":"Week","weekday":"Day of the Week","year":"Year","zone":"Zone"}},"resources":{"mobiletweets/css/styles.css":"mobiletweets","qx/mobile/css/LICENSE":"qx","qx/mobile/css/android/android.css":"qx","qx/mobile/css/common/main.css":"qx","qx/mobile/css/ios/ios.css":"qx","qx/mobile/icon/android/arrow.png":[25,20,"png","qx"],"qx/mobile/icon/android/arrow_pressed.png":[25,20,"png","qx"],"qx/mobile/icon/android/cancel.png":[20,20,"png","qx"],"qx/mobile/icon/android/checkbox-gray.png":[22,19,"png","qx"],"qx/mobile/icon/android/checkbox-green.png":[22,19,"png","qx"],"qx/mobile/icon/android/loading.png":[32,32,"png","qx"],"qx/mobile/icon/android/on_off.png":[149,27,"png","qx"],"qx/mobile/icon/android/scrollbar.png":[7,7,"png","qx"],"qx/mobile/icon/ios/arrow.png":[25,20,"png","qx"],"qx/mobile/icon/ios/arrow_pressed.png":[25,20,"png","qx"],"qx/mobile/icon/ios/backButton.png":[43,30,"png","qx"],"qx/mobile/icon/ios/backButton_pressed.png":[43,30,"png","qx"],"qx/mobile/icon/ios/cancel.png":[20,20,"png","qx"],"qx/mobile/icon/ios/checkbox.png":[22,21,"png","qx"],"qx/mobile/icon/ios/loading.png":[32,32,"png","qx"],"qx/mobile/icon/ios/on_off.png":[149,27,"png","qx"],"qx/mobile/icon/ios/pinstripes.png":[7,1,"png","qx"],"qx/mobile/icon/ios/scrollbar.png":[7,7,"png","qx"],"qx/mobile/icon/ios/toolButton.png":[16,30,"png","qx"],"qx/mobile/icon/ios/toolButton_pressed.png":[16,30,"png","qx"],"qx/mobile/js/LICENSE":"qx","qx/mobile/js/iscroll.js":"qx","qx/static/blank.gif":[1,1,"gif","qx"]},"translations":{"C":{},"en":{}}};
(function(){var m="toString",k=".",j="default",h="Object",g='"',f="Array",e="()",d="String",c="Function",b=".prototype",L="function",K="Boolean",J="Error",I="constructor",H="warn",G="hasOwnProperty",F="string",E="toLocaleString",D="RegExp",C='\", "',t="info",u="BROKEN_IE",r="isPrototypeOf",s="Date",p="",q="qx.Bootstrap",n="]",o="Class",v="error",w="[Class ",y="valueOf",x="Number",A="count",z="debug",B="ES5";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return w+this.classname+n;
},createNamespace:function(name,M){var O=name.split(k);
var parent=window;
var N=O[0];

for(var i=0,P=O.length-1;i<P;i++,N=O[i]){if(!parent[N]){parent=parent[N]={};
}else{parent=parent[N];
}}parent[N]=M;
return N;
},setDisplayName:function(Q,R,name){Q.displayName=R+k+name+e;
},setDisplayNames:function(S,T){for(var name in S){var U=S[name];

if(U instanceof Function){U.displayName=T+k+name+e;
}}},define:function(name,V){if(!V){var V={statics:{}};
}var bb;
var Y=null;
qx.Bootstrap.setDisplayNames(V.statics,name);

if(V.members||V.extend){qx.Bootstrap.setDisplayNames(V.members,name+b);
bb=V.construct||new Function;

if(V.extend){this.extendClass(bb,bb,V.extend,name,ba);
}var W=V.statics||{};
for(var i=0,bc=qx.Bootstrap.getKeys(W),l=bc.length;i<l;i++){var bd=bc[i];
bb[bd]=W[bd];
}Y=bb.prototype;
var X=V.members||{};
for(var i=0,bc=qx.Bootstrap.getKeys(X),l=bc.length;i<l;i++){var bd=bc[i];
Y[bd]=X[bd];
}}else{bb=V.statics||{};
}var ba=this.createNamespace(name,bb);
bb.name=bb.classname=name;
bb.basename=ba;
bb.$$type=o;
if(!bb.hasOwnProperty(m)){bb.toString=this.genericToString;
}if(V.defer){V.defer(bb,Y);
}qx.Bootstrap.$$registry[name]=V.statics;
return bb;
}};
qx.Bootstrap.define(q,{statics:{LOADSTART:qx.$$start||new Date(),DEBUG:(function(){var be=true;

if(qx.$$environment&&qx.$$environment["qx.debug"]===false){be=false;
}return be;
})(),getEnvironmentSetting:function(bf){if(qx.$$environment){return qx.$$environment[bf];
}},setEnvironmentSetting:function(bg,bh){if(!qx.$$environment){qx.$$environment={};
}
if(qx.$$environment[bg]===undefined){qx.$$environment[bg]=bh;
}},createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,extendClass:function(bi,bj,bk,name,bl){var bo=bk.prototype;
var bn=new Function;
bn.prototype=bo;
var bm=new bn;
bi.prototype=bm;
bm.name=bm.classname=name;
bm.basename=bl;
bj.base=bi.superclass=bk;
bj.self=bi.constructor=bm.constructor=bi;
},getByName:function(name){return qx.Bootstrap.$$registry[name];
},$$registry:{},objectGetLength:({"count":function(bp){return bp.__count__;
},"default":function(bq){var length=0;

for(var br in bq){length++;
}return length;
}})[(({}).__count__==0)?A:j],objectMergeWith:function(bs,bt,bu){if(bu===undefined){bu=true;
}
for(var bv in bt){if(bu||bs[bv]===undefined){bs[bv]=bt[bv];
}}return bs;
},__a:[r,G,E,m,y,I],getKeys:({"ES5":Object.keys,"BROKEN_IE":function(bw){var bx=[];
var bz=Object.prototype.hasOwnProperty;

for(var bA in bw){if(bz.call(bw,bA)){bx.push(bA);
}}var by=qx.Bootstrap.__a;

for(var i=0,a=by,l=a.length;i<l;i++){if(bz.call(bw,a[i])){bx.push(a[i]);
}}return bx;
},"default":function(bB){var bC=[];
var bD=Object.prototype.hasOwnProperty;

for(var bE in bB){if(bD.call(bB,bE)){bC.push(bE);
}}return bC;
}})[typeof (Object.keys)==L?B:(function(){for(var bF in {toString:1}){return bF;
}})()!==m?u:j],getKeysAsString:function(bG){var bH=qx.Bootstrap.getKeys(bG);

if(bH.length==0){return p;
}return g+bH.join(C)+g;
},__b:{"[object String]":d,"[object Array]":f,"[object Object]":h,"[object RegExp]":D,"[object Number]":x,"[object Boolean]":K,"[object Date]":s,"[object Function]":c,"[object Error]":J},bind:function(bI,self,bJ){var bK=Array.prototype.slice.call(arguments,2,arguments.length);
return function(){var bL=Array.prototype.slice.call(arguments,0,arguments.length);
return bI.apply(self,bK.concat(bL));
};
},firstUp:function(bM){return bM.charAt(0).toUpperCase()+bM.substr(1);
},firstLow:function(bN){return bN.charAt(0).toLowerCase()+bN.substr(1);
},getClass:function(bO){var bP=Object.prototype.toString.call(bO);
return (qx.Bootstrap.__b[bP]||bP.slice(8,-1));
},isString:function(bQ){return (bQ!==null&&(typeof bQ===F||qx.Bootstrap.getClass(bQ)==d||bQ instanceof String||(!!bQ&&!!bQ.$$isString)));
},isArray:function(bR){return (bR!==null&&(bR instanceof Array||(bR&&qx.data&&qx.data.IListData&&qx.Bootstrap.hasInterface(bR.constructor,qx.data.IListData))||qx.Bootstrap.getClass(bR)==f||(!!bR&&!!bR.$$isArray)));
},isObject:function(bS){return (bS!==undefined&&bS!==null&&qx.Bootstrap.getClass(bS)==h);
},isFunction:function(bT){return qx.Bootstrap.getClass(bT)==c;
},classIsDefined:function(name){return qx.Bootstrap.getByName(name)!==undefined;
},getPropertyDefinition:function(bU,name){while(bU){if(bU.$$properties&&bU.$$properties[name]){return bU.$$properties[name];
}bU=bU.superclass;
}return null;
},hasProperty:function(bV,name){return !!qx.Bootstrap.getPropertyDefinition(bV,name);
},getEventType:function(bW,name){var bW=bW.constructor;

while(bW.superclass){if(bW.$$events&&bW.$$events[name]!==undefined){return bW.$$events[name];
}bW=bW.superclass;
}return null;
},supportsEvent:function(bX,name){return !!qx.Bootstrap.getEventType(bX,name);
},getByInterface:function(bY,ca){var cb,i,l;

while(bY){if(bY.$$implements){cb=bY.$$flatImplements;

for(i=0,l=cb.length;i<l;i++){if(cb[i]===ca){return bY;
}}}bY=bY.superclass;
}return null;
},hasInterface:function(cc,cd){return !!qx.Bootstrap.getByInterface(cc,cd);
},getMixins:function(ce){var cf=[];

while(ce){if(ce.$$includes){cf.push.apply(cf,ce.$$flatIncludes);
}ce=ce.superclass;
}return cf;
},$$logs:[],debug:function(cg,ch){qx.Bootstrap.$$logs.push([z,arguments]);
},info:function(ci,cj){qx.Bootstrap.$$logs.push([t,arguments]);
},warn:function(ck,cl){qx.Bootstrap.$$logs.push([H,arguments]);
},error:function(cm,cn){qx.Bootstrap.$$logs.push([v,arguments]);
},trace:function(co){}}});
})();
(function(){var r=".",q="function",p="",o="gecko",n="[object Opera]",m="mshtml",l="8.0",k="AppleWebKit/",j="9.0",i="[^\\.0-9]",c="Gecko",h="webkit",f="4.0",b="1.9.0.0",a="opera",e="Version/",d="5.0",g="qx.bom.client.Engine";
qx.Bootstrap.define(g,{statics:{getVersion:function(){var v=window.navigator.userAgent;
var t=p;

if(qx.bom.client.Engine.__c()){if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(v)){if(v.indexOf(e)!=-1){var u=v.match(/Version\/(\d+)\.(\d+)/);
t=u[1]+r+u[2].charAt(0)+r+u[2].substring(1,u[2].length);
}else{t=RegExp.$1+r+RegExp.$2;

if(RegExp.$3!=p){t+=r+RegExp.$3;
}}}}else if(qx.bom.client.Engine.__d()){if(/AppleWebKit\/([^ ]+)/.test(v)){t=RegExp.$1;
var w=RegExp(i).exec(t);

if(w){t=t.slice(0,w.index);
}}}else if(qx.bom.client.Engine.__e()){if(/rv\:([^\);]+)(\)|;)/.test(v)){t=RegExp.$1;
}}else if(qx.bom.client.Engine.__f()){if(/MSIE\s+([^\);]+)(\)|;)/.test(v)){t=RegExp.$1;
if(t<8&&/Trident\/([^\);]+)(\)|;)/.test(v)){if(RegExp.$1==f){t=l;
}else if(RegExp.$1==d){t=j;
}}}}else{var s=window.qxFail;

if(s&&typeof s===q){t=s().FULLVERSION;
}else{t=b;
qx.Bootstrap.warn("Unsupported client: "+v+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}return t;
},getName:function(){var name;

if(qx.bom.client.Engine.__c()){name=a;
}else if(qx.bom.client.Engine.__d()){name=h;
}else if(qx.bom.client.Engine.__e()){name=o;
}else if(qx.bom.client.Engine.__f()){name=m;
}else{var x=window.qxFail;

if(x&&typeof x===q){name=x().NAME;
}else{name=o;
qx.Bootstrap.warn("Unsupported client: "+window.navigator.userAgent+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}return name;
},__c:function(){return window.opera&&Object.prototype.toString.call(window.opera)==n;
},__d:function(){return window.navigator.userAgent.indexOf(k)!=-1;
},__e:function(){return window.controllers&&window.navigator.product===c;
},__f:function(){return window.navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(window.navigator.userAgent);
}}});
})();
(function(){var d="-",c="",b="qx.bom.client.Locale",a="android";
qx.Bootstrap.define(b,{statics:{getLocale:function(){var e=qx.bom.client.Locale.__g();
var f=e.indexOf(d);

if(f!=-1){e=e.substr(0,f);
}return e;
},getVariant:function(){var g=qx.bom.client.Locale.__g();
var i=c;
var h=g.indexOf(d);

if(h!=-1){i=g.substr(h+1);
}return i;
},__g:function(){var j=(navigator.userLanguage||navigator.language||c);
if(qx.bom.client.OperatingSystem.getName()==a){var k=/(\w{2})-(\w{2})/i.exec(navigator.userAgent);

if(k){j=k[0];
}}return j.toLowerCase();
}}});
})();
(function(){var j="",i="10.1",h="10.3",g="10.7",f="10.5",e="95",d="10.2",c="98",b="2000",a="10.6",ba="10.0",Y="10.4",X="rim_tabletos",W="2003",V=")",U="iPhone",T="android",S="unix",R="ce",Q="7",q="SymbianOS",r="|",o="MacPPC",p="iPod",m="\.",n="Win64",k="linux",l="me",u="Macintosh",v="Android",D="Windows",B="ios",I="vista",F="blackberry",M="(",K="win",x="Linux",P="BSD",O="iPad",N="X11",w="xp",z="symbian",A="qx.bom.client.OperatingSystem",C="g",E="Win32",G="osx",J="webOS",L="RIM Tablet OS",s="BlackBerry",t="nt4",y="MacIntel",H="webos";
qx.Bootstrap.define(A,{statics:{getName:function(){if(!navigator){return j;
}var bb=navigator.platform||j;
var bc=navigator.userAgent||j;

if(bb.indexOf(D)!=-1||bb.indexOf(E)!=-1||bb.indexOf(n)!=-1){return K;
}else if(bb.indexOf(u)!=-1||bb.indexOf(o)!=-1||bb.indexOf(y)!=-1){return G;
}else if(bc.indexOf(L)!=-1){return X;
}else if(bc.indexOf(J)!=-1){return H;
}else if(bb.indexOf(p)!=-1||bb.indexOf(U)!=-1||bb.indexOf(O)!=-1){return B;
}else if(bb.indexOf(x)!=-1){return k;
}else if(bb.indexOf(N)!=-1||bb.indexOf(P)!=-1){return S;
}else if(bb.indexOf(v)!=-1){return T;
}else if(bb.indexOf(q)!=-1){return z;
}else if(bb.indexOf(s)!=-1){return F;
}return j;
},__h:{"Windows NT 6.1":Q,"Windows NT 6.0":I,"Windows NT 5.2":W,"Windows NT 5.1":w,"Windows NT 5.0":b,"Windows 2000":b,"Windows NT 4.0":t,"Win 9x 4.90":l,"Windows CE":R,"Windows 98":c,"Win98":c,"Windows 95":e,"Win95":e,"Mac OS X 10_7":g,"Mac OS X 10.7":g,"Mac OS X 10_6":a,"Mac OS X 10.6":a,"Mac OS X 10_5":f,"Mac OS X 10.5":f,"Mac OS X 10_4":Y,"Mac OS X 10.4":Y,"Mac OS X 10_3":h,"Mac OS X 10.3":h,"Mac OS X 10_2":d,"Mac OS X 10.2":d,"Mac OS X 10_1":i,"Mac OS X 10.1":i,"Mac OS X 10_0":ba,"Mac OS X 10.0":ba},getVersion:function(){var bf=[];

for(var be in qx.bom.client.OperatingSystem.__h){bf.push(be);
}var bg=new RegExp(M+bf.join(r).replace(/\./g,m)+V,C);
var bd=bg.exec(navigator.userAgent);

if(bd&&bd[1]){return qx.bom.client.OperatingSystem.__h[bd[1]];
}return j;
}}});
})();
(function(){var k="xhr",j="Microsoft.XMLHTTP",i="",h="file:",g="https:",f="webkit",e="gecko",d="activex",c="opera",b=".",a="qx.bom.client.Transport";
qx.Bootstrap.define(a,{statics:{getMaxConcurrentRequestCount:function(){var l;
var o=qx.bom.client.Engine.getVersion().split(b);
var m=0;
var p=0;
var n=0;
if(o[0]){m=o[0];
}if(o[1]){p=o[1];
}if(o[2]){n=o[2];
}if(window.maxConnectionsPerServer){l=window.maxConnectionsPerServer;
}else if(qx.bom.client.Engine.getName()==c){l=8;
}else if(qx.bom.client.Engine.getName()==f){l=4;
}else if(qx.bom.client.Engine.getName()==e&&((m>1)||((m==1)&&(p>9))||((m==1)&&(p==9)&&(n>=1)))){l=6;
}else{l=2;
}return l;
},getSsl:function(){return window.location.protocol===g;
},getXmlHttpRequest:function(){var q=window.ActiveXObject?(function(){if(window.location.protocol!==h){try{new window.XMLHttpRequest();
return k;
}catch(r){}}
try{new window.ActiveXObject(j);
return d;
}catch(s){}})():(function(){try{new window.XMLHttpRequest();
return k;
}catch(t){}})();
return q||i;
}}});
})();
(function(){var j="mshtml",i="msie",h=")(/| )([0-9]+\.[0-9])",g="",f="(",e="ce",d="CSS1Compat",c="android",b="operamini",a="mobile chrome",z="iemobile",y="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Namoroka|Firefox",x="opera mobi",w="Mobile Safari",v="operamobile",u="ie",t="mobile safari",s="IEMobile|Maxthon|MSIE",r="qx.bom.client.Browser",q="opera mini",o="opera",p="Opera Mini|Opera Mobi|Opera",m="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",n="webkit",k="5.0",l="Mobile/";
qx.Bootstrap.define(r,{statics:{getName:function(){var D=navigator.userAgent;
var C=new RegExp(f+qx.bom.client.Browser.__i+h);
var B=D.match(C);

if(!B){return g;
}var name=B[1].toLowerCase();
var A=qx.bom.client.Engine.getName();

if(A===n){if(name===c){name=a;
}else if(D.indexOf(w)!==-1||D.indexOf(l)!==-1){name=t;
}}else if(A===j){if(name===i){name=u;
if(qx.bom.client.OperatingSystem.getVersion()===e){name=z;
}}}else if(A===o){if(name===x){name=v;
}else if(name===q){name=b;
}}return name;
},getVersion:function(){var H=navigator.userAgent;
var G=new RegExp(f+qx.bom.client.Browser.__i+h);
var F=H.match(G);

if(!F){return g;
}var name=F[1].toLowerCase();
var E=F[3];
if(H.match(/Version(\/| )([0-9]+\.[0-9])/)){E=RegExp.$2;
}
if(qx.bom.client.Engine.getName()==j){E=qx.bom.client.Engine.getVersion();

if(name===i&&qx.bom.client.OperatingSystem.getVersion()==e){E=k;
}}return E;
},getDocumentMode:function(){if(document.documentMode){return document.documentMode;
}return 0;
},getQuirksMode:function(){if(qx.bom.client.Engine.getName()==j&&parseFloat(qx.bom.client.Engine.getVersion())>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return document.compatMode!==d;
}},__i:{"webkit":m,"gecko":y,"mshtml":s,"opera":p}[qx.bom.client.Engine.getName()]}});
})();
(function(){var k="background",j="div",h="color",g="linear-gradient(0deg, white 0%, red 100%)",f="placeholder",e="content",d="OTextOverflow",c="MozBorderRadius",b="qx.bom.client.Css",a='m11',C="input",B="-ms-linear-gradient(0deg, white 0%, red 100%)",A="-moz-linear-gradient(0deg, white 0%, red 100%)",z="gradient",y="-webkit-linear-gradient(left, white, black)",x="MozBoxShadow",w="rgba(1, 2, 3, 0.5)",v="rgba",u="-o-linear-gradient(0deg, white 0%, red 100%)",t="borderRadius",r='WebKitCSSMatrix',s="WebkitBorderRadius",p="-webkit-gradient(linear,0% 0%,100% 100%,from(white), to(red))",q="mshtml",n="WebkitBoxShadow",o="textOverflow",l="boxShadow",m="border";
qx.Bootstrap.define(b,{statics:{getBoxModel:function(){var content=qx.bom.client.Engine.getName()!==q||!qx.bom.client.Browser.getQuirksMode();
return content?e:m;
},getTextOverflow:function(){return o in document.documentElement.style||d in document.documentElement.style;
},getPlaceholder:function(){var i=document.createElement(C);
return f in i;
},getBorderRadius:function(){return t in document.documentElement.style||c in document.documentElement.style||s in document.documentElement.style;
},getBoxShadow:function(){return l in document.documentElement.style||x in document.documentElement.style||n in document.documentElement.style;
},getTranslate3d:function(){return r in window&&a in new WebKitCSSMatrix();
},getGradients:function(){var D;

try{D=document.createElement(j);
}catch(F){D=document.createElement();
}var E=[p,y,A,u,B,g];

for(var i=0;i<E.length;i++){try{D.style[k]=E[i];

if(D.style[k].indexOf(z)!=-1){return true;
}}catch(G){}}return false;
},getRgba:function(){var H;

try{H=document.createElement(j);
}catch(I){H=document.createElement();
}try{H.style[h]=w;

if(H.style[h].indexOf(v)!=-1){return true;
}}catch(J){}return false;
}}});
})();
(function(){var c="notification",b="PhoneGap",a="qx.bom.client.PhoneGap";
qx.Bootstrap.define(a,{statics:{getPhoneGap:function(){return b in window;
},getNotification:function(){return c in navigator;
}}});
})();
(function(){var l="",k="audio",j="video",i='video/ogg; codecs="theora, vorbis"',h="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",g="http://www.w3.org/TR/SVG11/feature#BasicStructure",f='audio',d='video/mp4; codecs="avc1.42E01E, mp4a.40.2"',c="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",b="audio/mpeg",z="org.w3c.dom.svg",y="DOMTokenList",x="1.1",w="audio/x-wav",u="audio/ogg",t="audio/x-aiff",s="qx.bom.client.Html",r='video',q="mshtml",p="label",n='video/webm; codecs="vp8, vorbis"',o="1.0",m="audio/basic";
qx.Bootstrap.define(s,{statics:{getWebWorker:function(){return window.Worker!=null;
},getFileReader:function(){return window.FileReader!=null;
},getGeoLocation:function(){return navigator.geolocation!=null;
},getAudio:function(){return !!document.createElement(f).canPlayType;
},getAudioOgg:function(){if(!qx.bom.client.Html.getAudio()){return l;
}var a=document.createElement(k);
return a.canPlayType(u);
},getAudioMp3:function(){if(!qx.bom.client.Html.getAudio()){return l;
}var a=document.createElement(k);
return a.canPlayType(b);
},getAudioWav:function(){if(!qx.bom.client.Html.getAudio()){return l;
}var a=document.createElement(k);
return a.canPlayType(w);
},getAudioAu:function(){if(!qx.bom.client.Html.getAudio()){return l;
}var a=document.createElement(k);
return a.canPlayType(m);
},getAudioAif:function(){if(!qx.bom.client.Html.getAudio()){return l;
}var a=document.createElement(k);
return a.canPlayType(t);
},getVideo:function(){return !!document.createElement(r).canPlayType;
},getVideoOgg:function(){if(!qx.bom.client.Html.getVideo()){return l;
}var v=document.createElement(j);
return v.canPlayType(i);
},getVideoH264:function(){if(!qx.bom.client.Html.getVideo()){return l;
}var v=document.createElement(j);
return v.canPlayType(d);
},getVideoWebm:function(){if(!qx.bom.client.Html.getVideo()){return l;
}var v=document.createElement(j);
return v.canPlayType(n);
},getLocalStorage:function(){try{return window.localStorage!=null;
}catch(A){return false;
}},getSessionStorage:function(){try{return window.sessionStorage!=null;
}catch(B){return false;
}},getClassList:function(){return !!(document.documentElement.classList&&qx.Bootstrap.getClass(document.documentElement.classList)===y);
},getXPath:function(){return !!document.evaluate;
},getXul:function(){try{document.createElementNS(h,p);
return true;
}catch(e){return false;
}},getSvg:function(){return document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature(z,o)||document.implementation.hasFeature(g,x));
},getVml:function(){return qx.bom.client.Engine.getName()==q;
},getCanvas:function(){return !!window.CanvasRenderingContext2D;
},getDataUrl:function(C){var D=new Image();
D.onload=D.onerror=function(){window.setTimeout(function(){C.call(null,(D.width==1&&D.height==1));
},0);
};
D.src=c;
},getDataset:function(){return !!document.documentElement.dataset;
}}});
})();
(function(){var e="qx.bom.client.Event",d="ontouchstart",c="mshtml",b="opera",a="pointerEvents";
qx.Bootstrap.define(e,{statics:{getTouch:function(){return (d in window);
},getPointer:function(){if(a in document.documentElement.style){var f=qx.bom.client.Engine.getName();
return f!=b&&f!=c;
}return false;
}}});
})();
(function(){var a="qx.bom.client.EcmaScript";
qx.Bootstrap.define(a,{statics:{getObjectCount:function(){return (({}).__count__==0);
}}});
})();
(function(){var k="os.name",j="default",h="phonegap.notification",g="phonegap",f="browser.name",e="io.ssl",d="css.translate3d",c="locale.variant",b="html.classlist",a="event.touch",O="io.maxrequests",N="qx.allowUrlSettings",M="browser.documentmode",L="ecmascript.objectcount",K="engine.version",J="locale",I="|",H="browser.version",G="io.xhr",F="qx.core.Environment",r="qx.debug.databinding",s="qx.optimization.basecalls",p="qx.optimization.variables",q="true",n="qx.optimization.privates",o="qxenv",l="qx.aspects",m="qx.debug",t="qx.dynamicmousewheel",u=":",x="qx.optimization.strings",w="qx.optimization.comments",z="qx.optimization.variants",y="qx.mobile.emulatetouch",B="qx.dynlocale",A="false",v="&",E="qx.mobile.nativescroll",D="qx.allowUrlVariants",C="qx.propertyDebugLevel";
qx.Bootstrap.define(F,{statics:{_checks:{},_asyncChecks:{},__j:{},get:function(P){if(this.__j[P]!=undefined){return this.__j[P];
}var Q=this._checks[P];

if(Q){var R=Q();
this.__j[P]=R;
return R;
}if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn(P+" is not a valid key. Please see the API-doc of "+"qx.core.Environment for a list of predefined keys.");
qx.Bootstrap.trace(this);
}},getAsync:function(S,T,self){var V=this;

if(this.__j[S]!=undefined){window.setTimeout(function(){T.call(self,V.__j[S]);
},0);
return;
}var U=this._asyncChecks[S];

if(U){U(function(W){V.__j[S]=W;
T.call(self,W);
});
return;
}if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn(S+" is not a valid key. Please see the API-doc of "+"qx.core.Environment for a list of predefined keys.");
qx.Bootstrap.trace(this);
}},select:function(X,Y){return this.__k(this.get(X),Y);
},selectAsync:function(ba,bb,self){this.getAsync(ba,function(bc){var bd=this.__k(ba,bb);
bd.call(self,bc);
},this);
},__k:function(be,bf){var bh=bf[be];

if(bf.hasOwnProperty(be)){return bh;
}for(var bg in bf){if(bg.indexOf(I)!=-1){var bi=bg.split(I);

for(var i=0;i<bi.length;i++){if(bi[i]==be){return bf[bg];
}}}}
if(bf[j]!==undefined){return bf[j];
}
if(qx.Bootstrap.DEBUG){throw new Error('No match for variant "'+be+'" ('+(typeof be)+' type)'+' in variants ['+qx.Bootstrap.getKeysAsString(bf)+'] found, and no default ("default") given');
}},invalidateCacheKey:function(bj){delete this.__j[bj];
},add:function(bk,bl){if(this._checks[bk]==undefined){if(bl instanceof Function){this._checks[bk]=bl;
}else{this._checks[bk]=this.__n(bl);
}}},addAsync:function(bm,bn){if(this._checks[bm]==undefined){this._asyncChecks[bm]=bn;
}},_initDefaultQxValues:function(){this.add(N,function(){return false;
});
this.add(D,function(){return false;
});
this.add(C,function(){return 0;
});
this.add(m,function(){return true;
});
this.add(l,function(){return false;
});
this.add(B,function(){return true;
});
this.add(y,function(){return false;
});
this.add(E,function(){return false;
});
this.add(t,function(){return true;
});
this.add(r,function(){return false;
});
this.add(s,function(){return false;
});
this.add(w,function(){return false;
});
this.add(n,function(){return false;
});
this.add(x,function(){return false;
});
this.add(p,function(){return false;
});
this.add(z,function(){return false;
});
},__l:function(){if(qx&&qx.$$environment){for(var bp in qx.$$environment){var bo=qx.$$environment[bp];
this._checks[bp]=this.__n(bo);
}}},__m:function(){if(window.document&&window.document.location){var bq=window.document.location.search.slice(1).split(v);

for(var i=0;i<bq.length;i++){var bs=bq[i].split(u);

if(bs.length!=3||bs[0]!=o){continue;
}var bt=bs[1];
var br=decodeURIComponent(bs[2]);
if(br==q){br=true;
}else if(br==A){br=false;
}else if(/^(\d|\.)+$/.test(br)){br=parseFloat(br);
}this._checks[bt]=this.__n(br);
}}},__n:function(bu){return qx.Bootstrap.bind(function(bv){return bv;
},null,bu);
},useCheck:function(bw){return true;
},_initChecksMap:function(){if(this.useCheck(K)){this._checks[K]=qx.bom.client.Engine.getVersion;
}if(this.useCheck(f)){this._checks[f]=qx.bom.client.Browser.getName;
}
if(this.useCheck(H)){this._checks[H]=qx.bom.client.Browser.getVersion;
}
if(this.useCheck(M)){this._checks[M]=qx.bom.client.Browser.getDocumentMode;
}if(this.useCheck(J)){this._checks[J]=qx.bom.client.Locale.getLocale;
}
if(this.useCheck(c)){this._checks[c]=qx.bom.client.Locale.getVariant;
}if(this.useCheck(k)){this._checks[k]=qx.bom.client.OperatingSystem.getName;
}if(this.useCheck(O)){this._checks[O]=qx.bom.client.Transport.getMaxConcurrentRequestCount;
}
if(this.useCheck(e)){this._checks[e]=qx.bom.client.Transport.getSsl;
}
if(this.useCheck(G)){this._checks[G]=qx.bom.client.Transport.getXmlHttpRequest;
}if(this.useCheck(a)){this._checks[a]=qx.bom.client.Event.getTouch;
}if(this.useCheck(L)){this._checks[L]=qx.bom.client.EcmaScript.getObjectCount;
}
if(this.useCheck(b)){this._checks[b]=qx.bom.client.Html.getClassList;
}
if(this.useCheck(d)){this._checks[d]=qx.bom.client.Css.getTranslate3d;
}if(this.useCheck(g)){this._checks[g]=qx.bom.client.PhoneGap.getPhoneGap;
}
if(this.useCheck(h)){this._checks[h]=qx.bom.client.PhoneGap.getNotification;
}}},defer:function(bx){bx._initDefaultQxValues();
bx._initChecksMap();
bx.__l();
if(bx.get(N)===true){bx.__m();
}}});
})();
(function(){var h="qx.Mixin",g=".prototype",f="constructor",e="Array",d="[Mixin ",c="]",b="destruct",a="Mixin";
qx.Bootstrap.define(h,{statics:{define:function(name,j){if(j){if(j.include&&!(qx.Bootstrap.getClass(j.include)===e)){j.include=[j.include];
}var m=j.statics?j.statics:{};
qx.Bootstrap.setDisplayNames(m,name);

for(var k in m){if(m[k] instanceof Function){m[k].$$mixin=m;
}}if(j.construct){m.$$constructor=j.construct;
qx.Bootstrap.setDisplayName(j.construct,name,f);
}
if(j.include){m.$$includes=j.include;
}
if(j.properties){m.$$properties=j.properties;
}
if(j.members){m.$$members=j.members;
qx.Bootstrap.setDisplayNames(j.members,name+g);
}
for(var k in m.$$members){if(m.$$members[k] instanceof Function){m.$$members[k].$$mixin=m;
}}
if(j.events){m.$$events=j.events;
}
if(j.destruct){m.$$destructor=j.destruct;
qx.Bootstrap.setDisplayName(j.destruct,name,b);
}}else{var m={};
}m.$$type=a;
m.name=name;
m.toString=this.genericToString;
m.basename=qx.Bootstrap.createNamespace(name,m);
this.$$registry[name]=m;
return m;
},checkCompatibility:function(n){var q=this.flatten(n);
var r=q.length;

if(r<2){return true;
}var u={};
var t={};
var s={};
var p;

for(var i=0;i<r;i++){p=q[i];

for(var o in p.events){if(s[o]){throw new Error('Conflict between mixin "'+p.name+'" and "'+s[o]+'" in member "'+o+'"!');
}s[o]=p.name;
}
for(var o in p.properties){if(u[o]){throw new Error('Conflict between mixin "'+p.name+'" and "'+u[o]+'" in property "'+o+'"!');
}u[o]=p.name;
}
for(var o in p.members){if(t[o]){throw new Error('Conflict between mixin "'+p.name+'" and "'+t[o]+'" in member "'+o+'"!');
}t[o]=p.name;
}}return true;
},isCompatible:function(v,w){var x=qx.Bootstrap.getMixins(w);
x.push(v);
return qx.Mixin.checkCompatibility(x);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(y){if(!y){return [];
}var z=y.concat();

for(var i=0,l=y.length;i<l;i++){if(y[i].$$includes){z.push.apply(z,this.flatten(y[i].$$includes));
}}return z;
},genericToString:function(){return d+this.name+c;
},$$registry:{},__o:null,__p:function(){}}});
})();
(function(){var j="function",h="Boolean",g="qx.Interface",f="Array",e="]",d="toggle",c="Interface",b="is",a="[Interface ";
qx.Bootstrap.define(g,{statics:{define:function(name,k){if(k){if(k.extend&&!(qx.Bootstrap.getClass(k.extend)===f)){k.extend=[k.extend];
}var m=k.statics?k.statics:{};
if(k.extend){m.$$extends=k.extend;
}
if(k.properties){m.$$properties=k.properties;
}
if(k.members){m.$$members=k.members;
}
if(k.events){m.$$events=k.events;
}}else{var m={};
}m.$$type=c;
m.name=name;
m.toString=this.genericToString;
m.basename=qx.Bootstrap.createNamespace(name,m);
qx.Interface.$$registry[name]=m;
return m;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(n){if(!n){return [];
}var o=n.concat();

for(var i=0,l=n.length;i<l;i++){if(n[i].$$extends){o.push.apply(o,this.flatten(n[i].$$extends));
}}return o;
},__q:function(p,q,r,s){var w=r.$$members;

if(w){for(var v in w){if(qx.Bootstrap.isFunction(w[v])){var u=this.__r(q,v);
var t=u||qx.Bootstrap.isFunction(p[v]);

if(!t){throw new Error('Implementation of method "'+v+'" is missing in class "'+q.classname+'" required by interface "'+r.name+'"');
}var x=s===true&&!u&&!qx.Bootstrap.hasInterface(q,r);

if(x){p[v]=this.__u(r,p[v],v,w[v]);
}}else{if(typeof p[v]===undefined){if(typeof p[v]!==j){throw new Error('Implementation of member "'+v+'" is missing in class "'+q.classname+'" required by interface "'+r.name+'"');
}}}}}},__r:function(y,z){var D=z.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!D){return false;
}var A=qx.Bootstrap.firstLow(D[2]);
var B=qx.Bootstrap.getPropertyDefinition(y,A);

if(!B){return false;
}var C=D[0]==b||D[0]==d;

if(C){return qx.Bootstrap.getPropertyDefinition(y,A).check==h;
}return true;
},__s:function(E,F){if(F.$$properties){for(var G in F.$$properties){if(!qx.Bootstrap.getPropertyDefinition(E,G)){throw new Error('The property "'+G+'" is not supported by Class "'+E.classname+'"!');
}}}},__t:function(H,I){if(I.$$events){for(var J in I.$$events){if(!qx.Bootstrap.supportsEvent(H,J)){throw new Error('The event "'+J+'" is not supported by Class "'+H.classname+'"!');
}}}},assertObject:function(K,L){var N=K.constructor;
this.__q(K,N,L,false);
this.__s(N,L);
this.__t(N,L);
var M=L.$$extends;

if(M){for(var i=0,l=M.length;i<l;i++){this.assertObject(K,M[i]);
}}},assert:function(O,P,Q){this.__q(O.prototype,O,P,Q);
this.__s(O,P);
this.__t(O,P);
var R=P.$$extends;

if(R){for(var i=0,l=R.length;i<l;i++){this.assert(O,R[i],Q);
}}},genericToString:function(){return a+this.name+e;
},$$registry:{},__u:function(){},__o:null,__p:function(){}}});
})();
(function(){var d="qx.core.Aspect",c="before",b="*",a="static";
qx.Bootstrap.define(d,{statics:{__v:[],wrap:function(e,f,g){var m=[];
var h=[];
var l=this.__v;
var k;

for(var i=0;i<l.length;i++){k=l[i];

if((k.type==null||g==k.type||k.type==b)&&(k.name==null||e.match(k.name))){k.pos==-1?m.push(k.fcn):h.push(k.fcn);
}}
if(m.length===0&&h.length===0){return f;
}var j=function(){for(var i=0;i<m.length;i++){m[i].call(this,e,f,g,arguments);
}var n=f.apply(this,arguments);

for(var i=0;i<h.length;i++){h[i].call(this,e,f,g,arguments,n);
}return n;
};

if(g!==a){j.self=f.self;
j.base=f.base;
}f.wrapper=j;
j.original=f;
return j;
},addAdvice:function(o,p,q,name){this.__v.push({fcn:o,pos:p===c?-1:1,type:q,name:name});
}}});
})();
(function(){var g="emulated",f="native",e='"',d="qx.lang.Core",c="\\\\",b="\\\"",a="[object Error]";
qx.Bootstrap.define(d,{statics:{errorToString:{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}[(!Error.prototype.toString||Error.prototype.toString()==a)?g:f],arrayIndexOf:{"native":Array.prototype.indexOf,"emulated":function(h,j){if(j==null){j=0;
}else if(j<0){j=Math.max(0,this.length+j);
}
for(var i=j;i<this.length;i++){if(this[i]===h){return i;
}}return -1;
}}[Array.prototype.indexOf?f:g],arrayLastIndexOf:{"native":Array.prototype.lastIndexOf,"emulated":function(k,m){if(m==null){m=this.length-1;
}else if(m<0){m=Math.max(0,this.length+m);
}
for(var i=m;i>=0;i--){if(this[i]===k){return i;
}}return -1;
}}[Array.prototype.lastIndexOf?f:g],arrayForEach:{"native":Array.prototype.forEach,"emulated":function(n,o){var l=this.length;

for(var i=0;i<l;i++){var p=this[i];

if(p!==undefined){n.call(o||window,p,i,this);
}}}}[Array.prototype.forEach?f:g],arrayFilter:{"native":Array.prototype.filter,"emulated":function(q,r){var s=[];
var l=this.length;

for(var i=0;i<l;i++){var t=this[i];

if(t!==undefined){if(q.call(r||window,t,i,this)){s.push(this[i]);
}}}return s;
}}[Array.prototype.filter?f:g],arrayMap:{"native":Array.prototype.map,"emulated":function(u,v){var w=[];
var l=this.length;

for(var i=0;i<l;i++){var x=this[i];

if(x!==undefined){w[i]=u.call(v||window,x,i,this);
}}return w;
}}[Array.prototype.map?f:g],arraySome:{"native":Array.prototype.some,"emulated":function(y,z){var l=this.length;

for(var i=0;i<l;i++){var A=this[i];

if(A!==undefined){if(y.call(z||window,A,i,this)){return true;
}}}return false;
}}[Array.prototype.some?f:g],arrayEvery:{"native":Array.prototype.every,"emulated":function(B,C){var l=this.length;

for(var i=0;i<l;i++){var D=this[i];

if(D!==undefined){if(!B.call(C||window,D,i,this)){return false;
}}}return true;
}}[Array.prototype.every?f:g],stringQuote:{"native":String.prototype.quote,"emulated":function(){return e+this.replace(/\\/g,c).replace(/\"/g,b)+e;
}}[String.prototype.quote?f:g]}});
Error.prototype.toString=qx.lang.Core.errorToString;
Array.prototype.indexOf=qx.lang.Core.arrayIndexOf;
Array.prototype.lastIndexOf=qx.lang.Core.arrayLastIndexOf;
Array.prototype.forEach=qx.lang.Core.arrayForEach;
Array.prototype.filter=qx.lang.Core.arrayFilter;
Array.prototype.map=qx.lang.Core.arrayMap;
Array.prototype.some=qx.lang.Core.arraySome;
Array.prototype.every=qx.lang.Core.arrayEvery;
String.prototype.quote=qx.lang.Core.stringQuote;
})();
(function(){var m=';',k='return this.',j="boolean",h="string",g='!==undefined)',f='else if(this.',e='if(this.',d='else ',c=' of an instance of ',b=' is not (yet) ready!");',bi="init",bh='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',bg='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',bf=" of class ",be='qx.core.Assert.assertInstance(value, Date, msg) || true',bd='value !== null && value.nodeType !== undefined',bc='var inherit=prop.$$inherit;',bb='value !== null && value.nodeType === 9 && value.documentElement',ba='return init;',Y='value !== null && value.$$type === "Mixin"',t='qx.core.Assert.assertMap(value, msg) || true',u='var init=this.',r='return value;',s='qx.core.Assert.assertNumber(value, msg) || true',p='qx.core.Assert.assertPositiveInteger(value, msg) || true',q="': ",n="Error in property ",o='if(init==qx.core.Property.$$inherit)init=null;',x='qx.core.Assert.assertInteger(value, msg) || true',y="rv:1.8.1",G='value !== null && value.$$type === "Interface"',E="set",O='value !== null && value.$$type === "Theme"',J='qx.core.Assert.assertInstance(value, RegExp, msg) || true',U='value !== null && value.type !== undefined',S='value !== null && value.document',A=" in method ",X='qx.core.Assert.assertInstance(value, Error, msg) || true',W='throw new Error("Property ',V='qx.core.Assert.assertBoolean(value, msg) || true',z='return null;',C='qx.core.Assert.assertObject(value, msg) || true',D="setRuntime",F='value !== null && value.nodeType === 1 && value.attributes',H=" with incoming value '",K="setThemed",P='qx.core.Assert.assertString(value, msg) || true',T="inherit",v='value !== null && value.$$type === "Class"',w='qx.core.Assert.assertFunction(value, msg) || true',B='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',N='qx.core.Assert.assertArray(value, msg) || true',M='qx.core.Assert.assertPositiveNumber(value, msg) || true',L="object",R="MSIE 6.0",Q='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',I="qx.core.Property";
qx.Bootstrap.define(I,{statics:{__w:{"Boolean":V,"String":P,"Number":s,"Integer":x,"PositiveNumber":M,"PositiveInteger":p,"Error":X,"RegExp":J,"Object":C,"Array":N,"Map":t,"Function":w,"Date":be,"Node":bd,"Element":F,"Document":bb,"Window":S,"Event":U,"Class":v,"Mixin":Y,"Interface":G,"Theme":O,"Color":bh,"Decorator":B,"Font":bg},__x:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:T,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:h,dereference:j,inheritable:j,nullable:j,themeable:j,refine:j,init:null,apply:h,event:h,check:null,transform:h,deferredInit:j,validate:null},$$allowedGroupKeys:{name:h,group:L,mode:h,themeable:j},$$inheritable:{},__y:function(bj){var bk=this.__z(bj);

if(!bk.length){var bl=function(){};
}else{bl=this.__A(bk);
}bj.prototype.$$refreshInheritables=bl;
},__z:function(bm){var bo=[];

while(bm){var bn=bm.$$properties;

if(bn){for(var name in this.$$inheritable){if(bn[name]&&bn[name].inheritable){bo.push(name);
}}}bm=bm.superclass;
}return bo;
},__A:function(bp){var bt=this.$$store.inherit;
var bs=this.$$store.init;
var br=this.$$method.refresh;
var bq=["var parent = this.getLayoutParent();","if (!parent) return;"];

for(var i=0,l=bp.length;i<l;i++){var name=bp[i];
bq.push("var value = parent.",bt[name],";","if (value===undefined) value = parent.",bs[name],";","this.",br[name],"(value);");
}return new Function(bq.join(""));
},attachRefreshInheritables:function(bu){bu.prototype.$$refreshInheritables=function(){qx.core.Property.__y(bu);
return this.$$refreshInheritables();
};
},attachMethods:function(bv,name,bw){bw.group?this.__B(bv,bw,name):this.__C(bv,bw,name);
},__B:function(bx,by,name){var bF=qx.Bootstrap.firstUp(name);
var bE=bx.prototype;
var bG=by.themeable===true;
var bH=[];
var bB=[];

if(bG){var bz=[];
var bD=[];
}var bC="var a=arguments[0] instanceof Array?arguments[0]:arguments;";
bH.push(bC);

if(bG){bz.push(bC);
}
if(by.mode=="shorthand"){var bA="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));";
bH.push(bA);

if(bG){bz.push(bA);
}}
for(var i=0,a=by.group,l=a.length;i<l;i++){bH.push("this.",this.$$method.set[a[i]],"(a[",i,"]);");
bB.push("this.",this.$$method.reset[a[i]],"();");

if(bG){bz.push("this.",this.$$method.setThemed[a[i]],"(a[",i,"]);");
bD.push("this.",this.$$method.resetThemed[a[i]],"();");
}}this.$$method.set[name]="set"+bF;
bE[this.$$method.set[name]]=new Function(bH.join(""));
this.$$method.reset[name]="reset"+bF;
bE[this.$$method.reset[name]]=new Function(bB.join(""));

if(bG){this.$$method.setThemed[name]="setThemed"+bF;
bE[this.$$method.setThemed[name]]=new Function(bz.join(""));
this.$$method.resetThemed[name]="resetThemed"+bF;
bE[this.$$method.resetThemed[name]]=new Function(bD.join(""));
}},__C:function(bI,bJ,name){var bL=qx.Bootstrap.firstUp(name);
var bN=bI.prototype;
if(bJ.dereference===undefined&&typeof bJ.check==="string"){bJ.dereference=this.__D(bJ.check);
}var bM=this.$$method;
var bK=this.$$store;
bK.runtime[name]="$$runtime_"+name;
bK.user[name]="$$user_"+name;
bK.theme[name]="$$theme_"+name;
bK.init[name]="$$init_"+name;
bK.inherit[name]="$$inherit_"+name;
bK.useinit[name]="$$useinit_"+name;
bM.get[name]="get"+bL;
bN[bM.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,bI,name,"get");
};
bM.set[name]="set"+bL;
bN[bM.set[name]]=function(bO){return qx.core.Property.executeOptimizedSetter(this,bI,name,"set",arguments);
};
bM.reset[name]="reset"+bL;
bN[bM.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,bI,name,"reset");
};

if(bJ.inheritable||bJ.apply||bJ.event||bJ.deferredInit){bM.init[name]="init"+bL;
bN[bM.init[name]]=function(bP){return qx.core.Property.executeOptimizedSetter(this,bI,name,"init",arguments);
};
}
if(bJ.inheritable){bM.refresh[name]="refresh"+bL;
bN[bM.refresh[name]]=function(bQ){return qx.core.Property.executeOptimizedSetter(this,bI,name,"refresh",arguments);
};
}bM.setRuntime[name]="setRuntime"+bL;
bN[bM.setRuntime[name]]=function(bR){return qx.core.Property.executeOptimizedSetter(this,bI,name,"setRuntime",arguments);
};
bM.resetRuntime[name]="resetRuntime"+bL;
bN[bM.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,bI,name,"resetRuntime");
};

if(bJ.themeable){bM.setThemed[name]="setThemed"+bL;
bN[bM.setThemed[name]]=function(bS){return qx.core.Property.executeOptimizedSetter(this,bI,name,"setThemed",arguments);
};
bM.resetThemed[name]="resetThemed"+bL;
bN[bM.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,bI,name,"resetThemed");
};
}
if(bJ.check==="Boolean"){bN["toggle"+bL]=new Function("return this."+bM.set[name]+"(!this."+bM.get[name]+"())");
bN["is"+bL]=new Function("return this."+bM.get[name]+"()");
}},__D:function(bT){return !!this.__x[bT];
},__E:function(bU){return this.__x[bU]||qx.Bootstrap.classIsDefined(bU)||(qx.Interface&&qx.Interface.isDefined(bU));
},__F:{0:'Could not change or apply init value after constructing phase!',1:'Requires exactly one argument!',2:'Undefined value is not allowed!',3:'Does not allow any arguments!',4:'Null value is not allowed!',5:'Is invalid!'},error:function(bV,bW,bX,bY,ca){var cb=bV.constructor.classname;
var cc=n+bX+bf+cb+A+this.$$method[bY][bX]+H+ca+q;
throw new Error(cc+(this.__F[bW]||"Unknown reason: "+bW));
},__G:function(cd,ce,name,cf,cg,ch){var ci=this.$$method[cf][name];
{ce[ci]=new Function("value",cg.join(""));
};
if(qx.core.Environment.get("qx.aspects")){ce[ci]=qx.core.Aspect.wrap(cd.classname+"."+ci,ce[ci],"property");
}qx.Bootstrap.setDisplayName(ce[ci],cd.classname+".prototype",ci);
if(ch===undefined){return cd[ci]();
}else{return cd[ci](ch[0]);
}},executeOptimizedGetter:function(cj,ck,name,cl){var cn=ck.$$properties[name];
var cp=ck.prototype;
var cm=[];
var co=this.$$store;
cm.push(e,co.runtime[name],g);
cm.push(k,co.runtime[name],m);

if(cn.inheritable){cm.push(f,co.inherit[name],g);
cm.push(k,co.inherit[name],m);
cm.push(d);
}cm.push(e,co.user[name],g);
cm.push(k,co.user[name],m);

if(cn.themeable){cm.push(f,co.theme[name],g);
cm.push(k,co.theme[name],m);
}
if(cn.deferredInit&&cn.init===undefined){cm.push(f,co.init[name],g);
cm.push(k,co.init[name],m);
}cm.push(d);

if(cn.init!==undefined){if(cn.inheritable){cm.push(u,co.init[name],m);

if(cn.nullable){cm.push(o);
}else if(cn.init!==undefined){cm.push(k,co.init[name],m);
}else{cm.push(Q,name,c,ck.classname,b);
}cm.push(ba);
}else{cm.push(k,co.init[name],m);
}}else if(cn.inheritable||cn.nullable){cm.push(z);
}else{cm.push(W,name,c,ck.classname,b);
}return this.__G(cj,cp,name,cl,cm);
},executeOptimizedSetter:function(cq,cr,name,cs,ct){var cy=cr.$$properties[name];
var cx=cr.prototype;
var cv=[];
var cu=cs===E||cs===K||cs===D||(cs===bi&&cy.init===undefined);
var cw=cy.apply||cy.event||cy.inheritable;
var cz=this.__H(cs,name);
this.__I(cv,cy,name,cs,cu);

if(cu){this.__J(cv,cr,cy,name);
}
if(cw){this.__K(cv,cu,cz,cs);
}
if(cy.inheritable){cv.push(bc);
}
if(!cw){this.__M(cv,name,cs,cu);
}else{this.__N(cv,cy,name,cs,cu);
}
if(cy.inheritable){this.__O(cv,cy,name,cs);
}else if(cw){this.__P(cv,cy,name,cs);
}
if(cw){this.__Q(cv,cy,name);
if(cy.inheritable&&cx._getChildren){this.__R(cv,name);
}}if(cu){cv.push(r);
}return this.__G(cq,cx,name,cs,cv,ct);
},__H:function(cA,name){if(cA==="setRuntime"||cA==="resetRuntime"){var cB=this.$$store.runtime[name];
}else if(cA==="setThemed"||cA==="resetThemed"){cB=this.$$store.theme[name];
}else if(cA==="init"){cB=this.$$store.init[name];
}else{cB=this.$$store.user[name];
}return cB;
},__I:function(cC,cD,name,cE,cF){{if(!cD.nullable||cD.check||cD.inheritable){cC.push('var prop=qx.core.Property;');
}if(cE==="set"){cC.push('if(value===undefined)prop.error(this,2,"',name,'","',cE,'",value);');
}};
},__J:function(cG,cH,cI,name){if(cI.transform){cG.push('value=this.',cI.transform,'(value);');
}if(cI.validate){if(typeof cI.validate==="string"){cG.push('this.',cI.validate,'(value);');
}else if(cI.validate instanceof Function){cG.push(cH.classname,'.$$properties.',name);
cG.push('.validate.call(this, value);');
}}},__K:function(cJ,cK,cL,cM){var cN=(cM==="reset"||cM==="resetThemed"||cM==="resetRuntime");

if(cK){cJ.push('if(this.',cL,'===value)return value;');
}else if(cN){cJ.push('if(this.',cL,'===undefined)return;');
}},__L:undefined,__M:function(cO,name,cP,cQ){if(cP==="setRuntime"){cO.push('this.',this.$$store.runtime[name],'=value;');
}else if(cP==="resetRuntime"){cO.push('if(this.',this.$$store.runtime[name],'!==undefined)');
cO.push('delete this.',this.$$store.runtime[name],';');
}else if(cP==="set"){cO.push('this.',this.$$store.user[name],'=value;');
}else if(cP==="reset"){cO.push('if(this.',this.$$store.user[name],'!==undefined)');
cO.push('delete this.',this.$$store.user[name],';');
}else if(cP==="setThemed"){cO.push('this.',this.$$store.theme[name],'=value;');
}else if(cP==="resetThemed"){cO.push('if(this.',this.$$store.theme[name],'!==undefined)');
cO.push('delete this.',this.$$store.theme[name],';');
}else if(cP==="init"&&cQ){cO.push('this.',this.$$store.init[name],'=value;');
}},__N:function(cR,cS,name,cT,cU){if(cS.inheritable){cR.push('var computed, old=this.',this.$$store.inherit[name],';');
}else{cR.push('var computed, old;');
}cR.push('if(this.',this.$$store.runtime[name],'!==undefined){');

if(cT==="setRuntime"){cR.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cT==="resetRuntime"){cR.push('delete this.',this.$$store.runtime[name],';');
cR.push('if(this.',this.$$store.user[name],'!==undefined)');
cR.push('computed=this.',this.$$store.user[name],';');
cR.push('else if(this.',this.$$store.theme[name],'!==undefined)');
cR.push('computed=this.',this.$$store.theme[name],';');
cR.push('else if(this.',this.$$store.init[name],'!==undefined){');
cR.push('computed=this.',this.$$store.init[name],';');
cR.push('this.',this.$$store.useinit[name],'=true;');
cR.push('}');
}else{cR.push('old=computed=this.',this.$$store.runtime[name],';');
if(cT==="set"){cR.push('this.',this.$$store.user[name],'=value;');
}else if(cT==="reset"){cR.push('delete this.',this.$$store.user[name],';');
}else if(cT==="setThemed"){cR.push('this.',this.$$store.theme[name],'=value;');
}else if(cT==="resetThemed"){cR.push('delete this.',this.$$store.theme[name],';');
}else if(cT==="init"&&cU){cR.push('this.',this.$$store.init[name],'=value;');
}}cR.push('}');
cR.push('else if(this.',this.$$store.user[name],'!==undefined){');

if(cT==="set"){if(!cS.inheritable){cR.push('old=this.',this.$$store.user[name],';');
}cR.push('computed=this.',this.$$store.user[name],'=value;');
}else if(cT==="reset"){if(!cS.inheritable){cR.push('old=this.',this.$$store.user[name],';');
}cR.push('delete this.',this.$$store.user[name],';');
cR.push('if(this.',this.$$store.runtime[name],'!==undefined)');
cR.push('computed=this.',this.$$store.runtime[name],';');
cR.push('if(this.',this.$$store.theme[name],'!==undefined)');
cR.push('computed=this.',this.$$store.theme[name],';');
cR.push('else if(this.',this.$$store.init[name],'!==undefined){');
cR.push('computed=this.',this.$$store.init[name],';');
cR.push('this.',this.$$store.useinit[name],'=true;');
cR.push('}');
}else{if(cT==="setRuntime"){cR.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cS.inheritable){cR.push('computed=this.',this.$$store.user[name],';');
}else{cR.push('old=computed=this.',this.$$store.user[name],';');
}if(cT==="setThemed"){cR.push('this.',this.$$store.theme[name],'=value;');
}else if(cT==="resetThemed"){cR.push('delete this.',this.$$store.theme[name],';');
}else if(cT==="init"&&cU){cR.push('this.',this.$$store.init[name],'=value;');
}}cR.push('}');
if(cS.themeable){cR.push('else if(this.',this.$$store.theme[name],'!==undefined){');

if(!cS.inheritable){cR.push('old=this.',this.$$store.theme[name],';');
}
if(cT==="setRuntime"){cR.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cT==="set"){cR.push('computed=this.',this.$$store.user[name],'=value;');
}else if(cT==="setThemed"){cR.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(cT==="resetThemed"){cR.push('delete this.',this.$$store.theme[name],';');
cR.push('if(this.',this.$$store.init[name],'!==undefined){');
cR.push('computed=this.',this.$$store.init[name],';');
cR.push('this.',this.$$store.useinit[name],'=true;');
cR.push('}');
}else if(cT==="init"){if(cU){cR.push('this.',this.$$store.init[name],'=value;');
}cR.push('computed=this.',this.$$store.theme[name],';');
}else if(cT==="refresh"){cR.push('computed=this.',this.$$store.theme[name],';');
}cR.push('}');
}cR.push('else if(this.',this.$$store.useinit[name],'){');

if(!cS.inheritable){cR.push('old=this.',this.$$store.init[name],';');
}
if(cT==="init"){if(cU){cR.push('computed=this.',this.$$store.init[name],'=value;');
}else{cR.push('computed=this.',this.$$store.init[name],';');
}}else if(cT==="set"||cT==="setRuntime"||cT==="setThemed"||cT==="refresh"){cR.push('delete this.',this.$$store.useinit[name],';');

if(cT==="setRuntime"){cR.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cT==="set"){cR.push('computed=this.',this.$$store.user[name],'=value;');
}else if(cT==="setThemed"){cR.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(cT==="refresh"){cR.push('computed=this.',this.$$store.init[name],';');
}}cR.push('}');
if(cT==="set"||cT==="setRuntime"||cT==="setThemed"||cT==="init"){cR.push('else{');

if(cT==="setRuntime"){cR.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(cT==="set"){cR.push('computed=this.',this.$$store.user[name],'=value;');
}else if(cT==="setThemed"){cR.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(cT==="init"){if(cU){cR.push('computed=this.',this.$$store.init[name],'=value;');
}else{cR.push('computed=this.',this.$$store.init[name],';');
}cR.push('this.',this.$$store.useinit[name],'=true;');
}cR.push('}');
}},__O:function(cV,cW,name,cX){cV.push('if(computed===undefined||computed===inherit){');

if(cX==="refresh"){cV.push('computed=value;');
}else{cV.push('var pa=this.getLayoutParent();if(pa)computed=pa.',this.$$store.inherit[name],';');
}cV.push('if((computed===undefined||computed===inherit)&&');
cV.push('this.',this.$$store.init[name],'!==undefined&&');
cV.push('this.',this.$$store.init[name],'!==inherit){');
cV.push('computed=this.',this.$$store.init[name],';');
cV.push('this.',this.$$store.useinit[name],'=true;');
cV.push('}else{');
cV.push('delete this.',this.$$store.useinit[name],';}');
cV.push('}');
cV.push('if(old===computed)return value;');
cV.push('if(computed===inherit){');
cV.push('computed=undefined;delete this.',this.$$store.inherit[name],';');
cV.push('}');
cV.push('else if(computed===undefined)');
cV.push('delete this.',this.$$store.inherit[name],';');
cV.push('else this.',this.$$store.inherit[name],'=computed;');
cV.push('var backup=computed;');
if(cW.init!==undefined&&cX!=="init"){cV.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{cV.push('if(old===undefined)old=null;');
}cV.push('if(computed===undefined||computed==inherit)computed=null;');
},__P:function(cY,da,name,db){if(db!=="set"&&db!=="setRuntime"&&db!=="setThemed"){cY.push('if(computed===undefined)computed=null;');
}cY.push('if(old===computed)return value;');
if(da.init!==undefined&&db!=="init"){cY.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{cY.push('if(old===undefined)old=null;');
}},__Q:function(dc,dd,name){if(dd.apply){dc.push('this.',dd.apply,'(computed, old, "',name,'");');
}if(dd.event){dc.push("var reg=qx.event.Registration;","if(reg.hasListener(this, '",dd.event,"')){","reg.fireEvent(this, '",dd.event,"', qx.event.type.Data, [computed, old]",")}");
}},__R:function(de,name){de.push('var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){');
de.push('if(a[i].',this.$$method.refresh[name],')a[i].',this.$$method.refresh[name],'(backup);');
de.push('}');
}},defer:function(df){var dh=navigator.userAgent.indexOf(R)!=-1;
var dg=navigator.userAgent.indexOf(y)!=-1;
if(dh||dg){df.__D=df.__E;
}}});
})();
(function(){var k="qx.aspects",j="Array",h=".",g="static",f="[Class ",e="]",d="constructor",c="extend",b="qx.Class";
qx.Bootstrap.define(b,{statics:{define:function(name,m){if(!m){var m={};
}if(m.include&&!(qx.Bootstrap.getClass(m.include)===j)){m.include=[m.include];
}if(m.implement&&!(qx.Bootstrap.getClass(m.implement)===j)){m.implement=[m.implement];
}var n=false;

if(!m.hasOwnProperty(c)&&!m.type){m.type=g;
n=true;
}var o=this.__U(name,m.type,m.extend,m.statics,m.construct,m.destruct,m.include);
if(m.extend){if(m.properties){this.__W(o,m.properties,true);
}if(m.members){this.__Y(o,m.members,true,true,false);
}if(m.events){this.__V(o,m.events,true);
}if(m.include){for(var i=0,l=m.include.length;i<l;i++){this.__bd(o,m.include[i],false);
}}}if(m.environment){for(var p in m.environment){qx.core.Environment.add(p,m.environment[p]);
}}if(m.implement){for(var i=0,l=m.implement.length;i<l;i++){this.__bb(o,m.implement[i]);
}}if(m.defer){m.defer.self=o;
m.defer(o,o.prototype,{add:function(name,q){var r={};
r[name]=q;
qx.Class.__W(o,r,true);
}});
}return o;
},undefine:function(name){delete this.$$registry[name];
var s=name.split(h);
var u=[window];

for(var i=0;i<s.length;i++){u.push(u[i][s[i]]);
}for(var i=u.length-1;i>=1;i--){var t=u[i];
var parent=u[i-1];

if(qx.Bootstrap.isFunction(t)||qx.Bootstrap.objectGetLength(t)===0){delete parent[s[i-1]];
}else{break;
}}},isDefined:qx.Bootstrap.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(v,w){qx.Class.__bd(v,w,false);
},patch:function(x,y){qx.Class.__bd(x,y,true);
},isSubClassOf:function(z,A){if(!z){return false;
}
if(z==A){return true;
}
if(z.prototype instanceof A){return true;
}return false;
},getPropertyDefinition:qx.Bootstrap.getPropertyDefinition,getProperties:function(B){var C=[];

while(B){if(B.$$properties){C.push.apply(C,qx.Bootstrap.getKeys(B.$$properties));
}B=B.superclass;
}return C;
},getByProperty:function(D,name){while(D){if(D.$$properties&&D.$$properties[name]){return D;
}D=D.superclass;
}return null;
},hasProperty:qx.Bootstrap.hasProperty,getEventType:qx.Bootstrap.getEventType,supportsEvent:qx.Bootstrap.supportsEvent,hasOwnMixin:function(E,F){return E.$$includes&&E.$$includes.indexOf(F)!==-1;
},getByMixin:function(G,H){var I,i,l;

while(G){if(G.$$includes){I=G.$$flatIncludes;

for(i=0,l=I.length;i<l;i++){if(I[i]===H){return G;
}}}G=G.superclass;
}return null;
},getMixins:qx.Bootstrap.getMixins,hasMixin:function(J,K){return !!this.getByMixin(J,K);
},hasOwnInterface:function(L,M){return L.$$implements&&L.$$implements.indexOf(M)!==-1;
},getByInterface:qx.Bootstrap.getByInterface,getInterfaces:function(N){var O=[];

while(N){if(N.$$implements){O.push.apply(O,N.$$flatImplements);
}N=N.superclass;
}return O;
},hasInterface:qx.Bootstrap.hasInterface,implementsInterface:function(P,Q){var R=P.constructor;

if(this.hasInterface(R,Q)){return true;
}
try{qx.Interface.assertObject(P,Q);
return true;
}catch(S){}
try{qx.Interface.assert(R,Q,false);
return true;
}catch(T){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return f+this.classname+e;
},$$registry:qx.Bootstrap.$$registry,__o:null,__S:null,__p:function(){},__T:function(){},__U:function(name,U,V,W,X,Y,ba){var bd;

if(!V&&qx.core.Environment.get("qx.aspects")==false){bd=W||{};
qx.Bootstrap.setDisplayNames(bd,name);
}else{var bd={};

if(V){if(!X){X=this.__be();
}
if(this.__bg(V,ba)){bd=this.__bh(X,name,U);
}else{bd=X;
}if(U==="singleton"){bd.getInstance=this.getInstance;
}qx.Bootstrap.setDisplayName(X,name,"constructor");
}if(W){qx.Bootstrap.setDisplayNames(W,name);
var be;

for(var i=0,a=qx.Bootstrap.getKeys(W),l=a.length;i<l;i++){be=a[i];
var bb=W[be];

if(qx.core.Environment.get("qx.aspects")){if(bb instanceof Function){bb=qx.core.Aspect.wrap(name+"."+be,bb,"static");
}bd[be]=bb;
}else{bd[be]=bb;
}}}}var bc=qx.Bootstrap.createNamespace(name,bd);
bd.name=bd.classname=name;
bd.basename=bc;
bd.$$type="Class";

if(U){bd.$$classtype=U;
}if(!bd.hasOwnProperty("toString")){bd.toString=this.genericToString;
}
if(V){qx.Bootstrap.extendClass(bd,X,V,name,bc);
if(Y){if(qx.core.Environment.get("qx.aspects")){Y=qx.core.Aspect.wrap(name,Y,"destructor");
}bd.$$destructor=Y;
qx.Bootstrap.setDisplayName(Y,name,"destruct");
}}this.$$registry[name]=bd;
return bd;
},__V:function(bf,bg,bh){var bi,bi;

if(bf.$$events){for(var bi in bg){bf.$$events[bi]=bg[bi];
}}else{bf.$$events=bg;
}},__W:function(bj,bk,bl){var bm;

if(bl===undefined){bl=false;
}var bn=bj.prototype;

for(var name in bk){bm=bk[name];
bm.name=name;
if(!bm.refine){if(bj.$$properties===undefined){bj.$$properties={};
}bj.$$properties[name]=bm;
}if(bm.init!==undefined){bj.prototype["$$init_"+name]=bm.init;
}if(bm.event!==undefined){var event={};
event[bm.event]="qx.event.type.Data";
this.__V(bj,event,bl);
}if(bm.inheritable){qx.core.Property.$$inheritable[name]=true;

if(!bn.$$refreshInheritables){qx.core.Property.attachRefreshInheritables(bj);
}}
if(!bm.refine){qx.core.Property.attachMethods(bj,name,bm);
}}},__X:null,__Y:function(bo,bp,bq,br,bs){var bt=bo.prototype;
var bv,bu;
qx.Bootstrap.setDisplayNames(bp,bo.classname+".prototype");

for(var i=0,a=qx.Bootstrap.getKeys(bp),l=a.length;i<l;i++){bv=a[i];
bu=bp[bv];
if(br!==false&&bu instanceof Function&&bu.$$type==null){if(bs==true){bu=this.__ba(bu,bt[bv]);
}else{if(bt[bv]){bu.base=bt[bv];
}bu.self=bo;
}
if(qx.core.Environment.get("qx.aspects")){bu=qx.core.Aspect.wrap(bo.classname+"."+bv,bu,"member");
}}bt[bv]=bu;
}},__ba:function(bw,bx){if(bx){return function(){var bz=bw.base;
bw.base=bx;
var by=bw.apply(this,arguments);
bw.base=bz;
return by;
};
}else{return bw;
}},__bb:function(bA,bB){var bC=qx.Interface.flatten([bB]);

if(bA.$$implements){bA.$$implements.push(bB);
bA.$$flatImplements.push.apply(bA.$$flatImplements,bC);
}else{bA.$$implements=[bB];
bA.$$flatImplements=bC;
}},__bc:function(bD){var name=bD.classname;
var bE=this.__bh(bD,name,bD.$$classtype);
for(var i=0,a=qx.Bootstrap.getKeys(bD),l=a.length;i<l;i++){bF=a[i];
bE[bF]=bD[bF];
}bE.prototype=bD.prototype;
var bH=bD.prototype;

for(var i=0,a=qx.Bootstrap.getKeys(bH),l=a.length;i<l;i++){bF=a[i];
var bI=bH[bF];
if(bI&&bI.self==bD){bI.self=bE;
}}for(var bF in this.$$registry){var bG=this.$$registry[bF];

if(!bG){continue;
}
if(bG.base==bD){bG.base=bE;
}
if(bG.superclass==bD){bG.superclass=bE;
}
if(bG.$$original){if(bG.$$original.base==bD){bG.$$original.base=bE;
}
if(bG.$$original.superclass==bD){bG.$$original.superclass=bE;
}}}qx.Bootstrap.createNamespace(name,bE);
this.$$registry[name]=bE;
return bE;
},__bd:function(bJ,bK,bL){if(this.hasMixin(bJ,bK)){return;
}var bO=bJ.$$original;

if(bK.$$constructor&&!bO){bJ=this.__bc(bJ);
}var bN=qx.Mixin.flatten([bK]);
var bM;

for(var i=0,l=bN.length;i<l;i++){bM=bN[i];
if(bM.$$events){this.__V(bJ,bM.$$events,bL);
}if(bM.$$properties){this.__W(bJ,bM.$$properties,bL);
}if(bM.$$members){this.__Y(bJ,bM.$$members,bL,bL,bL);
}}if(bJ.$$includes){bJ.$$includes.push(bK);
bJ.$$flatIncludes.push.apply(bJ.$$flatIncludes,bN);
}else{bJ.$$includes=[bK];
bJ.$$flatIncludes=bN;
}},__be:function(){function bP(){bP.base.apply(this,arguments);
}return bP;
},__bf:function(){return function(){};
},__bg:function(bQ,bR){if(bQ&&bQ.$$includes){var bS=bQ.$$flatIncludes;

for(var i=0,l=bS.length;i<l;i++){if(bS[i].$$constructor){return true;
}}}if(bR){var bT=qx.Mixin.flatten(bR);

for(var i=0,l=bT.length;i<l;i++){if(bT[i].$$constructor){return true;
}}}return false;
},__bh:function(bU,name,bV){var bX=function(){var cb=bX;
var ca=cb.$$original.apply(this,arguments);
if(cb.$$includes){var bY=cb.$$flatIncludes;

for(var i=0,l=bY.length;i<l;i++){if(bY[i].$$constructor){bY[i].$$constructor.apply(this,arguments);
}}}return ca;
};

if(qx.core.Environment.get(k)){var bW=qx.core.Aspect.wrap(name,bX,d);
bX.$$original=bU;
bX.constructor=bW;
bX=bW;
}bX.$$original=bU;
bU.wrapper=bX;
return bX;
}},defer:function(){if(qx.core.Environment.get(k)){for(var cc in qx.Bootstrap.$$registry){var cd=qx.Bootstrap.$$registry[cc];

for(var ce in cd){if(cd[ce] instanceof Function){cd[ce]=qx.core.Aspect.wrap(cc+h+ce,cd[ce],g);
}}}}}});
})();
(function(){var c="qx.event.type.Data",b="qx.event.type.Event",a="qx.data.IListData";
qx.Interface.define(a,{events:{"change":c,"changeLength":b},members:{getItem:function(d){},setItem:function(e,f){},splice:function(g,h,i){},contains:function(j){},getLength:function(){},toArray:function(){}}});
})();
(function(){var k="indexOf",j="lastIndexOf",h="slice",g="concat",f="join",e="toLocaleUpperCase",d="shift",c="substr",b="filter",a="unshift",I="match",H="quote",G="qx.lang.Generics",F="localeCompare",E="sort",D="some",C="charAt",B="split",A="substring",z="pop",t="toUpperCase",u="replace",q="push",r="charCodeAt",o="every",p="reverse",m="search",n="forEach",v="map",w="toLowerCase",y="splice",x="toLocaleLowerCase";
qx.Class.define(G,{statics:{__bi:{"Array":[f,p,E,q,z,d,a,y,g,h,k,j,n,v,b,D,o],"String":[H,A,w,t,C,r,k,j,x,e,F,I,m,u,B,c,g,h]},__bj:function(J,K){return function(s){return J.prototype[K].apply(s,Array.prototype.slice.call(arguments,1));
};
},__bk:function(){var L=qx.lang.Generics.__bi;

for(var P in L){var N=window[P];
var M=L[P];

for(var i=0,l=M.length;i<l;i++){var O=M[i];

if(!N[O]){N[O]=qx.lang.Generics.__bj(N,O);
}}}}},defer:function(Q){Q.__bk();
}});
})();
(function(){var a="qx.data.MBinding";
qx.Mixin.define(a,{members:{bind:function(b,c,d,e){return qx.data.SingleValueBinding.bind(this,b,c,d,e);
},removeBinding:function(f){qx.data.SingleValueBinding.removeBindingFromObject(this,f);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var m="get",l="",k="[",h="last",g="change",f="]",d=".",c="Number",b="String",a="qx.debug.databinding",F="set",E="deepBinding",D="item",C="reset",B="' (",A="Boolean",z=") to the object '",y="Integer",x=" of object ",w="qx.data.SingleValueBinding",u="Binding property ",v="Binding from '",s="PositiveNumber",t="PositiveInteger",q="Binding does not exist!",r=").",n="Date",p=" not possible: No event available. ";
qx.Class.define(w,{statics:{__bl:{},bind:function(G,H,I,J,K){var V=this.__bn(G,H,I,J,K);
var Q=H.split(d);
var M=this.__bt(Q);
var U=[];
var R=[];
var S=[];
var O=[];
var P=G;
try{for(var i=0;i<Q.length;i++){if(M[i]!==l){O.push(g);
}else{O.push(this.__bo(P,Q[i]));
}U[i]=P;
if(i==Q.length-1){if(M[i]!==l){var ba=M[i]===h?P.length-1:M[i];
var L=P.getItem(ba);
this.__bs(L,I,J,K,G);
S[i]=this.__bu(P,O[i],I,J,K,M[i]);
}else{if(Q[i]!=null&&P[m+qx.lang.String.firstUp(Q[i])]!=null){var L=P[m+qx.lang.String.firstUp(Q[i])]();
this.__bs(L,I,J,K,G);
}S[i]=this.__bu(P,O[i],I,J,K);
}}else{var W={index:i,propertyNames:Q,sources:U,listenerIds:S,arrayIndexValues:M,targetObject:I,targetPropertyChain:J,options:K,listeners:R};
var T=qx.lang.Function.bind(this.__bm,this,W);
R.push(T);
S[i]=P.addListener(O[i],T);
}if(P[m+qx.lang.String.firstUp(Q[i])]==null){P=null;
}else if(M[i]!==l){P=P[m+qx.lang.String.firstUp(Q[i])](M[i]);
}else{P=P[m+qx.lang.String.firstUp(Q[i])]();
}
if(!P){break;
}}}catch(bb){for(var i=0;i<U.length;i++){if(U[i]&&S[i]){U[i].removeListenerById(S[i]);
}}var Y=V.targets;
var N=V.listenerIds[i];
for(var i=0;i<Y.length;i++){if(Y[i]&&N[i]){Y[i].removeListenerById(N[i]);
}}throw bb;
}var X={type:E,listenerIds:S,sources:U,targetListenerIds:V.listenerIds,targets:V.targets};
this.__bv(X,G,H,I,J);
return X;
},__bm:function(bc){if(bc.options&&bc.options.onUpdate){bc.options.onUpdate(bc.sources[bc.index],bc.targetObject);
}for(var j=bc.index+1;j<bc.propertyNames.length;j++){var bg=bc.sources[j];
bc.sources[j]=null;

if(!bg){continue;
}bg.removeListenerById(bc.listenerIds[j]);
}var bg=bc.sources[bc.index];
for(var j=bc.index+1;j<bc.propertyNames.length;j++){if(bc.arrayIndexValues[j-1]!==l){bg=bg[m+qx.lang.String.firstUp(bc.propertyNames[j-1])](bc.arrayIndexValues[j-1]);
}else{bg=bg[m+qx.lang.String.firstUp(bc.propertyNames[j-1])]();
}bc.sources[j]=bg;
if(!bg){this.__bp(bc.targetObject,bc.targetPropertyChain);
break;
}if(j==bc.propertyNames.length-1){if(qx.Class.implementsInterface(bg,qx.data.IListData)){var bh=bc.arrayIndexValues[j]===h?bg.length-1:bc.arrayIndexValues[j];
var be=bg.getItem(bh);
this.__bs(be,bc.targetObject,bc.targetPropertyChain,bc.options,bc.sources[bc.index]);
bc.listenerIds[j]=this.__bu(bg,g,bc.targetObject,bc.targetPropertyChain,bc.options,bc.arrayIndexValues[j]);
}else{if(bc.propertyNames[j]!=null&&bg[m+qx.lang.String.firstUp(bc.propertyNames[j])]!=null){var be=bg[m+qx.lang.String.firstUp(bc.propertyNames[j])]();
this.__bs(be,bc.targetObject,bc.targetPropertyChain,bc.options,bc.sources[bc.index]);
}var bf=this.__bo(bg,bc.propertyNames[j]);
bc.listenerIds[j]=this.__bu(bg,bf,bc.targetObject,bc.targetPropertyChain,bc.options);
}}else{if(bc.listeners[j]==null){var bd=qx.lang.Function.bind(this.__bm,this,bc);
bc.listeners.push(bd);
}if(qx.Class.implementsInterface(bg,qx.data.IListData)){var bf=g;
}else{var bf=this.__bo(bg,bc.propertyNames[j]);
}bc.listenerIds[j]=bg.addListener(bf,bc.listeners[j]);
}}},__bn:function(bi,bj,bk,bl,bm){var bq=bl.split(d);
var bo=this.__bt(bq);
var bv=[];
var bu=[];
var bs=[];
var br=[];
var bp=bk;
for(var i=0;i<bq.length-1;i++){if(bo[i]!==l){br.push(g);
}else{try{br.push(this.__bo(bp,bq[i]));
}catch(e){break;
}}bv[i]=bp;
var bt=function(){for(var j=i+1;j<bq.length-1;j++){var by=bv[j];
bv[j]=null;

if(!by){continue;
}by.removeListenerById(bs[j]);
}var by=bv[i];
for(var j=i+1;j<bq.length-1;j++){var bw=qx.lang.String.firstUp(bq[j-1]);
if(bo[j-1]!==l){var bz=bo[j-1]===h?by.getLength()-1:bo[j-1];
by=by[m+bw](bz);
}else{by=by[m+bw]();
}bv[j]=by;
if(bu[j]==null){bu.push(bt);
}if(qx.Class.implementsInterface(by,qx.data.IListData)){var bx=g;
}else{try{var bx=qx.data.SingleValueBinding.__bo(by,bq[j]);
}catch(e){break;
}}bs[j]=by.addListener(bx,bu[j]);
}qx.data.SingleValueBinding.updateTarget(bi,bj,bk,bl,bm);
};
bu.push(bt);
bs[i]=bp.addListener(br[i],bt);
var bn=qx.lang.String.firstUp(bq[i]);
if(bp[m+bn]==null){bp=null;
}else if(bo[i]!==l){bp=bp[m+bn](bo[i]);
}else{bp=bp[m+bn]();
}
if(!bp){break;
}}return {listenerIds:bs,targets:bv};
},updateTarget:function(bA,bB,bC,bD,bE){var bF=this.getValueFromObject(bA,bB);
bF=qx.data.SingleValueBinding.__bw(bF,bC,bD,bE,bA);
this.__bq(bC,bD,bF);
},getValueFromObject:function(o,bG){var bK=this.__br(o,bG);
var bI;

if(bK!=null){var bM=bG.substring(bG.lastIndexOf(d)+1,bG.length);
if(bM.charAt(bM.length-1)==f){var bH=bM.substring(bM.lastIndexOf(k)+1,bM.length-1);
var bJ=bM.substring(0,bM.lastIndexOf(k));
var bL=bK[m+qx.lang.String.firstUp(bJ)]();

if(bH==h){bH=bL.length-1;
}
if(bL!=null){bI=bL.getItem(bH);
}}else{bI=bK[m+qx.lang.String.firstUp(bM)]();
}}return bI;
},__bo:function(bN,bO){var bP=this.__bx(bN,bO);
if(bP==null){if(qx.Class.supportsEvent(bN.constructor,bO)){bP=bO;
}else if(qx.Class.supportsEvent(bN.constructor,g+qx.lang.String.firstUp(bO))){bP=g+qx.lang.String.firstUp(bO);
}else{throw new qx.core.AssertionError(u+bO+x+bN+p);
}}return bP;
},__bp:function(bQ,bR){var bS=this.__br(bQ,bR);

if(bS!=null){var bT=bR.substring(bR.lastIndexOf(d)+1,bR.length);
if(bT.charAt(bT.length-1)==f){this.__bq(bQ,bR,null);
return;
}if(bS[C+qx.lang.String.firstUp(bT)]!=undefined){bS[C+qx.lang.String.firstUp(bT)]();
}else{bS[F+qx.lang.String.firstUp(bT)](null);
}}},__bq:function(bU,bV,bW){var cb=this.__br(bU,bV);

if(cb!=null){var cc=bV.substring(bV.lastIndexOf(d)+1,bV.length);
if(cc.charAt(cc.length-1)==f){var bX=cc.substring(cc.lastIndexOf(k)+1,cc.length-1);
var ca=cc.substring(0,cc.lastIndexOf(k));
var bY=bU;

if(!qx.Class.implementsInterface(bY,qx.data.IListData)){bY=cb[m+qx.lang.String.firstUp(ca)]();
}
if(bX==h){bX=bY.length-1;
}
if(bY!=null){bY.setItem(bX,bW);
}}else{cb[F+qx.lang.String.firstUp(cc)](bW);
}}},__br:function(cd,ce){var ch=ce.split(d);
var ci=cd;
for(var i=0;i<ch.length-1;i++){try{var cg=ch[i];
if(cg.indexOf(f)==cg.length-1){var cf=cg.substring(cg.indexOf(k)+1,cg.length-1);
cg=cg.substring(0,cg.indexOf(k));
}if(cg!=l){ci=ci[m+qx.lang.String.firstUp(cg)]();
}if(cf!=null){if(cf==h){cf=ci.length-1;
}ci=ci.getItem(cf);
cf=null;
}}catch(cj){return null;
}}return ci;
},__bs:function(ck,cl,cm,cn,co){ck=this.__bw(ck,cl,cm,cn,co);
if(ck===undefined){this.__bp(cl,cm);
}if(ck!==undefined){try{this.__bq(cl,cm,ck);
if(cn&&cn.onUpdate){cn.onUpdate(co,cl,ck);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(cn&&cn.onSetFail){cn.onSetFail(e);
}else{qx.log.Logger.warn("Failed so set value "+ck+" on "+cl+". Error message: "+e);
}}}},__bt:function(cp){var cq=[];
for(var i=0;i<cp.length;i++){var name=cp[i];
if(qx.lang.String.endsWith(name,f)){var cr=name.substring(name.indexOf(k)+1,name.indexOf(f));
if(name.indexOf(f)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(cr!==h){if(cr==l||isNaN(parseInt(cr,10))){throw new Error("No number or 'last' value hast been given"+" in an array binding: "+name+" does not work.");
}}if(name.indexOf(k)!=0){cp[i]=name.substring(0,name.indexOf(k));
cq[i]=l;
cq[i+1]=cr;
cp.splice(i+1,0,D);
i++;
}else{cq[i]=cr;
cp.splice(i,1,D);
}}else{cq[i]=l;
}}return cq;
},__bu:function(cs,ct,cu,cv,cw,cx){var cy;
var cA=function(cB,e){if(cB!==l){if(cB===h){cB=cs.length-1;
}var cE=cs.getItem(cB);
if(cE===undefined){qx.data.SingleValueBinding.__bp(cu,cv);
}var cC=e.getData().start;
var cD=e.getData().end;

if(cB<cC||cB>cD){return;
}}else{var cE=e.getData();
}if(qx.core.Environment.get(a)){qx.log.Logger.debug("Binding executed from "+cs+" by "+ct+" to "+cu+" ("+cv+")");
qx.log.Logger.debug("Data before conversion: "+cE);
}cE=qx.data.SingleValueBinding.__bw(cE,cu,cv,cw,cs);
if(qx.core.Environment.get(a)){qx.log.Logger.debug("Data after conversion: "+cE);
}try{if(cE!==undefined){qx.data.SingleValueBinding.__bq(cu,cv,cE);
}else{qx.data.SingleValueBinding.__bp(cu,cv);
}if(cw&&cw.onUpdate){cw.onUpdate(cs,cu,cE);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(cw&&cw.onSetFail){cw.onSetFail(e);
}else{qx.log.Logger.warn("Failed so set value "+cE+" on "+cu+". Error message: "+e);
}}};
if(!cx){cx=l;
}cA=qx.lang.Function.bind(cA,cs,cx);
var cz=cs.addListener(ct,cA);
return cz;
},__bv:function(cF,cG,cH,cI,cJ){if(this.__bl[cG.toHashCode()]===undefined){this.__bl[cG.toHashCode()]=[];
}this.__bl[cG.toHashCode()].push([cF,cG,cH,cI,cJ]);
},__bw:function(cK,cL,cM,cN,cO){if(cN&&cN.converter){var cQ;

if(cL.getModel){cQ=cL.getModel();
}return cN.converter(cK,cQ,cO,cL);
}else{var cS=this.__br(cL,cM);
var cT=cM.substring(cM.lastIndexOf(d)+1,cM.length);
if(cS==null){return cK;
}var cR=qx.Class.getPropertyDefinition(cS.constructor,cT);
var cP=cR==null?l:cR.check;
return this.__by(cK,cP);
}},__bx:function(cU,cV){var cW=qx.Class.getPropertyDefinition(cU.constructor,cV);

if(cW==null){return null;
}return cW.event;
},__by:function(cX,cY){var da=qx.lang.Type.getClass(cX);
if((da==c||da==b)&&(cY==y||cY==t)){cX=parseInt(cX,10);
}if((da==A||da==c||da==n)&&cY==b){cX=cX+l;
}if((da==c||da==b)&&(cY==c||cY==s)){cX=parseFloat(cX);
}return cX;
},removeBindingFromObject:function(db,dc){if(dc.type==E){for(var i=0;i<dc.sources.length;i++){if(dc.sources[i]){dc.sources[i].removeListenerById(dc.listenerIds[i]);
}}for(var i=0;i<dc.targets.length;i++){if(dc.targets[i]){dc.targets[i].removeListenerById(dc.targetListenerIds[i]);
}}}else{db.removeListenerById(dc);
}var dd=this.__bl[db.toHashCode()];
if(dd!=undefined){for(var i=0;i<dd.length;i++){if(dd[i][0]==dc){qx.lang.Array.remove(dd,dd[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(de){var df=this.__bl[de.toHashCode()];

if(df!=undefined){for(var i=df.length-1;i>=0;i--){this.removeBindingFromObject(de,df[i][0]);
}}},getAllBindingsForObject:function(dg){if(this.__bl[dg.toHashCode()]===undefined){this.__bl[dg.toHashCode()]=[];
}return this.__bl[dg.toHashCode()];
},removeAllBindings:function(){for(var di in this.__bl){var dh=qx.core.ObjectRegistry.fromHashCode(di);
if(dh==null){delete this.__bl[di];
continue;
}this.removeAllBindingsForObject(dh);
}this.__bl={};
},getAllBindings:function(){return this.__bl;
},showBindingInLog:function(dj,dk){var dm;
for(var i=0;i<this.__bl[dj.toHashCode()].length;i++){if(this.__bl[dj.toHashCode()][i][0]==dk){dm=this.__bl[dj.toHashCode()][i];
break;
}}
if(dm===undefined){var dl=q;
}else{var dl=v+dm[1]+B+dm[2]+z+dm[3]+B+dm[4]+r;
}qx.log.Logger.debug(dl);
},showAllBindingsInLog:function(){for(var dp in this.__bl){var dn=qx.core.ObjectRegistry.fromHashCode(dp);

for(var i=0;i<this.__bl[dp].length;i++){this.showBindingInLog(dn,this.__bl[dp][i][0]);
}}}}});
})();
(function(){var p="",o="g",n='\\\u',m="]",l="undefined",k='\\$1',j="0041-005A0061-007A00AA00B500BA00C0-00D600D8-00F600F8-02C102C6-02D102E0-02E402EC02EE0370-037403760377037A-037D03860388-038A038C038E-03A103A3-03F503F7-0481048A-05250531-055605590561-058705D0-05EA05F0-05F20621-064A066E066F0671-06D306D506E506E606EE06EF06FA-06FC06FF07100712-072F074D-07A507B107CA-07EA07F407F507FA0800-0815081A082408280904-0939093D09500958-0961097109720979-097F0985-098C098F09900993-09A809AA-09B009B209B6-09B909BD09CE09DC09DD09DF-09E109F009F10A05-0A0A0A0F0A100A13-0A280A2A-0A300A320A330A350A360A380A390A59-0A5C0A5E0A72-0A740A85-0A8D0A8F-0A910A93-0AA80AAA-0AB00AB20AB30AB5-0AB90ABD0AD00AE00AE10B05-0B0C0B0F0B100B13-0B280B2A-0B300B320B330B35-0B390B3D0B5C0B5D0B5F-0B610B710B830B85-0B8A0B8E-0B900B92-0B950B990B9A0B9C0B9E0B9F0BA30BA40BA8-0BAA0BAE-0BB90BD00C05-0C0C0C0E-0C100C12-0C280C2A-0C330C35-0C390C3D0C580C590C600C610C85-0C8C0C8E-0C900C92-0CA80CAA-0CB30CB5-0CB90CBD0CDE0CE00CE10D05-0D0C0D0E-0D100D12-0D280D2A-0D390D3D0D600D610D7A-0D7F0D85-0D960D9A-0DB10DB3-0DBB0DBD0DC0-0DC60E01-0E300E320E330E40-0E460E810E820E840E870E880E8A0E8D0E94-0E970E99-0E9F0EA1-0EA30EA50EA70EAA0EAB0EAD-0EB00EB20EB30EBD0EC0-0EC40EC60EDC0EDD0F000F40-0F470F49-0F6C0F88-0F8B1000-102A103F1050-1055105A-105D106110651066106E-10701075-1081108E10A0-10C510D0-10FA10FC1100-1248124A-124D1250-12561258125A-125D1260-1288128A-128D1290-12B012B2-12B512B8-12BE12C012C2-12C512C8-12D612D8-13101312-13151318-135A1380-138F13A0-13F41401-166C166F-167F1681-169A16A0-16EA1700-170C170E-17111720-17311740-17511760-176C176E-17701780-17B317D717DC1820-18771880-18A818AA18B0-18F51900-191C1950-196D1970-19741980-19AB19C1-19C71A00-1A161A20-1A541AA71B05-1B331B45-1B4B1B83-1BA01BAE1BAF1C00-1C231C4D-1C4F1C5A-1C7D1CE9-1CEC1CEE-1CF11D00-1DBF1E00-1F151F18-1F1D1F20-1F451F48-1F4D1F50-1F571F591F5B1F5D1F5F-1F7D1F80-1FB41FB6-1FBC1FBE1FC2-1FC41FC6-1FCC1FD0-1FD31FD6-1FDB1FE0-1FEC1FF2-1FF41FF6-1FFC2071207F2090-209421022107210A-211321152119-211D212421262128212A-212D212F-2139213C-213F2145-2149214E218321842C00-2C2E2C30-2C5E2C60-2CE42CEB-2CEE2D00-2D252D30-2D652D6F2D80-2D962DA0-2DA62DA8-2DAE2DB0-2DB62DB8-2DBE2DC0-2DC62DC8-2DCE2DD0-2DD62DD8-2DDE2E2F300530063031-3035303B303C3041-3096309D-309F30A1-30FA30FC-30FF3105-312D3131-318E31A0-31B731F0-31FF3400-4DB54E00-9FCBA000-A48CA4D0-A4FDA500-A60CA610-A61FA62AA62BA640-A65FA662-A66EA67F-A697A6A0-A6E5A717-A71FA722-A788A78BA78CA7FB-A801A803-A805A807-A80AA80C-A822A840-A873A882-A8B3A8F2-A8F7A8FBA90A-A925A930-A946A960-A97CA984-A9B2A9CFAA00-AA28AA40-AA42AA44-AA4BAA60-AA76AA7AAA80-AAAFAAB1AAB5AAB6AAB9-AABDAAC0AAC2AADB-AADDABC0-ABE2AC00-D7A3D7B0-D7C6D7CB-D7FBF900-FA2DFA30-FA6DFA70-FAD9FB00-FB06FB13-FB17FB1DFB1F-FB28FB2A-FB36FB38-FB3CFB3EFB40FB41FB43FB44FB46-FBB1FBD3-FD3DFD50-FD8FFD92-FDC7FDF0-FDFBFE70-FE74FE76-FEFCFF21-FF3AFF41-FF5AFF66-FFBEFFC2-FFC7FFCA-FFCFFFD2-FFD7FFDA-FFDC",h='-',g="qx.lang.String",f="(^|[^",c="0",e="%",d=' ',b='\n',a="])[";
qx.Class.define(g,{statics:{__bz:j,__bA:null,camelCase:function(q){return q.replace(/\-([a-z])/g,function(r,s){return s.toUpperCase();
});
},hyphenate:function(t){return t.replace(/[A-Z]/g,function(u){return (h+u.charAt(0).toLowerCase());
});
},capitalize:function(v){if(this.__bA===null){this.__bA=new RegExp(f+this.__bz.replace(/[0-9A-F]{4}/g,function(w){return n+w;
})+a+this.__bz.replace(/[0-9A-F]{4}/g,function(x){return n+x;
})+m,o);
}return v.replace(this.__bA,function(y){return y.toUpperCase();
});
},clean:function(z){return this.trim(z.replace(/\s+/g,d));
},trimLeft:function(A){return A.replace(/^\s+/,p);
},trimRight:function(B){return B.replace(/\s+$/,p);
},trim:function(C){return C.replace(/^\s+|\s+$/g,p);
},startsWith:function(D,E){return D.indexOf(E)===0;
},endsWith:function(F,G){return F.substring(F.length-G.length,F.length)===G;
},repeat:function(H,I){return H.length>0?new Array(I+1).join(H):p;
},pad:function(J,length,K){var L=length-J.length;

if(L>0){if(typeof K===l){K=c;
}return this.repeat(K,L)+J;
}else{return J;
}},firstUp:qx.Bootstrap.firstUp,firstLow:qx.Bootstrap.firstLow,contains:function(M,N){return M.indexOf(N)!=-1;
},format:function(O,P){var Q=O;
var i=P.length;

while(i--){Q=Q.replace(new RegExp(e+(i+1),o),P[i]+p);
}return Q;
},escapeRegexpChars:function(R){return R.replace(/([.*+?^${}()|[\]\/\\])/g,k);
},toArray:function(S){return S.split(/\B|\b/g);
},stripTags:function(T){return T.replace(/<\/?[^>]+>/gi,p);
},stripScripts:function(U,V){var X=p;
var W=U.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){X+=arguments[1]+b;
return p;
});

if(V===true){qx.lang.Function.globalEval(X);
}return W;
}}});
})();
(function(){var e="number",d="qx.lang.Array",c="string",b="[object Array]",a="qx";
qx.Class.define(d,{statics:{toArray:function(f,g){return this.cast(f,Array,g);
},cast:function(h,j,k){var i,l;

if(h.constructor===j){return h;
}
if(qx.Class.hasInterface(h,qx.data.IListData)){var h=h.toArray();
}var m=new j;
if(Object.prototype.toString.call(h)===b&&k==null){m.push.apply(m,h);
}else{m.push.apply(m,Array.prototype.slice.call(h,k||0));
}return m;
},fromArguments:function(n,o){return Array.prototype.slice.call(n,o||0);
},fromCollection:function(p){var q,i,l;
return Array.prototype.slice.call(p,0);
},fromShortHand:function(r){var t=r.length;
var s=qx.lang.Array.clone(r);
switch(t){case 1:s[1]=s[2]=s[3]=s[0];
break;
case 2:s[2]=s[0];
case 3:s[3]=s[1];
}return s;
},clone:function(u){return u.concat();
},insertAt:function(v,w,i){v.splice(i,0,w);
return v;
},insertBefore:function(x,y,z){var i=x.indexOf(z);

if(i==-1){x.push(y);
}else{x.splice(i,0,y);
}return x;
},insertAfter:function(A,B,C){var i=A.indexOf(C);

if(i==-1||i==(A.length-1)){A.push(B);
}else{A.splice(i+1,0,B);
}return A;
},removeAt:function(D,i){return D.splice(i,1)[0];
},removeAll:function(E){E.length=0;
return this;
},append:function(F,G){Array.prototype.push.apply(F,G);
return F;
},exclude:function(H,I){for(var i=0,K=I.length,J;i<K;i++){J=H.indexOf(I[i]);

if(J!=-1){H.splice(J,1);
}}return H;
},remove:function(L,M){var i=L.indexOf(M);

if(i!=-1){L.splice(i,1);
return M;
}},contains:function(N,O){return N.indexOf(O)!==-1;
},equals:function(P,Q){var length=P.length;

if(length!==Q.length){return false;
}
for(var i=0;i<length;i++){if(P[i]!==Q[i]){return false;
}}return true;
},sum:function(R){var S=0;

for(var i=0,l=R.length;i<l;i++){S+=R[i];
}return S;
},max:function(T){var i,V=T.length,U=T[0];

for(i=1;i<V;i++){if(T[i]>U){U=T[i];
}}return U===undefined?null:U;
},min:function(W){var i,Y=W.length,X=W[0];

for(i=1;i<Y;i++){if(W[i]<X){X=W[i];
}}return X===undefined?null:X;
},unique:function(ba){var bk=[],bc={},bf={},bh={};
var bg,bb=0;
var bl=a+qx.lang.Date.now();
var bd=false,bj=false,bm=false;
for(var i=0,bi=ba.length;i<bi;i++){bg=ba[i];
if(bg===null){if(!bd){bd=true;
bk.push(bg);
}}else if(bg===undefined){}else if(bg===false){if(!bj){bj=true;
bk.push(bg);
}}else if(bg===true){if(!bm){bm=true;
bk.push(bg);
}}else if(typeof bg===c){if(!bc[bg]){bc[bg]=1;
bk.push(bg);
}}else if(typeof bg===e){if(!bf[bg]){bf[bg]=1;
bk.push(bg);
}}else{be=bg[bl];

if(be==null){be=bg[bl]=bb++;
}
if(!bh[be]){bh[be]=bg;
bk.push(bg);
}}}for(var be in bh){try{delete bh[be][bl];
}catch(bn){try{bh[be][bl]=null;
}catch(bo){throw new Error("Cannot clean-up map entry doneObjects["+be+"]["+bl+"]");
}}}return bk;
}}});
})();
(function(){var a="qx.lang.Date";
qx.Class.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var f="()",e=".",d=".prototype.",c='anonymous()',b="qx.lang.Function",a=".constructor()";
qx.Class.define(b,{statics:{getCaller:function(g){return g.caller?g.caller.callee:g.callee.caller;
},getName:function(h){if(h.displayName){return h.displayName;
}
if(h.$$original||h.wrapper||h.classname){return h.classname+a;
}
if(h.$$mixin){for(var j in h.$$mixin.$$members){if(h.$$mixin.$$members[j]==h){return h.$$mixin.name+d+j+f;
}}for(var j in h.$$mixin){if(h.$$mixin[j]==h){return h.$$mixin.name+e+j+f;
}}}
if(h.self){var k=h.self.constructor;

if(k){for(var j in k.prototype){if(k.prototype[j]==h){return k.classname+d+j+f;
}}for(var j in k){if(k[j]==h){return k.classname+e+j+f;
}}}}var i=h.toString().match(/function\s*(\w*)\s*\(.*/);

if(i&&i.length>=1&&i[1]){return i[1]+f;
}return c;
},globalEval:function(l){if(window.execScript){return window.execScript(l);
}else{return eval.call(window,l);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(m,n){if(!n){return m;
}if(!(n.self||n.args||n.delay!=null||n.periodical!=null||n.attempt)){return m;
}return function(event){var p=qx.lang.Array.fromArguments(arguments);
if(n.args){p=n.args.concat(p);
}
if(n.delay||n.periodical){var o=qx.event.GlobalError.observeMethod(function(){return m.apply(n.self||this,p);
});

if(n.delay){return window.setTimeout(o,n.delay);
}
if(n.periodical){return window.setInterval(o,n.periodical);
}}else if(n.attempt){var q=false;

try{q=m.apply(n.self||this,p);
}catch(r){}return q;
}else{return m.apply(n.self||this,p);
}};
},bind:function(s,self,t){return this.create(s,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(u,v){return this.create(u,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(w,self,x){if(arguments.length<3){return function(event){return w.call(self||this,event||window.event);
};
}else{var y=qx.lang.Array.fromArguments(arguments,2);
return function(event){var z=[event||window.event];
z.push.apply(z,y);
w.apply(self||this,z);
};
}},attempt:function(A,self,B){return this.create(A,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(C,D,self,E){return this.create(C,{delay:D,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(F,G,self,H){return this.create(F,{periodical:G,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var b="qx.globalErrorHandling",a="qx.event.GlobalError";
qx.Bootstrap.define(a,{statics:{__bB:function(){if(qx.core&&qx.core.Environment){return qx.core.Environment.get(b);
}else{return !!qx.Bootstrap.getEnvironmentSetting(b);
}},setErrorHandler:function(c,d){this.__bC=c||null;
this.__bD=d||window;

if(this.__bB()){if(c&&window.onerror){var e=qx.Bootstrap.bind(this.__bF,this);

if(this.__bE==null){this.__bE=window.onerror;
}var self=this;
window.onerror=function(f,g,h){self.__bE(f,g,h);
e(f,g,h);
};
}
if(c&&!window.onerror){window.onerror=qx.Bootstrap.bind(this.__bF,this);
}if(this.__bC==null){if(this.__bE!=null){window.onerror=this.__bE;
this.__bE=null;
}else{window.onerror=null;
}}}},__bF:function(i,j,k){if(this.__bC){this.handleError(new qx.core.WindowError(i,j,k));
return true;
}},observeMethod:function(l){if(this.__bB()){var self=this;
return function(){if(!self.__bC){return l.apply(this,arguments);
}
try{return l.apply(this,arguments);
}catch(m){self.handleError(new qx.core.GlobalError(m,arguments));
}};
}else{return l;
}},handleError:function(n){if(this.__bC){this.__bC.call(this.__bD,n);
}}},defer:function(o){if(qx.core&&qx.core.Environment){qx.core.Environment.add(b,true);
}else{qx.Bootstrap.setEnvironmentSetting(b,true);
}o.setErrorHandler(null,null);
}});
})();
(function(){var b="",a="qx.core.WindowError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d,e){Error.call(this,c);
this.__bG=c;
this.__bH=d||b;
this.__bI=e===undefined?-1:e;
},members:{__bG:null,__bH:null,__bI:null,toString:function(){return this.__bG;
},getUri:function(){return this.__bH;
},getLineNumber:function(){return this.__bI;
}}});
})();
(function(){var b="GlobalError: ",a="qx.core.GlobalError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d){if(qx.Bootstrap.DEBUG){qx.core.Assert.assertNotUndefined(c);
}this.__bG=b+(c&&c.message?c.message:c);
Error.call(this,this.__bG);
this.__bJ=d;
this.__bK=c;
},members:{__bK:null,__bJ:null,__bG:null,toString:function(){return this.__bG;
},getArguments:function(){return this.__bJ;
},getSourceException:function(){return this.__bK;
}},destruct:function(){this.__bK=null;
this.__bJ=null;
this.__bG=null;
}});
})();
(function(){var f="qx.lang.Type",e="Error",d="RegExp",c="Date",b="Number",a="Boolean";
qx.Class.define(f,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(g){return this.getClass(g)==d;
},isNumber:function(h){return (h!==null&&(this.getClass(h)==b||h instanceof Number));
},isBoolean:function(i){return (i!==null&&(this.getClass(i)==a||i instanceof Boolean));
},isDate:function(j){return (j!==null&&(this.getClass(j)==c||j instanceof Date));
},isError:function(k){return (k!==null&&(this.getClass(k)==e||k instanceof Error));
}}});
})();
(function(){var p="",o="!",n="'!",m="'",k="Expected '",j="' (rgb(",h=",",g=")), but found value '",f="Event (",d="Expected value to be the CSS color '",bz="' but found ",by="]",bx=", ",bw="The value '",bv=" != ",bu="qx.core.Object",bt="Expected value to be an array but found ",bs=") was fired.",br="Expected value to be an integer >= 0 but found ",bq="' to be not equal with '",w="' to '",x="Expected object '",u="Called assertTrue with '",v="Expected value to be a map but found ",s="The function did not raise an exception!",t="Expected value to be undefined but found ",q="Expected value to be a DOM element but found  '",r="Expected value to be a regular expression but found ",E="' to implement the interface '",F="Expected value to be null but found ",S="Invalid argument 'type'",O="Called assert with 'false'",bb="Assertion error! ",V="null",bm="' but found '",bg="' must must be a key of the map '",J="The String '",bp="Expected value to be a string but found ",bo="Expected value not to be undefined but found undefined!",bn="qx.util.ColorUtil",I=": ",L="The raised exception does not have the expected type! ",N=") not fired.",Q="qx.core.Assert",T="Expected value to be typeof object but found ",W="' (identical) but found '",bd="' must have any of the values defined in the array '",bi="Expected value to be a number but found ",y="Called assertFalse with '",z="qx.ui.core.Widget",K="Expected value to be a qooxdoo object but found ",ba="' arguments.",Y="Expected value '%1' to be in the range '%2'..'%3'!",X="Array[",bf="' does not match the regular expression '",be="' to be not identical with '",U="Expected [",bc="' arguments but found '",a="', which cannot be converted to a CSS color!",bh="qx.core.AssertionError",A="Expected value to be a boolean but found ",B="Expected value not to be null but found null!",P="))!",b="Expected value to be a qooxdoo widget but found ",c="Expected value to be typeof '",H="Expected value to be typeof function but found ",C="Expected value to be an integer but found ",D="Called fail().",G="The parameter 're' must be a string or a regular expression.",R="Expected value to be a number >= 0 but found ",bk="Expected value to be instanceof '",bj="], but found [",M="Wrong number of arguments given. Expected '",bl="object";
qx.Class.define(Q,{statics:{__bL:true,__bM:function(bA,bB){var bF=p;

for(var i=1,l=arguments.length;i<l;i++){bF=bF+this.__bN(arguments[i]);
}var bE=p;

if(bF){bE=bA+I+bF;
}else{bE=bA;
}var bD=bb+bE;

if(this.__bL){qx.Bootstrap.error(bD);
}
if(qx.Class.isDefined(bh)){var bC=new qx.core.AssertionError(bA,bF);

if(this.__bL){qx.Bootstrap.error("Stack trace: \n"+bC.getStackTrace());
}throw bC;
}else{throw new Error(bD);
}},__bN:function(bG){var bH;

if(bG===null){bH=V;
}else if(qx.lang.Type.isArray(bG)&&bG.length>10){bH=X+bG.length+by;
}else if((bG instanceof Object)&&(bG.toString==null)){bH=qx.lang.Json.stringify(bG,null,2);
}else{try{bH=bG.toString();
}catch(e){bH=p;
}}return bH;
},assert:function(bI,bJ){bI==true||this.__bM(bJ||p,O);
},fail:function(bK,bL){var bM=bL?p:D;
this.__bM(bK||p,bM);
},assertTrue:function(bN,bO){(bN===true)||this.__bM(bO||p,u,bN,m);
},assertFalse:function(bP,bQ){(bP===false)||this.__bM(bQ||p,y,bP,m);
},assertEquals:function(bR,bS,bT){bR==bS||this.__bM(bT||p,k,bR,bm,bS,n);
},assertNotEquals:function(bU,bV,bW){bU!=bV||this.__bM(bW||p,k,bU,bq,bV,n);
},assertIdentical:function(bX,bY,ca){bX===bY||this.__bM(ca||p,k,bX,W,bY,n);
},assertNotIdentical:function(cb,cc,cd){cb!==cc||this.__bM(cd||p,k,cb,be,cc,n);
},assertNotUndefined:function(ce,cf){ce!==undefined||this.__bM(cf||p,bo);
},assertUndefined:function(cg,ch){cg===undefined||this.__bM(ch||p,t,cg,o);
},assertNotNull:function(ci,cj){ci!==null||this.__bM(cj||p,B);
},assertNull:function(ck,cl){ck===null||this.__bM(cl||p,F,ck,o);
},assertJsonEquals:function(cm,cn,co){this.assertEquals(qx.lang.Json.stringify(cm),qx.lang.Json.stringify(cn),co);
},assertMatch:function(cp,cq,cr){this.assertString(cp);
this.assert(qx.lang.Type.isRegExp(cq)||qx.lang.Type.isString(cq),G);
cp.search(cq)>=0||this.__bM(cr||p,J,cp,bf,cq.toString(),n);
},assertArgumentsCount:function(cs,ct,cu,cv){var cw=cs.length;
(cw>=ct&&cw<=cu)||this.__bM(cv||p,M,ct,w,cu,bc,arguments.length,ba);
},assertEventFired:function(cx,event,cy,cz,cA){var cC=false;
var cB=function(e){if(cz){cz.call(cx,e);
}cC=true;
};
var cD;

try{cD=cx.addListener(event,cB,cx);
cy.call();
}catch(cE){throw cE;
}finally{try{cx.removeListenerById(cD);
}catch(cF){}}cC===true||this.__bM(cA||p,f,event,N);
},assertEventNotFired:function(cG,event,cH,cI){var cK=false;
var cJ=function(e){cK=true;
};
var cL=cG.addListener(event,cJ,cG);
cH.call();
cK===false||this.__bM(cI||p,f,event,bs);
cG.removeListenerById(cL);
},assertException:function(cM,cN,cO,cP){var cN=cN||Error;
var cQ;

try{this.__bL=false;
cM();
}catch(cR){cQ=cR;
}finally{this.__bL=true;
}
if(cQ==null){this.__bM(cP||p,s);
}cQ instanceof cN||this.__bM(cP||p,L,cN,bv,cQ);

if(cO){this.assertMatch(cQ.toString(),cO,cP);
}},assertInArray:function(cS,cT,cU){cT.indexOf(cS)!==-1||this.__bM(cU||p,bw,cS,bd,cT,m);
},assertArrayEquals:function(cV,cW,cX){this.assertArray(cV,cX);
this.assertArray(cW,cX);
cX=cX||U+cV.join(bx)+bj+cW.join(bx)+by;

if(cV.length!==cW.length){this.fail(cX,true);
}
for(var i=0;i<cV.length;i++){if(cV[i]!==cW[i]){this.fail(cX,true);
}}},assertKeyInMap:function(cY,da,db){da[cY]!==undefined||this.__bM(db||p,bw,cY,bg,da,m);
},assertFunction:function(dc,dd){qx.lang.Type.isFunction(dc)||this.__bM(dd||p,H,dc,o);
},assertString:function(de,df){qx.lang.Type.isString(de)||this.__bM(df||p,bp,de,o);
},assertBoolean:function(dg,dh){qx.lang.Type.isBoolean(dg)||this.__bM(dh||p,A,dg,o);
},assertNumber:function(di,dj){(qx.lang.Type.isNumber(di)&&isFinite(di))||this.__bM(dj||p,bi,di,o);
},assertPositiveNumber:function(dk,dl){(qx.lang.Type.isNumber(dk)&&isFinite(dk)&&dk>=0)||this.__bM(dl||p,R,dk,o);
},assertInteger:function(dm,dn){(qx.lang.Type.isNumber(dm)&&isFinite(dm)&&dm%1===0)||this.__bM(dn||p,C,dm,o);
},assertPositiveInteger:function(dp,dq){var dr=(qx.lang.Type.isNumber(dp)&&isFinite(dp)&&dp%1===0&&dp>=0);
dr||this.__bM(dq||p,br,dp,o);
},assertInRange:function(ds,dt,du,dv){(ds>=dt&&ds<=du)||this.__bM(dv||p,qx.lang.String.format(Y,[ds,dt,du]));
},assertObject:function(dw,dx){var dy=dw!==null&&(qx.lang.Type.isObject(dw)||typeof dw===bl);
dy||this.__bM(dx||p,T,(dw),o);
},assertArray:function(dz,dA){qx.lang.Type.isArray(dz)||this.__bM(dA||p,bt,dz,o);
},assertMap:function(dB,dC){qx.lang.Type.isObject(dB)||this.__bM(dC||p,v,dB,o);
},assertRegExp:function(dD,dE){qx.lang.Type.isRegExp(dD)||this.__bM(dE||p,r,dD,o);
},assertType:function(dF,dG,dH){this.assertString(dG,S);
typeof (dF)===dG||this.__bM(dH||p,c,dG,bz,dF,o);
},assertInstance:function(dI,dJ,dK){var dL=dJ.classname||dJ+p;
dI instanceof dJ||this.__bM(dK||p,bk,dL,bz,dI,o);
},assertInterface:function(dM,dN,dO){qx.Class.implementsInterface(dM,dN)||this.__bM(dO||p,x,dM,E,dN,n);
},assertCssColor:function(dP,dQ,dR){var dS=qx.Class.getByName(bn);

if(!dS){throw new Error("qx.util.ColorUtil not available! Your code must have a dependency on 'qx.util.ColorUtil'");
}var dU=dS.stringToRgb(dP);

try{var dT=dS.stringToRgb(dQ);
}catch(dW){this.__bM(dR||p,d,dP,j,dU.join(h),g,dQ,a);
}var dV=dU[0]==dT[0]&&dU[1]==dT[1]&&dU[2]==dT[2];
dV||this.__bM(dR||p,d,dU,j,dU.join(h),g,dQ,j,dT.join(h),P);
},assertElement:function(dX,dY){!!(dX&&dX.nodeType===1)||this.__bM(dY||p,q,dX,n);
},assertQxObject:function(ea,eb){this.__bO(ea,bu)||this.__bM(eb||p,K,ea,o);
},assertQxWidget:function(ec,ed){this.__bO(ec,z)||this.__bM(ed||p,b,ec,o);
},__bO:function(ee,ef){if(!ee){return false;
}var eg=ee.constructor;

while(eg){if(eg.classname===ef){return true;
}eg=eg.superclass;
}return false;
}}});
})();
(function(){var c="",b=": ",a="qx.type.BaseError";
qx.Class.define(a,{extend:Error,construct:function(d,e){Error.call(this,e);
this.__bP=d||c;
this.message=e||qx.type.BaseError.DEFAULTMESSAGE;
},statics:{DEFAULTMESSAGE:"error"},members:{__bP:null,message:null,getComment:function(){return this.__bP;
},toString:function(){return this.__bP+(this.message?b+this.message:c);
}}});
})();
(function(){var a="qx.core.AssertionError";
qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);
this.__bQ=qx.dev.StackTrace.getStackTrace();
},members:{__bQ:null,getStackTrace:function(){return this.__bQ;
}}});
})();
(function(){var g="...",f="qx.dev.StackTrace",e="",d="?",c="/source/class/",b=":",a=".";
qx.Bootstrap.define(f,{statics:{getStackTrace:function(){return this.getStackTraceFromCaller(arguments);
},getStackTraceFromCaller:function(h){var m=[];
var l=qx.lang.Function.getCaller(h);
var i={};

while(l){var j=qx.lang.Function.getName(l);
m.push(j);

try{l=l.caller;
}catch(n){break;
}
if(!l){break;
}var k=qx.core.ObjectRegistry.toHashCode(l);

if(i[k]){m.push(g);
break;
}i[k]=l;
}return m;
},getStackTraceFromError:function(o){if(o.stack){var v=/at (.*)/gm;
var u=/\((.*?)(:[^\/].*)\)/;
var s=/(.*?)(:[^\/].*)/;
var p;
var q=[];

while((p=v.exec(o.stack))!=null){var r=u.exec(p[1]);

if(!r){r=s.exec(p[1]);
}
if(r){var t=this.__bR(r[1]);
q.push(t+r[2]);
}else{q.push(p[1]);
}}return q;
}else if(o.sourceURL&&o.line){return [this.__bR(o.sourceURL)+b+o.line];
}else{return [];
}},__bR:function(w){var A=c;
var x=w.indexOf(A);
var z=w.indexOf(d);

if(z>=0){w=w.substring(0,z);
}var y=(x==-1)?w:w.substring(x+A.length).replace(/\//g,a).replace(/\.js$/,e);
return y;
}}});
})();
(function(){var g="$$hash",f="qx.core.ObjectRegistry",e="-",d="",c="-0";
qx.Class.define(f,{statics:{inShutDown:false,__v:{},__bS:0,__bT:[],__bU:d,register:function(h){var m=this.__v;

if(!m){return;
}var k=h.$$hash;

if(k==null){var j=this.__bT;

if(j.length>0){k=j.pop();
}else{k=(this.__bS++)+this.__bU;
}h.$$hash=k;
}m[k]=h;
},unregister:function(n){var o=n.$$hash;

if(o==null){return;
}var p=this.__v;

if(p&&p[o]){delete p[o];
this.__bT.push(o);
}try{delete n.$$hash;
}catch(q){if(n.removeAttribute){n.removeAttribute(g);
}}},toHashCode:function(r){var t=r.$$hash;

if(t!=null){return t;
}var s=this.__bT;

if(s.length>0){t=s.pop();
}else{t=(this.__bS++)+this.__bU;
}return r.$$hash=t;
},clearHashCode:function(u){var v=u.$$hash;

if(v!=null){this.__bT.push(v);
try{delete u.$$hash;
}catch(w){if(u.removeAttribute){u.removeAttribute(g);
}}}},fromHashCode:function(x){return this.__v[x]||null;
},shutdown:function(){this.inShutDown=true;
var z=this.__v;
var B=[];

for(var A in z){B.push(A);
}B.sort(function(a,b){return parseInt(b,10)-parseInt(a,10);
});
var y,i=0,l=B.length;

while(true){try{for(;i<l;i++){A=B[i];
y=z[A];

if(y&&y.dispose){y.dispose();
}}}catch(C){qx.Bootstrap.error(this,"Could not dispose object "+y.toString()+": "+C);

if(i!==l){i++;
continue;
}}break;
}qx.Bootstrap.debug(this,"Disposed "+l+" objects");
delete this.__v;
},getRegistry:function(){return this.__v;
}},defer:function(D){if(window&&window.top){var frames=window.top.frames;

for(var i=0;i<frames.length;i++){if(frames[i]===window){D.__bU=e+(i+1);
return;
}}}D.__bU=c;
}});
})();
(function(){var p='',o='"',m=':',l=']',h='null',g=': ',f='object',e='function',d=',',b='\n',ba='\\u',Y=',\n',X='0000',W='string',V="Cannot stringify a recursive object.",U='0',T='-',S='}',R='String',Q='Boolean',x='\\\\',y='\\f',u='\\t',w='{\n',s='[]',t="qx.lang.JsonImpl",q='Z',r='\\n',z='Object',A='{}',H='@',F='.',K='(',J='Array',M='T',L='\\r',C='{',P='JSON.parse',O=' ',N='[',B='Number',D=')',E='[\n',G='\\"',I='\\b';
qx.Class.define(t,{extend:Object,construct:function(){this.stringify=qx.lang.Function.bind(this.stringify,this);
this.parse=qx.lang.Function.bind(this.parse,this);
},members:{__bV:null,__bW:null,__bX:null,__bY:null,stringify:function(bb,bc,bd){this.__bV=p;
this.__bW=p;
this.__bY=[];

if(qx.lang.Type.isNumber(bd)){var bd=Math.min(10,Math.floor(bd));

for(var i=0;i<bd;i+=1){this.__bW+=O;
}}else if(qx.lang.Type.isString(bd)){if(bd.length>10){bd=bd.slice(0,10);
}this.__bW=bd;
}if(bc&&(qx.lang.Type.isFunction(bc)||qx.lang.Type.isArray(bc))){this.__bX=bc;
}else{this.__bX=null;
}return this.__ca(p,{'':bb});
},__ca:function(be,bf){var bi=this.__bV,bg,bj=bf[be];
if(bj&&qx.lang.Type.isFunction(bj.toJSON)){bj=bj.toJSON(be);
}else if(qx.lang.Type.isDate(bj)){bj=this.dateToJSON(bj);
}if(typeof this.__bX===e){bj=this.__bX.call(bf,be,bj);
}
if(bj===null){return h;
}
if(bj===undefined){return undefined;
}switch(qx.lang.Type.getClass(bj)){case R:return this.__cb(bj);
case B:return isFinite(bj)?String(bj):h;
case Q:return String(bj);
case J:this.__bV+=this.__bW;
bg=[];

if(this.__bY.indexOf(bj)!==-1){throw new TypeError(V);
}this.__bY.push(bj);
var length=bj.length;

for(var i=0;i<length;i+=1){bg[i]=this.__ca(i,bj)||h;
}this.__bY.pop();
if(bg.length===0){var bh=s;
}else if(this.__bV){bh=E+this.__bV+bg.join(Y+this.__bV)+b+bi+l;
}else{bh=N+bg.join(d)+l;
}this.__bV=bi;
return bh;
case z:this.__bV+=this.__bW;
bg=[];

if(this.__bY.indexOf(bj)!==-1){throw new TypeError(V);
}this.__bY.push(bj);
if(this.__bX&&typeof this.__bX===f){var length=this.__bX.length;

for(var i=0;i<length;i+=1){var k=this.__bX[i];

if(typeof k===W){var v=this.__ca(k,bj);

if(v){bg.push(this.__cb(k)+(this.__bV?g:m)+v);
}}}}else{for(var k in bj){if(Object.hasOwnProperty.call(bj,k)){var v=this.__ca(k,bj);

if(v){bg.push(this.__cb(k)+(this.__bV?g:m)+v);
}}}}this.__bY.pop();
if(bg.length===0){var bh=A;
}else if(this.__bV){bh=w+this.__bV+bg.join(Y+this.__bV)+b+bi+S;
}else{bh=C+bg.join(d)+S;
}this.__bV=bi;
return bh;
}},dateToJSON:function(bk){var bl=function(n){return n<10?U+n:n;
};
var bm=function(n){var bn=bl(n);
return n<100?U+bn:bn;
};
return isFinite(bk.valueOf())?bk.getUTCFullYear()+T+bl(bk.getUTCMonth()+1)+T+bl(bk.getUTCDate())+M+bl(bk.getUTCHours())+m+bl(bk.getUTCMinutes())+m+bl(bk.getUTCSeconds())+F+bm(bk.getUTCMilliseconds())+q:null;
},__cb:function(bo){var bp={'\b':I,'\t':u,'\n':r,'\f':y,'\r':L,'"':G,'\\':x};
var bq=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
bq.lastIndex=0;

if(bq.test(bo)){return o+bo.replace(bq,function(a){var c=bp[a];
return typeof c===W?c:ba+(X+a.charCodeAt(0).toString(16)).slice(-4);
})+o;
}else{return o+bo+o;
}},parse:function(br,bs){var bt=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
bt.lastIndex=0;
if(bt.test(br)){br=br.replace(bt,function(a){return ba+(X+a.charCodeAt(0).toString(16)).slice(-4);
});
}if(/^[\],:{}\s]*$/.test(br.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,H).replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,l).replace(/(?:^|:|,)(?:\s*\[)+/g,p))){var j=eval(K+br+D);
return typeof bs===e?this.__cc({'':j},p,bs):j;
}throw new SyntaxError(P);
},__cc:function(bu,bv,bw){var bx=bu[bv];

if(bx&&typeof bx===f){for(var k in bx){if(Object.hasOwnProperty.call(bx,k)){var v=this.__cc(bx,k,bw);

if(v!==undefined){bx[k]=v;
}else{delete bx[k];
}}}}return bw.call(bu,bv,bx);
}}});
})();
(function(){var c="qx.dom.Node",b="";
qx.Class.define(c,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(d){return d.nodeType===this.DOCUMENT?d:d.ownerDocument||d.document;
},getWindow:function(e){if(e.nodeType==null){return e;
}if(e.nodeType!==this.DOCUMENT){e=e.ownerDocument;
}return e.defaultView;
},getDocumentElement:function(f){return this.getDocument(f).documentElement;
},getBodyElement:function(g){return this.getDocument(g).body;
},isNode:function(h){return !!(h&&h.nodeType!=null);
},isElement:function(j){return !!(j&&j.nodeType===this.ELEMENT);
},isDocument:function(k){return !!(k&&k.nodeType===this.DOCUMENT);
},isText:function(l){return !!(l&&l.nodeType===this.TEXT);
},isWindow:function(m){return !!(m&&m.history&&m.location&&m.document);
},isNodeName:function(n,o){if(!o||!n||!n.nodeName){return false;
}return o.toLowerCase()==qx.dom.Node.getName(n);
},getName:function(p){if(!p||!p.nodeName){return null;
}return p.nodeName.toLowerCase();
},getText:function(q){if(!q||!q.nodeType){return null;
}
switch(q.nodeType){case 1:var i,a=[],r=q.childNodes,length=r.length;

for(i=0;i<length;i++){a[i]=this.getText(r[i]);
}return a.join(b);
case 2:case 3:case 4:return q.nodeValue;
}return null;
},isBlockNode:function(s){if(!qx.dom.Node.isElement(s)){return false;
}s=qx.dom.Node.getName(s);
return /^(body|form|textarea|fieldset|ul|ol|dl|dt|dd|li|div|hr|p|h[1-6]|quote|pre|table|thead|tbody|tfoot|tr|td|th|iframe|address|blockquote)$/.test(s);
}}});
})();
(function(){var h="on",g="engine.version",f="undefined",d="HTMLEvents",c="mousedown",b="qx.bom.Event",a="mouseover";
qx.Class.define(b,{statics:{addNativeListener:function(i,j,k,l){if(i.addEventListener){i.addEventListener(j,k,!!l);
}else if(i.attachEvent){i.attachEvent(h+j,k);
}else if(typeof i[h+j]!=f){i[h+j]=k;
}else{}},removeNativeListener:function(m,n,o,p){if(m.removeEventListener){m.removeEventListener(n,o,!!p);
}else if(m.detachEvent){try{m.detachEvent(h+n,o);
}catch(e){if(e.number!==-2146828218){throw e;
}}}else if(typeof m[h+n]!=f){m[h+n]=null;
}else{}},getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:function(e){if(e.relatedTarget!==undefined){return e.relatedTarget;
}else if(e.fromElement!==undefined&&e.type===a){return e.fromElement;
}else if(e.toElement!==undefined){return e.toElement;
}else{return null;
}},preventDefault:function(e){if(e.preventDefault){if((false)&&parseFloat(qx.core.Environment.get(g))>=1.9&&e.type==c&&e.button==2){return;
}e.preventDefault();
if((false)&&parseFloat(qx.core.Environment.get(g))<1.9){try{e.keyCode=0;
}catch(q){}}}else{try{e.keyCode=0;
}catch(r){}e.returnValue=false;
}},stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}else{e.cancelBubble=true;
}},fire:function(s,t){if(document.createEvent){var u=document.createEvent(d);
u.initEvent(t,true,true);
return !s.dispatchEvent(u);
}else{var u=document.createEventObject();
return s.fireEvent(h+t,u);
}},supportsEvent:function(v,w){return v.hasOwnProperty(h+w);
}}});
})();
(function(){var r="|bubble",q="|capture",p="|",o="",n="_",m="unload",k="__ch",j="UNKNOWN_",h="c",g="DOM_",c="__ci",f="WIN_",e="QX_",b="qx.event.Manager",a="capture",d="DOCUMENT_";
qx.Class.define(b,{extend:Object,construct:function(s,t){this.__cd=s;
this.__ce=qx.core.ObjectRegistry.toHashCode(s);
this.__cf=t;
if(s.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(s,m,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(s,m,arguments.callee);
self.dispose();
}));
}this.__cg={};
this.__ch={};
this.__ci={};
this.__cj={};
},statics:{__ck:0,getNextUniqueId:function(){return (this.__ck++)+o;
}},members:{__cf:null,__cg:null,__ci:null,__cl:null,__ch:null,__cj:null,__cd:null,__ce:null,getWindow:function(){return this.__cd;
},getWindowId:function(){return this.__ce;
},getHandler:function(u){var v=this.__ch[u.classname];

if(v){return v;
}return this.__ch[u.classname]=new u(this);
},getDispatcher:function(w){var x=this.__ci[w.classname];

if(x){return x;
}return this.__ci[w.classname]=new w(this,this.__cf);
},getListeners:function(y,z,A){var B=y.$$hash||qx.core.ObjectRegistry.toHashCode(y);
var D=this.__cg[B];

if(!D){return null;
}var E=z+(A?q:r);
var C=D[E];
return C?C.concat():null;
},getAllListeners:function(){return this.__cg;
},serializeListeners:function(F){var M=F.$$hash||qx.core.ObjectRegistry.toHashCode(F);
var O=this.__cg[M];
var K=[];

if(O){var I,N,G,J,L;

for(var H in O){I=H.indexOf(p);
N=H.substring(0,I);
G=H.charAt(I+1)==h;
J=O[H];

for(var i=0,l=J.length;i<l;i++){L=J[i];
K.push({self:L.context,handler:L.handler,type:N,capture:G});
}}}return K;
},toggleAttachedEvents:function(P,Q){var V=P.$$hash||qx.core.ObjectRegistry.toHashCode(P);
var X=this.__cg[V];

if(X){var S,W,R,T;

for(var U in X){S=U.indexOf(p);
W=U.substring(0,S);
R=U.charCodeAt(S+1)===99;
T=X[U];

if(Q){this.__cm(P,W,R);
}else{this.__cn(P,W,R);
}}}},hasListener:function(Y,ba,bb){var bc=Y.$$hash||qx.core.ObjectRegistry.toHashCode(Y);
var be=this.__cg[bc];

if(!be){return false;
}var bf=ba+(bb?q:r);
var bd=be[bf];
return !!(bd&&bd.length>0);
},importListeners:function(bg,bh){var bn=bg.$$hash||qx.core.ObjectRegistry.toHashCode(bg);
var bo=this.__cg[bn]={};
var bk=qx.event.Manager;

for(var bi in bh){var bl=bh[bi];
var bm=bl.type+(bl.capture?q:r);
var bj=bo[bm];

if(!bj){bj=bo[bm]=[];
this.__cm(bg,bl.type,bl.capture);
}bj.push({handler:bl.listener,context:bl.self,unique:bl.unique||(bk.__ck++)+o});
}},addListener:function(bp,bq,br,self,bs){var bw;
var bx=bp.$$hash||qx.core.ObjectRegistry.toHashCode(bp);
var bz=this.__cg[bx];

if(!bz){bz=this.__cg[bx]={};
}var bv=bq+(bs?q:r);
var bu=bz[bv];

if(!bu){bu=bz[bv]=[];
}if(bu.length===0){this.__cm(bp,bq,bs);
}var by=(qx.event.Manager.__ck++)+o;
var bt={handler:br,context:self,unique:by};
bu.push(bt);
return bv+p+by;
},findHandler:function(bA,bB){var bN=false,bF=false,bO=false,bC=false;
var bL;

if(bA.nodeType===1){bN=true;
bL=g+bA.tagName.toLowerCase()+n+bB;
}else if(bA.nodeType===9){bC=true;
bL=d+bB;
}else if(bA==this.__cd){bF=true;
bL=f+bB;
}else if(bA.classname){bO=true;
bL=e+bA.classname+n+bB;
}else{bL=j+bA+n+bB;
}var bH=this.__cj;

if(bH[bL]){return bH[bL];
}var bK=this.__cf.getHandlers();
var bG=qx.event.IEventHandler;
var bI,bJ,bE,bD;

for(var i=0,l=bK.length;i<l;i++){bI=bK[i];
bE=bI.SUPPORTED_TYPES;

if(bE&&!bE[bB]){continue;
}bD=bI.TARGET_CHECK;

if(bD){var bM=false;

if(bN&&((bD&bG.TARGET_DOMNODE)!=0)){bM=true;
}else if(bF&&((bD&bG.TARGET_WINDOW)!=0)){bM=true;
}else if(bO&&((bD&bG.TARGET_OBJECT)!=0)){bM=true;
}else if(bC&&((bD&bG.TARGET_DOCUMENT)!=0)){bM=true;
}
if(!bM){continue;
}}bJ=this.getHandler(bK[i]);

if(bI.IGNORE_CAN_HANDLE||bJ.canHandleEvent(bA,bB)){bH[bL]=bJ;
return bJ;
}}return null;
},__cm:function(bP,bQ,bR){var bS=this.findHandler(bP,bQ);

if(bS){bS.registerEvent(bP,bQ,bR);
return;
}},removeListener:function(bT,bU,bV,self,bW){var cb;
var cc=bT.$$hash||qx.core.ObjectRegistry.toHashCode(bT);
var cd=this.__cg[cc];

if(!cd){return false;
}var bX=bU+(bW?q:r);
var bY=cd[bX];

if(!bY){return false;
}var ca;

for(var i=0,l=bY.length;i<l;i++){ca=bY[i];

if(ca.handler===bV&&ca.context===self){qx.lang.Array.removeAt(bY,i);

if(bY.length==0){this.__cn(bT,bU,bW);
}return true;
}}return false;
},removeListenerById:function(ce,cf){var cl;
var cj=cf.split(p);
var co=cj[0];
var cg=cj[1].charCodeAt(0)==99;
var cn=cj[2];
var cm=ce.$$hash||qx.core.ObjectRegistry.toHashCode(ce);
var cp=this.__cg[cm];

if(!cp){return false;
}var ck=co+(cg?q:r);
var ci=cp[ck];

if(!ci){return false;
}var ch;

for(var i=0,l=ci.length;i<l;i++){ch=ci[i];

if(ch.unique===cn){qx.lang.Array.removeAt(ci,i);

if(ci.length==0){this.__cn(ce,co,cg);
}return true;
}}return false;
},removeAllListeners:function(cq){var cu=cq.$$hash||qx.core.ObjectRegistry.toHashCode(cq);
var cw=this.__cg[cu];

if(!cw){return false;
}var cs,cv,cr;

for(var ct in cw){if(cw[ct].length>0){cs=ct.split(p);
cv=cs[0];
cr=cs[1]===a;
this.__cn(cq,cv,cr);
}}delete this.__cg[cu];
return true;
},deleteAllListeners:function(cx){delete this.__cg[cx];
},__cn:function(cy,cz,cA){var cB=this.findHandler(cy,cz);

if(cB){cB.unregisterEvent(cy,cz,cA);
return;
}},dispatchEvent:function(cC,event){var cH;
var cI=event.getType();

if(!event.getBubbles()&&!this.hasListener(cC,cI)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(cC);
}var cG=this.__cf.getDispatchers();
var cF;
var cE=false;

for(var i=0,l=cG.length;i<l;i++){cF=this.getDispatcher(cG[i]);
if(cF.canDispatchEvent(cC,event,cI)){cF.dispatchEvent(cC,event,cI);
cE=true;
break;
}}
if(!cE){return true;
}var cD=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !cD;
},dispose:function(){this.__cf.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,k);
qx.util.DisposeUtil.disposeMap(this,c);
this.__cg=this.__cd=this.__cl=null;
this.__cf=this.__cj=null;
}}});
})();
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:4,TARGET_DOCUMENT:8},members:{canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}}});
})();
(function(){var c="qx.event.Registration";
qx.Class.define(c,{statics:{__co:{},getManager:function(d){if(d==null){d=window;
}else if(d.nodeType){d=qx.dom.Node.getWindow(d);
}else if(!qx.dom.Node.isWindow(d)){d=window;
}var f=d.$$hash||qx.core.ObjectRegistry.toHashCode(d);
var e=this.__co[f];

if(!e){e=new qx.event.Manager(d,this);
this.__co[f]=e;
}return e;
},removeManager:function(g){var h=g.getWindowId();
delete this.__co[h];
},addListener:function(i,j,k,self,l){return this.getManager(i).addListener(i,j,k,self,l);
},removeListener:function(m,n,o,self,p){return this.getManager(m).removeListener(m,n,o,self,p);
},removeListenerById:function(q,r){return this.getManager(q).removeListenerById(q,r);
},removeAllListeners:function(s){return this.getManager(s).removeAllListeners(s);
},deleteAllListeners:function(t){var u=t.$$hash;

if(u){this.getManager(t).deleteAllListeners(u);
}},hasListener:function(v,w,x){return this.getManager(v).hasListener(v,w,x);
},serializeListeners:function(y){return this.getManager(y).serializeListeners(y);
},createEvent:function(z,A,B){if(A==null){A=qx.event.type.Event;
}var C=qx.event.Pool.getInstance().getObject(A);
B?C.init.apply(C,B):C.init();
if(z){C.setType(z);
}return C;
},dispatchEvent:function(D,event){return this.getManager(D).dispatchEvent(D,event);
},fireEvent:function(E,F,G,H){var I;
var J=this.createEvent(F,G||null,H);
return this.getManager(E).dispatchEvent(E,J);
},fireNonBubblingEvent:function(K,L,M,N){var O=this.getManager(K);

if(!O.hasListener(K,L,false)){return true;
}var P=this.createEvent(L,M||null,N);
return O.dispatchEvent(K,P);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__ch:[],addHandler:function(Q){this.__ch.push(Q);
this.__ch.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__ch;
},__ci:[],addDispatcher:function(R,S){this.__ci.push(R);
this.__ci.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__ci;
}}});
})();
(function(){var a="qx.lang.RingBuffer";
qx.Class.define(a,{extend:Object,construct:function(b){this.setMaxEntries(b||50);
},members:{__cp:0,__cq:0,__cr:false,__cs:0,__ct:null,__cu:null,setMaxEntries:function(c){this.__cu=c;
this.clear();
},getMaxEntries:function(){return this.__cu;
},addEntry:function(d){this.__ct[this.__cp]=d;
this.__cp=this.__cv(this.__cp,1);
var e=this.getMaxEntries();

if(this.__cq<e){this.__cq++;
}if(this.__cr&&(this.__cs<e)){this.__cs++;
}},mark:function(){this.__cr=true;
this.__cs=0;
},clearMark:function(){this.__cr=false;
},getAllEntries:function(){return this.getEntries(this.getMaxEntries(),false);
},getEntries:function(f,g){if(f>this.__cq){f=this.__cq;
}if(g&&this.__cr&&(f>this.__cs)){f=this.__cs;
}
if(f>0){var i=this.__cv(this.__cp,-1);
var h=this.__cv(i,-f+1);
var j;

if(h<=i){j=this.__ct.slice(h,i+1);
}else{j=this.__ct.slice(h,this.__cq).concat(this.__ct.slice(0,i+1));
}}else{j=[];
}return j;
},clear:function(){this.__ct=new Array(this.getMaxEntries());
this.__cq=0;
this.__cs=0;
this.__cp=0;
},__cv:function(k,l){var m=this.getMaxEntries();
var n=(k+l)%m;
if(n<0){n+=m;
}return n;
}}});
})();
(function(){var a="qx.log.appender.RingBuffer";
qx.Class.define(a,{extend:qx.lang.RingBuffer,construct:function(b){this.setMaxMessages(b||50);
},members:{setMaxMessages:function(c){this.setMaxEntries(c);
},getMaxMessages:function(){return this.getMaxEntries();
},process:function(d){this.addEntry(d);
},getAllLogEvents:function(){return this.getAllEntries();
},retrieveLogEvents:function(e,f){return this.getEntries(e,f);
},clearHistory:function(){this.clear();
}}});
})();
(function(){var k="node",j="error",h="...(+",g="array",f=")",e="info",d="instance",c="string",b="null",a="class",H="number",G="stringify",F="]",E="date",D="unknown",C="function",B="boolean",A="debug",z="map",y="undefined",s="qx.log.Logger",t="[",q="#",r="warn",o="document",p="{...(",m="text[",n="[...(",u="\n",v=")}",x=")]",w="object";
qx.Class.define(s,{statics:{__cw:A,setLevel:function(I){this.__cw=I;
},getLevel:function(){return this.__cw;
},setTreshold:function(J){this.__cz.setMaxMessages(J);
},getTreshold:function(){return this.__cz.getMaxMessages();
},__cx:{},__cy:0,register:function(K){if(K.$$id){return;
}var M=this.__cy++;
this.__cx[M]=K;
K.$$id=M;
var L=this.__cA;
var N=this.__cz.getAllLogEvents();

for(var i=0,l=N.length;i<l;i++){if(L[N[i].level]>=L[this.__cw]){K.process(N[i]);
}}},unregister:function(O){var P=O.$$id;

if(P==null){return;
}delete this.__cx[P];
delete O.$$id;
},debug:function(Q,R){qx.log.Logger.__cB(A,arguments);
},info:function(S,T){qx.log.Logger.__cB(e,arguments);
},warn:function(U,V){qx.log.Logger.__cB(r,arguments);
},error:function(W,X){qx.log.Logger.__cB(j,arguments);
},trace:function(Y){qx.log.Logger.__cB(e,[Y,qx.dev.StackTrace.getStackTrace().join(u)]);
},deprecatedMethodWarning:function(ba,bb){var bc;
},deprecatedClassWarning:function(bd,be){var bf;
},deprecatedEventWarning:function(bg,event,bh){var bi;
},deprecatedMixinWarning:function(bj,bk){var bl;
},deprecatedConstantWarning:function(bm,bn,bo){var self,bp;
},deprecateMethodOverriding:function(bq,br,bs,bt){var bu;
},clear:function(){this.__cz.clearHistory();
},__cz:new qx.log.appender.RingBuffer(50),__cA:{debug:0,info:1,warn:2,error:3},__cB:function(bv,bw){var bB=this.__cA;

if(bB[bv]<bB[this.__cw]){return;
}var by=bw.length<2?null:bw[0];
var bA=by?1:0;
var bx=[];

for(var i=bA,l=bw.length;i<l;i++){bx.push(this.__cD(bw[i],true));
}var bC=new Date;
var bD={time:bC,offset:bC-qx.Bootstrap.LOADSTART,level:bv,items:bx,win:window};
if(by){if(by.$$hash!==undefined){bD.object=by.$$hash;
}else if(by.$$type){bD.clazz=by;
}}this.__cz.process(bD);
var bE=this.__cx;

for(var bz in bE){bE[bz].process(bD);
}},__cC:function(bF){if(bF===undefined){return y;
}else if(bF===null){return b;
}
if(bF.$$type){return a;
}var bG=typeof bF;

if(bG===C||bG==c||bG===H||bG===B){return bG;
}else if(bG===w){if(bF.nodeType){return k;
}else if(bF.classname){return d;
}else if(bF instanceof Array){return g;
}else if(bF instanceof Error){return j;
}else if(bF instanceof Date){return E;
}else{return z;
}}
if(bF.toString){return G;
}return D;
},__cD:function(bH,bI){var bP=this.__cC(bH);
var bL=D;
var bK=[];

switch(bP){case b:case y:bL=bP;
break;
case c:case H:case B:case E:bL=bH;
break;
case k:if(bH.nodeType===9){bL=o;
}else if(bH.nodeType===3){bL=m+bH.nodeValue+F;
}else if(bH.nodeType===1){bL=bH.nodeName.toLowerCase();

if(bH.id){bL+=q+bH.id;
}}else{bL=k;
}break;
case C:bL=qx.lang.Function.getName(bH)||bP;
break;
case d:bL=bH.basename+t+bH.$$hash+F;
break;
case a:case G:bL=bH.toString();
break;
case j:bK=qx.dev.StackTrace.getStackTraceFromError(bH);
bL=bH.toString();
break;
case g:if(bI){bL=[];

for(var i=0,l=bH.length;i<l;i++){if(bL.length>20){bL.push(h+(l-i)+f);
break;
}bL.push(this.__cD(bH[i],false));
}}else{bL=n+bH.length+x;
}break;
case z:if(bI){var bJ;
var bO=[];

for(var bN in bH){bO.push(bN);
}bO.sort();
bL=[];

for(var i=0,l=bO.length;i<l;i++){if(bL.length>20){bL.push(h+(l-i)+f);
break;
}bN=bO[i];
bJ=this.__cD(bH[bN],false);
bJ.key=bN;
bL.push(bJ);
}}else{var bM=0;

for(var bN in bH){bM++;
}bL=p+bM+v;
}break;
}return {type:bP,text:bL,trace:bK};
}},defer:function(bQ){var bR=qx.Bootstrap.$$logs;

for(var i=0;i<bR.length;i++){bQ.__cB(bR[i][0],bR[i][1]);
}qx.Bootstrap.debug=bQ.debug;
qx.Bootstrap.info=bQ.info;
qx.Bootstrap.warn=bQ.warn;
qx.Bootstrap.error=bQ.error;
qx.Bootstrap.trace=bQ.trace;
}});
})();
(function(){var q="set",p="get",o="reset",n="MSIE 6.0",m="info",k="qx.core.Object",j="error",h="warn",g="]",f="debug",b="[",d="$$user_",c="rv:1.8.1",a="Object";
qx.Class.define(k,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:a},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+b+this.$$hash+g;
},base:function(r,s){if(arguments.length===1){return r.callee.base.call(this);
}else{return r.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(t){return t.callee.self;
},clone:function(){var v=this.constructor;
var u=new v;
var x=qx.Class.getProperties(v);
var w=qx.core.Property.$$store.user;
var y=qx.core.Property.$$method.set;
var name;
for(var i=0,l=x.length;i<l;i++){name=x[i];

if(this.hasOwnProperty(w[name])){u[y[name]](this[w[name]]);
}}return u;
},set:function(z,A){var C=qx.core.Property.$$method.set;

if(qx.Bootstrap.isString(z)){if(!this[C[z]]){if(this[q+qx.Bootstrap.firstUp(z)]!=undefined){this[q+qx.Bootstrap.firstUp(z)](A);
return this;
}}return this[C[z]](A);
}else{for(var B in z){if(!this[C[B]]){if(this[q+qx.Bootstrap.firstUp(B)]!=undefined){this[q+qx.Bootstrap.firstUp(B)](z[B]);
continue;
}}this[C[B]](z[B]);
}return this;
}},get:function(D){var E=qx.core.Property.$$method.get;

if(!this[E[D]]){if(this[p+qx.Bootstrap.firstUp(D)]!=undefined){return this[p+qx.Bootstrap.firstUp(D)]();
}}return this[E[D]]();
},reset:function(F){var G=qx.core.Property.$$method.reset;

if(!this[G[F]]){if(this[o+qx.Bootstrap.firstUp(F)]!=undefined){this[o+qx.Bootstrap.firstUp(F)]();
return;
}}this[G[F]]();
},__cE:qx.event.Registration,addListener:function(H,I,self,J){if(!this.$$disposed){return this.__cE.addListener(this,H,I,self,J);
}return null;
},addListenerOnce:function(K,L,self,M){var N=function(e){this.removeListener(K,N,this,M);
L.call(self||this,e);
};
return this.addListener(K,N,this,M);
},removeListener:function(O,P,self,Q){if(!this.$$disposed){return this.__cE.removeListener(this,O,P,self,Q);
}return false;
},removeListenerById:function(R){if(!this.$$disposed){return this.__cE.removeListenerById(this,R);
}return false;
},hasListener:function(S,T){return this.__cE.hasListener(this,S,T);
},dispatchEvent:function(U){if(!this.$$disposed){return this.__cE.dispatchEvent(this,U);
}return true;
},fireEvent:function(V,W,X){if(!this.$$disposed){return this.__cE.fireEvent(this,V,W,X);
}return true;
},fireNonBubblingEvent:function(Y,ba,bb){if(!this.$$disposed){return this.__cE.fireNonBubblingEvent(this,Y,ba,bb);
}return true;
},fireDataEvent:function(bc,bd,be,bf){if(!this.$$disposed){if(be===undefined){be=null;
}return this.__cE.fireNonBubblingEvent(this,bc,qx.event.type.Data,[bd,be,!!bf]);
}return true;
},__cF:null,setUserData:function(bg,bh){if(!this.__cF){this.__cF={};
}this.__cF[bg]=bh;
},getUserData:function(bi){if(!this.__cF){return null;
}var bj=this.__cF[bi];
return bj===undefined?null:bj;
},__cG:qx.log.Logger,debug:function(bk){this.__cH(f,arguments);
},info:function(bl){this.__cH(m,arguments);
},warn:function(bm){this.__cH(h,arguments);
},error:function(bn){this.__cH(j,arguments);
},trace:function(){this.__cG.trace(this);
},__cH:function(bo,bp){var bq=qx.lang.Array.fromArguments(bp);
bq.unshift(this);
this.__cG[bo].apply(this.__cG,bq);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){var bv,bt,bs,bw;
if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
var bu=this.constructor;
var br;

while(bu.superclass){if(bu.$$destructor){bu.$$destructor.call(this);
}if(bu.$$includes){br=bu.$$flatIncludes;

for(var i=0,l=br.length;i<l;i++){if(br[i].$$destructor){br[i].$$destructor.call(this);
}}}bu=bu.superclass;
}if(this.__cI){this.__cI();
}},__cI:null,__cJ:function(){var bx=qx.Class.getProperties(this.constructor);

for(var i=0,l=bx.length;i<l;i++){delete this[d+bx[i]];
}},_disposeObjects:function(by){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeSingletonObjects:function(bz){qx.util.DisposeUtil.disposeObjects(this,arguments,true);
},_disposeArray:function(bA){qx.util.DisposeUtil.disposeArray(this,bA);
},_disposeMap:function(bB){qx.util.DisposeUtil.disposeMap(this,bB);
}},environment:{"qx.disposerDebugLevel":0},defer:function(bC,bD){var bF=navigator.userAgent.indexOf(n)!=-1;
var bE=navigator.userAgent.indexOf(c)!=-1;
if(bF||bE){bD.__cI=bD.__cJ;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.event.Registration.removeAllListeners(this);
}else{qx.event.Registration.deleteAllListeners(this);
}qx.core.ObjectRegistry.unregister(this);
this.__cF=null;
var bI=this.constructor;
var bM;
var bN=qx.core.Property.$$store;
var bK=bN.user;
var bL=bN.theme;
var bG=bN.inherit;
var bJ=bN.useinit;
var bH=bN.init;

while(bI){bM=bI.$$properties;

if(bM){for(var name in bM){if(bM[name].dereference){this[bK[name]]=this[bL[name]]=this[bG[name]]=this[bJ[name]]=this[bH[name]]=undefined;
}}}bI=bI.superclass;
}}});
})();
(function(){var a="qx.event.IEventDispatcher";
qx.Interface.define(a,{members:{canDispatchEvent:function(b,event,c){this.assertInstance(event,qx.event.type.Event);
this.assertString(c);
},dispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
}}});
})();
(function(){var a="qx.event.type.Event";
qx.Class.define(a,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(b,c){this._type=null;
this._target=null;
this._currentTarget=null;
this._relatedTarget=null;
this._originalTarget=null;
this._stopPropagation=false;
this._preventDefault=false;
this._bubbles=!!b;
this._cancelable=!!c;
this._timeStamp=(new Date()).getTime();
this._eventPhase=null;
return this;
},clone:function(d){if(d){var e=d;
}else{var e=qx.event.Pool.getInstance().getObject(this.constructor);
}e._type=this._type;
e._target=this._target;
e._currentTarget=this._currentTarget;
e._relatedTarget=this._relatedTarget;
e._originalTarget=this._originalTarget;
e._stopPropagation=this._stopPropagation;
e._bubbles=this._bubbles;
e._preventDefault=this._preventDefault;
e._cancelable=this._cancelable;
return e;
},stop:function(){if(this._bubbles){this.stopPropagation();
}
if(this._cancelable){this.preventDefault();
}},stopPropagation:function(){this._stopPropagation=true;
},getPropagationStopped:function(){return !!this._stopPropagation;
},preventDefault:function(){this._preventDefault=true;
},getDefaultPrevented:function(){return !!this._preventDefault;
},getType:function(){return this._type;
},setType:function(f){this._type=f;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(g){this._eventPhase=g;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(h){this._target=h;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(i){this._currentTarget=i;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(j){this._relatedTarget=j;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(k){this._originalTarget=k;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(l){this._bubbles=l;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(m){this._cancelable=m;
}},destruct:function(){this._target=this._currentTarget=this._relatedTarget=this._originalTarget=null;
}});
})();
(function(){var b="qx.util.ObjectPool",a="Integer";
qx.Class.define(b,{extend:qx.core.Object,construct:function(c){qx.core.Object.call(this);
this.__cK={};

if(c!=null){this.setSize(c);
}},properties:{size:{check:a,init:Infinity}},members:{__cK:null,getObject:function(d){if(this.$$disposed){return new d;
}
if(!d){throw new Error("Class needs to be defined!");
}var e=null;
var f=this.__cK[d.classname];

if(f){e=f.pop();
}
if(e){e.$$pooled=false;
}else{e=new d;
}return e;
},poolObject:function(g){if(!this.__cK){return;
}var h=g.classname;
var j=this.__cK[h];

if(g.$$pooled){throw new Error("Object is already pooled: "+g);
}
if(!j){this.__cK[h]=j=[];
}if(j.length>this.getSize()){if(g.destroy){g.destroy();
}else{g.dispose();
}return;
}g.$$pooled=true;
j.push(g);
}},destruct:function(){var n=this.__cK;
var k,m,i,l;

for(k in n){m=n[k];

for(i=0,l=m.length;i<l;i++){m[i].dispose();
}}delete this.__cK;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){qx.util.ObjectPool.call(this,30);
}});
})();
(function(){var a="qx.event.dispatch.Direct";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(b){this._manager=b;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(c,event,d){return !event.getBubbles();
},dispatchEvent:function(e,event,f){var j,g;
event.setEventPhase(qx.event.type.Event.AT_TARGET);
var k=this._manager.getListeners(e,f,false);

if(k){for(var i=0,l=k.length;i<l;i++){var h=k[i].context||e;
k[i].handler.call(h,event);
}}}},defer:function(m){qx.event.Registration.addDispatcher(m);
}});
})();
(function(){var a="qx.lang.Json";
qx.Class.define(a,{statics:{JSON:(qx.lang.Type.getClass(window.JSON)=="JSON"&&JSON.parse('{"x":1}').x===1&&JSON.stringify({"prop":"val"},function(k,v){return k==="prop"?"repl":v;
}).indexOf("repl")>0)?window.JSON:new qx.lang.JsonImpl(),stringify:null,parse:null},defer:function(b){b.stringify=b.JSON.stringify;
b.parse=b.JSON.parse;
}});
})();
(function(){var a="qx.event.handler.Object";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(b,c){return qx.Class.supportsEvent(b.constructor,c);
},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var a="qx.event.type.Data";
qx.Class.define(a,{extend:qx.event.type.Event,members:{__cL:null,__cM:null,init:function(b,c,d){qx.event.type.Event.prototype.init.call(this,false,d);
this.__cL=b;
this.__cM=c;
return this;
},clone:function(e){var f=qx.event.type.Event.prototype.clone.call(this,e);
f.__cL=this.__cL;
f.__cM=this.__cM;
return f;
},getData:function(){return this.__cL;
},getOldData:function(){return this.__cM;
}},destruct:function(){this.__cL=this.__cM=null;
}});
})();
(function(){var a="qx.util.DisposeUtil";
qx.Class.define(a,{statics:{disposeObjects:function(b,c,d){var name;

for(var i=0,l=c.length;i<l;i++){name=c[i];

if(b[name]==null||!b.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(b[name].dispose){if(!d&&b[name].constructor.$$instance){throw new Error("The object stored in key "+name+" is a singleton! Please use disposeSingleton instead.");
}else{b[name].dispose();
}}else{throw new Error("Has no disposable object under key: "+name+"!");
}}b[name]=null;
}},disposeArray:function(e,f){var h=e[f];

if(!h){return;
}if(qx.core.ObjectRegistry.inShutDown){e[f]=null;
return;
}try{var g;

for(var i=h.length-1;i>=0;i--){g=h[i];

if(g){g.dispose();
}}}catch(j){throw new Error("The array field: "+f+" of object: "+e+" has non disposable entries: "+j);
}h.length=0;
e[f]=null;
},disposeMap:function(k,m){var o=k[m];

if(!o){return;
}if(qx.core.ObjectRegistry.inShutDown){k[m]=null;
return;
}try{var n;

for(var p in o){n=o[p];

if(o.hasOwnProperty(p)&&n){n.dispose();
}}}catch(q){throw new Error("The map field: "+m+" of object: "+k+" has non disposable entries: "+q);
}k[m]=null;
},disposeTriggeredBy:function(r,s){var t=s.dispose;
s.dispose=function(){t.call(s);
r.dispose();
};
}}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,{members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var a="qx.locale.MTranslation";
qx.Mixin.define(a,{members:{tr:function(b,c){var d=qx.locale.Manager;

if(d){return d.tr.apply(d,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trn:function(e,f,g,h){var i=qx.locale.Manager;

if(i){return i.trn.apply(i,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trc:function(j,k,l){var m=qx.locale.Manager;

if(m){return m.trc.apply(m,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},marktr:function(n){var o=qx.locale.Manager;

if(o){return o.marktr.apply(o,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
}}});
})();
(function(){var a="qx.application.Mobile";
qx.Class.define(a,{extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,construct:function(){qx.core.Object.call(this);
},members:{__cN:null,main:function(){this.__cN=this._createRootWidget();
{this.__cN.setShowScrollbarY(false);
};
},getRoot:function(){return this.__cN;
},_createRootWidget:function(){return new qx.ui.mobile.core.Root();
},finalize:function(){},close:function(){},terminate:function(){}},destruct:function(){this.__cN=null;
}});
})();
(function(){var a="qx.ui.mobile.core.MChildrenHandling";
qx.Mixin.define(a,{members:{getChildren:function(){return this._getChildren();
},hasChildren:function(){return this._hasChildren();
},indexOf:function(b){return this._indexOf(b);
},add:function(c,d){this._add(c,d);
},addBefore:function(e,f,g){this._addBefore(e,f,g);
},addAfter:function(h,i,j){this._addAfter(h,i,j);
},remove:function(k){this._remove(k);
},removeAt:function(l){return this._removeAt(l);
},removeAll:function(){this._removeAll();
}},statics:{remap:function(m){m.getChildren=m._getChildren;
m.hasChildren=m._hasChildren;
m.indexOf=m._indexOf;
m.add=m._add;
m.addBefore=m._addBefore;
m.addAfter=m._addAfter;
m.remove=m._remove;
m.removeAt=m._removeAt;
m.removeAll=m._removeAll;
}}});
})();
(function(){var k="ready",j="webkit",i="load",h="unload",g="shutdown",f="qx.event.handler.Application",d="complete",c="gecko",b="opera",a="DOMContentLoaded";
qx.Class.define(f,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(l){qx.core.Object.call(this);
this._window=l.getWindow();
this.__cO=false;
this.__cP=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,onScriptLoaded:function(){var m=qx.event.handler.Application.$$instance;

if(m){m.__cS();
}}},members:{canHandleEvent:function(n,o){},registerEvent:function(p,q,r){},unregisterEvent:function(s,t,u){},__cQ:null,__cO:null,__cP:null,__cR:null,__cS:function(){if(!this.__cQ&&this.__cO&&qx.$$loader.scriptLoaded){{this.__cQ=true;
qx.event.Registration.fireEvent(this._window,k);
};
}},isApplicationReady:function(){return this.__cQ;
},_initObserver:function(){if(qx.$$domReady||document.readyState==d||document.readyState==k){this.__cO=true;
this.__cS();
}else{var self,v;
this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(j==c||j==b||true){qx.bom.Event.addNativeListener(this._window,a,this._onNativeLoadWrapped);
}else{}qx.bom.Event.addNativeListener(this._window,i,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,h,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,i,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,h,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__cO=true;
this.__cS();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__cR){this.__cR=true;

try{qx.event.Registration.fireEvent(this._window,g);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(w){qx.event.Registration.addHandler(w);
}});
})();
(function(){var c="ready",b="qx.bom.Lifecycle",a="shutdown";
qx.Class.define(b,{statics:{onReady:function(d,e){var g=qx.event.Registration;
var f=g.getManager(window).getHandler(qx.event.handler.Application);
if(f&&f.isApplicationReady()){d.call(e);
}else{g.addListener(window,c,d,e);
}},onShutdown:function(h,i){qx.event.Registration.addListener(window,a,h,i);
}}});
})();
(function(){var k="qx.event.type.Mouse",j="visible",h="qx.event.type.Focus",g="qx.event.type.Touch",f="excluded",e="hidden",d="qx.event.type.KeySequence",c="String",b="qx.event.type.Event",a="visibility",C="display",B="_applyAttribute",A="Boolean",z="div",y="changeId",x="qx.event.type.KeyInput",w="_transformId",v="qx.event.type.MouseWheel",u="_applyDefaultCssClass",t="_applyId",r="",s="changeVisibility",p="undefined",q="none",n="qx.ui.mobile.core.Widget",o="_applyStyle",m="_applyVisibility";
qx.Class.define(n,{extend:qx.core.Object,include:[qx.locale.MTranslation],construct:function(){qx.core.Object.call(this);
this._setContainerElement(this._createContainerElement());
this.__cT=[];
this.setId(this.getId());
this.initDefaultCssClass();
this.initName();
this.initAnonymous();
},events:{mousemove:k,mouseover:k,mouseout:k,mousedown:k,mouseup:k,click:k,dblclick:k,contextmenu:k,beforeContextmenuOpen:k,mousewheel:v,touchstart:g,touchend:g,touchmove:g,touchcancel:g,tap:g,swipe:g,keyup:d,keydown:d,keypress:d,keyinput:x,domupdated:b,appear:b,disappear:b,focus:h,blur:h,focusin:h,focusout:h,activate:h,deactivate:h},properties:{defaultCssClass:{check:c,init:null,nullable:true,apply:u},name:{check:c,init:null,nullable:true,apply:B},anonymous:{check:A,init:null,nullable:true,apply:o},id:{check:c,init:null,nullable:true,apply:t,transform:w,event:y},visibility:{check:[j,e,f],init:j,apply:m,event:s}},statics:{ID_PREFIX:"qx_id_",__v:{},__cU:0,__cV:null,onShutdown:function(){window.clearTimeout(qx.ui.mobile.core.Widget.__cV);
delete qx.ui.mobile.core.Widget.__v;
},getCurrentId:function(){return qx.ui.mobile.core.Widget.__cU;
},registerWidget:function(D){var E=D.getId();
var F=qx.ui.mobile.core.Widget.__v;
F[E]=D;
},unregisterWidget:function(G){delete qx.ui.mobile.core.Widget.__v[G];
},getWidgetById:function(H){return qx.ui.mobile.core.Widget.__v[H];
},scheduleDomUpdated:function(){if(qx.ui.mobile.core.Widget.__cV==null){qx.ui.mobile.core.Widget.__cV=window.setTimeout(qx.ui.mobile.core.Widget.domUpdated,0);
}},domUpdated:qx.event.GlobalError.observeMethod(function(){var I=qx.ui.mobile.core.Widget;
window.clearTimeout(I.__cV);
I.__cV=null;
qx.event.handler.Appear.refresh();
qx.ui.mobile.core.DomUpdatedHandler.refresh();
}),addAttributeMapping:function(J,K,L){var M;
qx.ui.mobile.core.Widget.ATTRIBUTE_MAPPING[J]={attribute:K,values:L};
},addStyleMapping:function(N,O,P){var Q;
qx.ui.mobile.core.Widget.STYLE_MAPPING[N]={style:O,values:P};
},ATTRIBUTE_MAPPING:{"selectable":{attribute:"data-selectable",values:{"true":null,"false":"false"}},"readOnly":{attribute:"readonly"}},STYLE_MAPPING:{"anonymous":{style:"pointer-events",values:{"true":"none","false":null}}}},members:{__cW:null,__cX:null,__cY:null,__cT:null,__da:null,_getTagName:function(){return z;
},_createContainerElement:function(){return qx.bom.Element.create(this._getTagName());
},_domUpdated:function(){qx.ui.mobile.core.Widget.scheduleDomUpdated();
},_transformId:function(R){if(R==null){var S=qx.ui.mobile.core.Widget;
R=S.ID_PREFIX+S.__cU++;
}return R;
},_applyId:function(T,U){if(U!=null){qx.ui.mobile.core.Widget.unregisterWidget(U);
}var V=this.getContainerElement();
V.id=T;
qx.ui.mobile.core.Widget.registerWidget(this);
},_add:function(W,X){W.setLayoutParent(this);
W.setLayoutProperties(X);
this.getContentElement().appendChild(W.getContainerElement());
this.__cT.push(W);
this._domUpdated();
},_addBefore:function(Y,ba,bb){if(Y==ba){return;
}Y.setLayoutParent(this);
Y.setLayoutProperties(bb);
this.getContentElement().insertBefore(Y.getContainerElement(),ba.getContainerElement());
qx.lang.Array.insertBefore(this.__cT,Y,ba);
this._domUpdated();
},_addAfter:function(bc,bd,be){if(bc==bd){return;
}bc.setLayoutParent(this);
bc.setLayoutProperties(be);
var length=this._getChildren().length;
var bf=this._indexOf(bd);

if(bf==length-1){this.getContentElement().appendChild(bc.getContainerElement());
}else{var bg=this._getChildren()[bf+1];
this.getContentElement().insertBefore(bc.getContainerElement(),bg.getContainerElement());
}qx.lang.Array.insertAfter(this.__cT,bc,bd);
this._domUpdated();
},_remove:function(bh){bh.setLayoutParent(null);
this._domUpdated();
},_removeAt:function(bi){if(!this.__cT){throw new Error("This widget has no children!");
}var bj=this.__cT[bi];
this._remove(bj);
},_removeAll:function(){var bk=this.__cT.concat();

for(var i=0,l=bk.length;i<l;i++){this._remove(bk[i]);
}},_indexOf:function(bl){var bm=this.__cT;

if(!bm){return -1;
}return bm.indexOf(bl);
},setLayoutParent:function(parent){if(this.__cY===parent){return;
}var bn=this.__cY;

if(bn&&!bn.$$disposed){this.__cY.removeChild(this);
}this.__cY=parent||null;
},removeChild:function(bo){qx.lang.Array.remove(this.__cT,bo);
this.getContentElement().removeChild(bo.getContainerElement());
},getLayoutParent:function(){return this.__cY;
},_getChildren:function(){return this.__cT;
},_hasChildren:function(){return this.__cT&&this.__cT.length>0;
},_setLayout:function(bp){if(this.__da){this.__da.connectToWidget(null);
}
if(bp){bp.connectToWidget(this);
}this.__da=bp;
},_getLayout:function(){return this.__da;
},setLayoutProperties:function(bq){if(bq==null){return;
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(this,bq);
}},updateLayoutProperties:function(br,bs){var bt=this._getLayout();

if(bt){bt.setLayoutProperties(br,bs);
}},_setHtml:function(bu){this.getContentElement().innerHTML=bu||r;
this._domUpdated();
},_applyAttribute:function(bv,bw,bx){this._setAttribute(bx,bv);
},_setAttribute:function(by,bz){var bB=qx.ui.mobile.core.Widget.ATTRIBUTE_MAPPING[by];

if(bB){by=bB.attribute||by;
var bA=bB.values;
bz=bA&&typeof bA[bz]!==p?bA[bz]:bz;
}var bC=this.getContainerElement();

if(bz!=null){qx.bom.element.Attribute.set(bC,by,bz);
}else{qx.bom.element.Attribute.reset(bC,by);
}this._domUpdated();
},_getAttribute:function(bD){var bE=this.getContainerElement();
return qx.bom.element.Attribute.get(bE,bD);
},_applyStyle:function(bF,bG,bH){this._setStyle(bH,bF);
},_setStyle:function(bI,bJ){var bK=qx.ui.mobile.core.Widget.STYLE_MAPPING[bI];

if(bK){bI=bK.style||bI;
bJ=bK.values[bJ];
}var bL=this.getContainerElement();

if(bJ!=null){qx.bom.element.Style.set(bL,bI,bJ);
}else{qx.bom.element.Style.reset(bL,bI);
}this._domUpdated();
},_getStyle:function(bM){var bN=this.getContainerElement();
return qx.bom.element.Style.get(bN,bM);
},_applyDefaultCssClass:function(bO,bP){if(bP){this.removeCssClass(bP);
}
if(bO){this.addCssClass(bO);
}},addCssClass:function(bQ){var bR=this.getContainerElement();
qx.bom.element.Class.add(bR,bQ);
this._domUpdated();
},removeCssClass:function(bS){var bT=this.getContainerElement();
qx.bom.element.Class.remove(bT,bS);
this._domUpdated();
},_applyVisibility:function(bU,bV){if(bU==f){this._setStyle(C,q);
}else if(bU==j){this._setStyle(C,null);
this._setStyle(a,null);
}else if(bU==e){this._setStyle(a,e);
}},show:function(){this.setVisibility(j);
},hide:function(){this.setVisibility(e);
},exclude:function(){this.setVisibility(f);
},isVisible:function(){return this.getVisibility()===j;
},isHidden:function(){return this.getVisibility()!==j;
},isExcluded:function(){return this.getVisibility()===f;
},isSeeable:function(){return this.getContainerElement().offsetWidth>0;
},_setContainerElement:function(bW){this.__cW=bW;
},getContainerElement:function(){return this.__cW;
},getContentElement:function(){if(!this.__cX){this.__cX=this._getContentElement();
}return this.__cX;
},_getContentElement:function(){return this.getContainerElement();
},destroy:function(){if(this.$$disposed){return;
}var parent=this.__cY;

if(parent){parent._remove(this);
}this.dispose();
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.event.Registration.removeAllListeners(this);

if(this.getId()){qx.ui.mobile.core.Widget.unregisterWidget(this.getId());
}}this.__cY=this.__cW=this.__cX=null;
this.__da=null;
},defer:function(bX){qx.bom.Lifecycle.onShutdown(bX.onShutdown,bX);
}});
})();
(function(){var h="active",g="touchmove",f="qx.ui.mobile.core.EventHandler",e="touchend",d="touchcancel",c="data-selectable",b="touchstart",a="false";
qx.Class.define(f,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this.__db=qx.event.Registration.getManager(window);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,resize:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1,touchstart:1,touchend:1,touchmove:1,touchcancel:1,tap:1,swipe:1},IGNORE_CAN_HANDLE:false,__dc:null,__dd:null,__de:null,__df:null,__dg:function(j){var k=qx.ui.mobile.core.EventHandler;
k.__dd=qx.bom.Viewport.getScrollLeft();
k.__de=qx.bom.Viewport.getScrollTop();
k.__dk();
k.__dc=j.getTarget();
k.__dh=window.setTimeout(function(){k.__dh=null;
var m=k.__dc;

if(m&&(qx.bom.element.Attribute.get(m,c)!=a)){qx.bom.element.Class.add(m,h);
}},100);
},__di:function(n){qx.ui.mobile.core.EventHandler.__dl();
},__dj:function(o){var p=qx.ui.mobile.core.EventHandler;

if(p.__dc&&(p.__dd!=qx.bom.Viewport.getScrollLeft()||p.__de!=qx.bom.Viewport.getScrollTop())){p.__dl();
}},__dk:function(){var q=qx.ui.mobile.core.EventHandler;

if(q.__dh){window.clearTimeout(q.__dh);
q.__dh=null;
}},__dl:function(){var r=qx.ui.mobile.core.EventHandler;
r.__dk();
var s=r.__dc;

if(s){qx.bom.element.Class.remove(s,h);
}r.__dc=null;
}},members:{__db:null,canHandleEvent:function(t,u){return t instanceof qx.ui.mobile.core.Widget;
},registerEvent:function(v,w,x){var y=v.getContainerElement();
qx.event.Registration.addListener(y,w,this._dispatchEvent,this,x);
},unregisterEvent:function(z,A,B){var C=z.getContainerElement();
qx.event.Registration.removeListener(C,A,this._dispatchEvent,this,B);
},_dispatchEvent:function(D){var I=D.getTarget();

if(!I||I.id==null){return;
}var H=qx.ui.mobile.core.Widget.getWidgetById(I.id);
if(D.getRelatedTarget){var P=D.getRelatedTarget();

if(P&&P.id){var O=qx.ui.mobile.core.Widget.getWidgetById(P.id);
}}var K=D.getCurrentTarget();
var M=qx.ui.mobile.core.Widget.getWidgetById(K.id);

if(!M){return;
}var E=D.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var N=D.getType();
var J=this.__db.getListeners(M,N,E);

if(!J||J.length===0){return;
}var F=qx.event.Pool.getInstance().getObject(D.constructor);
D.clone(F);
F.setTarget(H);
F.setRelatedTarget(O||null);
F.setCurrentTarget(M);
var Q=D.getOriginalTarget();

if(Q&&Q.id){var G=qx.ui.mobile.core.Widget.getWidgetById(Q.id);
F.setOriginalTarget(G);
}else{F.setOriginalTarget(I);
}for(var i=0,l=J.length;i<l;i++){var L=J[i].context||M;
J[i].handler.call(L,F);
}if(F.getPropagationStopped()){D.stopPropagation();
}
if(F.getDefaultPrevented()){D.preventDefault();
}qx.event.Pool.getInstance().poolObject(F);
}},destruct:function(){this.__db=null;
},defer:function(R){qx.event.Registration.addHandler(R);
qx.event.Registration.addListener(document,b,R.__dg);
qx.event.Registration.addListener(document,e,R.__di);
qx.event.Registration.addListener(document,d,R.__di);
qx.event.Registration.addListener(document,g,R.__dj);
}});
})();
(function(){var e="CSS1Compat",d="qx.bom.Document",c="1px",b="position:absolute;width:0;height:0;width:1",a="div";
qx.Class.define(d,{statics:{isQuirksMode:function(f){if(document.compatMode===undefined){var g=(f||window).document.createElement(a);
g.style.cssText=b;
return g.style.width===c?true:false;
}else{return (f||window).document.compatMode!==e;
}},isStandardMode:function(h){return !this.isQuirksMode(h);
},getWidth:function(i){var j=(i||window).document;
var k=qx.bom.Viewport.getWidth(i);
var scroll=this.isStandardMode(i)?j.documentElement.scrollWidth:j.body.scrollWidth;
return Math.max(scroll,k);
},getHeight:function(l){var m=(l||window).document;
var n=qx.bom.Viewport.getHeight(l);
var scroll=this.isStandardMode(l)?m.documentElement.scrollHeight:m.body.scrollHeight;
return Math.max(scroll,n);
}}});
})();
(function(){var b="engine.version",a="qx.bom.Viewport";
qx.Class.define(a,{statics:{getWidth:function(c){if(parseFloat(qx.core.Environment.get(b))<523.15){return (c||window).innerWidth;
}else{var d=(c||window).document;
return qx.bom.Document.isStandardMode(c)?d.documentElement.clientWidth:d.body.clientWidth;
}},getHeight:function(e){if(parseFloat(qx.core.Environment.get(b))<523.15){return (e||window).innerHeight;
}else{var f=(e||window).document;
return qx.bom.Document.isStandardMode(e)?f.documentElement.clientHeight:f.body.clientHeight;
}},getScrollLeft:function(g){return (g||window).pageXOffset;
},getScrollTop:function(h){return (h||window).pageYOffset;
},__dm:function(){var i=this.getWidth()>this.getHeight()?90:0;
var j=window.orientation;

if(j==null||Math.abs(j%180)==i){return {"-270":90,"-180":180,"-90":-90,"0":0,"90":90,"180":180,"270":-90};
}else{return {"-270":180,"-180":-90,"-90":0,"0":90,"90":180,"180":-90,"270":0};
}},__dn:null,getOrientation:function(k){var l=(k||window).orientation;

if(l==null){l=this.getWidth(k)>this.getHeight(k)?90:0;
}else{l=this.__dn[l];
}return l;
},isLandscape:function(m){return Math.abs(this.getOrientation(m))==90;
},isPortrait:function(n){return Math.abs(this.getOrientation(n))!==90;
}},defer:function(o){o.__dn=o.__dm();
}});
})();
(function(){var j="",i="undefined",h="readOnly",g="accessKey",f="qx.bom.element.Attribute",e="rowSpan",d="vAlign",c="className",b="textContent",a="'",v="htmlFor",u="longDesc",t="cellSpacing",s="frameBorder",r="='",q="useMap",p="innerHTML",o="tabIndex",n="dateTime",m="maxLength",k="cellPadding",l="colSpan";
qx.Class.define(f,{statics:{__do:{names:{"class":c,"for":v,html:p,text:b,colspan:l,rowspan:e,valign:d,datetime:n,accesskey:g,tabindex:o,maxlength:m,readonly:h,longdesc:u,cellpadding:k,cellspacing:t,frameborder:s,usemap:q},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readOnly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},qxProperties:{$$widget:1,$$html:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:j,className:j,innerHTML:j,innerText:j,textContent:j,htmlFor:j,tabIndex:0,maxLength:524288},removeableProperties:{disabled:1,multiple:1,maxLength:1},original:{href:1,src:1,type:1}},compile:function(w){var x=[];
var z=this.__do.runtime;

for(var y in w){if(!z[y]){x.push(y,r,w[y],a);
}}return x.join(j);
},get:function(A,name){var C=this.__do;
var B;
name=C.names[name]||name;
if(C.property[name]){B=A[name];

if(typeof C.propertyDefault[name]!==i&&B==C.propertyDefault[name]){if(typeof C.bools[name]===i){return null;
}else{return B;
}}}else{B=A.getAttribute(name);
}if(C.bools[name]){return !!B;
}return B;
},set:function(D,name,E){if(typeof E===i){return;
}var F=this.__do;
name=F.names[name]||name;
if(F.bools[name]){E=!!E;
}if(F.property[name]&&(!(D[name]===undefined)||F.qxProperties[name])){if(E==null){if(F.removeableProperties[name]){D.removeAttribute(name);
return;
}else if(typeof F.propertyDefault[name]!==i){E=F.propertyDefault[name];
}}D[name]=E;
}else{if(E===true){D.setAttribute(name,name);
}else if(E===false||E===null){D.removeAttribute(name);
}else{D.setAttribute(name,E);
}}},reset:function(G,name){this.set(G,name,null);
}}});
})();
(function(){var e="=",d="ecmascript.objectcount",c="+",b="qx.lang.Object",a="&";
qx.Class.define(b,{statics:{empty:function(f){for(var g in f){if(f.hasOwnProperty(g)){delete f[g];
}}},isEmpty:(qx.core.Environment.get(d))?function(h){return h.__count__===0;
}:function(j){for(var k in j){return false;
}return true;
},hasMinLength:(qx.core.Environment.get(d))?function(m,n){return m.__count__>=n;
}:function(o,p){if(p<=0){return true;
}var length=0;

for(var q in o){if((++length)>=p){return true;
}}return false;
},getLength:qx.Bootstrap.objectGetLength,getKeys:qx.Bootstrap.getKeys,getKeysAsString:qx.Bootstrap.getKeysAsString,getValues:function(r){var t=[];
var s=this.getKeys(r);

for(var i=0,l=s.length;i<l;i++){t.push(r[s[i]]);
}return t;
},mergeWith:qx.Bootstrap.objectMergeWith,carefullyMergeWith:function(u,v){return qx.lang.Object.mergeWith(u,v,false);
},merge:function(w,x){var y=arguments.length;

for(var i=1;i<y;i++){qx.lang.Object.mergeWith(w,arguments[i]);
}return w;
},clone:function(z){var A={};

for(var B in z){A[B]=z[B];
}return A;
},invert:function(C){var D={};

for(var E in C){D[C[E].toString()]=E;
}return D;
},getKeyFromValue:function(F,G){for(var H in F){if(F.hasOwnProperty(H)&&F[H]===G){return H;
}}return null;
},contains:function(I,J){return this.getKeyFromValue(I,J)!==null;
},select:function(K,L){return L[K];
},fromArray:function(M){var N={};

for(var i=0,l=M.length;i<l;i++){N[M[i].toString()]=true;
}return N;
},toUriParameter:function(O,P){var S,R=[],Q=window.encodeURIComponent;

for(S in O){if(O.hasOwnProperty(S)){if(P){R.push(Q(S).replace(/%20/g,c)+e+Q(O[S]).replace(/%20/g,c));
}else{R.push(Q(S)+e+Q(O[S]));
}}}return R.join(a);
}}});
})();
(function(){var s="html.classlist",r="default",q="native",p="",o=" ",n='',m="(^|\\s)",k="(\\s|$)",j="\\b",h="g",c='function',g="\\b|\\b",f="qx.bom.element.Class",b='SVGAnimatedString',a='object',e="$2",d='undefined';
qx.Class.define(f,{statics:{__dp:/\s+/g,__dq:/^\s+|\s+$/g,add:qx.lang.Object.select(qx.core.Environment.get(s)?q:r,{"native":function(t,name){t.classList.add(name);
return name;
},"default":function(u,name){if(!this.has(u,name)){u.className+=(u.className?o:p)+name;
}return name;
}}),addClasses:qx.lang.Object.select(qx.core.Environment.get(s)?q:r,{"native":function(v,w){for(var i=0;i<w.length;i++){v.classList.add(w[i]);
}return v.className;
},"default":function(x,y){var z={};
var B;
var A=x.className;

if(A){B=A.split(this.__dp);

for(var i=0,l=B.length;i<l;i++){z[B[i]]=true;
}
for(var i=0,l=y.length;i<l;i++){if(!z[y[i]]){B.push(y[i]);
}}}else{B=y;
}return x.className=B.join(o);
}}),get:function(C){var D=C.className;

if(typeof D.split!==c){if(typeof D===a){if(qx.Bootstrap.getClass(D)==b){D=D.baseVal;
}else{D=n;
}}
if(typeof D===d){D=n;
}}return D;
},has:qx.lang.Object.select(qx.core.Environment.get(s)?q:r,{"native":function(E,name){return E.classList.contains(name);
},"default":function(F,name){var G=new RegExp(m+name+k);
return G.test(F.className);
}}),remove:qx.lang.Object.select(qx.core.Environment.get(s)?q:r,{"native":function(H,name){H.classList.remove(name);
return name;
},"default":function(I,name){var J=new RegExp(m+name+k);
I.className=I.className.replace(J,e);
return name;
}}),removeClasses:qx.lang.Object.select(qx.core.Environment.get(s)?q:r,{"native":function(K,L){for(var i=0;i<L.length;i++){K.classList.remove(L[i]);
}return K.className;
},"default":function(M,N){var O=new RegExp(j+N.join(g)+j,h);
return M.className=M.className.replace(O,p).replace(this.__dq,p).replace(this.__dp,o);
}}),replace:function(P,Q,R){this.remove(P,Q);
return this.add(P,R);
},toggle:qx.lang.Object.select(qx.core.Environment.get(s)?q:r,{"native":function(S,name,T){if(T===undefined){S.classList.toggle(name);
}else{T?this.add(S,name):this.remove(S,name);
}return name;
},"default":function(U,name,V){if(V==null){V=!this.has(U,name);
}V?this.add(U,name):this.remove(U,name);
return name;
}})}});
})();
(function(){var c="qx.event.handler.Appear",b="disappear",a="appear";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(d){qx.core.Object.call(this);
this.__db=d;
this.__dr={};
qx.event.handler.Appear.__ds[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__ds:{},refresh:function(){var e=this.__ds;

for(var f in e){e[f].refresh();
}}},members:{__db:null,__dr:null,canHandleEvent:function(g,h){},registerEvent:function(i,j,k){var l=qx.core.ObjectRegistry.toHashCode(i)+j;
var m=this.__dr;

if(m&&!m[l]){m[l]=i;
i.$$displayed=i.offsetWidth>0;
}},unregisterEvent:function(n,o,p){var q=qx.core.ObjectRegistry.toHashCode(n)+o;
var r=this.__dr;

if(!r){return;
}
if(r[q]){delete r[q];
}},refresh:function(){var v=this.__dr;
var w;

for(var u in v){w=v[u];
var s=w.offsetWidth>0;

if((!!w.$$displayed)!==s){w.$$displayed=s;
var t=qx.event.Registration.createEvent(s?a:b);
this.__db.dispatchEvent(w,t);
}}}},destruct:function(){this.__db=this.__dr=null;
delete qx.event.handler.Appear.__ds[this.$$hash];
},defer:function(x){qx.event.Registration.addHandler(x);
}});
})();
(function(){var b="qx.ui.mobile.core.DomUpdatedHandler",a="domupdated";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(c){qx.core.Object.call(this);
this.__db=c;
this.__dr={};
qx.ui.mobile.core.DomUpdatedHandler.__ds[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{domupdated:1},IGNORE_CAN_HANDLE:false,__ds:{},refresh:function(){var d=this.__ds;

for(var e in d){d[e].refresh();
}}},members:{__db:null,__dr:null,canHandleEvent:function(f,g){return f instanceof qx.ui.mobile.core.Widget;
},registerEvent:function(h,i,j){var k=h.$$hash;
var l=this.__dr;

if(l&&!l[k]){l[k]=h;
}},unregisterEvent:function(m,n,o){var p=m.$$hash;
var q=this.__dr;

if(!q){return;
}
if(q[p]){delete q[p];
}},refresh:function(){var t=this.__dr;
var u;

for(var s in t){u=t[s];

if(u&&!u.$$disposed&&u.isSeeable()){var r=qx.event.Registration.createEvent(a);
this.__db.dispatchEvent(u,r);
}}}},destruct:function(){this.__db=this.__dr=null;
delete qx.ui.mobile.core.DomUpdatedHandler.__ds[this.$$hash];
},defer:function(v){qx.event.Registration.addHandler(v);
}});
})();
(function(){var e="orientationchange",d="resize",c="landscape",b="portrait",a="qx.event.handler.Orientation";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(f){qx.core.Object.call(this);
this.__db=f;
this.__cd=f.getWindow();
this._initObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{orientationchange:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__db:null,__cd:null,__dt:null,__du:null,__dv:null,canHandleEvent:function(g,h){},registerEvent:function(i,j,k){},unregisterEvent:function(l,m,n){},_initObserver:function(){this.__dv=qx.lang.Function.listener(this._onNative,this);
this.__dt=qx.bom.Event.supportsEvent(this.__cd,e)?e:d;
var Event=qx.bom.Event;
Event.addNativeListener(this.__cd,this.__dt,this.__dv);
},_stopObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__cd,this.__dt,this.__dv);
},_onNative:qx.event.GlobalError.observeMethod(function(o){var q=qx.bom.Viewport;
var p=q.getOrientation();

if(this.__du!=p){this.__du=p;
var r=q.isLandscape()?c:b;
qx.event.Registration.fireEvent(this.__cd,e,qx.event.type.Orientation,[p,r]);
}})},destruct:function(){this._stopObserver();
this.__db=this.__cd=null;
},defer:function(s){qx.event.Registration.addHandler(s);
}});
})();
(function(){var c="landscape",b="qx.event.type.Orientation",a="portrait";
qx.Class.define(b,{extend:qx.event.type.Event,members:{__dw:null,__dx:null,init:function(d,e){qx.event.type.Event.prototype.init.call(this,false,false);
this.__dw=d;
this.__dx=e;
return this;
},clone:function(f){var g=qx.event.type.Event.prototype.clone.call(this,f);
g.__dw=this.__dw;
g.__dx=this.__dx;
return g;
},getOrientation:function(){return this.__dw;
},isLandscape:function(){return this.__dx==c;
},isPortrait:function(){return this.__dx==a;
}}});
})();
(function(){var a="qx.event.handler.UserAction";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(b){qx.core.Object.call(this);
this.__db=b;
this.__cd=b.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__db:null,__cd:null,canHandleEvent:function(c,d){},registerEvent:function(e,f,g){},unregisterEvent:function(h,i,j){}},destruct:function(){this.__db=this.__cd=null;
},defer:function(k){qx.event.Registration.addHandler(k);
}});
})();
(function(){var o="touchend",n="touchstart",m="touchmove",l="event.touch",k="mousemove",j="mouseup",i="touchcancel",h="mousedown",g="qx.event.handler.Touch",f="useraction",b="swipe",d="tap",c="x",a="y";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(p){qx.core.Object.call(this);
this.__db=p;
this.__cd=p.getWindow();
this.__cN=this.__cd.document;
this._initTouchObserver();
this._initMouseObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{touchstart:1,touchmove:1,touchend:1,touchcancel:1,tap:1,swipe:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT,IGNORE_CAN_HANDLE:true,MOUSE_TO_TOUCH_MAPPING:{"mousedown":"touchstart","mousemove":"touchmove","mouseup":"touchend"},SWIPE_DIRECTION:{x:["left","right"],y:["up","down"]},TAP_MAX_DISTANCE:qx.core.Environment.get("os.name")!="android"?10:40,SWIPE_MIN_DISTANCE:qx.core.Environment.get("os.name")!="android"?11:41,SWIPE_MIN_VELOCITY:0},members:{__dy:null,__dz:null,__db:null,__cd:null,__cN:null,__dA:null,__dB:null,__dC:null,__dD:null,__dE:false,__dF:null,canHandleEvent:function(q,r){},registerEvent:function(s,t,u){},unregisterEvent:function(v,w,x){},__dG:function(y){var z=qx.bom.Event.getTarget(y);
{if(z&&z.nodeType==3){z=z.parentNode;
}};
return z;
},__dH:function(A,B,C,D){if(!C){C=this.__dG(A);
}var B=B||A.type;

if(C&&C.nodeType){qx.event.Registration.fireEvent(C,B,D||qx.event.type.Touch,[A,C,null,true,true]);
}qx.event.Registration.fireEvent(this.__cd,f,qx.event.type.Data,[B]);
},__dI:function(E,F,G){if(!G){G=this.__dG(E);
}var F=F||E.type;

if(F==n){this.__dJ(E,G);
}else if(F==m){this.__dK(E,G);
}else if(F==o){this.__dL(E,G);
}},__dJ:function(H,I){var J=H.changedTouches[0];
this.__dA=J.screenX;
this.__dB=J.screenY;
this.__dC=new Date().getTime();
this.__dD=H.changedTouches.length===1;
},__dK:function(K,L){if(this.__dD&&K.changedTouches.length>1){this.__dD=false;
}},__dL:function(M,N){if(this.__dD){var O=M.changedTouches[0];
var Q={x:O.screenX-this.__dA,y:O.screenY-this.__dB};
var R=qx.event.handler.Touch;

if(this.__dF==N&&Math.abs(Q.x)<=R.TAP_MAX_DISTANCE&&Math.abs(Q.y)<=R.TAP_MAX_DISTANCE){this.__dH(M,d,N,qx.event.type.Tap);
}else{var P=this.__dM(M,N,Q);

if(P){M.swipe=P;
this.__dH(M,b,N,qx.event.type.Swipe);
}}}},__dM:function(S,T,U){var Y=qx.event.handler.Touch;
var ba=new Date().getTime()-this.__dC;
var bc=(Math.abs(U.x)>=Math.abs(U.y))?c:a;
var V=U[bc];
var W=Y.SWIPE_DIRECTION[bc][V<0?0:1];
var bb=(ba!==0)?V/ba:0;
var X=null;

if(Math.abs(bb)>=Y.SWIPE_MIN_VELOCITY&&Math.abs(V)>=Y.SWIPE_MIN_DISTANCE){X={startTime:this.__dC,duration:ba,axis:bc,direction:W,distance:V,velocity:bb};
}return X;
},__dN:function(bd){var be=bd.type;
var bg=qx.event.handler.Touch.MOUSE_TO_TOUCH_MAPPING;

if(bg[be]){be=bg[be];
if(be==n&&this.__dO(bd)){this.__dE=true;
}else if(be==o){this.__dE=false;
}var bh=this.__dP(bd);
var bf=(be==o?[]:[bh]);
bd.touches=bf;
bd.targetTouches=bf;
bd.changedTouches=[bh];
}return be;
},__dO:function(bi){{var bj=0;
};
return bi.button==bj;
},__dP:function(bk){var bl=this.__dG(bk);
return {clientX:bk.clientX,clientY:bk.clientY,screenX:bk.screenX,screenY:bk.screenY,pageX:bk.pageX,pageY:bk.pageY,identifier:1,target:bl};
},_initTouchObserver:function(){this.__dy=qx.lang.Function.listener(this._onTouchEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__cN,n,this.__dy);
Event.addNativeListener(this.__cN,m,this.__dy);
Event.addNativeListener(this.__cN,o,this.__dy);
Event.addNativeListener(this.__cN,i,this.__dy);
},_initMouseObserver:function(){if(!qx.core.Environment.get(l)){this.__dz=qx.lang.Function.listener(this._onMouseEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__cN,h,this.__dz);
Event.addNativeListener(this.__cN,k,this.__dz);
Event.addNativeListener(this.__cN,j,this.__dz);
}},_stopTouchObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__cN,n,this.__dy);
Event.removeNativeListener(this.__cN,m,this.__dy);
Event.removeNativeListener(this.__cN,o,this.__dy);
Event.removeNativeListener(this.__cN,i,this.__dy);
},_stopMouseObserver:function(){if(!qx.core.Environment.get(l)){var Event=qx.bom.Event;
Event.removeNativeListener(this.__cN,h,this.__dz);
Event.removeNativeListener(this.__cN,k,this.__dz);
Event.removeNativeListener(this.__cN,j,this.__dz);
}},_onTouchEvent:qx.event.GlobalError.observeMethod(function(bm){this._commonTouchEventHandler(bm);
}),_onMouseEvent:qx.event.GlobalError.observeMethod(function(bn){if(!qx.core.Environment.get(l)){if(bn.type==k&&!this.__dE){return;
}var bo=this.__dN(bn);
this._commonTouchEventHandler(bn,bo);
}}),_commonTouchEventHandler:function(bp,bq){var bq=bq||bp.type;

if(bq==n){this.__dF=this.__dG(bp);
}this.__dH(bp,bq);
this.__dI(bp,bq);
}},destruct:function(){this._stopTouchObserver();
this._stopMouseObserver();
this.__db=this.__cd=this.__cN=this.__dF=null;
},defer:function(br){qx.event.Registration.addHandler(br);
if(qx.core.Environment.get(l)){{document.addEventListener(m,function(e){e.preventDefault();
});
};
qx.event.Registration.getManager(document).getHandler(br);
}}});
})();
(function(){var a="qx.event.type.Native";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d,e,f){qx.event.type.Event.prototype.init.call(this,e,f);
this._target=c||qx.bom.Event.getTarget(b);
this._relatedTarget=d||qx.bom.Event.getRelatedTarget(b);

if(b.timeStamp){this._timeStamp=b.timeStamp;
}this._native=b;
this._returnValue=null;
return this;
},clone:function(g){var h=qx.event.type.Event.prototype.clone.call(this,g);
var i={};
h._native=this._cloneNativeEvent(this._native,i);
h._returnValue=this._returnValue;
return h;
},_cloneNativeEvent:function(j,k){k.preventDefault=qx.lang.Function.empty;
return k;
},preventDefault:function(){qx.event.type.Event.prototype.preventDefault.call(this);
qx.bom.Event.preventDefault(this._native);
},getNativeEvent:function(){return this._native;
},setReturnValue:function(l){this._returnValue=l;
},getReturnValue:function(){return this._returnValue;
}},destruct:function(){this._native=this._returnValue=null;
}});
})();
(function(){var c="os.name",b="qx.event.type.Dom",a="osx";
qx.Class.define(b,{extend:qx.event.type.Native,statics:{SHIFT_MASK:1,CTRL_MASK:2,ALT_MASK:4,META_MASK:8},members:{_cloneNativeEvent:function(d,e){var e=qx.event.type.Native.prototype._cloneNativeEvent.call(this,d,e);
e.shiftKey=d.shiftKey;
e.ctrlKey=d.ctrlKey;
e.altKey=d.altKey;
e.metaKey=d.metaKey;
return e;
},getModifiers:function(){var g=0;
var f=this._native;

if(f.shiftKey){g|=qx.event.type.Dom.SHIFT_MASK;
}
if(f.ctrlKey){g|=qx.event.type.Dom.CTRL_MASK;
}
if(f.altKey){g|=qx.event.type.Dom.ALT_MASK;
}
if(f.metaKey){g|=qx.event.type.Dom.META_MASK;
}return g;
},isCtrlPressed:function(){return this._native.ctrlKey;
},isShiftPressed:function(){return this._native.shiftKey;
},isAltPressed:function(){return this._native.altKey;
},isMetaPressed:function(){return this._native.metaKey;
},isCtrlOrCommandPressed:function(){if(qx.core.Environment.get(c)==a){return this._native.metaKey;
}else{return this._native.ctrlKey;
}}}});
})();
(function(){var c="touchcancel",b="qx.event.type.Touch",a="touchend";
qx.Class.define(b,{extend:qx.event.type.Dom,members:{_cloneNativeEvent:function(d,e){var e=qx.event.type.Dom.prototype._cloneNativeEvent.call(this,d,e);
e.pageX=d.pageX;
e.pageY=d.pageY;
e.layerX=d.layerX;
e.layerY=d.layerY;
e.scale=d.scale;
e.rotation=d.rotation;
e.srcElement=d.srcElement;
e.targetTouches=[];

for(var i=0;i<d.targetTouches.length;i++){e.targetTouches[i]=d.targetTouches[i];
}e.changedTouches=[];

for(var i=0;i<d.changedTouches.length;i++){e.changedTouches[i]=d.changedTouches[i];
}e.touches=[];

for(var i=0;i<d.touches.length;i++){e.touches[i]=d.touches[i];
}return e;
},stop:function(){this.stopPropagation();
},getAllTouches:function(){return this._native.touches;
},getTargetTouches:function(){return this._native.targetTouches;
},getChangedTargetTouches:function(){return this._native.changedTouches;
},isMultiTouch:function(){return this.__dR().length>1;
},getScale:function(){return this._native.scale;
},getRotation:function(){return this._native.rotation;
},getDocumentLeft:function(f){return this.__dQ(f).pageX;
},getDocumentTop:function(g){return this.__dQ(g).pageY;
},getScreenLeft:function(h){return this.__dQ(h).screenX;
},getScreenTop:function(j){return this.__dQ(j).screenY;
},getViewportLeft:function(k){return this.__dQ(k).clientX;
},getViewportTop:function(l){return this.__dQ(l).clientY;
},getIdentifier:function(m){return this.__dQ(m).identifier;
},__dQ:function(n){n=n==null?0:n;
return this.__dR()[n];
},__dR:function(){var o=(this._isTouchEnd()?this.getChangedTargetTouches():this.getTargetTouches());
return o;
},_isTouchEnd:function(){return (this.getType()==a||this.getType()==c);
}}});
})();
(function(){var a="qx.event.type.Tap";
qx.Class.define(a,{extend:qx.event.type.Touch,members:{_isTouchEnd:function(){return true;
}}});
})();
(function(){var a="qx.event.type.Swipe";
qx.Class.define(a,{extend:qx.event.type.Touch,members:{_cloneNativeEvent:function(b,c){var c=qx.event.type.Touch.prototype._cloneNativeEvent.call(this,b,c);
c.swipe=b.swipe;
return c;
},_isTouchEnd:function(){return true;
},getStartTime:function(){return this._native.swipe.startTime;
},getDuration:function(){return this._native.swipe.duration;
},getAxis:function(){return this._native.swipe.axis;
},getDirection:function(){return this._native.swipe.direction;
},getVelocity:function(){return this._native.swipe.velocity;
},getDistance:function(){return this._native.swipe.distance;
}}});
})();
(function(){var b="abstract",a="qx.event.dispatch.AbstractBubbling";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:b,construct:function(c){this._manager=c;
},members:{_getParent:function(d){throw new Error("Missing implementation");
},canDispatchEvent:function(e,event,f){return event.getBubbles();
},dispatchEvent:function(g,event,h){var parent=g;
var s=this._manager;
var p,w;
var n;
var r,u;
var t;
var v=[];
p=s.getListeners(g,h,true);
w=s.getListeners(g,h,false);

if(p){v.push(p);
}
if(w){v.push(w);
}var parent=this._getParent(g);
var l=[];
var k=[];
var m=[];
var q=[];
while(parent!=null){p=s.getListeners(parent,h,true);

if(p){m.push(p);
q.push(parent);
}w=s.getListeners(parent,h,false);

if(w){l.push(w);
k.push(parent);
}parent=this._getParent(parent);
}event.setEventPhase(qx.event.type.Event.CAPTURING_PHASE);

for(var i=m.length-1;i>=0;i--){t=q[i];
event.setCurrentTarget(t);
n=m[i];

for(var j=0,o=n.length;j<o;j++){r=n[j];
u=r.context||t;
r.handler.call(u,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.AT_TARGET);
event.setCurrentTarget(g);

for(var i=0,x=v.length;i<x;i++){n=v[i];

for(var j=0,o=n.length;j<o;j++){r=n[j];
u=r.context||g;
r.handler.call(u,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.BUBBLING_PHASE);

for(var i=0,x=l.length;i<x;i++){t=k[i];
event.setCurrentTarget(t);
n=l[i];

for(var j=0,o=n.length;j<o;j++){r=n[j];
u=r.context||t;
r.handler.call(u,event);
}
if(event.getPropagationStopped()){return;
}}}}});
})();
(function(){var a="qx.event.dispatch.DomBubbling";
qx.Class.define(a,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(b){return b.parentNode;
},canDispatchEvent:function(c,event,d){return c.nodeType!==undefined&&event.getBubbles();
}},defer:function(e){qx.event.Registration.addDispatcher(e);
}});
})();
(function(){var d="-",c="qx.event.handler.Element",b="load",a="iframe";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(e){qx.core.Object.call(this);
this._manager=e;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,load:true,scroll:true,select:true,reset:true,submit:true},CANCELABLE:{selectstart:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(f,g){if(g===b){return f.tagName.toLowerCase()!==a;
}else{return true;
}},registerEvent:function(h,i,j){var m=qx.core.ObjectRegistry.toHashCode(h);
var k=m+d+i;
var l=qx.lang.Function.listener(this._onNative,this,k);
qx.bom.Event.addNativeListener(h,i,l);
this._registeredEvents[k]={element:h,type:i,listener:l};
},unregisterEvent:function(n,o,p){var s=this._registeredEvents;

if(!s){return;
}var t=qx.core.ObjectRegistry.toHashCode(n);
var q=t+d+o;
var r=this._registeredEvents[q];

if(r){qx.bom.Event.removeNativeListener(n,o,r.listener);
}delete this._registeredEvents[q];
},_onNative:qx.event.GlobalError.observeMethod(function(u,v){var x=this._registeredEvents;

if(!x){return;
}var w=x[v];
var y=this.constructor.CANCELABLE[w.type];
qx.event.Registration.fireNonBubblingEvent(w.element,w.type,qx.event.type.Native,[u,undefined,undefined,undefined,y]);
})},destruct:function(){var z;
var A=this._registeredEvents;

for(var B in A){z=A[B];
qx.bom.Event.removeNativeListener(z.element,z.type,z.listener);
}this._manager=this._registeredEvents=null;
},defer:function(C){qx.event.Registration.addHandler(C);
}});
})();
(function(){var s="mouseup",r="mousewheel",q="mousedown",p="contextmenu",o="click",n="dblclick",m="os.name",l="mouseover",k="mouseout",j="ios",c="mousemove",h="on",f="engine.version",b="useraction",a="webkit",e="gecko",d="DOMMouseScroll",g="qx.event.handler.Mouse";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(t){qx.core.Object.call(this);
this.__db=t;
this.__cd=t.getWindow();
this.__cN=this.__cd.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT+qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__dS:null,__dT:null,__dU:null,__dV:null,__dW:null,__db:null,__cd:null,__cN:null,canHandleEvent:function(u,v){},registerEvent:qx.core.Environment.get(m)===j?function(w,x,y){w[h+x]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.core.Environment.get(m)===j?function(z,A,B){z[h+A]=undefined;
}:qx.lang.Function.returnNull,__dH:function(C,D,E){if(!E){E=qx.bom.Event.getTarget(C);
}if(E&&E.nodeType){qx.event.Registration.fireEvent(E,D||C.type,D==r?qx.event.type.MouseWheel:qx.event.type.Mouse,[C,E,null,true,true]);
}qx.event.Registration.fireEvent(this.__cd,b,qx.event.type.Data,[D||C.type]);
},__dX:function(){var G=[this.__cd,this.__cN,this.__cN.body];
var H=this.__cd;
var F=d;

for(var i=0;i<G.length;i++){if(qx.bom.Event.supportsEvent(G[i],r)){F=r;
H=G[i];
break;
}}return {type:F,target:H};
},_initButtonObserver:function(){this.__dS=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__cN,q,this.__dS);
Event.addNativeListener(this.__cN,s,this.__dS);
Event.addNativeListener(this.__cN,o,this.__dS);
Event.addNativeListener(this.__cN,n,this.__dS);
Event.addNativeListener(this.__cN,p,this.__dS);
},_initMoveObserver:function(){this.__dT=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__cN,c,this.__dT);
Event.addNativeListener(this.__cN,l,this.__dT);
Event.addNativeListener(this.__cN,k,this.__dT);
},_initWheelObserver:function(){this.__dU=qx.lang.Function.listener(this._onWheelEvent,this);
var I=this.__dX();
qx.bom.Event.addNativeListener(I.target,I.type,this.__dU);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__cN,q,this.__dS);
Event.removeNativeListener(this.__cN,s,this.__dS);
Event.removeNativeListener(this.__cN,o,this.__dS);
Event.removeNativeListener(this.__cN,n,this.__dS);
Event.removeNativeListener(this.__cN,p,this.__dS);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__cN,c,this.__dT);
Event.removeNativeListener(this.__cN,l,this.__dT);
Event.removeNativeListener(this.__cN,k,this.__dT);
},_stopWheelObserver:function(){var J=this.__dX();
qx.bom.Event.removeNativeListener(J.target,J.type,this.__dU);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(K){this.__dH(K);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(L){var M=L.type;
var N=qx.bom.Event.getTarget(L);
if(a==e||true){if(N&&N.nodeType==3){N=N.parentNode;
}}
if(this.__dY){this.__dY(L,M,N);
}
if(this.__eb){this.__eb(L,M,N);
}this.__dH(L,M,N);

if(this.__ea){this.__ea(L,M,N);
}
if(this.__ec){this.__ec(L,M,N);
}this.__dV=M;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(O){this.__dH(O,r);
}),__dY:function(P,Q,R){if(parseFloat(qx.core.Environment.get(f))<530){if(Q==p){this.__dH(P,s,R);
}}},__ea:null,__eb:null,__ec:function(S,T,U){switch(T){case q:this.__dW=U;
break;
case s:if(U!==this.__dW){var V=qx.dom.Hierarchy.getCommonParent(U,this.__dW);
this.__dH(S,o,V);
}}}},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__db=this.__cd=this.__cN=this.__dW=null;
},defer:function(W){qx.event.Registration.addHandler(W);
}});
})();
(function(){var j="left",i="right",h="middle",g="none",f="click",e="contextmenu",d="qx.event.type.Mouse",c="browser.documentmode",b="browser.name",a="ie";
qx.Class.define(d,{extend:qx.event.type.Dom,members:{_cloneNativeEvent:function(k,l){var l=qx.event.type.Dom.prototype._cloneNativeEvent.call(this,k,l);
l.button=k.button;
l.clientX=k.clientX;
l.clientY=k.clientY;
l.pageX=k.pageX;
l.pageY=k.pageY;
l.screenX=k.screenX;
l.screenY=k.screenY;
l.wheelDelta=k.wheelDelta;
l.wheelDeltaX=k.wheelDeltaX;
l.wheelDeltaY=k.wheelDeltaY;
l.detail=k.detail;
l.axis=k.axis;
l.wheelX=k.wheelX;
l.wheelY=k.wheelY;
l.HORIZONTAL_AXIS=k.HORIZONTAL_AXIS;
l.srcElement=k.srcElement;
l.target=k.target;
return l;
},__ed:{0:j,2:i,1:h},__ee:{1:j,2:i,4:h},stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case e:return i;
case f:if(qx.core.Environment.get(b)===a&&qx.core.Environment.get(c)<9){return j;
}default:if(this._native.target!==undefined){return this.__ed[this._native.button]||g;
}else{return this.__ee[this._native.button]||g;
}}},isLeftPressed:function(){return this.getButton()===j;
},isMiddlePressed:function(){return this.getButton()===h;
},isRightPressed:function(){return this.getButton()===i;
},getRelatedTarget:function(){return this._relatedTarget;
},getViewportLeft:function(){return this._native.clientX;
},getViewportTop:function(){return this._native.clientY;
},getDocumentLeft:function(){if(this._native.pageX!==undefined){return this._native.pageX;
}else{var m=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(m);
}},getDocumentTop:function(){if(this._native.pageY!==undefined){return this._native.pageY;
}else{var n=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(n);
}},getScreenLeft:function(){return this._native.screenX;
},getScreenTop:function(){return this._native.screenY;
}}});
})();
(function(){var k="engine.version",j="os.name",i="x",h="osx",g="win",f="chrome",d="qx.dynamicmousewheel",c="qx.event.type.MouseWheel",b="browser.name",a="y";
qx.Class.define(c,{extend:qx.event.type.Mouse,statics:{MAXSCROLL:null,MINSCROLL:null,FACTOR:1},members:{stop:function(){this.stopPropagation();
this.preventDefault();
},__ef:function(l){var m=Math.abs(l);
if(qx.event.type.MouseWheel.MINSCROLL==null||qx.event.type.MouseWheel.MINSCROLL>m){qx.event.type.MouseWheel.MINSCROLL=m;
this.__eg();
}if(qx.event.type.MouseWheel.MAXSCROLL==null||qx.event.type.MouseWheel.MAXSCROLL<m){qx.event.type.MouseWheel.MAXSCROLL=m;
this.__eg();
}if(qx.event.type.MouseWheel.MAXSCROLL===m&&qx.event.type.MouseWheel.MINSCROLL===m){return 2*(l/m);
}var n=qx.event.type.MouseWheel.MAXSCROLL-qx.event.type.MouseWheel.MINSCROLL;
var o=(l/n)*Math.log(n)*qx.event.type.MouseWheel.FACTOR;
return o<0?Math.min(o,-1):Math.max(o,1);
},__eg:function(){var p=qx.event.type.MouseWheel.MAXSCROLL||0;
var s=qx.event.type.MouseWheel.MINSCROLL||p;

if(p<=s){return;
}var q=p-s;
var r=(p/q)*Math.log(q);

if(r==0){r=1;
}qx.event.type.MouseWheel.FACTOR=6/r;
},getWheelDelta:function(t){var e=this._native;
if(t===undefined){if(u===undefined){var u=-e.wheelDelta;

if(e.wheelDelta===undefined){u=e.detail;
}}return this.__eh(u);
}if(t===i){var x=0;

if(e.wheelDelta!==undefined){if(e.wheelDeltaX!==undefined){x=e.wheelDeltaX?this.__eh(-e.wheelDeltaX):0;
}}else{if(e.axis&&e.axis==e.HORIZONTAL_AXIS){x=this.__eh(e.detail);
}}return x;
}if(t===a){var y=0;

if(e.wheelDelta!==undefined){if(e.wheelDeltaY!==undefined){y=e.wheelDeltaY?this.__eh(-e.wheelDeltaY):0;
}else{y=this.__eh(-e.wheelDelta);
}}else{if(!(e.axis&&e.axis==e.HORIZONTAL_AXIS)){y=this.__eh(e.detail);
}}return y;
}return 0;
},__eh:function(v){if(qx.core.Environment.get(d)){return this.__ef(v);
}else{var w=function(){if(qx.core.Environment.get(b)==f){if(qx.core.Environment.get(j)==h){return v/60;
}else{return v/120;
}}else{if(qx.core.Environment.get(j)==g){var z=120;
if(parseFloat(qx.core.Environment.get(k))==533.16){z=1200;
}}else{z=40;
if(parseFloat(qx.core.Environment.get(k))==533.16||parseFloat(qx.core.Environment.get(k))==533.17||parseFloat(qx.core.Environment.get(k))==533.18){z=1200;
}}return v/z;
}};
return w.call(this);
}}}});
})();
(function(){var e="qx.dom.Hierarchy",d="previousSibling",c="nextSibling",b="parentNode",a="*";
qx.Class.define(e,{statics:{getNodeIndex:function(f){var g=0;

while(f&&(f=f.previousSibling)){g++;
}return g;
},getElementIndex:function(h){var i=0;
var j=qx.dom.Node.ELEMENT;

while(h&&(h=h.previousSibling)){if(h.nodeType==j){i++;
}}return i;
},getNextElementSibling:function(k){while(k&&(k=k.nextSibling)&&!qx.dom.Node.isElement(k)){continue;
}return k||null;
},getPreviousElementSibling:function(l){while(l&&(l=l.previousSibling)&&!qx.dom.Node.isElement(l)){continue;
}return l||null;
},contains:function(m,n){if(qx.dom.Node.isDocument(m)){var o=qx.dom.Node.getDocument(n);
return m&&o==m;
}else if(qx.dom.Node.isDocument(n)){return false;
}else{return m.contains(n);
}},isRendered:function(p){if(!p.parentNode||!p.offsetParent){return false;
}var q=p.ownerDocument||p.document;
return q.body.contains(p);
},isDescendantOf:function(r,s){return this.contains(s,r);
},getCommonParent:function(t,u){if(t===u){return t;
}var v={};
var y=qx.core.ObjectRegistry;
var x,w;

while(t||u){if(t){x=y.toHashCode(t);

if(v[x]){return v[x];
}v[x]=t;
t=t.parentNode;
}
if(u){w=y.toHashCode(u);

if(v[w]){return v[w];
}v[w]=u;
u=u.parentNode;
}}return null;
},getAncestors:function(z){return this._recursivelyCollect(z,b);
},getChildElements:function(A){A=A.firstChild;

if(!A){return [];
}var B=this.getNextSiblings(A);

if(A.nodeType===1){B.unshift(A);
}return B;
},getDescendants:function(C){return qx.lang.Array.fromCollection(C.getElementsByTagName(a));
},getFirstDescendant:function(D){D=D.firstChild;

while(D&&D.nodeType!=1){D=D.nextSibling;
}return D;
},getLastDescendant:function(E){E=E.lastChild;

while(E&&E.nodeType!=1){E=E.previousSibling;
}return E;
},getPreviousSiblings:function(F){return this._recursivelyCollect(F,d);
},getNextSiblings:function(G){return this._recursivelyCollect(G,c);
},_recursivelyCollect:function(H,I){var J=[];

while(H=H[I]){if(H.nodeType==1){J.push(H);
}}return J;
},getSiblings:function(K){return this.getPreviousSiblings(K).reverse().concat(this.getNextSiblings(K));
},isEmpty:function(L){L=L.firstChild;

while(L){if(L.nodeType===qx.dom.Node.ELEMENT||L.nodeType===qx.dom.Node.TEXT){return false;
}L=L.nextSibling;
}return true;
},cleanWhitespace:function(M){var N=M.firstChild;

while(N){var O=N.nextSibling;

if(N.nodeType==3&&!/\S/.test(N.nodeValue)){M.removeChild(N);
}N=O;
}}}});
})();
(function(){var m="keydown",l="keypress",k="keyup",j="Enter",i="engine.version",h="NumLock",g="0",f="9",e="-",d="PageUp",bq="+",bp="PrintScreen",bo="os.name",bn="A",bm="Space",bl="Left",bk="F5",bj="Down",bi="Up",bh="F11",t="F6",u="useraction",r="osx",s="keyinput",p="Insert",q="F8",n="End",o="/",B="Delete",C="*",M="cmd",J="F1",U="F4",P="Home",bd="F2",ba="F12",F="PageDown",bg="F7",bf="Win",be="F9",E="F10",H="Right",I="F3",L="Z",N="Escape",Q="5",W="3",bc="Meta",v="7",w="CapsLock",G="Scroll",T="Control",S="Tab",R="Shift",Y="Pause",X="Unidentified",O="qx.event.handler.Keyboard",V="Apps",a="6",bb="4",x="Alt",y="2",K="mshtml",b="1",c="8",D="webkit",z=",",A="Backspace";
qx.Class.define(O,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(br){qx.core.Object.call(this);
this.__db=br;
this.__cd=br.getWindow();
{this.__cN=this.__cd.document.documentElement;
};
this.__ei={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(bs){if(this._identifierToKeyCodeMap[bs]){return true;
}
if(bs.length!=1){return false;
}
if(bs>=g&&bs<=f){return true;
}
if(bs>=bn&&bs<=L){return true;
}
switch(bs){case bq:case e:case C:case o:return true;
default:return false;
}},isPrintableKeyIdentifier:function(bt){if(bt===bm){return true;
}else{return this._identifierToKeyCodeMap[bt]?false:true;
}}},members:{__ej:null,__db:null,__cd:null,__cN:null,__ei:null,__ek:null,__el:null,__em:null,canHandleEvent:function(bu,bv){},registerEvent:function(bw,bx,by){},unregisterEvent:function(bz,bA,bB){},_fireInputEvent:function(bC,bD){var bE=this.__en();
if(bE&&bE.offsetWidth!=0){var event=qx.event.Registration.createEvent(s,qx.event.type.KeyInput,[bC,bE,bD]);
this.__db.dispatchEvent(bE,event);
}if(this.__cd){qx.event.Registration.fireEvent(this.__cd,u,qx.event.type.Data,[s]);
}},_fireSequenceEvent:function(bF,bG,bH){var bI=this.__en();
var bJ=bF.keyCode;
var event=qx.event.Registration.createEvent(bG,qx.event.type.KeySequence,[bF,bI,bH]);
this.__db.dispatchEvent(bI,event);
if(D==K||true){if(bG==m&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(bJ)&&!this._emulateKeyPress[bJ]){this._fireSequenceEvent(bF,l,bH);
}}}if(this.__cd){qx.event.Registration.fireEvent(this.__cd,u,qx.event.type.Data,[bG]);
}},__en:function(){var bK=this.__db.getHandler(qx.event.handler.Focus);
var bL=bK.getActive();
if(!bL||bL.offsetWidth==0){bL=bK.getFocus();
}if(!bL||bL.offsetWidth==0){bL=this.__db.getWindow().document.body;
}return bL;
},_initKeyObserver:function(){this.__ej=qx.lang.Function.listener(this.__eo,this);
this.__em=qx.lang.Function.listener(this.__eq,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__cN,k,this.__ej);
Event.addNativeListener(this.__cN,m,this.__ej);
Event.addNativeListener(this.__cN,l,this.__em);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__cN,k,this.__ej);
Event.removeNativeListener(this.__cN,m,this.__ej);
Event.removeNativeListener(this.__cN,l,this.__em);

for(var bN in (this.__el||{})){var bM=this.__el[bN];
Event.removeNativeListener(bM.target,l,bM.callback);
}delete (this.__el);
},__eo:qx.event.GlobalError.observeMethod(function(bO){var bR=0;
var bP=0;
var bQ=bO.type;
if(parseFloat(qx.core.Environment.get(i))<525.13){if(bQ==k||bQ==m){bR=this._charCode2KeyCode[bO.charCode]||bO.keyCode;
}else{if(this._charCode2KeyCode[bO.charCode]){bR=this._charCode2KeyCode[bO.charCode];
}else{bP=bO.charCode;
}}this._idealKeyHandler(bR,bP,bQ,bO);
}else{bR=bO.keyCode;
this._idealKeyHandler(bR,bP,bQ,bO);
if(bQ==m){if(this._isNonPrintableKeyCode(bR)||this._emulateKeyPress[bR]){this._idealKeyHandler(bR,bP,l,bO);
}}this.__ei[bR]=bQ;
}}),__ep:null,__eq:qx.event.GlobalError.observeMethod(function(bS){if(parseFloat(qx.core.Environment.get(i))<525.13){var bV=0;
var bT=0;
var bU=bS.type;

if(bU==k||bU==m){bV=this._charCode2KeyCode[bS.charCode]||bS.keyCode;
}else{if(this._charCode2KeyCode[bS.charCode]){bV=this._charCode2KeyCode[bS.charCode];
}else{bT=bS.charCode;
}}this._idealKeyHandler(bV,bT,bU,bS);
}else{if(this._charCode2KeyCode[bS.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[bS.keyCode],0,bS.type,bS);
}else{this._idealKeyHandler(0,bS.keyCode,bS.type,bS);
}}}),_idealKeyHandler:function(bW,bX,bY,ca){var cb;
if(bW||(!bW&&!bX)){cb=this._keyCodeToIdentifier(bW);
this._fireSequenceEvent(ca,bY,cb);
}else{cb=this._charCodeToIdentifier(bX);
this._fireSequenceEvent(ca,l,cb);
this._fireInputEvent(ca,bX);
}},_specialCharCodeMap:{8:A,9:S,13:j,27:N,32:bm},_emulateKeyPress:{8:true,9:true,27:true},_keyCodeToIdentifierMap:{16:R,17:T,18:x,20:w,224:bc,37:bl,38:bi,39:H,40:bj,33:d,34:F,35:n,36:P,45:p,46:B,112:J,113:bd,114:I,115:U,116:bk,117:t,118:bg,119:q,120:be,121:E,122:bh,123:ba,144:h,44:bp,145:G,19:Y,91:qx.core.Environment.get(bo)==r?M:bf,92:bf,93:qx.core.Environment.get(bo)==r?M:V},_numpadToCharCode:{96:g.charCodeAt(0),97:b.charCodeAt(0),98:y.charCodeAt(0),99:W.charCodeAt(0),100:bb.charCodeAt(0),101:Q.charCodeAt(0),102:a.charCodeAt(0),103:v.charCodeAt(0),104:c.charCodeAt(0),105:f.charCodeAt(0),106:C.charCodeAt(0),107:bq.charCodeAt(0),109:e.charCodeAt(0),110:z.charCodeAt(0),111:o.charCodeAt(0)},_charCodeA:bn.charCodeAt(0),_charCodeZ:L.charCodeAt(0),_charCode0:g.charCodeAt(0),_charCode9:f.charCodeAt(0),_isNonPrintableKeyCode:function(cc){return this._keyCodeToIdentifierMap[cc]?true:false;
},_isIdentifiableKeyCode:function(cd){if(cd>=this._charCodeA&&cd<=this._charCodeZ){return true;
}if(cd>=this._charCode0&&cd<=this._charCode9){return true;
}if(this._specialCharCodeMap[cd]){return true;
}if(this._numpadToCharCode[cd]){return true;
}if(this._isNonPrintableKeyCode(cd)){return true;
}return false;
},_keyCodeToIdentifier:function(ce){if(this._isIdentifiableKeyCode(ce)){var cf=this._numpadToCharCode[ce];

if(cf){return String.fromCharCode(cf);
}return (this._keyCodeToIdentifierMap[ce]||this._specialCharCodeMap[ce]||String.fromCharCode(ce));
}else{return X;
}},_charCodeToIdentifier:function(cg){return this._specialCharCodeMap[cg]||String.fromCharCode(cg).toUpperCase();
},_identifierToKeyCode:function(ch){return qx.event.handler.Keyboard._identifierToKeyCodeMap[ch]||ch.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this.__ek=this.__db=this.__cd=this.__cN=this.__ei=null;
},defer:function(ci,cj){qx.event.Registration.addHandler(ci);
if(!ci._identifierToKeyCodeMap){ci._identifierToKeyCodeMap={};

for(var ck in cj._keyCodeToIdentifierMap){ci._identifierToKeyCodeMap[cj._keyCodeToIdentifierMap[ck]]=parseInt(ck,10);
}
for(var ck in cj._specialCharCodeMap){ci._identifierToKeyCodeMap[cj._specialCharCodeMap[ck]]=parseInt(ck,10);
}}{if(parseFloat(qx.core.Environment.get(i))<525.13){cj._charCode2KeyCode={63289:cj._identifierToKeyCode(h),63276:cj._identifierToKeyCode(d),63277:cj._identifierToKeyCode(F),63275:cj._identifierToKeyCode(n),63273:cj._identifierToKeyCode(P),63234:cj._identifierToKeyCode(bl),63232:cj._identifierToKeyCode(bi),63235:cj._identifierToKeyCode(H),63233:cj._identifierToKeyCode(bj),63272:cj._identifierToKeyCode(B),63302:cj._identifierToKeyCode(p),63236:cj._identifierToKeyCode(J),63237:cj._identifierToKeyCode(bd),63238:cj._identifierToKeyCode(I),63239:cj._identifierToKeyCode(U),63240:cj._identifierToKeyCode(bk),63241:cj._identifierToKeyCode(t),63242:cj._identifierToKeyCode(bg),63243:cj._identifierToKeyCode(q),63244:cj._identifierToKeyCode(be),63245:cj._identifierToKeyCode(E),63246:cj._identifierToKeyCode(bh),63247:cj._identifierToKeyCode(ba),63248:cj._identifierToKeyCode(bp),3:cj._identifierToKeyCode(j),12:cj._identifierToKeyCode(h),13:cj._identifierToKeyCode(j)};
}else{cj._charCode2KeyCode={13:13,27:27};
}};
}});
})();
(function(){var a="qx.event.type.KeyInput";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(b,c,d){qx.event.type.Dom.prototype.init.call(this,b,c,null,true,true);
this._charCode=d;
return this;
},clone:function(e){var f=qx.event.type.Dom.prototype.clone.call(this,e);
f._charCode=this._charCode;
return f;
},getCharCode:function(){return this._charCode;
},getChar:function(){return String.fromCharCode(this._charCode);
}}});
})();
(function(){var a="qx.event.type.KeySequence";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(b,c,d){qx.event.type.Dom.prototype.init.call(this,b,c,null,true,true);
this._keyCode=b.keyCode;
this._identifier=d;
return this;
},clone:function(e){var f=qx.event.type.Dom.prototype.clone.call(this,e);
f._keyCode=this._keyCode;
f._identifier=this._identifier;
return f;
},getKeyIdentifier:function(){return this._identifier;
},getKeyCode:function(){return this._keyCode;
},isPrintable:function(){return qx.event.handler.Keyboard.isPrintableKeyIdentifier(this._identifier);
}}});
})();
(function(){var t="blur",s="focus",r="on",q="selectstart",p="mousedown",o="DOMFocusOut",n="mouseup",m="activate",l="focusout",k="qxKeepActive",d="_applyActive",j="tabIndex",g="qx.event.handler.Focus",c="_applyFocus",b="qxSelectable",f="deactivate",e="input",h="textarea",a="focusin",i="qxKeepFocus";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(u){qx.core.Object.call(this);
this._manager=u;
this._window=u.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:d,nullable:true},focus:{apply:c,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:{button:1,input:1,select:1,textarea:1}},members:{__er:null,__es:null,__et:null,__eu:null,__ev:null,__ew:null,__ex:null,__ey:null,__ez:null,__eA:null,canHandleEvent:function(v,w){},registerEvent:function(x,y,z){},unregisterEvent:function(A,B,C){},focus:function(D){{try{D.focus();
}catch(E){}};
this.setFocus(D);
this.setActive(D);
},activate:function(F){this.setActive(F);
},blur:function(G){try{G.blur();
}catch(H){}
if(this.getActive()===G){this.resetActive();
}
if(this.getFocus()===G){this.resetFocus();
}},deactivate:function(I){if(this.getActive()===I){this.resetActive();
}},tryActivate:function(J){var K=this.__eO(J);

if(K){this.setActive(K);
}},__dH:function(L,M,N,O){var Q=qx.event.Registration;
var P=Q.createEvent(N,qx.event.type.Focus,[L,M,O]);
Q.dispatchEvent(L,P);
},_windowFocused:true,__eB:function(){if(this._windowFocused){this._windowFocused=false;
this.__dH(this._window,null,t,false);
}},__eC:function(){if(!this._windowFocused){this._windowFocused=true;
this.__dH(this._window,null,s,false);
}},_initObserver:function(){this.__er=qx.lang.Function.listener(this.__eI,this);
this.__es=qx.lang.Function.listener(this.__eJ,this);
this.__ey=qx.lang.Function.listener(this.__eF,this);
this.__et=qx.lang.Function.listener(this.__eH,this);
this.__eu=qx.lang.Function.listener(this.__eG,this);
this.__ew=qx.lang.Function.listener(this.__eL,this);
qx.bom.Event.addNativeListener(this._document,p,this.__er,true);
qx.bom.Event.addNativeListener(this._document,n,this.__es,true);
qx.bom.Event.addNativeListener(this._document,q,this.__ew,false);
qx.bom.Event.addNativeListener(this._window,o,this.__ey,true);
qx.bom.Event.addNativeListener(this._window,s,this.__et,true);
qx.bom.Event.addNativeListener(this._window,t,this.__eu,true);
},_stopObserver:function(){qx.bom.Event.removeNativeListener(this._document,p,this.__er,true);
qx.bom.Event.removeNativeListener(this._document,n,this.__es,true);
qx.bom.Event.removeNativeListener(this._document,q,this.__ew,false);
qx.bom.Event.removeNativeListener(this._window,o,this.__ey,true);
qx.bom.Event.removeNativeListener(this._window,s,this.__et,true);
qx.bom.Event.removeNativeListener(this._window,t,this.__eu,true);
},__eD:qx.event.GlobalError.observeMethod(null),__eE:qx.event.GlobalError.observeMethod(null),__eF:qx.event.GlobalError.observeMethod(function(R){var S=qx.bom.Event.getTarget(R);

if(S===this.getFocus()){this.resetFocus();
}
if(S===this.getActive()){this.resetActive();
}}),__eG:qx.event.GlobalError.observeMethod(function(T){var U=qx.bom.Event.getTarget(T);

if(U===this._window||U===this._document){this.__eB();
this.__ez=this.getFocus();
this.__eA=this.getActive();
this.resetActive();
this.resetFocus();
}}),__eH:qx.event.GlobalError.observeMethod(function(V){var W=qx.bom.Event.getTarget(V);

if(W===this._window||W===this._document){this.__eC();

if(this.__ez){this.setFocus(this.__ez);
delete this.__ez;
}
if(this.__eA){this.setActive(this.__eA);
delete this.__eA;
}}else{this.setFocus(W);
this.tryActivate(W);
}}),__eI:qx.event.GlobalError.observeMethod(function(X){var ba=qx.bom.Event.getTarget(X);
var Y=this.__eN(ba);

if(Y){this.setFocus(Y);
}else{qx.bom.Event.preventDefault(X);
}}),__eJ:qx.event.GlobalError.observeMethod(function(bb){var bc=qx.bom.Event.getTarget(bb);
this.tryActivate(this.__eK(bc));
}),__eK:qx.event.GlobalError.observeMethod(function(bd){var be=this.getFocus();

if(be&&bd!=be&&(be.nodeName.toLowerCase()===e||be.nodeName.toLowerCase()===h)){bd=be;
}return bd;
}),__eL:qx.event.GlobalError.observeMethod(function(bf){var bg=qx.bom.Event.getTarget(bf);

if(!this.__eP(bg)){qx.bom.Event.preventDefault(bf);
}}),__eM:function(bh){var bi=qx.bom.element.Attribute.get(bh,j);

if(bi>=1){return true;
}var bj=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(bi>=0&&bj[bh.tagName]){return true;
}return false;
},__eN:function(bk){while(bk&&bk.nodeType===1){if(bk.getAttribute(i)==r){return null;
}
if(this.__eM(bk)){return bk;
}bk=bk.parentNode;
}return this._body;
},__eO:function(bl){var bm=bl;

while(bl&&bl.nodeType===1){if(bl.getAttribute(k)==r){return null;
}bl=bl.parentNode;
}return bm;
},__eP:function(bn){while(bn&&bn.nodeType===1){var bo=bn.getAttribute(b);

if(bo!=null){return bo===r;
}bn=bn.parentNode;
}return true;
},_applyActive:function(bp,bq){if(bq){this.__dH(bq,bp,f,true);
}
if(bp){this.__dH(bp,bq,m,true);
}},_applyFocus:function(br,bs){if(bs){this.__dH(bs,br,l,true);
}
if(br){this.__dH(br,bs,a,true);
}if(bs){this.__dH(bs,br,t,false);
}
if(br){this.__dH(br,bs,s,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__eQ=null;
},defer:function(bt){qx.event.Registration.addHandler(bt);
var bu=bt.FOCUSABLE_ELEMENTS;

for(var bv in bu){bu[bv.toUpperCase()]=1;
}}});
})();
(function(){var a="qx.event.type.Focus";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d){qx.event.type.Event.prototype.init.call(this,d,false);
this._target=b;
this._relatedTarget=c;
return this;
}}});
})();
(function(){var a="qx.event.handler.Capture";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var k="alias",j="copy",i="blur",h="mouseout",g="keydown",f="Control",d="Shift",c="mousemove",b="move",a="mouseover",C="Alt",B="keyup",A="mouseup",z="keypress",y="dragend",x="on",w="mousedown",v="qxDraggable",u="Escape",t="drag",r="drop",s="qxDroppable",p="qx.event.handler.DragDrop",q="droprequest",n="dragstart",o="dragchange",l="dragleave",m="dragover";
qx.Class.define(p,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(D){qx.core.Object.call(this);
this.__db=D;
this.__cN=D.getWindow().document.documentElement;
this.__db.addListener(this.__cN,w,this._onMouseDown,this);
this.__fc();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__db:null,__cN:null,__eR:null,__eS:null,__eT:null,__eU:null,__eV:null,__j:null,__eW:null,__eX:null,__eY:false,__fa:0,__fb:0,canHandleEvent:function(E,F){},registerEvent:function(G,H,I){},unregisterEvent:function(J,K,L){},addType:function(M){this.__eT[M]=true;
},addAction:function(N){this.__eU[N]=true;
},supportsType:function(O){return !!this.__eT[O];
},supportsAction:function(P){return !!this.__eU[P];
},getData:function(Q){if(!this.__fi||!this.__eR){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__eT[Q]){throw new Error("Unsupported data type: "+Q+"!");
}
if(!this.__j[Q]){this.__eW=Q;
this.__dH(q,this.__eS,this.__eR,false);
}
if(!this.__j[Q]){throw new Error("Please use a droprequest listener to the drag source to fill the manager with data!");
}return this.__j[Q]||null;
},getCurrentAction:function(){return this.__eX;
},addData:function(R,S){this.__j[R]=S;
},getCurrentType:function(){return this.__eW;
},isSessionActive:function(){return this.__eY;
},__fc:function(){this.__eT={};
this.__eU={};
this.__eV={};
this.__j={};
},__fd:function(){if(this.__eS==null){return;
}var V=this.__eU;
var T=this.__eV;
var U=null;

if(this.__fi){if(T.Shift&&T.Control&&V.alias){U=k;
}else if(T.Shift&&T.Alt&&V.copy){U=j;
}else if(T.Shift&&V.move){U=b;
}else if(T.Alt&&V.alias){U=k;
}else if(T.Control&&V.copy){U=j;
}else if(V.move){U=b;
}else if(V.copy){U=j;
}else if(V.alias){U=k;
}}
if(U!=this.__eX){this.__eX=U;
this.__dH(o,this.__eS,this.__eR,false);
}},__dH:function(W,X,Y,ba,bb){var bd=qx.event.Registration;
var bc=bd.createEvent(W,qx.event.type.Drag,[ba,bb]);

if(X!==Y){bc.setRelatedTarget(Y);
}return bd.dispatchEvent(X,bc);
},__fe:function(be){while(be&&be.nodeType==1){if(be.getAttribute(v)==x){return be;
}be=be.parentNode;
}return null;
},__ff:function(bf){while(bf&&bf.nodeType==1){if(bf.getAttribute(s)==x){return bf;
}bf=bf.parentNode;
}return null;
},__fg:function(){this.__eS=null;
this.__db.removeListener(this.__cN,c,this._onMouseMove,this,true);
this.__db.removeListener(this.__cN,A,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,i,this._onWindowBlur,this);
this.__fc();
},__fh:function(){if(this.__eY){this.__db.removeListener(this.__cN,a,this._onMouseOver,this,true);
this.__db.removeListener(this.__cN,h,this._onMouseOut,this,true);
this.__db.removeListener(this.__cN,g,this._onKeyDown,this,true);
this.__db.removeListener(this.__cN,B,this._onKeyUp,this,true);
this.__db.removeListener(this.__cN,z,this._onKeyPress,this,true);
this.__dH(y,this.__eS,this.__eR,false);
this.__eY=false;
}this.__fi=false;
this.__eR=null;
this.__fg();
},__fi:false,_onWindowBlur:function(e){this.__fh();
},_onKeyDown:function(e){var bg=e.getKeyIdentifier();

switch(bg){case C:case f:case d:if(!this.__eV[bg]){this.__eV[bg]=true;
this.__fd();
}}},_onKeyUp:function(e){var bh=e.getKeyIdentifier();

switch(bh){case C:case f:case d:if(this.__eV[bh]){this.__eV[bh]=false;
this.__fd();
}}},_onKeyPress:function(e){var bi=e.getKeyIdentifier();

switch(bi){case u:this.__fh();
}},_onMouseDown:function(e){if(this.__eY){return;
}var bj=this.__fe(e.getTarget());

if(bj){this.__fa=e.getDocumentLeft();
this.__fb=e.getDocumentTop();
this.__eS=bj;
this.__db.addListener(this.__cN,c,this._onMouseMove,this,true);
this.__db.addListener(this.__cN,A,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,i,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__fi){this.__dH(r,this.__eR,this.__eS,false,e);
}if(this.__eY){e.stopPropagation();
}this.__fh();
},_onMouseMove:function(e){if(this.__eY){if(!this.__dH(t,this.__eS,this.__eR,true,e)){this.__fh();
}}else{if(Math.abs(e.getDocumentLeft()-this.__fa)>3||Math.abs(e.getDocumentTop()-this.__fb)>3){if(this.__dH(n,this.__eS,this.__eR,true,e)){this.__eY=true;
this.__db.addListener(this.__cN,a,this._onMouseOver,this,true);
this.__db.addListener(this.__cN,h,this._onMouseOut,this,true);
this.__db.addListener(this.__cN,g,this._onKeyDown,this,true);
this.__db.addListener(this.__cN,B,this._onKeyUp,this,true);
this.__db.addListener(this.__cN,z,this._onKeyPress,this,true);
var bk=this.__eV;
bk.Control=e.isCtrlPressed();
bk.Shift=e.isShiftPressed();
bk.Alt=e.isAltPressed();
this.__fd();
}else{this.__dH(y,this.__eS,this.__eR,false);
this.__fg();
}}}},_onMouseOver:function(e){var bl=e.getTarget();
var bm=this.__ff(bl);

if(bm&&bm!=this.__eR){this.__fi=this.__dH(m,bm,this.__eS,true,e);
this.__eR=bm;
this.__fd();
}},_onMouseOut:function(e){var bo=this.__ff(e.getTarget());
var bn=this.__ff(e.getRelatedTarget());

if(bo&&bo!==bn&&bo==this.__eR){this.__dH(l,this.__eR,bn,false,e);
this.__eR=null;
this.__fi=false;
qx.event.Timer.once(this.__fd,this,0);
}}},destruct:function(){this.__eS=this.__eR=this.__db=this.__cN=this.__eT=this.__eU=this.__eV=this.__j=null;
},defer:function(bp){qx.event.Registration.addHandler(bp);
}});
})();
(function(){var a="qx.event.type.Drag";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c){qx.event.type.Event.prototype.init.call(this,true,b);

if(c){this._native=c.getNativeEvent()||null;
this._originalTarget=c.getTarget()||null;
}else{this._native=null;
this._originalTarget=null;
}return this;
},clone:function(d){var e=qx.event.type.Event.prototype.clone.call(this,d);
e._native=this._native;
return e;
},getDocumentLeft:function(){if(this._native==null){return 0;
}
if(this._native.pageX!==undefined){return this._native.pageX;
}else{var f=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(f);
}},getDocumentTop:function(){if(this._native==null){return 0;
}
if(this._native.pageY!==undefined){return this._native.pageY;
}else{var g=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(g);
}},getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);
},addType:function(h){this.getManager().addType(h);
},addAction:function(i){this.getManager().addAction(i);
},supportsType:function(j){return this.getManager().supportsType(j);
},supportsAction:function(k){return this.getManager().supportsAction(k);
},addData:function(l,m){this.getManager().addData(l,m);
},getData:function(n){return this.getManager().getData(n);
},getCurrentType:function(){return this.getManager().getCurrentType();
},getCurrentAction:function(){return this.getManager().getCurrentAction();
}}});
})();
(function(){var h="interval",g="qx.event.Timer",f="_applyInterval",d="_applyEnabled",c="Boolean",b="qx.event.type.Event",a="Integer";
qx.Class.define(g,{extend:qx.core.Object,construct:function(i){qx.core.Object.call(this);
this.setEnabled(false);

if(i!=null){this.setInterval(i);
}var self=this;
this.__fj=function(){self._oninterval.call(self);
};
},events:{"interval":b},statics:{once:function(j,k,l){var m=new qx.event.Timer(l);
m.__fk=j;
m.addListener(h,function(e){m.stop();
j.call(k,e);
m.dispose();
k=null;
},k);
m.start();
return m;
}},properties:{enabled:{init:true,check:c,apply:d},interval:{check:a,init:1000,apply:f}},members:{__fl:null,__fj:null,_applyInterval:function(n,o){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(p,q){if(q){window.clearInterval(this.__fl);
this.__fl=null;
}else if(p){this.__fl=window.setInterval(this.__fj,this.getInterval());
}},start:function(){this.setEnabled(true);
},startWith:function(r){this.setInterval(r);
this.start();
},stop:function(){this.setEnabled(false);
},restart:function(){this.stop();
this.start();
},restartWith:function(s){this.stop();
this.startWith(s);
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.$$disposed){return;
}
if(this.getEnabled()){this.fireEvent(h);
}})},destruct:function(){if(this.__fl){window.clearInterval(this.__fl);
}this.__fl=this.__fj=null;
}});
})();
(function(){var o="",n=" ",m=">",k="<",h="='",g="none",f="<INPUT TYPE='RADIO' NAME='RADIOTEST' VALUE='Second Choice'>",d="qx.bom.Element",c="' ",b="div",a="></";
qx.Class.define(d,{statics:{__fm:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},__fn:{},__fo:{},allowCreationWithMarkup:function(p){if(!p){p=window;
}var q=p.location.href;

if(qx.bom.Element.__fo[q]==undefined){try{p.document.createElement(f);
qx.bom.Element.__fo[q]=true;
}catch(e){qx.bom.Element.__fo[q]=false;
}}return qx.bom.Element.__fo[q];
},getHelperElement:function(r){if(!r){r=window;
}var t=r.location.href;

if(!qx.bom.Element.__fn[t]){var s=qx.bom.Element.__fn[t]=r.document.createElement(b);
{s.style.display=g;
r.document.body.appendChild(s);
};
}return qx.bom.Element.__fn[t];
},create:function(name,u,v){if(!v){v=window;
}
if(!name){throw new Error("The tag name is missing!");
}var x=this.__fm;
var w=o;

for(var z in u){if(x[z]){w+=z+h+u[z]+c;
}}var A;
if(w!=o){if(qx.bom.Element.allowCreationWithMarkup(v)){A=v.document.createElement(k+name+n+w+m);
}else{var y=qx.bom.Element.getHelperElement(v);
y.innerHTML=k+name+n+w+a+name+m;
A=y.firstChild;
}}else{A=v.document.createElement(name);
}
for(var z in u){if(!x[z]){qx.bom.element.Attribute.set(A,z,u[z]);
}}return A;
},empty:function(B){return B.innerHTML=o;
},addListener:function(C,D,E,self,F){return qx.event.Registration.addListener(C,D,E,self,F);
},removeListener:function(G,H,I,self,J){return qx.event.Registration.removeListener(G,H,I,self,J);
},removeListenerById:function(K,L){return qx.event.Registration.removeListenerById(K,L);
},hasListener:function(M,N,O){return qx.event.Registration.hasListener(M,N,O);
},focus:function(P){qx.event.Registration.getManager(P).getHandler(qx.event.handler.Focus).focus(P);
},blur:function(Q){qx.event.Registration.getManager(Q).getHandler(qx.event.handler.Focus).blur(Q);
},activate:function(R){qx.event.Registration.getManager(R).getHandler(qx.event.handler.Focus).activate(R);
},deactivate:function(S){qx.event.Registration.getManager(S).getHandler(qx.event.handler.Focus).deactivate(S);
},capture:function(T,U){qx.event.Registration.getManager(T).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(T,U);
},releaseCapture:function(V){qx.event.Registration.getManager(V).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(V);
},matchesSelector:function(W,X){if(X){return qx.bom.Selector.query(X,W.parentNode).length>0;
}else{return false;
}},clone:function(Y,ba){var i,l;
var i,l;
var bd;

if(ba||((false)&&!qx.xml.Document.isXmlDocument(Y))){var bh=qx.event.Registration.getManager(Y);
var bb=qx.dom.Hierarchy.getDescendants(Y);
bb.push(Y);
}var bd=Y.cloneNode(true);
if(ba===true){var bk=qx.dom.Hierarchy.getDescendants(bd);
bk.push(bd);
var bc,bf,bj,be;

for(var i=0,bi=bb.length;i<bi;i++){bj=bb[i];
bc=bh.serializeListeners(bj);

if(bc.length>0){bf=bk[i];

for(var j=0,bg=bc.length;j<bg;j++){be=bc[j];
bh.addListener(bf,be.type,be.handler,be.self,be.capture);
}}}}return bd;
}}});
})();
(function(){var g="losecapture",f="blur",e="focus",d="click",c="qx.event.dispatch.MouseCapture",b="capture",a="scroll";
qx.Class.define(c,{extend:qx.event.dispatch.AbstractBubbling,construct:function(h,i){qx.event.dispatch.AbstractBubbling.call(this,h);
this.__cd=h.getWindow();
this.__cf=i;
h.addListener(this.__cd,f,this.releaseCapture,this);
h.addListener(this.__cd,e,this.releaseCapture,this);
h.addListener(this.__cd,a,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__cf:null,__fp:null,__fq:true,__cd:null,_getParent:function(j){return j.parentNode;
},canDispatchEvent:function(k,event,l){return !!(this.__fp&&this.__fr[l]);
},dispatchEvent:function(m,event,n){if(n==d){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__fq||!qx.dom.Hierarchy.contains(this.__fp,m)){m=this.__fp;
}qx.event.dispatch.AbstractBubbling.prototype.dispatchEvent.call(this,m,event,n);
},__fr:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(o,p){var p=p!==false;

if(this.__fp===o&&this.__fq==p){return;
}
if(this.__fp){this.releaseCapture();
}this.nativeSetCapture(o,p);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(o,g,function(){qx.bom.Event.removeNativeListener(o,g,arguments.callee);
self.releaseCapture();
});
}this.__fq=p;
this.__fp=o;
this.__cf.fireEvent(o,b,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__fp;
},releaseCapture:function(){var q=this.__fp;

if(!q){return;
}this.__fp=null;
this.__cf.fireEvent(q,g,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(q);
},hasNativeCapture:false,nativeSetCapture:qx.lang.Function.empty,nativeReleaseCapture:qx.lang.Function.empty},destruct:function(){this.__fp=this.__cd=this.__cf=null;
},defer:function(r){qx.event.Registration.addDispatcher(r);
}});
})();
(function(){var a="qx.event.handler.Window";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(b){qx.core.Object.call(this);
this._manager=b;
this._window=b.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(c,d){},registerEvent:function(f,g,h){},unregisterEvent:function(i,j,k){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var m=qx.event.handler.Window.SUPPORTED_TYPES;

for(var l in m){qx.bom.Event.addNativeListener(this._window,l,this._onNativeWrapper);
}},_stopWindowObserver:function(){var o=qx.event.handler.Window.SUPPORTED_TYPES;

for(var n in o){qx.bom.Event.removeNativeListener(this._window,n,this._onNativeWrapper);
}},_onNative:qx.event.GlobalError.observeMethod(function(e){if(this.isDisposed()){return;
}var q=this._window;

try{var t=q.document;
}catch(e){return ;
}var r=t.documentElement;
var p=qx.bom.Event.getTarget(e);

if(p==null||p===q||p===t||p===r){var event=qx.event.Registration.createEvent(e.type,qx.event.type.Native,[e,q]);
qx.event.Registration.dispatchEvent(q,event);
var s=event.getReturnValue();

if(s!=null){e.returnValue=s;
return s;
}}})},destruct:function(){this._stopWindowObserver();
this._manager=this._window=null;
},defer:function(u){qx.event.Registration.addHandler(u);
}});
})();
(function(){var c="qx.bom.Selector";
qx.Class.define(c,{statics:{query:null,matches:null}});
(function(){var o=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,v=0,x=Object.prototype.toString,p=false,z=true,t=/\\/g,g=/\W/;
[0,0].sort(function(){z=false;
return 0;
});
var s=function(B,C,D,E){D=D||[];
C=C||document;
var N=C;

if(C.nodeType!==1&&C.nodeType!==9){return [];
}
if(!B||typeof B!=="string"){return D;
}var m,H,F,J,L,I,O,i,P=true,G=s.isXML(C),K=[],M=B;
do{o.exec("");
m=o.exec(M);

if(m){M=m[3];
K.push(m[1]);

if(m[2]){J=m[3];
break;
}}}while(m);

if(K.length>1&&q.exec(B)){if(K.length===2&&k.relative[K[0]]){H=h(K[0]+K[1],C);
}else{H=k.relative[K[0]]?[C]:s(K.shift(),C);

while(K.length){B=K.shift();

if(k.relative[B]){B+=K.shift();
}H=h(B,H);
}}}else{if(!E&&K.length>1&&C.nodeType===9&&!G&&k.match.ID.test(K[0])&&!k.match.ID.test(K[K.length-1])){L=s.find(K.shift(),C,G);
C=L.expr?s.filter(L.expr,L.set)[0]:L.set[0];
}
if(C){L=E?{expr:K.pop(),set:f(E)}:s.find(K.pop(),K.length===1&&(K[0]==="~"||K[0]==="+")&&C.parentNode?C.parentNode:C,G);
H=L.expr?s.filter(L.expr,L.set):L.set;

if(K.length>0){F=f(H);
}else{P=false;
}
while(K.length){I=K.pop();
O=I;

if(!k.relative[I]){I="";
}else{O=K.pop();
}
if(O==null){O=C;
}k.relative[I](F,O,G);
}}else{F=K=[];
}}
if(!F){F=H;
}
if(!F){s.error(I||B);
}
if(x.call(F)==="[object Array]"){if(!P){D.push.apply(D,F);
}else if(C&&C.nodeType===1){for(i=0;F[i]!=null;i++){if(F[i]&&(F[i]===true||F[i].nodeType===1&&s.contains(C,F[i]))){D.push(H[i]);
}}}else{for(i=0;F[i]!=null;i++){if(F[i]&&F[i].nodeType===1){D.push(H[i]);
}}}}else{f(F,D);
}
if(J){s(J,N,D,E);
s.uniqueSort(D);
}return D;
};
s.uniqueSort=function(Q){if(u){p=z;
Q.sort(u);

if(p){for(var i=1;i<Q.length;i++){if(Q[i]===Q[i-1]){Q.splice(i--,1);
}}}}return Q;
};
s.matches=function(R,S){return s(R,null,null,S);
};
s.matchesSelector=function(T,U){return s(U,null,null,[T]).length>0;
};
s.find=function(V,W,X){var Y;

if(!V){return [];
}
for(var i=0,l=k.order.length;i<l;i++){var bb,ba=k.order[i];

if((bb=k.leftMatch[ba].exec(V))){var bc=bb[1];
bb.splice(1,1);

if(bc.substr(bc.length-1)!=="\\"){bb[1]=(bb[1]||"").replace(t,"");
Y=k.find[ba](bb,W,X);

if(Y!=null){V=V.replace(k.match[ba],"");
break;
}}}}
if(!Y){Y=typeof W.getElementsByTagName!=="undefined"?W.getElementsByTagName("*"):[];
}return {set:Y,expr:V};
};
s.filter=function(bd,be,bf,bg){var bt,bs,bh=bd,bn=[],bi=be,bj=be&&be[0]&&s.isXML(be[0]);

while(bd&&be.length){for(var br in k.filter){if((bt=k.leftMatch[br].exec(bd))!=null&&bt[2]){var bq,bm,bk=k.filter[br],bu=bt[1];
bs=false;
bt.splice(1,1);

if(bu.substr(bu.length-1)==="\\"){continue;
}
if(bi===bn){bn=[];
}
if(k.preFilter[br]){bt=k.preFilter[br](bt,bi,bf,bn,bg,bj);

if(!bt){bs=bq=true;
}else if(bt===true){continue;
}}
if(bt){for(var i=0;(bm=bi[i])!=null;i++){if(bm){bq=bk(bm,bt,i,bi);
var bo=bg^!!bq;

if(bf&&bq!=null){if(bo){bs=true;
}else{bi[i]=false;
}}else if(bo){bn.push(bm);
bs=true;
}}}}
if(bq!==undefined){if(!bf){bi=bn;
}bd=bd.replace(k.match[br],"");

if(!bs){return [];
}break;
}}}if(bd===bh){if(bs==null){s.error(bd);
}else{break;
}}bh=bd;
}return bi;
};
s.error=function(bv){throw "Syntax error, unrecognized expression: "+bv;
};
var k=s.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(bw){return bw.getAttribute("href");
},type:function(bx){return bx.getAttribute("type");
}},relative:{"+":function(by,bz){var bA=typeof bz==="string",bC=bA&&!g.test(bz),bD=bA&&!bC;

if(bC){bz=bz.toLowerCase();
}
for(var i=0,l=by.length,bB;i<l;i++){if((bB=by[i])){while((bB=bB.previousSibling)&&bB.nodeType!==1){}by[i]=bD||bB&&bB.nodeName.toLowerCase()===bz?bB||false:bB===bz;
}}
if(bD){s.filter(bz,by,true);
}},">":function(bE,bF){var bH,bG=typeof bF==="string",i=0,l=bE.length;

if(bG&&!g.test(bF)){bF=bF.toLowerCase();

for(;i<l;i++){bH=bE[i];

if(bH){var parent=bH.parentNode;
bE[i]=parent.nodeName.toLowerCase()===bF?parent:false;
}}}else{for(;i<l;i++){bH=bE[i];

if(bH){bE[i]=bG?bH.parentNode:bH.parentNode===bF;
}}
if(bG){s.filter(bF,bE,true);
}}},"":function(bI,bJ,bK){var bN,bL=v++,bM=y;

if(typeof bJ==="string"&&!g.test(bJ)){bJ=bJ.toLowerCase();
bN=bJ;
bM=A;
}bM("parentNode",bJ,bL,bI,bN,bK);
},"~":function(bO,bP,bQ){var bT,bR=v++,bS=y;

if(typeof bP==="string"&&!g.test(bP)){bP=bP.toLowerCase();
bT=bP;
bS=A;
}bS("previousSibling",bP,bR,bO,bT,bQ);
}},find:{ID:function(bU,bV,bW){if(typeof bV.getElementById!=="undefined"&&!bW){var m=bV.getElementById(bU[1]);
return m&&m.parentNode?[m]:[];
}},NAME:function(bX,bY){if(typeof bY.getElementsByName!=="undefined"){var cb=[],ca=bY.getElementsByName(bX[1]);

for(var i=0,l=ca.length;i<l;i++){if(ca[i].getAttribute("name")===bX[1]){cb.push(ca[i]);
}}return cb.length===0?null:cb;
}},TAG:function(cc,cd){if(typeof cd.getElementsByTagName!=="undefined"){return cd.getElementsByTagName(cc[1]);
}}},preFilter:{CLASS:function(ce,cf,cg,ch,ci,cj){ce=" "+ce[1].replace(t,"")+" ";

if(cj){return ce;
}
for(var i=0,ck;(ck=cf[i])!=null;i++){if(ck){if(ci^(ck.className&&(" "+ck.className+" ").replace(/[\t\n\r]/g," ").indexOf(ce)>=0)){if(!cg){ch.push(ck);
}}else if(cg){cf[i]=false;
}}}return false;
},ID:function(cl){return cl[1].replace(t,"");
},TAG:function(cm,cn){return cm[1].replace(t,"").toLowerCase();
},CHILD:function(co){if(co[1]==="nth"){if(!co[2]){s.error(co[0]);
}co[2]=co[2].replace(/^\+|\s*/g,'');
var cp=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(co[2]==="even"&&"2n"||co[2]==="odd"&&"2n+1"||!/\D/.test(co[2])&&"0n+"+co[2]||co[2]);
co[2]=(cp[1]+(cp[2]||1))-0;
co[3]=cp[3]-0;
}else if(co[2]){s.error(co[0]);
}co[0]=v++;
return co;
},ATTR:function(cq,cr,cs,ct,cu,cv){var name=cq[1]=cq[1].replace(t,"");

if(!cv&&k.attrMap[name]){cq[1]=k.attrMap[name];
}cq[4]=(cq[4]||cq[5]||"").replace(t,"");

if(cq[2]==="~="){cq[4]=" "+cq[4]+" ";
}return cq;
},PSEUDO:function(cw,cx,cy,cz,cA){if(cw[1]==="not"){if((o.exec(cw[3])||"").length>1||/^\w/.test(cw[3])){cw[3]=s(cw[3],null,null,cx);
}else{var cB=s.filter(cw[3],cx,cy,true^cA);

if(!cy){cz.push.apply(cz,cB);
}return false;
}}else if(k.match.POS.test(cw[0])||k.match.CHILD.test(cw[0])){return true;
}return cw;
},POS:function(cC){cC.unshift(true);
return cC;
}},filters:{enabled:function(cD){return cD.disabled===false&&cD.type!=="hidden";
},disabled:function(cE){return cE.disabled===true;
},checked:function(cF){return cF.checked===true;
},selected:function(cG){if(cG.parentNode){cG.parentNode.selectedIndex;
}return cG.selected===true;
},parent:function(cH){return !!cH.firstChild;
},empty:function(cI){return !cI.firstChild;
},has:function(cJ,i,cK){return !!s(cK[3],cJ).length;
},header:function(cL){return (/h\d/i).test(cL.nodeName);
},text:function(cM){return "text"===cM.getAttribute('type');
},radio:function(cN){return "radio"===cN.type;
},checkbox:function(cO){return "checkbox"===cO.type;
},file:function(cP){return "file"===cP.type;
},password:function(cQ){return "password"===cQ.type;
},submit:function(cR){return "submit"===cR.type;
},image:function(cS){return "image"===cS.type;
},reset:function(cT){return "reset"===cT.type;
},button:function(cU){return "button"===cU.type||cU.nodeName.toLowerCase()==="button";
},input:function(cV){return (/input|select|textarea|button/i).test(cV.nodeName);
}},setFilters:{first:function(cW,i){return i===0;
},last:function(cX,i,cY,da){return i===da.length-1;
},even:function(db,i){return i%2===0;
},odd:function(dc,i){return i%2===1;
},lt:function(dd,i,de){return i<de[3]-0;
},gt:function(df,i,dg){return i>dg[3]-0;
},nth:function(dh,i,di){return di[3]-0===i;
},eq:function(dj,i,dk){return dk[3]-0===i;
}},filter:{PSEUDO:function(dl,dm,i,dn){var name=dm[1],dp=k.filters[name];

if(dp){return dp(dl,i,dm,dn);
}else if(name==="contains"){return (dl.textContent||dl.innerText||s.getText([dl])||"").indexOf(dm[3])>=0;
}else if(name==="not"){var dq=dm[3];

for(var j=0,l=dq.length;j<l;j++){if(dq[j]===dl){return false;
}}return true;
}else{s.error(name);
}},CHILD:function(dr,ds){var dy=ds[1],dt=dr;

switch(dy){case "only":case "first":while((dt=dt.previousSibling)){if(dt.nodeType===1){return false;
}}
if(dy==="first"){return true;
}dt=dr;
case "last":while((dt=dt.nextSibling)){if(dt.nodeType===1){return false;
}}return true;
case "nth":var dz=ds[2],dv=ds[3];

if(dz===1&&dv===0){return true;
}var dx=ds[0],parent=dr.parentNode;

if(parent&&(parent.sizcache!==dx||!dr.nodeIndex)){var du=0;

for(dt=parent.firstChild;dt;dt=dt.nextSibling){if(dt.nodeType===1){dt.nodeIndex=++du;
}}parent.sizcache=dx;
}var dw=dr.nodeIndex-dv;

if(dz===0){return dw===0;
}else{return (dw%dz===0&&dw/dz>=0);
}}},ID:function(dA,dB){return dA.nodeType===1&&dA.getAttribute("id")===dB;
},TAG:function(dC,dD){return (dD==="*"&&dC.nodeType===1)||dC.nodeName.toLowerCase()===dD;
},CLASS:function(dE,dF){return (" "+(dE.className||dE.getAttribute("class"))+" ").indexOf(dF)>-1;
},ATTR:function(dG,dH){var name=dH[1],dL=k.attrHandle[name]?k.attrHandle[name](dG):dG[name]!=null?dG[name]:dG.getAttribute(name),dK=dL+"",dJ=dH[2],dI=dH[4];
return dL==null?dJ==="!=":dJ==="="?dK===dI:dJ==="*="?dK.indexOf(dI)>=0:dJ==="~="?(" "+dK+" ").indexOf(dI)>=0:!dI?dK&&dL!==false:dJ==="!="?dK!==dI:dJ==="^="?dK.indexOf(dI)===0:dJ==="$="?dK.substr(dK.length-dI.length)===dI:dJ==="|="?dK===dI||dK.substr(0,dI.length+1)===dI+"-":false;
},POS:function(dM,dN,i,dO){var name=dN[2],dP=k.setFilters[name];

if(dP){return dP(dM,i,dN,dO);
}}}};
var q=k.match.POS,d=function(dQ,dR){return "\\"+(dR-0+1);
};

for(var w in k.match){k.match[w]=new RegExp(k.match[w].source+(/(?![^\[]*\])(?![^\(]*\))/.source));
k.leftMatch[w]=new RegExp(/(^(?:.|\r|\n)*?)/.source+k.match[w].source.replace(/\\(\d+)/g,d));
}var f=function(dS,dT){dS=Array.prototype.slice.call(dS,0);

if(dT){dT.push.apply(dT,dS);
return dT;
}return dS;
};
try{Array.prototype.slice.call(document.documentElement.childNodes,0)[0].nodeType;
}catch(e){f=function(dU,dV){var i=0,dW=dV||[];

if(x.call(dU)==="[object Array]"){Array.prototype.push.apply(dW,dU);
}else{if(typeof dU.length==="number"){for(var l=dU.length;i<l;i++){dW.push(dU[i]);
}}else{for(;dU[i];i++){dW.push(dU[i]);
}}}return dW;
};
}var u,n;

if(document.documentElement.compareDocumentPosition){u=function(a,b){if(a===b){p=true;
return 0;
}
if(!a.compareDocumentPosition||!b.compareDocumentPosition){return a.compareDocumentPosition?-1:1;
}return a.compareDocumentPosition(b)&4?-1:1;
};
}else{u=function(a,b){var ec,ea,ed=[],ee=[],dY=a.parentNode,eb=b.parentNode,dX=dY;
if(a===b){p=true;
return 0;
}else if(dY===eb){return n(a,b);
}else if(!dY){return -1;
}else if(!eb){return 1;
}while(dX){ed.unshift(dX);
dX=dX.parentNode;
}dX=eb;

while(dX){ee.unshift(dX);
dX=dX.parentNode;
}ec=ed.length;
ea=ee.length;
for(var i=0;i<ec&&i<ea;i++){if(ed[i]!==ee[i]){return n(ed[i],ee[i]);
}}return i===ec?n(a,ee[i],-1):n(ed[i],b,1);
};
n=function(a,b,ef){if(a===b){return ef;
}var eg=a.nextSibling;

while(eg){if(eg===b){return -1;
}eg=eg.nextSibling;
}return 1;
};
}s.getText=function(eh){var ej="",ei;

for(var i=0;eh[i];i++){ei=eh[i];
if(ei.nodeType===3||ei.nodeType===4){ej+=ei.nodeValue;
}else if(ei.nodeType!==8){ej+=s.getText(ei.childNodes);
}}return ej;
};
(function(){var em=document.createElement("div"),el="script"+(new Date()).getTime(),ek=document.documentElement;
em.innerHTML="<a name='"+el+"'/>";
ek.insertBefore(em,ek.firstChild);
if(document.getElementById(el)){k.find.ID=function(en,eo,ep){if(typeof eo.getElementById!=="undefined"&&!ep){var m=eo.getElementById(en[1]);
return m?m.id===en[1]||typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id").nodeValue===en[1]?[m]:undefined:[];
}};
k.filter.ID=function(eq,er){var es=typeof eq.getAttributeNode!=="undefined"&&eq.getAttributeNode("id");
return eq.nodeType===1&&es&&es.nodeValue===er;
};
}ek.removeChild(em);
ek=em=null;
})();
(function(){var et=document.createElement("div");
et.appendChild(document.createComment(""));
if(et.getElementsByTagName("*").length>0){k.find.TAG=function(eu,ev){var ex=ev.getElementsByTagName(eu[1]);
if(eu[1]==="*"){var ew=[];

for(var i=0;ex[i];i++){if(ex[i].nodeType===1){ew.push(ex[i]);
}}ex=ew;
}return ex;
};
}et.innerHTML="<a href='#'></a>";

if(et.firstChild&&typeof et.firstChild.getAttribute!=="undefined"&&et.firstChild.getAttribute("href")!=="#"){k.attrHandle.href=function(ey){return ey.getAttribute("href",2);
};
}et=null;
})();

if(document.querySelectorAll){(function(){var eA=s,ez=document.createElement("div"),eB="__sizzle__";
ez.innerHTML="<p class='TEST'></p>";
if(ez.querySelectorAll&&ez.querySelectorAll(".TEST").length===0){return;
}s=function(eD,eE,eF,eG){eE=eE||document;
if(!eG&&!s.isXML(eE)){var eL=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(eD);

if(eL&&(eE.nodeType===1||eE.nodeType===9)){if(eL[1]){return f(eE.getElementsByTagName(eD),eF);
}else if(eL[2]&&k.find.CLASS&&eE.getElementsByClassName){return f(eE.getElementsByClassName(eL[2]),eF);
}}
if(eE.nodeType===9){if(eD==="body"&&eE.body){return f([eE.body],eF);
}else if(eL&&eL[3]){var eJ=eE.getElementById(eL[3]);
if(eJ&&eJ.parentNode){if(eJ.id===eL[3]){return f([eJ],eF);
}}else{return f([],eF);
}}
try{return f(eE.querySelectorAll(eD),eF);
}catch(eO){}}else if(eE.nodeType===1&&eE.nodeName.toLowerCase()!=="object"){var eN=eE,eI=eE.getAttribute("id"),eK=eI||eB,eH=eE.parentNode,eM=/^\s*[+~]/.test(eD);

if(!eI){eE.setAttribute("id",eK);
}else{eK=eK.replace(/'/g,"\\$&");
}
if(eM&&eH){eE=eE.parentNode;
}
try{if(!eM||eH){return f(eE.querySelectorAll("[id='"+eK+"'] "+eD),eF);
}}catch(eP){}finally{if(!eI){eN.removeAttribute("id");
}}}}return eA(eD,eE,eF,eG);
};

for(var eC in eA){s[eC]=eA[eC];
}ez=null;
})();
}(function(){var eS=document.documentElement,eQ=eS.matchesSelector||eS.mozMatchesSelector||eS.webkitMatchesSelector||eS.msMatchesSelector,eR=false;

try{eQ.call(document.documentElement,"[test!='']:sizzle");
}catch(eT){eR=true;
}
if(eQ){s.matchesSelector=function(eU,eV){eV=eV.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");

if(!s.isXML(eU)){try{if(eR||!k.match.PSEUDO.test(eV)&&!/!=/.test(eV)){return eQ.call(eU,eV);
}}catch(e){}}return s(eV,null,null,[eU]).length>0;
};
}})();
(function(){var eW=document.createElement("div");
eW.innerHTML="<div class='test e'></div><div class='test'></div>";
if(!eW.getElementsByClassName||eW.getElementsByClassName("e").length===0){return;
}eW.lastChild.className="e";

if(eW.getElementsByClassName("e").length===1){return;
}k.order.splice(1,0,"CLASS");
k.find.CLASS=function(eX,eY,fa){if(typeof eY.getElementsByClassName!=="undefined"&&!fa){return eY.getElementsByClassName(eX[1]);
}};
eW=null;
})();
function A(fb,fc,fd,fe,ff,fg){for(var i=0,l=fe.length;i<l;i++){var fi=fe[i];

if(fi){var fh=false;
fi=fi[fb];

while(fi){if(fi.sizcache===fd){fh=fe[fi.sizset];
break;
}
if(fi.nodeType===1&&!fg){fi.sizcache=fd;
fi.sizset=i;
}
if(fi.nodeName.toLowerCase()===fc){fh=fi;
break;
}fi=fi[fb];
}fe[i]=fh;
}}}function y(fj,fk,fl,fm,fn,fo){for(var i=0,l=fm.length;i<l;i++){var fq=fm[i];

if(fq){var fp=false;
fq=fq[fj];

while(fq){if(fq.sizcache===fl){fp=fm[fq.sizset];
break;
}
if(fq.nodeType===1){if(!fo){fq.sizcache=fl;
fq.sizset=i;
}
if(typeof fk!=="string"){if(fq===fk){fp=true;
break;
}}else if(s.filter(fk,[fq]).length>0){fp=fq;
break;
}}fq=fq[fj];
}fm[i]=fp;
}}}
if(document.documentElement.contains){s.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):true);
};
}else if(document.documentElement.compareDocumentPosition){s.contains=function(a,b){return !!(a.compareDocumentPosition(b)&16);
};
}else{s.contains=function(){return false;
};
}s.isXML=function(fr){var fs=(fr?fr.ownerDocument||fr:0).documentElement;
return fs?fs.nodeName!=="HTML":false;
};
var h=function(ft,fu){var fy,fw=[],fv="",fx=fu.nodeType?[fu]:fu;
while((fy=k.match.PSEUDO.exec(ft))){fv+=fy[0];
ft=ft.replace(k.match.PSEUDO,"");
}ft=k.relative[ft]?ft+"*":ft;

for(var i=0,l=fx.length;i<l;i++){s(ft,fx[i],fw);
}return s.filter(fv,fw);
};
var r=qx.bom.Selector;
r.query=function(fz,fA){return s(fz,fA);
};
r.matches=function(fB,fC){return s(fB,null,null,fC);
};
})();
})();
(function(){var d="",c="text/xml",b="qx.xml.Document",a="HTML";
qx.Class.define(b,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(e){if(e.nodeType===9){return e.documentElement.nodeName!==a;
}else if(e.ownerDocument){return this.isXmlDocument(e.ownerDocument);
}else{return false;
}},create:function(f,g){return document.implementation.createDocument(f||d,g||d,null);
},fromString:function(h){var j=new DOMParser();
return j.parseFromString(h,c);
}},defer:function(k){var m,n,i,l;
}});
})();
(function(){var u="",r="none",q="scroll",p="qx.bom.element.Overflow",o="overflowY",n="borderLeftStyle",m="overflow-x",l="overflow",k="borderLeftWidth",j="100px",d="overflowX",i="-moz-scrollbars-vertical",g="borderRightStyle",b=":",a="div",f="overflow-y",e="borderRightWidth",h=";";
qx.Class.define(p,{statics:{__fs:null,getScrollbarWidth:function(){if(this.__fs!==null){return this.__fs;
}var v=qx.bom.element.Style;
var x=function(B,C){return parseInt(v.get(B,C),10)||0;
};
var y=function(D){return (v.get(D,g)==r?0:x(D,e));
};
var w=function(E){return (v.get(E,n)==r?0:x(E,k));
};
var A=function(F){if(F.clientWidth==0){var G=v.get(F,l);
var H=(G==q||G==i?16:0);
return Math.max(0,y(F)+H);
}return Math.max(0,(F.offsetWidth-F.clientWidth-w(F)));
};
var z=function(I){return A(I)-y(I);
};
var t=document.createElement(a);
var s=t.style;
s.height=s.width=j;
s.overflow=q;
document.body.appendChild(t);
var c=z(t);
this.__fs=c?c:16;
document.body.removeChild(t);
return this.__fs;
},_compile:function(J,K){return J+b+K+h;
},compileX:function(L){return this._compile(m,L);
},compileY:function(M){return this._compile(f,M);
},getX:function(N,O){return qx.bom.element.Style.get(N,d,O,false);
},setX:function(P,Q){P.style.overflowX=Q;
},resetX:function(R){R.style.overflowX=u;
},getY:function(S,T){return qx.bom.element.Style.get(S,o,T,false);
},setY:function(U,V){U.style.overflowY=V;
},resetY:function(W){W.style.overflowY=u;
}}});
})();
(function(){var o="auto",n="px",m=",",l="clip:auto;",k="rect(",j=");",i="",h=")",g="qx.bom.element.Clip",f="string",c="clip:rect(",e=" ",d="clip",b="rect(auto,auto,auto,auto)",a="rect(auto, auto, auto, auto)";
qx.Class.define(g,{statics:{compile:function(p){if(!p){return l;
}var u=p.left;
var top=p.top;
var t=p.width;
var s=p.height;
var q,r;

if(u==null){q=(t==null?o:t+n);
u=o;
}else{q=(t==null?o:u+t+n);
u=u+n;
}
if(top==null){r=(s==null?o:s+n);
top=o;
}else{r=(s==null?o:top+s+n);
top=top+n;
}return c+top+m+q+m+r+m+u+j;
},get:function(v,w){var y=qx.bom.element.Style.get(v,d,w,false);
var E,top,C,B;
var x,z;

if(typeof y===f&&y!==o&&y!==i){y=qx.lang.String.trim(y);
if(/\((.*)\)/.test(y)){var D=RegExp.$1;
if(/,/.test(D)){var A=D.split(m);
}else{var A=D.split(e);
}top=qx.lang.String.trim(A[0]);
x=qx.lang.String.trim(A[1]);
z=qx.lang.String.trim(A[2]);
E=qx.lang.String.trim(A[3]);
if(E===o){E=null;
}
if(top===o){top=null;
}
if(x===o){x=null;
}
if(z===o){z=null;
}if(top!=null){top=parseInt(top,10);
}
if(x!=null){x=parseInt(x,10);
}
if(z!=null){z=parseInt(z,10);
}
if(E!=null){E=parseInt(E,10);
}if(x!=null&&E!=null){C=x-E;
}else if(x!=null){C=x;
}
if(z!=null&&top!=null){B=z-top;
}else if(z!=null){B=z;
}}else{throw new Error("Could not parse clip string: "+y);
}}return {left:E||null,top:top||null,width:C||null,height:B||null};
},set:function(F,G){if(!G){F.style.clip=b;
return;
}var L=G.left;
var top=G.top;
var K=G.width;
var J=G.height;
var H,I;

if(L==null){H=(K==null?o:K+n);
L=o;
}else{H=(K==null?o:L+K+n);
L=L+n;
}
if(top==null){I=(J==null?o:J+n);
top=o;
}else{I=(J==null?o:top+J+n);
top=top+n;
}F.style.clip=k+top+m+H+m+I+m+L+h;
},reset:function(M){M.style.clip=a;
}}});
})();
(function(){var e="",d="opacity",c="qx.bom.element.Opacity",b=";",a="opacity:";
qx.Class.define(c,{statics:{SUPPORT_CSS3_OPACITY:false,compile:function(f){if(f>=1){return e;
}return a+f+b;
},set:function(g,h){if(h>=1){h=e;
}g.style.opacity=h;
},reset:function(i){i.style.opacity=e;
},get:function(j,k){var l=qx.bom.element.Style.get(j,d,k,false);

if(l!=null){return parseFloat(l);
}return 1.0;
}},defer:function(m){m.SUPPORT_CSS3_OPACITY=(typeof document.documentElement.style.opacity=="string");
}});
})();
(function(){var k="",j="qx.bom.element.BoxSizing",h="KhtmlBoxSizing",g="boxSizing",f="WebkitBoxSizing",e=":",d=";",c="-khtml-box-sizing",b="box-sizing",a="-webkit-box-sizing";
qx.Class.define(j,{statics:{__ft:[g,h,f],__fu:[b,c,a],__fv:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__fw:function(m){var n=this.__fv;
return n.tags[m.tagName.toLowerCase()]||n.types[m.type];
},compile:function(o){var q=this.__fu;
var p=k;

if(q){for(var i=0,l=q.length;i<l;i++){p+=q[i]+e+o+d;
}}return p;
},get:function(r){var t=this.__ft;
var s;

if(t){for(var i=0,l=t.length;i<l;i++){s=qx.bom.element.Style.get(r,t[i],null,false);

if(s!=null&&s!==k){return s;
}}}return k;
},set:function(u,v){var w=this.__ft;

if(w){for(var i=0,l=w.length;i<l;i++){u.style[w[i]]=v;
}}},reset:function(x){this.set(x,k);
}}});
})();
(function(){var e="",d="cursor:",c="qx.bom.element.Cursor",b="cursor",a=";";
qx.Class.define(c,{statics:{__bi:{},compile:function(f){return d+(this.__bi[f]||f)+a;
},get:function(g,h){return qx.bom.element.Style.get(g,b,h,false);
},set:function(i,j){i.style.cursor=this.__bi[j]||j;
},reset:function(k){k.style.cursor=e;
}}});
})();
(function(){var m="",k="style",h="pixelRight",g="float",f="borderImage",e="userSelect",d="appearance",c="pixelHeight",b='Ms',a=":",B="cssFloat",A="pixelTop",z="pixelLeft",y='O',x="qx.bom.element.Style",w='Khtml',v='string',u="pixelBottom",t='Moz',s="pixelWidth",q=";",r="textOverflow",o="userModify",p='Webkit',n="WebkitUserModify";
qx.Class.define(x,{statics:{__fx:function(){var C=[d,e,r,f];
var G={};
var D=document.documentElement.style;
var H=[t,p,w,y,b];

for(var i=0,l=C.length;i<l;i++){var I=C[i];
var E=I;

if(D[I]){G[E]=I;
continue;
}I=qx.lang.String.firstUp(I);

for(var j=0,J=H.length;j<J;j++){var F=H[j]+I;

if(typeof D[F]==v){G[E]=F;
break;
}}}this.__fy=G;
this.__fy[o]=n;
this.__fz={};

for(var E in G){this.__fz[E]=this.__fD(G[E]);
}this.__fy[g]=B;
},__fA:{width:s,height:c,left:z,right:h,top:A,bottom:u},__fB:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}},compile:function(K){var M=[];
var O=this.__fB;
var N=this.__fz;
var name,L;

for(name in K){L=K[name];

if(L==null){continue;
}name=N[name]||name;
if(O[name]){M.push(O[name].compile(L));
}else{M.push(this.__fD(name),a,L,q);
}}return M.join(m);
},__fC:{},__fD:function(P){var Q=this.__fC;
var R=Q[P];

if(!R){R=Q[P]=qx.lang.String.hyphenate(P);
}return R;
},setCss:function(S,T){S.setAttribute(k,T);
},getCss:function(U){return U.getAttribute(k);
},isPropertySupported:function(V){return (this.__fB[V]||this.__fy[V]||V in document.documentElement.style);
},COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(W,name,X,Y){name=this.__fy[name]||name;
if(Y!==false&&this.__fB[name]){return this.__fB[name].set(W,X);
}else{W.style[name]=X!==null?X:m;
}},setStyles:function(ba,bb,bc){var bf=this.__fy;
var bh=this.__fB;
var bd=ba.style;

for(var bg in bb){var be=bb[bg];
var name=bf[bg]||bg;

if(be===undefined){if(bc!==false&&bh[name]){bh[name].reset(ba);
}else{bd[name]=m;
}}else{if(bc!==false&&bh[name]){bh[name].set(ba,be);
}else{bd[name]=be!==null?be:m;
}}}},reset:function(bi,name,bj){name=this.__fy[name]||name;
if(bj!==false&&this.__fB[name]){return this.__fB[name].reset(bi);
}else{bi.style[name]=m;
}},get:function(bk,name,bl,bm){name=this.__fy[name]||name;
if(bm!==false&&this.__fB[name]){return this.__fB[name].get(bk,bl);
}switch(bl){case this.LOCAL_MODE:return bk.style[name]||m;
case this.CASCADED_MODE:if(bk.currentStyle){return bk.currentStyle[name]||m;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var bn=qx.dom.Node.getDocument(bk);
var bo=bn.defaultView.getComputedStyle(bk,null);
return bo?bo[name]:m;
}}},defer:function(bp){bp.__fx();
}});
})();
(function(){var g="qx.ui.mobile.core.Root",f="Boolean",e="root",d="overflow-y",c="hidden",b="auto",a="_applyShowScrollbarY";
qx.Class.define(g,{extend:qx.ui.mobile.core.Widget,include:[qx.ui.mobile.core.MChildrenHandling],properties:{defaultCssClass:{refine:true,init:e},showScrollbarY:{check:f,init:true,apply:a}},members:{_createContainerElement:function(){return document.body;
},_applyShowScrollbarY:function(h,i){this._setStyle(d,h?b:c);
}},defer:function(j,k){qx.ui.mobile.core.MChildrenHandling.remap(k);
}});
})();
(function(){var q="tweets",p="back",o="showTweet",n="changeUsername",m="title",l="model",k="changeTweets",j="qx.data.Array",i="username",h="_applyTweets",c="mobiletweets.Application",g="_applyUsername",f="requestTweet",b=".json",a="http://twitter.com/statuses/user_timeline/",e="String",d="error";
qx.Class.define(c,{extend:qx.application.Mobile,properties:{tweets:{check:j,nullable:true,init:null,event:k,apply:h},username:{check:e,nullable:false,init:null,event:n,apply:g}},members:{__iE:null,main:function(){qx.application.Mobile.prototype.main.call(this);
var t=this.__iE=new mobiletweets.page.Input();
t.show();
var r=new mobiletweets.page.Tweets();
this.bind(q,r,q);
this.bind(i,r,m);
var s=new mobiletweets.page.Tweet();
t.addListener(f,function(u){this.setUsername(u.getData());
r.show();
},this);
r.addListener(o,function(v){var w=v.getData();
s.setTweet(this.getTweets().getItem(w));
s.show();
},this);
r.addListener(p,function(x){t.show({reverse:true});
},this);
s.addListener(p,function(y){r.show({reverse:true});
},this);
},_applyUsername:function(z,A){this.__iF();
},_applyTweets:function(B,C){this.debug("Tweets: ",qx.lang.Json.stringify(B));
},__iF:function(){var D=a+this.getUsername()+b;
var E=new qx.data.store.Jsonp(D);
E.bind(l,this,q);
E.addListener(d,function(F){var G=F.getData();
qx.ui.mobile.dialog.Manager.getInstance().alert("Error","Error loading the tweets for user "+this.getUsername());
this.__iE.show({reverse:true});
},this);
}}});
})();
(function(){var k="os.name",j="android",h="phonegap",g="backKeyDown",f="menuKeyDown",e="qx.event.type.Data",d="add",c="input",b="qx.ui.mobile.page.manager.Simple",a="remove";
qx.Class.define(b,{extend:qx.core.Object,construct:function(l){qx.core.Object.call(this);
this.__fE={};
this._setRoot(l);
this.__fI();
},events:{add:e,remove:e},members:{__fE:null,__fF:null,__cN:null,__fG:null,__fH:null,__fI:function(){if(qx.core.Environment.get(h)&&qx.core.Environment.get(k)==j){this.__fG=qx.lang.Function.bind(this._onBackButton,this);
this.__fH=qx.lang.Function.bind(this._onMenuButton,this);
BackButton.override();
qx.bom.Event.addNativeListener(document,g,this.__fG);
qx.bom.Event.addNativeListener(document,f,this.__fH);
}},__fJ:function(){if(qx.core.Environment.get(h)&&qx.core.Environment.get(k)==j){qx.bom.Event.removeNativeListener(document,g,this.__fG);
qx.bom.Event.removeNativeListener(document,f,this.__fH);
}},_onBackButton:function(){if(qx.core.Environment.get(h)&&qx.core.Environment.get(k)==j){var m=true;

if(this.__fF){m=this.__fF.back();
}
if(m){BackButton.exitApp();
}}},_onMenuButton:function(){if(qx.core.Environment.get(h)&&qx.core.Environment.get(k)==j){if(this.__fF){this.__fF.menu();
}}},add:function(n){this.__fE[n.getId()]=n;
this.fireDataEvent(d,n);
},remove:function(o){var p=this.getPage(o);
delete this.__fE[p.getId()];
this.fireDataEvent(a,p);
},show:function(q){var r=this.__fF;

if(r==q){return;
}q.initialize();
q.start();
this._getRoot().add(q);

if(r){r.stop();
this.__fK();
this._removeCurrentPage();
}this._setCurrentPage(q);
},_removeCurrentPage:function(){this._getRoot().remove(this.__fF);
},_getRoot:function(){if(this.__cN==null){this._setRoot(qx.core.Init.getApplication().getRoot());
}return this.__cN;
},_setRoot:function(s){this.__cN=s;
},getCurrentPage:function(){return this.__fF;
},_setCurrentPage:function(t){this.__fF=t;
},getPage:function(u){return this.__fE[u];
},__fK:function(){var v=document.getElementsByTagName(c);

for(var i=0,length=v.length;i<length;i++){v[i].blur();
}}},destruct:function(){this.__fJ();
this.__fL=this.__fE=this.__fF=this.__cN=null;
}});
})();
(function(){var f="",d="engine.version",c="qx.core.BaseInit",b="os.name",a="mobiletweets.Application";
qx.Class.define(c,{statics:{getApplication:function(){return this.__fM||null;
},ready:function(){if(this.__fM){return;
}
if(qx.core.Environment.get(d)==f){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.core.Environment.get(b)==f){qx.log.Logger.warn("Could not detect operating system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var h=a;
var i=qx.Class.getByName(h);

if(i){this.__fM=new i;
var g=new Date;
this.__fM.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-g)+"ms");
var g=new Date;
this.__fM.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-g)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+h);
}},__fN:function(e){var j=this.__fM;

if(j){j.close();
}},__fO:function(){var k=this.__fM;

if(k){k.terminate();
}qx.core.ObjectRegistry.shutdown();
}}});
})();
(function(){var d="ready",c="shutdown",b="beforeunload",a="qx.core.Init";
qx.Class.define(a,{statics:{getApplication:qx.core.BaseInit.getApplication,ready:qx.core.BaseInit.ready,__fN:function(e){var f=this.__application;

if(f){e.setReturnValue(f.close());
}},__fO:function(){var g=this.__application;

if(g){g.terminate();
}}},defer:function(h){qx.event.Registration.addListener(window,d,h.ready,h);
qx.event.Registration.addListener(window,c,h.__fO,h);
qx.event.Registration.addListener(window,b,h.__fN,h);
}});
})();
(function(){var i="animationEnd",h="in",g="out",f="qx.event.type.Data",e="qx.ui.mobile.page.manager.Animation",d="reverse",c="slide",b="String",a="animationStart";
qx.Class.define(e,{extend:qx.ui.mobile.page.manager.Simple,events:{animationStart:f,animationEnd:f},properties:{defaultAnimation:{check:b,init:c}},statics:{ANIMATIONS:{"slide":true,"pop":true,"fade":true,"dissolve":true,"slideup":true,"flip":true,"swap":true,"cube":true}},members:{__fP:null,__fQ:null,__fR:null,__fS:null,__fT:null,isInAnimation:function(){return this.__fP;
},show:function(j,k){if(this.__fP){return;
}k=k||{};
this.__fQ=k.animation||this.getDefaultAnimation();
k.reverse=k.reverse==null?false:k.reverse;
this.__fR=k.fromHistory||k.reverse;
this.__fS=this.getCurrentPage();
this.__fT=j;
qx.ui.mobile.page.manager.Simple.prototype.show.call(this,j);
},_removeCurrentPage:function(){this.__fU();
},__fU:function(){this.__fP=true;
this.fireDataEvent(a,[this.__fS,this.__fT]);
var n=this.__fS.getContainerElement();
var l=this.__fT.getContainerElement();
var m=this.__fW(g);
var o=this.__fW(h);
qx.event.Registration.addListener(n,i,this._onAnimationEnd,this);
qx.event.Registration.addListener(l,i,this._onAnimationEnd,this);
qx.bom.element.Class.addClasses(l,o);
qx.bom.element.Class.addClasses(n,m);
},_onAnimationEnd:function(p){this._getRoot().remove(this.__fS);
this.__fV();
this.fireDataEvent(i,[this.__fS,this.__fT]);
},__fV:function(){if(this.__fP){var r=this.__fS.getContainerElement();
var q=this.__fT.getContainerElement();
qx.event.Registration.removeListener(r,i,this._onAnimationEnd,this);
qx.event.Registration.removeListener(q,i,this._onAnimationEnd,this);
qx.bom.element.Class.removeClasses(r,this.__fW(g));
qx.bom.element.Class.removeClasses(q,this.__fW(h));
this.__fP=false;
}},__fW:function(s){var t=[this.__fQ,s];

if(this.__fR){t.push(d);
}return t;
}},destruct:function(){this.__fV();
this.__fP=this.__fQ,this.__fR=null;
this.__fS=this.__fT=null;
}});
})();
(function(){var a="qx.event.handler.Transition";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(b){qx.core.Object.call(this);
this.__fX={};
this.__fY=qx.lang.Function.listener(this._onNative,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{transitionEnd:1,animationEnd:1,animationStart:1,animationIteration:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,TYPE_TO_NATIVE:{transitionEnd:"webkitTransitionEnd",animationEnd:"webkitAnimationEnd",animationStart:"webkitAnimationStart",animationIteration:"webkitAnimationIteration"},NATIVE_TO_TYPE:{webkitTransitionEnd:"transitionEnd",webkitAnimationEnd:"animationEnd",webkitAnimationStart:"animationStart",webkitAnimationIteration:"animationIteration"}},members:{__fY:null,__fX:null,canHandleEvent:function(c,d){},registerEvent:function(e,f,g){var i=qx.core.ObjectRegistry.toHashCode(e)+f;
var h=qx.event.handler.Transition.TYPE_TO_NATIVE[f];
this.__fX[i]={target:e,type:h};
qx.bom.Event.addNativeListener(e,h,this.__fY);
},unregisterEvent:function(j,k,l){var n=this.__fX;

if(!n){return;
}var m=qx.core.ObjectRegistry.toHashCode(j)+k;

if(n[m]){delete n[m];
}qx.bom.Event.removeNativeListener(j,qx.event.handler.Transition.TYPE_TO_NATIVE[k],this.__fY);
},_onNative:qx.event.GlobalError.observeMethod(function(o){qx.event.Registration.fireEvent(o.target,qx.event.handler.Transition.NATIVE_TO_TYPE[o.type],qx.event.type.Event);
})},destruct:function(){var event;
var q=this.__fX;

for(var p in q){event=q[p];

if(event.target){qx.bom.Event.removeNativeListener(event.target,event.type,this.__fY);
}}this.__fX=this.__fY=null;
},defer:function(r){qx.event.Registration.addHandler(r);
}});
})();
(function(){var a="qx.ui.mobile.core.MLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this._setLayout(b);
},getLayout:function(){return this._getLayout();
}},statics:{remap:function(c){c.getLayout=c._getLayout;
c.setLayout=c._setLayout;
}}});
})();
(function(){var a="qx.ui.mobile.container.Composite";
qx.Class.define(a,{extend:qx.ui.mobile.core.Widget,include:[qx.ui.mobile.core.MChildrenHandling,qx.ui.mobile.core.MLayoutHandling],construct:function(b){qx.ui.mobile.core.Widget.call(this);

if(b){this.setLayout(b);
}},defer:function(c,d){qx.ui.mobile.core.MChildrenHandling.remap(d);
qx.ui.mobile.core.MLayoutHandling.remap(d);
}});
})();
(function(){var o="qx.event.type.Event",n="resize",m="orientationchange",l="start",k="css.translate3d",j="height",i="px",h="page",g="stop",f="resume",c="initialize",e="pause",d="back",b="qx.ui.mobile.page.Page",a="menu";
qx.Class.define(b,{extend:qx.ui.mobile.container.Composite,construct:function(p){qx.ui.mobile.container.Composite.call(this,p);

if(!p){this.setLayout(new qx.ui.mobile.layout.VBox());
}qx.ui.mobile.page.Page.getManager().add(this);
this._resize();
qx.event.Registration.addListener(window,m,this._resize,this);
qx.event.Registration.addListener(window,n,this._resize,this);
},events:{"initialize":o,"start":o,"stop":o,"pause":o,"resume":o,"back":o,"menu":o},properties:{defaultCssClass:{refine:true,init:h}},statics:{__db:null,getManager:function(){return qx.ui.mobile.page.Page.__db;
},setManager:function(q){qx.ui.mobile.page.Page.__db=q;
}},members:{__ga:false,_resize:function(){{this._setStyle(j,window.innerHeight+i);
};
},_applyId:function(r,s){qx.ui.mobile.container.Composite.prototype._applyId.call(this,r,s);

if(s!=null){qx.ui.mobile.page.Page.getManager().remove(s);
}qx.ui.mobile.page.Page.getManager().add(this);
},back:function(){this.fireEvent(d);
var t=this._back();
return t||false;
},_back:function(){},menu:function(){this.fireEvent(a);
},show:function(u){qx.ui.mobile.page.Page.getManager().show(this,u);
},initialize:function(){if(!this.isInitialized()){this._initialize();
this.__ga=true;
this.fireEvent(c);
}},_initialize:function(){},isInitialized:function(){return this.__ga;
},start:function(){this._start();
this.fireEvent(l);
},_start:function(){},stop:function(){this._stop();
this.fireEvent(g);
},_stop:function(){},pause:function(){this._pause();
this.fireEvent(e);
},_pause:function(){},resume:function(){this._resume();
this.fireEvent(f);
},_resume:function(){}},destruct:function(){qx.event.Registration.removeListener(window,m,this._resize,this);
qx.event.Registration.removeListener(window,n,this._resize,this);
this.__ga=null;

if(!qx.core.ObjectRegistry.inShutDown){if(this.getId()){qx.ui.mobile.page.Page.getManager().remove(this.getId());
}}},defer:function(v){if(qx.core.Environment.get(k)){v.setManager(new qx.ui.mobile.page.manager.Animation());
}else{v.setManager(new qx.ui.mobile.page.manager.Simple());
}}});
})();
(function(){var b="abstract",a="qx.ui.mobile.layout.Abstract";
qx.Class.define(a,{extend:qx.core.Object,type:b,members:{_widget:null,__gb:null,__gc:null,getCssClass:function(){},_getSupportedChildLayoutProperties:function(){},_setLayoutProperty:function(c,d,e){},setLayoutProperties:function(f,g){var i=this._getSupportedChildLayoutProperties();

for(var h in g){if(!i[h]){throw new Error("The layout does not support the "+h+" property");
}var j=g[h];
this._setLayoutProperty(f,h,j);
this._addChildLayoutProperty(f,h,j);
}},connectToWidget:function(k){if(this._widget){this._widget.removeCssClass(this.getCssClass());
}this._widget=k;

if(k){k.addCssClass(this.getCssClass());

if(this.__gb){for(var l in this.__gb){this.reset(l);
this.set(l,this.__gb[l]);
}}}else{this.__gb=null;
}},_addCachedProperty:function(m,n){if(!this.__gb){this.__gb={};
}this.__gb[m]=n;
},_getChildLayoutPropertyValue:function(o,p){var q=this.__gd(o);
return q[p];
},_addChildLayoutProperty:function(r,s,t){var u=this.__gd(r);

if(t==null){delete u[s];
}else{u[s]=t;
}},__gd:function(v){if(!this.__gc){this.__gc={};
}var w=this.__gc;
var x=v.toHashCode();

if(!w[x]){w[x]={};
}return w[x];
}},destruct:function(){this._widget=null;
}});
})();
(function(){var l="_applyLayoutChange",k="boxFlex",j="abstract",i="middle",h="bottom",g="center",f="Boolean",e="flex",d="top",c="left",a="right",b="qx.ui.mobile.layout.AbstractBox";
qx.Class.define(b,{extend:qx.ui.mobile.layout.Abstract,type:j,construct:function(m,n,o){qx.ui.mobile.layout.Abstract.call(this);

if(m){this.setAlignX(m);
}
if(n){this.setAlignY(n);
}
if(o){this.setReversed(o);
}},properties:{alignX:{check:[c,g,a],nullable:true,init:null,apply:l},alignY:{check:[d,i,h],nullable:true,init:null,apply:l},reversed:{check:f,nullable:true,init:null,apply:l}},statics:{PROPERTY_CSS_MAPPING:{"alignX":{"hbox":{"left":"boxPackStart","center":"boxPackCenter","right":"boxPackEnd"},"vbox":{"left":"boxAlignStart","center":"boxAlignCenter","right":"boxAlignEnd"}},"alignY":{"hbox":{"top":"boxAlignStart","middle":"boxAlignCenter","bottom":"boxAlignEnd"},"vbox":{"top":"boxPackStart","middle":"boxPackCenter","bottom":"boxPackEnd"}},"reversed":{"hbox":{"true":"boxReverse","false":null},"vbox":{"true":"boxReverse","false":null}}},SUPPORTED_CHILD_LAYOUT_PROPERTIES:{"flex":1}},members:{_getSupportedChildLayoutProperties:function(){return qx.ui.mobile.layout.AbstractBox.SUPPORTED_CHILD_LAYOUT_PROPERTIES;
},_setLayoutProperty:function(p,q,r){if(q==e){var s=this._getChildLayoutPropertyValue(p,q);

if(s!=null){p.removeCssClass(k+r);
}p.addCssClass(k+r);
}},connectToWidget:function(t){if(this._widget){this.resetAlignX();
this.resetAlignY();
this.resetReversed();
}qx.ui.mobile.layout.Abstract.prototype.connectToWidget.call(this,t);
},_applyLayoutChange:function(u,v,w){if(this._widget){var A=this.getCssClass();
var y=qx.ui.mobile.layout.AbstractBox.PROPERTY_CSS_MAPPING[w][A];

if(v){var z=y[v];

if(z){this._widget.removeCssClass(z);
}}
if(u){var x=y[u];

if(x){this._widget.addCssClass(x);
}}}else{if(u){this._addCachedProperty(w,u);
}}}}});
})();
(function(){var b="vbox",a="qx.ui.mobile.layout.VBox";
qx.Class.define(a,{extend:qx.ui.mobile.layout.AbstractBox,members:{getCssClass:function(){return b;
}}});
})();
(function(){var n="String",m="",l="Boolean",k="tap",j="_applyShowButton",i="_applyShowBackButton",h="action",g="content",f="_applyBackButtonText",e="qx.event.type.Event",b="_applyContentCssClass",d="_applyButtonText",c="qx.ui.mobile.page.NavigationPage",a="_applyTitle";
qx.Class.define(c,{extend:qx.ui.mobile.page.Page,events:{action:e},properties:{title:{check:n,init:m,nullable:true,apply:a},backButtonText:{check:n,init:m,apply:f},buttonText:{check:n,init:m,apply:d},showBackButton:{check:l,init:false,apply:i},showButton:{check:l,init:false,apply:j},contentCssClass:{check:n,init:g,nullable:true,apply:b}},members:{__ge:null,__gf:null,__gg:null,__gh:null,__gi:null,__gj:null,getContent:function(){return this.__gi;
},_getTitle:function(){return this.__gf;
},_getNavigationBar:function(){return this.__ge();
},_getBackButton:function(){return this.__gg;
},_getButton:function(){return this.__gh;
},_getScrollContainer:function(){return this.__gj;
},_applyTitle:function(o,p){if(this.__gf){this.__gf.setValue(o);
}},_applyBackButtonText:function(q,r){if(this.__gg){this.__gg.setValue(q);
}},_applyButtonText:function(s,t){if(this.__gh){this.__gh.setValue(s);
}},_applyShowBackButton:function(u,v){this._showBackButton();
},_applyShowButton:function(w,x){this._showButton();
},_applyContentCssClass:function(y,z){if(this.__gi){this.__gi.setDefaultCssClass(y);
}},_showBackButton:function(){if(this.__gg){if(this.getShowBackButton()){this.__gg.show();
}else{this.__gg.hide();
}}},_showButton:function(){if(this.__gh){if(this.getShowButton()){this.__gh.show();
}else{this.__gh.hide();
}}},_initialize:function(){qx.ui.mobile.page.Page.prototype._initialize.call(this);
this.__ge=this._createNavigationBar();

if(this.__ge){this.add(this.__ge);
}this.__gj=this._createScrollContainer();
this.__gi=this._createContent();

if(this.__gi){this.__gj.add(this.__gi);
}
if(this.__gj){this.add(this.__gj,{flex:1});
}},_createScrollContainer:function(){return new qx.ui.mobile.container.Scroll();
},_createContent:function(){var content=new qx.ui.mobile.container.Composite();
content.setDefaultCssClass(this.getContentCssClass());
return content;
},_createNavigationBar:function(){var A=new qx.ui.mobile.navigationbar.NavigationBar();
this.__gg=this._createBackButton();

if(this.__gg){this.__gg.addListener(k,this._onBackButtonTap,this);
this.__gg.setValue(this.getBackButtonText());
this._showBackButton();
A.add(this.__gg);
}this.__gf=this._createTitle();

if(this.__gf){A.add(this.__gf,{flex:1});
}this.__gh=this._createButton();

if(this.__gh){this.__gh.addListener(k,this._onButtonTap,this);
this.__gh.setValue(this.getButtonText());
this._showButton();
A.add(this.__gh);
}return A;
},_createTitle:function(){return new qx.ui.mobile.navigationbar.Title(this.getTitle());
},_createBackButton:function(){return new qx.ui.mobile.navigationbar.BackButton();
},_createButton:function(){return new qx.ui.mobile.navigationbar.Button();
},_onBackButtonTap:function(B){this.back();
},_onButtonTap:function(C){this.fireEvent(h);
}},destruct:function(){this.__ge=this.__gf=this.__gg=this.__gh=this.__gi=this.__gj=null;
}});
})();
(function(){var g="resize",f="orientationchange",e="domupdated",d="div",c="qx.ui.mobile.container.MIScroll",b="qx/mobile/js/iscroll.js",a="success";
qx.Mixin.define(c,{construct:function(){this.__gm();
this.__fI();
},members:{__gk:null,__gl:null,_createScrollElement:function(){var scroll=qx.bom.Element.create(d);
return scroll;
},_getScrollContentElement:function(){return this.getContainerElement().childNodes[0];
},__gm:function(){if(!window.iScroll){var h=qx.util.ResourceManager.getInstance().toUri(b);
var i=new qx.io.ScriptLoader();
i.load(h,this.__gp,this);
}else{this._setScroll(this.__gn());
}},__gn:function(){var j=true;
var scroll=new iScroll(this.getContentElement(),{desktopCompatibility:j});
return scroll;
},__fI:function(){qx.event.Registration.addListener(window,f,this._refresh,this);
qx.event.Registration.addListener(window,g,this._refresh,this);
this.addListener(e,this._refresh,this);
},__go:function(){qx.event.Registration.removeListener(window,f,this._refresh,this);
qx.event.Registration.removeListener(window,g,this._refresh,this);
this.removeListener(e,this._refresh,this);
},__gp:function(status){if(status==a){this._setScroll(this.__gn());
}else{}},_setScroll:function(scroll){this.__gk=scroll;
},_refresh:function(){if(this.__gk){this.__gk.refresh();
}}},destruct:function(){this.__go();
if(this.__gk){this.__gk.destroy();
}this.__gk=this.__gl=null;
}});
})();
(function(){var l="",k="string",j="data",i="io.ssl",h="type",g="data:image/",f=";",e="/",d="encoding",c="qx.util.ResourceManager",a="singleton",b=",";
qx.Class.define(c,{extend:qx.core.Object,type:a,construct:function(){qx.core.Object.call(this);
},statics:{__v:qx.$$resources||{},__gq:{}},members:{has:function(m){return !!this.self(arguments).__v[m];
},getData:function(n){return this.self(arguments).__v[n]||null;
},getImageWidth:function(o){var p=this.self(arguments).__v[o];
return p?p[0]:null;
},getImageHeight:function(q){var r=this.self(arguments).__v[q];
return r?r[1]:null;
},getImageFormat:function(s){var t=this.self(arguments).__v[s];
return t?t[2]:null;
},getCombinedFormat:function(u){var x=l;
var w=this.self(arguments).__v[u];
var v=w&&w.length>4&&typeof (w[4])==k&&this.constructor.__v[w[4]];

if(v){var z=w[4];
var y=this.constructor.__v[z];
x=y[2];
}return x;
},toUri:function(A){if(A==null){return A;
}var B=this.self(arguments).__v[A];

if(!B){return A;
}
if(typeof B===k){var D=B;
}else{var D=B[3];
if(!D){return A;
}}var C=l;

if((false)&&qx.core.Environment.get(i)){C=this.self(arguments).__gq[D];
}return C+qx.$$libraries[D].resourceUri+e+A;
},toDataUri:function(E){var G=this.constructor.__v[E];
var H=this.constructor.__v[G[4]];
var I;

if(H){var F=H[4][E];
I=g+F[h]+f+F[d]+b+F[j];
}else{I=this.toUri(E);
}return I;
}},defer:function(J){var N,L,K,O,M;
}});
})();
(function(){var p="success",o="fail",n="mshtml",m="complete",l="error",k="load",j="opera",i="loaded",h="readystatechange",g="head",c="webkit",f="script",d="qx.io.ScriptLoader",b="text/javascript",a="abort";
qx.Bootstrap.define(d,{construct:function(){this.__gr=qx.Bootstrap.bind(this.__gv,this);
this.__gs=document.createElement(f);
},statics:{TIMEOUT:15},members:{__gt:null,__gu:null,__bC:null,__bD:null,__gr:null,__gs:null,load:function(q,r,s){if(this.__gt){throw new Error("Another request is still running!");
}this.__gt=true;
this.__gu=false;
var t=document.getElementsByTagName(g)[0];
var u=this.__gs;
this.__bC=r||null;
this.__bD=s||window;
u.type=b;
u.onerror=u.onload=u.onreadystatechange=this.__gr;
var self=this;
if(qx.bom.client.Engine.getName()===j&&this._getTimeout()>0){setTimeout(function(){self.dispose(o);
},this._getTimeout()*1000);
}u.src=q;
setTimeout(function(){t.appendChild(u);
},0);
},abort:function(){if(this.__gt){this.dispose(a);
}},dispose:function(status){if(this.__gu){return;
}this.__gu=true;
var x=this.__gs;
x.onerror=x.onload=x.onreadystatechange=null;
var w=x.parentNode;

if(w){w.removeChild(x);
}delete this.__gt;
if(this.__bC){var v=qx.bom.client.Engine.getName();

if(v==n||v==c){var self=this;
setTimeout(qx.event.GlobalError.observeMethod(function(){self.__bC.call(self.__bD,status);
delete self.__bC;
}),0);
}else{this.__bC.call(this.__bD,status);
delete this.__bC;
}}},setTimeout:function(y){},getTimeout:function(){return this._getTimeout();
},_getTimeout:function(){return qx.io.ScriptLoader.TIMEOUT;
},__gv:qx.event.GlobalError.observeMethod(function(e){var z=qx.bom.client.Engine.getName();
if(z==n){var A=this.__gs.readyState;

if(A==i){this.dispose(p);
}else if(A==m){this.dispose(p);
}else{return;
}}else if(z==j){if(qx.Bootstrap.isString(e)||e.type===l){return this.dispose(o);
}else if(e.type===k){return this.dispose(p);
}else{return;
}}else{if(qx.Bootstrap.isString(e)||e.type===l){this.dispose(o);
}else if(e.type===k){this.dispose(p);
}else if(e.type===h&&(e.target.readyState===m||e.target.readyState===i)){this.dispose(p);
}else{return;
}}})}});
})();
(function(){var b="qx.ui.mobile.container.Scroll",a="scroll";
qx.Class.define(b,{extend:qx.ui.mobile.core.Widget,include:[qx.ui.mobile.core.MChildrenHandling],properties:{defaultCssClass:{refine:true,init:a}},members:{_createContainerElement:function(){var d=qx.ui.mobile.core.Widget.prototype._createContainerElement.call(this);
var c=this._createScrollElement();

if(c){d.appendChild(c);
}return d;
},_getContentElement:function(){var e=qx.ui.mobile.core.Widget.prototype._getContentElement.call(this);
var f=this._getScrollContentElement();
return f||e;
}},defer:function(g){{qx.Class.include(g,qx.ui.mobile.container.MIScroll);
};
}});
})();
(function(){var c="middle",b="navigationbar",a="qx.ui.mobile.navigationbar.NavigationBar";
qx.Class.define(a,{extend:qx.ui.mobile.container.Composite,construct:function(d){qx.ui.mobile.container.Composite.call(this,d);

if(!d){this.setLayout(new qx.ui.mobile.layout.HBox().set({alignY:c}));
}},properties:{defaultCssClass:{refine:true,init:b}}});
})();
(function(){var b="qx.ui.mobile.layout.HBox",a="hbox";
qx.Class.define(b,{extend:qx.ui.mobile.layout.AbstractBox,members:{getCssClass:function(){return a;
}}});
})();
(function(){var g="no-wrap",f="Boolean",e="label",d="_applyValue",c="qx.ui.mobile.basic.Label",b="_applyWrap",a="changeValue";
qx.Class.define(c,{extend:qx.ui.mobile.core.Widget,construct:function(h){qx.ui.mobile.core.Widget.call(this);

if(h){this.setValue(h);
}this.initWrap();
},properties:{defaultCssClass:{refine:true,init:e},value:{nullable:true,init:null,apply:d,event:a},anonymous:{refine:true,init:true},wrap:{check:f,init:true,apply:b}},members:{_applyValue:function(i,j){this._setHtml(i);
},_applyWrap:function(k,l){if(k){this.removeCssClass(g);
}else{this.addCssClass(g);
}}}});
})();
(function(){var b="qx.ui.mobile.navigationbar.Title",a="h1";
qx.Class.define(b,{extend:qx.ui.mobile.basic.Label,properties:{wrap:{refine:true,init:false}},members:{_getTagName:function(){return a;
}}});
})();
(function(){var b="qx.ui.mobile.form.Button",a="button";
qx.Class.define(b,{extend:qx.ui.mobile.basic.Label,properties:{defaultCssClass:{refine:true,init:a},anonymous:{refine:true,init:false},wrap:{refine:true,init:false}}});
})();
(function(){var b="qx.ui.mobile.navigationbar.Button",a="navigationbar-button";
qx.Class.define(b,{extend:qx.ui.mobile.form.Button,properties:{defaultCssClass:{refine:true,init:a}}});
})();
(function(){var b="qx.ui.mobile.navigationbar.BackButton",a="navigationbar-backbutton";
qx.Class.define(b,{extend:qx.ui.mobile.navigationbar.Button,properties:{defaultCssClass:{refine:true,init:a}}});
})();
(function(){var h="Username",g="requestTweet",f="Please enter a Twitter username",e="tap",d="qx.event.type.Data",c="mobiletweets.page.Input",b="Twitter Client",a="Show";
qx.Class.define(c,{extend:qx.ui.mobile.page.NavigationPage,construct:function(){qx.ui.mobile.page.NavigationPage.call(this);
this.setTitle(b);
},events:{"requestTweet":d},members:{__hm:null,__iG:null,_initialize:function(){qx.ui.mobile.page.NavigationPage.prototype._initialize.call(this);
var l=new qx.ui.mobile.form.Title(f);
this.getContent().add(l);
var k=this.__hm=new qx.ui.mobile.form.Form();
var i=this.__iG=new qx.ui.mobile.form.TextField();
i.setPlaceholder(h);
i.setRequired(true);
k.add(i,h);
this.getContent().add(new qx.ui.mobile.form.renderer.SinglePlaceholder(k));
var j=new qx.ui.mobile.form.Button(a);
j.addListener(e,this._onTap,this);
this.getContent().add(j);
},_onTap:function(m){if(this.__hm.validate()){var n=this.__iG.getValue();
this.fireDataEvent(g,n);
}}}});
})();
(function(){var b="qx.ui.mobile.form.Title",a="h2";
qx.Class.define(b,{extend:qx.ui.mobile.basic.Label,properties:{wrap:{refine:true,init:false}},members:{_getTagName:function(){return a;
}}});
})();
(function(){var b="qx.ui.form.Form",a="";
qx.Class.define(b,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__hs=[];
this._buttons=[];
this._buttonOptions=[];
this._validationManager=new qx.ui.form.validation.Manager();
this._resetter=new qx.ui.form.Resetter();
},members:{__hs:null,_validationManager:null,_groupCounter:0,_buttons:null,_buttonOptions:null,_resetter:null,add:function(c,d,e,name,f,g){if(this.__ht()){this.__hs.push({title:null,items:[],labels:[],names:[],options:[],headerOptions:{}});
}this.__hs[this._groupCounter].items.push(c);
this.__hs[this._groupCounter].labels.push(d);
this.__hs[this._groupCounter].options.push(g);
if(name==null){name=d.replace(/\s+|&|-|\+|\*|\/|\||!|\.|,|:|\?|;|~|%|\{|\}|\(|\)|\[|\]|<|>|=|\^|@|\\/g,a);
}this.__hs[this._groupCounter].names.push(name);
this._validationManager.add(c,e,f);
this._resetter.add(c);
},addGroupHeader:function(h,k){if(!this.__ht()){this._groupCounter++;
}this.__hs.push({title:h,items:[],labels:[],names:[],options:[],headerOptions:k});
},addButton:function(l,m){this._buttons.push(l);
this._buttonOptions.push(m||null);
},__ht:function(){return this.__hs.length===0;
},reset:function(){this._resetter.reset();
this._validationManager.reset();
},redefineResetter:function(){this._resetter.redefine();
},validate:function(){return this._validationManager.validate();
},getValidationManager:function(){return this._validationManager;
},getGroups:function(){return this.__hs;
},getButtons:function(){return this._buttons;
},getButtonOptions:function(){return this._buttonOptions;
},getItems:function(){var n={};
for(var i=0;i<this.__hs.length;i++){var o=this.__hs[i];
for(var j=0;j<o.names.length;j++){var name=o.names[j];
n[name]=o.items[j];
}}return n;
}},destruct:function(){this.__hs=this._buttons=this._buttonOptions=null;
}});
})();
(function(){var k="",j="complete",h="String",g="changeValid",f="qx.event.type.Event",d="value instanceof Function || qx.Class.isSubClassOf(value.constructor, qx.ui.form.validation.AsyncValidator)",c="qx.ui.form.validation.Manager",b="This field is required",a="qx.event.type.Data";
qx.Class.define(c,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__hu=[];
this.__hv={};
this.setRequiredFieldMessage(qx.locale.Manager.tr(b));
},events:{"changeValid":a,"complete":f},properties:{validator:{check:d,init:null,nullable:true},invalidMessage:{check:h,init:k},requiredFieldMessage:{check:h,init:k},context:{nullable:true}},members:{__hu:null,__hw:null,__hv:null,__hx:null,add:function(l,m,n){if(!this.__hC(l)){throw new Error("Added widget not supported.");
}if(this.__hD(l)){if(m!=null){throw new Error("Widgets supporting selection can only be validated "+"in the form validator");
}}var o={item:l,validator:m,valid:null,context:n};
this.__hu.push(o);
},remove:function(p){var q=this.__hu;

for(var i=0,r=q.length;i<r;i++){if(p===q[i].item){q.splice(i,1);
return p;
}}return null;
},getItems:function(){var s=[];

for(var i=0;i<this.__hu.length;i++){s.push(this.__hu[i].item);
}return s;
},validate:function(){var x=true;
this.__hx=true;
var u=[];
for(var i=0;i<this.__hu.length;i++){var v=this.__hu[i].item;
var y=this.__hu[i].validator;
u.push(v);
if(y==null){var t=this.__hy(v);
x=x&&t;
this.__hx=t&&this.__hx;
continue;
}var t=this.__hz(this.__hu[i],v.getValue());
x=t&&x;

if(t!=null){this.__hx=t&&this.__hx;
}}var w=this.__hA(u);

if(qx.lang.Type.isBoolean(w)){this.__hx=w&&this.__hx;
}x=w&&x;
this.__hE(x);

if(qx.lang.Object.isEmpty(this.__hv)){this.fireEvent(j);
}return x;
},__hy:function(z){if(z.getRequired()){if(this.__hD(z)){var A=!!z.getSelection()[0];
}else{var A=!!z.getValue();
}z.setValid(A);
var C=z.getRequiredInvalidMessage();
var B=C?C:this.getRequiredFieldMessage();
z.setInvalidMessage(B);
return A;
}return true;
},__hz:function(D,E){var J=D.item;
var I=D.context;
var H=D.validator;
if(this.__hB(H)){this.__hv[J.toHashCode()]=null;
H.validate(J,J.getValue(),this,I);
return null;
}var G=null;

try{var G=H.call(I||this,E,J);

if(G===undefined){G=true;
}}catch(e){if(e instanceof qx.core.ValidationError){G=false;

if(e.message&&e.message!=qx.type.BaseError.DEFAULTMESSAGE){var F=e.message;
}else{var F=e.getComment();
}J.setInvalidMessage(F);
}else{throw e;
}}J.setValid(G);
D.valid=G;
return G;
},__hA:function(K){var M=this.getValidator();
var N=this.getContext()||this;

if(M==null){return true;
}this.setInvalidMessage(k);

if(this.__hB(M)){this.__hv[this.toHashCode()]=null;
M.validateForm(K,this,N);
return null;
}
try{var O=M.call(N,K,this);

if(O===undefined){O=true;
}}catch(e){if(e instanceof qx.core.ValidationError){O=false;

if(e.message&&e.message!=qx.type.BaseError.DEFAULTMESSAGE){var L=e.message;
}else{var L=e.getComment();
}this.setInvalidMessage(L);
}else{throw e;
}}return O;
},__hB:function(P){var Q=false;

if(!qx.lang.Type.isFunction(P)){Q=qx.Class.isSubClassOf(P.constructor,qx.ui.form.validation.AsyncValidator);
}return Q;
},__hC:function(R){var S=R.constructor;
return qx.Class.hasInterface(S,qx.ui.form.IForm);
},__hD:function(T){var U=T.constructor;
return qx.Class.hasInterface(U,qx.ui.core.ISingleSelection);
},__hE:function(V){var W=this.__hw;
this.__hw=V;
if(W!=V){this.fireDataEvent(g,V,W);
}},getValid:function(){return this.__hw;
},isValid:function(){return this.getValid();
},getInvalidMessages:function(){var X=[];
for(var i=0;i<this.__hu.length;i++){var Y=this.__hu[i].item;

if(!Y.getValid()){X.push(Y.getInvalidMessage());
}}if(this.getInvalidMessage()!=k){X.push(this.getInvalidMessage());
}return X;
},reset:function(){for(var i=0;i<this.__hu.length;i++){var ba=this.__hu[i];
ba.item.setValid(true);
}this.__hw=null;
},setItemValid:function(bb,bc){this.__hv[bb.toHashCode()]=bc;
bb.setValid(bc);
this.__hF();
},setFormValid:function(bd){this.__hv[this.toHashCode()]=bd;
this.__hF();
},__hF:function(){var bf=this.__hx;
for(var bg in this.__hv){var be=this.__hv[bg];
bf=be&&bf;
if(be==null){return;
}}this.__hE(bf);
this.__hv={};
this.fireEvent(j);
}},destruct:function(){this.__hu=null;
}});
})();
(function(){var t="",s='indexOf',r='slice',q='concat',p='toLocaleLowerCase',o="qx.type.BaseString",n='match',m='toLocaleUpperCase',k='search',j='replace',c='toLowerCase',h='charCodeAt',f='split',b='substring',a='lastIndexOf',e='substr',d='toUpperCase',g='charAt';
qx.Class.define(o,{extend:Object,construct:function(u){var u=u||t;
this.__hG=u;
this.length=u.length;
},members:{$$isString:true,length:0,__hG:null,toString:function(){return this.__hG;
},charAt:null,valueOf:null,charCodeAt:null,concat:null,indexOf:null,lastIndexOf:null,match:null,replace:null,search:null,slice:null,split:null,substr:null,substring:null,toLowerCase:null,toUpperCase:null,toHashCode:function(){return qx.core.ObjectRegistry.toHashCode(this);
},toLocaleLowerCase:null,toLocaleUpperCase:null,base:function(v,w){return qx.core.Object.prototype.base.apply(this,arguments);
}},defer:function(x,y){var z=[g,h,q,s,a,n,j,k,r,f,e,b,c,d,p,m];
y.valueOf=y.toString;

if(new x(t).valueOf()==null){delete y.valueOf;
}
for(var i=0,l=z.length;i<l;i++){y[z[i]]=String.prototype[z[i]];
}}});
})();
(function(){var a="qx.locale.LocalizedString";
qx.Class.define(a,{extend:qx.type.BaseString,construct:function(b,c,d){qx.type.BaseString.call(this,b);
this.__hH=c;
this.__hI=d;
},members:{__hH:null,__hI:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__hH,this.__hI);
}}});
})();
(function(){var l="_",k="",j="locale",h="_applyLocale",g="changeLocale",f="C",e="locale.variant",d="qx.dynlocale",c="qx.locale.Manager",b="String",a="singleton";
qx.Class.define(c,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__hJ=qx.$$translations||{};
this.__hK=qx.$$locales||{};
var m=qx.core.Environment.get(j);
var n=qx.core.Environment.get(e);

if(n!==k){m+=l+n;
}this.__hL=m;
this.setLocale(m||this.__hM);
},statics:{tr:function(o,p){var q=qx.lang.Array.fromArguments(arguments);
q.splice(0,1);
return qx.locale.Manager.getInstance().translate(o,q);
},trn:function(r,s,t,u){var v=qx.lang.Array.fromArguments(arguments);
v.splice(0,3);
if(t!=1){return qx.locale.Manager.getInstance().translate(s,v);
}else{return qx.locale.Manager.getInstance().translate(r,v);
}},trc:function(w,x,y){var z=qx.lang.Array.fromArguments(arguments);
z.splice(0,2);
return qx.locale.Manager.getInstance().translate(x,z);
},marktr:function(A){return A;
}},properties:{locale:{check:b,nullable:true,apply:h,event:g}},members:{__hM:f,__hN:null,__hO:null,__hJ:null,__hK:null,__hL:null,getLanguage:function(){return this.__hO;
},getTerritory:function(){return this.getLocale().split(l)[1]||k;
},getAvailableLocales:function(){var C=[];

for(var B in this.__hK){if(B!=this.__hM){C.push(B);
}}return C;
},__hP:function(D){var F;

if(D==null){return null;
}var E=D.indexOf(l);

if(E==-1){F=D;
}else{F=D.substring(0,E);
}return F;
},_applyLocale:function(G,H){this.__hN=G;
this.__hO=this.__hP(G);
},addTranslation:function(I,J){var K=this.__hJ;

if(K[I]){for(var L in J){K[I][L]=J[L];
}}else{K[I]=J;
}},addLocale:function(M,N){var O=this.__hK;

if(O[M]){for(var P in N){O[M][P]=N[P];
}}else{O[M]=N;
}},translate:function(Q,R,S){var T=this.__hJ;
return this.__hQ(T,Q,R,S);
},localize:function(U,V,W){var X=this.__hK;
return this.__hQ(X,U,V,W);
},__hQ:function(Y,ba,bb,bc){var bd;

if(!Y){return ba;
}
if(bc){var bf=this.__hP(bc);
}else{bc=this.__hN;
bf=this.__hO;
}if(!bd&&Y[bc]){bd=Y[bc][ba];
}if(!bd&&Y[bf]){bd=Y[bf][ba];
}if(!bd&&Y[this.__hM]){bd=Y[this.__hM][ba];
}
if(!bd){bd=ba;
}
if(bb.length>0){var be=[];

for(var i=0;i<bb.length;i++){var bg=bb[i];

if(bg&&bg.translate){be[i]=bg.translate();
}else{be[i]=bg;
}}bd=qx.lang.String.format(bd,be);
}
if(qx.core.Environment.get(d)){bd=new qx.locale.LocalizedString(bd,ba,bb);
}return bd;
}},destruct:function(){this.__hJ=this.__hK=null;
}});
})();
(function(){var a="qx.ui.form.validation.AsyncValidator";
qx.Class.define(a,{extend:qx.core.Object,construct:function(b){qx.core.Object.call(this);
this.__hR=b;
},members:{__hR:null,__hS:null,__db:null,__hT:null,validate:function(c,d,e,f){this.__hT=false;
this.__hS=c;
this.__db=e;
this.__hR.call(f||this,this,d);
},validateForm:function(g,h,i){this.__hT=true;
this.__db=h;
this.__hR.call(i,g,this);
},setValid:function(j,k){if(this.__hT){if(k!==undefined){this.__db.setInvalidMessage(k);
}this.__db.setFormValid(j);
}else{if(k!==undefined){this.__hS.setInvalidMessage(k);
}this.__db.setItemValid(this.__hS,j);
}}},destruct:function(){this.__db=this.__hS=null;
}});
})();
(function(){var b="qx.event.type.Data",a="qx.ui.form.IForm";
qx.Interface.define(a,{events:{"changeEnabled":b,"changeValid":b,"changeInvalidMessage":b,"changeRequired":b},members:{setEnabled:function(c){return arguments.length==1;
},getEnabled:function(){},setRequired:function(d){return arguments.length==1;
},getRequired:function(){},setValid:function(e){return arguments.length==1;
},getValid:function(){},setInvalidMessage:function(f){return arguments.length==1;
},getInvalidMessage:function(){},setRequiredInvalidMessage:function(g){return arguments.length==1;
},getRequiredInvalidMessage:function(){}}});
})();
(function(){var b="qx.ui.core.ISingleSelection",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeSelection":a},members:{getSelection:function(){return true;
},setSelection:function(c){return arguments.length==1;
},resetSelection:function(){return true;
},isSelected:function(d){return arguments.length==1;
},isSelectionEmpty:function(){return true;
},getSelectables:function(e){return arguments.length==1;
}}});
})();
(function(){var a="qx.ui.form.Resetter";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__hU=[];
},members:{__hU:null,add:function(b){if(this._supportsValue(b)){var c=b.getValue();
}else if(this.__hD(b)){var c=b.getSelection();
}else{throw new Error("Item "+b+" not supported for reseting.");
}this.__hU.push({item:b,init:c});
},reset:function(){for(var i=0;i<this.__hU.length;i++){var d=this.__hU[i];
this.__hV(d.item,d.init);
}},resetItem:function(e){var f;

for(var i=0;i<this.__hU.length;i++){var g=this.__hU[i];

if(g.item===e){f=g.init;
break;
}}if(f===undefined){throw new Error("The given item has not been added.");
}this.__hV(e,f);
},__hV:function(h,j){if(this._supportsValue(h)){h.setValue(j);
}else if(this.__hD(h)){h.setSelection(j);
}},redefine:function(){for(var i=0;i<this.__hU.length;i++){var k=this.__hU[i].item;
this.__hU[i].init=this.__hW(k);
}},redefineItem:function(l){var m;

for(var i=0;i<this.__hU.length;i++){if(this.__hU[i].item===l){m=this.__hU[i];
break;
}}if(m===undefined){throw new Error("The given item has not been added.");
}m.init=this.__hW(m.item);
},__hW:function(n){if(this._supportsValue(n)){return n.getValue();
}else if(this.__hD(n)){return n.getSelection();
}},__hD:function(o){var p=o.constructor;
return qx.Class.hasInterface(p,qx.ui.core.ISingleSelection);
},_supportsValue:function(q){var r=q.constructor;
return (qx.Class.hasInterface(r,qx.ui.form.IBooleanForm)||qx.Class.hasInterface(r,qx.ui.form.IColorForm)||qx.Class.hasInterface(r,qx.ui.form.IDateForm)||qx.Class.hasInterface(r,qx.ui.form.INumberForm)||qx.Class.hasInterface(r,qx.ui.form.IStringForm));
}},destruct:function(){this.__hU=null;
}});
})();
(function(){var b="qx.ui.form.IBooleanForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var b="qx.ui.form.IColorForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var b="qx.ui.form.IDateForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var b="qx.ui.form.INumberForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var b="qx.event.type.Data",a="qx.ui.form.IStringForm";
qx.Interface.define(a,{events:{"changeValue":b},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var a="qx.ui.mobile.form.Form";
qx.Class.define(a,{extend:qx.ui.form.Form,construct:function(){qx.ui.form.Form.call(this);
this._resetter=new qx.ui.mobile.form.Resetter();
},members:{__hX:null,setRenderer:function(b){this.__hX=b;
},validate:function(){var f=qx.ui.form.Form.prototype.validate.call(this);

if(this.__hX!=null){this.__hX.resetForm();
}var e=this.getGroups();

for(var i=0;i<e.length;i++){var c=e[i];

for(var j=0;j<c.items.length;j++){var d=c.items[j];

if(!d.isValid()){if(this.__hX!=null){this.__hX.showErrorForItem(d);
}else{alert('error '+d.getInvalidMessage());
}}}}
if(this.__hX!=null){this.__hX._domUpdated();
}return f;
}}});
})();
(function(){var a="qx.ui.mobile.form.Resetter";
qx.Class.define(a,{extend:qx.ui.form.Resetter,members:{_supportsValue:function(b){var c=b.constructor;
return (qx.ui.form.Resetter.prototype._supportsValue.call(this,b)||qx.Class.hasMixin(c,qx.ui.mobile.form.MValue));
}}});
})();
(function(){var u="change",t="input",s="radio",r="password",q="keypress",p="text",n="checkbox",m="textarea",k="engine.version",j="mshtml",c="propertychange",h="webkit",g="browser.documentmode",b="select-multiple",a="browser.version",f="select",d="qx.event.handler.Input";
qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);
this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);
this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);
this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__hY:false,__ia:null,__ib:null,__ic:null,canHandleEvent:function(v,w){var x=v.tagName.toLowerCase();

if(w===t&&(x===t||x===m)){return true;
}
if(w===u&&(x===t||x===m||x===f)){return true;
}return false;
},registerEvent:function(y,z,A){if(h==j&&(qx.core.Environment.get(k)<9||(qx.core.Environment.get(k)>=9&&qx.core.Environment.get(g)<9))){if(!y.__id){var B=y.tagName.toLowerCase();
var C=y.type;

if(C===p||C===r||B===m||C===n||C===s){qx.bom.Event.addNativeListener(y,c,this._onPropertyWrapper);
}
if(C!==n&&C!==s){qx.bom.Event.addNativeListener(y,u,this._onChangeValueWrapper);
}
if(C===p||C===r){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,y);
qx.bom.Event.addNativeListener(y,q,this._onKeyPressWrapped);
}y.__id=true;
}}else{if(z===t){this.__ie(y);
}else if(z===u){if(y.type===s||y.type===n){qx.bom.Event.addNativeListener(y,u,this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(y,u,this._onChangeValueWrapper);
}if((false)||(false)){if(y.type===p||y.type===r){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,y);
qx.bom.Event.addNativeListener(y,q,this._onKeyPressWrapped);
}}}}},__ie:function(D){var E=D.tagName.toLowerCase();
if(parseFloat(qx.core.Environment.get(k))<532&&E==m){qx.bom.Event.addNativeListener(D,q,this._onInputWrapper);
}qx.bom.Event.addNativeListener(D,t,this._onInputWrapper);
},unregisterEvent:function(F,G){if(h==j&&qx.core.Environment.get(k)<9&&qx.core.Environment.get(g)<9){if(F.__id){var H=F.tagName.toLowerCase();
var I=F.type;

if(I===p||I===r||H===m||I===n||I===s){qx.bom.Event.removeNativeListener(F,c,this._onPropertyWrapper);
}
if(I!==n&&I!==s){qx.bom.Event.removeNativeListener(F,u,this._onChangeValueWrapper);
}
if(I===p||I===r){qx.bom.Event.removeNativeListener(F,q,this._onKeyPressWrapped);
}
try{delete F.__id;
}catch(J){F.__id=null;
}}}else{if(G===t){this.__if(F);
}else if(G===u){if(F.type===s||F.type===n){qx.bom.Event.removeNativeListener(F,u,this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(F,u,this._onChangeValueWrapper);
}}
if((false)||(false)){if(F.type===p||F.type===r){qx.bom.Event.removeNativeListener(F,q,this._onKeyPressWrapped);
}}}},__if:function(K){var L=K.tagName.toLowerCase();
if(parseFloat(qx.core.Environment.get(k))<532&&L==m){qx.bom.Event.removeNativeListener(K,q,this._onInputWrapper);
}qx.bom.Event.removeNativeListener(K,t,this._onInputWrapper);
},_onKeyPress:null,_inputFix:null,_onKeyDown:null,_onKeyUp:null,_onBlur:null,_onInput:qx.event.GlobalError.observeMethod(function(e){var N=qx.bom.Event.getTarget(e);
var M=N.tagName.toLowerCase();
if(!this.__hY||M!==t){if((false)&&qx.core.Environment.get(a)<10.6){this.__ia=window.setTimeout(function(){qx.event.Registration.fireEvent(N,t,qx.event.type.Data,[N.value]);
},0);
}else{qx.event.Registration.fireEvent(N,t,qx.event.type.Data,[N.value]);
}}}),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var P=qx.bom.Event.getTarget(e);
var O=P.value;

if(P.type===b){var O=[];

for(var i=0,o=P.options,l=o.length;i<l;i++){if(o[i].selected){O.push(o[i].value);
}}}qx.event.Registration.fireEvent(P,u,qx.event.type.Data,[O]);
}),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var Q=qx.bom.Event.getTarget(e);

if(Q.type===s){if(Q.checked){qx.event.Registration.fireEvent(Q,u,qx.event.type.Data,[Q.value]);
}}else{qx.event.Registration.fireEvent(Q,u,qx.event.type.Data,[Q.checked]);
}}),_onProperty:function(){}},defer:function(R){qx.event.Registration.addHandler(R);
}});
})();
(function(){var i="input",h="value",g="qx.event.type.Data",f="Boolean",e="",d='boolean',c="change",b="qx.ui.mobile.form.MValue",a="changeValue";
qx.Mixin.define(b,{construct:function(j){if(j){this.setValue(j);
}qx.event.Registration.addListener(this.getContentElement(),c,this._onChangeContent,this);
qx.event.Registration.addListener(this.getContentElement(),i,this._onInput,this);
},events:{"input":g,"changeValue":g},properties:{liveUpdate:{check:f,init:false}},members:{__ib:null,_convertValue:function(k){if(typeof k!==d){return k||e;
}else{return k;
}},setValue:function(l){l=this._convertValue(l);

if(this.__ib!=l){if(this._setValue){this._setValue(l);
}else{this._setAttribute(h,l);
}this.__ig(l);
}},getValue:function(){return this._convertValue(this._getValue?this._getValue():this._getAttribute(h));
},resetValue:function(){this.setValue(null);
},_onChangeContent:function(m){this.__ig(this._convertValue(m.getData()));
},_onInput:function(n){this.fireDataEvent(i,n.getData(),true);

if(this.getLiveUpdate()){this.setValue(n.getData());
}},__ig:function(o){if(this.__ib!=o){this.__ib=o;
this.fireDataEvent(a,o);
}}}});
})();
(function(){var g="_applyAttribute",f="Boolean",e="_applyMaxLength",d="maxlength",c="qx.ui.mobile.form.MText",b="String",a="PositiveInteger";
qx.Mixin.define(c,{construct:function(h){this.initMaxLength();
this.initPlaceholder();
this.initReadOnly();
},properties:{maxLength:{check:a,nullable:true,init:null,apply:e},placeholder:{check:b,nullable:true,init:null,apply:g},readOnly:{check:f,nullable:true,init:null,apply:g}},members:{_applyMaxLength:function(i,j){this._setAttribute(d,i);
}}});
})();
(function(){var a="qx.ui.mobile.form.MState";
qx.Mixin.define(a,{members:{__ih:null,addState:function(b){if(this.__ih===null){this.__ih={};
}this.__ih[b]=true;
this.addCssClass(b);
},hasState:function(c){return this.__ih!==null&&this.__ih[c];
},removeState:function(d){if(this.hasState(d)){delete this.__ih[d];
this.removeCssClass(d);
}},replaceState:function(e,f){if(this.hasState(e)){delete this.__ih[e];
this.__ih[f]=true;
this.removeCssClass(e);
this.addCssClass(f);
}else{this.addState(f);
}}}});
})();
(function(){var b="qx.ui.form.IModel",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeModel":a},members:{setModel:function(c){},getModel:function(){},resetModel:function(){}}});
})();
(function(){var l="qx.dynlocale",k="Boolean",j="changeLocale",i="changeInvalidMessage",h="String",g="invalid",f="",d="qx.ui.form.MForm",c="_applyValid",b="changeRequired",a="changeValid";
qx.Mixin.define(d,{construct:function(){if(qx.core.Environment.get(l)){qx.locale.Manager.getInstance().addListener(j,this.__ii,this);
}},properties:{valid:{check:k,init:true,apply:c,event:a},required:{check:k,init:false,event:b},invalidMessage:{check:h,init:f,event:i},requiredInvalidMessage:{check:h,nullable:true,event:i}},members:{_applyValid:function(m,n){m?this.removeState(g):this.addState(g);
},__ii:qx.core.Environment.select(l,{"true":function(e){var o=this.getInvalidMessage();

if(o&&o.translate){this.setInvalidMessage(o.translate());
}var p=this.getRequiredInvalidMessage();

if(p&&p.translate){this.setRequiredInvalidMessage(p.translate());
}},"false":null})},destruct:function(){if(qx.core.Environment.get(l)){qx.locale.Manager.getInstance().removeListener(j,this.__ii,this);
}}});
})();
(function(){var b="changeModel",a="qx.ui.form.MModelProperty";
qx.Mixin.define(a,{properties:{model:{nullable:true,event:b,dereference:true}}});
})();
(function(){var h="disabled",g="changeEnabled",f="abstract",e="Boolean",d="input",c="qx.ui.mobile.form.Input",b="type",a="_applyEnabled";
qx.Class.define(c,{extend:qx.ui.mobile.core.Widget,include:[qx.ui.form.MForm,qx.ui.form.MModelProperty,qx.ui.mobile.form.MState],implement:[qx.ui.form.IForm,qx.ui.form.IModel],type:f,construct:function(){qx.ui.mobile.core.Widget.call(this);
this._setAttribute(b,this._getType());
},properties:{enabled:{init:true,check:e,nullable:false,event:g,apply:a}},members:{_getTagName:function(){return d;
},_getType:function(){},_applyEnabled:function(i,j){if(i){this._setAttribute(h,null);
}else{this._setAttribute(h,h);
}}}});
})();
(function(){var c="text",b="qx.ui.mobile.form.TextField",a="textField";
qx.Class.define(b,{extend:qx.ui.mobile.form.Input,include:[qx.ui.mobile.form.MValue,qx.ui.mobile.form.MText],implement:[qx.ui.form.IStringForm],construct:function(d){qx.ui.mobile.form.Input.call(this);
},properties:{defaultCssClass:{refine:true,init:a}},members:{_getType:function(){return c;
}}});
})();
(function(){var a="qx.ui.form.renderer.IFormRenderer";
qx.Interface.define(a,{members:{addItems:function(b,c,d,e,f){},addButton:function(g,h){}}});
})();
(function(){var b="qx.ui.mobile.form.renderer.AbstractRenderer",a="abstract";
qx.Class.define(b,{type:a,extend:qx.ui.mobile.core.Widget,implement:qx.ui.form.renderer.IFormRenderer,construct:function(c){qx.ui.mobile.core.Widget.call(this);
var g=c.getGroups();

for(var i=0;i<g.length;i++){var f=g[i];
this.addItems(f.items,f.labels,f.title,f.options,f.headerOptions);
}var d=c.getButtons();
var e=c.getButtonOptions();

for(var i=0;i<d.length;i++){this.addButton(d[i],e[i]);
}c.setRenderer(this);
this._form=c;
},members:{_form:null,addItems:function(h,j,k){throw new Error("Abstract method call");
},addButton:function(l){throw new Error("Abstract method call");
},showErrorForItem:function(m){throw new Error("Abstract method call");
},resetForm:function(){throw new Error("Abstract method call");
}}});
})();
(function(){var d='formElementError',c="ul",b='div',a="qx.ui.mobile.form.renderer.Single";
qx.Class.define(a,{extend:qx.ui.mobile.form.renderer.AbstractRenderer,construct:function(e){qx.ui.mobile.form.renderer.AbstractRenderer.call(this,e);
},members:{__hr:[],_getTagName:function(){return c;
},addItems:function(f,g,h){if(h!=null){this._showGroupHeader(h);
}
for(var i=0,l=f.length;i<l;i++){var j=new qx.ui.mobile.form.Row();

if(g[i]!=null){j.add(new qx.ui.mobile.basic.Label(g[i]));
}j.add(f[i]);
this._add(j);
}},_showGroupHeader:function(k){var m=new qx.ui.mobile.form.Row();
m.add(new qx.ui.mobile.basic.Label(k));
this._add(m);
},addButton:function(n){var o=new qx.ui.mobile.form.Row(new qx.ui.mobile.layout.HBox());
o.add(n,{flex:1});
this._add(o);
},showErrorForItem:function(p){var q=qx.bom.Element.create(b);
q.innerHTML=p.getInvalidMessage();
qx.bom.element.Class.add(q,d);
qx.dom.Element.insertAfter(q,p.getContainerElement());
qx.bom.Element.focus(p.getContainerElement());
this.__hr.push(q);
},resetForm:function(){for(var i=0;i<this.__hr.length;i++){qx.dom.Element.remove(this.__hr[i]);
}}}});
})();
(function(){var e="li",d="_applyAttribute",c="Boolean",b="qx.ui.mobile.form.Row",a="formRow";
qx.Class.define(b,{extend:qx.ui.mobile.container.Composite,construct:function(f){qx.ui.mobile.container.Composite.call(this,f);
this.initSelectable();
},properties:{defaultCssClass:{refine:true,init:a},selectable:{check:c,init:false,apply:d}},members:{_getTagName:function(){return e;
}}});
})();
(function(){var a="qx.dom.Element";
qx.Class.define(a,{statics:{hasChild:function(parent,b){return b.parentNode===parent;
},hasChildren:function(c){return !!c.firstChild;
},hasChildElements:function(d){d=d.firstChild;

while(d){if(d.nodeType===1){return true;
}d=d.nextSibling;
}return false;
},getParentElement:function(e){return e.parentNode;
},isInDom:function(f,g){if(!g){g=window;
}var h=g.document.getElementsByTagName(f.nodeName);

for(var i=0,l=h.length;i<l;i++){if(h[i]===f){return true;
}}return false;
},insertAt:function(j,parent,k){var m=parent.childNodes[k];

if(m){parent.insertBefore(j,m);
}else{parent.appendChild(j);
}return true;
},insertBegin:function(n,parent){if(parent.firstChild){this.insertBefore(n,parent.firstChild);
}else{parent.appendChild(n);
}},insertEnd:function(o,parent){parent.appendChild(o);
},insertBefore:function(p,q){q.parentNode.insertBefore(p,q);
return true;
},insertAfter:function(r,s){var parent=s.parentNode;

if(s==parent.lastChild){parent.appendChild(r);
}else{return this.insertBefore(r,s.nextSibling);
}return true;
},remove:function(t){if(!t.parentNode){return false;
}t.parentNode.removeChild(t);
return true;
},removeChild:function(u,parent){if(u.parentNode!==parent){return false;
}parent.removeChild(u);
return true;
},removeChildAt:function(v,parent){var w=parent.childNodes[v];

if(!w){return false;
}parent.removeChild(w);
return true;
},replaceChild:function(x,y){if(!y.parentNode){return false;
}y.parentNode.replaceChild(x,y);
return true;
},replaceAt:function(z,A,parent){var B=parent.childNodes[A];

if(!B){return false;
}parent.replaceChild(z,B);
return true;
}}});
})();
(function(){var a="qx.ui.mobile.form.renderer.SinglePlaceholder";
qx.Class.define(a,{extend:qx.ui.mobile.form.renderer.Single,construct:function(b){qx.ui.mobile.form.renderer.Single.call(this,b);
},members:{addItems:function(c,d,e){if(e!=null){this._showGroupHeader(e);
}
for(var i=0,l=c.length;i<l;i++){var f=new qx.ui.mobile.form.Row();

if(c[i].setPlaceholder===undefined){throw new Error("Only widgets with placeholders supported.");
}c[i].setPlaceholder(d[i]);
f.add(c[i]);
this._add(f);
}}}});
})();
(function(){var l="showTweet",k="model",j="Back",i="changeTweets",h="qx.data.Array",g="Tweets",f="mobiletweets.page.Tweets",e="changeSelection",d="__iH",c=", ",a="tweets",b="qx.event.type.Data";
qx.Class.define(f,{extend:qx.ui.mobile.page.NavigationPage,construct:function(){qx.ui.mobile.page.NavigationPage.call(this);
this.set({title:g,showBackButton:true,backButtonText:j});
},events:{showTweet:b},properties:{tweets:{check:h,nullable:true,init:null,event:i}},members:{__iH:null,_initialize:function(){qx.ui.mobile.page.NavigationPage.prototype._initialize.call(this);
var m=this.__iH=new qx.ui.mobile.list.List();
var n=new qx.util.format.DateFormat();
m.setDelegate({configureItem:function(o,p,q){o.setTitle(p.getText());
o.setSubTitle(p.getUser().getName()+c+n.format(new Date(p.getCreated_at())));
o.setImage(p.getUser().getProfile_image_url());
o.setShowArrow(true);
}});
m.addListener(e,this.__it,this);
this.bind(a,m,k);
this.getContent().add(m);
},__it:function(r){var s=r.getData();
this.fireDataEvent(l,s);
}},destruct:function(){this._disposeObjects(d);
}});
})();
(function(){var q="change",p="_applyDelegate",o="changeModel",n="",m="list",l="changeDelegate",k="qx.data.Array",j="data-selectable",i="false",h="qx.ui.mobile.list.List",c="__gw",g="changeSelection",f="tap",b="ul",a="Integer",e="_applyModel",d="qx.event.type.Data";
qx.Class.define(h,{extend:qx.ui.mobile.core.Widget,construct:function(r){qx.ui.mobile.core.Widget.call(this);
this.addListener(f,this._onTap,this);
this.__gw=new qx.ui.mobile.list.provider.Provider(this);

if(r){this.setDelegate(r);
}},events:{changeSelection:d},properties:{defaultCssClass:{refine:true,init:m},delegate:{apply:p,event:l,init:null,nullable:true},model:{check:k,apply:e,event:o,nullable:true,init:null},itemCount:{check:a,init:0}},members:{__gw:null,_getTagName:function(){return b;
},_onTap:function(s){var t=s.getOriginalTarget();
var u=-1;

if(qx.bom.element.Attribute.get(t,j)!=i&&qx.dom.Element.hasChild(this.getContainerElement(),t)){u=qx.dom.Hierarchy.getElementIndex(t);
}
if(u!=-1){this.fireDataEvent(g,u);
}},_applyModel:function(v,w){if(w!=null){w.removeListener(q,this.__gx,this);
}
if(v!=null){v.addListener(q,this.__gx,this);
}this.setItemCount(v?v.getLength():0);
this.__gx();
},_applyDelegate:function(x,y){this.__gw.setDelegate(x);
},__gx:function(){this._setHtml(n);
var C=this.getItemCount();
var B=this.getModel();
var D=this.getContentElement();

for(var A=0;A<C;A++){var z=this.__gw.getItemElement(B.getItem(A),A);
D.appendChild(z);
}this._domUpdated();
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var d="_applyDelegate",c="qx.ui.mobile.list.provider.Provider",b="createItemRenderer",a="changeDelegate";
qx.Class.define(c,{extend:qx.core.Object,properties:{delegate:{event:a,init:null,nullable:true,apply:d}},members:{__gy:null,_setItemRenderer:function(e){this.__gy=e;
},_getItemRenderer:function(){return this.__gy;
},getItemElement:function(f,g){this.__gy.reset();
this._configureItem(f,g);
var h=this.__gy.getSelectable();
var j=this.__gy.getChildren();

for(var i=0,length=j.length;i<length;i++){j[i].setAnonymous(h);
}return this.__gy.getContainerElement().cloneNode(true);
},_configureItem:function(k,l){var m=this.getDelegate();

if(m!=null&&m.configureItem!=null){m.configureItem(this.__gy,k,l);
}},_createItemRenderer:function(){var o=qx.util.Delegate.getMethod(this.getDelegate(),b);
var n=null;

if(o==null){n=new qx.ui.mobile.list.renderer.Default();
}else{n=o();
}return n;
},_applyDelegate:function(p,q){this._setItemRenderer(this._createItemRenderer());
}},destruct:function(){this.__gy=null;
}});
})();
(function(){var a="qx.util.Delegate";
qx.Class.define(a,{statics:{getMethod:function(b,c){if(qx.util.Delegate.containsMethod(b,c)){return qx.lang.Function.bind(b[c],b);
}return null;
},containsMethod:function(d,e){var f=qx.lang.Type;

if(f.isObject(d)){return f.isFunction(d[e]);
}return false;
}}});
})();
(function(){var j="Boolean",i="arrow",h="selected",g="listItem",f="li",e="_applyAttribute",d="_applySelected",c="qx.ui.mobile.list.renderer.Abstract",b="_applyShowArrow",a="abstract";
qx.Class.define(c,{extend:qx.ui.mobile.core.Widget,type:a,include:[qx.ui.mobile.core.MChildrenHandling],construct:function(){qx.ui.mobile.core.Widget.call(this);
this.initSelectable();
this.initShowArrow();
},properties:{defaultCssClass:{refine:true,init:g},selected:{check:j,init:false,apply:d},selectable:{check:j,init:true,apply:e},showArrow:{check:j,init:false,apply:b}},members:{reset:function(){},_getTagName:function(){return f;
},_applyShowArrow:function(k,l){if(k){this.addCssClass(i);
}else{this.removeCssClass(i);
}},_applySelected:function(m,n){if(m){this.addCssClass(h);
}else{this.removeCssClass(h);
}}}});
})();
(function(){var f="",e="list-itemlabel",d="qx.ui.mobile.list.renderer.Default",c="list-itemimage",b="middle",a="subtitle";
qx.Class.define(d,{extend:qx.ui.mobile.list.renderer.Abstract,construct:function(){qx.ui.mobile.list.renderer.Abstract.call(this);
this.add(this._create());
},members:{__gz:null,__gf:null,__gA:null,getImageWidget:function(){return this.__gz;
},getTitleWidget:function(){return this.__gf;
},getSubTitleWidget:function(){return this.__gA;
},setImage:function(g){this.__gz.setSource(g);
},setTitle:function(h){this.__gf.setValue(h);
},setSubTitle:function(i){this.__gA.setValue(i);
},_create:function(){var j=qx.ui.mobile.container.Composite;
var l=new j(new qx.ui.mobile.layout.HBox().set({alignY:b}));
this.__gz=new qx.ui.mobile.basic.Image();
this.__gz.addCssClass(c);
l.add(this.__gz);
var k=new j(new qx.ui.mobile.layout.VBox());
l.add(k,{flex:1});
this.__gf=new qx.ui.mobile.basic.Label();
this.__gf.setWrap(false);
this.__gf.addCssClass(e);
k.add(this.__gf);
this.__gA=new qx.ui.mobile.basic.Label();
this.__gA.setWrap(false);
this.__gA.addCssClass(a);
k.add(this.__gA);
return l;
},reset:function(){this.__gz.setSource(null);
this.__gf.setValue(f);
this.__gA.setValue(f);
}}});
})();
(function(){var h="qx.event.type.Event",g="src",f="_applySource",e="loaded",d="img",c="loadingFailed",b="qx.ui.mobile.basic.Image",a="String";
qx.Class.define(b,{extend:qx.ui.mobile.core.Widget,construct:function(i){qx.ui.mobile.core.Widget.call(this);

if(i){this.setSource(i);
}else{this.initSource();
}},events:{loadingFailed:h,loaded:h},properties:{source:{check:a,nullable:true,init:null,apply:f}},members:{_getTagName:function(){return d;
},_applySource:function(j,k){var l=j;

if(l){l=qx.util.ResourceManager.getInstance().toUri(l);
var m=qx.io.ImageLoader;

if(!m.isFailed(l)){m.load(l,this.__gB,this);
}}this._setSource(l);
},__gB:function(n,o){if(o.failed){this.warn("Image could not be loaded: "+n);
this.fireEvent(c);
}else{this.fireEvent(e);
}this._domUpdated();
},_setSource:function(p){this._setAttribute(g,p);
}}});
})();
(function(){var b="load",a="qx.io.ImageLoader";
qx.Bootstrap.define(a,{statics:{__cL:{},__gC:{width:null,height:null},__gD:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(c){var d=this.__cL[c];
return !!(d&&d.loaded);
},isFailed:function(e){var f=this.__cL[e];
return !!(f&&f.failed);
},isLoading:function(g){var h=this.__cL[g];
return !!(h&&h.loading);
},getFormat:function(j){var k=this.__cL[j];
return k?k.format:null;
},getSize:function(m){var n=this.__cL[m];
return n?{width:n.width,height:n.height}:this.__gC;
},getWidth:function(o){var p=this.__cL[o];
return p?p.width:null;
},getHeight:function(q){var r=this.__cL[q];
return r?r.height:null;
},load:function(s,t,u){var v=this.__cL[s];

if(!v){v=this.__cL[s]={};
}if(t&&!u){u=window;
}if(v.loaded||v.loading||v.failed){if(t){if(v.loading){v.callbacks.push(t,u);
}else{t.call(u,s,v);
}}}else{v.loading=true;
v.callbacks=[];

if(t){v.callbacks.push(t,u);
}var x=new Image();
var w=qx.lang.Function.listener(this.__gE,this,x,s);
x.onload=w;
x.onerror=w;
x.src=s;
v.element=x;
}},abort:function(y){var z=this.__cL[y];

if(z&&!z.loaded){z.aborted=true;
var B=z.callbacks;
var A=z.element;
A.onload=A.onerror=null;
delete z.callbacks;
delete z.element;
delete z.loading;

for(var i=0,l=B.length;i<l;i+=2){B[i].call(B[i+1],y,z);
}}this.__cL[y]=null;
},__gE:qx.event.GlobalError.observeMethod(function(event,C,D){var E=this.__cL[D];

if(!E){}if(event.type===b){E.loaded=true;
E.width=this.__gF(C);
E.height=this.__gG(C);
var F=this.__gD.exec(D);

if(F!=null){E.format=F[1];
}}else{E.failed=true;
}C.onload=C.onerror=null;
var G=E.callbacks;
delete E.loading;
delete E.callbacks;
delete E.element;
for(var i=0,l=G.length;i<l;i+=2){G[i].call(G[i+1],D,E);
}}),__gF:function(H){return H.width;
},__gG:function(I){return I.height;
}}});
})();
(function(){var a="qx.util.format.IFormat";
qx.Interface.define(a,{members:{format:function(b){},parse:function(c){}}});
})();
(function(){var cF=")",cE="(",cD="|",cC="(\\d\\d?)",cB="format",cA="",cz="-",cy="abbreviated",cx="wide",cw="stand-alone",bG="narrow",bF="(\\d\\d*?)",bE="quarter",bD='A',bC="default",bB="0",bA="literal",bz="wildcard",by="'",bx="(\\d?)",cM="hour",cN='Anno Domini',cK="+",cL='Q',cI="ms",cJ="(\\d\\d?\\d?)",cG="dayOfYear",cH='AD',cO="Y+",cP=":",cf='y',ce="quoted_literal",ch="weekOfYear",cg='a',cj="day",ci="(-*",cl="locale",ck="GMT",cd="HH:mm:ss",cc='y+',n="HHmmss",o="long",p='Y',q='z',r='BC',s="d",t="D",u='B',v='',w='Before Christ',de='Z',dd=" ",dc="min",db="sec",di="\\d",dh="+?",dg="eeeee",df='W',dk="qqqq",dj="h",W="KK",X='L',U="Z",V="GGGGG",bb="LL",bc="EEEE",Y="^",ba='4th quarter',S="SSS",T="qqq",F="K",E='q',H='G',G="a",B='2nd quarter',A="dd",D="qx.util.format.DateFormat",C="eee",z="ee",y="q",bh="QQQQ",bi="ww",bj="H",bk='Y+',bd="(\\d\\d\\d?)",be="(GMT[\\+\\-]\\d\\d:\\d\\d)",bf="_applyLocale",bg="Q",bl="c",bm="weekOfMonth",P="ccc",O="EEEEE",N="EE",M="GGG",L='-',K="w",J="mm",I='h',R="S",Q='s',bn="QQQ",bo="G",bp="GG",bq="kk",br="ss",bs="([\\+\\-]\\d\\d\\d\\d)",bt='H',bu='S',bv='1st quarter',bw="MMMM",bK='c',bJ='Q1',bI='3rd quarter',bH="eeee",bO="QQ",bN="LLLLL",bM="HH",bL='k',bQ="m",bP="DDD",bX='D',bY="LLLL",bV='e',bW='K',bT="L",bU="hh",bR="cccc",bS="e",ca="W",cb="GGGG",cp='Q2',co="MM",cr="y+",cq="ccccc",ct="E",cs="yyyy-MM-dd HH:mm:ss",cv="short",cu='d',cn="unkown",cm="\\d?",cW="k",cX='m',cY="String",da='Q3',cS="DD",cT='M',cU='isoUtcDateTime',cV="SS",cQ="MMM",cR="s",m="M",l='w',h="EEE",g="$",f="?",e='Q4',d="MMMMM",c='E',b="z",a="LLL",x="qq";
qx.Class.define(D,{extend:qx.core.Object,implement:qx.util.format.IFormat,construct:function(dl,dm){qx.core.Object.call(this);

if(!dm){this.__hN=qx.locale.Manager.getInstance().getLocale();
this.__iI=qx.locale.Manager.getInstance().bind(cl,this,cl);
}else{this.__hN=dm;
this.setLocale(dm);
}this.__iJ=this.__hN;

if(dl!=null){this.__iK=dl.toString();

if(this.__iK in qx.util.format.DateFormat.ISO_MASKS){if(this.__iK===cU){this.__iL=true;
}this.__iK=qx.util.format.DateFormat.ISO_MASKS[this.__iK];
}}else{this.__iK=qx.locale.Date.getDateFormat(o,this.__hN)+dd+qx.locale.Date.getDateTimeFormat(n,cd,this.__hN);
}},properties:{locale:{apply:bf,nullable:true,check:cY}},statics:{getDateTimeInstance:function(){var dp=qx.util.format.DateFormat;
var dn=qx.locale.Date.getDateFormat(o)+dd+qx.locale.Date.getDateTimeFormat(n,cd);

if(dp._dateInstance==null||dp._dateInstance.__iK!=dn){dp._dateTimeInstance=new dp();
}return dp._dateTimeInstance;
},getDateInstance:function(){var dr=qx.util.format.DateFormat;
var dq=qx.locale.Date.getDateFormat(cv)+cA;

if(dr._dateInstance==null||dr._dateInstance.__iK!=dq){dr._dateInstance=new dr(dq);
}return dr._dateInstance;
},ASSUME_YEAR_2000_THRESHOLD:30,LOGGING_DATE_TIME__format:cs,ISO_MASKS:{isoDate:"yyyy-MM-dd",isoTime:"HH:mm:ss",isoDateTime:"yyyy-MM-dd'T'HH:mm:ss",isoUtcDateTime:"yyyy-MM-dd'T'HH:mm:ss'Z'"},AM_MARKER:"am",PM_MARKER:"pm"},members:{__iI:null,__hN:null,__iJ:null,__iK:null,__iM:null,__iN:null,__iO:null,__iL:null,__iP:function(ds,dt){var du=cA+(ds<0?((-1)*ds):ds);

while(du.length<dt){du=bB+du;
}return ds<0?cz+du:du;
},__iQ:function(dv){var dw=new Date(dv.getTime());
var dx=dw.getDate();

while(dw.getMonth()!=0){dw.setDate(-1);
dx+=dw.getDate()+1;
}return dx;
},__iR:function(dy){return new Date(dy.getTime()+(3-((dy.getDay()+6)%7))*86400000);
},__iS:function(dz){var dB=this.__iR(dz);
var dC=dB.getFullYear();
var dA=this.__iR(new Date(dC,0,4));
return Math.floor(1.5+(dB.getTime()-dA.getTime())/86400000/7);
},__iT:function(dD){var dF=this.__iR(dD);
var dE=this.__iR(new Date(dD.getFullYear(),dD.getMonth(),4));
return Math.floor(1.5+(dF.getTime()-dE.getTime())/86400000/7);
},__iU:function(dG){var dH=this.__iR(dG);
return dH.getFullYear();
},__iV:function(dI){var dJ=new Date(dI,2,1);
dJ.setDate(-1);
return dJ.getDate()+1===29;
},__iW:function(dK,dL){var dP=0;
var dQ=0;
if(!dL){dL=1971;
}var dM=0;

for(var i=1;i<=12;i++){var dO=new Date(dL,i,1);
dO.setDate(-1);
var dN=dO.getDate()+1;
dM+=dN;

if(dM<dK){dP++;
dQ+=dN;
}else{dQ=dK-(dM-dN);
break;
}}return {month:dP,day:dQ};
},__iX:function(dR,dS,dT){var dU;

switch(dS){case 11:dU=dR-1;

if(dR!=this.__iU(new Date(dU,dS,dT))){dU=dR;
}break;
case 0:dU=dR+1;

if(dR!=this.__iU(new Date(dU,dS,dT))){dU=dR;
}break;
default:dU=dR;
}return dU;
},_applyLocale:function(dV,dW){this.__hN=dV===null?this.setLocale(this.__iJ):dV;
},format:function(dX){if(dX==null){return null;
}
if(this.__iL){dX=new Date(dX.getUTCFullYear(),dX.getUTCMonth(),dX.getUTCDate(),dX.getUTCHours(),dX.getUTCMinutes(),dX.getUTCSeconds(),dX.getUTCMilliseconds());
}var eb=this.__hN;
var eg=dX.getFullYear();
var ec=dX.getMonth();
var ef=dX.getDate();
var ej=dX.getDay();
var em=dX.getHours();
var es=dX.getMinutes();
var ek=dX.getSeconds();
var eq=dX.getMilliseconds();
var ei=dX.getTimezoneOffset();
var en=ei>0?1:-1;
var dY=Math.floor(Math.abs(ei)/60);
var ep=Math.abs(ei)%60;
this.__iY();
var er=cA;

for(var i=0;i<this.__iO.length;i++){var eh=this.__iO[i];

if(eh.type==bA){er+=eh.text;
}else{var ea=eh.character;
var el=eh.size;
var et=f;

switch(ea){case cf:if(el==2){et=this.__iP(eg%100,2);
}else{var ed=Math.abs(eg);
et=ed+cA;

if(el>et.length){for(var j=et.length;j<el;j++){et=bB+et;
}}
if(eg<0){et=cz+et;
}}break;
case p:et=this.__iU(dX)+cA;
var ed=et.replace(L,v);

if(el>et.length){for(var j=ed.length;j<el;j++){ed=bB+ed;
}}et=et.indexOf(cz)!=-1?cz+ed:ed;
break;
case H:if(el>=1&&el<=3){et=eg>0?cH:r;
}else if(el==4){et=eg>0?cN:w;
}else if(el==5){et=eg>0?bD:u;
}break;
case cL:if(el==1||el==2){et=this.__iP(parseInt(ec/4)+1,el);
}
if(el==3){et=cL+(parseInt(ec/4)+1);
}break;
case E:if(el==1||el==2){et=this.__iP(parseInt(ec/4)+1,el);
}
if(el==3){et=cL+(parseInt(ec/4)+1);
}break;
case bX:et=this.__iP(this.__iQ(dX),el);
break;
case cu:et=this.__iP(ef,el);
break;
case l:et=this.__iP(this.__iS(dX),el);
break;
case df:et=this.__iT(dX);
break;
case c:if(el>=1&&el<=3){et=qx.locale.Date.getDayName(cy,ej,eb,cB);
}else if(el==4){et=qx.locale.Date.getDayName(cx,ej,eb,cB);
}else if(el==5){et=qx.locale.Date.getDayName(bG,ej,eb,cw);
}break;
case bV:var ee=qx.locale.Date.getWeekStart(eb);
var eo=1+((ej-ee>=0)?(ej-ee):7+(ej-ee));

if(el>=1&&el<=2){et=this.__iP(eo,el);
}else if(el==3){et=qx.locale.Date.getDayName(cy,ej,eb,cB);
}else if(el==4){et=qx.locale.Date.getDayName(cx,ej,eb,cB);
}else if(el==5){et=qx.locale.Date.getDayName(bG,ej,eb,cw);
}break;
case bK:var ee=qx.locale.Date.getWeekStart(eb);
var eo=1+((ej-ee>=0)?(ej-ee):7+(ej-ee));

if(el==1){et=v+eo;
}else if(el==3){et=qx.locale.Date.getDayName(cy,ej,eb,cB);
}else if(el==4){et=qx.locale.Date.getDayName(cx,ej,eb,cB);
}else if(el==5){et=qx.locale.Date.getDayName(bG,ej,eb,cw);
}break;
case cT:if(el==1||el==2){et=this.__iP(ec+1,el);
}else if(el==3){et=qx.locale.Date.getMonthName(cy,ec,eb,cB);
}else if(el==4){et=qx.locale.Date.getMonthName(cx,ec,eb,cB);
}else if(el==5){et=qx.locale.Date.getMonthName(bG,ec,eb,cw);
}break;
case X:if(el==1||el==2){et=this.__iP(ec+1,el);
}else if(el==3){et=qx.locale.Date.getMonthName(cy,ec,eb,cB);
}else if(el==4){et=qx.locale.Date.getMonthName(cx,ec,eb,cB);
}else if(el==5){et=qx.locale.Date.getMonthName(bG,ec,eb,cw);
}break;
case cg:et=(em<12)?qx.locale.Date.getAmMarker(eb):qx.locale.Date.getPmMarker(eb);
break;
case bt:et=this.__iP(em,el);
break;
case bL:et=this.__iP((em==0)?24:em,el);
break;
case bW:et=this.__iP(em%12,el);
break;
case I:et=this.__iP(((em%12)==0)?12:(em%12),el);
break;
case cX:et=this.__iP(es,el);
break;
case Q:et=this.__iP(ek,el);
break;
case bu:et=eq+cA;

if(el<=et.length){et=et.substr(0,el);
}else{for(var j=et.length;j<el;j++){et=et+bB;
}}break;
case q:if(el>=1&&el<=4){et=ck+((en>0)?cz:cK)+this.__iP(Math.abs(dY),2)+cP+this.__iP(ep,2);
}break;
case de:if(el>=1&&el<=3){et=((en>0)?cz:cK)+this.__iP(Math.abs(dY),2)+this.__iP(ep,2);
}else{et=ck+((en>0)?cz:cK)+this.__iP(Math.abs(dY),2)+cP+this.__iP(ep,2);
}break;
}er+=et;
}}return er;
},parse:function(eu){this.__ja();
var eD=this.__iM.regex.exec(eu);

if(eD==null){throw new Error("Date string '"+eu+"' does not match the date format: "+this.__iK);
}var ev={era:1,year:1970,quarter:1,month:0,day:1,dayOfYear:1,hour:0,ispm:false,weekDay:4,weekYear:1970,weekOfMonth:1,weekOfYear:1,min:0,sec:0,ms:0};
var ex=1;
var ew=false;
var ey=false;

for(var i=0;i<this.__iM.usedRules.length;i++){var ez=this.__iM.usedRules[i];
var eA=eD[ex];

if(ez.field!=null){ev[ez.field]=parseInt(eA,10);
}else{ez.manipulator(ev,eA);
}
if(ez.pattern==cO){var eB=false;

for(var k=0;k<this.__iM.usedRules.length;k++){if(this.__iM.usedRules[k].pattern==cc){eB=true;
break;
}}
if(!eB){ew=true;
}}
if(ez.pattern.indexOf(t)!=-1){var eF=false;

for(var k=0;k<this.__iM.usedRules.length;k++){if(this.__iM.usedRules[k].pattern.indexOf(s)!=-1){eF=true;
break;
}}
if(!eF){ey=true;
}}ex+=(ez.groups==null)?1:ez.groups;
}
if(ew){ev.year=this.__iX(ev.weekYear,ev.month,ev.day);
}
if(ey){var eE=this.__iW(ev.dayOfYear,ev.year);
ev.month=eE.month;
ev.day=eE.day;
}
if(ev.era<0&&(ev.year*ev.era<0)){ev.year=ev.year*ev.era;
}var eC=new Date(ev.year,ev.month,ev.day,(ev.ispm)?(ev.hour+12):ev.hour,ev.min,ev.sec,ev.ms);

if(this.__iL){eC=new Date(eC.getUTCFullYear(),eC.getUTCMonth(),eC.getUTCDate(),eC.getUTCHours(),eC.getUTCMinutes(),eC.getUTCSeconds(),eC.getUTCMilliseconds());
}
if(ev.month!=eC.getMonth()||ev.year!=eC.getFullYear()){throw new Error("Error parsing date '"+eu+"': the value for day or month is too large");
}return eC;
},__iY:function(){if(this.__iO!=null){return;
}this.__iO=[];
var eK;
var eI=0;
var eM=cA;
var eG=this.__iK;
var eJ=bC;
var i=0;

while(i<eG.length){var eL=eG.charAt(i);

switch(eJ){case ce:if(eL==by){if(i+1>=eG.length){i++;
break;
}var eH=eG.charAt(i+1);

if(eH==by){eM+=eL;
i++;
}else{i++;
eJ=cn;
}}else{eM+=eL;
i++;
}break;
case bz:if(eL==eK){eI++;
i++;
}else{this.__iO.push({type:bz,character:eK,size:eI});
eK=null;
eI=0;
eJ=bC;
}break;
default:if((eL>=cg&&eL<=q)||(eL>=bD&&eL<=de)){eK=eL;
eJ=bz;
}else if(eL==by){if(i+1>=eG.length){eM+=eL;
i++;
break;
}var eH=eG.charAt(i+1);

if(eH==by){eM+=eL;
i++;
}i++;
eJ=ce;
}else{eJ=bC;
}
if(eJ!=bC){if(eM.length>0){this.__iO.push({type:bA,text:eM});
eM=cA;
}}else{eM+=eL;
i++;
}break;
}}if(eK!=null){this.__iO.push({type:bz,character:eK,size:eI});
}else if(eM.length>0){this.__iO.push({type:bA,text:eM});
}},__ja:function(){if(this.__iM!=null){return ;
}var eQ=this.__iK;
this.__jc();
this.__iY();
var eW=[];
var eS=Y;

for(var eO=0;eO<this.__iO.length;eO++){var eX=this.__iO[eO];

if(eX.type==bA){eS+=qx.lang.String.escapeRegexpChars(eX.text);
}else{var eP=eX.character;
var eT=eX.size;
var eR;

for(var eY=0;eY<this.__iN.length;eY++){var eU=this.__iN[eY];

if(this.__jb(eU,eP,eT)){eR=eU;
break;
}}if(eR==null){var eV=cA;

for(var i=0;i<eT;i++){eV+=eP;
}throw new Error("Malformed date format: "+eQ+". Wildcard "+eV+" is not supported");
}else{eW.push(eR);
eS+=eR.regex;
}}}eS+=g;
var eN;

try{eN=new RegExp(eS);
}catch(fa){throw new Error("Malformed date format: "+eQ);
}this.__iM={regex:eN,"usedRules":eW,pattern:eS};
},__jb:function(fb,fc,fd){if(fc===cf&&fb.pattern===cc){fb.regex=fb.regexFunc(fd);
return true;
}else if(fc===p&&fb.pattern===bk){fb.regex=fb.regexFunc(fd);
return true;
}else{return fc==fb.pattern.charAt(0)&&fd==fb.pattern.length;
}},__jc:function(){var fu=qx.util.format.DateFormat;
var fx=qx.lang.String;

if(this.__iN!=null){return ;
}var fv=this.__iN=[];
var fp=qx.locale.Date.getAmMarker(this.__hN).toString()||fu.AM_MARKER;
var fH=qx.locale.Date.getPmMarker(this.__hN).toString()||fu.PM_MARKER;
var fg=this.__hN;
var fm=function(fO,fP){fP=parseInt(fP,10);

if(fP>0){if(fP<fu.ASSUME_YEAR_2000_THRESHOLD){fP+=2000;
}else if(fP<100){fP+=1900;
}}fO.year=fP;
};
var fL=function(fQ,fR){fR=parseInt(fR,10);

if(fR>0){if(fR<fu.ASSUME_YEAR_2000_THRESHOLD){fR+=2000;
}else if(fR<100){fR+=1900;
}}fQ.weekYear=fR;
};
var fN=function(fS,fT){fS.month=parseInt(fT,10)-1;
};
var fk=function(fU,fV){var fX=qx.locale.Date.getWeekStart(fg);
var fW=(parseInt(fV,10)-1+fX)<=6?parseInt(fV,10)-1+fX:(parseInt(fV,10)-1+fX)-7;
fU.weekDay=fW;
};
var fi=function(fY,ga){var gb=qx.locale.Date.getPmMarker(fg).toString()||fu.PM_MARKER;
fY.ispm=(ga==gb);
};
var fo=function(gc,gd){gc.hour=parseInt(gd,10)%24;
};
var fh=function(ge,gf){ge.hour=parseInt(gf,10)%12;
};
var fA=function(gg,gh){return;
};
var fB=[bD,u];
var fE=function(gi,gj){gi.era=gj==bD?1:-1;
};
var fs=[cH,r];
var fr=function(gk,gl){gk.era=gl==cH?1:-1;
};
var fG=[cN,w];
var fq=function(gm,gn){gm.era=gn==cN?1:-1;
};
var fJ=[bJ,cp,da,e];
var fe=function(go,gp){go.quarter=fJ.indexOf(gp);
};
var fF=[bv,B,bI,ba];
var fz=function(gq,gr){gq.quarter=fF.indexOf(gr);
};
var fK=qx.locale.Date.getMonthNames(cy,fg,cB);

for(var i=0;i<fK.length;i++){fK[i]=fx.escapeRegexpChars(fK[i].toString());
}var fl=function(gs,gt){gt=fx.escapeRegexpChars(gt);
gs.month=fK.indexOf(gt);
};
var fw=qx.locale.Date.getMonthNames(cx,fg,cB);

for(var i=0;i<fw.length;i++){fw[i]=fx.escapeRegexpChars(fw[i].toString());
}var fC=function(gu,gv){gv=fx.escapeRegexpChars(gv);
gu.month=fw.indexOf(gv);
};
var fM=qx.locale.Date.getMonthNames(bG,fg,cw);

for(var i=0;i<fM.length;i++){fM[i]=fx.escapeRegexpChars(fM[i].toString());
}var fj=function(gw,gx){gx=fx.escapeRegexpChars(gx);
gw.month=fM.indexOf(gx);
};
var ff=qx.locale.Date.getDayNames(bG,fg,cw);

for(var i=0;i<ff.length;i++){ff[i]=fx.escapeRegexpChars(ff[i].toString());
}var fI=function(gy,gz){gz=fx.escapeRegexpChars(gz);
gy.weekDay=ff.indexOf(gz);
};
var fD=qx.locale.Date.getDayNames(cy,fg,cB);

for(var i=0;i<fD.length;i++){fD[i]=fx.escapeRegexpChars(fD[i].toString());
}var fn=function(gA,gB){gB=fx.escapeRegexpChars(gB);
gA.weekDay=fD.indexOf(gB);
};
var fy=qx.locale.Date.getDayNames(cx,fg,cB);

for(var i=0;i<fy.length;i++){fy[i]=fx.escapeRegexpChars(fy[i].toString());
}var ft=function(gC,gD){gD=fx.escapeRegexpChars(gD);
gC.weekDay=fy.indexOf(gD);
};
fv.push({pattern:cr,regexFunc:function(gE){var gF=ci;

for(var i=0;i<gE;i++){gF+=di;

if(i===gE-1&&i!==1){gF+=dh;
}}gF+=cF;
return gF;
},manipulator:fm});
fv.push({pattern:cO,regexFunc:function(gG){var gH=ci;

for(var i=0;i<gG;i++){gH+=di;

if(i===gG-1){gH+=dh;
}}gH+=cF;
return gH;
},manipulator:fL});
fv.push({pattern:bo,regex:cE+fs.join(cD)+cF,manipulator:fr});
fv.push({pattern:bp,regex:cE+fs.join(cD)+cF,manipulator:fr});
fv.push({pattern:M,regex:cE+fs.join(cD)+cF,manipulator:fr});
fv.push({pattern:cb,regex:cE+fG.join(cD)+cF,manipulator:fq});
fv.push({pattern:V,regex:cE+fB.join(cD)+cF,manipulator:fE});
fv.push({pattern:bg,regex:bF,field:bE});
fv.push({pattern:bO,regex:cC,field:bE});
fv.push({pattern:bn,regex:cE+fJ.join(cD)+cF,manipulator:fe});
fv.push({pattern:bh,regex:cE+fF.join(cD)+cF,manipulator:fz});
fv.push({pattern:y,regex:bF,field:bE});
fv.push({pattern:x,regex:cC,field:bE});
fv.push({pattern:T,regex:cE+fJ.join(cD)+cF,manipulator:fe});
fv.push({pattern:dk,regex:cE+fF.join(cD)+cF,manipulator:fz});
fv.push({pattern:m,regex:bF,manipulator:fN});
fv.push({pattern:co,regex:cC,manipulator:fN});
fv.push({pattern:cQ,regex:cE+fK.join(cD)+cF,manipulator:fl});
fv.push({pattern:bw,regex:cE+fw.join(cD)+cF,manipulator:fC});
fv.push({pattern:d,regex:cE+fM.join(cD)+cF,manipulator:fj});
fv.push({pattern:bT,regex:bF,manipulator:fN});
fv.push({pattern:bb,regex:cC,manipulator:fN});
fv.push({pattern:a,regex:cE+fK.join(cD)+cF,manipulator:fl});
fv.push({pattern:bY,regex:cE+fw.join(cD)+cF,manipulator:fC});
fv.push({pattern:bN,regex:cE+fM.join(cD)+cF,manipulator:fj});
fv.push({pattern:A,regex:cC,field:cj});
fv.push({pattern:s,regex:bF,field:cj});
fv.push({pattern:t,regex:bx,field:cG});
fv.push({pattern:cS,regex:cC,field:cG});
fv.push({pattern:bP,regex:bd,field:cG});
fv.push({pattern:ct,regex:cE+fD.join(cD)+cF,manipulator:fn});
fv.push({pattern:N,regex:cE+fD.join(cD)+cF,manipulator:fn});
fv.push({pattern:h,regex:cE+fD.join(cD)+cF,manipulator:fn});
fv.push({pattern:bc,regex:cE+fy.join(cD)+cF,manipulator:ft});
fv.push({pattern:O,regex:cE+ff.join(cD)+cF,manipulator:fI});
fv.push({pattern:bS,regex:bx,manipulator:fk});
fv.push({pattern:z,regex:cC,manipulator:fk});
fv.push({pattern:C,regex:cE+fD.join(cD)+cF,manipulator:fn});
fv.push({pattern:bH,regex:cE+fy.join(cD)+cF,manipulator:ft});
fv.push({pattern:dg,regex:cE+ff.join(cD)+cF,manipulator:fI});
fv.push({pattern:bl,regex:cm,manipulator:fk});
fv.push({pattern:P,regex:cE+fD.join(cD)+cF,manipulator:fn});
fv.push({pattern:bR,regex:cE+fy.join(cD)+cF,manipulator:ft});
fv.push({pattern:cq,regex:cE+ff.join(cD)+cF,manipulator:fI});
fv.push({pattern:G,regex:cE+fp+cD+fH+cF,manipulator:fi});
fv.push({pattern:ca,regex:bx,field:bm});
fv.push({pattern:K,regex:bx,field:ch});
fv.push({pattern:bi,regex:cC,field:ch});
fv.push({pattern:bM,regex:cC,field:cM});
fv.push({pattern:bj,regex:cC,field:cM});
fv.push({pattern:bq,regex:cC,manipulator:fo});
fv.push({pattern:cW,regex:cC,manipulator:fo});
fv.push({pattern:W,regex:cC,field:cM});
fv.push({pattern:F,regex:cC,field:cM});
fv.push({pattern:bU,regex:cC,manipulator:fh});
fv.push({pattern:dj,regex:cC,manipulator:fh});
fv.push({pattern:J,regex:cC,field:dc});
fv.push({pattern:bQ,regex:cC,field:dc});
fv.push({pattern:br,regex:cC,field:db});
fv.push({pattern:cR,regex:cC,field:db});
fv.push({pattern:S,regex:cJ,field:cI});
fv.push({pattern:cV,regex:cJ,field:cI});
fv.push({pattern:R,regex:cJ,field:cI});
fv.push({pattern:U,regex:bs,manipulator:fA});
fv.push({pattern:b,regex:be,manipulator:fA});
}},destruct:function(){if(this.__iI!=null){qx.locale.Manager.getInstance().removeBinding(this.__iI);
}this.__iO=this.__iM=this.__iN=null;
}});
})();
(function(){var k="_",j="format",h="thu",g="sat",f="cldr_day_",e="cldr_month_",d="wed",c="fri",b="tue",a="mon",B="sun",A="short",z="HH:mm",y="HHmmsszz",x="HHmm",w="HHmmss",v="cldr_date_format_",u="HH:mm:ss zz",t="full",s="cldr_pm",q="long",r="medium",o="cldr_am",p="qx.locale.Date",m="cldr_date_time_format_",n="cldr_time_format_",l="HH:mm:ss";
qx.Class.define(p,{statics:{__jd:qx.locale.Manager.getInstance(),getAmMarker:function(C){return this.__jd.localize(o,[],C);
},getPmMarker:function(D){return this.__jd.localize(s,[],D);
},getDayNames:function(length,E,F){var F=F?F:j;
var H=[B,a,b,d,h,c,g];
var I=[];

for(var i=0;i<H.length;i++){var G=f+F+k+length+k+H[i];
I.push(this.__jd.localize(G,[],E));
}return I;
},getDayName:function(length,J,K,L){var L=L?L:j;
var N=[B,a,b,d,h,c,g];
var M=f+L+k+length+k+N[J];
return this.__jd.localize(M,[],K);
},getMonthNames:function(length,O,P){var P=P?P:j;
var R=[];

for(var i=0;i<12;i++){var Q=e+P+k+length+k+(i+1);
R.push(this.__jd.localize(Q,[],O));
}return R;
},getMonthName:function(length,S,T,U){var U=U?U:j;
var V=e+U+k+length+k+(S+1);
return this.__jd.localize(V,[],T);
},getDateFormat:function(W,X){var Y=v+W;
return this.__jd.localize(Y,[],X);
},getDateTimeFormat:function(ba,bb,bc){var be=m+ba;
var bd=this.__jd.localize(be,[],bc);

if(bd==be){bd=bb;
}return bd;
},getTimeFormat:function(bf,bg){var bi=n+bf;
var bh=this.__jd.localize(bi,[],bg);

if(bh!=bi){return bh;
}
switch(bf){case A:case r:return qx.locale.Date.getDateTimeFormat(x,z);
case q:return qx.locale.Date.getDateTimeFormat(w,l);
case t:return qx.locale.Date.getDateTimeFormat(y,u);
default:throw new Error("This case should never happen.");
}},getWeekStart:function(bj){var bk={"MV":5,"AE":6,"AF":6,"BH":6,"DJ":6,"DZ":6,"EG":6,"ER":6,"ET":6,"IQ":6,"IR":6,"JO":6,"KE":6,"KW":6,"LB":6,"LY":6,"MA":6,"OM":6,"QA":6,"SA":6,"SD":6,"SO":6,"TN":6,"YE":6,"AS":0,"AU":0,"AZ":0,"BW":0,"CA":0,"CN":0,"FO":0,"GE":0,"GL":0,"GU":0,"HK":0,"IE":0,"IL":0,"IS":0,"JM":0,"JP":0,"KG":0,"KR":0,"LA":0,"MH":0,"MN":0,"MO":0,"MP":0,"MT":0,"NZ":0,"PH":0,"PK":0,"SG":0,"TH":0,"TT":0,"TW":0,"UM":0,"US":0,"UZ":0,"VI":0,"ZA":0,"ZW":0,"MW":0,"NG":0,"TJ":0};
var bl=qx.locale.Date._getTerritory(bj);
return bk[bl]!=null?bk[bl]:1;
},getWeekendStart:function(bm){var bo={"EG":5,"IL":5,"SY":5,"IN":0,"AE":4,"BH":4,"DZ":4,"IQ":4,"JO":4,"KW":4,"LB":4,"LY":4,"MA":4,"OM":4,"QA":4,"SA":4,"SD":4,"TN":4,"YE":4};
var bn=qx.locale.Date._getTerritory(bm);
return bo[bn]!=null?bo[bn]:6;
},getWeekendEnd:function(bp){var bq={"AE":5,"BH":5,"DZ":5,"IQ":5,"JO":5,"KW":5,"LB":5,"LY":5,"MA":5,"OM":5,"QA":5,"SA":5,"SD":5,"TN":5,"YE":5,"AF":5,"IR":5,"EG":6,"IL":6,"SY":6};
var br=qx.locale.Date._getTerritory(bp);
return bq[br]!=null?bq[br]:0;
},isWeekend:function(bs,bt){var bv=qx.locale.Date.getWeekendStart(bt);
var bu=qx.locale.Date.getWeekendEnd(bt);

if(bu>bv){return ((bs>=bv)&&(bs<=bu));
}else{return ((bs>=bv)||(bs<=bu));
}},_getTerritory:function(bw){if(bw){var bx=bw.split(k)[1]||bw;
}else{bx=this.__jd.getTerritory()||this.__jd.getLanguage();
}return bx.toUpperCase();
}}});
})();
(function(){var g="mobiletweets.page.Tweet",f="tweet.text",e="changeTweet",d="Back",c="value",b="Details",a="Object";
qx.Class.define(g,{extend:qx.ui.mobile.page.NavigationPage,construct:function(){qx.ui.mobile.page.NavigationPage.call(this);
this.set({title:b,showBackButton:true,backButtonText:d});
},properties:{tweet:{check:a,nullable:true,init:null,event:e}},members:{_initialize:function(){qx.ui.mobile.page.NavigationPage.prototype._initialize.call(this);
var h=new qx.ui.mobile.basic.Label();
this.getContent().add(h);
this.bind(f,h,c);
}}});
})();
(function(){var j="aborted",i="completed",h="failed",g="configured",f="timeout",e="application/json",d="loaded",c="qx.event.type.Data",b="error",a="receiving",y="changeState",x="sending",w="changeModel",v="json",u="GET",t="__jf",s="fail",r="queued",q="success",p="String",n="changePhase",o="_marshaler",l="qx.data.store.Json",m="changeUrl",k="_applyUrl";
qx.Class.define(l,{extend:qx.core.Object,construct:function(z,A){qx.core.Object.call(this);
this._marshaler=new qx.data.marshal.Json(A);
this._delegate=A;
this.__je=false;

if(z!=null){this.setUrl(z);
}},events:{"loaded":c,"error":c},properties:{model:{nullable:true,event:w},state:{check:[g,r,x,a,i,j,f,h],init:g,event:y},url:{check:p,apply:k,event:m,nullable:true}},members:{_marshaler:null,_delegate:null,__jf:null,__je:null,_applyUrl:function(B,C){if(B!=null){B=qx.util.AliasManager.getInstance().resolve(B);
B=qx.util.ResourceManager.getInstance().toUri(B);
this._createRequest(B);
}},_getRequest:function(){return this.__jf;
},_setRequest:function(D){this.__jf=D;
},setDeprecatedTransport:function(E){qx.core.Assert.assertBoolean(E);

if(E){qx.log.Logger.deprecatedMethodWarning(arguments.callee);
}this.__je=E;
},isDeprecatedTransport:function(){return !!this.__je;
},_createRequest:function(F){if(this.isDeprecatedTransport()){this._warnDeprecated();
return this.__jg(F);
}var G=new qx.io.request.Xhr(F);
this._setRequest(G);
G.setAccept(e);
G.setParser(v);
G.addListener(q,this._onSuccess,this);
var H=this._delegate;

if(H&&qx.lang.Type.isFunction(H.configureRequest)){this._delegate.configureRequest(G);
}G.addListener(n,this._onChangePhase,this);
G.addListener(s,this._onFail,this);
G.send();
},__jg:function(I){var J=new qx.io.remote.Request(I,u,e);
this._setRequest(J);
J.addListener(i,this.__ji,this);
var K=this._delegate;

if(K&&qx.lang.Type.isFunction(K.configureRequest)){this._delegate.configureRequest(J);
}J.addListener(y,function(L){var M=L.getData();
this.setState(M);
},this);
J.addListener(h,this.__jh,this);
J.addListener(j,this.__jh,this);
J.addListener(f,this.__jh,this);
J.send();
},_onChangePhase:function(N){var O=N.getData(),Q={},P;
Q={"opened":g,"sent":x,"loading":a,"success":i,"abort":j,"timeout":f,"statusError":h};
P=Q[O];

if(P){this.setState(P);
}},_onFail:function(R){var S=R.getTarget();
this.fireDataEvent(b,S);
},__jh:function(T){this.fireDataEvent(b,T);
},_onSuccess:function(U){var W=U.getTarget(),X=W.getResponse();
var V=this._delegate;

if(V&&qx.lang.Type.isFunction(V.manipulateData)){X=this._delegate.manipulateData(X);
}this._marshaler.toClass(X,true);
var Y=this.getModel();
this.setModel(this._marshaler.toModel(X));
if(Y&&Y.dispose){Y.dispose();
}this.fireDataEvent(d,this.getModel());
},__ji:function(ba){var bc=ba.getContent();
var bb=this._delegate;

if(bb&&qx.lang.Type.isFunction(bb.manipulateData)){bc=this._delegate.manipulateData(bc);
}this._marshaler.toClass(bc,true);
var bd=this.getModel();
this.setModel(this._marshaler.toModel(bc));
if(bd&&bd.dispose){bd.dispose();
}this.fireDataEvent(d,this.getModel());
},reload:function(){var be=this.getUrl();

if(be!=null){this._createRequest(be);
}},_warnDeprecated:function(){qx.log.Logger.warn("Using qx.io.remote.Request in qx.data.store.Json "+"is deprecated. Please consult the API documentation.");
}},destruct:function(){this._disposeObjects(o,t);
this._delegate=null;
}});
})();
(function(){var a="qx.data.marshal.IMarshaler";
qx.Interface.define(a,{members:{toClass:function(b,c){},toModel:function(d){}}});
})();
(function(){var k="qx.data.model.",j="",h="Array",g="_validate",f='"',e="qx.debug.databinding",d="change",c="qx.data.marshal.Json",b="set",a="_applyEventPropagation";
qx.Class.define(c,{extend:qx.core.Object,implement:[qx.data.marshal.IMarshaler],construct:function(l){qx.core.Object.call(this);
this.__jj=l;
},statics:{__jk:null,createModel:function(m,n){if(this.__jk===null){this.__jk=new qx.data.marshal.Json();
}this.__jk.toClass(m,n);
return this.__jk.toModel(m);
}},members:{__jj:null,__jl:function(o){return qx.Bootstrap.getKeys(o).sort().join(f);
},toClass:function(p,q){if(!qx.lang.Type.isObject(p)||p instanceof qx.core.Object){if(p instanceof Array||qx.Bootstrap.getClass(p)==h){for(var i=0;i<p.length;i++){this.toClass(p[i],q);
}}return ;
}var s=this.__jl(p);
for(var t in p){this.toClass(p[t],q);
}if(qx.Class.isDefined(k+s)){return;
}if(this.__jj&&this.__jj.getModelClass&&this.__jj.getModelClass(s)!=null){return;
}var z={};
var y={__jm:this.__jm};

for(var t in p){t=t.replace(/-/g,j);
z[t]={};
z[t].nullable=true;
z[t].event=d+qx.lang.String.firstUp(t);
if(q){z[t].apply=a;
}if(this.__jj&&this.__jj.getValidationRule){var v=this.__jj.getValidationRule(s,t);

if(v){z[t].validate=g+t;
y[g+t]=v;
}}}if(this.__jj&&this.__jj.getModelSuperClass){var x=this.__jj.getModelSuperClass(s)||qx.core.Object;
}else{var x=qx.core.Object;
}var u=[];

if(this.__jj&&this.__jj.getModelMixins){var w=this.__jj.getModelMixins(s);
if(!qx.lang.Type.isArray(w)){if(w!=null){u=[w];
}}}if(q){u.push(qx.data.marshal.MEventBubbling);
}var r={extend:x,include:u,properties:z,members:y,destruct:this.__jn};
qx.Class.define(k+s,r);
},__jn:function(){var A=qx.util.PropertyUtil.getAllProperties(this.constructor);

for(var B in A){this.__jm(this.get(A[B].name));
}},__jm:function(C){if(!(C instanceof qx.core.Object)){return ;
}if(C.isDisposed()){return;
}if(qx.Class.implementsInterface(C,qx.data.IListData)){for(var i=0;i<C.getLength();i++){this.__jm(C.getItem(i));
}}C.dispose();
},__jo:function(D){var E;
if(this.__jj&&this.__jj.getModelClass){E=this.__jj.getModelClass(D);
}
if(E!=null){return (new E());
}else{var F=qx.Class.getByName(k+D);
return (new F());
}},toModel:function(G){var K=qx.lang.Type.isObject(G);
var H=G instanceof Array||qx.Bootstrap.getClass(G)==h;

if((!K&&!H)||G instanceof qx.core.Object){return G;
}else if(H){var M=new qx.data.Array();

for(var i=0;i<G.length;i++){M.push(this.toModel(G[i]));
}return M;
}else if(K){var I=this.__jl(G);
var N=this.__jo(I);
for(var L in G){var J=L.replace(/-/g,j);
if((false)&&qx.core.Environment.get(e)){if(L!=J){this.warn("The model contained an illegal name: '"+L+"'. Replaced it with '"+J+"'.");
}}N[b+qx.lang.String.firstUp(J)](this.toModel(G[L]));
}return N;
}throw new Error("Unsupported type!");
}},destruct:function(){this.__jj=null;
}});
})();
(function(){var h="[",g="]",f=".",d="idBubble",c="changeBubble",b="qx.data.marshal.MEventBubbling",a="qx.event.type.Data";
qx.Mixin.define(b,{events:{"changeBubble":a},members:{_applyEventPropagation:function(i,j,name){this.fireDataEvent(c,{value:i,name:name,old:j});
this._registerEventChaining(i,j,name);
},_registerEventChaining:function(k,l,name){if((k instanceof qx.core.Object)&&qx.Class.hasMixin(k.constructor,qx.data.marshal.MEventBubbling)){var m=qx.lang.Function.bind(this.__gH,this,name);
var n=k.addListener(c,m,this);
k.setUserData(d,n);
}if(l!=null&&l.getUserData&&l.getUserData(d)!=null){l.removeListenerById(l.getUserData(d));
}},__gH:function(name,e){var v=e.getData();
var r=v.value;
var p=v.old;
if(qx.Class.hasInterface(e.getTarget().constructor,qx.data.IListData)){if(v.name.indexOf){var u=v.name.indexOf(f)!=-1?v.name.indexOf(f):v.name.length;
var s=v.name.indexOf(h)!=-1?v.name.indexOf(h):v.name.length;

if(u<s){var o=v.name.substring(0,u);
var t=v.name.substring(u+1,v.name.length);

if(t[0]!=h){t=f+t;
}var q=name+h+o+g+t;
}else if(s<u){var o=v.name.substring(0,s);
var t=v.name.substring(s,v.name.length);
var q=name+h+o+g+t;
}else{var q=name+h+v.name+g;
}}else{var q=name+h+v.name+g;
}}else{var q=name+f+v.name;
}this.fireDataEvent(c,{value:r,name:q,old:p});
}}});
})();
(function(){var d="$$theme_",c="$$user_",b="$$init_",a="qx.util.PropertyUtil";
qx.Class.define(a,{statics:{getProperties:function(e){return e.$$properties;
},getAllProperties:function(f){var i={};
var j=f;
while(j!=qx.core.Object){var h=this.getProperties(j);

for(var g in h){i[g]=h[g];
}j=j.superclass;
}return i;
},getUserValue:function(k,l){return k[c+l];
},setUserValue:function(m,n,o){m[c+n]=o;
},deleteUserValue:function(p,q){delete (p[c+q]);
},getInitValue:function(r,s){return r[b+s];
},setInitValue:function(t,u,v){t[b+u]=v;
},deleteInitValue:function(w,x){delete (w[b+x]);
},getThemeValue:function(y,z){return y[d+z];
},setThemeValue:function(A,B,C){A[d+B]=C;
},deleteThemeValue:function(D,E){delete (D[d+E]);
},setThemed:function(F,G,H){var I=qx.core.Property.$$method.setThemed;
F[I[G]](H);
},resetThemed:function(J,K){var L=qx.core.Property.$$method.resetThemed;
J[L[K]]();
}}});
})();
(function(){var n="change",m="changeBubble",l="add",k="remove",j="0-",h="order",g="-",f="0",e="qx.event.type.Data",d="",a="qx.data.Array",c="number",b="changeLength";
qx.Class.define(a,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,implement:[qx.data.IListData],construct:function(o){qx.core.Object.call(this);
if(o==undefined){this.__gI=[];
}else if(arguments.length>1){this.__gI=[];

for(var i=0;i<arguments.length;i++){this.__gI.push(arguments[i]);
}}else if(typeof o==c){this.__gI=new Array(o);
}else if(o instanceof Array){this.__gI=qx.lang.Array.clone(o);
}else{this.__gI=[];
throw new Error("Type of the parameter not supported!");
}for(var i=0;i<this.__gI.length;i++){this._applyEventPropagation(this.__gI[i],null,i);
}this.__gJ();
},events:{"change":e,"changeLength":e},members:{__gI:null,concat:function(p){if(p){var q=this.__gI.concat(p);
}else{var q=this.__gI.concat();
}return new qx.data.Array(q);
},join:function(r){return this.__gI.join(r);
},pop:function(){var s=this.__gI.pop();
this.__gJ();
this._registerEventChaining(null,s,this.length-1);
this.fireDataEvent(m,{value:[],name:this.length,old:[s]});
this.fireDataEvent(n,{start:this.length-1,end:this.length-1,type:k,items:[s]},null);
return s;
},push:function(t){for(var i=0;i<arguments.length;i++){this.__gI.push(arguments[i]);
this.__gJ();
this._registerEventChaining(arguments[i],null,this.length-1);
this.fireDataEvent(m,{value:[arguments[i]],name:this.length-1,old:[]});
this.fireDataEvent(n,{start:this.length-1,end:this.length-1,type:l,items:[arguments[i]]},null);
}return this.length;
},reverse:function(){if(this.length==0){return;
}var u=this.__gI.concat();
this.__gI.reverse();
this.fireDataEvent(n,{start:0,end:this.length-1,type:h,items:null},null);
this.fireDataEvent(m,{value:this.__gI,name:j+(this.__gI.length-1),old:u});
},shift:function(){if(this.length==0){return;
}var v=this.__gI.shift();
this.__gJ();
this._registerEventChaining(null,v,this.length-1);
this.fireDataEvent(m,{value:[],name:f,old:[v]});
this.fireDataEvent(n,{start:0,end:this.length-1,type:k,items:[v]},null);
return v;
},slice:function(w,x){return new qx.data.Array(this.__gI.slice(w,x));
},splice:function(y,z,A){var I=this.__gI.length;
var E=this.__gI.splice.apply(this.__gI,arguments);
if(this.__gI.length!=I){this.__gJ();
}var G=z>0;
var C=arguments.length>2;
var D=null;

if(G||C){if(this.__gI.length>I){var H=l;
}else if(this.__gI.length<I){var H=k;
D=E;
}else{var H=h;
}this.fireDataEvent(n,{start:y,end:this.length-1,type:H,items:D},null);
}for(var i=2;i<arguments.length;i++){this._registerEventChaining(arguments[i],null,y+i);
}var F=[];

for(var i=2;i<arguments.length;i++){F[i-2]=arguments[i];
}var B=(y+Math.max(arguments.length-3,z-1));
var name=y==B?B:y+g+B;
this.fireDataEvent(m,{value:F,name:name,old:E});
for(var i=0;i<E.length;i++){this._registerEventChaining(null,E[i],i);
}return (new qx.data.Array(E));
},sort:function(J){if(this.length==0){return;
}var K=this.__gI.concat();
this.__gI.sort.apply(this.__gI,arguments);
this.fireDataEvent(n,{start:0,end:this.length-1,type:h,items:null},null);
this.fireDataEvent(m,{value:this.__gI,name:j+(this.length-1),old:K});
},unshift:function(L){for(var i=arguments.length-1;i>=0;i--){this.__gI.unshift(arguments[i]);
this.__gJ();
this._registerEventChaining(arguments[i],null,0);
this.fireDataEvent(m,{value:[this.__gI[0]],name:f,old:[this.__gI[1]]});
this.fireDataEvent(n,{start:0,end:this.length-1,type:l,items:[arguments[i]]},null);
}return this.length;
},toArray:function(){return this.__gI;
},getItem:function(M){return this.__gI[M];
},setItem:function(N,O){var P=this.__gI[N];
if(P===O){return;
}this.__gI[N]=O;
this._registerEventChaining(O,P,N);
if(this.length!=this.__gI.length){this.__gJ();
}this.fireDataEvent(m,{value:[O],name:N,old:[P]});
this.fireDataEvent(n,{start:N,end:N,type:l,items:[O]},null);
},getLength:function(){return this.length;
},indexOf:function(Q){return this.__gI.indexOf(Q);
},toString:function(){if(this.__gI!=null){return this.__gI.toString();
}return d;
},contains:function(R){return this.__gI.indexOf(R)!==-1;
},copy:function(){return this.concat();
},insertAt:function(S,T){this.splice(S,0,T);
},insertBefore:function(U,V){var W=this.indexOf(U);

if(W==-1){this.push(V);
}else{this.splice(W,0,V);
}},insertAfter:function(X,Y){var ba=this.indexOf(X);

if(ba==-1||ba==(this.length-1)){this.push(Y);
}else{this.splice(ba+1,0,Y);
}},removeAt:function(bb){return this.splice(bb,1).getItem(0);
},removeAll:function(){for(var i=0;i<this.__gI.length;i++){this._registerEventChaining(null,this.__gI[i],i);
}if(this.getLength()==0){return;
}var bd=this.getLength();
var bc=this.__gI.concat();
this.__gI.length=0;
this.__gJ();
this.fireDataEvent(m,{value:[],name:j+(bd-1),old:bc});
this.fireDataEvent(n,{start:0,end:bd-1,type:k,items:bc},null);
return bc;
},append:function(be){if(be instanceof qx.data.Array){be=be.toArray();
}Array.prototype.push.apply(this.__gI,be);
for(var i=0;i<be.length;i++){this._registerEventChaining(be[i],null,this.__gI.length+i);
}var bf=this.length;
this.__gJ();
this.fireDataEvent(m,{value:be,name:bf==(this.length-1)?bf:bf+g+(this.length-1),old:[]});
this.fireDataEvent(n,{start:bf,end:this.length-1,type:l,items:be},null);
},remove:function(bg){var bh=this.indexOf(bg);

if(bh!=-1){this.splice(bh,1);
return bg;
}},equals:function(bi){if(this.length!==bi.length){return false;
}
for(var i=0;i<this.length;i++){if(this.getItem(i)!==bi.getItem(i)){return false;
}}return true;
},sum:function(){var bj=0;

for(var i=0;i<this.length;i++){bj+=this.getItem(i);
}return bj;
},max:function(){var bk=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)>bk){bk=this.getItem(i);
}}return bk===undefined?null:bk;
},min:function(){var bl=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)<bl){bl=this.getItem(i);
}}return bl===undefined?null:bl;
},forEach:function(bm,bn){for(var i=0;i<this.__gI.length;i++){bm.call(bn,this.__gI[i],i,this);
}},__gJ:function(){var bo=this.length;
this.length=this.__gI.length;
this.fireDataEvent(b,this.length,bo);
}},destruct:function(){for(var i=0;i<this.__gI.length;i++){this._applyEventPropagation(null,this.__gI[i],i);
}this.__gI=null;
}});
})();
(function(){var b="qx.util.ValueManager",a="abstract";
qx.Class.define(b,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this._dynamic={};
},members:{_dynamic:null,resolveDynamic:function(c){return this._dynamic[c];
},isDynamic:function(d){return !!this._dynamic[d];
},resolve:function(e){if(e&&this._dynamic[e]){return this._dynamic[e];
}return e;
},_setDynamic:function(f){this._dynamic=f;
},_getDynamic:function(){return this._dynamic;
}},destruct:function(){this._dynamic=null;
}});
})();
(function(){var j="/",i="0",h="qx/static",g="http://",f="https://",e="file://",d="qx.util.AliasManager",c="singleton",b=".",a="static";
qx.Class.define(d,{type:c,extend:qx.util.ValueManager,construct:function(){qx.util.ValueManager.call(this);
this.__jp={};
this.add(a,h);
},members:{__jp:null,_preprocess:function(k){var n=this._getDynamic();

if(n[k]===false){return k;
}else if(n[k]===undefined){if(k.charAt(0)===j||k.charAt(0)===b||k.indexOf(g)===0||k.indexOf(f)===i||k.indexOf(e)===0){n[k]=false;
return k;
}
if(this.__jp[k]){return this.__jp[k];
}var m=k.substring(0,k.indexOf(j));
var l=this.__jp[m];

if(l!==undefined){n[k]=l+k.substring(m.length);
}}return k;
},add:function(o,p){this.__jp[o]=p;
var r=this._getDynamic();
for(var q in r){if(q.substring(0,q.indexOf(j))===o){r[q]=p+q.substring(o.length);
}}},remove:function(s){delete this.__jp[s];
},resolve:function(t){var u=this._getDynamic();

if(t!=null){t=this._preprocess(t);
}return u[t]||t;
},getAliases:function(){var v={};

for(var w in this.__jp){v[w]=this.__jp[w];
}return v;
}},destruct:function(){this.__jp=null;
}});
})();
(function(){var j="qx.event.type.Event",i="qx.debug.io",h="fail",g="GET",f="qx.event.type.Data",e="loadEnd",d="Map",c="qx.io.request.AbstractRequest",b="changePhase",a="sent",C="qx.io.request.authentication.IAuthentication",B="error",A="loading",z="load",y="abort",x="success",w="String",v="",u="opened",t="POST",q="statusError",r="readyStateChange",o="abstract",p="unsent",m="changeResponse",n="Number",k="Content-Type",l="timeout",s="undefined";
qx.Class.define(c,{type:o,extend:qx.core.Object,construct:function(D){qx.core.Object.call(this);

if(D!==undefined){this.setUrl(D);
}var E=this._transport=this._createTransport();
this._setPhase(p);
this.__jq=qx.lang.Function.bind(this._onReadyStateChange,this);
this.__jr=qx.lang.Function.bind(this._onLoad,this);
this.__js=qx.lang.Function.bind(this._onLoadEnd,this);
this.__jt=qx.lang.Function.bind(this._onAbort,this);
this.__ju=qx.lang.Function.bind(this._onTimeout,this);
this.__jv=qx.lang.Function.bind(this._onError,this);
E.onreadystatechange=this.__jq;
E.onload=this.__jr;
E.onloadend=this.__js;
E.onabort=this.__jt;
E.ontimeout=this.__ju;
E.onerror=this.__jv;
},events:{"readyStateChange":j,"success":j,"load":j,"loadEnd":j,"abort":j,"timeout":j,"error":j,"statusError":j,"fail":j,"changeResponse":f,"changePhase":f},properties:{url:{check:w},requestHeaders:{check:d,nullable:true},timeout:{check:n,nullable:true,init:0},requestData:{check:function(F){return qx.lang.Type.isString(F)||qx.Class.isSubClassOf(F.constructor,qx.core.Object)||qx.lang.Type.isObject(F);
},nullable:true},authentication:{check:C,nullable:true}},members:{__jq:null,__jr:null,__js:null,__jt:null,__ju:null,__jv:null,__jw:null,__jx:null,_transport:null,_createTransport:function(){throw new Error("Abstract method call");
},_getConfiguredUrl:function(){},_setRequestHeaders:function(){},_getParsedResponse:function(){throw new Error("Abstract method call");
},send:function(){var K=this._transport,G,J,H,I;
G=this._getConfiguredUrl();
if(/\#/.test(G)){G=G.replace(/\#.*/,v);
}K.timeout=this.getTimeout()*1000;
J=qx.lang.Type.isFunction(this.getMethod)?this.getMethod():g;
H=qx.lang.Type.isFunction(this.getAsync)?this.getAsync():true;
if(qx.core.Environment.get(i)){this.debug("Open low-level request with method: "+J+", url: "+G+", async: "+H);
}K.open(J,G,H);
this._setPhase(u);
I=this._serializeData(this.getRequestData());
this._setRequestHeaders();
this.__jz();
this.__jy();
if(qx.core.Environment.get(i)){this.debug("Send low-level request");
}J==g?K.send():K.send(I);
this._setPhase(a);
},abort:function(){if(qx.core.Environment.get(i)){this.debug("Abort request");
}this._transport.abort();
},getTransport:function(){return this._transport;
},getReadyState:function(){return this._transport.readyState;
},getPhase:function(){return this.__jx;
},getStatus:function(){return this._transport.status;
},getStatusText:function(){return this._transport.statusText;
},getResponseText:function(){return this._transport.responseText;
},getAllResponseHeaders:function(){return this._transport.getAllResponseHeaders();
},getResponseHeader:function(L){return this._transport.getResponseHeader(L);
},getResponseContentType:function(){return this.getResponseHeader(k);
},isDone:function(){return this.getReadyState()===4;
},getResponse:function(){return this.__jw;
},_setResponse:function(M){var N=M;

if(this.__jw!==M){this.__jw=M;
this.fireEvent(m,qx.event.type.Data,[this.__jw,N]);
}},_onReadyStateChange:function(){var O,P=this.getReadyState();

if(qx.core.Environment.get(i)){this.debug("Fire readyState: "+P);
}this.fireEvent(r);

if(P===3){this._setPhase(A);
}
if(this.isDone()){if(qx.core.Environment.get(i)){this.debug("Request completed with HTTP status: "+this.getStatus());
}if(qx.bom.request.Xhr.isSuccessful(this.getStatus())){if(qx.core.Environment.get(i)){this.debug("Response is of type: '"+this.getResponseContentType()+"'");
}O=this._getParsedResponse();
this._setResponse(O);
this._fireStatefulEvent(x);
}else{this._fireStatefulEvent(q);
this.fireEvent(h);
}}},_onLoad:function(){this.fireEvent(z);
},_onLoadEnd:function(){this.fireEvent(e);
},_onAbort:function(){this._fireStatefulEvent(y);
},_onTimeout:function(){this._fireStatefulEvent(l);
this.fireEvent(h);
},_onError:function(){this.fireEvent(B);
this.fireEvent(h);
},_fireStatefulEvent:function(Q){this._setPhase(Q);
this.fireEvent(Q);
},_setPhase:function(R){var S=this.__jx;
this.__jx=R;
this.fireDataEvent(b,R,S);
},_serializeData:function(T){var U=typeof this.getMethod!==s&&this.getMethod()==t;

if(!T){return;
}
if(qx.lang.Type.isString(T)){return T;
}
if(qx.Class.isSubClassOf(T.constructor,qx.core.Object)){return qx.util.Serializer.toUriParameter(T);
}
if(qx.lang.Type.isObject(T)){return qx.lang.Object.toUriParameter(T,U);
}},__jy:function(){var V=this.getRequestHeaders();

if(V){qx.lang.Object.getKeys(V).forEach(function(W){this._transport.setRequestHeader(W,V[W]);
},this);
}},__jz:function(){var Y=this.getAuthentication(),X=this._transport;

if(Y){Y.getAuthHeaders().forEach(function(ba){if(ba.key&&ba.value){if(qx.core.Environment.get(i)){this.debug("Set authentication header '"+ba.key+"' to '"+ba.value+"'");
}X.setRequestHeader(ba.key,ba.value);
}},this);
}}},environment:{"qx.debug.io":false},destruct:function(){var bc=this._transport,bb=function(){};

if(this._transport){bc.onreadystatechange=bc.onload=bc.onloadend=bc.onabort=bc.ontimeout=bc.onerror=bb;
bc.dispose();
}}});
})();
(function(){var t="webkit",s="",r="qx.debug.io",q="mshtml",p="gecko",o="engine.version",n="onunload",m="undefined",l="activex",k="Microsoft.XMLHTTP",d="io.xhr",j="Microsoft.XMLDOM",h="xhr",c="Content-Type",b="browser.version",g="qx.bom.request.Xhr",f="opera",i="//",a="file:";
qx.Bootstrap.define(g,{construct:function(){this.__jA=qx.Bootstrap.bind(this.__jK,this);
this.__ju=qx.Bootstrap.bind(this.__jN,this);
this.__jJ();
if(window.attachEvent){this.__jB=qx.Bootstrap.bind(this.__jQ,this);
window.attachEvent(n,this.__jB);
}},statics:{UNSENT:0,OPENED:1,HEADERS_RECEIVED:2,LOADING:3,DONE:4,isCrossDomain:function(u){var w=qx.util.Uri.parseUri(u),location=window.location,v=location.protocol;
if(!(u.indexOf(i)!==-1)){return false;
}
if(v.substr(0,v.length-1)==w.protocol&&location.host===w.host&&location.port===w.port){return false;
}return true;
},isSuccessful:function(status){return (status>=200&&status<300||status===304);
}},members:{readyState:0,responseText:s,responseXML:null,status:0,statusText:s,timeout:0,open:function(x,y,z,A,B){if(this.__gu){return;
}this.__jC=false;
this.__jD=false;

if(typeof z==m){z=true;
}this.__jE=z;
if(!this.__jR()&&this.readyState>qx.bom.request.Xhr.UNSENT){this.dispose();
this.__jJ();
}this.__jG.onreadystatechange=this.__jA;

try{if(qx.core.Environment.get(r)){qx.Bootstrap.debug(qx.bom.request.Xhr,"Open native request with method: "+x+", url: "+y+", async: "+z);
}this.__jG.open(x,y,z,A,B);
}catch(C){if(!qx.bom.request.Xhr.isCrossDomain(y)){throw C;
}
if(!this.__jE){this.__jF=C;
}
if(this.__jE){if(window.XDomainRequest){this.readyState=4;
this.__jG=new XDomainRequest();
this.__jG.onerror=qx.Bootstrap.bind(function(){this.onreadystatechange();
this.onerror();
this.onloadend();
},this);

if(qx.core.Environment.get(r)){qx.Bootstrap.debug(qx.bom.request.Xhr,"Retry open native request with method: "+x+", url: "+y+", async: "+z);
}this.__jG.open(x,y,z,A,B);
return;
}window.setTimeout(qx.Bootstrap.bind(function(){this.readyState=4;
this.onreadystatechange();
this.onerror();
this.onloadend();
},this));
}}if(t===p&&parseInt(qx.core.Environment.get(o),10)<2&&!this.__jE){this.readyState=qx.bom.request.Xhr.OPENED;
this.onreadystatechange();
}},setRequestHeader:function(D,E){if(this.__gu){return;
}this.__jG.setRequestHeader(D,E);
},send:function(F){if(this.__gu){return;
}if(!this.__jE&&this.__jF){throw this.__jF;
}F=typeof F==m?null:F;
try{if(qx.core.Environment.get(r)){qx.Bootstrap.debug(qx.bom.request.Xhr,"Send native request");
}this.__jG.send(F);
}catch(G){if(!this.__jE){throw G;
}}if(t===p&&!this.__jE){this.__jK();
}this.__jC=true;
if(t===f&&this.timeout===0){this.timeout=10000;
}if(this.timeout>0){this.__jH=window.setTimeout(this.__ju,this.timeout);
}},abort:function(H){if(this.__gu){return;
}this.__jD=true;
this.__jG.abort();

if(this.__jG){this.readyState=this.__jG.readyState;
}
if(H){return;
}this.onabort();
},onreadystatechange:function(){},onload:function(){},onloadend:function(){},onerror:function(){},onabort:function(){},ontimeout:function(){},getResponseHeader:function(I){if(this.__gu){return;
}return this.__jG.getResponseHeader(I);
},getAllResponseHeaders:function(){if(this.__gu){return;
}return this.__jG.getAllResponseHeaders();
},dispose:function(){if(this.__gu){return false;
}if(window.detachEvent){window.detachEvent(n,this.__jB);
}try{this.__jG.onreadystatechange;
}catch(K){return;
}var J=function(){};
this.__jG.onreadystatechange=J;
this.__jG.onload=J;
this.__jG.onerror=J;
this.abort(true);
this.__jG=null;
this.__gu=true;
return true;
},_getNativeXhr:function(){return this.__jG;
},_createNativeXhr:function(){var L=qx.core.Environment.get(d);

if(L===h){return new XMLHttpRequest();
}
if(L==l){return new window.ActiveXObject(k);
}qx.log.Logger.error(this,"No XHR support available.");
},_getProtocol:function(){return window.location.protocol;
},__jG:null,__jE:null,__jA:null,__jB:null,__ju:null,__jC:null,__jD:null,__jI:null,__gu:null,__jH:null,__jF:null,__jJ:function(){this.__jG=this._createNativeXhr();
this.__jG.onreadystatechange=this.__jA;
this.__gu=this.__jC=this.__jD=false;
},__jK:function(){var M=this.__jG,N=true;

if(qx.core.Environment.get(r)){qx.Bootstrap.debug(qx.bom.request.Xhr,"Received native readyState: "+M.readyState);
}if(this.readyState==M.readyState){return;
}this.readyState=M.readyState;
if(this.readyState===qx.bom.request.Xhr.DONE&&this.__jD&&!this.__jC){return;
}if(!this.__jE&&(M.readyState==2||M.readyState==3)){return;
}this.status=0;
this.statusText=this.responseText=s;
this.responseXML=null;

if(this.readyState>qx.bom.request.Xhr.OPENED){try{this.status=M.status;
this.statusText=M.statusText;
this.responseText=M.responseText;
this.responseXML=M.responseXML;
}catch(O){N=false;
}
if(N){this.__jO();
this.__jP();
}}this.__jL();
if(this.readyState==qx.bom.request.Xhr.DONE){if(M){M.onreadystatechange=function(){};
}}},__jL:function(){var P=this;
if(t==q&&qx.core.Environment.get(o)<8){if(this.__jE&&!this.__jC&&this.readyState>=qx.bom.request.Xhr.LOADING){if(this.readyState==qx.bom.request.Xhr.LOADING){return ;
}
if(this.readyState==qx.bom.request.Xhr.DONE){window.setTimeout(function(){P.readyState=3;
P.onreadystatechange();
P.readyState=4;
P.onreadystatechange();
P.__jM();
});
return;
}}}this.onreadystatechange();
this.__jM();
},__jM:function(){if(this.readyState===qx.bom.request.Xhr.DONE){window.clearTimeout(this.__jH);
if(this.__jI){this.ontimeout();
this.__jI=false;
}else{this.statusText?this.onload():this.onerror();
}this.onloadend();
}},__jN:function(){var Q=this.__jG;
this.readyState=qx.bom.request.Xhr.DONE;
this.__jI=true;
Q.abort();
this.responseText=s;
this.responseXML=null;
this.__jL();
},__jO:function(){var R=this.__jG;
if(this._getProtocol()===a&&this.status===0){this.status=200;
}if(this.status===1223){this.status=204;
}if(R.readyState===qx.bom.request.Xhr.DONE&&this.status===0){this.status=304;
}},__jP:function(){if(t==q&&(this.getResponseHeader(c)||s).match(/[^\/]+\/[^\+]+\+xml/)&&this.responseXML&&!this.responseXML.documentElement){var S=new window.ActiveXObject(j);
S.async=false;
S.validateOnParse=false;
S.loadXML(this.responseText);
this.responseXML=S;
}},__jQ:function(){try{if(this){this.dispose();
}}catch(e){}},__jR:function(){var name=t;
var T=qx.core.Environment.get(b);
return !(name==q&&T<9||name==p&&T<3.5);
}},defer:function(){qx.core.Environment.add(r,false);
}});
})();
(function(){var x="source",w="password",v="qx.util.Uri",u="port",t="protocol",s="&",r="",q="userInfo",p="?",n="user",e="anchor",l="strict",h="queryKey",c="directory",b="loose",g="relative",f="path",j="host",a="file",k="authority",d="query";
qx.Class.define(v,{statics:{parseUri:function(y,z){var A={key:[x,t,k,q,n,w,j,u,g,f,c,a,d,e],q:{name:h,parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}};
var o=A,m=A.parser[z?l:b].exec(y),B={},i=14;

while(i--){B[o.key[i]]=m[i]||r;
}B[o.q.name]={};
B[o.key[12]].replace(o.q.parser,function(C,D,E){if(D){B[o.q.name][D]=E;
}});
return B;
},appendParamsToUrl:function(F,G){if(G===undefined){return F;
}
if(qx.lang.Type.isObject(G)){G=qx.lang.Object.toUriParameter(G);
}
if(!G){return F;
}return F+=(/\?/).test(F)?s+G:p+G;
}}});
})();
(function(){var u='"',t="{",s="[",r=",",q="",p="get",o="}",n="]",m='":',l="&",d="null",k='\\t',g='\\"',c='\\n',b='\\b',f="=",e="qx.util.Serializer",h='\\r',a='\\\\',j='\\f';
qx.Class.define(e,{statics:{toUriParameter:function(v,w,x){var B=q;
var C=qx.util.PropertyUtil.getProperties(v.constructor);

for(var name in C){var y=v[p+qx.lang.String.firstUp(name)]();
if(qx.lang.Type.isArray(y)){var A=qx.data&&qx.data.IListData&&qx.Class.hasInterface(y&&y.constructor,qx.data.IListData);

for(var i=0;i<y.length;i++){var z=A?y.getItem(i):y[i];
B+=this.__jS(name,z,w);
}}else if(qx.lang.Type.isDate(y)&&x!=null){B+=this.__jS(name,x.format(y),w);
}else{B+=this.__jS(name,y,w);
}}return B.substring(0,B.length-1);
},__jS:function(name,D,E){if(D instanceof qx.core.Object&&E!=null){var F=encodeURIComponent(E(D));

if(F===undefined){var F=encodeURIComponent(D);
}}else{var F=encodeURIComponent(D);
}return encodeURIComponent(name)+f+F+l;
},toNativeObject:function(G,H,I){var L;
if(G==null){return null;
}if(qx.data&&qx.data.IListData&&qx.Class.hasInterface(G.constructor,qx.data.IListData)){L=[];

for(var i=0;i<G.getLength();i++){L.push(qx.util.Serializer.toNativeObject(G.getItem(i),H,I));
}return L;
}if(qx.lang.Type.isArray(G)){L=[];

for(var i=0;i<G.length;i++){L.push(qx.util.Serializer.toNativeObject(G[i],H,I));
}return L;
}if(G instanceof qx.core.Object){if(H!=null){var M=H(G);
if(M!=undefined){return M;
}}L={};
var N=qx.util.PropertyUtil.getAllProperties(G.constructor);

for(var name in N){if(N[name].group!=undefined){continue;
}var K=G[p+qx.lang.String.firstUp(name)]();
L[name]=qx.util.Serializer.toNativeObject(K,H,I);
}return L;
}if(qx.lang.Type.isDate(G)&&I!=null){return I.format(G);
}if(qx.locale&&qx.locale.LocalizedString&&G instanceof qx.locale.LocalizedString){return G.toString();
}if(qx.lang.Type.isObject(G)){L={};

for(var J in G){L[J]=qx.util.Serializer.toNativeObject(G[J],H,I);
}return L;
}return G;
},toJson:function(O,P,Q){var T=q;
if(O==null){return d;
}if(qx.data&&qx.data.IListData&&qx.Class.hasInterface(O.constructor,qx.data.IListData)){T+=s;

for(var i=0;i<O.getLength();i++){T+=qx.util.Serializer.toJson(O.getItem(i),P,Q)+r;
}
if(T!=s){T=T.substring(0,T.length-1);
}return T+n;
}if(qx.lang.Type.isArray(O)){T+=s;

for(var i=0;i<O.length;i++){T+=qx.util.Serializer.toJson(O[i],P,Q)+r;
}
if(T!=s){T=T.substring(0,T.length-1);
}return T+n;
}if(O instanceof qx.core.Object){if(P!=null){var U=P(O);
if(U!=undefined){return u+U+u;
}}T+=t;
var V=qx.util.PropertyUtil.getProperties(O.constructor);

for(var name in V){if(V[name].group!=undefined){continue;
}var S=O[p+qx.lang.String.firstUp(name)]();
T+=u+name+m+qx.util.Serializer.toJson(S,P,Q)+r;
}
if(T!=t){T=T.substring(0,T.length-1);
}return T+o;
}if(O instanceof qx.locale.LocalizedString){O=O.toString();
}if(qx.lang.Type.isDate(O)&&Q!=null){return u+Q.format(O)+u;
}if(qx.lang.Type.isObject(O)){T+=t;

for(var R in O){T+=u+R+m+qx.util.Serializer.toJson(O[R],P,Q)+r;
}
if(T!=t){T=T.substring(0,T.length-1);
}return T+o;
}if(qx.lang.Type.isString(O)){O=O.replace(/([\\])/g,a);
O=O.replace(/(["])/g,g);
O=O.replace(/([\r])/g,h);
O=O.replace(/([\f])/g,j);
O=O.replace(/([\n])/g,c);
O=O.replace(/([\t])/g,k);
O=O.replace(/([\b])/g,b);
return u+O+u;
}if(qx.lang.Type.isDate(O)||qx.lang.Type.isRegExp(O)){return u+O+u;
}return O+q;
}}});
})();
(function(){var t="qx.event.type.Event",s="GET",r="function",q="xml",p="POST",o="application/xml",n="HEAD",m="Boolean",l="PUT",k="Accept",d="application/json",j="application/x-www-form-urlencoded",g="Cache-Control",c="Content-Type",b="OPTIONS",f="qx.debug.io",e="qx.io.request.Xhr",h="json",a="DELETE",i="String";
qx.Class.define(e,{extend:qx.io.request.AbstractRequest,construct:function(u,v){if(v!==undefined){this.setMethod(v);
}qx.io.request.AbstractRequest.call(this,u);
},events:{"readystatechange":t,"success":t,"load":t,"statusError":t},statics:{PARSER:{json:qx.lang.Json.parse,xml:qx.xml.Document.fromString}},properties:{method:{check:[n,b,s,p,l,a],init:s},async:{check:m,init:true},accept:{check:i,nullable:true},cache:{check:function(w){return qx.lang.Type.isBoolean(w)||qx.lang.Type.isString(w);
},init:true}},members:{__jT:null,_createTransport:function(){return new qx.bom.request.Xhr();
},_getConfiguredUrl:function(){var x=this.getUrl(),y;

if(this.getMethod()===s&&this.getRequestData()){y=this._serializeData(this.getRequestData());
x=qx.util.Uri.appendParamsToUrl(x,y);
}
if(this.getCache()===false){x=qx.util.Uri.appendParamsToUrl(x,{nocache:new Date().valueOf()});
}return x;
},_setRequestHeaders:function(){var z=this._transport;
if(qx.lang.Type.isString(this.getCache())){z.setRequestHeader(g,this.getCache());
}if(this.getMethod()===p){z.setRequestHeader(c,j);
}if(this.getAccept()){if(qx.core.Environment.get(f)){this.debug("Accepting: '"+this.getAccept()+"'");
}z.setRequestHeader(k,this.getAccept());
}},_getParsedResponse:function(){var B=this._transport.responseText,A=this._getParser();

if(typeof A===r){return A.call(this,B);
}return B;
},setParser:function(C){var D=qx.io.request.Xhr;
if(typeof D.PARSER[C]===r){return this.__jT=D.PARSER[C];
}return this.__jT=C;
},_getParser:function(){var E=this.__jT;
if(E){return E;
}if(!this.isDone()){return;
}switch(this.getResponseContentType()){case d:E=qx.io.request.Xhr.PARSER[h];
break;
case o:E=qx.io.request.Xhr.PARSER[q];
break;
default:E=null;
break;
}if((/[^\/]+\/[^\+]+\+xml/).test(this.getResponseContentType())){E=qx.io.request.Xhr.PARSER[q];
}return E;
}}});
})();
(function(){var k="Boolean",j="qx.event.type.Event",i="queued",h="String",g="sending",f="receiving",d="aborted",c="failed",b="nocache",a="completed",P="qx.io.remote.Response",O="POST",N="configured",M="timeout",L="GET",K="Pragma",J="no-url-params-on-post",I="PUT",H="no-cache",G="Cache-Control",r="Content-Type",s="text/plain",p="application/xml",q="application/json",n="text/html",o="application/x-www-form-urlencoded",l="qx.io.remote.Exchange",m="Integer",t="X-Qooxdoo-Response-Type",u="HEAD",y="qx.io.remote.Request",x="_applyResponseType",A="_applyState",z="text/javascript",C="changeState",B="_applyProhibitCaching",w="",F="_applyMethod",E="DELETE",D="boolean";
qx.Class.define(y,{extend:qx.core.Object,construct:function(Q,R,S){qx.core.Object.call(this);
this.__jU={};
this.__jV={};
this.__jW={};
this.__jX={};

if(Q!==undefined){this.setUrl(Q);
}
if(R!==undefined){this.setMethod(R);
}
if(S!==undefined){this.setResponseType(S);
}this.setProhibitCaching(true);
this.__jY=++qx.io.remote.Request.__jY;
},events:{"created":j,"configured":j,"sending":j,"receiving":j,"completed":P,"aborted":j,"failed":P,"timeout":P},statics:{__jY:0,methodAllowsRequestBody:function(T){return (T==O)||(T==I);
}},properties:{url:{check:h,init:w},method:{check:[L,O,I,u,E],apply:F,init:L},asynchronous:{check:k,init:true},data:{check:h,nullable:true},username:{check:h,nullable:true},password:{check:h,nullable:true},state:{check:[N,i,g,f,a,d,M,c],init:N,apply:A,event:C},responseType:{check:[s,z,q,p,n],init:s,apply:x},timeout:{check:m,nullable:true},prohibitCaching:{check:function(v){return typeof v==D||v===J;
},init:true,apply:B},crossDomain:{check:k,init:false},fileUpload:{check:k,init:false},transport:{check:l,nullable:true},useBasicHttpAuth:{check:k,init:false},parseJson:{check:k,init:true}},members:{__jU:null,__jV:null,__jW:null,__jX:null,__jY:null,send:function(){qx.io.remote.RequestQueue.getInstance().add(this);
},abort:function(){qx.io.remote.RequestQueue.getInstance().abort(this);
},reset:function(){switch(this.getState()){case g:case f:this.error("Aborting already sent request!");
case i:this.abort();
break;
}},isConfigured:function(){return this.getState()===N;
},isQueued:function(){return this.getState()===i;
},isSending:function(){return this.getState()===g;
},isReceiving:function(){return this.getState()===f;
},isCompleted:function(){return this.getState()===a;
},isAborted:function(){return this.getState()===d;
},isTimeout:function(){return this.getState()===M;
},isFailed:function(){return this.getState()===c;
},__ka:qx.event.GlobalError.observeMethod(function(e){var U=e.clone();
U.setTarget(this);
this.dispatchEvent(U);
}),_onqueued:function(e){this.setState(i);
this.__ka(e);
},_onsending:function(e){this.setState(g);
this.__ka(e);
},_onreceiving:function(e){this.setState(f);
this.__ka(e);
},_oncompleted:function(e){this.setState(a);
this.__ka(e);
this.dispose();
},_onaborted:function(e){this.setState(d);
this.__ka(e);
this.dispose();
},_ontimeout:function(e){this.setState(M);
this.__ka(e);
this.dispose();
},_onfailed:function(e){this.setState(c);
this.__ka(e);
this.dispose();
},_applyState:function(V,W){},_applyProhibitCaching:function(X,Y){if(!X){this.removeParameter(b);
this.removeRequestHeader(K);
this.removeRequestHeader(G);
return;
}if(X!==J||this.getMethod()!=O){this.setParameter(b,new Date().valueOf());
}else{this.removeParameter(b);
}this.setRequestHeader(K,H);
this.setRequestHeader(G,H);
},_applyMethod:function(ba,bb){if(qx.io.remote.Request.methodAllowsRequestBody(ba)){this.setRequestHeader(r,o);
}else{this.removeRequestHeader(r);
}var bc=this.getProhibitCaching();
this._applyProhibitCaching(bc,bc);
},_applyResponseType:function(bd,be){this.setRequestHeader(t,bd);
},setRequestHeader:function(bf,bg){this.__jU[bf]=bg;
},removeRequestHeader:function(bh){delete this.__jU[bh];
},getRequestHeader:function(bi){return this.__jU[bi]||null;
},getRequestHeaders:function(){return this.__jU;
},setParameter:function(bj,bk,bl){if(bl){this.__jW[bj]=bk;
}else{this.__jV[bj]=bk;
}},removeParameter:function(bm,bn){if(bn){delete this.__jW[bm];
}else{delete this.__jV[bm];
}},getParameter:function(bo,bp){if(bp){return this.__jW[bo]||null;
}else{return this.__jV[bo]||null;
}},getParameters:function(bq){return (bq?this.__jW:this.__jV);
},setFormField:function(br,bs){this.__jX[br]=bs;
},removeFormField:function(bt){delete this.__jX[bt];
},getFormField:function(bu){return this.__jX[bu]||null;
},getFormFields:function(){return this.__jX;
},getSequenceNumber:function(){return this.__jY;
}},destruct:function(){this.setTransport(null);
this.__jU=this.__jV=this.__jW=this.__jX=null;
}});
})();
(function(){var t="Integer",s="aborted",r="_onaborted",q="_on",p="_applyEnabled",o="Boolean",n="sending",m="interval",l="__df",k="failed",c="qx.io.remote.RequestQueue",j="timeout",g="completed",b="queued",a="__kc",f="io.maxrequests",d="receiving",h="singleton";
qx.Class.define(c,{type:h,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__kb=[];
this.__kc=[];
this.__kd=0;
this.__df=new qx.event.Timer(500);
this.__df.addListener(m,this._oninterval,this);
},properties:{enabled:{init:true,check:o,apply:p},maxTotalRequests:{check:t,nullable:true},maxConcurrentRequests:{check:t,init:qx.core.Environment.get(f)},defaultTimeout:{check:t,init:5000}},members:{__kb:null,__kc:null,__kd:null,__df:null,getRequestQueue:function(){return this.__kb;
},getActiveQueue:function(){return this.__kc;
},_debug:function(){var u;
},_check:function(){this._debug();
if(this.__kc.length==0&&this.__kb.length==0){this.__df.stop();
}if(!this.getEnabled()){return;
}if(this.__kb.length==0||(this.__kb[0].isAsynchronous()&&this.__kc.length>=this.getMaxConcurrentRequests())){return;
}if(this.getMaxTotalRequests()!=null&&this.__kd>=this.getMaxTotalRequests()){return;
}var v=this.__kb.shift();
var w=new qx.io.remote.Exchange(v);
this.__kd++;
this.__kc.push(w);
this._debug();
w.addListener(n,this._onsending,this);
w.addListener(d,this._onreceiving,this);
w.addListener(g,this._oncompleted,this);
w.addListener(s,this._oncompleted,this);
w.addListener(j,this._oncompleted,this);
w.addListener(k,this._oncompleted,this);
w._start=(new Date).valueOf();
w.send();
if(this.__kb.length>0){this._check();
}},_remove:function(x){qx.lang.Array.remove(this.__kc,x);
x.dispose();
this._check();
},__ke:0,_onsending:function(e){e.getTarget().getRequest()._onsending(e);
},_onreceiving:function(e){e.getTarget().getRequest()._onreceiving(e);
},_oncompleted:function(e){var z=e.getTarget().getRequest();
var y=q+e.getType();
this._remove(e.getTarget());
try{if(z[y]){z[y](e);
}}catch(A){this.error("Request "+z+" handler "+y+" threw an error: ",A);
try{if(z[r]){var event=qx.event.Registration.createEvent(s,qx.event.type.Event);
z[r](event);
}}catch(B){}}},_oninterval:function(e){var I=this.__kc;

if(I.length==0){this.__df.stop();
return;
}var D=(new Date).valueOf();
var G;
var E;
var H=this.getDefaultTimeout();
var F;
var C;

for(var i=I.length-1;i>=0;i--){G=I[i];
E=G.getRequest();

if(E.isAsynchronous()){F=E.getTimeout();
if(F==0){continue;
}
if(F==null){F=H;
}C=D-G._start;

if(C>F){this.warn("Timeout: transport "+G.toHashCode());
this.warn(C+"ms > "+F+"ms");
G.timeout();
}}}},_applyEnabled:function(J,K){if(J){this._check();
}this.__df.setEnabled(J);
},add:function(L){L.setState(b);

if(L.isAsynchronous()){this.__kb.push(L);
}else{this.__kb.unshift(L);
}this._check();

if(this.getEnabled()){this.__df.start();
}},abort:function(M){var N=M.getTransport();

if(N){N.abort();
}else if(qx.lang.Array.contains(this.__kb,M)){qx.lang.Array.remove(this.__kb,M);
}}},destruct:function(){this._disposeArray(a);
this._disposeObjects(l);
this.__kb=null;
}});
})();
(function(){var o="failed",n="sending",m="completed",k="receiving",j="aborted",h="timeout",g="qx.event.type.Event",f="Connection dropped",d="qx.io.remote.Response",c="=",bp="configured",bo="&",bn="Unknown status code. ",bm="qx.io.remote.transport.XmlHttp",bl="qx.io.remote.transport.Abstract",bk="Request-URL too large",bj="MSHTML-specific HTTP status code",bi="Not available",bh="Precondition failed",bg="Server error",v="Moved temporarily",w="qx.io.remote.Exchange",t="Possibly due to a cross-domain request?",u="Bad gateway",r="Gone",s="See other",p="Partial content",q="Server timeout",B="qx.io.remote.transport.Script",C="HTTP version not supported",L="Unauthorized",I="Possibly due to application URL using 'file:' protocol?",T="Multiple choices",O="Payment required",bc="Not implemented",Y="Proxy authentication required",E="Length required",bf="_applyState",be="changeState",bd="Not modified",D="qx.io.remote.Request",G="Connection closed by server",H="Moved permanently",K="_applyImplementation",M="",P="Method not allowed",V="Forbidden",bb="Use proxy",x="Ok",y="Conflict",F="Not found",S="Not acceptable",R="Request time-out",Q="Bad request",X="No content",W="file:",N="qx.io.remote.transport.Iframe",U="Request entity too large",a="Unknown status code",ba="Unsupported media type",z="Gateway time-out",A="created",J="Out of resources",b="undefined";
qx.Class.define(w,{extend:qx.core.Object,construct:function(bq){qx.core.Object.call(this);
this.setRequest(bq);
bq.setTransport(this);
},events:{"sending":g,"receiving":g,"completed":d,"aborted":g,"failed":d,"timeout":d},statics:{typesOrder:[bm,N,B],typesReady:false,typesAvailable:{},typesSupported:{},registerType:function(br,bs){qx.io.remote.Exchange.typesAvailable[bs]=br;
},initTypes:function(){if(qx.io.remote.Exchange.typesReady){return;
}
for(var bu in qx.io.remote.Exchange.typesAvailable){var bt=qx.io.remote.Exchange.typesAvailable[bu];

if(bt.isSupported()){qx.io.remote.Exchange.typesSupported[bu]=bt;
}}qx.io.remote.Exchange.typesReady=true;

if(qx.lang.Object.isEmpty(qx.io.remote.Exchange.typesSupported)){throw new Error("No supported transport types were found!");
}},canHandle:function(bv,bw,bx){if(!qx.lang.Array.contains(bv.handles.responseTypes,bx)){return false;
}
for(var by in bw){if(!bv.handles[by]){return false;
}}return true;
},_nativeMap:{0:A,1:bp,2:n,3:k,4:m},wasSuccessful:function(bz,bA,bB){if(bB){switch(bz){case null:case 0:return true;
case -1:return bA<4;
default:return typeof bz===b;
}}else{switch(bz){case -1:{};
return bA<4;
case 200:case 304:return true;
case 201:case 202:case 203:case 204:case 205:return true;
case 206:{};
return bA!==4;
case 300:case 301:case 302:case 303:case 305:case 400:case 401:case 402:case 403:case 404:case 405:case 406:case 407:case 408:case 409:case 410:case 411:case 412:case 413:case 414:case 415:case 500:case 501:case 502:case 503:case 504:case 505:{};
return false;
case 12002:case 12007:case 12029:case 12030:case 12031:case 12152:case 13030:{};
return false;
default:if(bz>206&&bz<300){return true;
}qx.log.Logger.debug(this,"Unknown status code: "+bz+" ("+bA+")");
return false;
}}},statusCodeToString:function(bC){switch(bC){case -1:return bi;
case 0:var bD=window.location.href;
if(qx.lang.String.startsWith(bD.toLowerCase(),W)){return (bn+I);
}else{return (bn+t);
}break;
case 200:return x;
case 304:return bd;
case 206:return p;
case 204:return X;
case 300:return T;
case 301:return H;
case 302:return v;
case 303:return s;
case 305:return bb;
case 400:return Q;
case 401:return L;
case 402:return O;
case 403:return V;
case 404:return F;
case 405:return P;
case 406:return S;
case 407:return Y;
case 408:return R;
case 409:return y;
case 410:return r;
case 411:return E;
case 412:return bh;
case 413:return U;
case 414:return bk;
case 415:return ba;
case 500:return bg;
case 501:return bc;
case 502:return u;
case 503:return J;
case 504:return z;
case 505:return C;
case 12002:return q;
case 12029:return f;
case 12030:return f;
case 12031:return f;
case 12152:return G;
case 13030:return bj;
default:return a;
}}},properties:{request:{check:D,nullable:true},implementation:{check:bl,nullable:true,apply:K},state:{check:[bp,n,k,m,j,h,o],init:bp,event:be,apply:bf}},members:{send:function(){var bH=this.getRequest();

if(!bH){return this.error("Please attach a request object first");
}qx.io.remote.Exchange.initTypes();
var bF=qx.io.remote.Exchange.typesOrder;
var bE=qx.io.remote.Exchange.typesSupported;
var bJ=bH.getResponseType();
var bK={};

if(bH.getAsynchronous()){bK.asynchronous=true;
}else{bK.synchronous=true;
}
if(bH.getCrossDomain()){bK.crossDomain=true;
}
if(bH.getFileUpload()){bK.fileUpload=true;
}for(var bI in bH.getFormFields()){bK.programaticFormFields=true;
break;
}var bL,bG;

for(var i=0,l=bF.length;i<l;i++){bL=bE[bF[i]];

if(bL){if(!qx.io.remote.Exchange.canHandle(bL,bK,bJ)){continue;
}
try{bG=new bL;
this.setImplementation(bG);
bG.setUseBasicHttpAuth(bH.getUseBasicHttpAuth());
bG.send();
return true;
}catch(bM){this.error("Request handler throws error");
this.error(bM);
return;
}}}this.error("There is no transport implementation available to handle this request: "+bH);
},abort:function(){var bN=this.getImplementation();

if(bN){bN.abort();
}else{this.setState(j);
}},timeout:function(){var bQ=this.getImplementation();

if(bQ){var bP=M;

for(var bO in bQ.getParameters()){bP+=bo+bO+c+bQ.getParameters()[bO];
}this.warn("Timeout: implementation "+bQ.toHashCode()+", "+bQ.getUrl()+" ["+bQ.getMethod()+"], "+bP);
bQ.timeout();
}else{this.warn("Timeout: forcing state to timeout");
this.setState(h);
}this.__kf();
},__kf:function(){var bR=this.getRequest();

if(bR){bR.setTimeout(0);
}},_onsending:function(e){this.setState(n);
},_onreceiving:function(e){this.setState(k);
},_oncompleted:function(e){this.setState(m);
},_onabort:function(e){this.setState(j);
},_onfailed:function(e){this.setState(o);
},_ontimeout:function(e){this.setState(h);
},_applyImplementation:function(bS,bT){if(bT){bT.removeListener(n,this._onsending,this);
bT.removeListener(k,this._onreceiving,this);
bT.removeListener(m,this._oncompleted,this);
bT.removeListener(j,this._onabort,this);
bT.removeListener(h,this._ontimeout,this);
bT.removeListener(o,this._onfailed,this);
}
if(bS){var bV=this.getRequest();
bS.setUrl(bV.getUrl());
bS.setMethod(bV.getMethod());
bS.setAsynchronous(bV.getAsynchronous());
bS.setUsername(bV.getUsername());
bS.setPassword(bV.getPassword());
bS.setParameters(bV.getParameters(false));
bS.setFormFields(bV.getFormFields());
bS.setRequestHeaders(bV.getRequestHeaders());
if(bS instanceof qx.io.remote.transport.XmlHttp){bS.setParseJson(bV.getParseJson());
}var bY=bV.getData();

if(bY===null){var ca=bV.getParameters(true);
var bX=[];

for(var bU in ca){var bW=ca[bU];

if(bW instanceof Array){for(var i=0;i<bW.length;i++){bX.push(encodeURIComponent(bU)+c+encodeURIComponent(bW[i]));
}}else{bX.push(encodeURIComponent(bU)+c+encodeURIComponent(bW));
}}
if(bX.length>0){bS.setData(bX.join(bo));
}}else{bS.setData(bY);
}bS.setResponseType(bV.getResponseType());
bS.addListener(n,this._onsending,this);
bS.addListener(k,this._onreceiving,this);
bS.addListener(m,this._oncompleted,this);
bS.addListener(j,this._onabort,this);
bS.addListener(h,this._ontimeout,this);
bS.addListener(o,this._onfailed,this);
}},_applyState:function(cb,cc){switch(cb){case n:this.fireEvent(n);
break;
case k:this.fireEvent(k);
break;
case m:case j:case h:case o:var ce=this.getImplementation();

if(!ce){break;
}this.__kf();

if(this.hasListener(cb)){var cf=qx.event.Registration.createEvent(cb,qx.io.remote.Response);

if(cb==m){var cd=ce.getResponseContent();
cf.setContent(cd);
if(cd===null){cb=o;
}}else if(cb==o){cf.setContent(ce.getResponseContent());
}cf.setStatusCode(ce.getStatusCode());
cf.setResponseHeaders(ce.getResponseHeaders());
this.dispatchEvent(cf);
}this.setImplementation(null);
ce.dispose();
break;
}}},environment:{"qx.ioRemoteDebug":false,"qx.ioRemoteDebugData":false},destruct:function(){var cg=this.getImplementation();

if(cg){this.setImplementation(null);
cg.dispose();
}this.setRequest(null);
}});
})();
(function(){var q="qx.event.type.Event",p="String",o="failed",n="timeout",m="created",l="aborted",k="sending",j="configured",i="receiving",h="completed",c="Object",g="Boolean",f="abstract",b="_applyState",a="GET",e="changeState",d="qx.io.remote.transport.Abstract";
qx.Class.define(d,{type:f,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.setRequestHeaders({});
this.setParameters({});
this.setFormFields({});
},events:{"created":q,"configured":q,"sending":q,"receiving":q,"completed":q,"aborted":q,"failed":q,"timeout":q},properties:{url:{check:p,nullable:true},method:{check:p,nullable:true,init:a},asynchronous:{check:g,nullable:true,init:true},data:{check:p,nullable:true},username:{check:p,nullable:true},password:{check:p,nullable:true},state:{check:[m,j,k,i,h,l,n,o],init:m,event:e,apply:b},requestHeaders:{check:c,nullable:true},parameters:{check:c,nullable:true},formFields:{check:c,nullable:true},responseType:{check:p,nullable:true},useBasicHttpAuth:{check:g,nullable:true}},members:{send:function(){throw new Error("send is abstract");
},abort:function(){this.setState(l);
},timeout:function(){this.setState(n);
},failed:function(){this.setState(o);
},setRequestHeader:function(r,s){throw new Error("setRequestHeader is abstract");
},getResponseHeader:function(t){throw new Error("getResponseHeader is abstract");
},getResponseHeaders:function(){throw new Error("getResponseHeaders is abstract");
},getStatusCode:function(){throw new Error("getStatusCode is abstract");
},getStatusText:function(){throw new Error("getStatusText is abstract");
},getResponseText:function(){throw new Error("getResponseText is abstract");
},getResponseXml:function(){throw new Error("getResponseXml is abstract");
},getFetchedLength:function(){throw new Error("getFetchedLength is abstract");
},_applyState:function(u,v){switch(u){case m:this.fireEvent(m);
break;
case j:this.fireEvent(j);
break;
case k:this.fireEvent(k);
break;
case i:this.fireEvent(i);
break;
case h:this.fireEvent(h);
break;
case l:this.fireEvent(l);
break;
case o:this.fireEvent(o);
break;
case n:this.fireEvent(n);
break;
}return true;
}},destruct:function(){this.setRequestHeaders(null);
this.setParameters(null);
this.setFormFields(null);
}});
})();
(function(){var l="=",k="",j="&",h="application/xml",g="application/json",f="text/html",d="textarea",c="_data_",b="load",a="text/plain",C="text/javascript",B="completed",A="readystatechange",z="?",y="qx.io.remote.transport.Iframe",x="none",w="display",v="frame_",u="aborted",t="pre",r="sending",s="opera",p="failed",q="form_",n="webkit",o="form",m="timeout";
qx.Class.define(y,{extend:qx.io.remote.transport.Abstract,construct:function(){qx.io.remote.transport.Abstract.call(this);
var D=(new Date).valueOf();
var E=v+D;
var F=q+D;
var G;
this.__kg=qx.bom.Iframe.create({id:E,name:E,src:G});
qx.bom.element.Style.set(this.__kg,w,x);
this.__hm=qx.bom.Element.create(o,{id:F,name:F,target:E});
qx.bom.element.Style.set(this.__hm,w,x);
qx.dom.Element.insertEnd(this.__hm,qx.dom.Node.getBodyElement(document));
this.__cL=qx.bom.Element.create(d,{id:c,name:c});
qx.dom.Element.insertEnd(this.__cL,this.__hm);
qx.dom.Element.insertEnd(this.__kg,qx.dom.Node.getBodyElement(document));
qx.event.Registration.addListener(this.__kg,b,this._onload,this);
this.__kh=qx.lang.Function.listener(this._onreadystatechange,this);
qx.bom.Event.addNativeListener(this.__kg,A,this.__kh);
},statics:{handles:{synchronous:false,asynchronous:true,crossDomain:false,fileUpload:true,programaticFormFields:true,responseTypes:[a,C,g,h,f]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4}},members:{__cL:null,__ki:0,__hm:null,__kg:null,__kh:null,send:function(){var I=this.getMethod();
var K=this.getUrl();
var O=this.getParameters(false);
var N=[];

for(var J in O){var L=O[J];

if(L instanceof Array){for(var i=0;i<L.length;i++){N.push(encodeURIComponent(J)+l+encodeURIComponent(L[i]));
}}else{N.push(encodeURIComponent(J)+l+encodeURIComponent(L));
}}
if(N.length>0){K+=(K.indexOf(z)>=0?j:z)+N.join(j);
}if(this.getData()===null){var O=this.getParameters(true);
var N=[];

for(var J in O){var L=O[J];

if(L instanceof Array){for(var i=0;i<L.length;i++){N.push(encodeURIComponent(J)+l+encodeURIComponent(L[i]));
}}else{N.push(encodeURIComponent(J)+l+encodeURIComponent(L));
}}
if(N.length>0){this.setData(N.join(j));
}}var H=this.getFormFields();

for(var J in H){var M=document.createElement(d);
M.name=J;
M.appendChild(document.createTextNode(H[J]));
this.__hm.appendChild(M);
}this.__hm.action=K;
this.__hm.method=I;
this.__cL.appendChild(document.createTextNode(this.getData()));
this.__hm.submit();
this.setState(r);
},_onload:qx.event.GlobalError.observeMethod(function(e){if(n==s&&this.getIframeHtmlContent()==k){return;
}
if(this.__hm.src){return;
}this._switchReadyState(qx.io.remote.transport.Iframe._numericMap.complete);
}),_onreadystatechange:qx.event.GlobalError.observeMethod(function(e){this._switchReadyState(qx.io.remote.transport.Iframe._numericMap[this.__kg.readyState]);
}),_switchReadyState:function(P){switch(this.getState()){case B:case u:case p:case m:this.warn("Ignore Ready State Change");
return;
}while(this.__ki<P){this.setState(qx.io.remote.Exchange._nativeMap[++this.__ki]);
}},setRequestHeader:function(Q,R){},getResponseHeader:function(S){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return k;
},getIframeWindow:function(){return qx.bom.Iframe.getWindow(this.__kg);
},getIframeDocument:function(){return qx.bom.Iframe.getDocument(this.__kg);
},getIframeBody:function(){return qx.bom.Iframe.getBody(this.__kg);
},getIframeTextContent:function(){var T=this.getIframeBody();

if(!T){return null;
}
if(!T.firstChild){return k;
}if(T.firstChild.tagName&&T.firstChild.tagName.toLowerCase()==t){return T.firstChild.innerHTML;
}else{return T.innerHTML;
}},getIframeHtmlContent:function(){var U=this.getIframeBody();
return U?U.innerHTML:null;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==B){return null;
}var V=this.getIframeTextContent();

switch(this.getResponseType()){case a:{};
return V;
break;
case f:V=this.getIframeHtmlContent();
{};
return V;
break;
case g:V=this.getIframeHtmlContent();
{};

try{return V&&V.length>0?qx.lang.Json.parse(V):null;
}catch(W){return this.error("Could not execute json: ("+V+")",W);
}case C:V=this.getIframeHtmlContent();
{};

try{return V&&V.length>0?window.eval(V):null;
}catch(X){return this.error("Could not execute javascript: ("+V+")",X);
}case h:V=this.getIframeDocument();
{};
return V;
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Iframe,y);
},destruct:function(){if(this.__kg){qx.event.Registration.removeListener(this.__kg,b,this._onload,this);
qx.bom.Event.removeNativeListener(this.__kg,A,this.__kh);
qx.dom.Element.remove(this.__kg);
}
if(this.__hm){qx.dom.Element.remove(this.__hm);
}this.__kg=this.__hm=this.__cL=null;
}});
})();
(function(){var d="qx.event.handler.Iframe",c="load",b="iframe",a="navigate";
qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{load:1,navigate:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false,onevent:qx.event.GlobalError.observeMethod(function(e){var f=qx.bom.Iframe.queryCurrentUrl(e);

if(f!==e.$$url){qx.event.Registration.fireEvent(e,a,qx.event.type.Data,[f]);
e.$$url=f;
}qx.event.Registration.fireEvent(e,c);
})},members:{canHandleEvent:function(g,h){return g.tagName.toLowerCase()===b;
},registerEvent:function(i,j,k){},unregisterEvent:function(l,m,n){}},defer:function(o){qx.event.Registration.addHandler(o);
}});
})();
(function(){var g="load",f="os.name",e="qx.bom.Iframe",d="",c="osx",b="iframe",a="body";
qx.Class.define(e,{statics:{DEFAULT_ATTRIBUTES:{onload:"qx.event.handler.Iframe.onevent(this)",frameBorder:0,frameSpacing:0,marginWidth:0,marginHeight:0,hspace:0,vspace:0,border:0,allowTransparency:true},create:function(h,i){var h=h?qx.lang.Object.clone(h):{};
var j=qx.bom.Iframe.DEFAULT_ATTRIBUTES;

for(var k in j){if(h[k]==null){h[k]=j[k];
}}return qx.bom.Element.create(b,h,i);
},getWindow:function(l){try{return l.contentWindow;
}catch(m){return null;
}},getDocument:function(n){try{return n.contentDocument;
}catch(o){return null;
}},getBody:function(p){try{var q=this.getDocument(p);
return q?q.getElementsByTagName(a)[0]:null;
}catch(r){return null;
}},setSource:function(s,t){try{if(this.getWindow(s)&&qx.dom.Hierarchy.isRendered(s)){try{if((true)&&qx.core.Environment.get(f)==c){var u=this.getWindow(s);

if(u){u.stop();
}}this.getWindow(s).location.replace(t);
}catch(v){s.src=t;
}}else{s.src=t;
}this.__kj(s);
}catch(w){qx.log.Logger.warn("Iframe source could not be set!");
}},queryCurrentUrl:function(x){var y=this.getDocument(x);

try{if(y&&y.location){return y.location.href;
}}catch(z){}return d;
},__kj:function(A){var B=function(){qx.bom.Event.removeNativeListener(A,g,B);
A.$$url=qx.bom.Iframe.queryCurrentUrl(A);
};
qx.bom.Event.addNativeListener(A,g,B);
}}});
})();
(function(){var r="&",q="=",p="?",o="application/json",n="completed",m="text/plain",l="text/javascript",k="qx.io.remote.transport.Script",j="",h="_ScriptTransport_data",c="script",g="timeout",f="_ScriptTransport_",b="_ScriptTransport_id",a="aborted",e="utf-8",d="failed";
qx.Class.define(k,{extend:qx.io.remote.transport.Abstract,construct:function(){qx.io.remote.transport.Abstract.call(this);
var s=++qx.io.remote.transport.Script.__kk;

if(s>=2000000000){qx.io.remote.transport.Script.__kk=s=1;
}this.__kl=null;
this.__kk=s;
},statics:{__kk:0,_instanceRegistry:{},ScriptTransport_PREFIX:f,ScriptTransport_ID_PARAM:b,ScriptTransport_DATA_PARAM:h,handles:{synchronous:false,asynchronous:true,crossDomain:true,fileUpload:false,programaticFormFields:false,responseTypes:[m,l,o]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4},_requestFinished:qx.event.GlobalError.observeMethod(function(t,content){var u=qx.io.remote.transport.Script._instanceRegistry[t];

if(u==null){}else{u._responseContent=content;
u._switchReadyState(qx.io.remote.transport.Script._numericMap.complete);
}})},members:{__ki:0,__kl:null,__kk:null,send:function(){var x=this.getUrl();
x+=(x.indexOf(p)>=0?r:p)+qx.io.remote.transport.Script.ScriptTransport_ID_PARAM+q+this.__kk;
var A=this.getParameters();
var z=[];

for(var w in A){if(w.indexOf(qx.io.remote.transport.Script.ScriptTransport_PREFIX)==0){this.error("Illegal parameter name. The following prefix is used internally by qooxdoo): "+qx.io.remote.transport.Script.ScriptTransport_PREFIX);
}var y=A[w];

if(y instanceof Array){for(var i=0;i<y.length;i++){z.push(encodeURIComponent(w)+q+encodeURIComponent(y[i]));
}}else{z.push(encodeURIComponent(w)+q+encodeURIComponent(y));
}}
if(z.length>0){x+=r+z.join(r);
}var v=this.getData();

if(v!=null){x+=r+qx.io.remote.transport.Script.ScriptTransport_DATA_PARAM+q+encodeURIComponent(v);
}qx.io.remote.transport.Script._instanceRegistry[this.__kk]=this;
this.__kl=document.createElement(c);
this.__kl.charset=e;
this.__kl.src=x;
document.body.appendChild(this.__kl);
},_switchReadyState:function(B){switch(this.getState()){case n:case a:case d:case g:this.warn("Ignore Ready State Change");
return;
}while(this.__ki<B){this.setState(qx.io.remote.Exchange._nativeMap[++this.__ki]);
}},setRequestHeader:function(C,D){},getResponseHeader:function(E){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return j;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==n){return null;
}
switch(this.getResponseType()){case m:case o:case l:{};
var F=this._responseContent;
return (F===0?0:(F||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Script,k);
},destruct:function(){if(this.__kl){delete qx.io.remote.transport.Script._instanceRegistry[this.__kk];
document.body.removeChild(this.__kl);
}this.__kl=this._responseContent=null;
}});
})();
(function(){var m="failed",k="completed",j="=",h="aborted",g="sending",f="",d="&",c="configured",b="timeout",a="application/xml",J="qx.io.remote.transport.XmlHttp",I="application/json",H="text/html",G="receiving",F="text/plain",E="text/javascript",D="?",C="created",B="Boolean",A="engine.version",u='Basic ',v="\n</pre>",r="string",t='Authorization',p="<pre>Could not execute json: \n",q="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n="mshtml",o=':',w="parseerror",x="file:",z="webkit",y="object";
qx.Class.define(J,{extend:qx.io.remote.transport.Abstract,statics:{handles:{synchronous:true,asynchronous:true,crossDomain:false,fileUpload:false,programaticFormFields:false,responseTypes:[F,E,I,a,H]},createRequestObject:function(){return new XMLHttpRequest;
},isSupported:function(){return !!this.createRequestObject();
}},properties:{parseJson:{check:B,init:true}},members:{__km:false,__ki:0,__jf:null,getRequest:function(){if(this.__jf===null){this.__jf=qx.io.remote.transport.XmlHttp.createRequestObject();
this.__jf.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
}return this.__jf;
},send:function(){this.__ki=0;
var O=this.getRequest();
var K=this.getMethod();
var R=this.getAsynchronous();
var Q=this.getUrl();
var M=(window.location.protocol===x&&!(/^http(s){0,1}\:/.test(Q)));
this.__km=M;
var U=this.getParameters(false);
var S=[];

for(var L in U){var P=U[L];

if(P instanceof Array){for(var i=0;i<P.length;i++){S.push(encodeURIComponent(L)+j+encodeURIComponent(P[i]));
}}else{S.push(encodeURIComponent(L)+j+encodeURIComponent(P));
}}
if(S.length>0){Q+=(Q.indexOf(D)>=0?d:D)+S.join(d);
}if(this.getData()===null){var U=this.getParameters(true);
var S=[];

for(var L in U){var P=U[L];

if(P instanceof Array){for(var i=0;i<P.length;i++){S.push(encodeURIComponent(L)+j+encodeURIComponent(P[i]));
}}else{S.push(encodeURIComponent(L)+j+encodeURIComponent(P));
}}
if(S.length>0){this.setData(S.join(d));
}}var T=function(V){var bb=q;
var bf=f;
var Y,X,W;
var bc,bd,be,ba;
var i=0;

do{Y=V.charCodeAt(i++);
X=V.charCodeAt(i++);
W=V.charCodeAt(i++);
bc=Y>>2;
bd=((Y&3)<<4)|(X>>4);
be=((X&15)<<2)|(W>>6);
ba=W&63;

if(isNaN(X)){be=ba=64;
}else if(isNaN(W)){ba=64;
}bf+=bb.charAt(bc)+bb.charAt(bd)+bb.charAt(be)+bb.charAt(ba);
}while(i<V.length);
return bf;
};
try{if(this.getUsername()){if(this.getUseBasicHttpAuth()){O.open(K,Q,R);
O.setRequestHeader(t,u+T(this.getUsername()+o+this.getPassword()));
}else{O.open(K,Q,R,this.getUsername(),this.getPassword());
}}else{O.open(K,Q,R);
}}catch(bg){this.error("Failed with exception: "+bg);
this.failed();
return;
}var N=this.getRequestHeaders();

for(var L in N){O.setRequestHeader(L,N[L]);
}try{if(M&&R&&z==n&&qx.core.Environment.get(A)==9){qx.event.Timer.once(function(){O.send(this.getData());
},this,0);
}else{O.send(this.getData());
}}catch(bh){if(M){this.failedLocally();
}else{this.error("Failed to send data: "+bh,"send");
this.failed();
}return;
}if(!R){this._onreadystatechange();
}},failedLocally:function(){if(this.getState()===m){return;
}this.warn("Could not load from file: "+this.getUrl());
this.failed();
},_onreadystatechange:qx.event.GlobalError.observeMethod(function(e){switch(this.getState()){case k:case h:case m:case b:{};
return;
}var bi=this.getReadyState();

if(bi==4){if(!qx.io.remote.Exchange.wasSuccessful(this.getStatusCode(),bi,this.__km)){if(this.getState()===c){this.setState(g);
}this.failed();
return;
}}if(bi==3&&this.__ki==1){this.setState(qx.io.remote.Exchange._nativeMap[++this.__ki]);
}while(this.__ki<bi){this.setState(qx.io.remote.Exchange._nativeMap[++this.__ki]);
}}),getReadyState:function(){var bj=null;

try{bj=this.getRequest().readyState;
}catch(bk){}return bj;
},setRequestHeader:function(bl,bm){this.getRequestHeaders()[bl]=bm;
},getResponseHeader:function(bn){var bo=null;

try{bo=this.getRequest().getResponseHeader(bn)||null;
}catch(bp){}return bo;
},getStringResponseHeaders:function(){var br=null;

try{var bq=this.getRequest().getAllResponseHeaders();

if(bq){br=bq;
}}catch(bs){}return br;
},getResponseHeaders:function(){var bv=this.getStringResponseHeaders();
var bw={};

if(bv){var bt=bv.split(/[\r\n]+/g);

for(var i=0,l=bt.length;i<l;i++){var bu=bt[i].match(/^([^:]+)\s*:\s*(.+)$/i);

if(bu){bw[bu[1]]=bu[2];
}}}return bw;
},getStatusCode:function(){var bx=-1;

try{bx=this.getRequest().status;
if(bx===1223){bx=204;
}}catch(by){}return bx;
},getStatusText:function(){var bz=f;

try{bz=this.getRequest().statusText;
}catch(bA){}return bz;
},getResponseText:function(){var bB=null;

try{bB=this.getRequest().responseText;
}catch(bC){bB=null;
}return bB;
},getResponseXml:function(){var bF=null;
var bD=this.getStatusCode();
var bE=this.getReadyState();

if(qx.io.remote.Exchange.wasSuccessful(bD,bE,this.__km)){try{bF=this.getRequest().responseXML;
}catch(bG){}}if(typeof bF==y&&bF!=null){if(!bF.documentElement){var s=String(this.getRequest().responseText).replace(/<\?xml[^\?]*\?>/,f);
bF.loadXML(s);
}if(!bF.documentElement){throw new Error("Missing Document Element!");
}
if(bF.documentElement.tagName==w){throw new Error("XML-File is not well-formed!");
}}else{throw new Error("Response was not a valid xml document ["+this.getRequest().responseText+"]");
}return bF;
},getFetchedLength:function(){var bH=this.getResponseText();
return typeof bH==r?bH.length:0;
},getResponseContent:function(){var bI=this.getState();

if(bI!==k&&bI!=m){return null;
}var bK=this.getResponseText();

if(bI==m){return bK;
}
switch(this.getResponseType()){case F:case H:{};
return bK;
case I:{};

try{if(bK&&bK.length>0){var bJ;

if(this.getParseJson()){bJ=qx.lang.Json.parse(bK);
bJ=(bJ===0?0:(bJ||null));
}else{bJ=bK;
}return bJ;
}else{return null;
}}catch(bL){this.error("Could not execute json: ["+bK+"]",bL);
return p+bK+v;
}case E:{};

try{if(bK&&bK.length>0){var bJ=window.eval(bK);
return (bJ===0?0:(bJ||null));
}else{return null;
}}catch(bM){this.error("Could not execute javascript: ["+bK+"]",bM);
return null;
}case a:bK=this.getResponseXml();
{};
return (bK===0?0:(bK||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}},_applyState:function(bN,bO){switch(bN){case C:this.fireEvent(C);
break;
case c:this.fireEvent(c);
break;
case g:this.fireEvent(g);
break;
case G:this.fireEvent(G);
break;
case k:this.fireEvent(k);
break;
case m:this.fireEvent(m);
break;
case h:this.getRequest().abort();
this.fireEvent(h);
break;
case b:this.getRequest().abort();
this.fireEvent(b);
break;
}}},defer:function(){qx.io.remote.Exchange.registerType(qx.io.remote.transport.XmlHttp,J);
},destruct:function(){var bP=this.getRequest();

if(bP){bP.onreadystatechange=qx.lang.Function.empty;
switch(bP.readyState){case 1:case 2:case 3:bP.abort();
}}this.__jf=null;
}});
})();
(function(){var c="Integer",b="Object",a="qx.io.remote.Response";
qx.Class.define(a,{extend:qx.event.type.Event,properties:{state:{check:c,nullable:true},statusCode:{check:c,nullable:true},content:{nullable:true},responseHeaders:{check:b,nullable:true}},members:{clone:function(d){var e=qx.event.type.Event.prototype.clone.call(this,d);
e.setType(this.getType());
e.setState(this.getState());
e.setStatusCode(this.getStatusCode());
e.setContent(this.getContent());
e.setResponseHeaders(this.getResponseHeaders());
return e;
},getResponseHeader:function(f){var g=this.getResponseHeaders();

if(g){return g[f]||null;
}return null;
}}});
})();
(function(){var n="error",m="?",l="fail",k="String",j="callback",i="loaded",h="changePhase",g="&",f='qx.data.store.Jsonp[',e='].callback',b="failed",d="=",c="success",a="qx.data.store.Jsonp";
qx.Class.define(a,{extend:qx.data.store.Json,construct:function(o,p,q){if(q!=undefined){this.setCallbackParam(q);
}qx.data.store.Json.call(this,o,p);
},properties:{callbackParam:{check:k,init:j,nullable:true},callbackName:{check:k,nullable:true}},members:{_createRequest:function(r){if(this.isDeprecatedTransport()){this._warnDeprecated();
return this.__kn(r);
}if(this._getRequest()){this._getRequest().dispose();
}var s=new qx.io.request.Jsonp();
this._setRequest(s);
s.setCallbackParam(this.getCallbackParam());
s.setCallbackName(this.getCallbackName());
s.setUrl(r);
s.addListener(c,this._onSuccess,this);
var t=this._delegate;

if(t&&qx.lang.Type.isFunction(t.configureRequest)){this._delegate.configureRequest(s);
}s.addListener(h,this._onChangePhase,this);
s.addListener(l,this._onFail,this);
s.send();
},__kn:function(u){if(this._getRequest()){this._getRequest().dispose();
}var w=new qx.io.ScriptLoader();
this._setRequest(w);
var x=this._delegate;

if(x&&qx.lang.Type.isFunction(x.configureRequest)){this._delegate.configureRequest(w);
}var v=u.indexOf(m)==-1?m:g;
u+=v+this.getCallbackParam()+d;
var y=parseInt(this.toHashCode(),10);
qx.data.store.Jsonp[y]=this;
u+=f+y+e;
w.load(u,function(status){delete this[y];

if(status===l){this.fireDataEvent(n);
}},this);
},callback:function(z){if(this.isDisposed()){return;
}this.__ko(z);
},__ko:function(A){if(A==undefined){this.setState(b);
this.fireEvent(n);
return;
}var B=this._delegate;

if(B&&qx.lang.Type.isFunction(B.manipulateData)){A=this._delegate.manipulateData(A);
}this._marshaler.toClass(A);
this.setModel(this._marshaler.toModel(A));
this.fireDataEvent(i,this.getModel());
},_warnDeprecated:function(){qx.log.Logger.warn("Using qx.io.ScriptLoader in qx.data.store.Jsonp "+"is deprecated. Please consult the API documentation.");
}}});
})();
(function(){var c="qx.event.type.Event",b="qx.io.request.Jsonp",a="Boolean";
qx.Class.define(b,{extend:qx.io.request.AbstractRequest,events:{"success":c,"load":c,"statusError":c},properties:{cache:{check:a,init:true}},members:{_createTransport:function(){return new qx.bom.request.Jsonp();
},_getConfiguredUrl:function(){var d=this.getUrl(),e;

if(this.getRequestData()){e=this._serializeData(this.getRequestData());
d=qx.util.Uri.appendParamsToUrl(d,e);
}
if(!this.getCache()){d=qx.util.Uri.appendParamsToUrl(d,{nocache:new Date().valueOf()});
}return d;
},_getParsedResponse:function(){return this._transport.responseJson;
},setCallbackParam:function(f){this._transport.setCallbackParam(f);
},setCallbackName:function(name){this._transport.setCallbackName(name);
}}});
})();
(function(){var j="qx.debug.io",i="mshtml",h="",g="webkit",f="engine.version",e="head",d="script",c="Unknown response headers",b="unknown",a="qx.bom.request.Script";
qx.Bootstrap.define(a,{construct:function(){this.__kw();
this.__kp=qx.Bootstrap.bind(this._onNativeLoad,this);
this.__kq=qx.Bootstrap.bind(this._onNativeError,this);
this.__ju=qx.Bootstrap.bind(this._onTimeout,this);
this.__kr=document.head||document.getElementsByTagName(e)[0]||document.documentElement;
this.timeout=this.__kz()?0:15000;
},members:{readyState:null,status:null,statusText:null,timeout:null,__ks:null,open:function(k,l){if(this.__gu){return;
}this.__kw();
this.__jD=null;
this.__kt=l;

if(qx.core.Environment.get(j)){qx.Bootstrap.debug(qx.bom.request.Script,"Open native request with "+"url: "+l);
}this.__jL(1);
},setRequestHeader:function(m,n){if(this.__gu){return;
}var o={};

if(this.readyState!==1){throw new Error("Invalid state");
}o[m]=n;
this.__kt=qx.util.Uri.appendParamsToUrl(this.__kt,o);
},send:function(){if(this.__gu){return;
}var r=this.__kA(),p=this.__kr,q=this;

if(this.timeout>0){this.__ku=window.setTimeout(this.__ju,this.timeout);
}
if(qx.core.Environment.get(j)){qx.Bootstrap.debug(qx.bom.request.Script,"Send native request");
}p.insertBefore(r,p.firstChild);
window.setTimeout(function(){q.__jL(2);
q.__jL(3);
});
},abort:function(){if(this.__gu){return;
}this.__jD=true;
this.__kB();
this.onabort();
},onreadystatechange:function(){},onload:function(){},onloadend:function(){},onerror:function(){},onabort:function(){},ontimeout:function(){},getResponseHeader:function(s){if(this.__gu){return;
}return b;
},getAllResponseHeaders:function(){if(this.__gu){return;
}return c;
},setDetermineSuccess:function(t){qx.core.Assert.assertFunction(t);
this.__ks=t;
},dispose:function(){var u=this.__kv;

if(!this.__gu){if(u){u.onload=u.onreadystatechange=null;
this.__kB();
}
if(this.__ku){window.clearTimeout(this.__ku);
}this.__gu=true;
}},_getUrl:function(){return this.__kt;
},_getScriptElement:function(){return this.__kv;
},_onTimeout:function(){this.__ky();

if(!this.__kz()){this.onerror();
}this.ontimeout();

if(!this.__kz()){this.onloadend();
}},_onNativeLoad:function(){var x=this.__kv,v=this.__ks,w=this;
if(this.__jD){return;
}if(g===i&&qx.core.Environment.get(f)<9){if(!(/loaded|complete/).test(x.readyState)){return;
}else{if(qx.core.Environment.get(j)){qx.Bootstrap.debug(qx.bom.request.Script,"Received native readyState: loaded");
}}}
if(qx.core.Environment.get(j)){qx.Bootstrap.debug(qx.bom.request.Script,"Received native load");
}if(v){if(!this.status){this.status=v()?200:500;
}}
if(this.status===500){if(qx.core.Environment.get(j)){qx.Bootstrap.debug(qx.bom.request.Script,"Detected error");
}}
if(this.__ku){window.clearTimeout(this.__ku);
}window.setTimeout(function(){w.__kx();
w.__jL(4);
w.onload();
w.onloadend();
});
},_onNativeError:function(){this.__ky();
this.onerror();
this.onloadend();
},__kv:null,__kr:null,__kt:h,__kp:null,__kq:null,__ju:null,__ku:null,__jD:null,__gu:null,__kw:function(){this.readyState=0;
this.status=0;
this.statusText=h;
},__jL:function(y){this.readyState=y;
this.onreadystatechange();
},__kx:function(){this.__kB();
this.readyState=4;
if(!this.status){this.status=200;
}this.statusText=h+this.status;
},__ky:function(){this.__kB();
this.readyState=4;
this.status=0;
this.statusText=null;
},__kz:function(){var A=g===i&&qx.core.Environment.get(f)<9;
var z=false;
return !(A||z);
},__kA:function(){var B=this.__kv=document.createElement(d);
B.src=this.__kt;
B.onerror=this.__kq;
B.onload=this.__kp;
if(g===i&&qx.core.Environment.get(f)<9){B.onreadystatechange=this.__kp;
}return B;
},__kB:function(){var C=this.__kv;

if(C&&C.parentNode){this.__kr.removeChild(C);
}}},defer:function(){qx.core.Environment.add(j,false);
}});
})();
(function(){var i="qx.debug.io",h="qx.bom.request.Jsonp",g="callback",f="open",e="dispose",d="",c="_onNativeLoad",b="].callback",a="qx.bom.request.Jsonp[";
qx.Bootstrap.define(h,{extend:qx.bom.request.Script,construct:function(){qx.bom.request.Script.apply(this);
this.__kI();
},members:{responseJson:null,__cy:null,__kC:null,__kD:null,__kE:null,__kF:null,__gu:null,open:function(j,k){if(this.__gu){return;
}var l={},n,m,o=this;
this.responseJson=null;
this.__kE=false;
n=this.__kC||g;
m=this.__kD||a+this.__cy+b;
if(!this.__kD){this.constructor[this.__cy]=this;
}else{if(!window[this.__kD]){this.__kF=true;
window[this.__kD]=function(p){o.callback(p);
};
}else{if(qx.core.Environment.get(i)){qx.log.Logger.debug(qx.bom.request.Jsonp,"Callback "+this.__kD+" already exists");
}}}
if(qx.core.Environment.get(i)){qx.Bootstrap.debug(qx.bom.request.Jsonp,"Expecting JavaScript response to call: "+m);
}l[n]=m;
k=qx.util.Uri.appendParamsToUrl(k,l);
this.__kH(f,[j,k]);
},callback:function(q){if(this.__gu){return;
}this.__kE=true;
this.responseJson=q;
this.constructor[this.__cy]=undefined;
this.__kG();
},setCallbackParam:function(r){this.__kC=r;
},setCallbackName:function(name){this.__kD=name;
},dispose:function(){this.__kG();
this.__kH(e);
},_onNativeLoad:function(){this.status=this.__kE?200:500;
this.__kH(c);
},__kG:function(){if(this.__kF&&window[this.__kD]){window[this.__kD]=undefined;
this.__kF=false;
}},__kH:function(s,t){qx.bom.request.Script.prototype[s].apply(this,t||[]);
},__kI:function(){this.__cy=(new Date().valueOf())+(d+Math.random()).substring(2,5);
}}});
})();
(function(){var f="",e="phonegap.notification",d="phonegap",c="qx.ui.mobile.dialog.Manager",b="singleton",a=",";
qx.Class.define(c,{extend:qx.core.Object,type:b,members:{alert:function(g,h,i,j,k){if(qx.core.Environment.get(d)&&qx.core.Environment.get(e)){var l=function(){if(i){i.call(j);
}};
if(h){h=f+h;
}
if(g){g=f+g;
}
if(k){k=f+k;
}navigator.notification.alert(h,l,g,k);
}else{alert(h);

if(i){i.call(j);
}}},confirm:function(m,n,o,p,q){if(qx.core.Environment.get(d)&&qx.core.Environment.get(e)){var r=function(u){o.call(p,u);
};

if(n){n=f+n;
}
if(m){m=f+m;
}
if(q){q=q.join(a);
}navigator.notification.confirm(n,r,m,q);
}else{var s=confirm(n);
var t=s?1:2;
o.call(p,t);
}}}});
})();


qx.$$loader.init();

