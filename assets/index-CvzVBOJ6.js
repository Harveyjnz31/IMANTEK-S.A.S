(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var ld={exports:{}},Po={};var kg;function VS(){if(kg)return Po;kg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:d,ref:l!==void 0?l:null,props:c}}return Po.Fragment=e,Po.jsx=i,Po.jsxs=i,Po}var Xg;function kS(){return Xg||(Xg=1,ld.exports=VS()),ld.exports}var W=kS(),cd={exports:{}},Io={},ud={exports:{}},fd={};var Wg;function XS(){return Wg||(Wg=1,(function(o){function e(O,z){var ot=O.length;O.push(z);t:for(;0<ot;){var gt=ot-1>>>1,Mt=O[gt];if(0<l(Mt,z))O[gt]=z,O[ot]=Mt,ot=gt;else break t}}function i(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var z=O[0],ot=O.pop();if(ot!==z){O[0]=ot;t:for(var gt=0,Mt=O.length,I=Mt>>>1;gt<I;){var J=2*(gt+1)-1,xt=O[J],At=J+1,Dt=O[At];if(0>l(xt,ot))At<Mt&&0>l(Dt,xt)?(O[gt]=Dt,O[At]=ot,gt=At):(O[gt]=xt,O[J]=ot,gt=J);else if(At<Mt&&0>l(Dt,ot))O[gt]=Dt,O[At]=ot,gt=At;else break t}}return z}function l(O,z){var ot=O.sortIndex-z.sortIndex;return ot!==0?ot:O.id-z.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var d=Date,p=d.now();o.unstable_now=function(){return d.now()-p}}var m=[],h=[],x=1,v=null,g=3,M=!1,b=!1,w=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function P(O){for(var z=i(h);z!==null;){if(z.callback===null)s(h);else if(z.startTime<=O)s(h),z.sortIndex=z.expirationTime,e(m,z);else break;z=i(h)}}function G(O){if(w=!1,P(O),!b)if(i(m)!==null)b=!0,U||(U=!0,K());else{var z=i(h);z!==null&&X(G,z.startTime-O)}}var U=!1,F=-1,T=5,L=-1;function Y(){return y?!0:!(o.unstable_now()-L<T)}function H(){if(y=!1,U){var O=o.unstable_now();L=O;var z=!0;try{t:{b=!1,w&&(w=!1,C(F),F=-1),M=!0;var ot=g;try{e:{for(P(O),v=i(m);v!==null&&!(v.expirationTime>O&&Y());){var gt=v.callback;if(typeof gt=="function"){v.callback=null,g=v.priorityLevel;var Mt=gt(v.expirationTime<=O);if(O=o.unstable_now(),typeof Mt=="function"){v.callback=Mt,P(O),z=!0;break e}v===i(m)&&s(m),P(O)}else s(m);v=i(m)}if(v!==null)z=!0;else{var I=i(h);I!==null&&X(G,I.startTime-O),z=!1}}break t}finally{v=null,g=ot,M=!1}z=void 0}}finally{z?K():U=!1}}}var K;if(typeof N=="function")K=function(){N(H)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,ut=lt.port2;lt.port1.onmessage=H,K=function(){ut.postMessage(null)}}else K=function(){S(H,0)};function X(O,z){F=S(function(){O(o.unstable_now())},z)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return g},o.unstable_next=function(O){switch(g){case 1:case 2:case 3:var z=3;break;default:z=g}var ot=g;g=z;try{return O()}finally{g=ot}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(O,z){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var ot=g;g=O;try{return z()}finally{g=ot}},o.unstable_scheduleCallback=function(O,z,ot){var gt=o.unstable_now();switch(typeof ot=="object"&&ot!==null?(ot=ot.delay,ot=typeof ot=="number"&&0<ot?gt+ot:gt):ot=gt,O){case 1:var Mt=-1;break;case 2:Mt=250;break;case 5:Mt=1073741823;break;case 4:Mt=1e4;break;default:Mt=5e3}return Mt=ot+Mt,O={id:x++,callback:z,priorityLevel:O,startTime:ot,expirationTime:Mt,sortIndex:-1},ot>gt?(O.sortIndex=ot,e(h,O),i(m)===null&&O===i(h)&&(w?(C(F),F=-1):w=!0,X(G,ot-gt))):(O.sortIndex=Mt,e(m,O),b||M||(b=!0,U||(U=!0,K()))),O},o.unstable_shouldYield=Y,o.unstable_wrapCallback=function(O){var z=g;return function(){var ot=g;g=z;try{return O.apply(this,arguments)}finally{g=ot}}}})(fd)),fd}var qg;function WS(){return qg||(qg=1,ud.exports=XS()),ud.exports}var dd={exports:{}},ae={};var jg;function qS(){if(jg)return ae;jg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function M(I){return I===null||typeof I!="object"?null:(I=g&&I[g]||I["@@iterator"],typeof I=="function"?I:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,y={};function S(I,J,xt){this.props=I,this.context=J,this.refs=y,this.updater=xt||b}S.prototype.isReactComponent={},S.prototype.setState=function(I,J){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,J,"setState")},S.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function C(){}C.prototype=S.prototype;function N(I,J,xt){this.props=I,this.context=J,this.refs=y,this.updater=xt||b}var P=N.prototype=new C;P.constructor=N,w(P,S.prototype),P.isPureReactComponent=!0;var G=Array.isArray;function U(){}var F={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function L(I,J,xt){var At=xt.ref;return{$$typeof:o,type:I,key:J,ref:At!==void 0?At:null,props:xt}}function Y(I,J){return L(I.type,J,I.props)}function H(I){return typeof I=="object"&&I!==null&&I.$$typeof===o}function K(I){var J={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(xt){return J[xt]})}var lt=/\/+/g;function ut(I,J){return typeof I=="object"&&I!==null&&I.key!=null?K(""+I.key):J.toString(36)}function X(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(U,U):(I.status="pending",I.then(function(J){I.status==="pending"&&(I.status="fulfilled",I.value=J)},function(J){I.status==="pending"&&(I.status="rejected",I.reason=J)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function O(I,J,xt,At,Dt){var rt=typeof I;(rt==="undefined"||rt==="boolean")&&(I=null);var St=!1;if(I===null)St=!0;else switch(rt){case"bigint":case"string":case"number":St=!0;break;case"object":switch(I.$$typeof){case o:case e:St=!0;break;case x:return St=I._init,O(St(I._payload),J,xt,At,Dt)}}if(St)return Dt=Dt(I),St=At===""?"."+ut(I,0):At,G(Dt)?(xt="",St!=null&&(xt=St.replace(lt,"$&/")+"/"),O(Dt,J,xt,"",function(te){return te})):Dt!=null&&(H(Dt)&&(Dt=Y(Dt,xt+(Dt.key==null||I&&I.key===Dt.key?"":(""+Dt.key).replace(lt,"$&/")+"/")+St)),J.push(Dt)),1;St=0;var bt=At===""?".":At+":";if(G(I))for(var Ht=0;Ht<I.length;Ht++)At=I[Ht],rt=bt+ut(At,Ht),St+=O(At,J,xt,rt,Dt);else if(Ht=M(I),typeof Ht=="function")for(I=Ht.call(I),Ht=0;!(At=I.next()).done;)At=At.value,rt=bt+ut(At,Ht++),St+=O(At,J,xt,rt,Dt);else if(rt==="object"){if(typeof I.then=="function")return O(X(I),J,xt,At,Dt);throw J=String(I),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return St}function z(I,J,xt){if(I==null)return I;var At=[],Dt=0;return O(I,At,"","",function(rt){return J.call(xt,rt,Dt++)}),At}function ot(I){if(I._status===-1){var J=I._result;J=J(),J.then(function(xt){(I._status===0||I._status===-1)&&(I._status=1,I._result=xt)},function(xt){(I._status===0||I._status===-1)&&(I._status=2,I._result=xt)}),I._status===-1&&(I._status=0,I._result=J)}if(I._status===1)return I._result.default;throw I._result}var gt=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},Mt={map:z,forEach:function(I,J,xt){z(I,function(){J.apply(this,arguments)},xt)},count:function(I){var J=0;return z(I,function(){J++}),J},toArray:function(I){return z(I,function(J){return J})||[]},only:function(I){if(!H(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return ae.Activity=v,ae.Children=Mt,ae.Component=S,ae.Fragment=i,ae.Profiler=l,ae.PureComponent=N,ae.StrictMode=s,ae.Suspense=m,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,ae.__COMPILER_RUNTIME={__proto__:null,c:function(I){return F.H.useMemoCache(I)}},ae.cache=function(I){return function(){return I.apply(null,arguments)}},ae.cacheSignal=function(){return null},ae.cloneElement=function(I,J,xt){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var At=w({},I.props),Dt=I.key;if(J!=null)for(rt in J.key!==void 0&&(Dt=""+J.key),J)!T.call(J,rt)||rt==="key"||rt==="__self"||rt==="__source"||rt==="ref"&&J.ref===void 0||(At[rt]=J[rt]);var rt=arguments.length-2;if(rt===1)At.children=xt;else if(1<rt){for(var St=Array(rt),bt=0;bt<rt;bt++)St[bt]=arguments[bt+2];At.children=St}return L(I.type,Dt,At)},ae.createContext=function(I){return I={$$typeof:d,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:c,_context:I},I},ae.createElement=function(I,J,xt){var At,Dt={},rt=null;if(J!=null)for(At in J.key!==void 0&&(rt=""+J.key),J)T.call(J,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(Dt[At]=J[At]);var St=arguments.length-2;if(St===1)Dt.children=xt;else if(1<St){for(var bt=Array(St),Ht=0;Ht<St;Ht++)bt[Ht]=arguments[Ht+2];Dt.children=bt}if(I&&I.defaultProps)for(At in St=I.defaultProps,St)Dt[At]===void 0&&(Dt[At]=St[At]);return L(I,rt,Dt)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(I){return{$$typeof:p,render:I}},ae.isValidElement=H,ae.lazy=function(I){return{$$typeof:x,_payload:{_status:-1,_result:I},_init:ot}},ae.memo=function(I,J){return{$$typeof:h,type:I,compare:J===void 0?null:J}},ae.startTransition=function(I){var J=F.T,xt={};F.T=xt;try{var At=I(),Dt=F.S;Dt!==null&&Dt(xt,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(U,gt)}catch(rt){gt(rt)}finally{J!==null&&xt.types!==null&&(J.types=xt.types),F.T=J}},ae.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},ae.use=function(I){return F.H.use(I)},ae.useActionState=function(I,J,xt){return F.H.useActionState(I,J,xt)},ae.useCallback=function(I,J){return F.H.useCallback(I,J)},ae.useContext=function(I){return F.H.useContext(I)},ae.useDebugValue=function(){},ae.useDeferredValue=function(I,J){return F.H.useDeferredValue(I,J)},ae.useEffect=function(I,J){return F.H.useEffect(I,J)},ae.useEffectEvent=function(I){return F.H.useEffectEvent(I)},ae.useId=function(){return F.H.useId()},ae.useImperativeHandle=function(I,J,xt){return F.H.useImperativeHandle(I,J,xt)},ae.useInsertionEffect=function(I,J){return F.H.useInsertionEffect(I,J)},ae.useLayoutEffect=function(I,J){return F.H.useLayoutEffect(I,J)},ae.useMemo=function(I,J){return F.H.useMemo(I,J)},ae.useOptimistic=function(I,J){return F.H.useOptimistic(I,J)},ae.useReducer=function(I,J,xt){return F.H.useReducer(I,J,xt)},ae.useRef=function(I){return F.H.useRef(I)},ae.useState=function(I){return F.H.useState(I)},ae.useSyncExternalStore=function(I,J,xt){return F.H.useSyncExternalStore(I,J,xt)},ae.useTransition=function(){return F.H.useTransition()},ae.version="19.2.3",ae}var Yg;function kh(){return Yg||(Yg=1,dd.exports=qS()),dd.exports}var hd={exports:{}},On={};var Zg;function jS(){if(Zg)return On;Zg=1;var o=kh();function e(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)h+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,h,x){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:h,implementation:x}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,On.createPortal=function(m,h){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(m,h,null,x)},On.flushSync=function(m){var h=d.T,x=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=h,s.p=x,s.d.f()}},On.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(m,h))},On.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},On.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var x=h.as,v=p(x,h.crossOrigin),g=typeof h.integrity=="string"?h.integrity:void 0,M=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;x==="style"?s.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:M}):x==="script"&&s.d.X(m,{crossOrigin:v,integrity:g,fetchPriority:M,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},On.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var x=p(h.as,h.crossOrigin);s.d.M(m,{crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(m)},On.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var x=h.as,v=p(x,h.crossOrigin);s.d.L(m,x,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},On.preloadModule=function(m,h){if(typeof m=="string")if(h){var x=p(h.as,h.crossOrigin);s.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(m)},On.requestFormReset=function(m){s.d.r(m)},On.unstable_batchedUpdates=function(m,h){return m(h)},On.useFormState=function(m,h,x){return d.H.useFormState(m,h,x)},On.useFormStatus=function(){return d.H.useHostTransitionStatus()},On.version="19.2.3",On}var Kg;function YS(){if(Kg)return hd.exports;Kg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),hd.exports=jS(),hd.exports}var Qg;function ZS(){if(Qg)return Io;Qg=1;var o=WS(),e=kh(),i=YS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function h(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===r)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var _=!1,R=u.child;R;){if(R===a){_=!0,a=u,r=f;break}if(R===r){_=!0,r=u,a=f;break}R=R.sibling}if(!_){for(R=f.child;R;){if(R===a){_=!0,a=f,r=u;break}if(R===r){_=!0,r=f,a=u;break}R=R.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function x(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=x(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),N=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),Y=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function K(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var lt=Symbol.for("react.client.reference");function ut(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===lt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case w:return"Fragment";case S:return"Profiler";case y:return"StrictMode";case G:return"Suspense";case U:return"SuspenseList";case L:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case N:return t.displayName||"Context";case C:return(t._context.displayName||"Context")+".Consumer";case P:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return n=t.displayName||null,n!==null?n:ut(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return ut(t(n))}catch{}}return null}var X=Array.isArray,O=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ot={pending:!1,data:null,method:null,action:null},gt=[],Mt=-1;function I(t){return{current:t}}function J(t){0>Mt||(t.current=gt[Mt],gt[Mt]=null,Mt--)}function xt(t,n){Mt++,gt[Mt]=t.current,t.current=n}var At=I(null),Dt=I(null),rt=I(null),St=I(null);function bt(t,n){switch(xt(rt,n),xt(Dt,t),xt(At,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?dg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=dg(n),t=hg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}J(At),xt(At,t)}function Ht(){J(At),J(Dt),J(rt)}function te(t){t.memoizedState!==null&&xt(St,t);var n=At.current,a=hg(n,t.type);n!==a&&(xt(Dt,t),xt(At,a))}function Qt(t){Dt.current===t&&(J(At),J(Dt)),St.current===t&&(J(St),Uo._currentValue=ot)}var Xe,de;function ve(t){if(Xe===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Xe=n&&n[1]||"",de=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xe+t+de}var Le=!1;function ce(t,n){if(!t||Le)return"";Le=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(ct){var st=ct}Reflect.construct(t,[],vt)}else{try{vt.call()}catch(ct){st=ct}t.call(vt.prototype)}}else{try{throw Error()}catch(ct){st=ct}(vt=t())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(ct){if(ct&&st&&typeof ct.stack=="string")return[ct.stack,st.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),_=f[0],R=f[1];if(_&&R){var B=_.split(`
`),et=R.split(`
`);for(u=r=0;r<B.length&&!B[r].includes("DetermineComponentFrameRoot");)r++;for(;u<et.length&&!et[u].includes("DetermineComponentFrameRoot");)u++;if(r===B.length||u===et.length)for(r=B.length-1,u=et.length-1;1<=r&&0<=u&&B[r]!==et[u];)u--;for(;1<=r&&0<=u;r--,u--)if(B[r]!==et[u]){if(r!==1||u!==1)do if(r--,u--,0>u||B[r]!==et[u]){var ht=`
`+B[r].replace(" at new "," at ");return t.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",t.displayName)),ht}while(1<=r&&0<=u);break}}}finally{Le=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ve(a):""}function on(t,n){switch(t.tag){case 26:case 27:case 5:return ve(t.type);case 16:return ve("Lazy");case 13:return t.child!==n&&n!==null?ve("Suspense Fallback"):ve("Suspense");case 19:return ve("SuspenseList");case 0:case 15:return ce(t.type,!1);case 11:return ce(t.type.render,!1);case 1:return ce(t.type,!0);case 31:return ve("Activity");default:return""}}function je(t){try{var n="",a=null;do n+=on(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var En=Object.prototype.hasOwnProperty,q=o.unstable_scheduleCallback,tn=o.unstable_cancelCallback,he=o.unstable_shouldYield,He=o.unstable_requestPaint,Rt=o.unstable_now,Ke=o.unstable_getCurrentPriorityLevel,D=o.unstable_ImmediatePriority,E=o.unstable_UserBlockingPriority,Q=o.unstable_NormalPriority,_t=o.unstable_LowPriority,Et=o.unstable_IdlePriority,Ct=o.log,Lt=o.unstable_setDisableYieldValue,ft=null,dt=null;function Ot(t){if(typeof Ct=="function"&&Lt(t),dt&&typeof dt.setStrictMode=="function")try{dt.setStrictMode(ft,t)}catch{}}var Pt=Math.clz32?Math.clz32:ne,Ut=Math.log,wt=Math.LN2;function ne(t){return t>>>=0,t===0?32:31-(Ut(t)/wt|0)|0}var ie=256,pe=262144,V=4194304;function Tt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function pt(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var u=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var R=r&134217727;return R!==0?(r=R&~f,r!==0?u=Tt(r):(_&=R,_!==0?u=Tt(_):a||(a=R&~t,a!==0&&(u=Tt(a))))):(R=r&~f,R!==0?u=Tt(R):_!==0?u=Tt(_):a||(a=r&~t,a!==0&&(u=Tt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function zt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Nt(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yt(){var t=V;return V<<=1,(V&62914560)===0&&(V=4194304),t}function qt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function ee(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function en(t,n,a,r,u,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,B=t.expirationTimes,et=t.hiddenUpdates;for(a=_&~a;0<a;){var ht=31-Pt(a),vt=1<<ht;R[ht]=0,B[ht]=-1;var st=et[ht];if(st!==null)for(et[ht]=null,ht=0;ht<st.length;ht++){var ct=st[ht];ct!==null&&(ct.lane&=-536870913)}a&=~vt}r!==0&&we(t,r,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function we(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Pt(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function fi(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-Pt(a),u=1<<r;u&n|t[r]&n&&(t[r]|=n),a&=~u}}function Kn(t,n){var a=n&-n;return a=(a&42)!==0?1:ls(a),(a&(t.suspendedLanes|n))!==0?0:a}function ls(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Vr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function kr(){var t=z.p;return t!==0?t:(t=window.event,t===void 0?32:Ig(t.type))}function Xr(t,n){var a=z.p;try{return z.p=t,n()}finally{z.p=a}}var Nn=Math.random().toString(36).slice(2),ln="__reactFiber$"+Nn,bn="__reactProps$"+Nn,Yi="__reactContainer$"+Nn,Ea="__reactEvents$"+Nn,tl="__reactListeners$"+Nn,Bs="__reactHandles$"+Nn,Wr="__reactResources$"+Nn,ba="__reactMarker$"+Nn;function qr(t){delete t[ln],delete t[bn],delete t[Ea],delete t[tl],delete t[Bs]}function Ta(t){var n=t[ln];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Yi]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Sg(t);t!==null;){if(a=t[ln])return a;t=Sg(t)}return n}t=a,a=t.parentNode}return null}function Aa(t){if(t=t[ln]||t[Yi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function cs(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Ra(t){var n=t[Wr];return n||(n=t[Wr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function fn(t){t[ba]=!0}var el=new Set,A={};function j(t,n){at(t,n),at(t+"Capture",n)}function at(t,n){for(A[t]=n,t=0;t<n.length;t++)el.add(n[t])}var nt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),it={},Ft={};function Vt(t){return En.call(Ft,t)?!0:En.call(it,t)?!1:nt.test(t)?Ft[t]=!0:(it[t]=!0,!1)}function It(t,n,a){if(Vt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Xt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function kt(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+r)}}function Zt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function oe(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Yt(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ae(t){if(!t._valueTracker){var n=oe(t)?"checked":"value";t._valueTracker=Yt(t,n,""+t[n])}}function Qe(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=oe(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}function We(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Oe=/[\n"\\]/g;function Pe(t){return t.replace(Oe,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Gt(t,n,a,r,u,f,_,R){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Zt(n)):t.value!==""+Zt(n)&&(t.value=""+Zt(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?me(t,_,Zt(n)):a!=null?me(t,_,Zt(a)):r!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+Zt(R):t.removeAttribute("name")}function Ln(t,n,a,r,u,f,_,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ae(t);return}a=a!=null?""+Zt(a):"",n=n!=null?""+Zt(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=R?t.checked:!!r,t.defaultChecked=!!r,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),Ae(t)}function me(t,n,a){n==="number"&&We(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function _n(t,n,a,r){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&r&&(t[a].defaultSelected=!0)}else{for(a=""+Zt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,r&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Qn(t,n,a){if(n!=null&&(n=""+Zt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Zt(a):""}function Ei(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(X(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=Zt(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),Ae(t)}function Jn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Ie=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Je(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||Ie.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function bi(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&Je(t,u,r)}else for(var f in n)n.hasOwnProperty(f)&&Je(t,f,n[f])}function Ne(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ni=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ca=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function us(t){return Ca.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Zi(){}var au=null;function su(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Hs=null,Gs=null;function fp(t){var n=Aa(t);if(n&&(t=n.stateNode)){var a=t[bn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Gt(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Pe(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var u=r[bn]||null;if(!u)throw Error(s(90));Gt(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&Qe(r)}break t;case"textarea":Qn(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&_n(t,!!a.multiple,n,!1)}}}var ru=!1;function dp(t,n,a){if(ru)return t(n,a);ru=!0;try{var r=t(n);return r}finally{if(ru=!1,(Hs!==null||Gs!==null)&&(Vl(),Hs&&(n=Hs,t=Gs,Gs=Hs=null,fp(n),t)))for(n=0;n<t.length;n++)fp(t[n])}}function jr(t,n){var a=t.stateNode;if(a===null)return null;var r=a[bn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ou=!1;if(Ki)try{var Yr={};Object.defineProperty(Yr,"passive",{get:function(){ou=!0}}),window.addEventListener("test",Yr,Yr),window.removeEventListener("test",Yr,Yr)}catch{ou=!1}var wa=null,lu=null,nl=null;function hp(){if(nl)return nl;var t,n=lu,a=n.length,r,u="value"in wa?wa.value:wa.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var _=a-t;for(r=1;r<=_&&n[a-r]===u[f-r];r++);return nl=u.slice(t,1<r?1-r:void 0)}function il(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function al(){return!0}function pp(){return!1}function Gn(t){function n(a,r,u,f,_){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?al:pp,this.isPropagationStopped=pp,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=al)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=al)},persist:function(){},isPersistent:al}),n}var fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sl=Gn(fs),Zr=v({},fs,{view:0,detail:0}),Hv=Gn(Zr),cu,uu,Kr,rl=v({},Zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:du,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Kr&&(Kr&&t.type==="mousemove"?(cu=t.screenX-Kr.screenX,uu=t.screenY-Kr.screenY):uu=cu=0,Kr=t),cu)},movementY:function(t){return"movementY"in t?t.movementY:uu}}),mp=Gn(rl),Gv=v({},rl,{dataTransfer:0}),Vv=Gn(Gv),kv=v({},Zr,{relatedTarget:0}),fu=Gn(kv),Xv=v({},fs,{animationName:0,elapsedTime:0,pseudoElement:0}),Wv=Gn(Xv),qv=v({},fs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),jv=Gn(qv),Yv=v({},fs,{data:0}),gp=Gn(Yv),Zv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Qv[t])?!!n[t]:!1}function du(){return Jv}var $v=v({},Zr,{key:function(t){if(t.key){var n=Zv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=il(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Kv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:du,charCode:function(t){return t.type==="keypress"?il(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?il(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),tx=Gn($v),ex=v({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_p=Gn(ex),nx=v({},Zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:du}),ix=Gn(nx),ax=v({},fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),sx=Gn(ax),rx=v({},rl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ox=Gn(rx),lx=v({},fs,{newState:0,oldState:0}),cx=Gn(lx),ux=[9,13,27,32],hu=Ki&&"CompositionEvent"in window,Qr=null;Ki&&"documentMode"in document&&(Qr=document.documentMode);var fx=Ki&&"TextEvent"in window&&!Qr,vp=Ki&&(!hu||Qr&&8<Qr&&11>=Qr),xp=" ",Sp=!1;function yp(t,n){switch(t){case"keyup":return ux.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Vs=!1;function dx(t,n){switch(t){case"compositionend":return Mp(n);case"keypress":return n.which!==32?null:(Sp=!0,xp);case"textInput":return t=n.data,t===xp&&Sp?null:t;default:return null}}function hx(t,n){if(Vs)return t==="compositionend"||!hu&&yp(t,n)?(t=hp(),nl=lu=wa=null,Vs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return vp&&n.locale!=="ko"?null:n.data;default:return null}}var px={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ep(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!px[t.type]:n==="textarea"}function bp(t,n,a,r){Hs?Gs?Gs.push(r):Gs=[r]:Hs=r,n=Zl(n,"onChange"),0<n.length&&(a=new sl("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var Jr=null,$r=null;function mx(t){rg(t,0)}function ol(t){var n=cs(t);if(Qe(n))return t}function Tp(t,n){if(t==="change")return n}var Ap=!1;if(Ki){var pu;if(Ki){var mu="oninput"in document;if(!mu){var Rp=document.createElement("div");Rp.setAttribute("oninput","return;"),mu=typeof Rp.oninput=="function"}pu=mu}else pu=!1;Ap=pu&&(!document.documentMode||9<document.documentMode)}function Cp(){Jr&&(Jr.detachEvent("onpropertychange",wp),$r=Jr=null)}function wp(t){if(t.propertyName==="value"&&ol($r)){var n=[];bp(n,$r,t,su(t)),dp(mx,n)}}function gx(t,n,a){t==="focusin"?(Cp(),Jr=n,$r=a,Jr.attachEvent("onpropertychange",wp)):t==="focusout"&&Cp()}function _x(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ol($r)}function vx(t,n){if(t==="click")return ol(n)}function xx(t,n){if(t==="input"||t==="change")return ol(n)}function Sx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var $n=typeof Object.is=="function"?Object.is:Sx;function to(t,n){if($n(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!En.call(n,u)||!$n(t[u],n[u]))return!1}return!0}function Dp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Up(t,n){var a=Dp(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Dp(a)}}function Np(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Np(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Lp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=We(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=We(t.document)}return n}function gu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var yx=Ki&&"documentMode"in document&&11>=document.documentMode,ks=null,_u=null,eo=null,vu=!1;function Op(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;vu||ks==null||ks!==We(r)||(r=ks,"selectionStart"in r&&gu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),eo&&to(eo,r)||(eo=r,r=Zl(_u,"onSelect"),0<r.length&&(n=new sl("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=ks)))}function ds(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Xs={animationend:ds("Animation","AnimationEnd"),animationiteration:ds("Animation","AnimationIteration"),animationstart:ds("Animation","AnimationStart"),transitionrun:ds("Transition","TransitionRun"),transitionstart:ds("Transition","TransitionStart"),transitioncancel:ds("Transition","TransitionCancel"),transitionend:ds("Transition","TransitionEnd")},xu={},Pp={};Ki&&(Pp=document.createElement("div").style,"AnimationEvent"in window||(delete Xs.animationend.animation,delete Xs.animationiteration.animation,delete Xs.animationstart.animation),"TransitionEvent"in window||delete Xs.transitionend.transition);function hs(t){if(xu[t])return xu[t];if(!Xs[t])return t;var n=Xs[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Pp)return xu[t]=n[a];return t}var Ip=hs("animationend"),Fp=hs("animationiteration"),zp=hs("animationstart"),Mx=hs("transitionrun"),Ex=hs("transitionstart"),bx=hs("transitioncancel"),Bp=hs("transitionend"),Hp=new Map,Su="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Su.push("scrollEnd");function Ti(t,n){Hp.set(t,n),j(n,[t])}var ll=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},di=[],Ws=0,yu=0;function cl(){for(var t=Ws,n=yu=Ws=0;n<t;){var a=di[n];di[n++]=null;var r=di[n];di[n++]=null;var u=di[n];di[n++]=null;var f=di[n];if(di[n++]=null,r!==null&&u!==null){var _=r.pending;_===null?u.next=u:(u.next=_.next,_.next=u),r.pending=u}f!==0&&Gp(a,u,f)}}function ul(t,n,a,r){di[Ws++]=t,di[Ws++]=n,di[Ws++]=a,di[Ws++]=r,yu|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function Mu(t,n,a,r){return ul(t,n,a,r),fl(t)}function ps(t,n){return ul(t,null,null,n),fl(t)}function Gp(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Pt(a),t=f.hiddenUpdates,r=t[u],r===null?t[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function fl(t){if(50<bo)throw bo=0,Nf=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var qs={};function Tx(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(t,n,a,r){return new Tx(t,n,a,r)}function Eu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Qi(t,n){var a=t.alternate;return a===null?(a=ti(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Vp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function dl(t,n,a,r,u,f){var _=0;if(r=t,typeof t=="function")Eu(t)&&(_=1);else if(typeof t=="string")_=DS(t,a,At.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case L:return t=ti(31,a,n,u),t.elementType=L,t.lanes=f,t;case w:return ms(a.children,u,f,n);case y:_=8,u|=24;break;case S:return t=ti(12,a,n,u|2),t.elementType=S,t.lanes=f,t;case G:return t=ti(13,a,n,u),t.elementType=G,t.lanes=f,t;case U:return t=ti(19,a,n,u),t.elementType=U,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case N:_=10;break t;case C:_=9;break t;case P:_=11;break t;case F:_=14;break t;case T:_=16,r=null;break t}_=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=ti(_,a,n,u),n.elementType=t,n.type=r,n.lanes=f,n}function ms(t,n,a,r){return t=ti(7,t,r,n),t.lanes=a,t}function bu(t,n,a){return t=ti(6,t,null,n),t.lanes=a,t}function kp(t){var n=ti(18,null,null,0);return n.stateNode=t,n}function Tu(t,n,a){return n=ti(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Xp=new WeakMap;function hi(t,n){if(typeof t=="object"&&t!==null){var a=Xp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:je(n)},Xp.set(t,n),n)}return{value:t,source:n,stack:je(n)}}var js=[],Ys=0,hl=null,no=0,pi=[],mi=0,Da=null,Li=1,Oi="";function Ji(t,n){js[Ys++]=no,js[Ys++]=hl,hl=t,no=n}function Wp(t,n,a){pi[mi++]=Li,pi[mi++]=Oi,pi[mi++]=Da,Da=t;var r=Li;t=Oi;var u=32-Pt(r)-1;r&=~(1<<u),a+=1;var f=32-Pt(n)+u;if(30<f){var _=u-u%5;f=(r&(1<<_)-1).toString(32),r>>=_,u-=_,Li=1<<32-Pt(n)+u|a<<u|r,Oi=f+t}else Li=1<<f|a<<u|r,Oi=t}function Au(t){t.return!==null&&(Ji(t,1),Wp(t,1,0))}function Ru(t){for(;t===hl;)hl=js[--Ys],js[Ys]=null,no=js[--Ys],js[Ys]=null;for(;t===Da;)Da=pi[--mi],pi[mi]=null,Oi=pi[--mi],pi[mi]=null,Li=pi[--mi],pi[mi]=null}function qp(t,n){pi[mi++]=Li,pi[mi++]=Oi,pi[mi++]=Da,Li=n.id,Oi=n.overflow,Da=t}var Tn=null,Ye=null,ye=!1,Ua=null,gi=!1,Cu=Error(s(519));function Na(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw io(hi(n,t)),Cu}function jp(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[ln]=t,n[bn]=r,a){case"dialog":_e("cancel",n),_e("close",n);break;case"iframe":case"object":case"embed":_e("load",n);break;case"video":case"audio":for(a=0;a<Ao.length;a++)_e(Ao[a],n);break;case"source":_e("error",n);break;case"img":case"image":case"link":_e("error",n),_e("load",n);break;case"details":_e("toggle",n);break;case"input":_e("invalid",n),Ln(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":_e("invalid",n);break;case"textarea":_e("invalid",n),Ei(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||ug(n.textContent,a)?(r.popover!=null&&(_e("beforetoggle",n),_e("toggle",n)),r.onScroll!=null&&_e("scroll",n),r.onScrollEnd!=null&&_e("scrollend",n),r.onClick!=null&&(n.onclick=Zi),n=!0):n=!1,n||Na(t,!0)}function Yp(t){for(Tn=t.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:gi=!1;return;case 27:case 3:gi=!0;return;default:Tn=Tn.return}}function Zs(t){if(t!==Tn)return!1;if(!ye)return Yp(t),ye=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||jf(t.type,t.memoizedProps)),a=!a),a&&Ye&&Na(t),Yp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ye=xg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ye=xg(t)}else n===27?(n=Ye,qa(t.type)?(t=Jf,Jf=null,Ye=t):Ye=n):Ye=Tn?vi(t.stateNode.nextSibling):null;return!0}function gs(){Ye=Tn=null,ye=!1}function wu(){var t=Ua;return t!==null&&(Wn===null?Wn=t:Wn.push.apply(Wn,t),Ua=null),t}function io(t){Ua===null?Ua=[t]:Ua.push(t)}var Du=I(null),_s=null,$i=null;function La(t,n,a){xt(Du,n._currentValue),n._currentValue=a}function ta(t){t._currentValue=Du.current,J(Du)}function Uu(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function Nu(t,n,a,r){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;t:for(;f!==null;){var R=f;f=u;for(var B=0;B<n.length;B++)if(R.context===n[B]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),Uu(f.return,a,t),r||(_=null);break t}f=R.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),Uu(_,a,t),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===t){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function Ks(t,n,a,r){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var R=u.type;$n(u.pendingProps.value,_.value)||(t!==null?t.push(R):t=[R])}}else if(u===St.current){if(_=u.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Uo):t=[Uo])}u=u.return}t!==null&&Nu(n,t,a,r),n.flags|=262144}function pl(t){for(t=t.firstContext;t!==null;){if(!$n(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function vs(t){_s=t,$i=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function An(t){return Zp(_s,t)}function ml(t,n){return _s===null&&vs(t),Zp(t,n)}function Zp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},$i===null){if(t===null)throw Error(s(308));$i=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else $i=$i.next=n;return a}var Ax=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Rx=o.unstable_scheduleCallback,Cx=o.unstable_NormalPriority,dn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Lu(){return{controller:new Ax,data:new Map,refCount:0}}function ao(t){t.refCount--,t.refCount===0&&Rx(Cx,function(){t.controller.abort()})}var so=null,Ou=0,Qs=0,Js=null;function wx(t,n){if(so===null){var a=so=[];Ou=0,Qs=zf(),Js={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Ou++,n.then(Kp,Kp),n}function Kp(){if(--Ou===0&&so!==null){Js!==null&&(Js.status="fulfilled");var t=so;so=null,Qs=0,Js=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Dx(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var Qp=O.S;O.S=function(t,n){O0=Rt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&wx(t,n),Qp!==null&&Qp(t,n)};var xs=I(null);function Pu(){var t=xs.current;return t!==null?t:qe.pooledCache}function gl(t,n){n===null?xt(xs,xs.current):xt(xs,n.pool)}function Jp(){var t=Pu();return t===null?null:{parent:dn._currentValue,pool:t}}var $s=Error(s(460)),Iu=Error(s(474)),_l=Error(s(542)),vl={then:function(){}};function $p(t){return t=t.status,t==="fulfilled"||t==="rejected"}function tm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Zi,Zi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,nm(t),t;default:if(typeof n.status=="string")n.then(Zi,Zi);else{if(t=qe,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,nm(t),t}throw ys=n,$s}}function Ss(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ys=a,$s):a}}var ys=null;function em(){if(ys===null)throw Error(s(459));var t=ys;return ys=null,t}function nm(t){if(t===$s||t===_l)throw Error(s(483))}var tr=null,ro=0;function xl(t){var n=ro;return ro+=1,tr===null&&(tr=[]),tm(tr,t,n)}function oo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Sl(t,n){throw n.$$typeof===g?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function im(t){function n(Z,k){if(t){var tt=Z.deletions;tt===null?(Z.deletions=[k],Z.flags|=16):tt.push(k)}}function a(Z,k){if(!t)return null;for(;k!==null;)n(Z,k),k=k.sibling;return null}function r(Z){for(var k=new Map;Z!==null;)Z.key!==null?k.set(Z.key,Z):k.set(Z.index,Z),Z=Z.sibling;return k}function u(Z,k){return Z=Qi(Z,k),Z.index=0,Z.sibling=null,Z}function f(Z,k,tt){return Z.index=tt,t?(tt=Z.alternate,tt!==null?(tt=tt.index,tt<k?(Z.flags|=67108866,k):tt):(Z.flags|=67108866,k)):(Z.flags|=1048576,k)}function _(Z){return t&&Z.alternate===null&&(Z.flags|=67108866),Z}function R(Z,k,tt,mt){return k===null||k.tag!==6?(k=bu(tt,Z.mode,mt),k.return=Z,k):(k=u(k,tt),k.return=Z,k)}function B(Z,k,tt,mt){var Kt=tt.type;return Kt===w?ht(Z,k,tt.props.children,mt,tt.key):k!==null&&(k.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===T&&Ss(Kt)===k.type)?(k=u(k,tt.props),oo(k,tt),k.return=Z,k):(k=dl(tt.type,tt.key,tt.props,null,Z.mode,mt),oo(k,tt),k.return=Z,k)}function et(Z,k,tt,mt){return k===null||k.tag!==4||k.stateNode.containerInfo!==tt.containerInfo||k.stateNode.implementation!==tt.implementation?(k=Tu(tt,Z.mode,mt),k.return=Z,k):(k=u(k,tt.children||[]),k.return=Z,k)}function ht(Z,k,tt,mt,Kt){return k===null||k.tag!==7?(k=ms(tt,Z.mode,mt,Kt),k.return=Z,k):(k=u(k,tt),k.return=Z,k)}function vt(Z,k,tt){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=bu(""+k,Z.mode,tt),k.return=Z,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case M:return tt=dl(k.type,k.key,k.props,null,Z.mode,tt),oo(tt,k),tt.return=Z,tt;case b:return k=Tu(k,Z.mode,tt),k.return=Z,k;case T:return k=Ss(k),vt(Z,k,tt)}if(X(k)||K(k))return k=ms(k,Z.mode,tt,null),k.return=Z,k;if(typeof k.then=="function")return vt(Z,xl(k),tt);if(k.$$typeof===N)return vt(Z,ml(Z,k),tt);Sl(Z,k)}return null}function st(Z,k,tt,mt){var Kt=k!==null?k.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return Kt!==null?null:R(Z,k,""+tt,mt);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case M:return tt.key===Kt?B(Z,k,tt,mt):null;case b:return tt.key===Kt?et(Z,k,tt,mt):null;case T:return tt=Ss(tt),st(Z,k,tt,mt)}if(X(tt)||K(tt))return Kt!==null?null:ht(Z,k,tt,mt,null);if(typeof tt.then=="function")return st(Z,k,xl(tt),mt);if(tt.$$typeof===N)return st(Z,k,ml(Z,tt),mt);Sl(Z,tt)}return null}function ct(Z,k,tt,mt,Kt){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return Z=Z.get(tt)||null,R(k,Z,""+mt,Kt);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case M:return Z=Z.get(mt.key===null?tt:mt.key)||null,B(k,Z,mt,Kt);case b:return Z=Z.get(mt.key===null?tt:mt.key)||null,et(k,Z,mt,Kt);case T:return mt=Ss(mt),ct(Z,k,tt,mt,Kt)}if(X(mt)||K(mt))return Z=Z.get(tt)||null,ht(k,Z,mt,Kt,null);if(typeof mt.then=="function")return ct(Z,k,tt,xl(mt),Kt);if(mt.$$typeof===N)return ct(Z,k,tt,ml(k,mt),Kt);Sl(k,mt)}return null}function Wt(Z,k,tt,mt){for(var Kt=null,Re=null,jt=k,ue=k=0,Se=null;jt!==null&&ue<tt.length;ue++){jt.index>ue?(Se=jt,jt=null):Se=jt.sibling;var Ce=st(Z,jt,tt[ue],mt);if(Ce===null){jt===null&&(jt=Se);break}t&&jt&&Ce.alternate===null&&n(Z,jt),k=f(Ce,k,ue),Re===null?Kt=Ce:Re.sibling=Ce,Re=Ce,jt=Se}if(ue===tt.length)return a(Z,jt),ye&&Ji(Z,ue),Kt;if(jt===null){for(;ue<tt.length;ue++)jt=vt(Z,tt[ue],mt),jt!==null&&(k=f(jt,k,ue),Re===null?Kt=jt:Re.sibling=jt,Re=jt);return ye&&Ji(Z,ue),Kt}for(jt=r(jt);ue<tt.length;ue++)Se=ct(jt,Z,ue,tt[ue],mt),Se!==null&&(t&&Se.alternate!==null&&jt.delete(Se.key===null?ue:Se.key),k=f(Se,k,ue),Re===null?Kt=Se:Re.sibling=Se,Re=Se);return t&&jt.forEach(function(Qa){return n(Z,Qa)}),ye&&Ji(Z,ue),Kt}function Jt(Z,k,tt,mt){if(tt==null)throw Error(s(151));for(var Kt=null,Re=null,jt=k,ue=k=0,Se=null,Ce=tt.next();jt!==null&&!Ce.done;ue++,Ce=tt.next()){jt.index>ue?(Se=jt,jt=null):Se=jt.sibling;var Qa=st(Z,jt,Ce.value,mt);if(Qa===null){jt===null&&(jt=Se);break}t&&jt&&Qa.alternate===null&&n(Z,jt),k=f(Qa,k,ue),Re===null?Kt=Qa:Re.sibling=Qa,Re=Qa,jt=Se}if(Ce.done)return a(Z,jt),ye&&Ji(Z,ue),Kt;if(jt===null){for(;!Ce.done;ue++,Ce=tt.next())Ce=vt(Z,Ce.value,mt),Ce!==null&&(k=f(Ce,k,ue),Re===null?Kt=Ce:Re.sibling=Ce,Re=Ce);return ye&&Ji(Z,ue),Kt}for(jt=r(jt);!Ce.done;ue++,Ce=tt.next())Ce=ct(jt,Z,ue,Ce.value,mt),Ce!==null&&(t&&Ce.alternate!==null&&jt.delete(Ce.key===null?ue:Ce.key),k=f(Ce,k,ue),Re===null?Kt=Ce:Re.sibling=Ce,Re=Ce);return t&&jt.forEach(function(GS){return n(Z,GS)}),ye&&Ji(Z,ue),Kt}function ke(Z,k,tt,mt){if(typeof tt=="object"&&tt!==null&&tt.type===w&&tt.key===null&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case M:t:{for(var Kt=tt.key;k!==null;){if(k.key===Kt){if(Kt=tt.type,Kt===w){if(k.tag===7){a(Z,k.sibling),mt=u(k,tt.props.children),mt.return=Z,Z=mt;break t}}else if(k.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===T&&Ss(Kt)===k.type){a(Z,k.sibling),mt=u(k,tt.props),oo(mt,tt),mt.return=Z,Z=mt;break t}a(Z,k);break}else n(Z,k);k=k.sibling}tt.type===w?(mt=ms(tt.props.children,Z.mode,mt,tt.key),mt.return=Z,Z=mt):(mt=dl(tt.type,tt.key,tt.props,null,Z.mode,mt),oo(mt,tt),mt.return=Z,Z=mt)}return _(Z);case b:t:{for(Kt=tt.key;k!==null;){if(k.key===Kt)if(k.tag===4&&k.stateNode.containerInfo===tt.containerInfo&&k.stateNode.implementation===tt.implementation){a(Z,k.sibling),mt=u(k,tt.children||[]),mt.return=Z,Z=mt;break t}else{a(Z,k);break}else n(Z,k);k=k.sibling}mt=Tu(tt,Z.mode,mt),mt.return=Z,Z=mt}return _(Z);case T:return tt=Ss(tt),ke(Z,k,tt,mt)}if(X(tt))return Wt(Z,k,tt,mt);if(K(tt)){if(Kt=K(tt),typeof Kt!="function")throw Error(s(150));return tt=Kt.call(tt),Jt(Z,k,tt,mt)}if(typeof tt.then=="function")return ke(Z,k,xl(tt),mt);if(tt.$$typeof===N)return ke(Z,k,ml(Z,tt),mt);Sl(Z,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,k!==null&&k.tag===6?(a(Z,k.sibling),mt=u(k,tt),mt.return=Z,Z=mt):(a(Z,k),mt=bu(tt,Z.mode,mt),mt.return=Z,Z=mt),_(Z)):a(Z,k)}return function(Z,k,tt,mt){try{ro=0;var Kt=ke(Z,k,tt,mt);return tr=null,Kt}catch(jt){if(jt===$s||jt===_l)throw jt;var Re=ti(29,jt,null,Z.mode);return Re.lanes=mt,Re.return=Z,Re}}}var Ms=im(!0),am=im(!1),Oa=!1;function Fu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function zu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Pa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ia(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(De&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=fl(t),Gp(t,null,a),n}return ul(t,r,n,a),fl(t)}function lo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,fi(t,a)}}function Bu(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Hu=!1;function co(){if(Hu){var t=Js;if(t!==null)throw t}}function uo(t,n,a,r){Hu=!1;var u=t.updateQueue;Oa=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var B=R,et=B.next;B.next=null,_===null?f=et:_.next=et,_=B;var ht=t.alternate;ht!==null&&(ht=ht.updateQueue,R=ht.lastBaseUpdate,R!==_&&(R===null?ht.firstBaseUpdate=et:R.next=et,ht.lastBaseUpdate=B))}if(f!==null){var vt=u.baseState;_=0,ht=et=B=null,R=f;do{var st=R.lane&-536870913,ct=st!==R.lane;if(ct?(xe&st)===st:(r&st)===st){st!==0&&st===Qs&&(Hu=!0),ht!==null&&(ht=ht.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});t:{var Wt=t,Jt=R;st=n;var ke=a;switch(Jt.tag){case 1:if(Wt=Jt.payload,typeof Wt=="function"){vt=Wt.call(ke,vt,st);break t}vt=Wt;break t;case 3:Wt.flags=Wt.flags&-65537|128;case 0:if(Wt=Jt.payload,st=typeof Wt=="function"?Wt.call(ke,vt,st):Wt,st==null)break t;vt=v({},vt,st);break t;case 2:Oa=!0}}st=R.callback,st!==null&&(t.flags|=64,ct&&(t.flags|=8192),ct=u.callbacks,ct===null?u.callbacks=[st]:ct.push(st))}else ct={lane:st,tag:R.tag,payload:R.payload,callback:R.callback,next:null},ht===null?(et=ht=ct,B=vt):ht=ht.next=ct,_|=st;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ct=R,R=ct.next,ct.next=null,u.lastBaseUpdate=ct,u.shared.pending=null}}while(!0);ht===null&&(B=vt),u.baseState=B,u.firstBaseUpdate=et,u.lastBaseUpdate=ht,f===null&&(u.shared.lanes=0),Ga|=_,t.lanes=_,t.memoizedState=vt}}function sm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function rm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)sm(a[t],n)}var er=I(null),yl=I(0);function om(t,n){t=ca,xt(yl,t),xt(er,n),ca=t|n.baseLanes}function Gu(){xt(yl,ca),xt(er,er.current)}function Vu(){ca=yl.current,J(er),J(yl)}var ei=I(null),_i=null;function Fa(t){var n=t.alternate;xt(cn,cn.current&1),xt(ei,t),_i===null&&(n===null||er.current!==null||n.memoizedState!==null)&&(_i=t)}function ku(t){xt(cn,cn.current),xt(ei,t),_i===null&&(_i=t)}function lm(t){t.tag===22?(xt(cn,cn.current),xt(ei,t),_i===null&&(_i=t)):za()}function za(){xt(cn,cn.current),xt(ei,ei.current)}function ni(t){J(ei),_i===t&&(_i=null),J(cn)}var cn=I(0);function Ml(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Kf(a)||Qf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ea=0,le=null,Ge=null,hn=null,El=!1,nr=!1,Es=!1,bl=0,fo=0,ir=null,Ux=0;function nn(){throw Error(s(321))}function Xu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!$n(t[a],n[a]))return!1;return!0}function Wu(t,n,a,r,u,f){return ea=f,le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=t===null||t.memoizedState===null?Wm:of,Es=!1,f=a(r,u),Es=!1,nr&&(f=um(n,a,r,u)),cm(t),f}function cm(t){O.H=mo;var n=Ge!==null&&Ge.next!==null;if(ea=0,hn=Ge=le=null,El=!1,fo=0,ir=null,n)throw Error(s(300));t===null||pn||(t=t.dependencies,t!==null&&pl(t)&&(pn=!0))}function um(t,n,a,r){le=t;var u=0;do{if(nr&&(ir=null),fo=0,nr=!1,25<=u)throw Error(s(301));if(u+=1,hn=Ge=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=qm,f=n(a,r)}while(nr);return f}function Nx(){var t=O.H,n=t.useState()[0];return n=typeof n.then=="function"?ho(n):n,t=t.useState()[0],(Ge!==null?Ge.memoizedState:null)!==t&&(le.flags|=1024),n}function qu(){var t=bl!==0;return bl=0,t}function ju(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Yu(t){if(El){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}El=!1}ea=0,hn=Ge=le=null,nr=!1,fo=bl=0,ir=null}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?le.memoizedState=hn=t:hn=hn.next=t,hn}function un(){if(Ge===null){var t=le.alternate;t=t!==null?t.memoizedState:null}else t=Ge.next;var n=hn===null?le.memoizedState:hn.next;if(n!==null)hn=n,Ge=t;else{if(t===null)throw le.alternate===null?Error(s(467)):Error(s(310));Ge=t,t={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},hn===null?le.memoizedState=hn=t:hn=hn.next=t}return hn}function Tl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ho(t){var n=fo;return fo+=1,ir===null&&(ir=[]),t=tm(ir,t,n),n=le,(hn===null?n.memoizedState:hn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?Wm:of),t}function Al(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ho(t);if(t.$$typeof===N)return An(t)}throw Error(s(438,String(t)))}function Zu(t){var n=null,a=le.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=le.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Tl(),le.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=Y;return n.index++,a}function na(t,n){return typeof n=="function"?n(t):n}function Rl(t){var n=un();return Ku(n,Ge,t)}function Ku(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=t.baseQueue,f=r.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,r.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var R=_=null,B=null,et=n,ht=!1;do{var vt=et.lane&-536870913;if(vt!==et.lane?(xe&vt)===vt:(ea&vt)===vt){var st=et.revertLane;if(st===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),vt===Qs&&(ht=!0);else if((ea&st)===st){et=et.next,st===Qs&&(ht=!0);continue}else vt={lane:0,revertLane:et.revertLane,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},B===null?(R=B=vt,_=f):B=B.next=vt,le.lanes|=st,Ga|=st;vt=et.action,Es&&a(f,vt),f=et.hasEagerState?et.eagerState:a(f,vt)}else st={lane:vt,revertLane:et.revertLane,gesture:et.gesture,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},B===null?(R=B=st,_=f):B=B.next=st,le.lanes|=vt,Ga|=vt;et=et.next}while(et!==null&&et!==n);if(B===null?_=f:B.next=R,!$n(f,t.memoizedState)&&(pn=!0,ht&&(a=Js,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=B,r.lastRenderedState=f}return u===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Qu(t){var n=un(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=t(f,_.action),_=_.next;while(_!==u);$n(f,n.memoizedState)||(pn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function fm(t,n,a){var r=le,u=un(),f=ye;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!$n((Ge||u).memoizedState,a);if(_&&(u.memoizedState=a,pn=!0),u=u.queue,tf(pm.bind(null,r,u,t),[t]),u.getSnapshot!==n||_||hn!==null&&hn.memoizedState.tag&1){if(r.flags|=2048,ar(9,{destroy:void 0},hm.bind(null,r,u,a,n),null),qe===null)throw Error(s(349));f||(ea&127)!==0||dm(r,n,a)}return a}function dm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=le.updateQueue,n===null?(n=Tl(),le.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function hm(t,n,a,r){n.value=a,n.getSnapshot=r,mm(n)&&gm(t)}function pm(t,n,a){return a(function(){mm(n)&&gm(t)})}function mm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!$n(t,a)}catch{return!0}}function gm(t){var n=ps(t,2);n!==null&&qn(n,t,2)}function Ju(t){var n=zn();if(typeof t=="function"){var a=t;if(t=a(),Es){Ot(!0);try{a()}finally{Ot(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:t},n}function _m(t,n,a,r){return t.baseState=a,Ku(t,Ge,typeof r=="function"?r:na)}function Lx(t,n,a,r,u){if(Dl(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};O.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,vm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function vm(t,n){var a=n.action,r=n.payload,u=t.state;if(n.isTransition){var f=O.T,_={};O.T=_;try{var R=a(u,r),B=O.S;B!==null&&B(_,R),xm(t,n,R)}catch(et){$u(t,n,et)}finally{f!==null&&_.types!==null&&(f.types=_.types),O.T=f}}else try{f=a(u,r),xm(t,n,f)}catch(et){$u(t,n,et)}}function xm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Sm(t,n,r)},function(r){return $u(t,n,r)}):Sm(t,n,a)}function Sm(t,n,a){n.status="fulfilled",n.value=a,ym(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,vm(t,a)))}function $u(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,ym(n),n=n.next;while(n!==r)}t.action=null}function ym(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Mm(t,n){return n}function Em(t,n){if(ye){var a=qe.formState;if(a!==null){t:{var r=le;if(ye){if(Ye){e:{for(var u=Ye,f=gi;u.nodeType!==8;){if(!f){u=null;break e}if(u=vi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ye=vi(u.nextSibling),r=u.data==="F!";break t}}Na(r)}r=!1}r&&(n=a[0])}}return a=zn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mm,lastRenderedState:n},a.queue=r,a=Vm.bind(null,le,r),r.dispatch=a,r=Ju(!1),f=rf.bind(null,le,!1,r.queue),r=zn(),u={state:n,dispatch:null,action:t,pending:null},r.queue=u,a=Lx.bind(null,le,u,f,a),u.dispatch=a,r.memoizedState=t,[n,a,!1]}function bm(t){var n=un();return Tm(n,Ge,t)}function Tm(t,n,a){if(n=Ku(t,n,Mm)[0],t=Rl(na)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=ho(n)}catch(_){throw _===$s?_l:_}else r=n;n=un();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(le.flags|=2048,ar(9,{destroy:void 0},Ox.bind(null,u,a),null)),[r,f,t]}function Ox(t,n){t.action=n}function Am(t){var n=un(),a=Ge;if(a!==null)return Tm(n,a,t);un(),n=n.memoizedState,a=un();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function ar(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=le.updateQueue,n===null&&(n=Tl(),le.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function Rm(){return un().memoizedState}function Cl(t,n,a,r){var u=zn();le.flags|=t,u.memoizedState=ar(1|n,{destroy:void 0},a,r===void 0?null:r)}function wl(t,n,a,r){var u=un();r=r===void 0?null:r;var f=u.memoizedState.inst;Ge!==null&&r!==null&&Xu(r,Ge.memoizedState.deps)?u.memoizedState=ar(n,f,a,r):(le.flags|=t,u.memoizedState=ar(1|n,f,a,r))}function Cm(t,n){Cl(8390656,8,t,n)}function tf(t,n){wl(2048,8,t,n)}function Px(t){le.flags|=4;var n=le.updateQueue;if(n===null)n=Tl(),le.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function wm(t){var n=un().memoizedState;return Px({ref:n,nextImpl:t}),function(){if((De&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Dm(t,n){return wl(4,2,t,n)}function Um(t,n){return wl(4,4,t,n)}function Nm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Lm(t,n,a){a=a!=null?a.concat([t]):null,wl(4,4,Nm.bind(null,n,t),a)}function ef(){}function Om(t,n){var a=un();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Xu(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function Pm(t,n){var a=un();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Xu(n,r[1]))return r[0];if(r=t(),Es){Ot(!0);try{t()}finally{Ot(!1)}}return a.memoizedState=[r,n],r}function nf(t,n,a){return a===void 0||(ea&1073741824)!==0&&(xe&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=I0(),le.lanes|=t,Ga|=t,a)}function Im(t,n,a,r){return $n(a,n)?a:er.current!==null?(t=nf(t,a,r),$n(t,n)||(pn=!0),t):(ea&42)===0||(ea&1073741824)!==0&&(xe&261930)===0?(pn=!0,t.memoizedState=a):(t=I0(),le.lanes|=t,Ga|=t,n)}function Fm(t,n,a,r,u){var f=z.p;z.p=f!==0&&8>f?f:8;var _=O.T,R={};O.T=R,rf(t,!1,n,a);try{var B=u(),et=O.S;if(et!==null&&et(R,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ht=Dx(B,r);po(t,n,ht,si(t))}else po(t,n,r,si(t))}catch(vt){po(t,n,{then:function(){},status:"rejected",reason:vt},si())}finally{z.p=f,_!==null&&R.types!==null&&(_.types=R.types),O.T=_}}function Ix(){}function af(t,n,a,r){if(t.tag!==5)throw Error(s(476));var u=zm(t).queue;Fm(t,u,n,ot,a===null?Ix:function(){return Bm(t),a(r)})}function zm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ot,baseState:ot,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:ot},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Bm(t){var n=zm(t);n.next===null&&(n=t.alternate.memoizedState),po(t,n.next.queue,{},si())}function sf(){return An(Uo)}function Hm(){return un().memoizedState}function Gm(){return un().memoizedState}function Fx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=si();t=Pa(a);var r=Ia(n,t,a);r!==null&&(qn(r,n,a),lo(r,n,a)),n={cache:Lu()},t.payload=n;return}n=n.return}}function zx(t,n,a){var r=si();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Dl(t)?km(n,a):(a=Mu(t,n,a,r),a!==null&&(qn(a,t,r),Xm(a,n,r)))}function Vm(t,n,a){var r=si();po(t,n,a,r)}function po(t,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Dl(t))km(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,R=f(_,a);if(u.hasEagerState=!0,u.eagerState=R,$n(R,_))return ul(t,n,u,0),qe===null&&cl(),!1}catch{}if(a=Mu(t,n,u,r),a!==null)return qn(a,t,r),Xm(a,n,r),!0}return!1}function rf(t,n,a,r){if(r={lane:2,revertLane:zf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Dl(t)){if(n)throw Error(s(479))}else n=Mu(t,a,r,2),n!==null&&qn(n,t,2)}function Dl(t){var n=t.alternate;return t===le||n!==null&&n===le}function km(t,n){nr=El=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Xm(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,fi(t,a)}}var mo={readContext:An,use:Al,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn};mo.useEffectEvent=nn;var Wm={readContext:An,use:Al,useCallback:function(t,n){return zn().memoizedState=[t,n===void 0?null:n],t},useContext:An,useEffect:Cm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Cl(4194308,4,Nm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Cl(4194308,4,t,n)},useInsertionEffect:function(t,n){Cl(4,2,t,n)},useMemo:function(t,n){var a=zn();n=n===void 0?null:n;var r=t();if(Es){Ot(!0);try{t()}finally{Ot(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=zn();if(a!==void 0){var u=a(n);if(Es){Ot(!0);try{a(n)}finally{Ot(!1)}}}else u=n;return r.memoizedState=r.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},r.queue=t,t=t.dispatch=zx.bind(null,le,t),[r.memoizedState,t]},useRef:function(t){var n=zn();return t={current:t},n.memoizedState=t},useState:function(t){t=Ju(t);var n=t.queue,a=Vm.bind(null,le,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:ef,useDeferredValue:function(t,n){var a=zn();return nf(a,t,n)},useTransition:function(){var t=Ju(!1);return t=Fm.bind(null,le,t.queue,!0,!1),zn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=le,u=zn();if(ye){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),qe===null)throw Error(s(349));(xe&127)!==0||dm(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Cm(pm.bind(null,r,f,t),[t]),r.flags|=2048,ar(9,{destroy:void 0},hm.bind(null,r,f,a,n),null),a},useId:function(){var t=zn(),n=qe.identifierPrefix;if(ye){var a=Oi,r=Li;a=(r&~(1<<32-Pt(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=bl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Ux++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:sf,useFormState:Em,useActionState:Em,useOptimistic:function(t){var n=zn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=rf.bind(null,le,!0,a),a.dispatch=n,[t,n]},useMemoCache:Zu,useCacheRefresh:function(){return zn().memoizedState=Fx.bind(null,le)},useEffectEvent:function(t){var n=zn(),a={impl:t};return n.memoizedState=a,function(){if((De&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},of={readContext:An,use:Al,useCallback:Om,useContext:An,useEffect:tf,useImperativeHandle:Lm,useInsertionEffect:Dm,useLayoutEffect:Um,useMemo:Pm,useReducer:Rl,useRef:Rm,useState:function(){return Rl(na)},useDebugValue:ef,useDeferredValue:function(t,n){var a=un();return Im(a,Ge.memoizedState,t,n)},useTransition:function(){var t=Rl(na)[0],n=un().memoizedState;return[typeof t=="boolean"?t:ho(t),n]},useSyncExternalStore:fm,useId:Hm,useHostTransitionStatus:sf,useFormState:bm,useActionState:bm,useOptimistic:function(t,n){var a=un();return _m(a,Ge,t,n)},useMemoCache:Zu,useCacheRefresh:Gm};of.useEffectEvent=wm;var qm={readContext:An,use:Al,useCallback:Om,useContext:An,useEffect:tf,useImperativeHandle:Lm,useInsertionEffect:Dm,useLayoutEffect:Um,useMemo:Pm,useReducer:Qu,useRef:Rm,useState:function(){return Qu(na)},useDebugValue:ef,useDeferredValue:function(t,n){var a=un();return Ge===null?nf(a,t,n):Im(a,Ge.memoizedState,t,n)},useTransition:function(){var t=Qu(na)[0],n=un().memoizedState;return[typeof t=="boolean"?t:ho(t),n]},useSyncExternalStore:fm,useId:Hm,useHostTransitionStatus:sf,useFormState:Am,useActionState:Am,useOptimistic:function(t,n){var a=un();return Ge!==null?_m(a,Ge,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Zu,useCacheRefresh:Gm};qm.useEffectEvent=wm;function lf(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var cf={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=si(),u=Pa(r);u.payload=n,a!=null&&(u.callback=a),n=Ia(t,u,r),n!==null&&(qn(n,t,r),lo(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=si(),u=Pa(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ia(t,u,r),n!==null&&(qn(n,t,r),lo(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=si(),r=Pa(a);r.tag=2,n!=null&&(r.callback=n),n=Ia(t,r,a),n!==null&&(qn(n,t,a),lo(n,t,a))}};function jm(t,n,a,r,u,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,_):n.prototype&&n.prototype.isPureReactComponent?!to(a,r)||!to(u,f):!0}function Ym(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&cf.enqueueReplaceState(n,n.state,null)}function bs(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Zm(t){ll(t)}function Km(t){console.error(t)}function Qm(t){ll(t)}function Ul(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Jm(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function uf(t,n,a){return a=Pa(a),a.tag=3,a.payload={element:null},a.callback=function(){Ul(t,n)},a}function $m(t){return t=Pa(t),t.tag=3,t}function t0(t,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;t.payload=function(){return u(f)},t.callback=function(){Jm(n,a,r)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){Jm(n,a,r),typeof u!="function"&&(Va===null?Va=new Set([this]):Va.add(this));var R=r.stack;this.componentDidCatch(r.value,{componentStack:R!==null?R:""})})}function Bx(t,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Ks(n,a,u,!0),a=ei.current,a!==null){switch(a.tag){case 31:case 13:return _i===null?kl():a.alternate===null&&an===0&&(an=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===vl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Pf(t,r,u)),!1;case 22:return a.flags|=65536,r===vl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Pf(t,r,u)),!1}throw Error(s(435,a.tag))}return Pf(t,r,u),kl(),!1}if(ye)return n=ei.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==Cu&&(t=Error(s(422),{cause:r}),io(hi(t,a)))):(r!==Cu&&(n=Error(s(423),{cause:r}),io(hi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,r=hi(r,a),u=uf(t.stateNode,r,u),Bu(t,u),an!==4&&(an=2)),!1;var f=Error(s(520),{cause:r});if(f=hi(f,a),Eo===null?Eo=[f]:Eo.push(f),an!==4&&(an=2),n===null)return!0;r=hi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=uf(a.stateNode,r,t),Bu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Va===null||!Va.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=$m(u),t0(u,t,a,r),Bu(a,u),!1}a=a.return}while(a!==null);return!1}var ff=Error(s(461)),pn=!1;function Rn(t,n,a,r){n.child=t===null?am(n,null,a,r):Ms(n,t.child,a,r)}function e0(t,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var _={};for(var R in r)R!=="ref"&&(_[R]=r[R])}else _=r;return vs(n),r=Wu(t,n,a,_,f,u),R=qu(),t!==null&&!pn?(ju(t,n,u),ia(t,n,u)):(ye&&R&&Au(n),n.flags|=1,Rn(t,n,r,u),n.child)}function n0(t,n,a,r,u){if(t===null){var f=a.type;return typeof f=="function"&&!Eu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,i0(t,n,f,r,u)):(t=dl(a.type,null,r,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!xf(t,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:to,a(_,r)&&t.ref===n.ref)return ia(t,n,u)}return n.flags|=1,t=Qi(f,r),t.ref=n.ref,t.return=n,n.child=t}function i0(t,n,a,r,u){if(t!==null){var f=t.memoizedProps;if(to(f,r)&&t.ref===n.ref)if(pn=!1,n.pendingProps=r=f,xf(t,u))(t.flags&131072)!==0&&(pn=!0);else return n.lanes=t.lanes,ia(t,n,u)}return df(t,n,a,r,u)}function a0(t,n,a,r){var u=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return s0(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&gl(n,f!==null?f.cachePool:null),f!==null?om(n,f):Gu(),lm(n);else return r=n.lanes=536870912,s0(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(gl(n,f.cachePool),om(n,f),za(),n.memoizedState=null):(t!==null&&gl(n,null),Gu(),za());return Rn(t,n,u,a),n.child}function go(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function s0(t,n,a,r,u){var f=Pu();return f=f===null?null:{parent:dn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&gl(n,null),Gu(),lm(n),t!==null&&Ks(t,n,r,!0),n.childLanes=u,null}function Nl(t,n){return n=Ol({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function r0(t,n,a){return Ms(n,t.child,null,a),t=Nl(n,n.pendingProps),t.flags|=2,ni(n),n.memoizedState=null,t}function Hx(t,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(ye){if(r.mode==="hidden")return t=Nl(n,r),n.lanes=536870912,go(null,t);if(ku(n),(t=Ye)?(t=vg(t,gi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Da!==null?{id:Li,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},a=kp(t),a.return=n,n.child=a,Tn=n,Ye=null)):t=null,t===null)throw Na(n);return n.lanes=536870912,null}return Nl(n,r)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(ku(n),u)if(n.flags&256)n.flags&=-257,n=r0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(pn||Ks(t,n,a,!1),u=(a&t.childLanes)!==0,pn||u){if(r=qe,r!==null&&(_=Kn(r,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,ps(t,_),qn(r,t,_),ff;kl(),n=r0(t,n,a)}else t=f.treeContext,Ye=vi(_.nextSibling),Tn=n,ye=!0,Ua=null,gi=!1,t!==null&&qp(n,t),n=Nl(n,r),n.flags|=4096;return n}return t=Qi(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Ll(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function df(t,n,a,r,u){return vs(n),a=Wu(t,n,a,r,void 0,u),r=qu(),t!==null&&!pn?(ju(t,n,u),ia(t,n,u)):(ye&&r&&Au(n),n.flags|=1,Rn(t,n,a,u),n.child)}function o0(t,n,a,r,u,f){return vs(n),n.updateQueue=null,a=um(n,r,a,u),cm(t),r=qu(),t!==null&&!pn?(ju(t,n,f),ia(t,n,f)):(ye&&r&&Au(n),n.flags|=1,Rn(t,n,a,f),n.child)}function l0(t,n,a,r,u){if(vs(n),n.stateNode===null){var f=qs,_=a.contextType;typeof _=="object"&&_!==null&&(f=An(_)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=cf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Fu(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?An(_):qs,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(lf(n,a,_,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&cf.enqueueReplaceState(f,f.state,null),uo(n,r,f,u),co(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var R=n.memoizedProps,B=bs(a,R);f.props=B;var et=f.context,ht=a.contextType;_=qs,typeof ht=="object"&&ht!==null&&(_=An(ht));var vt=a.getDerivedStateFromProps;ht=typeof vt=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,ht||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||et!==_)&&Ym(n,f,r,_),Oa=!1;var st=n.memoizedState;f.state=st,uo(n,r,f,u),co(),et=n.memoizedState,R||st!==et||Oa?(typeof vt=="function"&&(lf(n,a,vt,r),et=n.memoizedState),(B=Oa||jm(n,a,B,r,st,et,_))?(ht||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=et),f.props=r,f.state=et,f.context=_,r=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,zu(t,n),_=n.memoizedProps,ht=bs(a,_),f.props=ht,vt=n.pendingProps,st=f.context,et=a.contextType,B=qs,typeof et=="object"&&et!==null&&(B=An(et)),R=a.getDerivedStateFromProps,(et=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==vt||st!==B)&&Ym(n,f,r,B),Oa=!1,st=n.memoizedState,f.state=st,uo(n,r,f,u),co();var ct=n.memoizedState;_!==vt||st!==ct||Oa||t!==null&&t.dependencies!==null&&pl(t.dependencies)?(typeof R=="function"&&(lf(n,a,R,r),ct=n.memoizedState),(ht=Oa||jm(n,a,ht,r,st,ct,B)||t!==null&&t.dependencies!==null&&pl(t.dependencies))?(et||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ct,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ct,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&st===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&st===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ct),f.props=r,f.state=ct,f.context=B,r=ht):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&st===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&st===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,Ll(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=Ms(n,t.child,null,u),n.child=Ms(n,null,a,u)):Rn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=ia(t,n,u),t}function c0(t,n,a,r){return gs(),n.flags|=256,Rn(t,n,a,r),n.child}var hf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function pf(t){return{baseLanes:t,cachePool:Jp()}}function mf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ai),t}function u0(t,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(cn.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(ye){if(u?Fa(n):za(),(t=Ye)?(t=vg(t,gi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Da!==null?{id:Li,overflow:Oi}:null,retryLane:536870912,hydrationErrors:null},a=kp(t),a.return=n,n.child=a,Tn=n,Ye=null)):t=null,t===null)throw Na(n);return Qf(t)?n.lanes=32:n.lanes=536870912,null}var R=r.children;return r=r.fallback,u?(za(),u=n.mode,R=Ol({mode:"hidden",children:R},u),r=ms(r,u,a,null),R.return=n,r.return=n,R.sibling=r,n.child=R,r=n.child,r.memoizedState=pf(a),r.childLanes=mf(t,_,a),n.memoizedState=hf,go(null,r)):(Fa(n),gf(n,R))}var B=t.memoizedState;if(B!==null&&(R=B.dehydrated,R!==null)){if(f)n.flags&256?(Fa(n),n.flags&=-257,n=_f(t,n,a)):n.memoizedState!==null?(za(),n.child=t.child,n.flags|=128,n=null):(za(),R=r.fallback,u=n.mode,r=Ol({mode:"visible",children:r.children},u),R=ms(R,u,a,null),R.flags|=2,r.return=n,R.return=n,r.sibling=R,n.child=r,Ms(n,t.child,null,a),r=n.child,r.memoizedState=pf(a),r.childLanes=mf(t,_,a),n.memoizedState=hf,n=go(null,r));else if(Fa(n),Qf(R)){if(_=R.nextSibling&&R.nextSibling.dataset,_)var et=_.dgst;_=et,r=Error(s(419)),r.stack="",r.digest=_,io({value:r,source:null,stack:null}),n=_f(t,n,a)}else if(pn||Ks(t,n,a,!1),_=(a&t.childLanes)!==0,pn||_){if(_=qe,_!==null&&(r=Kn(_,a),r!==0&&r!==B.retryLane))throw B.retryLane=r,ps(t,r),qn(_,t,r),ff;Kf(R)||kl(),n=_f(t,n,a)}else Kf(R)?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,Ye=vi(R.nextSibling),Tn=n,ye=!0,Ua=null,gi=!1,t!==null&&qp(n,t),n=gf(n,r.children),n.flags|=4096);return n}return u?(za(),R=r.fallback,u=n.mode,B=t.child,et=B.sibling,r=Qi(B,{mode:"hidden",children:r.children}),r.subtreeFlags=B.subtreeFlags&65011712,et!==null?R=Qi(et,R):(R=ms(R,u,a,null),R.flags|=2),R.return=n,r.return=n,r.sibling=R,n.child=r,go(null,r),r=n.child,R=t.child.memoizedState,R===null?R=pf(a):(u=R.cachePool,u!==null?(B=dn._currentValue,u=u.parent!==B?{parent:B,pool:B}:u):u=Jp(),R={baseLanes:R.baseLanes|a,cachePool:u}),r.memoizedState=R,r.childLanes=mf(t,_,a),n.memoizedState=hf,go(t.child,r)):(Fa(n),a=t.child,t=a.sibling,a=Qi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function gf(t,n){return n=Ol({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ol(t,n){return t=ti(22,t,null,n),t.lanes=0,t}function _f(t,n,a){return Ms(n,t.child,null,a),t=gf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function f0(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),Uu(t.return,n,a)}function vf(t,n,a,r,u,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=r,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function d0(t,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var _=cn.current,R=(_&2)!==0;if(R?(_=_&1|2,n.flags|=128):_&=1,xt(cn,_),Rn(t,n,r,a),r=ye?no:0,!R&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&f0(t,a,n);else if(t.tag===19)f0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Ml(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),vf(n,!1,u,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Ml(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}vf(n,!0,a,null,f,r);break;case"together":vf(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function ia(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ga|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Ks(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Qi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Qi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function xf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&pl(t)))}function Gx(t,n,a){switch(n.tag){case 3:bt(n,n.stateNode.containerInfo),La(n,dn,t.memoizedState.cache),gs();break;case 27:case 5:te(n);break;case 4:bt(n,n.stateNode.containerInfo);break;case 10:La(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,ku(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Fa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?u0(t,n,a):(Fa(n),t=ia(t,n,a),t!==null?t.sibling:null);Fa(n);break;case 19:var u=(t.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Ks(t,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return d0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),xt(cn,cn.current),r)break;return null;case 22:return n.lanes=0,a0(t,n,a,n.pendingProps);case 24:La(n,dn,t.memoizedState.cache)}return ia(t,n,a)}function h0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)pn=!0;else{if(!xf(t,a)&&(n.flags&128)===0)return pn=!1,Gx(t,n,a);pn=(t.flags&131072)!==0}else pn=!1,ye&&(n.flags&1048576)!==0&&Wp(n,no,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=Ss(n.elementType),n.type=t,typeof t=="function")Eu(t)?(r=bs(t,r),n.tag=1,n=l0(null,n,t,r,a)):(n.tag=0,n=df(null,n,t,r,a));else{if(t!=null){var u=t.$$typeof;if(u===P){n.tag=11,n=e0(null,n,t,r,a);break t}else if(u===F){n.tag=14,n=n0(null,n,t,r,a);break t}}throw n=ut(t)||t,Error(s(306,n,""))}}return n;case 0:return df(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=bs(r,n.pendingProps),l0(t,n,r,u,a);case 3:t:{if(bt(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,zu(t,n),uo(n,r,null,a);var _=n.memoizedState;if(r=_.cache,La(n,dn,r),r!==f.cache&&Nu(n,[dn],a,!0),co(),r=_.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=c0(t,n,r,a);break t}else if(r!==u){u=hi(Error(s(424)),n),io(u),n=c0(t,n,r,a);break t}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Ye=vi(t.firstChild),Tn=n,ye=!0,Ua=null,gi=!0,a=am(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(gs(),r===u){n=ia(t,n,a);break t}Rn(t,n,r,a)}n=n.child}return n;case 26:return Ll(t,n),t===null?(a=bg(n.type,null,n.pendingProps,null))?n.memoizedState=a:ye||(a=n.type,t=n.pendingProps,r=Kl(rt.current).createElement(a),r[ln]=n,r[bn]=t,Cn(r,a,t),fn(r),n.stateNode=r):n.memoizedState=bg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return te(n),t===null&&ye&&(r=n.stateNode=yg(n.type,n.pendingProps,rt.current),Tn=n,gi=!0,u=Ye,qa(n.type)?(Jf=u,Ye=vi(r.firstChild)):Ye=u),Rn(t,n,n.pendingProps.children,a),Ll(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&ye&&((u=r=Ye)&&(r=_S(r,n.type,n.pendingProps,gi),r!==null?(n.stateNode=r,Tn=n,Ye=vi(r.firstChild),gi=!1,u=!0):u=!1),u||Na(n)),te(n),u=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,r=f.children,jf(u,f)?r=null:_!==null&&jf(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=Wu(t,n,Nx,null,null,a),Uo._currentValue=u),Ll(t,n),Rn(t,n,r,a),n.child;case 6:return t===null&&ye&&((t=a=Ye)&&(a=vS(a,n.pendingProps,gi),a!==null?(n.stateNode=a,Tn=n,Ye=null,t=!0):t=!1),t||Na(n)),null;case 13:return u0(t,n,a);case 4:return bt(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=Ms(n,null,r,a):Rn(t,n,r,a),n.child;case 11:return e0(t,n,n.type,n.pendingProps,a);case 7:return Rn(t,n,n.pendingProps,a),n.child;case 8:return Rn(t,n,n.pendingProps.children,a),n.child;case 12:return Rn(t,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,La(n,n.type,r.value),Rn(t,n,r.children,a),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,vs(n),u=An(u),r=r(u),n.flags|=1,Rn(t,n,r,a),n.child;case 14:return n0(t,n,n.type,n.pendingProps,a);case 15:return i0(t,n,n.type,n.pendingProps,a);case 19:return d0(t,n,a);case 31:return Hx(t,n,a);case 22:return a0(t,n,a,n.pendingProps);case 24:return vs(n),r=An(dn),t===null?(u=Pu(),u===null&&(u=qe,f=Lu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},Fu(n),La(n,dn,u)):((t.lanes&a)!==0&&(zu(t,n),uo(n,null,null,a),co()),u=t.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),La(n,dn,r)):(r=f.cache,La(n,dn,r),r!==u.cache&&Nu(n,[dn],a,!0))),Rn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function aa(t){t.flags|=4}function Sf(t,n,a,r,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(H0())t.flags|=8192;else throw ys=vl,Iu}else t.flags&=-16777217}function p0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!wg(n))if(H0())t.flags|=8192;else throw ys=vl,Iu}function Pl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?yt():536870912,t.lanes|=n,lr|=n)}function _o(t,n){if(!ye)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ze(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function Vx(t,n,a){var r=n.pendingProps;switch(Ru(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return Ze(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),ta(dn),Ht(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Zs(n)?aa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,wu())),Ze(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(aa(n),f!==null?(Ze(n),p0(n,f)):(Ze(n),Sf(n,u,null,r,a))):f?f!==t.memoizedState?(aa(n),Ze(n),p0(n,f)):(Ze(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&aa(n),Ze(n),Sf(n,u,t,r,a)),null;case 27:if(Qt(n),a=rt.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&aa(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ze(n),null}t=At.current,Zs(n)?jp(n):(t=yg(u,r,a),n.stateNode=t,aa(n))}return Ze(n),null;case 5:if(Qt(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&aa(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ze(n),null}if(f=At.current,Zs(n))jp(n);else{var _=Kl(rt.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?_.createElement("select",{is:r.is}):_.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?_.createElement(u,{is:r.is}):_.createElement(u)}}f[ln]=n,f[bn]=r;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;t:switch(Cn(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&aa(n)}}return Ze(n),Sf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&aa(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=rt.current,Zs(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,u=Tn,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}t[ln]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||ug(t.nodeValue,a)),t||Na(n,!0)}else t=Kl(t).createTextNode(r),t[ln]=n,n.stateNode=t}return Ze(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=Zs(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[ln]=n}else gs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),t=!1}else a=wu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ni(n),n):(ni(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ze(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Zs(n),r!==null&&r.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[ln]=n}else gs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),u=!1}else u=wu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ni(n),n):(ni(n),null)}return ni(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Pl(n,n.updateQueue),Ze(n),null);case 4:return Ht(),t===null&&Vf(n.stateNode.containerInfo),Ze(n),null;case 10:return ta(n.type),Ze(n),null;case 19:if(J(cn),r=n.memoizedState,r===null)return Ze(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)_o(r,!1);else{if(an!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Ml(t),f!==null){for(n.flags|=128,_o(r,!1),t=f.updateQueue,n.updateQueue=t,Pl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Vp(a,t),a=a.sibling;return xt(cn,cn.current&1|2),ye&&Ji(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&Rt()>Hl&&(n.flags|=128,u=!0,_o(r,!1),n.lanes=4194304)}else{if(!u)if(t=Ml(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Pl(n,t),_o(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!ye)return Ze(n),null}else 2*Rt()-r.renderingStartTime>Hl&&a!==536870912&&(n.flags|=128,u=!0,_o(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=Rt(),t.sibling=null,a=cn.current,xt(cn,u?a&1|2:a&1),ye&&Ji(n,r.treeForkCount),t):(Ze(n),null);case 22:case 23:return ni(n),Vu(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),a=n.updateQueue,a!==null&&Pl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&J(xs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ta(dn),Ze(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function kx(t,n){switch(Ru(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ta(dn),Ht(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Qt(n),null;case 31:if(n.memoizedState!==null){if(ni(n),n.alternate===null)throw Error(s(340));gs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ni(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));gs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return J(cn),null;case 4:return Ht(),null;case 10:return ta(n.type),null;case 22:case 23:return ni(n),Vu(),t!==null&&J(xs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ta(dn),null;case 25:return null;default:return null}}function m0(t,n){switch(Ru(n),n.tag){case 3:ta(dn),Ht();break;case 26:case 27:case 5:Qt(n);break;case 4:Ht();break;case 31:n.memoizedState!==null&&ni(n);break;case 13:ni(n);break;case 19:J(cn);break;case 10:ta(n.type);break;case 22:case 23:ni(n),Vu(),t!==null&&J(xs);break;case 24:ta(dn)}}function vo(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&t)===t){r=void 0;var f=a.create,_=a.inst;r=f(),_.destroy=r}a=a.next}while(a!==u)}}catch(R){ze(n,n.return,R)}}function Ba(t,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&t)===t){var _=r.inst,R=_.destroy;if(R!==void 0){_.destroy=void 0,u=n;var B=a,et=R;try{et()}catch(ht){ze(u,B,ht)}}}r=r.next}while(r!==f)}}catch(ht){ze(n,n.return,ht)}}function g0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{rm(n,a)}catch(r){ze(t,t.return,r)}}}function _0(t,n,a){a.props=bs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){ze(t,n,r)}}function xo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(u){ze(t,n,u)}}function Pi(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){ze(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){ze(t,n,u)}else a.current=null}function v0(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){ze(t,t.return,u)}}function yf(t,n,a){try{var r=t.stateNode;fS(r,t.type,a,n),r[bn]=n}catch(u){ze(t,t.return,u)}}function x0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&qa(t.type)||t.tag===4}function Mf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||x0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&qa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ef(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Zi));else if(r!==4&&(r===27&&qa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Ef(t,n,a),t=t.sibling;t!==null;)Ef(t,n,a),t=t.sibling}function Il(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(r!==4&&(r===27&&qa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Il(t,n,a),t=t.sibling;t!==null;)Il(t,n,a),t=t.sibling}function S0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Cn(n,r,a),n[ln]=t,n[bn]=a}catch(f){ze(t,t.return,f)}}var sa=!1,mn=!1,bf=!1,y0=typeof WeakSet=="function"?WeakSet:Set,yn=null;function Xx(t,n){if(t=t.containerInfo,Wf=ic,t=Lp(t),gu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var u=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var _=0,R=-1,B=-1,et=0,ht=0,vt=t,st=null;e:for(;;){for(var ct;vt!==a||u!==0&&vt.nodeType!==3||(R=_+u),vt!==f||r!==0&&vt.nodeType!==3||(B=_+r),vt.nodeType===3&&(_+=vt.nodeValue.length),(ct=vt.firstChild)!==null;)st=vt,vt=ct;for(;;){if(vt===t)break e;if(st===a&&++et===u&&(R=_),st===f&&++ht===r&&(B=_),(ct=vt.nextSibling)!==null)break;vt=st,st=vt.parentNode}vt=ct}a=R===-1||B===-1?null:{start:R,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(qf={focusedElem:t,selectionRange:a},ic=!1,yn=n;yn!==null;)if(n=yn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,yn=t;else for(;yn!==null;){switch(n=yn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Wt=bs(a.type,u);t=r.getSnapshotBeforeUpdate(Wt,f),r.__reactInternalSnapshotBeforeUpdate=t}catch(Jt){ze(a,a.return,Jt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Zf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Zf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,yn=t;break}yn=n.return}}function M0(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:oa(t,a),r&4&&vo(5,a);break;case 1:if(oa(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){ze(a,a.return,_)}else{var u=bs(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){ze(a,a.return,_)}}r&64&&g0(a),r&512&&xo(a,a.return);break;case 3:if(oa(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{rm(t,n)}catch(_){ze(a,a.return,_)}}break;case 27:n===null&&r&4&&S0(a);case 26:case 5:oa(t,a),n===null&&r&4&&v0(a),r&512&&xo(a,a.return);break;case 12:oa(t,a);break;case 31:oa(t,a),r&4&&T0(t,a);break;case 13:oa(t,a),r&4&&A0(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=$x.bind(null,a),xS(t,a))));break;case 22:if(r=a.memoizedState!==null||sa,!r){n=n!==null&&n.memoizedState!==null||mn,u=sa;var f=mn;sa=r,(mn=n)&&!f?la(t,a,(a.subtreeFlags&8772)!==0):oa(t,a),sa=u,mn=f}break;case 30:break;default:oa(t,a)}}function E0(t){var n=t.alternate;n!==null&&(t.alternate=null,E0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&qr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var $e=null,Vn=!1;function ra(t,n,a){for(a=a.child;a!==null;)b0(t,n,a),a=a.sibling}function b0(t,n,a){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(ft,a)}catch{}switch(a.tag){case 26:mn||Pi(a,n),ra(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:mn||Pi(a,n);var r=$e,u=Vn;qa(a.type)&&($e=a.stateNode,Vn=!1),ra(t,n,a),Co(a.stateNode),$e=r,Vn=u;break;case 5:mn||Pi(a,n);case 6:if(r=$e,u=Vn,$e=null,ra(t,n,a),$e=r,Vn=u,$e!==null)if(Vn)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(a.stateNode)}catch(f){ze(a,n,f)}else try{$e.removeChild(a.stateNode)}catch(f){ze(a,n,f)}break;case 18:$e!==null&&(Vn?(t=$e,gg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),gr(t)):gg($e,a.stateNode));break;case 4:r=$e,u=Vn,$e=a.stateNode.containerInfo,Vn=!0,ra(t,n,a),$e=r,Vn=u;break;case 0:case 11:case 14:case 15:Ba(2,a,n),mn||Ba(4,a,n),ra(t,n,a);break;case 1:mn||(Pi(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&_0(a,n,r)),ra(t,n,a);break;case 21:ra(t,n,a);break;case 22:mn=(r=mn)||a.memoizedState!==null,ra(t,n,a),mn=r;break;default:ra(t,n,a)}}function T0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{gr(t)}catch(a){ze(n,n.return,a)}}}function A0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{gr(t)}catch(a){ze(n,n.return,a)}}function Wx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new y0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new y0),n;default:throw Error(s(435,t.tag))}}function Fl(t,n){var a=Wx(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=tS.bind(null,t,r);r.then(u,u)}})}function kn(t,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r],f=t,_=n,R=_;t:for(;R!==null;){switch(R.tag){case 27:if(qa(R.type)){$e=R.stateNode,Vn=!1;break t}break;case 5:$e=R.stateNode,Vn=!1;break t;case 3:case 4:$e=R.stateNode.containerInfo,Vn=!0;break t}R=R.return}if($e===null)throw Error(s(160));b0(f,_,u),$e=null,Vn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)R0(n,t),n=n.sibling}var Ai=null;function R0(t,n){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:kn(n,t),Xn(t),r&4&&(Ba(3,t,t.return),vo(3,t),Ba(5,t,t.return));break;case 1:kn(n,t),Xn(t),r&512&&(mn||a===null||Pi(a,a.return)),r&64&&sa&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var u=Ai;if(kn(n,t),Xn(t),r&512&&(mn||a===null||Pi(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){t:{r=t.type,a=t.memoizedProps,u=u.ownerDocument||u;e:switch(r){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ba]||f[ln]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(r),u.head.insertBefore(f,u.querySelector("head > title"))),Cn(f,r,a),f[ln]=t,fn(f),r=f;break t;case"link":var _=Rg("link","href",u).get(r+(a.href||""));if(_){for(var R=0;R<_.length;R++)if(f=_[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(R,1);break e}}f=u.createElement(r),Cn(f,r,a),u.head.appendChild(f);break;case"meta":if(_=Rg("meta","content",u).get(r+(a.content||""))){for(R=0;R<_.length;R++)if(f=_[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(R,1);break e}}f=u.createElement(r),Cn(f,r,a),u.head.appendChild(f);break;default:throw Error(s(468,r))}f[ln]=t,fn(f),r=f}t.stateNode=r}else Cg(u,t.type,t.stateNode);else t.stateNode=Ag(u,r,t.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?Cg(u,t.type,t.stateNode):Ag(u,r,t.memoizedProps)):r===null&&t.stateNode!==null&&yf(t,t.memoizedProps,a.memoizedProps)}break;case 27:kn(n,t),Xn(t),r&512&&(mn||a===null||Pi(a,a.return)),a!==null&&r&4&&yf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(kn(n,t),Xn(t),r&512&&(mn||a===null||Pi(a,a.return)),t.flags&32){u=t.stateNode;try{Jn(u,"")}catch(Wt){ze(t,t.return,Wt)}}r&4&&t.stateNode!=null&&(u=t.memoizedProps,yf(t,u,a!==null?a.memoizedProps:u)),r&1024&&(bf=!0);break;case 6:if(kn(n,t),Xn(t),r&4){if(t.stateNode===null)throw Error(s(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(Wt){ze(t,t.return,Wt)}}break;case 3:if($l=null,u=Ai,Ai=Ql(n.containerInfo),kn(n,t),Ai=u,Xn(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{gr(n.containerInfo)}catch(Wt){ze(t,t.return,Wt)}bf&&(bf=!1,C0(t));break;case 4:r=Ai,Ai=Ql(t.stateNode.containerInfo),kn(n,t),Xn(t),Ai=r;break;case 12:kn(n,t),Xn(t);break;case 31:kn(n,t),Xn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Fl(t,r)));break;case 13:kn(n,t),Xn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Bl=Rt()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Fl(t,r)));break;case 22:u=t.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,et=sa,ht=mn;if(sa=et||u,mn=ht||B,kn(n,t),mn=ht,sa=et,Xn(t),r&8192)t:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||B||sa||mn||Ts(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,u)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{R=B.stateNode;var vt=B.memoizedProps.style,st=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;R.style.display=st==null||typeof st=="boolean"?"":(""+st).trim()}}catch(Wt){ze(B,B.return,Wt)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(Wt){ze(B,B.return,Wt)}}}else if(n.tag===18){if(a===null){B=n;try{var ct=B.stateNode;u?_g(ct,!0):_g(B.stateNode,!1)}catch(Wt){ze(B,B.return,Wt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Fl(t,a))));break;case 19:kn(n,t),Xn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Fl(t,r)));break;case 30:break;case 21:break;default:kn(n,t),Xn(t)}}function Xn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(x0(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Mf(t);Il(t,f,u);break;case 5:var _=a.stateNode;a.flags&32&&(Jn(_,""),a.flags&=-33);var R=Mf(t);Il(t,R,_);break;case 3:case 4:var B=a.stateNode.containerInfo,et=Mf(t);Ef(t,et,B);break;default:throw Error(s(161))}}catch(ht){ze(t,t.return,ht)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function C0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;C0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function oa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)M0(t,n.alternate,n),n=n.sibling}function Ts(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ba(4,n,n.return),Ts(n);break;case 1:Pi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&_0(n,n.return,a),Ts(n);break;case 27:Co(n.stateNode);case 26:case 5:Pi(n,n.return),Ts(n);break;case 22:n.memoizedState===null&&Ts(n);break;case 30:Ts(n);break;default:Ts(n)}t=t.sibling}}function la(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=t,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:la(u,f,a),vo(4,f);break;case 1:if(la(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(et){ze(r,r.return,et)}if(r=f,u=r.updateQueue,u!==null){var R=r.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)sm(B[u],R)}catch(et){ze(r,r.return,et)}}a&&_&64&&g0(f),xo(f,f.return);break;case 27:S0(f);case 26:case 5:la(u,f,a),a&&r===null&&_&4&&v0(f),xo(f,f.return);break;case 12:la(u,f,a);break;case 31:la(u,f,a),a&&_&4&&T0(u,f);break;case 13:la(u,f,a),a&&_&4&&A0(u,f);break;case 22:f.memoizedState===null&&la(u,f,a),xo(f,f.return);break;case 30:break;default:la(u,f,a)}n=n.sibling}}function Tf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&ao(a))}function Af(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ao(t))}function Ri(t,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)w0(t,n,a,r),n=n.sibling}function w0(t,n,a,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ri(t,n,a,r),u&2048&&vo(9,n);break;case 1:Ri(t,n,a,r);break;case 3:Ri(t,n,a,r),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&ao(t)));break;case 12:if(u&2048){Ri(t,n,a,r),t=n.stateNode;try{var f=n.memoizedProps,_=f.id,R=f.onPostCommit;typeof R=="function"&&R(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){ze(n,n.return,B)}}else Ri(t,n,a,r);break;case 31:Ri(t,n,a,r);break;case 13:Ri(t,n,a,r);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?Ri(t,n,a,r):So(t,n):f._visibility&2?Ri(t,n,a,r):(f._visibility|=2,sr(t,n,a,r,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Tf(_,n);break;case 24:Ri(t,n,a,r),u&2048&&Af(n.alternate,n);break;default:Ri(t,n,a,r)}}function sr(t,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,R=a,B=r,et=_.flags;switch(_.tag){case 0:case 11:case 15:sr(f,_,R,B,u),vo(8,_);break;case 23:break;case 22:var ht=_.stateNode;_.memoizedState!==null?ht._visibility&2?sr(f,_,R,B,u):So(f,_):(ht._visibility|=2,sr(f,_,R,B,u)),u&&et&2048&&Tf(_.alternate,_);break;case 24:sr(f,_,R,B,u),u&&et&2048&&Af(_.alternate,_);break;default:sr(f,_,R,B,u)}n=n.sibling}}function So(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,u=r.flags;switch(r.tag){case 22:So(a,r),u&2048&&Tf(r.alternate,r);break;case 24:So(a,r),u&2048&&Af(r.alternate,r);break;default:So(a,r)}n=n.sibling}}var yo=8192;function rr(t,n,a){if(t.subtreeFlags&yo)for(t=t.child;t!==null;)D0(t,n,a),t=t.sibling}function D0(t,n,a){switch(t.tag){case 26:rr(t,n,a),t.flags&yo&&t.memoizedState!==null&&US(a,Ai,t.memoizedState,t.memoizedProps);break;case 5:rr(t,n,a);break;case 3:case 4:var r=Ai;Ai=Ql(t.stateNode.containerInfo),rr(t,n,a),Ai=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=yo,yo=16777216,rr(t,n,a),yo=r):rr(t,n,a));break;default:rr(t,n,a)}}function U0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Mo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];yn=r,L0(r,t)}U0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)N0(t),t=t.sibling}function N0(t){switch(t.tag){case 0:case 11:case 15:Mo(t),t.flags&2048&&Ba(9,t,t.return);break;case 3:Mo(t);break;case 12:Mo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,zl(t)):Mo(t);break;default:Mo(t)}}function zl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];yn=r,L0(r,t)}U0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ba(8,n,n.return),zl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,zl(n));break;default:zl(n)}t=t.sibling}}function L0(t,n){for(;yn!==null;){var a=yn;switch(a.tag){case 0:case 11:case 15:Ba(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ao(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,yn=r;else t:for(a=t;yn!==null;){r=yn;var u=r.sibling,f=r.return;if(E0(r),r===a){yn=null;break t}if(u!==null){u.return=f,yn=u;break t}yn=f}}}var qx={getCacheForType:function(t){var n=An(dn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return An(dn).controller.signal}},jx=typeof WeakMap=="function"?WeakMap:Map,De=0,qe=null,ge=null,xe=0,Fe=0,ii=null,Ha=!1,or=!1,Rf=!1,ca=0,an=0,Ga=0,As=0,Cf=0,ai=0,lr=0,Eo=null,Wn=null,wf=!1,Bl=0,O0=0,Hl=1/0,Gl=null,Va=null,vn=0,ka=null,cr=null,ua=0,Df=0,Uf=null,P0=null,bo=0,Nf=null;function si(){return(De&2)!==0&&xe!==0?xe&-xe:O.T!==null?zf():kr()}function I0(){if(ai===0)if((xe&536870912)===0||ye){var t=pe;pe<<=1,(pe&3932160)===0&&(pe=262144),ai=t}else ai=536870912;return t=ei.current,t!==null&&(t.flags|=32),ai}function qn(t,n,a){(t===qe&&(Fe===2||Fe===9)||t.cancelPendingCommit!==null)&&(ur(t,0),Xa(t,xe,ai,!1)),ee(t,a),((De&2)===0||t!==qe)&&(t===qe&&((De&2)===0&&(As|=a),an===4&&Xa(t,xe,ai,!1)),Ii(t))}function F0(t,n,a){if((De&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||zt(t,n),u=r?Kx(t,n):Of(t,n,!0),f=r;do{if(u===0){or&&!r&&Xa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Yx(a)){u=Of(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var R=t;u=Eo;var B=R.current.memoizedState.isDehydrated;if(B&&(ur(R,_).flags|=256),_=Of(R,_,!1),_!==2){if(Rf&&!B){R.errorRecoveryDisabledLanes|=f,As|=f,u=4;break t}f=Wn,Wn=u,f!==null&&(Wn===null?Wn=f:Wn.push.apply(Wn,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){ur(t,0),Xa(t,n,0,!0);break}t:{switch(r=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Xa(r,n,ai,!Ha);break t;case 2:Wn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Bl+300-Rt(),10<u)){if(Xa(r,n,ai,!Ha),pt(r,0,!0)!==0)break t;ua=n,r.timeoutHandle=pg(z0.bind(null,r,a,Wn,Gl,wf,n,ai,As,lr,Ha,f,"Throttled",-0,0),u);break t}z0(r,a,Wn,Gl,wf,n,ai,As,lr,Ha,f,null,-0,0)}}break}while(!0);Ii(t)}function z0(t,n,a,r,u,f,_,R,B,et,ht,vt,st,ct){if(t.timeoutHandle=-1,vt=n.subtreeFlags,vt&8192||(vt&16785408)===16785408){vt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zi},D0(n,f,vt);var Wt=(f&62914560)===f?Bl-Rt():(f&4194048)===f?O0-Rt():0;if(Wt=NS(vt,Wt),Wt!==null){ua=f,t.cancelPendingCommit=Wt(q0.bind(null,t,n,f,a,r,u,_,R,B,ht,vt,null,st,ct)),Xa(t,f,_,!et);return}}q0(t,n,f,a,r,u,_,R,B)}function Yx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!$n(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Xa(t,n,a,r){n&=~Cf,n&=~As,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var u=n;0<u;){var f=31-Pt(u),_=1<<f;r[f]=-1,u&=~_}a!==0&&we(t,a,n)}function Vl(){return(De&6)===0?(To(0),!1):!0}function Lf(){if(ge!==null){if(Fe===0)var t=ge.return;else t=ge,$i=_s=null,Yu(t),tr=null,ro=0,t=ge;for(;t!==null;)m0(t.alternate,t),t=t.return;ge=null}}function ur(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,pS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ua=0,Lf(),qe=t,ge=a=Qi(t.current,null),xe=n,Fe=0,ii=null,Ha=!1,or=zt(t,n),Rf=!1,lr=ai=Cf=As=Ga=an=0,Wn=Eo=null,wf=!1,(n&8)!==0&&(n|=n&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=n;0<r;){var u=31-Pt(r),f=1<<u;n|=t[u],r&=~f}return ca=n,cl(),a}function B0(t,n){le=null,O.H=mo,n===$s||n===_l?(n=em(),Fe=3):n===Iu?(n=em(),Fe=4):Fe=n===ff?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ii=n,ge===null&&(an=1,Ul(t,hi(n,t.current)))}function H0(){var t=ei.current;return t===null?!0:(xe&4194048)===xe?_i===null:(xe&62914560)===xe||(xe&536870912)!==0?t===_i:!1}function G0(){var t=O.H;return O.H=mo,t===null?mo:t}function V0(){var t=O.A;return O.A=qx,t}function kl(){an=4,Ha||(xe&4194048)!==xe&&ei.current!==null||(or=!0),(Ga&134217727)===0&&(As&134217727)===0||qe===null||Xa(qe,xe,ai,!1)}function Of(t,n,a){var r=De;De|=2;var u=G0(),f=V0();(qe!==t||xe!==n)&&(Gl=null,ur(t,n)),n=!1;var _=an;t:do try{if(Fe!==0&&ge!==null){var R=ge,B=ii;switch(Fe){case 8:Lf(),_=6;break t;case 3:case 2:case 9:case 6:ei.current===null&&(n=!0);var et=Fe;if(Fe=0,ii=null,fr(t,R,B,et),a&&or){_=0;break t}break;default:et=Fe,Fe=0,ii=null,fr(t,R,B,et)}}Zx(),_=an;break}catch(ht){B0(t,ht)}while(!0);return n&&t.shellSuspendCounter++,$i=_s=null,De=r,O.H=u,O.A=f,ge===null&&(qe=null,xe=0,cl()),_}function Zx(){for(;ge!==null;)k0(ge)}function Kx(t,n){var a=De;De|=2;var r=G0(),u=V0();qe!==t||xe!==n?(Gl=null,Hl=Rt()+500,ur(t,n)):or=zt(t,n);t:do try{if(Fe!==0&&ge!==null){n=ge;var f=ii;e:switch(Fe){case 1:Fe=0,ii=null,fr(t,n,f,1);break;case 2:case 9:if($p(f)){Fe=0,ii=null,X0(n);break}n=function(){Fe!==2&&Fe!==9||qe!==t||(Fe=7),Ii(t)},f.then(n,n);break t;case 3:Fe=7;break t;case 4:Fe=5;break t;case 7:$p(f)?(Fe=0,ii=null,X0(n)):(Fe=0,ii=null,fr(t,n,f,7));break;case 5:var _=null;switch(ge.tag){case 26:_=ge.memoizedState;case 5:case 27:var R=ge;if(_?wg(_):R.stateNode.complete){Fe=0,ii=null;var B=R.sibling;if(B!==null)ge=B;else{var et=R.return;et!==null?(ge=et,Xl(et)):ge=null}break e}}Fe=0,ii=null,fr(t,n,f,5);break;case 6:Fe=0,ii=null,fr(t,n,f,6);break;case 8:Lf(),an=6;break t;default:throw Error(s(462))}}Qx();break}catch(ht){B0(t,ht)}while(!0);return $i=_s=null,O.H=r,O.A=u,De=a,ge!==null?0:(qe=null,xe=0,cl(),an)}function Qx(){for(;ge!==null&&!he();)k0(ge)}function k0(t){var n=h0(t.alternate,t,ca);t.memoizedProps=t.pendingProps,n===null?Xl(t):ge=n}function X0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=o0(a,n,n.pendingProps,n.type,void 0,xe);break;case 11:n=o0(a,n,n.pendingProps,n.type.render,n.ref,xe);break;case 5:Yu(n);default:m0(a,n),n=ge=Vp(n,ca),n=h0(a,n,ca)}t.memoizedProps=t.pendingProps,n===null?Xl(t):ge=n}function fr(t,n,a,r){$i=_s=null,Yu(n),tr=null,ro=0;var u=n.return;try{if(Bx(t,u,n,a,xe)){an=1,Ul(t,hi(a,t.current)),ge=null;return}}catch(f){if(u!==null)throw ge=u,f;an=1,Ul(t,hi(a,t.current)),ge=null;return}n.flags&32768?(ye||r===1?t=!0:or||(xe&536870912)!==0?t=!1:(Ha=t=!0,(r===2||r===9||r===3||r===6)&&(r=ei.current,r!==null&&r.tag===13&&(r.flags|=16384))),W0(n,t)):Xl(n)}function Xl(t){var n=t;do{if((n.flags&32768)!==0){W0(n,Ha);return}t=n.return;var a=Vx(n.alternate,n,ca);if(a!==null){ge=a;return}if(n=n.sibling,n!==null){ge=n;return}ge=n=t}while(n!==null);an===0&&(an=5)}function W0(t,n){do{var a=kx(t.alternate,t);if(a!==null){a.flags&=32767,ge=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){ge=t;return}ge=t=a}while(t!==null);an=6,ge=null}function q0(t,n,a,r,u,f,_,R,B){t.cancelPendingCommit=null;do Wl();while(vn!==0);if((De&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=yu,en(t,a,f,_,R,B),t===qe&&(ge=qe=null,xe=0),cr=n,ka=t,ua=a,Df=f,Uf=u,P0=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,eS(Q,function(){return Q0(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=O.T,O.T=null,u=z.p,z.p=2,_=De,De|=4;try{Xx(t,n,a)}finally{De=_,z.p=u,O.T=r}}vn=1,j0(),Y0(),Z0()}}function j0(){if(vn===1){vn=0;var t=ka,n=cr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var r=z.p;z.p=2;var u=De;De|=4;try{R0(n,t);var f=qf,_=Lp(t.containerInfo),R=f.focusedElem,B=f.selectionRange;if(_!==R&&R&&R.ownerDocument&&Np(R.ownerDocument.documentElement,R)){if(B!==null&&gu(R)){var et=B.start,ht=B.end;if(ht===void 0&&(ht=et),"selectionStart"in R)R.selectionStart=et,R.selectionEnd=Math.min(ht,R.value.length);else{var vt=R.ownerDocument||document,st=vt&&vt.defaultView||window;if(st.getSelection){var ct=st.getSelection(),Wt=R.textContent.length,Jt=Math.min(B.start,Wt),ke=B.end===void 0?Jt:Math.min(B.end,Wt);!ct.extend&&Jt>ke&&(_=ke,ke=Jt,Jt=_);var Z=Up(R,Jt),k=Up(R,ke);if(Z&&k&&(ct.rangeCount!==1||ct.anchorNode!==Z.node||ct.anchorOffset!==Z.offset||ct.focusNode!==k.node||ct.focusOffset!==k.offset)){var tt=vt.createRange();tt.setStart(Z.node,Z.offset),ct.removeAllRanges(),Jt>ke?(ct.addRange(tt),ct.extend(k.node,k.offset)):(tt.setEnd(k.node,k.offset),ct.addRange(tt))}}}}for(vt=[],ct=R;ct=ct.parentNode;)ct.nodeType===1&&vt.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<vt.length;R++){var mt=vt[R];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}ic=!!Wf,qf=Wf=null}finally{De=u,z.p=r,O.T=a}}t.current=n,vn=2}}function Y0(){if(vn===2){vn=0;var t=ka,n=cr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var r=z.p;z.p=2;var u=De;De|=4;try{M0(t,n.alternate,n)}finally{De=u,z.p=r,O.T=a}}vn=3}}function Z0(){if(vn===4||vn===3){vn=0,He();var t=ka,n=cr,a=ua,r=P0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?vn=5:(vn=0,cr=ka=null,K0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Va=null),Vr(a),n=n.stateNode,dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(ft,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=O.T,u=z.p,z.p=2,O.T=null;try{for(var f=t.onRecoverableError,_=0;_<r.length;_++){var R=r[_];f(R.value,{componentStack:R.stack})}}finally{O.T=n,z.p=u}}(ua&3)!==0&&Wl(),Ii(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Nf?bo++:(bo=0,Nf=t):bo=0,To(0)}}function K0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,ao(n)))}function Wl(){return j0(),Y0(),Z0(),Q0()}function Q0(){if(vn!==5)return!1;var t=ka,n=Df;Df=0;var a=Vr(ua),r=O.T,u=z.p;try{z.p=32>a?32:a,O.T=null,a=Uf,Uf=null;var f=ka,_=ua;if(vn=0,cr=ka=null,ua=0,(De&6)!==0)throw Error(s(331));var R=De;if(De|=4,N0(f.current),w0(f,f.current,_,a),De=R,To(0,!1),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(ft,f)}catch{}return!0}finally{z.p=u,O.T=r,K0(t,n)}}function J0(t,n,a){n=hi(a,n),n=uf(t.stateNode,n,2),t=Ia(t,n,2),t!==null&&(ee(t,2),Ii(t))}function ze(t,n,a){if(t.tag===3)J0(t,t,a);else for(;n!==null;){if(n.tag===3){J0(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Va===null||!Va.has(r))){t=hi(a,t),a=$m(2),r=Ia(n,a,2),r!==null&&(t0(a,r,n,t),ee(r,2),Ii(r));break}}n=n.return}}function Pf(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new jx;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(Rf=!0,u.add(a),t=Jx.bind(null,t,n,a),n.then(t,t))}function Jx(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,qe===t&&(xe&a)===a&&(an===4||an===3&&(xe&62914560)===xe&&300>Rt()-Bl?(De&2)===0&&ur(t,0):Cf|=a,lr===xe&&(lr=0)),Ii(t)}function $0(t,n){n===0&&(n=yt()),t=ps(t,n),t!==null&&(ee(t,n),Ii(t))}function $x(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),$0(t,a)}function tS(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),$0(t,a)}function eS(t,n){return q(t,n)}var ql=null,dr=null,If=!1,jl=!1,Ff=!1,Wa=0;function Ii(t){t!==dr&&t.next===null&&(dr===null?ql=dr=t:dr=dr.next=t),jl=!0,If||(If=!0,iS())}function To(t,n){if(!Ff&&jl){Ff=!0;do for(var a=!1,r=ql;r!==null;){if(t!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var _=r.suspendedLanes,R=r.pingedLanes;f=(1<<31-Pt(42|t)+1)-1,f&=u&~(_&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,ig(r,f))}else f=xe,f=pt(r,r===qe?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||zt(r,f)||(a=!0,ig(r,f));r=r.next}while(a);Ff=!1}}function nS(){tg()}function tg(){jl=If=!1;var t=0;Wa!==0&&hS()&&(t=Wa);for(var n=Rt(),a=null,r=ql;r!==null;){var u=r.next,f=eg(r,n);f===0?(r.next=null,a===null?ql=u:a.next=u,u===null&&(dr=a)):(a=r,(t!==0||(f&3)!==0)&&(jl=!0)),r=u}vn!==0&&vn!==5||To(t),Wa!==0&&(Wa=0)}function eg(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-Pt(f),R=1<<_,B=u[_];B===-1?((R&a)===0||(R&r)!==0)&&(u[_]=Nt(R,n)):B<=n&&(t.expiredLanes|=R),f&=~R}if(n=qe,a=xe,a=pt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(Fe===2||Fe===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&tn(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||zt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&tn(r),Vr(a)){case 2:case 8:a=E;break;case 32:a=Q;break;case 268435456:a=Et;break;default:a=Q}return r=ng.bind(null,t),a=q(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&tn(r),t.callbackPriority=2,t.callbackNode=null,2}function ng(t,n){if(vn!==0&&vn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Wl()&&t.callbackNode!==a)return null;var r=xe;return r=pt(t,t===qe?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(F0(t,r,n),eg(t,Rt()),t.callbackNode!=null&&t.callbackNode===a?ng.bind(null,t):null)}function ig(t,n){if(Wl())return null;F0(t,n,!0)}function iS(){mS(function(){(De&6)!==0?q(D,nS):tg()})}function zf(){if(Wa===0){var t=Qs;t===0&&(t=ie,ie<<=1,(ie&261888)===0&&(ie=256)),Wa=t}return Wa}function ag(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:us(""+t)}function sg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function aS(t,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=ag((u[bn]||null).action),_=r.submitter;_&&(n=(n=_[bn]||null)?ag(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var R=new sl("action","action",null,r,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Wa!==0){var B=_?sg(u,_):new FormData(u);af(a,{pending:!0,data:B,method:u.method,action:f},null,B)}}else typeof f=="function"&&(R.preventDefault(),B=_?sg(u,_):new FormData(u),af(a,{pending:!0,data:B,method:u.method,action:f},f,B))},currentTarget:u}]})}}for(var Bf=0;Bf<Su.length;Bf++){var Hf=Su[Bf],sS=Hf.toLowerCase(),rS=Hf[0].toUpperCase()+Hf.slice(1);Ti(sS,"on"+rS)}Ti(Ip,"onAnimationEnd"),Ti(Fp,"onAnimationIteration"),Ti(zp,"onAnimationStart"),Ti("dblclick","onDoubleClick"),Ti("focusin","onFocus"),Ti("focusout","onBlur"),Ti(Mx,"onTransitionRun"),Ti(Ex,"onTransitionStart"),Ti(bx,"onTransitionCancel"),Ti(Bp,"onTransitionEnd"),at("onMouseEnter",["mouseout","mouseover"]),at("onMouseLeave",["mouseout","mouseover"]),at("onPointerEnter",["pointerout","pointerover"]),at("onPointerLeave",["pointerout","pointerover"]),j("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),j("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),j("onBeforeInput",["compositionend","keypress","textInput","paste"]),j("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),oS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ao));function rg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],u=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var _=r.length-1;0<=_;_--){var R=r[_],B=R.instance,et=R.currentTarget;if(R=R.listener,B!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=et;try{f(u)}catch(ht){ll(ht)}u.currentTarget=null,f=B}else for(_=0;_<r.length;_++){if(R=r[_],B=R.instance,et=R.currentTarget,R=R.listener,B!==f&&u.isPropagationStopped())break t;f=R,u.currentTarget=et;try{f(u)}catch(ht){ll(ht)}u.currentTarget=null,f=B}}}}function _e(t,n){var a=n[Ea];a===void 0&&(a=n[Ea]=new Set);var r=t+"__bubble";a.has(r)||(og(n,t,2,!1),a.add(r))}function Gf(t,n,a){var r=0;n&&(r|=4),og(a,t,r,n)}var Yl="_reactListening"+Math.random().toString(36).slice(2);function Vf(t){if(!t[Yl]){t[Yl]=!0,el.forEach(function(a){a!=="selectionchange"&&(oS.has(a)||Gf(a,!1,t),Gf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Yl]||(n[Yl]=!0,Gf("selectionchange",!1,n))}}function og(t,n,a,r){switch(Ig(n)){case 2:var u=PS;break;case 8:u=IS;break;default:u=id}a=u.bind(null,n,a,t),u=void 0,!ou||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function kf(t,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var _=r.tag;if(_===3||_===4){var R=r.stateNode.containerInfo;if(R===u)break;if(_===4)for(_=r.return;_!==null;){var B=_.tag;if((B===3||B===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;R!==null;){if(_=Ta(R),_===null)return;if(B=_.tag,B===5||B===6||B===26||B===27){r=f=_;continue t}R=R.parentNode}}r=r.return}dp(function(){var et=f,ht=su(a),vt=[];t:{var st=Hp.get(t);if(st!==void 0){var ct=sl,Wt=t;switch(t){case"keypress":if(il(a)===0)break t;case"keydown":case"keyup":ct=tx;break;case"focusin":Wt="focus",ct=fu;break;case"focusout":Wt="blur",ct=fu;break;case"beforeblur":case"afterblur":ct=fu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=mp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=Vv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=ix;break;case Ip:case Fp:case zp:ct=Wv;break;case Bp:ct=sx;break;case"scroll":case"scrollend":ct=Hv;break;case"wheel":ct=ox;break;case"copy":case"cut":case"paste":ct=jv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=_p;break;case"toggle":case"beforetoggle":ct=cx}var Jt=(n&4)!==0,ke=!Jt&&(t==="scroll"||t==="scrollend"),Z=Jt?st!==null?st+"Capture":null:st;Jt=[];for(var k=et,tt;k!==null;){var mt=k;if(tt=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||tt===null||Z===null||(mt=jr(k,Z),mt!=null&&Jt.push(Ro(k,mt,tt))),ke)break;k=k.return}0<Jt.length&&(st=new ct(st,Wt,null,a,ht),vt.push({event:st,listeners:Jt}))}}if((n&7)===0){t:{if(st=t==="mouseover"||t==="pointerover",ct=t==="mouseout"||t==="pointerout",st&&a!==au&&(Wt=a.relatedTarget||a.fromElement)&&(Ta(Wt)||Wt[Yi]))break t;if((ct||st)&&(st=ht.window===ht?ht:(st=ht.ownerDocument)?st.defaultView||st.parentWindow:window,ct?(Wt=a.relatedTarget||a.toElement,ct=et,Wt=Wt?Ta(Wt):null,Wt!==null&&(ke=c(Wt),Jt=Wt.tag,Wt!==ke||Jt!==5&&Jt!==27&&Jt!==6)&&(Wt=null)):(ct=null,Wt=et),ct!==Wt)){if(Jt=mp,mt="onMouseLeave",Z="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&(Jt=_p,mt="onPointerLeave",Z="onPointerEnter",k="pointer"),ke=ct==null?st:cs(ct),tt=Wt==null?st:cs(Wt),st=new Jt(mt,k+"leave",ct,a,ht),st.target=ke,st.relatedTarget=tt,mt=null,Ta(ht)===et&&(Jt=new Jt(Z,k+"enter",Wt,a,ht),Jt.target=tt,Jt.relatedTarget=ke,mt=Jt),ke=mt,ct&&Wt)e:{for(Jt=lS,Z=ct,k=Wt,tt=0,mt=Z;mt;mt=Jt(mt))tt++;mt=0;for(var Kt=k;Kt;Kt=Jt(Kt))mt++;for(;0<tt-mt;)Z=Jt(Z),tt--;for(;0<mt-tt;)k=Jt(k),mt--;for(;tt--;){if(Z===k||k!==null&&Z===k.alternate){Jt=Z;break e}Z=Jt(Z),k=Jt(k)}Jt=null}else Jt=null;ct!==null&&lg(vt,st,ct,Jt,!1),Wt!==null&&ke!==null&&lg(vt,ke,Wt,Jt,!0)}}t:{if(st=et?cs(et):window,ct=st.nodeName&&st.nodeName.toLowerCase(),ct==="select"||ct==="input"&&st.type==="file")var Re=Tp;else if(Ep(st))if(Ap)Re=xx;else{Re=_x;var jt=gx}else ct=st.nodeName,!ct||ct.toLowerCase()!=="input"||st.type!=="checkbox"&&st.type!=="radio"?et&&Ne(et.elementType)&&(Re=Tp):Re=vx;if(Re&&(Re=Re(t,et))){bp(vt,Re,a,ht);break t}jt&&jt(t,st,et),t==="focusout"&&et&&st.type==="number"&&et.memoizedProps.value!=null&&me(st,"number",st.value)}switch(jt=et?cs(et):window,t){case"focusin":(Ep(jt)||jt.contentEditable==="true")&&(ks=jt,_u=et,eo=null);break;case"focusout":eo=_u=ks=null;break;case"mousedown":vu=!0;break;case"contextmenu":case"mouseup":case"dragend":vu=!1,Op(vt,a,ht);break;case"selectionchange":if(yx)break;case"keydown":case"keyup":Op(vt,a,ht)}var ue;if(hu)t:{switch(t){case"compositionstart":var Se="onCompositionStart";break t;case"compositionend":Se="onCompositionEnd";break t;case"compositionupdate":Se="onCompositionUpdate";break t}Se=void 0}else Vs?yp(t,a)&&(Se="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Se="onCompositionStart");Se&&(vp&&a.locale!=="ko"&&(Vs||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&Vs&&(ue=hp()):(wa=ht,lu="value"in wa?wa.value:wa.textContent,Vs=!0)),jt=Zl(et,Se),0<jt.length&&(Se=new gp(Se,t,null,a,ht),vt.push({event:Se,listeners:jt}),ue?Se.data=ue:(ue=Mp(a),ue!==null&&(Se.data=ue)))),(ue=fx?dx(t,a):hx(t,a))&&(Se=Zl(et,"onBeforeInput"),0<Se.length&&(jt=new gp("onBeforeInput","beforeinput",null,a,ht),vt.push({event:jt,listeners:Se}),jt.data=ue)),aS(vt,t,et,a,ht)}rg(vt,n)})}function Ro(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Zl(t,n){for(var a=n+"Capture",r=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=jr(t,a),u!=null&&r.unshift(Ro(t,u,f)),u=jr(t,n),u!=null&&r.push(Ro(t,u,f))),t.tag===3)return r;t=t.return}return[]}function lS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function lg(t,n,a,r,u){for(var f=n._reactName,_=[];a!==null&&a!==r;){var R=a,B=R.alternate,et=R.stateNode;if(R=R.tag,B!==null&&B===r)break;R!==5&&R!==26&&R!==27||et===null||(B=et,u?(et=jr(a,f),et!=null&&_.unshift(Ro(a,et,B))):u||(et=jr(a,f),et!=null&&_.push(Ro(a,et,B)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var cS=/\r\n?/g,uS=/\u0000|\uFFFD/g;function cg(t){return(typeof t=="string"?t:""+t).replace(cS,`
`).replace(uS,"")}function ug(t,n){return n=cg(n),cg(t)===n}function Ve(t,n,a,r,u,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Jn(t,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Jn(t,""+r);break;case"className":Xt(t,"class",r);break;case"tabIndex":Xt(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Xt(t,a,r);break;case"style":bi(t,r,f);break;case"data":if(n!=="object"){Xt(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=us(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ve(t,n,"name",u.name,u,null),Ve(t,n,"formEncType",u.formEncType,u,null),Ve(t,n,"formMethod",u.formMethod,u,null),Ve(t,n,"formTarget",u.formTarget,u,null)):(Ve(t,n,"encType",u.encType,u,null),Ve(t,n,"method",u.method,u,null),Ve(t,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=us(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=Zi);break;case"onScroll":r!=null&&_e("scroll",t);break;case"onScrollEnd":r!=null&&_e("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=us(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":_e("beforetoggle",t),_e("toggle",t),It(t,"popover",r);break;case"xlinkActuate":kt(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":kt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":kt(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":kt(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":kt(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":kt(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":kt(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":kt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":kt(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":It(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ni.get(a)||a,It(t,a,r))}}function Xf(t,n,a,r,u,f){switch(a){case"style":bi(t,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof r=="string"?Jn(t,r):(typeof r=="number"||typeof r=="bigint")&&Jn(t,""+r);break;case"onScroll":r!=null&&_e("scroll",t);break;case"onScrollEnd":r!=null&&_e("scrollend",t);break;case"onClick":r!=null&&(t.onclick=Zi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[bn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof r=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,r,u);break t}a in t?t[a]=r:r===!0?t.setAttribute(a,""):It(t,a,r)}}}function Cn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",t),_e("load",t);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ve(t,n,f,_,a,null)}}u&&Ve(t,n,"srcSet",a.srcSet,a,null),r&&Ve(t,n,"src",a.src,a,null);return;case"input":_e("invalid",t);var R=f=_=u=null,B=null,et=null;for(r in a)if(a.hasOwnProperty(r)){var ht=a[r];if(ht!=null)switch(r){case"name":u=ht;break;case"type":_=ht;break;case"checked":B=ht;break;case"defaultChecked":et=ht;break;case"value":f=ht;break;case"defaultValue":R=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(s(137,n));break;default:Ve(t,n,r,ht,a,null)}}Ln(t,f,R,B,et,_,u,!1);return;case"select":_e("invalid",t),r=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":_=R;break;case"multiple":r=R;default:Ve(t,n,u,R,a,null)}n=f,a=_,t.multiple=!!r,n!=null?_n(t,!!r,n,!1):a!=null&&_n(t,!!r,a,!0);return;case"textarea":_e("invalid",t),f=u=r=null;for(_ in a)if(a.hasOwnProperty(_)&&(R=a[_],R!=null))switch(_){case"value":r=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Ve(t,n,_,R,a,null)}Ei(t,r,u,f);return;case"option":for(B in a)a.hasOwnProperty(B)&&(r=a[B],r!=null)&&(B==="selected"?t.selected=r&&typeof r!="function"&&typeof r!="symbol":Ve(t,n,B,r,a,null));return;case"dialog":_e("beforetoggle",t),_e("toggle",t),_e("cancel",t),_e("close",t);break;case"iframe":case"object":_e("load",t);break;case"video":case"audio":for(r=0;r<Ao.length;r++)_e(Ao[r],t);break;case"image":_e("error",t),_e("load",t);break;case"details":_e("toggle",t);break;case"embed":case"source":case"link":_e("error",t),_e("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in a)if(a.hasOwnProperty(et)&&(r=a[et],r!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ve(t,n,et,r,a,null)}return;default:if(Ne(n)){for(ht in a)a.hasOwnProperty(ht)&&(r=a[ht],r!==void 0&&Xf(t,n,ht,r,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(r=a[R],r!=null&&Ve(t,n,R,r,a,null))}function fS(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,R=null,B=null,et=null,ht=null;for(ct in a){var vt=a[ct];if(a.hasOwnProperty(ct)&&vt!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":B=vt;default:r.hasOwnProperty(ct)||Ve(t,n,ct,null,r,vt)}}for(var st in r){var ct=r[st];if(vt=a[st],r.hasOwnProperty(st)&&(ct!=null||vt!=null))switch(st){case"type":f=ct;break;case"name":u=ct;break;case"checked":et=ct;break;case"defaultChecked":ht=ct;break;case"value":_=ct;break;case"defaultValue":R=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:ct!==vt&&Ve(t,n,st,ct,r,vt)}}Gt(t,_,R,B,et,ht,f,u);return;case"select":ct=_=R=st=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":ct=B;default:r.hasOwnProperty(f)||Ve(t,n,f,null,r,B)}for(u in r)if(f=r[u],B=a[u],r.hasOwnProperty(u)&&(f!=null||B!=null))switch(u){case"value":st=f;break;case"defaultValue":R=f;break;case"multiple":_=f;default:f!==B&&Ve(t,n,u,f,r,B)}n=R,a=_,r=ct,st!=null?_n(t,!!a,st,!1):!!r!=!!a&&(n!=null?_n(t,!!a,n,!0):_n(t,!!a,a?[]:"",!1));return;case"textarea":ct=st=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!r.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Ve(t,n,R,null,r,u)}for(_ in r)if(u=r[_],f=a[_],r.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":st=u;break;case"defaultValue":ct=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Ve(t,n,_,u,r,f)}Qn(t,st,ct);return;case"option":for(var Wt in a)st=a[Wt],a.hasOwnProperty(Wt)&&st!=null&&!r.hasOwnProperty(Wt)&&(Wt==="selected"?t.selected=!1:Ve(t,n,Wt,null,r,st));for(B in r)st=r[B],ct=a[B],r.hasOwnProperty(B)&&st!==ct&&(st!=null||ct!=null)&&(B==="selected"?t.selected=st&&typeof st!="function"&&typeof st!="symbol":Ve(t,n,B,st,r,ct));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Jt in a)st=a[Jt],a.hasOwnProperty(Jt)&&st!=null&&!r.hasOwnProperty(Jt)&&Ve(t,n,Jt,null,r,st);for(et in r)if(st=r[et],ct=a[et],r.hasOwnProperty(et)&&st!==ct&&(st!=null||ct!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(s(137,n));break;default:Ve(t,n,et,st,r,ct)}return;default:if(Ne(n)){for(var ke in a)st=a[ke],a.hasOwnProperty(ke)&&st!==void 0&&!r.hasOwnProperty(ke)&&Xf(t,n,ke,void 0,r,st);for(ht in r)st=r[ht],ct=a[ht],!r.hasOwnProperty(ht)||st===ct||st===void 0&&ct===void 0||Xf(t,n,ht,st,r,ct);return}}for(var Z in a)st=a[Z],a.hasOwnProperty(Z)&&st!=null&&!r.hasOwnProperty(Z)&&Ve(t,n,Z,null,r,st);for(vt in r)st=r[vt],ct=a[vt],!r.hasOwnProperty(vt)||st===ct||st==null&&ct==null||Ve(t,n,vt,st,r,ct)}function fg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function dS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,_=u.initiatorType,R=u.duration;if(f&&R&&fg(_)){for(_=0,R=u.responseEnd,r+=1;r<a.length;r++){var B=a[r],et=B.startTime;if(et>R)break;var ht=B.transferSize,vt=B.initiatorType;ht&&fg(vt)&&(B=B.responseEnd,_+=ht*(B<R?1:(R-et)/(B-et)))}if(--r,n+=8*(f+_)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Wf=null,qf=null;function Kl(t){return t.nodeType===9?t:t.ownerDocument}function dg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function hg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function jf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Yf=null;function hS(){var t=window.event;return t&&t.type==="popstate"?t===Yf?!1:(Yf=t,!0):(Yf=null,!1)}var pg=typeof setTimeout=="function"?setTimeout:void 0,pS=typeof clearTimeout=="function"?clearTimeout:void 0,mg=typeof Promise=="function"?Promise:void 0,mS=typeof queueMicrotask=="function"?queueMicrotask:typeof mg<"u"?function(t){return mg.resolve(null).then(t).catch(gS)}:pg;function gS(t){setTimeout(function(){throw t})}function qa(t){return t==="head"}function gg(t,n){var a=n,r=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(u),gr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Co(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Co(a);for(var f=a.firstChild;f;){var _=f.nextSibling,R=f.nodeName;f[ba]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&Co(t.ownerDocument.body);a=u}while(a);gr(n)}function _g(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function Zf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Zf(a),qr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function _S(t,n,a,r){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[ba])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=vi(t.nextSibling),t===null)break}return null}function vS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=vi(t.nextSibling),t===null))return null;return t}function vg(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=vi(t.nextSibling),t===null))return null;return t}function Kf(t){return t.data==="$?"||t.data==="$~"}function Qf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function xS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function vi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Jf=null;function xg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return vi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Sg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function yg(t,n,a){switch(n=Kl(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Co(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);qr(t)}var xi=new Map,Mg=new Set;function Ql(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var fa=z.d;z.d={f:SS,r:yS,D:MS,C:ES,L:bS,m:TS,X:RS,S:AS,M:CS};function SS(){var t=fa.f(),n=Vl();return t||n}function yS(t){var n=Aa(t);n!==null&&n.tag===5&&n.type==="form"?Bm(n):fa.r(t)}var hr=typeof document>"u"?null:document;function Eg(t,n,a){var r=hr;if(r&&typeof n=="string"&&n){var u=Pe(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Mg.has(u)||(Mg.add(u),t={rel:t,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),Cn(n,"link",t),fn(n),r.head.appendChild(n)))}}function MS(t){fa.D(t),Eg("dns-prefetch",t,null)}function ES(t,n){fa.C(t,n),Eg("preconnect",t,n)}function bS(t,n,a){fa.L(t,n,a);var r=hr;if(r&&t&&n){var u='link[rel="preload"][as="'+Pe(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Pe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Pe(a.imageSizes)+'"]')):u+='[href="'+Pe(t)+'"]';var f=u;switch(n){case"style":f=pr(t);break;case"script":f=mr(t)}xi.has(f)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),xi.set(f,t),r.querySelector(u)!==null||n==="style"&&r.querySelector(wo(f))||n==="script"&&r.querySelector(Do(f))||(n=r.createElement("link"),Cn(n,"link",t),fn(n),r.head.appendChild(n)))}}function TS(t,n){fa.m(t,n);var a=hr;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Pe(r)+'"][href="'+Pe(t)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=mr(t)}if(!xi.has(f)&&(t=v({rel:"modulepreload",href:t},n),xi.set(f,t),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Do(f)))return}r=a.createElement("link"),Cn(r,"link",t),fn(r),a.head.appendChild(r)}}}function AS(t,n,a){fa.S(t,n,a);var r=hr;if(r&&t){var u=Ra(r).hoistableStyles,f=pr(t);n=n||"default";var _=u.get(f);if(!_){var R={loading:0,preload:null};if(_=r.querySelector(wo(f)))R.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=xi.get(f))&&$f(t,a);var B=_=r.createElement("link");fn(B),Cn(B,"link",t),B._p=new Promise(function(et,ht){B.onload=et,B.onerror=ht}),B.addEventListener("load",function(){R.loading|=1}),B.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Jl(_,n,r)}_={type:"stylesheet",instance:_,count:1,state:R},u.set(f,_)}}}function RS(t,n){fa.X(t,n);var a=hr;if(a&&t){var r=Ra(a).hoistableScripts,u=mr(t),f=r.get(u);f||(f=a.querySelector(Do(u)),f||(t=v({src:t,async:!0},n),(n=xi.get(u))&&td(t,n),f=a.createElement("script"),fn(f),Cn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function CS(t,n){fa.M(t,n);var a=hr;if(a&&t){var r=Ra(a).hoistableScripts,u=mr(t),f=r.get(u);f||(f=a.querySelector(Do(u)),f||(t=v({src:t,async:!0,type:"module"},n),(n=xi.get(u))&&td(t,n),f=a.createElement("script"),fn(f),Cn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function bg(t,n,a,r){var u=(u=rt.current)?Ql(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=pr(a.href),a=Ra(u).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=pr(a.href);var f=Ra(u).hoistableStyles,_=f.get(t);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=u.querySelector(wo(t)))&&!f._p&&(_.instance=f,_.state.loading=5),xi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},xi.set(t,a),f||wS(u,t,a,_.state))),n&&r===null)throw Error(s(528,""));return _}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=mr(a),a=Ra(u).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function pr(t){return'href="'+Pe(t)+'"'}function wo(t){return'link[rel="stylesheet"]['+t+"]"}function Tg(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function wS(t,n,a,r){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=t.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Cn(n,"link",a),fn(n),t.head.appendChild(n))}function mr(t){return'[src="'+Pe(t)+'"]'}function Do(t){return"script[async]"+t}function Ag(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+Pe(a.href)+'"]');if(r)return n.instance=r,fn(r),r;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),fn(r),Cn(r,"style",u),Jl(r,a.precedence,t),n.instance=r;case"stylesheet":u=pr(a.href);var f=t.querySelector(wo(u));if(f)return n.state.loading|=4,n.instance=f,fn(f),f;r=Tg(a),(u=xi.get(u))&&$f(r,u),f=(t.ownerDocument||t).createElement("link"),fn(f);var _=f;return _._p=new Promise(function(R,B){_.onload=R,_.onerror=B}),Cn(f,"link",r),n.state.loading|=4,Jl(f,a.precedence,t),n.instance=f;case"script":return f=mr(a.src),(u=t.querySelector(Do(f)))?(n.instance=u,fn(u),u):(r=a,(u=xi.get(f))&&(r=v({},a),td(r,u)),t=t.ownerDocument||t,u=t.createElement("script"),fn(u),Cn(u,"link",r),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Jl(r,a.precedence,t));return n.instance}function Jl(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,_=0;_<r.length;_++){var R=r[_];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function $f(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function td(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var $l=null;function Rg(t,n,a){if($l===null){var r=new Map,u=$l=new Map;u.set(a,r)}else u=$l,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[ba]||f[ln]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var R=r.get(_);R?R.push(f):r.set(_,[f])}}return r}function Cg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function DS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function wg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function US(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=pr(r.href),f=n.querySelector(wo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=tc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,fn(f);return}f=n.ownerDocument||n,r=Tg(r),(u=xi.get(u))&&$f(r,u),f=f.createElement("link"),fn(f);var _=f;_._p=new Promise(function(R,B){_.onload=R,_.onerror=B}),Cn(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=tc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var ed=0;function NS(t,n){return t.stylesheets&&t.count===0&&nc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&nc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&ed===0&&(ed=62500*dS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&nc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>ed?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function tc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)nc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ec=null;function nc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ec=new Map,n.forEach(LS,t),ec=null,tc.call(t))}function LS(t,n){if(!(n.state.loading&4)){var a=ec.get(t);if(a)var r=a.get(null);else{a=new Map,ec.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),r=_)}r&&a.set(null,r)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||r,f===r&&a.set(null,u),a.set(_,u),this.count++,r=tc.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Uo={$$typeof:N,Provider:null,Consumer:null,_currentValue:ot,_currentValue2:ot,_threadCount:0};function OS(t,n,a,r,u,f,_,R,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qt(0),this.hiddenUpdates=qt(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function Dg(t,n,a,r,u,f,_,R,B,et,ht,vt){return t=new OS(t,n,a,_,B,et,ht,vt,R),n=1,f===!0&&(n|=24),f=ti(3,null,null,n),t.current=f,f.stateNode=t,n=Lu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Fu(f),t}function Ug(t){return t?(t=qs,t):qs}function Ng(t,n,a,r,u,f){u=Ug(u),r.context===null?r.context=u:r.pendingContext=u,r=Pa(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Ia(t,r,n),a!==null&&(qn(a,t,n),lo(a,t,n))}function Lg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function nd(t,n){Lg(t,n),(t=t.alternate)&&Lg(t,n)}function Og(t){if(t.tag===13||t.tag===31){var n=ps(t,67108864);n!==null&&qn(n,t,67108864),nd(t,67108864)}}function Pg(t){if(t.tag===13||t.tag===31){var n=si();n=ls(n);var a=ps(t,n);a!==null&&qn(a,t,n),nd(t,n)}}var ic=!0;function PS(t,n,a,r){var u=O.T;O.T=null;var f=z.p;try{z.p=2,id(t,n,a,r)}finally{z.p=f,O.T=u}}function IS(t,n,a,r){var u=O.T;O.T=null;var f=z.p;try{z.p=8,id(t,n,a,r)}finally{z.p=f,O.T=u}}function id(t,n,a,r){if(ic){var u=ad(r);if(u===null)kf(t,n,r,ac,a),Fg(t,r);else if(zS(u,t,n,a,r))r.stopPropagation();else if(Fg(t,r),n&4&&-1<FS.indexOf(t)){for(;u!==null;){var f=Aa(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Tt(f.pendingLanes);if(_!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;_;){var B=1<<31-Pt(_);R.entanglements[1]|=B,_&=~B}Ii(f),(De&6)===0&&(Hl=Rt()+500,To(0))}}break;case 31:case 13:R=ps(f,2),R!==null&&qn(R,f,2),Vl(),nd(f,2)}if(f=ad(r),f===null&&kf(t,n,r,ac,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else kf(t,n,r,null,a)}}function ad(t){return t=su(t),sd(t)}var ac=null;function sd(t){if(ac=null,t=Ta(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return ac=t,null}function Ig(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ke()){case D:return 2;case E:return 8;case Q:case _t:return 32;case Et:return 268435456;default:return 32}default:return 32}}var rd=!1,ja=null,Ya=null,Za=null,No=new Map,Lo=new Map,Ka=[],FS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Fg(t,n){switch(t){case"focusin":case"focusout":ja=null;break;case"dragenter":case"dragleave":Ya=null;break;case"mouseover":case"mouseout":Za=null;break;case"pointerover":case"pointerout":No.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lo.delete(n.pointerId)}}function Oo(t,n,a,r,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Aa(n),n!==null&&Og(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function zS(t,n,a,r,u){switch(n){case"focusin":return ja=Oo(ja,t,n,a,r,u),!0;case"dragenter":return Ya=Oo(Ya,t,n,a,r,u),!0;case"mouseover":return Za=Oo(Za,t,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return No.set(f,Oo(No.get(f)||null,t,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,Lo.set(f,Oo(Lo.get(f)||null,t,n,a,r,u)),!0}return!1}function zg(t){var n=Ta(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Xr(t.priority,function(){Pg(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,Xr(t.priority,function(){Pg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function sc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=ad(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);au=r,a.target.dispatchEvent(r),au=null}else return n=Aa(a),n!==null&&Og(n),t.blockedOn=a,!1;n.shift()}return!0}function Bg(t,n,a){sc(t)&&a.delete(n)}function BS(){rd=!1,ja!==null&&sc(ja)&&(ja=null),Ya!==null&&sc(Ya)&&(Ya=null),Za!==null&&sc(Za)&&(Za=null),No.forEach(Bg),Lo.forEach(Bg)}function rc(t,n){t.blockedOn===n&&(t.blockedOn=null,rd||(rd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,BS)))}var oc=null;function Hg(t){oc!==t&&(oc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){oc===t&&(oc=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],u=t[n+2];if(typeof r!="function"){if(sd(r||a)===null)continue;break}var f=Aa(a);f!==null&&(t.splice(n,3),n-=3,af(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function gr(t){function n(B){return rc(B,t)}ja!==null&&rc(ja,t),Ya!==null&&rc(Ya,t),Za!==null&&rc(Za,t),No.forEach(n),Lo.forEach(n);for(var a=0;a<Ka.length;a++){var r=Ka[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Ka.length&&(a=Ka[0],a.blockedOn===null);)zg(a),a.blockedOn===null&&Ka.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],_=u[bn]||null;if(typeof f=="function")_||Hg(a);else if(_){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[bn]||null)R=_.formAction;else if(sd(u)!==null)continue}else R=_.action;typeof R=="function"?a[r+1]=R:(a.splice(r,3),r-=3),Hg(a)}}}function Gg(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function od(t){this._internalRoot=t}lc.prototype.render=od.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=si();Ng(a,r,t,n,null,null)},lc.prototype.unmount=od.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Ng(t.current,2,null,t,null,null),Vl(),n[Yi]=null}};function lc(t){this._internalRoot=t}lc.prototype.unstable_scheduleHydration=function(t){if(t){var n=kr();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ka.length&&n!==0&&n<Ka[a].priority;a++);Ka.splice(a,0,t),a===0&&zg(t)}};var Vg=e.version;if(Vg!=="19.2.3")throw Error(s(527,Vg,"19.2.3"));z.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=h(n),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var HS={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cc.isDisabled&&cc.supportsFiber)try{ft=cc.inject(HS),dt=cc}catch{}}return Io.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",u=Zm,f=Km,_=Qm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=Dg(t,1,!1,null,null,a,r,null,u,f,_,Gg),t[Yi]=n.current,Vf(t),new od(n)},Io.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,u="",f=Zm,_=Km,R=Qm,B=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=Dg(t,1,!0,n,a??null,r,u,B,f,_,R,Gg),n.context=Ug(null),a=n.current,r=si(),r=ls(r),u=Pa(r),u.callback=null,Ia(a,u,r),a=r,n.current.lanes=a,ee(n,a),Ii(n),t[Yi]=n.current,Vf(t),new lc(n)},Io.version="19.2.3",Io}var Jg;function KS(){if(Jg)return cd.exports;Jg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),cd.exports=ZS(),cd.exports}var QS=KS(),se=kh();function Xh({className:o="",dark:e=!1}){const i=e?"#050b16":"#ffffff";return W.jsxs("span",{"code-path":"src\\components\\BrandLogo.tsx:11:5",className:`inline-flex items-baseline font-bold uppercase leading-none ${o}`,style:{fontFamily:"'Space Grotesk', sans-serif",letterSpacing:"0.08em"},children:[W.jsx("span",{"code-path":"src\\components\\BrandLogo.tsx:18:7",style:{color:i},children:"IMAN"}),W.jsx("span",{"code-path":"src\\components\\BrandLogo.tsx:19:7",style:{color:"#009fe3"},children:"TEK"})]})}const $g=[{label:"Servicios",href:"#servicios"},{label:"Sectores",href:"#sectores"},{label:"Metodología",href:"#metodologia"},{label:"Contacto",href:"#contacto"}];function JS(){const[o,e]=se.useState(!1),[i,s]=se.useState(!1);se.useEffect(()=>{const c=()=>{e(window.scrollY>window.innerHeight*.8)};return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]),se.useEffect(()=>(i?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[i]);const l=(c,d)=>{c.preventDefault(),s(!1);const p=document.querySelector(d);p&&p.scrollIntoView({behavior:"smooth"})};return W.jsxs(W.Fragment,{children:[W.jsx("nav",{"code-path":"src\\sections\\Navigation.tsx:45:7",className:"fixed top-0 left-0 right-0 z-[100] transition-all duration-300",style:{backgroundColor:o?"rgba(245, 243, 239, 0.95)":"transparent",backdropFilter:o?"blur(10px)":"none",borderBottom:o?"1px solid #d4d0ca":"1px solid transparent"},children:W.jsxs("div",{"code-path":"src\\sections\\Navigation.tsx:53:9",className:"mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6",children:[W.jsx("a",{"code-path":"src\\sections\\Navigation.tsx:55:11",href:"#",onClick:c=>{c.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})},className:"flex items-center transition-opacity duration-300 hover:opacity-85","aria-label":"IMANTEK - Ir al inicio",children:W.jsx(Xh,{"code-path":"src\\sections\\Navigation.tsx:64:13",className:"text-[1.35rem] sm:text-[1.55rem]",dark:o})}),W.jsx("div",{"code-path":"src\\sections\\Navigation.tsx:68:11",className:"hidden items-center gap-8 md:flex",children:$g.map(c=>W.jsx("a",{"code-path":"src\\sections\\Navigation.tsx:70:15",href:c.href,onClick:d=>l(d,c.href),className:"text-xs font-normal uppercase tracking-[1.5px] transition-colors duration-300 hover:opacity-70",style:{fontFamily:"'IBM Plex Mono', monospace",color:o?"#1a1a1a":"#ffffff"},children:c.label},c.href))}),W.jsxs("button",{"code-path":"src\\sections\\Navigation.tsx:86:11",className:"flex flex-col gap-[5px] md:hidden",onClick:()=>s(!i),"aria-label":"Toggle menu",children:[W.jsx("span",{"code-path":"src\\sections\\Navigation.tsx:91:13",className:"block h-[2px] w-5 transition-all duration-300",style:{backgroundColor:o?"#1a1a1a":"#ffffff",transform:i?"rotate(45deg) translate(3px, 3px)":"none"}}),W.jsx("span",{"code-path":"src\\sections\\Navigation.tsx:98:13",className:"block h-[2px] w-5 transition-all duration-300",style:{backgroundColor:o?"#1a1a1a":"#ffffff",opacity:i?0:1}}),W.jsx("span",{"code-path":"src\\sections\\Navigation.tsx:105:13",className:"block h-[2px] w-5 transition-all duration-300",style:{backgroundColor:o?"#1a1a1a":"#ffffff",transform:i?"rotate(-45deg) translate(3px, -3px)":"none"}})]})]})}),i&&W.jsx("div",{"code-path":"src\\sections\\Navigation.tsx:118:9",className:"fixed inset-0 z-[99] flex flex-col items-center justify-center gap-8",style:{backgroundColor:"#1a1a1a"},children:$g.map(c=>W.jsx("a",{"code-path":"src\\sections\\Navigation.tsx:123:13",href:c.href,onClick:d=>l(d,c.href),className:"text-2xl font-medium uppercase tracking-[2px] text-white hover:text-[#009fe3] transition-colors",style:{fontFamily:"'Space Grotesk', sans-serif"},children:c.label},c.href))})]})}const Wh="184",$S=0,t_=1,ty=2,Fc=1,ey=2,Wo=3,rs=0,Yn=1,Hi=2,va=0,Nr=1,e_=2,n_=3,i_=4,ny=5,Ns=100,iy=101,ay=102,sy=103,ry=104,oy=200,ly=201,cy=202,uy=203,Zd=204,Kd=205,fy=206,dy=207,hy=208,py=209,my=210,gy=211,_y=212,vy=213,xy=214,Qd=0,Jd=1,$d=2,Or=3,th=4,eh=5,nh=6,ih=7,av=0,Sy=1,yy=2,ki=0,sv=1,rv=2,ov=3,qh=4,lv=5,cv=6,uv=7,fv=300,Is=301,Pr=302,pd=303,md=304,tu=306,ah=1e3,_a=1001,sh=1002,wn=1003,My=1004,uc=1005,Fn=1006,gd=1007,Os=1008,ci=1009,dv=1010,hv=1011,jo=1012,jh=1013,qi=1014,Gi=1015,Sa=1016,Yh=1017,Zh=1018,Yo=1020,pv=35902,mv=35899,gv=1021,_v=1022,Ui=1023,ya=1026,Ps=1027,vv=1028,Kh=1029,Fs=1030,Qh=1031,Jh=1033,zc=33776,Bc=33777,Hc=33778,Gc=33779,rh=35840,oh=35841,lh=35842,ch=35843,uh=36196,fh=37492,dh=37496,hh=37488,ph=37489,Xc=37490,mh=37491,gh=37808,_h=37809,vh=37810,xh=37811,Sh=37812,yh=37813,Mh=37814,Eh=37815,bh=37816,Th=37817,Ah=37818,Rh=37819,Ch=37820,wh=37821,Dh=36492,Uh=36494,Nh=36495,Lh=36283,Oh=36284,Wc=36285,Ph=36286,Ey=3200,Ih=0,by=1,as="",yi="srgb",qc="srgb-linear",jc="linear",Be="srgb",_r=7680,a_=519,Ty=512,Ay=513,Ry=514,$h=515,Cy=516,wy=517,tp=518,Dy=519,s_=35044,r_="300 es",Vi=2e3,Zo=2001;function Uy(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Yc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Ny(){const o=Yc("canvas");return o.style.display="block",o}const o_={};function l_(...o){const e="THREE."+o.shift();console.log(e,...o)}function xv(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function $t(...o){o=xv(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...o)}}function Te(...o){o=xv(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...o)}}function Fh(...o){const e=o.join(" ");e in o_||(o_[e]=!0,$t(...o))}function Ly(o,e,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const Oy={[Qd]:Jd,[$d]:nh,[th]:ih,[Or]:eh,[Jd]:Qd,[nh]:$d,[ih]:th,[eh]:Or};class zs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vc=Math.PI/180,zh=180/Math.PI;function Ko(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Pn[o&255]+Pn[o>>8&255]+Pn[o>>16&255]+Pn[o>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[i&63|128]+Pn[i>>8&255]+"-"+Pn[i>>16&255]+Pn[i>>24&255]+Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]).toLowerCase()}function Ee(o,e,i){return Math.max(e,Math.min(i,o))}function Py(o,e){return(o%e+e)%e}function _d(o,e,i){return(1-i)*o+i*e}function Fo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function jn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const rp=class rp{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Ee(this.x,e.x,i.x),this.y=Ee(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Ee(this.x,e,i),this.y=Ee(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ee(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ee(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*s-d*l+e.x,this.y=c*l+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};rp.prototype.isVector2=!0;let Ue=rp;class zr{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,d,p){let m=s[l+0],h=s[l+1],x=s[l+2],v=s[l+3],g=c[d+0],M=c[d+1],b=c[d+2],w=c[d+3];if(v!==w||m!==g||h!==M||x!==b){let y=m*g+h*M+x*b+v*w;y<0&&(g=-g,M=-M,b=-b,w=-w,y=-y);let S=1-p;if(y<.9995){const C=Math.acos(y),N=Math.sin(C);S=Math.sin(S*C)/N,p=Math.sin(p*C)/N,m=m*S+g*p,h=h*S+M*p,x=x*S+b*p,v=v*S+w*p}else{m=m*S+g*p,h=h*S+M*p,x=x*S+b*p,v=v*S+w*p;const C=1/Math.sqrt(m*m+h*h+x*x+v*v);m*=C,h*=C,x*=C,v*=C}}e[i]=m,e[i+1]=h,e[i+2]=x,e[i+3]=v}static multiplyQuaternionsFlat(e,i,s,l,c,d){const p=s[l],m=s[l+1],h=s[l+2],x=s[l+3],v=c[d],g=c[d+1],M=c[d+2],b=c[d+3];return e[i]=p*b+x*v+m*M-h*g,e[i+1]=m*b+x*g+h*v-p*M,e[i+2]=h*b+x*M+p*g-m*v,e[i+3]=x*b-p*v-m*g-h*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,d=e._order,p=Math.cos,m=Math.sin,h=p(s/2),x=p(l/2),v=p(c/2),g=m(s/2),M=m(l/2),b=m(c/2);switch(d){case"XYZ":this._x=g*x*v+h*M*b,this._y=h*M*v-g*x*b,this._z=h*x*b+g*M*v,this._w=h*x*v-g*M*b;break;case"YXZ":this._x=g*x*v+h*M*b,this._y=h*M*v-g*x*b,this._z=h*x*b-g*M*v,this._w=h*x*v+g*M*b;break;case"ZXY":this._x=g*x*v-h*M*b,this._y=h*M*v+g*x*b,this._z=h*x*b+g*M*v,this._w=h*x*v-g*M*b;break;case"ZYX":this._x=g*x*v-h*M*b,this._y=h*M*v+g*x*b,this._z=h*x*b-g*M*v,this._w=h*x*v+g*M*b;break;case"YZX":this._x=g*x*v+h*M*b,this._y=h*M*v+g*x*b,this._z=h*x*b-g*M*v,this._w=h*x*v-g*M*b;break;case"XZY":this._x=g*x*v-h*M*b,this._y=h*M*v-g*x*b,this._z=h*x*b+g*M*v,this._w=h*x*v+g*M*b;break;default:$t("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],d=i[1],p=i[5],m=i[9],h=i[2],x=i[6],v=i[10],g=s+p+v;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(x-m)*M,this._y=(c-h)*M,this._z=(d-l)*M}else if(s>p&&s>v){const M=2*Math.sqrt(1+s-p-v);this._w=(x-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(c+h)/M}else if(p>v){const M=2*Math.sqrt(1+p-s-v);this._w=(c-h)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+x)/M}else{const M=2*Math.sqrt(1+v-s-p);this._w=(d-l)/M,this._x=(c+h)/M,this._y=(m+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ee(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,d=e._w,p=i._x,m=i._y,h=i._z,x=i._w;return this._x=s*x+d*p+l*h-c*m,this._y=l*x+d*m+c*p-s*h,this._z=c*x+d*h+s*m-l*p,this._w=d*x-s*p-l*m-c*h,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,c=e._z,d=e._w,p=this.dot(e);p<0&&(s=-s,l=-l,c=-c,d=-d,p=-p);let m=1-i;if(p<.9995){const h=Math.acos(p),x=Math.sin(h);m=Math.sin(m*h)/x,i=Math.sin(i*h)/x,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const op=class op{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(c_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(c_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,d=e.y,p=e.z,m=e.w,h=2*(d*l-p*s),x=2*(p*i-c*l),v=2*(c*s-d*i);return this.x=i+m*h+d*v-p*x,this.y=s+m*x+p*h-c*v,this.z=l+m*v+c*x-d*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Ee(this.x,e.x,i.x),this.y=Ee(this.y,e.y,i.y),this.z=Ee(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Ee(this.x,e,i),this.y=Ee(this.y,e,i),this.z=Ee(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ee(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,d=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*d-s*m,this.z=s*p-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return vd.copy(this).projectOnVector(e),this.sub(vd)}reflect(e){return this.sub(vd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Ee(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};op.prototype.isVector3=!0;let $=op;const vd=new $,c_=new zr,lp=class lp{constructor(e,i,s,l,c,d,p,m,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,p,m,h)}set(e,i,s,l,c,d,p,m,h){const x=this.elements;return x[0]=e,x[1]=l,x[2]=p,x[3]=i,x[4]=c,x[5]=m,x[6]=s,x[7]=d,x[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],p=s[3],m=s[6],h=s[1],x=s[4],v=s[7],g=s[2],M=s[5],b=s[8],w=l[0],y=l[3],S=l[6],C=l[1],N=l[4],P=l[7],G=l[2],U=l[5],F=l[8];return c[0]=d*w+p*C+m*G,c[3]=d*y+p*N+m*U,c[6]=d*S+p*P+m*F,c[1]=h*w+x*C+v*G,c[4]=h*y+x*N+v*U,c[7]=h*S+x*P+v*F,c[2]=g*w+M*C+b*G,c[5]=g*y+M*N+b*U,c[8]=g*S+M*P+b*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],x=e[8];return i*d*x-i*p*h-s*c*x+s*p*m+l*c*h-l*d*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],x=e[8],v=x*d-p*h,g=p*m-x*c,M=h*c-d*m,b=i*v+s*g+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=v*w,e[1]=(l*h-x*s)*w,e[2]=(p*s-l*d)*w,e[3]=g*w,e[4]=(x*i-l*m)*w,e[5]=(l*c-p*i)*w,e[6]=M*w,e[7]=(s*m-h*i)*w,e[8]=(d*i-s*c)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,d,p){const m=Math.cos(c),h=Math.sin(c);return this.set(s*m,s*h,-s*(m*d+h*p)+d+e,-l*h,l*m,-l*(-h*d+m*p)+p+i,0,0,1),this}scale(e,i){return this.premultiply(xd.makeScale(e,i)),this}rotate(e){return this.premultiply(xd.makeRotation(-e)),this}translate(e,i){return this.premultiply(xd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};lp.prototype.isMatrix3=!0;let re=lp;const xd=new re,u_=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),f_=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Iy(){const o={enabled:!0,workingColorSpace:qc,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Be&&(l.r=xa(l.r),l.g=xa(l.g),l.b=xa(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Be&&(l.r=Lr(l.r),l.g=Lr(l.g),l.b=Lr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===as?jc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Fh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Fh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[qc]:{primaries:e,whitePoint:s,transfer:jc,toXYZ:u_,fromXYZ:f_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:yi},outputColorSpaceConfig:{drawingBufferColorSpace:yi}},[yi]:{primaries:e,whitePoint:s,transfer:Be,toXYZ:u_,fromXYZ:f_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:yi}}}),o}const Me=Iy();function xa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Lr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let vr;class Fy{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{vr===void 0&&(vr=Yc("canvas")),vr.width=e.width,vr.height=e.height;const l=vr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=vr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Yc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=xa(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(xa(i[s]/255)*255):i[s]=xa(i[s]);return{data:i,width:e.width,height:e.height}}else return $t("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zy=0;class ep{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zy++}),this.uuid=Ko(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,p=l.length;d<p;d++)l[d].isDataTexture?c.push(Sd(l[d].image)):c.push(Sd(l[d]))}else c=Sd(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Sd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Fy.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:($t("Texture: Unable to serialize Texture."),{})}let By=0;const yd=new $;class Hn extends zs{constructor(e=Hn.DEFAULT_IMAGE,i=Hn.DEFAULT_MAPPING,s=_a,l=_a,c=Fn,d=Os,p=Ui,m=ci,h=Hn.DEFAULT_ANISOTROPY,x=as){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:By++}),this.uuid=Ko(),this.name="",this.source=new ep(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=m,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(yd).x}get height(){return this.source.getSize(yd).y}get depth(){return this.source.getSize(yd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){$t(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){$t(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ah:e.x=e.x-Math.floor(e.x);break;case _a:e.x=e.x<0?0:1;break;case sh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ah:e.y=e.y-Math.floor(e.y);break;case _a:e.y=e.y<0?0:1;break;case sh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=fv;Hn.DEFAULT_ANISOTROPY=1;const cp=class cp{constructor(e=0,i=0,s=0,l=1){this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,h=m[0],x=m[4],v=m[8],g=m[1],M=m[5],b=m[9],w=m[2],y=m[6],S=m[10];if(Math.abs(x-g)<.01&&Math.abs(v-w)<.01&&Math.abs(b-y)<.01){if(Math.abs(x+g)<.1&&Math.abs(v+w)<.1&&Math.abs(b+y)<.1&&Math.abs(h+M+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(h+1)/2,P=(M+1)/2,G=(S+1)/2,U=(x+g)/4,F=(v+w)/4,T=(b+y)/4;return N>P&&N>G?N<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(N),l=U/s,c=F/s):P>G?P<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(P),s=U/l,c=T/l):G<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(G),s=F/c,l=T/c),this.set(s,l,c,i),this}let C=Math.sqrt((y-b)*(y-b)+(v-w)*(v-w)+(g-x)*(g-x));return Math.abs(C)<.001&&(C=1),this.x=(y-b)/C,this.y=(v-w)/C,this.z=(g-x)/C,this.w=Math.acos((h+M+S-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Ee(this.x,e.x,i.x),this.y=Ee(this.y,e.y,i.y),this.z=Ee(this.z,e.z,i.z),this.w=Ee(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Ee(this.x,e,i),this.y=Ee(this.y,e,i),this.z=Ee(this.z,e,i),this.w=Ee(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ee(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};cp.prototype.isVector4=!0;let sn=cp;class Hy extends zs{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new sn(0,0,e,i),this.scissorTest=!1,this.viewport=new sn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},c=new Hn(l),d=s.count;for(let p=0;p<d;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:Fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new ep(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends Hy{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class Sv extends Hn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Gy extends Hn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=_a,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $c=class $c{constructor(e,i,s,l,c,d,p,m,h,x,v,g,M,b,w,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,d,p,m,h,x,v,g,M,b,w,y)}set(e,i,s,l,c,d,p,m,h,x,v,g,M,b,w,y){const S=this.elements;return S[0]=e,S[4]=i,S[8]=s,S[12]=l,S[1]=c,S[5]=d,S[9]=p,S[13]=m,S[2]=h,S[6]=x,S[10]=v,S[14]=g,S[3]=M,S[7]=b,S[11]=w,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $c().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/xr.setFromMatrixColumn(e,0).length(),c=1/xr.setFromMatrixColumn(e,1).length(),d=1/xr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,d=Math.cos(s),p=Math.sin(s),m=Math.cos(l),h=Math.sin(l),x=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const g=d*x,M=d*v,b=p*x,w=p*v;i[0]=m*x,i[4]=-m*v,i[8]=h,i[1]=M+b*h,i[5]=g-w*h,i[9]=-p*m,i[2]=w-g*h,i[6]=b+M*h,i[10]=d*m}else if(e.order==="YXZ"){const g=m*x,M=m*v,b=h*x,w=h*v;i[0]=g+w*p,i[4]=b*p-M,i[8]=d*h,i[1]=d*v,i[5]=d*x,i[9]=-p,i[2]=M*p-b,i[6]=w+g*p,i[10]=d*m}else if(e.order==="ZXY"){const g=m*x,M=m*v,b=h*x,w=h*v;i[0]=g-w*p,i[4]=-d*v,i[8]=b+M*p,i[1]=M+b*p,i[5]=d*x,i[9]=w-g*p,i[2]=-d*h,i[6]=p,i[10]=d*m}else if(e.order==="ZYX"){const g=d*x,M=d*v,b=p*x,w=p*v;i[0]=m*x,i[4]=b*h-M,i[8]=g*h+w,i[1]=m*v,i[5]=w*h+g,i[9]=M*h-b,i[2]=-h,i[6]=p*m,i[10]=d*m}else if(e.order==="YZX"){const g=d*m,M=d*h,b=p*m,w=p*h;i[0]=m*x,i[4]=w-g*v,i[8]=b*v+M,i[1]=v,i[5]=d*x,i[9]=-p*x,i[2]=-h*x,i[6]=M*v+b,i[10]=g-w*v}else if(e.order==="XZY"){const g=d*m,M=d*h,b=p*m,w=p*h;i[0]=m*x,i[4]=-v,i[8]=h*x,i[1]=g*v+w,i[5]=d*x,i[9]=M*v-b,i[2]=b*v-M,i[6]=p*x,i[10]=w*v+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vy,e,ky)}lookAt(e,i,s){const l=this.elements;return ri.subVectors(e,i),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),Ja.crossVectors(s,ri),Ja.lengthSq()===0&&(Math.abs(s.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),Ja.crossVectors(s,ri)),Ja.normalize(),fc.crossVectors(ri,Ja),l[0]=Ja.x,l[4]=fc.x,l[8]=ri.x,l[1]=Ja.y,l[5]=fc.y,l[9]=ri.y,l[2]=Ja.z,l[6]=fc.z,l[10]=ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,d=s[0],p=s[4],m=s[8],h=s[12],x=s[1],v=s[5],g=s[9],M=s[13],b=s[2],w=s[6],y=s[10],S=s[14],C=s[3],N=s[7],P=s[11],G=s[15],U=l[0],F=l[4],T=l[8],L=l[12],Y=l[1],H=l[5],K=l[9],lt=l[13],ut=l[2],X=l[6],O=l[10],z=l[14],ot=l[3],gt=l[7],Mt=l[11],I=l[15];return c[0]=d*U+p*Y+m*ut+h*ot,c[4]=d*F+p*H+m*X+h*gt,c[8]=d*T+p*K+m*O+h*Mt,c[12]=d*L+p*lt+m*z+h*I,c[1]=x*U+v*Y+g*ut+M*ot,c[5]=x*F+v*H+g*X+M*gt,c[9]=x*T+v*K+g*O+M*Mt,c[13]=x*L+v*lt+g*z+M*I,c[2]=b*U+w*Y+y*ut+S*ot,c[6]=b*F+w*H+y*X+S*gt,c[10]=b*T+w*K+y*O+S*Mt,c[14]=b*L+w*lt+y*z+S*I,c[3]=C*U+N*Y+P*ut+G*ot,c[7]=C*F+N*H+P*X+G*gt,c[11]=C*T+N*K+P*O+G*Mt,c[15]=C*L+N*lt+P*z+G*I,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],d=e[1],p=e[5],m=e[9],h=e[13],x=e[2],v=e[6],g=e[10],M=e[14],b=e[3],w=e[7],y=e[11],S=e[15],C=m*M-h*g,N=p*M-h*v,P=p*g-m*v,G=d*M-h*x,U=d*g-m*x,F=d*v-p*x;return i*(w*C-y*N+S*P)-s*(b*C-y*G+S*U)+l*(b*N-w*G+S*F)-c*(b*P-w*U+y*F)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],d=e[4],p=e[5],m=e[6],h=e[7],x=e[8],v=e[9],g=e[10],M=e[11],b=e[12],w=e[13],y=e[14],S=e[15],C=i*p-s*d,N=i*m-l*d,P=i*h-c*d,G=s*m-l*p,U=s*h-c*p,F=l*h-c*m,T=x*w-v*b,L=x*y-g*b,Y=x*S-M*b,H=v*y-g*w,K=v*S-M*w,lt=g*S-M*y,ut=C*lt-N*K+P*H+G*Y-U*L+F*T;if(ut===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/ut;return e[0]=(p*lt-m*K+h*H)*X,e[1]=(l*K-s*lt-c*H)*X,e[2]=(w*F-y*U+S*G)*X,e[3]=(g*U-v*F-M*G)*X,e[4]=(m*Y-d*lt-h*L)*X,e[5]=(i*lt-l*Y+c*L)*X,e[6]=(y*P-b*F-S*N)*X,e[7]=(x*F-g*P+M*N)*X,e[8]=(d*K-p*Y+h*T)*X,e[9]=(s*Y-i*K-c*T)*X,e[10]=(b*U-w*P+S*C)*X,e[11]=(v*P-x*U-M*C)*X,e[12]=(p*L-d*H-m*T)*X,e[13]=(i*H-s*L+l*T)*X,e[14]=(w*N-b*G-y*C)*X,e[15]=(x*G-v*N+g*C)*X,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=e.x,p=e.y,m=e.z,h=c*d,x=c*p;return this.set(h*d+s,h*p-l*m,h*m+l*p,0,h*p+l*m,x*p+s,x*m-l*d,0,h*m-l*p,x*m+l*d,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,d){return this.set(1,s,c,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,d=i._y,p=i._z,m=i._w,h=c+c,x=d+d,v=p+p,g=c*h,M=c*x,b=c*v,w=d*x,y=d*v,S=p*v,C=m*h,N=m*x,P=m*v,G=s.x,U=s.y,F=s.z;return l[0]=(1-(w+S))*G,l[1]=(M+P)*G,l[2]=(b-N)*G,l[3]=0,l[4]=(M-P)*U,l[5]=(1-(g+S))*U,l[6]=(y+C)*U,l[7]=0,l[8]=(b+N)*F,l[9]=(y-C)*F,l[10]=(1-(g+w))*F,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let d=xr.set(l[0],l[1],l[2]).length();const p=xr.set(l[4],l[5],l[6]).length(),m=xr.set(l[8],l[9],l[10]).length();c<0&&(d=-d),Ci.copy(this);const h=1/d,x=1/p,v=1/m;return Ci.elements[0]*=h,Ci.elements[1]*=h,Ci.elements[2]*=h,Ci.elements[4]*=x,Ci.elements[5]*=x,Ci.elements[6]*=x,Ci.elements[8]*=v,Ci.elements[9]*=v,Ci.elements[10]*=v,i.setFromRotationMatrix(Ci),s.x=d,s.y=p,s.z=m,this}makePerspective(e,i,s,l,c,d,p=Vi,m=!1){const h=this.elements,x=2*c/(i-e),v=2*c/(s-l),g=(i+e)/(i-e),M=(s+l)/(s-l);let b,w;if(m)b=c/(d-c),w=d*c/(d-c);else if(p===Vi)b=-(d+c)/(d-c),w=-2*d*c/(d-c);else if(p===Zo)b=-d/(d-c),w=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=x,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=v,h[9]=M,h[13]=0,h[2]=0,h[6]=0,h[10]=b,h[14]=w,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,s,l,c,d,p=Vi,m=!1){const h=this.elements,x=2/(i-e),v=2/(s-l),g=-(i+e)/(i-e),M=-(s+l)/(s-l);let b,w;if(m)b=1/(d-c),w=d/(d-c);else if(p===Vi)b=-2/(d-c),w=-(d+c)/(d-c);else if(p===Zo)b=-1/(d-c),w=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=x,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=v,h[9]=0,h[13]=M,h[2]=0,h[6]=0,h[10]=b,h[14]=w,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};$c.prototype.isMatrix4=!0;let rn=$c;const xr=new $,Ci=new rn,Vy=new $(0,0,0),ky=new $(1,1,1),Ja=new $,fc=new $,ri=new $,d_=new rn,h_=new zr;class os{constructor(e=0,i=0,s=0,l=os.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],d=l[4],p=l[8],m=l[1],h=l[5],x=l[9],v=l[2],g=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Ee(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(p,M),this._z=Math.atan2(m,h)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-d,h)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Ee(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,h));break;case"YZX":this._z=Math.asin(Ee(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,h),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(p,M));break;case"XZY":this._z=Math.asin(-Ee(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-x,M),this._y=0);break;default:$t("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return d_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(d_,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return h_.setFromEuler(this),this.setFromQuaternion(h_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}os.DEFAULT_ORDER="XYZ";class yv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Xy=0;const p_=new $,Sr=new zr,da=new rn,dc=new $,zo=new $,Wy=new $,qy=new zr,m_=new $(1,0,0),g_=new $(0,1,0),__=new $(0,0,1),v_={type:"added"},jy={type:"removed"},yr={type:"childadded",child:null},Md={type:"childremoved",child:null};class Dn extends zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xy++}),this.uuid=Ko(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dn.DEFAULT_UP.clone();const e=new $,i=new os,s=new zr,l=new $(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new rn},normalMatrix:{value:new re}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=Dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Sr.setFromAxisAngle(e,i),this.quaternion.multiply(Sr),this}rotateOnWorldAxis(e,i){return Sr.setFromAxisAngle(e,i),this.quaternion.premultiply(Sr),this}rotateX(e){return this.rotateOnAxis(m_,e)}rotateY(e){return this.rotateOnAxis(g_,e)}rotateZ(e){return this.rotateOnAxis(__,e)}translateOnAxis(e,i){return p_.copy(e).applyQuaternion(this.quaternion),this.position.add(p_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(m_,e)}translateY(e){return this.translateOnAxis(g_,e)}translateZ(e){return this.translateOnAxis(__,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(da.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?dc.copy(e):dc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?da.lookAt(zo,dc,this.up):da.lookAt(dc,zo,this.up),this.quaternion.setFromRotationMatrix(da),l&&(da.extractRotation(l.matrixWorld),Sr.setFromRotationMatrix(da),this.quaternion.premultiply(Sr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Te("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(v_),yr.child=e,this.dispatchEvent(yr),yr.child=null):Te("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(jy),Md.child=e,this.dispatchEvent(Md),Md.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),da.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),da.multiply(e.parent.matrixWorld)),e.applyMatrix4(da),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(v_),yr.child=e,this.dispatchEvent(yr),yr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,e,Wy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,qy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let h=0,x=m.length;h<x;h++){const v=m[h];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,h=this.material.length;m<h;m++)p.push(c(e.materials,this.material[m]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(e.animations,m))}}if(i){const p=d(e.geometries),m=d(e.materials),h=d(e.textures),x=d(e.images),v=d(e.shapes),g=d(e.skeletons),M=d(e.animations),b=d(e.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),h.length>0&&(s.textures=h),x.length>0&&(s.images=x),v.length>0&&(s.shapes=v),g.length>0&&(s.skeletons=g),M.length>0&&(s.animations=M),b.length>0&&(s.nodes=b)}return s.object=l,s;function d(p){const m=[];for(const h in p){const x=p[h];delete x.metadata,m.push(x)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Dn.DEFAULT_UP=new $(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ur extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yy={type:"move"};class Ed{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ur,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ur,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ur,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,d=null;const p=this._targetRay,m=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){d=!0;for(const w of e.hand.values()){const y=i.getJointPose(w,s),S=this._getHandJoint(h,w);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const x=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],g=x.position.distanceTo(v.position),M=.02,b=.005;h.inputState.pinching&&g>M+b?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=M-b&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(Yy)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),h!==null&&(h.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Ur;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const Mv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$a={h:0,s:0,l:0},hc={h:0,s:0,l:0};function bd(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class be{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=yi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Me.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Me.workingColorSpace){return this.r=e,this.g=i,this.b=s,Me.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Me.workingColorSpace){if(e=Py(e,1),i=Ee(i,0,1),s=Ee(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=bd(d,c,e+1/3),this.g=bd(d,c,e),this.b=bd(d,c,e-1/3)}return Me.colorSpaceToWorking(this,l),this}setStyle(e,i=yi){function s(c){c!==void 0&&parseFloat(c)<1&&$t("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],p=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:$t("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);$t("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=yi){const s=Mv[e.toLowerCase()];return s!==void 0?this.setHex(s,i):$t("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xa(e.r),this.g=xa(e.g),this.b=xa(e.b),this}copyLinearToSRGB(e){return this.r=Lr(e.r),this.g=Lr(e.g),this.b=Lr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yi){return Me.workingToColorSpace(In.copy(this),e),Math.round(Ee(In.r*255,0,255))*65536+Math.round(Ee(In.g*255,0,255))*256+Math.round(Ee(In.b*255,0,255))}getHexString(e=yi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Me.workingColorSpace){Me.workingToColorSpace(In.copy(this),i);const s=In.r,l=In.g,c=In.b,d=Math.max(s,l,c),p=Math.min(s,l,c);let m,h;const x=(p+d)/2;if(p===d)m=0,h=0;else{const v=d-p;switch(h=x<=.5?v/(d+p):v/(2-d-p),d){case s:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-s)/v+2;break;case c:m=(s-l)/v+4;break}m/=6}return e.h=m,e.s=h,e.l=x,e}getRGB(e,i=Me.workingColorSpace){return Me.workingToColorSpace(In.copy(this),i),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=yi){Me.workingToColorSpace(In.copy(this),e);const i=In.r,s=In.g,l=In.b;return e!==yi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL($a),this.setHSL($a.h+e,$a.s+i,$a.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL($a),e.getHSL(hc);const s=_d($a.h,hc.h,i),l=_d($a.s,hc.s,i),c=_d($a.l,hc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new be;be.NAMES=Mv;class Zy extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new os,this.environmentIntensity=1,this.environmentRotation=new os,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const wi=new $,ha=new $,Td=new $,pa=new $,Mr=new $,Er=new $,x_=new $,Ad=new $,Rd=new $,Cd=new $,wd=new sn,Dd=new sn,Ud=new sn;class Mi{constructor(e=new $,i=new $,s=new $){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),wi.subVectors(e,i),l.cross(wi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){wi.subVectors(l,i),ha.subVectors(s,i),Td.subVectors(e,i);const d=wi.dot(wi),p=wi.dot(ha),m=wi.dot(Td),h=ha.dot(ha),x=ha.dot(Td),v=d*h-p*p;if(v===0)return c.set(0,0,0),null;const g=1/v,M=(h*m-p*x)*g,b=(d*x-p*m)*g;return c.set(1-M-b,b,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,pa)===null?!1:pa.x>=0&&pa.y>=0&&pa.x+pa.y<=1}static getInterpolation(e,i,s,l,c,d,p,m){return this.getBarycoord(e,i,s,l,pa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,pa.x),m.addScaledVector(d,pa.y),m.addScaledVector(p,pa.z),m)}static getInterpolatedAttribute(e,i,s,l,c,d){return wd.setScalar(0),Dd.setScalar(0),Ud.setScalar(0),wd.fromBufferAttribute(e,i),Dd.fromBufferAttribute(e,s),Ud.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(wd,c.x),d.addScaledVector(Dd,c.y),d.addScaledVector(Ud,c.z),d}static isFrontFacing(e,i,s,l){return wi.subVectors(s,i),ha.subVectors(e,i),wi.cross(ha).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),ha.subVectors(this.a,this.b),wi.cross(ha).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Mi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Mi.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let d,p;Mr.subVectors(l,s),Er.subVectors(c,s),Ad.subVectors(e,s);const m=Mr.dot(Ad),h=Er.dot(Ad);if(m<=0&&h<=0)return i.copy(s);Rd.subVectors(e,l);const x=Mr.dot(Rd),v=Er.dot(Rd);if(x>=0&&v<=x)return i.copy(l);const g=m*v-x*h;if(g<=0&&m>=0&&x<=0)return d=m/(m-x),i.copy(s).addScaledVector(Mr,d);Cd.subVectors(e,c);const M=Mr.dot(Cd),b=Er.dot(Cd);if(b>=0&&M<=b)return i.copy(c);const w=M*h-m*b;if(w<=0&&h>=0&&b<=0)return p=h/(h-b),i.copy(s).addScaledVector(Er,p);const y=x*b-M*v;if(y<=0&&v-x>=0&&M-b>=0)return x_.subVectors(c,l),p=(v-x)/(v-x+(M-b)),i.copy(l).addScaledVector(x_,p);const S=1/(y+w+g);return d=w*S,p=g*S,i.copy(s).addScaledVector(Mr,d).addScaledVector(Er,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Qo{constructor(e=new $(1/0,1/0,1/0),i=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Di.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Di.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Di.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,p=c.count;d<p;d++)e.isMesh===!0?e.getVertexPosition(d,Di):Di.fromBufferAttribute(c,d),Di.applyMatrix4(e.matrixWorld),this.expandByPoint(Di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),pc.copy(s.boundingBox)),pc.applyMatrix4(e.matrixWorld),this.union(pc)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Di),Di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bo),mc.subVectors(this.max,Bo),br.subVectors(e.a,Bo),Tr.subVectors(e.b,Bo),Ar.subVectors(e.c,Bo),ts.subVectors(Tr,br),es.subVectors(Ar,Tr),Rs.subVectors(br,Ar);let i=[0,-ts.z,ts.y,0,-es.z,es.y,0,-Rs.z,Rs.y,ts.z,0,-ts.x,es.z,0,-es.x,Rs.z,0,-Rs.x,-ts.y,ts.x,0,-es.y,es.x,0,-Rs.y,Rs.x,0];return!Nd(i,br,Tr,Ar,mc)||(i=[1,0,0,0,1,0,0,0,1],!Nd(i,br,Tr,Ar,mc))?!1:(gc.crossVectors(ts,es),i=[gc.x,gc.y,gc.z],Nd(i,br,Tr,Ar,mc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ma[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ma[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ma[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ma[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ma[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ma[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ma[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ma[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ma),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ma=[new $,new $,new $,new $,new $,new $,new $,new $],Di=new $,pc=new Qo,br=new $,Tr=new $,Ar=new $,ts=new $,es=new $,Rs=new $,Bo=new $,mc=new $,gc=new $,Cs=new $;function Nd(o,e,i,s,l){for(let c=0,d=o.length-3;c<=d;c+=3){Cs.fromArray(o,c);const p=l.x*Math.abs(Cs.x)+l.y*Math.abs(Cs.y)+l.z*Math.abs(Cs.z),m=e.dot(Cs),h=i.dot(Cs),x=s.dot(Cs);if(Math.max(-Math.max(m,h,x),Math.min(m,h,x))>p)return!1}return!0}const gn=new $,_c=new Ue;let Ky=0;class Wi extends zs{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ky++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=s_,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)_c.fromBufferAttribute(this,i),_c.applyMatrix3(e),this.setXY(i,_c.x,_c.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix3(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyMatrix4(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.applyNormalMatrix(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)gn.fromBufferAttribute(this,i),gn.transformDirection(e),this.setXYZ(i,gn.x,gn.y,gn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Fo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=jn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Fo(i,this.array)),i}setX(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Fo(i,this.array)),i}setY(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Fo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Fo(i,this.array)),i}setW(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array),l=jn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array),l=jn(l,this.array),c=jn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==s_&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Ev extends Wi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class bv extends Wi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Un extends Wi{constructor(e,i,s){super(new Float32Array(e),i,s)}}const Qy=new Qo,Ho=new $,Ld=new $;class eu{constructor(e=new $,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):Qy.setFromPoints(e).getCenter(s);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ho.subVectors(e,this.center);const i=Ho.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Ho,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ld.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ho.copy(e.center).add(Ld)),this.expandByPoint(Ho.copy(e.center).sub(Ld))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Jy=0;const Si=new rn,Od=new Dn,Rr=new $,oi=new Qo,Go=new Qo,Mn=new $;class Zn extends zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jy++}),this.uuid=Ko(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uy(e)?bv:Ev)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new re().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Si.makeRotationFromQuaternion(e),this.applyMatrix4(Si),this}rotateX(e){return Si.makeRotationX(e),this.applyMatrix4(Si),this}rotateY(e){return Si.makeRotationY(e),this.applyMatrix4(Si),this}rotateZ(e){return Si.makeRotationZ(e),this.applyMatrix4(Si),this}translate(e,i,s){return Si.makeTranslation(e,i,s),this.applyMatrix4(Si),this}scale(e,i,s){return Si.makeScale(e,i,s),this.applyMatrix4(Si),this}lookAt(e){return Od.lookAt(e),Od.updateMatrix(),this.applyMatrix4(Od.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rr).negate(),this.translate(Rr.x,Rr.y,Rr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Un(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&$t("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Te("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];oi.setFromBufferAttribute(c),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Te('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new eu);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Te("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const s=this.boundingSphere.center;if(oi.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const p=i[c];Go.setFromBufferAttribute(p),this.morphTargetsRelative?(Mn.addVectors(oi.min,Go.min),oi.expandByPoint(Mn),Mn.addVectors(oi.max,Go.max),oi.expandByPoint(Mn)):(oi.expandByPoint(Go.min),oi.expandByPoint(Go.max))}oi.getCenter(s);let l=0;for(let c=0,d=e.count;c<d;c++)Mn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(Mn));if(i)for(let c=0,d=i.length;c<d;c++){const p=i[c],m=this.morphTargetsRelative;for(let h=0,x=p.count;h<x;h++)Mn.fromBufferAttribute(p,h),m&&(Rr.fromBufferAttribute(e,h),Mn.add(Rr)),l=Math.max(l,s.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Te('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Te("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wi(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),p=[],m=[];for(let T=0;T<s.count;T++)p[T]=new $,m[T]=new $;const h=new $,x=new $,v=new $,g=new Ue,M=new Ue,b=new Ue,w=new $,y=new $;function S(T,L,Y){h.fromBufferAttribute(s,T),x.fromBufferAttribute(s,L),v.fromBufferAttribute(s,Y),g.fromBufferAttribute(c,T),M.fromBufferAttribute(c,L),b.fromBufferAttribute(c,Y),x.sub(h),v.sub(h),M.sub(g),b.sub(g);const H=1/(M.x*b.y-b.x*M.y);isFinite(H)&&(w.copy(x).multiplyScalar(b.y).addScaledVector(v,-M.y).multiplyScalar(H),y.copy(v).multiplyScalar(M.x).addScaledVector(x,-b.x).multiplyScalar(H),p[T].add(w),p[L].add(w),p[Y].add(w),m[T].add(y),m[L].add(y),m[Y].add(y))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let T=0,L=C.length;T<L;++T){const Y=C[T],H=Y.start,K=Y.count;for(let lt=H,ut=H+K;lt<ut;lt+=3)S(e.getX(lt+0),e.getX(lt+1),e.getX(lt+2))}const N=new $,P=new $,G=new $,U=new $;function F(T){G.fromBufferAttribute(l,T),U.copy(G);const L=p[T];N.copy(L),N.sub(G.multiplyScalar(G.dot(L))).normalize(),P.crossVectors(U,L);const H=P.dot(m[T])<0?-1:1;d.setXYZW(T,N.x,N.y,N.z,H)}for(let T=0,L=C.length;T<L;++T){const Y=C[T],H=Y.start,K=Y.count;for(let lt=H,ut=H+K;lt<ut;lt+=3)F(e.getX(lt+0)),F(e.getX(lt+1)),F(e.getX(lt+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Wi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,M=s.count;g<M;g++)s.setXYZ(g,0,0,0);const l=new $,c=new $,d=new $,p=new $,m=new $,h=new $,x=new $,v=new $;if(e)for(let g=0,M=e.count;g<M;g+=3){const b=e.getX(g+0),w=e.getX(g+1),y=e.getX(g+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,w),d.fromBufferAttribute(i,y),x.subVectors(d,c),v.subVectors(l,c),x.cross(v),p.fromBufferAttribute(s,b),m.fromBufferAttribute(s,w),h.fromBufferAttribute(s,y),p.add(x),m.add(x),h.add(x),s.setXYZ(b,p.x,p.y,p.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(y,h.x,h.y,h.z)}else for(let g=0,M=i.count;g<M;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),d.fromBufferAttribute(i,g+2),x.subVectors(d,c),v.subVectors(l,c),x.cross(v),s.setXYZ(g+0,x.x,x.y,x.z),s.setXYZ(g+1,x.x,x.y,x.z),s.setXYZ(g+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Mn.fromBufferAttribute(e,i),Mn.normalize(),e.setXYZ(i,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(p,m){const h=p.array,x=p.itemSize,v=p.normalized,g=new h.constructor(m.length*x);let M=0,b=0;for(let w=0,y=m.length;w<y;w++){p.isInterleavedBufferAttribute?M=m[w]*p.data.stride+p.offset:M=m[w]*x;for(let S=0;S<x;S++)g[b++]=h[M++]}return new Wi(g,x,v)}if(this.index===null)return $t("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Zn,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],h=e(m,s);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const m=[],h=c[p];for(let x=0,v=h.length;x<v;x++){const g=h[x],M=e(g,s);m.push(M)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let p=0,m=d.length;p<m;p++){const h=d[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const h in m)m[h]!==void 0&&(e[h]=m[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const h=s[m];e.data.attributes[m]=h.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const h=this.morphAttributes[m],x=[];for(let v=0,g=h.length;v<g;v++){const M=h[v];x.push(M.toJSON(e.data))}x.length>0&&(l[m]=x,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const h in l){const x=l[h];this.setAttribute(h,x.clone(i))}const c=e.morphAttributes;for(const h in c){const x=[],v=c[h];for(let g=0,M=v.length;g<M;g++)x.push(v[g].clone(i));this.morphAttributes[h]=x}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let h=0,x=d.length;h<x;h++){const v=d[h];this.addGroup(v.start,v.count,v.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let $y=0;class Br extends zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$y++}),this.uuid=Ko(),this.name="",this.type="Material",this.blending=Nr,this.side=rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zd,this.blendDst=Kd,this.blendEquation=Ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=Or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=a_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_r,this.stencilZFail=_r,this.stencilZPass=_r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){$t(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){$t(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Nr&&(s.blending=this.blending),this.side!==rs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Zd&&(s.blendSrc=this.blendSrc),this.blendDst!==Kd&&(s.blendDst=this.blendDst),this.blendEquation!==Ns&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Or&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==a_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_r&&(s.stencilFail=this.stencilFail),this.stencilZFail!==_r&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==_r&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const p in c){const m=c[p];delete m.metadata,d.push(m)}return d}if(i){const c=l(e.textures),d=l(e.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ga=new $,Pd=new $,vc=new $,ns=new $,Id=new $,xc=new $,Fd=new $;class Tv{constructor(e=new $,i=new $(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ga)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ga.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ga.copy(this.origin).addScaledVector(this.direction,i),ga.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Pd.copy(e).add(i).multiplyScalar(.5),vc.copy(i).sub(e).normalize(),ns.copy(this.origin).sub(Pd);const c=e.distanceTo(i)*.5,d=-this.direction.dot(vc),p=ns.dot(this.direction),m=-ns.dot(vc),h=ns.lengthSq(),x=Math.abs(1-d*d);let v,g,M,b;if(x>0)if(v=d*m-p,g=d*p-m,b=c*x,v>=0)if(g>=-b)if(g<=b){const w=1/x;v*=w,g*=w,M=v*(v+d*g+2*p)+g*(d*v+g+2*m)+h}else g=c,v=Math.max(0,-(d*g+p)),M=-v*v+g*(g+2*m)+h;else g=-c,v=Math.max(0,-(d*g+p)),M=-v*v+g*(g+2*m)+h;else g<=-b?(v=Math.max(0,-(-d*c+p)),g=v>0?-c:Math.min(Math.max(-c,-m),c),M=-v*v+g*(g+2*m)+h):g<=b?(v=0,g=Math.min(Math.max(-c,-m),c),M=g*(g+2*m)+h):(v=Math.max(0,-(d*c+p)),g=v>0?c:Math.min(Math.max(-c,-m),c),M=-v*v+g*(g+2*m)+h);else g=d>0?-c:c,v=Math.max(0,-(d*g+p)),M=-v*v+g*(g+2*m)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Pd).addScaledVector(vc,g),M}intersectSphere(e,i){ga.subVectors(e.center,this.origin);const s=ga.dot(this.direction),l=ga.dot(ga)-s*s,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),p=s-d,m=s+d;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,d,p,m;const h=1/this.direction.x,x=1/this.direction.y,v=1/this.direction.z,g=this.origin;return h>=0?(s=(e.min.x-g.x)*h,l=(e.max.x-g.x)*h):(s=(e.max.x-g.x)*h,l=(e.min.x-g.x)*h),x>=0?(c=(e.min.y-g.y)*x,d=(e.max.y-g.y)*x):(c=(e.max.y-g.y)*x,d=(e.min.y-g.y)*x),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),v>=0?(p=(e.min.z-g.z)*v,m=(e.max.z-g.z)*v):(p=(e.max.z-g.z)*v,m=(e.min.z-g.z)*v),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,ga)!==null}intersectTriangle(e,i,s,l,c){Id.subVectors(i,e),xc.subVectors(s,e),Fd.crossVectors(Id,xc);let d=this.direction.dot(Fd),p;if(d>0){if(l)return null;p=1}else if(d<0)p=-1,d=-d;else return null;ns.subVectors(this.origin,e);const m=p*this.direction.dot(xc.crossVectors(ns,xc));if(m<0)return null;const h=p*this.direction.dot(Id.cross(ns));if(h<0||m+h>d)return null;const x=-p*ns.dot(Fd);return x<0?null:this.at(x/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zc extends Br{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new os,this.combine=av,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const S_=new rn,ws=new Tv,Sc=new eu,y_=new $,yc=new $,Mc=new $,Ec=new $,zd=new $,bc=new $,M_=new $,Tc=new $;class ui extends Dn{constructor(e=new Zn,i=new Zc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){bc.set(0,0,0);for(let m=0,h=c.length;m<h;m++){const x=p[m],v=c[m];x!==0&&(zd.fromBufferAttribute(v,e),d?bc.addScaledVector(zd,x):bc.addScaledVector(zd.sub(i),x))}i.add(bc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Sc.copy(s.boundingSphere),Sc.applyMatrix4(c),ws.copy(e.ray).recast(e.near),!(Sc.containsPoint(ws.origin)===!1&&(ws.intersectSphere(Sc,y_)===null||ws.origin.distanceToSquared(y_)>(e.far-e.near)**2))&&(S_.copy(c).invert(),ws.copy(e.ray).applyMatrix4(S_),!(s.boundingBox!==null&&ws.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,ws)))}_computeIntersections(e,i,s){let l;const c=this.geometry,d=this.material,p=c.index,m=c.attributes.position,h=c.attributes.uv,x=c.attributes.uv1,v=c.attributes.normal,g=c.groups,M=c.drawRange;if(p!==null)if(Array.isArray(d))for(let b=0,w=g.length;b<w;b++){const y=g[b],S=d[y.materialIndex],C=Math.max(y.start,M.start),N=Math.min(p.count,Math.min(y.start+y.count,M.start+M.count));for(let P=C,G=N;P<G;P+=3){const U=p.getX(P),F=p.getX(P+1),T=p.getX(P+2);l=Ac(this,S,e,s,h,x,v,U,F,T),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),w=Math.min(p.count,M.start+M.count);for(let y=b,S=w;y<S;y+=3){const C=p.getX(y),N=p.getX(y+1),P=p.getX(y+2);l=Ac(this,d,e,s,h,x,v,C,N,P),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let b=0,w=g.length;b<w;b++){const y=g[b],S=d[y.materialIndex],C=Math.max(y.start,M.start),N=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let P=C,G=N;P<G;P+=3){const U=P,F=P+1,T=P+2;l=Ac(this,S,e,s,h,x,v,U,F,T),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),w=Math.min(m.count,M.start+M.count);for(let y=b,S=w;y<S;y+=3){const C=y,N=y+1,P=y+2;l=Ac(this,d,e,s,h,x,v,C,N,P),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function tM(o,e,i,s,l,c,d,p){let m;if(e.side===Yn?m=s.intersectTriangle(d,c,l,!0,p):m=s.intersectTriangle(l,c,d,e.side===rs,p),m===null)return null;Tc.copy(p),Tc.applyMatrix4(o.matrixWorld);const h=i.ray.origin.distanceTo(Tc);return h<i.near||h>i.far?null:{distance:h,point:Tc.clone(),object:o}}function Ac(o,e,i,s,l,c,d,p,m,h){o.getVertexPosition(p,yc),o.getVertexPosition(m,Mc),o.getVertexPosition(h,Ec);const x=tM(o,e,i,s,yc,Mc,Ec,M_);if(x){const v=new $;Mi.getBarycoord(M_,yc,Mc,Ec,v),l&&(x.uv=Mi.getInterpolatedAttribute(l,p,m,h,v,new Ue)),c&&(x.uv1=Mi.getInterpolatedAttribute(c,p,m,h,v,new Ue)),d&&(x.normal=Mi.getInterpolatedAttribute(d,p,m,h,v,new $),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const g={a:p,b:m,c:h,normal:new $,materialIndex:0};Mi.getNormal(yc,Mc,Ec,g.normal),x.face=g,x.barycoord=v}return x}class eM extends Hn{constructor(e=null,i=1,s=1,l,c,d,p,m,h=wn,x=wn,v,g){super(null,d,p,m,h,x,l,c,v,g),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Bd=new $,nM=new $,iM=new re;class Us{constructor(e=new $(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Bd.subVectors(s,i).cross(nM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const l=e.delta(Bd),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/c;return s===!0&&(d<0||d>1)?null:i.copy(e.start).addScaledVector(l,d)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||iM.getNormalMatrix(e),l=this.coplanarPoint(Bd).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ds=new eu,aM=new Ue(.5,.5),Rc=new $;class np{constructor(e=new Us,i=new Us,s=new Us,l=new Us,c=new Us,d=new Us){this.planes=[e,i,s,l,c,d]}set(e,i,s,l,c,d){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Vi,s=!1){const l=this.planes,c=e.elements,d=c[0],p=c[1],m=c[2],h=c[3],x=c[4],v=c[5],g=c[6],M=c[7],b=c[8],w=c[9],y=c[10],S=c[11],C=c[12],N=c[13],P=c[14],G=c[15];if(l[0].setComponents(h-d,M-x,S-b,G-C).normalize(),l[1].setComponents(h+d,M+x,S+b,G+C).normalize(),l[2].setComponents(h+p,M+v,S+w,G+N).normalize(),l[3].setComponents(h-p,M-v,S-w,G-N).normalize(),s)l[4].setComponents(m,g,y,P).normalize(),l[5].setComponents(h-m,M-g,S-y,G-P).normalize();else if(l[4].setComponents(h-m,M-g,S-y,G-P).normalize(),i===Vi)l[5].setComponents(h+m,M+g,S+y,G+P).normalize();else if(i===Zo)l[5].setComponents(m,g,y,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ds.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ds)}intersectsSprite(e){Ds.center.set(0,0,0);const i=aM.distanceTo(e.center);return Ds.radius=.7071067811865476+i,Ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ds)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Rc.x=l.normal.x>0?e.max.x:e.min.x,Rc.y=l.normal.y>0?e.max.y:e.min.y,Rc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Rc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Kc extends Br{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Qc=new $,Jc=new $,E_=new rn,Vo=new Tv,Cc=new eu,Hd=new $,b_=new $;class Bh extends Dn{constructor(e=new Zn,i=new Kc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)Qc.fromBufferAttribute(i,l-1),Jc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Qc.distanceTo(Jc);e.setAttribute("lineDistance",new Un(s,1))}else $t("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Cc.copy(s.boundingSphere),Cc.applyMatrix4(l),Cc.radius+=c,e.ray.intersectsSphere(Cc)===!1)return;E_.copy(l).invert(),Vo.copy(e.ray).applyMatrix4(E_);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,h=this.isLineSegments?2:1,x=s.index,g=s.attributes.position;if(x!==null){const M=Math.max(0,d.start),b=Math.min(x.count,d.start+d.count);for(let w=M,y=b-1;w<y;w+=h){const S=x.getX(w),C=x.getX(w+1),N=wc(this,e,Vo,m,S,C,w);N&&i.push(N)}if(this.isLineLoop){const w=x.getX(b-1),y=x.getX(M),S=wc(this,e,Vo,m,w,y,b-1);S&&i.push(S)}}else{const M=Math.max(0,d.start),b=Math.min(g.count,d.start+d.count);for(let w=M,y=b-1;w<y;w+=h){const S=wc(this,e,Vo,m,w,w+1,w);S&&i.push(S)}if(this.isLineLoop){const w=wc(this,e,Vo,m,b-1,M,b-1);w&&i.push(w)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function wc(o,e,i,s,l,c,d){const p=o.geometry.attributes.position;if(Qc.fromBufferAttribute(p,l),Jc.fromBufferAttribute(p,c),i.distanceSqToSegment(Qc,Jc,Hd,b_)>s)return;Hd.applyMatrix4(o.matrixWorld);const h=e.ray.origin.distanceTo(Hd);if(!(h<e.near||h>e.far))return{distance:h,point:b_.clone().applyMatrix4(o.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:o}}const T_=new $,A_=new $;class Hh extends Bh{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)T_.fromBufferAttribute(i,l),A_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+T_.distanceTo(A_);e.setAttribute("lineDistance",new Un(s,1))}else $t("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Av extends Hn{constructor(e=[],i=Is,s,l,c,d,p,m,h,x){super(e,i,s,l,c,d,p,m,h,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ir extends Hn{constructor(e,i,s=qi,l,c,d,p=wn,m=wn,h,x=ya,v=1){if(x!==ya&&x!==Ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:v};super(g,l,c,d,p,m,x,s,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ep(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class sM extends Ir{constructor(e,i=qi,s=Is,l,c,d=wn,p=wn,m,h=ya){const x={width:e,height:e,depth:1},v=[x,x,x,x,x,x];super(e,e,i,s,l,c,d,p,m,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Rv extends Hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Hr extends Zn{constructor(e=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const p=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],h=[],x=[],v=[];let g=0,M=0;b("z","y","x",-1,-1,s,i,e,d,c,0),b("z","y","x",1,-1,s,i,-e,d,c,1),b("x","z","y",1,1,e,s,i,l,d,2),b("x","z","y",1,-1,e,s,-i,l,d,3),b("x","y","z",1,-1,e,i,s,l,c,4),b("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Un(h,3)),this.setAttribute("normal",new Un(x,3)),this.setAttribute("uv",new Un(v,2));function b(w,y,S,C,N,P,G,U,F,T,L){const Y=P/F,H=G/T,K=P/2,lt=G/2,ut=U/2,X=F+1,O=T+1;let z=0,ot=0;const gt=new $;for(let Mt=0;Mt<O;Mt++){const I=Mt*H-lt;for(let J=0;J<X;J++){const xt=J*Y-K;gt[w]=xt*C,gt[y]=I*N,gt[S]=ut,h.push(gt.x,gt.y,gt.z),gt[w]=0,gt[y]=0,gt[S]=U>0?1:-1,x.push(gt.x,gt.y,gt.z),v.push(J/F),v.push(1-Mt/T),z+=1}}for(let Mt=0;Mt<T;Mt++)for(let I=0;I<F;I++){const J=g+I+X*Mt,xt=g+I+X*(Mt+1),At=g+(I+1)+X*(Mt+1),Dt=g+(I+1)+X*Mt;m.push(J,xt,Dt),m.push(xt,At,Dt),ot+=6}p.addGroup(M,ot,L),M+=ot,g+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}const Dc=new $,Uc=new $,Gd=new $,Nc=new Mi;class rM extends Zn{constructor(e=null,i=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:i},e!==null){const l=Math.pow(10,4),c=Math.cos(Vc*i),d=e.getIndex(),p=e.getAttribute("position"),m=d?d.count:p.count,h=[0,0,0],x=["a","b","c"],v=new Array(3),g={},M=[];for(let b=0;b<m;b+=3){d?(h[0]=d.getX(b),h[1]=d.getX(b+1),h[2]=d.getX(b+2)):(h[0]=b,h[1]=b+1,h[2]=b+2);const{a:w,b:y,c:S}=Nc;if(w.fromBufferAttribute(p,h[0]),y.fromBufferAttribute(p,h[1]),S.fromBufferAttribute(p,h[2]),Nc.getNormal(Gd),v[0]=`${Math.round(w.x*l)},${Math.round(w.y*l)},${Math.round(w.z*l)}`,v[1]=`${Math.round(y.x*l)},${Math.round(y.y*l)},${Math.round(y.z*l)}`,v[2]=`${Math.round(S.x*l)},${Math.round(S.y*l)},${Math.round(S.z*l)}`,!(v[0]===v[1]||v[1]===v[2]||v[2]===v[0]))for(let C=0;C<3;C++){const N=(C+1)%3,P=v[C],G=v[N],U=Nc[x[C]],F=Nc[x[N]],T=`${P}_${G}`,L=`${G}_${P}`;L in g&&g[L]?(Gd.dot(g[L].normal)<=c&&(M.push(U.x,U.y,U.z),M.push(F.x,F.y,F.z)),g[L]=null):T in g||(g[T]={index0:h[C],index1:h[N],normal:Gd.clone()})}}for(const b in g)if(g[b]){const{index0:w,index1:y}=g[b];Dc.fromBufferAttribute(p,w),Uc.fromBufferAttribute(p,y),M.push(Dc.x,Dc.y,Dc.z),M.push(Uc.x,Uc.y,Uc.z)}this.setAttribute("position",new Un(M,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Jo extends Zn{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,d=i/2,p=Math.floor(s),m=Math.floor(l),h=p+1,x=m+1,v=e/p,g=i/m,M=[],b=[],w=[],y=[];for(let S=0;S<x;S++){const C=S*g-d;for(let N=0;N<h;N++){const P=N*v-c;b.push(P,-C,0),w.push(0,0,1),y.push(N/p),y.push(1-S/m)}}for(let S=0;S<m;S++)for(let C=0;C<p;C++){const N=C+h*S,P=C+h*(S+1),G=C+1+h*(S+1),U=C+1+h*S;M.push(N,P,U),M.push(P,G,U)}this.setIndex(M),this.setAttribute("position",new Un(b,3)),this.setAttribute("normal",new Un(w,3)),this.setAttribute("uv",new Un(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jo(e.width,e.height,e.widthSegments,e.heightSegments)}}class ip extends Zn{constructor(e=1,i=32,s=16,l=0,c=Math.PI*2,d=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:d,thetaLength:p},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(d+p,Math.PI);let h=0;const x=[],v=new $,g=new $,M=[],b=[],w=[],y=[];for(let S=0;S<=s;S++){const C=[],N=S/s;let P=0;S===0&&d===0?P=.5/i:S===s&&m===Math.PI&&(P=-.5/i);for(let G=0;G<=i;G++){const U=G/i;v.x=-e*Math.cos(l+U*c)*Math.sin(d+N*p),v.y=e*Math.cos(d+N*p),v.z=e*Math.sin(l+U*c)*Math.sin(d+N*p),b.push(v.x,v.y,v.z),g.copy(v).normalize(),w.push(g.x,g.y,g.z),y.push(U+P,1-N),C.push(h++)}x.push(C)}for(let S=0;S<s;S++)for(let C=0;C<i;C++){const N=x[S][C+1],P=x[S][C],G=x[S+1][C],U=x[S+1][C+1];(S!==0||d>0)&&M.push(N,P,U),(S!==s-1||m<Math.PI)&&M.push(P,G,U)}this.setIndex(M),this.setAttribute("position",new Un(b,3)),this.setAttribute("normal",new Un(w,3)),this.setAttribute("uv",new Un(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ip(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Fr(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];if(R_(l))l.isRenderTargetTexture?($t("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone();else if(Array.isArray(l))if(R_(l[0])){const c=[];for(let d=0,p=l.length;d<p;d++)c[d]=l[d].clone();e[i][s]=c}else e[i][s]=l.slice();else e[i][s]=l}}return e}function Bn(o){const e={};for(let i=0;i<o.length;i++){const s=Fr(o[i]);for(const l in s)e[l]=s[l]}return e}function R_(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function oM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Cv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Me.workingColorSpace}const lM={clone:Fr,merge:Bn};var cM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ji extends Br{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cM,this.fragmentShader=uM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fr(e.uniforms),this.uniformsGroups=oM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class fM extends ji{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class dM extends Br{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ih,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new os,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hM extends Br{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ey,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pM extends Br{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ap extends Dn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new be(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Vd=new rn,C_=new $,w_=new $;class wv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.mapType=ci,this.map=null,this.mapPass=null,this.matrix=new rn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new np,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;C_.setFromMatrixPosition(e.matrixWorld),i.position.copy(C_),w_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(w_),i.updateMatrixWorld(),Vd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vd,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===Zo||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Vd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Lc=new $,Oc=new zr,Fi=new $;class Dv extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=Vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Lc,Oc,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lc,Oc,Fi.set(1,1,1)).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorld.decompose(Lc,Oc,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lc,Oc,Fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const is=new $,D_=new Ue,U_=new Ue;class li extends Dv{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=zh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zh*2*Math.atan(Math.tan(Vc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(is.x,is.y).multiplyScalar(-e/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(is.x,is.y).multiplyScalar(-e/is.z)}getViewSize(e,i){return this.getViewBounds(e,D_,U_),i.subVectors(U_,D_)}setViewOffset(e,i,s,l,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Vc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,h=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*s/h,l*=d.width/m,s*=d.height/h}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class mM extends wv{constructor(){super(new li(90,1,.5,500)),this.isPointLightShadow=!0}}class gM extends ap{constructor(e,i,s=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new mM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class sp extends Dv{constructor(e=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,d=s+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,d=c+h*this.view.width,p-=x*this.view.offsetY,m=p-x*this.view.height}this.projectionMatrix.makeOrthographic(c,d,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class _M extends wv{constructor(){super(new sp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vM extends ap{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.target=new Dn,this.shadow=new _M}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class xM extends ap{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Cr=-90,wr=1;class SM extends Dn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new li(Cr,wr,e,i);l.layers=this.layers,this.add(l);const c=new li(Cr,wr,e,i);c.layers=this.layers,this.add(c);const d=new li(Cr,wr,e,i);d.layers=this.layers,this.add(d);const p=new li(Cr,wr,e,i);p.layers=this.layers,this.add(p);const m=new li(Cr,wr,e,i);m.layers=this.layers,this.add(m);const h=new li(Cr,wr,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,p,m]=i;for(const h of i)this.remove(h);if(e===Vi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Zo)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,p,m,h,x]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,1,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(s,2,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(s,3,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),s.texture.generateMipmaps=w,e.setRenderTarget(s,5,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,x),e.setRenderTarget(v,g,M),e.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class yM extends li{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class MM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,$t("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}const up=class up{constructor(e,i,s,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=s,c[3]=l,this}};up.prototype.isMatrix2=!0;let N_=up;class EM extends Hh{constructor(e=10,i=10,s=4473924,l=8947848){s=new be(s),l=new be(l);const c=i/2,d=e/i,p=e/2,m=[],h=[];for(let g=0,M=0,b=-p;g<=i;g++,b+=d){m.push(-p,0,b,p,0,b),m.push(b,0,-p,b,0,p);const w=g===c?s:l;w.toArray(h,M),M+=3,w.toArray(h,M),M+=3,w.toArray(h,M),M+=3,w.toArray(h,M),M+=3}const x=new Zn;x.setAttribute("position",new Un(m,3)),x.setAttribute("color",new Un(h,3));const v=new Kc({vertexColors:!0,toneMapped:!1});super(x,v),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function L_(o,e,i,s){const l=bM(s);switch(i){case gv:return o*e;case vv:return o*e/l.components*l.byteLength;case Kh:return o*e/l.components*l.byteLength;case Fs:return o*e*2/l.components*l.byteLength;case Qh:return o*e*2/l.components*l.byteLength;case _v:return o*e*3/l.components*l.byteLength;case Ui:return o*e*4/l.components*l.byteLength;case Jh:return o*e*4/l.components*l.byteLength;case zc:case Bc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Hc:case Gc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case oh:case ch:return Math.max(o,16)*Math.max(e,8)/4;case rh:case lh:return Math.max(o,8)*Math.max(e,8)/2;case uh:case fh:case hh:case ph:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case dh:case Xc:case mh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case gh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case _h:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case vh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case xh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Sh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case yh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Mh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Eh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case bh:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Th:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Ah:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Rh:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Ch:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case wh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Dh:case Uh:case Nh:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Lh:case Oh:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Wc:case Ph:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function bM(o){switch(o){case ci:case dv:return{byteLength:1,components:1};case jo:case hv:case Sa:return{byteLength:2,components:1};case Yh:case Zh:return{byteLength:2,components:4};case qi:case jh:case Gi:return{byteLength:4,components:1};case pv:case mv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wh}}));typeof window<"u"&&(window.__THREE__?$t("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wh);function Uv(){let o=null,e=!1,i=null,s=null;function l(c,d){i(c,d),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&o!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function TM(o){const e=new WeakMap;function i(p,m){const h=p.array,x=p.usage,v=h.byteLength,g=o.createBuffer();o.bindBuffer(m,g),o.bufferData(m,h,x),p.onUploadCallback();let M;if(h instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)M=o.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(h instanceof Int16Array)M=o.SHORT;else if(h instanceof Uint32Array)M=o.UNSIGNED_INT;else if(h instanceof Int32Array)M=o.INT;else if(h instanceof Int8Array)M=o.BYTE;else if(h instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:M,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:v}}function s(p,m,h){const x=m.array,v=m.updateRanges;if(o.bindBuffer(h,p),v.length===0)o.bufferSubData(h,0,x);else{v.sort((M,b)=>M.start-b.start);let g=0;for(let M=1;M<v.length;M++){const b=v[g],w=v[M];w.start<=b.start+b.count+1?b.count=Math.max(b.count,w.start+w.count-b.start):(++g,v[g]=w)}v.length=g+1;for(let M=0,b=v.length;M<b;M++){const w=v[M];o.bufferSubData(h,w.start*x.BYTES_PER_ELEMENT,x,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(o.deleteBuffer(m.buffer),e.delete(p))}function d(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const x=e.get(p);(!x||x.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=e.get(p);if(h===void 0)e.set(p,i(p,m));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,p,m),h.version=p.version}}return{get:l,remove:c,update:d}}var AM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,RM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,CM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,DM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,UM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,NM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,LM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,OM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,PM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,IM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,FM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,BM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,HM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,GM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,VM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,XM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,WM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,qM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,jM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,YM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ZM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,KM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,QM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,JM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$M=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,t1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,e1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,n1="gl_FragColor = linearToOutputTexel( gl_FragColor );",i1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,a1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,s1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,r1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,o1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,l1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,c1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,u1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,f1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,d1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,h1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,p1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,m1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,g1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,v1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,x1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,S1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,y1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,M1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,E1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,b1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,T1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,A1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,R1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,C1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,w1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,D1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,L1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,O1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,P1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,I1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,F1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,z1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,B1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,H1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,G1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,V1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,k1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,W1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,q1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Y1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Z1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,K1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Q1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,J1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,nE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,oE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,cE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,uE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,gE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_E=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,SE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ME=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,EE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,TE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const AE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,RE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,LE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,OE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,PE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,IE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,FE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,BE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,GE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,WE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,YE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,QE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$E=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,eb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ib=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ab=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,fe={alphahash_fragment:AM,alphahash_pars_fragment:RM,alphamap_fragment:CM,alphamap_pars_fragment:wM,alphatest_fragment:DM,alphatest_pars_fragment:UM,aomap_fragment:NM,aomap_pars_fragment:LM,batching_pars_vertex:OM,batching_vertex:PM,begin_vertex:IM,beginnormal_vertex:FM,bsdfs:zM,iridescence_fragment:BM,bumpmap_pars_fragment:HM,clipping_planes_fragment:GM,clipping_planes_pars_fragment:VM,clipping_planes_pars_vertex:kM,clipping_planes_vertex:XM,color_fragment:WM,color_pars_fragment:qM,color_pars_vertex:jM,color_vertex:YM,common:ZM,cube_uv_reflection_fragment:KM,defaultnormal_vertex:QM,displacementmap_pars_vertex:JM,displacementmap_vertex:$M,emissivemap_fragment:t1,emissivemap_pars_fragment:e1,colorspace_fragment:n1,colorspace_pars_fragment:i1,envmap_fragment:a1,envmap_common_pars_fragment:s1,envmap_pars_fragment:r1,envmap_pars_vertex:o1,envmap_physical_pars_fragment:v1,envmap_vertex:l1,fog_vertex:c1,fog_pars_vertex:u1,fog_fragment:f1,fog_pars_fragment:d1,gradientmap_pars_fragment:h1,lightmap_pars_fragment:p1,lights_lambert_fragment:m1,lights_lambert_pars_fragment:g1,lights_pars_begin:_1,lights_toon_fragment:x1,lights_toon_pars_fragment:S1,lights_phong_fragment:y1,lights_phong_pars_fragment:M1,lights_physical_fragment:E1,lights_physical_pars_fragment:b1,lights_fragment_begin:T1,lights_fragment_maps:A1,lights_fragment_end:R1,lightprobes_pars_fragment:C1,logdepthbuf_fragment:w1,logdepthbuf_pars_fragment:D1,logdepthbuf_pars_vertex:U1,logdepthbuf_vertex:N1,map_fragment:L1,map_pars_fragment:O1,map_particle_fragment:P1,map_particle_pars_fragment:I1,metalnessmap_fragment:F1,metalnessmap_pars_fragment:z1,morphinstance_vertex:B1,morphcolor_vertex:H1,morphnormal_vertex:G1,morphtarget_pars_vertex:V1,morphtarget_vertex:k1,normal_fragment_begin:X1,normal_fragment_maps:W1,normal_pars_fragment:q1,normal_pars_vertex:j1,normal_vertex:Y1,normalmap_pars_fragment:Z1,clearcoat_normal_fragment_begin:K1,clearcoat_normal_fragment_maps:Q1,clearcoat_pars_fragment:J1,iridescence_pars_fragment:$1,opaque_fragment:tE,packing:eE,premultiplied_alpha_fragment:nE,project_vertex:iE,dithering_fragment:aE,dithering_pars_fragment:sE,roughnessmap_fragment:rE,roughnessmap_pars_fragment:oE,shadowmap_pars_fragment:lE,shadowmap_pars_vertex:cE,shadowmap_vertex:uE,shadowmask_pars_fragment:fE,skinbase_vertex:dE,skinning_pars_vertex:hE,skinning_vertex:pE,skinnormal_vertex:mE,specularmap_fragment:gE,specularmap_pars_fragment:_E,tonemapping_fragment:vE,tonemapping_pars_fragment:xE,transmission_fragment:SE,transmission_pars_fragment:yE,uv_pars_fragment:ME,uv_pars_vertex:EE,uv_vertex:bE,worldpos_vertex:TE,background_vert:AE,background_frag:RE,backgroundCube_vert:CE,backgroundCube_frag:wE,cube_vert:DE,cube_frag:UE,depth_vert:NE,depth_frag:LE,distance_vert:OE,distance_frag:PE,equirect_vert:IE,equirect_frag:FE,linedashed_vert:zE,linedashed_frag:BE,meshbasic_vert:HE,meshbasic_frag:GE,meshlambert_vert:VE,meshlambert_frag:kE,meshmatcap_vert:XE,meshmatcap_frag:WE,meshnormal_vert:qE,meshnormal_frag:jE,meshphong_vert:YE,meshphong_frag:ZE,meshphysical_vert:KE,meshphysical_frag:QE,meshtoon_vert:JE,meshtoon_frag:$E,points_vert:tb,points_frag:eb,shadow_vert:nb,shadow_frag:ib,sprite_vert:ab,sprite_frag:sb},Bt={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new $},probesMax:{value:new $},probesResolution:{value:new $}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},Bi={basic:{uniforms:Bn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:Bn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new be(0)},envMapIntensity:{value:1}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:Bn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:Bn([Bt.common,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.roughnessmap,Bt.metalnessmap,Bt.fog,Bt.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:Bn([Bt.common,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.gradientmap,Bt.fog,Bt.lights,{emissive:{value:new be(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:Bn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:Bn([Bt.points,Bt.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:Bn([Bt.common,Bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:Bn([Bt.common,Bt.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:Bn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:Bn([Bt.sprite,Bt.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distance:{uniforms:Bn([Bt.common,Bt.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distance_vert,fragmentShader:fe.distance_frag},shadow:{uniforms:Bn([Bt.lights,Bt.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};Bi.physical={uniforms:Bn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const Pc={r:0,b:0,g:0},rb=new rn,Nv=new re;Nv.set(-1,0,0,0,1,0,0,0,1);function ob(o,e,i,s,l,c){const d=new be(0);let p=l===!0?0:1,m,h,x=null,v=0,g=null;function M(C){let N=C.isScene===!0?C.background:null;if(N&&N.isTexture){const P=C.backgroundBlurriness>0;N=e.get(N,P)}return N}function b(C){let N=!1;const P=M(C);P===null?y(d,p):P&&P.isColor&&(y(P,1),N=!0);const G=o.xr.getEnvironmentBlendMode();G==="additive"?i.buffers.color.setClear(0,0,0,1,c):G==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(o.autoClear||N)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function w(C,N){const P=M(N);P&&(P.isCubeTexture||P.mapping===tu)?(h===void 0&&(h=new ui(new Hr(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:Fr(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(G,U,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=P,h.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(rb.makeRotationFromEuler(N.backgroundRotation)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Nv),h.material.toneMapped=Me.getTransfer(P.colorSpace)!==Be,(x!==P||v!==P.version||g!==o.toneMapping)&&(h.material.needsUpdate=!0,x=P,v=P.version,g=o.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(m===void 0&&(m=new ui(new Jo(2,2),new ji({name:"BackgroundMaterial",uniforms:Fr(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:rs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=P,m.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,m.material.toneMapped=Me.getTransfer(P.colorSpace)!==Be,P.matrixAutoUpdate===!0&&P.updateMatrix(),m.material.uniforms.uvTransform.value.copy(P.matrix),(x!==P||v!==P.version||g!==o.toneMapping)&&(m.material.needsUpdate=!0,x=P,v=P.version,g=o.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null))}function y(C,N){C.getRGB(Pc,Cv(o)),i.buffers.color.setClear(Pc.r,Pc.g,Pc.b,N,c)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(C,N=1){d.set(C),p=N,y(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(C){p=C,y(d,p)},render:b,addToRenderList:w,dispose:S}}function lb(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,d=!1;function p(H,K,lt,ut,X){let O=!1;const z=v(H,ut,lt,K);c!==z&&(c=z,h(c.object)),O=M(H,ut,lt,X),O&&b(H,ut,lt,X),X!==null&&e.update(X,o.ELEMENT_ARRAY_BUFFER),(O||d)&&(d=!1,P(H,K,lt,ut),X!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function m(){return o.createVertexArray()}function h(H){return o.bindVertexArray(H)}function x(H){return o.deleteVertexArray(H)}function v(H,K,lt,ut){const X=ut.wireframe===!0;let O=s[K.id];O===void 0&&(O={},s[K.id]=O);const z=H.isInstancedMesh===!0?H.id:0;let ot=O[z];ot===void 0&&(ot={},O[z]=ot);let gt=ot[lt.id];gt===void 0&&(gt={},ot[lt.id]=gt);let Mt=gt[X];return Mt===void 0&&(Mt=g(m()),gt[X]=Mt),Mt}function g(H){const K=[],lt=[],ut=[];for(let X=0;X<i;X++)K[X]=0,lt[X]=0,ut[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:lt,attributeDivisors:ut,object:H,attributes:{},index:null}}function M(H,K,lt,ut){const X=c.attributes,O=K.attributes;let z=0;const ot=lt.getAttributes();for(const gt in ot)if(ot[gt].location>=0){const I=X[gt];let J=O[gt];if(J===void 0&&(gt==="instanceMatrix"&&H.instanceMatrix&&(J=H.instanceMatrix),gt==="instanceColor"&&H.instanceColor&&(J=H.instanceColor)),I===void 0||I.attribute!==J||J&&I.data!==J.data)return!0;z++}return c.attributesNum!==z||c.index!==ut}function b(H,K,lt,ut){const X={},O=K.attributes;let z=0;const ot=lt.getAttributes();for(const gt in ot)if(ot[gt].location>=0){let I=O[gt];I===void 0&&(gt==="instanceMatrix"&&H.instanceMatrix&&(I=H.instanceMatrix),gt==="instanceColor"&&H.instanceColor&&(I=H.instanceColor));const J={};J.attribute=I,I&&I.data&&(J.data=I.data),X[gt]=J,z++}c.attributes=X,c.attributesNum=z,c.index=ut}function w(){const H=c.newAttributes;for(let K=0,lt=H.length;K<lt;K++)H[K]=0}function y(H){S(H,0)}function S(H,K){const lt=c.newAttributes,ut=c.enabledAttributes,X=c.attributeDivisors;lt[H]=1,ut[H]===0&&(o.enableVertexAttribArray(H),ut[H]=1),X[H]!==K&&(o.vertexAttribDivisor(H,K),X[H]=K)}function C(){const H=c.newAttributes,K=c.enabledAttributes;for(let lt=0,ut=K.length;lt<ut;lt++)K[lt]!==H[lt]&&(o.disableVertexAttribArray(lt),K[lt]=0)}function N(H,K,lt,ut,X,O,z){z===!0?o.vertexAttribIPointer(H,K,lt,X,O):o.vertexAttribPointer(H,K,lt,ut,X,O)}function P(H,K,lt,ut){w();const X=ut.attributes,O=lt.getAttributes(),z=K.defaultAttributeValues;for(const ot in O){const gt=O[ot];if(gt.location>=0){let Mt=X[ot];if(Mt===void 0&&(ot==="instanceMatrix"&&H.instanceMatrix&&(Mt=H.instanceMatrix),ot==="instanceColor"&&H.instanceColor&&(Mt=H.instanceColor)),Mt!==void 0){const I=Mt.normalized,J=Mt.itemSize,xt=e.get(Mt);if(xt===void 0)continue;const At=xt.buffer,Dt=xt.type,rt=xt.bytesPerElement,St=Dt===o.INT||Dt===o.UNSIGNED_INT||Mt.gpuType===jh;if(Mt.isInterleavedBufferAttribute){const bt=Mt.data,Ht=bt.stride,te=Mt.offset;if(bt.isInstancedInterleavedBuffer){for(let Qt=0;Qt<gt.locationSize;Qt++)S(gt.location+Qt,bt.meshPerAttribute);H.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let Qt=0;Qt<gt.locationSize;Qt++)y(gt.location+Qt);o.bindBuffer(o.ARRAY_BUFFER,At);for(let Qt=0;Qt<gt.locationSize;Qt++)N(gt.location+Qt,J/gt.locationSize,Dt,I,Ht*rt,(te+J/gt.locationSize*Qt)*rt,St)}else{if(Mt.isInstancedBufferAttribute){for(let bt=0;bt<gt.locationSize;bt++)S(gt.location+bt,Mt.meshPerAttribute);H.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let bt=0;bt<gt.locationSize;bt++)y(gt.location+bt);o.bindBuffer(o.ARRAY_BUFFER,At);for(let bt=0;bt<gt.locationSize;bt++)N(gt.location+bt,J/gt.locationSize,Dt,I,J*rt,J/gt.locationSize*bt*rt,St)}}else if(z!==void 0){const I=z[ot];if(I!==void 0)switch(I.length){case 2:o.vertexAttrib2fv(gt.location,I);break;case 3:o.vertexAttrib3fv(gt.location,I);break;case 4:o.vertexAttrib4fv(gt.location,I);break;default:o.vertexAttrib1fv(gt.location,I)}}}}C()}function G(){L();for(const H in s){const K=s[H];for(const lt in K){const ut=K[lt];for(const X in ut){const O=ut[X];for(const z in O)x(O[z].object),delete O[z];delete ut[X]}}delete s[H]}}function U(H){if(s[H.id]===void 0)return;const K=s[H.id];for(const lt in K){const ut=K[lt];for(const X in ut){const O=ut[X];for(const z in O)x(O[z].object),delete O[z];delete ut[X]}}delete s[H.id]}function F(H){for(const K in s){const lt=s[K];for(const ut in lt){const X=lt[ut];if(X[H.id]===void 0)continue;const O=X[H.id];for(const z in O)x(O[z].object),delete O[z];delete X[H.id]}}}function T(H){for(const K in s){const lt=s[K],ut=H.isInstancedMesh===!0?H.id:0,X=lt[ut];if(X!==void 0){for(const O in X){const z=X[O];for(const ot in z)x(z[ot].object),delete z[ot];delete X[O]}delete lt[ut],Object.keys(lt).length===0&&delete s[K]}}}function L(){Y(),d=!0,c!==l&&(c=l,h(c.object))}function Y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:L,resetDefaultState:Y,dispose:G,releaseStatesOfGeometry:U,releaseStatesOfObject:T,releaseStatesOfProgram:F,initAttributes:w,enableAttribute:y,disableUnusedAttributes:C}}function cb(o,e,i){let s;function l(m){s=m}function c(m,h){o.drawArrays(s,m,h),i.update(h,s,1)}function d(m,h,x){x!==0&&(o.drawArraysInstanced(s,m,h,x),i.update(h,s,x))}function p(m,h,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,h,0,x);let g=0;for(let M=0;M<x;M++)g+=h[M];i.update(g,s,1)}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=p}function ub(o,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(F){return!(F!==Ui&&s.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(F){const T=F===Sa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==ci&&s.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Gi&&!T)}function m(F){if(F==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const x=m(h);x!==h&&($t("WebGLRenderer:",h,"not supported, using",x,"instead."),h=x);const v=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&$t("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),C=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),N=o.getParameter(o.MAX_VARYING_VECTORS),P=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),G=o.getParameter(o.MAX_SAMPLES),U=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:b,maxTextureSize:w,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:C,maxVaryings:N,maxFragmentUniforms:P,maxSamples:G,samples:U}}function fb(o){const e=this;let i=null,s=0,l=!1,c=!1;const d=new Us,p=new re,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const M=v.length!==0||g||s!==0||l;return l=g,s=v.length,M},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,g){i=x(v,g,0)},this.setState=function(v,g,M){const b=v.clippingPlanes,w=v.clipIntersection,y=v.clipShadows,S=o.get(v);if(!l||b===null||b.length===0||c&&!y)c?x(null):h();else{const C=c?0:s,N=C*4;let P=S.clippingState||null;m.value=P,P=x(b,g,N,M);for(let G=0;G!==N;++G)P[G]=i[G];S.clippingState=P,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=C}};function h(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function x(v,g,M,b){const w=v!==null?v.length:0;let y=null;if(w!==0){if(y=m.value,b!==!0||y===null){const S=M+w*4,C=g.matrixWorldInverse;p.getNormalMatrix(C),(y===null||y.length<S)&&(y=new Float32Array(S));for(let N=0,P=M;N!==w;++N,P+=4)d.copy(v[N]).applyMatrix4(C,p),d.normal.toArray(y,P),y[P+3]=d.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}const ss=4,O_=[.125,.215,.35,.446,.526,.582],Ls=20,db=256,ko=new sp,P_=new be;let kd=null,Xd=0,Wd=0,qd=!1;const hb=new $;class I_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:d=256,position:p=hb}=c;kd=this._renderer.getRenderTarget(),Xd=this._renderer.getActiveCubeFace(),Wd=this._renderer.getActiveMipmapLevel(),qd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=B_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=z_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(kd,Xd,Wd),this._renderer.xr.enabled=qd,e.scissorTest=!1,Dr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Is||e.mapping===Pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kd=this._renderer.getRenderTarget(),Xd=this._renderer.getActiveCubeFace(),Wd=this._renderer.getActiveMipmapLevel(),qd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:Sa,format:Ui,colorSpace:qc,depthBuffer:!1},l=F_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=F_(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=pb(c)),this._blurMaterial=gb(c,e,i),this._ggxMaterial=mb(c,e,i)}return l}_compileMaterial(e){const i=new ui(new Zn,e);this._renderer.compile(i,ko)}_sceneToCubeUV(e,i,s,l,c){const m=new li(90,1,i,s),h=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,M=v.toneMapping;v.getClearColor(P_),v.toneMapping=ki,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ui(new Hr,new Zc({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,y=w.material;let S=!1;const C=e.background;C?C.isColor&&(y.color.copy(C),e.background=null,S=!0):(y.color.copy(P_),S=!0);for(let N=0;N<6;N++){const P=N%3;P===0?(m.up.set(0,h[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+x[N],c.y,c.z)):P===1?(m.up.set(0,0,h[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+x[N],c.z)):(m.up.set(0,h[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+x[N]));const G=this._cubeSize;Dr(l,P*G,N>2?G:0,G,G),v.setRenderTarget(l),S&&v.render(w,m),v.render(e,m)}v.toneMapping=M,v.autoClear=g,e.background=C}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Is||e.mapping===Pr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=B_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=z_());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;Dr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,ko)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,p=this._lodMeshes[s];p.material=d;const m=d.uniforms,h=s/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),v=Math.sqrt(h*h-x*x),g=0+h*1.25,M=v*g,{_lodMax:b}=this,w=this._sizeLods[s],y=3*w*(s>b-ss?s-b+ss:0),S=4*(this._cubeSize-w);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=b-i,Dr(c,y,S,3*w,2*w),l.setRenderTarget(c),l.render(p,ko),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-s,Dr(e,y,S,3*w,2*w),l.setRenderTarget(e),l.render(p,ko)}_blur(e,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,s,l,"latitudinal",c),this._halfBlur(d,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,d,p){const m=this._renderer,h=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Te("blur direction must be either latitudinal or longitudinal!");const x=3,v=this._lodMeshes[l];v.material=h;const g=h.uniforms,M=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Ls-1),w=c/b,y=isFinite(c)?1+Math.floor(x*w):Ls;y>Ls&&$t(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ls}`);const S=[];let C=0;for(let F=0;F<Ls;++F){const T=F/w,L=Math.exp(-T*T/2);S.push(L),F===0?C+=L:F<y&&(C+=2*L)}for(let F=0;F<S.length;F++)S[F]=S[F]/C;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=S,g.latitudinal.value=d==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:N}=this;g.dTheta.value=b,g.mipInt.value=N-s;const P=this._sizeLods[l],G=3*P*(l>N-ss?l-N+ss:0),U=4*(this._cubeSize-P);Dr(i,G,U,3*P,2*P),m.setRenderTarget(i),m.render(v,ko)}}function pb(o){const e=[],i=[],s=[];let l=o;const c=o-ss+1+O_.length;for(let d=0;d<c;d++){const p=Math.pow(2,l);e.push(p);let m=1/p;d>o-ss?m=O_[d-o+ss-1]:d===0&&(m=0),i.push(m);const h=1/(p-2),x=-h,v=1+h,g=[x,x,v,x,v,v,x,x,v,v,x,v],M=6,b=6,w=3,y=2,S=1,C=new Float32Array(w*b*M),N=new Float32Array(y*b*M),P=new Float32Array(S*b*M);for(let U=0;U<M;U++){const F=U%3*2/3-1,T=U>2?0:-1,L=[F,T,0,F+2/3,T,0,F+2/3,T+1,0,F,T,0,F+2/3,T+1,0,F,T+1,0];C.set(L,w*b*U),N.set(g,y*b*U);const Y=[U,U,U,U,U,U];P.set(Y,S*b*U)}const G=new Zn;G.setAttribute("position",new Wi(C,w)),G.setAttribute("uv",new Wi(N,y)),G.setAttribute("faceIndex",new Wi(P,S)),s.push(new ui(G,null)),l>ss&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function F_(o,e,i){const s=new Xi(o,e,i);return s.texture.mapping=tu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Dr(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function mb(o,e,i){return new ji({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:db,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:nu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function gb(o,e,i){const s=new Float32Array(Ls),l=new $(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:Ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function z_(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function B_(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:va,depthTest:!1,depthWrite:!1})}function nu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Lv extends Xi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new Av(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Hr(5,5,5),c=new ji({name:"CubemapFromEquirect",uniforms:Fr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Yn,blending:va});c.uniforms.tEquirect.value=i;const d=new ui(l,c),p=i.minFilter;return i.minFilter===Os&&(i.minFilter=Fn),new SM(1,10,this).update(e,d),i.minFilter=p,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,l);e.setRenderTarget(c)}}function _b(o){let e=new WeakMap,i=new WeakMap,s=null;function l(g,M=!1){return g==null?null:M?d(g):c(g)}function c(g){if(g&&g.isTexture){const M=g.mapping;if(M===pd||M===md)if(e.has(g)){const b=e.get(g).texture;return p(b,g.mapping)}else{const b=g.image;if(b&&b.height>0){const w=new Lv(b.height);return w.fromEquirectangularTexture(o,g),e.set(g,w),g.addEventListener("dispose",h),p(w.texture,g.mapping)}else return null}}return g}function d(g){if(g&&g.isTexture){const M=g.mapping,b=M===pd||M===md,w=M===Is||M===Pr;if(b||w){let y=i.get(g);const S=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return s===null&&(s=new I_(o)),y=b?s.fromEquirectangular(g,y):s.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),y.texture;if(y!==void 0)return y.texture;{const C=g.image;return b&&C&&C.height>0||w&&C&&m(C)?(s===null&&(s=new I_(o)),y=b?s.fromEquirectangular(g):s.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),g.addEventListener("dispose",x),y.texture):null}}}return g}function p(g,M){return M===pd?g.mapping=Is:M===md&&(g.mapping=Pr),g}function m(g){let M=0;const b=6;for(let w=0;w<b;w++)g[w]!==void 0&&M++;return M===b}function h(g){const M=g.target;M.removeEventListener("dispose",h);const b=e.get(M);b!==void 0&&(e.delete(M),b.dispose())}function x(g){const M=g.target;M.removeEventListener("dispose",x);const b=i.get(M);b!==void 0&&(i.delete(M),b.dispose())}function v(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:v}}function vb(o){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=o.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Fh("WebGLRenderer: "+s+" extension not supported."),l}}}function xb(o,e,i,s){const l={},c=new WeakMap;function d(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const b in g.attributes)e.remove(g.attributes[b]);g.removeEventListener("dispose",d),delete l[g.id];const M=c.get(g);M&&(e.remove(M),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(v,g){return l[g.id]===!0||(g.addEventListener("dispose",d),l[g.id]=!0,i.memory.geometries++),g}function m(v){const g=v.attributes;for(const M in g)e.update(g[M],o.ARRAY_BUFFER)}function h(v){const g=[],M=v.index,b=v.attributes.position;let w=0;if(b===void 0)return;if(M!==null){const C=M.array;w=M.version;for(let N=0,P=C.length;N<P;N+=3){const G=C[N+0],U=C[N+1],F=C[N+2];g.push(G,U,U,F,F,G)}}else{const C=b.array;w=b.version;for(let N=0,P=C.length/3-1;N<P;N+=3){const G=N+0,U=N+1,F=N+2;g.push(G,U,U,F,F,G)}}const y=new(b.count>=65535?bv:Ev)(g,1);y.version=w;const S=c.get(v);S&&e.remove(S),c.set(v,y)}function x(v){const g=c.get(v);if(g){const M=v.index;M!==null&&g.version<M.version&&h(v)}else h(v);return c.get(v)}return{get:p,update:m,getWireframeAttribute:x}}function Sb(o,e,i){let s;function l(v){s=v}let c,d;function p(v){c=v.type,d=v.bytesPerElement}function m(v,g){o.drawElements(s,g,c,v*d),i.update(g,s,1)}function h(v,g,M){M!==0&&(o.drawElementsInstanced(s,g,c,v*d,M),i.update(g,s,M))}function x(v,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,v,0,M);let w=0;for(let y=0;y<M;y++)w+=g[y];i.update(w,s,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=h,this.renderMultiDraw=x}function yb(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,p){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=p*(c/3);break;case o.LINES:i.lines+=p*(c/2);break;case o.LINE_STRIP:i.lines+=p*(c-1);break;case o.LINE_LOOP:i.lines+=p*c;break;case o.POINTS:i.points+=p*c;break;default:Te("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function Mb(o,e,i){const s=new WeakMap,l=new sn;function c(d,p,m){const h=d.morphTargetInfluences,x=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,v=x!==void 0?x.length:0;let g=s.get(p);if(g===void 0||g.count!==v){let Y=function(){T.dispose(),s.delete(p),p.removeEventListener("dispose",Y)};var M=Y;g!==void 0&&g.texture.dispose();const b=p.morphAttributes.position!==void 0,w=p.morphAttributes.normal!==void 0,y=p.morphAttributes.color!==void 0,S=p.morphAttributes.position||[],C=p.morphAttributes.normal||[],N=p.morphAttributes.color||[];let P=0;b===!0&&(P=1),w===!0&&(P=2),y===!0&&(P=3);let G=p.attributes.position.count*P,U=1;G>e.maxTextureSize&&(U=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const F=new Float32Array(G*U*4*v),T=new Sv(F,G,U,v);T.type=Gi,T.needsUpdate=!0;const L=P*4;for(let H=0;H<v;H++){const K=S[H],lt=C[H],ut=N[H],X=G*U*4*H;for(let O=0;O<K.count;O++){const z=O*L;b===!0&&(l.fromBufferAttribute(K,O),F[X+z+0]=l.x,F[X+z+1]=l.y,F[X+z+2]=l.z,F[X+z+3]=0),w===!0&&(l.fromBufferAttribute(lt,O),F[X+z+4]=l.x,F[X+z+5]=l.y,F[X+z+6]=l.z,F[X+z+7]=0),y===!0&&(l.fromBufferAttribute(ut,O),F[X+z+8]=l.x,F[X+z+9]=l.y,F[X+z+10]=l.z,F[X+z+11]=ut.itemSize===4?l.w:1)}}g={count:v,texture:T,size:new Ue(G,U)},s.set(p,g),p.addEventListener("dispose",Y)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let b=0;for(let y=0;y<h.length;y++)b+=h[y];const w=p.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",w),m.getUniforms().setValue(o,"morphTargetInfluences",h)}m.getUniforms().setValue(o,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}return{update:c}}function Eb(o,e,i,s,l){let c=new WeakMap;function d(h){const x=l.render.frame,v=h.geometry,g=e.get(h,v);if(c.get(g)!==x&&(e.update(g),c.set(g,x)),h.isInstancedMesh&&(h.hasEventListener("dispose",m)===!1&&h.addEventListener("dispose",m),c.get(h)!==x&&(i.update(h.instanceMatrix,o.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,o.ARRAY_BUFFER),c.set(h,x))),h.isSkinnedMesh){const M=h.skeleton;c.get(M)!==x&&(M.update(),c.set(M,x))}return g}function p(){c=new WeakMap}function m(h){const x=h.target;x.removeEventListener("dispose",m),s.releaseStatesOfObject(x),i.remove(x.instanceMatrix),x.instanceColor!==null&&i.remove(x.instanceColor)}return{update:d,dispose:p}}const bb={[sv]:"LINEAR_TONE_MAPPING",[rv]:"REINHARD_TONE_MAPPING",[ov]:"CINEON_TONE_MAPPING",[qh]:"ACES_FILMIC_TONE_MAPPING",[cv]:"AGX_TONE_MAPPING",[uv]:"NEUTRAL_TONE_MAPPING",[lv]:"CUSTOM_TONE_MAPPING"};function Tb(o,e,i,s,l){const c=new Xi(e,i,{type:o,depthBuffer:s,stencilBuffer:l,depthTexture:s?new Ir(e,i):void 0}),d=new Xi(e,i,{type:Sa,depthBuffer:!1,stencilBuffer:!1}),p=new Zn;p.setAttribute("position",new Un([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Un([0,2,0,0,2,0],2));const m=new fM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new ui(p,m),x=new sp(-1,1,1,-1,0,1);let v=null,g=null,M=!1,b,w=null,y=[],S=!1;this.setSize=function(C,N){c.setSize(C,N),d.setSize(C,N);for(let P=0;P<y.length;P++){const G=y[P];G.setSize&&G.setSize(C,N)}},this.setEffects=function(C){y=C,S=y.length>0&&y[0].isRenderPass===!0;const N=c.width,P=c.height;for(let G=0;G<y.length;G++){const U=y[G];U.setSize&&U.setSize(N,P)}},this.begin=function(C,N){if(M||C.toneMapping===ki&&y.length===0)return!1;if(w=N,N!==null){const P=N.width,G=N.height;(c.width!==P||c.height!==G)&&this.setSize(P,G)}return S===!1&&C.setRenderTarget(c),b=C.toneMapping,C.toneMapping=ki,!0},this.hasRenderPass=function(){return S},this.end=function(C,N){C.toneMapping=b,M=!0;let P=c,G=d;for(let U=0;U<y.length;U++){const F=y[U];if(F.enabled!==!1&&(F.render(C,G,P,N),F.needsSwap!==!1)){const T=P;P=G,G=T}}if(v!==C.outputColorSpace||g!==C.toneMapping){v=C.outputColorSpace,g=C.toneMapping,m.defines={},Me.getTransfer(v)===Be&&(m.defines.SRGB_TRANSFER="");const U=bb[g];U&&(m.defines[U]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=P.texture,C.setRenderTarget(w),C.render(h,x),w=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),d.dispose(),p.dispose(),m.dispose()}}const Ov=new Hn,Gh=new Ir(1,1),Pv=new Sv,Iv=new Gy,Fv=new Av,H_=[],G_=[],V_=new Float32Array(16),k_=new Float32Array(9),X_=new Float32Array(4);function Gr(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let c=H_[l];if(c===void 0&&(c=new Float32Array(l),H_[l]=c),e!==0){s.toArray(c,0);for(let d=1,p=0;d!==e;++d)p+=i,o[d].toArray(c,p)}return c}function xn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function Sn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function iu(o,e){let i=G_[e];i===void 0&&(i=new Int32Array(e),G_[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function Ab(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function Rb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;o.uniform2fv(this.addr,e),Sn(i,e)}}function Cb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(xn(i,e))return;o.uniform3fv(this.addr,e),Sn(i,e)}}function wb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;o.uniform4fv(this.addr,e),Sn(i,e)}}function Db(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(xn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),Sn(i,e)}else{if(xn(i,s))return;X_.set(s),o.uniformMatrix2fv(this.addr,!1,X_),Sn(i,s)}}function Ub(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(xn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),Sn(i,e)}else{if(xn(i,s))return;k_.set(s),o.uniformMatrix3fv(this.addr,!1,k_),Sn(i,s)}}function Nb(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(xn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),Sn(i,e)}else{if(xn(i,s))return;V_.set(s),o.uniformMatrix4fv(this.addr,!1,V_),Sn(i,s)}}function Lb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function Ob(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;o.uniform2iv(this.addr,e),Sn(i,e)}}function Pb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(xn(i,e))return;o.uniform3iv(this.addr,e),Sn(i,e)}}function Ib(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;o.uniform4iv(this.addr,e),Sn(i,e)}}function Fb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function zb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;o.uniform2uiv(this.addr,e),Sn(i,e)}}function Bb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(xn(i,e))return;o.uniform3uiv(this.addr,e),Sn(i,e)}}function Hb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;o.uniform4uiv(this.addr,e),Sn(i,e)}}function Gb(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(Gh.compareFunction=i.isReversedDepthBuffer()?tp:$h,c=Gh):c=Ov,i.setTexture2D(e||c,l)}function Vb(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Iv,l)}function kb(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||Fv,l)}function Xb(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||Pv,l)}function Wb(o){switch(o){case 5126:return Ab;case 35664:return Rb;case 35665:return Cb;case 35666:return wb;case 35674:return Db;case 35675:return Ub;case 35676:return Nb;case 5124:case 35670:return Lb;case 35667:case 35671:return Ob;case 35668:case 35672:return Pb;case 35669:case 35673:return Ib;case 5125:return Fb;case 36294:return zb;case 36295:return Bb;case 36296:return Hb;case 35678:case 36198:case 36298:case 36306:case 35682:return Gb;case 35679:case 36299:case 36307:return Vb;case 35680:case 36300:case 36308:case 36293:return kb;case 36289:case 36303:case 36311:case 36292:return Xb}}function qb(o,e){o.uniform1fv(this.addr,e)}function jb(o,e){const i=Gr(e,this.size,2);o.uniform2fv(this.addr,i)}function Yb(o,e){const i=Gr(e,this.size,3);o.uniform3fv(this.addr,i)}function Zb(o,e){const i=Gr(e,this.size,4);o.uniform4fv(this.addr,i)}function Kb(o,e){const i=Gr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function Qb(o,e){const i=Gr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function Jb(o,e){const i=Gr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function $b(o,e){o.uniform1iv(this.addr,e)}function tT(o,e){o.uniform2iv(this.addr,e)}function eT(o,e){o.uniform3iv(this.addr,e)}function nT(o,e){o.uniform4iv(this.addr,e)}function iT(o,e){o.uniform1uiv(this.addr,e)}function aT(o,e){o.uniform2uiv(this.addr,e)}function sT(o,e){o.uniform3uiv(this.addr,e)}function rT(o,e){o.uniform4uiv(this.addr,e)}function oT(o,e,i){const s=this.cache,l=e.length,c=iu(i,l);xn(s,c)||(o.uniform1iv(this.addr,c),Sn(s,c));let d;this.type===o.SAMPLER_2D_SHADOW?d=Gh:d=Ov;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||d,c[p])}function lT(o,e,i){const s=this.cache,l=e.length,c=iu(i,l);xn(s,c)||(o.uniform1iv(this.addr,c),Sn(s,c));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||Iv,c[d])}function cT(o,e,i){const s=this.cache,l=e.length,c=iu(i,l);xn(s,c)||(o.uniform1iv(this.addr,c),Sn(s,c));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||Fv,c[d])}function uT(o,e,i){const s=this.cache,l=e.length,c=iu(i,l);xn(s,c)||(o.uniform1iv(this.addr,c),Sn(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||Pv,c[d])}function fT(o){switch(o){case 5126:return qb;case 35664:return jb;case 35665:return Yb;case 35666:return Zb;case 35674:return Kb;case 35675:return Qb;case 35676:return Jb;case 5124:case 35670:return $b;case 35667:case 35671:return tT;case 35668:case 35672:return eT;case 35669:case 35673:return nT;case 5125:return iT;case 36294:return aT;case 36295:return sT;case 36296:return rT;case 35678:case 36198:case 36298:case 36306:case 35682:return oT;case 35679:case 36299:case 36307:return lT;case 35680:case 36300:case 36308:case 36293:return cT;case 36289:case 36303:case 36311:case 36292:return uT}}class dT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=Wb(i.type)}}class hT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=fT(i.type)}}class pT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const p=l[c];p.setValue(e,i[p.id],s)}}}const jd=/(\w+)(\])?(\[|\.)?/g;function W_(o,e){o.seq.push(e),o.map[e.id]=e}function mT(o,e,i){const s=o.name,l=s.length;for(jd.lastIndex=0;;){const c=jd.exec(s),d=jd.lastIndex;let p=c[1];const m=c[2]==="]",h=c[3];if(m&&(p=p|0),h===void 0||h==="["&&d+2===l){W_(i,h===void 0?new dT(p,o,e):new hT(p,o,e));break}else{let v=i.map[p];v===void 0&&(v=new pT(p),W_(i,v)),i=v}}}class kc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let d=0;d<s;++d){const p=e.getActiveUniform(i,d),m=e.getUniformLocation(i,p.name);mT(p,m,this)}const l=[],c=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,d=i.length;c!==d;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in i&&s.push(d)}return s}}function q_(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const gT=37297;let _T=0;function vT(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=l;d<c;d++){const p=d+1;s.push(`${p===e?">":" "} ${p}: ${i[d]}`)}return s.join(`
`)}const j_=new re;function xT(o){Me._getMatrix(j_,Me.workingColorSpace,o);const e=`mat3( ${j_.elements.map(i=>i.toFixed(4))} )`;switch(Me.getTransfer(o)){case jc:return[e,"LinearTransferOETF"];case Be:return[e,"sRGBTransferOETF"];default:return $t("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Y_(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),c=(o.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const p=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+vT(o.getShaderSource(e),p)}else return c}function ST(o,e){const i=xT(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const yT={[sv]:"Linear",[rv]:"Reinhard",[ov]:"Cineon",[qh]:"ACESFilmic",[cv]:"AgX",[uv]:"Neutral",[lv]:"Custom"};function MT(o,e){const i=yT[e];return i===void 0?($t("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Ic=new $;function ET(){Me.getLuminanceCoefficients(Ic);const o=Ic.x.toFixed(4),e=Ic.y.toFixed(4),i=Ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bT(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function TT(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function AT(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(e,l),d=c.name;let p=1;c.type===o.FLOAT_MAT2&&(p=2),c.type===o.FLOAT_MAT3&&(p=3),c.type===o.FLOAT_MAT4&&(p=4),i[d]={type:c.type,location:o.getAttribLocation(e,d),locationSize:p}}return i}function qo(o){return o!==""}function Z_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function K_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const RT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vh(o){return o.replace(RT,wT)}const CT=new Map;function wT(o,e){let i=fe[e];if(i===void 0){const s=CT.get(e);if(s!==void 0)i=fe[s],$t('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Vh(i)}const DT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Q_(o){return o.replace(DT,UT)}function UT(o,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function J_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const NT={[Fc]:"SHADOWMAP_TYPE_PCF",[Wo]:"SHADOWMAP_TYPE_VSM"};function LT(o){return NT[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const OT={[Is]:"ENVMAP_TYPE_CUBE",[Pr]:"ENVMAP_TYPE_CUBE",[tu]:"ENVMAP_TYPE_CUBE_UV"};function PT(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":OT[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const IT={[Pr]:"ENVMAP_MODE_REFRACTION"};function FT(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":IT[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const zT={[av]:"ENVMAP_BLENDING_MULTIPLY",[Sy]:"ENVMAP_BLENDING_MIX",[yy]:"ENVMAP_BLENDING_ADD"};function BT(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":zT[o.combine]||"ENVMAP_BLENDING_NONE"}function HT(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function GT(o,e,i,s){const l=o.getContext(),c=i.defines;let d=i.vertexShader,p=i.fragmentShader;const m=LT(i),h=PT(i),x=FT(i),v=BT(i),g=HT(i),M=bT(i),b=TT(c),w=l.createProgram();let y,S,C=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(qo).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(qo).join(`
`),S.length>0&&(S+=`
`)):(y=[J_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),S=[J_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+x:"",i.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ki?"#define TONE_MAPPING":"",i.toneMapping!==ki?fe.tonemapping_pars_fragment:"",i.toneMapping!==ki?MT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,ST("linearToOutputTexel",i.outputColorSpace),ET(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(qo).join(`
`)),d=Vh(d),d=Z_(d,i),d=K_(d,i),p=Vh(p),p=Z_(p,i),p=K_(p,i),d=Q_(d),p=Q_(p),i.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",i.glslVersion===r_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===r_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const N=C+y+d,P=C+S+p,G=q_(l,l.VERTEX_SHADER,N),U=q_(l,l.FRAGMENT_SHADER,P);l.attachShader(w,G),l.attachShader(w,U),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function F(H){if(o.debug.checkShaderErrors){const K=l.getProgramInfoLog(w)||"",lt=l.getShaderInfoLog(G)||"",ut=l.getShaderInfoLog(U)||"",X=K.trim(),O=lt.trim(),z=ut.trim();let ot=!0,gt=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(ot=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,w,G,U);else{const Mt=Y_(l,G,"vertex"),I=Y_(l,U,"fragment");Te("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+X+`
`+Mt+`
`+I)}else X!==""?$t("WebGLProgram: Program Info Log:",X):(O===""||z==="")&&(gt=!1);gt&&(H.diagnostics={runnable:ot,programLog:X,vertexShader:{log:O,prefix:y},fragmentShader:{log:z,prefix:S}})}l.deleteShader(G),l.deleteShader(U),T=new kc(l,w),L=AT(l,w)}let T;this.getUniforms=function(){return T===void 0&&F(this),T};let L;this.getAttributes=function(){return L===void 0&&F(this),L};let Y=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=l.getProgramParameter(w,gT)),Y},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=_T++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=G,this.fragmentShader=U,this}let VT=0;class kT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new XT(e),i.set(e,s)),s}}class XT{constructor(e){this.id=VT++,this.code=e,this.usedTimes=0}}function WT(o){return o===Fs||o===Xc||o===Wc}function qT(o,e,i,s,l,c){const d=new yv,p=new kT,m=new Set,h=[],x=new Map,v=s.logarithmicDepthBuffer;let g=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function w(T,L,Y,H,K,lt){const ut=H.fog,X=K.geometry,O=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?H.environment:null,z=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,ot=e.get(T.envMap||O,z),gt=ot&&ot.mapping===tu?ot.image.height:null,Mt=M[T.type];T.precision!==null&&(g=s.getMaxPrecision(T.precision),g!==T.precision&&$t("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const I=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,J=I!==void 0?I.length:0;let xt=0;X.morphAttributes.position!==void 0&&(xt=1),X.morphAttributes.normal!==void 0&&(xt=2),X.morphAttributes.color!==void 0&&(xt=3);let At,Dt,rt,St;if(Mt){const ee=Bi[Mt];At=ee.vertexShader,Dt=ee.fragmentShader}else At=T.vertexShader,Dt=T.fragmentShader,p.update(T),rt=p.getVertexShaderID(T),St=p.getFragmentShaderID(T);const bt=o.getRenderTarget(),Ht=o.state.buffers.depth.getReversed(),te=K.isInstancedMesh===!0,Qt=K.isBatchedMesh===!0,Xe=!!T.map,de=!!T.matcap,ve=!!ot,Le=!!T.aoMap,ce=!!T.lightMap,on=!!T.bumpMap,je=!!T.normalMap,En=!!T.displacementMap,q=!!T.emissiveMap,tn=!!T.metalnessMap,he=!!T.roughnessMap,He=T.anisotropy>0,Rt=T.clearcoat>0,Ke=T.dispersion>0,D=T.iridescence>0,E=T.sheen>0,Q=T.transmission>0,_t=He&&!!T.anisotropyMap,Et=Rt&&!!T.clearcoatMap,Ct=Rt&&!!T.clearcoatNormalMap,Lt=Rt&&!!T.clearcoatRoughnessMap,ft=D&&!!T.iridescenceMap,dt=D&&!!T.iridescenceThicknessMap,Ot=E&&!!T.sheenColorMap,Pt=E&&!!T.sheenRoughnessMap,Ut=!!T.specularMap,wt=!!T.specularColorMap,ne=!!T.specularIntensityMap,ie=Q&&!!T.transmissionMap,pe=Q&&!!T.thicknessMap,V=!!T.gradientMap,Tt=!!T.alphaMap,pt=T.alphaTest>0,zt=!!T.alphaHash,Nt=!!T.extensions;let yt=ki;T.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(yt=o.toneMapping);const qt={shaderID:Mt,shaderType:T.type,shaderName:T.name,vertexShader:At,fragmentShader:Dt,defines:T.defines,customVertexShaderID:rt,customFragmentShaderID:St,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Qt,batchingColor:Qt&&K._colorsTexture!==null,instancing:te,instancingColor:te&&K.instanceColor!==null,instancingMorph:te&&K.morphTexture!==null,outputColorSpace:bt===null?o.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:Me.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Xe,matcap:de,envMap:ve,envMapMode:ve&&ot.mapping,envMapCubeUVHeight:gt,aoMap:Le,lightMap:ce,bumpMap:on,normalMap:je,displacementMap:En,emissiveMap:q,normalMapObjectSpace:je&&T.normalMapType===by,normalMapTangentSpace:je&&T.normalMapType===Ih,packedNormalMap:je&&T.normalMapType===Ih&&WT(T.normalMap.format),metalnessMap:tn,roughnessMap:he,anisotropy:He,anisotropyMap:_t,clearcoat:Rt,clearcoatMap:Et,clearcoatNormalMap:Ct,clearcoatRoughnessMap:Lt,dispersion:Ke,iridescence:D,iridescenceMap:ft,iridescenceThicknessMap:dt,sheen:E,sheenColorMap:Ot,sheenRoughnessMap:Pt,specularMap:Ut,specularColorMap:wt,specularIntensityMap:ne,transmission:Q,transmissionMap:ie,thicknessMap:pe,gradientMap:V,opaque:T.transparent===!1&&T.blending===Nr&&T.alphaToCoverage===!1,alphaMap:Tt,alphaTest:pt,alphaHash:zt,combine:T.combine,mapUv:Xe&&b(T.map.channel),aoMapUv:Le&&b(T.aoMap.channel),lightMapUv:ce&&b(T.lightMap.channel),bumpMapUv:on&&b(T.bumpMap.channel),normalMapUv:je&&b(T.normalMap.channel),displacementMapUv:En&&b(T.displacementMap.channel),emissiveMapUv:q&&b(T.emissiveMap.channel),metalnessMapUv:tn&&b(T.metalnessMap.channel),roughnessMapUv:he&&b(T.roughnessMap.channel),anisotropyMapUv:_t&&b(T.anisotropyMap.channel),clearcoatMapUv:Et&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Lt&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&b(T.sheenRoughnessMap.channel),specularMapUv:Ut&&b(T.specularMap.channel),specularColorMapUv:wt&&b(T.specularColorMap.channel),specularIntensityMapUv:ne&&b(T.specularIntensityMap.channel),transmissionMapUv:ie&&b(T.transmissionMap.channel),thicknessMapUv:pe&&b(T.thicknessMap.channel),alphaMapUv:Tt&&b(T.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(je||He),vertexNormals:!!X.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!X.attributes.uv&&(Xe||Tt),fog:!!ut,useFog:T.fog===!0,fogExp2:!!ut&&ut.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||X.attributes.normal===void 0&&je===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ht,skinning:K.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:xt,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:lt.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&Y.length>0,shadowMapType:o.shadowMap.type,toneMapping:yt,decodeVideoTexture:Xe&&T.map.isVideoTexture===!0&&Me.getTransfer(T.map.colorSpace)===Be,decodeVideoTextureEmissive:q&&T.emissiveMap.isVideoTexture===!0&&Me.getTransfer(T.emissiveMap.colorSpace)===Be,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Hi,flipSided:T.side===Yn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Nt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&T.extensions.multiDraw===!0||Qt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return qt.vertexUv1s=m.has(1),qt.vertexUv2s=m.has(2),qt.vertexUv3s=m.has(3),m.clear(),qt}function y(T){const L=[];if(T.shaderID?L.push(T.shaderID):(L.push(T.customVertexShaderID),L.push(T.customFragmentShaderID)),T.defines!==void 0)for(const Y in T.defines)L.push(Y),L.push(T.defines[Y]);return T.isRawShaderMaterial===!1&&(S(L,T),C(L,T),L.push(o.outputColorSpace)),L.push(T.customProgramCacheKey),L.join()}function S(T,L){T.push(L.precision),T.push(L.outputColorSpace),T.push(L.envMapMode),T.push(L.envMapCubeUVHeight),T.push(L.mapUv),T.push(L.alphaMapUv),T.push(L.lightMapUv),T.push(L.aoMapUv),T.push(L.bumpMapUv),T.push(L.normalMapUv),T.push(L.displacementMapUv),T.push(L.emissiveMapUv),T.push(L.metalnessMapUv),T.push(L.roughnessMapUv),T.push(L.anisotropyMapUv),T.push(L.clearcoatMapUv),T.push(L.clearcoatNormalMapUv),T.push(L.clearcoatRoughnessMapUv),T.push(L.iridescenceMapUv),T.push(L.iridescenceThicknessMapUv),T.push(L.sheenColorMapUv),T.push(L.sheenRoughnessMapUv),T.push(L.specularMapUv),T.push(L.specularColorMapUv),T.push(L.specularIntensityMapUv),T.push(L.transmissionMapUv),T.push(L.thicknessMapUv),T.push(L.combine),T.push(L.fogExp2),T.push(L.sizeAttenuation),T.push(L.morphTargetsCount),T.push(L.morphAttributeCount),T.push(L.numDirLights),T.push(L.numPointLights),T.push(L.numSpotLights),T.push(L.numSpotLightMaps),T.push(L.numHemiLights),T.push(L.numRectAreaLights),T.push(L.numDirLightShadows),T.push(L.numPointLightShadows),T.push(L.numSpotLightShadows),T.push(L.numSpotLightShadowsWithMaps),T.push(L.numLightProbes),T.push(L.shadowMapType),T.push(L.toneMapping),T.push(L.numClippingPlanes),T.push(L.numClipIntersection),T.push(L.depthPacking)}function C(T,L){d.disableAll(),L.instancing&&d.enable(0),L.instancingColor&&d.enable(1),L.instancingMorph&&d.enable(2),L.matcap&&d.enable(3),L.envMap&&d.enable(4),L.normalMapObjectSpace&&d.enable(5),L.normalMapTangentSpace&&d.enable(6),L.clearcoat&&d.enable(7),L.iridescence&&d.enable(8),L.alphaTest&&d.enable(9),L.vertexColors&&d.enable(10),L.vertexAlphas&&d.enable(11),L.vertexUv1s&&d.enable(12),L.vertexUv2s&&d.enable(13),L.vertexUv3s&&d.enable(14),L.vertexTangents&&d.enable(15),L.anisotropy&&d.enable(16),L.alphaHash&&d.enable(17),L.batching&&d.enable(18),L.dispersion&&d.enable(19),L.batchingColor&&d.enable(20),L.gradientMap&&d.enable(21),L.packedNormalMap&&d.enable(22),L.vertexNormals&&d.enable(23),T.push(d.mask),d.disableAll(),L.fog&&d.enable(0),L.useFog&&d.enable(1),L.flatShading&&d.enable(2),L.logarithmicDepthBuffer&&d.enable(3),L.reversedDepthBuffer&&d.enable(4),L.skinning&&d.enable(5),L.morphTargets&&d.enable(6),L.morphNormals&&d.enable(7),L.morphColors&&d.enable(8),L.premultipliedAlpha&&d.enable(9),L.shadowMapEnabled&&d.enable(10),L.doubleSided&&d.enable(11),L.flipSided&&d.enable(12),L.useDepthPacking&&d.enable(13),L.dithering&&d.enable(14),L.transmission&&d.enable(15),L.sheen&&d.enable(16),L.opaque&&d.enable(17),L.pointsUvs&&d.enable(18),L.decodeVideoTexture&&d.enable(19),L.decodeVideoTextureEmissive&&d.enable(20),L.alphaToCoverage&&d.enable(21),L.numLightProbeGrids>0&&d.enable(22),T.push(d.mask)}function N(T){const L=M[T.type];let Y;if(L){const H=Bi[L];Y=lM.clone(H.uniforms)}else Y=T.uniforms;return Y}function P(T,L){let Y=x.get(L);return Y!==void 0?++Y.usedTimes:(Y=new GT(o,L,T,l),h.push(Y),x.set(L,Y)),Y}function G(T){if(--T.usedTimes===0){const L=h.indexOf(T);h[L]=h[h.length-1],h.pop(),x.delete(T.cacheKey),T.destroy()}}function U(T){p.remove(T)}function F(){p.dispose()}return{getParameters:w,getProgramCacheKey:y,getUniforms:N,acquireProgram:P,releaseProgram:G,releaseShaderCache:U,programs:h,dispose:F}}function jT(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let p=o.get(d);return p===void 0&&(p={},o.set(d,p)),p}function s(d){o.delete(d)}function l(d,p,m){o.get(d)[p]=m}function c(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function YT(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function $_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function tv(){const o=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function d(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function p(g,M,b,w,y,S){let C=o[e];return C===void 0?(C={id:g.id,object:g,geometry:M,material:b,materialVariant:d(g),groupOrder:w,renderOrder:g.renderOrder,z:y,group:S},o[e]=C):(C.id=g.id,C.object=g,C.geometry=M,C.material=b,C.materialVariant=d(g),C.groupOrder=w,C.renderOrder=g.renderOrder,C.z=y,C.group=S),e++,C}function m(g,M,b,w,y,S){const C=p(g,M,b,w,y,S);b.transmission>0?s.push(C):b.transparent===!0?l.push(C):i.push(C)}function h(g,M,b,w,y,S){const C=p(g,M,b,w,y,S);b.transmission>0?s.unshift(C):b.transparent===!0?l.unshift(C):i.unshift(C)}function x(g,M){i.length>1&&i.sort(g||YT),s.length>1&&s.sort(M||$_),l.length>1&&l.sort(M||$_)}function v(){for(let g=e,M=o.length;g<M;g++){const b=o[g];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:h,finish:v,sort:x}}function ZT(){let o=new WeakMap;function e(s,l){const c=o.get(s);let d;return c===void 0?(d=new tv,o.set(s,[d])):l>=c.length?(d=new tv,c.push(d)):d=c[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function KT(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new $,color:new be};break;case"SpotLight":i={position:new $,direction:new $,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new $,color:new be,distance:0,decay:0};break;case"HemisphereLight":i={direction:new $,skyColor:new be,groundColor:new be};break;case"RectAreaLight":i={color:new be,position:new $,halfWidth:new $,halfHeight:new $};break}return o[e.id]=i,i}}}function QT(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let JT=0;function $T(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function tA(o){const e=new KT,i=QT(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new $);const l=new $,c=new rn,d=new rn;function p(h){let x=0,v=0,g=0;for(let L=0;L<9;L++)s.probe[L].set(0,0,0);let M=0,b=0,w=0,y=0,S=0,C=0,N=0,P=0,G=0,U=0,F=0;h.sort($T);for(let L=0,Y=h.length;L<Y;L++){const H=h[L],K=H.color,lt=H.intensity,ut=H.distance;let X=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Fs?X=H.shadow.map.texture:X=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)x+=K.r*lt,v+=K.g*lt,g+=K.b*lt;else if(H.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(H.sh.coefficients[O],lt);F++}else if(H.isDirectionalLight){const O=e.get(H);if(O.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const z=H.shadow,ot=i.get(H);ot.shadowIntensity=z.intensity,ot.shadowBias=z.bias,ot.shadowNormalBias=z.normalBias,ot.shadowRadius=z.radius,ot.shadowMapSize=z.mapSize,s.directionalShadow[M]=ot,s.directionalShadowMap[M]=X,s.directionalShadowMatrix[M]=H.shadow.matrix,C++}s.directional[M]=O,M++}else if(H.isSpotLight){const O=e.get(H);O.position.setFromMatrixPosition(H.matrixWorld),O.color.copy(K).multiplyScalar(lt),O.distance=ut,O.coneCos=Math.cos(H.angle),O.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),O.decay=H.decay,s.spot[w]=O;const z=H.shadow;if(H.map&&(s.spotLightMap[G]=H.map,G++,z.updateMatrices(H),H.castShadow&&U++),s.spotLightMatrix[w]=z.matrix,H.castShadow){const ot=i.get(H);ot.shadowIntensity=z.intensity,ot.shadowBias=z.bias,ot.shadowNormalBias=z.normalBias,ot.shadowRadius=z.radius,ot.shadowMapSize=z.mapSize,s.spotShadow[w]=ot,s.spotShadowMap[w]=X,P++}w++}else if(H.isRectAreaLight){const O=e.get(H);O.color.copy(K).multiplyScalar(lt),O.halfWidth.set(H.width*.5,0,0),O.halfHeight.set(0,H.height*.5,0),s.rectArea[y]=O,y++}else if(H.isPointLight){const O=e.get(H);if(O.color.copy(H.color).multiplyScalar(H.intensity),O.distance=H.distance,O.decay=H.decay,H.castShadow){const z=H.shadow,ot=i.get(H);ot.shadowIntensity=z.intensity,ot.shadowBias=z.bias,ot.shadowNormalBias=z.normalBias,ot.shadowRadius=z.radius,ot.shadowMapSize=z.mapSize,ot.shadowCameraNear=z.camera.near,ot.shadowCameraFar=z.camera.far,s.pointShadow[b]=ot,s.pointShadowMap[b]=X,s.pointShadowMatrix[b]=H.shadow.matrix,N++}s.point[b]=O,b++}else if(H.isHemisphereLight){const O=e.get(H);O.skyColor.copy(H.color).multiplyScalar(lt),O.groundColor.copy(H.groundColor).multiplyScalar(lt),s.hemi[S]=O,S++}}y>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Bt.LTC_FLOAT_1,s.rectAreaLTC2=Bt.LTC_FLOAT_2):(s.rectAreaLTC1=Bt.LTC_HALF_1,s.rectAreaLTC2=Bt.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=v,s.ambient[2]=g;const T=s.hash;(T.directionalLength!==M||T.pointLength!==b||T.spotLength!==w||T.rectAreaLength!==y||T.hemiLength!==S||T.numDirectionalShadows!==C||T.numPointShadows!==N||T.numSpotShadows!==P||T.numSpotMaps!==G||T.numLightProbes!==F)&&(s.directional.length=M,s.spot.length=w,s.rectArea.length=y,s.point.length=b,s.hemi.length=S,s.directionalShadow.length=C,s.directionalShadowMap.length=C,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=C,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=P+G-U,s.spotLightMap.length=G,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=F,T.directionalLength=M,T.pointLength=b,T.spotLength=w,T.rectAreaLength=y,T.hemiLength=S,T.numDirectionalShadows=C,T.numPointShadows=N,T.numSpotShadows=P,T.numSpotMaps=G,T.numLightProbes=F,s.version=JT++)}function m(h,x){let v=0,g=0,M=0,b=0,w=0;const y=x.matrixWorldInverse;for(let S=0,C=h.length;S<C;S++){const N=h[S];if(N.isDirectionalLight){const P=s.directional[v];P.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(y),v++}else if(N.isSpotLight){const P=s.spot[M];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(y),P.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(y),M++}else if(N.isRectAreaLight){const P=s.rectArea[b];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(y),d.identity(),c.copy(N.matrixWorld),c.premultiply(y),d.extractRotation(c),P.halfWidth.set(N.width*.5,0,0),P.halfHeight.set(0,N.height*.5,0),P.halfWidth.applyMatrix4(d),P.halfHeight.applyMatrix4(d),b++}else if(N.isPointLight){const P=s.point[g];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(y),g++}else if(N.isHemisphereLight){const P=s.hemi[w];P.direction.setFromMatrixPosition(N.matrixWorld),P.direction.transformDirection(y),w++}}}return{setup:p,setupView:m,state:s}}function ev(o){const e=new tA(o),i=[],s=[],l=[];function c(g){v.camera=g,i.length=0,s.length=0,l.length=0}function d(g){i.push(g)}function p(g){s.push(g)}function m(g){l.push(g)}function h(){e.setup(i)}function x(g){e.setupView(i,g)}const v={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:h,setupLightsView:x,pushLight:d,pushShadow:p,pushLightProbeGrid:m}}function eA(o){let e=new WeakMap;function i(l,c=0){const d=e.get(l);let p;return d===void 0?(p=new ev(o),e.set(l,[p])):c>=d.length?(p=new ev(o),d.push(p)):p=d[c],p}function s(){e=new WeakMap}return{get:i,dispose:s}}const nA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,aA=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],sA=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],nv=new rn,Xo=new $,Yd=new $;function rA(o,e,i){let s=new np;const l=new Ue,c=new Ue,d=new sn,p=new hM,m=new pM,h={},x=i.maxTextureSize,v={[rs]:Yn,[Yn]:rs,[Hi]:Hi},g=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:nA,fragmentShader:iA}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const b=new Zn;b.setAttribute("position",new Wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new ui(b,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fc;let S=this.type;this.render=function(U,F,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||U.length===0)return;this.type===ey&&($t("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Fc);const L=o.getRenderTarget(),Y=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),K=o.state;K.setBlending(va),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const lt=S!==this.type;lt&&F.traverse(function(ut){ut.material&&(Array.isArray(ut.material)?ut.material.forEach(X=>X.needsUpdate=!0):ut.material.needsUpdate=!0)});for(let ut=0,X=U.length;ut<X;ut++){const O=U[ut],z=O.shadow;if(z===void 0){$t("WebGLShadowMap:",O,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;l.copy(z.mapSize);const ot=z.getFrameExtents();l.multiply(ot),c.copy(z.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/ot.x),l.x=c.x*ot.x,z.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/ot.y),l.y=c.y*ot.y,z.mapSize.y=c.y));const gt=o.state.buffers.depth.getReversed();if(z.camera._reversedDepth=gt,z.map===null||lt===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Wo){if(O.isPointLight){$t("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Xi(l.x,l.y,{format:Fs,type:Sa,minFilter:Fn,magFilter:Fn,generateMipmaps:!1}),z.map.texture.name=O.name+".shadowMap",z.map.depthTexture=new Ir(l.x,l.y,Gi),z.map.depthTexture.name=O.name+".shadowMapDepth",z.map.depthTexture.format=ya,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=wn,z.map.depthTexture.magFilter=wn}else O.isPointLight?(z.map=new Lv(l.x),z.map.depthTexture=new sM(l.x,qi)):(z.map=new Xi(l.x,l.y),z.map.depthTexture=new Ir(l.x,l.y,qi)),z.map.depthTexture.name=O.name+".shadowMap",z.map.depthTexture.format=ya,this.type===Fc?(z.map.depthTexture.compareFunction=gt?tp:$h,z.map.depthTexture.minFilter=Fn,z.map.depthTexture.magFilter=Fn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=wn,z.map.depthTexture.magFilter=wn);z.camera.updateProjectionMatrix()}const Mt=z.map.isWebGLCubeRenderTarget?6:1;for(let I=0;I<Mt;I++){if(z.map.isWebGLCubeRenderTarget)o.setRenderTarget(z.map,I),o.clear();else{I===0&&(o.setRenderTarget(z.map),o.clear());const J=z.getViewport(I);d.set(c.x*J.x,c.y*J.y,c.x*J.z,c.y*J.w),K.viewport(d)}if(O.isPointLight){const J=z.camera,xt=z.matrix,At=O.distance||J.far;At!==J.far&&(J.far=At,J.updateProjectionMatrix()),Xo.setFromMatrixPosition(O.matrixWorld),J.position.copy(Xo),Yd.copy(J.position),Yd.add(aA[I]),J.up.copy(sA[I]),J.lookAt(Yd),J.updateMatrixWorld(),xt.makeTranslation(-Xo.x,-Xo.y,-Xo.z),nv.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),z._frustum.setFromProjectionMatrix(nv,J.coordinateSystem,J.reversedDepth)}else z.updateMatrices(O);s=z.getFrustum(),P(F,T,z.camera,O,this.type)}z.isPointLightShadow!==!0&&this.type===Wo&&C(z,T),z.needsUpdate=!1}S=this.type,y.needsUpdate=!1,o.setRenderTarget(L,Y,H)};function C(U,F){const T=e.update(w);g.defines.VSM_SAMPLES!==U.blurSamples&&(g.defines.VSM_SAMPLES=U.blurSamples,M.defines.VSM_SAMPLES=U.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Xi(l.x,l.y,{format:Fs,type:Sa})),g.uniforms.shadow_pass.value=U.map.depthTexture,g.uniforms.resolution.value=U.mapSize,g.uniforms.radius.value=U.radius,o.setRenderTarget(U.mapPass),o.clear(),o.renderBufferDirect(F,null,T,g,w,null),M.uniforms.shadow_pass.value=U.mapPass.texture,M.uniforms.resolution.value=U.mapSize,M.uniforms.radius.value=U.radius,o.setRenderTarget(U.map),o.clear(),o.renderBufferDirect(F,null,T,M,w,null)}function N(U,F,T,L){let Y=null;const H=T.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(H!==void 0)Y=H;else if(Y=T.isPointLight===!0?m:p,o.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const K=Y.uuid,lt=F.uuid;let ut=h[K];ut===void 0&&(ut={},h[K]=ut);let X=ut[lt];X===void 0&&(X=Y.clone(),ut[lt]=X,F.addEventListener("dispose",G)),Y=X}if(Y.visible=F.visible,Y.wireframe=F.wireframe,L===Wo?Y.side=F.shadowSide!==null?F.shadowSide:F.side:Y.side=F.shadowSide!==null?F.shadowSide:v[F.side],Y.alphaMap=F.alphaMap,Y.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,Y.map=F.map,Y.clipShadows=F.clipShadows,Y.clippingPlanes=F.clippingPlanes,Y.clipIntersection=F.clipIntersection,Y.displacementMap=F.displacementMap,Y.displacementScale=F.displacementScale,Y.displacementBias=F.displacementBias,Y.wireframeLinewidth=F.wireframeLinewidth,Y.linewidth=F.linewidth,T.isPointLight===!0&&Y.isMeshDistanceMaterial===!0){const K=o.properties.get(Y);K.light=T}return Y}function P(U,F,T,L,Y){if(U.visible===!1)return;if(U.layers.test(F.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&Y===Wo)&&(!U.frustumCulled||s.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,U.matrixWorld);const lt=e.update(U),ut=U.material;if(Array.isArray(ut)){const X=lt.groups;for(let O=0,z=X.length;O<z;O++){const ot=X[O],gt=ut[ot.materialIndex];if(gt&&gt.visible){const Mt=N(U,gt,L,Y);U.onBeforeShadow(o,U,F,T,lt,Mt,ot),o.renderBufferDirect(T,null,lt,Mt,U,ot),U.onAfterShadow(o,U,F,T,lt,Mt,ot)}}}else if(ut.visible){const X=N(U,ut,L,Y);U.onBeforeShadow(o,U,F,T,lt,X,null),o.renderBufferDirect(T,null,lt,X,U,null),U.onAfterShadow(o,U,F,T,lt,X,null)}}const K=U.children;for(let lt=0,ut=K.length;lt<ut;lt++)P(K[lt],F,T,L,Y)}function G(U){U.target.removeEventListener("dispose",G);for(const T in h){const L=h[T],Y=U.target.uuid;Y in L&&(L[Y].dispose(),delete L[Y])}}}function oA(o,e){function i(){let V=!1;const Tt=new sn;let pt=null;const zt=new sn(0,0,0,0);return{setMask:function(Nt){pt!==Nt&&!V&&(o.colorMask(Nt,Nt,Nt,Nt),pt=Nt)},setLocked:function(Nt){V=Nt},setClear:function(Nt,yt,qt,ee,en){en===!0&&(Nt*=ee,yt*=ee,qt*=ee),Tt.set(Nt,yt,qt,ee),zt.equals(Tt)===!1&&(o.clearColor(Nt,yt,qt,ee),zt.copy(Tt))},reset:function(){V=!1,pt=null,zt.set(-1,0,0,0)}}}function s(){let V=!1,Tt=!1,pt=null,zt=null,Nt=null;return{setReversed:function(yt){if(Tt!==yt){const qt=e.get("EXT_clip_control");yt?qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.ZERO_TO_ONE_EXT):qt.clipControlEXT(qt.LOWER_LEFT_EXT,qt.NEGATIVE_ONE_TO_ONE_EXT),Tt=yt;const ee=Nt;Nt=null,this.setClear(ee)}},getReversed:function(){return Tt},setTest:function(yt){yt?bt(o.DEPTH_TEST):Ht(o.DEPTH_TEST)},setMask:function(yt){pt!==yt&&!V&&(o.depthMask(yt),pt=yt)},setFunc:function(yt){if(Tt&&(yt=Oy[yt]),zt!==yt){switch(yt){case Qd:o.depthFunc(o.NEVER);break;case Jd:o.depthFunc(o.ALWAYS);break;case $d:o.depthFunc(o.LESS);break;case Or:o.depthFunc(o.LEQUAL);break;case th:o.depthFunc(o.EQUAL);break;case eh:o.depthFunc(o.GEQUAL);break;case nh:o.depthFunc(o.GREATER);break;case ih:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}zt=yt}},setLocked:function(yt){V=yt},setClear:function(yt){Nt!==yt&&(Nt=yt,Tt&&(yt=1-yt),o.clearDepth(yt))},reset:function(){V=!1,pt=null,zt=null,Nt=null,Tt=!1}}}function l(){let V=!1,Tt=null,pt=null,zt=null,Nt=null,yt=null,qt=null,ee=null,en=null;return{setTest:function(we){V||(we?bt(o.STENCIL_TEST):Ht(o.STENCIL_TEST))},setMask:function(we){Tt!==we&&!V&&(o.stencilMask(we),Tt=we)},setFunc:function(we,fi,Kn){(pt!==we||zt!==fi||Nt!==Kn)&&(o.stencilFunc(we,fi,Kn),pt=we,zt=fi,Nt=Kn)},setOp:function(we,fi,Kn){(yt!==we||qt!==fi||ee!==Kn)&&(o.stencilOp(we,fi,Kn),yt=we,qt=fi,ee=Kn)},setLocked:function(we){V=we},setClear:function(we){en!==we&&(o.clearStencil(we),en=we)},reset:function(){V=!1,Tt=null,pt=null,zt=null,Nt=null,yt=null,qt=null,ee=null,en=null}}}const c=new i,d=new s,p=new l,m=new WeakMap,h=new WeakMap;let x={},v={},g={},M=new WeakMap,b=[],w=null,y=!1,S=null,C=null,N=null,P=null,G=null,U=null,F=null,T=new be(0,0,0),L=0,Y=!1,H=null,K=null,lt=null,ut=null,X=null;const O=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,ot=0;const gt=o.getParameter(o.VERSION);gt.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(gt)[1]),z=ot>=1):gt.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(gt)[1]),z=ot>=2);let Mt=null,I={};const J=o.getParameter(o.SCISSOR_BOX),xt=o.getParameter(o.VIEWPORT),At=new sn().fromArray(J),Dt=new sn().fromArray(xt);function rt(V,Tt,pt,zt){const Nt=new Uint8Array(4),yt=o.createTexture();o.bindTexture(V,yt),o.texParameteri(V,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(V,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let qt=0;qt<pt;qt++)V===o.TEXTURE_3D||V===o.TEXTURE_2D_ARRAY?o.texImage3D(Tt,0,o.RGBA,1,1,zt,0,o.RGBA,o.UNSIGNED_BYTE,Nt):o.texImage2D(Tt+qt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Nt);return yt}const St={};St[o.TEXTURE_2D]=rt(o.TEXTURE_2D,o.TEXTURE_2D,1),St[o.TEXTURE_CUBE_MAP]=rt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[o.TEXTURE_2D_ARRAY]=rt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),St[o.TEXTURE_3D]=rt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),p.setClear(0),bt(o.DEPTH_TEST),d.setFunc(Or),on(!1),je(t_),bt(o.CULL_FACE),Le(va);function bt(V){x[V]!==!0&&(o.enable(V),x[V]=!0)}function Ht(V){x[V]!==!1&&(o.disable(V),x[V]=!1)}function te(V,Tt){return g[V]!==Tt?(o.bindFramebuffer(V,Tt),g[V]=Tt,V===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Tt),V===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Tt),!0):!1}function Qt(V,Tt){let pt=b,zt=!1;if(V){pt=M.get(Tt),pt===void 0&&(pt=[],M.set(Tt,pt));const Nt=V.textures;if(pt.length!==Nt.length||pt[0]!==o.COLOR_ATTACHMENT0){for(let yt=0,qt=Nt.length;yt<qt;yt++)pt[yt]=o.COLOR_ATTACHMENT0+yt;pt.length=Nt.length,zt=!0}}else pt[0]!==o.BACK&&(pt[0]=o.BACK,zt=!0);zt&&o.drawBuffers(pt)}function Xe(V){return w!==V?(o.useProgram(V),w=V,!0):!1}const de={[Ns]:o.FUNC_ADD,[iy]:o.FUNC_SUBTRACT,[ay]:o.FUNC_REVERSE_SUBTRACT};de[sy]=o.MIN,de[ry]=o.MAX;const ve={[oy]:o.ZERO,[ly]:o.ONE,[cy]:o.SRC_COLOR,[Zd]:o.SRC_ALPHA,[my]:o.SRC_ALPHA_SATURATE,[hy]:o.DST_COLOR,[fy]:o.DST_ALPHA,[uy]:o.ONE_MINUS_SRC_COLOR,[Kd]:o.ONE_MINUS_SRC_ALPHA,[py]:o.ONE_MINUS_DST_COLOR,[dy]:o.ONE_MINUS_DST_ALPHA,[gy]:o.CONSTANT_COLOR,[_y]:o.ONE_MINUS_CONSTANT_COLOR,[vy]:o.CONSTANT_ALPHA,[xy]:o.ONE_MINUS_CONSTANT_ALPHA};function Le(V,Tt,pt,zt,Nt,yt,qt,ee,en,we){if(V===va){y===!0&&(Ht(o.BLEND),y=!1);return}if(y===!1&&(bt(o.BLEND),y=!0),V!==ny){if(V!==S||we!==Y){if((C!==Ns||G!==Ns)&&(o.blendEquation(o.FUNC_ADD),C=Ns,G=Ns),we)switch(V){case Nr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case e_:o.blendFunc(o.ONE,o.ONE);break;case n_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case i_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Te("WebGLState: Invalid blending: ",V);break}else switch(V){case Nr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case e_:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case n_:Te("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case i_:Te("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Te("WebGLState: Invalid blending: ",V);break}N=null,P=null,U=null,F=null,T.set(0,0,0),L=0,S=V,Y=we}return}Nt=Nt||Tt,yt=yt||pt,qt=qt||zt,(Tt!==C||Nt!==G)&&(o.blendEquationSeparate(de[Tt],de[Nt]),C=Tt,G=Nt),(pt!==N||zt!==P||yt!==U||qt!==F)&&(o.blendFuncSeparate(ve[pt],ve[zt],ve[yt],ve[qt]),N=pt,P=zt,U=yt,F=qt),(ee.equals(T)===!1||en!==L)&&(o.blendColor(ee.r,ee.g,ee.b,en),T.copy(ee),L=en),S=V,Y=!1}function ce(V,Tt){V.side===Hi?Ht(o.CULL_FACE):bt(o.CULL_FACE);let pt=V.side===Yn;Tt&&(pt=!pt),on(pt),V.blending===Nr&&V.transparent===!1?Le(va):Le(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),d.setFunc(V.depthFunc),d.setTest(V.depthTest),d.setMask(V.depthWrite),c.setMask(V.colorWrite);const zt=V.stencilWrite;p.setTest(zt),zt&&(p.setMask(V.stencilWriteMask),p.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),p.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),q(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?bt(o.SAMPLE_ALPHA_TO_COVERAGE):Ht(o.SAMPLE_ALPHA_TO_COVERAGE)}function on(V){H!==V&&(V?o.frontFace(o.CW):o.frontFace(o.CCW),H=V)}function je(V){V!==$S?(bt(o.CULL_FACE),V!==K&&(V===t_?o.cullFace(o.BACK):V===ty?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ht(o.CULL_FACE),K=V}function En(V){V!==lt&&(z&&o.lineWidth(V),lt=V)}function q(V,Tt,pt){V?(bt(o.POLYGON_OFFSET_FILL),(ut!==Tt||X!==pt)&&(ut=Tt,X=pt,d.getReversed()&&(Tt=-Tt),o.polygonOffset(Tt,pt))):Ht(o.POLYGON_OFFSET_FILL)}function tn(V){V?bt(o.SCISSOR_TEST):Ht(o.SCISSOR_TEST)}function he(V){V===void 0&&(V=o.TEXTURE0+O-1),Mt!==V&&(o.activeTexture(V),Mt=V)}function He(V,Tt,pt){pt===void 0&&(Mt===null?pt=o.TEXTURE0+O-1:pt=Mt);let zt=I[pt];zt===void 0&&(zt={type:void 0,texture:void 0},I[pt]=zt),(zt.type!==V||zt.texture!==Tt)&&(Mt!==pt&&(o.activeTexture(pt),Mt=pt),o.bindTexture(V,Tt||St[V]),zt.type=V,zt.texture=Tt)}function Rt(){const V=I[Mt];V!==void 0&&V.type!==void 0&&(o.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Ke(){try{o.compressedTexImage2D(...arguments)}catch(V){Te("WebGLState:",V)}}function D(){try{o.compressedTexImage3D(...arguments)}catch(V){Te("WebGLState:",V)}}function E(){try{o.texSubImage2D(...arguments)}catch(V){Te("WebGLState:",V)}}function Q(){try{o.texSubImage3D(...arguments)}catch(V){Te("WebGLState:",V)}}function _t(){try{o.compressedTexSubImage2D(...arguments)}catch(V){Te("WebGLState:",V)}}function Et(){try{o.compressedTexSubImage3D(...arguments)}catch(V){Te("WebGLState:",V)}}function Ct(){try{o.texStorage2D(...arguments)}catch(V){Te("WebGLState:",V)}}function Lt(){try{o.texStorage3D(...arguments)}catch(V){Te("WebGLState:",V)}}function ft(){try{o.texImage2D(...arguments)}catch(V){Te("WebGLState:",V)}}function dt(){try{o.texImage3D(...arguments)}catch(V){Te("WebGLState:",V)}}function Ot(V){return v[V]!==void 0?v[V]:o.getParameter(V)}function Pt(V,Tt){v[V]!==Tt&&(o.pixelStorei(V,Tt),v[V]=Tt)}function Ut(V){At.equals(V)===!1&&(o.scissor(V.x,V.y,V.z,V.w),At.copy(V))}function wt(V){Dt.equals(V)===!1&&(o.viewport(V.x,V.y,V.z,V.w),Dt.copy(V))}function ne(V,Tt){let pt=h.get(Tt);pt===void 0&&(pt=new WeakMap,h.set(Tt,pt));let zt=pt.get(V);zt===void 0&&(zt=o.getUniformBlockIndex(Tt,V.name),pt.set(V,zt))}function ie(V,Tt){const zt=h.get(Tt).get(V);m.get(Tt)!==zt&&(o.uniformBlockBinding(Tt,zt,V.__bindingPointIndex),m.set(Tt,zt))}function pe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),x={},v={},Mt=null,I={},g={},M=new WeakMap,b=[],w=null,y=!1,S=null,C=null,N=null,P=null,G=null,U=null,F=null,T=new be(0,0,0),L=0,Y=!1,H=null,K=null,lt=null,ut=null,X=null,At.set(0,0,o.canvas.width,o.canvas.height),Dt.set(0,0,o.canvas.width,o.canvas.height),c.reset(),d.reset(),p.reset()}return{buffers:{color:c,depth:d,stencil:p},enable:bt,disable:Ht,bindFramebuffer:te,drawBuffers:Qt,useProgram:Xe,setBlending:Le,setMaterial:ce,setFlipSided:on,setCullFace:je,setLineWidth:En,setPolygonOffset:q,setScissorTest:tn,activeTexture:he,bindTexture:He,unbindTexture:Rt,compressedTexImage2D:Ke,compressedTexImage3D:D,texImage2D:ft,texImage3D:dt,pixelStorei:Pt,getParameter:Ot,updateUBOMapping:ne,uniformBlockBinding:ie,texStorage2D:Ct,texStorage3D:Lt,texSubImage2D:E,texSubImage3D:Q,compressedTexSubImage2D:_t,compressedTexSubImage3D:Et,scissor:Ut,viewport:wt,reset:pe}}function lA(o,e,i,s,l,c,d){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ue,x=new WeakMap,v=new Set;let g;const M=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(D,E){return b?new OffscreenCanvas(D,E):Yc("canvas")}function y(D,E,Q){let _t=1;const Et=Ke(D);if((Et.width>Q||Et.height>Q)&&(_t=Q/Math.max(Et.width,Et.height)),_t<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Ct=Math.floor(_t*Et.width),Lt=Math.floor(_t*Et.height);g===void 0&&(g=w(Ct,Lt));const ft=E?w(Ct,Lt):g;return ft.width=Ct,ft.height=Lt,ft.getContext("2d").drawImage(D,0,0,Ct,Lt),$t("WebGLRenderer: Texture has been resized from ("+Et.width+"x"+Et.height+") to ("+Ct+"x"+Lt+")."),ft}else return"data"in D&&$t("WebGLRenderer: Image in DataTexture is too big ("+Et.width+"x"+Et.height+")."),D;return D}function S(D){return D.generateMipmaps}function C(D){o.generateMipmap(D)}function N(D){return D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?o.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function P(D,E,Q,_t,Et,Ct=!1){if(D!==null){if(o[D]!==void 0)return o[D];$t("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Lt;_t&&(Lt=e.get("EXT_texture_norm16"),Lt||$t("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ft=E;if(E===o.RED&&(Q===o.FLOAT&&(ft=o.R32F),Q===o.HALF_FLOAT&&(ft=o.R16F),Q===o.UNSIGNED_BYTE&&(ft=o.R8),Q===o.UNSIGNED_SHORT&&Lt&&(ft=Lt.R16_EXT),Q===o.SHORT&&Lt&&(ft=Lt.R16_SNORM_EXT)),E===o.RED_INTEGER&&(Q===o.UNSIGNED_BYTE&&(ft=o.R8UI),Q===o.UNSIGNED_SHORT&&(ft=o.R16UI),Q===o.UNSIGNED_INT&&(ft=o.R32UI),Q===o.BYTE&&(ft=o.R8I),Q===o.SHORT&&(ft=o.R16I),Q===o.INT&&(ft=o.R32I)),E===o.RG&&(Q===o.FLOAT&&(ft=o.RG32F),Q===o.HALF_FLOAT&&(ft=o.RG16F),Q===o.UNSIGNED_BYTE&&(ft=o.RG8),Q===o.UNSIGNED_SHORT&&Lt&&(ft=Lt.RG16_EXT),Q===o.SHORT&&Lt&&(ft=Lt.RG16_SNORM_EXT)),E===o.RG_INTEGER&&(Q===o.UNSIGNED_BYTE&&(ft=o.RG8UI),Q===o.UNSIGNED_SHORT&&(ft=o.RG16UI),Q===o.UNSIGNED_INT&&(ft=o.RG32UI),Q===o.BYTE&&(ft=o.RG8I),Q===o.SHORT&&(ft=o.RG16I),Q===o.INT&&(ft=o.RG32I)),E===o.RGB_INTEGER&&(Q===o.UNSIGNED_BYTE&&(ft=o.RGB8UI),Q===o.UNSIGNED_SHORT&&(ft=o.RGB16UI),Q===o.UNSIGNED_INT&&(ft=o.RGB32UI),Q===o.BYTE&&(ft=o.RGB8I),Q===o.SHORT&&(ft=o.RGB16I),Q===o.INT&&(ft=o.RGB32I)),E===o.RGBA_INTEGER&&(Q===o.UNSIGNED_BYTE&&(ft=o.RGBA8UI),Q===o.UNSIGNED_SHORT&&(ft=o.RGBA16UI),Q===o.UNSIGNED_INT&&(ft=o.RGBA32UI),Q===o.BYTE&&(ft=o.RGBA8I),Q===o.SHORT&&(ft=o.RGBA16I),Q===o.INT&&(ft=o.RGBA32I)),E===o.RGB&&(Q===o.UNSIGNED_SHORT&&Lt&&(ft=Lt.RGB16_EXT),Q===o.SHORT&&Lt&&(ft=Lt.RGB16_SNORM_EXT),Q===o.UNSIGNED_INT_5_9_9_9_REV&&(ft=o.RGB9_E5),Q===o.UNSIGNED_INT_10F_11F_11F_REV&&(ft=o.R11F_G11F_B10F)),E===o.RGBA){const dt=Ct?jc:Me.getTransfer(Et);Q===o.FLOAT&&(ft=o.RGBA32F),Q===o.HALF_FLOAT&&(ft=o.RGBA16F),Q===o.UNSIGNED_BYTE&&(ft=dt===Be?o.SRGB8_ALPHA8:o.RGBA8),Q===o.UNSIGNED_SHORT&&Lt&&(ft=Lt.RGBA16_EXT),Q===o.SHORT&&Lt&&(ft=Lt.RGBA16_SNORM_EXT),Q===o.UNSIGNED_SHORT_4_4_4_4&&(ft=o.RGBA4),Q===o.UNSIGNED_SHORT_5_5_5_1&&(ft=o.RGB5_A1)}return(ft===o.R16F||ft===o.R32F||ft===o.RG16F||ft===o.RG32F||ft===o.RGBA16F||ft===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ft}function G(D,E){let Q;return D?E===null||E===qi||E===Yo?Q=o.DEPTH24_STENCIL8:E===Gi?Q=o.DEPTH32F_STENCIL8:E===jo&&(Q=o.DEPTH24_STENCIL8,$t("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===qi||E===Yo?Q=o.DEPTH_COMPONENT24:E===Gi?Q=o.DEPTH_COMPONENT32F:E===jo&&(Q=o.DEPTH_COMPONENT16),Q}function U(D,E){return S(D)===!0||D.isFramebufferTexture&&D.minFilter!==wn&&D.minFilter!==Fn?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function F(D){const E=D.target;E.removeEventListener("dispose",F),L(E),E.isVideoTexture&&x.delete(E),E.isHTMLTexture&&v.delete(E)}function T(D){const E=D.target;E.removeEventListener("dispose",T),H(E)}function L(D){const E=s.get(D);if(E.__webglInit===void 0)return;const Q=D.source,_t=M.get(Q);if(_t){const Et=_t[E.__cacheKey];Et.usedTimes--,Et.usedTimes===0&&Y(D),Object.keys(_t).length===0&&M.delete(Q)}s.remove(D)}function Y(D){const E=s.get(D);o.deleteTexture(E.__webglTexture);const Q=D.source,_t=M.get(Q);delete _t[E.__cacheKey],d.memory.textures--}function H(D){const E=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let _t=0;_t<6;_t++){if(Array.isArray(E.__webglFramebuffer[_t]))for(let Et=0;Et<E.__webglFramebuffer[_t].length;Et++)o.deleteFramebuffer(E.__webglFramebuffer[_t][Et]);else o.deleteFramebuffer(E.__webglFramebuffer[_t]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[_t])}else{if(Array.isArray(E.__webglFramebuffer))for(let _t=0;_t<E.__webglFramebuffer.length;_t++)o.deleteFramebuffer(E.__webglFramebuffer[_t]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let _t=0;_t<E.__webglColorRenderbuffer.length;_t++)E.__webglColorRenderbuffer[_t]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[_t]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Q=D.textures;for(let _t=0,Et=Q.length;_t<Et;_t++){const Ct=s.get(Q[_t]);Ct.__webglTexture&&(o.deleteTexture(Ct.__webglTexture),d.memory.textures--),s.remove(Q[_t])}s.remove(D)}let K=0;function lt(){K=0}function ut(){return K}function X(D){K=D}function O(){const D=K;return D>=l.maxTextures&&$t("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),K+=1,D}function z(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function ot(D,E){const Q=s.get(D);if(D.isVideoTexture&&He(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&Q.__version!==D.version){const _t=D.image;if(_t===null)$t("WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)$t("WebGLRenderer: Texture marked for update but image is incomplete");else{Ht(Q,D,E);return}}else D.isExternalTexture&&(Q.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,Q.__webglTexture,o.TEXTURE0+E)}function gt(D,E){const Q=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Q.__version!==D.version){Ht(Q,D,E);return}else D.isExternalTexture&&(Q.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,Q.__webglTexture,o.TEXTURE0+E)}function Mt(D,E){const Q=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Q.__version!==D.version){Ht(Q,D,E);return}i.bindTexture(o.TEXTURE_3D,Q.__webglTexture,o.TEXTURE0+E)}function I(D,E){const Q=s.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&Q.__version!==D.version){te(Q,D,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,Q.__webglTexture,o.TEXTURE0+E)}const J={[ah]:o.REPEAT,[_a]:o.CLAMP_TO_EDGE,[sh]:o.MIRRORED_REPEAT},xt={[wn]:o.NEAREST,[My]:o.NEAREST_MIPMAP_NEAREST,[uc]:o.NEAREST_MIPMAP_LINEAR,[Fn]:o.LINEAR,[gd]:o.LINEAR_MIPMAP_NEAREST,[Os]:o.LINEAR_MIPMAP_LINEAR},At={[Ty]:o.NEVER,[Dy]:o.ALWAYS,[Ay]:o.LESS,[$h]:o.LEQUAL,[Ry]:o.EQUAL,[tp]:o.GEQUAL,[Cy]:o.GREATER,[wy]:o.NOTEQUAL};function Dt(D,E){if(E.type===Gi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Fn||E.magFilter===gd||E.magFilter===uc||E.magFilter===Os||E.minFilter===Fn||E.minFilter===gd||E.minFilter===uc||E.minFilter===Os)&&$t("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,J[E.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,J[E.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,J[E.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,xt[E.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,xt[E.minFilter]),E.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,At[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===wn||E.minFilter!==uc&&E.minFilter!==Os||E.type===Gi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");o.texParameterf(D,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function rt(D,E){let Q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",F));const _t=E.source;let Et=M.get(_t);Et===void 0&&(Et={},M.set(_t,Et));const Ct=z(E);if(Ct!==D.__cacheKey){Et[Ct]===void 0&&(Et[Ct]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,Q=!0),Et[Ct].usedTimes++;const Lt=Et[D.__cacheKey];Lt!==void 0&&(Et[D.__cacheKey].usedTimes--,Lt.usedTimes===0&&Y(E)),D.__cacheKey=Ct,D.__webglTexture=Et[Ct].texture}return Q}function St(D,E,Q){return Math.floor(Math.floor(D/Q)/E)}function bt(D,E,Q,_t){const Ct=D.updateRanges;if(Ct.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,Q,_t,E.data);else{Ct.sort((Pt,Ut)=>Pt.start-Ut.start);let Lt=0;for(let Pt=1;Pt<Ct.length;Pt++){const Ut=Ct[Lt],wt=Ct[Pt],ne=Ut.start+Ut.count,ie=St(wt.start,E.width,4),pe=St(Ut.start,E.width,4);wt.start<=ne+1&&ie===pe&&St(wt.start+wt.count-1,E.width,4)===ie?Ut.count=Math.max(Ut.count,wt.start+wt.count-Ut.start):(++Lt,Ct[Lt]=wt)}Ct.length=Lt+1;const ft=i.getParameter(o.UNPACK_ROW_LENGTH),dt=i.getParameter(o.UNPACK_SKIP_PIXELS),Ot=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let Pt=0,Ut=Ct.length;Pt<Ut;Pt++){const wt=Ct[Pt],ne=Math.floor(wt.start/4),ie=Math.ceil(wt.count/4),pe=ne%E.width,V=Math.floor(ne/E.width),Tt=ie,pt=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,pe),i.pixelStorei(o.UNPACK_SKIP_ROWS,V),i.texSubImage2D(o.TEXTURE_2D,0,pe,V,Tt,pt,Q,_t,E.data)}D.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,ft),i.pixelStorei(o.UNPACK_SKIP_PIXELS,dt),i.pixelStorei(o.UNPACK_SKIP_ROWS,Ot)}}function Ht(D,E,Q){let _t=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(_t=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(_t=o.TEXTURE_3D);const Et=rt(D,E),Ct=E.source;i.bindTexture(_t,D.__webglTexture,o.TEXTURE0+Q);const Lt=s.get(Ct);if(Ct.version!==Lt.__version||Et===!0){if(i.activeTexture(o.TEXTURE0+Q),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const pt=Me.getPrimaries(Me.workingColorSpace),zt=E.colorSpace===as?null:Me.getPrimaries(E.colorSpace),Nt=E.colorSpace===as||pt===zt?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt)}i.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment);let dt=y(E.image,!1,l.maxTextureSize);dt=Rt(E,dt);const Ot=c.convert(E.format,E.colorSpace),Pt=c.convert(E.type);let Ut=P(E.internalFormat,Ot,Pt,E.normalized,E.colorSpace,E.isVideoTexture);Dt(_t,E);let wt;const ne=E.mipmaps,ie=E.isVideoTexture!==!0,pe=Lt.__version===void 0||Et===!0,V=Ct.dataReady,Tt=U(E,dt);if(E.isDepthTexture)Ut=G(E.format===Ps,E.type),pe&&(ie?i.texStorage2D(o.TEXTURE_2D,1,Ut,dt.width,dt.height):i.texImage2D(o.TEXTURE_2D,0,Ut,dt.width,dt.height,0,Ot,Pt,null));else if(E.isDataTexture)if(ne.length>0){ie&&pe&&i.texStorage2D(o.TEXTURE_2D,Tt,Ut,ne[0].width,ne[0].height);for(let pt=0,zt=ne.length;pt<zt;pt++)wt=ne[pt],ie?V&&i.texSubImage2D(o.TEXTURE_2D,pt,0,0,wt.width,wt.height,Ot,Pt,wt.data):i.texImage2D(o.TEXTURE_2D,pt,Ut,wt.width,wt.height,0,Ot,Pt,wt.data);E.generateMipmaps=!1}else ie?(pe&&i.texStorage2D(o.TEXTURE_2D,Tt,Ut,dt.width,dt.height),V&&bt(E,dt,Ot,Pt)):i.texImage2D(o.TEXTURE_2D,0,Ut,dt.width,dt.height,0,Ot,Pt,dt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ie&&pe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Tt,Ut,ne[0].width,ne[0].height,dt.depth);for(let pt=0,zt=ne.length;pt<zt;pt++)if(wt=ne[pt],E.format!==Ui)if(Ot!==null)if(ie){if(V)if(E.layerUpdates.size>0){const Nt=L_(wt.width,wt.height,E.format,E.type);for(const yt of E.layerUpdates){const qt=wt.data.subarray(yt*Nt/wt.data.BYTES_PER_ELEMENT,(yt+1)*Nt/wt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,pt,0,0,yt,wt.width,wt.height,1,Ot,qt)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,pt,0,0,0,wt.width,wt.height,dt.depth,Ot,wt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,pt,Ut,wt.width,wt.height,dt.depth,0,wt.data,0,0);else $t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?V&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,pt,0,0,0,wt.width,wt.height,dt.depth,Ot,Pt,wt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,pt,Ut,wt.width,wt.height,dt.depth,0,Ot,Pt,wt.data)}else{ie&&pe&&i.texStorage2D(o.TEXTURE_2D,Tt,Ut,ne[0].width,ne[0].height);for(let pt=0,zt=ne.length;pt<zt;pt++)wt=ne[pt],E.format!==Ui?Ot!==null?ie?V&&i.compressedTexSubImage2D(o.TEXTURE_2D,pt,0,0,wt.width,wt.height,Ot,wt.data):i.compressedTexImage2D(o.TEXTURE_2D,pt,Ut,wt.width,wt.height,0,wt.data):$t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?V&&i.texSubImage2D(o.TEXTURE_2D,pt,0,0,wt.width,wt.height,Ot,Pt,wt.data):i.texImage2D(o.TEXTURE_2D,pt,Ut,wt.width,wt.height,0,Ot,Pt,wt.data)}else if(E.isDataArrayTexture)if(ie){if(pe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Tt,Ut,dt.width,dt.height,dt.depth),V)if(E.layerUpdates.size>0){const pt=L_(dt.width,dt.height,E.format,E.type);for(const zt of E.layerUpdates){const Nt=dt.data.subarray(zt*pt/dt.data.BYTES_PER_ELEMENT,(zt+1)*pt/dt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,zt,dt.width,dt.height,1,Ot,Pt,Nt)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,dt.width,dt.height,dt.depth,Ot,Pt,dt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Ut,dt.width,dt.height,dt.depth,0,Ot,Pt,dt.data);else if(E.isData3DTexture)ie?(pe&&i.texStorage3D(o.TEXTURE_3D,Tt,Ut,dt.width,dt.height,dt.depth),V&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,dt.width,dt.height,dt.depth,Ot,Pt,dt.data)):i.texImage3D(o.TEXTURE_3D,0,Ut,dt.width,dt.height,dt.depth,0,Ot,Pt,dt.data);else if(E.isFramebufferTexture){if(pe)if(ie)i.texStorage2D(o.TEXTURE_2D,Tt,Ut,dt.width,dt.height);else{let pt=dt.width,zt=dt.height;for(let Nt=0;Nt<Tt;Nt++)i.texImage2D(o.TEXTURE_2D,Nt,Ut,pt,zt,0,Ot,Pt,null),pt>>=1,zt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in o){const pt=o.canvas;if(pt.hasAttribute("layoutsubtree")||pt.setAttribute("layoutsubtree","true"),dt.parentNode!==pt){pt.appendChild(dt),v.add(E),pt.onpaint=ee=>{const en=ee.changedElements;for(const we of v)en.includes(we.image)&&(we.needsUpdate=!0)},pt.requestPaint();return}const zt=0,Nt=o.RGBA,yt=o.RGBA,qt=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,zt,Nt,yt,qt,dt),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(ne.length>0){if(ie&&pe){const pt=Ke(ne[0]);i.texStorage2D(o.TEXTURE_2D,Tt,Ut,pt.width,pt.height)}for(let pt=0,zt=ne.length;pt<zt;pt++)wt=ne[pt],ie?V&&i.texSubImage2D(o.TEXTURE_2D,pt,0,0,Ot,Pt,wt):i.texImage2D(o.TEXTURE_2D,pt,Ut,Ot,Pt,wt);E.generateMipmaps=!1}else if(ie){if(pe){const pt=Ke(dt);i.texStorage2D(o.TEXTURE_2D,Tt,Ut,pt.width,pt.height)}V&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ot,Pt,dt)}else i.texImage2D(o.TEXTURE_2D,0,Ut,Ot,Pt,dt);S(E)&&C(_t),Lt.__version=Ct.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function te(D,E,Q){if(E.image.length!==6)return;const _t=rt(D,E),Et=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+Q);const Ct=s.get(Et);if(Et.version!==Ct.__version||_t===!0){i.activeTexture(o.TEXTURE0+Q);const Lt=Me.getPrimaries(Me.workingColorSpace),ft=E.colorSpace===as?null:Me.getPrimaries(E.colorSpace),dt=E.colorSpace===as||Lt===ft?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const Ot=E.isCompressedTexture||E.image[0].isCompressedTexture,Pt=E.image[0]&&E.image[0].isDataTexture,Ut=[];for(let yt=0;yt<6;yt++)!Ot&&!Pt?Ut[yt]=y(E.image[yt],!0,l.maxCubemapSize):Ut[yt]=Pt?E.image[yt].image:E.image[yt],Ut[yt]=Rt(E,Ut[yt]);const wt=Ut[0],ne=c.convert(E.format,E.colorSpace),ie=c.convert(E.type),pe=P(E.internalFormat,ne,ie,E.normalized,E.colorSpace),V=E.isVideoTexture!==!0,Tt=Ct.__version===void 0||_t===!0,pt=Et.dataReady;let zt=U(E,wt);Dt(o.TEXTURE_CUBE_MAP,E);let Nt;if(Ot){V&&Tt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,zt,pe,wt.width,wt.height);for(let yt=0;yt<6;yt++){Nt=Ut[yt].mipmaps;for(let qt=0;qt<Nt.length;qt++){const ee=Nt[qt];E.format!==Ui?ne!==null?V?pt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,qt,0,0,ee.width,ee.height,ne,ee.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,qt,pe,ee.width,ee.height,0,ee.data):$t("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?pt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,qt,0,0,ee.width,ee.height,ne,ie,ee.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,qt,pe,ee.width,ee.height,0,ne,ie,ee.data)}}}else{if(Nt=E.mipmaps,V&&Tt){Nt.length>0&&zt++;const yt=Ke(Ut[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,zt,pe,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(Pt){V?pt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Ut[yt].width,Ut[yt].height,ne,ie,Ut[yt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,pe,Ut[yt].width,Ut[yt].height,0,ne,ie,Ut[yt].data);for(let qt=0;qt<Nt.length;qt++){const en=Nt[qt].image[yt].image;V?pt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,qt+1,0,0,en.width,en.height,ne,ie,en.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,qt+1,pe,en.width,en.height,0,ne,ie,en.data)}}else{V?pt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,ne,ie,Ut[yt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,pe,ne,ie,Ut[yt]);for(let qt=0;qt<Nt.length;qt++){const ee=Nt[qt];V?pt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,qt+1,0,0,ne,ie,ee.image[yt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,qt+1,pe,ne,ie,ee.image[yt])}}}S(E)&&C(o.TEXTURE_CUBE_MAP),Ct.__version=Et.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function Qt(D,E,Q,_t,Et,Ct){const Lt=c.convert(Q.format,Q.colorSpace),ft=c.convert(Q.type),dt=P(Q.internalFormat,Lt,ft,Q.normalized,Q.colorSpace),Ot=s.get(E),Pt=s.get(Q);if(Pt.__renderTarget=E,!Ot.__hasExternalTextures){const Ut=Math.max(1,E.width>>Ct),wt=Math.max(1,E.height>>Ct);Et===o.TEXTURE_3D||Et===o.TEXTURE_2D_ARRAY?i.texImage3D(Et,Ct,dt,Ut,wt,E.depth,0,Lt,ft,null):i.texImage2D(Et,Ct,dt,Ut,wt,0,Lt,ft,null)}i.bindFramebuffer(o.FRAMEBUFFER,D),he(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,_t,Et,Pt.__webglTexture,0,tn(E)):(Et===o.TEXTURE_2D||Et>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Et<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,_t,Et,Pt.__webglTexture,Ct),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Xe(D,E,Q){if(o.bindRenderbuffer(o.RENDERBUFFER,D),E.depthBuffer){const _t=E.depthTexture,Et=_t&&_t.isDepthTexture?_t.type:null,Ct=G(E.stencilBuffer,Et),Lt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;he(E)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,tn(E),Ct,E.width,E.height):Q?o.renderbufferStorageMultisample(o.RENDERBUFFER,tn(E),Ct,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Ct,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Lt,o.RENDERBUFFER,D)}else{const _t=E.textures;for(let Et=0;Et<_t.length;Et++){const Ct=_t[Et],Lt=c.convert(Ct.format,Ct.colorSpace),ft=c.convert(Ct.type),dt=P(Ct.internalFormat,Lt,ft,Ct.normalized,Ct.colorSpace);he(E)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,tn(E),dt,E.width,E.height):Q?o.renderbufferStorageMultisample(o.RENDERBUFFER,tn(E),dt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,dt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function de(D,E,Q){const _t=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Et=s.get(E.depthTexture);if(Et.__renderTarget=E,(!Et.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),_t){if(Et.__webglInit===void 0&&(Et.__webglInit=!0,E.depthTexture.addEventListener("dispose",F)),Et.__webglTexture===void 0){Et.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,Et.__webglTexture),Dt(o.TEXTURE_CUBE_MAP,E.depthTexture);const Ot=c.convert(E.depthTexture.format),Pt=c.convert(E.depthTexture.type);let Ut;E.depthTexture.format===ya?Ut=o.DEPTH_COMPONENT24:E.depthTexture.format===Ps&&(Ut=o.DEPTH24_STENCIL8);for(let wt=0;wt<6;wt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,Ut,E.width,E.height,0,Ot,Pt,null)}}else ot(E.depthTexture,0);const Ct=Et.__webglTexture,Lt=tn(E),ft=_t?o.TEXTURE_CUBE_MAP_POSITIVE_X+Q:o.TEXTURE_2D,dt=E.depthTexture.format===Ps?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(E.depthTexture.format===ya)he(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,dt,ft,Ct,0,Lt):o.framebufferTexture2D(o.FRAMEBUFFER,dt,ft,Ct,0);else if(E.depthTexture.format===Ps)he(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,dt,ft,Ct,0,Lt):o.framebufferTexture2D(o.FRAMEBUFFER,dt,ft,Ct,0);else throw new Error("Unknown depthTexture format")}function ve(D){const E=s.get(D),Q=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const _t=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),_t){const Et=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,_t.removeEventListener("dispose",Et)};_t.addEventListener("dispose",Et),E.__depthDisposeCallback=Et}E.__boundDepthTexture=_t}if(D.depthTexture&&!E.__autoAllocateDepthBuffer)if(Q)for(let _t=0;_t<6;_t++)de(E.__webglFramebuffer[_t],D,_t);else{const _t=D.texture.mipmaps;_t&&_t.length>0?de(E.__webglFramebuffer[0],D,0):de(E.__webglFramebuffer,D,0)}else if(Q){E.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[_t]),E.__webglDepthbuffer[_t]===void 0)E.__webglDepthbuffer[_t]=o.createRenderbuffer(),Xe(E.__webglDepthbuffer[_t],D,!1);else{const Et=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ct=E.__webglDepthbuffer[_t];o.bindRenderbuffer(o.RENDERBUFFER,Ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,Et,o.RENDERBUFFER,Ct)}}else{const _t=D.texture.mipmaps;if(_t&&_t.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Xe(E.__webglDepthbuffer,D,!1);else{const Et=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ct=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Ct),o.framebufferRenderbuffer(o.FRAMEBUFFER,Et,o.RENDERBUFFER,Ct)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Le(D,E,Q){const _t=s.get(D);E!==void 0&&Qt(_t.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Q!==void 0&&ve(D)}function ce(D){const E=D.texture,Q=s.get(D),_t=s.get(E);D.addEventListener("dispose",T);const Et=D.textures,Ct=D.isWebGLCubeRenderTarget===!0,Lt=Et.length>1;if(Lt||(_t.__webglTexture===void 0&&(_t.__webglTexture=o.createTexture()),_t.__version=E.version,d.memory.textures++),Ct){Q.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer[ft]=[];for(let dt=0;dt<E.mipmaps.length;dt++)Q.__webglFramebuffer[ft][dt]=o.createFramebuffer()}else Q.__webglFramebuffer[ft]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer=[];for(let ft=0;ft<E.mipmaps.length;ft++)Q.__webglFramebuffer[ft]=o.createFramebuffer()}else Q.__webglFramebuffer=o.createFramebuffer();if(Lt)for(let ft=0,dt=Et.length;ft<dt;ft++){const Ot=s.get(Et[ft]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=o.createTexture(),d.memory.textures++)}if(D.samples>0&&he(D)===!1){Q.__webglMultisampledFramebuffer=o.createFramebuffer(),Q.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let ft=0;ft<Et.length;ft++){const dt=Et[ft];Q.__webglColorRenderbuffer[ft]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Q.__webglColorRenderbuffer[ft]);const Ot=c.convert(dt.format,dt.colorSpace),Pt=c.convert(dt.type),Ut=P(dt.internalFormat,Ot,Pt,dt.normalized,dt.colorSpace,D.isXRRenderTarget===!0),wt=tn(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,wt,Ut,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ft,o.RENDERBUFFER,Q.__webglColorRenderbuffer[ft])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(Q.__webglDepthRenderbuffer=o.createRenderbuffer(),Xe(Q.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Ct){i.bindTexture(o.TEXTURE_CUBE_MAP,_t.__webglTexture),Dt(o.TEXTURE_CUBE_MAP,E);for(let ft=0;ft<6;ft++)if(E.mipmaps&&E.mipmaps.length>0)for(let dt=0;dt<E.mipmaps.length;dt++)Qt(Q.__webglFramebuffer[ft][dt],D,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,dt);else Qt(Q.__webglFramebuffer[ft],D,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);S(E)&&C(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Lt){for(let ft=0,dt=Et.length;ft<dt;ft++){const Ot=Et[ft],Pt=s.get(Ot);let Ut=o.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ut=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ut,Pt.__webglTexture),Dt(Ut,Ot),Qt(Q.__webglFramebuffer,D,Ot,o.COLOR_ATTACHMENT0+ft,Ut,0),S(Ot)&&C(Ut)}i.unbindTexture()}else{let ft=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ft=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(ft,_t.__webglTexture),Dt(ft,E),E.mipmaps&&E.mipmaps.length>0)for(let dt=0;dt<E.mipmaps.length;dt++)Qt(Q.__webglFramebuffer[dt],D,E,o.COLOR_ATTACHMENT0,ft,dt);else Qt(Q.__webglFramebuffer,D,E,o.COLOR_ATTACHMENT0,ft,0);S(E)&&C(ft),i.unbindTexture()}D.depthBuffer&&ve(D)}function on(D){const E=D.textures;for(let Q=0,_t=E.length;Q<_t;Q++){const Et=E[Q];if(S(Et)){const Ct=N(D),Lt=s.get(Et).__webglTexture;i.bindTexture(Ct,Lt),C(Ct),i.unbindTexture()}}}const je=[],En=[];function q(D){if(D.samples>0){if(he(D)===!1){const E=D.textures,Q=D.width,_t=D.height;let Et=o.COLOR_BUFFER_BIT;const Ct=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Lt=s.get(D),ft=E.length>1;if(ft)for(let Ot=0;Ot<E.length;Ot++)i.bindFramebuffer(o.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ot,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Lt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ot,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer);const dt=D.texture.mipmaps;dt&&dt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Ot=0;Ot<E.length;Ot++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(Et|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(Et|=o.STENCIL_BUFFER_BIT)),ft){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Lt.__webglColorRenderbuffer[Ot]);const Pt=s.get(E[Ot]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Pt,0)}o.blitFramebuffer(0,0,Q,_t,0,0,Q,_t,Et,o.NEAREST),m===!0&&(je.length=0,En.length=0,je.push(o.COLOR_ATTACHMENT0+Ot),D.depthBuffer&&D.resolveDepthBuffer===!1&&(je.push(Ct),En.push(Ct),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,En)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,je))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),ft)for(let Ot=0;Ot<E.length;Ot++){i.bindFramebuffer(o.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ot,o.RENDERBUFFER,Lt.__webglColorRenderbuffer[Ot]);const Pt=s.get(E[Ot]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Lt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ot,o.TEXTURE_2D,Pt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const E=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function tn(D){return Math.min(l.maxSamples,D.samples)}function he(D){const E=s.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function He(D){const E=d.render.frame;x.get(D)!==E&&(x.set(D,E),D.update())}function Rt(D,E){const Q=D.colorSpace,_t=D.format,Et=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Q!==qc&&Q!==as&&(Me.getTransfer(Q)===Be?(_t!==Ui||Et!==ci)&&$t("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Te("WebGLTextures: Unsupported texture color space:",Q)),E}function Ke(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(h.width=D.naturalWidth||D.width,h.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(h.width=D.displayWidth,h.height=D.displayHeight):(h.width=D.width,h.height=D.height),h}this.allocateTextureUnit=O,this.resetTextureUnits=lt,this.getTextureUnits=ut,this.setTextureUnits=X,this.setTexture2D=ot,this.setTexture2DArray=gt,this.setTexture3D=Mt,this.setTextureCube=I,this.rebindTextures=Le,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=on,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=Qt,this.useMultisampledRTT=he,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function cA(o,e){function i(s,l=as){let c;const d=Me.getTransfer(l);if(s===ci)return o.UNSIGNED_BYTE;if(s===Yh)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Zh)return o.UNSIGNED_SHORT_5_5_5_1;if(s===pv)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===mv)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===dv)return o.BYTE;if(s===hv)return o.SHORT;if(s===jo)return o.UNSIGNED_SHORT;if(s===jh)return o.INT;if(s===qi)return o.UNSIGNED_INT;if(s===Gi)return o.FLOAT;if(s===Sa)return o.HALF_FLOAT;if(s===gv)return o.ALPHA;if(s===_v)return o.RGB;if(s===Ui)return o.RGBA;if(s===ya)return o.DEPTH_COMPONENT;if(s===Ps)return o.DEPTH_STENCIL;if(s===vv)return o.RED;if(s===Kh)return o.RED_INTEGER;if(s===Fs)return o.RG;if(s===Qh)return o.RG_INTEGER;if(s===Jh)return o.RGBA_INTEGER;if(s===zc||s===Bc||s===Hc||s===Gc)if(d===Be)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===zc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Bc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Hc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Gc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===zc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Bc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Hc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Gc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===rh||s===oh||s===lh||s===ch)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===rh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===oh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===lh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ch)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===uh||s===fh||s===dh||s===hh||s===ph||s===Xc||s===mh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===uh||s===fh)return d===Be?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===dh)return d===Be?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===hh)return c.COMPRESSED_R11_EAC;if(s===ph)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Xc)return c.COMPRESSED_RG11_EAC;if(s===mh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===gh||s===_h||s===vh||s===xh||s===Sh||s===yh||s===Mh||s===Eh||s===bh||s===Th||s===Ah||s===Rh||s===Ch||s===wh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===gh)return d===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===_h)return d===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===vh)return d===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===xh)return d===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Sh)return d===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===yh)return d===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Mh)return d===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Eh)return d===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===bh)return d===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Th)return d===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ah)return d===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Rh)return d===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ch)return d===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===wh)return d===Be?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Dh||s===Uh||s===Nh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Dh)return d===Be?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Uh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Nh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Lh||s===Oh||s===Wc||s===Ph)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Lh)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Oh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Wc)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ph)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Yo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const uA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class dA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new Rv(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new ji({vertexShader:uA,fragmentShader:fA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ui(new Jo(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hA extends zs{constructor(e,i){super();const s=this;let l=null,c=1,d=null,p="local-floor",m=1,h=null,x=null,v=null,g=null,M=null,b=null;const w=typeof XRWebGLBinding<"u",y=new dA,S={},C=i.getContextAttributes();let N=null,P=null;const G=[],U=[],F=new Ue;let T=null;const L=new li;L.viewport=new sn;const Y=new li;Y.viewport=new sn;const H=[L,Y],K=new yM;let lt=null,ut=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(rt){let St=G[rt];return St===void 0&&(St=new Ed,G[rt]=St),St.getTargetRaySpace()},this.getControllerGrip=function(rt){let St=G[rt];return St===void 0&&(St=new Ed,G[rt]=St),St.getGripSpace()},this.getHand=function(rt){let St=G[rt];return St===void 0&&(St=new Ed,G[rt]=St),St.getHandSpace()};function X(rt){const St=U.indexOf(rt.inputSource);if(St===-1)return;const bt=G[St];bt!==void 0&&(bt.update(rt.inputSource,rt.frame,h||d),bt.dispatchEvent({type:rt.type,data:rt.inputSource}))}function O(){l.removeEventListener("select",X),l.removeEventListener("selectstart",X),l.removeEventListener("selectend",X),l.removeEventListener("squeeze",X),l.removeEventListener("squeezestart",X),l.removeEventListener("squeezeend",X),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",z);for(let rt=0;rt<G.length;rt++){const St=U[rt];St!==null&&(U[rt]=null,G[rt].disconnect(St))}lt=null,ut=null,y.reset();for(const rt in S)delete S[rt];e.setRenderTarget(N),M=null,g=null,v=null,l=null,P=null,Dt.stop(),s.isPresenting=!1,e.setPixelRatio(T),e.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(rt){c=rt,s.isPresenting===!0&&$t("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(rt){p=rt,s.isPresenting===!0&&$t("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||d},this.setReferenceSpace=function(rt){h=rt},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return v===null&&w&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(rt){if(l=rt,l!==null){if(N=e.getRenderTarget(),l.addEventListener("select",X),l.addEventListener("selectstart",X),l.addEventListener("selectend",X),l.addEventListener("squeeze",X),l.addEventListener("squeezestart",X),l.addEventListener("squeezeend",X),l.addEventListener("end",O),l.addEventListener("inputsourceschange",z),C.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(F),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Ht=null,te=null;C.depth&&(te=C.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,bt=C.stencil?Ps:ya,Ht=C.stencil?Yo:qi);const Qt={colorFormat:i.RGBA8,depthFormat:te,scaleFactor:c};v=this.getBinding(),g=v.createProjectionLayer(Qt),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),P=new Xi(g.textureWidth,g.textureHeight,{format:Ui,type:ci,depthTexture:new Ir(g.textureWidth,g.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const bt={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,bt),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new Xi(M.framebufferWidth,M.framebufferHeight,{format:Ui,type:ci,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(m),h=null,d=await l.requestReferenceSpace(p),Dt.setContext(l),Dt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function z(rt){for(let St=0;St<rt.removed.length;St++){const bt=rt.removed[St],Ht=U.indexOf(bt);Ht>=0&&(U[Ht]=null,G[Ht].disconnect(bt))}for(let St=0;St<rt.added.length;St++){const bt=rt.added[St];let Ht=U.indexOf(bt);if(Ht===-1){for(let Qt=0;Qt<G.length;Qt++)if(Qt>=U.length){U.push(bt),Ht=Qt;break}else if(U[Qt]===null){U[Qt]=bt,Ht=Qt;break}if(Ht===-1)break}const te=G[Ht];te&&te.connect(bt)}}const ot=new $,gt=new $;function Mt(rt,St,bt){ot.setFromMatrixPosition(St.matrixWorld),gt.setFromMatrixPosition(bt.matrixWorld);const Ht=ot.distanceTo(gt),te=St.projectionMatrix.elements,Qt=bt.projectionMatrix.elements,Xe=te[14]/(te[10]-1),de=te[14]/(te[10]+1),ve=(te[9]+1)/te[5],Le=(te[9]-1)/te[5],ce=(te[8]-1)/te[0],on=(Qt[8]+1)/Qt[0],je=Xe*ce,En=Xe*on,q=Ht/(-ce+on),tn=q*-ce;if(St.matrixWorld.decompose(rt.position,rt.quaternion,rt.scale),rt.translateX(tn),rt.translateZ(q),rt.matrixWorld.compose(rt.position,rt.quaternion,rt.scale),rt.matrixWorldInverse.copy(rt.matrixWorld).invert(),te[10]===-1)rt.projectionMatrix.copy(St.projectionMatrix),rt.projectionMatrixInverse.copy(St.projectionMatrixInverse);else{const he=Xe+q,He=de+q,Rt=je-tn,Ke=En+(Ht-tn),D=ve*de/He*he,E=Le*de/He*he;rt.projectionMatrix.makePerspective(Rt,Ke,D,E,he,He),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert()}}function I(rt,St){St===null?rt.matrixWorld.copy(rt.matrix):rt.matrixWorld.multiplyMatrices(St.matrixWorld,rt.matrix),rt.matrixWorldInverse.copy(rt.matrixWorld).invert()}this.updateCamera=function(rt){if(l===null)return;let St=rt.near,bt=rt.far;y.texture!==null&&(y.depthNear>0&&(St=y.depthNear),y.depthFar>0&&(bt=y.depthFar)),K.near=Y.near=L.near=St,K.far=Y.far=L.far=bt,(lt!==K.near||ut!==K.far)&&(l.updateRenderState({depthNear:K.near,depthFar:K.far}),lt=K.near,ut=K.far),K.layers.mask=rt.layers.mask|6,L.layers.mask=K.layers.mask&-5,Y.layers.mask=K.layers.mask&-3;const Ht=rt.parent,te=K.cameras;I(K,Ht);for(let Qt=0;Qt<te.length;Qt++)I(te[Qt],Ht);te.length===2?Mt(K,L,Y):K.projectionMatrix.copy(L.projectionMatrix),J(rt,K,Ht)};function J(rt,St,bt){bt===null?rt.matrix.copy(St.matrixWorld):(rt.matrix.copy(bt.matrixWorld),rt.matrix.invert(),rt.matrix.multiply(St.matrixWorld)),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.updateMatrixWorld(!0),rt.projectionMatrix.copy(St.projectionMatrix),rt.projectionMatrixInverse.copy(St.projectionMatrixInverse),rt.isPerspectiveCamera&&(rt.fov=zh*2*Math.atan(1/rt.projectionMatrix.elements[5]),rt.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(g===null&&M===null))return m},this.setFoveation=function(rt){m=rt,g!==null&&(g.fixedFoveation=rt),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=rt)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(K)},this.getCameraTexture=function(rt){return S[rt]};let xt=null;function At(rt,St){if(x=St.getViewerPose(h||d),b=St,x!==null){const bt=x.views;M!==null&&(e.setRenderTargetFramebuffer(P,M.framebuffer),e.setRenderTarget(P));let Ht=!1;bt.length!==K.cameras.length&&(K.cameras.length=0,Ht=!0);for(let de=0;de<bt.length;de++){const ve=bt[de];let Le=null;if(M!==null)Le=M.getViewport(ve);else{const on=v.getViewSubImage(g,ve);Le=on.viewport,de===0&&(e.setRenderTargetTextures(P,on.colorTexture,on.depthStencilTexture),e.setRenderTarget(P))}let ce=H[de];ce===void 0&&(ce=new li,ce.layers.enable(de),ce.viewport=new sn,H[de]=ce),ce.matrix.fromArray(ve.transform.matrix),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.projectionMatrix.fromArray(ve.projectionMatrix),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert(),ce.viewport.set(Le.x,Le.y,Le.width,Le.height),de===0&&(K.matrix.copy(ce.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Ht===!0&&K.cameras.push(ce)}const te=l.enabledFeatures;if(te&&te.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){v=s.getBinding();const de=v.getDepthInformation(bt[0]);de&&de.isValid&&de.texture&&y.init(de,l.renderState)}if(te&&te.includes("camera-access")&&w){e.state.unbindTexture(),v=s.getBinding();for(let de=0;de<bt.length;de++){const ve=bt[de].camera;if(ve){let Le=S[ve];Le||(Le=new Rv,S[ve]=Le);const ce=v.getCameraImage(ve);Le.sourceTexture=ce}}}}for(let bt=0;bt<G.length;bt++){const Ht=U[bt],te=G[bt];Ht!==null&&te!==void 0&&te.update(Ht,St,h||d)}xt&&xt(rt,St),St.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:St}),b=null}const Dt=new Uv;Dt.setAnimationLoop(At),this.setAnimationLoop=function(rt){xt=rt},this.dispose=function(){}}}const pA=new rn,zv=new re;zv.set(-1,0,0,0,1,0,0,0,1);function mA(o,e){function i(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function s(y,S){S.color.getRGB(y.fogColor.value,Cv(o)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function l(y,S,C,N,P){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?c(y,S):S.isMeshLambertMaterial?(c(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(c(y,S),v(y,S)):S.isMeshPhongMaterial?(c(y,S),x(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(c(y,S),g(y,S),S.isMeshPhysicalMaterial&&M(y,S,P)):S.isMeshMatcapMaterial?(c(y,S),b(y,S)):S.isMeshDepthMaterial?c(y,S):S.isMeshDistanceMaterial?(c(y,S),w(y,S)):S.isMeshNormalMaterial?c(y,S):S.isLineBasicMaterial?(d(y,S),S.isLineDashedMaterial&&p(y,S)):S.isPointsMaterial?m(y,S,C,N):S.isSpriteMaterial?h(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,i(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===Yn&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,i(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===Yn&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,i(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,i(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const C=e.get(S),N=C.envMap,P=C.envMapRotation;N&&(y.envMap.value=N,y.envMapRotation.value.setFromMatrix4(pA.makeRotationFromEuler(P)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(zv),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,y.aoMapTransform))}function d(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform))}function p(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function m(y,S,C,N){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*C,y.scale.value=N*.5,S.map&&(y.map.value=S.map,i(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function h(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function x(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function v(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function g(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function M(y,S,C){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Yn&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=C.texture,y.transmissionSamplerSize.value.set(C.width,C.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,S){S.matcap&&(y.matcap.value=S.matcap)}function w(y,S){const C=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(C.matrixWorld),y.nearDistance.value=C.shadow.camera.near,y.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function gA(o,e,i,s){let l={},c={},d=[];const p=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,N){const P=N.program;s.uniformBlockBinding(C,P)}function h(C,N){let P=l[C.id];P===void 0&&(b(C),P=x(C),l[C.id]=P,C.addEventListener("dispose",y));const G=N.program;s.updateUBOMapping(C,G);const U=e.render.frame;c[C.id]!==U&&(g(C),c[C.id]=U)}function x(C){const N=v();C.__bindingPointIndex=N;const P=o.createBuffer(),G=C.__size,U=C.usage;return o.bindBuffer(o.UNIFORM_BUFFER,P),o.bufferData(o.UNIFORM_BUFFER,G,U),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,P),P}function v(){for(let C=0;C<p;C++)if(d.indexOf(C)===-1)return d.push(C),C;return Te("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const N=l[C.id],P=C.uniforms,G=C.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let U=0,F=P.length;U<F;U++){const T=Array.isArray(P[U])?P[U]:[P[U]];for(let L=0,Y=T.length;L<Y;L++){const H=T[L];if(M(H,U,L,G)===!0){const K=H.__offset,lt=Array.isArray(H.value)?H.value:[H.value];let ut=0;for(let X=0;X<lt.length;X++){const O=lt[X],z=w(O);typeof O=="number"||typeof O=="boolean"?(H.__data[0]=O,o.bufferSubData(o.UNIFORM_BUFFER,K+ut,H.__data)):O.isMatrix3?(H.__data[0]=O.elements[0],H.__data[1]=O.elements[1],H.__data[2]=O.elements[2],H.__data[3]=0,H.__data[4]=O.elements[3],H.__data[5]=O.elements[4],H.__data[6]=O.elements[5],H.__data[7]=0,H.__data[8]=O.elements[6],H.__data[9]=O.elements[7],H.__data[10]=O.elements[8],H.__data[11]=0):ArrayBuffer.isView(O)?H.__data.set(new O.constructor(O.buffer,O.byteOffset,H.__data.length)):(O.toArray(H.__data,ut),ut+=z.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,K,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(C,N,P,G){const U=C.value,F=N+"_"+P;if(G[F]===void 0)return typeof U=="number"||typeof U=="boolean"?G[F]=U:ArrayBuffer.isView(U)?G[F]=U.slice():G[F]=U.clone(),!0;{const T=G[F];if(typeof U=="number"||typeof U=="boolean"){if(T!==U)return G[F]=U,!0}else{if(ArrayBuffer.isView(U))return!0;if(T.equals(U)===!1)return T.copy(U),!0}}return!1}function b(C){const N=C.uniforms;let P=0;const G=16;for(let F=0,T=N.length;F<T;F++){const L=Array.isArray(N[F])?N[F]:[N[F]];for(let Y=0,H=L.length;Y<H;Y++){const K=L[Y],lt=Array.isArray(K.value)?K.value:[K.value];for(let ut=0,X=lt.length;ut<X;ut++){const O=lt[ut],z=w(O),ot=P%G,gt=ot%z.boundary,Mt=ot+gt;P+=gt,Mt!==0&&G-Mt<z.storage&&(P+=G-Mt),K.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=P,P+=z.storage}}}const U=P%G;return U>0&&(P+=G-U),C.__size=P,C.__cache={},this}function w(C){const N={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(N.boundary=4,N.storage=4):C.isVector2?(N.boundary=8,N.storage=8):C.isVector3||C.isColor?(N.boundary=16,N.storage=12):C.isVector4?(N.boundary=16,N.storage=16):C.isMatrix3?(N.boundary=48,N.storage=48):C.isMatrix4?(N.boundary=64,N.storage=64):C.isTexture?$t("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(N.boundary=16,N.storage=C.byteLength):$t("WebGLRenderer: Unsupported uniform value type.",C),N}function y(C){const N=C.target;N.removeEventListener("dispose",y);const P=d.indexOf(N.__bindingPointIndex);d.splice(P,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function S(){for(const C in l)o.deleteBuffer(l[C]);d=[],l={},c={}}return{bind:m,update:h,dispose:S}}const _A=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zi=null;function vA(){return zi===null&&(zi=new eM(_A,16,16,Fs,Sa),zi.name="DFG_LUT",zi.minFilter=Fn,zi.magFilter=Fn,zi.wrapS=_a,zi.wrapT=_a,zi.generateMipmaps=!1,zi.needsUpdate=!0),zi}class xA{constructor(e={}){const{canvas:i=Ny(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:h=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:M=ci}=e;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=d;const w=M,y=new Set([Jh,Qh,Kh]),S=new Set([ci,qi,jo,Yo,Yh,Zh]),C=new Uint32Array(4),N=new Int32Array(4),P=new $;let G=null,U=null;const F=[],T=[];let L=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const Y=this;let H=!1,K=null;this._outputColorSpace=yi;let lt=0,ut=0,X=null,O=-1,z=null;const ot=new sn,gt=new sn;let Mt=null;const I=new be(0);let J=0,xt=i.width,At=i.height,Dt=1,rt=null,St=null;const bt=new sn(0,0,xt,At),Ht=new sn(0,0,xt,At);let te=!1;const Qt=new np;let Xe=!1,de=!1;const ve=new rn,Le=new $,ce=new sn,on={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let je=!1;function En(){return X===null?Dt:1}let q=s;function tn(A,j){return i.getContext(A,j)}try{const A={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:h,powerPreference:x,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Wh}`),i.addEventListener("webglcontextlost",yt,!1),i.addEventListener("webglcontextrestored",qt,!1),i.addEventListener("webglcontextcreationerror",ee,!1),q===null){const j="webgl2";if(q=tn(j,A),q===null)throw tn(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Te("WebGLRenderer: "+A.message),A}let he,He,Rt,Ke,D,E,Q,_t,Et,Ct,Lt,ft,dt,Ot,Pt,Ut,wt,ne,ie,pe,V,Tt,pt;function zt(){he=new vb(q),he.init(),V=new cA(q,he),He=new ub(q,he,e,V),Rt=new oA(q,he),He.reversedDepthBuffer&&g&&Rt.buffers.depth.setReversed(!0),Ke=new yb(q),D=new jT,E=new lA(q,he,Rt,D,He,V,Ke),Q=new _b(Y),_t=new TM(q),Tt=new lb(q,_t),Et=new xb(q,_t,Ke,Tt),Ct=new Eb(q,Et,_t,Tt,Ke),ne=new Mb(q,He,E),Pt=new fb(D),Lt=new qT(Y,Q,he,He,Tt,Pt),ft=new mA(Y,D),dt=new ZT,Ot=new eA(he),wt=new ob(Y,Q,Rt,Ct,b,m),Ut=new rA(Y,Ct,He),pt=new gA(q,Ke,He,Rt),ie=new cb(q,he,Ke),pe=new Sb(q,he,Ke),Ke.programs=Lt.programs,Y.capabilities=He,Y.extensions=he,Y.properties=D,Y.renderLists=dt,Y.shadowMap=Ut,Y.state=Rt,Y.info=Ke}zt(),w!==ci&&(L=new Tb(w,i.width,i.height,l,c));const Nt=new hA(Y,q);this.xr=Nt,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const A=he.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=he.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Dt},this.setPixelRatio=function(A){A!==void 0&&(Dt=A,this.setSize(xt,At,!1))},this.getSize=function(A){return A.set(xt,At)},this.setSize=function(A,j,at=!0){if(Nt.isPresenting){$t("WebGLRenderer: Can't change size while VR device is presenting.");return}xt=A,At=j,i.width=Math.floor(A*Dt),i.height=Math.floor(j*Dt),at===!0&&(i.style.width=A+"px",i.style.height=j+"px"),L!==null&&L.setSize(i.width,i.height),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(xt*Dt,At*Dt).floor()},this.setDrawingBufferSize=function(A,j,at){xt=A,At=j,Dt=at,i.width=Math.floor(A*at),i.height=Math.floor(j*at),this.setViewport(0,0,A,j)},this.setEffects=function(A){if(w===ci){Te("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let j=0;j<A.length;j++)if(A[j].isOutputPass===!0){$t("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(ot)},this.getViewport=function(A){return A.copy(bt)},this.setViewport=function(A,j,at,nt){A.isVector4?bt.set(A.x,A.y,A.z,A.w):bt.set(A,j,at,nt),Rt.viewport(ot.copy(bt).multiplyScalar(Dt).round())},this.getScissor=function(A){return A.copy(Ht)},this.setScissor=function(A,j,at,nt){A.isVector4?Ht.set(A.x,A.y,A.z,A.w):Ht.set(A,j,at,nt),Rt.scissor(gt.copy(Ht).multiplyScalar(Dt).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(A){Rt.setScissorTest(te=A)},this.setOpaqueSort=function(A){rt=A},this.setTransparentSort=function(A){St=A},this.getClearColor=function(A){return A.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor(...arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha(...arguments)},this.clear=function(A=!0,j=!0,at=!0){let nt=0;if(A){let it=!1;if(X!==null){const Ft=X.texture.format;it=y.has(Ft)}if(it){const Ft=X.texture.type,Vt=S.has(Ft),It=wt.getClearColor(),Xt=wt.getClearAlpha(),kt=It.r,Zt=It.g,oe=It.b;Vt?(C[0]=kt,C[1]=Zt,C[2]=oe,C[3]=Xt,q.clearBufferuiv(q.COLOR,0,C)):(N[0]=kt,N[1]=Zt,N[2]=oe,N[3]=Xt,q.clearBufferiv(q.COLOR,0,N))}else nt|=q.COLOR_BUFFER_BIT}j&&(nt|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),at&&(nt|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),nt!==0&&q.clear(nt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),K=A},this.dispose=function(){i.removeEventListener("webglcontextlost",yt,!1),i.removeEventListener("webglcontextrestored",qt,!1),i.removeEventListener("webglcontextcreationerror",ee,!1),wt.dispose(),dt.dispose(),Ot.dispose(),D.dispose(),Q.dispose(),Ct.dispose(),Tt.dispose(),pt.dispose(),Lt.dispose(),Nt.dispose(),Nt.removeEventListener("sessionstart",kr),Nt.removeEventListener("sessionend",Xr),Nn.stop()};function yt(A){A.preventDefault(),l_("WebGLRenderer: Context Lost."),H=!0}function qt(){l_("WebGLRenderer: Context Restored."),H=!1;const A=Ke.autoReset,j=Ut.enabled,at=Ut.autoUpdate,nt=Ut.needsUpdate,it=Ut.type;zt(),Ke.autoReset=A,Ut.enabled=j,Ut.autoUpdate=at,Ut.needsUpdate=nt,Ut.type=it}function ee(A){Te("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function en(A){const j=A.target;j.removeEventListener("dispose",en),we(j)}function we(A){fi(A),D.remove(A)}function fi(A){const j=D.get(A).programs;j!==void 0&&(j.forEach(function(at){Lt.releaseProgram(at)}),A.isShaderMaterial&&Lt.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,at,nt,it,Ft){j===null&&(j=on);const Vt=it.isMesh&&it.matrixWorld.determinant()<0,It=Ta(A,j,at,nt,it);Rt.setMaterial(nt,Vt);let Xt=at.index,kt=1;if(nt.wireframe===!0){if(Xt=Et.getWireframeAttribute(at),Xt===void 0)return;kt=2}const Zt=at.drawRange,oe=at.attributes.position;let Yt=Zt.start*kt,Ae=(Zt.start+Zt.count)*kt;Ft!==null&&(Yt=Math.max(Yt,Ft.start*kt),Ae=Math.min(Ae,(Ft.start+Ft.count)*kt)),Xt!==null?(Yt=Math.max(Yt,0),Ae=Math.min(Ae,Xt.count)):oe!=null&&(Yt=Math.max(Yt,0),Ae=Math.min(Ae,oe.count));const Qe=Ae-Yt;if(Qe<0||Qe===1/0)return;Tt.setup(it,nt,It,at,Xt);let We,Oe=ie;if(Xt!==null&&(We=_t.get(Xt),Oe=pe,Oe.setIndex(We)),it.isMesh)nt.wireframe===!0?(Rt.setLineWidth(nt.wireframeLinewidth*En()),Oe.setMode(q.LINES)):Oe.setMode(q.TRIANGLES);else if(it.isLine){let Pe=nt.linewidth;Pe===void 0&&(Pe=1),Rt.setLineWidth(Pe*En()),it.isLineSegments?Oe.setMode(q.LINES):it.isLineLoop?Oe.setMode(q.LINE_LOOP):Oe.setMode(q.LINE_STRIP)}else it.isPoints?Oe.setMode(q.POINTS):it.isSprite&&Oe.setMode(q.TRIANGLES);if(it.isBatchedMesh)if(he.get("WEBGL_multi_draw"))Oe.renderMultiDraw(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount);else{const Pe=it._multiDrawStarts,Gt=it._multiDrawCounts,Ln=it._multiDrawCount,me=Xt?_t.get(Xt).bytesPerElement:1,_n=D.get(nt).currentProgram.getUniforms();for(let Qn=0;Qn<Ln;Qn++)_n.setValue(q,"_gl_DrawID",Qn),Oe.render(Pe[Qn]/me,Gt[Qn])}else if(it.isInstancedMesh)Oe.renderInstances(Yt,Qe,it.count);else if(at.isInstancedBufferGeometry){const Pe=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Gt=Math.min(at.instanceCount,Pe);Oe.renderInstances(Yt,Qe,Gt)}else Oe.render(Yt,Qe)};function Kn(A,j,at){A.transparent===!0&&A.side===Hi&&A.forceSinglePass===!1?(A.side=Yn,A.needsUpdate=!0,Bs(A,j,at),A.side=rs,A.needsUpdate=!0,Bs(A,j,at),A.side=Hi):Bs(A,j,at)}this.compile=function(A,j,at=null){at===null&&(at=A),U=Ot.get(at),U.init(j),T.push(U),at.traverseVisible(function(it){it.isLight&&it.layers.test(j.layers)&&(U.pushLight(it),it.castShadow&&U.pushShadow(it))}),A!==at&&A.traverseVisible(function(it){it.isLight&&it.layers.test(j.layers)&&(U.pushLight(it),it.castShadow&&U.pushShadow(it))}),U.setupLights();const nt=new Set;return A.traverse(function(it){if(!(it.isMesh||it.isPoints||it.isLine||it.isSprite))return;const Ft=it.material;if(Ft)if(Array.isArray(Ft))for(let Vt=0;Vt<Ft.length;Vt++){const It=Ft[Vt];Kn(It,at,it),nt.add(It)}else Kn(Ft,at,it),nt.add(Ft)}),U=T.pop(),nt},this.compileAsync=function(A,j,at=null){const nt=this.compile(A,j,at);return new Promise(it=>{function Ft(){if(nt.forEach(function(Vt){D.get(Vt).currentProgram.isReady()&&nt.delete(Vt)}),nt.size===0){it(A);return}setTimeout(Ft,10)}he.get("KHR_parallel_shader_compile")!==null?Ft():setTimeout(Ft,10)})};let ls=null;function Vr(A){ls&&ls(A)}function kr(){Nn.stop()}function Xr(){Nn.start()}const Nn=new Uv;Nn.setAnimationLoop(Vr),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(A){ls=A,Nt.setAnimationLoop(A),A===null?Nn.stop():Nn.start()},Nt.addEventListener("sessionstart",kr),Nt.addEventListener("sessionend",Xr),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){Te("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;K!==null&&K.renderStart(A,j);const at=Nt.enabled===!0&&Nt.isPresenting===!0,nt=L!==null&&(X===null||at)&&L.begin(Y,X);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Nt.enabled===!0&&Nt.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Nt.cameraAutoUpdate===!0&&Nt.updateCamera(j),j=Nt.getCamera()),A.isScene===!0&&A.onBeforeRender(Y,A,j,X),U=Ot.get(A,T.length),U.init(j),U.state.textureUnits=E.getTextureUnits(),T.push(U),ve.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Qt.setFromProjectionMatrix(ve,Vi,j.reversedDepth),de=this.localClippingEnabled,Xe=Pt.init(this.clippingPlanes,de),G=dt.get(A,F.length),G.init(),F.push(G),Nt.enabled===!0&&Nt.isPresenting===!0){const Vt=Y.xr.getDepthSensingMesh();Vt!==null&&ln(Vt,j,-1/0,Y.sortObjects)}ln(A,j,0,Y.sortObjects),G.finish(),Y.sortObjects===!0&&G.sort(rt,St),je=Nt.enabled===!1||Nt.isPresenting===!1||Nt.hasDepthSensing()===!1,je&&wt.addToRenderList(G,A),this.info.render.frame++,Xe===!0&&Pt.beginShadows();const it=U.state.shadowsArray;if(Ut.render(it,A,j),Xe===!0&&Pt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(nt&&L.hasRenderPass())===!1){const Vt=G.opaque,It=G.transmissive;if(U.setupLights(),j.isArrayCamera){const Xt=j.cameras;if(It.length>0)for(let kt=0,Zt=Xt.length;kt<Zt;kt++){const oe=Xt[kt];Yi(Vt,It,A,oe)}je&&wt.render(A);for(let kt=0,Zt=Xt.length;kt<Zt;kt++){const oe=Xt[kt];bn(G,A,oe,oe.viewport)}}else It.length>0&&Yi(Vt,It,A,j),je&&wt.render(A),bn(G,A,j)}X!==null&&ut===0&&(E.updateMultisampleRenderTarget(X),E.updateRenderTargetMipmap(X)),nt&&L.end(Y),A.isScene===!0&&A.onAfterRender(Y,A,j),Tt.resetDefaultState(),O=-1,z=null,T.pop(),T.length>0?(U=T[T.length-1],E.setTextureUnits(U.state.textureUnits),Xe===!0&&Pt.setGlobalState(Y.clippingPlanes,U.state.camera)):U=null,F.pop(),F.length>0?G=F[F.length-1]:G=null,K!==null&&K.renderEnd()};function ln(A,j,at,nt){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)at=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLightProbeGrid)U.pushLightProbeGrid(A);else if(A.isLight)U.pushLight(A),A.castShadow&&U.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Qt.intersectsSprite(A)){nt&&ce.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ve);const Vt=Ct.update(A),It=A.material;It.visible&&G.push(A,Vt,It,at,ce.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Qt.intersectsObject(A))){const Vt=Ct.update(A),It=A.material;if(nt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ce.copy(A.boundingSphere.center)):(Vt.boundingSphere===null&&Vt.computeBoundingSphere(),ce.copy(Vt.boundingSphere.center)),ce.applyMatrix4(A.matrixWorld).applyMatrix4(ve)),Array.isArray(It)){const Xt=Vt.groups;for(let kt=0,Zt=Xt.length;kt<Zt;kt++){const oe=Xt[kt],Yt=It[oe.materialIndex];Yt&&Yt.visible&&G.push(A,Vt,Yt,at,ce.z,oe)}}else It.visible&&G.push(A,Vt,It,at,ce.z,null)}}const Ft=A.children;for(let Vt=0,It=Ft.length;Vt<It;Vt++)ln(Ft[Vt],j,at,nt)}function bn(A,j,at,nt){const{opaque:it,transmissive:Ft,transparent:Vt}=A;U.setupLightsView(at),Xe===!0&&Pt.setGlobalState(Y.clippingPlanes,at),nt&&Rt.viewport(ot.copy(nt)),it.length>0&&Ea(it,j,at),Ft.length>0&&Ea(Ft,j,at),Vt.length>0&&Ea(Vt,j,at),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function Yi(A,j,at,nt){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[nt.id]===void 0){const Yt=he.has("EXT_color_buffer_half_float")||he.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[nt.id]=new Xi(1,1,{generateMipmaps:!0,type:Yt?Sa:ci,minFilter:Os,samples:Math.max(4,He.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Me.workingColorSpace})}const Ft=U.state.transmissionRenderTarget[nt.id],Vt=nt.viewport||ot;Ft.setSize(Vt.z*Y.transmissionResolutionScale,Vt.w*Y.transmissionResolutionScale);const It=Y.getRenderTarget(),Xt=Y.getActiveCubeFace(),kt=Y.getActiveMipmapLevel();Y.setRenderTarget(Ft),Y.getClearColor(I),J=Y.getClearAlpha(),J<1&&Y.setClearColor(16777215,.5),Y.clear(),je&&wt.render(at);const Zt=Y.toneMapping;Y.toneMapping=ki;const oe=nt.viewport;if(nt.viewport!==void 0&&(nt.viewport=void 0),U.setupLightsView(nt),Xe===!0&&Pt.setGlobalState(Y.clippingPlanes,nt),Ea(A,at,nt),E.updateMultisampleRenderTarget(Ft),E.updateRenderTargetMipmap(Ft),he.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let Ae=0,Qe=j.length;Ae<Qe;Ae++){const We=j[Ae],{object:Oe,geometry:Pe,material:Gt,group:Ln}=We;if(Gt.side===Hi&&Oe.layers.test(nt.layers)){const me=Gt.side;Gt.side=Yn,Gt.needsUpdate=!0,tl(Oe,at,nt,Pe,Gt,Ln),Gt.side=me,Gt.needsUpdate=!0,Yt=!0}}Yt===!0&&(E.updateMultisampleRenderTarget(Ft),E.updateRenderTargetMipmap(Ft))}Y.setRenderTarget(It,Xt,kt),Y.setClearColor(I,J),oe!==void 0&&(nt.viewport=oe),Y.toneMapping=Zt}function Ea(A,j,at){const nt=j.isScene===!0?j.overrideMaterial:null;for(let it=0,Ft=A.length;it<Ft;it++){const Vt=A[it],{object:It,geometry:Xt,group:kt}=Vt;let Zt=Vt.material;Zt.allowOverride===!0&&nt!==null&&(Zt=nt),It.layers.test(at.layers)&&tl(It,j,at,Xt,Zt,kt)}}function tl(A,j,at,nt,it,Ft){A.onBeforeRender(Y,j,at,nt,it,Ft),A.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),it.onBeforeRender(Y,j,at,nt,A,Ft),it.transparent===!0&&it.side===Hi&&it.forceSinglePass===!1?(it.side=Yn,it.needsUpdate=!0,Y.renderBufferDirect(at,j,nt,it,A,Ft),it.side=rs,it.needsUpdate=!0,Y.renderBufferDirect(at,j,nt,it,A,Ft),it.side=Hi):Y.renderBufferDirect(at,j,nt,it,A,Ft),A.onAfterRender(Y,j,at,nt,it,Ft)}function Bs(A,j,at){j.isScene!==!0&&(j=on);const nt=D.get(A),it=U.state.lights,Ft=U.state.shadowsArray,Vt=it.state.version,It=Lt.getParameters(A,it.state,Ft,j,at,U.state.lightProbeGridArray),Xt=Lt.getProgramCacheKey(It);let kt=nt.programs;nt.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?j.environment:null,nt.fog=j.fog;const Zt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;nt.envMap=Q.get(A.envMap||nt.environment,Zt),nt.envMapRotation=nt.environment!==null&&A.envMap===null?j.environmentRotation:A.envMapRotation,kt===void 0&&(A.addEventListener("dispose",en),kt=new Map,nt.programs=kt);let oe=kt.get(Xt);if(oe!==void 0){if(nt.currentProgram===oe&&nt.lightsStateVersion===Vt)return ba(A,It),oe}else It.uniforms=Lt.getUniforms(A),K!==null&&A.isNodeMaterial&&K.build(A,at,It),A.onBeforeCompile(It,Y),oe=Lt.acquireProgram(It,Xt),kt.set(Xt,oe),nt.uniforms=It.uniforms;const Yt=nt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Yt.clippingPlanes=Pt.uniform),ba(A,It),nt.needsLights=cs(A),nt.lightsStateVersion=Vt,nt.needsLights&&(Yt.ambientLightColor.value=it.state.ambient,Yt.lightProbe.value=it.state.probe,Yt.directionalLights.value=it.state.directional,Yt.directionalLightShadows.value=it.state.directionalShadow,Yt.spotLights.value=it.state.spot,Yt.spotLightShadows.value=it.state.spotShadow,Yt.rectAreaLights.value=it.state.rectArea,Yt.ltc_1.value=it.state.rectAreaLTC1,Yt.ltc_2.value=it.state.rectAreaLTC2,Yt.pointLights.value=it.state.point,Yt.pointLightShadows.value=it.state.pointShadow,Yt.hemisphereLights.value=it.state.hemi,Yt.directionalShadowMatrix.value=it.state.directionalShadowMatrix,Yt.spotLightMatrix.value=it.state.spotLightMatrix,Yt.spotLightMap.value=it.state.spotLightMap,Yt.pointShadowMatrix.value=it.state.pointShadowMatrix),nt.lightProbeGrid=U.state.lightProbeGridArray.length>0,nt.currentProgram=oe,nt.uniformsList=null,oe}function Wr(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=kc.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function ba(A,j){const at=D.get(A);at.outputColorSpace=j.outputColorSpace,at.batching=j.batching,at.batchingColor=j.batchingColor,at.instancing=j.instancing,at.instancingColor=j.instancingColor,at.instancingMorph=j.instancingMorph,at.skinning=j.skinning,at.morphTargets=j.morphTargets,at.morphNormals=j.morphNormals,at.morphColors=j.morphColors,at.morphTargetsCount=j.morphTargetsCount,at.numClippingPlanes=j.numClippingPlanes,at.numIntersection=j.numClipIntersection,at.vertexAlphas=j.vertexAlphas,at.vertexTangents=j.vertexTangents,at.toneMapping=j.toneMapping}function qr(A,j){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;P.setFromMatrixPosition(j.matrixWorld);for(let at=0,nt=A.length;at<nt;at++){const it=A[at];if(it.texture!==null&&it.boundingBox.containsPoint(P))return it}return null}function Ta(A,j,at,nt,it){j.isScene!==!0&&(j=on),E.resetTextureUnits();const Ft=j.fog,Vt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial?j.environment:null,It=X===null?Y.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Me.workingColorSpace,Xt=nt.isMeshStandardMaterial||nt.isMeshLambertMaterial&&!nt.envMap||nt.isMeshPhongMaterial&&!nt.envMap,kt=Q.get(nt.envMap||Vt,Xt),Zt=nt.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,oe=!!at.attributes.tangent&&(!!nt.normalMap||nt.anisotropy>0),Yt=!!at.morphAttributes.position,Ae=!!at.morphAttributes.normal,Qe=!!at.morphAttributes.color;let We=ki;nt.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(We=Y.toneMapping);const Oe=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,Pe=Oe!==void 0?Oe.length:0,Gt=D.get(nt),Ln=U.state.lights;if(Xe===!0&&(de===!0||A!==z)){const Ne=A===z&&nt.id===O;Pt.setState(nt,A,Ne)}let me=!1;nt.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==Ln.state.version||Gt.outputColorSpace!==It||it.isBatchedMesh&&Gt.batching===!1||!it.isBatchedMesh&&Gt.batching===!0||it.isBatchedMesh&&Gt.batchingColor===!0&&it.colorTexture===null||it.isBatchedMesh&&Gt.batchingColor===!1&&it.colorTexture!==null||it.isInstancedMesh&&Gt.instancing===!1||!it.isInstancedMesh&&Gt.instancing===!0||it.isSkinnedMesh&&Gt.skinning===!1||!it.isSkinnedMesh&&Gt.skinning===!0||it.isInstancedMesh&&Gt.instancingColor===!0&&it.instanceColor===null||it.isInstancedMesh&&Gt.instancingColor===!1&&it.instanceColor!==null||it.isInstancedMesh&&Gt.instancingMorph===!0&&it.morphTexture===null||it.isInstancedMesh&&Gt.instancingMorph===!1&&it.morphTexture!==null||Gt.envMap!==kt||nt.fog===!0&&Gt.fog!==Ft||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==Pt.numPlanes||Gt.numIntersection!==Pt.numIntersection)||Gt.vertexAlphas!==Zt||Gt.vertexTangents!==oe||Gt.morphTargets!==Yt||Gt.morphNormals!==Ae||Gt.morphColors!==Qe||Gt.toneMapping!==We||Gt.morphTargetsCount!==Pe||!!Gt.lightProbeGrid!=U.state.lightProbeGridArray.length>0)&&(me=!0):(me=!0,Gt.__version=nt.version);let _n=Gt.currentProgram;me===!0&&(_n=Bs(nt,j,it),K&&nt.isNodeMaterial&&K.onUpdateProgram(nt,_n,Gt));let Qn=!1,Ei=!1,Jn=!1;const Ie=_n.getUniforms(),Je=Gt.uniforms;if(Rt.useProgram(_n.program)&&(Qn=!0,Ei=!0,Jn=!0),nt.id!==O&&(O=nt.id,Ei=!0),Gt.needsLights){const Ne=qr(U.state.lightProbeGridArray,it);Gt.lightProbeGrid!==Ne&&(Gt.lightProbeGrid=Ne,Ei=!0)}if(Qn||z!==A){Rt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ie.setValue(q,"projectionMatrix",A.projectionMatrix),Ie.setValue(q,"viewMatrix",A.matrixWorldInverse);const Ni=Ie.map.cameraPosition;Ni!==void 0&&Ni.setValue(q,Le.setFromMatrixPosition(A.matrixWorld)),He.logarithmicDepthBuffer&&Ie.setValue(q,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(nt.isMeshPhongMaterial||nt.isMeshToonMaterial||nt.isMeshLambertMaterial||nt.isMeshBasicMaterial||nt.isMeshStandardMaterial||nt.isShaderMaterial)&&Ie.setValue(q,"isOrthographic",A.isOrthographicCamera===!0),z!==A&&(z=A,Ei=!0,Jn=!0)}if(Gt.needsLights&&(Ln.state.directionalShadowMap.length>0&&Ie.setValue(q,"directionalShadowMap",Ln.state.directionalShadowMap,E),Ln.state.spotShadowMap.length>0&&Ie.setValue(q,"spotShadowMap",Ln.state.spotShadowMap,E),Ln.state.pointShadowMap.length>0&&Ie.setValue(q,"pointShadowMap",Ln.state.pointShadowMap,E)),it.isSkinnedMesh){Ie.setOptional(q,it,"bindMatrix"),Ie.setOptional(q,it,"bindMatrixInverse");const Ne=it.skeleton;Ne&&(Ne.boneTexture===null&&Ne.computeBoneTexture(),Ie.setValue(q,"boneTexture",Ne.boneTexture,E))}it.isBatchedMesh&&(Ie.setOptional(q,it,"batchingTexture"),Ie.setValue(q,"batchingTexture",it._matricesTexture,E),Ie.setOptional(q,it,"batchingIdTexture"),Ie.setValue(q,"batchingIdTexture",it._indirectTexture,E),Ie.setOptional(q,it,"batchingColorTexture"),it._colorsTexture!==null&&Ie.setValue(q,"batchingColorTexture",it._colorsTexture,E));const bi=at.morphAttributes;if((bi.position!==void 0||bi.normal!==void 0||bi.color!==void 0)&&ne.update(it,at,_n),(Ei||Gt.receiveShadow!==it.receiveShadow)&&(Gt.receiveShadow=it.receiveShadow,Ie.setValue(q,"receiveShadow",it.receiveShadow)),(nt.isMeshStandardMaterial||nt.isMeshLambertMaterial||nt.isMeshPhongMaterial)&&nt.envMap===null&&j.environment!==null&&(Je.envMapIntensity.value=j.environmentIntensity),Je.dfgLUT!==void 0&&(Je.dfgLUT.value=vA()),Ei){if(Ie.setValue(q,"toneMappingExposure",Y.toneMappingExposure),Gt.needsLights&&Aa(Je,Jn),Ft&&nt.fog===!0&&ft.refreshFogUniforms(Je,Ft),ft.refreshMaterialUniforms(Je,nt,Dt,At,U.state.transmissionRenderTarget[A.id]),Gt.needsLights&&Gt.lightProbeGrid){const Ne=Gt.lightProbeGrid;Je.probesSH.value=Ne.texture,Je.probesMin.value.copy(Ne.boundingBox.min),Je.probesMax.value.copy(Ne.boundingBox.max),Je.probesResolution.value.copy(Ne.resolution)}kc.upload(q,Wr(Gt),Je,E)}if(nt.isShaderMaterial&&nt.uniformsNeedUpdate===!0&&(kc.upload(q,Wr(Gt),Je,E),nt.uniformsNeedUpdate=!1),nt.isSpriteMaterial&&Ie.setValue(q,"center",it.center),Ie.setValue(q,"modelViewMatrix",it.modelViewMatrix),Ie.setValue(q,"normalMatrix",it.normalMatrix),Ie.setValue(q,"modelMatrix",it.matrixWorld),nt.uniformsGroups!==void 0){const Ne=nt.uniformsGroups;for(let Ni=0,Ca=Ne.length;Ni<Ca;Ni++){const us=Ne[Ni];pt.update(us,_n),pt.bind(us,_n)}}return _n}function Aa(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function cs(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return lt},this.getActiveMipmapLevel=function(){return ut},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(A,j,at){const nt=D.get(A);nt.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,nt.__autoAllocateDepthBuffer===!1&&(nt.__useRenderToTexture=!1),D.get(A.texture).__webglTexture=j,D.get(A.depthTexture).__webglTexture=nt.__autoAllocateDepthBuffer?void 0:at,nt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,j){const at=D.get(A);at.__webglFramebuffer=j,at.__useDefaultFramebuffer=j===void 0};const Ra=q.createFramebuffer();this.setRenderTarget=function(A,j=0,at=0){X=A,lt=j,ut=at;let nt=null,it=!1,Ft=!1;if(A){const It=D.get(A);if(It.__useDefaultFramebuffer!==void 0){Rt.bindFramebuffer(q.FRAMEBUFFER,It.__webglFramebuffer),ot.copy(A.viewport),gt.copy(A.scissor),Mt=A.scissorTest,Rt.viewport(ot),Rt.scissor(gt),Rt.setScissorTest(Mt),O=-1;return}else if(It.__webglFramebuffer===void 0)E.setupRenderTarget(A);else if(It.__hasExternalTextures)E.rebindTextures(A,D.get(A.texture).__webglTexture,D.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Zt=A.depthTexture;if(It.__boundDepthTexture!==Zt){if(Zt!==null&&D.has(Zt)&&(A.width!==Zt.image.width||A.height!==Zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(A)}}const Xt=A.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Ft=!0);const kt=D.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(kt[j])?nt=kt[j][at]:nt=kt[j],it=!0):A.samples>0&&E.useMultisampledRTT(A)===!1?nt=D.get(A).__webglMultisampledFramebuffer:Array.isArray(kt)?nt=kt[at]:nt=kt,ot.copy(A.viewport),gt.copy(A.scissor),Mt=A.scissorTest}else ot.copy(bt).multiplyScalar(Dt).floor(),gt.copy(Ht).multiplyScalar(Dt).floor(),Mt=te;if(at!==0&&(nt=Ra),Rt.bindFramebuffer(q.FRAMEBUFFER,nt)&&Rt.drawBuffers(A,nt),Rt.viewport(ot),Rt.scissor(gt),Rt.setScissorTest(Mt),it){const It=D.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+j,It.__webglTexture,at)}else if(Ft){const It=j;for(let Xt=0;Xt<A.textures.length;Xt++){const kt=D.get(A.textures[Xt]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+Xt,kt.__webglTexture,at,It)}}else if(A!==null&&at!==0){const It=D.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,It.__webglTexture,at)}O=-1},this.readRenderTargetPixels=function(A,j,at,nt,it,Ft,Vt,It=0){if(!(A&&A.isWebGLRenderTarget)){Te("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xt=D.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Vt!==void 0&&(Xt=Xt[Vt]),Xt){Rt.bindFramebuffer(q.FRAMEBUFFER,Xt);try{const kt=A.textures[It],Zt=kt.format,oe=kt.type;if(A.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+It),!He.textureFormatReadable(Zt)){Te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(oe)){Te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-nt&&at>=0&&at<=A.height-it&&q.readPixels(j,at,nt,it,V.convert(Zt),V.convert(oe),Ft)}finally{const kt=X!==null?D.get(X).__webglFramebuffer:null;Rt.bindFramebuffer(q.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(A,j,at,nt,it,Ft,Vt,It=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xt=D.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Vt!==void 0&&(Xt=Xt[Vt]),Xt)if(j>=0&&j<=A.width-nt&&at>=0&&at<=A.height-it){Rt.bindFramebuffer(q.FRAMEBUFFER,Xt);const kt=A.textures[It],Zt=kt.format,oe=kt.type;if(A.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+It),!He.textureFormatReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Yt=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,Yt),q.bufferData(q.PIXEL_PACK_BUFFER,Ft.byteLength,q.STREAM_READ),q.readPixels(j,at,nt,it,V.convert(Zt),V.convert(oe),0);const Ae=X!==null?D.get(X).__webglFramebuffer:null;Rt.bindFramebuffer(q.FRAMEBUFFER,Ae);const Qe=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await Ly(q,Qe,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,Yt),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Ft),q.deleteBuffer(Yt),q.deleteSync(Qe),Ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,j=null,at=0){const nt=Math.pow(2,-at),it=Math.floor(A.image.width*nt),Ft=Math.floor(A.image.height*nt),Vt=j!==null?j.x:0,It=j!==null?j.y:0;E.setTexture2D(A,0),q.copyTexSubImage2D(q.TEXTURE_2D,at,0,0,Vt,It,it,Ft),Rt.unbindTexture()};const fn=q.createFramebuffer(),el=q.createFramebuffer();this.copyTextureToTexture=function(A,j,at=null,nt=null,it=0,Ft=0){let Vt,It,Xt,kt,Zt,oe,Yt,Ae,Qe;const We=A.isCompressedTexture?A.mipmaps[Ft]:A.image;if(at!==null)Vt=at.max.x-at.min.x,It=at.max.y-at.min.y,Xt=at.isBox3?at.max.z-at.min.z:1,kt=at.min.x,Zt=at.min.y,oe=at.isBox3?at.min.z:0;else{const Je=Math.pow(2,-it);Vt=Math.floor(We.width*Je),It=Math.floor(We.height*Je),A.isDataArrayTexture?Xt=We.depth:A.isData3DTexture?Xt=Math.floor(We.depth*Je):Xt=1,kt=0,Zt=0,oe=0}nt!==null?(Yt=nt.x,Ae=nt.y,Qe=nt.z):(Yt=0,Ae=0,Qe=0);const Oe=V.convert(j.format),Pe=V.convert(j.type);let Gt;j.isData3DTexture?(E.setTexture3D(j,0),Gt=q.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(E.setTexture2DArray(j,0),Gt=q.TEXTURE_2D_ARRAY):(E.setTexture2D(j,0),Gt=q.TEXTURE_2D),Rt.activeTexture(q.TEXTURE0),Rt.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,j.flipY),Rt.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),Rt.pixelStorei(q.UNPACK_ALIGNMENT,j.unpackAlignment);const Ln=Rt.getParameter(q.UNPACK_ROW_LENGTH),me=Rt.getParameter(q.UNPACK_IMAGE_HEIGHT),_n=Rt.getParameter(q.UNPACK_SKIP_PIXELS),Qn=Rt.getParameter(q.UNPACK_SKIP_ROWS),Ei=Rt.getParameter(q.UNPACK_SKIP_IMAGES);Rt.pixelStorei(q.UNPACK_ROW_LENGTH,We.width),Rt.pixelStorei(q.UNPACK_IMAGE_HEIGHT,We.height),Rt.pixelStorei(q.UNPACK_SKIP_PIXELS,kt),Rt.pixelStorei(q.UNPACK_SKIP_ROWS,Zt),Rt.pixelStorei(q.UNPACK_SKIP_IMAGES,oe);const Jn=A.isDataArrayTexture||A.isData3DTexture,Ie=j.isDataArrayTexture||j.isData3DTexture;if(A.isDepthTexture){const Je=D.get(A),bi=D.get(j),Ne=D.get(Je.__renderTarget),Ni=D.get(bi.__renderTarget);Rt.bindFramebuffer(q.READ_FRAMEBUFFER,Ne.__webglFramebuffer),Rt.bindFramebuffer(q.DRAW_FRAMEBUFFER,Ni.__webglFramebuffer);for(let Ca=0;Ca<Xt;Ca++)Jn&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,D.get(A).__webglTexture,it,oe+Ca),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,D.get(j).__webglTexture,Ft,Qe+Ca)),q.blitFramebuffer(kt,Zt,Vt,It,Yt,Ae,Vt,It,q.DEPTH_BUFFER_BIT,q.NEAREST);Rt.bindFramebuffer(q.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(it!==0||A.isRenderTargetTexture||D.has(A)){const Je=D.get(A),bi=D.get(j);Rt.bindFramebuffer(q.READ_FRAMEBUFFER,fn),Rt.bindFramebuffer(q.DRAW_FRAMEBUFFER,el);for(let Ne=0;Ne<Xt;Ne++)Jn?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Je.__webglTexture,it,oe+Ne):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Je.__webglTexture,it),Ie?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,bi.__webglTexture,Ft,Qe+Ne):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,bi.__webglTexture,Ft),it!==0?q.blitFramebuffer(kt,Zt,Vt,It,Yt,Ae,Vt,It,q.COLOR_BUFFER_BIT,q.NEAREST):Ie?q.copyTexSubImage3D(Gt,Ft,Yt,Ae,Qe+Ne,kt,Zt,Vt,It):q.copyTexSubImage2D(Gt,Ft,Yt,Ae,kt,Zt,Vt,It);Rt.bindFramebuffer(q.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Ie?A.isDataTexture||A.isData3DTexture?q.texSubImage3D(Gt,Ft,Yt,Ae,Qe,Vt,It,Xt,Oe,Pe,We.data):j.isCompressedArrayTexture?q.compressedTexSubImage3D(Gt,Ft,Yt,Ae,Qe,Vt,It,Xt,Oe,We.data):q.texSubImage3D(Gt,Ft,Yt,Ae,Qe,Vt,It,Xt,Oe,Pe,We):A.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Ft,Yt,Ae,Vt,It,Oe,Pe,We.data):A.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Ft,Yt,Ae,We.width,We.height,Oe,We.data):q.texSubImage2D(q.TEXTURE_2D,Ft,Yt,Ae,Vt,It,Oe,Pe,We);Rt.pixelStorei(q.UNPACK_ROW_LENGTH,Ln),Rt.pixelStorei(q.UNPACK_IMAGE_HEIGHT,me),Rt.pixelStorei(q.UNPACK_SKIP_PIXELS,_n),Rt.pixelStorei(q.UNPACK_SKIP_ROWS,Qn),Rt.pixelStorei(q.UNPACK_SKIP_IMAGES,Ei),Ft===0&&j.generateMipmaps&&q.generateMipmap(Gt),Rt.unbindTexture()},this.initRenderTarget=function(A){D.get(A).__webglFramebuffer===void 0&&E.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?E.setTextureCube(A,0):A.isData3DTexture?E.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?E.setTexture2DArray(A,0):E.setTexture2D(A,0),Rt.unbindTexture()},this.resetState=function(){lt=0,ut=0,X=null,Rt.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Me._getDrawingBufferColorSpace(e),i.unpackColorSpace=Me._getUnpackColorSpace()}}function SA(){const o=se.useRef(null),e=se.useRef(0);return se.useEffect(()=>{const i=o.current;if(!i)return;const s=new Zy;s.background=new be(462873);const l=new li(52,i.clientWidth/i.clientHeight,.1,500);l.position.set(0,5,38),l.lookAt(0,0,0);const c=new xA({antialias:!0,alpha:!1});c.setSize(i.clientWidth,i.clientHeight),c.setPixelRatio(Math.min(window.devicePixelRatio,1.7)),c.toneMapping=qh,i.appendChild(c.domElement);const d=new xM(9418960,.55);s.add(d);const p=new vM(16777215,1.3);p.position.set(-10,14,18),s.add(p);const m=new gM(40931,7,80);m.position.set(16,8,18),s.add(m);const h=new EM(70,42,40931,2046280);h.position.y=-8,h.rotation.x=Math.PI*.02,h.material.opacity=.28,h.material.transparent=!0,s.add(h);const x=new Ur,v=new dM({color:793382,metalness:.45,roughness:.55,transparent:!0,opacity:.72}),g=new Kc({color:4944518,transparent:!0,opacity:.45});for(let L=0;L<9;L++){const Y=5+Math.random()*6,H=2.2+Math.random()*3.2,K=new Hr(Y,H,.18),lt=new ui(K,v);lt.position.set(-26+L*6.6,-1+Math.sin(L)*2.8,-9-Math.random()*9),lt.rotation.y=-.22+Math.random()*.42,lt.rotation.x=-.08+Math.random()*.16,x.add(lt);const ut=new Hh(new rM(K),g);ut.position.copy(lt.position),ut.rotation.copy(lt.rotation),x.add(ut)}s.add(x);const M=new Ur,b=new Kc({color:40931,transparent:!0,opacity:.34}),w=new Zc({color:3590399,transparent:!0,opacity:.86}),y=[];for(let L=0;L<8;L++){const Y=-4+L*1.35,H=-2-L*1.4,K=[];for(let ut=0;ut<8;ut++){const X=-26+ut*7.5;K.push(new $(X,Y+Math.sin(ut+L)*.5,H)),ut%2===1&&K.push(new $(X+2.5,Y+1.1,H-.35))}const lt=new Zn().setFromPoints(K);M.add(new Bh(lt,b)),K.filter((ut,X)=>X%3===0).forEach((ut,X)=>{const O=new ui(new ip(.09,12,12),w);O.position.copy(ut),M.add(O),y.push({mesh:O,baseScale:1+X*.04,phase:Math.random()*Math.PI*2})})}M.rotation.x=-.12,s.add(M);const S=new Zc({color:40931,transparent:!0,opacity:.12,side:Hi}),C=new ui(new Jo(3.5,48),S);C.position.set(-20,0,2),C.rotation.z=.35,s.add(C);const N={x:0,y:0},P={x:0,y:0},G=L=>{P.x=(L.clientX/window.innerWidth-.5)*2,P.y=(L.clientY/window.innerHeight-.5)*2},U=()=>{const L=i.clientWidth,Y=i.clientHeight;l.aspect=L/Y,l.updateProjectionMatrix(),c.setSize(L,Y)};window.addEventListener("mousemove",G),window.addEventListener("resize",U);const F=new MM,T=()=>{e.current=requestAnimationFrame(T);const L=F.getElapsedTime();N.x+=(P.x-N.x)*.045,N.y+=(P.y-N.y)*.045,l.position.x=N.x*2.2,l.position.y=5-N.y*1.1,l.lookAt(N.x*1.4,-1,0),x.rotation.y=Math.sin(L*.22)*.035,M.position.x=Math.sin(L*.18)*.8,C.position.x=-28+L*6%58,m.position.x=10+Math.sin(L*.5)*8,y.forEach(Y=>{const H=Y.baseScale+Math.sin(L*2.4+Y.phase)*.45;Y.mesh.scale.setScalar(Math.max(.7,H))}),c.render(s,l)};return T(),()=>{cancelAnimationFrame(e.current),window.removeEventListener("mousemove",G),window.removeEventListener("resize",U),s.traverse(L=>{(L instanceof ui||L instanceof Bh||L instanceof Hh)&&L.geometry.dispose()}),v.dispose(),g.dispose(),b.dispose(),w.dispose(),S.dispose(),c.dispose(),i.contains(c.domElement)&&i.removeChild(c.domElement)}},[]),W.jsx("div",{"code-path":"src\\sections\\IndustrialBackground.tsx:203:5",ref:o,style:{position:"absolute",inset:0,zIndex:0,pointerEvents:"auto"}})}const yA=["Ingeniería","Automatización","Instalaciones Eléctricas","Tableros","Mantenimiento","Instrumentación","Metalmecánica","Obras Industriales","Tecnología Industrial"];function MA(){const o=se.useRef(null);return se.useEffect(()=>{const e=o.current;if(!e)return;e.querySelectorAll(".hero-animate").forEach((s,l)=>{const c=s;c.style.opacity="0",c.style.transform="translateY(20px)",c.style.transition=`opacity 0.6s ease-out ${l*.2}s, transform 0.6s ease-out ${l*.2}s`,setTimeout(()=>{c.style.opacity="1",c.style.transform="translateY(0)"},100)})},[]),W.jsxs("section",{"code-path":"src\\sections\\HeroSection.tsx:28:5",id:"hero",className:"relative min-h-screen overflow-hidden",style:{backgroundColor:"#1a1a1a",clipPath:"polygon(0 0, 100% 0, 100% calc(100% - 80px), 0 100%)"},children:[W.jsx(SA,{"code-path":"src\\sections\\HeroSection.tsx:37:7"}),W.jsx("div",{"code-path":"src\\sections\\HeroSection.tsx:40:7",className:"absolute inset-0 z-[1]",style:{background:"linear-gradient(90deg, rgba(7,16,25,0.74) 0%, rgba(7,16,25,0.44) 45%, rgba(7,16,25,0.82) 100%), linear-gradient(to bottom, rgba(7,16,25,0.12) 0%, rgba(7,16,25,0.84) 100%)"}}),W.jsxs("div",{"code-path":"src\\sections\\HeroSection.tsx:49:7",ref:o,className:"relative z-[2] flex min-h-screen flex-col items-center justify-center px-5 pb-28 pt-28 text-center sm:px-6 md:pb-32",children:[W.jsx("h1",{"code-path":"src\\sections\\HeroSection.tsx:53:9",className:"hero-animate mb-5 max-w-[920px] text-balance text-[28px] font-bold uppercase leading-[1.16] sm:text-4xl md:text-5xl lg:text-[52px]",style:{fontFamily:"'Space Grotesk', sans-serif",color:"#ffffff"},children:"Ingeniería y Servicios Técnicos Integrales para la continuidad de su operación industrial"}),W.jsx("p",{"code-path":"src\\sections\\HeroSection.tsx:60:9",className:"hero-animate mb-8 max-w-[620px] text-sm leading-relaxed sm:text-base md:text-lg",style:{fontFamily:"'Inter', sans-serif",color:"#8a8580"},children:"Más que un contratista, somos un socio estratégico en ingeniería, automatización y mantenimiento industrial."}),W.jsx("div",{"code-path":"src\\sections\\HeroSection.tsx:68:9",className:"hero-animate mb-10 flex max-w-[920px] flex-wrap justify-center gap-2 sm:gap-3",children:yA.map(e=>W.jsx("span",{"code-path":"src\\sections\\HeroSection.tsx:70:13",className:"border px-3 py-2 text-[10px] uppercase tracking-[1px] sm:px-4 sm:text-xs sm:tracking-[1.5px]",style:{fontFamily:"'IBM Plex Mono', monospace",color:"#cccccc",borderColor:"#555555"},children:e},e))}),W.jsx("a",{"code-path":"src\\sections\\HeroSection.tsx:85:9",href:"https://wa.me/573181419074?text=Hola%20IMANTEK%2C%20necesito%20apoyo%20t%C3%A9cnico%20para%20un%20proyecto%20de%20ingenier%C3%ADa.",target:"_blank",rel:"noopener noreferrer",className:"hero-animate px-9 py-3.5 text-xs font-medium uppercase tracking-[1.5px] text-white transition-colors duration-300 hover:bg-[#007fb8]",style:{fontFamily:"'IBM Plex Mono', monospace",backgroundColor:"#009fe3"},children:"Solicitar cotización"}),W.jsx("div",{"code-path":"src\\sections\\HeroSection.tsx:99:9",className:"hero-animate absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center md:flex",children:W.jsx("div",{"code-path":"src\\sections\\HeroSection.tsx:100:11",className:"relative h-10 w-[1px] overflow-hidden",style:{backgroundColor:"rgba(255,255,255,0.4)"},children:W.jsx("div",{"code-path":"src\\sections\\HeroSection.tsx:101:13",className:"absolute h-2.5 w-2.5 -translate-x-1/2 rounded-full",style:{backgroundColor:"rgba(255,255,255,0.6)",left:"50%",animation:"scrollBounce 2s ease-in-out infinite"}})})})]}),W.jsx("style",{"code-path":"src\\sections\\HeroSection.tsx:113:7",children:`
        @keyframes scrollBounce {
          0%, 100% { top: 0; opacity: 0.6; }
          50% { top: 24px; opacity: 0; }
        }
      `})]})}function Ma(o={}){const e=se.useRef(null);return se.useEffect(()=>{const i=e.current;if(!i)return;const{threshold:s=.15,delay:l=0,duration:c=.6,translateY:d=40,translateX:p=0,scale:m=1}=o;i.style.opacity="0",i.style.transform=`translateY(${d}px) translateX(${p}px) scale(${m})`,i.style.transition=`opacity ${c}s ease-out ${l}s, transform ${c}s ease-out ${l}s`,i.style.willChange="transform, opacity";const h=new IntersectionObserver(x=>{x.forEach(v=>{v.isIntersecting&&(i.style.opacity="1",i.style.transform="translateY(0) translateX(0) scale(1)",i.addEventListener("transitionend",()=>{i.style.willChange="auto"},{once:!0}),h.unobserve(i))})},{threshold:s});return h.observe(i),()=>{h.disconnect()}},[]),e}const EA="./images/about-image.png";function bA(){const o=Ma({translateX:-30,duration:.7}),e=Ma({translateX:30,duration:.7,delay:.15});return W.jsx("section",{"code-path":"src\\sections\\AboutSection.tsx:17:5",id:"about",className:"relative",style:{backgroundColor:"#f5f3ef",marginTop:"-80px",paddingTop:"160px",paddingBottom:"100px"},children:W.jsx("div",{"code-path":"src\\sections\\AboutSection.tsx:27:7",className:"mx-auto max-w-[1200px] px-6",children:W.jsxs("div",{"code-path":"src\\sections\\AboutSection.tsx:28:9",className:"grid items-center gap-16 md:grid-cols-[55%_45%]",children:[W.jsxs("div",{"code-path":"src\\sections\\AboutSection.tsx:30:11",ref:o,children:[W.jsx("p",{"code-path":"src\\sections\\AboutSection.tsx:31:13",className:"mb-4 text-xs uppercase tracking-[2px]",style:{fontFamily:"'IBM Plex Mono', monospace",color:"#009fe3"},children:"Sobre nosotros"}),W.jsx("h2",{"code-path":"src\\sections\\AboutSection.tsx:38:13",className:"mb-6 text-3xl font-medium uppercase leading-[1.15] sm:text-4xl",style:{fontFamily:"'Space Grotesk', sans-serif",color:"#1a1a1a"},children:"Impulsando operaciones con criterio técnico"}),W.jsx("p",{"code-path":"src\\sections\\AboutSection.tsx:45:13",className:"mb-8 text-base leading-[1.7]",style:{fontFamily:"'Inter', sans-serif",color:"#1a1a1a",fontSize:"17px"},children:"IMANTEK es una empresa colombiana especializada en ingeniería, mantenimiento y tecnología industrial. Acompañamos a empresas, comercios y clientes residenciales con soluciones técnicas de alto impacto. Respondemos ante cada desafío con criterio, seguridad y ejecución en campo. Nuestro equipo combina experiencia práctica y conocimiento técnico para garantizar operaciones continuas y confiables."}),W.jsxs("div",{"code-path":"src\\sections\\AboutSection.tsx:53:13",className:"flex flex-col gap-6 sm:flex-row",children:[W.jsxs("div",{"code-path":"src\\sections\\AboutSection.tsx:54:15",className:"flex-1 border p-6",style:{borderColor:"#d4d0ca"},children:[W.jsx("h3",{"code-path":"src\\sections\\AboutSection.tsx:55:17",className:"mb-3 text-base font-medium uppercase",style:{fontFamily:"'Space Grotesk', sans-serif",color:"#009fe3"},children:"Misión"}),W.jsx("p",{"code-path":"src\\sections\\AboutSection.tsx:61:17",className:"text-sm leading-relaxed",style:{fontFamily:"'Inter', sans-serif",color:"#8a8580",fontSize:"15px"},children:"Brindar servicios técnicos integrales con criterio, seguridad y ejecución eficaz, siendo el aliado estratégico de nuestros clientes en el mantenimiento y la operación de sus activos críticos."})]}),W.jsxs("div",{"code-path":"src\\sections\\AboutSection.tsx:69:15",className:"flex-1 border p-6",style:{borderColor:"#d4d0ca"},children:[W.jsx("h3",{"code-path":"src\\sections\\AboutSection.tsx:70:17",className:"mb-3 text-base font-medium uppercase",style:{fontFamily:"'Space Grotesk', sans-serif",color:"#009fe3"},children:"Visión"}),W.jsx("p",{"code-path":"src\\sections\\AboutSection.tsx:76:17",className:"text-sm leading-relaxed",style:{fontFamily:"'Inter', sans-serif",color:"#8a8580",fontSize:"15px"},children:"Ser reconocidos como la empresa de servicios técnicos de mayor confiabilidad y alcance en Colombia, líderes en la integración de mantenimiento, automatización y tecnología."})]})]})]}),W.jsx("div",{"code-path":"src\\sections\\AboutSection.tsx:87:11",ref:e,children:W.jsx("img",{"code-path":"src\\sections\\AboutSection.tsx:88:13",src:EA,alt:"Ingeniero industrial IMANTEK en instalación",className:"block h-auto w-full object-cover",loading:"lazy",style:{border:"2px solid #d4d0ca",aspectRatio:"3/4"}})})]})})})}const TA=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),AA=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,s)=>s?s.toUpperCase():i.toLowerCase()),iv=o=>{const e=AA(o);return e.charAt(0).toUpperCase()+e.slice(1)},Bv=(...o)=>o.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim(),RA=o=>{for(const e in o)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};var CA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const wA=se.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:d,...p},m)=>se.createElement("svg",{ref:m,...CA,width:e,height:e,stroke:o,strokeWidth:s?Number(i)*24/Number(e):i,className:Bv("lucide",l),...!c&&!RA(p)&&{"aria-hidden":"true"},...p},[...d.map(([h,x])=>se.createElement(h,x)),...Array.isArray(c)?c:[c]]));const $o=(o,e)=>{const i=se.forwardRef(({className:s,...l},c)=>se.createElement(wA,{ref:c,iconNode:e,className:Bv(`lucide-${TA(iv(o))}`,`lucide-${o}`,s),...l}));return i.displayName=iv(o),i};const DA=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],UA=$o("chevron-down",DA);const NA=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],LA=$o("compass",NA);const OA=[["path",{d:"M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5",key:"1p9q5i"}],["path",{d:"M14 6a6 6 0 0 1 6 6v3",key:"1hnv84"}],["path",{d:"M4 15v-3a6 6 0 0 1 6-6",key:"9ciidu"}],["rect",{x:"2",y:"15",width:"20",height:"4",rx:"1",key:"g3x8cw"}]],PA=$o("hard-hat",OA);const IA=[["path",{d:"M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z",key:"w46dr5"}]],FA=$o("puzzle",IA);const zA=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],BA=$o("shield",zA),HA=[{title:"Servicios de Ingeniería",description:"Soluciones integrales de ingeniería para proyectos industriales de cualquier escala.",items:["Ingeniería eléctrica","Ingeniería electrónica","Ingeniería mecánica","Ingeniería industrial","Consultoría en ingeniería","Diseño y planeación de proyectos industriales","Supervisión e interventoría técnica"]},{title:"Automatización Industrial",description:"Diseño e implementación de sistemas automatizados para optimizar procesos productivos.",items:["Automatización de procesos industriales","Programación de PLC","Desarrollo de interfaces HMI","Implementación de sistemas SCADA","Integración de sistemas industriales","Control e instrumentación industrial"]},{title:"Instalaciones Eléctricas",description:"Diseño, montaje y construcción de sistemas eléctricos para todos los sectores.",items:["Instalaciones eléctricas industriales","Instalaciones eléctricas comerciales","Instalaciones eléctricas residenciales","Montajes eléctricos","Redes eléctricas industriales","Diseño y construcción de sistemas eléctricos"]},{title:"Tableros Eléctricos",description:"Diseño, fabricación e instalación de tableros eléctricos a medida.",items:["Diseño de tableros eléctricos","Fabricación de tableros eléctricos","Armado de tableros eléctricos","Instalación de tableros eléctricos","Adecuación y modernización de tableros eléctricos"]},{title:"Mantenimiento Industrial",description:"Programas de mantenimiento especializados para garantizar continuidad operativa.",items:["Mantenimiento preventivo","Mantenimiento correctivo","Mantenimiento predictivo","Diagnóstico de fallas","Reparación de maquinaria industrial","Soporte técnico especializado"]},{title:"Instrumentación y Control",description:"Calibración, puesta en marcha y optimización de instrumentos y sistemas de control.",items:["Calibración de instrumentos","Puesta en marcha de sistemas","Optimización de procesos","Configuración de equipos de control","Instrumentación industrial"]},{title:"Metalmecánica",description:"Fabricación, montaje y mantenimiento de estructuras metálicas con soldadura especializada.",items:["Fabricación de estructuras metálicas","Montaje de estructuras metálicas","Mantenimiento de estructuras metálicas","Trabajos de soldadura especializada"]},{title:"Obras Industriales",description:"Montajes y adecuaciones técnicas para plantas e infraestructura industrial.",items:["Montajes industriales","Obras civiles relacionadas con proyectos industriales","Adecuaciones técnicas para plantas industriales"]},{title:"Tecnología Industrial",description:"Integración de soluciones tecnológicas inteligentes para procesos productivos.",items:["Integración tecnológica","Desarrollo de soluciones industriales","Implementación de sistemas inteligentes para procesos productivos"]}];function GA(){const o=Ma({translateY:30}),e=se.useRef(null),[i,s]=se.useState(null),l=c=>{s(d=>d===c?null:c)};return se.useEffect(()=>{const c=e.current;if(!c)return;c.querySelectorAll(".service-card").forEach(m=>{const h=m;h.style.opacity="0",h.style.transform="translateY(40px)"});const p=new IntersectionObserver(m=>{m.forEach(h=>{h.isIntersecting&&(h.target.querySelectorAll(".service-card").forEach((v,g)=>{const M=v;M.style.transition=`opacity 0.6s ease-out ${g*.08}s, transform 0.6s ease-out ${g*.08}s`,M.style.opacity="1",M.style.transform="translateY(0)"}),p.unobserve(h.target))})},{threshold:.05});return p.observe(c),()=>p.disconnect()},[]),W.jsx("section",{"code-path":"src\\sections\\ServicesSection.tsx:159:5",id:"servicios",className:"border-t",style:{backgroundColor:"#f5f3ef",borderColor:"#d4d0ca",paddingTop:"100px",paddingBottom:"100px"},children:W.jsxs("div",{"code-path":"src\\sections\\ServicesSection.tsx:169:7",className:"mx-auto max-w-[1200px] px-6",children:[W.jsxs("div",{"code-path":"src\\sections\\ServicesSection.tsx:171:9",ref:o,children:[W.jsx("p",{"code-path":"src\\sections\\ServicesSection.tsx:172:11",className:"mb-4 text-xs uppercase tracking-[2px]",style:{fontFamily:"'IBM Plex Mono', monospace",color:"#009fe3"},children:"Lo que hacemos"}),W.jsx("h2",{"code-path":"src\\sections\\ServicesSection.tsx:178:11",className:"mb-4 text-3xl font-medium uppercase leading-[1.15] sm:text-4xl",style:{fontFamily:"'Space Grotesk', sans-serif",color:"#1a1a1a"},children:"Portafolio de servicios"}),W.jsx("p",{"code-path":"src\\sections\\ServicesSection.tsx:184:11",className:"mb-12 max-w-[700px] leading-[1.7]",style:{fontFamily:"'Inter', sans-serif",color:"#1a1a1a",fontSize:"17px"},children:"Soluciones técnicas integrales respaldadas por nuestra cámara de comercio: desde ingeniería y automatización hasta metalmecánica y tecnología industrial, bajo un mismo equipo de confianza."})]}),W.jsx("div",{"code-path":"src\\sections\\ServicesSection.tsx:195:9",ref:e,className:"grid gap-5 sm:grid-cols-2 lg:grid-cols-3",children:HA.map((c,d)=>{const p=i===d;return W.jsxs("div",{"code-path":"src\\sections\\ServicesSection.tsx:200:15",className:"service-card group cursor-pointer border transition-all duration-300",style:{borderColor:p?"#009fe3":"#d4d0ca",borderLeftWidth:"3px",borderLeftColor:"#009fe3",backgroundColor:p?"rgba(0, 159, 227, 0.08)":"transparent"},onClick:()=>l(d),onMouseEnter:m=>{p||(m.currentTarget.style.borderColor="#009fe3",m.currentTarget.style.backgroundColor="rgba(0, 159, 227, 0.06)")},onMouseLeave:m=>{p||(m.currentTarget.style.borderColor="#d4d0ca",m.currentTarget.style.borderLeftColor="#009fe3",m.currentTarget.style.backgroundColor="transparent")},children:[W.jsxs("div",{"code-path":"src\\sections\\ServicesSection.tsx:228:17",className:"flex items-start justify-between p-6 pb-4",children:[W.jsx("div",{"code-path":"src\\sections\\ServicesSection.tsx:229:19",className:"flex items-center gap-4",children:W.jsx("h3",{"code-path":"src\\sections\\ServicesSection.tsx:230:21",className:"text-base font-medium uppercase leading-tight",style:{fontFamily:"'Space Grotesk', sans-serif",color:"#1a1a1a"},children:c.title})}),W.jsx(UA,{"code-path":"src\\sections\\ServicesSection.tsx:240:19",size:18,className:"mt-1 shrink-0 transition-transform duration-300",style:{color:"#009fe3",transform:p?"rotate(180deg)":"rotate(0deg)"}})]}),W.jsx("p",{"code-path":"src\\sections\\ServicesSection.tsx:251:17",className:"px-6 pb-4 leading-relaxed",style:{fontFamily:"'Inter', sans-serif",color:"#8a8580",fontSize:"14px"},children:c.description}),W.jsx("div",{"code-path":"src\\sections\\ServicesSection.tsx:263:17",className:"overflow-hidden transition-all duration-400 ease-in-out",style:{maxHeight:p?"420px":"0px",opacity:p?1:0},children:W.jsx("ul",{"code-path":"src\\sections\\ServicesSection.tsx:270:19",className:"border-t px-6 py-4",style:{borderColor:"#e8e4de"},children:c.items.map(m=>W.jsxs("li",{"code-path":"src\\sections\\ServicesSection.tsx:272:23",className:"flex items-start gap-3 py-1.5",style:{fontFamily:"'Inter', sans-serif",color:"#555555",fontSize:"14px"},children:[W.jsx("span",{"code-path":"src\\sections\\ServicesSection.tsx:281:25",className:"mt-[7px] inline-block h-1.5 w-1.5 shrink-0 rounded-full",style:{backgroundColor:"#009fe3"}}),m]},m))})})]},c.title)})})]})})}const VA=[{number:"01",title:"Diagnóstico",description:"Análisis exhaustivo del sistema o activo. Identificamos el problema con precisión antes de proponer cualquier intervención."},{number:"02",title:"Propuesta",description:"Presentamos un plan de acción claro con alcance, recursos, tiempo y costo definidos para la aprobación del cliente."},{number:"03",title:"Ejecución",description:"Intervención en campo con personal calificado, equipos adecuados y protocolos de seguridad industrial vigentes."},{number:"04",title:"Entrega y Seguimiento",description:"Informe técnico detallado, garantía sobre el trabajo realizado y acompañamiento post-servicio."}];function kA(){const o=Ma({translateY:30}),e=se.useRef(null),i=se.useRef(null);return se.useEffect(()=>{const s=e.current,l=i.current;if(!s||!l)return;const c=s.querySelectorAll(".method-step");c.forEach(p=>{const m=p;m.style.opacity="0",m.style.transform="translateY(30px)"}),l.style.transform="scaleX(0)",l.style.transformOrigin="left";const d=new IntersectionObserver(p=>{p.forEach(m=>{m.isIntersecting&&(setTimeout(()=>{l.style.transition="transform 0.8s ease-out",l.style.transform="scaleX(1)"},300),c.forEach((h,x)=>{const v=h;setTimeout(()=>{v.style.transition="opacity 0.6s ease-out, transform 0.6s ease-out",v.style.opacity="1",v.style.transform="translateY(0)"},x*150)}),d.unobserve(m.target))})},{threshold:.2});return d.observe(s),()=>d.disconnect()},[]),W.jsx("section",{"code-path":"src\\sections\\MethodologySection.tsx:79:5",id:"metodologia",className:"border-t",style:{backgroundColor:"#f5f3ef",borderColor:"#d4d0ca",paddingTop:"100px",paddingBottom:"100px"},children:W.jsxs("div",{"code-path":"src\\sections\\MethodologySection.tsx:84:7",className:"mx-auto max-w-[1200px] px-6",children:[W.jsxs("div",{"code-path":"src\\sections\\MethodologySection.tsx:86:9",ref:o,className:"mb-12",children:[W.jsx("p",{"code-path":"src\\sections\\MethodologySection.tsx:87:11",className:"mb-4 text-xs uppercase tracking-[2px]",style:{fontFamily:"'IBM Plex Mono', monospace",color:"#009fe3"},children:"Cómo trabajamos"}),W.jsx("h2",{"code-path":"src\\sections\\MethodologySection.tsx:93:11",className:"text-3xl font-medium uppercase leading-[1.15] sm:text-4xl",style:{fontFamily:"'Space Grotesk', sans-serif",color:"#1a1a1a"},children:"Nuestra metodología"})]}),W.jsxs("div",{"code-path":"src\\sections\\MethodologySection.tsx:102:9",ref:e,className:"relative",children:[W.jsx("div",{"code-path":"src\\sections\\MethodologySection.tsx:104:11",ref:i,className:"absolute left-0 right-0 top-[30px] hidden h-[1px] md:block",style:{backgroundColor:"#d4d0ca"}}),W.jsx("div",{"code-path":"src\\sections\\MethodologySection.tsx:110:11",className:"grid gap-10 md:grid-cols-4 md:gap-6",children:VA.map(s=>W.jsxs("div",{"code-path":"src\\sections\\MethodologySection.tsx:112:15",className:"method-step",children:[W.jsx("div",{"code-path":"src\\sections\\MethodologySection.tsx:114:17",className:"mb-4 text-5xl",style:{fontFamily:"'IBM Plex Mono', monospace",color:"#009fe3"},children:s.number}),W.jsx("h3",{"code-path":"src\\sections\\MethodologySection.tsx:122:17",className:"mb-3 text-lg font-medium uppercase",style:{fontFamily:"'Space Grotesk', sans-serif",color:"#1a1a1a"},children:s.title}),W.jsx("p",{"code-path":"src\\sections\\MethodologySection.tsx:130:17",className:"leading-relaxed",style:{fontFamily:"'Inter', sans-serif",color:"#8a8580",fontSize:"15px"},children:s.description})]},s.number))})]})]})})}const XA=[{name:"Industrial & Logístico",description:"Soluciones de ingeniería y mantenimiento preventivo/correctivo diseñadas para garantizar la continuidad operativa.",items:["Plantas de producción","Fábricas","Centros de distribución","Bodegas"],image:"images/sector-industrial.jpg"},{name:"Comercial & Retail",description:"Instalaciones eléctricas, climatización y mantenimiento de infraestructura orientados a crear entornos confortables y seguros.",items:["Centros comerciales","Hoteles","Restaurantes"],image:"images/sector-commercial-retail.jpg"},{name:"Residencial & Copropiedades",description:"Servicios preventivos programados y atención técnica oportuna para la conservación física.",items:["Conjuntos residenciales","Condominios","Zonas comunes"],image:"images/sector-residential.jpg"}],WA=o=>`./${o}`;function qA(){const o=Ma({translateY:30}),e=se.useRef(null);return se.useEffect(()=>{const i=e.current;if(!i)return;i.querySelectorAll(".sector-card").forEach(c=>{const d=c;d.style.opacity="0",d.style.transform="translateY(30px)"});const l=new IntersectionObserver(c=>{c.forEach(d=>{d.isIntersecting&&(d.target.querySelectorAll(".sector-card").forEach((m,h)=>{const x=m;setTimeout(()=>{x.style.transition="opacity 0.7s ease-out, transform 0.7s ease-out",x.style.opacity="1",x.style.transform="translateY(0)"},h*120)}),l.unobserve(d.target))})},{threshold:.15});return l.observe(i),()=>l.disconnect()},[]),W.jsx("section",{"code-path":"src\\sections\\SectorsSection.tsx:67:5",id:"sectores",className:"border-t",style:{backgroundColor:"#f5f3ef",borderColor:"#d4d0ca",paddingTop:"100px",paddingBottom:"100px"},children:W.jsxs("div",{"code-path":"src\\sections\\SectorsSection.tsx:72:7",className:"mx-auto max-w-[1200px] px-6",children:[W.jsxs("div",{"code-path":"src\\sections\\SectorsSection.tsx:74:9",ref:o,className:"mb-14",children:[W.jsx("p",{"code-path":"src\\sections\\SectorsSection.tsx:75:11",className:"mb-4 text-xs uppercase tracking-[2px]",style:{fontFamily:"'IBM Plex Mono', monospace",color:"#009fe3"},children:"Mercado"}),W.jsx("h2",{"code-path":"src\\sections\\SectorsSection.tsx:81:11",className:"mb-4 text-3xl font-medium uppercase leading-[1.15] sm:text-4xl",style:{fontFamily:"'Space Grotesk', sans-serif",color:"#1a1a1a"},children:"Sectores que atendemos"}),W.jsx("p",{"code-path":"src\\sections\\SectorsSection.tsx:87:11",className:"max-w-[700px] leading-[1.7]",style:{fontFamily:"'Inter', sans-serif",color:"#1a1a1a",fontSize:"17px"},children:"Adaptamos nuestras soluciones técnicas a las exigencias operativas, de seguridad y normativas de cada sector económico."})]}),W.jsx("div",{"code-path":"src\\sections\\SectorsSection.tsx:96:9",ref:e,className:"grid gap-6 sm:grid-cols-2 lg:grid-cols-3",children:XA.map(i=>W.jsx("div",{"code-path":"src\\sections\\SectorsSection.tsx:98:13",className:"sector-card",children:W.jsx(jA,{"code-path":"src\\sections\\SectorsSection.tsx:99:15",sector:i})},i.name))})]})})}function jA({sector:o}){return W.jsxs("div",{"code-path":"src\\sections\\SectorsSection.tsx:110:5",className:"group h-full flex flex-col",children:[W.jsx("div",{"code-path":"src\\sections\\SectorsSection.tsx:112:7",className:"overflow-hidden",style:{aspectRatio:"16/10"},children:W.jsx("img",{"code-path":"src\\sections\\SectorsSection.tsx:113:9",src:WA(o.image),alt:o.name,className:"block h-full w-full object-cover transition-transform duration-500 group-hover:scale-105",loading:"lazy"})}),W.jsxs("div",{"code-path":"src\\sections\\SectorsSection.tsx:122:7",className:"border border-t-0 p-6 flex-1 flex flex-col justify-between",style:{borderColor:"#d4d0ca"},children:[W.jsxs("div",{"code-path":"src\\sections\\SectorsSection.tsx:123:9",children:[W.jsx("h3",{"code-path":"src\\sections\\SectorsSection.tsx:124:11",className:"mb-2 text-lg font-medium uppercase",style:{fontFamily:"'Space Grotesk', sans-serif",color:"#1a1a1a"},children:o.name}),W.jsx("p",{"code-path":"src\\sections\\SectorsSection.tsx:130:11",className:"mb-4 leading-relaxed",style:{fontFamily:"'Inter', sans-serif",color:"#8a8580",fontSize:"15px"},children:o.description})]}),W.jsx("ul",{"code-path":"src\\sections\\SectorsSection.tsx:137:9",className:"flex flex-wrap gap-x-4 gap-y-2 mt-auto",children:o.items.map(e=>W.jsxs("li",{"code-path":"src\\sections\\SectorsSection.tsx:139:13",className:"flex items-center gap-2 text-sm",style:{fontFamily:"'IBM Plex Mono', monospace",color:"#8a8580"},children:[W.jsx("span",{"code-path":"src\\sections\\SectorsSection.tsx:144:15",className:"inline-block h-1 w-1 rounded-full",style:{backgroundColor:"#009fe3"}}),e]},e))})]})]})}const YA=[{icon:FA,title:"Solución 360°",description:"Un solo proveedor para múltiples disciplinas técnicas: eléctrica, mecánica, TI e instrumentación."},{icon:PA,title:"Ejecución en campo",description:"Presencia directa en el lugar de trabajo con técnicos calificados y equipamiento adecuado."},{icon:BA,title:"Seguridad primero",description:"Protocolos de seguridad industrial en cada intervención. Cumplimiento normativo garantizado."},{icon:LA,title:"Criterio técnico",description:"Diagnóstico preciso antes de actuar. Soluciones sostenibles, no parches temporales."}],ZA=[{title:"Creciente demanda",text:"La industria y el comercio en Colombia incrementan su inversión en mantenimiento preventivo y automatización para reducir costos operativos y tiempos de parada."},{title:"Transformación digital",text:"Las empresas buscan integrar IoT, SCADA y automatización para mejorar su competitividad, creando oportunidad para proveedores con capacidad multidisciplinaria."},{title:"Déficit de proveedores integrales",text:"La mayoría de los proveedores son especialistas en una sola disciplina. IMANTEK cubre múltiples frentes, reduciendo la complejidad logística del cliente."},{title:"Eficiencia energética",text:"La transición hacia energías más eficientes abre nuevas verticales de negocio donde IMANTEK puede ofrecer soluciones de alto valor."}];function KA(){const o=Ma({translateY:30}),e=se.useRef(null),i=se.useRef(null);return se.useEffect(()=>{const s=e.current;if(!s)return;s.querySelectorAll(".diff-card").forEach(d=>{const p=d;p.style.opacity="0",p.style.transform="translateY(30px)"});const c=new IntersectionObserver(d=>{d.forEach(p=>{p.isIntersecting&&(p.target.querySelectorAll(".diff-card").forEach((h,x)=>{const v=h;setTimeout(()=>{v.style.transition="opacity 0.6s ease-out, transform 0.6s ease-out",v.style.opacity="1",v.style.transform="translateY(0)"},x*120)}),c.unobserve(p.target))})},{threshold:.15});return c.observe(s),()=>c.disconnect()},[]),se.useEffect(()=>{const s=i.current;if(!s)return;s.querySelectorAll(".opp-block").forEach(d=>{const p=d;p.style.opacity="0",p.style.transform="translateY(30px)"});const c=new IntersectionObserver(d=>{d.forEach(p=>{p.isIntersecting&&(p.target.querySelectorAll(".opp-block").forEach((h,x)=>{const v=h;setTimeout(()=>{v.style.transition="opacity 0.6s ease-out, transform 0.6s ease-out",v.style.opacity="1",v.style.transform="translateY(0)"},x*80)}),c.unobserve(p.target))})},{threshold:.1});return c.observe(s),()=>c.disconnect()},[]),W.jsx("section",{"code-path":"src\\sections\\WhyUsSection.tsx:123:5",id:"porque",style:{backgroundColor:"#1a1a1a",paddingTop:"100px",paddingBottom:"100px"},children:W.jsxs("div",{"code-path":"src\\sections\\WhyUsSection.tsx:127:7",className:"mx-auto max-w-[1200px] px-6",children:[W.jsx("div",{"code-path":"src\\sections\\WhyUsSection.tsx:129:9",ref:o,className:"mb-12",children:W.jsx("h2",{"code-path":"src\\sections\\WhyUsSection.tsx:130:11",className:"text-3xl font-medium uppercase leading-[1.15] sm:text-4xl",style:{fontFamily:"'Space Grotesk', sans-serif",color:"#ffffff"},children:"¿Por qué elegir IMANTEK?"})}),W.jsx("div",{"code-path":"src\\sections\\WhyUsSection.tsx:138:9",ref:e,className:"mb-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4",children:YA.map(s=>{const l=s.icon;return W.jsxs("div",{"code-path":"src\\sections\\WhyUsSection.tsx:142:15",className:"diff-card border p-8 transition-all duration-300 hover:border-[#009fe3]",style:{borderColor:"#333333"},onMouseEnter:c=>{c.currentTarget.style.backgroundColor="rgba(0, 159, 227, 0.1)"},onMouseLeave:c=>{c.currentTarget.style.backgroundColor="transparent"},children:[W.jsx(l,{"code-path":"src\\sections\\WhyUsSection.tsx:153:17",size:40,style:{color:"#009fe3"},strokeWidth:1.2}),W.jsx("h3",{"code-path":"src\\sections\\WhyUsSection.tsx:154:17",className:"mb-3 mt-5 text-lg font-medium uppercase",style:{fontFamily:"'Space Grotesk', sans-serif",color:"#ffffff"},children:s.title}),W.jsx("p",{"code-path":"src\\sections\\WhyUsSection.tsx:160:17",className:"leading-relaxed",style:{fontFamily:"'Inter', sans-serif",color:"#aaaaaa",fontSize:"15px"},children:s.description})]},s.title)})}),W.jsxs("div",{"code-path":"src\\sections\\WhyUsSection.tsx:172:9",className:"border-t pt-16",style:{borderColor:"#333333"},children:[W.jsx("p",{"code-path":"src\\sections\\WhyUsSection.tsx:176:11",className:"mb-4 text-xs uppercase tracking-[2px]",style:{fontFamily:"'IBM Plex Mono', monospace",color:"#009fe3"},children:"Contexto estratégico"}),W.jsx("h3",{"code-path":"src\\sections\\WhyUsSection.tsx:182:11",className:"mb-8 text-2xl font-medium uppercase sm:text-3xl",style:{fontFamily:"'Space Grotesk', sans-serif",color:"#ffffff"},children:"Oportunidad de mercado"}),W.jsx("div",{"code-path":"src\\sections\\WhyUsSection.tsx:189:11",ref:i,className:"grid gap-8 sm:grid-cols-2",children:ZA.map(s=>W.jsxs("div",{"code-path":"src\\sections\\WhyUsSection.tsx:191:15",className:"opp-block",children:[W.jsx("h4",{"code-path":"src\\sections\\WhyUsSection.tsx:192:17",className:"mb-2 text-base font-medium uppercase",style:{fontFamily:"'Space Grotesk', sans-serif",color:"#ffffff"},children:s.title}),W.jsx("p",{"code-path":"src\\sections\\WhyUsSection.tsx:198:17",className:"leading-relaxed",style:{fontFamily:"'Inter', sans-serif",color:"#aaaaaa",fontSize:"15px"},children:s.text})]},s.title))})]})]})})}const QA=[{year:"2025",title:"Consolidación",items:["Estructurar portafolio de servicios completo","Captar primeros clientes ancla industriales y comerciales","Establecer procesos operativos y de calidad","Presencia digital sólida"]},{year:"2026",title:"Crecimiento",items:["Ampliar cartera de clientes en 3+ sectores","Lanzar servicio de contratos de mantenimiento recurrente","Incorporar capacidades en automatización e IoT","Crecer equipo técnico especializado"]},{year:"2027",title:"Expansión",items:["Presencia en múltiples ciudades de Colombia","Plataforma propia de monitoreo y gestión de activos","Alianzas estratégicas con fabricantes y distribuidores","Certificaciones industriales y de calidad"]}];function JA(){const o=Ma({translateY:30}),e=se.useRef(null),i=se.useRef(null);return se.useEffect(()=>{const s=e.current,l=i.current;if(!s||!l)return;const c=s.querySelectorAll(".year-badge"),d=s.querySelectorAll(".phase-list");c.forEach(m=>{const h=m;h.style.opacity="0",h.style.transform="scale(0.8)"}),d.forEach(m=>{const h=m;h.style.opacity="0",h.style.transform="translateY(20px)"}),l.style.transform="scaleX(0)",l.style.transformOrigin="left";const p=new IntersectionObserver(m=>{m.forEach(h=>{h.isIntersecting&&(setTimeout(()=>{l.style.transition="transform 1s ease-out",l.style.transform="scaleX(1)"},200),c.forEach((x,v)=>{const g=x;setTimeout(()=>{g.style.transition="opacity 0.5s ease-out, transform 0.5s ease-out",g.style.opacity="1",g.style.transform="scale(1)"},400+v*200)}),d.forEach((x,v)=>{const g=x;setTimeout(()=>{g.style.transition="opacity 0.6s ease-out, transform 0.6s ease-out",g.style.opacity="1",g.style.transform="translateY(0)"},600+v*150)}),p.unobserve(h.target))})},{threshold:.15});return p.observe(s),()=>p.disconnect()},[]),W.jsx("section",{"code-path":"src\\sections\\RoadmapSection.tsx:107:5",id:"roadmap",className:"border-t",style:{backgroundColor:"#f5f3ef",borderColor:"#d4d0ca",paddingTop:"100px",paddingBottom:"100px"},children:W.jsxs("div",{"code-path":"src\\sections\\RoadmapSection.tsx:112:7",className:"mx-auto max-w-[1200px] px-6",children:[W.jsxs("div",{"code-path":"src\\sections\\RoadmapSection.tsx:114:9",ref:o,className:"mb-14",children:[W.jsx("p",{"code-path":"src\\sections\\RoadmapSection.tsx:115:11",className:"mb-4 text-xs uppercase tracking-[2px]",style:{fontFamily:"'IBM Plex Mono', monospace",color:"#009fe3"},children:"Hoja de ruta"}),W.jsx("h2",{"code-path":"src\\sections\\RoadmapSection.tsx:121:11",className:"text-3xl font-medium uppercase leading-[1.15] sm:text-4xl",style:{fontFamily:"'Space Grotesk', sans-serif",color:"#1a1a1a"},children:"Metas estratégicas 2025 – 2027"})]}),W.jsxs("div",{"code-path":"src\\sections\\RoadmapSection.tsx:130:9",ref:e,className:"relative",children:[W.jsx("div",{"code-path":"src\\sections\\RoadmapSection.tsx:132:11",ref:i,className:"absolute left-0 right-0 top-[22px] hidden h-[1px] md:block",style:{backgroundColor:"#d4d0ca"}}),W.jsx("div",{"code-path":"src\\sections\\RoadmapSection.tsx:138:11",className:"grid gap-10 md:grid-cols-3 md:gap-8",children:QA.map(s=>W.jsxs("div",{"code-path":"src\\sections\\RoadmapSection.tsx:140:15",children:[W.jsx("div",{"code-path":"src\\sections\\RoadmapSection.tsx:142:17",className:"year-badge mb-6 inline-block border px-4 py-1.5 text-sm",style:{fontFamily:"'IBM Plex Mono', monospace",color:"#009fe3",borderColor:"#009fe3"},children:s.year}),W.jsx("h3",{"code-path":"src\\sections\\RoadmapSection.tsx:154:17",className:"mb-4 text-lg font-medium uppercase",style:{fontFamily:"'Space Grotesk', sans-serif",color:"#1a1a1a"},children:s.title}),W.jsx("ul",{"code-path":"src\\sections\\RoadmapSection.tsx:162:17",className:"phase-list space-y-2",children:s.items.map(l=>W.jsxs("li",{"code-path":"src\\sections\\RoadmapSection.tsx:164:21",className:"flex items-start gap-3 leading-relaxed",style:{fontFamily:"'Inter', sans-serif",color:"#8a8580",fontSize:"15px"},children:[W.jsx("span",{"code-path":"src\\sections\\RoadmapSection.tsx:169:23",className:"mt-2 inline-block h-[2px] w-3 shrink-0",style:{backgroundColor:"#009fe3"}}),l]},l))})]},s.year))})]})]})})}function $A(){const o=Ma({translateX:-20,duration:.6}),e=Ma({translateX:20,duration:.6,delay:.15});return W.jsx("section",{"code-path":"src\\sections\\ContactSection.tsx:8:5",id:"contacto",className:"border-t",style:{backgroundColor:"#1a1a1a",borderColor:"#333333",paddingTop:"100px",paddingBottom:"100px"},children:W.jsxs("div",{"code-path":"src\\sections\\ContactSection.tsx:18:7",className:"mx-auto grid max-w-[1200px] gap-16 px-6 md:grid-cols-2",children:[W.jsxs("div",{"code-path":"src\\sections\\ContactSection.tsx:20:9",ref:o,children:[W.jsx("p",{"code-path":"src\\sections\\ContactSection.tsx:21:11",className:"mb-4 text-xs uppercase tracking-[2px]",style:{fontFamily:"'IBM Plex Mono', monospace",color:"#009fe3"},children:"Hablemos"}),W.jsx("h2",{"code-path":"src\\sections\\ContactSection.tsx:27:11",className:"mb-6 text-3xl font-medium uppercase leading-[1.15] sm:text-4xl",style:{fontFamily:"'Space Grotesk', sans-serif",color:"#ffffff"},children:"¿Listo para optimizar sus operaciones?"}),W.jsx("p",{"code-path":"src\\sections\\ContactSection.tsx:33:11",className:"mb-8 leading-relaxed",style:{fontFamily:"'Inter', sans-serif",color:"#aaaaaa",fontSize:"17px"},children:"Contacte a nuestro equipo de ingeniería y reciba una propuesta técnica personalizada sin costo."}),W.jsx("a",{"code-path":"src\\sections\\ContactSection.tsx:39:11",href:"https://wa.me/573181419074?text=Hola%20IMANTEK%2C%20necesito%20apoyo%20t%C3%A9cnico%20para%20un%20proyecto%20de%20ingenier%C3%ADa.",target:"_blank",rel:"noopener noreferrer",className:"inline-block px-9 py-3.5 text-xs font-medium uppercase tracking-[1.5px] text-white transition-colors duration-300 hover:bg-[#007fb8]",style:{fontFamily:"'IBM Plex Mono', monospace",backgroundColor:"#009fe3"},children:"Solicitar cotización"})]}),W.jsxs("div",{"code-path":"src\\sections\\ContactSection.tsx:54:9",ref:e,className:"md:mt-0 mt-12",children:[W.jsxs("div",{"code-path":"src\\sections\\ContactSection.tsx:55:11",className:"mb-7",children:[W.jsx("p",{"code-path":"src\\sections\\ContactSection.tsx:56:13",className:"mb-2 text-xs uppercase tracking-[2px]",style:{fontFamily:"'IBM Plex Mono', monospace",color:"#009fe3"},children:"Correo electrónico"}),W.jsx("p",{"code-path":"src\\sections\\ContactSection.tsx:62:13",style:{fontFamily:"'Inter', sans-serif",color:"#cccccc",fontSize:"16px"},children:"Imanteksas@gmail.com"})]}),W.jsxs("div",{"code-path":"src\\sections\\ContactSection.tsx:67:11",className:"mb-7",children:[W.jsx("p",{"code-path":"src\\sections\\ContactSection.tsx:68:13",className:"mb-2 text-xs uppercase tracking-[2px]",style:{fontFamily:"'IBM Plex Mono', monospace",color:"#009fe3"},children:"Teléfono / WhatsApp"}),W.jsx("a",{"code-path":"src\\sections\\ContactSection.tsx:74:13",href:"https://wa.me/573181419074",target:"_blank",rel:"noopener noreferrer",className:"transition-colors hover:text-[#009fe3]",style:{fontFamily:"'Inter', sans-serif",color:"#cccccc",fontSize:"16px"},children:"+57 318 141 9074"})]}),W.jsxs("div",{"code-path":"src\\sections\\ContactSection.tsx:85:11",children:[W.jsx("p",{"code-path":"src\\sections\\ContactSection.tsx:86:13",className:"mb-2 text-xs uppercase tracking-[2px]",style:{fontFamily:"'IBM Plex Mono', monospace",color:"#009fe3"},children:"Ubicación"}),W.jsxs("p",{"code-path":"src\\sections\\ContactSection.tsx:92:13",style:{fontFamily:"'Inter', sans-serif",color:"#cccccc",fontSize:"16px"},children:["Br. Villa Estrella Transv.54 #80-863,",W.jsx("br",{"code-path":"src\\sections\\ContactSection.tsx:93:52"}),"Cartagena de Indias, Colombia"]})]})]})]})})}function t3(){const o=se.useRef(null),e=se.useRef(0),i=se.useRef(!1);return se.useEffect(()=>{const s=o.current;if(!s)return;const l=s.getContext("2d");if(!l)return;const c=Math.min(window.devicePixelRatio,2);function d(){if(!s)return;const C=s.parentElement;C&&(s.width=C.clientWidth*c,s.height=C.clientHeight*c,s.style.width=C.clientWidth+"px",s.style.height=C.clientHeight+"px",l.setTransform(c,0,0,c,0,0))}d();const p=["#ffffff","#cccccc","#aaaaaa","#888888"],m=2e3,h=120,x=[];for(let C=0;C<m;C++)x.push({x:Math.random()*(s?.clientWidth||0),y:Math.random()*(s?.clientHeight||0),vx:(Math.random()-.5)*.5,vy:(Math.random()-.5)*.5,size:.5+Math.random()*1.5,color:p[Math.floor(Math.random()*p.length)],alpha:.2+Math.random()*.5});let v=0,g=0,M=!1;const b=C=>{const N=s.getBoundingClientRect();v=C.clientX-N.left,g=C.clientY-N.top,M=!0,setTimeout(()=>{M=!1},500)};s.addEventListener("click",b);const w=new IntersectionObserver(C=>{C.forEach(N=>{i.current=N.isIntersecting})},{threshold:.05});w.observe(s);function y(){if(e.current=requestAnimationFrame(y),!i.current||!l||!s)return;const C=s.clientWidth,N=s.clientHeight,P=C/2,G=N/2;l.fillStyle="rgba(26, 26, 26, 0.15)",l.fillRect(0,0,C,N);for(const U of x){const F=P-U.x,T=G-U.y,L=Math.sqrt(F*F+T*T)+1,Y=h/(L*L);if(U.vx+=F/L*Y*.01,U.vy+=T/L*Y*.01,M){const H=v-U.x,K=g-U.y,lt=Math.sqrt(H*H+K*K)+1,ut=200/(lt*lt);U.vx-=H/lt*ut*.1,U.vy-=K/lt*ut*.1}U.vx*=.995,U.vy*=.995,U.x+=U.vx,U.y+=U.vy,U.x<0&&(U.x=C),U.x>C&&(U.x=0),U.y<0&&(U.y=N),U.y>N&&(U.y=0),l.beginPath(),l.arc(U.x,U.y,U.size,0,Math.PI*2),l.fillStyle=U.color,l.globalAlpha=U.alpha,l.fill()}l.globalAlpha=1}y();const S=()=>d();return window.addEventListener("resize",S),()=>{cancelAnimationFrame(e.current),w.disconnect(),s.removeEventListener("click",b),window.removeEventListener("resize",S)}},[]),W.jsx("canvas",{"code-path":"src\\sections\\ParticleField.tsx:155:5",ref:o,style:{position:"absolute",inset:0,zIndex:0,pointerEvents:"auto"}})}function e3(){return W.jsxs("footer",{"code-path":"src\\sections\\Footer.tsx:6:5",className:"relative overflow-hidden border-t",style:{backgroundColor:"#1a1a1a",borderColor:"#333333"},children:[W.jsx(t3,{"code-path":"src\\sections\\Footer.tsx:14:7"}),W.jsxs("div",{"code-path":"src\\sections\\Footer.tsx:17:7",className:"relative z-[1] mx-auto max-w-[1200px] px-6",style:{paddingTop:"80px",paddingBottom:"40px"},children:[W.jsxs("div",{"code-path":"src\\sections\\Footer.tsx:21:9",className:"mb-16 grid gap-10 sm:grid-cols-3",children:[W.jsxs("div",{"code-path":"src\\sections\\Footer.tsx:23:11",children:[W.jsx(Xh,{"code-path":"src\\sections\\Footer.tsx:24:13",className:"mb-4 text-3xl"}),W.jsx("p",{"code-path":"src\\sections\\Footer.tsx:25:13",className:"text-sm",style:{fontFamily:"'Inter', sans-serif",color:"#666666"},children:"Ingeniería · Mantenimiento · Tecnología"})]}),W.jsxs("div",{"code-path":"src\\sections\\Footer.tsx:34:11",children:[W.jsx("p",{"code-path":"src\\sections\\Footer.tsx:35:13",className:"mb-4 text-xs uppercase tracking-[2px]",style:{fontFamily:"'IBM Plex Mono', monospace",color:"#009fe3"},children:"Síguenos"}),W.jsxs("div",{"code-path":"src\\sections\\Footer.tsx:41:13",className:"flex flex-col gap-2",children:[W.jsx("a",{"code-path":"src\\sections\\Footer.tsx:42:15",href:"https://www.instagram.com/imanteksas",target:"_blank",rel:"noopener noreferrer",className:"text-sm text-[#999999] transition-colors hover:text-white",style:{fontFamily:"'Inter', sans-serif"},children:"Instagram"}),W.jsx("a",{"code-path":"src\\sections\\Footer.tsx:51:15",href:"https://www.facebook.com/people/Imantek-SAS",target:"_blank",rel:"noopener noreferrer",className:"text-sm text-[#999999] transition-colors hover:text-white",style:{fontFamily:"'Inter', sans-serif"},children:"Facebook"}),W.jsx("a",{"code-path":"src\\sections\\Footer.tsx:60:15",href:"https://wa.me/573181419074",target:"_blank",rel:"noopener noreferrer",className:"text-sm text-[#999999] transition-colors hover:text-white",style:{fontFamily:"'Inter', sans-serif"},children:"WhatsApp"})]})]}),W.jsx("div",{"code-path":"src\\sections\\Footer.tsx:73:11",className:"sm:text-right",children:W.jsxs("p",{"code-path":"src\\sections\\Footer.tsx:74:13",className:"text-sm",style:{fontFamily:"'Inter', sans-serif",color:"#666666"},children:["© 2025–2026 IMANTEK S.A.S.",W.jsx("br",{"code-path":"src\\sections\\Footer.tsx:78:41"}),"Colombia"]})})]}),W.jsxs("div",{"code-path":"src\\sections\\Footer.tsx:85:9",className:"flex flex-col items-center justify-between gap-4 border-t pt-6 sm:flex-row",style:{borderColor:"#333333"},children:[W.jsx("p",{"code-path":"src\\sections\\Footer.tsx:89:11",className:"text-xs",style:{fontFamily:"'Inter', sans-serif",color:"#666666"},children:"© 2025–2026 IMANTEK S.A.S. · Colombia"}),W.jsx("p",{"code-path":"src\\sections\\Footer.tsx:95:11",className:"text-xs",style:{fontFamily:"'IBM Plex Mono', monospace",color:"#555555"},children:"Portafolio Corporativo 2025–2027"})]})]})]})}function n3(){const[o,e]=se.useState(!1);return se.useEffect(()=>{const i=()=>{e(window.scrollY>window.innerHeight*.5)};return window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)},[]),W.jsxs("a",{"code-path":"src\\sections\\WhatsAppButton.tsx:15:5",href:"https://wa.me/573181419074?text=Hola%20IMANTEK%2C%20necesito%20apoyo%20t%C3%A9cnico%20para%20un%20proyecto%20de%20ingenier%C3%ADa.",target:"_blank",rel:"noopener noreferrer",className:"fixed bottom-6 right-6 z-[90] flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:scale-105",style:{fontFamily:"'Inter', sans-serif",backgroundColor:"#25D366",opacity:o?1:0,transform:o?"translateY(0)":"translateY(20px)",pointerEvents:o?"auto":"none"},children:[W.jsx("svg",{"code-path":"src\\sections\\WhatsAppButton.tsx:28:7",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:W.jsx("path",{"code-path":"src\\sections\\WhatsAppButton.tsx:35:9",d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"})}),"WhatsApp"]})}function i3(){const[o,e]=se.useState(8),[i,s]=se.useState(!0),[l,c]=se.useState(!1),[d,p]=se.useState({x:50,y:50}),m=se.useRef(document.readyState==="complete");if(se.useEffect(()=>{const x=()=>{m.current=!0,e(100),c(!0),window.setTimeout(()=>s(!1),650)},v=()=>window.setTimeout(x,450),g=window.setInterval(()=>{e(M=>m.current?Math.min(M+18,100):M<55?M+5:M<82?M+3:Math.min(M+1,94))},140);return m.current?v():window.addEventListener("load",v,{once:!0}),()=>{window.clearInterval(g),window.removeEventListener("load",v)}},[]),se.useEffect(()=>{o>=100&&!l&&(c(!0),window.setTimeout(()=>s(!1),650))},[l,o]),!i)return null;const h=Math.round(o);return W.jsxs("div",{"code-path":"src\\sections\\SplashScreen.tsx:53:5",className:`fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-[#071019] px-6 text-white transition-opacity duration-500 ${l?"opacity-0":"opacity-100"}`,onPointerMove:x=>{p({x:x.clientX/window.innerWidth*100,y:x.clientY/window.innerHeight*100})},onPointerDown:()=>e(100),role:"status","aria-live":"polite","aria-label":`Cargando ${h}%`,children:[W.jsx("div",{"code-path":"src\\sections\\SplashScreen.tsx:68:7",className:"absolute inset-0",style:{background:`radial-gradient(circle at ${d.x}% ${d.y}%, rgba(0,159,227,0.22), transparent 30%), linear-gradient(135deg, #071019 0%, #1a1a1a 52%, #050b16 100%)`}}),W.jsx("div",{"code-path":"src\\sections\\SplashScreen.tsx:74:7",className:"absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#009fe3] to-transparent opacity-70"}),W.jsx("div",{"code-path":"src\\sections\\SplashScreen.tsx:75:7",className:"absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"}),W.jsxs("div",{"code-path":"src\\sections\\SplashScreen.tsx:77:7",className:"relative flex w-full max-w-[520px] flex-col items-center text-center",children:[W.jsx("div",{"code-path":"src\\sections\\SplashScreen.tsx:78:9",className:"mb-8 flex h-28 w-28 items-center justify-center border border-white/15 bg-white/[0.03] shadow-[0_0_60px_rgba(0,159,227,0.18)]",children:W.jsx(Xh,{"code-path":"src\\sections\\SplashScreen.tsx:79:11",className:"text-3xl"})}),W.jsx("p",{"code-path":"src\\sections\\SplashScreen.tsx:82:9",className:"mb-4 text-xs uppercase tracking-[2px] text-[#009fe3]",style:{fontFamily:"'IBM Plex Mono', monospace"},children:"Cargando plataforma técnica"}),W.jsxs("div",{"code-path":"src\\sections\\SplashScreen.tsx:89:9",className:"mb-3 flex w-full items-end justify-between gap-4",children:[W.jsx("span",{"code-path":"src\\sections\\SplashScreen.tsx:90:11",className:"text-left text-sm uppercase tracking-[1.5px] text-white/70",style:{fontFamily:"'IBM Plex Mono', monospace"},children:"Inicializando sitio"}),W.jsxs("span",{"code-path":"src\\sections\\SplashScreen.tsx:96:11",className:"text-right text-2xl font-semibold tabular-nums text-white",style:{fontFamily:"'Space Grotesk', sans-serif"},children:[h,"%"]})]}),W.jsx("div",{"code-path":"src\\sections\\SplashScreen.tsx:104:9",className:"h-2 w-full overflow-hidden border border-white/15 bg-white/10",children:W.jsx("div",{"code-path":"src\\sections\\SplashScreen.tsx:105:11",className:"h-full bg-[#009fe3] transition-[width] duration-200 ease-out",style:{width:`${o}%`}})})]})]})}function a3(){return W.jsxs("div",{"code-path":"src\\App.tsx:16:5",className:"min-h-screen",children:[W.jsx(i3,{"code-path":"src\\App.tsx:17:7"}),W.jsx(JS,{"code-path":"src\\App.tsx:18:7"}),W.jsx(MA,{"code-path":"src\\App.tsx:19:7"}),W.jsx(bA,{"code-path":"src\\App.tsx:20:7"}),W.jsx(GA,{"code-path":"src\\App.tsx:21:7"}),W.jsx(kA,{"code-path":"src\\App.tsx:22:7"}),W.jsx(qA,{"code-path":"src\\App.tsx:23:7"}),W.jsx(KA,{"code-path":"src\\App.tsx:24:7"}),W.jsx(JA,{"code-path":"src\\App.tsx:25:7"}),W.jsx($A,{"code-path":"src\\App.tsx:26:7"}),W.jsx(e3,{"code-path":"src\\App.tsx:27:7"}),W.jsx(n3,{"code-path":"src\\App.tsx:28:7"})]})}QS.createRoot(document.getElementById("root")).render(W.jsx(a3,{"code-path":"src\\main.tsx:11:53"}));
