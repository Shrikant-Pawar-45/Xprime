var HN=Object.defineProperty;var qN=(n,e,t)=>e in n?HN(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var fi=(n,e,t)=>qN(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function TS(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var fg={exports:{}},ju={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var DT;function GN(){if(DT)return ju;DT=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(i,a,l){var u=null;if(l!==void 0&&(u=""+l),a.key!==void 0&&(u=""+a.key),"key"in a){l={};for(var d in a)d!=="key"&&(l[d]=a[d])}else l=a;return a=l.ref,{$$typeof:n,type:i,key:u,ref:a!==void 0?a:null,props:l}}return ju.Fragment=e,ju.jsx=t,ju.jsxs=t,ju}var kT;function WN(){return kT||(kT=1,fg.exports=GN()),fg.exports}var b=WN(),pg={exports:{}},Ne={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var PT;function YN(){if(PT)return Ne;PT=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),E=Symbol.iterator;function w(D){return D===null||typeof D!="object"?null:(D=E&&D[E]||D["@@iterator"],typeof D=="function"?D:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,B={};function j(D,ne,ue){this.props=D,this.context=ne,this.refs=B,this.updater=ue||I}j.prototype.isReactComponent={},j.prototype.setState=function(D,ne){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,ne,"setState")},j.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function $(){}$.prototype=j.prototype;function K(D,ne,ue){this.props=D,this.context=ne,this.refs=B,this.updater=ue||I}var te=K.prototype=new $;te.constructor=K,C(te,j.prototype),te.isPureReactComponent=!0;var re=Array.isArray,ce={H:null,A:null,T:null,S:null,V:null},ve=Object.prototype.hasOwnProperty;function M(D,ne,ue,se,ge,De){return ue=De.ref,{$$typeof:n,type:D,key:ne,ref:ue!==void 0?ue:null,props:De}}function R(D,ne){return M(D.type,ne,void 0,void 0,void 0,D.props)}function N(D){return typeof D=="object"&&D!==null&&D.$$typeof===n}function k(D){var ne={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(ue){return ne[ue]})}var V=/\/+/g;function F(D,ne){return typeof D=="object"&&D!==null&&D.key!=null?k(""+D.key):ne.toString(36)}function O(){}function en(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(O,O):(D.status="pending",D.then(function(ne){D.status==="pending"&&(D.status="fulfilled",D.value=ne)},function(ne){D.status==="pending"&&(D.status="rejected",D.reason=ne)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function _t(D,ne,ue,se,ge){var De=typeof D;(De==="undefined"||De==="boolean")&&(D=null);var Ae=!1;if(D===null)Ae=!0;else switch(De){case"bigint":case"string":case"number":Ae=!0;break;case"object":switch(D.$$typeof){case n:case e:Ae=!0;break;case y:return Ae=D._init,_t(Ae(D._payload),ne,ue,se,ge)}}if(Ae)return ge=ge(D),Ae=se===""?"."+F(D,0):se,re(ge)?(ue="",Ae!=null&&(ue=Ae.replace(V,"$&/")+"/"),_t(ge,ne,ue,"",function(Si){return Si})):ge!=null&&(N(ge)&&(ge=R(ge,ue+(ge.key==null||D&&D.key===ge.key?"":(""+ge.key).replace(V,"$&/")+"/")+Ae)),ne.push(ge)),1;Ae=0;var qt=se===""?".":se+":";if(re(D))for(var at=0;at<D.length;at++)se=D[at],De=qt+F(se,at),Ae+=_t(se,ne,ue,De,ge);else if(at=w(D),typeof at=="function")for(D=at.call(D),at=0;!(se=D.next()).done;)se=se.value,De=qt+F(se,at++),Ae+=_t(se,ne,ue,De,ge);else if(De==="object"){if(typeof D.then=="function")return _t(en(D),ne,ue,se,ge);throw ne=String(D),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.")}return Ae}function Q(D,ne,ue){if(D==null)return D;var se=[],ge=0;return _t(D,se,"","",function(De){return ne.call(ue,De,ge++)}),se}function le(D){if(D._status===-1){var ne=D._result;ne=ne(),ne.then(function(ue){(D._status===0||D._status===-1)&&(D._status=1,D._result=ue)},function(ue){(D._status===0||D._status===-1)&&(D._status=2,D._result=ue)}),D._status===-1&&(D._status=0,D._result=ne)}if(D._status===1)return D._result.default;throw D._result}var me=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ne=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(ne))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function Ye(){}return Ne.Children={map:Q,forEach:function(D,ne,ue){Q(D,function(){ne.apply(this,arguments)},ue)},count:function(D){var ne=0;return Q(D,function(){ne++}),ne},toArray:function(D){return Q(D,function(ne){return ne})||[]},only:function(D){if(!N(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},Ne.Component=j,Ne.Fragment=t,Ne.Profiler=a,Ne.PureComponent=K,Ne.StrictMode=i,Ne.Suspense=p,Ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ce,Ne.__COMPILER_RUNTIME={__proto__:null,c:function(D){return ce.H.useMemoCache(D)}},Ne.cache=function(D){return function(){return D.apply(null,arguments)}},Ne.cloneElement=function(D,ne,ue){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var se=C({},D.props),ge=D.key,De=void 0;if(ne!=null)for(Ae in ne.ref!==void 0&&(De=void 0),ne.key!==void 0&&(ge=""+ne.key),ne)!ve.call(ne,Ae)||Ae==="key"||Ae==="__self"||Ae==="__source"||Ae==="ref"&&ne.ref===void 0||(se[Ae]=ne[Ae]);var Ae=arguments.length-2;if(Ae===1)se.children=ue;else if(1<Ae){for(var qt=Array(Ae),at=0;at<Ae;at++)qt[at]=arguments[at+2];se.children=qt}return M(D.type,ge,void 0,void 0,De,se)},Ne.createContext=function(D){return D={$$typeof:u,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:l,_context:D},D},Ne.createElement=function(D,ne,ue){var se,ge={},De=null;if(ne!=null)for(se in ne.key!==void 0&&(De=""+ne.key),ne)ve.call(ne,se)&&se!=="key"&&se!=="__self"&&se!=="__source"&&(ge[se]=ne[se]);var Ae=arguments.length-2;if(Ae===1)ge.children=ue;else if(1<Ae){for(var qt=Array(Ae),at=0;at<Ae;at++)qt[at]=arguments[at+2];ge.children=qt}if(D&&D.defaultProps)for(se in Ae=D.defaultProps,Ae)ge[se]===void 0&&(ge[se]=Ae[se]);return M(D,De,void 0,void 0,null,ge)},Ne.createRef=function(){return{current:null}},Ne.forwardRef=function(D){return{$$typeof:d,render:D}},Ne.isValidElement=N,Ne.lazy=function(D){return{$$typeof:y,_payload:{_status:-1,_result:D},_init:le}},Ne.memo=function(D,ne){return{$$typeof:m,type:D,compare:ne===void 0?null:ne}},Ne.startTransition=function(D){var ne=ce.T,ue={};ce.T=ue;try{var se=D(),ge=ce.S;ge!==null&&ge(ue,se),typeof se=="object"&&se!==null&&typeof se.then=="function"&&se.then(Ye,me)}catch(De){me(De)}finally{ce.T=ne}},Ne.unstable_useCacheRefresh=function(){return ce.H.useCacheRefresh()},Ne.use=function(D){return ce.H.use(D)},Ne.useActionState=function(D,ne,ue){return ce.H.useActionState(D,ne,ue)},Ne.useCallback=function(D,ne){return ce.H.useCallback(D,ne)},Ne.useContext=function(D){return ce.H.useContext(D)},Ne.useDebugValue=function(){},Ne.useDeferredValue=function(D,ne){return ce.H.useDeferredValue(D,ne)},Ne.useEffect=function(D,ne,ue){var se=ce.H;if(typeof ue=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return se.useEffect(D,ne)},Ne.useId=function(){return ce.H.useId()},Ne.useImperativeHandle=function(D,ne,ue){return ce.H.useImperativeHandle(D,ne,ue)},Ne.useInsertionEffect=function(D,ne){return ce.H.useInsertionEffect(D,ne)},Ne.useLayoutEffect=function(D,ne){return ce.H.useLayoutEffect(D,ne)},Ne.useMemo=function(D,ne){return ce.H.useMemo(D,ne)},Ne.useOptimistic=function(D,ne){return ce.H.useOptimistic(D,ne)},Ne.useReducer=function(D,ne,ue){return ce.H.useReducer(D,ne,ue)},Ne.useRef=function(D){return ce.H.useRef(D)},Ne.useState=function(D){return ce.H.useState(D)},Ne.useSyncExternalStore=function(D,ne,ue){return ce.H.useSyncExternalStore(D,ne,ue)},Ne.useTransition=function(){return ce.H.useTransition()},Ne.version="19.1.0",Ne}var MT;function z_(){return MT||(MT=1,pg.exports=YN()),pg.exports}var U=z_();const pt=TS(U);var mg={exports:{}},Fu={},gg={exports:{}},_g={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var VT;function $N(){return VT||(VT=1,function(n){function e(Q,le){var me=Q.length;Q.push(le);e:for(;0<me;){var Ye=me-1>>>1,D=Q[Ye];if(0<a(D,le))Q[Ye]=le,Q[me]=D,me=Ye;else break e}}function t(Q){return Q.length===0?null:Q[0]}function i(Q){if(Q.length===0)return null;var le=Q[0],me=Q.pop();if(me!==le){Q[0]=me;e:for(var Ye=0,D=Q.length,ne=D>>>1;Ye<ne;){var ue=2*(Ye+1)-1,se=Q[ue],ge=ue+1,De=Q[ge];if(0>a(se,me))ge<D&&0>a(De,se)?(Q[Ye]=De,Q[ge]=me,Ye=ge):(Q[Ye]=se,Q[ue]=me,Ye=ue);else if(ge<D&&0>a(De,me))Q[Ye]=De,Q[ge]=me,Ye=ge;else break e}}return le}function a(Q,le){var me=Q.sortIndex-le.sortIndex;return me!==0?me:Q.id-le.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();n.unstable_now=function(){return u.now()-d}}var p=[],m=[],y=1,E=null,w=3,I=!1,C=!1,B=!1,j=!1,$=typeof setTimeout=="function"?setTimeout:null,K=typeof clearTimeout=="function"?clearTimeout:null,te=typeof setImmediate<"u"?setImmediate:null;function re(Q){for(var le=t(m);le!==null;){if(le.callback===null)i(m);else if(le.startTime<=Q)i(m),le.sortIndex=le.expirationTime,e(p,le);else break;le=t(m)}}function ce(Q){if(B=!1,re(Q),!C)if(t(p)!==null)C=!0,ve||(ve=!0,F());else{var le=t(m);le!==null&&_t(ce,le.startTime-Q)}}var ve=!1,M=-1,R=5,N=-1;function k(){return j?!0:!(n.unstable_now()-N<R)}function V(){if(j=!1,ve){var Q=n.unstable_now();N=Q;var le=!0;try{e:{C=!1,B&&(B=!1,K(M),M=-1),I=!0;var me=w;try{t:{for(re(Q),E=t(p);E!==null&&!(E.expirationTime>Q&&k());){var Ye=E.callback;if(typeof Ye=="function"){E.callback=null,w=E.priorityLevel;var D=Ye(E.expirationTime<=Q);if(Q=n.unstable_now(),typeof D=="function"){E.callback=D,re(Q),le=!0;break t}E===t(p)&&i(p),re(Q)}else i(p);E=t(p)}if(E!==null)le=!0;else{var ne=t(m);ne!==null&&_t(ce,ne.startTime-Q),le=!1}}break e}finally{E=null,w=me,I=!1}le=void 0}}finally{le?F():ve=!1}}}var F;if(typeof te=="function")F=function(){te(V)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,en=O.port2;O.port1.onmessage=V,F=function(){en.postMessage(null)}}else F=function(){$(V,0)};function _t(Q,le){M=$(function(){Q(n.unstable_now())},le)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(Q){Q.callback=null},n.unstable_forceFrameRate=function(Q){0>Q||125<Q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<Q?Math.floor(1e3/Q):5},n.unstable_getCurrentPriorityLevel=function(){return w},n.unstable_next=function(Q){switch(w){case 1:case 2:case 3:var le=3;break;default:le=w}var me=w;w=le;try{return Q()}finally{w=me}},n.unstable_requestPaint=function(){j=!0},n.unstable_runWithPriority=function(Q,le){switch(Q){case 1:case 2:case 3:case 4:case 5:break;default:Q=3}var me=w;w=Q;try{return le()}finally{w=me}},n.unstable_scheduleCallback=function(Q,le,me){var Ye=n.unstable_now();switch(typeof me=="object"&&me!==null?(me=me.delay,me=typeof me=="number"&&0<me?Ye+me:Ye):me=Ye,Q){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=me+D,Q={id:y++,callback:le,priorityLevel:Q,startTime:me,expirationTime:D,sortIndex:-1},me>Ye?(Q.sortIndex=me,e(m,Q),t(p)===null&&Q===t(m)&&(B?(K(M),M=-1):B=!0,_t(ce,me-Ye))):(Q.sortIndex=D,e(p,Q),C||I||(C=!0,ve||(ve=!0,F()))),Q},n.unstable_shouldYield=k,n.unstable_wrapCallback=function(Q){var le=w;return function(){var me=w;w=le;try{return Q.apply(this,arguments)}finally{w=me}}}}(_g)),_g}var LT;function KN(){return LT||(LT=1,gg.exports=$N()),gg.exports}var yg={exports:{}},hn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var UT;function QN(){if(UT)return hn;UT=1;var n=z_();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)m+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var i={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(p,m,y){var E=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:E==null?null:""+E,children:p,containerInfo:m,implementation:y}}var u=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return hn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,hn.createPortal=function(p,m){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return l(p,m,null,y)},hn.flushSync=function(p){var m=u.T,y=i.p;try{if(u.T=null,i.p=2,p)return p()}finally{u.T=m,i.p=y,i.d.f()}},hn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,i.d.C(p,m))},hn.prefetchDNS=function(p){typeof p=="string"&&i.d.D(p)},hn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var y=m.as,E=d(y,m.crossOrigin),w=typeof m.integrity=="string"?m.integrity:void 0,I=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;y==="style"?i.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:E,integrity:w,fetchPriority:I}):y==="script"&&i.d.X(p,{crossOrigin:E,integrity:w,fetchPriority:I,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},hn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var y=d(m.as,m.crossOrigin);i.d.M(p,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&i.d.M(p)},hn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var y=m.as,E=d(y,m.crossOrigin);i.d.L(p,y,{crossOrigin:E,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},hn.preloadModule=function(p,m){if(typeof p=="string")if(m){var y=d(m.as,m.crossOrigin);i.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else i.d.m(p)},hn.requestFormReset=function(p){i.d.r(p)},hn.unstable_batchedUpdates=function(p,m){return p(m)},hn.useFormState=function(p,m,y){return u.H.useFormState(p,m,y)},hn.useFormStatus=function(){return u.H.useHostTransitionStatus()},hn.version="19.1.0",hn}var jT;function XN(){if(jT)return yg.exports;jT=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),yg.exports=QN(),yg.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var FT;function ZN(){if(FT)return Fu;FT=1;var n=KN(),e=z_(),t=XN();function i(r){var s="https://react.dev/errors/"+r;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function l(r){var s=r,o=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(o=s.return),r=s.return;while(r)}return s.tag===3?o:null}function u(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function d(r){if(l(r)!==r)throw Error(i(188))}function p(r){var s=r.alternate;if(!s){if(s=l(r),s===null)throw Error(i(188));return s!==r?null:r}for(var o=r,c=s;;){var f=o.return;if(f===null)break;var g=f.alternate;if(g===null){if(c=f.return,c!==null){o=c;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===o)return d(f),r;if(g===c)return d(f),s;g=g.sibling}throw Error(i(188))}if(o.return!==c.return)o=f,c=g;else{for(var T=!1,S=f.child;S;){if(S===o){T=!0,o=f,c=g;break}if(S===c){T=!0,c=f,o=g;break}S=S.sibling}if(!T){for(S=g.child;S;){if(S===o){T=!0,o=g,c=f;break}if(S===c){T=!0,c=g,o=f;break}S=S.sibling}if(!T)throw Error(i(189))}}if(o.alternate!==c)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?r:s}function m(r){var s=r.tag;if(s===5||s===26||s===27||s===6)return r;for(r=r.child;r!==null;){if(s=m(r),s!==null)return s;r=r.sibling}return null}var y=Object.assign,E=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),I=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),$=Symbol.for("react.provider"),K=Symbol.for("react.consumer"),te=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),ce=Symbol.for("react.suspense"),ve=Symbol.for("react.suspense_list"),M=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),k=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function F(r){return r===null||typeof r!="object"?null:(r=V&&r[V]||r["@@iterator"],typeof r=="function"?r:null)}var O=Symbol.for("react.client.reference");function en(r){if(r==null)return null;if(typeof r=="function")return r.$$typeof===O?null:r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case C:return"Fragment";case j:return"Profiler";case B:return"StrictMode";case ce:return"Suspense";case ve:return"SuspenseList";case N:return"Activity"}if(typeof r=="object")switch(r.$$typeof){case I:return"Portal";case te:return(r.displayName||"Context")+".Provider";case K:return(r._context.displayName||"Context")+".Consumer";case re:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case M:return s=r.displayName||null,s!==null?s:en(r.type)||"Memo";case R:s=r._payload,r=r._init;try{return en(r(s))}catch{}}return null}var _t=Array.isArray,Q=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,me={pending:!1,data:null,method:null,action:null},Ye=[],D=-1;function ne(r){return{current:r}}function ue(r){0>D||(r.current=Ye[D],Ye[D]=null,D--)}function se(r,s){D++,Ye[D]=r.current,r.current=s}var ge=ne(null),De=ne(null),Ae=ne(null),qt=ne(null);function at(r,s){switch(se(Ae,s),se(De,r),se(ge,null),s.nodeType){case 9:case 11:r=(r=s.documentElement)&&(r=r.namespaceURI)?aT(r):0;break;default:if(r=s.tagName,s=s.namespaceURI)s=aT(s),r=oT(s,r);else switch(r){case"svg":r=1;break;case"math":r=2;break;default:r=0}}ue(ge),se(ge,r)}function Si(){ue(ge),ue(De),ue(Ae)}function Gr(r){r.memoizedState!==null&&se(qt,r);var s=ge.current,o=oT(s,r.type);s!==o&&(se(De,r),se(ge,o))}function er(r){De.current===r&&(ue(ge),ue(De)),qt.current===r&&(ue(qt),Pu._currentValue=me)}var Ws=Object.prototype.hasOwnProperty,Ys=n.unstable_scheduleCallback,$s=n.unstable_cancelCallback,Ol=n.unstable_shouldYield,Qc=n.unstable_requestPaint,qn=n.unstable_now,fp=n.unstable_getCurrentPriorityLevel,Dl=n.unstable_ImmediatePriority,Za=n.unstable_UserBlockingPriority,Ks=n.unstable_NormalPriority,pp=n.unstable_LowPriority,Ja=n.unstable_IdlePriority,kl=n.log,Xc=n.unstable_setDisableYieldValue,yt=null,Xe=null;function Dn(r){if(typeof kl=="function"&&Xc(r),Xe&&typeof Xe.setStrictMode=="function")try{Xe.setStrictMode(yt,r)}catch{}}var un=Math.clz32?Math.clz32:Qs,Zc=Math.log,mp=Math.LN2;function Qs(r){return r>>>=0,r===0?32:31-(Zc(r)/mp|0)|0}var Xs=256,Zs=4194304;function oi(r){var s=r&42;if(s!==0)return s;switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return r&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return r}}function eo(r,s,o){var c=r.pendingLanes;if(c===0)return 0;var f=0,g=r.suspendedLanes,T=r.pingedLanes;r=r.warmLanes;var S=c&134217727;return S!==0?(c=S&~g,c!==0?f=oi(c):(T&=S,T!==0?f=oi(T):o||(o=S&~r,o!==0&&(f=oi(o))))):(S=c&~g,S!==0?f=oi(S):T!==0?f=oi(T):o||(o=c&~r,o!==0&&(f=oi(o)))),f===0?0:s!==0&&s!==f&&(s&g)===0&&(g=f&-f,o=s&-s,g>=o||g===32&&(o&4194048)!==0)?s:f}function Js(r,s){return(r.pendingLanes&~(r.suspendedLanes&~r.pingedLanes)&s)===0}function Pl(r,s){switch(r){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ml(){var r=Xs;return Xs<<=1,(Xs&4194048)===0&&(Xs=256),r}function Vl(){var r=Zs;return Zs<<=1,(Zs&62914560)===0&&(Zs=4194304),r}function tr(r){for(var s=[],o=0;31>o;o++)s.push(r);return s}function nr(r,s){r.pendingLanes|=s,s!==268435456&&(r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0)}function Ll(r,s,o,c,f,g){var T=r.pendingLanes;r.pendingLanes=o,r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0,r.expiredLanes&=o,r.entangledLanes&=o,r.errorRecoveryDisabledLanes&=o,r.shellSuspendCounter=0;var S=r.entanglements,x=r.expirationTimes,q=r.hiddenUpdates;for(o=T&~o;0<o;){var X=31-un(o),J=1<<X;S[X]=0,x[X]=-1;var G=q[X];if(G!==null)for(q[X]=null,X=0;X<G.length;X++){var W=G[X];W!==null&&(W.lane&=-536870913)}o&=~J}c!==0&&Ai(r,c,0),g!==0&&f===0&&r.tag!==0&&(r.suspendedLanes|=g&~(T&~s))}function Ai(r,s,o){r.pendingLanes|=s,r.suspendedLanes&=~s;var c=31-un(s);r.entangledLanes|=s,r.entanglements[c]=r.entanglements[c]|1073741824|o&4194090}function Ul(r,s){var o=r.entangledLanes|=s;for(r=r.entanglements;o;){var c=31-un(o),f=1<<c;f&s|r[c]&s&&(r[c]|=s),o&=~f}}function Wr(r){switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=128;break;case 268435456:r=134217728;break;default:r=0}return r}function to(r){return r&=-r,2<r?8<r?(r&134217727)!==0?32:268435456:8:2}function Yr(){var r=le.p;return r!==0?r:(r=window.event,r===void 0?32:RT(r.type))}function Jc(r,s){var o=le.p;try{return le.p=r,s()}finally{le.p=o}}var ht=Math.random().toString(36).slice(2),Pt="__reactFiber$"+ht,Ct="__reactProps$"+ht,Gn="__reactContainer$"+ht,jl="__reactEvents$"+ht,gp="__reactListeners$"+ht,$r="__reactHandles$"+ht,eh="__reactResources$"+ht,ea="__reactMarker$"+ht;function Kr(r){delete r[Pt],delete r[Ct],delete r[jl],delete r[gp],delete r[$r]}function ir(r){var s=r[Pt];if(s)return s;for(var o=r.parentNode;o;){if(s=o[Gn]||o[Pt]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(r=hT(r);r!==null;){if(o=r[Pt])return o;r=hT(r)}return s}r=o,o=r.parentNode}return null}function Ri(r){if(r=r[Pt]||r[Gn]){var s=r.tag;if(s===5||s===6||s===13||s===26||s===27||s===3)return r}return null}function Ii(r){var s=r.tag;if(s===5||s===26||s===27||s===6)return r.stateNode;throw Error(i(33))}function yn(r){var s=r[eh];return s||(s=r[eh]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function bt(r){r[ea]=!0}var Fl=new Set,no={};function li(r,s){rr(r,s),rr(r+"Capture",s)}function rr(r,s){for(no[r]=s,r=0;r<s.length;r++)Fl.add(s[r])}var th=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),nh={},ta={};function ih(r){return Ws.call(ta,r)?!0:Ws.call(nh,r)?!1:th.test(r)?ta[r]=!0:(nh[r]=!0,!1)}function Qr(r,s,o){if(ih(s))if(o===null)r.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":r.removeAttribute(s);return;case"boolean":var c=s.toLowerCase().slice(0,5);if(c!=="data-"&&c!=="aria-"){r.removeAttribute(s);return}}r.setAttribute(s,""+o)}}function Ci(r,s,o){if(o===null)r.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(s);return}r.setAttribute(s,""+o)}}function tn(r,s,o,c){if(c===null)r.removeAttribute(o);else{switch(typeof c){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(o);return}r.setAttributeNS(s,o,""+c)}}var na,rh;function sr(r){if(na===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);na=s&&s[1]||"",rh=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+na+r+rh}var io=!1;function ro(r,s){if(!r||io)return"";io=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var c={DetermineComponentFrameRoot:function(){try{if(s){var J=function(){throw Error()};if(Object.defineProperty(J.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(J,[])}catch(W){var G=W}Reflect.construct(r,[],J)}else{try{J.call()}catch(W){G=W}r.call(J.prototype)}}else{try{throw Error()}catch(W){G=W}(J=r())&&typeof J.catch=="function"&&J.catch(function(){})}}catch(W){if(W&&G&&typeof W.stack=="string")return[W.stack,G.stack]}return[null,null]}};c.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(c.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(c.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=c.DetermineComponentFrameRoot(),T=g[0],S=g[1];if(T&&S){var x=T.split(`
`),q=S.split(`
`);for(f=c=0;c<x.length&&!x[c].includes("DetermineComponentFrameRoot");)c++;for(;f<q.length&&!q[f].includes("DetermineComponentFrameRoot");)f++;if(c===x.length||f===q.length)for(c=x.length-1,f=q.length-1;1<=c&&0<=f&&x[c]!==q[f];)f--;for(;1<=c&&0<=f;c--,f--)if(x[c]!==q[f]){if(c!==1||f!==1)do if(c--,f--,0>f||x[c]!==q[f]){var X=`
`+x[c].replace(" at new "," at ");return r.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",r.displayName)),X}while(1<=c&&0<=f);break}}}finally{io=!1,Error.prepareStackTrace=o}return(o=r?r.displayName||r.name:"")?sr(o):""}function zl(r){switch(r.tag){case 26:case 27:case 5:return sr(r.type);case 16:return sr("Lazy");case 13:return sr("Suspense");case 19:return sr("SuspenseList");case 0:case 15:return ro(r.type,!1);case 11:return ro(r.type.render,!1);case 1:return ro(r.type,!0);case 31:return sr("Activity");default:return""}}function so(r){try{var s="";do s+=zl(r),r=r.return;while(r);return s}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function vn(r){switch(typeof r){case"bigint":case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Bl(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function _p(r){var s=Bl(r)?"checked":"value",o=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),c=""+r[s];if(!r.hasOwnProperty(s)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,g=o.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return f.call(this)},set:function(T){c=""+T,g.call(this,T)}}),Object.defineProperty(r,s,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function ao(r){r._valueTracker||(r._valueTracker=_p(r))}function Hl(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var o=s.getValue(),c="";return r&&(c=Bl(r)?r.checked?"true":"false":r.value),r=c,r!==o?(s.setValue(r),!0):!1}function ia(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}var yp=/[\n"\\]/g;function Nt(r){return r.replace(yp,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function kn(r,s,o,c,f,g,T,S){r.name="",T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?r.type=T:r.removeAttribute("type"),s!=null?T==="number"?(s===0&&r.value===""||r.value!=s)&&(r.value=""+vn(s)):r.value!==""+vn(s)&&(r.value=""+vn(s)):T!=="submit"&&T!=="reset"||r.removeAttribute("value"),s!=null?Xr(r,T,vn(s)):o!=null?Xr(r,T,vn(o)):c!=null&&r.removeAttribute("value"),f==null&&g!=null&&(r.defaultChecked=!!g),f!=null&&(r.checked=f&&typeof f!="function"&&typeof f!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?r.name=""+vn(S):r.removeAttribute("name")}function ra(r,s,o,c,f,g,T,S){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(r.type=g),s!=null||o!=null){if(!(g!=="submit"&&g!=="reset"||s!=null))return;o=o!=null?""+vn(o):"",s=s!=null?""+vn(s):o,S||s===r.value||(r.value=s),r.defaultValue=s}c=c??f,c=typeof c!="function"&&typeof c!="symbol"&&!!c,r.checked=S?r.checked:!!c,r.defaultChecked=!!c,T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"&&(r.name=T)}function Xr(r,s,o){s==="number"&&ia(r.ownerDocument)===r||r.defaultValue===""+o||(r.defaultValue=""+o)}function ar(r,s,o,c){if(r=r.options,s){s={};for(var f=0;f<o.length;f++)s["$"+o[f]]=!0;for(o=0;o<r.length;o++)f=s.hasOwnProperty("$"+r[o].value),r[o].selected!==f&&(r[o].selected=f),f&&c&&(r[o].defaultSelected=!0)}else{for(o=""+vn(o),s=null,f=0;f<r.length;f++){if(r[f].value===o){r[f].selected=!0,c&&(r[f].defaultSelected=!0);return}s!==null||r[f].disabled||(s=r[f])}s!==null&&(s.selected=!0)}}function et(r,s,o){if(s!=null&&(s=""+vn(s),s!==r.value&&(r.value=s),o==null)){r.defaultValue!==s&&(r.defaultValue=s);return}r.defaultValue=o!=null?""+vn(o):""}function sa(r,s,o,c){if(s==null){if(c!=null){if(o!=null)throw Error(i(92));if(_t(c)){if(1<c.length)throw Error(i(93));c=c[0]}o=c}o==null&&(o=""),s=o}o=vn(s),r.defaultValue=o,c=r.textContent,c===o&&c!==""&&c!==null&&(r.value=c)}function Wn(r,s){if(s){var o=r.firstChild;if(o&&o===r.lastChild&&o.nodeType===3){o.nodeValue=s;return}}r.textContent=s}var aa=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function sh(r,s,o){var c=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?c?r.setProperty(s,""):s==="float"?r.cssFloat="":r[s]="":c?r.setProperty(s,o):typeof o!="number"||o===0||aa.has(s)?s==="float"?r.cssFloat=o:r[s]=(""+o).trim():r[s]=o+"px"}function ql(r,s,o){if(s!=null&&typeof s!="object")throw Error(i(62));if(r=r.style,o!=null){for(var c in o)!o.hasOwnProperty(c)||s!=null&&s.hasOwnProperty(c)||(c.indexOf("--")===0?r.setProperty(c,""):c==="float"?r.cssFloat="":r[c]="");for(var f in s)c=s[f],s.hasOwnProperty(f)&&o[f]!==c&&sh(r,f,c)}else for(var g in s)s.hasOwnProperty(g)&&sh(r,g,s[g])}function Gl(r){if(r.indexOf("-")===-1)return!1;switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ep=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function oo(r){return Ep.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}var or=null;function Yn(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var lr=null,ur=null;function Wl(r){var s=Ri(r);if(s&&(r=s.stateNode)){var o=r[Ct]||null;e:switch(r=s.stateNode,s.type){case"input":if(kn(r,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=r;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Nt(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var c=o[s];if(c!==r&&c.form===r.form){var f=c[Ct]||null;if(!f)throw Error(i(90));kn(c,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(s=0;s<o.length;s++)c=o[s],c.form===r.form&&Hl(c)}break e;case"textarea":et(r,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&ar(r,!!o.multiple,s,!1)}}}var Ni=!1;function ah(r,s,o){if(Ni)return r(s,o);Ni=!0;try{var c=r(s);return c}finally{if(Ni=!1,(lr!==null||ur!==null)&&(Jh(),lr&&(s=lr,r=ur,ur=lr=null,Wl(s),r)))for(s=0;s<r.length;s++)Wl(r[s])}}function oa(r,s){var o=r.stateNode;if(o===null)return null;var c=o[Ct]||null;if(c===null)return null;o=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break e;default:r=!1}if(r)return null;if(o&&typeof o!="function")throw Error(i(231,s,typeof o));return o}var ui=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$n=!1;if(ui)try{var la={};Object.defineProperty(la,"passive",{get:function(){$n=!0}}),window.addEventListener("test",la,la),window.removeEventListener("test",la,la)}catch{$n=!1}var xi=null,Zr=null,cr=null;function Yl(){if(cr)return cr;var r,s=Zr,o=s.length,c,f="value"in xi?xi.value:xi.textContent,g=f.length;for(r=0;r<o&&s[r]===f[r];r++);var T=o-r;for(c=1;c<=T&&s[o-c]===f[g-c];c++);return cr=f.slice(r,1<c?1-c:void 0)}function Oi(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Di(){return!0}function $l(){return!1}function Gt(r){function s(o,c,f,g,T){this._reactName=o,this._targetInst=f,this.type=c,this.nativeEvent=g,this.target=T,this.currentTarget=null;for(var S in r)r.hasOwnProperty(S)&&(o=r[S],this[S]=o?o(g):g[S]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Di:$l,this.isPropagationStopped=$l,this}return y(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Di)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Di)},persist:function(){},isPersistent:Di}),s}var Ke={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lo=Gt(Ke),ua=y({},Ke,{view:0,detail:0}),oh=Gt(ua),uo,co,ki,ca=y({},ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fa,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==ki&&(ki&&r.type==="mousemove"?(uo=r.screenX-ki.screenX,co=r.screenY-ki.screenY):co=uo=0,ki=r),uo)},movementY:function(r){return"movementY"in r?r.movementY:co}}),Kn=Gt(ca),lh=y({},ca,{dataTransfer:0}),Tp=Gt(lh),ha=y({},ua,{relatedTarget:0}),ho=Gt(ha),Kl=y({},Ke,{animationName:0,elapsedTime:0,pseudoElement:0}),fo=Gt(Kl),uh=y({},Ke,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),po=Gt(uh),wp=y({},Ke,{data:0}),Ql=Gt(wp),da={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ch={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xl(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=hh[r])?!!s[r]:!1}function fa(){return Xl}var dh=y({},ua,{key:function(r){if(r.key){var s=da[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Oi(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?ch[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fa,charCode:function(r){return r.type==="keypress"?Oi(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Oi(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),mo=Gt(dh),fh=y({},ca,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zl=Gt(fh),hr=y({},ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fa}),ph=Gt(hr),mh=y({},Ke,{propertyName:0,elapsedTime:0,pseudoElement:0}),gh=Gt(mh),_h=y({},ca,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),go=Gt(_h),En=y({},Ke,{newState:0,oldState:0}),yh=Gt(En),vh=[9,13,27,32],Pi=ui&&"CompositionEvent"in window,h=null;ui&&"documentMode"in document&&(h=document.documentMode);var _=ui&&"TextEvent"in window&&!h,v=ui&&(!Pi||h&&8<h&&11>=h),A=" ",z=!1;function Y(r,s){switch(r){case"keyup":return vh.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ae(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var ze=!1;function Mt(r,s){switch(r){case"compositionend":return ae(s);case"keypress":return s.which!==32?null:(z=!0,A);case"textInput":return r=s.data,r===A&&z?null:r;default:return null}}function Be(r,s){if(ze)return r==="compositionend"||!Pi&&Y(r,s)?(r=Yl(),cr=Zr=xi=null,ze=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return v&&s.locale!=="ko"?null:s.data;default:return null}}var Wt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vt(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!Wt[r.type]:s==="textarea"}function dr(r,s,o,c){lr?ur?ur.push(c):ur=[c]:lr=c,s=sd(s,"onChange"),0<s.length&&(o=new lo("onChange","change",null,o,c),r.push({event:o,listeners:s}))}var nn=null,Mi=null;function Jl(r){tT(r,0)}function Eh(r){var s=Ii(r);if(Hl(s))return r}function wv(r,s){if(r==="change")return s}var bv=!1;if(ui){var bp;if(ui){var Sp="oninput"in document;if(!Sp){var Sv=document.createElement("div");Sv.setAttribute("oninput","return;"),Sp=typeof Sv.oninput=="function"}bp=Sp}else bp=!1;bv=bp&&(!document.documentMode||9<document.documentMode)}function Av(){nn&&(nn.detachEvent("onpropertychange",Rv),Mi=nn=null)}function Rv(r){if(r.propertyName==="value"&&Eh(Mi)){var s=[];dr(s,Mi,r,Yn(r)),ah(Jl,s)}}function vC(r,s,o){r==="focusin"?(Av(),nn=s,Mi=o,nn.attachEvent("onpropertychange",Rv)):r==="focusout"&&Av()}function EC(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Eh(Mi)}function TC(r,s){if(r==="click")return Eh(s)}function wC(r,s){if(r==="input"||r==="change")return Eh(s)}function bC(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Pn=typeof Object.is=="function"?Object.is:bC;function eu(r,s){if(Pn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var o=Object.keys(r),c=Object.keys(s);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var f=o[c];if(!Ws.call(s,f)||!Pn(r[f],s[f]))return!1}return!0}function Iv(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Cv(r,s){var o=Iv(r);r=0;for(var c;o;){if(o.nodeType===3){if(c=r+o.textContent.length,r<=s&&c>=s)return{node:o,offset:s-r};r=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Iv(o)}}function Nv(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?Nv(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function xv(r){r=r!=null&&r.ownerDocument!=null&&r.ownerDocument.defaultView!=null?r.ownerDocument.defaultView:window;for(var s=ia(r.document);s instanceof r.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)r=s.contentWindow;else break;s=ia(r.document)}return s}function Ap(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}var SC=ui&&"documentMode"in document&&11>=document.documentMode,_o=null,Rp=null,tu=null,Ip=!1;function Ov(r,s,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Ip||_o==null||_o!==ia(c)||(c=_o,"selectionStart"in c&&Ap(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),tu&&eu(tu,c)||(tu=c,c=sd(Rp,"onSelect"),0<c.length&&(s=new lo("onSelect","select",null,s,o),r.push({event:s,listeners:c}),s.target=_o)))}function pa(r,s){var o={};return o[r.toLowerCase()]=s.toLowerCase(),o["Webkit"+r]="webkit"+s,o["Moz"+r]="moz"+s,o}var yo={animationend:pa("Animation","AnimationEnd"),animationiteration:pa("Animation","AnimationIteration"),animationstart:pa("Animation","AnimationStart"),transitionrun:pa("Transition","TransitionRun"),transitionstart:pa("Transition","TransitionStart"),transitioncancel:pa("Transition","TransitionCancel"),transitionend:pa("Transition","TransitionEnd")},Cp={},Dv={};ui&&(Dv=document.createElement("div").style,"AnimationEvent"in window||(delete yo.animationend.animation,delete yo.animationiteration.animation,delete yo.animationstart.animation),"TransitionEvent"in window||delete yo.transitionend.transition);function ma(r){if(Cp[r])return Cp[r];if(!yo[r])return r;var s=yo[r],o;for(o in s)if(s.hasOwnProperty(o)&&o in Dv)return Cp[r]=s[o];return r}var kv=ma("animationend"),Pv=ma("animationiteration"),Mv=ma("animationstart"),AC=ma("transitionrun"),RC=ma("transitionstart"),IC=ma("transitioncancel"),Vv=ma("transitionend"),Lv=new Map,Np="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Np.push("scrollEnd");function ci(r,s){Lv.set(r,s),li(s,[r])}var Uv=new WeakMap;function Qn(r,s){if(typeof r=="object"&&r!==null){var o=Uv.get(r);return o!==void 0?o:(s={value:r,source:s,stack:so(s)},Uv.set(r,s),s)}return{value:r,source:s,stack:so(s)}}var Xn=[],vo=0,xp=0;function Th(){for(var r=vo,s=xp=vo=0;s<r;){var o=Xn[s];Xn[s++]=null;var c=Xn[s];Xn[s++]=null;var f=Xn[s];Xn[s++]=null;var g=Xn[s];if(Xn[s++]=null,c!==null&&f!==null){var T=c.pending;T===null?f.next=f:(f.next=T.next,T.next=f),c.pending=f}g!==0&&jv(o,f,g)}}function wh(r,s,o,c){Xn[vo++]=r,Xn[vo++]=s,Xn[vo++]=o,Xn[vo++]=c,xp|=c,r.lanes|=c,r=r.alternate,r!==null&&(r.lanes|=c)}function Op(r,s,o,c){return wh(r,s,o,c),bh(r)}function Eo(r,s){return wh(r,null,null,s),bh(r)}function jv(r,s,o){r.lanes|=o;var c=r.alternate;c!==null&&(c.lanes|=o);for(var f=!1,g=r.return;g!==null;)g.childLanes|=o,c=g.alternate,c!==null&&(c.childLanes|=o),g.tag===22&&(r=g.stateNode,r===null||r._visibility&1||(f=!0)),r=g,g=g.return;return r.tag===3?(g=r.stateNode,f&&s!==null&&(f=31-un(o),r=g.hiddenUpdates,c=r[f],c===null?r[f]=[s]:c.push(s),s.lane=o|536870912),g):null}function bh(r){if(50<Ru)throw Ru=0,Lm=null,Error(i(185));for(var s=r.return;s!==null;)r=s,s=r.return;return r.tag===3?r.stateNode:null}var To={};function CC(r,s,o,c){this.tag=r,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mn(r,s,o,c){return new CC(r,s,o,c)}function Dp(r){return r=r.prototype,!(!r||!r.isReactComponent)}function fr(r,s){var o=r.alternate;return o===null?(o=Mn(r.tag,s,r.key,r.mode),o.elementType=r.elementType,o.type=r.type,o.stateNode=r.stateNode,o.alternate=r,r.alternate=o):(o.pendingProps=s,o.type=r.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=r.flags&65011712,o.childLanes=r.childLanes,o.lanes=r.lanes,o.child=r.child,o.memoizedProps=r.memoizedProps,o.memoizedState=r.memoizedState,o.updateQueue=r.updateQueue,s=r.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=r.sibling,o.index=r.index,o.ref=r.ref,o.refCleanup=r.refCleanup,o}function Fv(r,s){r.flags&=65011714;var o=r.alternate;return o===null?(r.childLanes=0,r.lanes=s,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=o.childLanes,r.lanes=o.lanes,r.child=o.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=o.memoizedProps,r.memoizedState=o.memoizedState,r.updateQueue=o.updateQueue,r.type=o.type,s=o.dependencies,r.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),r}function Sh(r,s,o,c,f,g){var T=0;if(c=r,typeof r=="function")Dp(r)&&(T=1);else if(typeof r=="string")T=xN(r,o,ge.current)?26:r==="html"||r==="head"||r==="body"?27:5;else e:switch(r){case N:return r=Mn(31,o,s,f),r.elementType=N,r.lanes=g,r;case C:return ga(o.children,f,g,s);case B:T=8,f|=24;break;case j:return r=Mn(12,o,s,f|2),r.elementType=j,r.lanes=g,r;case ce:return r=Mn(13,o,s,f),r.elementType=ce,r.lanes=g,r;case ve:return r=Mn(19,o,s,f),r.elementType=ve,r.lanes=g,r;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case $:case te:T=10;break e;case K:T=9;break e;case re:T=11;break e;case M:T=14;break e;case R:T=16,c=null;break e}T=29,o=Error(i(130,r===null?"null":typeof r,"")),c=null}return s=Mn(T,o,s,f),s.elementType=r,s.type=c,s.lanes=g,s}function ga(r,s,o,c){return r=Mn(7,r,c,s),r.lanes=o,r}function kp(r,s,o){return r=Mn(6,r,null,s),r.lanes=o,r}function Pp(r,s,o){return s=Mn(4,r.children!==null?r.children:[],r.key,s),s.lanes=o,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}var wo=[],bo=0,Ah=null,Rh=0,Zn=[],Jn=0,_a=null,pr=1,mr="";function ya(r,s){wo[bo++]=Rh,wo[bo++]=Ah,Ah=r,Rh=s}function zv(r,s,o){Zn[Jn++]=pr,Zn[Jn++]=mr,Zn[Jn++]=_a,_a=r;var c=pr;r=mr;var f=32-un(c)-1;c&=~(1<<f),o+=1;var g=32-un(s)+f;if(30<g){var T=f-f%5;g=(c&(1<<T)-1).toString(32),c>>=T,f-=T,pr=1<<32-un(s)+f|o<<f|c,mr=g+r}else pr=1<<g|o<<f|c,mr=r}function Mp(r){r.return!==null&&(ya(r,1),zv(r,1,0))}function Vp(r){for(;r===Ah;)Ah=wo[--bo],wo[bo]=null,Rh=wo[--bo],wo[bo]=null;for(;r===_a;)_a=Zn[--Jn],Zn[Jn]=null,mr=Zn[--Jn],Zn[Jn]=null,pr=Zn[--Jn],Zn[Jn]=null}var Tn=null,vt=null,$e=!1,va=null,Vi=!1,Lp=Error(i(519));function Ea(r){var s=Error(i(418,""));throw ru(Qn(s,r)),Lp}function Bv(r){var s=r.stateNode,o=r.type,c=r.memoizedProps;switch(s[Pt]=r,s[Ct]=c,o){case"dialog":Ve("cancel",s),Ve("close",s);break;case"iframe":case"object":case"embed":Ve("load",s);break;case"video":case"audio":for(o=0;o<Cu.length;o++)Ve(Cu[o],s);break;case"source":Ve("error",s);break;case"img":case"image":case"link":Ve("error",s),Ve("load",s);break;case"details":Ve("toggle",s);break;case"input":Ve("invalid",s),ra(s,c.value,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name,!0),ao(s);break;case"select":Ve("invalid",s);break;case"textarea":Ve("invalid",s),sa(s,c.value,c.defaultValue,c.children),ao(s)}o=c.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||c.suppressHydrationWarning===!0||sT(s.textContent,o)?(c.popover!=null&&(Ve("beforetoggle",s),Ve("toggle",s)),c.onScroll!=null&&Ve("scroll",s),c.onScrollEnd!=null&&Ve("scrollend",s),c.onClick!=null&&(s.onclick=ad),s=!0):s=!1,s||Ea(r)}function Hv(r){for(Tn=r.return;Tn;)switch(Tn.tag){case 5:case 13:Vi=!1;return;case 27:case 3:Vi=!0;return;default:Tn=Tn.return}}function nu(r){if(r!==Tn)return!1;if(!$e)return Hv(r),$e=!0,!1;var s=r.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=r.type,o=!(o!=="form"&&o!=="button")||Jm(r.type,r.memoizedProps)),o=!o),o&&vt&&Ea(r),Hv(r),s===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(i(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8)if(o=r.data,o==="/$"){if(s===0){vt=di(r.nextSibling);break e}s--}else o!=="$"&&o!=="$!"&&o!=="$?"||s++;r=r.nextSibling}vt=null}}else s===27?(s=vt,ps(r.type)?(r=ig,ig=null,vt=r):vt=s):vt=Tn?di(r.stateNode.nextSibling):null;return!0}function iu(){vt=Tn=null,$e=!1}function qv(){var r=va;return r!==null&&(Rn===null?Rn=r:Rn.push.apply(Rn,r),va=null),r}function ru(r){va===null?va=[r]:va.push(r)}var Up=ne(null),Ta=null,gr=null;function Jr(r,s,o){se(Up,s._currentValue),s._currentValue=o}function _r(r){r._currentValue=Up.current,ue(Up)}function jp(r,s,o){for(;r!==null;){var c=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),r===o)break;r=r.return}}function Fp(r,s,o,c){var f=r.child;for(f!==null&&(f.return=r);f!==null;){var g=f.dependencies;if(g!==null){var T=f.child;g=g.firstContext;e:for(;g!==null;){var S=g;g=f;for(var x=0;x<s.length;x++)if(S.context===s[x]){g.lanes|=o,S=g.alternate,S!==null&&(S.lanes|=o),jp(g.return,o,r),c||(T=null);break e}g=S.next}}else if(f.tag===18){if(T=f.return,T===null)throw Error(i(341));T.lanes|=o,g=T.alternate,g!==null&&(g.lanes|=o),jp(T,o,r),T=null}else T=f.child;if(T!==null)T.return=f;else for(T=f;T!==null;){if(T===r){T=null;break}if(f=T.sibling,f!==null){f.return=T.return,T=f;break}T=T.return}f=T}}function su(r,s,o,c){r=null;for(var f=s,g=!1;f!==null;){if(!g){if((f.flags&524288)!==0)g=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var T=f.alternate;if(T===null)throw Error(i(387));if(T=T.memoizedProps,T!==null){var S=f.type;Pn(f.pendingProps.value,T.value)||(r!==null?r.push(S):r=[S])}}else if(f===qt.current){if(T=f.alternate,T===null)throw Error(i(387));T.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(r!==null?r.push(Pu):r=[Pu])}f=f.return}r!==null&&Fp(s,r,o,c),s.flags|=262144}function Ih(r){for(r=r.firstContext;r!==null;){if(!Pn(r.context._currentValue,r.memoizedValue))return!0;r=r.next}return!1}function wa(r){Ta=r,gr=null,r=r.dependencies,r!==null&&(r.firstContext=null)}function cn(r){return Gv(Ta,r)}function Ch(r,s){return Ta===null&&wa(r),Gv(r,s)}function Gv(r,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},gr===null){if(r===null)throw Error(i(308));gr=s,r.dependencies={lanes:0,firstContext:s},r.flags|=524288}else gr=gr.next=s;return o}var NC=typeof AbortController<"u"?AbortController:function(){var r=[],s=this.signal={aborted:!1,addEventListener:function(o,c){r.push(c)}};this.abort=function(){s.aborted=!0,r.forEach(function(o){return o()})}},xC=n.unstable_scheduleCallback,OC=n.unstable_NormalPriority,Lt={$$typeof:te,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function zp(){return{controller:new NC,data:new Map,refCount:0}}function au(r){r.refCount--,r.refCount===0&&xC(OC,function(){r.controller.abort()})}var ou=null,Bp=0,So=0,Ao=null;function DC(r,s){if(ou===null){var o=ou=[];Bp=0,So=qm(),Ao={status:"pending",value:void 0,then:function(c){o.push(c)}}}return Bp++,s.then(Wv,Wv),s}function Wv(){if(--Bp===0&&ou!==null){Ao!==null&&(Ao.status="fulfilled");var r=ou;ou=null,So=0,Ao=null;for(var s=0;s<r.length;s++)(0,r[s])()}}function kC(r,s){var o=[],c={status:"pending",value:null,reason:null,then:function(f){o.push(f)}};return r.then(function(){c.status="fulfilled",c.value=s;for(var f=0;f<o.length;f++)(0,o[f])(s)},function(f){for(c.status="rejected",c.reason=f,f=0;f<o.length;f++)(0,o[f])(void 0)}),c}var Yv=Q.S;Q.S=function(r,s){typeof s=="object"&&s!==null&&typeof s.then=="function"&&DC(r,s),Yv!==null&&Yv(r,s)};var ba=ne(null);function Hp(){var r=ba.current;return r!==null?r:ot.pooledCache}function Nh(r,s){s===null?se(ba,ba.current):se(ba,s.pool)}function $v(){var r=Hp();return r===null?null:{parent:Lt._currentValue,pool:r}}var lu=Error(i(460)),Kv=Error(i(474)),xh=Error(i(542)),qp={then:function(){}};function Qv(r){return r=r.status,r==="fulfilled"||r==="rejected"}function Oh(){}function Xv(r,s,o){switch(o=r[o],o===void 0?r.push(s):o!==s&&(s.then(Oh,Oh),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,Jv(r),r;default:if(typeof s.status=="string")s.then(Oh,Oh);else{if(r=ot,r!==null&&100<r.shellSuspendCounter)throw Error(i(482));r=s,r.status="pending",r.then(function(c){if(s.status==="pending"){var f=s;f.status="fulfilled",f.value=c}},function(c){if(s.status==="pending"){var f=s;f.status="rejected",f.reason=c}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,Jv(r),r}throw uu=s,lu}}var uu=null;function Zv(){if(uu===null)throw Error(i(459));var r=uu;return uu=null,r}function Jv(r){if(r===lu||r===xh)throw Error(i(483))}var es=!1;function Gp(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wp(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,callbacks:null})}function ts(r){return{lane:r,tag:0,payload:null,callback:null,next:null}}function ns(r,s,o){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,(Ze&2)!==0){var f=c.pending;return f===null?s.next=s:(s.next=f.next,f.next=s),c.pending=s,s=bh(r),jv(r,null,o),s}return wh(r,c,s,o),bh(r)}function cu(r,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var c=s.lanes;c&=r.pendingLanes,o|=c,s.lanes=o,Ul(r,o)}}function Yp(r,s){var o=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var f=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var T={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};g===null?f=g=T:g=g.next=T,o=o.next}while(o!==null);g===null?f=g=s:g=g.next=s}else f=g=s;o={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:c.shared,callbacks:c.callbacks},r.updateQueue=o;return}r=o.lastBaseUpdate,r===null?o.firstBaseUpdate=s:r.next=s,o.lastBaseUpdate=s}var $p=!1;function hu(){if($p){var r=Ao;if(r!==null)throw r}}function du(r,s,o,c){$p=!1;var f=r.updateQueue;es=!1;var g=f.firstBaseUpdate,T=f.lastBaseUpdate,S=f.shared.pending;if(S!==null){f.shared.pending=null;var x=S,q=x.next;x.next=null,T===null?g=q:T.next=q,T=x;var X=r.alternate;X!==null&&(X=X.updateQueue,S=X.lastBaseUpdate,S!==T&&(S===null?X.firstBaseUpdate=q:S.next=q,X.lastBaseUpdate=x))}if(g!==null){var J=f.baseState;T=0,X=q=x=null,S=g;do{var G=S.lane&-536870913,W=G!==S.lane;if(W?(He&G)===G:(c&G)===G){G!==0&&G===So&&($p=!0),X!==null&&(X=X.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});e:{var Se=r,ye=S;G=s;var it=o;switch(ye.tag){case 1:if(Se=ye.payload,typeof Se=="function"){J=Se.call(it,J,G);break e}J=Se;break e;case 3:Se.flags=Se.flags&-65537|128;case 0:if(Se=ye.payload,G=typeof Se=="function"?Se.call(it,J,G):Se,G==null)break e;J=y({},J,G);break e;case 2:es=!0}}G=S.callback,G!==null&&(r.flags|=64,W&&(r.flags|=8192),W=f.callbacks,W===null?f.callbacks=[G]:W.push(G))}else W={lane:G,tag:S.tag,payload:S.payload,callback:S.callback,next:null},X===null?(q=X=W,x=J):X=X.next=W,T|=G;if(S=S.next,S===null){if(S=f.shared.pending,S===null)break;W=S,S=W.next,W.next=null,f.lastBaseUpdate=W,f.shared.pending=null}}while(!0);X===null&&(x=J),f.baseState=x,f.firstBaseUpdate=q,f.lastBaseUpdate=X,g===null&&(f.shared.lanes=0),cs|=T,r.lanes=T,r.memoizedState=J}}function eE(r,s){if(typeof r!="function")throw Error(i(191,r));r.call(s)}function tE(r,s){var o=r.callbacks;if(o!==null)for(r.callbacks=null,r=0;r<o.length;r++)eE(o[r],s)}var Ro=ne(null),Dh=ne(0);function nE(r,s){r=Sr,se(Dh,r),se(Ro,s),Sr=r|s.baseLanes}function Kp(){se(Dh,Sr),se(Ro,Ro.current)}function Qp(){Sr=Dh.current,ue(Ro),ue(Dh)}var is=0,xe=null,tt=null,xt=null,kh=!1,Io=!1,Sa=!1,Ph=0,fu=0,Co=null,PC=0;function St(){throw Error(i(321))}function Xp(r,s){if(s===null)return!1;for(var o=0;o<s.length&&o<r.length;o++)if(!Pn(r[o],s[o]))return!1;return!0}function Zp(r,s,o,c,f,g){return is=g,xe=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Q.H=r===null||r.memoizedState===null?jE:FE,Sa=!1,g=o(c,f),Sa=!1,Io&&(g=rE(s,o,c,f)),iE(r),g}function iE(r){Q.H=Fh;var s=tt!==null&&tt.next!==null;if(is=0,xt=tt=xe=null,kh=!1,fu=0,Co=null,s)throw Error(i(300));r===null||Yt||(r=r.dependencies,r!==null&&Ih(r)&&(Yt=!0))}function rE(r,s,o,c){xe=r;var f=0;do{if(Io&&(Co=null),fu=0,Io=!1,25<=f)throw Error(i(301));if(f+=1,xt=tt=null,r.updateQueue!=null){var g=r.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}Q.H=zC,g=s(o,c)}while(Io);return g}function MC(){var r=Q.H,s=r.useState()[0];return s=typeof s.then=="function"?pu(s):s,r=r.useState()[0],(tt!==null?tt.memoizedState:null)!==r&&(xe.flags|=1024),s}function Jp(){var r=Ph!==0;return Ph=0,r}function em(r,s,o){s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~o}function tm(r){if(kh){for(r=r.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}kh=!1}is=0,xt=tt=xe=null,Io=!1,fu=Ph=0,Co=null}function Sn(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xt===null?xe.memoizedState=xt=r:xt=xt.next=r,xt}function Ot(){if(tt===null){var r=xe.alternate;r=r!==null?r.memoizedState:null}else r=tt.next;var s=xt===null?xe.memoizedState:xt.next;if(s!==null)xt=s,tt=r;else{if(r===null)throw xe.alternate===null?Error(i(467)):Error(i(310));tt=r,r={memoizedState:tt.memoizedState,baseState:tt.baseState,baseQueue:tt.baseQueue,queue:tt.queue,next:null},xt===null?xe.memoizedState=xt=r:xt=xt.next=r}return xt}function nm(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function pu(r){var s=fu;return fu+=1,Co===null&&(Co=[]),r=Xv(Co,r,s),s=xe,(xt===null?s.memoizedState:xt.next)===null&&(s=s.alternate,Q.H=s===null||s.memoizedState===null?jE:FE),r}function Mh(r){if(r!==null&&typeof r=="object"){if(typeof r.then=="function")return pu(r);if(r.$$typeof===te)return cn(r)}throw Error(i(438,String(r)))}function im(r){var s=null,o=xe.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var c=xe.alternate;c!==null&&(c=c.updateQueue,c!==null&&(c=c.memoCache,c!=null&&(s={data:c.data.map(function(f){return f.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=nm(),xe.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(r),c=0;c<r;c++)o[c]=k;return s.index++,o}function yr(r,s){return typeof s=="function"?s(r):s}function Vh(r){var s=Ot();return rm(s,tt,r)}function rm(r,s,o){var c=r.queue;if(c===null)throw Error(i(311));c.lastRenderedReducer=o;var f=r.baseQueue,g=c.pending;if(g!==null){if(f!==null){var T=f.next;f.next=g.next,g.next=T}s.baseQueue=f=g,c.pending=null}if(g=r.baseState,f===null)r.memoizedState=g;else{s=f.next;var S=T=null,x=null,q=s,X=!1;do{var J=q.lane&-536870913;if(J!==q.lane?(He&J)===J:(is&J)===J){var G=q.revertLane;if(G===0)x!==null&&(x=x.next={lane:0,revertLane:0,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null}),J===So&&(X=!0);else if((is&G)===G){q=q.next,G===So&&(X=!0);continue}else J={lane:0,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},x===null?(S=x=J,T=g):x=x.next=J,xe.lanes|=G,cs|=G;J=q.action,Sa&&o(g,J),g=q.hasEagerState?q.eagerState:o(g,J)}else G={lane:J,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},x===null?(S=x=G,T=g):x=x.next=G,xe.lanes|=J,cs|=J;q=q.next}while(q!==null&&q!==s);if(x===null?T=g:x.next=S,!Pn(g,r.memoizedState)&&(Yt=!0,X&&(o=Ao,o!==null)))throw o;r.memoizedState=g,r.baseState=T,r.baseQueue=x,c.lastRenderedState=g}return f===null&&(c.lanes=0),[r.memoizedState,c.dispatch]}function sm(r){var s=Ot(),o=s.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=r;var c=o.dispatch,f=o.pending,g=s.memoizedState;if(f!==null){o.pending=null;var T=f=f.next;do g=r(g,T.action),T=T.next;while(T!==f);Pn(g,s.memoizedState)||(Yt=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),o.lastRenderedState=g}return[g,c]}function sE(r,s,o){var c=xe,f=Ot(),g=$e;if(g){if(o===void 0)throw Error(i(407));o=o()}else o=s();var T=!Pn((tt||f).memoizedState,o);T&&(f.memoizedState=o,Yt=!0),f=f.queue;var S=lE.bind(null,c,f,r);if(mu(2048,8,S,[r]),f.getSnapshot!==s||T||xt!==null&&xt.memoizedState.tag&1){if(c.flags|=2048,No(9,Lh(),oE.bind(null,c,f,o,s),null),ot===null)throw Error(i(349));g||(is&124)!==0||aE(c,s,o)}return o}function aE(r,s,o){r.flags|=16384,r={getSnapshot:s,value:o},s=xe.updateQueue,s===null?(s=nm(),xe.updateQueue=s,s.stores=[r]):(o=s.stores,o===null?s.stores=[r]:o.push(r))}function oE(r,s,o,c){s.value=o,s.getSnapshot=c,uE(s)&&cE(r)}function lE(r,s,o){return o(function(){uE(s)&&cE(r)})}function uE(r){var s=r.getSnapshot;r=r.value;try{var o=s();return!Pn(r,o)}catch{return!0}}function cE(r){var s=Eo(r,2);s!==null&&Fn(s,r,2)}function am(r){var s=Sn();if(typeof r=="function"){var o=r;if(r=o(),Sa){Dn(!0);try{o()}finally{Dn(!1)}}}return s.memoizedState=s.baseState=r,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yr,lastRenderedState:r},s}function hE(r,s,o,c){return r.baseState=o,rm(r,tt,typeof c=="function"?c:yr)}function VC(r,s,o,c,f){if(jh(r))throw Error(i(485));if(r=s.action,r!==null){var g={payload:f,action:r,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(T){g.listeners.push(T)}};Q.T!==null?o(!0):g.isTransition=!1,c(g),o=s.pending,o===null?(g.next=s.pending=g,dE(s,g)):(g.next=o.next,s.pending=o.next=g)}}function dE(r,s){var o=s.action,c=s.payload,f=r.state;if(s.isTransition){var g=Q.T,T={};Q.T=T;try{var S=o(f,c),x=Q.S;x!==null&&x(T,S),fE(r,s,S)}catch(q){om(r,s,q)}finally{Q.T=g}}else try{g=o(f,c),fE(r,s,g)}catch(q){om(r,s,q)}}function fE(r,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(c){pE(r,s,c)},function(c){return om(r,s,c)}):pE(r,s,o)}function pE(r,s,o){s.status="fulfilled",s.value=o,mE(s),r.state=o,s=r.pending,s!==null&&(o=s.next,o===s?r.pending=null:(o=o.next,s.next=o,dE(r,o)))}function om(r,s,o){var c=r.pending;if(r.pending=null,c!==null){c=c.next;do s.status="rejected",s.reason=o,mE(s),s=s.next;while(s!==c)}r.action=null}function mE(r){r=r.listeners;for(var s=0;s<r.length;s++)(0,r[s])()}function gE(r,s){return s}function _E(r,s){if($e){var o=ot.formState;if(o!==null){e:{var c=xe;if($e){if(vt){t:{for(var f=vt,g=Vi;f.nodeType!==8;){if(!g){f=null;break t}if(f=di(f.nextSibling),f===null){f=null;break t}}g=f.data,f=g==="F!"||g==="F"?f:null}if(f){vt=di(f.nextSibling),c=f.data==="F!";break e}}Ea(c)}c=!1}c&&(s=o[0])}}return o=Sn(),o.memoizedState=o.baseState=s,c={pending:null,lanes:0,dispatch:null,lastRenderedReducer:gE,lastRenderedState:s},o.queue=c,o=VE.bind(null,xe,c),c.dispatch=o,c=am(!1),g=dm.bind(null,xe,!1,c.queue),c=Sn(),f={state:s,dispatch:null,action:r,pending:null},c.queue=f,o=VC.bind(null,xe,f,g,o),f.dispatch=o,c.memoizedState=r,[s,o,!1]}function yE(r){var s=Ot();return vE(s,tt,r)}function vE(r,s,o){if(s=rm(r,s,gE)[0],r=Vh(yr)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var c=pu(s)}catch(T){throw T===lu?xh:T}else c=s;s=Ot();var f=s.queue,g=f.dispatch;return o!==s.memoizedState&&(xe.flags|=2048,No(9,Lh(),LC.bind(null,f,o),null)),[c,g,r]}function LC(r,s){r.action=s}function EE(r){var s=Ot(),o=tt;if(o!==null)return vE(s,o,r);Ot(),s=s.memoizedState,o=Ot();var c=o.queue.dispatch;return o.memoizedState=r,[s,c,!1]}function No(r,s,o,c){return r={tag:r,create:o,deps:c,inst:s,next:null},s=xe.updateQueue,s===null&&(s=nm(),xe.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=r.next=r:(c=o.next,o.next=r,r.next=c,s.lastEffect=r),r}function Lh(){return{destroy:void 0,resource:void 0}}function TE(){return Ot().memoizedState}function Uh(r,s,o,c){var f=Sn();c=c===void 0?null:c,xe.flags|=r,f.memoizedState=No(1|s,Lh(),o,c)}function mu(r,s,o,c){var f=Ot();c=c===void 0?null:c;var g=f.memoizedState.inst;tt!==null&&c!==null&&Xp(c,tt.memoizedState.deps)?f.memoizedState=No(s,g,o,c):(xe.flags|=r,f.memoizedState=No(1|s,g,o,c))}function wE(r,s){Uh(8390656,8,r,s)}function bE(r,s){mu(2048,8,r,s)}function SE(r,s){return mu(4,2,r,s)}function AE(r,s){return mu(4,4,r,s)}function RE(r,s){if(typeof s=="function"){r=r();var o=s(r);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function IE(r,s,o){o=o!=null?o.concat([r]):null,mu(4,4,RE.bind(null,s,r),o)}function lm(){}function CE(r,s){var o=Ot();s=s===void 0?null:s;var c=o.memoizedState;return s!==null&&Xp(s,c[1])?c[0]:(o.memoizedState=[r,s],r)}function NE(r,s){var o=Ot();s=s===void 0?null:s;var c=o.memoizedState;if(s!==null&&Xp(s,c[1]))return c[0];if(c=r(),Sa){Dn(!0);try{r()}finally{Dn(!1)}}return o.memoizedState=[c,s],c}function um(r,s,o){return o===void 0||(is&1073741824)!==0?r.memoizedState=s:(r.memoizedState=o,r=D0(),xe.lanes|=r,cs|=r,o)}function xE(r,s,o,c){return Pn(o,s)?o:Ro.current!==null?(r=um(r,o,c),Pn(r,s)||(Yt=!0),r):(is&42)===0?(Yt=!0,r.memoizedState=o):(r=D0(),xe.lanes|=r,cs|=r,s)}function OE(r,s,o,c,f){var g=le.p;le.p=g!==0&&8>g?g:8;var T=Q.T,S={};Q.T=S,dm(r,!1,s,o);try{var x=f(),q=Q.S;if(q!==null&&q(S,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var X=kC(x,c);gu(r,s,X,jn(r))}else gu(r,s,c,jn(r))}catch(J){gu(r,s,{then:function(){},status:"rejected",reason:J},jn())}finally{le.p=g,Q.T=T}}function UC(){}function cm(r,s,o,c){if(r.tag!==5)throw Error(i(476));var f=DE(r).queue;OE(r,f,s,me,o===null?UC:function(){return kE(r),o(c)})}function DE(r){var s=r.memoizedState;if(s!==null)return s;s={memoizedState:me,baseState:me,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:yr,lastRenderedState:me},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:yr,lastRenderedState:o},next:null},r.memoizedState=s,r=r.alternate,r!==null&&(r.memoizedState=s),s}function kE(r){var s=DE(r).next.queue;gu(r,s,{},jn())}function hm(){return cn(Pu)}function PE(){return Ot().memoizedState}function ME(){return Ot().memoizedState}function jC(r){for(var s=r.return;s!==null;){switch(s.tag){case 24:case 3:var o=jn();r=ts(o);var c=ns(s,r,o);c!==null&&(Fn(c,s,o),cu(c,s,o)),s={cache:zp()},r.payload=s;return}s=s.return}}function FC(r,s,o){var c=jn();o={lane:c,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},jh(r)?LE(s,o):(o=Op(r,s,o,c),o!==null&&(Fn(o,r,c),UE(o,s,c)))}function VE(r,s,o){var c=jn();gu(r,s,o,c)}function gu(r,s,o,c){var f={lane:c,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(jh(r))LE(s,f);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var T=s.lastRenderedState,S=g(T,o);if(f.hasEagerState=!0,f.eagerState=S,Pn(S,T))return wh(r,s,f,0),ot===null&&Th(),!1}catch{}finally{}if(o=Op(r,s,f,c),o!==null)return Fn(o,r,c),UE(o,s,c),!0}return!1}function dm(r,s,o,c){if(c={lane:2,revertLane:qm(),action:c,hasEagerState:!1,eagerState:null,next:null},jh(r)){if(s)throw Error(i(479))}else s=Op(r,o,c,2),s!==null&&Fn(s,r,2)}function jh(r){var s=r.alternate;return r===xe||s!==null&&s===xe}function LE(r,s){Io=kh=!0;var o=r.pending;o===null?s.next=s:(s.next=o.next,o.next=s),r.pending=s}function UE(r,s,o){if((o&4194048)!==0){var c=s.lanes;c&=r.pendingLanes,o|=c,s.lanes=o,Ul(r,o)}}var Fh={readContext:cn,use:Mh,useCallback:St,useContext:St,useEffect:St,useImperativeHandle:St,useLayoutEffect:St,useInsertionEffect:St,useMemo:St,useReducer:St,useRef:St,useState:St,useDebugValue:St,useDeferredValue:St,useTransition:St,useSyncExternalStore:St,useId:St,useHostTransitionStatus:St,useFormState:St,useActionState:St,useOptimistic:St,useMemoCache:St,useCacheRefresh:St},jE={readContext:cn,use:Mh,useCallback:function(r,s){return Sn().memoizedState=[r,s===void 0?null:s],r},useContext:cn,useEffect:wE,useImperativeHandle:function(r,s,o){o=o!=null?o.concat([r]):null,Uh(4194308,4,RE.bind(null,s,r),o)},useLayoutEffect:function(r,s){return Uh(4194308,4,r,s)},useInsertionEffect:function(r,s){Uh(4,2,r,s)},useMemo:function(r,s){var o=Sn();s=s===void 0?null:s;var c=r();if(Sa){Dn(!0);try{r()}finally{Dn(!1)}}return o.memoizedState=[c,s],c},useReducer:function(r,s,o){var c=Sn();if(o!==void 0){var f=o(s);if(Sa){Dn(!0);try{o(s)}finally{Dn(!1)}}}else f=s;return c.memoizedState=c.baseState=f,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:f},c.queue=r,r=r.dispatch=FC.bind(null,xe,r),[c.memoizedState,r]},useRef:function(r){var s=Sn();return r={current:r},s.memoizedState=r},useState:function(r){r=am(r);var s=r.queue,o=VE.bind(null,xe,s);return s.dispatch=o,[r.memoizedState,o]},useDebugValue:lm,useDeferredValue:function(r,s){var o=Sn();return um(o,r,s)},useTransition:function(){var r=am(!1);return r=OE.bind(null,xe,r.queue,!0,!1),Sn().memoizedState=r,[!1,r]},useSyncExternalStore:function(r,s,o){var c=xe,f=Sn();if($e){if(o===void 0)throw Error(i(407));o=o()}else{if(o=s(),ot===null)throw Error(i(349));(He&124)!==0||aE(c,s,o)}f.memoizedState=o;var g={value:o,getSnapshot:s};return f.queue=g,wE(lE.bind(null,c,g,r),[r]),c.flags|=2048,No(9,Lh(),oE.bind(null,c,g,o,s),null),o},useId:function(){var r=Sn(),s=ot.identifierPrefix;if($e){var o=mr,c=pr;o=(c&~(1<<32-un(c)-1)).toString(32)+o,s="«"+s+"R"+o,o=Ph++,0<o&&(s+="H"+o.toString(32)),s+="»"}else o=PC++,s="«"+s+"r"+o.toString(32)+"»";return r.memoizedState=s},useHostTransitionStatus:hm,useFormState:_E,useActionState:_E,useOptimistic:function(r){var s=Sn();s.memoizedState=s.baseState=r;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=dm.bind(null,xe,!0,o),o.dispatch=s,[r,s]},useMemoCache:im,useCacheRefresh:function(){return Sn().memoizedState=jC.bind(null,xe)}},FE={readContext:cn,use:Mh,useCallback:CE,useContext:cn,useEffect:bE,useImperativeHandle:IE,useInsertionEffect:SE,useLayoutEffect:AE,useMemo:NE,useReducer:Vh,useRef:TE,useState:function(){return Vh(yr)},useDebugValue:lm,useDeferredValue:function(r,s){var o=Ot();return xE(o,tt.memoizedState,r,s)},useTransition:function(){var r=Vh(yr)[0],s=Ot().memoizedState;return[typeof r=="boolean"?r:pu(r),s]},useSyncExternalStore:sE,useId:PE,useHostTransitionStatus:hm,useFormState:yE,useActionState:yE,useOptimistic:function(r,s){var o=Ot();return hE(o,tt,r,s)},useMemoCache:im,useCacheRefresh:ME},zC={readContext:cn,use:Mh,useCallback:CE,useContext:cn,useEffect:bE,useImperativeHandle:IE,useInsertionEffect:SE,useLayoutEffect:AE,useMemo:NE,useReducer:sm,useRef:TE,useState:function(){return sm(yr)},useDebugValue:lm,useDeferredValue:function(r,s){var o=Ot();return tt===null?um(o,r,s):xE(o,tt.memoizedState,r,s)},useTransition:function(){var r=sm(yr)[0],s=Ot().memoizedState;return[typeof r=="boolean"?r:pu(r),s]},useSyncExternalStore:sE,useId:PE,useHostTransitionStatus:hm,useFormState:EE,useActionState:EE,useOptimistic:function(r,s){var o=Ot();return tt!==null?hE(o,tt,r,s):(o.baseState=r,[r,o.queue.dispatch])},useMemoCache:im,useCacheRefresh:ME},xo=null,_u=0;function zh(r){var s=_u;return _u+=1,xo===null&&(xo=[]),Xv(xo,r,s)}function yu(r,s){s=s.props.ref,r.ref=s!==void 0?s:null}function Bh(r,s){throw s.$$typeof===E?Error(i(525)):(r=Object.prototype.toString.call(s),Error(i(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r)))}function zE(r){var s=r._init;return s(r._payload)}function BE(r){function s(L,P){if(r){var H=L.deletions;H===null?(L.deletions=[P],L.flags|=16):H.push(P)}}function o(L,P){if(!r)return null;for(;P!==null;)s(L,P),P=P.sibling;return null}function c(L){for(var P=new Map;L!==null;)L.key!==null?P.set(L.key,L):P.set(L.index,L),L=L.sibling;return P}function f(L,P){return L=fr(L,P),L.index=0,L.sibling=null,L}function g(L,P,H){return L.index=H,r?(H=L.alternate,H!==null?(H=H.index,H<P?(L.flags|=67108866,P):H):(L.flags|=67108866,P)):(L.flags|=1048576,P)}function T(L){return r&&L.alternate===null&&(L.flags|=67108866),L}function S(L,P,H,Z){return P===null||P.tag!==6?(P=kp(H,L.mode,Z),P.return=L,P):(P=f(P,H),P.return=L,P)}function x(L,P,H,Z){var de=H.type;return de===C?X(L,P,H.props.children,Z,H.key):P!==null&&(P.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===R&&zE(de)===P.type)?(P=f(P,H.props),yu(P,H),P.return=L,P):(P=Sh(H.type,H.key,H.props,null,L.mode,Z),yu(P,H),P.return=L,P)}function q(L,P,H,Z){return P===null||P.tag!==4||P.stateNode.containerInfo!==H.containerInfo||P.stateNode.implementation!==H.implementation?(P=Pp(H,L.mode,Z),P.return=L,P):(P=f(P,H.children||[]),P.return=L,P)}function X(L,P,H,Z,de){return P===null||P.tag!==7?(P=ga(H,L.mode,Z,de),P.return=L,P):(P=f(P,H),P.return=L,P)}function J(L,P,H){if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return P=kp(""+P,L.mode,H),P.return=L,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case w:return H=Sh(P.type,P.key,P.props,null,L.mode,H),yu(H,P),H.return=L,H;case I:return P=Pp(P,L.mode,H),P.return=L,P;case R:var Z=P._init;return P=Z(P._payload),J(L,P,H)}if(_t(P)||F(P))return P=ga(P,L.mode,H,null),P.return=L,P;if(typeof P.then=="function")return J(L,zh(P),H);if(P.$$typeof===te)return J(L,Ch(L,P),H);Bh(L,P)}return null}function G(L,P,H,Z){var de=P!==null?P.key:null;if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return de!==null?null:S(L,P,""+H,Z);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case w:return H.key===de?x(L,P,H,Z):null;case I:return H.key===de?q(L,P,H,Z):null;case R:return de=H._init,H=de(H._payload),G(L,P,H,Z)}if(_t(H)||F(H))return de!==null?null:X(L,P,H,Z,null);if(typeof H.then=="function")return G(L,P,zh(H),Z);if(H.$$typeof===te)return G(L,P,Ch(L,H),Z);Bh(L,H)}return null}function W(L,P,H,Z,de){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return L=L.get(H)||null,S(P,L,""+Z,de);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case w:return L=L.get(Z.key===null?H:Z.key)||null,x(P,L,Z,de);case I:return L=L.get(Z.key===null?H:Z.key)||null,q(P,L,Z,de);case R:var ke=Z._init;return Z=ke(Z._payload),W(L,P,H,Z,de)}if(_t(Z)||F(Z))return L=L.get(H)||null,X(P,L,Z,de,null);if(typeof Z.then=="function")return W(L,P,H,zh(Z),de);if(Z.$$typeof===te)return W(L,P,H,Ch(P,Z),de);Bh(P,Z)}return null}function Se(L,P,H,Z){for(var de=null,ke=null,fe=P,Ee=P=0,Kt=null;fe!==null&&Ee<H.length;Ee++){fe.index>Ee?(Kt=fe,fe=null):Kt=fe.sibling;var Ge=G(L,fe,H[Ee],Z);if(Ge===null){fe===null&&(fe=Kt);break}r&&fe&&Ge.alternate===null&&s(L,fe),P=g(Ge,P,Ee),ke===null?de=Ge:ke.sibling=Ge,ke=Ge,fe=Kt}if(Ee===H.length)return o(L,fe),$e&&ya(L,Ee),de;if(fe===null){for(;Ee<H.length;Ee++)fe=J(L,H[Ee],Z),fe!==null&&(P=g(fe,P,Ee),ke===null?de=fe:ke.sibling=fe,ke=fe);return $e&&ya(L,Ee),de}for(fe=c(fe);Ee<H.length;Ee++)Kt=W(fe,L,Ee,H[Ee],Z),Kt!==null&&(r&&Kt.alternate!==null&&fe.delete(Kt.key===null?Ee:Kt.key),P=g(Kt,P,Ee),ke===null?de=Kt:ke.sibling=Kt,ke=Kt);return r&&fe.forEach(function(vs){return s(L,vs)}),$e&&ya(L,Ee),de}function ye(L,P,H,Z){if(H==null)throw Error(i(151));for(var de=null,ke=null,fe=P,Ee=P=0,Kt=null,Ge=H.next();fe!==null&&!Ge.done;Ee++,Ge=H.next()){fe.index>Ee?(Kt=fe,fe=null):Kt=fe.sibling;var vs=G(L,fe,Ge.value,Z);if(vs===null){fe===null&&(fe=Kt);break}r&&fe&&vs.alternate===null&&s(L,fe),P=g(vs,P,Ee),ke===null?de=vs:ke.sibling=vs,ke=vs,fe=Kt}if(Ge.done)return o(L,fe),$e&&ya(L,Ee),de;if(fe===null){for(;!Ge.done;Ee++,Ge=H.next())Ge=J(L,Ge.value,Z),Ge!==null&&(P=g(Ge,P,Ee),ke===null?de=Ge:ke.sibling=Ge,ke=Ge);return $e&&ya(L,Ee),de}for(fe=c(fe);!Ge.done;Ee++,Ge=H.next())Ge=W(fe,L,Ee,Ge.value,Z),Ge!==null&&(r&&Ge.alternate!==null&&fe.delete(Ge.key===null?Ee:Ge.key),P=g(Ge,P,Ee),ke===null?de=Ge:ke.sibling=Ge,ke=Ge);return r&&fe.forEach(function(BN){return s(L,BN)}),$e&&ya(L,Ee),de}function it(L,P,H,Z){if(typeof H=="object"&&H!==null&&H.type===C&&H.key===null&&(H=H.props.children),typeof H=="object"&&H!==null){switch(H.$$typeof){case w:e:{for(var de=H.key;P!==null;){if(P.key===de){if(de=H.type,de===C){if(P.tag===7){o(L,P.sibling),Z=f(P,H.props.children),Z.return=L,L=Z;break e}}else if(P.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===R&&zE(de)===P.type){o(L,P.sibling),Z=f(P,H.props),yu(Z,H),Z.return=L,L=Z;break e}o(L,P);break}else s(L,P);P=P.sibling}H.type===C?(Z=ga(H.props.children,L.mode,Z,H.key),Z.return=L,L=Z):(Z=Sh(H.type,H.key,H.props,null,L.mode,Z),yu(Z,H),Z.return=L,L=Z)}return T(L);case I:e:{for(de=H.key;P!==null;){if(P.key===de)if(P.tag===4&&P.stateNode.containerInfo===H.containerInfo&&P.stateNode.implementation===H.implementation){o(L,P.sibling),Z=f(P,H.children||[]),Z.return=L,L=Z;break e}else{o(L,P);break}else s(L,P);P=P.sibling}Z=Pp(H,L.mode,Z),Z.return=L,L=Z}return T(L);case R:return de=H._init,H=de(H._payload),it(L,P,H,Z)}if(_t(H))return Se(L,P,H,Z);if(F(H)){if(de=F(H),typeof de!="function")throw Error(i(150));return H=de.call(H),ye(L,P,H,Z)}if(typeof H.then=="function")return it(L,P,zh(H),Z);if(H.$$typeof===te)return it(L,P,Ch(L,H),Z);Bh(L,H)}return typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint"?(H=""+H,P!==null&&P.tag===6?(o(L,P.sibling),Z=f(P,H),Z.return=L,L=Z):(o(L,P),Z=kp(H,L.mode,Z),Z.return=L,L=Z),T(L)):o(L,P)}return function(L,P,H,Z){try{_u=0;var de=it(L,P,H,Z);return xo=null,de}catch(fe){if(fe===lu||fe===xh)throw fe;var ke=Mn(29,fe,null,L.mode);return ke.lanes=Z,ke.return=L,ke}finally{}}}var Oo=BE(!0),HE=BE(!1),ei=ne(null),Li=null;function rs(r){var s=r.alternate;se(Ut,Ut.current&1),se(ei,r),Li===null&&(s===null||Ro.current!==null||s.memoizedState!==null)&&(Li=r)}function qE(r){if(r.tag===22){if(se(Ut,Ut.current),se(ei,r),Li===null){var s=r.alternate;s!==null&&s.memoizedState!==null&&(Li=r)}}else ss()}function ss(){se(Ut,Ut.current),se(ei,ei.current)}function vr(r){ue(ei),Li===r&&(Li=null),ue(Ut)}var Ut=ne(0);function Hh(r){for(var s=r;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||ng(o)))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}function fm(r,s,o,c){s=r.memoizedState,o=o(c,s),o=o==null?s:y({},s,o),r.memoizedState=o,r.lanes===0&&(r.updateQueue.baseState=o)}var pm={enqueueSetState:function(r,s,o){r=r._reactInternals;var c=jn(),f=ts(c);f.payload=s,o!=null&&(f.callback=o),s=ns(r,f,c),s!==null&&(Fn(s,r,c),cu(s,r,c))},enqueueReplaceState:function(r,s,o){r=r._reactInternals;var c=jn(),f=ts(c);f.tag=1,f.payload=s,o!=null&&(f.callback=o),s=ns(r,f,c),s!==null&&(Fn(s,r,c),cu(s,r,c))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var o=jn(),c=ts(o);c.tag=2,s!=null&&(c.callback=s),s=ns(r,c,o),s!==null&&(Fn(s,r,o),cu(s,r,o))}};function GE(r,s,o,c,f,g,T){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,g,T):s.prototype&&s.prototype.isPureReactComponent?!eu(o,c)||!eu(f,g):!0}function WE(r,s,o,c){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,c),s.state!==r&&pm.enqueueReplaceState(s,s.state,null)}function Aa(r,s){var o=s;if("ref"in s){o={};for(var c in s)c!=="ref"&&(o[c]=s[c])}if(r=r.defaultProps){o===s&&(o=y({},o));for(var f in r)o[f]===void 0&&(o[f]=r[f])}return o}var qh=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)};function YE(r){qh(r)}function $E(r){console.error(r)}function KE(r){qh(r)}function Gh(r,s){try{var o=r.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(c){setTimeout(function(){throw c})}}function QE(r,s,o){try{var c=r.onCaughtError;c(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function mm(r,s,o){return o=ts(o),o.tag=3,o.payload={element:null},o.callback=function(){Gh(r,s)},o}function XE(r){return r=ts(r),r.tag=3,r}function ZE(r,s,o,c){var f=o.type.getDerivedStateFromError;if(typeof f=="function"){var g=c.value;r.payload=function(){return f(g)},r.callback=function(){QE(s,o,c)}}var T=o.stateNode;T!==null&&typeof T.componentDidCatch=="function"&&(r.callback=function(){QE(s,o,c),typeof f!="function"&&(hs===null?hs=new Set([this]):hs.add(this));var S=c.stack;this.componentDidCatch(c.value,{componentStack:S!==null?S:""})})}function BC(r,s,o,c,f){if(o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){if(s=o.alternate,s!==null&&su(s,o,f,!0),o=ei.current,o!==null){switch(o.tag){case 13:return Li===null?jm():o.alternate===null&&Et===0&&(Et=3),o.flags&=-257,o.flags|=65536,o.lanes=f,c===qp?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([c]):s.add(c),zm(r,c,f)),!1;case 22:return o.flags|=65536,c===qp?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([c])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([c]):o.add(c)),zm(r,c,f)),!1}throw Error(i(435,o.tag))}return zm(r,c,f),jm(),!1}if($e)return s=ei.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=f,c!==Lp&&(r=Error(i(422),{cause:c}),ru(Qn(r,o)))):(c!==Lp&&(s=Error(i(423),{cause:c}),ru(Qn(s,o))),r=r.current.alternate,r.flags|=65536,f&=-f,r.lanes|=f,c=Qn(c,o),f=mm(r.stateNode,c,f),Yp(r,f),Et!==4&&(Et=2)),!1;var g=Error(i(520),{cause:c});if(g=Qn(g,o),Au===null?Au=[g]:Au.push(g),Et!==4&&(Et=2),s===null)return!0;c=Qn(c,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,r=f&-f,o.lanes|=r,r=mm(o.stateNode,c,r),Yp(o,r),!1;case 1:if(s=o.type,g=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(hs===null||!hs.has(g))))return o.flags|=65536,f&=-f,o.lanes|=f,f=XE(f),ZE(f,r,o,c),Yp(o,f),!1}o=o.return}while(o!==null);return!1}var JE=Error(i(461)),Yt=!1;function rn(r,s,o,c){s.child=r===null?HE(s,null,o,c):Oo(s,r.child,o,c)}function e0(r,s,o,c,f){o=o.render;var g=s.ref;if("ref"in c){var T={};for(var S in c)S!=="ref"&&(T[S]=c[S])}else T=c;return wa(s),c=Zp(r,s,o,T,g,f),S=Jp(),r!==null&&!Yt?(em(r,s,f),Er(r,s,f)):($e&&S&&Mp(s),s.flags|=1,rn(r,s,c,f),s.child)}function t0(r,s,o,c,f){if(r===null){var g=o.type;return typeof g=="function"&&!Dp(g)&&g.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=g,n0(r,s,g,c,f)):(r=Sh(o.type,null,c,s,s.mode,f),r.ref=s.ref,r.return=s,s.child=r)}if(g=r.child,!bm(r,f)){var T=g.memoizedProps;if(o=o.compare,o=o!==null?o:eu,o(T,c)&&r.ref===s.ref)return Er(r,s,f)}return s.flags|=1,r=fr(g,c),r.ref=s.ref,r.return=s,s.child=r}function n0(r,s,o,c,f){if(r!==null){var g=r.memoizedProps;if(eu(g,c)&&r.ref===s.ref)if(Yt=!1,s.pendingProps=c=g,bm(r,f))(r.flags&131072)!==0&&(Yt=!0);else return s.lanes=r.lanes,Er(r,s,f)}return gm(r,s,o,c,f)}function i0(r,s,o){var c=s.pendingProps,f=c.children,g=r!==null?r.memoizedState:null;if(c.mode==="hidden"){if((s.flags&128)!==0){if(c=g!==null?g.baseLanes|o:o,r!==null){for(f=s.child=r.child,g=0;f!==null;)g=g|f.lanes|f.childLanes,f=f.sibling;s.childLanes=g&~c}else s.childLanes=0,s.child=null;return r0(r,s,c,o)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},r!==null&&Nh(s,g!==null?g.cachePool:null),g!==null?nE(s,g):Kp(),qE(s);else return s.lanes=s.childLanes=536870912,r0(r,s,g!==null?g.baseLanes|o:o,o)}else g!==null?(Nh(s,g.cachePool),nE(s,g),ss(),s.memoizedState=null):(r!==null&&Nh(s,null),Kp(),ss());return rn(r,s,f,o),s.child}function r0(r,s,o,c){var f=Hp();return f=f===null?null:{parent:Lt._currentValue,pool:f},s.memoizedState={baseLanes:o,cachePool:f},r!==null&&Nh(s,null),Kp(),qE(s),r!==null&&su(r,s,c,!0),null}function Wh(r,s){var o=s.ref;if(o===null)r!==null&&r.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(i(284));(r===null||r.ref!==o)&&(s.flags|=4194816)}}function gm(r,s,o,c,f){return wa(s),o=Zp(r,s,o,c,void 0,f),c=Jp(),r!==null&&!Yt?(em(r,s,f),Er(r,s,f)):($e&&c&&Mp(s),s.flags|=1,rn(r,s,o,f),s.child)}function s0(r,s,o,c,f,g){return wa(s),s.updateQueue=null,o=rE(s,c,o,f),iE(r),c=Jp(),r!==null&&!Yt?(em(r,s,g),Er(r,s,g)):($e&&c&&Mp(s),s.flags|=1,rn(r,s,o,g),s.child)}function a0(r,s,o,c,f){if(wa(s),s.stateNode===null){var g=To,T=o.contextType;typeof T=="object"&&T!==null&&(g=cn(T)),g=new o(c,g),s.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=pm,s.stateNode=g,g._reactInternals=s,g=s.stateNode,g.props=c,g.state=s.memoizedState,g.refs={},Gp(s),T=o.contextType,g.context=typeof T=="object"&&T!==null?cn(T):To,g.state=s.memoizedState,T=o.getDerivedStateFromProps,typeof T=="function"&&(fm(s,o,T,c),g.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(T=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),T!==g.state&&pm.enqueueReplaceState(g,g.state,null),du(s,c,g,f),hu(),g.state=s.memoizedState),typeof g.componentDidMount=="function"&&(s.flags|=4194308),c=!0}else if(r===null){g=s.stateNode;var S=s.memoizedProps,x=Aa(o,S);g.props=x;var q=g.context,X=o.contextType;T=To,typeof X=="object"&&X!==null&&(T=cn(X));var J=o.getDerivedStateFromProps;X=typeof J=="function"||typeof g.getSnapshotBeforeUpdate=="function",S=s.pendingProps!==S,X||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(S||q!==T)&&WE(s,g,c,T),es=!1;var G=s.memoizedState;g.state=G,du(s,c,g,f),hu(),q=s.memoizedState,S||G!==q||es?(typeof J=="function"&&(fm(s,o,J,c),q=s.memoizedState),(x=es||GE(s,o,x,c,G,q,T))?(X||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(s.flags|=4194308)):(typeof g.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=q),g.props=c,g.state=q,g.context=T,c=x):(typeof g.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{g=s.stateNode,Wp(r,s),T=s.memoizedProps,X=Aa(o,T),g.props=X,J=s.pendingProps,G=g.context,q=o.contextType,x=To,typeof q=="object"&&q!==null&&(x=cn(q)),S=o.getDerivedStateFromProps,(q=typeof S=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(T!==J||G!==x)&&WE(s,g,c,x),es=!1,G=s.memoizedState,g.state=G,du(s,c,g,f),hu();var W=s.memoizedState;T!==J||G!==W||es||r!==null&&r.dependencies!==null&&Ih(r.dependencies)?(typeof S=="function"&&(fm(s,o,S,c),W=s.memoizedState),(X=es||GE(s,o,X,c,G,W,x)||r!==null&&r.dependencies!==null&&Ih(r.dependencies))?(q||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(c,W,x),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(c,W,x)),typeof g.componentDidUpdate=="function"&&(s.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof g.componentDidUpdate!="function"||T===r.memoizedProps&&G===r.memoizedState||(s.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||T===r.memoizedProps&&G===r.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=W),g.props=c,g.state=W,g.context=x,c=X):(typeof g.componentDidUpdate!="function"||T===r.memoizedProps&&G===r.memoizedState||(s.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||T===r.memoizedProps&&G===r.memoizedState||(s.flags|=1024),c=!1)}return g=c,Wh(r,s),c=(s.flags&128)!==0,g||c?(g=s.stateNode,o=c&&typeof o.getDerivedStateFromError!="function"?null:g.render(),s.flags|=1,r!==null&&c?(s.child=Oo(s,r.child,null,f),s.child=Oo(s,null,o,f)):rn(r,s,o,f),s.memoizedState=g.state,r=s.child):r=Er(r,s,f),r}function o0(r,s,o,c){return iu(),s.flags|=256,rn(r,s,o,c),s.child}var _m={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ym(r){return{baseLanes:r,cachePool:$v()}}function vm(r,s,o){return r=r!==null?r.childLanes&~o:0,s&&(r|=ti),r}function l0(r,s,o){var c=s.pendingProps,f=!1,g=(s.flags&128)!==0,T;if((T=g)||(T=r!==null&&r.memoizedState===null?!1:(Ut.current&2)!==0),T&&(f=!0,s.flags&=-129),T=(s.flags&32)!==0,s.flags&=-33,r===null){if($e){if(f?rs(s):ss(),$e){var S=vt,x;if(x=S){e:{for(x=S,S=Vi;x.nodeType!==8;){if(!S){S=null;break e}if(x=di(x.nextSibling),x===null){S=null;break e}}S=x}S!==null?(s.memoizedState={dehydrated:S,treeContext:_a!==null?{id:pr,overflow:mr}:null,retryLane:536870912,hydrationErrors:null},x=Mn(18,null,null,0),x.stateNode=S,x.return=s,s.child=x,Tn=s,vt=null,x=!0):x=!1}x||Ea(s)}if(S=s.memoizedState,S!==null&&(S=S.dehydrated,S!==null))return ng(S)?s.lanes=32:s.lanes=536870912,null;vr(s)}return S=c.children,c=c.fallback,f?(ss(),f=s.mode,S=Yh({mode:"hidden",children:S},f),c=ga(c,f,o,null),S.return=s,c.return=s,S.sibling=c,s.child=S,f=s.child,f.memoizedState=ym(o),f.childLanes=vm(r,T,o),s.memoizedState=_m,c):(rs(s),Em(s,S))}if(x=r.memoizedState,x!==null&&(S=x.dehydrated,S!==null)){if(g)s.flags&256?(rs(s),s.flags&=-257,s=Tm(r,s,o)):s.memoizedState!==null?(ss(),s.child=r.child,s.flags|=128,s=null):(ss(),f=c.fallback,S=s.mode,c=Yh({mode:"visible",children:c.children},S),f=ga(f,S,o,null),f.flags|=2,c.return=s,f.return=s,c.sibling=f,s.child=c,Oo(s,r.child,null,o),c=s.child,c.memoizedState=ym(o),c.childLanes=vm(r,T,o),s.memoizedState=_m,s=f);else if(rs(s),ng(S)){if(T=S.nextSibling&&S.nextSibling.dataset,T)var q=T.dgst;T=q,c=Error(i(419)),c.stack="",c.digest=T,ru({value:c,source:null,stack:null}),s=Tm(r,s,o)}else if(Yt||su(r,s,o,!1),T=(o&r.childLanes)!==0,Yt||T){if(T=ot,T!==null&&(c=o&-o,c=(c&42)!==0?1:Wr(c),c=(c&(T.suspendedLanes|o))!==0?0:c,c!==0&&c!==x.retryLane))throw x.retryLane=c,Eo(r,c),Fn(T,r,c),JE;S.data==="$?"||jm(),s=Tm(r,s,o)}else S.data==="$?"?(s.flags|=192,s.child=r.child,s=null):(r=x.treeContext,vt=di(S.nextSibling),Tn=s,$e=!0,va=null,Vi=!1,r!==null&&(Zn[Jn++]=pr,Zn[Jn++]=mr,Zn[Jn++]=_a,pr=r.id,mr=r.overflow,_a=s),s=Em(s,c.children),s.flags|=4096);return s}return f?(ss(),f=c.fallback,S=s.mode,x=r.child,q=x.sibling,c=fr(x,{mode:"hidden",children:c.children}),c.subtreeFlags=x.subtreeFlags&65011712,q!==null?f=fr(q,f):(f=ga(f,S,o,null),f.flags|=2),f.return=s,c.return=s,c.sibling=f,s.child=c,c=f,f=s.child,S=r.child.memoizedState,S===null?S=ym(o):(x=S.cachePool,x!==null?(q=Lt._currentValue,x=x.parent!==q?{parent:q,pool:q}:x):x=$v(),S={baseLanes:S.baseLanes|o,cachePool:x}),f.memoizedState=S,f.childLanes=vm(r,T,o),s.memoizedState=_m,c):(rs(s),o=r.child,r=o.sibling,o=fr(o,{mode:"visible",children:c.children}),o.return=s,o.sibling=null,r!==null&&(T=s.deletions,T===null?(s.deletions=[r],s.flags|=16):T.push(r)),s.child=o,s.memoizedState=null,o)}function Em(r,s){return s=Yh({mode:"visible",children:s},r.mode),s.return=r,r.child=s}function Yh(r,s){return r=Mn(22,r,null,s),r.lanes=0,r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},r}function Tm(r,s,o){return Oo(s,r.child,null,o),r=Em(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function u0(r,s,o){r.lanes|=s;var c=r.alternate;c!==null&&(c.lanes|=s),jp(r.return,s,o)}function wm(r,s,o,c,f){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:f}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=o,g.tailMode=f)}function c0(r,s,o){var c=s.pendingProps,f=c.revealOrder,g=c.tail;if(rn(r,s,c.children,o),c=Ut.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&u0(r,o,s);else if(r.tag===19)u0(r,o,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}switch(se(Ut,c),f){case"forwards":for(o=s.child,f=null;o!==null;)r=o.alternate,r!==null&&Hh(r)===null&&(f=o),o=o.sibling;o=f,o===null?(f=s.child,s.child=null):(f=o.sibling,o.sibling=null),wm(s,!1,f,o,g);break;case"backwards":for(o=null,f=s.child,s.child=null;f!==null;){if(r=f.alternate,r!==null&&Hh(r)===null){s.child=f;break}r=f.sibling,f.sibling=o,o=f,f=r}wm(s,!0,o,null,g);break;case"together":wm(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Er(r,s,o){if(r!==null&&(s.dependencies=r.dependencies),cs|=s.lanes,(o&s.childLanes)===0)if(r!==null){if(su(r,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(r!==null&&s.child!==r.child)throw Error(i(153));if(s.child!==null){for(r=s.child,o=fr(r,r.pendingProps),s.child=o,o.return=s;r.sibling!==null;)r=r.sibling,o=o.sibling=fr(r,r.pendingProps),o.return=s;o.sibling=null}return s.child}function bm(r,s){return(r.lanes&s)!==0?!0:(r=r.dependencies,!!(r!==null&&Ih(r)))}function HC(r,s,o){switch(s.tag){case 3:at(s,s.stateNode.containerInfo),Jr(s,Lt,r.memoizedState.cache),iu();break;case 27:case 5:Gr(s);break;case 4:at(s,s.stateNode.containerInfo);break;case 10:Jr(s,s.type,s.memoizedProps.value);break;case 13:var c=s.memoizedState;if(c!==null)return c.dehydrated!==null?(rs(s),s.flags|=128,null):(o&s.child.childLanes)!==0?l0(r,s,o):(rs(s),r=Er(r,s,o),r!==null?r.sibling:null);rs(s);break;case 19:var f=(r.flags&128)!==0;if(c=(o&s.childLanes)!==0,c||(su(r,s,o,!1),c=(o&s.childLanes)!==0),f){if(c)return c0(r,s,o);s.flags|=128}if(f=s.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),se(Ut,Ut.current),c)break;return null;case 22:case 23:return s.lanes=0,i0(r,s,o);case 24:Jr(s,Lt,r.memoizedState.cache)}return Er(r,s,o)}function h0(r,s,o){if(r!==null)if(r.memoizedProps!==s.pendingProps)Yt=!0;else{if(!bm(r,o)&&(s.flags&128)===0)return Yt=!1,HC(r,s,o);Yt=(r.flags&131072)!==0}else Yt=!1,$e&&(s.flags&1048576)!==0&&zv(s,Rh,s.index);switch(s.lanes=0,s.tag){case 16:e:{r=s.pendingProps;var c=s.elementType,f=c._init;if(c=f(c._payload),s.type=c,typeof c=="function")Dp(c)?(r=Aa(c,r),s.tag=1,s=a0(null,s,c,r,o)):(s.tag=0,s=gm(null,s,c,r,o));else{if(c!=null){if(f=c.$$typeof,f===re){s.tag=11,s=e0(null,s,c,r,o);break e}else if(f===M){s.tag=14,s=t0(null,s,c,r,o);break e}}throw s=en(c)||c,Error(i(306,s,""))}}return s;case 0:return gm(r,s,s.type,s.pendingProps,o);case 1:return c=s.type,f=Aa(c,s.pendingProps),a0(r,s,c,f,o);case 3:e:{if(at(s,s.stateNode.containerInfo),r===null)throw Error(i(387));c=s.pendingProps;var g=s.memoizedState;f=g.element,Wp(r,s),du(s,c,null,o);var T=s.memoizedState;if(c=T.cache,Jr(s,Lt,c),c!==g.cache&&Fp(s,[Lt],o,!0),hu(),c=T.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:T.cache},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){s=o0(r,s,c,o);break e}else if(c!==f){f=Qn(Error(i(424)),s),ru(f),s=o0(r,s,c,o);break e}else{switch(r=s.stateNode.containerInfo,r.nodeType){case 9:r=r.body;break;default:r=r.nodeName==="HTML"?r.ownerDocument.body:r}for(vt=di(r.firstChild),Tn=s,$e=!0,va=null,Vi=!0,o=HE(s,null,c,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(iu(),c===f){s=Er(r,s,o);break e}rn(r,s,c,o)}s=s.child}return s;case 26:return Wh(r,s),r===null?(o=mT(s.type,null,s.pendingProps,null))?s.memoizedState=o:$e||(o=s.type,r=s.pendingProps,c=od(Ae.current).createElement(o),c[Pt]=s,c[Ct]=r,an(c,o,r),bt(c),s.stateNode=c):s.memoizedState=mT(s.type,r.memoizedProps,s.pendingProps,r.memoizedState),null;case 27:return Gr(s),r===null&&$e&&(c=s.stateNode=dT(s.type,s.pendingProps,Ae.current),Tn=s,Vi=!0,f=vt,ps(s.type)?(ig=f,vt=di(c.firstChild)):vt=f),rn(r,s,s.pendingProps.children,o),Wh(r,s),r===null&&(s.flags|=4194304),s.child;case 5:return r===null&&$e&&((f=c=vt)&&(c=_N(c,s.type,s.pendingProps,Vi),c!==null?(s.stateNode=c,Tn=s,vt=di(c.firstChild),Vi=!1,f=!0):f=!1),f||Ea(s)),Gr(s),f=s.type,g=s.pendingProps,T=r!==null?r.memoizedProps:null,c=g.children,Jm(f,g)?c=null:T!==null&&Jm(f,T)&&(s.flags|=32),s.memoizedState!==null&&(f=Zp(r,s,MC,null,null,o),Pu._currentValue=f),Wh(r,s),rn(r,s,c,o),s.child;case 6:return r===null&&$e&&((r=o=vt)&&(o=yN(o,s.pendingProps,Vi),o!==null?(s.stateNode=o,Tn=s,vt=null,r=!0):r=!1),r||Ea(s)),null;case 13:return l0(r,s,o);case 4:return at(s,s.stateNode.containerInfo),c=s.pendingProps,r===null?s.child=Oo(s,null,c,o):rn(r,s,c,o),s.child;case 11:return e0(r,s,s.type,s.pendingProps,o);case 7:return rn(r,s,s.pendingProps,o),s.child;case 8:return rn(r,s,s.pendingProps.children,o),s.child;case 12:return rn(r,s,s.pendingProps.children,o),s.child;case 10:return c=s.pendingProps,Jr(s,s.type,c.value),rn(r,s,c.children,o),s.child;case 9:return f=s.type._context,c=s.pendingProps.children,wa(s),f=cn(f),c=c(f),s.flags|=1,rn(r,s,c,o),s.child;case 14:return t0(r,s,s.type,s.pendingProps,o);case 15:return n0(r,s,s.type,s.pendingProps,o);case 19:return c0(r,s,o);case 31:return c=s.pendingProps,o=s.mode,c={mode:c.mode,children:c.children},r===null?(o=Yh(c,o),o.ref=s.ref,s.child=o,o.return=s,s=o):(o=fr(r.child,c),o.ref=s.ref,s.child=o,o.return=s,s=o),s;case 22:return i0(r,s,o);case 24:return wa(s),c=cn(Lt),r===null?(f=Hp(),f===null&&(f=ot,g=zp(),f.pooledCache=g,g.refCount++,g!==null&&(f.pooledCacheLanes|=o),f=g),s.memoizedState={parent:c,cache:f},Gp(s),Jr(s,Lt,f)):((r.lanes&o)!==0&&(Wp(r,s),du(s,null,null,o),hu()),f=r.memoizedState,g=s.memoizedState,f.parent!==c?(f={parent:c,cache:c},s.memoizedState=f,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=f),Jr(s,Lt,c)):(c=g.cache,Jr(s,Lt,c),c!==f.cache&&Fp(s,[Lt],o,!0))),rn(r,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(i(156,s.tag))}function Tr(r){r.flags|=4}function d0(r,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)r.flags&=-16777217;else if(r.flags|=16777216,!ET(s)){if(s=ei.current,s!==null&&((He&4194048)===He?Li!==null:(He&62914560)!==He&&(He&536870912)===0||s!==Li))throw uu=qp,Kv;r.flags|=8192}}function $h(r,s){s!==null&&(r.flags|=4),r.flags&16384&&(s=r.tag!==22?Vl():536870912,r.lanes|=s,Mo|=s)}function vu(r,s){if(!$e)switch(r.tailMode){case"hidden":s=r.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?r.tail=null:o.sibling=null;break;case"collapsed":o=r.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function gt(r){var s=r.alternate!==null&&r.alternate.child===r.child,o=0,c=0;if(s)for(var f=r.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags&65011712,c|=f.flags&65011712,f.return=r,f=f.sibling;else for(f=r.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=r,f=f.sibling;return r.subtreeFlags|=c,r.childLanes=o,s}function qC(r,s,o){var c=s.pendingProps;switch(Vp(s),s.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gt(s),null;case 1:return gt(s),null;case 3:return o=s.stateNode,c=null,r!==null&&(c=r.memoizedState.cache),s.memoizedState.cache!==c&&(s.flags|=2048),_r(Lt),Si(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(r===null||r.child===null)&&(nu(s)?Tr(s):r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,qv())),gt(s),null;case 26:return o=s.memoizedState,r===null?(Tr(s),o!==null?(gt(s),d0(s,o)):(gt(s),s.flags&=-16777217)):o?o!==r.memoizedState?(Tr(s),gt(s),d0(s,o)):(gt(s),s.flags&=-16777217):(r.memoizedProps!==c&&Tr(s),gt(s),s.flags&=-16777217),null;case 27:er(s),o=Ae.current;var f=s.type;if(r!==null&&s.stateNode!=null)r.memoizedProps!==c&&Tr(s);else{if(!c){if(s.stateNode===null)throw Error(i(166));return gt(s),null}r=ge.current,nu(s)?Bv(s):(r=dT(f,c,o),s.stateNode=r,Tr(s))}return gt(s),null;case 5:if(er(s),o=s.type,r!==null&&s.stateNode!=null)r.memoizedProps!==c&&Tr(s);else{if(!c){if(s.stateNode===null)throw Error(i(166));return gt(s),null}if(r=ge.current,nu(s))Bv(s);else{switch(f=od(Ae.current),r){case 1:r=f.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:r=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":r=f.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":r=f.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":r=f.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof c.is=="string"?f.createElement("select",{is:c.is}):f.createElement("select"),c.multiple?r.multiple=!0:c.size&&(r.size=c.size);break;default:r=typeof c.is=="string"?f.createElement(o,{is:c.is}):f.createElement(o)}}r[Pt]=s,r[Ct]=c;e:for(f=s.child;f!==null;){if(f.tag===5||f.tag===6)r.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===s)break e;for(;f.sibling===null;){if(f.return===null||f.return===s)break e;f=f.return}f.sibling.return=f.return,f=f.sibling}s.stateNode=r;e:switch(an(r,o,c),o){case"button":case"input":case"select":case"textarea":r=!!c.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Tr(s)}}return gt(s),s.flags&=-16777217,null;case 6:if(r&&s.stateNode!=null)r.memoizedProps!==c&&Tr(s);else{if(typeof c!="string"&&s.stateNode===null)throw Error(i(166));if(r=Ae.current,nu(s)){if(r=s.stateNode,o=s.memoizedProps,c=null,f=Tn,f!==null)switch(f.tag){case 27:case 5:c=f.memoizedProps}r[Pt]=s,r=!!(r.nodeValue===o||c!==null&&c.suppressHydrationWarning===!0||sT(r.nodeValue,o)),r||Ea(s)}else r=od(r).createTextNode(c),r[Pt]=s,s.stateNode=r}return gt(s),null;case 13:if(c=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(f=nu(s),c!==null&&c.dehydrated!==null){if(r===null){if(!f)throw Error(i(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(i(317));f[Pt]=s}else iu(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;gt(s),f=!1}else f=qv(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=f),f=!0;if(!f)return s.flags&256?(vr(s),s):(vr(s),null)}if(vr(s),(s.flags&128)!==0)return s.lanes=o,s;if(o=c!==null,r=r!==null&&r.memoizedState!==null,o){c=s.child,f=null,c.alternate!==null&&c.alternate.memoizedState!==null&&c.alternate.memoizedState.cachePool!==null&&(f=c.alternate.memoizedState.cachePool.pool);var g=null;c.memoizedState!==null&&c.memoizedState.cachePool!==null&&(g=c.memoizedState.cachePool.pool),g!==f&&(c.flags|=2048)}return o!==r&&o&&(s.child.flags|=8192),$h(s,s.updateQueue),gt(s),null;case 4:return Si(),r===null&&$m(s.stateNode.containerInfo),gt(s),null;case 10:return _r(s.type),gt(s),null;case 19:if(ue(Ut),f=s.memoizedState,f===null)return gt(s),null;if(c=(s.flags&128)!==0,g=f.rendering,g===null)if(c)vu(f,!1);else{if(Et!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(g=Hh(r),g!==null){for(s.flags|=128,vu(f,!1),r=g.updateQueue,s.updateQueue=r,$h(s,r),s.subtreeFlags=0,r=o,o=s.child;o!==null;)Fv(o,r),o=o.sibling;return se(Ut,Ut.current&1|2),s.child}r=r.sibling}f.tail!==null&&qn()>Xh&&(s.flags|=128,c=!0,vu(f,!1),s.lanes=4194304)}else{if(!c)if(r=Hh(g),r!==null){if(s.flags|=128,c=!0,r=r.updateQueue,s.updateQueue=r,$h(s,r),vu(f,!0),f.tail===null&&f.tailMode==="hidden"&&!g.alternate&&!$e)return gt(s),null}else 2*qn()-f.renderingStartTime>Xh&&o!==536870912&&(s.flags|=128,c=!0,vu(f,!1),s.lanes=4194304);f.isBackwards?(g.sibling=s.child,s.child=g):(r=f.last,r!==null?r.sibling=g:s.child=g,f.last=g)}return f.tail!==null?(s=f.tail,f.rendering=s,f.tail=s.sibling,f.renderingStartTime=qn(),s.sibling=null,r=Ut.current,se(Ut,c?r&1|2:r&1),s):(gt(s),null);case 22:case 23:return vr(s),Qp(),c=s.memoizedState!==null,r!==null?r.memoizedState!==null!==c&&(s.flags|=8192):c&&(s.flags|=8192),c?(o&536870912)!==0&&(s.flags&128)===0&&(gt(s),s.subtreeFlags&6&&(s.flags|=8192)):gt(s),o=s.updateQueue,o!==null&&$h(s,o.retryQueue),o=null,r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),c=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(c=s.memoizedState.cachePool.pool),c!==o&&(s.flags|=2048),r!==null&&ue(ba),null;case 24:return o=null,r!==null&&(o=r.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),_r(Lt),gt(s),null;case 25:return null;case 30:return null}throw Error(i(156,s.tag))}function GC(r,s){switch(Vp(s),s.tag){case 1:return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return _r(Lt),Si(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 26:case 27:case 5:return er(s),null;case 13:if(vr(s),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(i(340));iu()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return ue(Ut),null;case 4:return Si(),null;case 10:return _r(s.type),null;case 22:case 23:return vr(s),Qp(),r!==null&&ue(ba),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 24:return _r(Lt),null;case 25:return null;default:return null}}function f0(r,s){switch(Vp(s),s.tag){case 3:_r(Lt),Si();break;case 26:case 27:case 5:er(s);break;case 4:Si();break;case 13:vr(s);break;case 19:ue(Ut);break;case 10:_r(s.type);break;case 22:case 23:vr(s),Qp(),r!==null&&ue(ba);break;case 24:_r(Lt)}}function Eu(r,s){try{var o=s.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var f=c.next;o=f;do{if((o.tag&r)===r){c=void 0;var g=o.create,T=o.inst;c=g(),T.destroy=c}o=o.next}while(o!==f)}}catch(S){rt(s,s.return,S)}}function as(r,s,o){try{var c=s.updateQueue,f=c!==null?c.lastEffect:null;if(f!==null){var g=f.next;c=g;do{if((c.tag&r)===r){var T=c.inst,S=T.destroy;if(S!==void 0){T.destroy=void 0,f=s;var x=o,q=S;try{q()}catch(X){rt(f,x,X)}}}c=c.next}while(c!==g)}}catch(X){rt(s,s.return,X)}}function p0(r){var s=r.updateQueue;if(s!==null){var o=r.stateNode;try{tE(s,o)}catch(c){rt(r,r.return,c)}}}function m0(r,s,o){o.props=Aa(r.type,r.memoizedProps),o.state=r.memoizedState;try{o.componentWillUnmount()}catch(c){rt(r,s,c)}}function Tu(r,s){try{var o=r.ref;if(o!==null){switch(r.tag){case 26:case 27:case 5:var c=r.stateNode;break;case 30:c=r.stateNode;break;default:c=r.stateNode}typeof o=="function"?r.refCleanup=o(c):o.current=c}}catch(f){rt(r,s,f)}}function Ui(r,s){var o=r.ref,c=r.refCleanup;if(o!==null)if(typeof c=="function")try{c()}catch(f){rt(r,s,f)}finally{r.refCleanup=null,r=r.alternate,r!=null&&(r.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(f){rt(r,s,f)}else o.current=null}function g0(r){var s=r.type,o=r.memoizedProps,c=r.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&c.focus();break e;case"img":o.src?c.src=o.src:o.srcSet&&(c.srcset=o.srcSet)}}catch(f){rt(r,r.return,f)}}function Sm(r,s,o){try{var c=r.stateNode;dN(c,r.type,o,s),c[Ct]=s}catch(f){rt(r,r.return,f)}}function _0(r){return r.tag===5||r.tag===3||r.tag===26||r.tag===27&&ps(r.type)||r.tag===4}function Am(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||_0(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.tag===27&&ps(r.type)||r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Rm(r,s,o){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(r,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(r),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=ad));else if(c!==4&&(c===27&&ps(r.type)&&(o=r.stateNode,s=null),r=r.child,r!==null))for(Rm(r,s,o),r=r.sibling;r!==null;)Rm(r,s,o),r=r.sibling}function Kh(r,s,o){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?o.insertBefore(r,s):o.appendChild(r);else if(c!==4&&(c===27&&ps(r.type)&&(o=r.stateNode),r=r.child,r!==null))for(Kh(r,s,o),r=r.sibling;r!==null;)Kh(r,s,o),r=r.sibling}function y0(r){var s=r.stateNode,o=r.memoizedProps;try{for(var c=r.type,f=s.attributes;f.length;)s.removeAttributeNode(f[0]);an(s,c,o),s[Pt]=r,s[Ct]=o}catch(g){rt(r,r.return,g)}}var wr=!1,At=!1,Im=!1,v0=typeof WeakSet=="function"?WeakSet:Set,$t=null;function WC(r,s){if(r=r.containerInfo,Xm=fd,r=xv(r),Ap(r)){if("selectionStart"in r)var o={start:r.selectionStart,end:r.selectionEnd};else e:{o=(o=r.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var f=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break e}var T=0,S=-1,x=-1,q=0,X=0,J=r,G=null;t:for(;;){for(var W;J!==o||f!==0&&J.nodeType!==3||(S=T+f),J!==g||c!==0&&J.nodeType!==3||(x=T+c),J.nodeType===3&&(T+=J.nodeValue.length),(W=J.firstChild)!==null;)G=J,J=W;for(;;){if(J===r)break t;if(G===o&&++q===f&&(S=T),G===g&&++X===c&&(x=T),(W=J.nextSibling)!==null)break;J=G,G=J.parentNode}J=W}o=S===-1||x===-1?null:{start:S,end:x}}else o=null}o=o||{start:0,end:0}}else o=null;for(Zm={focusedElem:r,selectionRange:o},fd=!1,$t=s;$t!==null;)if(s=$t,r=s.child,(s.subtreeFlags&1024)!==0&&r!==null)r.return=s,$t=r;else for(;$t!==null;){switch(s=$t,g=s.alternate,r=s.flags,s.tag){case 0:break;case 11:case 15:break;case 1:if((r&1024)!==0&&g!==null){r=void 0,o=s,f=g.memoizedProps,g=g.memoizedState,c=o.stateNode;try{var Se=Aa(o.type,f,o.elementType===o.type);r=c.getSnapshotBeforeUpdate(Se,g),c.__reactInternalSnapshotBeforeUpdate=r}catch(ye){rt(o,o.return,ye)}}break;case 3:if((r&1024)!==0){if(r=s.stateNode.containerInfo,o=r.nodeType,o===9)tg(r);else if(o===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":tg(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((r&1024)!==0)throw Error(i(163))}if(r=s.sibling,r!==null){r.return=s.return,$t=r;break}$t=s.return}}function E0(r,s,o){var c=o.flags;switch(o.tag){case 0:case 11:case 15:os(r,o),c&4&&Eu(5,o);break;case 1:if(os(r,o),c&4)if(r=o.stateNode,s===null)try{r.componentDidMount()}catch(T){rt(o,o.return,T)}else{var f=Aa(o.type,s.memoizedProps);s=s.memoizedState;try{r.componentDidUpdate(f,s,r.__reactInternalSnapshotBeforeUpdate)}catch(T){rt(o,o.return,T)}}c&64&&p0(o),c&512&&Tu(o,o.return);break;case 3:if(os(r,o),c&64&&(r=o.updateQueue,r!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{tE(r,s)}catch(T){rt(o,o.return,T)}}break;case 27:s===null&&c&4&&y0(o);case 26:case 5:os(r,o),s===null&&c&4&&g0(o),c&512&&Tu(o,o.return);break;case 12:os(r,o);break;case 13:os(r,o),c&4&&b0(r,o),c&64&&(r=o.memoizedState,r!==null&&(r=r.dehydrated,r!==null&&(o=tN.bind(null,o),vN(r,o))));break;case 22:if(c=o.memoizedState!==null||wr,!c){s=s!==null&&s.memoizedState!==null||At,f=wr;var g=At;wr=c,(At=s)&&!g?ls(r,o,(o.subtreeFlags&8772)!==0):os(r,o),wr=f,At=g}break;case 30:break;default:os(r,o)}}function T0(r){var s=r.alternate;s!==null&&(r.alternate=null,T0(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&Kr(s)),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}var dt=null,An=!1;function br(r,s,o){for(o=o.child;o!==null;)w0(r,s,o),o=o.sibling}function w0(r,s,o){if(Xe&&typeof Xe.onCommitFiberUnmount=="function")try{Xe.onCommitFiberUnmount(yt,o)}catch{}switch(o.tag){case 26:At||Ui(o,s),br(r,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:At||Ui(o,s);var c=dt,f=An;ps(o.type)&&(dt=o.stateNode,An=!1),br(r,s,o),xu(o.stateNode),dt=c,An=f;break;case 5:At||Ui(o,s);case 6:if(c=dt,f=An,dt=null,br(r,s,o),dt=c,An=f,dt!==null)if(An)try{(dt.nodeType===9?dt.body:dt.nodeName==="HTML"?dt.ownerDocument.body:dt).removeChild(o.stateNode)}catch(g){rt(o,s,g)}else try{dt.removeChild(o.stateNode)}catch(g){rt(o,s,g)}break;case 18:dt!==null&&(An?(r=dt,cT(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,o.stateNode),Uu(r)):cT(dt,o.stateNode));break;case 4:c=dt,f=An,dt=o.stateNode.containerInfo,An=!0,br(r,s,o),dt=c,An=f;break;case 0:case 11:case 14:case 15:At||as(2,o,s),At||as(4,o,s),br(r,s,o);break;case 1:At||(Ui(o,s),c=o.stateNode,typeof c.componentWillUnmount=="function"&&m0(o,s,c)),br(r,s,o);break;case 21:br(r,s,o);break;case 22:At=(c=At)||o.memoizedState!==null,br(r,s,o),At=c;break;default:br(r,s,o)}}function b0(r,s){if(s.memoizedState===null&&(r=s.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null))))try{Uu(r)}catch(o){rt(s,s.return,o)}}function YC(r){switch(r.tag){case 13:case 19:var s=r.stateNode;return s===null&&(s=r.stateNode=new v0),s;case 22:return r=r.stateNode,s=r._retryCache,s===null&&(s=r._retryCache=new v0),s;default:throw Error(i(435,r.tag))}}function Cm(r,s){var o=YC(r);s.forEach(function(c){var f=nN.bind(null,r,c);o.has(c)||(o.add(c),c.then(f,f))})}function Vn(r,s){var o=s.deletions;if(o!==null)for(var c=0;c<o.length;c++){var f=o[c],g=r,T=s,S=T;e:for(;S!==null;){switch(S.tag){case 27:if(ps(S.type)){dt=S.stateNode,An=!1;break e}break;case 5:dt=S.stateNode,An=!1;break e;case 3:case 4:dt=S.stateNode.containerInfo,An=!0;break e}S=S.return}if(dt===null)throw Error(i(160));w0(g,T,f),dt=null,An=!1,g=f.alternate,g!==null&&(g.return=null),f.return=null}if(s.subtreeFlags&13878)for(s=s.child;s!==null;)S0(s,r),s=s.sibling}var hi=null;function S0(r,s){var o=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:Vn(s,r),Ln(r),c&4&&(as(3,r,r.return),Eu(3,r),as(5,r,r.return));break;case 1:Vn(s,r),Ln(r),c&512&&(At||o===null||Ui(o,o.return)),c&64&&wr&&(r=r.updateQueue,r!==null&&(c=r.callbacks,c!==null&&(o=r.shared.hiddenCallbacks,r.shared.hiddenCallbacks=o===null?c:o.concat(c))));break;case 26:var f=hi;if(Vn(s,r),Ln(r),c&512&&(At||o===null||Ui(o,o.return)),c&4){var g=o!==null?o.memoizedState:null;if(c=r.memoizedState,o===null)if(c===null)if(r.stateNode===null){e:{c=r.type,o=r.memoizedProps,f=f.ownerDocument||f;t:switch(c){case"title":g=f.getElementsByTagName("title")[0],(!g||g[ea]||g[Pt]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=f.createElement(c),f.head.insertBefore(g,f.querySelector("head > title"))),an(g,c,o),g[Pt]=r,bt(g),c=g;break e;case"link":var T=yT("link","href",f).get(c+(o.href||""));if(T){for(var S=0;S<T.length;S++)if(g=T[S],g.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&g.getAttribute("rel")===(o.rel==null?null:o.rel)&&g.getAttribute("title")===(o.title==null?null:o.title)&&g.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){T.splice(S,1);break t}}g=f.createElement(c),an(g,c,o),f.head.appendChild(g);break;case"meta":if(T=yT("meta","content",f).get(c+(o.content||""))){for(S=0;S<T.length;S++)if(g=T[S],g.getAttribute("content")===(o.content==null?null:""+o.content)&&g.getAttribute("name")===(o.name==null?null:o.name)&&g.getAttribute("property")===(o.property==null?null:o.property)&&g.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&g.getAttribute("charset")===(o.charSet==null?null:o.charSet)){T.splice(S,1);break t}}g=f.createElement(c),an(g,c,o),f.head.appendChild(g);break;default:throw Error(i(468,c))}g[Pt]=r,bt(g),c=g}r.stateNode=c}else vT(f,r.type,r.stateNode);else r.stateNode=_T(f,c,r.memoizedProps);else g!==c?(g===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):g.count--,c===null?vT(f,r.type,r.stateNode):_T(f,c,r.memoizedProps)):c===null&&r.stateNode!==null&&Sm(r,r.memoizedProps,o.memoizedProps)}break;case 27:Vn(s,r),Ln(r),c&512&&(At||o===null||Ui(o,o.return)),o!==null&&c&4&&Sm(r,r.memoizedProps,o.memoizedProps);break;case 5:if(Vn(s,r),Ln(r),c&512&&(At||o===null||Ui(o,o.return)),r.flags&32){f=r.stateNode;try{Wn(f,"")}catch(W){rt(r,r.return,W)}}c&4&&r.stateNode!=null&&(f=r.memoizedProps,Sm(r,f,o!==null?o.memoizedProps:f)),c&1024&&(Im=!0);break;case 6:if(Vn(s,r),Ln(r),c&4){if(r.stateNode===null)throw Error(i(162));c=r.memoizedProps,o=r.stateNode;try{o.nodeValue=c}catch(W){rt(r,r.return,W)}}break;case 3:if(cd=null,f=hi,hi=ld(s.containerInfo),Vn(s,r),hi=f,Ln(r),c&4&&o!==null&&o.memoizedState.isDehydrated)try{Uu(s.containerInfo)}catch(W){rt(r,r.return,W)}Im&&(Im=!1,A0(r));break;case 4:c=hi,hi=ld(r.stateNode.containerInfo),Vn(s,r),Ln(r),hi=c;break;case 12:Vn(s,r),Ln(r);break;case 13:Vn(s,r),Ln(r),r.child.flags&8192&&r.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Pm=qn()),c&4&&(c=r.updateQueue,c!==null&&(r.updateQueue=null,Cm(r,c)));break;case 22:f=r.memoizedState!==null;var x=o!==null&&o.memoizedState!==null,q=wr,X=At;if(wr=q||f,At=X||x,Vn(s,r),At=X,wr=q,Ln(r),c&8192)e:for(s=r.stateNode,s._visibility=f?s._visibility&-2:s._visibility|1,f&&(o===null||x||wr||At||Ra(r)),o=null,s=r;;){if(s.tag===5||s.tag===26){if(o===null){x=o=s;try{if(g=x.stateNode,f)T=g.style,typeof T.setProperty=="function"?T.setProperty("display","none","important"):T.display="none";else{S=x.stateNode;var J=x.memoizedProps.style,G=J!=null&&J.hasOwnProperty("display")?J.display:null;S.style.display=G==null||typeof G=="boolean"?"":(""+G).trim()}}catch(W){rt(x,x.return,W)}}}else if(s.tag===6){if(o===null){x=s;try{x.stateNode.nodeValue=f?"":x.memoizedProps}catch(W){rt(x,x.return,W)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===r)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break e;for(;s.sibling===null;){if(s.return===null||s.return===r)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}c&4&&(c=r.updateQueue,c!==null&&(o=c.retryQueue,o!==null&&(c.retryQueue=null,Cm(r,o))));break;case 19:Vn(s,r),Ln(r),c&4&&(c=r.updateQueue,c!==null&&(r.updateQueue=null,Cm(r,c)));break;case 30:break;case 21:break;default:Vn(s,r),Ln(r)}}function Ln(r){var s=r.flags;if(s&2){try{for(var o,c=r.return;c!==null;){if(_0(c)){o=c;break}c=c.return}if(o==null)throw Error(i(160));switch(o.tag){case 27:var f=o.stateNode,g=Am(r);Kh(r,g,f);break;case 5:var T=o.stateNode;o.flags&32&&(Wn(T,""),o.flags&=-33);var S=Am(r);Kh(r,S,T);break;case 3:case 4:var x=o.stateNode.containerInfo,q=Am(r);Rm(r,q,x);break;default:throw Error(i(161))}}catch(X){rt(r,r.return,X)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function A0(r){if(r.subtreeFlags&1024)for(r=r.child;r!==null;){var s=r;A0(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),r=r.sibling}}function os(r,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)E0(r,s.alternate,s),s=s.sibling}function Ra(r){for(r=r.child;r!==null;){var s=r;switch(s.tag){case 0:case 11:case 14:case 15:as(4,s,s.return),Ra(s);break;case 1:Ui(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&m0(s,s.return,o),Ra(s);break;case 27:xu(s.stateNode);case 26:case 5:Ui(s,s.return),Ra(s);break;case 22:s.memoizedState===null&&Ra(s);break;case 30:Ra(s);break;default:Ra(s)}r=r.sibling}}function ls(r,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var c=s.alternate,f=r,g=s,T=g.flags;switch(g.tag){case 0:case 11:case 15:ls(f,g,o),Eu(4,g);break;case 1:if(ls(f,g,o),c=g,f=c.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(q){rt(c,c.return,q)}if(c=g,f=c.updateQueue,f!==null){var S=c.stateNode;try{var x=f.shared.hiddenCallbacks;if(x!==null)for(f.shared.hiddenCallbacks=null,f=0;f<x.length;f++)eE(x[f],S)}catch(q){rt(c,c.return,q)}}o&&T&64&&p0(g),Tu(g,g.return);break;case 27:y0(g);case 26:case 5:ls(f,g,o),o&&c===null&&T&4&&g0(g),Tu(g,g.return);break;case 12:ls(f,g,o);break;case 13:ls(f,g,o),o&&T&4&&b0(f,g);break;case 22:g.memoizedState===null&&ls(f,g,o),Tu(g,g.return);break;case 30:break;default:ls(f,g,o)}s=s.sibling}}function Nm(r,s){var o=null;r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),r=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(r=s.memoizedState.cachePool.pool),r!==o&&(r!=null&&r.refCount++,o!=null&&au(o))}function xm(r,s){r=null,s.alternate!==null&&(r=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==r&&(s.refCount++,r!=null&&au(r))}function ji(r,s,o,c){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)R0(r,s,o,c),s=s.sibling}function R0(r,s,o,c){var f=s.flags;switch(s.tag){case 0:case 11:case 15:ji(r,s,o,c),f&2048&&Eu(9,s);break;case 1:ji(r,s,o,c);break;case 3:ji(r,s,o,c),f&2048&&(r=null,s.alternate!==null&&(r=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==r&&(s.refCount++,r!=null&&au(r)));break;case 12:if(f&2048){ji(r,s,o,c),r=s.stateNode;try{var g=s.memoizedProps,T=g.id,S=g.onPostCommit;typeof S=="function"&&S(T,s.alternate===null?"mount":"update",r.passiveEffectDuration,-0)}catch(x){rt(s,s.return,x)}}else ji(r,s,o,c);break;case 13:ji(r,s,o,c);break;case 23:break;case 22:g=s.stateNode,T=s.alternate,s.memoizedState!==null?g._visibility&2?ji(r,s,o,c):wu(r,s):g._visibility&2?ji(r,s,o,c):(g._visibility|=2,Do(r,s,o,c,(s.subtreeFlags&10256)!==0)),f&2048&&Nm(T,s);break;case 24:ji(r,s,o,c),f&2048&&xm(s.alternate,s);break;default:ji(r,s,o,c)}}function Do(r,s,o,c,f){for(f=f&&(s.subtreeFlags&10256)!==0,s=s.child;s!==null;){var g=r,T=s,S=o,x=c,q=T.flags;switch(T.tag){case 0:case 11:case 15:Do(g,T,S,x,f),Eu(8,T);break;case 23:break;case 22:var X=T.stateNode;T.memoizedState!==null?X._visibility&2?Do(g,T,S,x,f):wu(g,T):(X._visibility|=2,Do(g,T,S,x,f)),f&&q&2048&&Nm(T.alternate,T);break;case 24:Do(g,T,S,x,f),f&&q&2048&&xm(T.alternate,T);break;default:Do(g,T,S,x,f)}s=s.sibling}}function wu(r,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=r,c=s,f=c.flags;switch(c.tag){case 22:wu(o,c),f&2048&&Nm(c.alternate,c);break;case 24:wu(o,c),f&2048&&xm(c.alternate,c);break;default:wu(o,c)}s=s.sibling}}var bu=8192;function ko(r){if(r.subtreeFlags&bu)for(r=r.child;r!==null;)I0(r),r=r.sibling}function I0(r){switch(r.tag){case 26:ko(r),r.flags&bu&&r.memoizedState!==null&&DN(hi,r.memoizedState,r.memoizedProps);break;case 5:ko(r);break;case 3:case 4:var s=hi;hi=ld(r.stateNode.containerInfo),ko(r),hi=s;break;case 22:r.memoizedState===null&&(s=r.alternate,s!==null&&s.memoizedState!==null?(s=bu,bu=16777216,ko(r),bu=s):ko(r));break;default:ko(r)}}function C0(r){var s=r.alternate;if(s!==null&&(r=s.child,r!==null)){s.child=null;do s=r.sibling,r.sibling=null,r=s;while(r!==null)}}function Su(r){var s=r.deletions;if((r.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var c=s[o];$t=c,x0(c,r)}C0(r)}if(r.subtreeFlags&10256)for(r=r.child;r!==null;)N0(r),r=r.sibling}function N0(r){switch(r.tag){case 0:case 11:case 15:Su(r),r.flags&2048&&as(9,r,r.return);break;case 3:Su(r);break;case 12:Su(r);break;case 22:var s=r.stateNode;r.memoizedState!==null&&s._visibility&2&&(r.return===null||r.return.tag!==13)?(s._visibility&=-3,Qh(r)):Su(r);break;default:Su(r)}}function Qh(r){var s=r.deletions;if((r.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var c=s[o];$t=c,x0(c,r)}C0(r)}for(r=r.child;r!==null;){switch(s=r,s.tag){case 0:case 11:case 15:as(8,s,s.return),Qh(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,Qh(s));break;default:Qh(s)}r=r.sibling}}function x0(r,s){for(;$t!==null;){var o=$t;switch(o.tag){case 0:case 11:case 15:as(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var c=o.memoizedState.cachePool.pool;c!=null&&c.refCount++}break;case 24:au(o.memoizedState.cache)}if(c=o.child,c!==null)c.return=o,$t=c;else e:for(o=r;$t!==null;){c=$t;var f=c.sibling,g=c.return;if(T0(c),c===o){$t=null;break e}if(f!==null){f.return=g,$t=f;break e}$t=g}}}var $C={getCacheForType:function(r){var s=cn(Lt),o=s.data.get(r);return o===void 0&&(o=r(),s.data.set(r,o)),o}},KC=typeof WeakMap=="function"?WeakMap:Map,Ze=0,ot=null,Me=null,He=0,Je=0,Un=null,us=!1,Po=!1,Om=!1,Sr=0,Et=0,cs=0,Ia=0,Dm=0,ti=0,Mo=0,Au=null,Rn=null,km=!1,Pm=0,Xh=1/0,Zh=null,hs=null,sn=0,ds=null,Vo=null,Lo=0,Mm=0,Vm=null,O0=null,Ru=0,Lm=null;function jn(){if((Ze&2)!==0&&He!==0)return He&-He;if(Q.T!==null){var r=So;return r!==0?r:qm()}return Yr()}function D0(){ti===0&&(ti=(He&536870912)===0||$e?Ml():536870912);var r=ei.current;return r!==null&&(r.flags|=32),ti}function Fn(r,s,o){(r===ot&&(Je===2||Je===9)||r.cancelPendingCommit!==null)&&(Uo(r,0),fs(r,He,ti,!1)),nr(r,o),((Ze&2)===0||r!==ot)&&(r===ot&&((Ze&2)===0&&(Ia|=o),Et===4&&fs(r,He,ti,!1)),Fi(r))}function k0(r,s,o){if((Ze&6)!==0)throw Error(i(327));var c=!o&&(s&124)===0&&(s&r.expiredLanes)===0||Js(r,s),f=c?ZC(r,s):Fm(r,s,!0),g=c;do{if(f===0){Po&&!c&&fs(r,s,0,!1);break}else{if(o=r.current.alternate,g&&!QC(o)){f=Fm(r,s,!1),g=!1;continue}if(f===2){if(g=s,r.errorRecoveryDisabledLanes&g)var T=0;else T=r.pendingLanes&-536870913,T=T!==0?T:T&536870912?536870912:0;if(T!==0){s=T;e:{var S=r;f=Au;var x=S.current.memoizedState.isDehydrated;if(x&&(Uo(S,T).flags|=256),T=Fm(S,T,!1),T!==2){if(Om&&!x){S.errorRecoveryDisabledLanes|=g,Ia|=g,f=4;break e}g=Rn,Rn=f,g!==null&&(Rn===null?Rn=g:Rn.push.apply(Rn,g))}f=T}if(g=!1,f!==2)continue}}if(f===1){Uo(r,0),fs(r,s,0,!0);break}e:{switch(c=r,g=f,g){case 0:case 1:throw Error(i(345));case 4:if((s&4194048)!==s)break;case 6:fs(c,s,ti,!us);break e;case 2:Rn=null;break;case 3:case 5:break;default:throw Error(i(329))}if((s&62914560)===s&&(f=Pm+300-qn(),10<f)){if(fs(c,s,ti,!us),eo(c,0,!0)!==0)break e;c.timeoutHandle=lT(P0.bind(null,c,o,Rn,Zh,km,s,ti,Ia,Mo,us,g,2,-0,0),f);break e}P0(c,o,Rn,Zh,km,s,ti,Ia,Mo,us,g,0,-0,0)}}break}while(!0);Fi(r)}function P0(r,s,o,c,f,g,T,S,x,q,X,J,G,W){if(r.timeoutHandle=-1,J=s.subtreeFlags,(J&8192||(J&16785408)===16785408)&&(ku={stylesheets:null,count:0,unsuspend:ON},I0(s),J=kN(),J!==null)){r.cancelPendingCommit=J(z0.bind(null,r,s,g,o,c,f,T,S,x,X,1,G,W)),fs(r,g,T,!q);return}z0(r,s,g,o,c,f,T,S,x)}function QC(r){for(var s=r;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var c=0;c<o.length;c++){var f=o[c],g=f.getSnapshot;f=f.value;try{if(!Pn(g(),f))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function fs(r,s,o,c){s&=~Dm,s&=~Ia,r.suspendedLanes|=s,r.pingedLanes&=~s,c&&(r.warmLanes|=s),c=r.expirationTimes;for(var f=s;0<f;){var g=31-un(f),T=1<<g;c[g]=-1,f&=~T}o!==0&&Ai(r,o,s)}function Jh(){return(Ze&6)===0?(Iu(0),!1):!0}function Um(){if(Me!==null){if(Je===0)var r=Me.return;else r=Me,gr=Ta=null,tm(r),xo=null,_u=0,r=Me;for(;r!==null;)f0(r.alternate,r),r=r.return;Me=null}}function Uo(r,s){var o=r.timeoutHandle;o!==-1&&(r.timeoutHandle=-1,pN(o)),o=r.cancelPendingCommit,o!==null&&(r.cancelPendingCommit=null,o()),Um(),ot=r,Me=o=fr(r.current,null),He=s,Je=0,Un=null,us=!1,Po=Js(r,s),Om=!1,Mo=ti=Dm=Ia=cs=Et=0,Rn=Au=null,km=!1,(s&8)!==0&&(s|=s&32);var c=r.entangledLanes;if(c!==0)for(r=r.entanglements,c&=s;0<c;){var f=31-un(c),g=1<<f;s|=r[f],c&=~g}return Sr=s,Th(),o}function M0(r,s){xe=null,Q.H=Fh,s===lu||s===xh?(s=Zv(),Je=3):s===Kv?(s=Zv(),Je=4):Je=s===JE?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,Un=s,Me===null&&(Et=1,Gh(r,Qn(s,r.current)))}function V0(){var r=Q.H;return Q.H=Fh,r===null?Fh:r}function L0(){var r=Q.A;return Q.A=$C,r}function jm(){Et=4,us||(He&4194048)!==He&&ei.current!==null||(Po=!0),(cs&134217727)===0&&(Ia&134217727)===0||ot===null||fs(ot,He,ti,!1)}function Fm(r,s,o){var c=Ze;Ze|=2;var f=V0(),g=L0();(ot!==r||He!==s)&&(Zh=null,Uo(r,s)),s=!1;var T=Et;e:do try{if(Je!==0&&Me!==null){var S=Me,x=Un;switch(Je){case 8:Um(),T=6;break e;case 3:case 2:case 9:case 6:ei.current===null&&(s=!0);var q=Je;if(Je=0,Un=null,jo(r,S,x,q),o&&Po){T=0;break e}break;default:q=Je,Je=0,Un=null,jo(r,S,x,q)}}XC(),T=Et;break}catch(X){M0(r,X)}while(!0);return s&&r.shellSuspendCounter++,gr=Ta=null,Ze=c,Q.H=f,Q.A=g,Me===null&&(ot=null,He=0,Th()),T}function XC(){for(;Me!==null;)U0(Me)}function ZC(r,s){var o=Ze;Ze|=2;var c=V0(),f=L0();ot!==r||He!==s?(Zh=null,Xh=qn()+500,Uo(r,s)):Po=Js(r,s);e:do try{if(Je!==0&&Me!==null){s=Me;var g=Un;t:switch(Je){case 1:Je=0,Un=null,jo(r,s,g,1);break;case 2:case 9:if(Qv(g)){Je=0,Un=null,j0(s);break}s=function(){Je!==2&&Je!==9||ot!==r||(Je=7),Fi(r)},g.then(s,s);break e;case 3:Je=7;break e;case 4:Je=5;break e;case 7:Qv(g)?(Je=0,Un=null,j0(s)):(Je=0,Un=null,jo(r,s,g,7));break;case 5:var T=null;switch(Me.tag){case 26:T=Me.memoizedState;case 5:case 27:var S=Me;if(!T||ET(T)){Je=0,Un=null;var x=S.sibling;if(x!==null)Me=x;else{var q=S.return;q!==null?(Me=q,ed(q)):Me=null}break t}}Je=0,Un=null,jo(r,s,g,5);break;case 6:Je=0,Un=null,jo(r,s,g,6);break;case 8:Um(),Et=6;break e;default:throw Error(i(462))}}JC();break}catch(X){M0(r,X)}while(!0);return gr=Ta=null,Q.H=c,Q.A=f,Ze=o,Me!==null?0:(ot=null,He=0,Th(),Et)}function JC(){for(;Me!==null&&!Ol();)U0(Me)}function U0(r){var s=h0(r.alternate,r,Sr);r.memoizedProps=r.pendingProps,s===null?ed(r):Me=s}function j0(r){var s=r,o=s.alternate;switch(s.tag){case 15:case 0:s=s0(o,s,s.pendingProps,s.type,void 0,He);break;case 11:s=s0(o,s,s.pendingProps,s.type.render,s.ref,He);break;case 5:tm(s);default:f0(o,s),s=Me=Fv(s,Sr),s=h0(o,s,Sr)}r.memoizedProps=r.pendingProps,s===null?ed(r):Me=s}function jo(r,s,o,c){gr=Ta=null,tm(s),xo=null,_u=0;var f=s.return;try{if(BC(r,f,s,o,He)){Et=1,Gh(r,Qn(o,r.current)),Me=null;return}}catch(g){if(f!==null)throw Me=f,g;Et=1,Gh(r,Qn(o,r.current)),Me=null;return}s.flags&32768?($e||c===1?r=!0:Po||(He&536870912)!==0?r=!1:(us=r=!0,(c===2||c===9||c===3||c===6)&&(c=ei.current,c!==null&&c.tag===13&&(c.flags|=16384))),F0(s,r)):ed(s)}function ed(r){var s=r;do{if((s.flags&32768)!==0){F0(s,us);return}r=s.return;var o=qC(s.alternate,s,Sr);if(o!==null){Me=o;return}if(s=s.sibling,s!==null){Me=s;return}Me=s=r}while(s!==null);Et===0&&(Et=5)}function F0(r,s){do{var o=GC(r.alternate,r);if(o!==null){o.flags&=32767,Me=o;return}if(o=r.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(r=r.sibling,r!==null)){Me=r;return}Me=r=o}while(r!==null);Et=6,Me=null}function z0(r,s,o,c,f,g,T,S,x){r.cancelPendingCommit=null;do td();while(sn!==0);if((Ze&6)!==0)throw Error(i(327));if(s!==null){if(s===r.current)throw Error(i(177));if(g=s.lanes|s.childLanes,g|=xp,Ll(r,o,g,T,S,x),r===ot&&(Me=ot=null,He=0),Vo=s,ds=r,Lo=o,Mm=g,Vm=f,O0=c,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(r.callbackNode=null,r.callbackPriority=0,iN(Ks,function(){return W0(),null})):(r.callbackNode=null,r.callbackPriority=0),c=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||c){c=Q.T,Q.T=null,f=le.p,le.p=2,T=Ze,Ze|=4;try{WC(r,s,o)}finally{Ze=T,le.p=f,Q.T=c}}sn=1,B0(),H0(),q0()}}function B0(){if(sn===1){sn=0;var r=ds,s=Vo,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=Q.T,Q.T=null;var c=le.p;le.p=2;var f=Ze;Ze|=4;try{S0(s,r);var g=Zm,T=xv(r.containerInfo),S=g.focusedElem,x=g.selectionRange;if(T!==S&&S&&S.ownerDocument&&Nv(S.ownerDocument.documentElement,S)){if(x!==null&&Ap(S)){var q=x.start,X=x.end;if(X===void 0&&(X=q),"selectionStart"in S)S.selectionStart=q,S.selectionEnd=Math.min(X,S.value.length);else{var J=S.ownerDocument||document,G=J&&J.defaultView||window;if(G.getSelection){var W=G.getSelection(),Se=S.textContent.length,ye=Math.min(x.start,Se),it=x.end===void 0?ye:Math.min(x.end,Se);!W.extend&&ye>it&&(T=it,it=ye,ye=T);var L=Cv(S,ye),P=Cv(S,it);if(L&&P&&(W.rangeCount!==1||W.anchorNode!==L.node||W.anchorOffset!==L.offset||W.focusNode!==P.node||W.focusOffset!==P.offset)){var H=J.createRange();H.setStart(L.node,L.offset),W.removeAllRanges(),ye>it?(W.addRange(H),W.extend(P.node,P.offset)):(H.setEnd(P.node,P.offset),W.addRange(H))}}}}for(J=[],W=S;W=W.parentNode;)W.nodeType===1&&J.push({element:W,left:W.scrollLeft,top:W.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<J.length;S++){var Z=J[S];Z.element.scrollLeft=Z.left,Z.element.scrollTop=Z.top}}fd=!!Xm,Zm=Xm=null}finally{Ze=f,le.p=c,Q.T=o}}r.current=s,sn=2}}function H0(){if(sn===2){sn=0;var r=ds,s=Vo,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=Q.T,Q.T=null;var c=le.p;le.p=2;var f=Ze;Ze|=4;try{E0(r,s.alternate,s)}finally{Ze=f,le.p=c,Q.T=o}}sn=3}}function q0(){if(sn===4||sn===3){sn=0,Qc();var r=ds,s=Vo,o=Lo,c=O0;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?sn=5:(sn=0,Vo=ds=null,G0(r,r.pendingLanes));var f=r.pendingLanes;if(f===0&&(hs=null),to(o),s=s.stateNode,Xe&&typeof Xe.onCommitFiberRoot=="function")try{Xe.onCommitFiberRoot(yt,s,void 0,(s.current.flags&128)===128)}catch{}if(c!==null){s=Q.T,f=le.p,le.p=2,Q.T=null;try{for(var g=r.onRecoverableError,T=0;T<c.length;T++){var S=c[T];g(S.value,{componentStack:S.stack})}}finally{Q.T=s,le.p=f}}(Lo&3)!==0&&td(),Fi(r),f=r.pendingLanes,(o&4194090)!==0&&(f&42)!==0?r===Lm?Ru++:(Ru=0,Lm=r):Ru=0,Iu(0)}}function G0(r,s){(r.pooledCacheLanes&=s)===0&&(s=r.pooledCache,s!=null&&(r.pooledCache=null,au(s)))}function td(r){return B0(),H0(),q0(),W0()}function W0(){if(sn!==5)return!1;var r=ds,s=Mm;Mm=0;var o=to(Lo),c=Q.T,f=le.p;try{le.p=32>o?32:o,Q.T=null,o=Vm,Vm=null;var g=ds,T=Lo;if(sn=0,Vo=ds=null,Lo=0,(Ze&6)!==0)throw Error(i(331));var S=Ze;if(Ze|=4,N0(g.current),R0(g,g.current,T,o),Ze=S,Iu(0,!1),Xe&&typeof Xe.onPostCommitFiberRoot=="function")try{Xe.onPostCommitFiberRoot(yt,g)}catch{}return!0}finally{le.p=f,Q.T=c,G0(r,s)}}function Y0(r,s,o){s=Qn(o,s),s=mm(r.stateNode,s,2),r=ns(r,s,2),r!==null&&(nr(r,2),Fi(r))}function rt(r,s,o){if(r.tag===3)Y0(r,r,o);else for(;s!==null;){if(s.tag===3){Y0(s,r,o);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(hs===null||!hs.has(c))){r=Qn(o,r),o=XE(2),c=ns(s,o,2),c!==null&&(ZE(o,c,s,r),nr(c,2),Fi(c));break}}s=s.return}}function zm(r,s,o){var c=r.pingCache;if(c===null){c=r.pingCache=new KC;var f=new Set;c.set(s,f)}else f=c.get(s),f===void 0&&(f=new Set,c.set(s,f));f.has(o)||(Om=!0,f.add(o),r=eN.bind(null,r,s,o),s.then(r,r))}function eN(r,s,o){var c=r.pingCache;c!==null&&c.delete(s),r.pingedLanes|=r.suspendedLanes&o,r.warmLanes&=~o,ot===r&&(He&o)===o&&(Et===4||Et===3&&(He&62914560)===He&&300>qn()-Pm?(Ze&2)===0&&Uo(r,0):Dm|=o,Mo===He&&(Mo=0)),Fi(r)}function $0(r,s){s===0&&(s=Vl()),r=Eo(r,s),r!==null&&(nr(r,s),Fi(r))}function tN(r){var s=r.memoizedState,o=0;s!==null&&(o=s.retryLane),$0(r,o)}function nN(r,s){var o=0;switch(r.tag){case 13:var c=r.stateNode,f=r.memoizedState;f!==null&&(o=f.retryLane);break;case 19:c=r.stateNode;break;case 22:c=r.stateNode._retryCache;break;default:throw Error(i(314))}c!==null&&c.delete(s),$0(r,o)}function iN(r,s){return Ys(r,s)}var nd=null,Fo=null,Bm=!1,id=!1,Hm=!1,Ca=0;function Fi(r){r!==Fo&&r.next===null&&(Fo===null?nd=Fo=r:Fo=Fo.next=r),id=!0,Bm||(Bm=!0,sN())}function Iu(r,s){if(!Hm&&id){Hm=!0;do for(var o=!1,c=nd;c!==null;){if(r!==0){var f=c.pendingLanes;if(f===0)var g=0;else{var T=c.suspendedLanes,S=c.pingedLanes;g=(1<<31-un(42|r)+1)-1,g&=f&~(T&~S),g=g&201326741?g&201326741|1:g?g|2:0}g!==0&&(o=!0,Z0(c,g))}else g=He,g=eo(c,c===ot?g:0,c.cancelPendingCommit!==null||c.timeoutHandle!==-1),(g&3)===0||Js(c,g)||(o=!0,Z0(c,g));c=c.next}while(o);Hm=!1}}function rN(){K0()}function K0(){id=Bm=!1;var r=0;Ca!==0&&(fN()&&(r=Ca),Ca=0);for(var s=qn(),o=null,c=nd;c!==null;){var f=c.next,g=Q0(c,s);g===0?(c.next=null,o===null?nd=f:o.next=f,f===null&&(Fo=o)):(o=c,(r!==0||(g&3)!==0)&&(id=!0)),c=f}Iu(r)}function Q0(r,s){for(var o=r.suspendedLanes,c=r.pingedLanes,f=r.expirationTimes,g=r.pendingLanes&-62914561;0<g;){var T=31-un(g),S=1<<T,x=f[T];x===-1?((S&o)===0||(S&c)!==0)&&(f[T]=Pl(S,s)):x<=s&&(r.expiredLanes|=S),g&=~S}if(s=ot,o=He,o=eo(r,r===s?o:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),c=r.callbackNode,o===0||r===s&&(Je===2||Je===9)||r.cancelPendingCommit!==null)return c!==null&&c!==null&&$s(c),r.callbackNode=null,r.callbackPriority=0;if((o&3)===0||Js(r,o)){if(s=o&-o,s===r.callbackPriority)return s;switch(c!==null&&$s(c),to(o)){case 2:case 8:o=Za;break;case 32:o=Ks;break;case 268435456:o=Ja;break;default:o=Ks}return c=X0.bind(null,r),o=Ys(o,c),r.callbackPriority=s,r.callbackNode=o,s}return c!==null&&c!==null&&$s(c),r.callbackPriority=2,r.callbackNode=null,2}function X0(r,s){if(sn!==0&&sn!==5)return r.callbackNode=null,r.callbackPriority=0,null;var o=r.callbackNode;if(td()&&r.callbackNode!==o)return null;var c=He;return c=eo(r,r===ot?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),c===0?null:(k0(r,c,s),Q0(r,qn()),r.callbackNode!=null&&r.callbackNode===o?X0.bind(null,r):null)}function Z0(r,s){if(td())return null;k0(r,s,!0)}function sN(){mN(function(){(Ze&6)!==0?Ys(Dl,rN):K0()})}function qm(){return Ca===0&&(Ca=Ml()),Ca}function J0(r){return r==null||typeof r=="symbol"||typeof r=="boolean"?null:typeof r=="function"?r:oo(""+r)}function eT(r,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,r.id&&o.setAttribute("form",r.id),s.parentNode.insertBefore(o,s),r=new FormData(r),o.parentNode.removeChild(o),r}function aN(r,s,o,c,f){if(s==="submit"&&o&&o.stateNode===f){var g=J0((f[Ct]||null).action),T=c.submitter;T&&(s=(s=T[Ct]||null)?J0(s.formAction):T.getAttribute("formAction"),s!==null&&(g=s,T=null));var S=new lo("action","action",null,c,f);r.push({event:S,listeners:[{instance:null,listener:function(){if(c.defaultPrevented){if(Ca!==0){var x=T?eT(f,T):new FormData(f);cm(o,{pending:!0,data:x,method:f.method,action:g},null,x)}}else typeof g=="function"&&(S.preventDefault(),x=T?eT(f,T):new FormData(f),cm(o,{pending:!0,data:x,method:f.method,action:g},g,x))},currentTarget:f}]})}}for(var Gm=0;Gm<Np.length;Gm++){var Wm=Np[Gm],oN=Wm.toLowerCase(),lN=Wm[0].toUpperCase()+Wm.slice(1);ci(oN,"on"+lN)}ci(kv,"onAnimationEnd"),ci(Pv,"onAnimationIteration"),ci(Mv,"onAnimationStart"),ci("dblclick","onDoubleClick"),ci("focusin","onFocus"),ci("focusout","onBlur"),ci(AC,"onTransitionRun"),ci(RC,"onTransitionStart"),ci(IC,"onTransitionCancel"),ci(Vv,"onTransitionEnd"),rr("onMouseEnter",["mouseout","mouseover"]),rr("onMouseLeave",["mouseout","mouseover"]),rr("onPointerEnter",["pointerout","pointerover"]),rr("onPointerLeave",["pointerout","pointerover"]),li("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),li("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),li("onBeforeInput",["compositionend","keypress","textInput","paste"]),li("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),li("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),li("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uN=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Cu));function tT(r,s){s=(s&4)!==0;for(var o=0;o<r.length;o++){var c=r[o],f=c.event;c=c.listeners;e:{var g=void 0;if(s)for(var T=c.length-1;0<=T;T--){var S=c[T],x=S.instance,q=S.currentTarget;if(S=S.listener,x!==g&&f.isPropagationStopped())break e;g=S,f.currentTarget=q;try{g(f)}catch(X){qh(X)}f.currentTarget=null,g=x}else for(T=0;T<c.length;T++){if(S=c[T],x=S.instance,q=S.currentTarget,S=S.listener,x!==g&&f.isPropagationStopped())break e;g=S,f.currentTarget=q;try{g(f)}catch(X){qh(X)}f.currentTarget=null,g=x}}}}function Ve(r,s){var o=s[jl];o===void 0&&(o=s[jl]=new Set);var c=r+"__bubble";o.has(c)||(nT(s,r,2,!1),o.add(c))}function Ym(r,s,o){var c=0;s&&(c|=4),nT(o,r,c,s)}var rd="_reactListening"+Math.random().toString(36).slice(2);function $m(r){if(!r[rd]){r[rd]=!0,Fl.forEach(function(o){o!=="selectionchange"&&(uN.has(o)||Ym(o,!1,r),Ym(o,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[rd]||(s[rd]=!0,Ym("selectionchange",!1,s))}}function nT(r,s,o,c){switch(RT(s)){case 2:var f=VN;break;case 8:f=LN;break;default:f=lg}o=f.bind(null,s,o,r),f=void 0,!$n||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(f=!0),c?f!==void 0?r.addEventListener(s,o,{capture:!0,passive:f}):r.addEventListener(s,o,!0):f!==void 0?r.addEventListener(s,o,{passive:f}):r.addEventListener(s,o,!1)}function Km(r,s,o,c,f){var g=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var S=c.stateNode.containerInfo;if(S===f)break;if(T===4)for(T=c.return;T!==null;){var x=T.tag;if((x===3||x===4)&&T.stateNode.containerInfo===f)return;T=T.return}for(;S!==null;){if(T=ir(S),T===null)return;if(x=T.tag,x===5||x===6||x===26||x===27){c=g=T;continue e}S=S.parentNode}}c=c.return}ah(function(){var q=g,X=Yn(o),J=[];e:{var G=Lv.get(r);if(G!==void 0){var W=lo,Se=r;switch(r){case"keypress":if(Oi(o)===0)break e;case"keydown":case"keyup":W=mo;break;case"focusin":Se="focus",W=ho;break;case"focusout":Se="blur",W=ho;break;case"beforeblur":case"afterblur":W=ho;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":W=Kn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":W=Tp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":W=ph;break;case kv:case Pv:case Mv:W=fo;break;case Vv:W=gh;break;case"scroll":case"scrollend":W=oh;break;case"wheel":W=go;break;case"copy":case"cut":case"paste":W=po;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":W=Zl;break;case"toggle":case"beforetoggle":W=yh}var ye=(s&4)!==0,it=!ye&&(r==="scroll"||r==="scrollend"),L=ye?G!==null?G+"Capture":null:G;ye=[];for(var P=q,H;P!==null;){var Z=P;if(H=Z.stateNode,Z=Z.tag,Z!==5&&Z!==26&&Z!==27||H===null||L===null||(Z=oa(P,L),Z!=null&&ye.push(Nu(P,Z,H))),it)break;P=P.return}0<ye.length&&(G=new W(G,Se,null,o,X),J.push({event:G,listeners:ye}))}}if((s&7)===0){e:{if(G=r==="mouseover"||r==="pointerover",W=r==="mouseout"||r==="pointerout",G&&o!==or&&(Se=o.relatedTarget||o.fromElement)&&(ir(Se)||Se[Gn]))break e;if((W||G)&&(G=X.window===X?X:(G=X.ownerDocument)?G.defaultView||G.parentWindow:window,W?(Se=o.relatedTarget||o.toElement,W=q,Se=Se?ir(Se):null,Se!==null&&(it=l(Se),ye=Se.tag,Se!==it||ye!==5&&ye!==27&&ye!==6)&&(Se=null)):(W=null,Se=q),W!==Se)){if(ye=Kn,Z="onMouseLeave",L="onMouseEnter",P="mouse",(r==="pointerout"||r==="pointerover")&&(ye=Zl,Z="onPointerLeave",L="onPointerEnter",P="pointer"),it=W==null?G:Ii(W),H=Se==null?G:Ii(Se),G=new ye(Z,P+"leave",W,o,X),G.target=it,G.relatedTarget=H,Z=null,ir(X)===q&&(ye=new ye(L,P+"enter",Se,o,X),ye.target=H,ye.relatedTarget=it,Z=ye),it=Z,W&&Se)t:{for(ye=W,L=Se,P=0,H=ye;H;H=zo(H))P++;for(H=0,Z=L;Z;Z=zo(Z))H++;for(;0<P-H;)ye=zo(ye),P--;for(;0<H-P;)L=zo(L),H--;for(;P--;){if(ye===L||L!==null&&ye===L.alternate)break t;ye=zo(ye),L=zo(L)}ye=null}else ye=null;W!==null&&iT(J,G,W,ye,!1),Se!==null&&it!==null&&iT(J,it,Se,ye,!0)}}e:{if(G=q?Ii(q):window,W=G.nodeName&&G.nodeName.toLowerCase(),W==="select"||W==="input"&&G.type==="file")var de=wv;else if(Vt(G))if(bv)de=wC;else{de=EC;var ke=vC}else W=G.nodeName,!W||W.toLowerCase()!=="input"||G.type!=="checkbox"&&G.type!=="radio"?q&&Gl(q.elementType)&&(de=wv):de=TC;if(de&&(de=de(r,q))){dr(J,de,o,X);break e}ke&&ke(r,G,q),r==="focusout"&&q&&G.type==="number"&&q.memoizedProps.value!=null&&Xr(G,"number",G.value)}switch(ke=q?Ii(q):window,r){case"focusin":(Vt(ke)||ke.contentEditable==="true")&&(_o=ke,Rp=q,tu=null);break;case"focusout":tu=Rp=_o=null;break;case"mousedown":Ip=!0;break;case"contextmenu":case"mouseup":case"dragend":Ip=!1,Ov(J,o,X);break;case"selectionchange":if(SC)break;case"keydown":case"keyup":Ov(J,o,X)}var fe;if(Pi)e:{switch(r){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else ze?Y(r,o)&&(Ee="onCompositionEnd"):r==="keydown"&&o.keyCode===229&&(Ee="onCompositionStart");Ee&&(v&&o.locale!=="ko"&&(ze||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&ze&&(fe=Yl()):(xi=X,Zr="value"in xi?xi.value:xi.textContent,ze=!0)),ke=sd(q,Ee),0<ke.length&&(Ee=new Ql(Ee,r,null,o,X),J.push({event:Ee,listeners:ke}),fe?Ee.data=fe:(fe=ae(o),fe!==null&&(Ee.data=fe)))),(fe=_?Mt(r,o):Be(r,o))&&(Ee=sd(q,"onBeforeInput"),0<Ee.length&&(ke=new Ql("onBeforeInput","beforeinput",null,o,X),J.push({event:ke,listeners:Ee}),ke.data=fe)),aN(J,r,q,o,X)}tT(J,s)})}function Nu(r,s,o){return{instance:r,listener:s,currentTarget:o}}function sd(r,s){for(var o=s+"Capture",c=[];r!==null;){var f=r,g=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||g===null||(f=oa(r,o),f!=null&&c.unshift(Nu(r,f,g)),f=oa(r,s),f!=null&&c.push(Nu(r,f,g))),r.tag===3)return c;r=r.return}return[]}function zo(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5&&r.tag!==27);return r||null}function iT(r,s,o,c,f){for(var g=s._reactName,T=[];o!==null&&o!==c;){var S=o,x=S.alternate,q=S.stateNode;if(S=S.tag,x!==null&&x===c)break;S!==5&&S!==26&&S!==27||q===null||(x=q,f?(q=oa(o,g),q!=null&&T.unshift(Nu(o,q,x))):f||(q=oa(o,g),q!=null&&T.push(Nu(o,q,x)))),o=o.return}T.length!==0&&r.push({event:s,listeners:T})}var cN=/\r\n?/g,hN=/\u0000|\uFFFD/g;function rT(r){return(typeof r=="string"?r:""+r).replace(cN,`
`).replace(hN,"")}function sT(r,s){return s=rT(s),rT(r)===s}function ad(){}function nt(r,s,o,c,f,g){switch(o){case"children":typeof c=="string"?s==="body"||s==="textarea"&&c===""||Wn(r,c):(typeof c=="number"||typeof c=="bigint")&&s!=="body"&&Wn(r,""+c);break;case"className":Ci(r,"class",c);break;case"tabIndex":Ci(r,"tabindex",c);break;case"dir":case"role":case"viewBox":case"width":case"height":Ci(r,o,c);break;case"style":ql(r,c,g);break;case"data":if(s!=="object"){Ci(r,"data",c);break}case"src":case"href":if(c===""&&(s!=="a"||o!=="href")){r.removeAttribute(o);break}if(c==null||typeof c=="function"||typeof c=="symbol"||typeof c=="boolean"){r.removeAttribute(o);break}c=oo(""+c),r.setAttribute(o,c);break;case"action":case"formAction":if(typeof c=="function"){r.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(o==="formAction"?(s!=="input"&&nt(r,s,"name",f.name,f,null),nt(r,s,"formEncType",f.formEncType,f,null),nt(r,s,"formMethod",f.formMethod,f,null),nt(r,s,"formTarget",f.formTarget,f,null)):(nt(r,s,"encType",f.encType,f,null),nt(r,s,"method",f.method,f,null),nt(r,s,"target",f.target,f,null)));if(c==null||typeof c=="symbol"||typeof c=="boolean"){r.removeAttribute(o);break}c=oo(""+c),r.setAttribute(o,c);break;case"onClick":c!=null&&(r.onclick=ad);break;case"onScroll":c!=null&&Ve("scroll",r);break;case"onScrollEnd":c!=null&&Ve("scrollend",r);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(o=c.__html,o!=null){if(f.children!=null)throw Error(i(60));r.innerHTML=o}}break;case"multiple":r.multiple=c&&typeof c!="function"&&typeof c!="symbol";break;case"muted":r.muted=c&&typeof c!="function"&&typeof c!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(c==null||typeof c=="function"||typeof c=="boolean"||typeof c=="symbol"){r.removeAttribute("xlink:href");break}o=oo(""+c),r.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":c!=null&&typeof c!="function"&&typeof c!="symbol"?r.setAttribute(o,""+c):r.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":c&&typeof c!="function"&&typeof c!="symbol"?r.setAttribute(o,""):r.removeAttribute(o);break;case"capture":case"download":c===!0?r.setAttribute(o,""):c!==!1&&c!=null&&typeof c!="function"&&typeof c!="symbol"?r.setAttribute(o,c):r.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":c!=null&&typeof c!="function"&&typeof c!="symbol"&&!isNaN(c)&&1<=c?r.setAttribute(o,c):r.removeAttribute(o);break;case"rowSpan":case"start":c==null||typeof c=="function"||typeof c=="symbol"||isNaN(c)?r.removeAttribute(o):r.setAttribute(o,c);break;case"popover":Ve("beforetoggle",r),Ve("toggle",r),Qr(r,"popover",c);break;case"xlinkActuate":tn(r,"http://www.w3.org/1999/xlink","xlink:actuate",c);break;case"xlinkArcrole":tn(r,"http://www.w3.org/1999/xlink","xlink:arcrole",c);break;case"xlinkRole":tn(r,"http://www.w3.org/1999/xlink","xlink:role",c);break;case"xlinkShow":tn(r,"http://www.w3.org/1999/xlink","xlink:show",c);break;case"xlinkTitle":tn(r,"http://www.w3.org/1999/xlink","xlink:title",c);break;case"xlinkType":tn(r,"http://www.w3.org/1999/xlink","xlink:type",c);break;case"xmlBase":tn(r,"http://www.w3.org/XML/1998/namespace","xml:base",c);break;case"xmlLang":tn(r,"http://www.w3.org/XML/1998/namespace","xml:lang",c);break;case"xmlSpace":tn(r,"http://www.w3.org/XML/1998/namespace","xml:space",c);break;case"is":Qr(r,"is",c);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=vp.get(o)||o,Qr(r,o,c))}}function Qm(r,s,o,c,f,g){switch(o){case"style":ql(r,c,g);break;case"dangerouslySetInnerHTML":if(c!=null){if(typeof c!="object"||!("__html"in c))throw Error(i(61));if(o=c.__html,o!=null){if(f.children!=null)throw Error(i(60));r.innerHTML=o}}break;case"children":typeof c=="string"?Wn(r,c):(typeof c=="number"||typeof c=="bigint")&&Wn(r,""+c);break;case"onScroll":c!=null&&Ve("scroll",r);break;case"onScrollEnd":c!=null&&Ve("scrollend",r);break;case"onClick":c!=null&&(r.onclick=ad);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!no.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(f=o.endsWith("Capture"),s=o.slice(2,f?o.length-7:void 0),g=r[Ct]||null,g=g!=null?g[o]:null,typeof g=="function"&&r.removeEventListener(s,g,f),typeof c=="function")){typeof g!="function"&&g!==null&&(o in r?r[o]=null:r.hasAttribute(o)&&r.removeAttribute(o)),r.addEventListener(s,c,f);break e}o in r?r[o]=c:c===!0?r.setAttribute(o,""):Qr(r,o,c)}}}function an(r,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ve("error",r),Ve("load",r);var c=!1,f=!1,g;for(g in o)if(o.hasOwnProperty(g)){var T=o[g];if(T!=null)switch(g){case"src":c=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:nt(r,s,g,T,o,null)}}f&&nt(r,s,"srcSet",o.srcSet,o,null),c&&nt(r,s,"src",o.src,o,null);return;case"input":Ve("invalid",r);var S=g=T=f=null,x=null,q=null;for(c in o)if(o.hasOwnProperty(c)){var X=o[c];if(X!=null)switch(c){case"name":f=X;break;case"type":T=X;break;case"checked":x=X;break;case"defaultChecked":q=X;break;case"value":g=X;break;case"defaultValue":S=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(i(137,s));break;default:nt(r,s,c,X,o,null)}}ra(r,g,S,x,q,T,f,!1),ao(r);return;case"select":Ve("invalid",r),c=T=g=null;for(f in o)if(o.hasOwnProperty(f)&&(S=o[f],S!=null))switch(f){case"value":g=S;break;case"defaultValue":T=S;break;case"multiple":c=S;default:nt(r,s,f,S,o,null)}s=g,o=T,r.multiple=!!c,s!=null?ar(r,!!c,s,!1):o!=null&&ar(r,!!c,o,!0);return;case"textarea":Ve("invalid",r),g=f=c=null;for(T in o)if(o.hasOwnProperty(T)&&(S=o[T],S!=null))switch(T){case"value":c=S;break;case"defaultValue":f=S;break;case"children":g=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(i(91));break;default:nt(r,s,T,S,o,null)}sa(r,c,f,g),ao(r);return;case"option":for(x in o)if(o.hasOwnProperty(x)&&(c=o[x],c!=null))switch(x){case"selected":r.selected=c&&typeof c!="function"&&typeof c!="symbol";break;default:nt(r,s,x,c,o,null)}return;case"dialog":Ve("beforetoggle",r),Ve("toggle",r),Ve("cancel",r),Ve("close",r);break;case"iframe":case"object":Ve("load",r);break;case"video":case"audio":for(c=0;c<Cu.length;c++)Ve(Cu[c],r);break;case"image":Ve("error",r),Ve("load",r);break;case"details":Ve("toggle",r);break;case"embed":case"source":case"link":Ve("error",r),Ve("load",r);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(q in o)if(o.hasOwnProperty(q)&&(c=o[q],c!=null))switch(q){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:nt(r,s,q,c,o,null)}return;default:if(Gl(s)){for(X in o)o.hasOwnProperty(X)&&(c=o[X],c!==void 0&&Qm(r,s,X,c,o,void 0));return}}for(S in o)o.hasOwnProperty(S)&&(c=o[S],c!=null&&nt(r,s,S,c,o,null))}function dN(r,s,o,c){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,g=null,T=null,S=null,x=null,q=null,X=null;for(W in o){var J=o[W];if(o.hasOwnProperty(W)&&J!=null)switch(W){case"checked":break;case"value":break;case"defaultValue":x=J;default:c.hasOwnProperty(W)||nt(r,s,W,null,c,J)}}for(var G in c){var W=c[G];if(J=o[G],c.hasOwnProperty(G)&&(W!=null||J!=null))switch(G){case"type":g=W;break;case"name":f=W;break;case"checked":q=W;break;case"defaultChecked":X=W;break;case"value":T=W;break;case"defaultValue":S=W;break;case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(i(137,s));break;default:W!==J&&nt(r,s,G,W,c,J)}}kn(r,T,S,x,q,X,g,f);return;case"select":W=T=S=G=null;for(g in o)if(x=o[g],o.hasOwnProperty(g)&&x!=null)switch(g){case"value":break;case"multiple":W=x;default:c.hasOwnProperty(g)||nt(r,s,g,null,c,x)}for(f in c)if(g=c[f],x=o[f],c.hasOwnProperty(f)&&(g!=null||x!=null))switch(f){case"value":G=g;break;case"defaultValue":S=g;break;case"multiple":T=g;default:g!==x&&nt(r,s,f,g,c,x)}s=S,o=T,c=W,G!=null?ar(r,!!o,G,!1):!!c!=!!o&&(s!=null?ar(r,!!o,s,!0):ar(r,!!o,o?[]:"",!1));return;case"textarea":W=G=null;for(S in o)if(f=o[S],o.hasOwnProperty(S)&&f!=null&&!c.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:nt(r,s,S,null,c,f)}for(T in c)if(f=c[T],g=o[T],c.hasOwnProperty(T)&&(f!=null||g!=null))switch(T){case"value":G=f;break;case"defaultValue":W=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(i(91));break;default:f!==g&&nt(r,s,T,f,c,g)}et(r,G,W);return;case"option":for(var Se in o)if(G=o[Se],o.hasOwnProperty(Se)&&G!=null&&!c.hasOwnProperty(Se))switch(Se){case"selected":r.selected=!1;break;default:nt(r,s,Se,null,c,G)}for(x in c)if(G=c[x],W=o[x],c.hasOwnProperty(x)&&G!==W&&(G!=null||W!=null))switch(x){case"selected":r.selected=G&&typeof G!="function"&&typeof G!="symbol";break;default:nt(r,s,x,G,c,W)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ye in o)G=o[ye],o.hasOwnProperty(ye)&&G!=null&&!c.hasOwnProperty(ye)&&nt(r,s,ye,null,c,G);for(q in c)if(G=c[q],W=o[q],c.hasOwnProperty(q)&&G!==W&&(G!=null||W!=null))switch(q){case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(i(137,s));break;default:nt(r,s,q,G,c,W)}return;default:if(Gl(s)){for(var it in o)G=o[it],o.hasOwnProperty(it)&&G!==void 0&&!c.hasOwnProperty(it)&&Qm(r,s,it,void 0,c,G);for(X in c)G=c[X],W=o[X],!c.hasOwnProperty(X)||G===W||G===void 0&&W===void 0||Qm(r,s,X,G,c,W);return}}for(var L in o)G=o[L],o.hasOwnProperty(L)&&G!=null&&!c.hasOwnProperty(L)&&nt(r,s,L,null,c,G);for(J in c)G=c[J],W=o[J],!c.hasOwnProperty(J)||G===W||G==null&&W==null||nt(r,s,J,G,c,W)}var Xm=null,Zm=null;function od(r){return r.nodeType===9?r:r.ownerDocument}function aT(r){switch(r){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function oT(r,s){if(r===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return r===1&&s==="foreignObject"?0:r}function Jm(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var eg=null;function fN(){var r=window.event;return r&&r.type==="popstate"?r===eg?!1:(eg=r,!0):(eg=null,!1)}var lT=typeof setTimeout=="function"?setTimeout:void 0,pN=typeof clearTimeout=="function"?clearTimeout:void 0,uT=typeof Promise=="function"?Promise:void 0,mN=typeof queueMicrotask=="function"?queueMicrotask:typeof uT<"u"?function(r){return uT.resolve(null).then(r).catch(gN)}:lT;function gN(r){setTimeout(function(){throw r})}function ps(r){return r==="head"}function cT(r,s){var o=s,c=0,f=0;do{var g=o.nextSibling;if(r.removeChild(o),g&&g.nodeType===8)if(o=g.data,o==="/$"){if(0<c&&8>c){o=c;var T=r.ownerDocument;if(o&1&&xu(T.documentElement),o&2&&xu(T.body),o&4)for(o=T.head,xu(o),T=o.firstChild;T;){var S=T.nextSibling,x=T.nodeName;T[ea]||x==="SCRIPT"||x==="STYLE"||x==="LINK"&&T.rel.toLowerCase()==="stylesheet"||o.removeChild(T),T=S}}if(f===0){r.removeChild(g),Uu(s);return}f--}else o==="$"||o==="$?"||o==="$!"?f++:c=o.charCodeAt(0)-48;else c=0;o=g}while(o);Uu(s)}function tg(r){var s=r.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":tg(o),Kr(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}r.removeChild(o)}}function _N(r,s,o,c){for(;r.nodeType===1;){var f=o;if(r.nodeName.toLowerCase()!==s.toLowerCase()){if(!c&&(r.nodeName!=="INPUT"||r.type!=="hidden"))break}else if(c){if(!r[ea])switch(s){case"meta":if(!r.hasAttribute("itemprop"))break;return r;case"link":if(g=r.getAttribute("rel"),g==="stylesheet"&&r.hasAttribute("data-precedence"))break;if(g!==f.rel||r.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||r.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||r.getAttribute("title")!==(f.title==null?null:f.title))break;return r;case"style":if(r.hasAttribute("data-precedence"))break;return r;case"script":if(g=r.getAttribute("src"),(g!==(f.src==null?null:f.src)||r.getAttribute("type")!==(f.type==null?null:f.type)||r.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&g&&r.hasAttribute("async")&&!r.hasAttribute("itemprop"))break;return r;default:return r}}else if(s==="input"&&r.type==="hidden"){var g=f.name==null?null:""+f.name;if(f.type==="hidden"&&r.getAttribute("name")===g)return r}else return r;if(r=di(r.nextSibling),r===null)break}return null}function yN(r,s,o){if(s==="")return null;for(;r.nodeType!==3;)if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!o||(r=di(r.nextSibling),r===null))return null;return r}function ng(r){return r.data==="$!"||r.data==="$?"&&r.ownerDocument.readyState==="complete"}function vN(r,s){var o=r.ownerDocument;if(r.data!=="$?"||o.readyState==="complete")s();else{var c=function(){s(),o.removeEventListener("DOMContentLoaded",c)};o.addEventListener("DOMContentLoaded",c),r._reactRetry=c}}function di(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?"||s==="F!"||s==="F")break;if(s==="/$")return null}}return r}var ig=null;function hT(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var o=r.data;if(o==="$"||o==="$!"||o==="$?"){if(s===0)return r;s--}else o==="/$"&&s++}r=r.previousSibling}return null}function dT(r,s,o){switch(s=od(o),r){case"html":if(r=s.documentElement,!r)throw Error(i(452));return r;case"head":if(r=s.head,!r)throw Error(i(453));return r;case"body":if(r=s.body,!r)throw Error(i(454));return r;default:throw Error(i(451))}}function xu(r){for(var s=r.attributes;s.length;)r.removeAttributeNode(s[0]);Kr(r)}var ni=new Map,fT=new Set;function ld(r){return typeof r.getRootNode=="function"?r.getRootNode():r.nodeType===9?r:r.ownerDocument}var Ar=le.d;le.d={f:EN,r:TN,D:wN,C:bN,L:SN,m:AN,X:IN,S:RN,M:CN};function EN(){var r=Ar.f(),s=Jh();return r||s}function TN(r){var s=Ri(r);s!==null&&s.tag===5&&s.type==="form"?kE(s):Ar.r(r)}var Bo=typeof document>"u"?null:document;function pT(r,s,o){var c=Bo;if(c&&typeof s=="string"&&s){var f=Nt(s);f='link[rel="'+r+'"][href="'+f+'"]',typeof o=="string"&&(f+='[crossorigin="'+o+'"]'),fT.has(f)||(fT.add(f),r={rel:r,crossOrigin:o,href:s},c.querySelector(f)===null&&(s=c.createElement("link"),an(s,"link",r),bt(s),c.head.appendChild(s)))}}function wN(r){Ar.D(r),pT("dns-prefetch",r,null)}function bN(r,s){Ar.C(r,s),pT("preconnect",r,s)}function SN(r,s,o){Ar.L(r,s,o);var c=Bo;if(c&&r&&s){var f='link[rel="preload"][as="'+Nt(s)+'"]';s==="image"&&o&&o.imageSrcSet?(f+='[imagesrcset="'+Nt(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(f+='[imagesizes="'+Nt(o.imageSizes)+'"]')):f+='[href="'+Nt(r)+'"]';var g=f;switch(s){case"style":g=Ho(r);break;case"script":g=qo(r)}ni.has(g)||(r=y({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:r,as:s},o),ni.set(g,r),c.querySelector(f)!==null||s==="style"&&c.querySelector(Ou(g))||s==="script"&&c.querySelector(Du(g))||(s=c.createElement("link"),an(s,"link",r),bt(s),c.head.appendChild(s)))}}function AN(r,s){Ar.m(r,s);var o=Bo;if(o&&r){var c=s&&typeof s.as=="string"?s.as:"script",f='link[rel="modulepreload"][as="'+Nt(c)+'"][href="'+Nt(r)+'"]',g=f;switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=qo(r)}if(!ni.has(g)&&(r=y({rel:"modulepreload",href:r},s),ni.set(g,r),o.querySelector(f)===null)){switch(c){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Du(g)))return}c=o.createElement("link"),an(c,"link",r),bt(c),o.head.appendChild(c)}}}function RN(r,s,o){Ar.S(r,s,o);var c=Bo;if(c&&r){var f=yn(c).hoistableStyles,g=Ho(r);s=s||"default";var T=f.get(g);if(!T){var S={loading:0,preload:null};if(T=c.querySelector(Ou(g)))S.loading=5;else{r=y({rel:"stylesheet",href:r,"data-precedence":s},o),(o=ni.get(g))&&rg(r,o);var x=T=c.createElement("link");bt(x),an(x,"link",r),x._p=new Promise(function(q,X){x.onload=q,x.onerror=X}),x.addEventListener("load",function(){S.loading|=1}),x.addEventListener("error",function(){S.loading|=2}),S.loading|=4,ud(T,s,c)}T={type:"stylesheet",instance:T,count:1,state:S},f.set(g,T)}}}function IN(r,s){Ar.X(r,s);var o=Bo;if(o&&r){var c=yn(o).hoistableScripts,f=qo(r),g=c.get(f);g||(g=o.querySelector(Du(f)),g||(r=y({src:r,async:!0},s),(s=ni.get(f))&&sg(r,s),g=o.createElement("script"),bt(g),an(g,"link",r),o.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(f,g))}}function CN(r,s){Ar.M(r,s);var o=Bo;if(o&&r){var c=yn(o).hoistableScripts,f=qo(r),g=c.get(f);g||(g=o.querySelector(Du(f)),g||(r=y({src:r,async:!0,type:"module"},s),(s=ni.get(f))&&sg(r,s),g=o.createElement("script"),bt(g),an(g,"link",r),o.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},c.set(f,g))}}function mT(r,s,o,c){var f=(f=Ae.current)?ld(f):null;if(!f)throw Error(i(446));switch(r){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=Ho(o.href),o=yn(f).hoistableStyles,c=o.get(s),c||(c={type:"style",instance:null,count:0,state:null},o.set(s,c)),c):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){r=Ho(o.href);var g=yn(f).hoistableStyles,T=g.get(r);if(T||(f=f.ownerDocument||f,T={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(r,T),(g=f.querySelector(Ou(r)))&&!g._p&&(T.instance=g,T.state.loading=5),ni.has(r)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},ni.set(r,o),g||NN(f,r,o,T.state))),s&&c===null)throw Error(i(528,""));return T}if(s&&c!==null)throw Error(i(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=qo(o),o=yn(f).hoistableScripts,c=o.get(s),c||(c={type:"script",instance:null,count:0,state:null},o.set(s,c)),c):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,r))}}function Ho(r){return'href="'+Nt(r)+'"'}function Ou(r){return'link[rel="stylesheet"]['+r+"]"}function gT(r){return y({},r,{"data-precedence":r.precedence,precedence:null})}function NN(r,s,o,c){r.querySelector('link[rel="preload"][as="style"]['+s+"]")?c.loading=1:(s=r.createElement("link"),c.preload=s,s.addEventListener("load",function(){return c.loading|=1}),s.addEventListener("error",function(){return c.loading|=2}),an(s,"link",o),bt(s),r.head.appendChild(s))}function qo(r){return'[src="'+Nt(r)+'"]'}function Du(r){return"script[async]"+r}function _T(r,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var c=r.querySelector('style[data-href~="'+Nt(o.href)+'"]');if(c)return s.instance=c,bt(c),c;var f=y({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return c=(r.ownerDocument||r).createElement("style"),bt(c),an(c,"style",f),ud(c,o.precedence,r),s.instance=c;case"stylesheet":f=Ho(o.href);var g=r.querySelector(Ou(f));if(g)return s.state.loading|=4,s.instance=g,bt(g),g;c=gT(o),(f=ni.get(f))&&rg(c,f),g=(r.ownerDocument||r).createElement("link"),bt(g);var T=g;return T._p=new Promise(function(S,x){T.onload=S,T.onerror=x}),an(g,"link",c),s.state.loading|=4,ud(g,o.precedence,r),s.instance=g;case"script":return g=qo(o.src),(f=r.querySelector(Du(g)))?(s.instance=f,bt(f),f):(c=o,(f=ni.get(g))&&(c=y({},o),sg(c,f)),r=r.ownerDocument||r,f=r.createElement("script"),bt(f),an(f,"link",c),r.head.appendChild(f),s.instance=f);case"void":return null;default:throw Error(i(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(c=s.instance,s.state.loading|=4,ud(c,o.precedence,r));return s.instance}function ud(r,s,o){for(var c=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=c.length?c[c.length-1]:null,g=f,T=0;T<c.length;T++){var S=c[T];if(S.dataset.precedence===s)g=S;else if(g!==f)break}g?g.parentNode.insertBefore(r,g.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(r,s.firstChild))}function rg(r,s){r.crossOrigin==null&&(r.crossOrigin=s.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=s.referrerPolicy),r.title==null&&(r.title=s.title)}function sg(r,s){r.crossOrigin==null&&(r.crossOrigin=s.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=s.referrerPolicy),r.integrity==null&&(r.integrity=s.integrity)}var cd=null;function yT(r,s,o){if(cd===null){var c=new Map,f=cd=new Map;f.set(o,c)}else f=cd,c=f.get(o),c||(c=new Map,f.set(o,c));if(c.has(r))return c;for(c.set(r,null),o=o.getElementsByTagName(r),f=0;f<o.length;f++){var g=o[f];if(!(g[ea]||g[Pt]||r==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var T=g.getAttribute(s)||"";T=r+T;var S=c.get(T);S?S.push(g):c.set(T,[g])}}return c}function vT(r,s,o){r=r.ownerDocument||r,r.head.insertBefore(o,s==="title"?r.querySelector("head > title"):null)}function xN(r,s,o){if(o===1||s.itemProp!=null)return!1;switch(r){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return r=s.disabled,typeof s.precedence=="string"&&r==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function ET(r){return!(r.type==="stylesheet"&&(r.state.loading&3)===0)}var ku=null;function ON(){}function DN(r,s,o){if(ku===null)throw Error(i(475));var c=ku;if(s.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=Ho(o.href),g=r.querySelector(Ou(f));if(g){r=g._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(c.count++,c=hd.bind(c),r.then(c,c)),s.state.loading|=4,s.instance=g,bt(g);return}g=r.ownerDocument||r,o=gT(o),(f=ni.get(f))&&rg(o,f),g=g.createElement("link"),bt(g);var T=g;T._p=new Promise(function(S,x){T.onload=S,T.onerror=x}),an(g,"link",o),s.instance=g}c.stylesheets===null&&(c.stylesheets=new Map),c.stylesheets.set(s,r),(r=s.state.preload)&&(s.state.loading&3)===0&&(c.count++,s=hd.bind(c),r.addEventListener("load",s),r.addEventListener("error",s))}}function kN(){if(ku===null)throw Error(i(475));var r=ku;return r.stylesheets&&r.count===0&&ag(r,r.stylesheets),0<r.count?function(s){var o=setTimeout(function(){if(r.stylesheets&&ag(r,r.stylesheets),r.unsuspend){var c=r.unsuspend;r.unsuspend=null,c()}},6e4);return r.unsuspend=s,function(){r.unsuspend=null,clearTimeout(o)}}:null}function hd(){if(this.count--,this.count===0){if(this.stylesheets)ag(this,this.stylesheets);else if(this.unsuspend){var r=this.unsuspend;this.unsuspend=null,r()}}}var dd=null;function ag(r,s){r.stylesheets=null,r.unsuspend!==null&&(r.count++,dd=new Map,s.forEach(PN,r),dd=null,hd.call(r))}function PN(r,s){if(!(s.state.loading&4)){var o=dd.get(r);if(o)var c=o.get(null);else{o=new Map,dd.set(r,o);for(var f=r.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<f.length;g++){var T=f[g];(T.nodeName==="LINK"||T.getAttribute("media")!=="not all")&&(o.set(T.dataset.precedence,T),c=T)}c&&o.set(null,c)}f=s.instance,T=f.getAttribute("data-precedence"),g=o.get(T)||c,g===c&&o.set(null,f),o.set(T,f),this.count++,c=hd.bind(this),f.addEventListener("load",c),f.addEventListener("error",c),g?g.parentNode.insertBefore(f,g.nextSibling):(r=r.nodeType===9?r.head:r,r.insertBefore(f,r.firstChild)),s.state.loading|=4}}var Pu={$$typeof:te,Provider:null,Consumer:null,_currentValue:me,_currentValue2:me,_threadCount:0};function MN(r,s,o,c,f,g,T,S){this.tag=1,this.containerInfo=r,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=tr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tr(0),this.hiddenUpdates=tr(null),this.identifierPrefix=c,this.onUncaughtError=f,this.onCaughtError=g,this.onRecoverableError=T,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function TT(r,s,o,c,f,g,T,S,x,q,X,J){return r=new MN(r,s,o,T,S,x,q,J),s=1,g===!0&&(s|=24),g=Mn(3,null,null,s),r.current=g,g.stateNode=r,s=zp(),s.refCount++,r.pooledCache=s,s.refCount++,g.memoizedState={element:c,isDehydrated:o,cache:s},Gp(g),r}function wT(r){return r?(r=To,r):To}function bT(r,s,o,c,f,g){f=wT(f),c.context===null?c.context=f:c.pendingContext=f,c=ts(s),c.payload={element:o},g=g===void 0?null:g,g!==null&&(c.callback=g),o=ns(r,c,s),o!==null&&(Fn(o,r,s),cu(o,r,s))}function ST(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var o=r.retryLane;r.retryLane=o!==0&&o<s?o:s}}function og(r,s){ST(r,s),(r=r.alternate)&&ST(r,s)}function AT(r){if(r.tag===13){var s=Eo(r,67108864);s!==null&&Fn(s,r,67108864),og(r,67108864)}}var fd=!0;function VN(r,s,o,c){var f=Q.T;Q.T=null;var g=le.p;try{le.p=2,lg(r,s,o,c)}finally{le.p=g,Q.T=f}}function LN(r,s,o,c){var f=Q.T;Q.T=null;var g=le.p;try{le.p=8,lg(r,s,o,c)}finally{le.p=g,Q.T=f}}function lg(r,s,o,c){if(fd){var f=ug(c);if(f===null)Km(r,s,c,pd,o),IT(r,c);else if(jN(f,r,s,o,c))c.stopPropagation();else if(IT(r,c),s&4&&-1<UN.indexOf(r)){for(;f!==null;){var g=Ri(f);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var T=oi(g.pendingLanes);if(T!==0){var S=g;for(S.pendingLanes|=2,S.entangledLanes|=2;T;){var x=1<<31-un(T);S.entanglements[1]|=x,T&=~x}Fi(g),(Ze&6)===0&&(Xh=qn()+500,Iu(0))}}break;case 13:S=Eo(g,2),S!==null&&Fn(S,g,2),Jh(),og(g,2)}if(g=ug(c),g===null&&Km(r,s,c,pd,o),g===f)break;f=g}f!==null&&c.stopPropagation()}else Km(r,s,c,null,o)}}function ug(r){return r=Yn(r),cg(r)}var pd=null;function cg(r){if(pd=null,r=ir(r),r!==null){var s=l(r);if(s===null)r=null;else{var o=s.tag;if(o===13){if(r=u(s),r!==null)return r;r=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null)}}return pd=r,null}function RT(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(fp()){case Dl:return 2;case Za:return 8;case Ks:case pp:return 32;case Ja:return 268435456;default:return 32}default:return 32}}var hg=!1,ms=null,gs=null,_s=null,Mu=new Map,Vu=new Map,ys=[],UN="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function IT(r,s){switch(r){case"focusin":case"focusout":ms=null;break;case"dragenter":case"dragleave":gs=null;break;case"mouseover":case"mouseout":_s=null;break;case"pointerover":case"pointerout":Mu.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vu.delete(s.pointerId)}}function Lu(r,s,o,c,f,g){return r===null||r.nativeEvent!==g?(r={blockedOn:s,domEventName:o,eventSystemFlags:c,nativeEvent:g,targetContainers:[f]},s!==null&&(s=Ri(s),s!==null&&AT(s)),r):(r.eventSystemFlags|=c,s=r.targetContainers,f!==null&&s.indexOf(f)===-1&&s.push(f),r)}function jN(r,s,o,c,f){switch(s){case"focusin":return ms=Lu(ms,r,s,o,c,f),!0;case"dragenter":return gs=Lu(gs,r,s,o,c,f),!0;case"mouseover":return _s=Lu(_s,r,s,o,c,f),!0;case"pointerover":var g=f.pointerId;return Mu.set(g,Lu(Mu.get(g)||null,r,s,o,c,f)),!0;case"gotpointercapture":return g=f.pointerId,Vu.set(g,Lu(Vu.get(g)||null,r,s,o,c,f)),!0}return!1}function CT(r){var s=ir(r.target);if(s!==null){var o=l(s);if(o!==null){if(s=o.tag,s===13){if(s=u(o),s!==null){r.blockedOn=s,Jc(r.priority,function(){if(o.tag===13){var c=jn();c=Wr(c);var f=Eo(o,c);f!==null&&Fn(f,o,c),og(o,c)}});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){r.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}r.blockedOn=null}function md(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var o=ug(r.nativeEvent);if(o===null){o=r.nativeEvent;var c=new o.constructor(o.type,o);or=c,o.target.dispatchEvent(c),or=null}else return s=Ri(o),s!==null&&AT(s),r.blockedOn=o,!1;s.shift()}return!0}function NT(r,s,o){md(r)&&o.delete(s)}function FN(){hg=!1,ms!==null&&md(ms)&&(ms=null),gs!==null&&md(gs)&&(gs=null),_s!==null&&md(_s)&&(_s=null),Mu.forEach(NT),Vu.forEach(NT)}function gd(r,s){r.blockedOn===s&&(r.blockedOn=null,hg||(hg=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,FN)))}var _d=null;function xT(r){_d!==r&&(_d=r,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){_d===r&&(_d=null);for(var s=0;s<r.length;s+=3){var o=r[s],c=r[s+1],f=r[s+2];if(typeof c!="function"){if(cg(c||o)===null)continue;break}var g=Ri(o);g!==null&&(r.splice(s,3),s-=3,cm(g,{pending:!0,data:f,method:o.method,action:c},c,f))}}))}function Uu(r){function s(x){return gd(x,r)}ms!==null&&gd(ms,r),gs!==null&&gd(gs,r),_s!==null&&gd(_s,r),Mu.forEach(s),Vu.forEach(s);for(var o=0;o<ys.length;o++){var c=ys[o];c.blockedOn===r&&(c.blockedOn=null)}for(;0<ys.length&&(o=ys[0],o.blockedOn===null);)CT(o),o.blockedOn===null&&ys.shift();if(o=(r.ownerDocument||r).$$reactFormReplay,o!=null)for(c=0;c<o.length;c+=3){var f=o[c],g=o[c+1],T=f[Ct]||null;if(typeof g=="function")T||xT(o);else if(T){var S=null;if(g&&g.hasAttribute("formAction")){if(f=g,T=g[Ct]||null)S=T.formAction;else if(cg(f)!==null)continue}else S=T.action;typeof S=="function"?o[c+1]=S:(o.splice(c,3),c-=3),xT(o)}}}function dg(r){this._internalRoot=r}yd.prototype.render=dg.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(i(409));var o=s.current,c=jn();bT(o,c,r,s,null,null)},yd.prototype.unmount=dg.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;bT(r.current,2,null,r,null,null),Jh(),s[Gn]=null}};function yd(r){this._internalRoot=r}yd.prototype.unstable_scheduleHydration=function(r){if(r){var s=Yr();r={blockedOn:null,target:r,priority:s};for(var o=0;o<ys.length&&s!==0&&s<ys[o].priority;o++);ys.splice(o,0,r),o===0&&CT(r)}};var OT=e.version;if(OT!=="19.1.0")throw Error(i(527,OT,"19.1.0"));le.findDOMNode=function(r){var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(i(188)):(r=Object.keys(r).join(","),Error(i(268,r)));return r=p(s),r=r!==null?m(r):null,r=r===null?null:r.stateNode,r};var zN={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:Q,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vd.isDisabled&&vd.supportsFiber)try{yt=vd.inject(zN),Xe=vd}catch{}}return Fu.createRoot=function(r,s){if(!a(r))throw Error(i(299));var o=!1,c="",f=YE,g=$E,T=KE,S=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onUncaughtError!==void 0&&(f=s.onUncaughtError),s.onCaughtError!==void 0&&(g=s.onCaughtError),s.onRecoverableError!==void 0&&(T=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(S=s.unstable_transitionCallbacks)),s=TT(r,1,!1,null,null,o,c,f,g,T,S,null),r[Gn]=s.current,$m(r),new dg(s)},Fu.hydrateRoot=function(r,s,o){if(!a(r))throw Error(i(299));var c=!1,f="",g=YE,T=$E,S=KE,x=null,q=null;return o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onUncaughtError!==void 0&&(g=o.onUncaughtError),o.onCaughtError!==void 0&&(T=o.onCaughtError),o.onRecoverableError!==void 0&&(S=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(x=o.unstable_transitionCallbacks),o.formState!==void 0&&(q=o.formState)),s=TT(r,1,!0,s,o??null,c,f,g,T,S,x,q),s.context=wT(null),o=s.current,c=jn(),c=Wr(c),f=ts(c),f.callback=null,ns(o,f,c),o=c,s.current.lanes=o,nr(s,o),Fi(s),r[Gn]=s.current,$m(r),new yd(s)},Fu.version="19.1.0",Fu}var zT;function JN(){if(zT)return mg.exports;zT=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),mg.exports=ZN(),mg.exports}var ex=JN(),zu={},BT;function tx(){if(BT)return zu;BT=1,Object.defineProperty(zu,"__esModule",{value:!0}),zu.parse=u,zu.serialize=m;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,l=(()=>{const w=function(){};return w.prototype=Object.create(null),w})();function u(w,I){const C=new l,B=w.length;if(B<2)return C;const j=(I==null?void 0:I.decode)||y;let $=0;do{const K=w.indexOf("=",$);if(K===-1)break;const te=w.indexOf(";",$),re=te===-1?B:te;if(K>re){$=w.lastIndexOf(";",K-1)+1;continue}const ce=d(w,$,K),ve=p(w,K,ce),M=w.slice(ce,ve);if(C[M]===void 0){let R=d(w,K+1,re),N=p(w,re,R);const k=j(w.slice(R,N));C[M]=k}$=re+1}while($<B);return C}function d(w,I,C){do{const B=w.charCodeAt(I);if(B!==32&&B!==9)return I}while(++I<C);return C}function p(w,I,C){for(;I>C;){const B=w.charCodeAt(--I);if(B!==32&&B!==9)return I+1}return C}function m(w,I,C){const B=(C==null?void 0:C.encode)||encodeURIComponent;if(!n.test(w))throw new TypeError(`argument name is invalid: ${w}`);const j=B(I);if(!e.test(j))throw new TypeError(`argument val is invalid: ${I}`);let $=w+"="+j;if(!C)return $;if(C.maxAge!==void 0){if(!Number.isInteger(C.maxAge))throw new TypeError(`option maxAge is invalid: ${C.maxAge}`);$+="; Max-Age="+C.maxAge}if(C.domain){if(!t.test(C.domain))throw new TypeError(`option domain is invalid: ${C.domain}`);$+="; Domain="+C.domain}if(C.path){if(!i.test(C.path))throw new TypeError(`option path is invalid: ${C.path}`);$+="; Path="+C.path}if(C.expires){if(!E(C.expires)||!Number.isFinite(C.expires.valueOf()))throw new TypeError(`option expires is invalid: ${C.expires}`);$+="; Expires="+C.expires.toUTCString()}if(C.httpOnly&&($+="; HttpOnly"),C.secure&&($+="; Secure"),C.partitioned&&($+="; Partitioned"),C.priority)switch(typeof C.priority=="string"?C.priority.toLowerCase():void 0){case"low":$+="; Priority=Low";break;case"medium":$+="; Priority=Medium";break;case"high":$+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${C.priority}`)}if(C.sameSite)switch(typeof C.sameSite=="string"?C.sameSite.toLowerCase():C.sameSite){case!0:case"strict":$+="; SameSite=Strict";break;case"lax":$+="; SameSite=Lax";break;case"none":$+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${C.sameSite}`)}return $}function y(w){if(w.indexOf("%")===-1)return w;try{return decodeURIComponent(w)}catch{return w}}function E(w){return a.call(w)==="[object Date]"}return zu}tx();var HT="popstate";function nx(n={}){function e(a,l){let{pathname:u="/",search:d="",hash:p=""}=Ga(a.location.hash.substring(1));return!u.startsWith("/")&&!u.startsWith(".")&&(u="/"+u),Yg("",{pathname:u,search:d,hash:p},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function t(a,l){let u=a.document.querySelector("base"),d="";if(u&&u.getAttribute("href")){let p=a.location.href,m=p.indexOf("#");d=m===-1?p:p.slice(0,m)}return d+"#"+(typeof l=="string"?l:hc(l))}function i(a,l){ri(a.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(l)})`)}return rx(e,t,i,n)}function mt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function ri(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ix(){return Math.random().toString(36).substring(2,10)}function qT(n,e){return{usr:n.state,key:n.key,idx:e}}function Yg(n,e,t=null,i){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?Ga(e):e,state:t,key:e&&e.key||i||ix()}}function hc({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function Ga(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substring(i),n=n.substring(0,i)),n&&(e.pathname=n)}return e}function rx(n,e,t,i={}){let{window:a=document.defaultView,v5Compat:l=!1}=i,u=a.history,d="POP",p=null,m=y();m==null&&(m=0,u.replaceState({...u.state,idx:m},""));function y(){return(u.state||{idx:null}).idx}function E(){d="POP";let j=y(),$=j==null?null:j-m;m=j,p&&p({action:d,location:B.location,delta:$})}function w(j,$){d="PUSH";let K=Yg(B.location,j,$);t&&t(K,j),m=y()+1;let te=qT(K,m),re=B.createHref(K);try{u.pushState(te,"",re)}catch(ce){if(ce instanceof DOMException&&ce.name==="DataCloneError")throw ce;a.location.assign(re)}l&&p&&p({action:d,location:B.location,delta:1})}function I(j,$){d="REPLACE";let K=Yg(B.location,j,$);t&&t(K,j),m=y();let te=qT(K,m),re=B.createHref(K);u.replaceState(te,"",re),l&&p&&p({action:d,location:B.location,delta:0})}function C(j){return sx(j)}let B={get action(){return d},get location(){return n(a,u)},listen(j){if(p)throw new Error("A history only accepts one active listener");return a.addEventListener(HT,E),p=j,()=>{a.removeEventListener(HT,E),p=null}},createHref(j){return e(a,j)},createURL:C,encodeLocation(j){let $=C(j);return{pathname:$.pathname,search:$.search,hash:$.hash}},push:w,replace:I,go(j){return u.go(j)}};return B}function sx(n,e=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),mt(t,"No window.location.(origin|href) available to create URL");let i=typeof n=="string"?n:hc(n);return i=i.replace(/ $/,"%20"),!e&&i.startsWith("//")&&(i=t+i),new URL(i,t)}function wS(n,e,t="/"){return ax(n,e,t,!1)}function ax(n,e,t,i){let a=typeof e=="string"?Ga(e):e,l=kr(a.pathname||"/",t);if(l==null)return null;let u=bS(n);ox(u);let d=null;for(let p=0;d==null&&p<u.length;++p){let m=yx(l);d=gx(u[p],m,i)}return d}function bS(n,e=[],t=[],i=""){let a=(l,u,d)=>{let p={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:u,route:l};p.relativePath.startsWith("/")&&(mt(p.relativePath.startsWith(i),`Absolute route path "${p.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(i.length));let m=xr([i,p.relativePath]),y=t.concat(p);l.children&&l.children.length>0&&(mt(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),bS(l.children,e,y,m)),!(l.path==null&&!l.index)&&e.push({path:m,score:px(m,l.index),routesMeta:y})};return n.forEach((l,u)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))a(l,u);else for(let p of SS(l.path))a(l,u,p)}),e}function SS(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,a=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return a?[l,""]:[l];let u=SS(i.join("/")),d=[];return d.push(...u.map(p=>p===""?l:[l,p].join("/"))),a&&d.push(...u),d.map(p=>n.startsWith("/")&&p===""?"/":p)}function ox(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:mx(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var lx=/^:[\w-]+$/,ux=3,cx=2,hx=1,dx=10,fx=-2,GT=n=>n==="*";function px(n,e){let t=n.split("/"),i=t.length;return t.some(GT)&&(i+=fx),e&&(i+=cx),t.filter(a=>!GT(a)).reduce((a,l)=>a+(lx.test(l)?ux:l===""?hx:dx),i)}function mx(n,e){return n.length===e.length&&n.slice(0,-1).every((i,a)=>i===e[a])?n[n.length-1]-e[e.length-1]:0}function gx(n,e,t=!1){let{routesMeta:i}=n,a={},l="/",u=[];for(let d=0;d<i.length;++d){let p=i[d],m=d===i.length-1,y=l==="/"?e:e.slice(l.length)||"/",E=qd({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},y),w=p.route;if(!E&&m&&t&&!i[i.length-1].route.index&&(E=qd({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},y)),!E)return null;Object.assign(a,E.params),u.push({params:a,pathname:xr([l,E.pathname]),pathnameBase:wx(xr([l,E.pathnameBase])),route:w}),E.pathnameBase!=="/"&&(l=xr([l,E.pathnameBase]))}return u}function qd(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=_x(n.path,n.caseSensitive,n.end),a=e.match(t);if(!a)return null;let l=a[0],u=l.replace(/(.)\/+$/,"$1"),d=a.slice(1);return{params:i.reduce((m,{paramName:y,isOptional:E},w)=>{if(y==="*"){let C=d[w]||"";u=l.slice(0,l.length-C.length).replace(/(.)\/+$/,"$1")}const I=d[w];return E&&!I?m[y]=void 0:m[y]=(I||"").replace(/%2F/g,"/"),m},{}),pathname:l,pathnameBase:u,pattern:n}}function _x(n,e=!1,t=!0){ri(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let i=[],a="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,d,p)=>(i.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),a+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":n!==""&&n!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),i]}function yx(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ri(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function kr(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function vx(n,e="/"){let{pathname:t,search:i="",hash:a=""}=typeof n=="string"?Ga(n):n;return{pathname:t?t.startsWith("/")?t:Ex(t,e):e,search:bx(i),hash:Sx(a)}}function Ex(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function vg(n,e,t,i){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Tx(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function B_(n){let e=Tx(n);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function H_(n,e,t,i=!1){let a;typeof n=="string"?a=Ga(n):(a={...n},mt(!a.pathname||!a.pathname.includes("?"),vg("?","pathname","search",a)),mt(!a.pathname||!a.pathname.includes("#"),vg("#","pathname","hash",a)),mt(!a.search||!a.search.includes("#"),vg("#","search","hash",a)));let l=n===""||a.pathname==="",u=l?"/":a.pathname,d;if(u==null)d=t;else{let E=e.length-1;if(!i&&u.startsWith("..")){let w=u.split("/");for(;w[0]==="..";)w.shift(),E-=1;a.pathname=w.join("/")}d=E>=0?e[E]:"/"}let p=vx(a,d),m=u&&u!=="/"&&u.endsWith("/"),y=(l||u===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(m||y)&&(p.pathname+="/"),p}var xr=n=>n.join("/").replace(/\/\/+/g,"/"),wx=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),bx=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,Sx=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function Ax(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var AS=["POST","PUT","PATCH","DELETE"];new Set(AS);var Rx=["GET",...AS];new Set(Rx);var yl=U.createContext(null);yl.displayName="DataRouter";var Df=U.createContext(null);Df.displayName="DataRouterState";var RS=U.createContext({isTransitioning:!1});RS.displayName="ViewTransition";var Ix=U.createContext(new Map);Ix.displayName="Fetchers";var Cx=U.createContext(null);Cx.displayName="Await";var wi=U.createContext(null);wi.displayName="Navigation";var xc=U.createContext(null);xc.displayName="Location";var Zi=U.createContext({outlet:null,matches:[],isDataRoute:!1});Zi.displayName="Route";var q_=U.createContext(null);q_.displayName="RouteError";function Nx(n,{relative:e}={}){mt(vl(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=U.useContext(wi),{hash:a,pathname:l,search:u}=Oc(n,{relative:e}),d=l;return t!=="/"&&(d=l==="/"?t:xr([t,l])),i.createHref({pathname:d,search:u,hash:a})}function vl(){return U.useContext(xc)!=null}function Hs(){return mt(vl(),"useLocation() may be used only in the context of a <Router> component."),U.useContext(xc).location}var IS="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function CS(n){U.useContext(wi).static||U.useLayoutEffect(n)}function El(){let{isDataRoute:n}=U.useContext(Zi);return n?Bx():xx()}function xx(){mt(vl(),"useNavigate() may be used only in the context of a <Router> component.");let n=U.useContext(yl),{basename:e,navigator:t}=U.useContext(wi),{matches:i}=U.useContext(Zi),{pathname:a}=Hs(),l=JSON.stringify(B_(i)),u=U.useRef(!1);return CS(()=>{u.current=!0}),U.useCallback((p,m={})=>{if(ri(u.current,IS),!u.current)return;if(typeof p=="number"){t.go(p);return}let y=H_(p,JSON.parse(l),a,m.relative==="path");n==null&&e!=="/"&&(y.pathname=y.pathname==="/"?e:xr([e,y.pathname])),(m.replace?t.replace:t.push)(y,m.state,m)},[e,t,l,a,n])}U.createContext(null);function Oc(n,{relative:e}={}){let{matches:t}=U.useContext(Zi),{pathname:i}=Hs(),a=JSON.stringify(B_(t));return U.useMemo(()=>H_(n,JSON.parse(a),i,e==="path"),[n,a,i,e])}function Ox(n,e){return NS(n,e)}function NS(n,e,t,i){var $;mt(vl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a}=U.useContext(wi),{matches:l}=U.useContext(Zi),u=l[l.length-1],d=u?u.params:{},p=u?u.pathname:"/",m=u?u.pathnameBase:"/",y=u&&u.route;{let K=y&&y.path||"";xS(p,!y||K.endsWith("*")||K.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${K}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${K}"> to <Route path="${K==="/"?"*":`${K}/*`}">.`)}let E=Hs(),w;if(e){let K=typeof e=="string"?Ga(e):e;mt(m==="/"||(($=K.pathname)==null?void 0:$.startsWith(m)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${K.pathname}" was given in the \`location\` prop.`),w=K}else w=E;let I=w.pathname||"/",C=I;if(m!=="/"){let K=m.replace(/^\//,"").split("/");C="/"+I.replace(/^\//,"").split("/").slice(K.length).join("/")}let B=wS(n,{pathname:C});ri(y||B!=null,`No routes matched location "${w.pathname}${w.search}${w.hash}" `),ri(B==null||B[B.length-1].route.element!==void 0||B[B.length-1].route.Component!==void 0||B[B.length-1].route.lazy!==void 0,`Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let j=Vx(B&&B.map(K=>Object.assign({},K,{params:Object.assign({},d,K.params),pathname:xr([m,a.encodeLocation?a.encodeLocation(K.pathname).pathname:K.pathname]),pathnameBase:K.pathnameBase==="/"?m:xr([m,a.encodeLocation?a.encodeLocation(K.pathnameBase).pathname:K.pathnameBase])})),l,t,i);return e&&j?U.createElement(xc.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...w},navigationType:"POP"}},j):j}function Dx(){let n=zx(),e=Ax(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,i="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:i},l={padding:"2px 4px",backgroundColor:i},u=null;return console.error("Error handled by React Router default ErrorBoundary:",n),u=U.createElement(U.Fragment,null,U.createElement("p",null,"💿 Hey developer 👋"),U.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",U.createElement("code",{style:l},"ErrorBoundary")," or"," ",U.createElement("code",{style:l},"errorElement")," prop on your route.")),U.createElement(U.Fragment,null,U.createElement("h2",null,"Unexpected Application Error!"),U.createElement("h3",{style:{fontStyle:"italic"}},e),t?U.createElement("pre",{style:a},t):null,u)}var kx=U.createElement(Dx,null),Px=class extends U.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?U.createElement(Zi.Provider,{value:this.props.routeContext},U.createElement(q_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Mx({routeContext:n,match:e,children:t}){let i=U.useContext(yl);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),U.createElement(Zi.Provider,{value:n},t)}function Vx(n,e=[],t=null,i=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let a=n,l=t==null?void 0:t.errors;if(l!=null){let p=a.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);mt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),a=a.slice(0,Math.min(a.length,p+1))}let u=!1,d=-1;if(t)for(let p=0;p<a.length;p++){let m=a[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=p),m.route.id){let{loaderData:y,errors:E}=t,w=m.route.loader&&!y.hasOwnProperty(m.route.id)&&(!E||E[m.route.id]===void 0);if(m.route.lazy||w){u=!0,d>=0?a=a.slice(0,d+1):a=[a[0]];break}}}return a.reduceRight((p,m,y)=>{let E,w=!1,I=null,C=null;t&&(E=l&&m.route.id?l[m.route.id]:void 0,I=m.route.errorElement||kx,u&&(d<0&&y===0?(xS("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,C=null):d===y&&(w=!0,C=m.route.hydrateFallbackElement||null)));let B=e.concat(a.slice(0,y+1)),j=()=>{let $;return E?$=I:w?$=C:m.route.Component?$=U.createElement(m.route.Component,null):m.route.element?$=m.route.element:$=p,U.createElement(Mx,{match:m,routeContext:{outlet:p,matches:B,isDataRoute:t!=null},children:$})};return t&&(m.route.ErrorBoundary||m.route.errorElement||y===0)?U.createElement(Px,{location:t.location,revalidation:t.revalidation,component:I,error:E,children:j(),routeContext:{outlet:null,matches:B,isDataRoute:!0}}):j()},null)}function G_(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Lx(n){let e=U.useContext(yl);return mt(e,G_(n)),e}function Ux(n){let e=U.useContext(Df);return mt(e,G_(n)),e}function jx(n){let e=U.useContext(Zi);return mt(e,G_(n)),e}function W_(n){let e=jx(n),t=e.matches[e.matches.length-1];return mt(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function Fx(){return W_("useRouteId")}function zx(){var i;let n=U.useContext(q_),e=Ux("useRouteError"),t=W_("useRouteError");return n!==void 0?n:(i=e.errors)==null?void 0:i[t]}function Bx(){let{router:n}=Lx("useNavigate"),e=W_("useNavigate"),t=U.useRef(!1);return CS(()=>{t.current=!0}),U.useCallback(async(a,l={})=>{ri(t.current,IS),t.current&&(typeof a=="number"?n.navigate(a):await n.navigate(a,{fromRouteId:e,...l}))},[n,e])}var WT={};function xS(n,e,t){!e&&!WT[n]&&(WT[n]=!0,ri(!1,t))}U.memo(Hx);function Hx({routes:n,future:e,state:t}){return NS(n,void 0,t,e)}function Eg({to:n,replace:e,state:t,relative:i}){mt(vl(),"<Navigate> may be used only in the context of a <Router> component.");let{static:a}=U.useContext(wi);ri(!a,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=U.useContext(Zi),{pathname:u}=Hs(),d=El(),p=H_(n,B_(l),u,i==="path"),m=JSON.stringify(p);return U.useEffect(()=>{d(JSON.parse(m),{replace:e,state:t,relative:i})},[d,m,i,e,t]),null}function Tt(n){mt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function qx({basename:n="/",children:e=null,location:t,navigationType:i="POP",navigator:a,static:l=!1}){mt(!vl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=n.replace(/^\/*/,"/"),d=U.useMemo(()=>({basename:u,navigator:a,static:l,future:{}}),[u,a,l]);typeof t=="string"&&(t=Ga(t));let{pathname:p="/",search:m="",hash:y="",state:E=null,key:w="default"}=t,I=U.useMemo(()=>{let C=kr(p,u);return C==null?null:{location:{pathname:C,search:m,hash:y,state:E,key:w},navigationType:i}},[u,p,m,y,E,w,i]);return ri(I!=null,`<Router basename="${u}"> is not able to match the URL "${p}${m}${y}" because it does not start with the basename, so the <Router> won't render anything.`),I==null?null:U.createElement(wi.Provider,{value:d},U.createElement(xc.Provider,{children:e,value:I}))}function YT({children:n,location:e}){return Ox($g(n),e)}function $g(n,e=[]){let t=[];return U.Children.forEach(n,(i,a)=>{if(!U.isValidElement(i))return;let l=[...e,a];if(i.type===U.Fragment){t.push.apply(t,$g(i.props.children,l));return}mt(i.type===Tt,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),mt(!i.props.index||!i.props.children,"An index route cannot have child routes.");let u={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(u.children=$g(i.props.children,l)),t.push(u)}),t}var Od="get",Dd="application/x-www-form-urlencoded";function kf(n){return n!=null&&typeof n.tagName=="string"}function Gx(n){return kf(n)&&n.tagName.toLowerCase()==="button"}function Wx(n){return kf(n)&&n.tagName.toLowerCase()==="form"}function Yx(n){return kf(n)&&n.tagName.toLowerCase()==="input"}function $x(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function Kx(n,e){return n.button===0&&(!e||e==="_self")&&!$x(n)}var Ed=null;function Qx(){if(Ed===null)try{new FormData(document.createElement("form"),0),Ed=!1}catch{Ed=!0}return Ed}var Xx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Tg(n){return n!=null&&!Xx.has(n)?(ri(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Dd}"`),null):n}function Zx(n,e){let t,i,a,l,u;if(Wx(n)){let d=n.getAttribute("action");i=d?kr(d,e):null,t=n.getAttribute("method")||Od,a=Tg(n.getAttribute("enctype"))||Dd,l=new FormData(n)}else if(Gx(n)||Yx(n)&&(n.type==="submit"||n.type==="image")){let d=n.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||d.getAttribute("action");if(i=p?kr(p,e):null,t=n.getAttribute("formmethod")||d.getAttribute("method")||Od,a=Tg(n.getAttribute("formenctype"))||Tg(d.getAttribute("enctype"))||Dd,l=new FormData(d,n),!Qx()){let{name:m,type:y,value:E}=n;if(y==="image"){let w=m?`${m}.`:"";l.append(`${w}x`,"0"),l.append(`${w}y`,"0")}else m&&l.append(m,E)}}else{if(kf(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Od,i=null,a=Dd,u=n}return l&&a==="text/plain"&&(u=l,l=void 0),{action:i,method:t.toLowerCase(),encType:a,formData:l,body:u}}function Y_(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function Jx(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function e2(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function t2(n,e,t){let i=await Promise.all(n.map(async a=>{let l=e.routes[a.route.id];if(l){let u=await Jx(l,t);return u.links?u.links():[]}return[]}));return s2(i.flat(1).filter(e2).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function $T(n,e,t,i,a,l){let u=(p,m)=>t[m]?p.route.id!==t[m].route.id:!0,d=(p,m)=>{var y;return t[m].pathname!==p.pathname||((y=t[m].route.path)==null?void 0:y.endsWith("*"))&&t[m].params["*"]!==p.params["*"]};return l==="assets"?e.filter((p,m)=>u(p,m)||d(p,m)):l==="data"?e.filter((p,m)=>{var E;let y=i.routes[p.route.id];if(!y||!y.hasLoader)return!1;if(u(p,m)||d(p,m))return!0;if(p.route.shouldRevalidate){let w=p.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((E=t[0])==null?void 0:E.params)||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function n2(n,e,{includeHydrateFallback:t}={}){return i2(n.map(i=>{let a=e.routes[i.route.id];if(!a)return[];let l=[a.module];return a.clientActionModule&&(l=l.concat(a.clientActionModule)),a.clientLoaderModule&&(l=l.concat(a.clientLoaderModule)),t&&a.hydrateFallbackModule&&(l=l.concat(a.hydrateFallbackModule)),a.imports&&(l=l.concat(a.imports)),l}).flat(1))}function i2(n){return[...new Set(n)]}function r2(n){let e={},t=Object.keys(n).sort();for(let i of t)e[i]=n[i];return e}function s2(n,e){let t=new Set;return new Set(e),n.reduce((i,a)=>{let l=JSON.stringify(r2(a));return t.has(l)||(t.add(l),i.push({key:l,link:a})),i},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var a2=new Set([100,101,204,205]);function o2(n,e){let t=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return t.pathname==="/"?t.pathname="_root.data":e&&kr(t.pathname,e)==="/"?t.pathname=`${e.replace(/\/$/,"")}/_root.data`:t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}function OS(){let n=U.useContext(yl);return Y_(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function l2(){let n=U.useContext(Df);return Y_(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var $_=U.createContext(void 0);$_.displayName="FrameworkContext";function DS(){let n=U.useContext($_);return Y_(n,"You must render this element inside a <HydratedRouter> element"),n}function u2(n,e){let t=U.useContext($_),[i,a]=U.useState(!1),[l,u]=U.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:m,onMouseLeave:y,onTouchStart:E}=e,w=U.useRef(null);U.useEffect(()=>{if(n==="render"&&u(!0),n==="viewport"){let B=$=>{$.forEach(K=>{u(K.isIntersecting)})},j=new IntersectionObserver(B,{threshold:.5});return w.current&&j.observe(w.current),()=>{j.disconnect()}}},[n]),U.useEffect(()=>{if(i){let B=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(B)}}},[i]);let I=()=>{a(!0)},C=()=>{a(!1),u(!1)};return t?n!=="intent"?[l,w,{}]:[l,w,{onFocus:Bu(d,I),onBlur:Bu(p,C),onMouseEnter:Bu(m,I),onMouseLeave:Bu(y,C),onTouchStart:Bu(E,I)}]:[!1,w,{}]}function Bu(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function c2({page:n,...e}){let{router:t}=OS(),i=U.useMemo(()=>wS(t.routes,n,t.basename),[t.routes,n,t.basename]);return i?U.createElement(d2,{page:n,matches:i,...e}):null}function h2(n){let{manifest:e,routeModules:t}=DS(),[i,a]=U.useState([]);return U.useEffect(()=>{let l=!1;return t2(n,e,t).then(u=>{l||a(u)}),()=>{l=!0}},[n,e,t]),i}function d2({page:n,matches:e,...t}){let i=Hs(),{manifest:a,routeModules:l}=DS(),{basename:u}=OS(),{loaderData:d,matches:p}=l2(),m=U.useMemo(()=>$T(n,e,p,a,i,"data"),[n,e,p,a,i]),y=U.useMemo(()=>$T(n,e,p,a,i,"assets"),[n,e,p,a,i]),E=U.useMemo(()=>{if(n===i.pathname+i.search+i.hash)return[];let C=new Set,B=!1;if(e.forEach($=>{var te;let K=a.routes[$.route.id];!K||!K.hasLoader||(!m.some(re=>re.route.id===$.route.id)&&$.route.id in d&&((te=l[$.route.id])!=null&&te.shouldRevalidate)||K.hasClientLoader?B=!0:C.add($.route.id))}),C.size===0)return[];let j=o2(n,u);return B&&C.size>0&&j.searchParams.set("_routes",e.filter($=>C.has($.route.id)).map($=>$.route.id).join(",")),[j.pathname+j.search]},[u,d,i,a,m,e,n,l]),w=U.useMemo(()=>n2(y,a),[y,a]),I=h2(y);return U.createElement(U.Fragment,null,E.map(C=>U.createElement("link",{key:C,rel:"prefetch",as:"fetch",href:C,...t})),w.map(C=>U.createElement("link",{key:C,rel:"modulepreload",href:C,...t})),I.map(({key:C,link:B})=>U.createElement("link",{key:C,...B})))}function f2(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var kS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{kS&&(window.__reactRouterVersion="7.6.2")}catch{}function p2({basename:n,children:e,window:t}){let i=U.useRef();i.current==null&&(i.current=nx({window:t,v5Compat:!0}));let a=i.current,[l,u]=U.useState({action:a.action,location:a.location}),d=U.useCallback(p=>{U.startTransition(()=>u(p))},[u]);return U.useLayoutEffect(()=>a.listen(d),[a,d]),U.createElement(qx,{basename:n,children:e,location:l.location,navigationType:l.action,navigator:a})}var PS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Rt=U.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:a,reloadDocument:l,replace:u,state:d,target:p,to:m,preventScrollReset:y,viewTransition:E,...w},I){let{basename:C}=U.useContext(wi),B=typeof m=="string"&&PS.test(m),j,$=!1;if(typeof m=="string"&&B&&(j=m,kS))try{let N=new URL(window.location.href),k=m.startsWith("//")?new URL(N.protocol+m):new URL(m),V=kr(k.pathname,C);k.origin===N.origin&&V!=null?m=V+k.search+k.hash:$=!0}catch{ri(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let K=Nx(m,{relative:a}),[te,re,ce]=u2(i,w),ve=y2(m,{replace:u,state:d,target:p,preventScrollReset:y,relative:a,viewTransition:E});function M(N){e&&e(N),N.defaultPrevented||ve(N)}let R=U.createElement("a",{...w,...ce,href:j||K,onClick:$||l?e:M,ref:f2(I,re),target:p,"data-discover":!B&&t==="render"?"true":void 0});return te&&!B?U.createElement(U.Fragment,null,R,U.createElement(c2,{page:K})):R});Rt.displayName="Link";var m2=U.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:a=!1,style:l,to:u,viewTransition:d,children:p,...m},y){let E=Oc(u,{relative:m.relative}),w=Hs(),I=U.useContext(Df),{navigator:C,basename:B}=U.useContext(wi),j=I!=null&&b2(E)&&d===!0,$=C.encodeLocation?C.encodeLocation(E).pathname:E.pathname,K=w.pathname,te=I&&I.navigation&&I.navigation.location?I.navigation.location.pathname:null;t||(K=K.toLowerCase(),te=te?te.toLowerCase():null,$=$.toLowerCase()),te&&B&&(te=kr(te,B)||te);const re=$!=="/"&&$.endsWith("/")?$.length-1:$.length;let ce=K===$||!a&&K.startsWith($)&&K.charAt(re)==="/",ve=te!=null&&(te===$||!a&&te.startsWith($)&&te.charAt($.length)==="/"),M={isActive:ce,isPending:ve,isTransitioning:j},R=ce?e:void 0,N;typeof i=="function"?N=i(M):N=[i,ce?"active":null,ve?"pending":null,j?"transitioning":null].filter(Boolean).join(" ");let k=typeof l=="function"?l(M):l;return U.createElement(Rt,{...m,"aria-current":R,className:N,ref:y,style:k,to:u,viewTransition:d},typeof p=="function"?p(M):p)});m2.displayName="NavLink";var g2=U.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:a,state:l,method:u=Od,action:d,onSubmit:p,relative:m,preventScrollReset:y,viewTransition:E,...w},I)=>{let C=T2(),B=w2(d,{relative:m}),j=u.toLowerCase()==="get"?"get":"post",$=typeof d=="string"&&PS.test(d),K=te=>{if(p&&p(te),te.defaultPrevented)return;te.preventDefault();let re=te.nativeEvent.submitter,ce=(re==null?void 0:re.getAttribute("formmethod"))||u;C(re||te.currentTarget,{fetcherKey:e,method:ce,navigate:t,replace:a,state:l,relative:m,preventScrollReset:y,viewTransition:E})};return U.createElement("form",{ref:I,method:j,action:B,onSubmit:i?p:K,...w,"data-discover":!$&&n==="render"?"true":void 0})});g2.displayName="Form";function _2(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function MS(n){let e=U.useContext(yl);return mt(e,_2(n)),e}function y2(n,{target:e,replace:t,state:i,preventScrollReset:a,relative:l,viewTransition:u}={}){let d=El(),p=Hs(),m=Oc(n,{relative:l});return U.useCallback(y=>{if(Kx(y,e)){y.preventDefault();let E=t!==void 0?t:hc(p)===hc(m);d(n,{replace:E,state:i,preventScrollReset:a,relative:l,viewTransition:u})}},[p,d,m,t,i,e,n,a,l,u])}var v2=0,E2=()=>`__${String(++v2)}__`;function T2(){let{router:n}=MS("useSubmit"),{basename:e}=U.useContext(wi),t=Fx();return U.useCallback(async(i,a={})=>{let{action:l,method:u,encType:d,formData:p,body:m}=Zx(i,e);if(a.navigate===!1){let y=a.fetcherKey||E2();await n.fetch(y,t,a.action||l,{preventScrollReset:a.preventScrollReset,formData:p,body:m,formMethod:a.method||u,formEncType:a.encType||d,flushSync:a.flushSync})}else await n.navigate(a.action||l,{preventScrollReset:a.preventScrollReset,formData:p,body:m,formMethod:a.method||u,formEncType:a.encType||d,replace:a.replace,state:a.state,fromRouteId:t,flushSync:a.flushSync,viewTransition:a.viewTransition})},[n,e,t])}function w2(n,{relative:e}={}){let{basename:t}=U.useContext(wi),i=U.useContext(Zi);mt(i,"useFormAction must be used inside a RouteContext");let[a]=i.matches.slice(-1),l={...Oc(n||".",{relative:e})},u=Hs();if(n==null){l.search=u.search;let d=new URLSearchParams(l.search),p=d.getAll("index");if(p.some(y=>y==="")){d.delete("index"),p.filter(E=>E).forEach(E=>d.append("index",E));let y=d.toString();l.search=y?`?${y}`:""}}return(!n||n===".")&&a.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:xr([t,l.pathname])),hc(l)}function b2(n,e={}){let t=U.useContext(RS);mt(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=MS("useViewTransitionState"),a=Oc(n,{relative:e.relative});if(!t.isTransitioning)return!1;let l=kr(t.currentLocation.pathname,i)||t.currentLocation.pathname,u=kr(t.nextLocation.pathname,i)||t.nextLocation.pathname;return qd(a.pathname,u)!=null||qd(a.pathname,l)!=null}[...a2];const S2=""+new URL("logo-g-kdmh2X.png",import.meta.url).href;var wg={exports:{}},bg,KT;function A2(){if(KT)return bg;KT=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return bg=n,bg}var Sg,QT;function R2(){if(QT)return Sg;QT=1;var n=A2();function e(){}function t(){}return t.resetWarningCache=e,Sg=function(){function i(u,d,p,m,y,E){if(E!==n){var w=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw w.name="Invariant Violation",w}}i.isRequired=i;function a(){return i}var l={array:i,bigint:i,bool:i,func:i,number:i,object:i,string:i,symbol:i,any:i,arrayOf:a,element:i,elementType:i,instanceOf:a,node:i,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:t,resetWarningCache:e};return l.PropTypes=l,l},Sg}var XT;function I2(){return XT||(XT=1,wg.exports=R2()()),wg.exports}var C2=I2();const Ce=TS(C2);var N2=["color","size","title","className"];function Kg(){return Kg=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)({}).hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Kg.apply(null,arguments)}function x2(n,e){if(n==null)return{};var t,i,a=O2(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(i=0;i<l.length;i++)t=l[i],e.indexOf(t)===-1&&{}.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}function O2(n,e){if(n==null)return{};var t={};for(var i in n)if({}.hasOwnProperty.call(n,i)){if(e.indexOf(i)!==-1)continue;t[i]=n[i]}return t}var VS=U.forwardRef(function(n,e){var t=n.color,i=t===void 0?"currentColor":t,a=n.size,l=a===void 0?"1em":a,u=n.title,d=u===void 0?null:u,p=n.className,m=p===void 0?"":p,y=x2(n,N2);return pt.createElement("svg",Kg({ref:e,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:l,height:l,fill:i,className:["bi","bi-box-arrow-right",m].filter(Boolean).join(" ")},y),d?pt.createElement("title",null,d):null,pt.createElement("path",{fillRule:"evenodd",d:"M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"}),pt.createElement("path",{fillRule:"evenodd",d:"M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"}))});VS.propTypes={color:Ce.string,size:Ce.oneOfType([Ce.string,Ce.number]),title:Ce.string,className:Ce.string};var D2=["color","size","title","className"];function Qg(){return Qg=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)({}).hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Qg.apply(null,arguments)}function k2(n,e){if(n==null)return{};var t,i,a=P2(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(i=0;i<l.length;i++)t=l[i],e.indexOf(t)===-1&&{}.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}function P2(n,e){if(n==null)return{};var t={};for(var i in n)if({}.hasOwnProperty.call(n,i)){if(e.indexOf(i)!==-1)continue;t[i]=n[i]}return t}var K_=U.forwardRef(function(n,e){var t=n.color,i=t===void 0?"currentColor":t,a=n.size,l=a===void 0?"1em":a,u=n.title,d=u===void 0?null:u,p=n.className,m=p===void 0?"":p,y=k2(n,D2);return pt.createElement("svg",Qg({ref:e,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:l,height:l,fill:i,className:["bi","bi-clipboard2",m].filter(Boolean).join(" ")},y),d?pt.createElement("title",null,d):null,pt.createElement("path",{d:"M3.5 2a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5H12a.5.5 0 0 1 0-1h.5A1.5 1.5 0 0 1 14 2.5v12a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-12A1.5 1.5 0 0 1 3.5 1H4a.5.5 0 0 1 0 1z"}),pt.createElement("path",{d:"M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5"}))});K_.propTypes={color:Ce.string,size:Ce.oneOfType([Ce.string,Ce.number]),title:Ce.string,className:Ce.string};var M2=["color","size","title","className"];function Xg(){return Xg=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)({}).hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Xg.apply(null,arguments)}function V2(n,e){if(n==null)return{};var t,i,a=L2(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(i=0;i<l.length;i++)t=l[i],e.indexOf(t)===-1&&{}.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}function L2(n,e){if(n==null)return{};var t={};for(var i in n)if({}.hasOwnProperty.call(n,i)){if(e.indexOf(i)!==-1)continue;t[i]=n[i]}return t}var LS=U.forwardRef(function(n,e){var t=n.color,i=t===void 0?"currentColor":t,a=n.size,l=a===void 0?"1em":a,u=n.title,d=u===void 0?null:u,p=n.className,m=p===void 0?"":p,y=V2(n,M2);return pt.createElement("svg",Xg({ref:e,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:l,height:l,fill:i,className:["bi","bi-github",m].filter(Boolean).join(" ")},y),d?pt.createElement("title",null,d):null,pt.createElement("path",{d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"}))});LS.propTypes={color:Ce.string,size:Ce.oneOfType([Ce.string,Ce.number]),title:Ce.string,className:Ce.string};var U2=["color","size","title","className"];function Zg(){return Zg=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)({}).hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Zg.apply(null,arguments)}function j2(n,e){if(n==null)return{};var t,i,a=F2(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(i=0;i<l.length;i++)t=l[i],e.indexOf(t)===-1&&{}.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}function F2(n,e){if(n==null)return{};var t={};for(var i in n)if({}.hasOwnProperty.call(n,i)){if(e.indexOf(i)!==-1)continue;t[i]=n[i]}return t}var US=U.forwardRef(function(n,e){var t=n.color,i=t===void 0?"currentColor":t,a=n.size,l=a===void 0?"1em":a,u=n.title,d=u===void 0?null:u,p=n.className,m=p===void 0?"":p,y=j2(n,U2);return pt.createElement("svg",Zg({ref:e,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:l,height:l,fill:i,className:["bi","bi-instagram",m].filter(Boolean).join(" ")},y),d?pt.createElement("title",null,d):null,pt.createElement("path",{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"}))});US.propTypes={color:Ce.string,size:Ce.oneOfType([Ce.string,Ce.number]),title:Ce.string,className:Ce.string};var z2=["color","size","title","className"];function Jg(){return Jg=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)({}).hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Jg.apply(null,arguments)}function B2(n,e){if(n==null)return{};var t,i,a=H2(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(i=0;i<l.length;i++)t=l[i],e.indexOf(t)===-1&&{}.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}function H2(n,e){if(n==null)return{};var t={};for(var i in n)if({}.hasOwnProperty.call(n,i)){if(e.indexOf(i)!==-1)continue;t[i]=n[i]}return t}var jS=U.forwardRef(function(n,e){var t=n.color,i=t===void 0?"currentColor":t,a=n.size,l=a===void 0?"1em":a,u=n.title,d=u===void 0?null:u,p=n.className,m=p===void 0?"":p,y=B2(n,z2);return pt.createElement("svg",Jg({ref:e,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:l,height:l,fill:i,className:["bi","bi-person-circle",m].filter(Boolean).join(" ")},y),d?pt.createElement("title",null,d):null,pt.createElement("path",{d:"M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"}),pt.createElement("path",{fillRule:"evenodd",d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"}))});jS.propTypes={color:Ce.string,size:Ce.oneOfType([Ce.string,Ce.number]),title:Ce.string,className:Ce.string};var q2=["color","size","title","className"];function e_(){return e_=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)({}).hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},e_.apply(null,arguments)}function G2(n,e){if(n==null)return{};var t,i,a=W2(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(i=0;i<l.length;i++)t=l[i],e.indexOf(t)===-1&&{}.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}function W2(n,e){if(n==null)return{};var t={};for(var i in n)if({}.hasOwnProperty.call(n,i)){if(e.indexOf(i)!==-1)continue;t[i]=n[i]}return t}var FS=U.forwardRef(function(n,e){var t=n.color,i=t===void 0?"currentColor":t,a=n.size,l=a===void 0?"1em":a,u=n.title,d=u===void 0?null:u,p=n.className,m=p===void 0?"":p,y=G2(n,q2);return pt.createElement("svg",e_({ref:e,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:l,height:l,fill:i,className:["bi","bi-twitter",m].filter(Boolean).join(" ")},y),d?pt.createElement("title",null,d):null,pt.createElement("path",{d:"M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"}))});FS.propTypes={color:Ce.string,size:Ce.oneOfType([Ce.string,Ce.number]),title:Ce.string,className:Ce.string};var Y2=["color","size","title","className"];function t_(){return t_=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)({}).hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},t_.apply(null,arguments)}function $2(n,e){if(n==null)return{};var t,i,a=K2(n,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(i=0;i<l.length;i++)t=l[i],e.indexOf(t)===-1&&{}.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}function K2(n,e){if(n==null)return{};var t={};for(var i in n)if({}.hasOwnProperty.call(n,i)){if(e.indexOf(i)!==-1)continue;t[i]=n[i]}return t}var zS=U.forwardRef(function(n,e){var t=n.color,i=t===void 0?"currentColor":t,a=n.size,l=a===void 0?"1em":a,u=n.title,d=u===void 0?null:u,p=n.className,m=p===void 0?"":p,y=$2(n,Y2);return pt.createElement("svg",t_({ref:e,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:l,height:l,fill:i,className:["bi","bi-youtube",m].filter(Boolean).join(" ")},y),d?pt.createElement("title",null,d):null,pt.createElement("path",{d:"M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"}))});zS.propTypes={color:Ce.string,size:Ce.oneOfType([Ce.string,Ce.number]),title:Ce.string,className:Ce.string};const Q2=({user:n,setUser:e,adminLoggedIn:t,setAdminLoggedIn:i})=>{const[a,l]=U.useState(!1),[u,d]=U.useState(!1),p=El();U.useEffect(()=>{const E=()=>{l(window.scrollY>0)};return window.addEventListener("scroll",E),()=>window.removeEventListener("scroll",E)},[]);const m=()=>{d(!u)},y=()=>{console.log("Logout clicked"),e(null),i(!1),localStorage.removeItem("user"),localStorage.removeItem("adminLoggedIn"),d(!1),alert("Logout successfully"),p("/")};return b.jsxs("header",{className:`menu-bar${a?" menu-bar--blur":""}`,children:[b.jsxs("div",{className:"menu-bar-logo",children:[b.jsx("img",{src:S2,alt:"Logo"}),b.jsx(Rt,{to:"/",children:"Prime"})]}),b.jsx("div",{className:"menu-bar-toggle",children:b.jsx("button",{className:"menu-toggle",onClick:m,"aria-label":"Toggle menu",children:"☰"})}),b.jsx("nav",{className:`menu-bar-nav${u?" open":""}`,children:b.jsx("ul",{children:t?b.jsxs(b.Fragment,{children:[b.jsx("li",{children:b.jsx(Rt,{to:"/admin",onClick:()=>d(!1),className:"bg-color",children:"Admin Dashboard"})}),b.jsx("li",{children:b.jsx(Rt,{to:"/gallery",onClick:()=>d(!1),className:"bg-color",children:"Gallery"})}),b.jsx("li",{children:b.jsx(Rt,{to:"/trending",onClick:()=>d(!1),className:"bg-color",children:"Trending"})}),b.jsx("li",{children:b.jsx(Rt,{to:"/admin/profile",onClick:()=>d(!1),className:"bg-color",children:"Admin Profile"})}),b.jsx("li",{children:b.jsx(VS,{size:24,className:"user-logo-a user-logo-pointer logout-icon",onClick:y,title:"Logout",style:{cursor:"pointer",color:"white"}})})]}):b.jsxs(b.Fragment,{children:[b.jsx("li",{children:b.jsx(Rt,{to:"/",onClick:()=>d(!1),className:"bg-color",children:"Home"})}),b.jsx("li",{children:b.jsx(Rt,{to:"/gallery",onClick:()=>d(!1),className:"bg-color",children:"Gallery"})}),b.jsx("li",{children:b.jsx(Rt,{to:"/trending",onClick:()=>d(!1),className:"bg-color",children:"Trending"})}),b.jsx("li",{children:b.jsx(Rt,{to:"/about",onClick:()=>d(!1),className:"bg-color",children:"About"})}),b.jsx("li",{children:b.jsx(Rt,{to:"/contact",onClick:()=>d(!1),className:"bg-color",children:"Contact"})}),!n&&b.jsx(b.Fragment,{children:b.jsxs("div",{className:"ls",children:[b.jsx("li",{className:"menu-bar-login",children:b.jsx(Rt,{to:"/login",onClick:()=>d(!1),children:"Login"})}),b.jsx("li",{className:"menu-bar-signup",children:b.jsx(Rt,{to:"/signup",onClick:()=>d(!1),children:"Sign-Up"})})]})}),n&&b.jsxs(b.Fragment,{children:[b.jsx("li",{className:"menu-bar-profile-small-screen",children:b.jsx(Rt,{to:"/profile",onClick:()=>d(!1),children:"Profile"})}),b.jsx("li",{className:"menu-bar-logout-small-screen",children:b.jsx(Rt,{to:"/login",onClick:()=>{y(),d(!1)},children:"Logout"})}),b.jsxs("li",{className:"menu-bar-user-logo ",children:[b.jsx(jS,{size:24,className:"user-logo user-logo-pointer",onClick:()=>d(!u)}),u&&b.jsx("div",{className:"user-menu-dropdown",children:b.jsxs("div",{className:"user-menu-item",children:[b.jsx("li",{children:n&&b.jsx(Rt,{to:"/profile",onClick:()=>d(!1),className:"user-menu-link",children:"Profile"})}),b.jsxs("li",{children:[b.jsx(Rt,{to:"/login",onClick:y,className:"user-menu-link",children:"Logout"})," "]})]})})]})]})]})})})]})};let Td=20;class X2 extends U.Component{render(){return b.jsx(b.Fragment,{children:b.jsx("footer",{children:b.jsxs("div",{className:"footer-content",children:[b.jsxs("div",{className:"footer-section-First",children:[b.jsx("h2",{children:"Contact Us"}),b.jsxs("a",{children:["Website: ",b.jsx("a",{href:"https://shrikant-pawar-45.github.io/Xprime/",style:{color:"white"},children:"www.xprime-prompt.com"})]}),b.jsx("p",{children:"Email: Xprime-prompt@gmail.com"})]}),b.jsxs("div",{className:"footer-section-Middle",children:[b.jsx("h2",{children:"Xprime"}),b.jsx("p",{children:"© 2025 Xprime. All rights reserved."})]}),b.jsx("div",{className:"footer-section-Left",children:b.jsx("ul",{children:b.jsxs("li",{children:[b.jsx("a",{href:"",children:b.jsx(US,{size:Td})}),b.jsx("a",{href:"",children:b.jsx(FS,{size:Td})}),b.jsx("a",{href:"",children:b.jsx(LS,{size:Td})}),b.jsx("a",{href:"",children:b.jsx(zS,{size:Td})})]})})})]})})})}}const Z2=[{image:"https://prompthero.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWxrWVRkbU1XRTJZUzAxT1RSbUxUUmxaV1F0WWpZelppMWxZek15TURrME56STNaakFHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0=--8f9c34fac05a95ae36047bee3cde3b88dd6cc6ba/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBPZ2wzWldKd09oUnlaWE5wZW1WZmRHOWZiR2x0YVhSYkIya0NBQWd3T2dwellYWmxjbnNKT2hOemRXSnpZVzF3YkdWZmJXOWtaVWtpQjI5dUJqb0dSVlE2Q25OMGNtbHdWRG9PYVc1MFpYSnNZV05sVkRvTWNYVmhiR2wwZVdsZiIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--9e9280d525ba1fc2f95c971c0fbcb4a2ca8b55dd/prompthero-prompt-b8b5880994e.png",title:"",prompt:"An image of a woman sitting down with her body slightly turned to her left. She is looking at the camera with a relaxed expression. Her right arm is resting by her side, and her left arm is bent with her hand on her thigh. She has light-colored wavy hair over her shoulders. She wears a patterned blouse with rolled-up sleeves and light-colored pants. The background is softly blurred with hints of an airplane and airport equipment, bathed in the warm glow of dawn or dusk.",id:1},{image:"https://prompthero.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWxpWWpRNE5XTTVOaTB5TmpNeExUUXdaRFl0WWpBd09TMDNOelF5TmpBMFlXTTBNR1FHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0=--89c035c570f1cc70f69490b9fca6239fa04eb115/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBPZ2wzWldKd09oUnlaWE5wZW1WZmRHOWZiR2x0YVhSYkIya0NBQWd3T2dwellYWmxjbnNKT2hOemRXSnpZVzF3YkdWZmJXOWtaVWtpQjI5dUJqb0dSVlE2Q25OMGNtbHdWRG9PYVc1MFpYSnNZV05sVkRvTWNYVmhiR2wwZVdsZiIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--9e9280d525ba1fc2f95c971c0fbcb4a2ca8b55dd/prompthero-prompt-81c018b9647.png",title:"",prompt:"portrait of a young ranger man with a cold stare wearing a ((black cloak)) and armor (holding a sword), grizzled, bald, angry, grim, dark colors, forest background, sharp, highly detailed, concept art, realistic hands, dynamic pose, dynamic shotfantastic location, majestic cluttered environment)), full body 8k unity render, action shot, skin pores, very dark lighting, heavy shadows, detailed, detailed face, (vibrant, photorealistic, realistic, dramatic, dark, sharp focus, 8k), (weathered damaged old worn leather outfit:1.4), (intricate:1.4), decadent, (highly detailed:1.4), digital painting, octane render, artstation, concept art, smooth, sharp focus, illustration, art by artgerm, (loish:0.23), wlop ilya kuvshinov, and greg rutkowski and alphonse mucha gracias, (global illumination, studio light, volumetric light), heavy rain, particles floating, dim light, trim light, two-tone lighting, <lora:epiNoiseoffset_v2:2>",id:2},{image:"https://prompthero.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWxrTnpJNVltTmpOeTAwWXpFeExUUXdOek10T1dNNU5TMHlZemhrWlRZd01HRTRNV1VHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0=--23abb198aa073f59fdb3868bf7b36c279c3a0602/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBPZ2wzWldKd09oUnlaWE5wZW1WZmRHOWZiR2x0YVhSYkIya0NBQWd3T2dwellYWmxjbnNKT2hOemRXSnpZVzF3YkdWZmJXOWtaVWtpQjI5dUJqb0dSVlE2Q25OMGNtbHdWRG9PYVc1MFpYSnNZV05sVkRvTWNYVmhiR2wwZVdsZiIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--9e9280d525ba1fc2f95c971c0fbcb4a2ca8b55dd/prompthero-prompt-714df5f34e6.png",title:"",prompt:"A striking fashion runway scene featuring a tall, confident model walking down the catwalk. She wears a chic all-black ensemble: a deep V-neck black mini dress with a wrap-style skirt creating an asymmetrical hemline, paired with a loose, long black blazer that flows as she walks. The outfit is accessorized with a bold chunky gold chain necklace, a structured black handbag with gold hardware, and black lace-up combat boots. The model has long, sleek dark hair worn down, minimal natural makeup, and a fierce, focused expression. The background is a dimly lit runway with a blurred audience seated on either side, dramatic lighting casting soft shadows on the floor, capturing the high-fashion atmosphere. Hyper-realistic style, emphasis on fabric texture and metallic details, cinematic mood.",id:3},{image:"https://prompthero.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWxpTldSbU4yVXlNUzFqWWpsbExUUmlaR0V0WW1ZNVppMDJOalV6WVdJNVpXUmxZemNHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0=--c044840f0e236ba43fcf53e3aed34b13d48922ba/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBPZ2wzWldKd09oUnlaWE5wZW1WZmRHOWZiR2x0YVhSYkIya0NBQWd3T2dwellYWmxjbnNKT2hOemRXSnpZVzF3YkdWZmJXOWtaVWtpQjI5dUJqb0dSVlE2Q25OMGNtbHdWRG9PYVc1MFpYSnNZV05sVkRvTWNYVmhiR2wwZVdsZiIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--9e9280d525ba1fc2f95c971c0fbcb4a2ca8b55dd/prompthero-prompt-46041c0dbdf.png",title:"",prompt:"Mood: serenity; atmosphere peaceful; fashion photography; Mario Testino; Female Model full body; design dress; ultralight shapes; detailed skin; beautiful eyes; incredible body composition --ar 4:6 --chaos 7 --s 1000 --q 5  --q 2    --s 750 --v 5",id:4},{image:"https://prompthero.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWt4WWpSbE1HTmlNeTAxTVRGa0xUUmxOMkV0WWpFME9TMHlPRFE1WWpWak9USXdNRE1HT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0=--2556ddee9565cfde19b31a5544c09d7827ee6366/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBPZ2wzWldKd09oUnlaWE5wZW1WZmRHOWZiR2x0YVhSYkIya0NBQWd3T2dwellYWmxjbnNKT2hOemRXSnpZVzF3YkdWZmJXOWtaVWtpQjI5dUJqb0dSVlE2Q25OMGNtbHdWRG9PYVc1MFpYSnNZV05sVkRvTWNYVmhiR2wwZVdsZiIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--9e9280d525ba1fc2f95c971c0fbcb4a2ca8b55dd/prompthero-prompt-9f749cbcbd1.png",title:"",prompt:"modelshoot style, (extremely detailed CG unity 8k wallpaper), full shot body photo of the most beautiful artwork in the world, female medieval rugged thief, ruined coat, angry, night, dark dirty alley in the background, dirty, ugly environment, professional majestic oil painting by Ed Blinkey, Atey Ghailan, Studio Ghibli, by Jeremy Mann, Greg Manchess, Antonio Moro, trending on ArtStation, trending on CGSociety, Intricate, High Detail, Sharp focus, dramatic, photorealistic painting art by midjourney and greg rutkowski",id:5},{image:"https://prompthero.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWt3TlRWallUSTNZeTB5TXpZeUxUUTFOamt0WWpCaFl5MDBPV0V4TjJObE5UUmpZVElHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0=--f8ac62650ef0662635655a2cba4b9e18afef1041/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBPZ2wzWldKd09oUnlaWE5wZW1WZmRHOWZiR2x0YVhSYkIya0NBQWd3T2dwellYWmxjbnNKT2hOemRXSnpZVzF3YkdWZmJXOWtaVWtpQjI5dUJqb0dSVlE2Q25OMGNtbHdWRG9PYVc1MFpYSnNZV05sVkRvTWNYVmhiR2wwZVdsZiIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--9e9280d525ba1fc2f95c971c0fbcb4a2ca8b55dd/prompthero-prompt-276ea4fb893.png",title:"",prompt:"Image Type: Digital photograph, formal portrait.  Overall Photographic Style: Photorealistic, high-resolution, sharp focus on the subject's face, professional and classic portraiture. The style emphasizes clarity, detail, and a timeless quality.  Lighting: Soft, even, and diffused lighting. The main light source appears to be from the front-left, creating subtle highlights on the forehead, cheekbones, and the top of the hair. There are gentle, soft shadows on the right side of the face, defining contours without being harsh. The overall illumination is balanced and natural.  Depth of Field: Shallow to moderate depth of field. The subject's face and upper body are in sharp focus, while the background is subtly blurred, providing a soft, indistinct backdrop that keeps the focus entirely on the subject.  Color Palette: Monochromatic (black and white tones). The image exhibits a rich grayscale range, with deep blacks in the suit, bright whites in the hair and shirt collar, and a full spectrum of nuanced mid-grays",id:6},{image:"https://prompthero.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWs0WVdObU5EZ3paQzB3TmpBeUxUUTNOek10T0Raak5DMDNaamxqWkRBMk56QTFNMlFHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0=--5e5150dfde7263e5a8848a0e89cd8e18e80cf89e/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9MWm05eWJXRjBPZ2wzWldKd09oUnlaWE5wZW1WZmRHOWZiR2x0YVhSYkIya0NBQWd3T2dwellYWmxjbnNKT2hOemRXSnpZVzF3YkdWZmJXOWtaVWtpQjI5dUJqb0dSVlE2Q25OMGNtbHdWRG9PYVc1MFpYSnNZV05sVkRvTWNYVmhiR2wwZVdsZiIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--9e9280d525ba1fc2f95c971c0fbcb4a2ca8b55dd/prompthero-prompt-ed3f5fb81b5.png",title:"Man with Black dress",prompt:"A captivating portrait focusing on the character's face, now reimagined with a more serious, intense, but hot expression. His eyes exude raw emotion while his jet black hair frames his features powerfully. The pose is subtly adjusted—his shoulders are slightly broader, lending him an enhanced presence and a confident stance. The background remains a dark dance studio, featuring low ambient lighting, gentle reflections from mirrored surfaces, and the intimate expanse of a rehearsal space. The overall scene preserves the original art style, with painterly brushstrokes and a muted, atmospheric color palette that highlights the renewed expressiveness and strength of the character’s visage.",id:7}];function J2(){const[n,e]=U.useState(0),[t,i]=U.useState(""),a=Z2.slice();return U.useEffect(()=>{const l=setInterval(()=>{e(u=>(u+1)%a.length)},3e3);return()=>clearInterval(l)},[a.length]),U.useEffect(()=>{fetch("https://xprime-zxu1.onrender.com/api/hello").then(u=>u.text()).then(u=>{i(u),console.log("Backend says:",u)}).catch(u=>{console.error("Error fetching backend message:",u),i("⚠️ Could not connect to backend.")})},[]),b.jsx(b.Fragment,{children:b.jsxs("div",{className:"main-content-Top",children:[b.jsxs("div",{className:"main-content-Top--conatiner",children:[b.jsxs("h1",{children:[b.jsx("b",{children:"X"})," prime"]}),b.jsxs("p",{children:[b.jsx("b",{children:" Xprime – A Prompt-to-Image Showcase "}),"Explore a visual gallery of AI-generated images, each paired with the prompt that created it. Get inspired, copy any prompt, and generate your own masterpiece using your favorite AI tool. Simple, creative, and ready to spark ideas."]}),b.jsx("div",{className:"main-content-Top--conatiner--icons",children:b.jsx("li",{children:b.jsx(Rt,{to:"/gallery",children:"Gallery"})})})]}),b.jsx("div",{className:"sidepanel",children:b.jsxs("div",{className:"sidepanel--container",children:[b.jsx("div",{className:"slider",children:b.jsxs("div",{className:"slider-image-container",children:[b.jsx("img",{src:a[n].image,alt:a[n].title,className:"slider-image"}),b.jsx("div",{className:"slider-overlay"})]})}),b.jsx("div",{className:"slider-dots",children:a.map((l,u)=>b.jsx("span",{className:`slider-dot${u===n?" active":""}`},u))})]})})]})})}const eO=""+new URL("user-zd05kP0W.png",import.meta.url).href,tO=()=>{};var ZT={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BS={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oe=function(n,e){if(!n)throw Tl(e)},Tl=function(n){return new Error("Firebase Database ("+BS.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HS=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let a=n.charCodeAt(i);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(a=65536+((a&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},nO=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const a=n[t++];if(a<128)e[i++]=String.fromCharCode(a);else if(a>191&&a<224){const l=n[t++];e[i++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=n[t++],u=n[t++],d=n[t++],p=((a&7)<<18|(l&63)<<12|(u&63)<<6|d&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],u=n[t++];e[i++]=String.fromCharCode((a&15)<<12|(l&63)<<6|u&63)}}return e.join("")},Q_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let a=0;a<n.length;a+=3){const l=n[a],u=a+1<n.length,d=u?n[a+1]:0,p=a+2<n.length,m=p?n[a+2]:0,y=l>>2,E=(l&3)<<4|d>>4;let w=(d&15)<<2|m>>6,I=m&63;p||(I=64,u||(w=64)),i.push(t[y],t[E],t[w],t[I])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(HS(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):nO(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let a=0;a<n.length;){const l=t[n.charAt(a++)],d=a<n.length?t[n.charAt(a)]:0;++a;const m=a<n.length?t[n.charAt(a)]:64;++a;const E=a<n.length?t[n.charAt(a)]:64;if(++a,l==null||d==null||m==null||E==null)throw new iO;const w=l<<2|d>>4;if(i.push(w),m!==64){const I=d<<4&240|m>>2;if(i.push(I),E!==64){const C=m<<6&192|E;i.push(C)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class iO extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qS=function(n){const e=HS(n);return Q_.encodeByteArray(e,!0)},Gd=function(n){return qS(n).replace(/\./g,"")},Wd=function(n){try{return Q_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rO(n){return GS(void 0,n)}function GS(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!sO(t)||(n[t]=GS(n[t],e[t]));return n}function sO(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aO(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oO=()=>aO().__FIREBASE_DEFAULTS__,lO=()=>{if(typeof process>"u"||typeof ZT>"u")return;const n=ZT.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},uO=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Wd(n[1]);return e&&JSON.parse(e)},Pf=()=>{try{return tO()||oO()||lO()||uO()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},WS=n=>{var e,t;return(t=(e=Pf())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},X_=n=>{const e=WS(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},YS=()=>{var n;return(n=Pf())===null||n===void 0?void 0:n.config},$S=n=>{var e;return(e=Pf())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(n){return n.endsWith(".cloudworkstations.dev")}async function Vf(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z_(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",a=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Gd(JSON.stringify(t)),Gd(JSON.stringify(u)),""].join(".")}const Ju={};function cO(){const n={prod:[],emulator:[]};for(const e of Object.keys(Ju))Ju[e]?n.emulator.push(e):n.prod.push(e);return n}function hO(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let JT=!1;function Lf(n,e){if(typeof window>"u"||typeof document>"u"||!Fr(window.location.host)||Ju[n]===e||Ju[n]||JT)return;Ju[n]=e;function t(w){return`__firebase__banner__${w}`}const i="__firebase__banner",l=cO().prod.length>0;function u(){const w=document.getElementById(i);w&&w.remove()}function d(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function p(w,I){w.setAttribute("width","24"),w.setAttribute("id",I),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function m(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{JT=!0,u()},w}function y(w,I){w.setAttribute("id",I),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function E(){const w=hO(i),I=t("text"),C=document.getElementById(I)||document.createElement("span"),B=t("learnmore"),j=document.getElementById(B)||document.createElement("a"),$=t("preprendIcon"),K=document.getElementById($)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const te=w.element;d(te),y(j,B);const re=m();p(K,$),te.append(K,C,j,re),document.body.appendChild(te)}l?(C.innerText="Preview backend disconnected.",K.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(K.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",I)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",E):E()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function J_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_n())}function dO(){var n;const e=(n=Pf())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function fO(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function KS(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function QS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pO(){const n=_n();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function mO(){return BS.NODE_ADMIN===!0}function gO(){return!dO()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function XS(){try{return typeof indexedDB=="object"}catch{return!1}}function ZS(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(i);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var l;e(((l=a.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}function _O(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yO="FirebaseError";class ai extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=yO,Object.setPrototypeOf(this,ai.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wa.prototype.create)}}class Wa{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],u=l?vO(l,i):"Error",d=`${this.serviceName}: ${u} (${a}).`;return new ai(a,d,i)}}function vO(n,e){return n.replace(EO,(t,i)=>{const a=e[i];return a!=null?String(a):`<${i}?>`})}const EO=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(n){return JSON.parse(n)}function jt(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JS=function(n){let e={},t={},i={},a="";try{const l=n.split(".");e=dc(Wd(l[0])||""),t=dc(Wd(l[1])||""),a=l[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:a}},TO=function(n){const e=JS(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},wO=function(n){const e=JS(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function al(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function n_(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Yd(n,e,t){const i={};for(const a in n)Object.prototype.hasOwnProperty.call(n,a)&&(i[a]=e.call(t,n[a],a,n));return i}function Pr(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const a of t){if(!i.includes(a))return!1;const l=n[a],u=e[a];if(ew(l)&&ew(u)){if(!Pr(l,u))return!1}else if(l!==u)return!1}for(const a of i)if(!t.includes(a))return!1;return!0}function ew(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Yu(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[a,l]=i.split("=");e[decodeURIComponent(a)]=decodeURIComponent(l)}}),e}function $u(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bO{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let E=0;E<16;E++)i[E]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let E=0;E<16;E++)i[E]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let E=16;E<80;E++){const w=i[E-3]^i[E-8]^i[E-14]^i[E-16];i[E]=(w<<1|w>>>31)&4294967295}let a=this.chain_[0],l=this.chain_[1],u=this.chain_[2],d=this.chain_[3],p=this.chain_[4],m,y;for(let E=0;E<80;E++){E<40?E<20?(m=d^l&(u^d),y=1518500249):(m=l^u^d,y=1859775393):E<60?(m=l&u|d&(l|u),y=2400959708):(m=l^u^d,y=3395469782);const w=(a<<5|a>>>27)+m+p+y+i[E]&4294967295;p=d,d=u,u=(l<<30|l>>>2)&4294967295,l=a,a=w}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+d&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let a=0;const l=this.buf_;let u=this.inbuf_;for(;a<t;){if(u===0)for(;a<=i;)this.compress_(e,a),a+=this.blockSize;if(typeof e=="string"){for(;a<t;)if(l[u]=e.charCodeAt(a),++u,++a,u===this.blockSize){this.compress_(l),u=0;break}}else for(;a<t;)if(l[u]=e[a],++u,++a,u===this.blockSize){this.compress_(l),u=0;break}}this.inbuf_=u,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let a=this.blockSize-1;a>=56;a--)this.buf_[a]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let a=0;a<5;a++)for(let l=24;l>=0;l-=8)e[i]=this.chain_[a]>>l&255,++i;return e}}function SO(n,e){const t=new AO(n,e);return t.subscribe.bind(t)}class AO{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let a;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");RO(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:i},a.next===void 0&&(a.next=Ag),a.error===void 0&&(a.error=Ag),a.complete===void 0&&(a.complete=Ag);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function RO(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ag(){}function ey(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IO=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let a=n.charCodeAt(i);if(a>=55296&&a<=56319){const l=a-55296;i++,oe(i<n.length,"Surrogate pair missing trail surrogate.");const u=n.charCodeAt(i)-56320;a=65536+(l<<10)+u}a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):a<65536?(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},Uf=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CO=1e3,NO=2,xO=4*60*60*1e3,OO=.5;function tw(n,e=CO,t=NO){const i=e*Math.pow(t,n),a=Math.round(OO*i*(Math.random()-.5)*2);return Math.min(xO,i+a)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(n){return n&&n._delegate?n._delegate:n}class Hn{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DO{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Mf;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&i.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(a)return null;throw l}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(PO(e))try{this.getOrInitializeService({instanceIdentifier:Na})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});i.resolve(l)}catch{}}}}clearInstance(e=Na){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Na){return this.instances.has(e)}getOptions(e=Na){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,u]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);i===d&&u.resolve(a)}return a}onInit(e,t){var i;const a=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(a))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(a,l);const u=this.instances.get(a);return u&&e(u,a),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const a of i)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:kO(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Na){return this.component?this.component.multipleInstances?e:Na:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kO(n){return n===Na?void 0:n}function PO(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MO{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new DO(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Le;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Le||(Le={}));const VO={debug:Le.DEBUG,verbose:Le.VERBOSE,info:Le.INFO,warn:Le.WARN,error:Le.ERROR,silent:Le.SILENT},LO=Le.INFO,UO={[Le.DEBUG]:"log",[Le.VERBOSE]:"log",[Le.INFO]:"info",[Le.WARN]:"warn",[Le.ERROR]:"error"},jO=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),a=UO[e];if(a)console[a](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Dc{constructor(e){this.name=e,this._logLevel=LO,this._logHandler=jO,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?VO[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Le.DEBUG,...e),this._logHandler(this,Le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Le.VERBOSE,...e),this._logHandler(this,Le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Le.INFO,...e),this._logHandler(this,Le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Le.WARN,...e),this._logHandler(this,Le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Le.ERROR,...e),this._logHandler(this,Le.ERROR,...e)}}const FO=(n,e)=>e.some(t=>n instanceof t);let nw,iw;function zO(){return nw||(nw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function BO(){return iw||(iw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const e1=new WeakMap,i_=new WeakMap,t1=new WeakMap,Rg=new WeakMap,ty=new WeakMap;function HO(n){const e=new Promise((t,i)=>{const a=()=>{n.removeEventListener("success",l),n.removeEventListener("error",u)},l=()=>{t(Rs(n.result)),a()},u=()=>{i(n.error),a()};n.addEventListener("success",l),n.addEventListener("error",u)});return e.then(t=>{t instanceof IDBCursor&&e1.set(t,n)}).catch(()=>{}),ty.set(e,n),e}function qO(n){if(i_.has(n))return;const e=new Promise((t,i)=>{const a=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",u),n.removeEventListener("abort",u)},l=()=>{t(),a()},u=()=>{i(n.error||new DOMException("AbortError","AbortError")),a()};n.addEventListener("complete",l),n.addEventListener("error",u),n.addEventListener("abort",u)});i_.set(n,e)}let r_={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return i_.get(n);if(e==="objectStoreNames")return n.objectStoreNames||t1.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Rs(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function GO(n){r_=n(r_)}function WO(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Ig(this),e,...t);return t1.set(i,e.sort?e.sort():[e]),Rs(i)}:BO().includes(n)?function(...e){return n.apply(Ig(this),e),Rs(e1.get(this))}:function(...e){return Rs(n.apply(Ig(this),e))}}function YO(n){return typeof n=="function"?WO(n):(n instanceof IDBTransaction&&qO(n),FO(n,zO())?new Proxy(n,r_):n)}function Rs(n){if(n instanceof IDBRequest)return HO(n);if(Rg.has(n))return Rg.get(n);const e=YO(n);return e!==n&&(Rg.set(n,e),ty.set(e,n)),e}const Ig=n=>ty.get(n);function n1(n,e,{blocked:t,upgrade:i,blocking:a,terminated:l}={}){const u=indexedDB.open(n,e),d=Rs(u);return i&&u.addEventListener("upgradeneeded",p=>{i(Rs(u.result),p.oldVersion,p.newVersion,Rs(u.transaction),p)}),t&&u.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),a&&p.addEventListener("versionchange",m=>a(m.oldVersion,m.newVersion,m))}).catch(()=>{}),d}const $O=["get","getKey","getAll","getAllKeys","count"],KO=["put","add","delete","clear"],Cg=new Map;function rw(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Cg.get(e))return Cg.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,a=KO.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(a||$O.includes(t)))return;const l=async function(u,...d){const p=this.transaction(u,a?"readwrite":"readonly");let m=p.store;return i&&(m=m.index(d.shift())),(await Promise.all([m[t](...d),a&&p.done]))[0]};return Cg.set(e,l),l}GO(n=>({...n,get:(e,t,i)=>rw(e,t)||n.get(e,t,i),has:(e,t)=>!!rw(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QO{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(XO(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function XO(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const s_="@firebase/app",sw="0.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr=new Dc("@firebase/app"),ZO="@firebase/app-compat",JO="@firebase/analytics-compat",eD="@firebase/analytics",tD="@firebase/app-check-compat",nD="@firebase/app-check",iD="@firebase/auth",rD="@firebase/auth-compat",sD="@firebase/database",aD="@firebase/data-connect",oD="@firebase/database-compat",lD="@firebase/functions",uD="@firebase/functions-compat",cD="@firebase/installations",hD="@firebase/installations-compat",dD="@firebase/messaging",fD="@firebase/messaging-compat",pD="@firebase/performance",mD="@firebase/performance-compat",gD="@firebase/remote-config",_D="@firebase/remote-config-compat",yD="@firebase/storage",vD="@firebase/storage-compat",ED="@firebase/firestore",TD="@firebase/ai",wD="@firebase/firestore-compat",bD="firebase",SD="11.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_="[DEFAULT]",AD={[s_]:"fire-core",[ZO]:"fire-core-compat",[eD]:"fire-analytics",[JO]:"fire-analytics-compat",[nD]:"fire-app-check",[tD]:"fire-app-check-compat",[iD]:"fire-auth",[rD]:"fire-auth-compat",[sD]:"fire-rtdb",[aD]:"fire-data-connect",[oD]:"fire-rtdb-compat",[lD]:"fire-fn",[uD]:"fire-fn-compat",[cD]:"fire-iid",[hD]:"fire-iid-compat",[dD]:"fire-fcm",[fD]:"fire-fcm-compat",[pD]:"fire-perf",[mD]:"fire-perf-compat",[gD]:"fire-rc",[_D]:"fire-rc-compat",[yD]:"fire-gcs",[vD]:"fire-gcs-compat",[ED]:"fire-fst",[wD]:"fire-fst-compat",[TD]:"fire-vertex","fire-js":"fire-js",[bD]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d=new Map,RD=new Map,o_=new Map;function aw(n,e){try{n.container.addComponent(e)}catch(t){Mr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function si(n){const e=n.name;if(o_.has(e))return Mr.debug(`There were multiple attempts to register component ${e}.`),!1;o_.set(e,n);for(const t of $d.values())aw(t,n);for(const t of RD.values())aw(t,n);return!0}function Br(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function wn(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ID={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Is=new Wa("app","Firebase",ID);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CD{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Hn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Is.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs=SD;function i1(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:a_,automaticDataCollectionEnabled:!0},e),a=i.name;if(typeof a!="string"||!a)throw Is.create("bad-app-name",{appName:String(a)});if(t||(t=YS()),!t)throw Is.create("no-options");const l=$d.get(a);if(l){if(Pr(t,l.options)&&Pr(i,l.config))return l;throw Is.create("duplicate-app",{appName:a})}const u=new MO(a);for(const p of o_.values())u.addComponent(p);const d=new CD(t,i,u);return $d.set(a,d),d}function kc(n=a_){const e=$d.get(n);if(!e&&n===a_&&YS())return i1();if(!e)throw Is.create("no-app",{appName:n});return e}function gn(n,e,t){var i;let a=(i=AD[n])!==null&&i!==void 0?i:n;t&&(a+=`-${t}`);const l=a.match(/\s|\//),u=e.match(/\s|\//);if(l||u){const d=[`Unable to register library "${a}" with version "${e}":`];l&&d.push(`library name "${a}" contains illegal characters (whitespace or "/")`),l&&u&&d.push("and"),u&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mr.warn(d.join(" "));return}si(new Hn(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ND="firebase-heartbeat-database",xD=1,fc="firebase-heartbeat-store";let Ng=null;function r1(){return Ng||(Ng=n1(ND,xD,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(fc)}catch(t){console.warn(t)}}}}).catch(n=>{throw Is.create("idb-open",{originalErrorMessage:n.message})})),Ng}async function OD(n){try{const t=(await r1()).transaction(fc),i=await t.objectStore(fc).get(s1(n));return await t.done,i}catch(e){if(e instanceof ai)Mr.warn(e.message);else{const t=Is.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Mr.warn(t.message)}}}async function ow(n,e){try{const i=(await r1()).transaction(fc,"readwrite");await i.objectStore(fc).put(e,s1(n)),await i.done}catch(t){if(t instanceof ai)Mr.warn(t.message);else{const i=Is.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Mr.warn(i.message)}}}function s1(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DD=1024,kD=30;class PD{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new VD(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=lw();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(u=>u.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats.length>kD){const u=LD(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Mr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=lw(),{heartbeatsToSend:i,unsentEntries:a}=MD(this._heartbeatsCache.heartbeats),l=Gd(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Mr.warn(t),""}}}function lw(){return new Date().toISOString().substring(0,10)}function MD(n,e=DD){const t=[];let i=n.slice();for(const a of n){const l=t.find(u=>u.agent===a.agent);if(l){if(l.dates.push(a.date),uw(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),uw(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class VD{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return XS()?ZS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await OD(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return ow(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return ow(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function uw(n){return Gd(JSON.stringify({version:2,heartbeats:n})).length}function LD(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UD(n){si(new Hn("platform-logger",e=>new QO(e),"PRIVATE")),si(new Hn("heartbeat",e=>new PD(e),"PRIVATE")),gn(s_,sw,n),gn(s_,sw,"esm2017"),gn("fire-js","")}UD("");var jD="firebase",FD="11.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gn(jD,FD,"app");function ny(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,i=Object.getOwnPropertySymbols(n);a<i.length;a++)e.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(n,i[a])&&(t[i[a]]=n[i[a]]);return t}function a1(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zD=a1,o1=new Wa("auth","Firebase",a1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd=new Dc("@firebase/auth");function BD(n,...e){Kd.logLevel<=Le.WARN&&Kd.warn(`Auth (${qs}): ${n}`,...e)}function kd(n,...e){Kd.logLevel<=Le.ERROR&&Kd.error(`Auth (${qs}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(n,...e){throw iy(n,...e)}function Bi(n,...e){return iy(n,...e)}function l1(n,e,t){const i=Object.assign(Object.assign({},zD()),{[e]:t});return new Wa("auth","Firebase",i).create(e,{appName:n.name})}function Hi(n){return l1(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function iy(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return o1.create(n,...e)}function Te(n,e,...t){if(!n)throw iy(e,...t)}function Ir(n){const e="INTERNAL ASSERTION FAILED: "+n;throw kd(e),new Error(e)}function Vr(n,e){n||Ir(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l_(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function HD(){return cw()==="http:"||cw()==="https:"}function cw(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(HD()||KS()||"connection"in navigator)?navigator.onLine:!0}function GD(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e,t){this.shortDelay=e,this.longDelay=t,Vr(t>e,"Short delay should be less than long delay!"),this.isMobile=J_()||QS()}get(){return qD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ry(n,e){Vr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ir("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ir("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ir("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YD=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],$D=new Pc(3e4,6e4);function Hr(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function bi(n,e,t,i,a={}){return c1(n,a,async()=>{let l={},u={};i&&(e==="GET"?u=i:l={body:JSON.stringify(i)});const d=wl(Object.assign({key:n.config.apiKey},u)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const m=Object.assign({method:e,headers:p},l);return fO()||(m.referrerPolicy="no-referrer"),n.emulatorConfig&&Fr(n.emulatorConfig.host)&&(m.credentials="include"),u1.fetch()(await h1(n,n.config.apiHost,t,d),m)})}async function c1(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},WD),e);try{const a=new QD(n),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const u=await l.json();if("needConfirmation"in u)throw wd(n,"account-exists-with-different-credential",u);if(l.ok&&!("errorMessage"in u))return u;{const d=l.ok?u.errorMessage:u.error.message,[p,m]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw wd(n,"credential-already-in-use",u);if(p==="EMAIL_EXISTS")throw wd(n,"email-already-in-use",u);if(p==="USER_DISABLED")throw wd(n,"user-disabled",u);const y=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw l1(n,y,m);Ti(n,y)}}catch(a){if(a instanceof ai)throw a;Ti(n,"network-request-failed",{message:String(a)})}}async function Mc(n,e,t,i,a={}){const l=await bi(n,e,t,i,a);return"mfaPendingCredential"in l&&Ti(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function h1(n,e,t,i){const a=`${e}${t}?${i}`,l=n,u=l.config.emulator?ry(n.config,a):`${n.config.apiScheme}://${a}`;return YD.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(u).toString():u}function KD(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class QD{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Bi(this.auth,"network-request-failed")),$D.get())})}}function wd(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const a=Bi(n,e,i);return a.customData._tokenResponse=t,a}function hw(n){return n!==void 0&&n.enterprise!==void 0}class XD{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return KD(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function ZD(n,e){return bi(n,"GET","/v2/recaptchaConfig",Hr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JD(n,e){return bi(n,"POST","/v1/accounts:delete",e)}async function Qd(n,e){return bi(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ek(n,e=!1){const t=ct(n),i=await t.getIdToken(e),a=sy(i);Te(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,u=l==null?void 0:l.sign_in_provider;return{claims:a,token:i,authTime:ec(xg(a.auth_time)),issuedAtTime:ec(xg(a.iat)),expirationTime:ec(xg(a.exp)),signInProvider:u||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function xg(n){return Number(n)*1e3}function sy(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return kd("JWT malformed, contained fewer than 3 sections"),null;try{const a=Wd(t);return a?JSON.parse(a):(kd("Failed to decode base64 JWT payload"),null)}catch(a){return kd("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function dw(n){const e=sy(n);return Te(e,"internal-error"),Te(typeof e.exp<"u","internal-error"),Te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ma(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof ai&&tk(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function tk({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const a=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ec(this.lastLoginAt),this.creationTime=ec(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xd(n){var e;const t=n.auth,i=await n.getIdToken(),a=await Ma(n,Qd(t,{idToken:i}));Te(a==null?void 0:a.users.length,t,"internal-error");const l=a.users[0];n._notifyReloadListener(l);const u=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?d1(l.providerUserInfo):[],d=rk(n.providerData,u),p=n.isAnonymous,m=!(n.email&&l.passwordHash)&&!(d!=null&&d.length),y=p?m:!1,E={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new u_(l.createdAt,l.lastLoginAt),isAnonymous:y};Object.assign(n,E)}async function ik(n){const e=ct(n);await Xd(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function rk(n,e){return[...n.filter(i=>!e.some(a=>a.providerId===i.providerId)),...e]}function d1(n){return n.map(e=>{var{providerId:t}=e,i=ny(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sk(n,e){const t=await c1(n,{},async()=>{const i=wl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=n.config,u=await h1(n,a,"/v1/token",`key=${l}`),d=await n._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:d,body:i};return n.emulatorConfig&&Fr(n.emulatorConfig.host)&&(p.credentials="include"),u1.fetch()(u,p)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ak(n,e){return bi(n,"POST","/v2/accounts:revokeToken",Hr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Te(e.idToken,"internal-error"),Te(typeof e.idToken<"u","internal-error"),Te(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):dw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Te(e.length!==0,"internal-error");const t=dw(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:a,expiresIn:l}=await sk(e,t);this.updateTokensAndExpiration(i,a,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:a,expirationTime:l}=t,u=new el;return i&&(Te(typeof i=="string","internal-error",{appName:e}),u.refreshToken=i),a&&(Te(typeof a=="string","internal-error",{appName:e}),u.accessToken=a),l&&(Te(typeof l=="number","internal-error",{appName:e}),u.expirationTime=l),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new el,this.toJSON())}_performRefresh(){return Ir("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(n,e){Te(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class mi{constructor(e){var{uid:t,auth:i,stsTokenManager:a}=e,l=ny(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new nk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new u_(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Ma(this,this.stsTokenManager.getToken(this.auth,e));return Te(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return ek(this,e)}reload(){return ik(this)}_assign(e){this!==e&&(Te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new mi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Xd(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(wn(this.auth.app))return Promise.reject(Hi(this.auth));const e=await this.getIdToken();return await Ma(this,JD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,a,l,u,d,p,m,y;const E=(i=t.displayName)!==null&&i!==void 0?i:void 0,w=(a=t.email)!==null&&a!==void 0?a:void 0,I=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,C=(u=t.photoURL)!==null&&u!==void 0?u:void 0,B=(d=t.tenantId)!==null&&d!==void 0?d:void 0,j=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,$=(m=t.createdAt)!==null&&m!==void 0?m:void 0,K=(y=t.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:te,emailVerified:re,isAnonymous:ce,providerData:ve,stsTokenManager:M}=t;Te(te&&M,e,"internal-error");const R=el.fromJSON(this.name,M);Te(typeof te=="string",e,"internal-error"),Es(E,e.name),Es(w,e.name),Te(typeof re=="boolean",e,"internal-error"),Te(typeof ce=="boolean",e,"internal-error"),Es(I,e.name),Es(C,e.name),Es(B,e.name),Es(j,e.name),Es($,e.name),Es(K,e.name);const N=new mi({uid:te,auth:e,email:w,emailVerified:re,displayName:E,isAnonymous:ce,photoURL:C,phoneNumber:I,tenantId:B,stsTokenManager:R,createdAt:$,lastLoginAt:K});return ve&&Array.isArray(ve)&&(N.providerData=ve.map(k=>Object.assign({},k))),j&&(N._redirectEventId=j),N}static async _fromIdTokenResponse(e,t,i=!1){const a=new el;a.updateFromServerResponse(t);const l=new mi({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:i});return await Xd(l),l}static async _fromGetAccountInfoResponse(e,t,i){const a=t.users[0];Te(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?d1(a.providerUserInfo):[],u=!(a.email&&a.passwordHash)&&!(l!=null&&l.length),d=new el;d.updateFromIdToken(i);const p=new mi({uid:a.localId,auth:e,stsTokenManager:d,isAnonymous:u}),m={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new u_(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,m),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw=new Map;function Cr(n){Vr(n instanceof Function,"Expected a class definition");let e=fw.get(n);return e?(Vr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,fw.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}f1.type="NONE";const pw=f1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pd(n,e,t){return`firebase:${n}:${e}:${t}`}class tl{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:a,name:l}=this.auth;this.fullUserKey=Pd(this.userKey,a.apiKey,l),this.fullPersistenceKey=Pd("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Qd(this.auth,{idToken:e}).catch(()=>{});return t?mi._fromGetAccountInfoResponse(this.auth,t,e):null}return mi._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new tl(Cr(pw),e,i);const a=(await Promise.all(t.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let l=a[0]||Cr(pw);const u=Pd(i,e.config.apiKey,e.name);let d=null;for(const m of t)try{const y=await m._get(u);if(y){let E;if(typeof y=="string"){const w=await Qd(e,{idToken:y}).catch(()=>{});if(!w)break;E=await mi._fromGetAccountInfoResponse(e,w,y)}else E=mi._fromJSON(e,y);m!==l&&(d=E),l=m;break}}catch{}const p=a.filter(m=>m._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new tl(l,e,i):(l=p[0],d&&await l._set(u,d.toJSON()),await Promise.all(t.map(async m=>{if(m!==l)try{await m._remove(u)}catch{}})),new tl(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mw(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(p1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(v1(e))return"Blackberry";if(E1(e))return"Webos";if(m1(e))return"Safari";if((e.includes("chrome/")||g1(e))&&!e.includes("edge/"))return"Chrome";if(y1(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function p1(n=_n()){return/firefox\//i.test(n)}function m1(n=_n()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function g1(n=_n()){return/crios\//i.test(n)}function _1(n=_n()){return/iemobile/i.test(n)}function y1(n=_n()){return/android/i.test(n)}function v1(n=_n()){return/blackberry/i.test(n)}function E1(n=_n()){return/webos/i.test(n)}function ay(n=_n()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function ok(n=_n()){var e;return ay(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function lk(){return pO()&&document.documentMode===10}function T1(n=_n()){return ay(n)||y1(n)||E1(n)||v1(n)||/windows phone/i.test(n)||_1(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w1(n,e=[]){let t;switch(n){case"Browser":t=mw(_n());break;case"Worker":t=`${mw(_n())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${qs}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((u,d)=>{try{const p=e(l);u(p)}catch(p){d(p)}});i.onAbort=t,this.queue.push(i);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ck(n,e={}){return bi(n,"GET","/v2/passwordPolicy",Hr(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hk=6;class dk{constructor(e){var t,i,a,l;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=u.minPasswordLength)!==null&&t!==void 0?t:hk,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,a,l,u,d;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(i=p.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(a=p.containsLowercaseLetter)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(u=p.containsNumericCharacter)!==null&&u!==void 0?u:!0),p.isValid&&(p.isValid=(d=p.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),p}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let a=0;a<e.length;a++)i=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(e,t,i,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gw(this),this.idTokenSubscription=new gw(this),this.beforeStateQueue=new uk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=o1,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Cr(t)),this._initializationPromise=this.queue(async()=>{var i,a,l;if(!this._deleted&&(this.persistenceManager=await tl.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Qd(this,{idToken:e}),i=await mi._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(wn(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(d,d))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let a=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=a==null?void 0:a._redirectEventId,p=await this.tryRedirectSignIn(e);(!u||u===d)&&(p!=null&&p.user)&&(a=p.user,l=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(a)}catch(u){a=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return Te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Xd(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=GD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(wn(this.app))return Promise.reject(Hi(this));const t=e?ct(e):null;return t&&Te(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return wn(this.app)?Promise.reject(Hi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return wn(this.app)?Promise.reject(Hi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Cr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ck(this),t=new dk(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Wa("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await ak(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Cr(e)||this._popupRedirectResolver;Te(t,this,"argument-error"),this.redirectPersistenceManager=await tl.create(this,[Cr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let u=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Te(d,this,"internal-error"),d.then(()=>{u||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,a);return()=>{u=!0,p()}}else{const p=e.addObserver(t);return()=>{u=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=w1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;if(wn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&BD(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Gs(n){return ct(n)}class gw{constructor(e){this.auth=e,this.observer=null,this.addObserver=SO(t=>this.observer=t)}get next(){return Te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function pk(n){jf=n}function b1(n){return jf.loadJS(n)}function mk(){return jf.recaptchaEnterpriseScript}function gk(){return jf.gapiScript}function _k(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class yk{constructor(){this.enterprise=new vk}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class vk{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Ek="recaptcha-enterprise",S1="NO_RECAPTCHA";class Tk{constructor(e){this.type=Ek,this.auth=Gs(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(u,d)=>{ZD(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const m=new XD(p);return l.tenantId==null?l._agentRecaptchaConfig=m:l._tenantRecaptchaConfigs[l.tenantId]=m,u(m.siteKey)}}).catch(p=>{d(p)})})}function a(l,u,d){const p=window.grecaptcha;hw(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(m=>{u(m)}).catch(()=>{u(S1)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new yk().execute("siteKey",{action:"verify"}):new Promise((l,u)=>{i(this.auth).then(d=>{if(!t&&hw(window.grecaptcha))a(d,l,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let p=mk();p.length!==0&&(p+=d),b1(p).then(()=>{a(d,l,u)}).catch(m=>{u(m)})}}).catch(d=>{u(d)})})}}async function _w(n,e,t,i=!1,a=!1){const l=new Tk(n);let u;if(a)u=S1;else try{u=await l.verify(t)}catch{u=await l.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,m=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:m,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return i?Object.assign(d,{captchaResp:u}):Object.assign(d,{captchaResponse:u}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function Zd(n,e,t,i,a){var l;if(!((l=n._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await _w(n,e,t,t==="getOobCode");return i(n,u)}else return i(n,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await _w(n,e,t,t==="getOobCode");return i(n,d)}else return Promise.reject(u)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wk(n,e){const t=Br(n,"auth");if(t.isInitialized()){const a=t.getImmediate(),l=t.getOptions();if(Pr(l,e??{}))return a;Ti(a,"already-initialized")}return t.initialize({options:e})}function bk(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Cr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Sk(n,e,t){const i=Gs(n);Te(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const a=!1,l=A1(e),{host:u,port:d}=Ak(e),p=d===null?"":`:${d}`,m={url:`${l}//${u}${p}/`},y=Object.freeze({host:u,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!i._canInitEmulator){Te(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),Te(Pr(m,i.config.emulator)&&Pr(y,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=m,i.emulatorConfig=y,i.settings.appVerificationDisabledForTesting=!0,Fr(u)?(Vf(`${l}//${u}${p}`),Lf("Auth",!0)):Rk()}function A1(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Ak(n){const e=A1(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(i);if(a){const l=a[1];return{host:l,port:yw(i.substr(l.length+1))}}else{const[l,u]=i.split(":");return{host:l,port:yw(u)}}}function yw(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Rk(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ir("not implemented")}_getIdTokenResponse(e){return Ir("not implemented")}_linkToIdToken(e,t){return Ir("not implemented")}_getReauthenticationResolver(e){return Ir("not implemented")}}async function Ik(n,e){return bi(n,"POST","/v1/accounts:update",e)}async function Ck(n,e){return bi(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nk(n,e){return Mc(n,"POST","/v1/accounts:signInWithPassword",Hr(n,e))}async function xk(n,e){return bi(n,"POST","/v1/accounts:sendOobCode",Hr(n,e))}async function Ok(n,e){return xk(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dk(n,e){return Mc(n,"POST","/v1/accounts:signInWithEmailLink",Hr(n,e))}async function kk(n,e){return Mc(n,"POST","/v1/accounts:signInWithEmailLink",Hr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc extends oy{constructor(e,t,i,a=null){super("password",i),this._email=e,this._password=t,this._tenantId=a}static _fromEmailAndPassword(e,t){return new pc(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new pc(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zd(e,t,"signInWithPassword",Nk);case"emailLink":return Dk(e,{email:this._email,oobCode:this._password});default:Ti(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zd(e,i,"signUpPassword",Ck);case"emailLink":return kk(e,{idToken:t,email:this._email,oobCode:this._password});default:Ti(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nl(n,e){return Mc(n,"POST","/v1/accounts:signInWithIdp",Hr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk="http://localhost";class Va extends oy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Va(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ti("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:a}=t,l=ny(t,["providerId","signInMethod"]);if(!i||!a)return null;const u=new Va(i,a);return u.idToken=l.idToken||void 0,u.accessToken=l.accessToken||void 0,u.secret=l.secret,u.nonce=l.nonce,u.pendingToken=l.pendingToken||null,u}_getIdTokenResponse(e){const t=this.buildRequest();return nl(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,nl(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,nl(e,t)}buildRequest(){const e={requestUri:Pk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=wl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mk(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Vk(n){const e=Yu($u(n)).link,t=e?Yu($u(e)).deep_link_id:null,i=Yu($u(n)).deep_link_id;return(i?Yu($u(i)).link:null)||i||t||e||n}class ly{constructor(e){var t,i,a,l,u,d;const p=Yu($u(e)),m=(t=p.apiKey)!==null&&t!==void 0?t:null,y=(i=p.oobCode)!==null&&i!==void 0?i:null,E=Mk((a=p.mode)!==null&&a!==void 0?a:null);Te(m&&y&&E,"argument-error"),this.apiKey=m,this.operation=E,this.code=y,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(u=p.lang)!==null&&u!==void 0?u:null,this.tenantId=(d=p.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=Vk(e);try{return new ly(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(){this.providerId=bl.PROVIDER_ID}static credential(e,t){return pc._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=ly.parseLink(t);return Te(i,"argument-error"),pc._fromEmailAndCode(e,i.code,i.tenantId)}}bl.PROVIDER_ID="password";bl.EMAIL_PASSWORD_SIGN_IN_METHOD="password";bl.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc extends R1{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts extends Vc{constructor(){super("facebook.com")}static credential(e){return Va._fromParams({providerId:Ts.PROVIDER_ID,signInMethod:Ts.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ts.credentialFromTaggedObject(e)}static credentialFromError(e){return Ts.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ts.credential(e.oauthAccessToken)}catch{return null}}}Ts.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ts.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws extends Vc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Va._fromParams({providerId:ws.PROVIDER_ID,signInMethod:ws.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ws.credentialFromTaggedObject(e)}static credentialFromError(e){return ws.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return ws.credential(t,i)}catch{return null}}}ws.GOOGLE_SIGN_IN_METHOD="google.com";ws.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs extends Vc{constructor(){super("github.com")}static credential(e){return Va._fromParams({providerId:bs.PROVIDER_ID,signInMethod:bs.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bs.credentialFromTaggedObject(e)}static credentialFromError(e){return bs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bs.credential(e.oauthAccessToken)}catch{return null}}}bs.GITHUB_SIGN_IN_METHOD="github.com";bs.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss extends Vc{constructor(){super("twitter.com")}static credential(e,t){return Va._fromParams({providerId:Ss.PROVIDER_ID,signInMethod:Ss.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ss.credentialFromTaggedObject(e)}static credentialFromError(e){return Ss.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Ss.credential(t,i)}catch{return null}}}Ss.TWITTER_SIGN_IN_METHOD="twitter.com";Ss.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lk(n,e){return Mc(n,"POST","/v1/accounts:signUp",Hr(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,a=!1){const l=await mi._fromIdTokenResponse(e,i,a),u=vw(i);return new La({user:l,providerId:u,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const a=vw(i);return new La({user:e,providerId:a,_tokenResponse:i,operationType:t})}}function vw(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd extends ai{constructor(e,t,i,a){var l;super(t.code,t.message),this.operationType=i,this.user=a,Object.setPrototypeOf(this,Jd.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,a){return new Jd(e,t,i,a)}}function I1(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Jd._fromErrorAndOperation(n,l,e,i):l})}async function Uk(n,e,t=!1){const i=await Ma(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return La._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jk(n,e,t=!1){const{auth:i}=n;if(wn(i.app))return Promise.reject(Hi(i));const a="reauthenticate";try{const l=await Ma(n,I1(i,a,e,n),t);Te(l.idToken,i,"internal-error");const u=sy(l.idToken);Te(u,i,"internal-error");const{sub:d}=u;return Te(n.uid===d,i,"user-mismatch"),La._forOperation(n,a,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Ti(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C1(n,e,t=!1){if(wn(n.app))return Promise.reject(Hi(n));const i="signIn",a=await I1(n,i,e),l=await La._fromIdTokenResponse(n,i,a);return t||await n._updateCurrentUser(l.user),l}async function Fk(n,e){return C1(Gs(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N1(n){const e=Gs(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function zk(n,e,t){const i=Gs(n);await Zd(i,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Ok)}async function x1(n,e,t){if(wn(n.app))return Promise.reject(Hi(n));const i=Gs(n),u=await Zd(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Lk).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&N1(n),p}),d=await La._fromIdTokenResponse(i,"signIn",u);return await i._updateCurrentUser(d.user),d}function Bk(n,e,t){return wn(n.app)?Promise.reject(Hi(n)):Fk(ct(n),bl.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&N1(n),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hk(n,e){return bi(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qk(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=ct(n),l={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},u=await Ma(i,Hk(i.auth,l));i.displayName=u.displayName||null,i.photoURL=u.photoUrl||null;const d=i.providerData.find(({providerId:p})=>p==="password");d&&(d.displayName=i.displayName,d.photoURL=i.photoURL),await i._updateTokensIfNecessary(u)}function Gk(n,e){const t=ct(n);return wn(t.auth.app)?Promise.reject(Hi(t.auth)):Wk(t,e)}async function Wk(n,e,t){const{auth:i}=n,l={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(l.email=e);const u=await Ma(n,Ik(i,l));await n._updateTokensIfNecessary(u,!0)}function Yk(n,e,t,i){return ct(n).onIdTokenChanged(e,t,i)}function $k(n,e,t){return ct(n).beforeAuthStateChanged(e,t)}function Kk(n,e,t,i){return ct(n).onAuthStateChanged(e,t,i)}function Qk(n){return ct(n).signOut()}const ef="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ef,"1"),this.storage.removeItem(ef),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xk=1e3,Zk=10;class D1 extends O1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=T1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),a=this.localCache[t];i!==a&&e(t,a,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((u,d,p)=>{this.notifyListeners(u,p)});return}const i=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const u=this.storage.getItem(i);!t&&this.localCache[i]===u||this.notifyListeners(i,u)},l=this.storage.getItem(i);lk()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,Zk):a()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const a of Array.from(i))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},Xk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}D1.type="LOCAL";const Jk=D1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1 extends O1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}k1.type="SESSION";const P1=k1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eP(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const i=new Ff(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:a,data:l}=t.data,u=this.handlersMap[a];if(!(u!=null&&u.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:a});const d=Array.from(u).map(async m=>m(t.origin,l)),p=await eP(d);t.ports[0].postMessage({status:"done",eventId:i,eventType:a,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ff.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uy(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,u;return new Promise((d,p)=>{const m=uy("",20);a.port1.start();const y=setTimeout(()=>{p(new Error("unsupported_event"))},i);u={messageChannel:a,onMessage(E){const w=E;if(w.data.eventId===m)switch(w.data.status){case"ack":clearTimeout(y),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(w.data.response);break;default:clearTimeout(y),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(u),a.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:m,data:t},[a.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(){return window}function nP(n){qi().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M1(){return typeof qi().WorkerGlobalScope<"u"&&typeof qi().importScripts=="function"}async function iP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rP(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function sP(){return M1()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V1="firebaseLocalStorageDb",aP=1,tf="firebaseLocalStorage",L1="fbase_key";class Lc{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function zf(n,e){return n.transaction([tf],e?"readwrite":"readonly").objectStore(tf)}function oP(){const n=indexedDB.deleteDatabase(V1);return new Lc(n).toPromise()}function c_(){const n=indexedDB.open(V1,aP);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(tf,{keyPath:L1})}catch(a){t(a)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(tf)?e(i):(i.close(),await oP(),e(await c_()))})})}async function Ew(n,e,t){const i=zf(n,!0).put({[L1]:e,value:t});return new Lc(i).toPromise()}async function lP(n,e){const t=zf(n,!1).get(e),i=await new Lc(t).toPromise();return i===void 0?null:i.value}function Tw(n,e){const t=zf(n,!0).delete(e);return new Lc(t).toPromise()}const uP=800,cP=3;class U1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await c_(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>cP)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return M1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ff._getInstance(sP()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await iP(),!this.activeServiceWorker)return;this.sender=new tP(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||rP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await c_();return await Ew(e,ef,"1"),await Tw(e,ef),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Ew(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>lP(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Tw(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=zf(a,!1).getAll();return new Lc(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)i.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!i.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const a of Array.from(i))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}U1.type="LOCAL";const hP=U1;new Pc(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dP(n,e){return e?Cr(e):(Te(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy extends oy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return nl(e,this._buildIdpRequest())}_linkToIdToken(e,t){return nl(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return nl(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function fP(n){return C1(n.auth,new cy(n),n.bypassAuthState)}function pP(n){const{auth:e,user:t}=n;return Te(t,e,"internal-error"),jk(t,new cy(n),n.bypassAuthState)}async function mP(n){const{auth:e,user:t}=n;return Te(t,e,"internal-error"),Uk(t,new cy(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j1{constructor(e,t,i,a,l=!1){this.auth=e,this.resolver=i,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:a,tenantId:l,error:u,type:d}=e;if(u){this.reject(u);return}const p={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fP;case"linkViaPopup":case"linkViaRedirect":return mP;case"reauthViaPopup":case"reauthViaRedirect":return pP;default:Ti(this.auth,"internal-error")}}resolve(e){Vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gP=new Pc(2e3,1e4);class Qo extends j1{constructor(e,t,i,a,l){super(e,t,a,l),this.provider=i,this.authWindow=null,this.pollId=null,Qo.currentPopupAction&&Qo.currentPopupAction.cancel(),Qo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Te(e,this.auth,"internal-error"),e}async onExecution(){Vr(this.filter.length===1,"Popup operations only handle one event");const e=uy();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Bi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Bi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Bi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,gP.get())};e()}}Qo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _P="pendingRedirect",Md=new Map;class yP extends j1{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Md.get(this.auth._key());if(!e){try{const i=await vP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Md.set(this.auth._key(),e)}return this.bypassAuthState||Md.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vP(n,e){const t=wP(e),i=TP(n);if(!await i._isAvailable())return!1;const a=await i._get(t)==="true";return await i._remove(t),a}function EP(n,e){Md.set(n._key(),e)}function TP(n){return Cr(n._redirectPersistence)}function wP(n){return Pd(_P,n.config.apiKey,n.name)}async function bP(n,e,t=!1){if(wn(n.app))return Promise.reject(Hi(n));const i=Gs(n),a=dP(i,e),u=await new yP(i,a,t).execute();return u&&!t&&(delete u.user._redirectEventId,await i._persistUserIfCurrent(u.user),await i._setRedirectUser(null,e)),u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SP=10*60*1e3;class AP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!RP(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!F1(e)){const a=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(Bi(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=SP&&this.cachedEventUids.clear(),this.cachedEventUids.has(ww(e))}saveEventToCache(e){this.cachedEventUids.add(ww(e)),this.lastProcessedEventTime=Date.now()}}function ww(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function F1({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function RP(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return F1(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IP(n,e={}){return bi(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,NP=/^https?/;async function xP(n){if(n.config.emulator)return;const{authorizedDomains:e}=await IP(n);for(const t of e)try{if(OP(t))return}catch{}Ti(n,"unauthorized-domain")}function OP(n){const e=l_(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const u=new URL(n);return u.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&u.hostname===i}if(!NP.test(t))return!1;if(CP.test(n))return i===n;const a=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DP=new Pc(3e4,6e4);function bw(){const n=qi().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function kP(n){return new Promise((e,t)=>{var i,a,l;function u(){bw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bw(),t(Bi(n,"network-request-failed"))},timeout:DP.get()})}if(!((a=(i=qi().gapi)===null||i===void 0?void 0:i.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((l=qi().gapi)===null||l===void 0)&&l.load)u();else{const d=_k("iframefcb");return qi()[d]=()=>{gapi.load?u():t(Bi(n,"network-request-failed"))},b1(`${gk()}?onload=${d}`).catch(p=>t(p))}}).catch(e=>{throw Vd=null,e})}let Vd=null;function PP(n){return Vd=Vd||kP(n),Vd}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MP=new Pc(5e3,15e3),VP="__/auth/iframe",LP="emulator/auth/iframe",UP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function FP(n){const e=n.config;Te(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ry(e,LP):`https://${n.config.authDomain}/${VP}`,i={apiKey:e.apiKey,appName:n.name,v:qs},a=jP.get(n.config.apiHost);a&&(i.eid=a);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${wl(i).slice(1)}`}async function zP(n){const e=await PP(n),t=qi().gapi;return Te(t,n,"internal-error"),e.open({where:document.body,url:FP(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:UP,dontclear:!0},i=>new Promise(async(a,l)=>{await i.restyle({setHideOnLeave:!1});const u=Bi(n,"network-request-failed"),d=qi().setTimeout(()=>{l(u)},MP.get());function p(){qi().clearTimeout(d),a(i)}i.ping(p).then(p,()=>{l(u)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},HP=500,qP=600,GP="_blank",WP="http://localhost";class Sw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function YP(n,e,t,i=HP,a=qP){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),u=Math.max((window.screen.availWidth-i)/2,0).toString();let d="";const p=Object.assign(Object.assign({},BP),{width:i.toString(),height:a.toString(),top:l,left:u}),m=_n().toLowerCase();t&&(d=g1(m)?GP:t),p1(m)&&(e=e||WP,p.scrollbars="yes");const y=Object.entries(p).reduce((w,[I,C])=>`${w}${I}=${C},`,"");if(ok(m)&&d!=="_self")return $P(e||"",d),new Sw(null);const E=window.open(e||"",d,y);Te(E,n,"popup-blocked");try{E.focus()}catch{}return new Sw(E)}function $P(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KP="__/auth/handler",QP="emulator/auth/handler",XP=encodeURIComponent("fac");async function Aw(n,e,t,i,a,l){Te(n.config.authDomain,n,"auth-domain-config-required"),Te(n.config.apiKey,n,"invalid-api-key");const u={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:qs,eventId:a};if(e instanceof R1){e.setDefaultLanguage(n.languageCode),u.providerId=e.providerId||"",n_(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,E]of Object.entries({}))u[y]=E}if(e instanceof Vc){const y=e.getScopes().filter(E=>E!=="");y.length>0&&(u.scopes=y.join(","))}n.tenantId&&(u.tid=n.tenantId);const d=u;for(const y of Object.keys(d))d[y]===void 0&&delete d[y];const p=await n._getAppCheckToken(),m=p?`#${XP}=${encodeURIComponent(p)}`:"";return`${ZP(n)}?${wl(d).slice(1)}${m}`}function ZP({config:n}){return n.emulator?ry(n,QP):`https://${n.authDomain}/${KP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og="webStorageSupport";class JP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=P1,this._completeRedirectFn=bP,this._overrideRedirectResult=EP}async _openPopup(e,t,i,a){var l;Vr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const u=await Aw(e,t,i,l_(),a);return YP(e,u,uy())}async _openRedirect(e,t,i,a){await this._originValidation(e);const l=await Aw(e,t,i,l_(),a);return nP(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(Vr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await zP(e),i=new AP(e);return t.register("authEvent",a=>(Te(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:i.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Og,{type:Og},a=>{var l;const u=(l=a==null?void 0:a[0])===null||l===void 0?void 0:l[Og];u!==void 0&&t(!!u),Ti(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=xP(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return T1()||m1()||ay()}}const eM=JP;var Rw="@firebase/auth",Iw="1.10.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tM{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nM(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function iM(n){si(new Hn("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:u,authDomain:d}=i.options;Te(u&&!u.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:u,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:w1(n)},m=new fk(i,a,l,p);return bk(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),si(new Hn("auth-internal",e=>{const t=Gs(e.getProvider("auth").getImmediate());return(i=>new tM(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),gn(Rw,Iw,nM(n)),gn(Rw,Iw,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rM=5*60,sM=$S("authIdTokenMaxAge")||rM;let Cw=null;const aM=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>sM)return;const a=t==null?void 0:t.token;Cw!==a&&(Cw=a,await fetch(n,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function hy(n=kc()){const e=Br(n,"auth");if(e.isInitialized())return e.getImmediate();const t=wk(n,{popupRedirectResolver:eM,persistence:[hP,Jk,P1]}),i=$S("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const u=aM(l.toString());$k(t,u,()=>u(t.currentUser)),Yk(t,d=>u(d))}}const a=WS("auth");return a&&Sk(t,`http://${a}`),t}function oM(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}pk({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=a=>{const l=Bi("internal-error");l.customData=a,t(l)},i.type="text/javascript",i.charset="UTF-8",oM().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});iM("Browser");var Nw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Cs,z1;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(M,R){function N(){}N.prototype=R.prototype,M.D=R.prototype,M.prototype=new N,M.prototype.constructor=M,M.C=function(k,V,F){for(var O=Array(arguments.length-2),en=2;en<arguments.length;en++)O[en-2]=arguments[en];return R.prototype[V].apply(k,O)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(M,R,N){N||(N=0);var k=Array(16);if(typeof R=="string")for(var V=0;16>V;++V)k[V]=R.charCodeAt(N++)|R.charCodeAt(N++)<<8|R.charCodeAt(N++)<<16|R.charCodeAt(N++)<<24;else for(V=0;16>V;++V)k[V]=R[N++]|R[N++]<<8|R[N++]<<16|R[N++]<<24;R=M.g[0],N=M.g[1],V=M.g[2];var F=M.g[3],O=R+(F^N&(V^F))+k[0]+3614090360&4294967295;R=N+(O<<7&4294967295|O>>>25),O=F+(V^R&(N^V))+k[1]+3905402710&4294967295,F=R+(O<<12&4294967295|O>>>20),O=V+(N^F&(R^N))+k[2]+606105819&4294967295,V=F+(O<<17&4294967295|O>>>15),O=N+(R^V&(F^R))+k[3]+3250441966&4294967295,N=V+(O<<22&4294967295|O>>>10),O=R+(F^N&(V^F))+k[4]+4118548399&4294967295,R=N+(O<<7&4294967295|O>>>25),O=F+(V^R&(N^V))+k[5]+1200080426&4294967295,F=R+(O<<12&4294967295|O>>>20),O=V+(N^F&(R^N))+k[6]+2821735955&4294967295,V=F+(O<<17&4294967295|O>>>15),O=N+(R^V&(F^R))+k[7]+4249261313&4294967295,N=V+(O<<22&4294967295|O>>>10),O=R+(F^N&(V^F))+k[8]+1770035416&4294967295,R=N+(O<<7&4294967295|O>>>25),O=F+(V^R&(N^V))+k[9]+2336552879&4294967295,F=R+(O<<12&4294967295|O>>>20),O=V+(N^F&(R^N))+k[10]+4294925233&4294967295,V=F+(O<<17&4294967295|O>>>15),O=N+(R^V&(F^R))+k[11]+2304563134&4294967295,N=V+(O<<22&4294967295|O>>>10),O=R+(F^N&(V^F))+k[12]+1804603682&4294967295,R=N+(O<<7&4294967295|O>>>25),O=F+(V^R&(N^V))+k[13]+4254626195&4294967295,F=R+(O<<12&4294967295|O>>>20),O=V+(N^F&(R^N))+k[14]+2792965006&4294967295,V=F+(O<<17&4294967295|O>>>15),O=N+(R^V&(F^R))+k[15]+1236535329&4294967295,N=V+(O<<22&4294967295|O>>>10),O=R+(V^F&(N^V))+k[1]+4129170786&4294967295,R=N+(O<<5&4294967295|O>>>27),O=F+(N^V&(R^N))+k[6]+3225465664&4294967295,F=R+(O<<9&4294967295|O>>>23),O=V+(R^N&(F^R))+k[11]+643717713&4294967295,V=F+(O<<14&4294967295|O>>>18),O=N+(F^R&(V^F))+k[0]+3921069994&4294967295,N=V+(O<<20&4294967295|O>>>12),O=R+(V^F&(N^V))+k[5]+3593408605&4294967295,R=N+(O<<5&4294967295|O>>>27),O=F+(N^V&(R^N))+k[10]+38016083&4294967295,F=R+(O<<9&4294967295|O>>>23),O=V+(R^N&(F^R))+k[15]+3634488961&4294967295,V=F+(O<<14&4294967295|O>>>18),O=N+(F^R&(V^F))+k[4]+3889429448&4294967295,N=V+(O<<20&4294967295|O>>>12),O=R+(V^F&(N^V))+k[9]+568446438&4294967295,R=N+(O<<5&4294967295|O>>>27),O=F+(N^V&(R^N))+k[14]+3275163606&4294967295,F=R+(O<<9&4294967295|O>>>23),O=V+(R^N&(F^R))+k[3]+4107603335&4294967295,V=F+(O<<14&4294967295|O>>>18),O=N+(F^R&(V^F))+k[8]+1163531501&4294967295,N=V+(O<<20&4294967295|O>>>12),O=R+(V^F&(N^V))+k[13]+2850285829&4294967295,R=N+(O<<5&4294967295|O>>>27),O=F+(N^V&(R^N))+k[2]+4243563512&4294967295,F=R+(O<<9&4294967295|O>>>23),O=V+(R^N&(F^R))+k[7]+1735328473&4294967295,V=F+(O<<14&4294967295|O>>>18),O=N+(F^R&(V^F))+k[12]+2368359562&4294967295,N=V+(O<<20&4294967295|O>>>12),O=R+(N^V^F)+k[5]+4294588738&4294967295,R=N+(O<<4&4294967295|O>>>28),O=F+(R^N^V)+k[8]+2272392833&4294967295,F=R+(O<<11&4294967295|O>>>21),O=V+(F^R^N)+k[11]+1839030562&4294967295,V=F+(O<<16&4294967295|O>>>16),O=N+(V^F^R)+k[14]+4259657740&4294967295,N=V+(O<<23&4294967295|O>>>9),O=R+(N^V^F)+k[1]+2763975236&4294967295,R=N+(O<<4&4294967295|O>>>28),O=F+(R^N^V)+k[4]+1272893353&4294967295,F=R+(O<<11&4294967295|O>>>21),O=V+(F^R^N)+k[7]+4139469664&4294967295,V=F+(O<<16&4294967295|O>>>16),O=N+(V^F^R)+k[10]+3200236656&4294967295,N=V+(O<<23&4294967295|O>>>9),O=R+(N^V^F)+k[13]+681279174&4294967295,R=N+(O<<4&4294967295|O>>>28),O=F+(R^N^V)+k[0]+3936430074&4294967295,F=R+(O<<11&4294967295|O>>>21),O=V+(F^R^N)+k[3]+3572445317&4294967295,V=F+(O<<16&4294967295|O>>>16),O=N+(V^F^R)+k[6]+76029189&4294967295,N=V+(O<<23&4294967295|O>>>9),O=R+(N^V^F)+k[9]+3654602809&4294967295,R=N+(O<<4&4294967295|O>>>28),O=F+(R^N^V)+k[12]+3873151461&4294967295,F=R+(O<<11&4294967295|O>>>21),O=V+(F^R^N)+k[15]+530742520&4294967295,V=F+(O<<16&4294967295|O>>>16),O=N+(V^F^R)+k[2]+3299628645&4294967295,N=V+(O<<23&4294967295|O>>>9),O=R+(V^(N|~F))+k[0]+4096336452&4294967295,R=N+(O<<6&4294967295|O>>>26),O=F+(N^(R|~V))+k[7]+1126891415&4294967295,F=R+(O<<10&4294967295|O>>>22),O=V+(R^(F|~N))+k[14]+2878612391&4294967295,V=F+(O<<15&4294967295|O>>>17),O=N+(F^(V|~R))+k[5]+4237533241&4294967295,N=V+(O<<21&4294967295|O>>>11),O=R+(V^(N|~F))+k[12]+1700485571&4294967295,R=N+(O<<6&4294967295|O>>>26),O=F+(N^(R|~V))+k[3]+2399980690&4294967295,F=R+(O<<10&4294967295|O>>>22),O=V+(R^(F|~N))+k[10]+4293915773&4294967295,V=F+(O<<15&4294967295|O>>>17),O=N+(F^(V|~R))+k[1]+2240044497&4294967295,N=V+(O<<21&4294967295|O>>>11),O=R+(V^(N|~F))+k[8]+1873313359&4294967295,R=N+(O<<6&4294967295|O>>>26),O=F+(N^(R|~V))+k[15]+4264355552&4294967295,F=R+(O<<10&4294967295|O>>>22),O=V+(R^(F|~N))+k[6]+2734768916&4294967295,V=F+(O<<15&4294967295|O>>>17),O=N+(F^(V|~R))+k[13]+1309151649&4294967295,N=V+(O<<21&4294967295|O>>>11),O=R+(V^(N|~F))+k[4]+4149444226&4294967295,R=N+(O<<6&4294967295|O>>>26),O=F+(N^(R|~V))+k[11]+3174756917&4294967295,F=R+(O<<10&4294967295|O>>>22),O=V+(R^(F|~N))+k[2]+718787259&4294967295,V=F+(O<<15&4294967295|O>>>17),O=N+(F^(V|~R))+k[9]+3951481745&4294967295,M.g[0]=M.g[0]+R&4294967295,M.g[1]=M.g[1]+(V+(O<<21&4294967295|O>>>11))&4294967295,M.g[2]=M.g[2]+V&4294967295,M.g[3]=M.g[3]+F&4294967295}i.prototype.u=function(M,R){R===void 0&&(R=M.length);for(var N=R-this.blockSize,k=this.B,V=this.h,F=0;F<R;){if(V==0)for(;F<=N;)a(this,M,F),F+=this.blockSize;if(typeof M=="string"){for(;F<R;)if(k[V++]=M.charCodeAt(F++),V==this.blockSize){a(this,k),V=0;break}}else for(;F<R;)if(k[V++]=M[F++],V==this.blockSize){a(this,k),V=0;break}}this.h=V,this.o+=R},i.prototype.v=function(){var M=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);M[0]=128;for(var R=1;R<M.length-8;++R)M[R]=0;var N=8*this.o;for(R=M.length-8;R<M.length;++R)M[R]=N&255,N/=256;for(this.u(M),M=Array(16),R=N=0;4>R;++R)for(var k=0;32>k;k+=8)M[N++]=this.g[R]>>>k&255;return M};function l(M,R){var N=d;return Object.prototype.hasOwnProperty.call(N,M)?N[M]:N[M]=R(M)}function u(M,R){this.h=R;for(var N=[],k=!0,V=M.length-1;0<=V;V--){var F=M[V]|0;k&&F==R||(N[V]=F,k=!1)}this.g=N}var d={};function p(M){return-128<=M&&128>M?l(M,function(R){return new u([R|0],0>R?-1:0)}):new u([M|0],0>M?-1:0)}function m(M){if(isNaN(M)||!isFinite(M))return E;if(0>M)return j(m(-M));for(var R=[],N=1,k=0;M>=N;k++)R[k]=M/N|0,N*=4294967296;return new u(R,0)}function y(M,R){if(M.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(M.charAt(0)=="-")return j(y(M.substring(1),R));if(0<=M.indexOf("-"))throw Error('number format error: interior "-" character');for(var N=m(Math.pow(R,8)),k=E,V=0;V<M.length;V+=8){var F=Math.min(8,M.length-V),O=parseInt(M.substring(V,V+F),R);8>F?(F=m(Math.pow(R,F)),k=k.j(F).add(m(O))):(k=k.j(N),k=k.add(m(O)))}return k}var E=p(0),w=p(1),I=p(16777216);n=u.prototype,n.m=function(){if(B(this))return-j(this).m();for(var M=0,R=1,N=0;N<this.g.length;N++){var k=this.i(N);M+=(0<=k?k:4294967296+k)*R,R*=4294967296}return M},n.toString=function(M){if(M=M||10,2>M||36<M)throw Error("radix out of range: "+M);if(C(this))return"0";if(B(this))return"-"+j(this).toString(M);for(var R=m(Math.pow(M,6)),N=this,k="";;){var V=re(N,R).g;N=$(N,V.j(R));var F=((0<N.g.length?N.g[0]:N.h)>>>0).toString(M);if(N=V,C(N))return F+k;for(;6>F.length;)F="0"+F;k=F+k}},n.i=function(M){return 0>M?0:M<this.g.length?this.g[M]:this.h};function C(M){if(M.h!=0)return!1;for(var R=0;R<M.g.length;R++)if(M.g[R]!=0)return!1;return!0}function B(M){return M.h==-1}n.l=function(M){return M=$(this,M),B(M)?-1:C(M)?0:1};function j(M){for(var R=M.g.length,N=[],k=0;k<R;k++)N[k]=~M.g[k];return new u(N,~M.h).add(w)}n.abs=function(){return B(this)?j(this):this},n.add=function(M){for(var R=Math.max(this.g.length,M.g.length),N=[],k=0,V=0;V<=R;V++){var F=k+(this.i(V)&65535)+(M.i(V)&65535),O=(F>>>16)+(this.i(V)>>>16)+(M.i(V)>>>16);k=O>>>16,F&=65535,O&=65535,N[V]=O<<16|F}return new u(N,N[N.length-1]&-2147483648?-1:0)};function $(M,R){return M.add(j(R))}n.j=function(M){if(C(this)||C(M))return E;if(B(this))return B(M)?j(this).j(j(M)):j(j(this).j(M));if(B(M))return j(this.j(j(M)));if(0>this.l(I)&&0>M.l(I))return m(this.m()*M.m());for(var R=this.g.length+M.g.length,N=[],k=0;k<2*R;k++)N[k]=0;for(k=0;k<this.g.length;k++)for(var V=0;V<M.g.length;V++){var F=this.i(k)>>>16,O=this.i(k)&65535,en=M.i(V)>>>16,_t=M.i(V)&65535;N[2*k+2*V]+=O*_t,K(N,2*k+2*V),N[2*k+2*V+1]+=F*_t,K(N,2*k+2*V+1),N[2*k+2*V+1]+=O*en,K(N,2*k+2*V+1),N[2*k+2*V+2]+=F*en,K(N,2*k+2*V+2)}for(k=0;k<R;k++)N[k]=N[2*k+1]<<16|N[2*k];for(k=R;k<2*R;k++)N[k]=0;return new u(N,0)};function K(M,R){for(;(M[R]&65535)!=M[R];)M[R+1]+=M[R]>>>16,M[R]&=65535,R++}function te(M,R){this.g=M,this.h=R}function re(M,R){if(C(R))throw Error("division by zero");if(C(M))return new te(E,E);if(B(M))return R=re(j(M),R),new te(j(R.g),j(R.h));if(B(R))return R=re(M,j(R)),new te(j(R.g),R.h);if(30<M.g.length){if(B(M)||B(R))throw Error("slowDivide_ only works with positive integers.");for(var N=w,k=R;0>=k.l(M);)N=ce(N),k=ce(k);var V=ve(N,1),F=ve(k,1);for(k=ve(k,2),N=ve(N,2);!C(k);){var O=F.add(k);0>=O.l(M)&&(V=V.add(N),F=O),k=ve(k,1),N=ve(N,1)}return R=$(M,V.j(R)),new te(V,R)}for(V=E;0<=M.l(R);){for(N=Math.max(1,Math.floor(M.m()/R.m())),k=Math.ceil(Math.log(N)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),F=m(N),O=F.j(R);B(O)||0<O.l(M);)N-=k,F=m(N),O=F.j(R);C(F)&&(F=w),V=V.add(F),M=$(M,O)}return new te(V,M)}n.A=function(M){return re(this,M).h},n.and=function(M){for(var R=Math.max(this.g.length,M.g.length),N=[],k=0;k<R;k++)N[k]=this.i(k)&M.i(k);return new u(N,this.h&M.h)},n.or=function(M){for(var R=Math.max(this.g.length,M.g.length),N=[],k=0;k<R;k++)N[k]=this.i(k)|M.i(k);return new u(N,this.h|M.h)},n.xor=function(M){for(var R=Math.max(this.g.length,M.g.length),N=[],k=0;k<R;k++)N[k]=this.i(k)^M.i(k);return new u(N,this.h^M.h)};function ce(M){for(var R=M.g.length+1,N=[],k=0;k<R;k++)N[k]=M.i(k)<<1|M.i(k-1)>>>31;return new u(N,M.h)}function ve(M,R){var N=R>>5;R%=32;for(var k=M.g.length-N,V=[],F=0;F<k;F++)V[F]=0<R?M.i(F+N)>>>R|M.i(F+N+1)<<32-R:M.i(F+N);return new u(V,M.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,z1=i,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=m,u.fromString=y,Cs=u}).apply(typeof Nw<"u"?Nw:typeof self<"u"?self:typeof window<"u"?window:{});var bd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var B1,Ku,H1,Ld,h_,q1,G1,W1;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,_,v){return h==Array.prototype||h==Object.prototype||(h[_]=v.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof bd=="object"&&bd];for(var _=0;_<h.length;++_){var v=h[_];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var i=t(this);function a(h,_){if(_)e:{var v=i;h=h.split(".");for(var A=0;A<h.length-1;A++){var z=h[A];if(!(z in v))break e;v=v[z]}h=h[h.length-1],A=v[h],_=_(A),_!=A&&_!=null&&e(v,h,{configurable:!0,writable:!0,value:_})}}function l(h,_){h instanceof String&&(h+="");var v=0,A=!1,z={next:function(){if(!A&&v<h.length){var Y=v++;return{value:_(Y,h[Y]),done:!1}}return A=!0,{done:!0,value:void 0}}};return z[Symbol.iterator]=function(){return z},z}a("Array.prototype.values",function(h){return h||function(){return l(this,function(_,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},d=this||self;function p(h){var _=typeof h;return _=_!="object"?_:h?Array.isArray(h)?"array":_:"null",_=="array"||_=="object"&&typeof h.length=="number"}function m(h){var _=typeof h;return _=="object"&&h!=null||_=="function"}function y(h,_,v){return h.call.apply(h.bind,arguments)}function E(h,_,v){if(!h)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var z=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(z,A),h.apply(_,z)}}return function(){return h.apply(_,arguments)}}function w(h,_,v){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:E,w.apply(null,arguments)}function I(h,_){var v=Array.prototype.slice.call(arguments,1);return function(){var A=v.slice();return A.push.apply(A,arguments),h.apply(this,A)}}function C(h,_){function v(){}v.prototype=_.prototype,h.aa=_.prototype,h.prototype=new v,h.prototype.constructor=h,h.Qb=function(A,z,Y){for(var ae=Array(arguments.length-2),ze=2;ze<arguments.length;ze++)ae[ze-2]=arguments[ze];return _.prototype[z].apply(A,ae)}}function B(h){const _=h.length;if(0<_){const v=Array(_);for(let A=0;A<_;A++)v[A]=h[A];return v}return[]}function j(h,_){for(let v=1;v<arguments.length;v++){const A=arguments[v];if(p(A)){const z=h.length||0,Y=A.length||0;h.length=z+Y;for(let ae=0;ae<Y;ae++)h[z+ae]=A[ae]}else h.push(A)}}class ${constructor(_,v){this.i=_,this.j=v,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function K(h){return/^[\s\xa0]*$/.test(h)}function te(){var h=d.navigator;return h&&(h=h.userAgent)?h:""}function re(h){return re[" "](h),h}re[" "]=function(){};var ce=te().indexOf("Gecko")!=-1&&!(te().toLowerCase().indexOf("webkit")!=-1&&te().indexOf("Edge")==-1)&&!(te().indexOf("Trident")!=-1||te().indexOf("MSIE")!=-1)&&te().indexOf("Edge")==-1;function ve(h,_,v){for(const A in h)_.call(v,h[A],A,h)}function M(h,_){for(const v in h)_.call(void 0,h[v],v,h)}function R(h){const _={};for(const v in h)_[v]=h[v];return _}const N="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(h,_){let v,A;for(let z=1;z<arguments.length;z++){A=arguments[z];for(v in A)h[v]=A[v];for(let Y=0;Y<N.length;Y++)v=N[Y],Object.prototype.hasOwnProperty.call(A,v)&&(h[v]=A[v])}}function V(h){var _=1;h=h.split(":");const v=[];for(;0<_&&h.length;)v.push(h.shift()),_--;return h.length&&v.push(h.join(":")),v}function F(h){d.setTimeout(()=>{throw h},0)}function O(){var h=Ye;let _=null;return h.g&&(_=h.g,h.g=h.g.next,h.g||(h.h=null),_.next=null),_}class en{constructor(){this.h=this.g=null}add(_,v){const A=_t.get();A.set(_,v),this.h?this.h.next=A:this.g=A,this.h=A}}var _t=new $(()=>new Q,h=>h.reset());class Q{constructor(){this.next=this.g=this.h=null}set(_,v){this.h=_,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let le,me=!1,Ye=new en,D=()=>{const h=d.Promise.resolve(void 0);le=()=>{h.then(ne)}};var ne=()=>{for(var h;h=O();){try{h.h.call(h.g)}catch(v){F(v)}var _=_t;_.j(h),100>_.h&&(_.h++,h.next=_.g,_.g=h)}me=!1};function ue(){this.s=this.s,this.C=this.C}ue.prototype.s=!1,ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function se(h,_){this.type=h,this.g=this.target=_,this.defaultPrevented=!1}se.prototype.h=function(){this.defaultPrevented=!0};var ge=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var h=!1,_=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const v=()=>{};d.addEventListener("test",v,_),d.removeEventListener("test",v,_)}catch{}return h}();function De(h,_){if(se.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var v=this.type=h.type,A=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=_,_=h.relatedTarget){if(ce){e:{try{re(_.nodeName);var z=!0;break e}catch{}z=!1}z||(_=null)}}else v=="mouseover"?_=h.fromElement:v=="mouseout"&&(_=h.toElement);this.relatedTarget=_,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:Ae[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&De.aa.h.call(this)}}C(De,se);var Ae={2:"touch",3:"pen",4:"mouse"};De.prototype.h=function(){De.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var qt="closure_listenable_"+(1e6*Math.random()|0),at=0;function Si(h,_,v,A,z){this.listener=h,this.proxy=null,this.src=_,this.type=v,this.capture=!!A,this.ha=z,this.key=++at,this.da=this.fa=!1}function Gr(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function er(h){this.src=h,this.g={},this.h=0}er.prototype.add=function(h,_,v,A,z){var Y=h.toString();h=this.g[Y],h||(h=this.g[Y]=[],this.h++);var ae=Ys(h,_,A,z);return-1<ae?(_=h[ae],v||(_.fa=!1)):(_=new Si(_,this.src,Y,!!A,z),_.fa=v,h.push(_)),_};function Ws(h,_){var v=_.type;if(v in h.g){var A=h.g[v],z=Array.prototype.indexOf.call(A,_,void 0),Y;(Y=0<=z)&&Array.prototype.splice.call(A,z,1),Y&&(Gr(_),h.g[v].length==0&&(delete h.g[v],h.h--))}}function Ys(h,_,v,A){for(var z=0;z<h.length;++z){var Y=h[z];if(!Y.da&&Y.listener==_&&Y.capture==!!v&&Y.ha==A)return z}return-1}var $s="closure_lm_"+(1e6*Math.random()|0),Ol={};function Qc(h,_,v,A,z){if(Array.isArray(_)){for(var Y=0;Y<_.length;Y++)Qc(h,_[Y],v,A,z);return null}return v=Xc(v),h&&h[qt]?h.K(_,v,m(A)?!!A.capture:!1,z):qn(h,_,v,!1,A,z)}function qn(h,_,v,A,z,Y){if(!_)throw Error("Invalid event type");var ae=m(z)?!!z.capture:!!z,ze=Ja(h);if(ze||(h[$s]=ze=new er(h)),v=ze.add(_,v,A,ae,Y),v.proxy)return v;if(A=fp(),v.proxy=A,A.src=h,A.listener=v,h.addEventListener)ge||(z=ae),z===void 0&&(z=!1),h.addEventListener(_.toString(),A,z);else if(h.attachEvent)h.attachEvent(Ks(_.toString()),A);else if(h.addListener&&h.removeListener)h.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return v}function fp(){function h(v){return _.call(h.src,h.listener,v)}const _=pp;return h}function Dl(h,_,v,A,z){if(Array.isArray(_))for(var Y=0;Y<_.length;Y++)Dl(h,_[Y],v,A,z);else A=m(A)?!!A.capture:!!A,v=Xc(v),h&&h[qt]?(h=h.i,_=String(_).toString(),_ in h.g&&(Y=h.g[_],v=Ys(Y,v,A,z),-1<v&&(Gr(Y[v]),Array.prototype.splice.call(Y,v,1),Y.length==0&&(delete h.g[_],h.h--)))):h&&(h=Ja(h))&&(_=h.g[_.toString()],h=-1,_&&(h=Ys(_,v,A,z)),(v=-1<h?_[h]:null)&&Za(v))}function Za(h){if(typeof h!="number"&&h&&!h.da){var _=h.src;if(_&&_[qt])Ws(_.i,h);else{var v=h.type,A=h.proxy;_.removeEventListener?_.removeEventListener(v,A,h.capture):_.detachEvent?_.detachEvent(Ks(v),A):_.addListener&&_.removeListener&&_.removeListener(A),(v=Ja(_))?(Ws(v,h),v.h==0&&(v.src=null,_[$s]=null)):Gr(h)}}}function Ks(h){return h in Ol?Ol[h]:Ol[h]="on"+h}function pp(h,_){if(h.da)h=!0;else{_=new De(_,this);var v=h.listener,A=h.ha||h.src;h.fa&&Za(h),h=v.call(A,_)}return h}function Ja(h){return h=h[$s],h instanceof er?h:null}var kl="__closure_events_fn_"+(1e9*Math.random()>>>0);function Xc(h){return typeof h=="function"?h:(h[kl]||(h[kl]=function(_){return h.handleEvent(_)}),h[kl])}function yt(){ue.call(this),this.i=new er(this),this.M=this,this.F=null}C(yt,ue),yt.prototype[qt]=!0,yt.prototype.removeEventListener=function(h,_,v,A){Dl(this,h,_,v,A)};function Xe(h,_){var v,A=h.F;if(A)for(v=[];A;A=A.F)v.push(A);if(h=h.M,A=_.type||_,typeof _=="string")_=new se(_,h);else if(_ instanceof se)_.target=_.target||h;else{var z=_;_=new se(A,h),k(_,z)}if(z=!0,v)for(var Y=v.length-1;0<=Y;Y--){var ae=_.g=v[Y];z=Dn(ae,A,!0,_)&&z}if(ae=_.g=h,z=Dn(ae,A,!0,_)&&z,z=Dn(ae,A,!1,_)&&z,v)for(Y=0;Y<v.length;Y++)ae=_.g=v[Y],z=Dn(ae,A,!1,_)&&z}yt.prototype.N=function(){if(yt.aa.N.call(this),this.i){var h=this.i,_;for(_ in h.g){for(var v=h.g[_],A=0;A<v.length;A++)Gr(v[A]);delete h.g[_],h.h--}}this.F=null},yt.prototype.K=function(h,_,v,A){return this.i.add(String(h),_,!1,v,A)},yt.prototype.L=function(h,_,v,A){return this.i.add(String(h),_,!0,v,A)};function Dn(h,_,v,A){if(_=h.i.g[String(_)],!_)return!0;_=_.concat();for(var z=!0,Y=0;Y<_.length;++Y){var ae=_[Y];if(ae&&!ae.da&&ae.capture==v){var ze=ae.listener,Mt=ae.ha||ae.src;ae.fa&&Ws(h.i,ae),z=ze.call(Mt,A)!==!1&&z}}return z&&!A.defaultPrevented}function un(h,_,v){if(typeof h=="function")v&&(h=w(h,v));else if(h&&typeof h.handleEvent=="function")h=w(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:d.setTimeout(h,_||0)}function Zc(h){h.g=un(()=>{h.g=null,h.i&&(h.i=!1,Zc(h))},h.l);const _=h.h;h.h=null,h.m.apply(null,_)}class mp extends ue{constructor(_,v){super(),this.m=_,this.l=v,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:Zc(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qs(h){ue.call(this),this.h=h,this.g={}}C(Qs,ue);var Xs=[];function Zs(h){ve(h.g,function(_,v){this.g.hasOwnProperty(v)&&Za(_)},h),h.g={}}Qs.prototype.N=function(){Qs.aa.N.call(this),Zs(this)},Qs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var oi=d.JSON.stringify,eo=d.JSON.parse,Js=class{stringify(h){return d.JSON.stringify(h,void 0)}parse(h){return d.JSON.parse(h,void 0)}};function Pl(){}Pl.prototype.h=null;function Ml(h){return h.h||(h.h=h.i())}function Vl(){}var tr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function nr(){se.call(this,"d")}C(nr,se);function Ll(){se.call(this,"c")}C(Ll,se);var Ai={},Ul=null;function Wr(){return Ul=Ul||new yt}Ai.La="serverreachability";function to(h){se.call(this,Ai.La,h)}C(to,se);function Yr(h){const _=Wr();Xe(_,new to(_))}Ai.STAT_EVENT="statevent";function Jc(h,_){se.call(this,Ai.STAT_EVENT,h),this.stat=_}C(Jc,se);function ht(h){const _=Wr();Xe(_,new Jc(_,h))}Ai.Ma="timingevent";function Pt(h,_){se.call(this,Ai.Ma,h),this.size=_}C(Pt,se);function Ct(h,_){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){h()},_)}function Gn(){this.g=!0}Gn.prototype.xa=function(){this.g=!1};function jl(h,_,v,A,z,Y){h.info(function(){if(h.g)if(Y)for(var ae="",ze=Y.split("&"),Mt=0;Mt<ze.length;Mt++){var Be=ze[Mt].split("=");if(1<Be.length){var Wt=Be[0];Be=Be[1];var Vt=Wt.split("_");ae=2<=Vt.length&&Vt[1]=="type"?ae+(Wt+"="+Be+"&"):ae+(Wt+"=redacted&")}}else ae=null;else ae=Y;return"XMLHTTP REQ ("+A+") [attempt "+z+"]: "+_+`
`+v+`
`+ae})}function gp(h,_,v,A,z,Y,ae){h.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+z+"]: "+_+`
`+v+`
`+Y+" "+ae})}function $r(h,_,v,A){h.info(function(){return"XMLHTTP TEXT ("+_+"): "+ea(h,v)+(A?" "+A:"")})}function eh(h,_){h.info(function(){return"TIMEOUT: "+_})}Gn.prototype.info=function(){};function ea(h,_){if(!h.g)return _;if(!_)return null;try{var v=JSON.parse(_);if(v){for(h=0;h<v.length;h++)if(Array.isArray(v[h])){var A=v[h];if(!(2>A.length)){var z=A[1];if(Array.isArray(z)&&!(1>z.length)){var Y=z[0];if(Y!="noop"&&Y!="stop"&&Y!="close")for(var ae=1;ae<z.length;ae++)z[ae]=""}}}}return oi(v)}catch{return _}}var Kr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ir={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ri;function Ii(){}C(Ii,Pl),Ii.prototype.g=function(){return new XMLHttpRequest},Ii.prototype.i=function(){return{}},Ri=new Ii;function yn(h,_,v,A){this.j=h,this.i=_,this.l=v,this.R=A||1,this.U=new Qs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new bt}function bt(){this.i=null,this.g="",this.h=!1}var Fl={},no={};function li(h,_,v){h.L=1,h.v=sa(kn(_)),h.m=v,h.P=!0,rr(h,null)}function rr(h,_){h.F=Date.now(),ta(h),h.A=kn(h.v);var v=h.A,A=h.R;Array.isArray(A)||(A=[String(A)]),Wl(v.i,"t",A),h.C=0,v=h.j.J,h.h=new bt,h.g=gh(h.j,v?_:null,!h.m),0<h.O&&(h.M=new mp(w(h.Y,h,h.g),h.O)),_=h.U,v=h.g,A=h.ca;var z="readystatechange";Array.isArray(z)||(z&&(Xs[0]=z.toString()),z=Xs);for(var Y=0;Y<z.length;Y++){var ae=Qc(v,z[Y],A||_.handleEvent,!1,_.h||_);if(!ae)break;_.g[ae.key]=ae}_=h.H?R(h.H):{},h.m?(h.u||(h.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,_)):(h.u="GET",h.g.ea(h.A,h.u,null,_)),Yr(),jl(h.i,h.u,h.A,h.l,h.R,h.m)}yn.prototype.ca=function(h){h=h.target;const _=this.M;_&&Kn(h)==3?_.j():this.Y(h)},yn.prototype.Y=function(h){try{if(h==this.g)e:{const Vt=Kn(this.g);var _=this.g.Ba();const dr=this.g.Z();if(!(3>Vt)&&(Vt!=3||this.g&&(this.h.h||this.g.oa()||lh(this.g)))){this.J||Vt!=4||_==7||(_==8||0>=dr?Yr(3):Yr(2)),Qr(this);var v=this.g.Z();this.X=v;t:if(th(this)){var A=lh(this.g);h="";var z=A.length,Y=Kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){tn(this),Ci(this);var ae="";break t}this.h.i=new d.TextDecoder}for(_=0;_<z;_++)this.h.h=!0,h+=this.h.i.decode(A[_],{stream:!(Y&&_==z-1)});A.length=0,this.h.g+=h,this.C=0,ae=this.h.g}else ae=this.g.oa();if(this.o=v==200,gp(this.i,this.u,this.A,this.l,this.R,Vt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var ze,Mt=this.g;if((ze=Mt.g?Mt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!K(ze)){var Be=ze;break t}}Be=null}if(v=Be)$r(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,na(this,v);else{this.o=!1,this.s=3,ht(12),tn(this),Ci(this);break e}}if(this.P){v=!0;let nn;for(;!this.J&&this.C<ae.length;)if(nn=nh(this,ae),nn==no){Vt==4&&(this.s=4,ht(14),v=!1),$r(this.i,this.l,null,"[Incomplete Response]");break}else if(nn==Fl){this.s=4,ht(15),$r(this.i,this.l,ae,"[Invalid Chunk]"),v=!1;break}else $r(this.i,this.l,nn,null),na(this,nn);if(th(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Vt!=4||ae.length!=0||this.h.h||(this.s=1,ht(16),v=!1),this.o=this.o&&v,!v)$r(this.i,this.l,ae,"[Invalid Chunked Response]"),tn(this),Ci(this);else if(0<ae.length&&!this.W){this.W=!0;var Wt=this.j;Wt.g==this&&Wt.ba&&!Wt.M&&(Wt.j.info("Great, no buffering proxy detected. Bytes received: "+ae.length),fa(Wt),Wt.M=!0,ht(11))}}else $r(this.i,this.l,ae,null),na(this,ae);Vt==4&&tn(this),this.o&&!this.J&&(Vt==4?fh(this.j,this):(this.o=!1,ta(this)))}else Tp(this.g),v==400&&0<ae.indexOf("Unknown SID")?(this.s=3,ht(12)):(this.s=0,ht(13)),tn(this),Ci(this)}}}catch{}finally{}};function th(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function nh(h,_){var v=h.C,A=_.indexOf(`
`,v);return A==-1?no:(v=Number(_.substring(v,A)),isNaN(v)?Fl:(A+=1,A+v>_.length?no:(_=_.slice(A,A+v),h.C=A+v,_)))}yn.prototype.cancel=function(){this.J=!0,tn(this)};function ta(h){h.S=Date.now()+h.I,ih(h,h.I)}function ih(h,_){if(h.B!=null)throw Error("WatchDog timer not null");h.B=Ct(w(h.ba,h),_)}function Qr(h){h.B&&(d.clearTimeout(h.B),h.B=null)}yn.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(eh(this.i,this.A),this.L!=2&&(Yr(),ht(17)),tn(this),this.s=2,Ci(this)):ih(this,this.S-h)};function Ci(h){h.j.G==0||h.J||fh(h.j,h)}function tn(h){Qr(h);var _=h.M;_&&typeof _.ma=="function"&&_.ma(),h.M=null,Zs(h.U),h.g&&(_=h.g,h.g=null,_.abort(),_.ma())}function na(h,_){try{var v=h.j;if(v.G!=0&&(v.g==h||zl(v.h,h))){if(!h.K&&zl(v.h,h)&&v.G==3){try{var A=v.Da.g.parse(_)}catch{A=null}if(Array.isArray(A)&&A.length==3){var z=A;if(z[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<h.F)mo(v),fo(v);else break e;Xl(v),ht(18)}}else v.za=z[1],0<v.za-v.T&&37500>z[2]&&v.F&&v.v==0&&!v.C&&(v.C=Ct(w(v.Za,v),6e3));if(1>=ro(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else hr(v,11)}else if((h.K||v.g==h)&&mo(v),!K(_))for(z=v.Da.g.parse(_),_=0;_<z.length;_++){let Be=z[_];if(v.T=Be[0],Be=Be[1],v.G==2)if(Be[0]=="c"){v.K=Be[1],v.ia=Be[2];const Wt=Be[3];Wt!=null&&(v.la=Wt,v.j.info("VER="+v.la));const Vt=Be[4];Vt!=null&&(v.Aa=Vt,v.j.info("SVER="+v.Aa));const dr=Be[5];dr!=null&&typeof dr=="number"&&0<dr&&(A=1.5*dr,v.L=A,v.j.info("backChannelRequestTimeoutMs_="+A)),A=v;const nn=h.g;if(nn){const Mi=nn.g?nn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Mi){var Y=A.h;Y.g||Mi.indexOf("spdy")==-1&&Mi.indexOf("quic")==-1&&Mi.indexOf("h2")==-1||(Y.j=Y.l,Y.g=new Set,Y.h&&(so(Y,Y.h),Y.h=null))}if(A.D){const Jl=nn.g?nn.g.getResponseHeader("X-HTTP-Session-Id"):null;Jl&&(A.ya=Jl,et(A.I,A.D,Jl))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-h.F,v.j.info("Handshake RTT: "+v.R+"ms")),A=v;var ae=h;if(A.qa=mh(A,A.J?A.ia:null,A.W),ae.K){vn(A.h,ae);var ze=ae,Mt=A.L;Mt&&(ze.I=Mt),ze.B&&(Qr(ze),ta(ze)),A.g=ae}else hh(A);0<v.i.length&&po(v)}else Be[0]!="stop"&&Be[0]!="close"||hr(v,7);else v.G==3&&(Be[0]=="stop"||Be[0]=="close"?Be[0]=="stop"?hr(v,7):Kl(v):Be[0]!="noop"&&v.l&&v.l.ta(Be),v.v=0)}}Yr(4)}catch{}}var rh=class{constructor(h,_){this.g=h,this.map=_}};function sr(h){this.l=h||10,d.PerformanceNavigationTiming?(h=d.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function io(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function ro(h){return h.h?1:h.g?h.g.size:0}function zl(h,_){return h.h?h.h==_:h.g?h.g.has(_):!1}function so(h,_){h.g?h.g.add(_):h.h=_}function vn(h,_){h.h&&h.h==_?h.h=null:h.g&&h.g.has(_)&&h.g.delete(_)}sr.prototype.cancel=function(){if(this.i=Bl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function Bl(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let _=h.i;for(const v of h.g.values())_=_.concat(v.D);return _}return B(h.i)}function _p(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(p(h)){for(var _=[],v=h.length,A=0;A<v;A++)_.push(h[A]);return _}_=[],v=0;for(A in h)_[v++]=h[A];return _}function ao(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(p(h)||typeof h=="string"){var _=[];h=h.length;for(var v=0;v<h;v++)_.push(v);return _}_=[],v=0;for(const A in h)_[v++]=A;return _}}}function Hl(h,_){if(h.forEach&&typeof h.forEach=="function")h.forEach(_,void 0);else if(p(h)||typeof h=="string")Array.prototype.forEach.call(h,_,void 0);else for(var v=ao(h),A=_p(h),z=A.length,Y=0;Y<z;Y++)_.call(void 0,A[Y],v&&v[Y],h)}var ia=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function yp(h,_){if(h){h=h.split("&");for(var v=0;v<h.length;v++){var A=h[v].indexOf("="),z=null;if(0<=A){var Y=h[v].substring(0,A);z=h[v].substring(A+1)}else Y=h[v];_(Y,z?decodeURIComponent(z.replace(/\+/g," ")):"")}}}function Nt(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof Nt){this.h=h.h,ra(this,h.j),this.o=h.o,this.g=h.g,Xr(this,h.s),this.l=h.l;var _=h.i,v=new or;v.i=_.i,_.g&&(v.g=new Map(_.g),v.h=_.h),ar(this,v),this.m=h.m}else h&&(_=String(h).match(ia))?(this.h=!1,ra(this,_[1]||"",!0),this.o=Wn(_[2]||""),this.g=Wn(_[3]||"",!0),Xr(this,_[4]),this.l=Wn(_[5]||"",!0),ar(this,_[6]||"",!0),this.m=Wn(_[7]||"")):(this.h=!1,this.i=new or(null,this.h))}Nt.prototype.toString=function(){var h=[],_=this.j;_&&h.push(aa(_,ql,!0),":");var v=this.g;return(v||_=="file")&&(h.push("//"),(_=this.o)&&h.push(aa(_,ql,!0),"@"),h.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&h.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&h.push("/"),h.push(aa(v,v.charAt(0)=="/"?vp:Gl,!0))),(v=this.i.toString())&&h.push("?",v),(v=this.m)&&h.push("#",aa(v,oo)),h.join("")};function kn(h){return new Nt(h)}function ra(h,_,v){h.j=v?Wn(_,!0):_,h.j&&(h.j=h.j.replace(/:$/,""))}function Xr(h,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);h.s=_}else h.s=null}function ar(h,_,v){_ instanceof or?(h.i=_,ah(h.i,h.h)):(v||(_=aa(_,Ep)),h.i=new or(_,h.h))}function et(h,_,v){h.i.set(_,v)}function sa(h){return et(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function Wn(h,_){return h?_?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function aa(h,_,v){return typeof h=="string"?(h=encodeURI(h).replace(_,sh),v&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function sh(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var ql=/[#\/\?@]/g,Gl=/[#\?:]/g,vp=/[#\?]/g,Ep=/[#\?@]/g,oo=/#/g;function or(h,_){this.h=this.g=null,this.i=h||null,this.j=!!_}function Yn(h){h.g||(h.g=new Map,h.h=0,h.i&&yp(h.i,function(_,v){h.add(decodeURIComponent(_.replace(/\+/g," ")),v)}))}n=or.prototype,n.add=function(h,_){Yn(this),this.i=null,h=Ni(this,h);var v=this.g.get(h);return v||this.g.set(h,v=[]),v.push(_),this.h+=1,this};function lr(h,_){Yn(h),_=Ni(h,_),h.g.has(_)&&(h.i=null,h.h-=h.g.get(_).length,h.g.delete(_))}function ur(h,_){return Yn(h),_=Ni(h,_),h.g.has(_)}n.forEach=function(h,_){Yn(this),this.g.forEach(function(v,A){v.forEach(function(z){h.call(_,z,A,this)},this)},this)},n.na=function(){Yn(this);const h=Array.from(this.g.values()),_=Array.from(this.g.keys()),v=[];for(let A=0;A<_.length;A++){const z=h[A];for(let Y=0;Y<z.length;Y++)v.push(_[A])}return v},n.V=function(h){Yn(this);let _=[];if(typeof h=="string")ur(this,h)&&(_=_.concat(this.g.get(Ni(this,h))));else{h=Array.from(this.g.values());for(let v=0;v<h.length;v++)_=_.concat(h[v])}return _},n.set=function(h,_){return Yn(this),this.i=null,h=Ni(this,h),ur(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[_]),this.h+=1,this},n.get=function(h,_){return h?(h=this.V(h),0<h.length?String(h[0]):_):_};function Wl(h,_,v){lr(h,_),0<v.length&&(h.i=null,h.g.set(Ni(h,_),B(v)),h.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],_=Array.from(this.g.keys());for(var v=0;v<_.length;v++){var A=_[v];const Y=encodeURIComponent(String(A)),ae=this.V(A);for(A=0;A<ae.length;A++){var z=Y;ae[A]!==""&&(z+="="+encodeURIComponent(String(ae[A]))),h.push(z)}}return this.i=h.join("&")};function Ni(h,_){return _=String(_),h.j&&(_=_.toLowerCase()),_}function ah(h,_){_&&!h.j&&(Yn(h),h.i=null,h.g.forEach(function(v,A){var z=A.toLowerCase();A!=z&&(lr(this,A),Wl(this,z,v))},h)),h.j=_}function oa(h,_){const v=new Gn;if(d.Image){const A=new Image;A.onload=I($n,v,"TestLoadImage: loaded",!0,_,A),A.onerror=I($n,v,"TestLoadImage: error",!1,_,A),A.onabort=I($n,v,"TestLoadImage: abort",!1,_,A),A.ontimeout=I($n,v,"TestLoadImage: timeout",!1,_,A),d.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=h}else _(!1)}function ui(h,_){const v=new Gn,A=new AbortController,z=setTimeout(()=>{A.abort(),$n(v,"TestPingServer: timeout",!1,_)},1e4);fetch(h,{signal:A.signal}).then(Y=>{clearTimeout(z),Y.ok?$n(v,"TestPingServer: ok",!0,_):$n(v,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(z),$n(v,"TestPingServer: error",!1,_)})}function $n(h,_,v,A,z){try{z&&(z.onload=null,z.onerror=null,z.onabort=null,z.ontimeout=null),A(v)}catch{}}function la(){this.g=new Js}function xi(h,_,v){const A=v||"";try{Hl(h,function(z,Y){let ae=z;m(z)&&(ae=oi(z)),_.push(A+Y+"="+encodeURIComponent(ae))})}catch(z){throw _.push(A+"type="+encodeURIComponent("_badmap")),z}}function Zr(h){this.l=h.Ub||null,this.j=h.eb||!1}C(Zr,Pl),Zr.prototype.g=function(){return new cr(this.l,this.j)},Zr.prototype.i=function(h){return function(){return h}}({});function cr(h,_){yt.call(this),this.D=h,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(cr,yt),n=cr.prototype,n.open=function(h,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=_,this.readyState=1,Di(this)},n.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(_.body=h),(this.D||d).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Oi(this)),this.readyState=0},n.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,Di(this)),this.g&&(this.readyState=3,Di(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Yl(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function Yl(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}n.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var _=h.value?h.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!h.done}))&&(this.response=this.responseText+=_)}h.done?Oi(this):Di(this),this.readyState==3&&Yl(this)}},n.Ra=function(h){this.g&&(this.response=this.responseText=h,Oi(this))},n.Qa=function(h){this.g&&(this.response=h,Oi(this))},n.ga=function(){this.g&&Oi(this)};function Oi(h){h.readyState=4,h.l=null,h.j=null,h.v=null,Di(h)}n.setRequestHeader=function(h,_){this.u.append(h,_)},n.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],_=this.h.entries();for(var v=_.next();!v.done;)v=v.value,h.push(v[0]+": "+v[1]),v=_.next();return h.join(`\r
`)};function Di(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(cr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function $l(h){let _="";return ve(h,function(v,A){_+=A,_+=":",_+=v,_+=`\r
`}),_}function Gt(h,_,v){e:{for(A in v){var A=!1;break e}A=!0}A||(v=$l(v),typeof h=="string"?v!=null&&encodeURIComponent(String(v)):et(h,_,v))}function Ke(h){yt.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Ke,yt);var lo=/^https?$/i,ua=["POST","PUT"];n=Ke.prototype,n.Ha=function(h){this.J=h},n.ea=function(h,_,v,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);_=_?_.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ri.g(),this.v=this.o?Ml(this.o):Ml(Ri),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(_,String(h),!0),this.B=!1}catch(Y){oh(this,Y);return}if(h=v||"",v=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var z in A)v.set(z,A[z]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const Y of A.keys())v.set(Y,A.get(Y));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(v.keys()).find(Y=>Y.toLowerCase()=="content-type"),z=d.FormData&&h instanceof d.FormData,!(0<=Array.prototype.indexOf.call(ua,_,void 0))||A||z||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Y,ae]of v)this.g.setRequestHeader(Y,ae);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ca(this),this.u=!0,this.g.send(h),this.u=!1}catch(Y){oh(this,Y)}};function oh(h,_){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=_,h.m=5,uo(h),ki(h)}function uo(h){h.A||(h.A=!0,Xe(h,"complete"),Xe(h,"error"))}n.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,Xe(this,"complete"),Xe(this,"abort"),ki(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ki(this,!0)),Ke.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?co(this):this.bb())},n.bb=function(){co(this)};function co(h){if(h.h&&typeof u<"u"&&(!h.v[1]||Kn(h)!=4||h.Z()!=2)){if(h.u&&Kn(h)==4)un(h.Ea,0,h);else if(Xe(h,"readystatechange"),Kn(h)==4){h.h=!1;try{const ae=h.Z();e:switch(ae){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var v;if(!(v=_)){var A;if(A=ae===0){var z=String(h.D).match(ia)[1]||null;!z&&d.self&&d.self.location&&(z=d.self.location.protocol.slice(0,-1)),A=!lo.test(z?z.toLowerCase():"")}v=A}if(v)Xe(h,"complete"),Xe(h,"success");else{h.m=6;try{var Y=2<Kn(h)?h.g.statusText:""}catch{Y=""}h.l=Y+" ["+h.Z()+"]",uo(h)}}finally{ki(h)}}}}function ki(h,_){if(h.g){ca(h);const v=h.g,A=h.v[0]?()=>{}:null;h.g=null,h.v=null,_||Xe(h,"ready");try{v.onreadystatechange=A}catch{}}}function ca(h){h.I&&(d.clearTimeout(h.I),h.I=null)}n.isActive=function(){return!!this.g};function Kn(h){return h.g?h.g.readyState:0}n.Z=function(){try{return 2<Kn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(h){if(this.g){var _=this.g.responseText;return h&&_.indexOf(h)==0&&(_=_.substring(h.length)),eo(_)}};function lh(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function Tp(h){const _={};h=(h.g&&2<=Kn(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<h.length;A++){if(K(h[A]))continue;var v=V(h[A]);const z=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const Y=_[z]||[];_[z]=Y,Y.push(v)}M(_,function(A){return A.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ha(h,_,v){return v&&v.internalChannelParams&&v.internalChannelParams[h]||_}function ho(h){this.Aa=0,this.i=[],this.j=new Gn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ha("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ha("baseRetryDelayMs",5e3,h),this.cb=ha("retryDelaySeedMs",1e4,h),this.Wa=ha("forwardChannelMaxRetries",2,h),this.wa=ha("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new sr(h&&h.concurrentRequestLimit),this.Da=new la,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ho.prototype,n.la=8,n.G=1,n.connect=function(h,_,v,A){ht(0),this.W=h,this.H=_||{},v&&A!==void 0&&(this.H.OSID=v,this.H.OAID=A),this.F=this.X,this.I=mh(this,null,this.W),po(this)};function Kl(h){if(uh(h),h.G==3){var _=h.U++,v=kn(h.I);if(et(v,"SID",h.K),et(v,"RID",_),et(v,"TYPE","terminate"),da(h,v),_=new yn(h,h.j,_),_.L=2,_.v=sa(kn(v)),v=!1,d.navigator&&d.navigator.sendBeacon)try{v=d.navigator.sendBeacon(_.v.toString(),"")}catch{}!v&&d.Image&&(new Image().src=_.v,v=!0),v||(_.g=gh(_.j,null),_.g.ea(_.v)),_.F=Date.now(),ta(_)}ph(h)}function fo(h){h.g&&(fa(h),h.g.cancel(),h.g=null)}function uh(h){fo(h),h.u&&(d.clearTimeout(h.u),h.u=null),mo(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&d.clearTimeout(h.s),h.s=null)}function po(h){if(!io(h.h)&&!h.s){h.s=!0;var _=h.Ga;le||D(),me||(le(),me=!0),Ye.add(_,h),h.B=0}}function wp(h,_){return ro(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=_.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=Ct(w(h.Ga,h,_),Zl(h,h.B)),h.B++,!0)}n.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const z=new yn(this,this.j,h);let Y=this.o;if(this.S&&(Y?(Y=R(Y),k(Y,this.S)):Y=this.S),this.m!==null||this.O||(z.H=Y,Y=null),this.P)e:{for(var _=0,v=0;v<this.i.length;v++){t:{var A=this.i[v];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break t}A=void 0}if(A===void 0)break;if(_+=A,4096<_){_=v;break e}if(_===4096||v===this.i.length-1){_=v+1;break e}}_=1e3}else _=1e3;_=ch(this,z,_),v=kn(this.I),et(v,"RID",h),et(v,"CVER",22),this.D&&et(v,"X-HTTP-Session-Id",this.D),da(this,v),Y&&(this.O?_="headers="+encodeURIComponent(String($l(Y)))+"&"+_:this.m&&Gt(v,this.m,Y)),so(this.h,z),this.Ua&&et(v,"TYPE","init"),this.P?(et(v,"$req",_),et(v,"SID","null"),z.T=!0,li(z,v,null)):li(z,v,_),this.G=2}}else this.G==3&&(h?Ql(this,h):this.i.length==0||io(this.h)||Ql(this))};function Ql(h,_){var v;_?v=_.l:v=h.U++;const A=kn(h.I);et(A,"SID",h.K),et(A,"RID",v),et(A,"AID",h.T),da(h,A),h.m&&h.o&&Gt(A,h.m,h.o),v=new yn(h,h.j,v,h.B+1),h.m===null&&(v.H=h.o),_&&(h.i=_.D.concat(h.i)),_=ch(h,v,1e3),v.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),so(h.h,v),li(v,A,_)}function da(h,_){h.H&&ve(h.H,function(v,A){et(_,A,v)}),h.l&&Hl({},function(v,A){et(_,A,v)})}function ch(h,_,v){v=Math.min(h.i.length,v);var A=h.l?w(h.l.Na,h.l,h):null;e:{var z=h.i;let Y=-1;for(;;){const ae=["count="+v];Y==-1?0<v?(Y=z[0].g,ae.push("ofs="+Y)):Y=0:ae.push("ofs="+Y);let ze=!0;for(let Mt=0;Mt<v;Mt++){let Be=z[Mt].g;const Wt=z[Mt].map;if(Be-=Y,0>Be)Y=Math.max(0,z[Mt].g-100),ze=!1;else try{xi(Wt,ae,"req"+Be+"_")}catch{A&&A(Wt)}}if(ze){A=ae.join("&");break e}}}return h=h.i.splice(0,v),_.D=h,A}function hh(h){if(!h.g&&!h.u){h.Y=1;var _=h.Fa;le||D(),me||(le(),me=!0),Ye.add(_,h),h.v=0}}function Xl(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=Ct(w(h.Fa,h),Zl(h,h.v)),h.v++,!0)}n.Fa=function(){if(this.u=null,dh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=Ct(w(this.ab,this),h)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ht(10),fo(this),dh(this))};function fa(h){h.A!=null&&(d.clearTimeout(h.A),h.A=null)}function dh(h){h.g=new yn(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var _=kn(h.qa);et(_,"RID","rpc"),et(_,"SID",h.K),et(_,"AID",h.T),et(_,"CI",h.F?"0":"1"),!h.F&&h.ja&&et(_,"TO",h.ja),et(_,"TYPE","xmlhttp"),da(h,_),h.m&&h.o&&Gt(_,h.m,h.o),h.L&&(h.g.I=h.L);var v=h.g;h=h.ia,v.L=1,v.v=sa(kn(_)),v.m=null,v.P=!0,rr(v,h)}n.Za=function(){this.C!=null&&(this.C=null,fo(this),Xl(this),ht(19))};function mo(h){h.C!=null&&(d.clearTimeout(h.C),h.C=null)}function fh(h,_){var v=null;if(h.g==_){mo(h),fa(h),h.g=null;var A=2}else if(zl(h.h,_))v=_.D,vn(h.h,_),A=1;else return;if(h.G!=0){if(_.o)if(A==1){v=_.m?_.m.length:0,_=Date.now()-_.F;var z=h.B;A=Wr(),Xe(A,new Pt(A,v)),po(h)}else hh(h);else if(z=_.s,z==3||z==0&&0<_.X||!(A==1&&wp(h,_)||A==2&&Xl(h)))switch(v&&0<v.length&&(_=h.h,_.i=_.i.concat(v)),z){case 1:hr(h,5);break;case 4:hr(h,10);break;case 3:hr(h,6);break;default:hr(h,2)}}}function Zl(h,_){let v=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(v*=2),v*_}function hr(h,_){if(h.j.info("Error code "+_),_==2){var v=w(h.fb,h),A=h.Xa;const z=!A;A=new Nt(A||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||ra(A,"https"),sa(A),z?oa(A.toString(),v):ui(A.toString(),v)}else ht(2);h.G=0,h.l&&h.l.sa(_),ph(h),uh(h)}n.fb=function(h){h?(this.j.info("Successfully pinged google.com"),ht(2)):(this.j.info("Failed to ping google.com"),ht(1))};function ph(h){if(h.G=0,h.ka=[],h.l){const _=Bl(h.h);(_.length!=0||h.i.length!=0)&&(j(h.ka,_),j(h.ka,h.i),h.h.i.length=0,B(h.i),h.i.length=0),h.l.ra()}}function mh(h,_,v){var A=v instanceof Nt?kn(v):new Nt(v);if(A.g!="")_&&(A.g=_+"."+A.g),Xr(A,A.s);else{var z=d.location;A=z.protocol,_=_?_+"."+z.hostname:z.hostname,z=+z.port;var Y=new Nt(null);A&&ra(Y,A),_&&(Y.g=_),z&&Xr(Y,z),v&&(Y.l=v),A=Y}return v=h.D,_=h.ya,v&&_&&et(A,v,_),et(A,"VER",h.la),da(h,A),A}function gh(h,_,v){if(_&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=h.Ca&&!h.pa?new Ke(new Zr({eb:v})):new Ke(h.pa),_.Ha(h.J),_}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function _h(){}n=_h.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function go(){}go.prototype.g=function(h,_){return new En(h,_)};function En(h,_){yt.call(this),this.g=new ho(_),this.l=h,this.h=_&&_.messageUrlParams||null,h=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(h?h["X-WebChannel-Content-Type"]=_.messageContentType:h={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(h?h["X-WebChannel-Client-Profile"]=_.va:h={"X-WebChannel-Client-Profile":_.va}),this.g.S=h,(h=_&&_.Sb)&&!K(h)&&(this.g.m=h),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!K(_)&&(this.g.D=_,h=this.h,h!==null&&_ in h&&(h=this.h,_ in h&&delete h[_])),this.j=new Pi(this)}C(En,yt),En.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},En.prototype.close=function(){Kl(this.g)},En.prototype.o=function(h){var _=this.g;if(typeof h=="string"){var v={};v.__data__=h,h=v}else this.u&&(v={},v.__data__=oi(h),h=v);_.i.push(new rh(_.Ya++,h)),_.G==3&&po(_)},En.prototype.N=function(){this.g.l=null,delete this.j,Kl(this.g),delete this.g,En.aa.N.call(this)};function yh(h){nr.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var _=h.__sm__;if(_){e:{for(const v in _){h=v;break e}h=void 0}(this.i=h)&&(h=this.i,_=_!==null&&h in _?_[h]:void 0),this.data=_}else this.data=h}C(yh,nr);function vh(){Ll.call(this),this.status=1}C(vh,Ll);function Pi(h){this.g=h}C(Pi,_h),Pi.prototype.ua=function(){Xe(this.g,"a")},Pi.prototype.ta=function(h){Xe(this.g,new yh(h))},Pi.prototype.sa=function(h){Xe(this.g,new vh)},Pi.prototype.ra=function(){Xe(this.g,"b")},go.prototype.createWebChannel=go.prototype.g,En.prototype.send=En.prototype.o,En.prototype.open=En.prototype.m,En.prototype.close=En.prototype.close,W1=function(){return new go},G1=function(){return Wr()},q1=Ai,h_={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Kr.NO_ERROR=0,Kr.TIMEOUT=8,Kr.HTTP_ERROR=6,Ld=Kr,ir.COMPLETE="complete",H1=ir,Vl.EventType=tr,tr.OPEN="a",tr.CLOSE="b",tr.ERROR="c",tr.MESSAGE="d",yt.prototype.listen=yt.prototype.K,Ku=Vl,Ke.prototype.listenOnce=Ke.prototype.L,Ke.prototype.getLastError=Ke.prototype.Ka,Ke.prototype.getLastErrorCode=Ke.prototype.Ba,Ke.prototype.getStatus=Ke.prototype.Z,Ke.prototype.getResponseJson=Ke.prototype.Oa,Ke.prototype.getResponseText=Ke.prototype.oa,Ke.prototype.send=Ke.prototype.ea,Ke.prototype.setWithCredentials=Ke.prototype.Ha,B1=Ke}).apply(typeof bd<"u"?bd:typeof self<"u"?self:typeof window<"u"?window:{});const xw="@firebase/firestore",Ow="4.7.17";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}fn.UNAUTHENTICATED=new fn(null),fn.GOOGLE_CREDENTIALS=new fn("google-credentials-uid"),fn.FIRST_PARTY=new fn("first-party-uid"),fn.MOCK_USER=new fn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sl="11.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua=new Dc("@firebase/firestore");function Wo(){return Ua.logLevel}function he(n,...e){if(Ua.logLevel<=Le.DEBUG){const t=e.map(dy);Ua.debug(`Firestore (${Sl}): ${n}`,...t)}}function Lr(n,...e){if(Ua.logLevel<=Le.ERROR){const t=e.map(dy);Ua.error(`Firestore (${Sl}): ${n}`,...t)}}function ol(n,...e){if(Ua.logLevel<=Le.WARN){const t=e.map(dy);Ua.warn(`Firestore (${Sl}): ${n}`,...t)}}function dy(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,Y1(n,i,t)}function Y1(n,e,t){let i=`FIRESTORE (${Sl}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw Lr(i),new Error(i)}function Qe(n,e,t,i){let a="Unexpected state";typeof t=="string"?a=t:i=t,n||Y1(e,a,i)}function Ie(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class pe extends ai{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class lM{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(fn.UNAUTHENTICATED))}shutdown(){}}class uM{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class cM{constructor(e){this.t=e,this.currentUser=fn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Qe(this.o===void 0,42304);let i=this.i;const a=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve();let l=new Or;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Or,e.enqueueRetryable(()=>a(this.currentUser))};const u=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await a(this.currentUser)})},d=p=>{he("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(he("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Or)}},0),u()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(he("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Qe(typeof i.accessToken=="string",31837,{l:i}),new $1(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Qe(e===null||typeof e=="string",2055,{h:e}),new fn(e)}}class hM{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=fn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class dM{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new hM(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(fn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Dw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fM{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,wn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Qe(this.o===void 0,3512);const i=l=>{l.error!=null&&he("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const u=l.token!==this.m;return this.m=l.token,he("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>i(l))};const a=l=>{he("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(l=>a(l)),setTimeout(()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):he("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Dw(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Qe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Dw(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pM(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K1(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q1{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const a=pM(40);for(let l=0;l<a.length;++l)i.length<20&&a[l]<t&&(i+=e.charAt(a[l]%62))}return i}}function Oe(n,e){return n<e?-1:n>e?1:0}function d_(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=n.codePointAt(t),a=e.codePointAt(t);if(i!==a){if(i<128&&a<128)return Oe(i,a);{const l=K1(),u=mM(l.encode(kw(n,t)),l.encode(kw(e,t)));return u!==0?u:Oe(i,a)}}t+=i>65535?2:1}return Oe(n.length,e.length)}function kw(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function mM(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Oe(n[t],e[t]);return Oe(n.length,e.length)}function ll(n,e,t){return n.length===e.length&&n.every((i,a)=>t(i,e[a]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pw=-62135596800,Mw=1e6;class Bt{static now(){return Bt.fromMillis(Date.now())}static fromDate(e){return Bt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*Mw);return new Bt(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new pe(ie.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new pe(ie.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Pw)throw new pe(ie.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new pe(ie.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Mw}_compareTo(e){return this.seconds===e.seconds?Oe(this.nanoseconds,e.nanoseconds):Oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Pw;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{static fromTimestamp(e){return new Re(e)}static min(){return new Re(new Bt(0,0))}static max(){return new Re(new Bt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vw="__name__";class zi{constructor(e,t,i){t===void 0?t=0:t>e.length&&be(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&be(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return zi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof zi?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let a=0;a<i;a++){const l=zi.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return Oe(e.length,t.length)}static compareSegments(e,t){const i=zi.isNumericId(e),a=zi.isNumericId(t);return i&&!a?-1:!i&&a?1:i&&a?zi.extractNumericId(e).compare(zi.extractNumericId(t)):d_(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Cs.fromString(e.substring(4,e.length-2))}}class ft extends zi{construct(e,t,i){return new ft(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new pe(ie.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(a=>a.length>0))}return new ft(t)}static emptyPath(){return new ft([])}}const gM=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class on extends zi{construct(e,t,i){return new on(e,t,i)}static isValidIdentifier(e){return gM.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),on.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Vw}static keyField(){return new on([Vw])}static fromServerFormat(e){const t=[];let i="",a=0;const l=()=>{if(i.length===0)throw new pe(ie.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let u=!1;for(;a<e.length;){const d=e[a];if(d==="\\"){if(a+1===e.length)throw new pe(ie.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new pe(ie.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,a+=2}else d==="`"?(u=!u,a++):d!=="."||u?(i+=d,a++):(l(),a++)}if(l(),u)throw new pe(ie.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new on(t)}static emptyPath(){return new on([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.path=e}static fromPath(e){return new _e(ft.fromString(e))}static fromName(e){return new _e(ft.fromString(e).popFirst(5))}static empty(){return new _e(ft.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ft.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ft.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new _e(new ft(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc=-1;function _M(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,a=Re.fromTimestamp(i===1e9?new Bt(t+1,0):new Bt(t,i));return new ks(a,_e.empty(),e)}function yM(n){return new ks(n.readTime,n.key,mc)}class ks{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new ks(Re.min(),_e.empty(),mc)}static max(){return new ks(Re.max(),_e.empty(),mc)}}function vM(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=_e.comparator(n.documentKey,e.documentKey),t!==0?t:Oe(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EM="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class TM{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Al(n){if(n.code!==ie.FAILED_PRECONDITION||n.message!==EM)throw n;he("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&be(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ee((i,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,a)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof ee?t:ee.resolve(t)}catch(t){return ee.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):ee.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):ee.reject(t)}static resolve(e){return new ee((t,i)=>{t(e)})}static reject(e){return new ee((t,i)=>{i(e)})}static waitFor(e){return new ee((t,i)=>{let a=0,l=0,u=!1;e.forEach(d=>{++a,d.next(()=>{++l,u&&l===a&&t()},p=>i(p))}),u=!0,l===a&&t()})}static or(e){let t=ee.resolve(!1);for(const i of e)t=t.next(a=>a?ee.resolve(a):i());return t}static forEach(e,t){const i=[];return e.forEach((a,l)=>{i.push(t.call(this,a,l))}),this.waitFor(i)}static mapArray(e,t){return new ee((i,a)=>{const l=e.length,u=new Array(l);let d=0;for(let p=0;p<l;p++){const m=p;t(e[m]).next(y=>{u[m]=y,++d,d===l&&i(u)},y=>a(y))}})}static doWhile(e,t){return new ee((i,a)=>{const l=()=>{e()===!0?t().next(()=>{l()},a):i()};l()})}}function wM(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Rl(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ue(i),this.ce=i=>t.writeSequenceNumber(i))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}Bf.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy=-1;function Hf(n){return n==null}function nf(n){return n===0&&1/n==-1/0}function bM(n){return typeof n=="number"&&Number.isInteger(n)&&!nf(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1="";function SM(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Lw(e)),e=AM(n.get(t),e);return Lw(e)}function AM(n,e){let t=e;const i=n.length;for(let a=0;a<i;a++){const l=n.charAt(a);switch(l){case"\0":t+="";break;case X1:t+="";break;default:t+=l}}return t}function Lw(n){return n+X1+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uw(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ya(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Z1(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kt=class f_{constructor(e,t){this.comparator=e,this.root=t||Ns.EMPTY}insert(e,t){return new f_(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ns.BLACK,null,null))}remove(e){return new f_(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ns.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const a=this.comparator(e,i.key);if(a===0)return t+i.left.size;a<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Sd(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Sd(this.root,e,this.comparator,!1)}getReverseIterator(){return new Sd(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Sd(this.root,e,this.comparator,!0)}},Sd=class{constructor(e,t,i,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Ns=class Rr{constructor(e,t,i,a,l){this.key=e,this.value=t,this.color=i??Rr.RED,this.left=a??Rr.EMPTY,this.right=l??Rr.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,a,l){return new Rr(e??this.key,t??this.value,i??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let a=this;const l=i(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,i),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,i)),a.fixUp()}removeMin(){if(this.left.isEmpty())return Rr.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return Rr.EMPTY;i=a.right.min(),a=a.copy(i.key,i.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Rr.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Rr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw be(43730,{key:this.key,value:this.value});if(this.right.isRed())throw be(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw be(27949);return e+(this.isRed()?0:1)}};Ns.EMPTY=null,Ns.RED=!0,Ns.BLACK=!1;Ns.EMPTY=new class{constructor(){this.size=0}get key(){throw be(57766)}get value(){throw be(16141)}get color(){throw be(16727)}get left(){throw be(29726)}get right(){throw be(36894)}copy(e,t,i,a,l){return this}insert(e,t,i){return new Ns(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.comparator=e,this.data=new kt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const a=i.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new jw(this.data.getIterator())}getIteratorFrom(e){return new jw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof Ht)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=i.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ht(this.comparator);return t.data=e,t}}class jw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e){this.fields=e,e.sort(on.comparator)}static empty(){return new gi([])}unionWith(e){let t=new Ht(on.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new gi(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ll(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new J1("Invalid base64 string: "+l):l}}(e);return new ln(t)}static fromUint8Array(e){const t=function(a){let l="";for(let u=0;u<a.length;++u)l+=String.fromCharCode(a[u]);return l}(e);return new ln(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let a=0;a<t.length;a++)i[a]=t.charCodeAt(a);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ln.EMPTY_BYTE_STRING=new ln("");const RM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ps(n){if(Qe(!!n,39018),typeof n=="string"){let e=0;const t=RM.exec(n);if(Qe(!!t,46558,{timestamp:n}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:It(n.seconds),nanos:It(n.nanos)}}function It(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ms(n){return typeof n=="string"?ln.fromBase64String(n):ln.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eA="server_timestamp",tA="__type__",nA="__previous_value__",iA="__local_write_time__";function py(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[tA])===null||t===void 0?void 0:t.stringValue)===eA}function qf(n){const e=n.mapValue.fields[nA];return py(e)?qf(e):e}function gc(n){const e=Ps(n.mapValue.fields[iA].timestampValue);return new Bt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IM{constructor(e,t,i,a,l,u,d,p,m,y){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=a,this.ssl=l,this.forceLongPolling=u,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=m,this.isUsingEmulator=y}}const rf="(default)";class _c{constructor(e,t){this.projectId=e,this.database=t||rf}static empty(){return new _c("","")}get isDefaultDatabase(){return this.database===rf}isEqual(e){return e instanceof _c&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rA="__type__",CM="__max__",Ad={mapValue:{}},sA="__vector__",sf="value";function Vs(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?py(n)?4:xM(n)?9007199254740991:NM(n)?10:11:be(28295,{value:n})}function $i(n,e){if(n===e)return!0;const t=Vs(n);if(t!==Vs(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return gc(n).isEqual(gc(e));case 3:return function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const u=Ps(a.timestampValue),d=Ps(l.timestampValue);return u.seconds===d.seconds&&u.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(a,l){return Ms(a.bytesValue).isEqual(Ms(l.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(a,l){return It(a.geoPointValue.latitude)===It(l.geoPointValue.latitude)&&It(a.geoPointValue.longitude)===It(l.geoPointValue.longitude)}(n,e);case 2:return function(a,l){if("integerValue"in a&&"integerValue"in l)return It(a.integerValue)===It(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const u=It(a.doubleValue),d=It(l.doubleValue);return u===d?nf(u)===nf(d):isNaN(u)&&isNaN(d)}return!1}(n,e);case 9:return ll(n.arrayValue.values||[],e.arrayValue.values||[],$i);case 10:case 11:return function(a,l){const u=a.mapValue.fields||{},d=l.mapValue.fields||{};if(Uw(u)!==Uw(d))return!1;for(const p in u)if(u.hasOwnProperty(p)&&(d[p]===void 0||!$i(u[p],d[p])))return!1;return!0}(n,e);default:return be(52216,{left:n})}}function yc(n,e){return(n.values||[]).find(t=>$i(t,e))!==void 0}function ul(n,e){if(n===e)return 0;const t=Vs(n),i=Vs(e);if(t!==i)return Oe(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Oe(n.booleanValue,e.booleanValue);case 2:return function(l,u){const d=It(l.integerValue||l.doubleValue),p=It(u.integerValue||u.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(n,e);case 3:return Fw(n.timestampValue,e.timestampValue);case 4:return Fw(gc(n),gc(e));case 5:return d_(n.stringValue,e.stringValue);case 6:return function(l,u){const d=Ms(l),p=Ms(u);return d.compareTo(p)}(n.bytesValue,e.bytesValue);case 7:return function(l,u){const d=l.split("/"),p=u.split("/");for(let m=0;m<d.length&&m<p.length;m++){const y=Oe(d[m],p[m]);if(y!==0)return y}return Oe(d.length,p.length)}(n.referenceValue,e.referenceValue);case 8:return function(l,u){const d=Oe(It(l.latitude),It(u.latitude));return d!==0?d:Oe(It(l.longitude),It(u.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return zw(n.arrayValue,e.arrayValue);case 10:return function(l,u){var d,p,m,y;const E=l.fields||{},w=u.fields||{},I=(d=E[sf])===null||d===void 0?void 0:d.arrayValue,C=(p=w[sf])===null||p===void 0?void 0:p.arrayValue,B=Oe(((m=I==null?void 0:I.values)===null||m===void 0?void 0:m.length)||0,((y=C==null?void 0:C.values)===null||y===void 0?void 0:y.length)||0);return B!==0?B:zw(I,C)}(n.mapValue,e.mapValue);case 11:return function(l,u){if(l===Ad.mapValue&&u===Ad.mapValue)return 0;if(l===Ad.mapValue)return 1;if(u===Ad.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),m=u.fields||{},y=Object.keys(m);p.sort(),y.sort();for(let E=0;E<p.length&&E<y.length;++E){const w=d_(p[E],y[E]);if(w!==0)return w;const I=ul(d[p[E]],m[y[E]]);if(I!==0)return I}return Oe(p.length,y.length)}(n.mapValue,e.mapValue);default:throw be(23264,{Pe:t})}}function Fw(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Oe(n,e);const t=Ps(n),i=Ps(e),a=Oe(t.seconds,i.seconds);return a!==0?a:Oe(t.nanos,i.nanos)}function zw(n,e){const t=n.values||[],i=e.values||[];for(let a=0;a<t.length&&a<i.length;++a){const l=ul(t[a],i[a]);if(l)return l}return Oe(t.length,i.length)}function cl(n){return p_(n)}function p_(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=Ps(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Ms(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return _e.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",a=!0;for(const l of t.values||[])a?a=!1:i+=",",i+=p_(l);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const u of i)l?l=!1:a+=",",a+=`${u}:${p_(t.fields[u])}`;return a+"}"}(n.mapValue):be(61005,{value:n})}function Ud(n){switch(Vs(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=qf(n);return e?16+Ud(e):16;case 5:return 2*n.stringValue.length;case 6:return Ms(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((a,l)=>a+Ud(l),0)}(n.arrayValue);case 10:case 11:return function(i){let a=0;return Ya(i.fields,(l,u)=>{a+=l.length+Ud(u)}),a}(n.mapValue);default:throw be(13486,{value:n})}}function m_(n){return!!n&&"integerValue"in n}function my(n){return!!n&&"arrayValue"in n}function Bw(n){return!!n&&"nullValue"in n}function Hw(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function jd(n){return!!n&&"mapValue"in n}function NM(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[rA])===null||t===void 0?void 0:t.stringValue)===sA}function tc(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Ya(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=tc(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=tc(n.arrayValue.values[t]);return e}return Object.assign({},n)}function xM(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===CM}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e){this.value=e}static empty(){return new ii({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!jd(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=tc(t)}setAll(e){let t=on.emptyPath(),i={},a=[];e.forEach((u,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,i,a),i={},a=[],t=d.popLast()}u?i[d.lastSegment()]=tc(u):a.push(d.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,i,a)}delete(e){const t=this.field(e.popLast());jd(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return $i(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let a=t.mapValue.fields[e.get(i)];jd(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,i){Ya(t,(a,l)=>e[a]=l);for(const a of i)delete e[a]}clone(){return new ii(tc(this.value))}}function aA(n){const e=[];return Ya(n.fields,(t,i)=>{const a=new on([t]);if(jd(i)){const l=aA(i.mapValue).fields;if(l.length===0)e.push(a);else for(const u of l)e.push(a.child(u))}else e.push(a)}),new gi(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,t,i,a,l,u,d){this.key=e,this.documentType=t,this.version=i,this.readTime=a,this.createTime=l,this.data=u,this.documentState=d}static newInvalidDocument(e){return new pn(e,0,Re.min(),Re.min(),Re.min(),ii.empty(),0)}static newFoundDocument(e,t,i,a){return new pn(e,1,t,Re.min(),i,a,0)}static newNoDocument(e,t){return new pn(e,2,t,Re.min(),Re.min(),ii.empty(),0)}static newUnknownDocument(e,t){return new pn(e,3,t,Re.min(),Re.min(),ii.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ii.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ii.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof pn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new pn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e,t){this.position=e,this.inclusive=t}}function qw(n,e,t){let i=0;for(let a=0;a<n.position.length;a++){const l=e[a],u=n.position[a];if(l.field.isKeyField()?i=_e.comparator(_e.fromName(u.referenceValue),t.key):i=ul(u,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function Gw(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!$i(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e,t="asc"){this.field=e,this.dir=t}}function OM(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{}class Ft extends oA{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new kM(e,t,i):t==="array-contains"?new VM(e,i):t==="in"?new LM(e,i):t==="not-in"?new UM(e,i):t==="array-contains-any"?new jM(e,i):new Ft(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new PM(e,i):new MM(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(ul(t,this.value)):t!==null&&Vs(this.value)===Vs(t)&&this.matchesComparison(ul(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return be(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ki extends oA{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new Ki(e,t)}matches(e){return lA(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function lA(n){return n.op==="and"}function uA(n){return DM(n)&&lA(n)}function DM(n){for(const e of n.filters)if(e instanceof Ki)return!1;return!0}function g_(n){if(n instanceof Ft)return n.field.canonicalString()+n.op.toString()+cl(n.value);if(uA(n))return n.filters.map(e=>g_(e)).join(",");{const e=n.filters.map(t=>g_(t)).join(",");return`${n.op}(${e})`}}function cA(n,e){return n instanceof Ft?function(i,a){return a instanceof Ft&&i.op===a.op&&i.field.isEqual(a.field)&&$i(i.value,a.value)}(n,e):n instanceof Ki?function(i,a){return a instanceof Ki&&i.op===a.op&&i.filters.length===a.filters.length?i.filters.reduce((l,u,d)=>l&&cA(u,a.filters[d]),!0):!1}(n,e):void be(19439)}function hA(n){return n instanceof Ft?function(t){return`${t.field.canonicalString()} ${t.op} ${cl(t.value)}`}(n):n instanceof Ki?function(t){return t.op.toString()+" {"+t.getFilters().map(hA).join(" ,")+"}"}(n):"Filter"}class kM extends Ft{constructor(e,t,i){super(e,t,i),this.key=_e.fromName(i.referenceValue)}matches(e){const t=_e.comparator(e.key,this.key);return this.matchesComparison(t)}}class PM extends Ft{constructor(e,t){super(e,"in",t),this.keys=dA("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class MM extends Ft{constructor(e,t){super(e,"not-in",t),this.keys=dA("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function dA(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>_e.fromName(i.referenceValue))}class VM extends Ft{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return my(t)&&yc(t.arrayValue,this.value)}}class LM extends Ft{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&yc(this.value.arrayValue,t)}}class UM extends Ft{constructor(e,t){super(e,"not-in",t)}matches(e){if(yc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!yc(this.value.arrayValue,t)}}class jM extends Ft{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!my(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>yc(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FM{constructor(e,t=null,i=[],a=[],l=null,u=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=a,this.limit=l,this.startAt=u,this.endAt=d,this.Ie=null}}function Ww(n,e=null,t=[],i=[],a=null,l=null,u=null){return new FM(n,e,t,i,a,l,u)}function gy(n){const e=Ie(n);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>g_(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(l){return l.field.canonicalString()+l.dir}(i)).join(","),Hf(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>cl(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>cl(i)).join(",")),e.Ie=t}return e.Ie}function _y(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!OM(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!cA(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Gw(n.startAt,e.startAt)&&Gw(n.endAt,e.endAt)}function __(n){return _e.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(e,t=null,i=[],a=[],l=null,u="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=a,this.limit=l,this.limitType=u,this.startAt=d,this.endAt=p,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function zM(n,e,t,i,a,l,u,d){return new Gf(n,e,t,i,a,l,u,d)}function yy(n){return new Gf(n)}function Yw(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function BM(n){return n.collectionGroup!==null}function nc(n){const e=Ie(n);if(e.Ee===null){e.Ee=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ee.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let d=new Ht(on.comparator);return u.filters.forEach(p=>{p.getFlattenedFilters().forEach(m=>{m.isInequality()&&(d=d.add(m.field))})}),d})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ee.push(new of(l,i))}),t.has(on.keyField().canonicalString())||e.Ee.push(new of(on.keyField(),i))}return e.Ee}function Gi(n){const e=Ie(n);return e.de||(e.de=HM(e,nc(n))),e.de}function HM(n,e){if(n.limitType==="F")return Ww(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(a=>{const l=a.dir==="desc"?"asc":"desc";return new of(a.field,l)});const t=n.endAt?new af(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new af(n.startAt.position,n.startAt.inclusive):null;return Ww(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function y_(n,e,t){return new Gf(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Wf(n,e){return _y(Gi(n),Gi(e))&&n.limitType===e.limitType}function fA(n){return`${gy(Gi(n))}|lt:${n.limitType}`}function Yo(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(a=>hA(a)).join(", ")}]`),Hf(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(a=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(a)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(a=>cl(a)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(a=>cl(a)).join(",")),`Target(${i})`}(Gi(n))}; limitType=${n.limitType})`}function Yf(n,e){return e.isFoundDocument()&&function(i,a){const l=a.key.path;return i.collectionGroup!==null?a.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):_e.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)}(n,e)&&function(i,a){for(const l of nc(i))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0}(n,e)&&function(i,a){for(const l of i.filters)if(!l.matches(a))return!1;return!0}(n,e)&&function(i,a){return!(i.startAt&&!function(u,d,p){const m=qw(u,d,p);return u.inclusive?m<=0:m<0}(i.startAt,nc(i),a)||i.endAt&&!function(u,d,p){const m=qw(u,d,p);return u.inclusive?m>=0:m>0}(i.endAt,nc(i),a))}(n,e)}function qM(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function pA(n){return(e,t)=>{let i=!1;for(const a of nc(n)){const l=GM(a,e,t);if(l!==0)return l;i=i||a.field.isKeyField()}return 0}}function GM(n,e,t){const i=n.field.isKeyField()?_e.comparator(e.key,t.key):function(l,u,d){const p=u.data.field(l),m=d.data.field(l);return p!==null&&m!==null?ul(p,m):be(42886)}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return be(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[a,l]of i)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),a=this.inner[i];if(a===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let a=0;a<i.length;a++)if(this.equalsFn(i[a][0],e))return i.length===1?delete this.inner[t]:i.splice(a,1),this.innerSize--,!0;return!1}forEach(e){Ya(this.inner,(t,i)=>{for(const[a,l]of i)e(a,l)})}isEmpty(){return Z1(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WM=new kt(_e.comparator);function Ur(){return WM}const mA=new kt(_e.comparator);function Qu(...n){let e=mA;for(const t of n)e=e.insert(t.key,t);return e}function gA(n){let e=mA;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function Oa(){return ic()}function _A(){return ic()}function ic(){return new $a(n=>n.toString(),(n,e)=>n.isEqual(e))}const YM=new kt(_e.comparator),$M=new Ht(_e.comparator);function Fe(...n){let e=$M;for(const t of n)e=e.add(t);return e}const KM=new Ht(Oe);function QM(){return KM}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vy(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:nf(e)?"-0":e}}function yA(n){return{integerValue:""+n}}function XM(n,e){return bM(e)?yA(e):vy(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(){this._=void 0}}function ZM(n,e,t){return n instanceof lf?function(a,l){const u={fields:{[tA]:{stringValue:eA},[iA]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&py(l)&&(l=qf(l)),l&&(u.fields[nA]=l),{mapValue:u}}(t,e):n instanceof vc?EA(n,e):n instanceof Ec?TA(n,e):function(a,l){const u=vA(a,l),d=$w(u)+$w(a.Re);return m_(u)&&m_(a.Re)?yA(d):vy(a.serializer,d)}(n,e)}function JM(n,e,t){return n instanceof vc?EA(n,e):n instanceof Ec?TA(n,e):t}function vA(n,e){return n instanceof uf?function(i){return m_(i)||function(l){return!!l&&"doubleValue"in l}(i)}(e)?e:{integerValue:0}:null}class lf extends $f{}class vc extends $f{constructor(e){super(),this.elements=e}}function EA(n,e){const t=wA(e);for(const i of n.elements)t.some(a=>$i(a,i))||t.push(i);return{arrayValue:{values:t}}}class Ec extends $f{constructor(e){super(),this.elements=e}}function TA(n,e){let t=wA(e);for(const i of n.elements)t=t.filter(a=>!$i(a,i));return{arrayValue:{values:t}}}class uf extends $f{constructor(e,t){super(),this.serializer=e,this.Re=t}}function $w(n){return It(n.integerValue||n.doubleValue)}function wA(n){return my(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function e4(n,e){return n.field.isEqual(e.field)&&function(i,a){return i instanceof vc&&a instanceof vc||i instanceof Ec&&a instanceof Ec?ll(i.elements,a.elements,$i):i instanceof uf&&a instanceof uf?$i(i.Re,a.Re):i instanceof lf&&a instanceof lf}(n.transform,e.transform)}class t4{constructor(e,t){this.version=e,this.transformResults=t}}class Wi{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Wi}static exists(e){return new Wi(void 0,e)}static updateTime(e){return new Wi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Fd(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Kf{}function bA(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new AA(n.key,Wi.none()):new Uc(n.key,n.data,Wi.none());{const t=n.data,i=ii.empty();let a=new Ht(on.comparator);for(let l of e.fields)if(!a.has(l)){let u=t.field(l);u===null&&l.length>1&&(l=l.popLast(),u=t.field(l)),u===null?i.delete(l):i.set(l,u),a=a.add(l)}return new Ka(n.key,i,new gi(a.toArray()),Wi.none())}}function n4(n,e,t){n instanceof Uc?function(a,l,u){const d=a.value.clone(),p=Qw(a.fieldTransforms,l,u.transformResults);d.setAll(p),l.convertToFoundDocument(u.version,d).setHasCommittedMutations()}(n,e,t):n instanceof Ka?function(a,l,u){if(!Fd(a.precondition,l))return void l.convertToUnknownDocument(u.version);const d=Qw(a.fieldTransforms,l,u.transformResults),p=l.data;p.setAll(SA(a)),p.setAll(d),l.convertToFoundDocument(u.version,p).setHasCommittedMutations()}(n,e,t):function(a,l,u){l.convertToNoDocument(u.version).setHasCommittedMutations()}(0,e,t)}function rc(n,e,t,i){return n instanceof Uc?function(l,u,d,p){if(!Fd(l.precondition,u))return d;const m=l.value.clone(),y=Xw(l.fieldTransforms,p,u);return m.setAll(y),u.convertToFoundDocument(u.version,m).setHasLocalMutations(),null}(n,e,t,i):n instanceof Ka?function(l,u,d,p){if(!Fd(l.precondition,u))return d;const m=Xw(l.fieldTransforms,p,u),y=u.data;return y.setAll(SA(l)),y.setAll(m),u.convertToFoundDocument(u.version,y).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(E=>E.field))}(n,e,t,i):function(l,u,d){return Fd(l.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):d}(n,e,t)}function i4(n,e){let t=null;for(const i of n.fieldTransforms){const a=e.data.field(i.field),l=vA(i.transform,a||null);l!=null&&(t===null&&(t=ii.empty()),t.set(i.field,l))}return t||null}function Kw(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,a){return i===void 0&&a===void 0||!(!i||!a)&&ll(i,a,(l,u)=>e4(l,u))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Uc extends Kf{constructor(e,t,i,a=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Ka extends Kf{constructor(e,t,i,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function SA(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function Qw(n,e,t){const i=new Map;Qe(n.length===t.length,32656,{Ve:t.length,me:n.length});for(let a=0;a<t.length;a++){const l=n[a],u=l.transform,d=e.data.field(l.field);i.set(l.field,JM(u,d,t[a]))}return i}function Xw(n,e,t){const i=new Map;for(const a of n){const l=a.transform,u=t.data.field(a.field);i.set(a.field,ZM(l,u,e))}return i}class AA extends Kf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class r4 extends Kf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s4{constructor(e,t,i,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=a}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&n4(l,e,i[a])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=rc(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=rc(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=_A();return this.mutations.forEach(a=>{const l=e.get(a.key),u=l.overlayedDocument;let d=this.applyToLocalView(u,l.mutatedFields);d=t.has(a.key)?null:d;const p=bA(u,d);p!==null&&i.set(a.key,p),u.isValidDocument()||u.convertToNoDocument(Re.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Fe())}isEqual(e){return this.batchId===e.batchId&&ll(this.mutations,e.mutations,(t,i)=>Kw(t,i))&&ll(this.baseMutations,e.baseMutations,(t,i)=>Kw(t,i))}}class Ey{constructor(e,t,i,a){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=a}static from(e,t,i){Qe(e.mutations.length===i.length,58842,{fe:e.mutations.length,ge:i.length});let a=function(){return YM}();const l=e.mutations;for(let u=0;u<l.length;u++)a=a.insert(l[u].key,i[u].version);return new Ey(e,t,i,a)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a4{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o4{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dt,qe;function l4(n){switch(n){case ie.OK:return be(64938);case ie.CANCELLED:case ie.UNKNOWN:case ie.DEADLINE_EXCEEDED:case ie.RESOURCE_EXHAUSTED:case ie.INTERNAL:case ie.UNAVAILABLE:case ie.UNAUTHENTICATED:return!1;case ie.INVALID_ARGUMENT:case ie.NOT_FOUND:case ie.ALREADY_EXISTS:case ie.PERMISSION_DENIED:case ie.FAILED_PRECONDITION:case ie.ABORTED:case ie.OUT_OF_RANGE:case ie.UNIMPLEMENTED:case ie.DATA_LOSS:return!0;default:return be(15467,{code:n})}}function RA(n){if(n===void 0)return Lr("GRPC error has no .code"),ie.UNKNOWN;switch(n){case Dt.OK:return ie.OK;case Dt.CANCELLED:return ie.CANCELLED;case Dt.UNKNOWN:return ie.UNKNOWN;case Dt.DEADLINE_EXCEEDED:return ie.DEADLINE_EXCEEDED;case Dt.RESOURCE_EXHAUSTED:return ie.RESOURCE_EXHAUSTED;case Dt.INTERNAL:return ie.INTERNAL;case Dt.UNAVAILABLE:return ie.UNAVAILABLE;case Dt.UNAUTHENTICATED:return ie.UNAUTHENTICATED;case Dt.INVALID_ARGUMENT:return ie.INVALID_ARGUMENT;case Dt.NOT_FOUND:return ie.NOT_FOUND;case Dt.ALREADY_EXISTS:return ie.ALREADY_EXISTS;case Dt.PERMISSION_DENIED:return ie.PERMISSION_DENIED;case Dt.FAILED_PRECONDITION:return ie.FAILED_PRECONDITION;case Dt.ABORTED:return ie.ABORTED;case Dt.OUT_OF_RANGE:return ie.OUT_OF_RANGE;case Dt.UNIMPLEMENTED:return ie.UNIMPLEMENTED;case Dt.DATA_LOSS:return ie.DATA_LOSS;default:return be(39323,{code:n})}}(qe=Dt||(Dt={}))[qe.OK=0]="OK",qe[qe.CANCELLED=1]="CANCELLED",qe[qe.UNKNOWN=2]="UNKNOWN",qe[qe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",qe[qe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",qe[qe.NOT_FOUND=5]="NOT_FOUND",qe[qe.ALREADY_EXISTS=6]="ALREADY_EXISTS",qe[qe.PERMISSION_DENIED=7]="PERMISSION_DENIED",qe[qe.UNAUTHENTICATED=16]="UNAUTHENTICATED",qe[qe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",qe[qe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",qe[qe.ABORTED=10]="ABORTED",qe[qe.OUT_OF_RANGE=11]="OUT_OF_RANGE",qe[qe.UNIMPLEMENTED=12]="UNIMPLEMENTED",qe[qe.INTERNAL=13]="INTERNAL",qe[qe.UNAVAILABLE=14]="UNAVAILABLE",qe[qe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u4=new Cs([4294967295,4294967295],0);function Zw(n){const e=K1().encode(n),t=new z1;return t.update(e),new Uint8Array(t.digest())}function Jw(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Cs([t,i],0),new Cs([a,l],0)]}class Ty{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Xu(`Invalid padding: ${t}`);if(i<0)throw new Xu(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Xu(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Xu(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=Cs.fromNumber(this.pe)}we(e,t,i){let a=e.add(t.multiply(Cs.fromNumber(i)));return a.compare(u4)===1&&(a=new Cs([a.getBits(0),a.getBits(1)],0)),a.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=Zw(e),[i,a]=Jw(t);for(let l=0;l<this.hashCount;l++){const u=this.we(i,a,l);if(!this.be(u))return!1}return!0}static create(e,t,i){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),u=new Ty(l,a,t);return i.forEach(d=>u.insert(d)),u}insert(e){if(this.pe===0)return;const t=Zw(e),[i,a]=Jw(t);for(let l=0;l<this.hashCount;l++){const u=this.we(i,a,l);this.Se(u)}}Se(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Xu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(e,t,i,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const a=new Map;return a.set(e,jc.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Qf(Re.min(),a,new kt(Oe),Ur(),Fe())}}class jc{constructor(e,t,i,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new jc(i,t,Fe(),Fe(),Fe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e,t,i,a){this.De=e,this.removedTargetIds=t,this.key=i,this.ve=a}}class IA{constructor(e,t){this.targetId=e,this.Ce=t}}class CA{constructor(e,t,i=ln.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=a}}class eb{constructor(){this.Fe=0,this.Me=tb(),this.xe=ln.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=Fe(),t=Fe(),i=Fe();return this.Me.forEach((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:i=i.add(a);break;default:be(38017,{changeType:l})}}),new jc(this.xe,this.Oe,e,t,i)}Qe(){this.Ne=!1,this.Me=tb()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,Qe(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class c4{constructor(e){this.ze=e,this.je=new Map,this.He=Ur(),this.Je=Rd(),this.Ye=Rd(),this.Ze=new kt(Oe)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const i=this.rt(t);switch(e.state){case 0:this.it(t)&&i.ke(e.resumeToken);break;case 1:i.We(),i.Be||i.Qe(),i.ke(e.resumeToken);break;case 2:i.We(),i.Be||this.removeTarget(t);break;case 3:this.it(t)&&(i.Ge(),i.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),i.ke(e.resumeToken));break;default:be(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((i,a)=>{this.it(a)&&t(a)})}ot(e){const t=e.targetId,i=e.Ce.count,a=this._t(t);if(a){const l=a.target;if(__(l))if(i===0){const u=new _e(l.path);this.tt(t,u,pn.newNoDocument(u,Re.min()))}else Qe(i===1,20013,{expectedCount:i});else{const u=this.ut(t);if(u!==i){const d=this.ct(e),p=d?this.lt(d,e,u):1;if(p!==0){this.st(t);const m=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,m)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:a=0},hashCount:l=0}=t;let u,d;try{u=Ms(i).toUint8Array()}catch(p){if(p instanceof J1)return ol("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new Ty(u,a,l)}catch(p){return ol(p instanceof Xu?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.pe===0?null:d}lt(e,t,i){return t.Ce.count===i-this.Tt(e,t.targetId)?0:2}Tt(e,t){const i=this.ze.getRemoteKeysForTarget(t);let a=0;return i.forEach(l=>{const u=this.ze.Pt(),d=`projects/${u.projectId}/databases/${u.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.tt(t,l,null),a++)}),a}It(e){const t=new Map;this.je.forEach((l,u)=>{const d=this._t(u);if(d){if(l.current&&__(d.target)){const p=new _e(d.target.path);this.Et(p).has(u)||this.dt(u,p)||this.tt(u,p,pn.newNoDocument(p,e))}l.Le&&(t.set(u,l.qe()),l.Qe())}});let i=Fe();this.Ye.forEach((l,u)=>{let d=!0;u.forEachWhile(p=>{const m=this._t(p);return!m||m.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(i=i.add(l))}),this.He.forEach((l,u)=>u.setReadTime(e));const a=new Qf(e,t,this.Ze,this.He,i);return this.He=Ur(),this.Je=Rd(),this.Ye=Rd(),this.Ze=new kt(Oe),a}et(e,t){if(!this.it(e))return;const i=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,i),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,i){if(!this.it(e))return;const a=this.rt(e);this.dt(e,t)?a.$e(t,1):a.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),i&&(this.He=this.He.insert(t,i))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new eb,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new Ht(Oe),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new Ht(Oe),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||he("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new eb),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function Rd(){return new kt(_e.comparator)}function tb(){return new kt(_e.comparator)}const h4={asc:"ASCENDING",desc:"DESCENDING"},d4={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},f4={and:"AND",or:"OR"};class p4{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function v_(n,e){return n.useProto3Json||Hf(e)?e:{value:e}}function cf(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function NA(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function m4(n,e){return cf(n,e.toTimestamp())}function Yi(n){return Qe(!!n,49232),Re.fromTimestamp(function(t){const i=Ps(t);return new Bt(i.seconds,i.nanos)}(n))}function wy(n,e){return E_(n,e).canonicalString()}function E_(n,e){const t=function(a){return new ft(["projects",a.projectId,"databases",a.database])}(n).child("documents");return e===void 0?t:t.child(e)}function xA(n){const e=ft.fromString(n);return Qe(MA(e),10190,{key:e.toString()}),e}function T_(n,e){return wy(n.databaseId,e.path)}function Dg(n,e){const t=xA(e);if(t.get(1)!==n.databaseId.projectId)throw new pe(ie.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new pe(ie.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new _e(DA(t))}function OA(n,e){return wy(n.databaseId,e)}function g4(n){const e=xA(n);return e.length===4?ft.emptyPath():DA(e)}function w_(n){return new ft(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function DA(n){return Qe(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function nb(n,e,t){return{name:T_(n,e),fields:t.value.mapValue.fields}}function _4(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:be(39313,{state:m})}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=function(m,y){return m.useProto3Json?(Qe(y===void 0||typeof y=="string",58123),ln.fromBase64String(y||"")):(Qe(y===void 0||y instanceof Buffer||y instanceof Uint8Array,16193),ln.fromUint8Array(y||new Uint8Array))}(n,e.targetChange.resumeToken),u=e.targetChange.cause,d=u&&function(m){const y=m.code===void 0?ie.UNKNOWN:RA(m.code);return new pe(y,m.message||"")}(u);t=new CA(i,a,l,d||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const a=Dg(n,i.document.name),l=Yi(i.document.updateTime),u=i.document.createTime?Yi(i.document.createTime):Re.min(),d=new ii({mapValue:{fields:i.document.fields}}),p=pn.newFoundDocument(a,l,u,d),m=i.targetIds||[],y=i.removedTargetIds||[];t=new zd(m,y,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const a=Dg(n,i.document),l=i.readTime?Yi(i.readTime):Re.min(),u=pn.newNoDocument(a,l),d=i.removedTargetIds||[];t=new zd([],d,u.key,u)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const a=Dg(n,i.document),l=i.removedTargetIds||[];t=new zd([],l,a,null)}else{if(!("filter"in e))return be(11601,{Vt:e});{e.filter;const i=e.filter;i.targetId;const{count:a=0,unchangedNames:l}=i,u=new o4(a,l),d=i.targetId;t=new IA(d,u)}}return t}function y4(n,e){let t;if(e instanceof Uc)t={update:nb(n,e.key,e.value)};else if(e instanceof AA)t={delete:T_(n,e.key)};else if(e instanceof Ka)t={update:nb(n,e.key,e.data),updateMask:I4(e.fieldMask)};else{if(!(e instanceof r4))return be(16599,{ft:e.type});t={verify:T_(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(l,u){const d=u.transform;if(d instanceof lf)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof vc)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Ec)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof uf)return{fieldPath:u.field.canonicalString(),increment:d.Re};throw be(20930,{transform:u.transform})}(0,i))),e.precondition.isNone||(t.currentDocument=function(a,l){return l.updateTime!==void 0?{updateTime:m4(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:be(27497)}(n,e.precondition)),t}function v4(n,e){return n&&n.length>0?(Qe(e!==void 0,14353),n.map(t=>function(a,l){let u=a.updateTime?Yi(a.updateTime):Yi(l);return u.isEqual(Re.min())&&(u=Yi(l)),new t4(u,a.transformResults||[])}(t,e))):[]}function E4(n,e){return{documents:[OA(n,e.path)]}}function T4(n,e){const t={structuredQuery:{}},i=e.path;let a;e.collectionGroup!==null?(a=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=OA(n,a);const l=function(m){if(m.length!==0)return PA(Ki.create(m,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const u=function(m){if(m.length!==0)return m.map(y=>function(w){return{field:$o(w.field),direction:S4(w.dir)}}(y))}(e.orderBy);u&&(t.structuredQuery.orderBy=u);const d=v_(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(m){return{before:m.inclusive,values:m.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(m){return{before:!m.inclusive,values:m.position}}(e.endAt)),{gt:t,parent:a}}function w4(n){let e=g4(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let a=null;if(i>0){Qe(i===1,65062);const y=t.from[0];y.allDescendants?a=y.collectionId:e=e.child(y.collectionId)}let l=[];t.where&&(l=function(E){const w=kA(E);return w instanceof Ki&&uA(w)?w.getFilters():[w]}(t.where));let u=[];t.orderBy&&(u=function(E){return E.map(w=>function(C){return new of(Ko(C.field),function(j){switch(j){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(w))}(t.orderBy));let d=null;t.limit&&(d=function(E){let w;return w=typeof E=="object"?E.value:E,Hf(w)?null:w}(t.limit));let p=null;t.startAt&&(p=function(E){const w=!!E.before,I=E.values||[];return new af(I,w)}(t.startAt));let m=null;return t.endAt&&(m=function(E){const w=!E.before,I=E.values||[];return new af(I,w)}(t.endAt)),zM(e,a,u,l,d,"F",p,m)}function b4(n,e){const t=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return be(28987,{purpose:a})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function kA(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Ko(t.unaryFilter.field);return Ft.create(i,"==",{doubleValue:NaN});case"IS_NULL":const a=Ko(t.unaryFilter.field);return Ft.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Ko(t.unaryFilter.field);return Ft.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Ko(t.unaryFilter.field);return Ft.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return be(61313);default:return be(60726)}}(n):n.fieldFilter!==void 0?function(t){return Ft.create(Ko(t.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return be(58110);default:return be(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Ki.create(t.compositeFilter.filters.map(i=>kA(i)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return be(1026)}}(t.compositeFilter.op))}(n):be(30097,{filter:n})}function S4(n){return h4[n]}function A4(n){return d4[n]}function R4(n){return f4[n]}function $o(n){return{fieldPath:n.canonicalString()}}function Ko(n){return on.fromServerFormat(n.fieldPath)}function PA(n){return n instanceof Ft?function(t){if(t.op==="=="){if(Hw(t.value))return{unaryFilter:{field:$o(t.field),op:"IS_NAN"}};if(Bw(t.value))return{unaryFilter:{field:$o(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Hw(t.value))return{unaryFilter:{field:$o(t.field),op:"IS_NOT_NAN"}};if(Bw(t.value))return{unaryFilter:{field:$o(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$o(t.field),op:A4(t.op),value:t.value}}}(n):n instanceof Ki?function(t){const i=t.getFilters().map(a=>PA(a));return i.length===1?i[0]:{compositeFilter:{op:R4(t.op),filters:i}}}(n):be(54877,{filter:n})}function I4(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function MA(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,t,i,a,l=Re.min(),u=Re.min(),d=ln.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new As(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new As(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new As(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new As(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C4{constructor(e){this.wt=e}}function N4(n){const e=w4({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?y_(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x4{constructor(){this.Cn=new O4}addToCollectionParentIndex(e,t){return this.Cn.add(t),ee.resolve()}getCollectionParents(e,t){return ee.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return ee.resolve()}deleteFieldIndex(e,t){return ee.resolve()}deleteAllFieldIndexes(e){return ee.resolve()}createTargetIndexes(e,t){return ee.resolve()}getDocumentsMatchingTarget(e,t){return ee.resolve(null)}getIndexType(e,t){return ee.resolve(0)}getFieldIndexes(e,t){return ee.resolve([])}getNextCollectionGroupToUpdate(e){return ee.resolve(null)}getMinOffset(e,t){return ee.resolve(ks.min())}getMinOffsetFromCollectionGroup(e,t){return ee.resolve(ks.min())}updateCollectionGroup(e,t,i){return ee.resolve()}updateIndexEntries(e,t){return ee.resolve()}}class O4{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),a=this.index[t]||new Ht(ft.comparator),l=!a.has(i);return this.index[t]=a.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),a=this.index[t];return a&&a.has(i)}getEntries(e){return(this.index[e]||new Ht(ft.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ib={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},VA=41943040;class In{static withCacheSize(e){return new In(e,In.DEFAULT_COLLECTION_PERCENTILE,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */In.DEFAULT_COLLECTION_PERCENTILE=10,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,In.DEFAULT=new In(VA,In.DEFAULT_COLLECTION_PERCENTILE,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),In.DISABLED=new In(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new hl(0)}static lr(){return new hl(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rb="LruGarbageCollector",D4=1048576;function sb([n,e],[t,i]){const a=Oe(n,t);return a===0?Oe(e,i):a}class k4{constructor(e){this.Er=e,this.buffer=new Ht(sb),this.dr=0}Ar(){return++this.dr}Rr(e){const t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();sb(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class P4{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){he(rb,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Rl(t)?he(rb,"Ignoring IndexedDB error during garbage collection: ",t):await Al(t)}await this.mr(3e5)})}}class M4{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(i=>Math.floor(t/100*i))}nthSequenceNumber(e,t){if(t===0)return ee.resolve(Bf.le);const i=new k4(t);return this.gr.forEachTarget(e,a=>i.Rr(a.sequenceNumber)).next(()=>this.gr.yr(e,a=>i.Rr(a))).next(()=>i.maxValue)}removeTargets(e,t,i){return this.gr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(he("LruGarbageCollector","Garbage collection skipped; disabled"),ee.resolve(ib)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(he("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ib):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let i,a,l,u,d,p,m;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(E=>(E>this.params.maximumSequenceNumbersToCollect?(he("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),a=this.params.maximumSequenceNumbersToCollect):a=E,u=Date.now(),this.nthSequenceNumber(e,a))).next(E=>(i=E,d=Date.now(),this.removeTargets(e,i,t))).next(E=>(l=E,p=Date.now(),this.removeOrphanedDocuments(e,i))).next(E=>(m=Date.now(),Wo()<=Le.DEBUG&&he("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-y}ms
	Determined least recently used ${a} in `+(d-u)+`ms
	Removed ${l} targets in `+(p-d)+`ms
	Removed ${E} documents in `+(m-p)+`ms
Total Duration: ${m-y}ms`),ee.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:E})))}}function V4(n,e){return new M4(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L4{constructor(){this.changes=new $a(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,pn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?ee.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U4{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j4{constructor(e,t,i,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=a}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(a=>(i=a,this.remoteDocumentCache.getEntry(e,t))).next(a=>(i!==null&&rc(i.mutation,a,gi.empty(),Bt.now()),a))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,Fe()).next(()=>i))}getLocalViewOfDocuments(e,t,i=Fe()){const a=Oa();return this.populateOverlays(e,a,t).next(()=>this.computeViews(e,t,a,i).next(l=>{let u=Qu();return l.forEach((d,p)=>{u=u.insert(d,p.overlayedDocument)}),u}))}getOverlayedDocuments(e,t){const i=Oa();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,Fe()))}populateOverlays(e,t,i){const a=[];return i.forEach(l=>{t.has(l)||a.push(l)}),this.documentOverlayCache.getOverlays(e,a).next(l=>{l.forEach((u,d)=>{t.set(u,d)})})}computeViews(e,t,i,a){let l=Ur();const u=ic(),d=function(){return ic()}();return t.forEach((p,m)=>{const y=i.get(m.key);a.has(m.key)&&(y===void 0||y.mutation instanceof Ka)?l=l.insert(m.key,m):y!==void 0?(u.set(m.key,y.mutation.getFieldMask()),rc(y.mutation,m,y.mutation.getFieldMask(),Bt.now())):u.set(m.key,gi.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((m,y)=>u.set(m,y)),t.forEach((m,y)=>{var E;return d.set(m,new U4(y,(E=u.get(m))!==null&&E!==void 0?E:null))}),d))}recalculateAndSaveOverlays(e,t){const i=ic();let a=new kt((u,d)=>u-d),l=Fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(u=>{for(const d of u)d.keys().forEach(p=>{const m=t.get(p);if(m===null)return;let y=i.get(p)||gi.empty();y=d.applyToLocalView(m,y),i.set(p,y);const E=(a.get(d.batchId)||Fe()).add(p);a=a.insert(d.batchId,E)})}).next(()=>{const u=[],d=a.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),m=p.key,y=p.value,E=_A();y.forEach(w=>{if(!l.has(w)){const I=bA(t.get(w),i.get(w));I!==null&&E.set(w,I),l=l.add(w)}}),u.push(this.documentOverlayCache.saveOverlays(e,m,E))}return ee.waitFor(u)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,a){return function(u){return _e.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):BM(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,a):this.getDocumentsMatchingCollectionQuery(e,t,i,a)}getNextDocuments(e,t,i,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,a).next(l=>{const u=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,a-l.size):ee.resolve(Oa());let d=mc,p=l;return u.next(m=>ee.forEach(m,(y,E)=>(d<E.largestBatchId&&(d=E.largestBatchId),l.get(y)?ee.resolve():this.remoteDocumentCache.getEntry(e,y).next(w=>{p=p.insert(y,w)}))).next(()=>this.populateOverlays(e,m,l)).next(()=>this.computeViews(e,p,m,Fe())).next(y=>({batchId:d,changes:gA(y)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new _e(t)).next(i=>{let a=Qu();return i.isFoundDocument()&&(a=a.insert(i.key,i)),a})}getDocumentsMatchingCollectionGroupQuery(e,t,i,a){const l=t.collectionGroup;let u=Qu();return this.indexManager.getCollectionParents(e,l).next(d=>ee.forEach(d,p=>{const m=function(E,w){return new Gf(w,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)}(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,m,i,a).next(y=>{y.forEach((E,w)=>{u=u.insert(E,w)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(e,t,i,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(u=>(l=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,a))).next(u=>{l.forEach((p,m)=>{const y=m.getKey();u.get(y)===null&&(u=u.insert(y,pn.newInvalidDocument(y)))});let d=Qu();return u.forEach((p,m)=>{const y=l.get(p);y!==void 0&&rc(y.mutation,m,gi.empty(),Bt.now()),Yf(t,m)&&(d=d.insert(p,m))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F4{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return ee.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,function(a){return{id:a.id,version:a.version,createTime:Yi(a.createTime)}}(t)),ee.resolve()}getNamedQuery(e,t){return ee.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,function(a){return{name:a.name,query:N4(a.bundledQuery),readTime:Yi(a.readTime)}}(t)),ee.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z4{constructor(){this.overlays=new kt(_e.comparator),this.Qr=new Map}getOverlay(e,t){return ee.resolve(this.overlays.get(t))}getOverlays(e,t){const i=Oa();return ee.forEach(t,a=>this.getOverlay(e,a).next(l=>{l!==null&&i.set(a,l)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((a,l)=>{this.St(e,t,l)}),ee.resolve()}removeOverlaysForBatchId(e,t,i){const a=this.Qr.get(i);return a!==void 0&&(a.forEach(l=>this.overlays=this.overlays.remove(l)),this.Qr.delete(i)),ee.resolve()}getOverlaysForCollection(e,t,i){const a=Oa(),l=t.length+1,u=new _e(t.child("")),d=this.overlays.getIteratorFrom(u);for(;d.hasNext();){const p=d.getNext().value,m=p.getKey();if(!t.isPrefixOf(m.path))break;m.path.length===l&&p.largestBatchId>i&&a.set(p.getKey(),p)}return ee.resolve(a)}getOverlaysForCollectionGroup(e,t,i,a){let l=new kt((m,y)=>m-y);const u=this.overlays.getIterator();for(;u.hasNext();){const m=u.getNext().value;if(m.getKey().getCollectionGroup()===t&&m.largestBatchId>i){let y=l.get(m.largestBatchId);y===null&&(y=Oa(),l=l.insert(m.largestBatchId,y)),y.set(m.getKey(),m)}}const d=Oa(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((m,y)=>d.set(m,y)),!(d.size()>=a)););return ee.resolve(d)}St(e,t,i){const a=this.overlays.get(i.key);if(a!==null){const u=this.Qr.get(a.largestBatchId).delete(i.key);this.Qr.set(a.largestBatchId,u)}this.overlays=this.overlays.insert(i.key,new a4(t,i));let l=this.Qr.get(t);l===void 0&&(l=Fe(),this.Qr.set(t,l)),this.Qr.set(t,l.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B4{constructor(){this.sessionToken=ln.EMPTY_BYTE_STRING}getSessionToken(e){return ee.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,ee.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(){this.$r=new Ht(Xt.Ur),this.Kr=new Ht(Xt.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){const i=new Xt(e,t);this.$r=this.$r.add(i),this.Kr=this.Kr.add(i)}Gr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.zr(new Xt(e,t))}jr(e,t){e.forEach(i=>this.removeReference(i,t))}Hr(e){const t=new _e(new ft([])),i=new Xt(t,e),a=new Xt(t,e+1),l=[];return this.Kr.forEachInRange([i,a],u=>{this.zr(u),l.push(u.key)}),l}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const t=new _e(new ft([])),i=new Xt(t,e),a=new Xt(t,e+1);let l=Fe();return this.Kr.forEachInRange([i,a],u=>{l=l.add(u.key)}),l}containsKey(e){const t=new Xt(e,0),i=this.$r.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class Xt{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return _e.comparator(e.key,t.key)||Oe(e.Zr,t.Zr)}static Wr(e,t){return Oe(e.Zr,t.Zr)||_e.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H4{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new Ht(Xt.Ur)}checkEmpty(e){return ee.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,a){const l=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new s4(l,t,i,a);this.mutationQueue.push(u);for(const d of a)this.Xr=this.Xr.add(new Xt(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return ee.resolve(u)}lookupMutationBatch(e,t){return ee.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,a=this.ti(i),l=a<0?0:a;return ee.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return ee.resolve(this.mutationQueue.length===0?fy:this.nr-1)}getAllMutationBatches(e){return ee.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Xt(t,0),a=new Xt(t,Number.POSITIVE_INFINITY),l=[];return this.Xr.forEachInRange([i,a],u=>{const d=this.ei(u.Zr);l.push(d)}),ee.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Ht(Oe);return t.forEach(a=>{const l=new Xt(a,0),u=new Xt(a,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([l,u],d=>{i=i.add(d.Zr)})}),ee.resolve(this.ni(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,a=i.length+1;let l=i;_e.isDocumentKey(l)||(l=l.child(""));const u=new Xt(new _e(l),0);let d=new Ht(Oe);return this.Xr.forEachWhile(p=>{const m=p.key.path;return!!i.isPrefixOf(m)&&(m.length===a&&(d=d.add(p.Zr)),!0)},u),ee.resolve(this.ni(d))}ni(e){const t=[];return e.forEach(i=>{const a=this.ei(i);a!==null&&t.push(a)}),t}removeMutationBatch(e,t){Qe(this.ri(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Xr;return ee.forEach(t.mutations,a=>{const l=new Xt(a.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.Xr=i})}sr(e){}containsKey(e,t){const i=new Xt(t,0),a=this.Xr.firstAfterOrEqual(i);return ee.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,ee.resolve()}ri(e,t){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q4{constructor(e){this.ii=e,this.docs=function(){return new kt(_e.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,a=this.docs.get(i),l=a?a.size:0,u=this.ii(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:u}),this.size+=u-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return ee.resolve(i?i.document.mutableCopy():pn.newInvalidDocument(t))}getEntries(e,t){let i=Ur();return t.forEach(a=>{const l=this.docs.get(a);i=i.insert(a,l?l.document.mutableCopy():pn.newInvalidDocument(a))}),ee.resolve(i)}getDocumentsMatchingQuery(e,t,i,a){let l=Ur();const u=t.path,d=new _e(u.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:m,value:{document:y}}=p.getNext();if(!u.isPrefixOf(m.path))break;m.path.length>u.length+1||vM(yM(y),i)<=0||(a.has(y.key)||Yf(t,y))&&(l=l.insert(y.key,y.mutableCopy()))}return ee.resolve(l)}getAllFromCollectionGroup(e,t,i,a){be(9500)}si(e,t){return ee.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new G4(this)}getSize(e){return ee.resolve(this.size)}}class G4 extends L4{constructor(e){super(),this.Br=e}applyChanges(e){const t=[];return this.changes.forEach((i,a)=>{a.isValidDocument()?t.push(this.Br.addEntry(e,a)):this.Br.removeEntry(i)}),ee.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W4{constructor(e){this.persistence=e,this.oi=new $a(t=>gy(t),_y),this.lastRemoteSnapshotVersion=Re.min(),this.highestTargetId=0,this._i=0,this.ai=new by,this.targetCount=0,this.ui=hl.cr()}forEachTarget(e,t){return this.oi.forEach((i,a)=>t(a)),ee.resolve()}getLastRemoteSnapshotVersion(e){return ee.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ee.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),ee.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this._i&&(this._i=t),ee.resolve()}Tr(e){this.oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ui=new hl(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,ee.resolve()}updateTargetData(e,t){return this.Tr(t),ee.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,ee.resolve()}removeTargets(e,t,i){let a=0;const l=[];return this.oi.forEach((u,d)=>{d.sequenceNumber<=t&&i.get(d.targetId)===null&&(this.oi.delete(u),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),a++)}),ee.waitFor(l).next(()=>a)}getTargetCount(e){return ee.resolve(this.targetCount)}getTargetData(e,t){const i=this.oi.get(t)||null;return ee.resolve(i)}addMatchingKeys(e,t,i){return this.ai.Gr(t,i),ee.resolve()}removeMatchingKeys(e,t,i){this.ai.jr(t,i);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach(u=>{l.push(a.markPotentiallyOrphaned(e,u))}),ee.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),ee.resolve()}getMatchingKeysForTargetId(e,t){const i=this.ai.Yr(t);return ee.resolve(i)}containsKey(e,t){return ee.resolve(this.ai.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(e,t){this.ci={},this.overlays={},this.li=new Bf(0),this.hi=!1,this.hi=!0,this.Pi=new B4,this.referenceDelegate=e(this),this.Ti=new W4(this),this.indexManager=new x4,this.remoteDocumentCache=function(a){return new q4(a)}(i=>this.referenceDelegate.Ii(i)),this.serializer=new C4(t),this.Ei=new F4(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new z4,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.ci[e.toKey()];return i||(i=new H4(t,this.referenceDelegate),this.ci[e.toKey()]=i),i}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,i){he("MemoryPersistence","Starting transaction:",e);const a=new Y4(this.li.next());return this.referenceDelegate.di(),i(a).next(l=>this.referenceDelegate.Ai(a).next(()=>l)).toPromise().then(l=>(a.raiseOnCommittedEvent(),l))}Ri(e,t){return ee.or(Object.values(this.ci).map(i=>()=>i.containsKey(e,t)))}}class Y4 extends TM{constructor(e){super(),this.currentSequenceNumber=e}}class Sy{constructor(e){this.persistence=e,this.Vi=new by,this.mi=null}static fi(e){return new Sy(e)}get gi(){if(this.mi)return this.mi;throw be(60996)}addReference(e,t,i){return this.Vi.addReference(i,t),this.gi.delete(i.toString()),ee.resolve()}removeReference(e,t,i){return this.Vi.removeReference(i,t),this.gi.add(i.toString()),ee.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),ee.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(a=>this.gi.add(a.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(a=>{a.forEach(l=>this.gi.add(l.toString()))}).next(()=>i.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ee.forEach(this.gi,i=>{const a=_e.fromPath(i);return this.pi(e,a).next(l=>{l||t.removeEntry(a,Re.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(i=>{i?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return ee.or([()=>ee.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class hf{constructor(e,t){this.persistence=e,this.yi=new $a(i=>SM(i.path),(i,a)=>i.isEqual(a)),this.garbageCollector=V4(this,t)}static fi(e,t){return new hf(e,t)}di(){}Ai(e){return ee.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){const t=this.br(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>t.next(a=>i+a))}br(e){let t=0;return this.yr(e,i=>{t++}).next(()=>t)}yr(e,t){return ee.forEach(this.yi,(i,a)=>this.Dr(e,i,a).next(l=>l?ee.resolve():t(a)))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.si(e,u=>this.Dr(e,u,t).next(d=>{d||(i++,l.removeEntry(u,Re.min()))})).next(()=>l.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),ee.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.yi.set(i,e.currentSequenceNumber),ee.resolve()}removeReference(e,t,i){return this.yi.set(i,e.currentSequenceNumber),ee.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),ee.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ud(e.data.value)),t}Dr(e,t,i){return ee.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.yi.get(t);return ee.resolve(a!==void 0&&a>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(e,t,i,a){this.targetId=e,this.fromCache=t,this.ds=i,this.As=a}static Rs(e,t){let i=Fe(),a=Fe();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new Ay(e,t.fromCache,i,a)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $4{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K4{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return gO()?8:wM(_n())>0?6:4}()}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,i,a){const l={result:null};return this.ws(e,t).next(u=>{l.result=u}).next(()=>{if(!l.result)return this.bs(e,t,a,i).next(u=>{l.result=u})}).next(()=>{if(l.result)return;const u=new $4;return this.Ss(e,t,u).next(d=>{if(l.result=d,this.fs)return this.Ds(e,t,u,d.size)})}).next(()=>l.result)}Ds(e,t,i,a){return i.documentReadCount<this.gs?(Wo()<=Le.DEBUG&&he("QueryEngine","SDK will not create cache indexes for query:",Yo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),ee.resolve()):(Wo()<=Le.DEBUG&&he("QueryEngine","Query:",Yo(t),"scans",i.documentReadCount,"local documents and returns",a,"documents as results."),i.documentReadCount>this.ps*a?(Wo()<=Le.DEBUG&&he("QueryEngine","The SDK decides to create cache indexes for query:",Yo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Gi(t))):ee.resolve())}ws(e,t){if(Yw(t))return ee.resolve(null);let i=Gi(t);return this.indexManager.getIndexType(e,i).next(a=>a===0?null:(t.limit!==null&&a===1&&(t=y_(t,null,"F"),i=Gi(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(l=>{const u=Fe(...l);return this.ys.getDocuments(e,u).next(d=>this.indexManager.getMinOffset(e,i).next(p=>{const m=this.vs(t,d);return this.Cs(t,m,u,p.readTime)?this.ws(e,y_(t,null,"F")):this.Fs(e,m,t,p)}))})))}bs(e,t,i,a){return Yw(t)||a.isEqual(Re.min())?ee.resolve(null):this.ys.getDocuments(e,i).next(l=>{const u=this.vs(t,l);return this.Cs(t,u,i,a)?ee.resolve(null):(Wo()<=Le.DEBUG&&he("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),Yo(t)),this.Fs(e,u,t,_M(a,mc)).next(d=>d))})}vs(e,t){let i=new Ht(pA(e));return t.forEach((a,l)=>{Yf(e,l)&&(i=i.add(l))}),i}Cs(e,t,i,a){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}Ss(e,t,i){return Wo()<=Le.DEBUG&&he("QueryEngine","Using full collection scan to execute query:",Yo(t)),this.ys.getDocumentsMatchingQuery(e,t,ks.min(),i)}Fs(e,t,i,a){return this.ys.getDocumentsMatchingQuery(e,i,a).next(l=>(t.forEach(u=>{l=l.insert(u.key,u)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry="LocalStore",Q4=3e8;class X4{constructor(e,t,i,a){this.persistence=e,this.Ms=t,this.serializer=a,this.xs=new kt(Oe),this.Os=new $a(l=>gy(l),_y),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(i)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new j4(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}function Z4(n,e,t,i){return new X4(n,e,t,i)}async function UA(n,e){const t=Ie(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let a;return t.mutationQueue.getAllMutationBatches(i).next(l=>(a=l,t.Ls(e),t.mutationQueue.getAllMutationBatches(i))).next(l=>{const u=[],d=[];let p=Fe();for(const m of a){u.push(m.batchId);for(const y of m.mutations)p=p.add(y.key)}for(const m of l){d.push(m.batchId);for(const y of m.mutations)p=p.add(y.key)}return t.localDocuments.getDocuments(i,p).next(m=>({ks:m,removedBatchIds:u,addedBatchIds:d}))})})}function J4(n,e){const t=Ie(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const a=e.batch.keys(),l=t.Bs.newChangeBuffer({trackRemovals:!0});return function(d,p,m,y){const E=m.batch,w=E.keys();let I=ee.resolve();return w.forEach(C=>{I=I.next(()=>y.getEntry(p,C)).next(B=>{const j=m.docVersions.get(C);Qe(j!==null,48541),B.version.compareTo(j)<0&&(E.applyToRemoteDocument(B,m),B.isValidDocument()&&(B.setReadTime(m.commitVersion),y.addEntry(B)))})}),I.next(()=>d.mutationQueue.removeMutationBatch(p,E))}(t,i,e,l).next(()=>l.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,a,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(d){let p=Fe();for(let m=0;m<d.mutationResults.length;++m)d.mutationResults[m].transformResults.length>0&&(p=p.add(d.batch.mutations[m].key));return p}(e))).next(()=>t.localDocuments.getDocuments(i,a))})}function jA(n){const e=Ie(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}function eV(n,e){const t=Ie(n),i=e.snapshotVersion;let a=t.xs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const u=t.Bs.newChangeBuffer({trackRemovals:!0});a=t.xs;const d=[];e.targetChanges.forEach((y,E)=>{const w=a.get(E);if(!w)return;d.push(t.Ti.removeMatchingKeys(l,y.removedDocuments,E).next(()=>t.Ti.addMatchingKeys(l,y.addedDocuments,E)));let I=w.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(E)!==null?I=I.withResumeToken(ln.EMPTY_BYTE_STRING,Re.min()).withLastLimboFreeSnapshotVersion(Re.min()):y.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(y.resumeToken,i)),a=a.insert(E,I),function(B,j,$){return B.resumeToken.approximateByteSize()===0||j.snapshotVersion.toMicroseconds()-B.snapshotVersion.toMicroseconds()>=Q4?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(w,I,y)&&d.push(t.Ti.updateTargetData(l,I))});let p=Ur(),m=Fe();if(e.documentUpdates.forEach(y=>{e.resolvedLimboDocuments.has(y)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,y))}),d.push(tV(l,u,e.documentUpdates).next(y=>{p=y.qs,m=y.Qs})),!i.isEqual(Re.min())){const y=t.Ti.getLastRemoteSnapshotVersion(l).next(E=>t.Ti.setTargetsMetadata(l,l.currentSequenceNumber,i));d.push(y)}return ee.waitFor(d).next(()=>u.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,p,m)).next(()=>p)}).then(l=>(t.xs=a,l))}function tV(n,e,t){let i=Fe(),a=Fe();return t.forEach(l=>i=i.add(l)),e.getEntries(n,i).next(l=>{let u=Ur();return t.forEach((d,p)=>{const m=l.get(d);p.isFoundDocument()!==m.isFoundDocument()&&(a=a.add(d)),p.isNoDocument()&&p.version.isEqual(Re.min())?(e.removeEntry(d,p.readTime),u=u.insert(d,p)):!m.isValidDocument()||p.version.compareTo(m.version)>0||p.version.compareTo(m.version)===0&&m.hasPendingWrites?(e.addEntry(p),u=u.insert(d,p)):he(Ry,"Ignoring outdated watch update for ",d,". Current version:",m.version," Watch version:",p.version)}),{qs:u,Qs:a}})}function nV(n,e){const t=Ie(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=fy),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function iV(n,e){const t=Ie(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let a;return t.Ti.getTargetData(i,e).next(l=>l?(a=l,ee.resolve(a)):t.Ti.allocateTargetId(i).next(u=>(a=new As(e,u,"TargetPurposeListen",i.currentSequenceNumber),t.Ti.addTargetData(i,a).next(()=>a))))}).then(i=>{const a=t.xs.get(i.targetId);return(a===null||i.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.xs=t.xs.insert(i.targetId,i),t.Os.set(e,i.targetId)),i})}async function b_(n,e,t){const i=Ie(n),a=i.xs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,u=>i.persistence.referenceDelegate.removeTarget(u,a))}catch(u){if(!Rl(u))throw u;he(Ry,`Failed to update sequence numbers for target ${e}: ${u}`)}i.xs=i.xs.remove(e),i.Os.delete(a.target)}function ab(n,e,t){const i=Ie(n);let a=Re.min(),l=Fe();return i.persistence.runTransaction("Execute query","readwrite",u=>function(p,m,y){const E=Ie(p),w=E.Os.get(y);return w!==void 0?ee.resolve(E.xs.get(w)):E.Ti.getTargetData(m,y)}(i,u,Gi(e)).next(d=>{if(d)return a=d.lastLimboFreeSnapshotVersion,i.Ti.getMatchingKeysForTargetId(u,d.targetId).next(p=>{l=p})}).next(()=>i.Ms.getDocumentsMatchingQuery(u,e,t?a:Re.min(),t?l:Fe())).next(d=>(rV(i,qM(e),d),{documents:d,$s:l})))}function rV(n,e,t){let i=n.Ns.get(e)||Re.min();t.forEach((a,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)}),n.Ns.set(e,i)}class ob{constructor(){this.activeTargetIds=QM()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class sV{constructor(){this.xo=new ob,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,i){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new ob,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aV{No(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lb="ConnectivityMonitor";class ub{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){he(lb,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){he(lb,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Id=null;function S_(){return Id===null?Id=function(){return 268435456+Math.round(2147483648*Math.random())}():Id++,"0x"+Id.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg="RestConnection",oV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class lV{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${i}/databases/${a}`,this.Go=this.databaseId.database===rf?`project_id=${i}`:`project_id=${i}&database_id=${a}`}zo(e,t,i,a,l){const u=S_(),d=this.jo(e,t.toUriEncodedString());he(kg,`Sending RPC '${e}' ${u}:`,d,i);const p={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(p,a,l);const{host:m}=new URL(d),y=Fr(m);return this.Jo(e,d,p,i,y).then(E=>(he(kg,`Received RPC '${e}' ${u}: `,E),E),E=>{throw ol(kg,`RPC '${e}' ${u} failed with error: `,E,"url: ",d,"request:",i),E})}Yo(e,t,i,a,l,u){return this.zo(e,t,i,a,l)}Ho(e,t,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Sl}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((a,l)=>e[l]=a),i&&i.headers.forEach((a,l)=>e[l]=a)}jo(e,t){const i=oV[e];return`${this.Ko}/v1/${t}:${i}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uV{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn="WebChannelConnection";class cV extends lV{constructor(e){super(e),this.l_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,i,a,l){const u=S_();return new Promise((d,p)=>{const m=new B1;m.setWithCredentials(!0),m.listenOnce(H1.COMPLETE,()=>{try{switch(m.getLastErrorCode()){case Ld.NO_ERROR:const E=m.getResponseJson();he(dn,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(E)),d(E);break;case Ld.TIMEOUT:he(dn,`RPC '${e}' ${u} timed out`),p(new pe(ie.DEADLINE_EXCEEDED,"Request time out"));break;case Ld.HTTP_ERROR:const w=m.getStatus();if(he(dn,`RPC '${e}' ${u} failed with status:`,w,"response text:",m.getResponseText()),w>0){let I=m.getResponseJson();Array.isArray(I)&&(I=I[0]);const C=I==null?void 0:I.error;if(C&&C.status&&C.message){const B=function($){const K=$.toLowerCase().replace(/_/g,"-");return Object.values(ie).indexOf(K)>=0?K:ie.UNKNOWN}(C.status);p(new pe(B,C.message))}else p(new pe(ie.UNKNOWN,"Server responded with status "+m.getStatus()))}else p(new pe(ie.UNAVAILABLE,"Connection failed."));break;default:be(9055,{h_:e,streamId:u,P_:m.getLastErrorCode(),T_:m.getLastError()})}}finally{he(dn,`RPC '${e}' ${u} completed.`)}});const y=JSON.stringify(a);he(dn,`RPC '${e}' ${u} sending request:`,a),m.send(t,"POST",y,i,15)})}I_(e,t,i){const a=S_(),l=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=W1(),d=G1(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(p.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Ho(p.initMessageHeaders,t,i),p.encodeInitMessageHeaders=!0;const y=l.join("");he(dn,`Creating RPC '${e}' stream ${a}: ${y}`,p);const E=u.createWebChannel(y,p);this.E_(E);let w=!1,I=!1;const C=new uV({Zo:j=>{I?he(dn,`Not sending because RPC '${e}' stream ${a} is closed:`,j):(w||(he(dn,`Opening RPC '${e}' stream ${a} transport.`),E.open(),w=!0),he(dn,`RPC '${e}' stream ${a} sending:`,j),E.send(j))},Xo:()=>E.close()}),B=(j,$,K)=>{j.listen($,te=>{try{K(te)}catch(re){setTimeout(()=>{throw re},0)}})};return B(E,Ku.EventType.OPEN,()=>{I||(he(dn,`RPC '${e}' stream ${a} transport opened.`),C.__())}),B(E,Ku.EventType.CLOSE,()=>{I||(I=!0,he(dn,`RPC '${e}' stream ${a} transport closed`),C.u_(),this.d_(E))}),B(E,Ku.EventType.ERROR,j=>{I||(I=!0,ol(dn,`RPC '${e}' stream ${a} transport errored. Name:`,j.name,"Message:",j.message),C.u_(new pe(ie.UNAVAILABLE,"The operation could not be completed")))}),B(E,Ku.EventType.MESSAGE,j=>{var $;if(!I){const K=j.data[0];Qe(!!K,16349);const te=K,re=(te==null?void 0:te.error)||(($=te[0])===null||$===void 0?void 0:$.error);if(re){he(dn,`RPC '${e}' stream ${a} received error:`,re);const ce=re.status;let ve=function(N){const k=Dt[N];if(k!==void 0)return RA(k)}(ce),M=re.message;ve===void 0&&(ve=ie.INTERNAL,M="Unknown error status: "+ce+" with message "+re.message),I=!0,C.u_(new pe(ve,M)),E.close()}else he(dn,`RPC '${e}' stream ${a} received:`,K),C.c_(K)}}),B(d,q1.STAT_EVENT,j=>{j.stat===h_.PROXY?he(dn,`RPC '${e}' stream ${a} detected buffering proxy`):j.stat===h_.NOPROXY&&he(dn,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{C.a_()},0),C}terminate(){this.l_.forEach(e=>e.close()),this.l_=[]}E_(e){this.l_.push(e)}d_(e){this.l_=this.l_.filter(t=>t===e)}}function Pg(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xf(n){return new p4(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(e,t,i=1e3,a=1.5,l=6e4){this.xi=e,this.timerId=t,this.A_=i,this.R_=a,this.V_=l,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(e){this.cancel();const t=Math.floor(this.m_+this.w_()),i=Math.max(0,Date.now()-this.g_),a=Math.max(0,t-i);a>0&&he("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.m_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,a,()=>(this.g_=Date.now(),e())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cb="PersistentStream";class zA{constructor(e,t,i,a,l,u,d,p){this.xi=e,this.S_=i,this.D_=a,this.connection=l,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new FA(e,t)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(e){this.U_(),this.stream.send(e)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(e,t){this.U_(),this.K_(),this.x_.cancel(),this.v_++,e!==4?this.x_.reset():t&&t.code===ie.RESOURCE_EXHAUSTED?(Lr(t.toString()),Lr("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):t&&t.code===ie.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}W_(){}auth(){this.state=1;const e=this.G_(this.v_),t=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,a])=>{this.v_===t&&this.z_(i,a)},i=>{e(()=>{const a=new pe(ie.UNKNOWN,"Fetching auth token failed: "+i.message);return this.j_(a)})})}z_(e,t){const i=this.G_(this.v_);this.stream=this.H_(e,t),this.stream.e_(()=>{i(()=>this.listener.e_())}),this.stream.n_(()=>{i(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(a=>{i(()=>this.j_(a))}),this.stream.onMessage(a=>{i(()=>++this.M_==1?this.J_(a):this.onNext(a))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(e){return he(cb,`close with error: ${e}`),this.stream=null,this.close(4,e)}G_(e){return t=>{this.xi.enqueueAndForget(()=>this.v_===e?t():(he(cb,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class hV extends zA{constructor(e,t,i,a,l,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,a,u),this.serializer=l}H_(e,t){return this.connection.I_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.x_.reset();const t=_4(this.serializer,e),i=function(l){if(!("targetChange"in l))return Re.min();const u=l.targetChange;return u.targetIds&&u.targetIds.length?Re.min():u.readTime?Yi(u.readTime):Re.min()}(e);return this.listener.Y_(t,i)}Z_(e){const t={};t.database=w_(this.serializer),t.addTarget=function(l,u){let d;const p=u.target;if(d=__(p)?{documents:E4(l,p)}:{query:T4(l,p).gt},d.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){d.resumeToken=NA(l,u.resumeToken);const m=v_(l,u.expectedCount);m!==null&&(d.expectedCount=m)}else if(u.snapshotVersion.compareTo(Re.min())>0){d.readTime=cf(l,u.snapshotVersion.toTimestamp());const m=v_(l,u.expectedCount);m!==null&&(d.expectedCount=m)}return d}(this.serializer,e);const i=b4(this.serializer,e);i&&(t.labels=i),this.Q_(t)}X_(e){const t={};t.database=w_(this.serializer),t.removeTarget=e,this.Q_(t)}}class dV extends zA{constructor(e,t,i,a,l,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,a,u),this.serializer=l}get ea(){return this.M_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.ea&&this.ta([])}H_(e,t){return this.connection.I_("Write",e,t)}J_(e){return Qe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Qe(!e.writeResults||e.writeResults.length===0,55816),this.listener.na()}onNext(e){Qe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.x_.reset();const t=v4(e.writeResults,e.commitTime),i=Yi(e.commitTime);return this.listener.ra(i,t)}ia(){const e={};e.database=w_(this.serializer),this.Q_(e)}ta(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>y4(this.serializer,i))};this.Q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fV{}class pV extends fV{constructor(e,t,i,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=a,this.sa=!1}oa(){if(this.sa)throw new pe(ie.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,i,a){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,u])=>this.connection.zo(e,E_(t,i),a,l,u)).catch(l=>{throw l.name==="FirebaseError"?(l.code===ie.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new pe(ie.UNKNOWN,l.toString())})}Yo(e,t,i,a,l){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,d])=>this.connection.Yo(e,E_(t,i),a,u,d,l)).catch(u=>{throw u.name==="FirebaseError"?(u.code===ie.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new pe(ie.UNKNOWN,u.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class mV{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(e){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.la("Offline")))}set(e){this.Ta(),this._a=0,e==="Online"&&(this.ua=!1),this.la(e)}la(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ha(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(Lr(t),this.ua=!1):he("OnlineStateTracker",t)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja="RemoteStore";class gV{constructor(e,t,i,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=l,this.Ra.No(u=>{i.enqueueAndForget(async()=>{Qa(this)&&(he(ja,"Restarting streams for network reachability change."),await async function(p){const m=Ie(p);m.da.add(4),await Fc(m),m.Va.set("Unknown"),m.da.delete(4),await Zf(m)}(this))})}),this.Va=new mV(i,a)}}async function Zf(n){if(Qa(n))for(const e of n.Aa)await e(!0)}async function Fc(n){for(const e of n.Aa)await e(!1)}function BA(n,e){const t=Ie(n);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),xy(t)?Ny(t):Il(t).N_()&&Cy(t,e))}function Iy(n,e){const t=Ie(n),i=Il(t);t.Ea.delete(e),i.N_()&&HA(t,e),t.Ea.size===0&&(i.N_()?i.k_():Qa(t)&&t.Va.set("Unknown"))}function Cy(n,e){if(n.ma.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Re.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Il(n).Z_(e)}function HA(n,e){n.ma.Ke(e),Il(n).X_(e)}function Ny(n){n.ma=new c4({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>n.Ea.get(e)||null,Pt:()=>n.datastore.serializer.databaseId}),Il(n).start(),n.Va.ca()}function xy(n){return Qa(n)&&!Il(n).O_()&&n.Ea.size>0}function Qa(n){return Ie(n).da.size===0}function qA(n){n.ma=void 0}async function _V(n){n.Va.set("Online")}async function yV(n){n.Ea.forEach((e,t)=>{Cy(n,e)})}async function vV(n,e){qA(n),xy(n)?(n.Va.Pa(e),Ny(n)):n.Va.set("Unknown")}async function EV(n,e,t){if(n.Va.set("Online"),e instanceof CA&&e.state===2&&e.cause)try{await async function(a,l){const u=l.cause;for(const d of l.targetIds)a.Ea.has(d)&&(await a.remoteSyncer.rejectListen(d,u),a.Ea.delete(d),a.ma.removeTarget(d))}(n,e)}catch(i){he(ja,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await df(n,i)}else if(e instanceof zd?n.ma.Xe(e):e instanceof IA?n.ma.ot(e):n.ma.nt(e),!t.isEqual(Re.min()))try{const i=await jA(n.localStore);t.compareTo(i)>=0&&await function(l,u){const d=l.ma.It(u);return d.targetChanges.forEach((p,m)=>{if(p.resumeToken.approximateByteSize()>0){const y=l.Ea.get(m);y&&l.Ea.set(m,y.withResumeToken(p.resumeToken,u))}}),d.targetMismatches.forEach((p,m)=>{const y=l.Ea.get(p);if(!y)return;l.Ea.set(p,y.withResumeToken(ln.EMPTY_BYTE_STRING,y.snapshotVersion)),HA(l,p);const E=new As(y.target,p,m,y.sequenceNumber);Cy(l,E)}),l.remoteSyncer.applyRemoteEvent(d)}(n,t)}catch(i){he(ja,"Failed to raise snapshot:",i),await df(n,i)}}async function df(n,e,t){if(!Rl(e))throw e;n.da.add(1),await Fc(n),n.Va.set("Offline"),t||(t=()=>jA(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{he(ja,"Retrying IndexedDB access"),await t(),n.da.delete(1),await Zf(n)})}function GA(n,e){return e().catch(t=>df(n,t,e))}async function Jf(n){const e=Ie(n),t=Ls(e);let i=e.Ia.length>0?e.Ia[e.Ia.length-1].batchId:fy;for(;TV(e);)try{const a=await nV(e.localStore,i);if(a===null){e.Ia.length===0&&t.k_();break}i=a.batchId,wV(e,a)}catch(a){await df(e,a)}WA(e)&&YA(e)}function TV(n){return Qa(n)&&n.Ia.length<10}function wV(n,e){n.Ia.push(e);const t=Ls(n);t.N_()&&t.ea&&t.ta(e.mutations)}function WA(n){return Qa(n)&&!Ls(n).O_()&&n.Ia.length>0}function YA(n){Ls(n).start()}async function bV(n){Ls(n).ia()}async function SV(n){const e=Ls(n);for(const t of n.Ia)e.ta(t.mutations)}async function AV(n,e,t){const i=n.Ia.shift(),a=Ey.from(i,e,t);await GA(n,()=>n.remoteSyncer.applySuccessfulWrite(a)),await Jf(n)}async function RV(n,e){e&&Ls(n).ea&&await async function(i,a){if(function(u){return l4(u)&&u!==ie.ABORTED}(a.code)){const l=i.Ia.shift();Ls(i).L_(),await GA(i,()=>i.remoteSyncer.rejectFailedWrite(l.batchId,a)),await Jf(i)}}(n,e),WA(n)&&YA(n)}async function hb(n,e){const t=Ie(n);t.asyncQueue.verifyOperationInProgress(),he(ja,"RemoteStore received new credentials");const i=Qa(t);t.da.add(3),await Fc(t),i&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.da.delete(3),await Zf(t)}async function IV(n,e){const t=Ie(n);e?(t.da.delete(2),await Zf(t)):e||(t.da.add(2),await Fc(t),t.Va.set("Unknown"))}function Il(n){return n.fa||(n.fa=function(t,i,a){const l=Ie(t);return l.oa(),new hV(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(n.datastore,n.asyncQueue,{e_:_V.bind(null,n),n_:yV.bind(null,n),i_:vV.bind(null,n),Y_:EV.bind(null,n)}),n.Aa.push(async e=>{e?(n.fa.L_(),xy(n)?Ny(n):n.Va.set("Unknown")):(await n.fa.stop(),qA(n))})),n.fa}function Ls(n){return n.ga||(n.ga=function(t,i,a){const l=Ie(t);return l.oa(),new dV(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(n.datastore,n.asyncQueue,{e_:()=>Promise.resolve(),n_:bV.bind(null,n),i_:RV.bind(null,n),na:SV.bind(null,n),ra:AV.bind(null,n)}),n.Aa.push(async e=>{e?(n.ga.L_(),await Jf(n)):(await n.ga.stop(),n.Ia.length>0&&(he(ja,`Stopping write stream with ${n.Ia.length} pending writes`),n.Ia=[]))})),n.ga}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(e,t,i,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=a,this.removalCallback=l,this.deferred=new Or,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,a,l){const u=Date.now()+i,d=new Oy(e,t,u,a,l);return d.start(i),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new pe(ie.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Dy(n,e){if(Lr("AsyncQueue",`${e}: ${n}`),Rl(n))return new pe(ie.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{static emptySet(e){return new il(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||_e.comparator(t.key,i.key):(t,i)=>_e.comparator(t.key,i.key),this.keyedMap=Qu(),this.sortedSet=new kt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof il)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=i.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new il;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(){this.pa=new kt(_e.comparator)}track(e){const t=e.doc.key,i=this.pa.get(t);i?e.type!==0&&i.type===3?this.pa=this.pa.insert(t,e):e.type===3&&i.type!==1?this.pa=this.pa.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.pa=this.pa.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.pa=this.pa.remove(t):e.type===1&&i.type===2?this.pa=this.pa.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):be(63341,{Vt:e,ya:i}):this.pa=this.pa.insert(t,e)}wa(){const e=[];return this.pa.inorderTraversal((t,i)=>{e.push(i)}),e}}class dl{constructor(e,t,i,a,l,u,d,p,m){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=a,this.mutatedKeys=l,this.fromCache=u,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=m}static fromInitialDocuments(e,t,i,a,l){const u=[];return t.forEach(d=>{u.push({type:0,doc:d})}),new dl(e,t,il.emptySet(t),u,i,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Wf(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==i[a].type||!t[a].doc.isEqual(i[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CV{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(e=>e.va())}}class NV{constructor(){this.queries=fb(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,i){const a=Ie(t),l=a.queries;a.queries=fb(),l.forEach((u,d)=>{for(const p of d.Sa)p.onError(i)})})(this,new pe(ie.ABORTED,"Firestore shutting down"))}}function fb(){return new $a(n=>fA(n),Wf)}async function $A(n,e){const t=Ie(n);let i=3;const a=e.query;let l=t.queries.get(a);l?!l.Da()&&e.va()&&(i=2):(l=new CV,i=e.va()?0:1);try{switch(i){case 0:l.ba=await t.onListen(a,!0);break;case 1:l.ba=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(u){const d=Dy(u,`Initialization of query '${Yo(e.query)}' failed`);return void e.onError(d)}t.queries.set(a,l),l.Sa.push(e),e.Fa(t.onlineState),l.ba&&e.Ma(l.ba)&&ky(t)}async function KA(n,e){const t=Ie(n),i=e.query;let a=3;const l=t.queries.get(i);if(l){const u=l.Sa.indexOf(e);u>=0&&(l.Sa.splice(u,1),l.Sa.length===0?a=e.va()?0:1:!l.Da()&&e.va()&&(a=2))}switch(a){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function xV(n,e){const t=Ie(n);let i=!1;for(const a of e){const l=a.query,u=t.queries.get(l);if(u){for(const d of u.Sa)d.Ma(a)&&(i=!0);u.ba=a}}i&&ky(t)}function OV(n,e,t){const i=Ie(n),a=i.queries.get(e);if(a)for(const l of a.Sa)l.onError(t);i.queries.delete(e)}function ky(n){n.Ca.forEach(e=>{e.next()})}var A_,pb;(pb=A_||(A_={})).xa="default",pb.Cache="cache";class QA{constructor(e,t,i){this.query=e,this.Oa=t,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=i||{}}Ma(e){if(!this.options.includeMetadataChanges){const i=[];for(const a of e.docChanges)a.type!==3&&i.push(a);e=new dl(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Na?this.La(e)&&(this.Oa.next(e),t=!0):this.ka(e,this.onlineState)&&(this.qa(e),t=!0),this.Ba=e,t}onError(e){this.Oa.error(e)}Fa(e){this.onlineState=e;let t=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,e)&&(this.qa(this.Ba),t=!0),t}ka(e,t){if(!e.fromCache||!this.va())return!0;const i=t!=="Offline";return(!this.options.Qa||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}La(e){if(e.docChanges.length>0)return!0;const t=this.Ba&&this.Ba.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}qa(e){e=dl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Na=!0,this.Oa.next(e)}va(){return this.options.source!==A_.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(e){this.key=e}}class ZA{constructor(e){this.key=e}}class DV{constructor(e,t){this.query=e,this.Ha=t,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Fe(),this.mutatedKeys=Fe(),this.Za=pA(e),this.Xa=new il(this.Za)}get eu(){return this.Ha}tu(e,t){const i=t?t.nu:new db,a=t?t.Xa:this.Xa;let l=t?t.mutatedKeys:this.mutatedKeys,u=a,d=!1;const p=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,m=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((y,E)=>{const w=a.get(y),I=Yf(this.query,E)?E:null,C=!!w&&this.mutatedKeys.has(w.key),B=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let j=!1;w&&I?w.data.isEqual(I.data)?C!==B&&(i.track({type:3,doc:I}),j=!0):this.ru(w,I)||(i.track({type:2,doc:I}),j=!0,(p&&this.Za(I,p)>0||m&&this.Za(I,m)<0)&&(d=!0)):!w&&I?(i.track({type:0,doc:I}),j=!0):w&&!I&&(i.track({type:1,doc:w}),j=!0,(p||m)&&(d=!0)),j&&(I?(u=u.add(I),l=B?l.add(y):l.delete(y)):(u=u.delete(y),l=l.delete(y)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const y=this.query.limitType==="F"?u.last():u.first();u=u.delete(y.key),l=l.delete(y.key),i.track({type:1,doc:y})}return{Xa:u,nu:i,Cs:d,mutatedKeys:l}}ru(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,a){const l=this.Xa;this.Xa=e.Xa,this.mutatedKeys=e.mutatedKeys;const u=e.nu.wa();u.sort((y,E)=>function(I,C){const B=j=>{switch(j){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return be(20277,{Vt:j})}};return B(I)-B(C)}(y.type,E.type)||this.Za(y.doc,E.doc)),this.iu(i),a=a!=null&&a;const d=t&&!a?this.su():[],p=this.Ya.size===0&&this.current&&!a?1:0,m=p!==this.Ja;return this.Ja=p,u.length!==0||m?{snapshot:new dl(this.query,e.Xa,l,u,e.mutatedKeys,p===0,m,!1,!!i&&i.resumeToken.approximateByteSize()>0),ou:d}:{ou:d}}Fa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new db,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(e){return!this.Ha.has(e)&&!!this.Xa.has(e)&&!this.Xa.get(e).hasLocalMutations}iu(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}su(){if(!this.current)return[];const e=this.Ya;this.Ya=Fe(),this.Xa.forEach(i=>{this._u(i.key)&&(this.Ya=this.Ya.add(i.key))});const t=[];return e.forEach(i=>{this.Ya.has(i)||t.push(new ZA(i))}),this.Ya.forEach(i=>{e.has(i)||t.push(new XA(i))}),t}au(e){this.Ha=e.$s,this.Ya=Fe();const t=this.tu(e.documents);return this.applyChanges(t,!0)}uu(){return dl.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,this.Ja===0,this.hasCachedResults)}}const Py="SyncEngine";class kV{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class PV{constructor(e){this.key=e,this.cu=!1}}class MV{constructor(e,t,i,a,l,u){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=u,this.lu={},this.hu=new $a(d=>fA(d),Wf),this.Pu=new Map,this.Tu=new Set,this.Iu=new kt(_e.comparator),this.Eu=new Map,this.du=new by,this.Au={},this.Ru=new Map,this.Vu=hl.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}async function VV(n,e,t=!0){const i=rR(n);let a;const l=i.hu.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.uu()):a=await JA(i,e,t,!0),a}async function LV(n,e){const t=rR(n);await JA(t,e,!0,!1)}async function JA(n,e,t,i){const a=await iV(n.localStore,Gi(e)),l=a.targetId,u=n.sharedClientState.addLocalQueryTarget(l,t);let d;return i&&(d=await UV(n,e,l,u==="current",a.resumeToken)),n.isPrimaryClient&&t&&BA(n.remoteStore,a),d}async function UV(n,e,t,i,a){n.fu=(E,w,I)=>async function(B,j,$,K){let te=j.view.tu($);te.Cs&&(te=await ab(B.localStore,j.query,!1).then(({documents:M})=>j.view.tu(M,te)));const re=K&&K.targetChanges.get(j.targetId),ce=K&&K.targetMismatches.get(j.targetId)!=null,ve=j.view.applyChanges(te,B.isPrimaryClient,re,ce);return gb(B,j.targetId,ve.ou),ve.snapshot}(n,E,w,I);const l=await ab(n.localStore,e,!0),u=new DV(e,l.$s),d=u.tu(l.documents),p=jc.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",a),m=u.applyChanges(d,n.isPrimaryClient,p);gb(n,t,m.ou);const y=new kV(e,t,u);return n.hu.set(e,y),n.Pu.has(t)?n.Pu.get(t).push(e):n.Pu.set(t,[e]),m.snapshot}async function jV(n,e,t){const i=Ie(n),a=i.hu.get(e),l=i.Pu.get(a.targetId);if(l.length>1)return i.Pu.set(a.targetId,l.filter(u=>!Wf(u,e))),void i.hu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(a.targetId),i.sharedClientState.isActiveQueryTarget(a.targetId)||await b_(i.localStore,a.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(a.targetId),t&&Iy(i.remoteStore,a.targetId),R_(i,a.targetId)}).catch(Al)):(R_(i,a.targetId),await b_(i.localStore,a.targetId,!0))}async function FV(n,e){const t=Ie(n),i=t.hu.get(e),a=t.Pu.get(i.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Iy(t.remoteStore,i.targetId))}async function zV(n,e,t){const i=$V(n);try{const a=await function(u,d){const p=Ie(u),m=Bt.now(),y=d.reduce((I,C)=>I.add(C.key),Fe());let E,w;return p.persistence.runTransaction("Locally write mutations","readwrite",I=>{let C=Ur(),B=Fe();return p.Bs.getEntries(I,y).next(j=>{C=j,C.forEach(($,K)=>{K.isValidDocument()||(B=B.add($))})}).next(()=>p.localDocuments.getOverlayedDocuments(I,C)).next(j=>{E=j;const $=[];for(const K of d){const te=i4(K,E.get(K.key).overlayedDocument);te!=null&&$.push(new Ka(K.key,te,aA(te.value.mapValue),Wi.exists(!0)))}return p.mutationQueue.addMutationBatch(I,m,$,d)}).next(j=>{w=j;const $=j.applyToLocalDocumentSet(E,B);return p.documentOverlayCache.saveOverlays(I,j.batchId,$)})}).then(()=>({batchId:w.batchId,changes:gA(E)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(a.batchId),function(u,d,p){let m=u.Au[u.currentUser.toKey()];m||(m=new kt(Oe)),m=m.insert(d,p),u.Au[u.currentUser.toKey()]=m}(i,a.batchId,t),await zc(i,a.changes),await Jf(i.remoteStore)}catch(a){const l=Dy(a,"Failed to persist write");t.reject(l)}}async function eR(n,e){const t=Ie(n);try{const i=await eV(t.localStore,e);e.targetChanges.forEach((a,l)=>{const u=t.Eu.get(l);u&&(Qe(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?u.cu=!0:a.modifiedDocuments.size>0?Qe(u.cu,14607):a.removedDocuments.size>0&&(Qe(u.cu,42227),u.cu=!1))}),await zc(t,i,e)}catch(i){await Al(i)}}function mb(n,e,t){const i=Ie(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const a=[];i.hu.forEach((l,u)=>{const d=u.view.Fa(e);d.snapshot&&a.push(d.snapshot)}),function(u,d){const p=Ie(u);p.onlineState=d;let m=!1;p.queries.forEach((y,E)=>{for(const w of E.Sa)w.Fa(d)&&(m=!0)}),m&&ky(p)}(i.eventManager,e),a.length&&i.lu.Y_(a),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function BV(n,e,t){const i=Ie(n);i.sharedClientState.updateQueryState(e,"rejected",t);const a=i.Eu.get(e),l=a&&a.key;if(l){let u=new kt(_e.comparator);u=u.insert(l,pn.newNoDocument(l,Re.min()));const d=Fe().add(l),p=new Qf(Re.min(),new Map,new kt(Oe),u,d);await eR(i,p),i.Iu=i.Iu.remove(l),i.Eu.delete(e),My(i)}else await b_(i.localStore,e,!1).then(()=>R_(i,e,t)).catch(Al)}async function HV(n,e){const t=Ie(n),i=e.batch.batchId;try{const a=await J4(t.localStore,e);nR(t,i,null),tR(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await zc(t,a)}catch(a){await Al(a)}}async function qV(n,e,t){const i=Ie(n);try{const a=await function(u,d){const p=Ie(u);return p.persistence.runTransaction("Reject batch","readwrite-primary",m=>{let y;return p.mutationQueue.lookupMutationBatch(m,d).next(E=>(Qe(E!==null,37113),y=E.keys(),p.mutationQueue.removeMutationBatch(m,E))).next(()=>p.mutationQueue.performConsistencyCheck(m)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(m,y,d)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,y)).next(()=>p.localDocuments.getDocuments(m,y))})}(i.localStore,e);nR(i,e,t),tR(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await zc(i,a)}catch(a){await Al(a)}}function tR(n,e){(n.Ru.get(e)||[]).forEach(t=>{t.resolve()}),n.Ru.delete(e)}function nR(n,e,t){const i=Ie(n);let a=i.Au[i.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),i.Au[i.currentUser.toKey()]=a}}function R_(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Pu.get(e))n.hu.delete(i),t&&n.lu.gu(i,t);n.Pu.delete(e),n.isPrimaryClient&&n.du.Hr(e).forEach(i=>{n.du.containsKey(i)||iR(n,i)})}function iR(n,e){n.Tu.delete(e.path.canonicalString());const t=n.Iu.get(e);t!==null&&(Iy(n.remoteStore,t),n.Iu=n.Iu.remove(e),n.Eu.delete(t),My(n))}function gb(n,e,t){for(const i of t)i instanceof XA?(n.du.addReference(i.key,e),GV(n,i)):i instanceof ZA?(he(Py,"Document no longer in limbo: "+i.key),n.du.removeReference(i.key,e),n.du.containsKey(i.key)||iR(n,i.key)):be(19791,{pu:i})}function GV(n,e){const t=e.key,i=t.path.canonicalString();n.Iu.get(t)||n.Tu.has(i)||(he(Py,"New document in limbo: "+t),n.Tu.add(i),My(n))}function My(n){for(;n.Tu.size>0&&n.Iu.size<n.maxConcurrentLimboResolutions;){const e=n.Tu.values().next().value;n.Tu.delete(e);const t=new _e(ft.fromString(e)),i=n.Vu.next();n.Eu.set(i,new PV(t)),n.Iu=n.Iu.insert(t,i),BA(n.remoteStore,new As(Gi(yy(t.path)),i,"TargetPurposeLimboResolution",Bf.le))}}async function zc(n,e,t){const i=Ie(n),a=[],l=[],u=[];i.hu.isEmpty()||(i.hu.forEach((d,p)=>{u.push(i.fu(p,e,t).then(m=>{var y;if((m||t)&&i.isPrimaryClient){const E=m?!m.fromCache:(y=t==null?void 0:t.targetChanges.get(p.targetId))===null||y===void 0?void 0:y.current;i.sharedClientState.updateQueryState(p.targetId,E?"current":"not-current")}if(m){a.push(m);const E=Ay.Rs(p.targetId,m);l.push(E)}}))}),await Promise.all(u),i.lu.Y_(a),await async function(p,m){const y=Ie(p);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",E=>ee.forEach(m,w=>ee.forEach(w.ds,I=>y.persistence.referenceDelegate.addReference(E,w.targetId,I)).next(()=>ee.forEach(w.As,I=>y.persistence.referenceDelegate.removeReference(E,w.targetId,I)))))}catch(E){if(!Rl(E))throw E;he(Ry,"Failed to update sequence numbers: "+E)}for(const E of m){const w=E.targetId;if(!E.fromCache){const I=y.xs.get(w),C=I.snapshotVersion,B=I.withLastLimboFreeSnapshotVersion(C);y.xs=y.xs.insert(w,B)}}}(i.localStore,l))}async function WV(n,e){const t=Ie(n);if(!t.currentUser.isEqual(e)){he(Py,"User change. New user:",e.toKey());const i=await UA(t.localStore,e);t.currentUser=e,function(l,u){l.Ru.forEach(d=>{d.forEach(p=>{p.reject(new pe(ie.CANCELLED,u))})}),l.Ru.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await zc(t,i.ks)}}function YV(n,e){const t=Ie(n),i=t.Eu.get(e);if(i&&i.cu)return Fe().add(i.key);{let a=Fe();const l=t.Pu.get(e);if(!l)return a;for(const u of l){const d=t.hu.get(u);a=a.unionWith(d.view.eu)}return a}}function rR(n){const e=Ie(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=eR.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=YV.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=BV.bind(null,e),e.lu.Y_=xV.bind(null,e.eventManager),e.lu.gu=OV.bind(null,e.eventManager),e}function $V(n){const e=Ie(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=HV.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=qV.bind(null,e),e}class ff{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Xf(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Su(e),await this.persistence.start(),this.localStore=this.Du(e),this.gcScheduler=this.vu(e,this.localStore),this.indexBackfillerScheduler=this.Cu(e,this.localStore)}vu(e,t){return null}Cu(e,t){return null}Du(e){return Z4(this.persistence,new K4,e.initialUser,this.serializer)}Su(e){return new LA(Sy.fi,this.serializer)}bu(e){return new sV}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ff.provider={build:()=>new ff};class KV extends ff{constructor(e){super(),this.cacheSizeBytes=e}vu(e,t){Qe(this.persistence.referenceDelegate instanceof hf,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new P4(i,e.asyncQueue,t)}Su(e){const t=this.cacheSizeBytes!==void 0?In.withCacheSize(this.cacheSizeBytes):In.DEFAULT;return new LA(i=>hf.fi(i,t),this.serializer)}}class I_{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>mb(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=WV.bind(null,this.syncEngine),await IV(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new NV}()}createDatastore(e){const t=Xf(e.databaseInfo.databaseId),i=function(l){return new cV(l)}(e.databaseInfo);return function(l,u,d,p){return new pV(l,u,d,p)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,a,l,u,d){return new gV(i,a,l,u,d)}(this.localStore,this.datastore,e.asyncQueue,t=>mb(this.syncEngine,t,0),function(){return ub.C()?new ub:new aV}())}createSyncEngine(e,t){return function(a,l,u,d,p,m,y){const E=new MV(a,l,u,d,p,m);return y&&(E.mu=!0),E}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(a){const l=Ie(a);he(ja,"RemoteStore shutting down."),l.da.add(5),await Fc(l),l.Ra.shutdown(),l.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}I_.provider={build:()=>new I_};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Mu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Mu(this.observer.error,e):Lr("Uncaught Error in snapshot listener:",e.toString()))}xu(){this.muted=!0}Mu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us="FirestoreClient";class QV{constructor(e,t,i,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=a,this.user=fn.UNAUTHENTICATED,this.clientId=Q1.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,async u=>{he(Us,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(i,u=>(he(Us,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Or;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Dy(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Mg(n,e){n.asyncQueue.verifyOperationInProgress(),he(Us,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async a=>{i.isEqual(a)||(await UA(e.localStore,a),i=a)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function _b(n,e){n.asyncQueue.verifyOperationInProgress();const t=await XV(n);he(Us,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>hb(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,a)=>hb(e.remoteStore,a)),n._onlineComponents=e}async function XV(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){he(Us,"Using user provided OfflineComponentProvider");try{await Mg(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(a){return a.name==="FirebaseError"?a.code===ie.FAILED_PRECONDITION||a.code===ie.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(t))throw t;ol("Error using user provided cache. Falling back to memory cache: "+t),await Mg(n,new ff)}}else he(Us,"Using default OfflineComponentProvider"),await Mg(n,new KV(void 0));return n._offlineComponents}async function aR(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(he(Us,"Using user provided OnlineComponentProvider"),await _b(n,n._uninitializedComponentsProvider._online)):(he(Us,"Using default OnlineComponentProvider"),await _b(n,new I_))),n._onlineComponents}function ZV(n){return aR(n).then(e=>e.syncEngine)}async function oR(n){const e=await aR(n),t=e.eventManager;return t.onListen=VV.bind(null,e.syncEngine),t.onUnlisten=jV.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=LV.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=FV.bind(null,e.syncEngine),t}function JV(n,e,t={}){const i=new Or;return n.asyncQueue.enqueueAndForget(async()=>function(l,u,d,p,m){const y=new sR({next:w=>{y.xu(),u.enqueueAndForget(()=>KA(l,E));const I=w.docs.has(d);!I&&w.fromCache?m.reject(new pe(ie.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&w.fromCache&&p&&p.source==="server"?m.reject(new pe(ie.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):m.resolve(w)},error:w=>m.reject(w)}),E=new QA(yy(d.path),y,{includeMetadataChanges:!0,Qa:!0});return $A(l,E)}(await oR(n),n.asyncQueue,e,t,i)),i.promise}function eL(n,e,t={}){const i=new Or;return n.asyncQueue.enqueueAndForget(async()=>function(l,u,d,p,m){const y=new sR({next:w=>{y.xu(),u.enqueueAndForget(()=>KA(l,E)),w.fromCache&&p.source==="server"?m.reject(new pe(ie.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):m.resolve(w)},error:w=>m.reject(w)}),E=new QA(d,y,{includeMetadataChanges:!0,Qa:!0});return $A(l,E)}(await oR(n),n.asyncQueue,e,t,i)),i.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lR(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yb=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uR(n,e,t){if(!t)throw new pe(ie.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function tL(n,e,t,i){if(e===!0&&i===!0)throw new pe(ie.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function vb(n){if(!_e.isDocumentKey(n))throw new pe(ie.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Eb(n){if(_e.isDocumentKey(n))throw new pe(ie.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Vy(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":be(12329,{type:typeof n})}function js(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new pe(ie.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Vy(n);throw new pe(ie.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR="firestore.googleapis.com",Tb=!0;class wb{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new pe(ie.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=cR,this.ssl=Tb}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Tb;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=VA;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<D4)throw new pe(ie.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}tL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=lR((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new pe(ie.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new pe(ie.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new pe(ie.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,a){return i.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ep{constructor(e,t,i,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wb({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new pe(ie.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new pe(ie.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wb(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new lM;switch(i.type){case"firstParty":return new dM(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new pe(ie.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=yb.get(t);i&&(he("ComponentProvider","Removing Datastore"),yb.delete(t),i.terminate())}(this),Promise.resolve()}}function nL(n,e,t,i={}){var a;n=js(n,ep);const l=Fr(e),u=n._getSettings(),d=Object.assign(Object.assign({},u),{emulatorOptions:n._getEmulatorOptions()}),p=`${e}:${t}`;l&&(Vf(`https://${p}`),Lf("Firestore",!0)),u.host!==cR&&u.host!==p&&ol("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m=Object.assign(Object.assign({},u),{host:p,ssl:l,emulatorOptions:i});if(!Pr(m,d)&&(n._setSettings(m),i.mockUserToken)){let y,E;if(typeof i.mockUserToken=="string")y=i.mockUserToken,E=fn.MOCK_USER;else{y=Z_(i.mockUserToken,(a=n._app)===null||a===void 0?void 0:a.options.projectId);const w=i.mockUserToken.sub||i.mockUserToken.user_id;if(!w)throw new pe(ie.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new fn(w)}n._authCredentials=new uM(new $1(y,E))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new tp(this.firestore,e,this._query)}}class zn{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new zn(this.firestore,e,this._key)}}class xs extends tp{constructor(e,t,i){super(e,t,yy(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new zn(this.firestore,null,new _e(e))}withConverter(e){return new xs(this.firestore,e,this._path)}}function Xo(n,e,...t){if(n=ct(n),uR("collection","path",e),n instanceof ep){const i=ft.fromString(e,...t);return Eb(i),new xs(n,null,i)}{if(!(n instanceof zn||n instanceof xs))throw new pe(ie.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(ft.fromString(e,...t));return Eb(i),new xs(n.firestore,null,i)}}function C_(n,e,...t){if(n=ct(n),arguments.length===1&&(e=Q1.newId()),uR("doc","path",e),n instanceof ep){const i=ft.fromString(e,...t);return vb(i),new zn(n,null,new _e(i))}{if(!(n instanceof zn||n instanceof xs))throw new pe(ie.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(ft.fromString(e,...t));return vb(i),new zn(n.firestore,n instanceof xs?n.converter:null,new _e(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb="AsyncQueue";class Sb{constructor(e=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new FA(this,"async_queue_retry"),this.rc=()=>{const i=Pg();i&&he(bb,"Visibility state changed to "+i.visibilityState),this.x_.b_()},this.sc=e;const t=Pg();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.oc(),this._c(e)}enterRestrictedMode(e){if(!this.Yu){this.Yu=!0,this.tc=e||!1;const t=Pg();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.rc)}}enqueue(e){if(this.oc(),this.Yu)return new Promise(()=>{});const t=new Or;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ju.push(e),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(e){if(!Rl(e))throw e;he(bb,"Operation failed with retryable error: "+e)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(e){const t=this.sc.then(()=>(this.ec=!0,e().catch(i=>{throw this.Xu=i,this.ec=!1,Lr("INTERNAL UNHANDLED ERROR: ",Ab(i)),i}).then(i=>(this.ec=!1,i))));return this.sc=t,t}enqueueAfterDelay(e,t,i){this.oc(),this.nc.indexOf(e)>-1&&(t=0);const a=Oy.createAndSchedule(this,e,t,i,l=>this.uc(l));return this.Zu.push(a),a}oc(){this.Xu&&be(47125,{cc:Ab(this.Xu)})}verifyOperationInProgress(){}async lc(){let e;do e=this.sc,await e;while(e!==this.sc)}hc(e){for(const t of this.Zu)if(t.timerId===e)return!0;return!1}Pc(e){return this.lc().then(()=>{this.Zu.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.Zu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.lc()})}Tc(e){this.nc.push(e)}uc(e){const t=this.Zu.indexOf(e);this.Zu.splice(t,1)}}function Ab(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Bc extends ep{constructor(e,t,i,a){super(e,t,i,a),this.type="firestore",this._queue=new Sb,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Sb(e),this._firestoreClient=void 0,await e}}}function hR(n,e){const t=typeof n=="object"?n:kc(),i=typeof n=="string"?n:rf,a=Br(t,"firestore").getImmediate({identifier:i});if(!a._initialized){const l=X_("firestore");l&&nL(a,...l)}return a}function Ly(n){if(n._terminated)throw new pe(ie.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||iL(n),n._firestoreClient}function iL(n){var e,t,i;const a=n._freezeSettings(),l=function(d,p,m,y){return new IM(d,p,m,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,lR(y.experimentalLongPollingOptions),y.useFetchStreams,y.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,a);n._componentsProvider||!((t=a.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=a.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),n._firestoreClient=new QV(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&function(d){const p=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(p),_online:p}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e){this._byteString=e}static fromBase64String(e){try{return new fl(ln.fromBase64String(e))}catch(t){throw new pe(ie.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new fl(ln.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new pe(ie.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new on(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new pe(ie.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new pe(ie.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Oe(this._lat,e._lat)||Oe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,a){if(i.length!==a.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==a[l])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rL=/^__.*__$/;class sL{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Ka(e,this.data,this.fieldMask,t,this.fieldTransforms):new Uc(e,this.data,t,this.fieldTransforms)}}function fR(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw be(40011,{Ic:n})}}class zy{constructor(e,t,i,a,l,u){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=a,l===void 0&&this.Ec(),this.fieldTransforms=l||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Ic(){return this.settings.Ic}dc(e){return new zy(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ac(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.dc({path:i,Rc:!1});return a.Vc(e),a}mc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.dc({path:i,Rc:!1});return a.Ec(),a}fc(e){return this.dc({path:void 0,Rc:!0})}gc(e){return pf(e,this.settings.methodName,this.settings.yc||!1,this.path,this.settings.wc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ec(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vc(this.path.get(e))}Vc(e){if(e.length===0)throw this.gc("Document fields must not be empty");if(fR(this.Ic)&&rL.test(e))throw this.gc('Document fields cannot begin and end with "__"')}}class aL{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Xf(e)}bc(e,t,i,a=!1){return new zy({Ic:e,methodName:t,wc:i,path:on.emptyPath(),Rc:!1,yc:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function pR(n){const e=n._freezeSettings(),t=Xf(n._databaseId);return new aL(n._databaseId,!!e.ignoreUndefinedProperties,t)}function mR(n,e,t,i,a,l={}){const u=n.bc(l.merge||l.mergeFields?2:0,e,t,a);vR("Data must be an object, but it was:",u,i);const d=_R(i,u);let p,m;if(l.merge)p=new gi(u.fieldMask),m=u.fieldTransforms;else if(l.mergeFields){const y=[];for(const E of l.mergeFields){const w=oL(e,E,t);if(!u.contains(w))throw new pe(ie.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);uL(y,w)||y.push(w)}p=new gi(y),m=u.fieldTransforms.filter(E=>p.covers(E.field))}else p=null,m=u.fieldTransforms;return new sL(new ii(d),p,m)}function gR(n,e){if(yR(n=ct(n)))return vR("Unsupported field value:",e,n),_R(n,e);if(n instanceof dR)return function(i,a){if(!fR(a.Ic))throw a.gc(`${i._methodName}() can only be used with update() and set()`);if(!a.path)throw a.gc(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(a);l&&a.fieldTransforms.push(l)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Rc&&e.Ic!==4)throw e.gc("Nested arrays are not supported");return function(i,a){const l=[];let u=0;for(const d of i){let p=gR(d,a.fc(u));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),u++}return{arrayValue:{values:l}}}(n,e)}return function(i,a){if((i=ct(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return XM(a.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=Bt.fromDate(i);return{timestampValue:cf(a.serializer,l)}}if(i instanceof Bt){const l=new Bt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:cf(a.serializer,l)}}if(i instanceof jy)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof fl)return{bytesValue:NA(a.serializer,i._byteString)};if(i instanceof zn){const l=a.databaseId,u=i.firestore._databaseId;if(!u.isEqual(l))throw a.gc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:wy(i.firestore._databaseId||a.databaseId,i._key.path)}}if(i instanceof Fy)return function(u,d){return{mapValue:{fields:{[rA]:{stringValue:sA},[sf]:{arrayValue:{values:u.toArray().map(m=>{if(typeof m!="number")throw d.gc("VectorValues must only contain numeric values.");return vy(d.serializer,m)})}}}}}}(i,a);throw a.gc(`Unsupported field value: ${Vy(i)}`)}(n,e)}function _R(n,e){const t={};return Z1(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ya(n,(i,a)=>{const l=gR(a,e.Ac(i));l!=null&&(t[i]=l)}),{mapValue:{fields:t}}}function yR(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Bt||n instanceof jy||n instanceof fl||n instanceof zn||n instanceof dR||n instanceof Fy)}function vR(n,e,t){if(!yR(t)||!function(a){return typeof a=="object"&&a!==null&&(Object.getPrototypeOf(a)===Object.prototype||Object.getPrototypeOf(a)===null)}(t)){const i=Vy(t);throw i==="an object"?e.gc(n+" a custom object"):e.gc(n+" "+i)}}function oL(n,e,t){if((e=ct(e))instanceof Uy)return e._internalPath;if(typeof e=="string")return ER(n,e);throw pf("Field path arguments must be of type string or ",n,!1,void 0,t)}const lL=new RegExp("[~\\*/\\[\\]]");function ER(n,e,t){if(e.search(lL)>=0)throw pf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Uy(...e.split("."))._internalPath}catch{throw pf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function pf(n,e,t,i,a){const l=i&&!i.isEmpty(),u=a!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(l||u)&&(p+=" (found",l&&(p+=` in field ${i}`),u&&(p+=` in document ${a}`),p+=")"),new pe(ie.INVALID_ARGUMENT,d+n+p)}function uL(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(e,t,i,a,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new zn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new cL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(wR("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class cL extends TR{data(){return super.data()}}function wR(n,e){return typeof e=="string"?ER(n,e):e instanceof Uy?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hL(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new pe(ie.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class dL{convertValue(e,t="none"){switch(Vs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return It(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ms(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw be(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Ya(e,(a,l)=>{i[a]=this.convertValue(l,t)}),i}convertVectorValue(e){var t,i,a;const l=(a=(i=(t=e.fields)===null||t===void 0?void 0:t[sf].arrayValue)===null||i===void 0?void 0:i.values)===null||a===void 0?void 0:a.map(u=>It(u.doubleValue));return new Fy(l)}convertGeoPoint(e){return new jy(It(e.latitude),It(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=qf(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(gc(e));default:return null}}convertTimestamp(e){const t=Ps(e);return new Bt(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=ft.fromString(e);Qe(MA(i),9688,{name:e});const a=new _c(i.get(1),i.get(3)),l=new _e(i.popFirst(5));return a.isEqual(t)||Lr(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bR(n,e,t){let i;return i=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class SR extends TR{constructor(e,t,i,a,l,u){super(e,t,i,a,u),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Bd(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(wR("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class Bd extends SR{data(e={}){return super.data(e)}}class fL{constructor(e,t,i,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new Zu(a.hasPendingWrites,a.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new Bd(this._firestore,this._userDataWriter,i.key,i,new Zu(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new pe(ie.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(a,l){if(a._snapshot.oldDocs.isEmpty()){let u=0;return a._snapshot.docChanges.map(d=>{const p=new Bd(a._firestore,a._userDataWriter,d.doc.key,d.doc,new Zu(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:u++}})}{let u=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(d=>l||d.type!==3).map(d=>{const p=new Bd(a._firestore,a._userDataWriter,d.doc.key,d.doc,new Zu(a._snapshot.mutatedKeys.has(d.doc.key),a._snapshot.fromCache),a.query.converter);let m=-1,y=-1;return d.type!==0&&(m=u.indexOf(d.doc.key),u=u.delete(d.doc.key)),d.type!==1&&(u=u.add(d.doc),y=u.indexOf(d.doc.key)),{type:pL(d.type),doc:p,oldIndex:m,newIndex:y}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function pL(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return be(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mL(n){n=js(n,zn);const e=js(n.firestore,Bc);return JV(Ly(e),n._key).then(t=>_L(e,n,t))}class AR extends dL{constructor(e){super(),this.firestore=e}convertBytes(e){return new fl(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new zn(this.firestore,null,t)}}function mf(n){n=js(n,tp);const e=js(n.firestore,Bc),t=Ly(e),i=new AR(e);return hL(n._query),eL(t,n._query).then(a=>new fL(e,i,n,a))}function gL(n,e,t){n=js(n,zn);const i=js(n.firestore,Bc),a=bR(n.converter,e,t);return RR(i,[mR(pR(i),"setDoc",n._key,a,n.converter!==null,t).toMutation(n._key,Wi.none())])}function Rb(n,e){const t=js(n.firestore,Bc),i=C_(n),a=bR(n.converter,e);return RR(t,[mR(pR(n.firestore),"addDoc",i._key,a,n.converter!==null,{}).toMutation(i._key,Wi.exists(!1))]).then(()=>i)}function RR(n,e){return function(i,a){const l=new Or;return i.asyncQueue.enqueueAndForget(async()=>zV(await ZV(i),a,l)),l.promise}(Ly(n),e)}function _L(n,e,t){const i=t.docs.get(e._key),a=new AR(n);return new SR(n,a,e._key,i,new Zu(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(a){Sl=a})(qs),si(new Hn("firestore",(i,{instanceIdentifier:a,options:l})=>{const u=i.getProvider("app").getImmediate(),d=new Bc(new cM(i.getProvider("auth-internal")),new fM(u,i.getProvider("app-check-internal")),function(m,y){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new pe(ie.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new _c(m.options.projectId,y)}(u,a),u);return l=Object.assign({useFetchStreams:t},l),d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),gn(xw,Ow,e),gn(xw,Ow,"esm2017")})();const IR="@firebase/installations",By="0.6.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CR=1e4,NR=`w:${By}`,xR="FIS_v2",yL="https://firebaseinstallations.googleapis.com/v1",vL=60*60*1e3,EL="installations",TL="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wL={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Fa=new Wa(EL,TL,wL);function OR(n){return n instanceof ai&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DR({projectId:n}){return`${yL}/projects/${n}/installations`}function kR(n){return{token:n.token,requestStatus:2,expiresIn:SL(n.expiresIn),creationTime:Date.now()}}async function PR(n,e){const i=(await e.json()).error;return Fa.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function MR({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function bL(n,{refreshToken:e}){const t=MR(n);return t.append("Authorization",AL(e)),t}async function VR(n){const e=await n();return e.status>=500&&e.status<600?n():e}function SL(n){return Number(n.replace("s","000"))}function AL(n){return`${xR} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RL({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=DR(n),a=MR(n),l=e.getImmediate({optional:!0});if(l){const m=await l.getHeartbeatsHeader();m&&a.append("x-firebase-client",m)}const u={fid:t,authVersion:xR,appId:n.appId,sdkVersion:NR},d={method:"POST",headers:a,body:JSON.stringify(u)},p=await VR(()=>fetch(i,d));if(p.ok){const m=await p.json();return{fid:m.fid||t,registrationStatus:2,refreshToken:m.refreshToken,authToken:kR(m.authToken)}}else throw await PR("Create Installation",p)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LR(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IL(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CL=/^[cdef][\w-]{21}$/,N_="";function NL(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=xL(n);return CL.test(t)?t:N_}catch{return N_}}function xL(n){return IL(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function np(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UR=new Map;function jR(n,e){const t=np(n);FR(t,e),OL(t,e)}function FR(n,e){const t=UR.get(n);if(t)for(const i of t)i(e)}function OL(n,e){const t=DL();t&&t.postMessage({key:n,fid:e}),kL()}let Da=null;function DL(){return!Da&&"BroadcastChannel"in self&&(Da=new BroadcastChannel("[Firebase] FID Change"),Da.onmessage=n=>{FR(n.data.key,n.data.fid)}),Da}function kL(){UR.size===0&&Da&&(Da.close(),Da=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PL="firebase-installations-database",ML=1,za="firebase-installations-store";let Vg=null;function Hy(){return Vg||(Vg=n1(PL,ML,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(za)}}})),Vg}async function gf(n,e){const t=np(n),a=(await Hy()).transaction(za,"readwrite"),l=a.objectStore(za),u=await l.get(t);return await l.put(e,t),await a.done,(!u||u.fid!==e.fid)&&jR(n,e.fid),e}async function zR(n){const e=np(n),i=(await Hy()).transaction(za,"readwrite");await i.objectStore(za).delete(e),await i.done}async function ip(n,e){const t=np(n),a=(await Hy()).transaction(za,"readwrite"),l=a.objectStore(za),u=await l.get(t),d=e(u);return d===void 0?await l.delete(t):await l.put(d,t),await a.done,d&&(!u||u.fid!==d.fid)&&jR(n,d.fid),d}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qy(n){let e;const t=await ip(n.appConfig,i=>{const a=VL(i),l=LL(n,a);return e=l.registrationPromise,l.installationEntry});return t.fid===N_?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function VL(n){const e=n||{fid:NL(),registrationStatus:0};return BR(e)}function LL(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const a=Promise.reject(Fa.create("app-offline"));return{installationEntry:e,registrationPromise:a}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=UL(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:jL(n)}:{installationEntry:e}}async function UL(n,e){try{const t=await RL(n,e);return gf(n.appConfig,t)}catch(t){throw OR(t)&&t.customData.serverCode===409?await zR(n.appConfig):await gf(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function jL(n){let e=await Ib(n.appConfig);for(;e.registrationStatus===1;)await LR(100),e=await Ib(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await qy(n);return i||t}return e}function Ib(n){return ip(n,e=>{if(!e)throw Fa.create("installation-not-found");return BR(e)})}function BR(n){return FL(n)?{fid:n.fid,registrationStatus:0}:n}function FL(n){return n.registrationStatus===1&&n.registrationTime+CR<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zL({appConfig:n,heartbeatServiceProvider:e},t){const i=BL(n,t),a=bL(n,t),l=e.getImmediate({optional:!0});if(l){const m=await l.getHeartbeatsHeader();m&&a.append("x-firebase-client",m)}const u={installation:{sdkVersion:NR,appId:n.appId}},d={method:"POST",headers:a,body:JSON.stringify(u)},p=await VR(()=>fetch(i,d));if(p.ok){const m=await p.json();return kR(m)}else throw await PR("Generate Auth Token",p)}function BL(n,{fid:e}){return`${DR(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gy(n,e=!1){let t;const i=await ip(n.appConfig,l=>{if(!HR(l))throw Fa.create("not-registered");const u=l.authToken;if(!e&&GL(u))return l;if(u.requestStatus===1)return t=HL(n,e),l;{if(!navigator.onLine)throw Fa.create("app-offline");const d=YL(l);return t=qL(n,d),d}});return t?await t:i.authToken}async function HL(n,e){let t=await Cb(n.appConfig);for(;t.authToken.requestStatus===1;)await LR(100),t=await Cb(n.appConfig);const i=t.authToken;return i.requestStatus===0?Gy(n,e):i}function Cb(n){return ip(n,e=>{if(!HR(e))throw Fa.create("not-registered");const t=e.authToken;return $L(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function qL(n,e){try{const t=await zL(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await gf(n.appConfig,i),t}catch(t){if(OR(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await zR(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await gf(n.appConfig,i)}throw t}}function HR(n){return n!==void 0&&n.registrationStatus===2}function GL(n){return n.requestStatus===2&&!WL(n)}function WL(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+vL}function YL(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function $L(n){return n.requestStatus===1&&n.requestTime+CR<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KL(n){const e=n,{installationEntry:t,registrationPromise:i}=await qy(e);return i?i.catch(console.error):Gy(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QL(n,e=!1){const t=n;return await XL(t),(await Gy(t,e)).token}async function XL(n){const{registrationPromise:e}=await qy(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZL(n){if(!n||!n.options)throw Lg("App Configuration");if(!n.name)throw Lg("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Lg(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Lg(n){return Fa.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qR="installations",JL="installations-internal",e3=n=>{const e=n.getProvider("app").getImmediate(),t=ZL(e),i=Br(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},t3=n=>{const e=n.getProvider("app").getImmediate(),t=Br(e,qR).getImmediate();return{getId:()=>KL(t),getToken:a=>QL(t,a)}};function n3(){si(new Hn(qR,e3,"PUBLIC")),si(new Hn(JL,t3,"PRIVATE"))}n3();gn(IR,By);gn(IR,By,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _f="analytics",i3="firebase_id",r3="origin",s3=60*1e3,a3="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Wy="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=new Dc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o3={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Bn=new Wa("analytics","Analytics",o3);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l3(n){if(!n.startsWith(Wy)){const e=Bn.create("invalid-gtag-resource",{gtagURL:n});return Nn.warn(e.message),""}return n}function GR(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function u3(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function c3(n,e){const t=u3("firebase-js-sdk-policy",{createScriptURL:l3}),i=document.createElement("script"),a=`${Wy}?l=${n}&id=${e}`;i.src=t?t==null?void 0:t.createScriptURL(a):a,i.async=!0,document.head.appendChild(i)}function h3(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function d3(n,e,t,i,a,l){const u=i[a];try{if(u)await e[u];else{const p=(await GR(t)).find(m=>m.measurementId===a);p&&await e[p.appId]}}catch(d){Nn.error(d)}n("config",a,l)}async function f3(n,e,t,i,a){try{let l=[];if(a&&a.send_to){let u=a.send_to;Array.isArray(u)||(u=[u]);const d=await GR(t);for(const p of u){const m=d.find(E=>E.measurementId===p),y=m&&e[m.appId];if(y)l.push(y);else{l=[];break}}}l.length===0&&(l=Object.values(e)),await Promise.all(l),n("event",i,a||{})}catch(l){Nn.error(l)}}function p3(n,e,t,i){async function a(l,...u){try{if(l==="event"){const[d,p]=u;await f3(n,e,t,d,p)}else if(l==="config"){const[d,p]=u;await d3(n,e,t,i,d,p)}else if(l==="consent"){const[d,p]=u;n("consent",d,p)}else if(l==="get"){const[d,p,m]=u;n("get",d,p,m)}else if(l==="set"){const[d]=u;n("set",d)}else n(l,...u)}catch(d){Nn.error(d)}}return a}function m3(n,e,t,i,a){let l=function(...u){window[i].push(arguments)};return window[a]&&typeof window[a]=="function"&&(l=window[a]),window[a]=p3(l,n,e,t),{gtagCore:l,wrappedGtag:window[a]}}function g3(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Wy)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _3=30,y3=1e3;class v3{constructor(e={},t=y3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const WR=new v3;function E3(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function T3(n){var e;const{appId:t,apiKey:i}=n,a={method:"GET",headers:E3(i)},l=a3.replace("{app-id}",t),u=await fetch(l,a);if(u.status!==200&&u.status!==304){let d="";try{const p=await u.json();!((e=p.error)===null||e===void 0)&&e.message&&(d=p.error.message)}catch{}throw Bn.create("config-fetch-failed",{httpStatus:u.status,responseMessage:d})}return u.json()}async function w3(n,e=WR,t){const{appId:i,apiKey:a,measurementId:l}=n.options;if(!i)throw Bn.create("no-app-id");if(!a){if(l)return{measurementId:l,appId:i};throw Bn.create("no-api-key")}const u=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},d=new A3;return setTimeout(async()=>{d.abort()},s3),YR({appId:i,apiKey:a,measurementId:l},u,d,e)}async function YR(n,{throttleEndTimeMillis:e,backoffCount:t},i,a=WR){var l;const{appId:u,measurementId:d}=n;try{await b3(i,e)}catch(p){if(d)return Nn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:u,measurementId:d};throw p}try{const p=await T3(n);return a.deleteThrottleMetadata(u),p}catch(p){const m=p;if(!S3(m)){if(a.deleteThrottleMetadata(u),d)return Nn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${m==null?void 0:m.message}]`),{appId:u,measurementId:d};throw p}const y=Number((l=m==null?void 0:m.customData)===null||l===void 0?void 0:l.httpStatus)===503?tw(t,a.intervalMillis,_3):tw(t,a.intervalMillis),E={throttleEndTimeMillis:Date.now()+y,backoffCount:t+1};return a.setThrottleMetadata(u,E),Nn.debug(`Calling attemptFetch again in ${y} millis`),YR(n,E,i,a)}}function b3(n,e){return new Promise((t,i)=>{const a=Math.max(e-Date.now(),0),l=setTimeout(t,a);n.addEventListener(()=>{clearTimeout(l),i(Bn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function S3(n){if(!(n instanceof ai)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class A3{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function R3(n,e,t,i,a){if(a&&a.global){n("event",t,i);return}else{const l=await e,u=Object.assign(Object.assign({},i),{send_to:l});n("event",t,u)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I3(){if(XS())try{await ZS()}catch(n){return Nn.warn(Bn.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Nn.warn(Bn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function C3(n,e,t,i,a,l,u){var d;const p=w3(n);p.then(I=>{t[I.measurementId]=I.appId,n.options.measurementId&&I.measurementId!==n.options.measurementId&&Nn.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${I.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(I=>Nn.error(I)),e.push(p);const m=I3().then(I=>{if(I)return i.getId()}),[y,E]=await Promise.all([p,m]);g3(l)||c3(l,y.measurementId),a("js",new Date);const w=(d=u==null?void 0:u.config)!==null&&d!==void 0?d:{};return w[r3]="firebase",w.update=!0,E!=null&&(w[i3]=E),a("config",y.measurementId,w),y.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N3{constructor(e){this.app=e}_delete(){return delete sc[this.app.options.appId],Promise.resolve()}}let sc={},Nb=[];const xb={};let Ug="dataLayer",x3="gtag",Ob,$R,Db=!1;function O3(){const n=[];if(KS()&&n.push("This is a browser extension environment."),_O()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,a)=>`(${a+1}) ${i}`).join(" "),t=Bn.create("invalid-analytics-context",{errorInfo:e});Nn.warn(t.message)}}function D3(n,e,t){O3();const i=n.options.appId;if(!i)throw Bn.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Nn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Bn.create("no-api-key");if(sc[i]!=null)throw Bn.create("already-exists",{id:i});if(!Db){h3(Ug);const{wrappedGtag:l,gtagCore:u}=m3(sc,Nb,xb,Ug,x3);$R=l,Ob=u,Db=!0}return sc[i]=C3(n,Nb,xb,e,Ob,Ug,t),new N3(n)}function k3(n=kc()){n=ct(n);const e=Br(n,_f);return e.isInitialized()?e.getImmediate():P3(n)}function P3(n,e={}){const t=Br(n,_f);if(t.isInitialized()){const a=t.getImmediate();if(Pr(e,t.getOptions()))return a;throw Bn.create("already-initialized")}return t.initialize({options:e})}function M3(n,e,t,i){n=ct(n),R3($R,sc[n.app.options.appId],e,t,i).catch(a=>Nn.error(a))}const kb="@firebase/analytics",Pb="0.10.16";function V3(){si(new Hn(_f,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),a=e.getProvider("installations-internal").getImmediate();return D3(i,a,t)},"PUBLIC")),si(new Hn("analytics-internal",n,"PRIVATE")),gn(kb,Pb),gn(kb,Pb,"esm2017");function n(e){try{const t=e.getProvider(_f).getImmediate();return{logEvent:(i,a,l)=>M3(t,i,a,l)}}catch(t){throw Bn.create("interop-component-reg-failed",{reason:t})}}}V3();var Mb={};const Vb="@firebase/database",Lb="1.0.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let KR="";function L3(n){KR=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U3{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),jt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:dc(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j3{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return zr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QR=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new U3(e)}}catch{}return new j3},ka=QR("localStorage"),F3=QR("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rl=new Dc("@firebase/database"),z3=function(){let n=1;return function(){return n++}}(),XR=function(n){const e=IO(n),t=new bO;t.update(e);const i=t.digest();return Q_.encodeByteArray(i)},Hc=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Hc.apply(null,i):typeof i=="object"?e+=jt(i):e+=i,e+=" "}return e};let ac=null,Ub=!0;const B3=function(n,e){oe(!0,"Can't turn on custom loggers persistently."),rl.logLevel=Le.VERBOSE,ac=rl.log.bind(rl)},mn=function(...n){if(Ub===!0&&(Ub=!1,ac===null&&F3.get("logging_enabled")===!0&&B3()),ac){const e=Hc.apply(null,n);ac(e)}},qc=function(n){return function(...e){mn(n,...e)}},x_=function(...n){const e="FIREBASE INTERNAL ERROR: "+Hc(...n);rl.error(e)},jr=function(...n){const e=`FIREBASE FATAL ERROR: ${Hc(...n)}`;throw rl.error(e),new Error(e)},xn=function(...n){const e="FIREBASE WARNING: "+Hc(...n);rl.warn(e)},H3=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&xn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ZR=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},q3=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},pl="[MIN_NAME]",Ba="[MAX_NAME]",Cl=function(n,e){if(n===e)return 0;if(n===pl||e===Ba)return-1;if(e===pl||n===Ba)return 1;{const t=jb(n),i=jb(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},G3=function(n,e){return n===e?0:n<e?-1:1},Hu=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+jt(e))},Yy=function(n){if(typeof n!="object"||n===null)return jt(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=jt(e[i]),t+=":",t+=Yy(n[e[i]]);return t+="}",t},JR=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let a=0;a<t;a+=e)a+e>t?i.push(n.substring(a,t)):i.push(n.substring(a,a+e));return i};function On(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const eI=function(n){oe(!ZR(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let a,l,u,d,p;n===0?(l=0,u=0,a=1/n===-1/0?1:0):(a=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(d=Math.min(Math.floor(Math.log(n)/Math.LN2),i),l=d+i,u=Math.round(n*Math.pow(2,t-d)-Math.pow(2,t))):(l=0,u=Math.round(n/Math.pow(2,1-i-t))));const m=[];for(p=t;p;p-=1)m.push(u%2?1:0),u=Math.floor(u/2);for(p=e;p;p-=1)m.push(l%2?1:0),l=Math.floor(l/2);m.push(a?1:0),m.reverse();const y=m.join("");let E="";for(p=0;p<64;p+=8){let w=parseInt(y.substr(p,8),2).toString(16);w.length===1&&(w="0"+w),E=E+w}return E.toLowerCase()},W3=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Y3=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function $3(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const K3=new RegExp("^-?(0*)\\d{1,10}$"),Q3=-2147483648,X3=2147483647,jb=function(n){if(K3.test(n)){const e=Number(n);if(e>=Q3&&e<=X3)return e}return null},Nl=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw xn("Exception was thrown by user callback.",t),e},Math.floor(0))}},Z3=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},oc=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J3{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,wn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){xn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e6{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(a=>this.auth_=a)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(mn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',xn(e)}}class Hd{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Hd.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $y="5",tI="v",nI="s",iI="r",rI="f",sI=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,aI="ls",oI="p",O_="ac",lI="websocket",uI="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(e,t,i,a,l=!1,u="",d=!1,p=!1,m=null){this.secure=t,this.namespace=i,this.webSocketOnly=a,this.nodeAdmin=l,this.persistenceKey=u,this.includeNamespaceInQueryParams=d,this.isUsingEmulator=p,this.emulatorOptions=m,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ka.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ka.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function t6(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function hI(n,e,t){oe(typeof e=="string","typeof type must == string"),oe(typeof t=="object","typeof params must == object");let i;if(e===lI)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===uI)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);t6(n)&&(t.ns=n.namespace);const a=[];return On(t,(l,u)=>{a.push(l+"="+u)}),i+a.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n6{constructor(){this.counters_={}}incrementCounter(e,t=1){zr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return rO(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg={},Fg={};function Ky(n){const e=n.toString();return jg[e]||(jg[e]=new n6),jg[e]}function i6(n,e){const t=n.toString();return Fg[t]||(Fg[t]=e()),Fg[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r6{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let a=0;a<i.length;++a)i[a]&&Nl(()=>{this.onMessage_(i[a])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fb="start",s6="close",a6="pLPCommand",o6="pRTLPCB",dI="id",fI="pw",pI="ser",l6="cb",u6="seg",c6="ts",h6="d",d6="dframe",mI=1870,gI=30,f6=mI-gI,p6=25e3,m6=3e4;class Zo{constructor(e,t,i,a,l,u,d){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=a,this.authToken=l,this.transportSessionId=u,this.lastSessionId=d,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=qc(e),this.stats_=Ky(t),this.urlFn=p=>(this.appCheckToken&&(p[O_]=this.appCheckToken),hI(t,uI,p))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new r6(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(m6)),q3(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Qy((...l)=>{const[u,d,p,m,y]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===Fb)this.id=d,this.password=p;else if(u===s6)d?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(d,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...l)=>{const[u,d]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(u,d)},()=>{this.onClosed_()},this.urlFn);const i={};i[Fb]="t",i[pI]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[l6]=this.scriptTagHolder.uniqueCallbackIdentifier),i[tI]=$y,this.transportSessionId&&(i[nI]=this.transportSessionId),this.lastSessionId&&(i[aI]=this.lastSessionId),this.applicationId&&(i[oI]=this.applicationId),this.appCheckToken&&(i[O_]=this.appCheckToken),typeof location<"u"&&location.hostname&&sI.test(location.hostname)&&(i[iI]=rI);const a=this.urlFn(i);this.log_("Connecting via long-poll to "+a),this.scriptTagHolder.addTag(a,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Zo.forceAllow_=!0}static forceDisallow(){Zo.forceDisallow_=!0}static isAvailable(){return Zo.forceAllow_?!0:!Zo.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!W3()&&!Y3()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=jt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=qS(t),a=JR(i,f6);for(let l=0;l<a.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,a.length,a[l]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[d6]="t",i[dI]=e,i[fI]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=jt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Qy{constructor(e,t,i,a){this.onDisconnect=i,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=z3(),window[a6+this.uniqueCallbackIdentifier]=e,window[o6+this.uniqueCallbackIdentifier]=t,this.myIFrame=Qy.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(d){mn("frame writing exception"),d.stack&&mn(d.stack),mn(d)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||mn("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[dI]=this.myID,e[fI]=this.myPW,e[pI]=this.currentSerial;let t=this.urlFn(e),i="",a=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+gI+i.length<=mI;){const u=this.pendingSegs.shift();i=i+"&"+u6+a+"="+u.seg+"&"+c6+a+"="+u.ts+"&"+h6+a+"="+u.d,a++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},a=setTimeout(i,Math.floor(p6)),l=()=>{clearTimeout(a),i()};this.addTag(e,l)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const a=i.readyState;(!a||a==="loaded"||a==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{mn("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g6=16384,_6=45e3;let yf=null;typeof MozWebSocket<"u"?yf=MozWebSocket:typeof WebSocket<"u"&&(yf=WebSocket);class pi{constructor(e,t,i,a,l,u,d){this.connId=e,this.applicationId=i,this.appCheckToken=a,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=qc(this.connId),this.stats_=Ky(t),this.connURL=pi.connectionURL_(t,u,d,a,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,a,l){const u={};return u[tI]=$y,typeof location<"u"&&location.hostname&&sI.test(location.hostname)&&(u[iI]=rI),t&&(u[nI]=t),i&&(u[aI]=i),a&&(u[O_]=a),l&&(u[oI]=l),hI(e,lI,u)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ka.set("previous_websocket_failure",!0);try{let i;mO(),this.mySock=new yf(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const a=i.message||i.data;a&&this.log_(a),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const a=i.message||i.data;a&&this.log_(a),this.onClosed_()}}start(){}static forceDisallow(){pi.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&yf!==null&&!pi.forceDisallow_}static previouslyFailed(){return ka.isInMemoryStorage||ka.get("previous_websocket_failure")===!0}markConnectionHealthy(){ka.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=dc(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(oe(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=jt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=JR(t,g6);i.length>1&&this.sendString_(String(i.length));for(let a=0;a<i.length;a++)this.sendString_(i[a])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(_6))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}pi.responsesRequiredToBeHealthy=2;pi.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{static get ALL_TRANSPORTS(){return[Zo,pi]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=pi&&pi.isAvailable();let i=t&&!pi.previouslyFailed();if(e.webSocketOnly&&(t||xn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[pi];else{const a=this.transports_=[];for(const l of Tc.ALL_TRANSPORTS)l&&l.isAvailable()&&a.push(l);Tc.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Tc.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y6=6e4,v6=5e3,E6=10*1024,T6=100*1024,zg="t",zb="d",w6="s",Bb="r",b6="e",Hb="o",qb="a",Gb="n",Wb="p",S6="h";class A6{constructor(e,t,i,a,l,u,d,p,m,y){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=a,this.authToken_=l,this.onMessage_=u,this.onReady_=d,this.onDisconnect_=p,this.onKill_=m,this.lastSessionId=y,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=qc("c:"+this.id+":"),this.transportManager_=new Tc(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const a=e.healthyTimeout||0;a>0&&(this.healthyTimeout_=oc(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>T6?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>E6?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(a)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(zg in e){const t=e[zg];t===qb?this.upgradeIfSecondaryHealthy_():t===Bb?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Hb&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Hu("t",e),i=Hu("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Wb,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:qb,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Gb,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Hu("t",e),i=Hu("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Hu(zg,e);if(zb in e){const i=e[zb];if(t===S6){const a=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(a.h=this.repoInfo_.host),this.onHandshake_(a)}else if(t===Gb){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let a=0;a<this.pendingDataMessages.length;++a)this.onDataMessage_(this.pendingDataMessages[a]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===w6?this.onConnectionShutdown_(i):t===Bb?this.onReset_(i):t===b6?x_("Server Error: "+i):t===Hb?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):x_("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,a=e.h;this.sessionId=e.s,this.repoInfo_.host=a,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),$y!==i&&xn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),oc(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(y6))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):oc(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(v6))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Wb,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ka.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{put(e,t,i,a){}merge(e,t,i,a){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(e){this.allowedEvents_=e,this.listeners_={},oe(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let a=0;a<i.length;a++)i[a].callback.apply(i[a].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const a=this.getInitialEvent(e);a&&t.apply(i,a)}off(e,t,i){this.validateEventType_(e);const a=this.listeners_[e]||[];for(let l=0;l<a.length;l++)if(a[l].callback===t&&(!i||i===a[l].context)){a.splice(l,1);return}}validateEventType_(e){oe(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf extends yI{static getInstance(){return new vf}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!J_()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return oe(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yb=32,$b=768;class st{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[i]=this.pieces_[a],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function We(){return new st("")}function je(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Fs(n){return n.pieces_.length-n.pieceNum_}function lt(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new st(n.pieces_,e)}function vI(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function R6(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function EI(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function TI(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new st(e,0)}function zt(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof st)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let a=0;a<i.length;a++)i[a].length>0&&t.push(i[a])}return new st(t,0)}function Ue(n){return n.pieceNum_>=n.pieces_.length}function bn(n,e){const t=je(n),i=je(e);if(t===null)return e;if(t===i)return bn(lt(n),lt(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function wI(n,e){if(Fs(n)!==Fs(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function _i(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Fs(n)>Fs(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class I6{constructor(e,t){this.errorPrefix_=t,this.parts_=EI(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Uf(this.parts_[i]);bI(this)}}function C6(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Uf(e),bI(n)}function N6(n){const e=n.parts_.pop();n.byteLength_-=Uf(e),n.parts_.length>0&&(n.byteLength_-=1)}function bI(n){if(n.byteLength_>$b)throw new Error(n.errorPrefix_+"has a key path longer than "+$b+" bytes ("+n.byteLength_+").");if(n.parts_.length>Yb)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Yb+") or object contains a cycle "+xa(n))}function xa(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy extends yI{static getInstance(){return new Xy}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return oe(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu=1e3,x6=60*5*1e3,Kb=30*1e3,O6=1.3,D6=3e4,k6="server_kill",Qb=3;class Dr extends _I{constructor(e,t,i,a,l,u,d,p){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=a,this.onServerInfoUpdate_=l,this.authTokenProvider_=u,this.appCheckTokenProvider_=d,this.authOverride_=p,this.id=Dr.nextPersistentConnectionId_++,this.log_=qc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=qu,this.maxReconnectDelay_=x6,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Xy.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&vf.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const a=++this.requestNumber_,l={r:a,a:e,b:t};this.log_(jt(l)),oe(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),i&&(this.requestCBHash_[a]=i)}get(e){this.initConnection_();const t=new Mf,a={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:u=>{const d=u.d;u.s==="ok"?t.resolve(d):t.reject(d)}};this.outstandingGets_.push(a),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),t.promise}listen(e,t,i,a){this.initConnection_();const l=e._queryIdentifier,u=e._path.toString();this.log_("Listen called for "+u+" "+l),this.listens.has(u)||this.listens.set(u,new Map),oe(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),oe(!this.listens.get(u).has(l),"listen() called twice for same path/queryId.");const d={onComplete:a,hashFn:t,query:e,tag:i};this.listens.get(u).set(l,d),this.connected_&&this.sendListen_(d)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),a=t._queryIdentifier;this.log_("Listen on "+i+" for "+a);const l={p:i},u="q";e.tag&&(l.q=t._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(u,l,d=>{const p=d.d,m=d.s;Dr.warnOnListenWarnings_(p,t),(this.listens.get(i)&&this.listens.get(i).get(a))===e&&(this.log_("listen response",d),m!=="ok"&&this.removeListen_(i,a),e.onComplete&&e.onComplete(m,p))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&zr(e,"w")){const i=al(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const a='".indexOn": "'+t._queryParams.getIndex().toString()+'"',l=t._path.toString();xn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${a} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||wO(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Kb)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=TO(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,a=>{const l=a.s,u=a.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),a=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+a),oe(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,a)&&this.connected_&&this.sendUnlisten_(i,a,e._queryObject,t)}sendUnlisten_(e,t,i,a){this.log_("Unlisten on "+e+" for "+t);const l={p:e},u="n";a&&(l.q=i,l.t=a),this.sendRequest(u,l)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,a){const l={p:t,d:i};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,u=>{a&&setTimeout(()=>{a(u.s,u.d)},Math.floor(0))})}put(e,t,i,a){this.putInternal("p",e,t,i,a)}merge(e,t,i,a){this.putInternal("m",e,t,i,a)}putInternal(e,t,i,a,l){this.initConnection_();const u={p:t,d:i};l!==void 0&&(u.h=l),this.outstandingPuts_.push({action:e,request:u,onComplete:a}),this.outstandingPutCount_++;const d=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(d):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,a=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,l=>{this.log_(t+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),a&&a(l.s,l.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const l=i.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+jt(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):x_("Unrecognized action received from server: "+jt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){oe(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=qu,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=qu,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>D6&&(this.reconnectDelay_=qu),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*O6)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),a=this.id+":"+Dr.nextConnectionId_++,l=this.lastSessionId;let u=!1,d=null;const p=function(){d?d.close():(u=!0,i())},m=function(E){oe(d,"sendRequest call when we're not connected not allowed."),d.sendRequest(E)};this.realtime_={close:p,sendRequest:m};const y=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[E,w]=await Promise.all([this.authTokenProvider_.getToken(y),this.appCheckTokenProvider_.getToken(y)]);u?mn("getToken() completed but was canceled"):(mn("getToken() completed. Creating connection."),this.authToken_=E&&E.accessToken,this.appCheckToken_=w&&w.token,d=new A6(a,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,I=>{xn(I+" ("+this.repoInfo_.toString()+")"),this.interrupt(k6)},l))}catch(E){this.log_("Failed to get token: "+E),u||(this.repoInfo_.nodeAdmin&&xn(E),p())}}}interrupt(e){mn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){mn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],n_(this.interruptReasons_)&&(this.reconnectDelay_=qu,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(l=>Yy(l)).join("$"):i="default";const a=this.removeListen_(e,i);a&&a.onComplete&&a.onComplete("permission_denied")}removeListen_(e,t){const i=new st(e).toString();let a;if(this.listens.has(i)){const l=this.listens.get(i);a=l.get(t),l.delete(t),l.size===0&&this.listens.delete(i)}else a=void 0;return a}onAuthRevoked_(e,t){mn("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Qb&&(this.reconnectDelay_=Kb,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){mn("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Qb&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+KR.replace(/\./g,"-")]=1,J_()?e["framework.cordova"]=1:QS()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=vf.getInstance().currentlyOnline();return n_(this.interruptReasons_)&&e}}Dr.nextPersistentConnectionId_=0;Dr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Pe(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new Pe(pl,e),a=new Pe(pl,t);return this.compare(i,a)!==0}minPost(){return Pe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cd;class SI extends rp{static get __EMPTY_NODE(){return Cd}static set __EMPTY_NODE(e){Cd=e}compare(e,t){return Cl(e.name,t.name)}isDefinedOn(e){throw Tl("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Pe.MIN}maxPost(){return new Pe(Ba,Cd)}makePost(e,t){return oe(typeof e=="string","KeyIndex indexValue must always be a string."),new Pe(e,Cd)}toString(){return".key"}}const sl=new SI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(e,t,i,a,l=null){this.isReverse_=a,this.resultGenerator_=l,this.nodeStack_=[];let u=1;for(;!e.isEmpty();)if(e=e,u=t?i(e.key,t):1,a&&(u*=-1),u<0)this.isReverse_?e=e.left:e=e.right;else if(u===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Zt{constructor(e,t,i,a,l){this.key=e,this.value=t,this.color=i??Zt.RED,this.left=a??Cn.EMPTY_NODE,this.right=l??Cn.EMPTY_NODE}copy(e,t,i,a,l){return new Zt(e??this.key,t??this.value,i??this.color,a??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let a=this;const l=i(e,a.key);return l<0?a=a.copy(null,null,null,a.left.insert(e,t,i),null):l===0?a=a.copy(null,t,null,null,null):a=a.copy(null,null,null,null,a.right.insert(e,t,i)),a.fixUp_()}removeMin_(){if(this.left.isEmpty())return Cn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,a;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return Cn.EMPTY_NODE;a=i.right.min_(),i=i.copy(a.key,a.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Zt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Zt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Zt.RED=!0;Zt.BLACK=!1;class P6{copy(e,t,i,a,l){return this}insert(e,t,i){return new Zt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Cn{constructor(e,t=Cn.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Cn(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Zt.BLACK,null,null))}remove(e){return new Cn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Zt.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,a=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return a?a.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(a=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Nd(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Nd(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Nd(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Nd(this.root_,null,this.comparator_,!0,e)}}Cn.EMPTY_NODE=new P6;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M6(n,e){return Cl(n.name,e.name)}function Zy(n,e){return Cl(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let D_;function V6(n){D_=n}const AI=function(n){return typeof n=="number"?"number:"+eI(n):"string:"+n},RI=function(n){if(n.isLeafNode()){const e=n.val();oe(typeof e=="string"||typeof e=="number"||typeof e=="object"&&zr(e,".sv"),"Priority must be a string or number.")}else oe(n===D_||n.isEmpty(),"priority of unexpected type.");oe(n===D_||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xb;class Qt{static set __childrenNodeConstructor(e){Xb=e}static get __childrenNodeConstructor(){return Xb}constructor(e,t=Qt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,oe(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),RI(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Qt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Qt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ue(e)?this:je(e)===".priority"?this.priorityNode_:Qt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Qt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=je(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(oe(i!==".priority"||Fs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Qt.__childrenNodeConstructor.EMPTY_NODE.updateChild(lt(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+AI(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=eI(this.value_):e+=this.value_,this.lazyHash_=XR(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Qt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Qt.__childrenNodeConstructor?-1:(oe(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,a=Qt.VALUE_TYPE_ORDER.indexOf(t),l=Qt.VALUE_TYPE_ORDER.indexOf(i);return oe(a>=0,"Unknown leaf type: "+t),oe(l>=0,"Unknown leaf type: "+i),a===l?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-a}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Qt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let II,CI;function L6(n){II=n}function U6(n){CI=n}class j6 extends rp{compare(e,t){const i=e.node.getPriority(),a=t.node.getPriority(),l=i.compareTo(a);return l===0?Cl(e.name,t.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Pe.MIN}maxPost(){return new Pe(Ba,new Qt("[PRIORITY-POST]",CI))}makePost(e,t){const i=II(e);return new Pe(t,new Qt("[PRIORITY-POST]",i))}toString(){return".priority"}}const wt=new j6;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F6=Math.log(2);class z6{constructor(e){const t=l=>parseInt(Math.log(l)/F6,10),i=l=>parseInt(Array(l+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const a=i(this.count);this.bits_=e+1&a}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ef=function(n,e,t,i){n.sort(e);const a=function(p,m){const y=m-p;let E,w;if(y===0)return null;if(y===1)return E=n[p],w=t?t(E):E,new Zt(w,E.node,Zt.BLACK,null,null);{const I=parseInt(y/2,10)+p,C=a(p,I),B=a(I+1,m);return E=n[I],w=t?t(E):E,new Zt(w,E.node,Zt.BLACK,C,B)}},l=function(p){let m=null,y=null,E=n.length;const w=function(C,B){const j=E-C,$=E;E-=C;const K=a(j+1,$),te=n[j],re=t?t(te):te;I(new Zt(re,te.node,B,null,K))},I=function(C){m?(m.left=C,m=C):(y=C,m=C)};for(let C=0;C<p.count;++C){const B=p.nextBitIsOne(),j=Math.pow(2,p.count-(C+1));B?w(j,Zt.BLACK):(w(j,Zt.BLACK),w(j,Zt.RED))}return y},u=new z6(n.length),d=l(u);return new Cn(i||e,d)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bg;const Go={};class Nr{static get Default(){return oe(Go&&wt,"ChildrenNode.ts has not been loaded"),Bg=Bg||new Nr({".priority":Go},{".priority":wt}),Bg}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=al(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Cn?t:null}hasIndex(e){return zr(this.indexSet_,e.toString())}addIndex(e,t){oe(e!==sl,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let a=!1;const l=t.getIterator(Pe.Wrap);let u=l.getNext();for(;u;)a=a||e.isDefinedOn(u.node),i.push(u),u=l.getNext();let d;a?d=Ef(i,e.getCompare()):d=Go;const p=e.toString(),m=Object.assign({},this.indexSet_);m[p]=e;const y=Object.assign({},this.indexes_);return y[p]=d,new Nr(y,m)}addToIndexes(e,t){const i=Yd(this.indexes_,(a,l)=>{const u=al(this.indexSet_,l);if(oe(u,"Missing index implementation for "+l),a===Go)if(u.isDefinedOn(e.node)){const d=[],p=t.getIterator(Pe.Wrap);let m=p.getNext();for(;m;)m.name!==e.name&&d.push(m),m=p.getNext();return d.push(e),Ef(d,u.getCompare())}else return Go;else{const d=t.get(e.name);let p=a;return d&&(p=p.remove(new Pe(e.name,d))),p.insert(e,e.node)}});return new Nr(i,this.indexSet_)}removeFromIndexes(e,t){const i=Yd(this.indexes_,a=>{if(a===Go)return a;{const l=t.get(e.name);return l?a.remove(new Pe(e.name,l)):a}});return new Nr(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gu;class we{static get EMPTY_NODE(){return Gu||(Gu=new we(new Cn(Zy),null,Nr.Default))}constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&RI(this.priorityNode_),this.children_.isEmpty()&&oe(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Gu}updatePriority(e){return this.children_.isEmpty()?this:new we(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Gu:t}}getChild(e){const t=je(e);return t===null?this:this.getImmediateChild(t).getChild(lt(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(oe(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new Pe(e,t);let a,l;t.isEmpty()?(a=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(i,this.children_)):(a=this.children_.insert(e,t),l=this.indexMap_.addToIndexes(i,this.children_));const u=a.isEmpty()?Gu:this.priorityNode_;return new we(a,u,l)}}updateChild(e,t){const i=je(e);if(i===null)return t;{oe(je(e)!==".priority"||Fs(e)===1,".priority must be the last token in a path");const a=this.getImmediateChild(i).updateChild(lt(e),t);return this.updateImmediateChild(i,a)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,a=0,l=!0;if(this.forEachChild(wt,(u,d)=>{t[u]=d.val(e),i++,l&&we.INTEGER_REGEXP_.test(u)?a=Math.max(a,Number(u)):l=!1}),!e&&l&&a<2*i){const u=[];for(const d in t)u[d]=t[d];return u}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+AI(this.getPriority().val())+":"),this.forEachChild(wt,(t,i)=>{const a=i.hash();a!==""&&(e+=":"+t+":"+a)}),this.lazyHash_=e===""?"":XR(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const a=this.resolveIndex_(i);if(a){const l=a.getPredecessorKey(new Pe(e,t));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Pe(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Pe(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(a=>t(a.name,a.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,a=>a);{const a=this.children_.getIteratorFrom(e.name,Pe.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)<0;)a.getNext(),l=a.peek();return a}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,a=>a);{const a=this.children_.getReverseIteratorFrom(e.name,Pe.Wrap);let l=a.peek();for(;l!=null&&t.compare(l,e)>0;)a.getNext(),l=a.peek();return a}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Gc?-1:0}withIndex(e){if(e===sl||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new we(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===sl||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(wt),a=t.getIterator(wt);let l=i.getNext(),u=a.getNext();for(;l&&u;){if(l.name!==u.name||!l.node.equals(u.node))return!1;l=i.getNext(),u=a.getNext()}return l===null&&u===null}else return!1;else return!1}}resolveIndex_(e){return e===sl?null:this.indexMap_.get(e.toString())}}we.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class B6 extends we{constructor(){super(new Cn(Zy),we.EMPTY_NODE,Nr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return we.EMPTY_NODE}isEmpty(){return!1}}const Gc=new B6;Object.defineProperties(Pe,{MIN:{value:new Pe(pl,we.EMPTY_NODE)},MAX:{value:new Pe(Ba,Gc)}});SI.__EMPTY_NODE=we.EMPTY_NODE;Qt.__childrenNodeConstructor=we;V6(Gc);U6(Gc);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H6=!0;function Jt(n,e=null){if(n===null)return we.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),oe(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Qt(t,Jt(e))}if(!(n instanceof Array)&&H6){const t=[];let i=!1;if(On(n,(u,d)=>{if(u.substring(0,1)!=="."){const p=Jt(d);p.isEmpty()||(i=i||!p.getPriority().isEmpty(),t.push(new Pe(u,p)))}}),t.length===0)return we.EMPTY_NODE;const l=Ef(t,M6,u=>u.name,Zy);if(i){const u=Ef(t,wt.getCompare());return new we(l,Jt(e),new Nr({".priority":u},{".priority":wt}))}else return new we(l,Jt(e),Nr.Default)}else{let t=we.EMPTY_NODE;return On(n,(i,a)=>{if(zr(n,i)&&i.substring(0,1)!=="."){const l=Jt(a);(l.isLeafNode()||!l.isEmpty())&&(t=t.updateImmediateChild(i,l))}}),t.updatePriority(Jt(e))}}L6(Jt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q6 extends rp{constructor(e){super(),this.indexPath_=e,oe(!Ue(e)&&je(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),a=this.extractChild(t.node),l=i.compareTo(a);return l===0?Cl(e.name,t.name):l}makePost(e,t){const i=Jt(e),a=we.EMPTY_NODE.updateChild(this.indexPath_,i);return new Pe(t,a)}maxPost(){const e=we.EMPTY_NODE.updateChild(this.indexPath_,Gc);return new Pe(Ba,e)}toString(){return EI(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G6 extends rp{compare(e,t){const i=e.node.compareTo(t.node);return i===0?Cl(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Pe.MIN}maxPost(){return Pe.MAX}makePost(e,t){const i=Jt(e);return new Pe(t,i)}toString(){return".value"}}const W6=new G6;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NI(n){return{type:"value",snapshotNode:n}}function ml(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function wc(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function bc(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Y6(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(e){this.index_=e}updateChild(e,t,i,a,l,u){oe(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const d=e.getImmediateChild(t);return d.getChild(a).equals(i.getChild(a))&&d.isEmpty()===i.isEmpty()||(u!=null&&(i.isEmpty()?e.hasChild(t)?u.trackChildChange(wc(t,d)):oe(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):d.isEmpty()?u.trackChildChange(ml(t,i)):u.trackChildChange(bc(t,i,d))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(wt,(a,l)=>{t.hasChild(a)||i.trackChildChange(wc(a,l))}),t.isLeafNode()||t.forEachChild(wt,(a,l)=>{if(e.hasChild(a)){const u=e.getImmediateChild(a);u.equals(l)||i.trackChildChange(bc(a,l,u))}else i.trackChildChange(ml(a,l))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?we.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e){this.indexedFilter_=new Jy(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Sc.getStartPost_(e),this.endPost_=Sc.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,a,l,u){return this.matches(new Pe(t,i))||(i=we.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,a,l,u)}updateFullNode(e,t,i){t.isLeafNode()&&(t=we.EMPTY_NODE);let a=t.withIndex(this.index_);a=a.updatePriority(we.EMPTY_NODE);const l=this;return t.forEachChild(wt,(u,d)=>{l.matches(new Pe(u,d))||(a=a.updateImmediateChild(u,we.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,a,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $6{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Sc(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,a,l,u){return this.rangedFilter_.matches(new Pe(t,i))||(i=we.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,a,l,u):this.fullLimitUpdateChild_(e,t,i,l,u)}updateFullNode(e,t,i){let a;if(t.isLeafNode()||t.isEmpty())a=we.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){a=we.EMPTY_NODE.withIndex(this.index_);let l;this.reverse_?l=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):l=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let u=0;for(;l.hasNext()&&u<this.limit_;){const d=l.getNext();if(this.withinDirectionalStart(d))if(this.withinDirectionalEnd(d))a=a.updateImmediateChild(d.name,d.node),u++;else break;else continue}}else{a=t.withIndex(this.index_),a=a.updatePriority(we.EMPTY_NODE);let l;this.reverse_?l=a.getReverseIterator(this.index_):l=a.getIterator(this.index_);let u=0;for(;l.hasNext();){const d=l.getNext();u<this.limit_&&this.withinDirectionalStart(d)&&this.withinDirectionalEnd(d)?u++:a=a.updateImmediateChild(d.name,we.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,a,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,a,l){let u;if(this.reverse_){const E=this.index_.getCompare();u=(w,I)=>E(I,w)}else u=this.index_.getCompare();const d=e;oe(d.numChildren()===this.limit_,"");const p=new Pe(t,i),m=this.reverse_?d.getFirstChild(this.index_):d.getLastChild(this.index_),y=this.rangedFilter_.matches(p);if(d.hasChild(t)){const E=d.getImmediateChild(t);let w=a.getChildAfterChild(this.index_,m,this.reverse_);for(;w!=null&&(w.name===t||d.hasChild(w.name));)w=a.getChildAfterChild(this.index_,w,this.reverse_);const I=w==null?1:u(w,p);if(y&&!i.isEmpty()&&I>=0)return l!=null&&l.trackChildChange(bc(t,i,E)),d.updateImmediateChild(t,i);{l!=null&&l.trackChildChange(wc(t,E));const B=d.updateImmediateChild(t,we.EMPTY_NODE);return w!=null&&this.rangedFilter_.matches(w)?(l!=null&&l.trackChildChange(ml(w.name,w.node)),B.updateImmediateChild(w.name,w.node)):B}}else return i.isEmpty()?e:y&&u(m,p)>=0?(l!=null&&(l.trackChildChange(wc(m.name,m.node)),l.trackChildChange(ml(t,i))),d.updateImmediateChild(t,i).updateImmediateChild(m.name,we.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=wt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return oe(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return oe(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:pl}hasEnd(){return this.endSet_}getIndexEndValue(){return oe(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return oe(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ba}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return oe(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===wt}copy(){const e=new ev;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function K6(n){return n.loadsAllData()?new Jy(n.getIndex()):n.hasLimit()?new $6(n):new Sc(n)}function Zb(n){const e={};if(n.isDefault())return e;let t;if(n.index_===wt?t="$priority":n.index_===W6?t="$value":n.index_===sl?t="$key":(oe(n.index_ instanceof q6,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=jt(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=jt(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+jt(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=jt(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+jt(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Jb(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==wt&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf extends _I{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(oe(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,i,a){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=a,this.log_=qc("p:rest:"),this.listens_={}}listen(e,t,i,a){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const u=Tf.getListenId_(e,i),d={};this.listens_[u]=d;const p=Zb(e._queryParams);this.restRequest_(l+".json",p,(m,y)=>{let E=y;if(m===404&&(E=null,m=null),m===null&&this.onDataUpdate_(l,E,!1,i),al(this.listens_,u)===d){let w;m?m===401?w="permission_denied":w="rest_error:"+m:w="ok",a(w,null)}})}unlisten(e,t){const i=Tf.getListenId_(e,t);delete this.listens_[i]}get(e){const t=Zb(e._queryParams),i=e._path.toString(),a=new Mf;return this.restRequest_(i+".json",t,(l,u)=>{let d=u;l===404&&(d=null,l=null),l===null?(this.onDataUpdate_(i,d,!1,null),a.resolve(d)):a.reject(new Error(d))}),a.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([a,l])=>{a&&a.accessToken&&(t.auth=a.accessToken),l&&l.token&&(t.ac=l.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+wl(t);this.log_("Sending REST request for "+u);const d=new XMLHttpRequest;d.onreadystatechange=()=>{if(i&&d.readyState===4){this.log_("REST Response for "+u+" received. status:",d.status,"response:",d.responseText);let p=null;if(d.status>=200&&d.status<300){try{p=dc(d.responseText)}catch{xn("Failed to parse JSON response for "+u+": "+d.responseText)}i(null,p)}else d.status!==401&&d.status!==404&&xn("Got unsuccessful REST response for "+u+" Status: "+d.status),i(d.status);i=null}},d.open("GET",u,!0),d.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q6{constructor(){this.rootNode_=we.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wf(){return{value:null,children:new Map}}function xI(n,e,t){if(Ue(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=je(e);n.children.has(i)||n.children.set(i,wf());const a=n.children.get(i);e=lt(e),xI(a,e,t)}}function k_(n,e,t){n.value!==null?t(e,n.value):X6(n,(i,a)=>{const l=new st(e.toString()+"/"+i);k_(a,l,t)})}function X6(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z6{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&On(this.last_,(i,a)=>{t[i]=t[i]-a}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS=10*1e3,J6=30*1e3,eU=5*60*1e3;class tU{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Z6(e);const i=eS+(J6-eS)*Math.random();oc(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;On(e,(a,l)=>{l>0&&zr(this.statsToReport_,a)&&(t[a]=l,i=!0)}),i&&this.server_.reportStats(t),oc(this.reportStats_.bind(this),Math.floor(Math.random()*2*eU))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yi;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(yi||(yi={}));function OI(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function tv(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function nv(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=yi.ACK_USER_WRITE,this.source=OI()}operationForChild(e){if(Ue(this.path)){if(this.affectedTree.value!=null)return oe(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new st(e));return new bf(We(),t,this.revert)}}else return oe(je(this.path)===e,"operationForChild called for unrelated child."),new bf(lt(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(e,t){this.source=e,this.path=t,this.type=yi.LISTEN_COMPLETE}operationForChild(e){return Ue(this.path)?new Ac(this.source,We()):new Ac(this.source,lt(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=yi.OVERWRITE}operationForChild(e){return Ue(this.path)?new Ha(this.source,We(),this.snap.getImmediateChild(e)):new Ha(this.source,lt(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=yi.MERGE}operationForChild(e){if(Ue(this.path)){const t=this.children.subtree(new st(e));return t.isEmpty()?null:t.value?new Ha(this.source,We(),t.value):new Rc(this.source,We(),t)}else return oe(je(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Rc(this.source,lt(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ue(e))return this.isFullyInitialized()&&!this.filtered_;const t=je(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nU{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function iU(n,e,t,i){const a=[],l=[];return e.forEach(u=>{u.type==="child_changed"&&n.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&l.push(Y6(u.childName,u.snapshotNode))}),Wu(n,a,"child_removed",e,i,t),Wu(n,a,"child_added",e,i,t),Wu(n,a,"child_moved",l,i,t),Wu(n,a,"child_changed",e,i,t),Wu(n,a,"value",e,i,t),a}function Wu(n,e,t,i,a,l){const u=i.filter(d=>d.type===t);u.sort((d,p)=>sU(n,d,p)),u.forEach(d=>{const p=rU(n,d,l);a.forEach(m=>{m.respondsTo(d.type)&&e.push(m.createEvent(p,n.query_))})})}function rU(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function sU(n,e,t){if(e.childName==null||t.childName==null)throw Tl("Should only compare child_ events.");const i=new Pe(e.childName,e.snapshotNode),a=new Pe(t.childName,t.snapshotNode);return n.index_.compare(i,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sp(n,e){return{eventCache:n,serverCache:e}}function lc(n,e,t,i){return sp(new zs(e,t,i),n.serverCache)}function DI(n,e,t,i){return sp(n.eventCache,new zs(e,t,i))}function Sf(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function qa(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hg;const aU=()=>(Hg||(Hg=new Cn(G3)),Hg);class ut{static fromObject(e){let t=new ut(null);return On(e,(i,a)=>{t=t.set(new st(i),a)}),t}constructor(e,t=aU()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:We(),value:this.value};if(Ue(e))return null;{const i=je(e),a=this.children.get(i);if(a!==null){const l=a.findRootMostMatchingPathAndValue(lt(e),t);return l!=null?{path:zt(new st(i),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ue(e))return this;{const t=je(e),i=this.children.get(t);return i!==null?i.subtree(lt(e)):new ut(null)}}set(e,t){if(Ue(e))return new ut(t,this.children);{const i=je(e),l=(this.children.get(i)||new ut(null)).set(lt(e),t),u=this.children.insert(i,l);return new ut(this.value,u)}}remove(e){if(Ue(e))return this.children.isEmpty()?new ut(null):new ut(null,this.children);{const t=je(e),i=this.children.get(t);if(i){const a=i.remove(lt(e));let l;return a.isEmpty()?l=this.children.remove(t):l=this.children.insert(t,a),this.value===null&&l.isEmpty()?new ut(null):new ut(this.value,l)}else return this}}get(e){if(Ue(e))return this.value;{const t=je(e),i=this.children.get(t);return i?i.get(lt(e)):null}}setTree(e,t){if(Ue(e))return t;{const i=je(e),l=(this.children.get(i)||new ut(null)).setTree(lt(e),t);let u;return l.isEmpty()?u=this.children.remove(i):u=this.children.insert(i,l),new ut(this.value,u)}}fold(e){return this.fold_(We(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((a,l)=>{i[a]=l.fold_(zt(e,a),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,We(),t)}findOnPath_(e,t,i){const a=this.value?i(t,this.value):!1;if(a)return a;if(Ue(e))return null;{const l=je(e),u=this.children.get(l);return u?u.findOnPath_(lt(e),zt(t,l),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,We(),t)}foreachOnPath_(e,t,i){if(Ue(e))return this;{this.value&&i(t,this.value);const a=je(e),l=this.children.get(a);return l?l.foreachOnPath_(lt(e),zt(t,a),i):new ut(null)}}foreach(e){this.foreach_(We(),e)}foreach_(e,t){this.children.inorderTraversal((i,a)=>{a.foreach_(zt(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e){this.writeTree_=e}static empty(){return new Ei(new ut(null))}}function uc(n,e,t){if(Ue(e))return new Ei(new ut(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const a=i.path;let l=i.value;const u=bn(a,e);return l=l.updateChild(u,t),new Ei(n.writeTree_.set(a,l))}else{const a=new ut(t),l=n.writeTree_.setTree(e,a);return new Ei(l)}}}function tS(n,e,t){let i=n;return On(t,(a,l)=>{i=uc(i,zt(e,a),l)}),i}function nS(n,e){if(Ue(e))return Ei.empty();{const t=n.writeTree_.setTree(e,new ut(null));return new Ei(t)}}function P_(n,e){return Xa(n,e)!=null}function Xa(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(bn(t.path,e)):null}function iS(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(wt,(i,a)=>{e.push(new Pe(i,a))}):n.writeTree_.children.inorderTraversal((i,a)=>{a.value!=null&&e.push(new Pe(i,a.value))}),e}function Os(n,e){if(Ue(e))return n;{const t=Xa(n,e);return t!=null?new Ei(new ut(t)):new Ei(n.writeTree_.subtree(e))}}function M_(n){return n.writeTree_.isEmpty()}function gl(n,e){return kI(We(),n.writeTree_,e)}function kI(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((a,l)=>{a===".priority"?(oe(l.value!==null,"Priority writes must always be leaf nodes"),i=l.value):t=kI(zt(n,a),l,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(zt(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ap(n,e){return LI(e,n)}function oU(n,e,t,i,a){oe(i>n.lastWriteId,"Stacking an older write on top of newer ones"),a===void 0&&(a=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:a}),a&&(n.visibleWrites=uc(n.visibleWrites,e,t)),n.lastWriteId=i}function lU(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function uU(n,e){const t=n.allWrites.findIndex(d=>d.writeId===e);oe(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let a=i.visible,l=!1,u=n.allWrites.length-1;for(;a&&u>=0;){const d=n.allWrites[u];d.visible&&(u>=t&&cU(d,i.path)?a=!1:_i(i.path,d.path)&&(l=!0)),u--}if(a){if(l)return hU(n),!0;if(i.snap)n.visibleWrites=nS(n.visibleWrites,i.path);else{const d=i.children;On(d,p=>{n.visibleWrites=nS(n.visibleWrites,zt(i.path,p))})}return!0}else return!1}function cU(n,e){if(n.snap)return _i(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&_i(zt(n.path,t),e))return!0;return!1}function hU(n){n.visibleWrites=PI(n.allWrites,dU,We()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function dU(n){return n.visible}function PI(n,e,t){let i=Ei.empty();for(let a=0;a<n.length;++a){const l=n[a];if(e(l)){const u=l.path;let d;if(l.snap)_i(t,u)?(d=bn(t,u),i=uc(i,d,l.snap)):_i(u,t)&&(d=bn(u,t),i=uc(i,We(),l.snap.getChild(d)));else if(l.children){if(_i(t,u))d=bn(t,u),i=tS(i,d,l.children);else if(_i(u,t))if(d=bn(u,t),Ue(d))i=tS(i,We(),l.children);else{const p=al(l.children,je(d));if(p){const m=p.getChild(lt(d));i=uc(i,We(),m)}}}else throw Tl("WriteRecord should have .snap or .children")}}return i}function MI(n,e,t,i,a){if(!i&&!a){const l=Xa(n.visibleWrites,e);if(l!=null)return l;{const u=Os(n.visibleWrites,e);if(M_(u))return t;if(t==null&&!P_(u,We()))return null;{const d=t||we.EMPTY_NODE;return gl(u,d)}}}else{const l=Os(n.visibleWrites,e);if(!a&&M_(l))return t;if(!a&&t==null&&!P_(l,We()))return null;{const u=function(m){return(m.visible||a)&&(!i||!~i.indexOf(m.writeId))&&(_i(m.path,e)||_i(e,m.path))},d=PI(n.allWrites,u,e),p=t||we.EMPTY_NODE;return gl(d,p)}}}function fU(n,e,t){let i=we.EMPTY_NODE;const a=Xa(n.visibleWrites,e);if(a)return a.isLeafNode()||a.forEachChild(wt,(l,u)=>{i=i.updateImmediateChild(l,u)}),i;if(t){const l=Os(n.visibleWrites,e);return t.forEachChild(wt,(u,d)=>{const p=gl(Os(l,new st(u)),d);i=i.updateImmediateChild(u,p)}),iS(l).forEach(u=>{i=i.updateImmediateChild(u.name,u.node)}),i}else{const l=Os(n.visibleWrites,e);return iS(l).forEach(u=>{i=i.updateImmediateChild(u.name,u.node)}),i}}function pU(n,e,t,i,a){oe(i||a,"Either existingEventSnap or existingServerSnap must exist");const l=zt(e,t);if(P_(n.visibleWrites,l))return null;{const u=Os(n.visibleWrites,l);return M_(u)?a.getChild(t):gl(u,a.getChild(t))}}function mU(n,e,t,i){const a=zt(e,t),l=Xa(n.visibleWrites,a);if(l!=null)return l;if(i.isCompleteForChild(t)){const u=Os(n.visibleWrites,a);return gl(u,i.getNode().getImmediateChild(t))}else return null}function gU(n,e){return Xa(n.visibleWrites,e)}function _U(n,e,t,i,a,l,u){let d;const p=Os(n.visibleWrites,e),m=Xa(p,We());if(m!=null)d=m;else if(t!=null)d=gl(p,t);else return[];if(d=d.withIndex(u),!d.isEmpty()&&!d.isLeafNode()){const y=[],E=u.getCompare(),w=l?d.getReverseIteratorFrom(i,u):d.getIteratorFrom(i,u);let I=w.getNext();for(;I&&y.length<a;)E(I,i)!==0&&y.push(I),I=w.getNext();return y}else return[]}function yU(){return{visibleWrites:Ei.empty(),allWrites:[],lastWriteId:-1}}function Af(n,e,t,i){return MI(n.writeTree,n.treePath,e,t,i)}function iv(n,e){return fU(n.writeTree,n.treePath,e)}function rS(n,e,t,i){return pU(n.writeTree,n.treePath,e,t,i)}function Rf(n,e){return gU(n.writeTree,zt(n.treePath,e))}function vU(n,e,t,i,a,l){return _U(n.writeTree,n.treePath,e,t,i,a,l)}function rv(n,e,t){return mU(n.writeTree,n.treePath,e,t)}function VI(n,e){return LI(zt(n.treePath,e),n.writeTree)}function LI(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EU{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;oe(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),oe(i!==".priority","Only non-priority child changes can be tracked.");const a=this.changeMap.get(i);if(a){const l=a.type;if(t==="child_added"&&l==="child_removed")this.changeMap.set(i,bc(i,e.snapshotNode,a.snapshotNode));else if(t==="child_removed"&&l==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&l==="child_changed")this.changeMap.set(i,wc(i,a.oldSnap));else if(t==="child_changed"&&l==="child_added")this.changeMap.set(i,ml(i,e.snapshotNode));else if(t==="child_changed"&&l==="child_changed")this.changeMap.set(i,bc(i,e.snapshotNode,a.oldSnap));else throw Tl("Illegal combination of changes: "+e+" occurred after "+a)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TU{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const UI=new TU;class sv{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new zs(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return rv(this.writes_,e,i)}}getChildAfterChild(e,t,i){const a=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:qa(this.viewCache_),l=vU(this.writes_,a,t,1,i,e);return l.length===0?null:l[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wU(n){return{filter:n}}function bU(n,e){oe(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),oe(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function SU(n,e,t,i,a){const l=new EU;let u,d;if(t.type===yi.OVERWRITE){const m=t;m.source.fromUser?u=V_(n,e,m.path,m.snap,i,a,l):(oe(m.source.fromServer,"Unknown source."),d=m.source.tagged||e.serverCache.isFiltered()&&!Ue(m.path),u=If(n,e,m.path,m.snap,i,a,d,l))}else if(t.type===yi.MERGE){const m=t;m.source.fromUser?u=RU(n,e,m.path,m.children,i,a,l):(oe(m.source.fromServer,"Unknown source."),d=m.source.tagged||e.serverCache.isFiltered(),u=L_(n,e,m.path,m.children,i,a,d,l))}else if(t.type===yi.ACK_USER_WRITE){const m=t;m.revert?u=NU(n,e,m.path,i,a,l):u=IU(n,e,m.path,m.affectedTree,i,a,l)}else if(t.type===yi.LISTEN_COMPLETE)u=CU(n,e,t.path,i,l);else throw Tl("Unknown operation type: "+t.type);const p=l.getChanges();return AU(e,u,p),{viewCache:u,changes:p}}function AU(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const a=i.getNode().isLeafNode()||i.getNode().isEmpty(),l=Sf(n);(t.length>0||!n.eventCache.isFullyInitialized()||a&&!i.getNode().equals(l)||!i.getNode().getPriority().equals(l.getPriority()))&&t.push(NI(Sf(e)))}}function jI(n,e,t,i,a,l){const u=e.eventCache;if(Rf(i,t)!=null)return e;{let d,p;if(Ue(t))if(oe(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const m=qa(e),y=m instanceof we?m:we.EMPTY_NODE,E=iv(i,y);d=n.filter.updateFullNode(e.eventCache.getNode(),E,l)}else{const m=Af(i,qa(e));d=n.filter.updateFullNode(e.eventCache.getNode(),m,l)}else{const m=je(t);if(m===".priority"){oe(Fs(t)===1,"Can't have a priority with additional path components");const y=u.getNode();p=e.serverCache.getNode();const E=rS(i,t,y,p);E!=null?d=n.filter.updatePriority(y,E):d=u.getNode()}else{const y=lt(t);let E;if(u.isCompleteForChild(m)){p=e.serverCache.getNode();const w=rS(i,t,u.getNode(),p);w!=null?E=u.getNode().getImmediateChild(m).updateChild(y,w):E=u.getNode().getImmediateChild(m)}else E=rv(i,m,e.serverCache);E!=null?d=n.filter.updateChild(u.getNode(),m,E,y,a,l):d=u.getNode()}}return lc(e,d,u.isFullyInitialized()||Ue(t),n.filter.filtersNodes())}}function If(n,e,t,i,a,l,u,d){const p=e.serverCache;let m;const y=u?n.filter:n.filter.getIndexedFilter();if(Ue(t))m=y.updateFullNode(p.getNode(),i,null);else if(y.filtersNodes()&&!p.isFiltered()){const I=p.getNode().updateChild(t,i);m=y.updateFullNode(p.getNode(),I,null)}else{const I=je(t);if(!p.isCompleteForPath(t)&&Fs(t)>1)return e;const C=lt(t),j=p.getNode().getImmediateChild(I).updateChild(C,i);I===".priority"?m=y.updatePriority(p.getNode(),j):m=y.updateChild(p.getNode(),I,j,C,UI,null)}const E=DI(e,m,p.isFullyInitialized()||Ue(t),y.filtersNodes()),w=new sv(a,E,l);return jI(n,E,t,a,w,d)}function V_(n,e,t,i,a,l,u){const d=e.eventCache;let p,m;const y=new sv(a,e,l);if(Ue(t))m=n.filter.updateFullNode(e.eventCache.getNode(),i,u),p=lc(e,m,!0,n.filter.filtersNodes());else{const E=je(t);if(E===".priority")m=n.filter.updatePriority(e.eventCache.getNode(),i),p=lc(e,m,d.isFullyInitialized(),d.isFiltered());else{const w=lt(t),I=d.getNode().getImmediateChild(E);let C;if(Ue(w))C=i;else{const B=y.getCompleteChild(E);B!=null?vI(w)===".priority"&&B.getChild(TI(w)).isEmpty()?C=B:C=B.updateChild(w,i):C=we.EMPTY_NODE}if(I.equals(C))p=e;else{const B=n.filter.updateChild(d.getNode(),E,C,w,y,u);p=lc(e,B,d.isFullyInitialized(),n.filter.filtersNodes())}}}return p}function sS(n,e){return n.eventCache.isCompleteForChild(e)}function RU(n,e,t,i,a,l,u){let d=e;return i.foreach((p,m)=>{const y=zt(t,p);sS(e,je(y))&&(d=V_(n,d,y,m,a,l,u))}),i.foreach((p,m)=>{const y=zt(t,p);sS(e,je(y))||(d=V_(n,d,y,m,a,l,u))}),d}function aS(n,e,t){return t.foreach((i,a)=>{e=e.updateChild(i,a)}),e}function L_(n,e,t,i,a,l,u,d){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,m;Ue(t)?m=i:m=new ut(null).setTree(t,i);const y=e.serverCache.getNode();return m.children.inorderTraversal((E,w)=>{if(y.hasChild(E)){const I=e.serverCache.getNode().getImmediateChild(E),C=aS(n,I,w);p=If(n,p,new st(E),C,a,l,u,d)}}),m.children.inorderTraversal((E,w)=>{const I=!e.serverCache.isCompleteForChild(E)&&w.value===null;if(!y.hasChild(E)&&!I){const C=e.serverCache.getNode().getImmediateChild(E),B=aS(n,C,w);p=If(n,p,new st(E),B,a,l,u,d)}}),p}function IU(n,e,t,i,a,l,u){if(Rf(a,t)!=null)return e;const d=e.serverCache.isFiltered(),p=e.serverCache;if(i.value!=null){if(Ue(t)&&p.isFullyInitialized()||p.isCompleteForPath(t))return If(n,e,t,p.getNode().getChild(t),a,l,d,u);if(Ue(t)){let m=new ut(null);return p.getNode().forEachChild(sl,(y,E)=>{m=m.set(new st(y),E)}),L_(n,e,t,m,a,l,d,u)}else return e}else{let m=new ut(null);return i.foreach((y,E)=>{const w=zt(t,y);p.isCompleteForPath(w)&&(m=m.set(y,p.getNode().getChild(w)))}),L_(n,e,t,m,a,l,d,u)}}function CU(n,e,t,i,a){const l=e.serverCache,u=DI(e,l.getNode(),l.isFullyInitialized()||Ue(t),l.isFiltered());return jI(n,u,t,i,UI,a)}function NU(n,e,t,i,a,l){let u;if(Rf(i,t)!=null)return e;{const d=new sv(i,e,a),p=e.eventCache.getNode();let m;if(Ue(t)||je(t)===".priority"){let y;if(e.serverCache.isFullyInitialized())y=Af(i,qa(e));else{const E=e.serverCache.getNode();oe(E instanceof we,"serverChildren would be complete if leaf node"),y=iv(i,E)}y=y,m=n.filter.updateFullNode(p,y,l)}else{const y=je(t);let E=rv(i,y,e.serverCache);E==null&&e.serverCache.isCompleteForChild(y)&&(E=p.getImmediateChild(y)),E!=null?m=n.filter.updateChild(p,y,E,lt(t),d,l):e.eventCache.getNode().hasChild(y)?m=n.filter.updateChild(p,y,we.EMPTY_NODE,lt(t),d,l):m=p,m.isEmpty()&&e.serverCache.isFullyInitialized()&&(u=Af(i,qa(e)),u.isLeafNode()&&(m=n.filter.updateFullNode(m,u,l)))}return u=e.serverCache.isFullyInitialized()||Rf(i,We())!=null,lc(e,m,u,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xU{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,a=new Jy(i.getIndex()),l=K6(i);this.processor_=wU(l);const u=t.serverCache,d=t.eventCache,p=a.updateFullNode(we.EMPTY_NODE,u.getNode(),null),m=l.updateFullNode(we.EMPTY_NODE,d.getNode(),null),y=new zs(p,u.isFullyInitialized(),a.filtersNodes()),E=new zs(m,d.isFullyInitialized(),l.filtersNodes());this.viewCache_=sp(E,y),this.eventGenerator_=new nU(this.query_)}get query(){return this.query_}}function OU(n){return n.viewCache_.serverCache.getNode()}function DU(n){return Sf(n.viewCache_)}function kU(n,e){const t=qa(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Ue(e)&&!t.getImmediateChild(je(e)).isEmpty())?t.getChild(e):null}function oS(n){return n.eventRegistrations_.length===0}function PU(n,e){n.eventRegistrations_.push(e)}function lS(n,e,t){const i=[];if(t){oe(e==null,"A cancel should cancel all event registrations.");const a=n.query._path;n.eventRegistrations_.forEach(l=>{const u=l.createCancelEvent(t,a);u&&i.push(u)})}if(e){let a=[];for(let l=0;l<n.eventRegistrations_.length;++l){const u=n.eventRegistrations_[l];if(!u.matches(e))a.push(u);else if(e.hasAnyCallback()){a=a.concat(n.eventRegistrations_.slice(l+1));break}}n.eventRegistrations_=a}else n.eventRegistrations_=[];return i}function uS(n,e,t,i){e.type===yi.MERGE&&e.source.queryId!==null&&(oe(qa(n.viewCache_),"We should always have a full cache before handling merges"),oe(Sf(n.viewCache_),"Missing event cache, even though we have a server cache"));const a=n.viewCache_,l=SU(n.processor_,a,e,t,i);return bU(n.processor_,l.viewCache),oe(l.viewCache.serverCache.isFullyInitialized()||!a.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=l.viewCache,FI(n,l.changes,l.viewCache.eventCache.getNode(),null)}function MU(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(wt,(l,u)=>{i.push(ml(l,u))}),t.isFullyInitialized()&&i.push(NI(t.getNode())),FI(n,i,t.getNode(),e)}function FI(n,e,t,i){const a=i?[i]:n.eventRegistrations_;return iU(n.eventGenerator_,e,t,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cf;class zI{constructor(){this.views=new Map}}function VU(n){oe(!Cf,"__referenceConstructor has already been defined"),Cf=n}function LU(){return oe(Cf,"Reference.ts has not been loaded"),Cf}function UU(n){return n.views.size===0}function av(n,e,t,i){const a=e.source.queryId;if(a!==null){const l=n.views.get(a);return oe(l!=null,"SyncTree gave us an op for an invalid query."),uS(l,e,t,i)}else{let l=[];for(const u of n.views.values())l=l.concat(uS(u,e,t,i));return l}}function BI(n,e,t,i,a){const l=e._queryIdentifier,u=n.views.get(l);if(!u){let d=Af(t,a?i:null),p=!1;d?p=!0:i instanceof we?(d=iv(t,i),p=!1):(d=we.EMPTY_NODE,p=!1);const m=sp(new zs(d,p,!1),new zs(i,a,!1));return new xU(e,m)}return u}function jU(n,e,t,i,a,l){const u=BI(n,e,i,a,l);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,u),PU(u,t),MU(u,t)}function FU(n,e,t,i){const a=e._queryIdentifier,l=[];let u=[];const d=Bs(n);if(a==="default")for(const[p,m]of n.views.entries())u=u.concat(lS(m,t,i)),oS(m)&&(n.views.delete(p),m.query._queryParams.loadsAllData()||l.push(m.query));else{const p=n.views.get(a);p&&(u=u.concat(lS(p,t,i)),oS(p)&&(n.views.delete(a),p.query._queryParams.loadsAllData()||l.push(p.query)))}return d&&!Bs(n)&&l.push(new(LU())(e._repo,e._path)),{removed:l,events:u}}function HI(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Ds(n,e){let t=null;for(const i of n.views.values())t=t||kU(i,e);return t}function qI(n,e){if(e._queryParams.loadsAllData())return op(n);{const i=e._queryIdentifier;return n.views.get(i)}}function GI(n,e){return qI(n,e)!=null}function Bs(n){return op(n)!=null}function op(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nf;function zU(n){oe(!Nf,"__referenceConstructor has already been defined"),Nf=n}function BU(){return oe(Nf,"Reference.ts has not been loaded"),Nf}let HU=1;class cS{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ut(null),this.pendingWriteTree_=yU(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function WI(n,e,t,i,a){return oU(n.pendingWriteTree_,e,t,i,a),a?Yc(n,new Ha(OI(),e,t)):[]}function Pa(n,e,t=!1){const i=lU(n.pendingWriteTree_,e);if(uU(n.pendingWriteTree_,e)){let l=new ut(null);return i.snap!=null?l=l.set(We(),!0):On(i.children,u=>{l=l.set(new st(u),!0)}),Yc(n,new bf(i.path,l,t))}else return[]}function Wc(n,e,t){return Yc(n,new Ha(tv(),e,t))}function qU(n,e,t){const i=ut.fromObject(t);return Yc(n,new Rc(tv(),e,i))}function GU(n,e){return Yc(n,new Ac(tv(),e))}function WU(n,e,t){const i=lv(n,t);if(i){const a=uv(i),l=a.path,u=a.queryId,d=bn(l,e),p=new Ac(nv(u),d);return cv(n,l,p)}else return[]}function YI(n,e,t,i,a=!1){const l=e._path,u=n.syncPointTree_.get(l);let d=[];if(u&&(e._queryIdentifier==="default"||GI(u,e))){const p=FU(u,e,t,i);UU(u)&&(n.syncPointTree_=n.syncPointTree_.remove(l));const m=p.removed;if(d=p.events,!a){const y=m.findIndex(w=>w._queryParams.loadsAllData())!==-1,E=n.syncPointTree_.findOnPath(l,(w,I)=>Bs(I));if(y&&!E){const w=n.syncPointTree_.subtree(l);if(!w.isEmpty()){const I=QU(w);for(let C=0;C<I.length;++C){const B=I[C],j=B.query,$=XI(n,B);n.listenProvider_.startListening(cc(j),Ic(n,j),$.hashFn,$.onComplete)}}}!E&&m.length>0&&!i&&(y?n.listenProvider_.stopListening(cc(e),null):m.forEach(w=>{const I=n.queryToTagMap.get(lp(w));n.listenProvider_.stopListening(cc(w),I)}))}XU(n,m)}return d}function $I(n,e,t,i){const a=lv(n,i);if(a!=null){const l=uv(a),u=l.path,d=l.queryId,p=bn(u,e),m=new Ha(nv(d),p,t);return cv(n,u,m)}else return[]}function YU(n,e,t,i){const a=lv(n,i);if(a){const l=uv(a),u=l.path,d=l.queryId,p=bn(u,e),m=ut.fromObject(t),y=new Rc(nv(d),p,m);return cv(n,u,y)}else return[]}function $U(n,e,t,i=!1){const a=e._path;let l=null,u=!1;n.syncPointTree_.foreachOnPath(a,(w,I)=>{const C=bn(w,a);l=l||Ds(I,C),u=u||Bs(I)});let d=n.syncPointTree_.get(a);d?(u=u||Bs(d),l=l||Ds(d,We())):(d=new zI,n.syncPointTree_=n.syncPointTree_.set(a,d));let p;l!=null?p=!0:(p=!1,l=we.EMPTY_NODE,n.syncPointTree_.subtree(a).foreachChild((I,C)=>{const B=Ds(C,We());B&&(l=l.updateImmediateChild(I,B))}));const m=GI(d,e);if(!m&&!e._queryParams.loadsAllData()){const w=lp(e);oe(!n.queryToTagMap.has(w),"View does not exist, but we have a tag");const I=ZU();n.queryToTagMap.set(w,I),n.tagToQueryMap.set(I,w)}const y=ap(n.pendingWriteTree_,a);let E=jU(d,e,t,y,l,p);if(!m&&!u&&!i){const w=qI(d,e);E=E.concat(JU(n,e,w))}return E}function ov(n,e,t){const a=n.pendingWriteTree_,l=n.syncPointTree_.findOnPath(e,(u,d)=>{const p=bn(u,e),m=Ds(d,p);if(m)return m});return MI(a,e,l,t,!0)}function KU(n,e){const t=e._path;let i=null;n.syncPointTree_.foreachOnPath(t,(m,y)=>{const E=bn(m,t);i=i||Ds(y,E)});let a=n.syncPointTree_.get(t);a?i=i||Ds(a,We()):(a=new zI,n.syncPointTree_=n.syncPointTree_.set(t,a));const l=i!=null,u=l?new zs(i,!0,!1):null,d=ap(n.pendingWriteTree_,e._path),p=BI(a,e,d,l?u.getNode():we.EMPTY_NODE,l);return DU(p)}function Yc(n,e){return KI(e,n.syncPointTree_,null,ap(n.pendingWriteTree_,We()))}function KI(n,e,t,i){if(Ue(n.path))return QI(n,e,t,i);{const a=e.get(We());t==null&&a!=null&&(t=Ds(a,We()));let l=[];const u=je(n.path),d=n.operationForChild(u),p=e.children.get(u);if(p&&d){const m=t?t.getImmediateChild(u):null,y=VI(i,u);l=l.concat(KI(d,p,m,y))}return a&&(l=l.concat(av(a,n,i,t))),l}}function QI(n,e,t,i){const a=e.get(We());t==null&&a!=null&&(t=Ds(a,We()));let l=[];return e.children.inorderTraversal((u,d)=>{const p=t?t.getImmediateChild(u):null,m=VI(i,u),y=n.operationForChild(u);y&&(l=l.concat(QI(y,d,p,m)))}),a&&(l=l.concat(av(a,n,i,t))),l}function XI(n,e){const t=e.query,i=Ic(n,t);return{hashFn:()=>(OU(e)||we.EMPTY_NODE).hash(),onComplete:a=>{if(a==="ok")return i?WU(n,t._path,i):GU(n,t._path);{const l=$3(a,t);return YI(n,t,null,l)}}}}function Ic(n,e){const t=lp(e);return n.queryToTagMap.get(t)}function lp(n){return n._path.toString()+"$"+n._queryIdentifier}function lv(n,e){return n.tagToQueryMap.get(e)}function uv(n){const e=n.indexOf("$");return oe(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new st(n.substr(0,e))}}function cv(n,e,t){const i=n.syncPointTree_.get(e);oe(i,"Missing sync point for query tag that we're tracking");const a=ap(n.pendingWriteTree_,e);return av(i,t,a,null)}function QU(n){return n.fold((e,t,i)=>{if(t&&Bs(t))return[op(t)];{let a=[];return t&&(a=HI(t)),On(i,(l,u)=>{a=a.concat(u)}),a}})}function cc(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(BU())(n._repo,n._path):n}function XU(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const a=lp(i),l=n.queryToTagMap.get(a);n.queryToTagMap.delete(a),n.tagToQueryMap.delete(l)}}}function ZU(){return HU++}function JU(n,e,t){const i=e._path,a=Ic(n,e),l=XI(n,t),u=n.listenProvider_.startListening(cc(e),a,l.hashFn,l.onComplete),d=n.syncPointTree_.subtree(i);if(a)oe(!Bs(d.value),"If we're adding a query, it shouldn't be shadowed");else{const p=d.fold((m,y,E)=>{if(!Ue(m)&&y&&Bs(y))return[op(y).query];{let w=[];return y&&(w=w.concat(HI(y).map(I=>I.query))),On(E,(I,C)=>{w=w.concat(C)}),w}});for(let m=0;m<p.length;++m){const y=p[m];n.listenProvider_.stopListening(cc(y),Ic(n,y))}}return u}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new hv(t)}node(){return this.node_}}class dv{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=zt(this.path_,e);return new dv(this.syncTree_,t)}node(){return ov(this.syncTree_,this.path_)}}const e5=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},hS=function(n,e,t){if(!n||typeof n!="object")return n;if(oe(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return t5(n[".sv"],e,t);if(typeof n[".sv"]=="object")return n5(n[".sv"],e);oe(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},t5=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:oe(!1,"Unexpected server value: "+n)}},n5=function(n,e,t){n.hasOwnProperty("increment")||oe(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&oe(!1,"Unexpected increment value: "+i);const a=e.node();if(oe(a!==null&&typeof a<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!a.isLeafNode())return i;const u=a.getValue();return typeof u!="number"?i:u+i},i5=function(n,e,t,i){return fv(e,new dv(t,n),i)},ZI=function(n,e,t){return fv(n,new hv(e),t)};function fv(n,e,t){const i=n.getPriority().val(),a=hS(i,e.getImmediateChild(".priority"),t);let l;if(n.isLeafNode()){const u=n,d=hS(u.getValue(),e,t);return d!==u.getValue()||a!==u.getPriority().val()?new Qt(d,Jt(a)):n}else{const u=n;return l=u,a!==u.getPriority().val()&&(l=l.updatePriority(new Qt(a))),u.forEachChild(wt,(d,p)=>{const m=fv(p,e.getImmediateChild(d),t);m!==p&&(l=l.updateImmediateChild(d,m))}),l}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function mv(n,e){let t=e instanceof st?e:new st(e),i=n,a=je(t);for(;a!==null;){const l=al(i.node.children,a)||{children:{},childCount:0};i=new pv(a,i,l),t=lt(t),a=je(t)}return i}function xl(n){return n.node.value}function JI(n,e){n.node.value=e,U_(n)}function eC(n){return n.node.childCount>0}function r5(n){return xl(n)===void 0&&!eC(n)}function up(n,e){On(n.node.children,(t,i)=>{e(new pv(t,n,i))})}function tC(n,e,t,i){t&&e(n),up(n,a=>{tC(a,e,!0)})}function s5(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function $c(n){return new st(n.parent===null?n.name:$c(n.parent)+"/"+n.name)}function U_(n){n.parent!==null&&a5(n.parent,n.name,n)}function a5(n,e,t){const i=r5(t),a=zr(n.node.children,e);i&&a?(delete n.node.children[e],n.node.childCount--,U_(n)):!i&&!a&&(n.node.children[e]=t.node,n.node.childCount++,U_(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o5=/[\[\].#$\/\u0000-\u001F\u007F]/,l5=/[\[\].#$\u0000-\u001F\u007F]/,qg=10*1024*1024,nC=function(n){return typeof n=="string"&&n.length!==0&&!o5.test(n)},iC=function(n){return typeof n=="string"&&n.length!==0&&!l5.test(n)},u5=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),iC(n)},c5=function(n,e,t,i){gv(ey(n,"value"),e,t)},gv=function(n,e,t){const i=t instanceof st?new I6(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+xa(i));if(typeof e=="function")throw new Error(n+"contains a function "+xa(i)+" with contents = "+e.toString());if(ZR(e))throw new Error(n+"contains "+e.toString()+" "+xa(i));if(typeof e=="string"&&e.length>qg/3&&Uf(e)>qg)throw new Error(n+"contains a string greater than "+qg+" utf8 bytes "+xa(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let a=!1,l=!1;if(On(e,(u,d)=>{if(u===".value")a=!0;else if(u!==".priority"&&u!==".sv"&&(l=!0,!nC(u)))throw new Error(n+" contains an invalid key ("+u+") "+xa(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);C6(i,u),gv(n,d,i),N6(i)}),a&&l)throw new Error(n+' contains ".value" child '+xa(i)+" in addition to actual children.")}},rC=function(n,e,t,i){if(!iC(t))throw new Error(ey(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},h5=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),rC(n,e,t)},d5=function(n,e){if(je(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},f5=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!nC(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!u5(t))throw new Error(ey(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p5{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function sC(n,e){let t=null;for(let i=0;i<e.length;i++){const a=e[i],l=a.getPath();t!==null&&!wI(l,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:l}),t.events.push(a)}t&&n.eventLists_.push(t)}function Qi(n,e,t){sC(n,t),m5(n,i=>_i(i,e)||_i(e,i))}function m5(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const a=n.eventLists_[i];if(a){const l=a.path;e(l)?(g5(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function g5(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();ac&&mn("event: "+t.toString()),Nl(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _5="repo_interrupt",y5=25;class v5{constructor(e,t,i,a){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new p5,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=wf(),this.transactionQueueTree_=new pv,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function E5(n,e,t){if(n.stats_=Ky(n.repoInfo_),n.forceRestClient_||Z3())n.server_=new Tf(n.repoInfo_,(i,a,l,u)=>{dS(n,i,a,l,u)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>fS(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{jt(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new Dr(n.repoInfo_,e,(i,a,l,u)=>{dS(n,i,a,l,u)},i=>{fS(n,i)},i=>{w5(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=i6(n.repoInfo_,()=>new tU(n.stats_,n.server_)),n.infoData_=new Q6,n.infoSyncTree_=new cS({startListening:(i,a,l,u)=>{let d=[];const p=n.infoData_.getNode(i._path);return p.isEmpty()||(d=Wc(n.infoSyncTree_,i._path,p),setTimeout(()=>{u("ok")},0)),d},stopListening:()=>{}}),yv(n,"connected",!1),n.serverSyncTree_=new cS({startListening:(i,a,l,u)=>(n.server_.listen(i,l,a,(d,p)=>{const m=u(d,p);Qi(n.eventQueue_,i._path,m)}),[]),stopListening:(i,a)=>{n.server_.unlisten(i,a)}})}function T5(n){const t=n.infoData_.getNode(new st(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function _v(n){return e5({timestamp:T5(n)})}function dS(n,e,t,i,a){n.dataUpdateCount++;const l=new st(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let u=[];if(a)if(i){const p=Yd(t,m=>Jt(m));u=YU(n.serverSyncTree_,l,p,a)}else{const p=Jt(t);u=$I(n.serverSyncTree_,l,p,a)}else if(i){const p=Yd(t,m=>Jt(m));u=qU(n.serverSyncTree_,l,p)}else{const p=Jt(t);u=Wc(n.serverSyncTree_,l,p)}let d=l;u.length>0&&(d=hp(n,l)),Qi(n.eventQueue_,d,u)}function fS(n,e){yv(n,"connected",e),e===!1&&A5(n)}function w5(n,e){On(e,(t,i)=>{yv(n,t,i)})}function yv(n,e,t){const i=new st("/.info/"+e),a=Jt(t);n.infoData_.updateSnapshot(i,a);const l=Wc(n.infoSyncTree_,i,a);Qi(n.eventQueue_,i,l)}function aC(n){return n.nextWriteId_++}function b5(n,e,t){const i=KU(n.serverSyncTree_,e);return i!=null?Promise.resolve(i):n.server_.get(e).then(a=>{const l=Jt(a).withIndex(e._queryParams.getIndex());$U(n.serverSyncTree_,e,t,!0);let u;if(e._queryParams.loadsAllData())u=Wc(n.serverSyncTree_,e._path,l);else{const d=Ic(n.serverSyncTree_,e);u=$I(n.serverSyncTree_,e._path,l,d)}return Qi(n.eventQueue_,e._path,u),YI(n.serverSyncTree_,e,t,null,!0),l},a=>(cp(n,"get for query "+jt(e)+" failed: "+a),Promise.reject(new Error(a))))}function S5(n,e,t,i,a){cp(n,"set",{path:e.toString(),value:t,priority:i});const l=_v(n),u=Jt(t,i),d=ov(n.serverSyncTree_,e),p=ZI(u,d,l),m=aC(n),y=WI(n.serverSyncTree_,e,p,m,!0);sC(n.eventQueue_,y),n.server_.put(e.toString(),u.val(!0),(w,I)=>{const C=w==="ok";C||xn("set at "+e+" failed: "+w);const B=Pa(n.serverSyncTree_,m,!C);Qi(n.eventQueue_,e,B),I5(n,a,w,I)});const E=hC(n,e);hp(n,E),Qi(n.eventQueue_,E,[])}function A5(n){cp(n,"onDisconnectEvents");const e=_v(n),t=wf();k_(n.onDisconnect_,We(),(a,l)=>{const u=i5(a,l,n.serverSyncTree_,e);xI(t,a,u)});let i=[];k_(t,We(),(a,l)=>{i=i.concat(Wc(n.serverSyncTree_,a,l));const u=hC(n,a);hp(n,u)}),n.onDisconnect_=wf(),Qi(n.eventQueue_,We(),i)}function R5(n){n.persistentConnection_&&n.persistentConnection_.interrupt(_5)}function cp(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),mn(t,...e)}function I5(n,e,t,i){e&&Nl(()=>{if(t==="ok")e(null);else{const a=(t||"error").toUpperCase();let l=a;i&&(l+=": "+i);const u=new Error(l);u.code=a,e(u)}})}function oC(n,e,t){return ov(n.serverSyncTree_,e,t)||we.EMPTY_NODE}function vv(n,e=n.transactionQueueTree_){if(e||dp(n,e),xl(e)){const t=uC(n,e);oe(t.length>0,"Sending zero length transaction queue"),t.every(a=>a.status===0)&&C5(n,$c(e),t)}else eC(e)&&up(e,t=>{vv(n,t)})}function C5(n,e,t){const i=t.map(m=>m.currentWriteId),a=oC(n,e,i);let l=a;const u=a.hash();for(let m=0;m<t.length;m++){const y=t[m];oe(y.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),y.status=1,y.retryCount++;const E=bn(e,y.path);l=l.updateChild(E,y.currentOutputSnapshotRaw)}const d=l.val(!0),p=e;n.server_.put(p.toString(),d,m=>{cp(n,"transaction put response",{path:p.toString(),status:m});let y=[];if(m==="ok"){const E=[];for(let w=0;w<t.length;w++)t[w].status=2,y=y.concat(Pa(n.serverSyncTree_,t[w].currentWriteId)),t[w].onComplete&&E.push(()=>t[w].onComplete(null,!0,t[w].currentOutputSnapshotResolved)),t[w].unwatcher();dp(n,mv(n.transactionQueueTree_,e)),vv(n,n.transactionQueueTree_),Qi(n.eventQueue_,e,y);for(let w=0;w<E.length;w++)Nl(E[w])}else{if(m==="datastale")for(let E=0;E<t.length;E++)t[E].status===3?t[E].status=4:t[E].status=0;else{xn("transaction at "+p.toString()+" failed: "+m);for(let E=0;E<t.length;E++)t[E].status=4,t[E].abortReason=m}hp(n,e)}},u)}function hp(n,e){const t=lC(n,e),i=$c(t),a=uC(n,t);return N5(n,a,i),i}function N5(n,e,t){if(e.length===0)return;const i=[];let a=[];const u=e.filter(d=>d.status===0).map(d=>d.currentWriteId);for(let d=0;d<e.length;d++){const p=e[d],m=bn(t,p.path);let y=!1,E;if(oe(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)y=!0,E=p.abortReason,a=a.concat(Pa(n.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=y5)y=!0,E="maxretry",a=a.concat(Pa(n.serverSyncTree_,p.currentWriteId,!0));else{const w=oC(n,p.path,u);p.currentInputSnapshot=w;const I=e[d].update(w.val());if(I!==void 0){gv("transaction failed: Data returned ",I,p.path);let C=Jt(I);typeof I=="object"&&I!=null&&zr(I,".priority")||(C=C.updatePriority(w.getPriority()));const j=p.currentWriteId,$=_v(n),K=ZI(C,w,$);p.currentOutputSnapshotRaw=C,p.currentOutputSnapshotResolved=K,p.currentWriteId=aC(n),u.splice(u.indexOf(j),1),a=a.concat(WI(n.serverSyncTree_,p.path,K,p.currentWriteId,p.applyLocally)),a=a.concat(Pa(n.serverSyncTree_,j,!0))}else y=!0,E="nodata",a=a.concat(Pa(n.serverSyncTree_,p.currentWriteId,!0))}Qi(n.eventQueue_,t,a),a=[],y&&(e[d].status=2,function(w){setTimeout(w,Math.floor(0))}(e[d].unwatcher),e[d].onComplete&&(E==="nodata"?i.push(()=>e[d].onComplete(null,!1,e[d].currentInputSnapshot)):i.push(()=>e[d].onComplete(new Error(E),!1,null))))}dp(n,n.transactionQueueTree_);for(let d=0;d<i.length;d++)Nl(i[d]);vv(n,n.transactionQueueTree_)}function lC(n,e){let t,i=n.transactionQueueTree_;for(t=je(e);t!==null&&xl(i)===void 0;)i=mv(i,t),e=lt(e),t=je(e);return i}function uC(n,e){const t=[];return cC(n,e,t),t.sort((i,a)=>i.order-a.order),t}function cC(n,e,t){const i=xl(e);if(i)for(let a=0;a<i.length;a++)t.push(i[a]);up(e,a=>{cC(n,a,t)})}function dp(n,e){const t=xl(e);if(t){let i=0;for(let a=0;a<t.length;a++)t[a].status!==2&&(t[i]=t[a],i++);t.length=i,JI(e,t.length>0?t:void 0)}up(e,i=>{dp(n,i)})}function hC(n,e){const t=$c(lC(n,e)),i=mv(n.transactionQueueTree_,e);return s5(i,a=>{Gg(n,a)}),Gg(n,i),tC(i,a=>{Gg(n,a)}),t}function Gg(n,e){const t=xl(e);if(t){const i=[];let a=[],l=-1;for(let u=0;u<t.length;u++)t[u].status===3||(t[u].status===1?(oe(l===u-1,"All SENT items should be at beginning of queue."),l=u,t[u].status=3,t[u].abortReason="set"):(oe(t[u].status===0,"Unexpected transaction status in abort"),t[u].unwatcher(),a=a.concat(Pa(n.serverSyncTree_,t[u].currentWriteId,!0)),t[u].onComplete&&i.push(t[u].onComplete.bind(null,new Error("set"),!1,null))));l===-1?JI(e,void 0):t.length=l+1,Qi(n.eventQueue_,$c(e),a);for(let u=0;u<i.length;u++)Nl(i[u])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x5(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let a=t[i];try{a=decodeURIComponent(a.replace(/\+/g," "))}catch{}e+="/"+a}return e}function O5(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):xn(`Invalid query segment '${t}' in query '${n}'`)}return e}const pS=function(n,e){const t=D5(n),i=t.namespace;t.domain==="firebase.com"&&jr(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&jr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||H3();const a=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new cI(t.host,t.secure,i,a,e,"",i!==t.subdomain),path:new st(t.pathString)}},D5=function(n){let e="",t="",i="",a="",l="",u=!0,d="https",p=443;if(typeof n=="string"){let m=n.indexOf("//");m>=0&&(d=n.substring(0,m-1),n=n.substring(m+2));let y=n.indexOf("/");y===-1&&(y=n.length);let E=n.indexOf("?");E===-1&&(E=n.length),e=n.substring(0,Math.min(y,E)),y<E&&(a=x5(n.substring(y,E)));const w=O5(n.substring(Math.min(n.length,E)));m=e.indexOf(":"),m>=0?(u=d==="https"||d==="wss",p=parseInt(e.substring(m+1),10)):m=e.length;const I=e.slice(0,m);if(I.toLowerCase()==="localhost")t="localhost";else if(I.split(".").length<=2)t=I;else{const C=e.indexOf(".");i=e.substring(0,C).toLowerCase(),t=e.substring(C+1),l=i}"ns"in w&&(l=w.ns)}return{host:e,port:p,domain:t,subdomain:i,secure:u,scheme:d,pathString:a,namespace:l}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k5{constructor(e,t,i,a){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=a}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+jt(this.snapshot.exportVal())}}class P5{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M5{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return oe(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(e,t,i,a){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=a}get key(){return Ue(this._path)?null:vI(this._path)}get ref(){return new qr(this._repo,this._path)}get _queryIdentifier(){const e=Jb(this._queryParams),t=Yy(e);return t==="{}"?"default":t}get _queryObject(){return Jb(this._queryParams)}isEqual(e){if(e=ct(e),!(e instanceof Ev))return!1;const t=this._repo===e._repo,i=wI(this._path,e._path),a=this._queryIdentifier===e._queryIdentifier;return t&&i&&a}toJSON(){return this.toString()}toString(){return this._repo.toString()+R6(this._path)}}class qr extends Ev{constructor(e,t){super(e,t,new ev,!1)}get parent(){const e=TI(this._path);return e===null?null:new qr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Cc{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new st(e),i=j_(this.ref,e);return new Cc(this._node.getChild(t),i,wt)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,a)=>e(new Cc(a,j_(this.ref,i),wt)))}hasChild(e){const t=new st(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function dC(n,e){return n=ct(n),n._checkNotDeleted("ref"),e!==void 0?j_(n._root,e):n._root}function j_(n,e){return n=ct(n),je(n._path)===null?h5("child","path",e):rC("child","path",e),new qr(n._repo,zt(n._path,e))}function V5(n,e){n=ct(n),d5("set",n._path),c5("set",e,n._path);const t=new Mf;return S5(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function L5(n){n=ct(n);const e=new M5(()=>{}),t=new Tv(e);return b5(n._repo,n,t).then(i=>new Cc(i,new qr(n._repo,n._path),n._queryParams.getIndex()))}class Tv{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new k5("value",this,new Cc(e.snapshotNode,new qr(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new P5(this,e,t):null}matches(e){return e instanceof Tv?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}VU(qr);zU(qr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U5="FIREBASE_DATABASE_EMULATOR_HOST",F_={};let j5=!1;function F5(n,e,t,i){const a=e.lastIndexOf(":"),l=e.substring(0,a),u=Fr(l);n.repoInfo_=new cI(e,u,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),i&&(n.authTokenProvider_=i)}function z5(n,e,t,i,a){let l=i||n.options.databaseURL;l===void 0&&(n.options.projectId||jr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),mn("Using default host for project ",n.options.projectId),l=`${n.options.projectId}-default-rtdb.firebaseio.com`);let u=pS(l,a),d=u.repoInfo,p;typeof process<"u"&&Mb&&(p=Mb[U5]),p?(l=`http://${p}?ns=${d.namespace}`,u=pS(l,a),d=u.repoInfo):u.repoInfo.secure;const m=new e6(n.name,n.options,e);f5("Invalid Firebase Database URL",u),Ue(u.path)||jr("Database URL must point to the root of a Firebase Database (not including a child path).");const y=H5(d,n,m,new J3(n,t));return new q5(y,n)}function B5(n,e){const t=F_[e];(!t||t[n.key]!==n)&&jr(`Database ${e}(${n.repoInfo_}) has already been deleted.`),R5(n),delete t[n.key]}function H5(n,e,t,i){let a=F_[e.name];a||(a={},F_[e.name]=a);let l=a[n.toURLString()];return l&&jr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new v5(n,j5,t,i),a[n.toURLString()]=l,l}class q5{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(E5(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new qr(this._repo,We())),this._rootInternal}_delete(){return this._rootInternal!==null&&(B5(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&jr("Cannot call "+e+" on a deleted database.")}}function G5(n=kc(),e){const t=Br(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=X_("database");i&&W5(t,...i)}return t}function W5(n,e,t,i={}){n=ct(n),n._checkNotDeleted("useEmulator");const a=`${e}:${t}`,l=n._repoInternal;if(n._instanceStarted){if(a===n._repoInternal.repoInfo_.host&&Pr(i,l.repoInfo_.emulatorOptions))return;jr("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let u;if(l.repoInfo_.nodeAdmin)i.mockUserToken&&jr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new Hd(Hd.OWNER);else if(i.mockUserToken){const d=typeof i.mockUserToken=="string"?i.mockUserToken:Z_(i.mockUserToken,n.app.options.projectId);u=new Hd(d)}Fr(e)&&(Vf(e),Lf("Database",!0)),F5(l,a,i,u)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y5(n){L3(qs),si(new Hn("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),a=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return z5(i,a,l,t)},"PUBLIC").setMultipleInstances(!0)),gn(Vb,Lb,n),gn(Vb,Lb,"esm2017")}Dr.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Dr.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Y5();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC="firebasestorage.googleapis.com",$5="storageBucket",K5=2*60*1e3,Q5=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji extends ai{constructor(e,t,i=0){super(Wg(e),`Firebase Storage: ${t} (${Wg(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ji.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Wg(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Xi;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Xi||(Xi={}));function Wg(n){return"storage/"+n}function X5(){const n="An unknown error occurred, please check the error payload for server response.";return new Ji(Xi.UNKNOWN,n)}function Z5(){return new Ji(Xi.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function J5(){return new Ji(Xi.CANCELED,"User canceled the upload/download.")}function e9(n){return new Ji(Xi.INVALID_URL,"Invalid URL '"+n+"'.")}function t9(n){return new Ji(Xi.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function mS(n){return new Ji(Xi.INVALID_ARGUMENT,n)}function pC(){return new Ji(Xi.APP_DELETED,"The Firebase app was deleted.")}function n9(n){return new Ji(Xi.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=vi.makeFromUrl(e,t)}catch{return new vi(e,"")}if(i.path==="")return i;throw t9(e)}static makeFromUrl(e,t){let i=null;const a="([A-Za-z0-9.\\-_]+)";function l(re){re.path.charAt(re.path.length-1)==="/"&&(re.path_=re.path_.slice(0,-1))}const u="(/(.*))?$",d=new RegExp("^gs://"+a+u,"i"),p={bucket:1,path:3};function m(re){re.path_=decodeURIComponent(re.path)}const y="v[A-Za-z0-9_]+",E=t.replace(/[.]/g,"\\."),w="(/([^?#]*).*)?$",I=new RegExp(`^https?://${E}/${y}/b/${a}/o${w}`,"i"),C={bucket:1,path:3},B=t===fC?"(?:storage.googleapis.com|storage.cloud.google.com)":t,j="([^?#]*)",$=new RegExp(`^https?://${B}/${a}/${j}`,"i"),te=[{regex:d,indices:p,postModify:l},{regex:I,indices:C,postModify:m},{regex:$,indices:{bucket:1,path:2},postModify:m}];for(let re=0;re<te.length;re++){const ce=te[re],ve=ce.regex.exec(e);if(ve){const M=ve[ce.indices.bucket];let R=ve[ce.indices.path];R||(R=""),i=new vi(M,R),ce.postModify(i);break}}if(i==null)throw e9(e);return i}}class i9{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r9(n,e,t){let i=1,a=null,l=null,u=!1,d=0;function p(){return d===2}let m=!1;function y(...j){m||(m=!0,e.apply(null,j))}function E(j){a=setTimeout(()=>{a=null,n(I,p())},j)}function w(){l&&clearTimeout(l)}function I(j,...$){if(m){w();return}if(j){w(),y.call(null,j,...$);return}if(p()||u){w(),y.call(null,j,...$);return}i<64&&(i*=2);let te;d===1?(d=2,te=0):te=(i+Math.random())*1e3,E(te)}let C=!1;function B(j){C||(C=!0,w(),!m&&(a!==null?(j||(d=2),clearTimeout(a),E(0)):j||(d=1)))}return E(0),l=setTimeout(()=>{u=!0,B(!0)},t),B}function s9(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a9(n){return n!==void 0}function gS(n,e,t,i){if(i<e)throw mS(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw mS(`Invalid value for '${n}'. Expected ${t} or less.`)}function o9(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const a=e(i)+"="+e(n[i]);t=t+a+"&"}return t=t.slice(0,-1),t}var xf;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(xf||(xf={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l9(n,e){const t=n>=500&&n<600,a=[408,429].indexOf(n)!==-1,l=e.indexOf(n)!==-1;return t||a||l}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u9{constructor(e,t,i,a,l,u,d,p,m,y,E,w=!0,I=!1){this.url_=e,this.method_=t,this.headers_=i,this.body_=a,this.successCodes_=l,this.additionalRetryCodes_=u,this.callback_=d,this.errorCallback_=p,this.timeout_=m,this.progressCallback_=y,this.connectionFactory_=E,this.retry=w,this.isUsingEmulator=I,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((C,B)=>{this.resolve_=C,this.reject_=B,this.start_()})}start_(){const e=(i,a)=>{if(a){i(!1,new xd(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const u=d=>{const p=d.loaded,m=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,m)};this.progressCallback_!==null&&l.addUploadProgressListener(u),l.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(u),this.pendingConnection_=null;const d=l.getErrorCode()===xf.NO_ERROR,p=l.getStatus();if(!d||l9(p,this.additionalRetryCodes_)&&this.retry){const y=l.getErrorCode()===xf.ABORT;i(!1,new xd(!1,null,y));return}const m=this.successCodes_.indexOf(p)!==-1;i(!0,new xd(m,l))})},t=(i,a)=>{const l=this.resolve_,u=this.reject_,d=a.connection;if(a.wasSuccessCode)try{const p=this.callback_(d,d.getResponse());a9(p)?l(p):l()}catch(p){u(p)}else if(d!==null){const p=X5();p.serverResponse=d.getErrorText(),this.errorCallback_?u(this.errorCallback_(d,p)):u(p)}else if(a.canceled){const p=this.appDelete_?pC():J5();u(p)}else{const p=Z5();u(p)}};this.canceled_?t(!1,new xd(!1,null,!0)):this.backoffId_=r9(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&s9(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class xd{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function c9(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function h9(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function d9(n,e){e&&(n["X-Firebase-GMPID"]=e)}function f9(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function p9(n,e,t,i,a,l,u=!0,d=!1){const p=o9(n.urlParams),m=n.url+p,y=Object.assign({},n.headers);return d9(y,e),c9(y,t),h9(y,l),f9(y,i),new u9(m,n.method,y,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,a,u,d)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m9(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function g9(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e,t){this._service=e,t instanceof vi?this._location=t:this._location=vi.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Of(e,t)}get root(){const e=new vi(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return g9(this._location.path)}get storage(){return this._service}get parent(){const e=m9(this._location.path);if(e===null)return null;const t=new vi(this._location.bucket,e);return new Of(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw n9(e)}}function _S(n,e){const t=e==null?void 0:e[$5];return t==null?null:vi.makeFromBucketSpec(t,n)}function _9(n,e,t,i={}){n.host=`${e}:${t}`;const a=Fr(e);a&&(Vf(`https://${n.host}/b`),Lf("Storage",!0)),n._isUsingEmulator=!0,n._protocol=a?"https":"http";const{mockUserToken:l}=i;l&&(n._overrideAuthToken=typeof l=="string"?l:Z_(l,n.app.options.projectId))}class y9{constructor(e,t,i,a,l,u=!1){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=a,this._firebaseVersion=l,this._isUsingEmulator=u,this._bucket=null,this._host=fC,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=K5,this._maxUploadRetryTime=Q5,this._requests=new Set,a!=null?this._bucket=vi.makeFromBucketSpec(a,this._host):this._bucket=_S(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=vi.makeFromBucketSpec(this._url,e):this._bucket=_S(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){gS("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){gS("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(wn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Of(this,e)}_makeRequest(e,t,i,a,l=!0){if(this._deleted)return new i9(pC());{const u=p9(e,this._appId,i,a,t,this._firebaseVersion,l,this._isUsingEmulator);return this._requests.add(u),u.getPromise().then(()=>this._requests.delete(u),()=>this._requests.delete(u)),u}}async makeRequestWithTokens(e,t){const[i,a]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,a).getPromise()}}const yS="@firebase/storage",vS="0.13.13";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC="storage";function v9(n=kc(),e){n=ct(n);const i=Br(n,mC).getImmediate({identifier:e}),a=X_("storage");return a&&E9(i,...a),i}function E9(n,e,t,i={}){_9(n,e,t,i)}function T9(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),a=n.getProvider("app-check-internal");return new y9(t,i,a,e,qs)}function w9(){si(new Hn(mC,T9,"PUBLIC").setMultipleInstances(!0)),gn(yS,vS,""),gn(yS,vS,"esm2017")}w9();const b9={apiKey:"AIzaSyDzfp4ZE6PPqF37t8jHMjo2E7F7CLHp4GY",authDomain:"xprime-3973c.firebaseapp.com",projectId:"xprime-3973c",storageBucket:"xprime-3973c.firebasestorage.app",messagingSenderId:"237348420750",appId:"1:237348420750:web:ea697bfde946b658c41ddf",measurementId:"G-8V5EM4XPCR",databaseURL:"https://xprime-3973c-default-rtdb.firebaseio.com/"},Kc=i1(b9),_l=hy(Kc),Jo=hR(Kc),gC=G5(Kc);v9(Kc);k3(Kc);const S9=()=>{const[n,e]=U.useState(null),[t,i]=U.useState(!0),[a,l]=U.useState(null);if(U.useEffect(()=>{(async()=>{try{const w=_l.currentUser;if(!w){l("No user is currently logged in."),i(!1);return}const I=dC(gC,"users/"+w.uid),C=await L5(I);C.exists()?e(C.val()):l("User data not found.")}catch(w){l("Failed to fetch user data: "+w.message)}finally{i(!1)}})()},[]),t)return b.jsx("div",{className:"profile-container-message",children:b.jsx("p",{style:{margin:"100px auto",fontWeight:"bold",fontSize:"19px",color:"yellow"},children:"Loading user data..."})});if(a)return b.jsx("div",{className:"profile-container-message",children:b.jsx("p",{className:"error-message",children:a})});const{fullName:u,email:d,mobileNumber:p,gender:m,birthdate:y}=n||{};return b.jsxs("div",{className:"profile-container",children:[b.jsx("h2",{children:"User Profile"}),b.jsxs("div",{className:"profile-card",children:[b.jsx("div",{className:"image",children:b.jsx("img",{src:eO,alt:"User Profile",className:"profile-image"})}),b.jsxs("div",{className:"profile-details",children:[b.jsxs("div",{className:"profile-info-row",children:[b.jsx("label",{children:"Full Name:"}),b.jsx("span",{children:u})]}),b.jsxs("div",{className:"profile-info-row",children:[b.jsx("label",{children:"Email:"}),b.jsx("span",{children:d})]}),b.jsxs("div",{className:"profile-info-row",children:[b.jsx("label",{children:"Mobile:"}),b.jsx("span",{children:p})]}),b.jsxs("div",{className:"profile-info-row",children:[b.jsx("label",{children:"Gender:"}),b.jsx("span",{children:m})]}),b.jsxs("div",{className:"profile-info-row",children:[b.jsx("label",{children:"Birthdate:"}),b.jsx("span",{children:y})]})]})]})]})},A9=()=>{const[n,e]=U.useState(""),[t,i]=U.useState(""),[a,l]=U.useState(""),[u,d]=U.useState(""),p=async m=>{m.preventDefault(),l(""),d("");try{await Bk(_l,n,t),d("Login successful!"),e(""),i("")}catch(y){l(y.message)}};return b.jsx("div",{className:"login-container",children:b.jsxs("form",{className:"login-form",onSubmit:p,children:[b.jsx("h2",{children:"Login"}),b.jsxs("div",{className:"form-group",children:[b.jsx("label",{htmlFor:"email",children:"Email"}),b.jsx("input",{type:"email",id:"email",value:n,onChange:m=>e(m.target.value),placeholder:"Enter email",required:!0})]}),b.jsxs("div",{className:"form-group",children:[b.jsx("label",{htmlFor:"password",children:"Password"}),b.jsx("input",{type:"password",id:"password",value:t,onChange:m=>i(m.target.value),placeholder:"Enter password",required:!0})]}),a&&b.jsx("p",{className:"error-message",children:a}),u&&b.jsx("p",{className:"success-message",children:u}),b.jsxs("div",{className:"buttonlogin-k",style:{marginTop:"20px"},children:[b.jsx("button",{type:"submit",className:"login-button",children:"Login"}),b.jsx(Rt,{to:"/forgetpassword",children:"Forget Password !"})]}),b.jsxs("div",{className:"Design",children:[b.jsx("div",{className:"design1"}),b.jsx("h5",{children:"Or"}),b.jsx("div",{className:"design2"})]}),b.jsx("div",{className:"buttonlogin",style:{marginTop:"30px"},children:b.jsx(Rt,{to:"/adminlogin",className:"login-button",style:{textDecoration:"none",width:"100%"},children:"Admin"})})]})})},R9=()=>{const[n,e]=U.useState(""),[t,i]=U.useState(""),[a,l]=U.useState(""),[u,d]=U.useState(""),[p,m]=U.useState(""),[y,E]=U.useState(""),[w,I]=U.useState(""),[C,B]=U.useState(""),[j,$]=U.useState(""),K=El(),te=async re=>{if(re.preventDefault(),B(""),$(""),y!==w){B("Passwords do not match");return}try{const ve=(await x1(_l,p,y)).user;await qk(ve,{displayName:n}),await V5(dC(gC,"users/"+ve.uid),{fullName:n,mobileNumber:t,gender:a,birthdate:u,email:ve.email,createdAt:Date.now()}),$("Signup successful!"),e(""),i(""),l(""),d(""),m(""),E(""),I(""),K("/login")}catch(ce){B(ce.message)}};return b.jsx("div",{className:"login-container",children:b.jsxs("form",{className:"login-form",onSubmit:te,children:[b.jsx("h2",{children:"Signup"}),b.jsxs("div",{className:"form-row",children:[b.jsxs("div",{className:"form-group half-width",children:[b.jsx("label",{htmlFor:"fullName",children:"Full Name"}),b.jsx("input",{type:"text",id:"fullName",value:n,onChange:re=>e(re.target.value),placeholder:"Enter full name",required:!0})]}),b.jsxs("div",{className:"form-group half-width",children:[b.jsx("label",{htmlFor:"mobileNumber",children:"Mobile Number"}),b.jsx("input",{type:"tel",id:"mobileNumber",value:t,onChange:re=>i(re.target.value),placeholder:"Enter mobile number",required:!0})]})]}),b.jsxs("div",{className:"form-row",children:[b.jsxs("div",{className:"form-group half-width",children:[b.jsx("label",{htmlFor:"gender",children:"Gender"}),b.jsxs("select",{id:"gender",value:a,onChange:re=>l(re.target.value),required:!0,children:[b.jsx("option",{value:"",children:"Select gender"}),b.jsx("option",{value:"Male",children:"Male"}),b.jsx("option",{value:"Female",children:"Female"}),b.jsx("option",{value:"Other",children:"Other"})]})]}),b.jsxs("div",{className:"form-group half-width",children:[b.jsx("label",{htmlFor:"birthdate",children:"Birthdate"}),b.jsx("input",{type:"date",id:"birthdate",value:u,onChange:re=>d(re.target.value),required:!0})]})]}),b.jsxs("div",{className:"form-group",children:[b.jsx("label",{htmlFor:"email",children:"Email"}),b.jsx("input",{type:"email",id:"email",value:p,onChange:re=>m(re.target.value),placeholder:"Enter email",required:!0})]}),b.jsxs("div",{className:"form-group",children:[b.jsx("label",{htmlFor:"password",children:"Password"}),b.jsx("input",{type:"password",id:"password",value:y,onChange:re=>E(re.target.value),placeholder:"Enter password",required:!0})]}),b.jsxs("div",{className:"form-group",children:[b.jsx("label",{htmlFor:"confirmPassword",children:"Confirm Password"}),b.jsx("input",{type:"password",id:"confirmPassword",value:w,onChange:re=>I(re.target.value),placeholder:"Confirm password",required:!0})]}),C&&b.jsx("p",{className:"error-message",children:C}),j&&b.jsx("p",{className:"success-message",children:j}),b.jsx("div",{className:"buttonlogin",style:{marginTop:"20px"},children:b.jsx("button",{type:"submit",className:"login-button",children:"Sign Up"})})]})})};class I9 extends U.Component{constructor(t){super(t);fi(this,"handleImageLoad",t=>{this.setState(i=>({imagesLoaded:{...i.imagesLoaded,[t]:!0}}))});fi(this,"copyToClipboard",(t,i)=>{navigator.clipboard.writeText(t).then(()=>{this.setState({copiedId:i}),setTimeout(()=>this.setState({copiedId:null}),2e3)})});this.state={galleryData:[],copiedId:null,loading:!0,error:null,imagesLoaded:{}}}async componentDidMount(){try{const i=(await mf(Xo(Jo,"gallery"))).docs.map(a=>({id:a.id,...a.data()}));this.setState({galleryData:i,loading:!1})}catch(t){console.error("Error fetching gallery data from Firestore:",t),this.setState({error:"Failed to load gallery data.",loading:!1})}}render(){const{galleryData:t,copiedId:i,loading:a,error:l,imagesLoaded:u}=this.state;return a?b.jsx("div",{className:"loadingdiv",children:b.jsx("p",{style:{color:"yellow",fontWeight:"bold"},children:"Loading..!"})}):l?b.jsx("div",{children:l}):t.length===0?b.jsx("div",{children:"No gallery items found."}):b.jsx("div",{className:"gallery-container",children:t.map(d=>b.jsxs("div",{className:`gallery-item ${u[d.id]?"":"loading-shine"}`,children:[b.jsx("img",{src:d.image,alt:d.title,onLoad:()=>this.handleImageLoad(d.id),style:{display:u[d.id]?"block":"none"}}),!u[d.id]&&b.jsx("div",{className:"image-placeholder loading-shine"}),b.jsxs("div",{className:"overlay",children:[b.jsx("p",{title:d.prompt,children:d.prompt}),b.jsx("button",{className:"copy-btn",onClick:()=>this.copyToClipboard(d.prompt,d.id),title:"Copy prompt to clipboard",children:b.jsx(K_,{size:20,style:{color:"white"}})}),i===d.id&&b.jsx("span",{className:"copy-feedback",children:"Copied!"})]})]},d.id))})}}const C9=()=>b.jsxs("div",{className:"about-container",children:[b.jsx("h2",{children:"About Us"}),b.jsx("p",{children:"Welcome to our application! We are dedicated to providing the best service possible."}),b.jsx("p",{children:"Our team works hard to ensure a seamless experience for all users."}),b.jsx("p",{children:"Contact us for more information or support."})]}),Nc={_origin:"https://api.emailjs.com"},N9=(n,e="https://api.emailjs.com")=>{Nc._userID=n,Nc._origin=e},_C=(n,e,t)=>{if(!n)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!t)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class ES{constructor(e){this.status=e.status,this.text=e.responseText}}const yC=(n,e,t={})=>new Promise((i,a)=>{const l=new XMLHttpRequest;l.addEventListener("load",({target:u})=>{const d=new ES(u);d.status===200||d.text==="OK"?i(d):a(d)}),l.addEventListener("error",({target:u})=>{a(new ES(u))}),l.open("POST",Nc._origin+n,!0),Object.keys(t).forEach(u=>{l.setRequestHeader(u,t[u])}),l.send(e)}),x9=(n,e,t,i)=>{const a=i||Nc._userID;return _C(a,n,e),yC("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:a,service_id:n,template_id:e,template_params:t}),{"Content-type":"application/json"})},O9=n=>{let e;if(typeof n=="string"?e=document.querySelector(n):e=n,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},D9=(n,e,t,i)=>{const a=i||Nc._userID,l=O9(t);_C(a,n,e);const u=new FormData(l);return u.append("lib_version","3.2.0"),u.append("service_id",n),u.append("template_id",e),u.append("user_id",a),yC("/api/v1.0/email/send-form",u)},k9={init:N9,send:x9,sendForm:D9};class P9 extends U.Component{constructor(t){super(t);fi(this,"handleChange",t=>{this.setState({[t.target.name]:t.target.value})});fi(this,"handleSubmit",t=>{t.preventDefault();const{name:i,subject:a,email:l,message:u}=this.state;if(!i||!a||!l||!u){this.setState({feedback:"Please fill in all fields."});return}const d={sender_name:i,subject:a,reply_to:l,message:u,time:new Date().toLocaleString()};k9.send("service_hqbg0og","template_p9zyac5",d,"DrpwDUdK9JLWPFiDh").then(p=>{this.setState({feedback:"Message sent successfully!",name:"",subject:"",email:"",message:""})},p=>{this.setState({feedback:"Failed to send message. Please try again later."})})});this.state={name:"",subject:"",email:"",message:"",feedback:""}}render(){const{name:t,subject:i,email:a,message:l,feedback:u}=this.state;return b.jsxs("div",{className:"contact-container",children:[b.jsx("h1",{className:"contact-header",children:"Contact Us"}),b.jsx("div",{className:"flex",children:b.jsxs("div",{className:"panel1",children:[b.jsxs("form",{onSubmit:this.handleSubmit,children:[b.jsx("div",{className:"form-group-c",children:b.jsx("input",{name:"name",placeholder:"Name : ",type:"text",value:t,onChange:this.handleChange,required:!0})}),b.jsx("div",{className:"form-group-c",children:b.jsx("input",{name:"subject",placeholder:"Subject : ",type:"text",value:i,onChange:this.handleChange,required:!0})}),b.jsx("div",{className:"form-group-c",children:b.jsx("input",{name:"email",placeholder:"Email : ",type:"email",value:a,onChange:this.handleChange,required:!0})}),b.jsx("div",{className:"form-group-c",children:b.jsx("textarea",{name:"message",placeholder:"Text hear..!",value:l,onChange:this.handleChange,required:!0})}),b.jsx("div",{className:"buttoncontact",children:b.jsx("button",{type:"submit",className:"contact-button",children:"Send"})})]}),u&&b.jsx("p",{className:"feedback-message",children:u})]})})]})}}class M9 extends U.Component{constructor(t){super(t);fi(this,"copyToClipboard",(t,i)=>{navigator.clipboard.writeText(t).then(()=>{this.setState({copiedId:i}),setTimeout(()=>this.setState({copiedId:null}),2e3)})});this.state={trendingData:[],copiedId:null,loading:!0,error:null}}async componentDidMount(){try{const i=(await mf(Xo(Jo,"trending"))).docs.map(a=>({id:a.id,...a.data()}));this.setState({trendingData:i,loading:!1})}catch(t){console.error("Error fetching trending data from Firestore:",t),this.setState({error:"Failed to load trending data.",loading:!1})}}render(){const{trendingData:t,copiedId:i,loading:a,error:l}=this.state;return a?b.jsx("div",{className:"loadingdiv",children:b.jsx("p",{style:{color:"yellow",fontWeight:"bold"},children:"Loading..!"})}):l?b.jsx("div",{children:l}):t.length===0?b.jsx("div",{children:"No trending items found."}):b.jsx("div",{className:"gallery-container",children:t.map(u=>b.jsxs("div",{className:"gallery-item",children:[b.jsx("img",{src:u.image,alt:u.title}),b.jsxs("div",{className:"overlay",children:[b.jsx("p",{title:u.prompt,children:u.prompt}),b.jsx("button",{className:"copy-btn",onClick:()=>this.copyToClipboard(u.prompt,u.id),title:"Copy prompt to clipboard",children:b.jsx(K_,{size:20,style:{color:"white"}})}),i===u.id&&b.jsx("span",{className:"copy-feedback",children:"Copied!"})]})]},u.id))})}}class V9 extends U.Component{constructor(t){super(t);fi(this,"componentDidMount",async()=>{try{const i=(await mf(Xo(Jo,"gallery"))).docs.map(u=>({id:u.id,...u.data()})),l=(await mf(Xo(Jo,"trending"))).docs.map(u=>({id:u.id,...u.data()}));this.setState({galleryData:i,trendingData:l})}catch(t){console.error("Error fetching data from Firestore:",t)}});fi(this,"handleChange",t=>{this.setState({[t.target.name]:t.target.value})});fi(this,"addGalleryItemToFirestore",async t=>{try{await Rb(Xo(Jo,"gallery"),t)}catch(i){throw console.error("Error adding gallery item to Firestore:",i),i}});fi(this,"addTrendingItemToFirestore",async t=>{try{await Rb(Xo(Jo,"trending"),t)}catch(i){throw console.error("Error adding trending item to Firestore:",i),i}});fi(this,"handleSubmit",async t=>{const{galleryImageUrl:i,galleryTitle:a,galleryPrompt:l,trendingImageUrl:u,trendingTitle:d,trendingPrompt:p,galleryData:m,trendingData:y}=this.state;if(t==="gallery"){const E={image:i,title:a,prompt:l};try{await this.addGalleryItemToFirestore(E);const w=[...m,E];this.setState({galleryData:w,galleryImageUrl:"",galleryTitle:"",galleryPrompt:""}),alert("Gallery data saved to backend and Firestore successfully")}catch(w){alert("Error saving gallery data: "+w.message)}}else if(t==="trending"){const E={image:u,title:d,prompt:p};try{await this.addTrendingItemToFirestore(E);const w=[...y,E];this.setState({trendingData:w,trendingImageUrl:"",trendingTitle:"",trendingPrompt:""}),alert("Trending data saved to backend and Firestore successfully")}catch(w){alert("Error saving trending data: "+w.message)}}});this.state={galleryImageUrl:"",galleryTitle:"",galleryPrompt:"",trendingImageUrl:"",trendingTitle:"",trendingPrompt:"",galleryData:[],trendingData:[]}}render(){const{galleryImageUrl:t,galleryTitle:i,galleryPrompt:a,trendingImageUrl:l,trendingTitle:u,trendingPrompt:d,galleryData:p,trendingData:m}=this.state;return b.jsxs("div",{className:"admin-panel",children:[b.jsx("h2",{children:"Admin Panel"}),b.jsxs("div",{className:"container",children:[b.jsxs("section",{className:"admin-section",children:[b.jsx("h3",{children:"Gallery"}),b.jsx("input",{type:"text",name:"galleryImageUrl",placeholder:"Image URL",value:t,onChange:this.handleChange}),b.jsx("input",{type:"text",name:"galleryTitle",placeholder:"Title",value:i,onChange:this.handleChange}),b.jsx("input",{type:"text",name:"galleryPrompt",placeholder:"Prompt",value:a,onChange:this.handleChange}),b.jsx("button",{onClick:()=>this.handleSubmit("gallery"),children:"Submit"})]}),b.jsxs("section",{className:"admin-section",children:[b.jsx("h3",{children:"Trending"}),b.jsx("input",{type:"text",name:"trendingImageUrl",placeholder:"Image URL",value:l,onChange:this.handleChange}),b.jsx("input",{type:"text",name:"trendingTitle",placeholder:"Title",value:u,onChange:this.handleChange}),b.jsx("input",{type:"text",name:"trendingPrompt",placeholder:"Prompt",value:d,onChange:this.handleChange}),b.jsx("button",{onClick:()=>this.handleSubmit("trending"),children:"Submit"})]})]})]})}}const L9=({setAdminLoggedIn:n})=>{const[e,t]=U.useState(""),[i,a]=U.useState(""),[l,u]=U.useState(""),[d,p]=U.useState(""),m=El(),y=E=>{E.preventDefault(),u(""),p(""),e==="shrikant"&&i==="264#Shrikant@45"?(p("Login successful!"),t(""),a(""),n(!0),m("/admin")):u("Invalid username or password")};return b.jsx("div",{className:"login-container",children:b.jsxs("form",{className:"login-form",onSubmit:y,children:[b.jsx("h2",{children:"Admin Login"}),b.jsxs("div",{className:"form-group",children:[b.jsx("label",{htmlFor:"username",children:"Username"}),b.jsx("input",{type:"text",id:"username",value:e,onChange:E=>t(E.target.value),placeholder:"Enter username",required:!0})]}),b.jsxs("div",{className:"form-group",children:[b.jsx("label",{htmlFor:"password",children:"Password"}),b.jsx("input",{type:"password",id:"password",value:i,onChange:E=>a(E.target.value),placeholder:"Enter password",required:!0})]}),l&&b.jsx("p",{className:"error-message",children:l}),d&&b.jsx("p",{className:"success-message",children:d}),b.jsx("div",{className:"buttonlogin",children:b.jsx("button",{type:"submit",className:"login-button",children:"Login"})})]})})},U9=({setAdminLoggedIn:n})=>{const[e,t]=U.useState(""),[i,a]=U.useState(""),[l,u]=U.useState(""),[d,p]=U.useState(""),m=El(),y=async E=>{E.preventDefault(),u(""),p("");try{await x1(_l,e,i),p("Account created successfully!"),t(""),a(""),n(!0),m("/admin")}catch(w){u(w.message)}};return b.jsx("div",{className:"login-container",children:b.jsxs("form",{className:"login-form",onSubmit:y,children:[b.jsx("h2",{children:"Admin Sign Up"}),b.jsxs("div",{className:"form-group",children:[b.jsx("label",{htmlFor:"email",children:"Email"}),b.jsx("input",{type:"email",id:"email",value:e,onChange:E=>t(E.target.value),placeholder:"Enter email",required:!0})]}),b.jsxs("div",{className:"form-group",children:[b.jsx("label",{htmlFor:"password",children:"Password"}),b.jsx("input",{type:"password",id:"password",value:i,onChange:E=>a(E.target.value),placeholder:"Enter password",required:!0})]}),l&&b.jsx("p",{className:"error-message",children:l}),d&&b.jsx("p",{className:"success-message",children:d}),b.jsx("div",{className:"buttonlogin",children:b.jsx("button",{type:"submit",className:"login-button",children:"Sign Up"})})]})})},j9=""+new URL("lk-bo8b3C1f.png",import.meta.url).href;class F9 extends U.Component{constructor(e){super(e),this.state={admin:{fullName:"Shrikant Ashok Pawar",email:"shrikantpawar493@gmail.com",mobile:"+91 8862007036",gender:"Male",birthdate:"07-07-2005"}}}render(){const{fullName:e,email:t,mobile:i,gender:a,birthdate:l}=this.state.admin;return b.jsxs("div",{className:"profile-container",children:[b.jsx("h2",{children:"Admin Profile "}),b.jsxs("div",{className:"profile-card",children:[b.jsx("img",{src:j9,alt:"User Profile",className:"profile-image"}),b.jsxs("div",{className:"profile-details",children:[b.jsxs("div",{className:"profile-info-row",children:[b.jsx("label",{children:"Full Name:"}),b.jsx("span",{children:e})]}),b.jsxs("div",{className:"profile-info-row",children:[b.jsx("label",{children:"Email:"}),b.jsx("span",{children:t})]}),b.jsxs("div",{className:"profile-info-row",children:[b.jsx("label",{children:"Mobile:"}),b.jsx("span",{children:i})]}),b.jsxs("div",{className:"profile-info-row",children:[b.jsx("label",{children:"Gender:"}),b.jsx("span",{children:a})]}),b.jsxs("div",{className:"profile-info-row",children:[b.jsx("label",{children:"Birthdate:"}),b.jsx("span",{children:l})]})]})]})]})}}const z9=()=>{const[n,e]=U.useState(""),[t,i]=U.useState(""),[a,l]=U.useState(""),[u,d]=U.useState(0);U.useEffect(()=>{let m=null;return u>0?m=setInterval(()=>{d(y=>y-1)},1e3):u===0&&clearInterval(m),()=>clearInterval(m)},[u]);const p=m=>{if(m.preventDefault(),u>0){l(`Please wait ${u} seconds before sending another email.`);return}const y=hy();zk(y,n).then(()=>{i("Password reset email sent successfully."),l(""),e(""),d(60)}).catch(E=>{l(E.message),i("")})};return b.jsx("div",{className:"login-container",children:b.jsxs("form",{className:"login-form",onSubmit:p,children:[b.jsx("h2",{children:"Forget Password"}),b.jsxs("div",{className:"form-group",children:[b.jsx("label",{htmlFor:"email",children:"Email"}),b.jsx("input",{type:"email",id:"email",placeholder:"Enter email",value:n,onChange:m=>e(m.target.value),required:!0,disabled:u>0})]}),t&&b.jsx("p",{className:"success-message",children:t}),a&&b.jsx("p",{className:"error-message",children:a}),u>0&&b.jsxs("p",{style:{color:"white",textAlign:"center",marginTop:"10px"},children:["Please wait ",u," seconds before sending another email."]}),b.jsx("div",{className:"buttonlogin",children:b.jsx("button",{type:"submit",className:"login-button",disabled:u>0,children:"Send"})})]})})},B9=()=>{const n=hy(),e=hR(),t=n.currentUser,[i,a]=U.useState(""),[l,u]=U.useState(t?t.email:""),[d,p]=U.useState(""),[m,y]=U.useState(""),[E,w]=U.useState(""),[I,C]=U.useState(""),[B,j]=U.useState(!0);U.useEffect(()=>{t?(async()=>{try{const te=C_(e,"users",t.uid),re=await mL(te);if(re.exists()){const ce=re.data();a(ce.name||""),p(ce.phone||""),y(ce.address||"")}j(!1)}catch{C("Failed to load user data."),j(!1)}})():j(!1)},[t,e]);const $=async K=>{if(K.preventDefault(),w(""),C(""),!t){C("No user is logged in.");return}try{l!==t.email&&await Gk(t,l);const te=C_(e,"users",t.uid);await gL(te,{name:i,phone:d,address:m},{merge:!0}),w("Profile updated successfully.")}catch(te){C(te.message)}};return B?b.jsx("div",{children:"Loading..."}):b.jsx("div",{className:"login-container",children:b.jsxs("form",{className:"login-form",onSubmit:$,children:[b.jsx("h2",{children:"Update Profile"}),b.jsxs("div",{className:"form-group",children:[b.jsx("label",{htmlFor:"name",children:"Name"}),b.jsx("input",{type:"text",id:"name",placeholder:"Enter name",value:i,onChange:K=>a(K.target.value),required:!0})]}),b.jsxs("div",{className:"form-group",children:[b.jsx("label",{htmlFor:"email",children:"Email"}),b.jsx("input",{type:"email",id:"email",placeholder:"Enter email",value:l,onChange:K=>u(K.target.value),required:!0})]}),b.jsxs("div",{className:"form-group",children:[b.jsx("label",{htmlFor:"phone",children:"Phone"}),b.jsx("input",{type:"tel",id:"phone",placeholder:"Enter phone number",value:d,onChange:K=>p(K.target.value)})]}),b.jsxs("div",{className:"form-group",children:[b.jsx("label",{htmlFor:"address",children:"Address"}),b.jsx("textarea",{id:"address",placeholder:"Enter address",value:m,onChange:K=>y(K.target.value)})]}),E&&b.jsx("p",{className:"success-message",children:E}),I&&b.jsx("p",{className:"error-message",children:I}),b.jsx("div",{className:"buttonlogin",children:b.jsx("button",{type:"submit",className:"login-button",children:"Update"})})]})})};function H9(){const[n,e]=U.useState(null),[t,i]=U.useState(()=>localStorage.getItem("adminLoggedIn")==="true");return U.useEffect(()=>{const a=Kk(_l,l=>{e(l)});return()=>a()},[]),U.useEffect(()=>{localStorage.setItem("adminLoggedIn",t)},[t]),U.useEffect(()=>{const a=()=>{Qk(_l).catch(l=>{console.error("Error signing out on unload:",l)}),localStorage.removeItem("adminLoggedIn")};return window.addEventListener("beforeunload",a),()=>{window.removeEventListener("beforeunload",a)}},[]),b.jsx(p2,{children:b.jsxs("div",{className:"App",children:[b.jsx(Q2,{user:n,setUser:e,adminLoggedIn:t,setAdminLoggedIn:i}),b.jsxs(YT,{children:[b.jsx(Tt,{path:"/",element:b.jsx(J2,{})}),!n&&!t&&b.jsx(Tt,{path:"/login",element:b.jsx(A9,{})}),!n&&!t&&b.jsx(Tt,{path:"/signup",element:b.jsx(R9,{})}),(n||t)&&b.jsx(Tt,{path:"/login",element:b.jsx(Eg,{to:"/"})}),(n||t)&&b.jsx(Tt,{path:"/signup",element:b.jsx(Eg,{to:"/"})}),b.jsx(Tt,{path:"/gallery",element:b.jsx(I9,{})}),b.jsx(Tt,{path:"/trending",element:b.jsx(M9,{})}),b.jsx(Tt,{path:"/about",element:b.jsx(C9,{})}),b.jsx(Tt,{path:"/contact",element:b.jsx(P9,{})}),b.jsx(Tt,{path:"/profile",element:b.jsx(S9,{})}),b.jsx(Tt,{path:"/adminlogin",element:b.jsx(L9,{setAdminLoggedIn:i})}),b.jsx(Tt,{path:"/admin",element:b.jsx(V9,{})}),b.jsx(Tt,{path:"/adminsignup",element:b.jsx(U9,{setAdminLoggedIn:i})}),b.jsx(Tt,{path:"/admin/profile",element:b.jsx(F9,{})}),b.jsx(Tt,{path:"/forgetpassword",element:b.jsx(z9,{})}),b.jsx(Tt,{path:"/userprofile",element:b.jsx(B9,{user:n})}),b.jsx(Tt,{path:"*",element:b.jsx(Eg,{to:"/"})})]}),b.jsxs(YT,{children:[b.jsx(Tt,{path:"/",element:null}),b.jsx(Tt,{path:"/gallery",element:null}),b.jsx(Tt,{path:"/trending",element:null}),b.jsx(Tt,{path:"*",element:b.jsx(X2,{})})]})]})})}ex.createRoot(document.getElementById("root")).render(b.jsx(U.StrictMode,{children:b.jsx(H9,{})}));
