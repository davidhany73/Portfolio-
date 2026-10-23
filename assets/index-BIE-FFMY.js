(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();function Qd(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function l0(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(i){var r=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(n,i,r.get?r:{enumerable:!0,get:function(){return t[i]}})}),n}var c0={exports:{}},Tc={},u0={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var go=Symbol.for("react.element"),Ky=Symbol.for("react.portal"),Zy=Symbol.for("react.fragment"),Qy=Symbol.for("react.strict_mode"),Jy=Symbol.for("react.profiler"),eS=Symbol.for("react.provider"),tS=Symbol.for("react.context"),nS=Symbol.for("react.forward_ref"),iS=Symbol.for("react.suspense"),rS=Symbol.for("react.memo"),aS=Symbol.for("react.lazy"),Bp=Symbol.iterator;function sS(t){return t===null||typeof t!="object"?null:(t=Bp&&t[Bp]||t["@@iterator"],typeof t=="function"?t:null)}var f0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},d0=Object.assign,h0={};function ss(t,e,n){this.props=t,this.context=e,this.refs=h0,this.updater=n||f0}ss.prototype.isReactComponent={};ss.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ss.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function p0(){}p0.prototype=ss.prototype;function Jd(t,e,n){this.props=t,this.context=e,this.refs=h0,this.updater=n||f0}var eh=Jd.prototype=new p0;eh.constructor=Jd;d0(eh,ss.prototype);eh.isPureReactComponent=!0;var zp=Array.isArray,m0=Object.prototype.hasOwnProperty,th={current:null},g0={key:!0,ref:!0,__self:!0,__source:!0};function v0(t,e,n){var i,r={},a=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(a=""+e.key),e)m0.call(e,i)&&!g0.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:go,type:t,key:a,ref:s,props:r,_owner:th.current}}function oS(t,e){return{$$typeof:go,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function nh(t){return typeof t=="object"&&t!==null&&t.$$typeof===go}function lS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Hp=/\/+/g;function tu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?lS(""+t.key):e.toString(36)}function Tl(t,e,n,i,r){var a=typeof t;(a==="undefined"||a==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case go:case Ky:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+tu(s,0):i,zp(r)?(n="",t!=null&&(n=t.replace(Hp,"$&/")+"/"),Tl(r,e,n,"",function(c){return c})):r!=null&&(nh(r)&&(r=oS(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(Hp,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",zp(t))for(var o=0;o<t.length;o++){a=t[o];var l=i+tu(a,o);s+=Tl(a,e,n,l,r)}else if(l=sS(t),typeof l=="function")for(t=l.call(t),o=0;!(a=t.next()).done;)a=a.value,l=i+tu(a,o++),s+=Tl(a,e,n,l,r);else if(a==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Po(t,e,n){if(t==null)return t;var i=[],r=0;return Tl(t,i,"","",function(a){return e.call(n,a,r++)}),i}function cS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var an={current:null},bl={transition:null},uS={ReactCurrentDispatcher:an,ReactCurrentBatchConfig:bl,ReactCurrentOwner:th};function _0(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:Po,forEach:function(t,e,n){Po(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Po(t,function(){e++}),e},toArray:function(t){return Po(t,function(e){return e})||[]},only:function(t){if(!nh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=ss;Xe.Fragment=Zy;Xe.Profiler=Jy;Xe.PureComponent=Jd;Xe.StrictMode=Qy;Xe.Suspense=iS;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uS;Xe.act=_0;Xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=d0({},t.props),r=t.key,a=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(a=e.ref,s=th.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)m0.call(e,l)&&!g0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:go,type:t.type,key:r,ref:a,props:i,_owner:s}};Xe.createContext=function(t){return t={$$typeof:tS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:eS,_context:t},t.Consumer=t};Xe.createElement=v0;Xe.createFactory=function(t){var e=v0.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:nS,render:t}};Xe.isValidElement=nh;Xe.lazy=function(t){return{$$typeof:aS,_payload:{_status:-1,_result:t},_init:cS}};Xe.memo=function(t,e){return{$$typeof:rS,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=bl.transition;bl.transition={};try{t()}finally{bl.transition=e}};Xe.unstable_act=_0;Xe.useCallback=function(t,e){return an.current.useCallback(t,e)};Xe.useContext=function(t){return an.current.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t){return an.current.useDeferredValue(t)};Xe.useEffect=function(t,e){return an.current.useEffect(t,e)};Xe.useId=function(){return an.current.useId()};Xe.useImperativeHandle=function(t,e,n){return an.current.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return an.current.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return an.current.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return an.current.useMemo(t,e)};Xe.useReducer=function(t,e,n){return an.current.useReducer(t,e,n)};Xe.useRef=function(t){return an.current.useRef(t)};Xe.useState=function(t){return an.current.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return an.current.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return an.current.useTransition()};Xe.version="18.3.1";u0.exports=Xe;var he=u0.exports;const Vl=Qd(he);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fS=he,dS=Symbol.for("react.element"),hS=Symbol.for("react.fragment"),pS=Object.prototype.hasOwnProperty,mS=fS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,gS={key:!0,ref:!0,__self:!0,__source:!0};function x0(t,e,n){var i,r={},a=null,s=null;n!==void 0&&(a=""+n),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)pS.call(e,i)&&!gS.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:dS,type:t,key:a,ref:s,props:r,_owner:mS.current}}Tc.Fragment=hS;Tc.jsx=x0;Tc.jsxs=x0;c0.exports=Tc;var y=c0.exports,Ef={},y0={exports:{}},An={},S0={exports:{}},E0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,B){var H=I.length;I.push(B);e:for(;0<H;){var K=H-1>>>1,Q=I[K];if(0<r(Q,B))I[K]=B,I[H]=Q,H=K;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var B=I[0],H=I.pop();if(H!==B){I[0]=H;e:for(var K=0,Q=I.length,F=Q>>>1;K<F;){var Y=2*(K+1)-1,re=I[Y],ae=Y+1,de=I[ae];if(0>r(re,H))ae<Q&&0>r(de,re)?(I[K]=de,I[ae]=H,K=ae):(I[K]=re,I[Y]=H,K=Y);else if(ae<Q&&0>r(de,H))I[K]=de,I[ae]=H,K=ae;else break e}}return B}function r(I,B){var H=I.sortIndex-B.sortIndex;return H!==0?H:I.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var s=Date,o=s.now();t.unstable_now=function(){return s.now()-o}}var l=[],c=[],f=1,d=null,h=3,m=!1,_=!1,x=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(I){for(var B=n(c);B!==null;){if(B.callback===null)i(c);else if(B.startTime<=I)i(c),B.sortIndex=B.expirationTime,e(l,B);else break;B=n(c)}}function S(I){if(x=!1,v(I),!_)if(n(l)!==null)_=!0,X(R);else{var B=n(c);B!==null&&q(S,B.startTime-I)}}function R(I,B){_=!1,x&&(x=!1,u(N),N=-1),m=!0;var H=h;try{for(v(B),d=n(l);d!==null&&(!(d.expirationTime>B)||I&&!k());){var K=d.callback;if(typeof K=="function"){d.callback=null,h=d.priorityLevel;var Q=K(d.expirationTime<=B);B=t.unstable_now(),typeof Q=="function"?d.callback=Q:d===n(l)&&i(l),v(B)}else i(l);d=n(l)}if(d!==null)var F=!0;else{var Y=n(c);Y!==null&&q(S,Y.startTime-B),F=!1}return F}finally{d=null,h=H,m=!1}}var T=!1,w=null,N=-1,E=5,b=-1;function k(){return!(t.unstable_now()-b<E)}function $(){if(w!==null){var I=t.unstable_now();b=I;var B=!0;try{B=w(!0,I)}finally{B?Z():(T=!1,w=null)}}else T=!1}var Z;if(typeof g=="function")Z=function(){g($)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,V=D.port2;D.port1.onmessage=$,Z=function(){V.postMessage(null)}}else Z=function(){p($,0)};function X(I){w=I,T||(T=!0,Z())}function q(I,B){N=p(function(){I(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,X(R))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(h){case 1:case 2:case 3:var B=3;break;default:B=h}var H=h;h=B;try{return I()}finally{h=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,B){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var H=h;h=I;try{return B()}finally{h=H}},t.unstable_scheduleCallback=function(I,B,H){var K=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?K+H:K):H=K,I){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=H+Q,I={id:f++,callback:B,priorityLevel:I,startTime:H,expirationTime:Q,sortIndex:-1},H>K?(I.sortIndex=H,e(c,I),n(l)===null&&I===n(c)&&(x?(u(N),N=-1):x=!0,q(S,H-K))):(I.sortIndex=Q,e(l,I),_||m||(_=!0,X(R))),I},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(I){var B=h;return function(){var H=h;h=B;try{return I.apply(this,arguments)}finally{h=H}}}})(E0);S0.exports=E0;var vS=S0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _S=he,wn=vS;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var M0=new Set,Xs={};function Xr(t,e){$a(t,e),$a(t+"Capture",e)}function $a(t,e){for(Xs[t]=e,t=0;t<e.length;t++)M0.add(e[t])}var Ai=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mf=Object.prototype.hasOwnProperty,xS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Gp={},Vp={};function yS(t){return Mf.call(Vp,t)?!0:Mf.call(Gp,t)?!1:xS.test(t)?Vp[t]=!0:(Gp[t]=!0,!1)}function SS(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ES(t,e,n,i){if(e===null||typeof e>"u"||SS(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function sn(t,e,n,i,r,a,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=a,this.removeEmptyString=s}var zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){zt[t]=new sn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];zt[e]=new sn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){zt[t]=new sn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){zt[t]=new sn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){zt[t]=new sn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){zt[t]=new sn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){zt[t]=new sn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){zt[t]=new sn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){zt[t]=new sn(t,5,!1,t.toLowerCase(),null,!1,!1)});var ih=/[\-:]([a-z])/g;function rh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ih,rh);zt[e]=new sn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ih,rh);zt[e]=new sn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ih,rh);zt[e]=new sn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){zt[t]=new sn(t,1,!1,t.toLowerCase(),null,!1,!1)});zt.xlinkHref=new sn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){zt[t]=new sn(t,1,!1,t.toLowerCase(),null,!0,!0)});function ah(t,e,n,i){var r=zt.hasOwnProperty(e)?zt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ES(e,n,r,i)&&(n=null),i||r===null?yS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ni=_S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Lo=Symbol.for("react.element"),Ea=Symbol.for("react.portal"),Ma=Symbol.for("react.fragment"),sh=Symbol.for("react.strict_mode"),Tf=Symbol.for("react.profiler"),T0=Symbol.for("react.provider"),b0=Symbol.for("react.context"),oh=Symbol.for("react.forward_ref"),bf=Symbol.for("react.suspense"),wf=Symbol.for("react.suspense_list"),lh=Symbol.for("react.memo"),Xi=Symbol.for("react.lazy"),w0=Symbol.for("react.offscreen"),Wp=Symbol.iterator;function ps(t){return t===null||typeof t!="object"?null:(t=Wp&&t[Wp]||t["@@iterator"],typeof t=="function"?t:null)}var gt=Object.assign,nu;function Ps(t){if(nu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);nu=e&&e[1]||""}return`
`+nu+t}var iu=!1;function ru(t,e){if(!t||iu)return"";iu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),a=i.stack.split(`
`),s=r.length-1,o=a.length-1;1<=s&&0<=o&&r[s]!==a[o];)o--;for(;1<=s&&0<=o;s--,o--)if(r[s]!==a[o]){if(s!==1||o!==1)do if(s--,o--,0>o||r[s]!==a[o]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=o);break}}}finally{iu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ps(t):""}function MS(t){switch(t.tag){case 5:return Ps(t.type);case 16:return Ps("Lazy");case 13:return Ps("Suspense");case 19:return Ps("SuspenseList");case 0:case 2:case 15:return t=ru(t.type,!1),t;case 11:return t=ru(t.type.render,!1),t;case 1:return t=ru(t.type,!0),t;default:return""}}function Af(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ma:return"Fragment";case Ea:return"Portal";case Tf:return"Profiler";case sh:return"StrictMode";case bf:return"Suspense";case wf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case b0:return(t.displayName||"Context")+".Consumer";case T0:return(t._context.displayName||"Context")+".Provider";case oh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case lh:return e=t.displayName||null,e!==null?e:Af(t.type)||"Memo";case Xi:e=t._payload,t=t._init;try{return Af(t(e))}catch{}}return null}function TS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Af(e);case 8:return e===sh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function dr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function A0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function bS(t){var e=A0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,a=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,a.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function No(t){t._valueTracker||(t._valueTracker=bS(t))}function R0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=A0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Wl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Rf(t,e){var n=e.checked;return gt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function jp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=dr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function C0(t,e){e=e.checked,e!=null&&ah(t,"checked",e,!1)}function Cf(t,e){C0(t,e);var n=dr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Pf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Pf(t,e.type,dr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Xp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Pf(t,e,n){(e!=="number"||Wl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ls=Array.isArray;function Fa(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+dr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Lf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return gt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function $p(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(Ls(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:dr(n)}}function P0(t,e){var n=dr(e.value),i=dr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Yp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function L0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?L0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Do,N0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Do=Do||document.createElement("div"),Do.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Do.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function $s(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Is={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wS=["Webkit","ms","Moz","O"];Object.keys(Is).forEach(function(t){wS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Is[e]=Is[t]})});function D0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Is.hasOwnProperty(t)&&Is[t]?(""+e).trim():e+"px"}function I0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=D0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var AS=gt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Df(t,e){if(e){if(AS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function If(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Uf=null;function ch(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Of=null,ka=null,Ba=null;function qp(t){if(t=xo(t)){if(typeof Of!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=Cc(e),Of(t.stateNode,t.type,e))}}function U0(t){ka?Ba?Ba.push(t):Ba=[t]:ka=t}function O0(){if(ka){var t=ka,e=Ba;if(Ba=ka=null,qp(t),e)for(t=0;t<e.length;t++)qp(e[t])}}function F0(t,e){return t(e)}function k0(){}var au=!1;function B0(t,e,n){if(au)return t(e,n);au=!0;try{return F0(t,e,n)}finally{au=!1,(ka!==null||Ba!==null)&&(k0(),O0())}}function Ys(t,e){var n=t.stateNode;if(n===null)return null;var i=Cc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var Ff=!1;if(Ai)try{var ms={};Object.defineProperty(ms,"passive",{get:function(){Ff=!0}}),window.addEventListener("test",ms,ms),window.removeEventListener("test",ms,ms)}catch{Ff=!1}function RS(t,e,n,i,r,a,s,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Us=!1,jl=null,Xl=!1,kf=null,CS={onError:function(t){Us=!0,jl=t}};function PS(t,e,n,i,r,a,s,o,l){Us=!1,jl=null,RS.apply(CS,arguments)}function LS(t,e,n,i,r,a,s,o,l){if(PS.apply(this,arguments),Us){if(Us){var c=jl;Us=!1,jl=null}else throw Error(ne(198));Xl||(Xl=!0,kf=c)}}function $r(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function z0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Kp(t){if($r(t)!==t)throw Error(ne(188))}function NS(t){var e=t.alternate;if(!e){if(e=$r(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var a=r.alternate;if(a===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===a.child){for(a=r.child;a;){if(a===n)return Kp(r),t;if(a===i)return Kp(r),e;a=a.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=a;else{for(var s=!1,o=r.child;o;){if(o===n){s=!0,n=r,i=a;break}if(o===i){s=!0,i=r,n=a;break}o=o.sibling}if(!s){for(o=a.child;o;){if(o===n){s=!0,n=a,i=r;break}if(o===i){s=!0,i=a,n=r;break}o=o.sibling}if(!s)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function H0(t){return t=NS(t),t!==null?G0(t):null}function G0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=G0(t);if(e!==null)return e;t=t.sibling}return null}var V0=wn.unstable_scheduleCallback,Zp=wn.unstable_cancelCallback,DS=wn.unstable_shouldYield,IS=wn.unstable_requestPaint,Et=wn.unstable_now,US=wn.unstable_getCurrentPriorityLevel,uh=wn.unstable_ImmediatePriority,W0=wn.unstable_UserBlockingPriority,$l=wn.unstable_NormalPriority,OS=wn.unstable_LowPriority,j0=wn.unstable_IdlePriority,bc=null,ui=null;function FS(t){if(ui&&typeof ui.onCommitFiberRoot=="function")try{ui.onCommitFiberRoot(bc,t,void 0,(t.current.flags&128)===128)}catch{}}var Qn=Math.clz32?Math.clz32:zS,kS=Math.log,BS=Math.LN2;function zS(t){return t>>>=0,t===0?32:31-(kS(t)/BS|0)|0}var Io=64,Uo=4194304;function Ns(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Yl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,a=t.pingedLanes,s=n&268435455;if(s!==0){var o=s&~r;o!==0?i=Ns(o):(a&=s,a!==0&&(i=Ns(a)))}else s=n&~r,s!==0?i=Ns(s):a!==0&&(i=Ns(a));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,a=e&-e,r>=a||r===16&&(a&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Qn(e),r=1<<n,i|=t[n],e&=~r;return i}function HS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function GS(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,a=t.pendingLanes;0<a;){var s=31-Qn(a),o=1<<s,l=r[s];l===-1?(!(o&n)||o&i)&&(r[s]=HS(o,e)):l<=e&&(t.expiredLanes|=o),a&=~o}}function Bf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function X0(){var t=Io;return Io<<=1,!(Io&4194240)&&(Io=64),t}function su(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function vo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Qn(e),t[e]=n}function VS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Qn(n),a=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~a}}function fh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Qn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Qe=0;function $0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Y0,dh,q0,K0,Z0,zf=!1,Oo=[],er=null,tr=null,nr=null,qs=new Map,Ks=new Map,Yi=[],WS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qp(t,e){switch(t){case"focusin":case"focusout":er=null;break;case"dragenter":case"dragleave":tr=null;break;case"mouseover":case"mouseout":nr=null;break;case"pointerover":case"pointerout":qs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ks.delete(e.pointerId)}}function gs(t,e,n,i,r,a){return t===null||t.nativeEvent!==a?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[r]},e!==null&&(e=xo(e),e!==null&&dh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function jS(t,e,n,i,r){switch(e){case"focusin":return er=gs(er,t,e,n,i,r),!0;case"dragenter":return tr=gs(tr,t,e,n,i,r),!0;case"mouseover":return nr=gs(nr,t,e,n,i,r),!0;case"pointerover":var a=r.pointerId;return qs.set(a,gs(qs.get(a)||null,t,e,n,i,r)),!0;case"gotpointercapture":return a=r.pointerId,Ks.set(a,gs(Ks.get(a)||null,t,e,n,i,r)),!0}return!1}function Q0(t){var e=Lr(t.target);if(e!==null){var n=$r(e);if(n!==null){if(e=n.tag,e===13){if(e=z0(n),e!==null){t.blockedOn=e,Z0(t.priority,function(){q0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function wl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Hf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Uf=i,n.target.dispatchEvent(i),Uf=null}else return e=xo(n),e!==null&&dh(e),t.blockedOn=n,!1;e.shift()}return!0}function Jp(t,e,n){wl(t)&&n.delete(e)}function XS(){zf=!1,er!==null&&wl(er)&&(er=null),tr!==null&&wl(tr)&&(tr=null),nr!==null&&wl(nr)&&(nr=null),qs.forEach(Jp),Ks.forEach(Jp)}function vs(t,e){t.blockedOn===e&&(t.blockedOn=null,zf||(zf=!0,wn.unstable_scheduleCallback(wn.unstable_NormalPriority,XS)))}function Zs(t){function e(r){return vs(r,t)}if(0<Oo.length){vs(Oo[0],t);for(var n=1;n<Oo.length;n++){var i=Oo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(er!==null&&vs(er,t),tr!==null&&vs(tr,t),nr!==null&&vs(nr,t),qs.forEach(e),Ks.forEach(e),n=0;n<Yi.length;n++)i=Yi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Yi.length&&(n=Yi[0],n.blockedOn===null);)Q0(n),n.blockedOn===null&&Yi.shift()}var za=Ni.ReactCurrentBatchConfig,ql=!0;function $S(t,e,n,i){var r=Qe,a=za.transition;za.transition=null;try{Qe=1,hh(t,e,n,i)}finally{Qe=r,za.transition=a}}function YS(t,e,n,i){var r=Qe,a=za.transition;za.transition=null;try{Qe=4,hh(t,e,n,i)}finally{Qe=r,za.transition=a}}function hh(t,e,n,i){if(ql){var r=Hf(t,e,n,i);if(r===null)gu(t,e,i,Kl,n),Qp(t,i);else if(jS(r,t,e,n,i))i.stopPropagation();else if(Qp(t,i),e&4&&-1<WS.indexOf(t)){for(;r!==null;){var a=xo(r);if(a!==null&&Y0(a),a=Hf(t,e,n,i),a===null&&gu(t,e,i,Kl,n),a===r)break;r=a}r!==null&&i.stopPropagation()}else gu(t,e,i,null,n)}}var Kl=null;function Hf(t,e,n,i){if(Kl=null,t=ch(i),t=Lr(t),t!==null)if(e=$r(t),e===null)t=null;else if(n=e.tag,n===13){if(t=z0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Kl=t,null}function J0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(US()){case uh:return 1;case W0:return 4;case $l:case OS:return 16;case j0:return 536870912;default:return 16}default:return 16}}var Ki=null,ph=null,Al=null;function e_(){if(Al)return Al;var t,e=ph,n=e.length,i,r="value"in Ki?Ki.value:Ki.textContent,a=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[a-i];i++);return Al=r.slice(t,1<i?1-i:void 0)}function Rl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Fo(){return!0}function em(){return!1}function Rn(t){function e(n,i,r,a,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Fo:em,this.isPropagationStopped=em,this}return gt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fo)},persist:function(){},isPersistent:Fo}),e}var os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mh=Rn(os),_o=gt({},os,{view:0,detail:0}),qS=Rn(_o),ou,lu,_s,wc=gt({},_o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==_s&&(_s&&t.type==="mousemove"?(ou=t.screenX-_s.screenX,lu=t.screenY-_s.screenY):lu=ou=0,_s=t),ou)},movementY:function(t){return"movementY"in t?t.movementY:lu}}),tm=Rn(wc),KS=gt({},wc,{dataTransfer:0}),ZS=Rn(KS),QS=gt({},_o,{relatedTarget:0}),cu=Rn(QS),JS=gt({},os,{animationName:0,elapsedTime:0,pseudoElement:0}),eE=Rn(JS),tE=gt({},os,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),nE=Rn(tE),iE=gt({},os,{data:0}),nm=Rn(iE),rE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},aE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function oE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=sE[t])?!!e[t]:!1}function gh(){return oE}var lE=gt({},_o,{key:function(t){if(t.key){var e=rE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Rl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?aE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gh,charCode:function(t){return t.type==="keypress"?Rl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Rl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),cE=Rn(lE),uE=gt({},wc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),im=Rn(uE),fE=gt({},_o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gh}),dE=Rn(fE),hE=gt({},os,{propertyName:0,elapsedTime:0,pseudoElement:0}),pE=Rn(hE),mE=gt({},wc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),gE=Rn(mE),vE=[9,13,27,32],vh=Ai&&"CompositionEvent"in window,Os=null;Ai&&"documentMode"in document&&(Os=document.documentMode);var _E=Ai&&"TextEvent"in window&&!Os,t_=Ai&&(!vh||Os&&8<Os&&11>=Os),rm=" ",am=!1;function n_(t,e){switch(t){case"keyup":return vE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function i_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ta=!1;function xE(t,e){switch(t){case"compositionend":return i_(e);case"keypress":return e.which!==32?null:(am=!0,rm);case"textInput":return t=e.data,t===rm&&am?null:t;default:return null}}function yE(t,e){if(Ta)return t==="compositionend"||!vh&&n_(t,e)?(t=e_(),Al=ph=Ki=null,Ta=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return t_&&e.locale!=="ko"?null:e.data;default:return null}}var SE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!SE[t.type]:e==="textarea"}function r_(t,e,n,i){U0(i),e=Zl(e,"onChange"),0<e.length&&(n=new mh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Fs=null,Qs=null;function EE(t){m_(t,0)}function Ac(t){var e=Aa(t);if(R0(e))return t}function ME(t,e){if(t==="change")return e}var a_=!1;if(Ai){var uu;if(Ai){var fu="oninput"in document;if(!fu){var om=document.createElement("div");om.setAttribute("oninput","return;"),fu=typeof om.oninput=="function"}uu=fu}else uu=!1;a_=uu&&(!document.documentMode||9<document.documentMode)}function lm(){Fs&&(Fs.detachEvent("onpropertychange",s_),Qs=Fs=null)}function s_(t){if(t.propertyName==="value"&&Ac(Qs)){var e=[];r_(e,Qs,t,ch(t)),B0(EE,e)}}function TE(t,e,n){t==="focusin"?(lm(),Fs=e,Qs=n,Fs.attachEvent("onpropertychange",s_)):t==="focusout"&&lm()}function bE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ac(Qs)}function wE(t,e){if(t==="click")return Ac(e)}function AE(t,e){if(t==="input"||t==="change")return Ac(e)}function RE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ei=typeof Object.is=="function"?Object.is:RE;function Js(t,e){if(ei(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Mf.call(e,r)||!ei(t[r],e[r]))return!1}return!0}function cm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function um(t,e){var n=cm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=cm(n)}}function o_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?o_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function l_(){for(var t=window,e=Wl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Wl(t.document)}return e}function _h(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function CE(t){var e=l_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&o_(n.ownerDocument.documentElement,n)){if(i!==null&&_h(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,a=Math.min(i.start,r);i=i.end===void 0?a:Math.min(i.end,r),!t.extend&&a>i&&(r=i,i=a,a=r),r=um(n,a);var s=um(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),a>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var PE=Ai&&"documentMode"in document&&11>=document.documentMode,ba=null,Gf=null,ks=null,Vf=!1;function fm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vf||ba==null||ba!==Wl(i)||(i=ba,"selectionStart"in i&&_h(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ks&&Js(ks,i)||(ks=i,i=Zl(Gf,"onSelect"),0<i.length&&(e=new mh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ba)))}function ko(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var wa={animationend:ko("Animation","AnimationEnd"),animationiteration:ko("Animation","AnimationIteration"),animationstart:ko("Animation","AnimationStart"),transitionend:ko("Transition","TransitionEnd")},du={},c_={};Ai&&(c_=document.createElement("div").style,"AnimationEvent"in window||(delete wa.animationend.animation,delete wa.animationiteration.animation,delete wa.animationstart.animation),"TransitionEvent"in window||delete wa.transitionend.transition);function Rc(t){if(du[t])return du[t];if(!wa[t])return t;var e=wa[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in c_)return du[t]=e[n];return t}var u_=Rc("animationend"),f_=Rc("animationiteration"),d_=Rc("animationstart"),h_=Rc("transitionend"),p_=new Map,dm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mr(t,e){p_.set(t,e),Xr(e,[t])}for(var hu=0;hu<dm.length;hu++){var pu=dm[hu],LE=pu.toLowerCase(),NE=pu[0].toUpperCase()+pu.slice(1);mr(LE,"on"+NE)}mr(u_,"onAnimationEnd");mr(f_,"onAnimationIteration");mr(d_,"onAnimationStart");mr("dblclick","onDoubleClick");mr("focusin","onFocus");mr("focusout","onBlur");mr(h_,"onTransitionEnd");$a("onMouseEnter",["mouseout","mouseover"]);$a("onMouseLeave",["mouseout","mouseover"]);$a("onPointerEnter",["pointerout","pointerover"]);$a("onPointerLeave",["pointerout","pointerover"]);Xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ds="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),DE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ds));function hm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,LS(i,e,void 0,t),t.currentTarget=null}function m_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var a=void 0;if(e)for(var s=i.length-1;0<=s;s--){var o=i[s],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&r.isPropagationStopped())break e;hm(r,o,c),a=l}else for(s=0;s<i.length;s++){if(o=i[s],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&r.isPropagationStopped())break e;hm(r,o,c),a=l}}}if(Xl)throw t=kf,Xl=!1,kf=null,t}function lt(t,e){var n=e[Yf];n===void 0&&(n=e[Yf]=new Set);var i=t+"__bubble";n.has(i)||(g_(e,t,2,!1),n.add(i))}function mu(t,e,n){var i=0;e&&(i|=4),g_(n,t,i,e)}var Bo="_reactListening"+Math.random().toString(36).slice(2);function eo(t){if(!t[Bo]){t[Bo]=!0,M0.forEach(function(n){n!=="selectionchange"&&(DE.has(n)||mu(n,!1,t),mu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Bo]||(e[Bo]=!0,mu("selectionchange",!1,e))}}function g_(t,e,n,i){switch(J0(e)){case 1:var r=$S;break;case 4:r=YS;break;default:r=hh}n=r.bind(null,e,n,t),r=void 0,!Ff||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function gu(t,e,n,i,r){var a=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;o!==null;){if(s=Lr(o),s===null)return;if(l=s.tag,l===5||l===6){i=a=s;continue e}o=o.parentNode}}i=i.return}B0(function(){var c=a,f=ch(n),d=[];e:{var h=p_.get(t);if(h!==void 0){var m=mh,_=t;switch(t){case"keypress":if(Rl(n)===0)break e;case"keydown":case"keyup":m=cE;break;case"focusin":_="focus",m=cu;break;case"focusout":_="blur",m=cu;break;case"beforeblur":case"afterblur":m=cu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=tm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=ZS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=dE;break;case u_:case f_:case d_:m=eE;break;case h_:m=pE;break;case"scroll":m=qS;break;case"wheel":m=gE;break;case"copy":case"cut":case"paste":m=nE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=im}var x=(e&4)!==0,p=!x&&t==="scroll",u=x?h!==null?h+"Capture":null:h;x=[];for(var g=c,v;g!==null;){v=g;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,u!==null&&(S=Ys(g,u),S!=null&&x.push(to(g,S,v)))),p)break;g=g.return}0<x.length&&(h=new m(h,_,null,n,f),d.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==Uf&&(_=n.relatedTarget||n.fromElement)&&(Lr(_)||_[Ri]))break e;if((m||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=c,_=_?Lr(_):null,_!==null&&(p=$r(_),_!==p||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=c),m!==_)){if(x=tm,S="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(x=im,S="onPointerLeave",u="onPointerEnter",g="pointer"),p=m==null?h:Aa(m),v=_==null?h:Aa(_),h=new x(S,g+"leave",m,n,f),h.target=p,h.relatedTarget=v,S=null,Lr(f)===c&&(x=new x(u,g+"enter",_,n,f),x.target=v,x.relatedTarget=p,S=x),p=S,m&&_)t:{for(x=m,u=_,g=0,v=x;v;v=ea(v))g++;for(v=0,S=u;S;S=ea(S))v++;for(;0<g-v;)x=ea(x),g--;for(;0<v-g;)u=ea(u),v--;for(;g--;){if(x===u||u!==null&&x===u.alternate)break t;x=ea(x),u=ea(u)}x=null}else x=null;m!==null&&pm(d,h,m,x,!1),_!==null&&p!==null&&pm(d,p,_,x,!0)}}e:{if(h=c?Aa(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var R=ME;else if(sm(h))if(a_)R=AE;else{R=bE;var T=TE}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(R=wE);if(R&&(R=R(t,c))){r_(d,R,n,f);break e}T&&T(t,h,c),t==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&Pf(h,"number",h.value)}switch(T=c?Aa(c):window,t){case"focusin":(sm(T)||T.contentEditable==="true")&&(ba=T,Gf=c,ks=null);break;case"focusout":ks=Gf=ba=null;break;case"mousedown":Vf=!0;break;case"contextmenu":case"mouseup":case"dragend":Vf=!1,fm(d,n,f);break;case"selectionchange":if(PE)break;case"keydown":case"keyup":fm(d,n,f)}var w;if(vh)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Ta?n_(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(t_&&n.locale!=="ko"&&(Ta||N!=="onCompositionStart"?N==="onCompositionEnd"&&Ta&&(w=e_()):(Ki=f,ph="value"in Ki?Ki.value:Ki.textContent,Ta=!0)),T=Zl(c,N),0<T.length&&(N=new nm(N,t,null,n,f),d.push({event:N,listeners:T}),w?N.data=w:(w=i_(n),w!==null&&(N.data=w)))),(w=_E?xE(t,n):yE(t,n))&&(c=Zl(c,"onBeforeInput"),0<c.length&&(f=new nm("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=w))}m_(d,e)})}function to(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Zl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,a=r.stateNode;r.tag===5&&a!==null&&(r=a,a=Ys(t,n),a!=null&&i.unshift(to(t,a,r)),a=Ys(t,e),a!=null&&i.push(to(t,a,r))),t=t.return}return i}function ea(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function pm(t,e,n,i,r){for(var a=e._reactName,s=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Ys(n,a),l!=null&&s.unshift(to(n,l,o))):r||(l=Ys(n,a),l!=null&&s.push(to(n,l,o)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var IE=/\r\n?/g,UE=/\u0000|\uFFFD/g;function mm(t){return(typeof t=="string"?t:""+t).replace(IE,`
`).replace(UE,"")}function zo(t,e,n){if(e=mm(e),mm(t)!==e&&n)throw Error(ne(425))}function Ql(){}var Wf=null,jf=null;function Xf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $f=typeof setTimeout=="function"?setTimeout:void 0,OE=typeof clearTimeout=="function"?clearTimeout:void 0,gm=typeof Promise=="function"?Promise:void 0,FE=typeof queueMicrotask=="function"?queueMicrotask:typeof gm<"u"?function(t){return gm.resolve(null).then(t).catch(kE)}:$f;function kE(t){setTimeout(function(){throw t})}function vu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Zs(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Zs(e)}function ir(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function vm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ls=Math.random().toString(36).slice(2),li="__reactFiber$"+ls,no="__reactProps$"+ls,Ri="__reactContainer$"+ls,Yf="__reactEvents$"+ls,BE="__reactListeners$"+ls,zE="__reactHandles$"+ls;function Lr(t){var e=t[li];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ri]||n[li]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=vm(t);t!==null;){if(n=t[li])return n;t=vm(t)}return e}t=n,n=t.parentNode}return null}function xo(t){return t=t[li]||t[Ri],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Aa(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function Cc(t){return t[no]||null}var qf=[],Ra=-1;function gr(t){return{current:t}}function ut(t){0>Ra||(t.current=qf[Ra],qf[Ra]=null,Ra--)}function rt(t,e){Ra++,qf[Ra]=t.current,t.current=e}var hr={},qt=gr(hr),fn=gr(!1),Br=hr;function Ya(t,e){var n=t.type.contextTypes;if(!n)return hr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},a;for(a in n)r[a]=e[a];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function dn(t){return t=t.childContextTypes,t!=null}function Jl(){ut(fn),ut(qt)}function _m(t,e,n){if(qt.current!==hr)throw Error(ne(168));rt(qt,e),rt(fn,n)}function v_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,TS(t)||"Unknown",r));return gt({},n,i)}function ec(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||hr,Br=qt.current,rt(qt,t),rt(fn,fn.current),!0}function xm(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=v_(t,e,Br),i.__reactInternalMemoizedMergedChildContext=t,ut(fn),ut(qt),rt(qt,t)):ut(fn),rt(fn,n)}var yi=null,Pc=!1,_u=!1;function __(t){yi===null?yi=[t]:yi.push(t)}function HE(t){Pc=!0,__(t)}function vr(){if(!_u&&yi!==null){_u=!0;var t=0,e=Qe;try{var n=yi;for(Qe=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}yi=null,Pc=!1}catch(r){throw yi!==null&&(yi=yi.slice(t+1)),V0(uh,vr),r}finally{Qe=e,_u=!1}}return null}var Ca=[],Pa=0,tc=null,nc=0,Nn=[],Dn=0,zr=null,Mi=1,Ti="";function br(t,e){Ca[Pa++]=nc,Ca[Pa++]=tc,tc=t,nc=e}function x_(t,e,n){Nn[Dn++]=Mi,Nn[Dn++]=Ti,Nn[Dn++]=zr,zr=t;var i=Mi;t=Ti;var r=32-Qn(i)-1;i&=~(1<<r),n+=1;var a=32-Qn(e)+r;if(30<a){var s=r-r%5;a=(i&(1<<s)-1).toString(32),i>>=s,r-=s,Mi=1<<32-Qn(e)+r|n<<r|i,Ti=a+t}else Mi=1<<a|n<<r|i,Ti=t}function xh(t){t.return!==null&&(br(t,1),x_(t,1,0))}function yh(t){for(;t===tc;)tc=Ca[--Pa],Ca[Pa]=null,nc=Ca[--Pa],Ca[Pa]=null;for(;t===zr;)zr=Nn[--Dn],Nn[Dn]=null,Ti=Nn[--Dn],Nn[Dn]=null,Mi=Nn[--Dn],Nn[Dn]=null}var Tn=null,En=null,dt=!1,qn=null;function y_(t,e){var n=On(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ym(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Tn=t,En=ir(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Tn=t,En=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=zr!==null?{id:Mi,overflow:Ti}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=On(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Tn=t,En=null,!0):!1;default:return!1}}function Kf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Zf(t){if(dt){var e=En;if(e){var n=e;if(!ym(t,e)){if(Kf(t))throw Error(ne(418));e=ir(n.nextSibling);var i=Tn;e&&ym(t,e)?y_(i,n):(t.flags=t.flags&-4097|2,dt=!1,Tn=t)}}else{if(Kf(t))throw Error(ne(418));t.flags=t.flags&-4097|2,dt=!1,Tn=t}}}function Sm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Tn=t}function Ho(t){if(t!==Tn)return!1;if(!dt)return Sm(t),dt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Xf(t.type,t.memoizedProps)),e&&(e=En)){if(Kf(t))throw S_(),Error(ne(418));for(;e;)y_(t,e),e=ir(e.nextSibling)}if(Sm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){En=ir(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}En=null}}else En=Tn?ir(t.stateNode.nextSibling):null;return!0}function S_(){for(var t=En;t;)t=ir(t.nextSibling)}function qa(){En=Tn=null,dt=!1}function Sh(t){qn===null?qn=[t]:qn.push(t)}var GE=Ni.ReactCurrentBatchConfig;function xs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,a=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===a?e.ref:(e=function(s){var o=r.refs;s===null?delete o[a]:o[a]=s},e._stringRef=a,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function Go(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Em(t){var e=t._init;return e(t._payload)}function E_(t){function e(u,g){if(t){var v=u.deletions;v===null?(u.deletions=[g],u.flags|=16):v.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function r(u,g){return u=or(u,g),u.index=0,u.sibling=null,u}function a(u,g,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<g?(u.flags|=2,g):v):(u.flags|=2,g)):(u.flags|=1048576,g)}function s(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,g,v,S){return g===null||g.tag!==6?(g=bu(v,u.mode,S),g.return=u,g):(g=r(g,v),g.return=u,g)}function l(u,g,v,S){var R=v.type;return R===Ma?f(u,g,v.props.children,S,v.key):g!==null&&(g.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Xi&&Em(R)===g.type)?(S=r(g,v.props),S.ref=xs(u,g,v),S.return=u,S):(S=Ul(v.type,v.key,v.props,null,u.mode,S),S.ref=xs(u,g,v),S.return=u,S)}function c(u,g,v,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=wu(v,u.mode,S),g.return=u,g):(g=r(g,v.children||[]),g.return=u,g)}function f(u,g,v,S,R){return g===null||g.tag!==7?(g=Ur(v,u.mode,S,R),g.return=u,g):(g=r(g,v),g.return=u,g)}function d(u,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=bu(""+g,u.mode,v),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Lo:return v=Ul(g.type,g.key,g.props,null,u.mode,v),v.ref=xs(u,null,g),v.return=u,v;case Ea:return g=wu(g,u.mode,v),g.return=u,g;case Xi:var S=g._init;return d(u,S(g._payload),v)}if(Ls(g)||ps(g))return g=Ur(g,u.mode,v,null),g.return=u,g;Go(u,g)}return null}function h(u,g,v,S){var R=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return R!==null?null:o(u,g,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Lo:return v.key===R?l(u,g,v,S):null;case Ea:return v.key===R?c(u,g,v,S):null;case Xi:return R=v._init,h(u,g,R(v._payload),S)}if(Ls(v)||ps(v))return R!==null?null:f(u,g,v,S,null);Go(u,v)}return null}function m(u,g,v,S,R){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(v)||null,o(g,u,""+S,R);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Lo:return u=u.get(S.key===null?v:S.key)||null,l(g,u,S,R);case Ea:return u=u.get(S.key===null?v:S.key)||null,c(g,u,S,R);case Xi:var T=S._init;return m(u,g,v,T(S._payload),R)}if(Ls(S)||ps(S))return u=u.get(v)||null,f(g,u,S,R,null);Go(g,S)}return null}function _(u,g,v,S){for(var R=null,T=null,w=g,N=g=0,E=null;w!==null&&N<v.length;N++){w.index>N?(E=w,w=null):E=w.sibling;var b=h(u,w,v[N],S);if(b===null){w===null&&(w=E);break}t&&w&&b.alternate===null&&e(u,w),g=a(b,g,N),T===null?R=b:T.sibling=b,T=b,w=E}if(N===v.length)return n(u,w),dt&&br(u,N),R;if(w===null){for(;N<v.length;N++)w=d(u,v[N],S),w!==null&&(g=a(w,g,N),T===null?R=w:T.sibling=w,T=w);return dt&&br(u,N),R}for(w=i(u,w);N<v.length;N++)E=m(w,u,N,v[N],S),E!==null&&(t&&E.alternate!==null&&w.delete(E.key===null?N:E.key),g=a(E,g,N),T===null?R=E:T.sibling=E,T=E);return t&&w.forEach(function(k){return e(u,k)}),dt&&br(u,N),R}function x(u,g,v,S){var R=ps(v);if(typeof R!="function")throw Error(ne(150));if(v=R.call(v),v==null)throw Error(ne(151));for(var T=R=null,w=g,N=g=0,E=null,b=v.next();w!==null&&!b.done;N++,b=v.next()){w.index>N?(E=w,w=null):E=w.sibling;var k=h(u,w,b.value,S);if(k===null){w===null&&(w=E);break}t&&w&&k.alternate===null&&e(u,w),g=a(k,g,N),T===null?R=k:T.sibling=k,T=k,w=E}if(b.done)return n(u,w),dt&&br(u,N),R;if(w===null){for(;!b.done;N++,b=v.next())b=d(u,b.value,S),b!==null&&(g=a(b,g,N),T===null?R=b:T.sibling=b,T=b);return dt&&br(u,N),R}for(w=i(u,w);!b.done;N++,b=v.next())b=m(w,u,N,b.value,S),b!==null&&(t&&b.alternate!==null&&w.delete(b.key===null?N:b.key),g=a(b,g,N),T===null?R=b:T.sibling=b,T=b);return t&&w.forEach(function($){return e(u,$)}),dt&&br(u,N),R}function p(u,g,v,S){if(typeof v=="object"&&v!==null&&v.type===Ma&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Lo:e:{for(var R=v.key,T=g;T!==null;){if(T.key===R){if(R=v.type,R===Ma){if(T.tag===7){n(u,T.sibling),g=r(T,v.props.children),g.return=u,u=g;break e}}else if(T.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Xi&&Em(R)===T.type){n(u,T.sibling),g=r(T,v.props),g.ref=xs(u,T,v),g.return=u,u=g;break e}n(u,T);break}else e(u,T);T=T.sibling}v.type===Ma?(g=Ur(v.props.children,u.mode,S,v.key),g.return=u,u=g):(S=Ul(v.type,v.key,v.props,null,u.mode,S),S.ref=xs(u,g,v),S.return=u,u=S)}return s(u);case Ea:e:{for(T=v.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(u,g.sibling),g=r(g,v.children||[]),g.return=u,u=g;break e}else{n(u,g);break}else e(u,g);g=g.sibling}g=wu(v,u.mode,S),g.return=u,u=g}return s(u);case Xi:return T=v._init,p(u,g,T(v._payload),S)}if(Ls(v))return _(u,g,v,S);if(ps(v))return x(u,g,v,S);Go(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(u,g.sibling),g=r(g,v),g.return=u,u=g):(n(u,g),g=bu(v,u.mode,S),g.return=u,u=g),s(u)):n(u,g)}return p}var Ka=E_(!0),M_=E_(!1),ic=gr(null),rc=null,La=null,Eh=null;function Mh(){Eh=La=rc=null}function Th(t){var e=ic.current;ut(ic),t._currentValue=e}function Qf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ha(t,e){rc=t,Eh=La=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(un=!0),t.firstContext=null)}function Bn(t){var e=t._currentValue;if(Eh!==t)if(t={context:t,memoizedValue:e,next:null},La===null){if(rc===null)throw Error(ne(308));La=t,rc.dependencies={lanes:0,firstContext:t}}else La=La.next=t;return e}var Nr=null;function bh(t){Nr===null?Nr=[t]:Nr.push(t)}function T_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,bh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ci(t,i)}function Ci(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var $i=!1;function wh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function b_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function wi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function rr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,$e&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ci(t,n)}return r=i.interleaved,r===null?(e.next=e,bh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ci(t,n)}function Cl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,fh(t,n)}}function Mm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?r=a=s:a=a.next=s,n=n.next}while(n!==null);a===null?r=a=e:a=a.next=e}else r=a=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:a,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ac(t,e,n,i){var r=t.updateQueue;$i=!1;var a=r.firstBaseUpdate,s=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,s===null?a=c:s.next=c,s=l;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==s&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(a!==null){var d=r.baseState;s=0,f=c=l=null,o=a;do{var h=o.lane,m=o.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,x=o;switch(h=e,m=n,x.tag){case 1:if(_=x.payload,typeof _=="function"){d=_.call(m,d,h);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,h=typeof _=="function"?_.call(m,d,h):_,h==null)break e;d=gt({},d,h);break e;case 2:$i=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[o]:h.push(o))}else m={eventTime:m,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=m,l=d):f=f.next=m,s|=h;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;h=o,o=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else a===null&&(r.shared.lanes=0);Gr|=s,t.lanes=s,t.memoizedState=d}}function Tm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var yo={},fi=gr(yo),io=gr(yo),ro=gr(yo);function Dr(t){if(t===yo)throw Error(ne(174));return t}function Ah(t,e){switch(rt(ro,e),rt(io,t),rt(fi,yo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Nf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Nf(e,t)}ut(fi),rt(fi,e)}function Za(){ut(fi),ut(io),ut(ro)}function w_(t){Dr(ro.current);var e=Dr(fi.current),n=Nf(e,t.type);e!==n&&(rt(io,t),rt(fi,n))}function Rh(t){io.current===t&&(ut(fi),ut(io))}var pt=gr(0);function sc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var xu=[];function Ch(){for(var t=0;t<xu.length;t++)xu[t]._workInProgressVersionPrimary=null;xu.length=0}var Pl=Ni.ReactCurrentDispatcher,yu=Ni.ReactCurrentBatchConfig,Hr=0,mt=null,wt=null,Nt=null,oc=!1,Bs=!1,ao=0,VE=0;function Gt(){throw Error(ne(321))}function Ph(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ei(t[n],e[n]))return!1;return!0}function Lh(t,e,n,i,r,a){if(Hr=a,mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Pl.current=t===null||t.memoizedState===null?$E:YE,t=n(i,r),Bs){a=0;do{if(Bs=!1,ao=0,25<=a)throw Error(ne(301));a+=1,Nt=wt=null,e.updateQueue=null,Pl.current=qE,t=n(i,r)}while(Bs)}if(Pl.current=lc,e=wt!==null&&wt.next!==null,Hr=0,Nt=wt=mt=null,oc=!1,e)throw Error(ne(300));return t}function Nh(){var t=ao!==0;return ao=0,t}function ai(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?mt.memoizedState=Nt=t:Nt=Nt.next=t,Nt}function zn(){if(wt===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=wt.next;var e=Nt===null?mt.memoizedState:Nt.next;if(e!==null)Nt=e,wt=t;else{if(t===null)throw Error(ne(310));wt=t,t={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},Nt===null?mt.memoizedState=Nt=t:Nt=Nt.next=t}return Nt}function so(t,e){return typeof e=="function"?e(t):e}function Su(t){var e=zn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=wt,r=i.baseQueue,a=n.pending;if(a!==null){if(r!==null){var s=r.next;r.next=a.next,a.next=s}i.baseQueue=r=a,n.pending=null}if(r!==null){a=r.next,i=i.baseState;var o=s=null,l=null,c=a;do{var f=c.lane;if((Hr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=d,s=i):l=l.next=d,mt.lanes|=f,Gr|=f}c=c.next}while(c!==null&&c!==a);l===null?s=i:l.next=o,ei(i,e.memoizedState)||(un=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do a=r.lane,mt.lanes|=a,Gr|=a,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Eu(t){var e=zn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,a=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do a=t(a,s.action),s=s.next;while(s!==r);ei(a,e.memoizedState)||(un=!0),e.memoizedState=a,e.baseQueue===null&&(e.baseState=a),n.lastRenderedState=a}return[a,i]}function A_(){}function R_(t,e){var n=mt,i=zn(),r=e(),a=!ei(i.memoizedState,r);if(a&&(i.memoizedState=r,un=!0),i=i.queue,Dh(L_.bind(null,n,i,t),[t]),i.getSnapshot!==e||a||Nt!==null&&Nt.memoizedState.tag&1){if(n.flags|=2048,oo(9,P_.bind(null,n,i,r,e),void 0,null),Dt===null)throw Error(ne(349));Hr&30||C_(n,e,r)}return r}function C_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function P_(t,e,n,i){e.value=n,e.getSnapshot=i,N_(e)&&D_(t)}function L_(t,e,n){return n(function(){N_(e)&&D_(t)})}function N_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ei(t,n)}catch{return!0}}function D_(t){var e=Ci(t,1);e!==null&&Jn(e,t,1,-1)}function bm(t){var e=ai();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:so,lastRenderedState:t},e.queue=t,t=t.dispatch=XE.bind(null,mt,t),[e.memoizedState,t]}function oo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function I_(){return zn().memoizedState}function Ll(t,e,n,i){var r=ai();mt.flags|=t,r.memoizedState=oo(1|e,n,void 0,i===void 0?null:i)}function Lc(t,e,n,i){var r=zn();i=i===void 0?null:i;var a=void 0;if(wt!==null){var s=wt.memoizedState;if(a=s.destroy,i!==null&&Ph(i,s.deps)){r.memoizedState=oo(e,n,a,i);return}}mt.flags|=t,r.memoizedState=oo(1|e,n,a,i)}function wm(t,e){return Ll(8390656,8,t,e)}function Dh(t,e){return Lc(2048,8,t,e)}function U_(t,e){return Lc(4,2,t,e)}function O_(t,e){return Lc(4,4,t,e)}function F_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function k_(t,e,n){return n=n!=null?n.concat([t]):null,Lc(4,4,F_.bind(null,e,t),n)}function Ih(){}function B_(t,e){var n=zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ph(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function z_(t,e){var n=zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ph(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function H_(t,e,n){return Hr&21?(ei(n,e)||(n=X0(),mt.lanes|=n,Gr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,un=!0),t.memoizedState=n)}function WE(t,e){var n=Qe;Qe=n!==0&&4>n?n:4,t(!0);var i=yu.transition;yu.transition={};try{t(!1),e()}finally{Qe=n,yu.transition=i}}function G_(){return zn().memoizedState}function jE(t,e,n){var i=sr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},V_(t))W_(e,n);else if(n=T_(t,e,n,i),n!==null){var r=rn();Jn(n,t,i,r),j_(n,e,i)}}function XE(t,e,n){var i=sr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(V_(t))W_(e,r);else{var a=t.alternate;if(t.lanes===0&&(a===null||a.lanes===0)&&(a=e.lastRenderedReducer,a!==null))try{var s=e.lastRenderedState,o=a(s,n);if(r.hasEagerState=!0,r.eagerState=o,ei(o,s)){var l=e.interleaved;l===null?(r.next=r,bh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=T_(t,e,r,i),n!==null&&(r=rn(),Jn(n,t,i,r),j_(n,e,i))}}function V_(t){var e=t.alternate;return t===mt||e!==null&&e===mt}function W_(t,e){Bs=oc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function j_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,fh(t,n)}}var lc={readContext:Bn,useCallback:Gt,useContext:Gt,useEffect:Gt,useImperativeHandle:Gt,useInsertionEffect:Gt,useLayoutEffect:Gt,useMemo:Gt,useReducer:Gt,useRef:Gt,useState:Gt,useDebugValue:Gt,useDeferredValue:Gt,useTransition:Gt,useMutableSource:Gt,useSyncExternalStore:Gt,useId:Gt,unstable_isNewReconciler:!1},$E={readContext:Bn,useCallback:function(t,e){return ai().memoizedState=[t,e===void 0?null:e],t},useContext:Bn,useEffect:wm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ll(4194308,4,F_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ll(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ll(4,2,t,e)},useMemo:function(t,e){var n=ai();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ai();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=jE.bind(null,mt,t),[i.memoizedState,t]},useRef:function(t){var e=ai();return t={current:t},e.memoizedState=t},useState:bm,useDebugValue:Ih,useDeferredValue:function(t){return ai().memoizedState=t},useTransition:function(){var t=bm(!1),e=t[0];return t=WE.bind(null,t[1]),ai().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=mt,r=ai();if(dt){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),Dt===null)throw Error(ne(349));Hr&30||C_(i,e,n)}r.memoizedState=n;var a={value:n,getSnapshot:e};return r.queue=a,wm(L_.bind(null,i,a,t),[t]),i.flags|=2048,oo(9,P_.bind(null,i,a,n,e),void 0,null),n},useId:function(){var t=ai(),e=Dt.identifierPrefix;if(dt){var n=Ti,i=Mi;n=(i&~(1<<32-Qn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ao++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=VE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},YE={readContext:Bn,useCallback:B_,useContext:Bn,useEffect:Dh,useImperativeHandle:k_,useInsertionEffect:U_,useLayoutEffect:O_,useMemo:z_,useReducer:Su,useRef:I_,useState:function(){return Su(so)},useDebugValue:Ih,useDeferredValue:function(t){var e=zn();return H_(e,wt.memoizedState,t)},useTransition:function(){var t=Su(so)[0],e=zn().memoizedState;return[t,e]},useMutableSource:A_,useSyncExternalStore:R_,useId:G_,unstable_isNewReconciler:!1},qE={readContext:Bn,useCallback:B_,useContext:Bn,useEffect:Dh,useImperativeHandle:k_,useInsertionEffect:U_,useLayoutEffect:O_,useMemo:z_,useReducer:Eu,useRef:I_,useState:function(){return Eu(so)},useDebugValue:Ih,useDeferredValue:function(t){var e=zn();return wt===null?e.memoizedState=t:H_(e,wt.memoizedState,t)},useTransition:function(){var t=Eu(so)[0],e=zn().memoizedState;return[t,e]},useMutableSource:A_,useSyncExternalStore:R_,useId:G_,unstable_isNewReconciler:!1};function $n(t,e){if(t&&t.defaultProps){e=gt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Jf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:gt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Nc={isMounted:function(t){return(t=t._reactInternals)?$r(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=rn(),r=sr(t),a=wi(i,r);a.payload=e,n!=null&&(a.callback=n),e=rr(t,a,r),e!==null&&(Jn(e,t,r,i),Cl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=rn(),r=sr(t),a=wi(i,r);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=rr(t,a,r),e!==null&&(Jn(e,t,r,i),Cl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=rn(),i=sr(t),r=wi(n,i);r.tag=2,e!=null&&(r.callback=e),e=rr(t,r,i),e!==null&&(Jn(e,t,i,n),Cl(e,t,i))}};function Am(t,e,n,i,r,a,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,a,s):e.prototype&&e.prototype.isPureReactComponent?!Js(n,i)||!Js(r,a):!0}function X_(t,e,n){var i=!1,r=hr,a=e.contextType;return typeof a=="object"&&a!==null?a=Bn(a):(r=dn(e)?Br:qt.current,i=e.contextTypes,a=(i=i!=null)?Ya(t,r):hr),e=new e(n,a),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Nc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=a),e}function Rm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Nc.enqueueReplaceState(e,e.state,null)}function ed(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},wh(t);var a=e.contextType;typeof a=="object"&&a!==null?r.context=Bn(a):(a=dn(e)?Br:qt.current,r.context=Ya(t,a)),r.state=t.memoizedState,a=e.getDerivedStateFromProps,typeof a=="function"&&(Jf(t,e,a,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Nc.enqueueReplaceState(r,r.state,null),ac(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Qa(t,e){try{var n="",i=e;do n+=MS(i),i=i.return;while(i);var r=n}catch(a){r=`
Error generating stack: `+a.message+`
`+a.stack}return{value:t,source:e,stack:r,digest:null}}function Mu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function td(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var KE=typeof WeakMap=="function"?WeakMap:Map;function $_(t,e,n){n=wi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){uc||(uc=!0,fd=i),td(t,e)},n}function Y_(t,e,n){n=wi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){td(t,e)}}var a=t.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){td(t,e),typeof i!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Cm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new KE;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=uM.bind(null,t,e,n),e.then(t,t))}function Pm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Lm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=wi(-1,1),e.tag=2,rr(n,e,1))),n.lanes|=1),t)}var ZE=Ni.ReactCurrentOwner,un=!1;function en(t,e,n,i){e.child=t===null?M_(e,null,n,i):Ka(e,t.child,n,i)}function Nm(t,e,n,i,r){n=n.render;var a=e.ref;return Ha(e,r),i=Lh(t,e,n,i,a,r),n=Nh(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Pi(t,e,r)):(dt&&n&&xh(e),e.flags|=1,en(t,e,i,r),e.child)}function Dm(t,e,n,i,r){if(t===null){var a=n.type;return typeof a=="function"&&!Gh(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=a,q_(t,e,a,i,r)):(t=Ul(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(a=t.child,!(t.lanes&r)){var s=a.memoizedProps;if(n=n.compare,n=n!==null?n:Js,n(s,i)&&t.ref===e.ref)return Pi(t,e,r)}return e.flags|=1,t=or(a,i),t.ref=e.ref,t.return=e,e.child=t}function q_(t,e,n,i,r){if(t!==null){var a=t.memoizedProps;if(Js(a,i)&&t.ref===e.ref)if(un=!1,e.pendingProps=i=a,(t.lanes&r)!==0)t.flags&131072&&(un=!0);else return e.lanes=t.lanes,Pi(t,e,r)}return nd(t,e,n,i,r)}function K_(t,e,n){var i=e.pendingProps,r=i.children,a=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},rt(Da,yn),yn|=n;else{if(!(n&1073741824))return t=a!==null?a.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,rt(Da,yn),yn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=a!==null?a.baseLanes:n,rt(Da,yn),yn|=i}else a!==null?(i=a.baseLanes|n,e.memoizedState=null):i=n,rt(Da,yn),yn|=i;return en(t,e,r,n),e.child}function Z_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function nd(t,e,n,i,r){var a=dn(n)?Br:qt.current;return a=Ya(e,a),Ha(e,r),n=Lh(t,e,n,i,a,r),i=Nh(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Pi(t,e,r)):(dt&&i&&xh(e),e.flags|=1,en(t,e,n,r),e.child)}function Im(t,e,n,i,r){if(dn(n)){var a=!0;ec(e)}else a=!1;if(Ha(e,r),e.stateNode===null)Nl(t,e),X_(e,n,i),ed(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,o=e.memoizedProps;s.props=o;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Bn(c):(c=dn(n)?Br:qt.current,c=Ya(e,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==i||l!==c)&&Rm(e,s,i,c),$i=!1;var h=e.memoizedState;s.state=h,ac(e,i,s,r),l=e.memoizedState,o!==i||h!==l||fn.current||$i?(typeof f=="function"&&(Jf(e,n,f,i),l=e.memoizedState),(o=$i||Am(e,n,o,i,h,l,c))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=c,i=o):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,b_(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:$n(e.type,o),s.props=c,d=e.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Bn(l):(l=dn(n)?Br:qt.current,l=Ya(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==d||h!==l)&&Rm(e,s,i,l),$i=!1,h=e.memoizedState,s.state=h,ac(e,i,s,r);var _=e.memoizedState;o!==d||h!==_||fn.current||$i?(typeof m=="function"&&(Jf(e,n,m,i),_=e.memoizedState),(c=$i||Am(e,n,c,i,h,_,l)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,_,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,_,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),s.props=i,s.state=_,s.context=l,i=c):(typeof s.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return id(t,e,n,i,a,r)}function id(t,e,n,i,r,a){Z_(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&xm(e,n,!1),Pi(t,e,a);i=e.stateNode,ZE.current=e;var o=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=Ka(e,t.child,null,a),e.child=Ka(e,null,o,a)):en(t,e,o,a),e.memoizedState=i.state,r&&xm(e,n,!0),e.child}function Q_(t){var e=t.stateNode;e.pendingContext?_m(t,e.pendingContext,e.pendingContext!==e.context):e.context&&_m(t,e.context,!1),Ah(t,e.containerInfo)}function Um(t,e,n,i,r){return qa(),Sh(r),e.flags|=256,en(t,e,n,i),e.child}var rd={dehydrated:null,treeContext:null,retryLane:0};function ad(t){return{baseLanes:t,cachePool:null,transitions:null}}function J_(t,e,n){var i=e.pendingProps,r=pt.current,a=!1,s=(e.flags&128)!==0,o;if((o=s)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(a=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),rt(pt,r&1),t===null)return Zf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,a?(i=e.mode,a=e.child,s={mode:"hidden",children:s},!(i&1)&&a!==null?(a.childLanes=0,a.pendingProps=s):a=Uc(s,i,0,null),t=Ur(t,i,n,null),a.return=e,t.return=e,a.sibling=t,e.child=a,e.child.memoizedState=ad(n),e.memoizedState=rd,t):Uh(e,s));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return QE(t,e,s,i,o,r,n);if(a){a=i.fallback,s=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=or(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?a=or(o,a):(a=Ur(a,s,n,null),a.flags|=2),a.return=e,i.return=e,i.sibling=a,e.child=i,i=a,a=e.child,s=t.child.memoizedState,s=s===null?ad(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=t.childLanes&~n,e.memoizedState=rd,i}return a=t.child,t=a.sibling,i=or(a,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Uh(t,e){return e=Uc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Vo(t,e,n,i){return i!==null&&Sh(i),Ka(e,t.child,null,n),t=Uh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function QE(t,e,n,i,r,a,s){if(n)return e.flags&256?(e.flags&=-257,i=Mu(Error(ne(422))),Vo(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(a=i.fallback,r=e.mode,i=Uc({mode:"visible",children:i.children},r,0,null),a=Ur(a,r,s,null),a.flags|=2,i.return=e,a.return=e,i.sibling=a,e.child=i,e.mode&1&&Ka(e,t.child,null,s),e.child.memoizedState=ad(s),e.memoizedState=rd,a);if(!(e.mode&1))return Vo(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,a=Error(ne(419)),i=Mu(a,i,void 0),Vo(t,e,s,i)}if(o=(s&t.childLanes)!==0,un||o){if(i=Dt,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==a.retryLane&&(a.retryLane=r,Ci(t,r),Jn(i,t,r,-1))}return Hh(),i=Mu(Error(ne(421))),Vo(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=fM.bind(null,t),r._reactRetry=e,null):(t=a.treeContext,En=ir(r.nextSibling),Tn=e,dt=!0,qn=null,t!==null&&(Nn[Dn++]=Mi,Nn[Dn++]=Ti,Nn[Dn++]=zr,Mi=t.id,Ti=t.overflow,zr=e),e=Uh(e,i.children),e.flags|=4096,e)}function Om(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Qf(t.return,e,n)}function Tu(t,e,n,i,r){var a=t.memoizedState;a===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(a.isBackwards=e,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=n,a.tailMode=r)}function ex(t,e,n){var i=e.pendingProps,r=i.revealOrder,a=i.tail;if(en(t,e,i.children,n),i=pt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Om(t,n,e);else if(t.tag===19)Om(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(rt(pt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&sc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Tu(e,!1,r,n,a);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&sc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Tu(e,!0,n,null,a);break;case"together":Tu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Nl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Pi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Gr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=or(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=or(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function JE(t,e,n){switch(e.tag){case 3:Q_(e),qa();break;case 5:w_(e);break;case 1:dn(e.type)&&ec(e);break;case 4:Ah(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;rt(ic,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(rt(pt,pt.current&1),e.flags|=128,null):n&e.child.childLanes?J_(t,e,n):(rt(pt,pt.current&1),t=Pi(t,e,n),t!==null?t.sibling:null);rt(pt,pt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return ex(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),rt(pt,pt.current),i)break;return null;case 22:case 23:return e.lanes=0,K_(t,e,n)}return Pi(t,e,n)}var tx,sd,nx,ix;tx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};sd=function(){};nx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Dr(fi.current);var a=null;switch(n){case"input":r=Rf(t,r),i=Rf(t,i),a=[];break;case"select":r=gt({},r,{value:void 0}),i=gt({},i,{value:void 0}),a=[];break;case"textarea":r=Lf(t,r),i=Lf(t,i),a=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ql)}Df(n,i);var s;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(s in o)o.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Xs.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(s in o)!o.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&o[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(a||(a=[]),a.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(a=a||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Xs.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&lt("scroll",t),a||o===l||(a=[])):(a=a||[]).push(c,l))}n&&(a=a||[]).push("style",n);var c=a;(e.updateQueue=c)&&(e.flags|=4)}};ix=function(t,e,n,i){n!==i&&(e.flags|=4)};function ys(t,e){if(!dt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function eM(t,e,n){var i=e.pendingProps;switch(yh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(e),null;case 1:return dn(e.type)&&Jl(),Vt(e),null;case 3:return i=e.stateNode,Za(),ut(fn),ut(qt),Ch(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ho(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,qn!==null&&(pd(qn),qn=null))),sd(t,e),Vt(e),null;case 5:Rh(e);var r=Dr(ro.current);if(n=e.type,t!==null&&e.stateNode!=null)nx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return Vt(e),null}if(t=Dr(fi.current),Ho(e)){i=e.stateNode,n=e.type;var a=e.memoizedProps;switch(i[li]=e,i[no]=a,t=(e.mode&1)!==0,n){case"dialog":lt("cancel",i),lt("close",i);break;case"iframe":case"object":case"embed":lt("load",i);break;case"video":case"audio":for(r=0;r<Ds.length;r++)lt(Ds[r],i);break;case"source":lt("error",i);break;case"img":case"image":case"link":lt("error",i),lt("load",i);break;case"details":lt("toggle",i);break;case"input":jp(i,a),lt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!a.multiple},lt("invalid",i);break;case"textarea":$p(i,a),lt("invalid",i)}Df(n,a),r=null;for(var s in a)if(a.hasOwnProperty(s)){var o=a[s];s==="children"?typeof o=="string"?i.textContent!==o&&(a.suppressHydrationWarning!==!0&&zo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(a.suppressHydrationWarning!==!0&&zo(i.textContent,o,t),r=["children",""+o]):Xs.hasOwnProperty(s)&&o!=null&&s==="onScroll"&&lt("scroll",i)}switch(n){case"input":No(i),Xp(i,a,!0);break;case"textarea":No(i),Yp(i);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(i.onclick=Ql)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=L0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[li]=e,t[no]=i,tx(t,e,!1,!1),e.stateNode=t;e:{switch(s=If(n,i),n){case"dialog":lt("cancel",t),lt("close",t),r=i;break;case"iframe":case"object":case"embed":lt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ds.length;r++)lt(Ds[r],t);r=i;break;case"source":lt("error",t),r=i;break;case"img":case"image":case"link":lt("error",t),lt("load",t),r=i;break;case"details":lt("toggle",t),r=i;break;case"input":jp(t,i),r=Rf(t,i),lt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=gt({},i,{value:void 0}),lt("invalid",t);break;case"textarea":$p(t,i),r=Lf(t,i),lt("invalid",t);break;default:r=i}Df(n,r),o=r;for(a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="style"?I0(t,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&N0(t,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&$s(t,l):typeof l=="number"&&$s(t,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Xs.hasOwnProperty(a)?l!=null&&a==="onScroll"&&lt("scroll",t):l!=null&&ah(t,a,l,s))}switch(n){case"input":No(t),Xp(t,i,!1);break;case"textarea":No(t),Yp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+dr(i.value));break;case"select":t.multiple=!!i.multiple,a=i.value,a!=null?Fa(t,!!i.multiple,a,!1):i.defaultValue!=null&&Fa(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ql)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Vt(e),null;case 6:if(t&&e.stateNode!=null)ix(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=Dr(ro.current),Dr(fi.current),Ho(e)){if(i=e.stateNode,n=e.memoizedProps,i[li]=e,(a=i.nodeValue!==n)&&(t=Tn,t!==null))switch(t.tag){case 3:zo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&zo(i.nodeValue,n,(t.mode&1)!==0)}a&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[li]=e,e.stateNode=i}return Vt(e),null;case 13:if(ut(pt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(dt&&En!==null&&e.mode&1&&!(e.flags&128))S_(),qa(),e.flags|=98560,a=!1;else if(a=Ho(e),i!==null&&i.dehydrated!==null){if(t===null){if(!a)throw Error(ne(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(ne(317));a[li]=e}else qa(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Vt(e),a=!1}else qn!==null&&(pd(qn),qn=null),a=!0;if(!a)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||pt.current&1?At===0&&(At=3):Hh())),e.updateQueue!==null&&(e.flags|=4),Vt(e),null);case 4:return Za(),sd(t,e),t===null&&eo(e.stateNode.containerInfo),Vt(e),null;case 10:return Th(e.type._context),Vt(e),null;case 17:return dn(e.type)&&Jl(),Vt(e),null;case 19:if(ut(pt),a=e.memoizedState,a===null)return Vt(e),null;if(i=(e.flags&128)!==0,s=a.rendering,s===null)if(i)ys(a,!1);else{if(At!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=sc(t),s!==null){for(e.flags|=128,ys(a,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)a=n,t=i,a.flags&=14680066,s=a.alternate,s===null?(a.childLanes=0,a.lanes=t,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,t=s.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return rt(pt,pt.current&1|2),e.child}t=t.sibling}a.tail!==null&&Et()>Ja&&(e.flags|=128,i=!0,ys(a,!1),e.lanes=4194304)}else{if(!i)if(t=sc(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ys(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!dt)return Vt(e),null}else 2*Et()-a.renderingStartTime>Ja&&n!==1073741824&&(e.flags|=128,i=!0,ys(a,!1),e.lanes=4194304);a.isBackwards?(s.sibling=e.child,e.child=s):(n=a.last,n!==null?n.sibling=s:e.child=s,a.last=s)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=Et(),e.sibling=null,n=pt.current,rt(pt,i?n&1|2:n&1),e):(Vt(e),null);case 22:case 23:return zh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?yn&1073741824&&(Vt(e),e.subtreeFlags&6&&(e.flags|=8192)):Vt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function tM(t,e){switch(yh(e),e.tag){case 1:return dn(e.type)&&Jl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Za(),ut(fn),ut(qt),Ch(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Rh(e),null;case 13:if(ut(pt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));qa()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ut(pt),null;case 4:return Za(),null;case 10:return Th(e.type._context),null;case 22:case 23:return zh(),null;case 24:return null;default:return null}}var Wo=!1,Xt=!1,nM=typeof WeakSet=="function"?WeakSet:Set,pe=null;function Na(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){_t(t,e,i)}else n.current=null}function od(t,e,n){try{n()}catch(i){_t(t,e,i)}}var Fm=!1;function iM(t,e){if(Wf=ql,t=l_(),_h(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var s=0,o=-1,l=-1,c=0,f=0,d=t,h=null;t:for(;;){for(var m;d!==n||r!==0&&d.nodeType!==3||(o=s+r),d!==a||i!==0&&d.nodeType!==3||(l=s+i),d.nodeType===3&&(s+=d.nodeValue.length),(m=d.firstChild)!==null;)h=d,d=m;for(;;){if(d===t)break t;if(h===n&&++c===r&&(o=s),h===a&&++f===i&&(l=s),(m=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(jf={focusedElem:t,selectionRange:n},ql=!1,pe=e;pe!==null;)if(e=pe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,pe=t;else for(;pe!==null;){e=pe;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var x=_.memoizedProps,p=_.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?x:$n(e.type,x),p);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(S){_t(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,pe=t;break}pe=e.return}return _=Fm,Fm=!1,_}function zs(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var a=r.destroy;r.destroy=void 0,a!==void 0&&od(e,n,a)}r=r.next}while(r!==i)}}function Dc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function ld(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function rx(t){var e=t.alternate;e!==null&&(t.alternate=null,rx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[li],delete e[no],delete e[Yf],delete e[BE],delete e[zE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ax(t){return t.tag===5||t.tag===3||t.tag===4}function km(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ax(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function cd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ql));else if(i!==4&&(t=t.child,t!==null))for(cd(t,e,n),t=t.sibling;t!==null;)cd(t,e,n),t=t.sibling}function ud(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(ud(t,e,n),t=t.sibling;t!==null;)ud(t,e,n),t=t.sibling}var Ft=null,Yn=!1;function Fi(t,e,n){for(n=n.child;n!==null;)sx(t,e,n),n=n.sibling}function sx(t,e,n){if(ui&&typeof ui.onCommitFiberUnmount=="function")try{ui.onCommitFiberUnmount(bc,n)}catch{}switch(n.tag){case 5:Xt||Na(n,e);case 6:var i=Ft,r=Yn;Ft=null,Fi(t,e,n),Ft=i,Yn=r,Ft!==null&&(Yn?(t=Ft,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ft.removeChild(n.stateNode));break;case 18:Ft!==null&&(Yn?(t=Ft,n=n.stateNode,t.nodeType===8?vu(t.parentNode,n):t.nodeType===1&&vu(t,n),Zs(t)):vu(Ft,n.stateNode));break;case 4:i=Ft,r=Yn,Ft=n.stateNode.containerInfo,Yn=!0,Fi(t,e,n),Ft=i,Yn=r;break;case 0:case 11:case 14:case 15:if(!Xt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var a=r,s=a.destroy;a=a.tag,s!==void 0&&(a&2||a&4)&&od(n,e,s),r=r.next}while(r!==i)}Fi(t,e,n);break;case 1:if(!Xt&&(Na(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){_t(n,e,o)}Fi(t,e,n);break;case 21:Fi(t,e,n);break;case 22:n.mode&1?(Xt=(i=Xt)||n.memoizedState!==null,Fi(t,e,n),Xt=i):Fi(t,e,n);break;default:Fi(t,e,n)}}function Bm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new nM),e.forEach(function(i){var r=dM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Hn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var a=t,s=e,o=s;e:for(;o!==null;){switch(o.tag){case 5:Ft=o.stateNode,Yn=!1;break e;case 3:Ft=o.stateNode.containerInfo,Yn=!0;break e;case 4:Ft=o.stateNode.containerInfo,Yn=!0;break e}o=o.return}if(Ft===null)throw Error(ne(160));sx(a,s,r),Ft=null,Yn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){_t(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ox(e,t),e=e.sibling}function ox(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Hn(e,t),ii(t),i&4){try{zs(3,t,t.return),Dc(3,t)}catch(x){_t(t,t.return,x)}try{zs(5,t,t.return)}catch(x){_t(t,t.return,x)}}break;case 1:Hn(e,t),ii(t),i&512&&n!==null&&Na(n,n.return);break;case 5:if(Hn(e,t),ii(t),i&512&&n!==null&&Na(n,n.return),t.flags&32){var r=t.stateNode;try{$s(r,"")}catch(x){_t(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var a=t.memoizedProps,s=n!==null?n.memoizedProps:a,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&a.type==="radio"&&a.name!=null&&C0(r,a),If(o,s);var c=If(o,a);for(s=0;s<l.length;s+=2){var f=l[s],d=l[s+1];f==="style"?I0(r,d):f==="dangerouslySetInnerHTML"?N0(r,d):f==="children"?$s(r,d):ah(r,f,d,c)}switch(o){case"input":Cf(r,a);break;case"textarea":P0(r,a);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!a.multiple;var m=a.value;m!=null?Fa(r,!!a.multiple,m,!1):h!==!!a.multiple&&(a.defaultValue!=null?Fa(r,!!a.multiple,a.defaultValue,!0):Fa(r,!!a.multiple,a.multiple?[]:"",!1))}r[no]=a}catch(x){_t(t,t.return,x)}}break;case 6:if(Hn(e,t),ii(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,a=t.memoizedProps;try{r.nodeValue=a}catch(x){_t(t,t.return,x)}}break;case 3:if(Hn(e,t),ii(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Zs(e.containerInfo)}catch(x){_t(t,t.return,x)}break;case 4:Hn(e,t),ii(t);break;case 13:Hn(e,t),ii(t),r=t.child,r.flags&8192&&(a=r.memoizedState!==null,r.stateNode.isHidden=a,!a||r.alternate!==null&&r.alternate.memoizedState!==null||(kh=Et())),i&4&&Bm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Xt=(c=Xt)||f,Hn(e,t),Xt=c):Hn(e,t),ii(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(pe=t,f=t.child;f!==null;){for(d=pe=f;pe!==null;){switch(h=pe,m=h.child,h.tag){case 0:case 11:case 14:case 15:zs(4,h,h.return);break;case 1:Na(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(x){_t(i,n,x)}}break;case 5:Na(h,h.return);break;case 22:if(h.memoizedState!==null){Hm(d);continue}}m!==null?(m.return=h,pe=m):Hm(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,c?(a=r.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(o=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=D0("display",s))}catch(x){_t(t,t.return,x)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){_t(t,t.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Hn(e,t),ii(t),i&4&&Bm(t);break;case 21:break;default:Hn(e,t),ii(t)}}function ii(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ax(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&($s(r,""),i.flags&=-33);var a=km(t);ud(t,a,r);break;case 3:case 4:var s=i.stateNode.containerInfo,o=km(t);cd(t,o,s);break;default:throw Error(ne(161))}}catch(l){_t(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function rM(t,e,n){pe=t,lx(t)}function lx(t,e,n){for(var i=(t.mode&1)!==0;pe!==null;){var r=pe,a=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||Wo;if(!s){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Xt;o=Wo;var c=Xt;if(Wo=s,(Xt=l)&&!c)for(pe=r;pe!==null;)s=pe,l=s.child,s.tag===22&&s.memoizedState!==null?Gm(r):l!==null?(l.return=s,pe=l):Gm(r);for(;a!==null;)pe=a,lx(a),a=a.sibling;pe=r,Wo=o,Xt=c}zm(t)}else r.subtreeFlags&8772&&a!==null?(a.return=r,pe=a):zm(t)}}function zm(t){for(;pe!==null;){var e=pe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Xt||Dc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Xt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:$n(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var a=e.updateQueue;a!==null&&Tm(e,a,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Tm(e,s,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Zs(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}Xt||e.flags&512&&ld(e)}catch(h){_t(e,e.return,h)}}if(e===t){pe=null;break}if(n=e.sibling,n!==null){n.return=e.return,pe=n;break}pe=e.return}}function Hm(t){for(;pe!==null;){var e=pe;if(e===t){pe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,pe=n;break}pe=e.return}}function Gm(t){for(;pe!==null;){var e=pe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Dc(4,e)}catch(l){_t(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){_t(e,r,l)}}var a=e.return;try{ld(e)}catch(l){_t(e,a,l)}break;case 5:var s=e.return;try{ld(e)}catch(l){_t(e,s,l)}}}catch(l){_t(e,e.return,l)}if(e===t){pe=null;break}var o=e.sibling;if(o!==null){o.return=e.return,pe=o;break}pe=e.return}}var aM=Math.ceil,cc=Ni.ReactCurrentDispatcher,Oh=Ni.ReactCurrentOwner,Fn=Ni.ReactCurrentBatchConfig,$e=0,Dt=null,Tt=null,Bt=0,yn=0,Da=gr(0),At=0,lo=null,Gr=0,Ic=0,Fh=0,Hs=null,on=null,kh=0,Ja=1/0,xi=null,uc=!1,fd=null,ar=null,jo=!1,Zi=null,fc=0,Gs=0,dd=null,Dl=-1,Il=0;function rn(){return $e&6?Et():Dl!==-1?Dl:Dl=Et()}function sr(t){return t.mode&1?$e&2&&Bt!==0?Bt&-Bt:GE.transition!==null?(Il===0&&(Il=X0()),Il):(t=Qe,t!==0||(t=window.event,t=t===void 0?16:J0(t.type)),t):1}function Jn(t,e,n,i){if(50<Gs)throw Gs=0,dd=null,Error(ne(185));vo(t,n,i),(!($e&2)||t!==Dt)&&(t===Dt&&(!($e&2)&&(Ic|=n),At===4&&qi(t,Bt)),hn(t,i),n===1&&$e===0&&!(e.mode&1)&&(Ja=Et()+500,Pc&&vr()))}function hn(t,e){var n=t.callbackNode;GS(t,e);var i=Yl(t,t===Dt?Bt:0);if(i===0)n!==null&&Zp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Zp(n),e===1)t.tag===0?HE(Vm.bind(null,t)):__(Vm.bind(null,t)),FE(function(){!($e&6)&&vr()}),n=null;else{switch($0(i)){case 1:n=uh;break;case 4:n=W0;break;case 16:n=$l;break;case 536870912:n=j0;break;default:n=$l}n=gx(n,cx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function cx(t,e){if(Dl=-1,Il=0,$e&6)throw Error(ne(327));var n=t.callbackNode;if(Ga()&&t.callbackNode!==n)return null;var i=Yl(t,t===Dt?Bt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=dc(t,i);else{e=i;var r=$e;$e|=2;var a=fx();(Dt!==t||Bt!==e)&&(xi=null,Ja=Et()+500,Ir(t,e));do try{lM();break}catch(o){ux(t,o)}while(!0);Mh(),cc.current=a,$e=r,Tt!==null?e=0:(Dt=null,Bt=0,e=At)}if(e!==0){if(e===2&&(r=Bf(t),r!==0&&(i=r,e=hd(t,r))),e===1)throw n=lo,Ir(t,0),qi(t,i),hn(t,Et()),n;if(e===6)qi(t,i);else{if(r=t.current.alternate,!(i&30)&&!sM(r)&&(e=dc(t,i),e===2&&(a=Bf(t),a!==0&&(i=a,e=hd(t,a))),e===1))throw n=lo,Ir(t,0),qi(t,i),hn(t,Et()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:wr(t,on,xi);break;case 3:if(qi(t,i),(i&130023424)===i&&(e=kh+500-Et(),10<e)){if(Yl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){rn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=$f(wr.bind(null,t,on,xi),e);break}wr(t,on,xi);break;case 4:if(qi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-Qn(i);a=1<<s,s=e[s],s>r&&(r=s),i&=~a}if(i=r,i=Et()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*aM(i/1960))-i,10<i){t.timeoutHandle=$f(wr.bind(null,t,on,xi),i);break}wr(t,on,xi);break;case 5:wr(t,on,xi);break;default:throw Error(ne(329))}}}return hn(t,Et()),t.callbackNode===n?cx.bind(null,t):null}function hd(t,e){var n=Hs;return t.current.memoizedState.isDehydrated&&(Ir(t,e).flags|=256),t=dc(t,e),t!==2&&(e=on,on=n,e!==null&&pd(e)),t}function pd(t){on===null?on=t:on.push.apply(on,t)}function sM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],a=r.getSnapshot;r=r.value;try{if(!ei(a(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function qi(t,e){for(e&=~Fh,e&=~Ic,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Qn(e),i=1<<n;t[n]=-1,e&=~i}}function Vm(t){if($e&6)throw Error(ne(327));Ga();var e=Yl(t,0);if(!(e&1))return hn(t,Et()),null;var n=dc(t,e);if(t.tag!==0&&n===2){var i=Bf(t);i!==0&&(e=i,n=hd(t,i))}if(n===1)throw n=lo,Ir(t,0),qi(t,e),hn(t,Et()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,wr(t,on,xi),hn(t,Et()),null}function Bh(t,e){var n=$e;$e|=1;try{return t(e)}finally{$e=n,$e===0&&(Ja=Et()+500,Pc&&vr())}}function Vr(t){Zi!==null&&Zi.tag===0&&!($e&6)&&Ga();var e=$e;$e|=1;var n=Fn.transition,i=Qe;try{if(Fn.transition=null,Qe=1,t)return t()}finally{Qe=i,Fn.transition=n,$e=e,!($e&6)&&vr()}}function zh(){yn=Da.current,ut(Da)}function Ir(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,OE(n)),Tt!==null)for(n=Tt.return;n!==null;){var i=n;switch(yh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Jl();break;case 3:Za(),ut(fn),ut(qt),Ch();break;case 5:Rh(i);break;case 4:Za();break;case 13:ut(pt);break;case 19:ut(pt);break;case 10:Th(i.type._context);break;case 22:case 23:zh()}n=n.return}if(Dt=t,Tt=t=or(t.current,null),Bt=yn=e,At=0,lo=null,Fh=Ic=Gr=0,on=Hs=null,Nr!==null){for(e=0;e<Nr.length;e++)if(n=Nr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,a=n.pending;if(a!==null){var s=a.next;a.next=r,i.next=s}n.pending=i}Nr=null}return t}function ux(t,e){do{var n=Tt;try{if(Mh(),Pl.current=lc,oc){for(var i=mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}oc=!1}if(Hr=0,Nt=wt=mt=null,Bs=!1,ao=0,Oh.current=null,n===null||n.return===null){At=1,lo=e,Tt=null;break}e:{var a=t,s=n.return,o=n,l=e;if(e=Bt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=o,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=Pm(s);if(m!==null){m.flags&=-257,Lm(m,s,o,a,e),m.mode&1&&Cm(a,c,e),e=m,l=c;var _=e.updateQueue;if(_===null){var x=new Set;x.add(l),e.updateQueue=x}else _.add(l);break e}else{if(!(e&1)){Cm(a,c,e),Hh();break e}l=Error(ne(426))}}else if(dt&&o.mode&1){var p=Pm(s);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Lm(p,s,o,a,e),Sh(Qa(l,o));break e}}a=l=Qa(l,o),At!==4&&(At=2),Hs===null?Hs=[a]:Hs.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,e&=-e,a.lanes|=e;var u=$_(a,l,e);Mm(a,u);break e;case 1:o=l;var g=a.type,v=a.stateNode;if(!(a.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(ar===null||!ar.has(v)))){a.flags|=65536,e&=-e,a.lanes|=e;var S=Y_(a,o,e);Mm(a,S);break e}}a=a.return}while(a!==null)}hx(n)}catch(R){e=R,Tt===n&&n!==null&&(Tt=n=n.return);continue}break}while(!0)}function fx(){var t=cc.current;return cc.current=lc,t===null?lc:t}function Hh(){(At===0||At===3||At===2)&&(At=4),Dt===null||!(Gr&268435455)&&!(Ic&268435455)||qi(Dt,Bt)}function dc(t,e){var n=$e;$e|=2;var i=fx();(Dt!==t||Bt!==e)&&(xi=null,Ir(t,e));do try{oM();break}catch(r){ux(t,r)}while(!0);if(Mh(),$e=n,cc.current=i,Tt!==null)throw Error(ne(261));return Dt=null,Bt=0,At}function oM(){for(;Tt!==null;)dx(Tt)}function lM(){for(;Tt!==null&&!DS();)dx(Tt)}function dx(t){var e=mx(t.alternate,t,yn);t.memoizedProps=t.pendingProps,e===null?hx(t):Tt=e,Oh.current=null}function hx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=tM(n,e),n!==null){n.flags&=32767,Tt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{At=6,Tt=null;return}}else if(n=eM(n,e,yn),n!==null){Tt=n;return}if(e=e.sibling,e!==null){Tt=e;return}Tt=e=t}while(e!==null);At===0&&(At=5)}function wr(t,e,n){var i=Qe,r=Fn.transition;try{Fn.transition=null,Qe=1,cM(t,e,n,i)}finally{Fn.transition=r,Qe=i}return null}function cM(t,e,n,i){do Ga();while(Zi!==null);if($e&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var a=n.lanes|n.childLanes;if(VS(t,a),t===Dt&&(Tt=Dt=null,Bt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||jo||(jo=!0,gx($l,function(){return Ga(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Fn.transition,Fn.transition=null;var s=Qe;Qe=1;var o=$e;$e|=4,Oh.current=null,iM(t,n),ox(n,t),CE(jf),ql=!!Wf,jf=Wf=null,t.current=n,rM(n),IS(),$e=o,Qe=s,Fn.transition=a}else t.current=n;if(jo&&(jo=!1,Zi=t,fc=r),a=t.pendingLanes,a===0&&(ar=null),FS(n.stateNode),hn(t,Et()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(uc)throw uc=!1,t=fd,fd=null,t;return fc&1&&t.tag!==0&&Ga(),a=t.pendingLanes,a&1?t===dd?Gs++:(Gs=0,dd=t):Gs=0,vr(),null}function Ga(){if(Zi!==null){var t=$0(fc),e=Fn.transition,n=Qe;try{if(Fn.transition=null,Qe=16>t?16:t,Zi===null)var i=!1;else{if(t=Zi,Zi=null,fc=0,$e&6)throw Error(ne(331));var r=$e;for($e|=4,pe=t.current;pe!==null;){var a=pe,s=a.child;if(pe.flags&16){var o=a.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(pe=c;pe!==null;){var f=pe;switch(f.tag){case 0:case 11:case 15:zs(8,f,a)}var d=f.child;if(d!==null)d.return=f,pe=d;else for(;pe!==null;){f=pe;var h=f.sibling,m=f.return;if(rx(f),f===c){pe=null;break}if(h!==null){h.return=m,pe=h;break}pe=m}}}var _=a.alternate;if(_!==null){var x=_.child;if(x!==null){_.child=null;do{var p=x.sibling;x.sibling=null,x=p}while(x!==null)}}pe=a}}if(a.subtreeFlags&2064&&s!==null)s.return=a,pe=s;else e:for(;pe!==null;){if(a=pe,a.flags&2048)switch(a.tag){case 0:case 11:case 15:zs(9,a,a.return)}var u=a.sibling;if(u!==null){u.return=a.return,pe=u;break e}pe=a.return}}var g=t.current;for(pe=g;pe!==null;){s=pe;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,pe=v;else e:for(s=g;pe!==null;){if(o=pe,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Dc(9,o)}}catch(R){_t(o,o.return,R)}if(o===s){pe=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,pe=S;break e}pe=o.return}}if($e=r,vr(),ui&&typeof ui.onPostCommitFiberRoot=="function")try{ui.onPostCommitFiberRoot(bc,t)}catch{}i=!0}return i}finally{Qe=n,Fn.transition=e}}return!1}function Wm(t,e,n){e=Qa(n,e),e=$_(t,e,1),t=rr(t,e,1),e=rn(),t!==null&&(vo(t,1,e),hn(t,e))}function _t(t,e,n){if(t.tag===3)Wm(t,t,n);else for(;e!==null;){if(e.tag===3){Wm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ar===null||!ar.has(i))){t=Qa(n,t),t=Y_(e,t,1),e=rr(e,t,1),t=rn(),e!==null&&(vo(e,1,t),hn(e,t));break}}e=e.return}}function uM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=rn(),t.pingedLanes|=t.suspendedLanes&n,Dt===t&&(Bt&n)===n&&(At===4||At===3&&(Bt&130023424)===Bt&&500>Et()-kh?Ir(t,0):Fh|=n),hn(t,e)}function px(t,e){e===0&&(t.mode&1?(e=Uo,Uo<<=1,!(Uo&130023424)&&(Uo=4194304)):e=1);var n=rn();t=Ci(t,e),t!==null&&(vo(t,e,n),hn(t,n))}function fM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),px(t,n)}function dM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),px(t,n)}var mx;mx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||fn.current)un=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return un=!1,JE(t,e,n);un=!!(t.flags&131072)}else un=!1,dt&&e.flags&1048576&&x_(e,nc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Nl(t,e),t=e.pendingProps;var r=Ya(e,qt.current);Ha(e,n),r=Lh(null,e,i,t,r,n);var a=Nh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,dn(i)?(a=!0,ec(e)):a=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,wh(e),r.updater=Nc,e.stateNode=r,r._reactInternals=e,ed(e,i,t,n),e=id(null,e,i,!0,a,n)):(e.tag=0,dt&&a&&xh(e),en(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Nl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=pM(i),t=$n(i,t),r){case 0:e=nd(null,e,i,t,n);break e;case 1:e=Im(null,e,i,t,n);break e;case 11:e=Nm(null,e,i,t,n);break e;case 14:e=Dm(null,e,i,$n(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),nd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),Im(t,e,i,r,n);case 3:e:{if(Q_(e),t===null)throw Error(ne(387));i=e.pendingProps,a=e.memoizedState,r=a.element,b_(t,e),ac(e,i,null,n);var s=e.memoizedState;if(i=s.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=a,e.memoizedState=a,e.flags&256){r=Qa(Error(ne(423)),e),e=Um(t,e,i,n,r);break e}else if(i!==r){r=Qa(Error(ne(424)),e),e=Um(t,e,i,n,r);break e}else for(En=ir(e.stateNode.containerInfo.firstChild),Tn=e,dt=!0,qn=null,n=M_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qa(),i===r){e=Pi(t,e,n);break e}en(t,e,i,n)}e=e.child}return e;case 5:return w_(e),t===null&&Zf(e),i=e.type,r=e.pendingProps,a=t!==null?t.memoizedProps:null,s=r.children,Xf(i,r)?s=null:a!==null&&Xf(i,a)&&(e.flags|=32),Z_(t,e),en(t,e,s,n),e.child;case 6:return t===null&&Zf(e),null;case 13:return J_(t,e,n);case 4:return Ah(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ka(e,null,i,n):en(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),Nm(t,e,i,r,n);case 7:return en(t,e,e.pendingProps,n),e.child;case 8:return en(t,e,e.pendingProps.children,n),e.child;case 12:return en(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,a=e.memoizedProps,s=r.value,rt(ic,i._currentValue),i._currentValue=s,a!==null)if(ei(a.value,s)){if(a.children===r.children&&!fn.current){e=Pi(t,e,n);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){s=a.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(a.tag===1){l=wi(-1,n&-n),l.tag=2;var c=a.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Qf(a.return,n,e),o.lanes|=n;break}l=l.next}}else if(a.tag===10)s=a.type===e.type?null:a.child;else if(a.tag===18){if(s=a.return,s===null)throw Error(ne(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),Qf(s,n,e),s=a.sibling}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}en(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ha(e,n),r=Bn(r),i=i(r),e.flags|=1,en(t,e,i,n),e.child;case 14:return i=e.type,r=$n(i,e.pendingProps),r=$n(i.type,r),Dm(t,e,i,r,n);case 15:return q_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),Nl(t,e),e.tag=1,dn(i)?(t=!0,ec(e)):t=!1,Ha(e,n),X_(e,i,r),ed(e,i,r,n),id(null,e,i,!0,t,n);case 19:return ex(t,e,n);case 22:return K_(t,e,n)}throw Error(ne(156,e.tag))};function gx(t,e){return V0(t,e)}function hM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function On(t,e,n,i){return new hM(t,e,n,i)}function Gh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function pM(t){if(typeof t=="function")return Gh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===oh)return 11;if(t===lh)return 14}return 2}function or(t,e){var n=t.alternate;return n===null?(n=On(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ul(t,e,n,i,r,a){var s=2;if(i=t,typeof t=="function")Gh(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Ma:return Ur(n.children,r,a,e);case sh:s=8,r|=8;break;case Tf:return t=On(12,n,e,r|2),t.elementType=Tf,t.lanes=a,t;case bf:return t=On(13,n,e,r),t.elementType=bf,t.lanes=a,t;case wf:return t=On(19,n,e,r),t.elementType=wf,t.lanes=a,t;case w0:return Uc(n,r,a,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case T0:s=10;break e;case b0:s=9;break e;case oh:s=11;break e;case lh:s=14;break e;case Xi:s=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=On(s,n,e,r),e.elementType=t,e.type=i,e.lanes=a,e}function Ur(t,e,n,i){return t=On(7,t,i,e),t.lanes=n,t}function Uc(t,e,n,i){return t=On(22,t,i,e),t.elementType=w0,t.lanes=n,t.stateNode={isHidden:!1},t}function bu(t,e,n){return t=On(6,t,null,e),t.lanes=n,t}function wu(t,e,n){return e=On(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function mM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=su(0),this.expirationTimes=su(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=su(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Vh(t,e,n,i,r,a,s,o,l){return t=new mM(t,e,n,o,l),e===1?(e=1,a===!0&&(e|=8)):e=0,a=On(3,null,null,e),t.current=a,a.stateNode=t,a.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wh(a),t}function gM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ea,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function vx(t){if(!t)return hr;t=t._reactInternals;e:{if($r(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(dn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(dn(n))return v_(t,n,e)}return e}function _x(t,e,n,i,r,a,s,o,l){return t=Vh(n,i,!0,t,r,a,s,o,l),t.context=vx(null),n=t.current,i=rn(),r=sr(n),a=wi(i,r),a.callback=e??null,rr(n,a,r),t.current.lanes=r,vo(t,r,i),hn(t,i),t}function Oc(t,e,n,i){var r=e.current,a=rn(),s=sr(r);return n=vx(n),e.context===null?e.context=n:e.pendingContext=n,e=wi(a,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=rr(r,e,s),t!==null&&(Jn(t,r,s,a),Cl(t,r,s)),s}function hc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function jm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Wh(t,e){jm(t,e),(t=t.alternate)&&jm(t,e)}function vM(){return null}var xx=typeof reportError=="function"?reportError:function(t){console.error(t)};function jh(t){this._internalRoot=t}Fc.prototype.render=jh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));Oc(t,e,null,null)};Fc.prototype.unmount=jh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Vr(function(){Oc(null,t,null,null)}),e[Ri]=null}};function Fc(t){this._internalRoot=t}Fc.prototype.unstable_scheduleHydration=function(t){if(t){var e=K0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Yi.length&&e!==0&&e<Yi[n].priority;n++);Yi.splice(n,0,t),n===0&&Q0(t)}};function Xh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function kc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Xm(){}function _M(t,e,n,i,r){if(r){if(typeof i=="function"){var a=i;i=function(){var c=hc(s);a.call(c)}}var s=_x(e,i,t,0,null,!1,!1,"",Xm);return t._reactRootContainer=s,t[Ri]=s.current,eo(t.nodeType===8?t.parentNode:t),Vr(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=hc(l);o.call(c)}}var l=Vh(t,0,!1,null,null,!1,!1,"",Xm);return t._reactRootContainer=l,t[Ri]=l.current,eo(t.nodeType===8?t.parentNode:t),Vr(function(){Oc(e,l,n,i)}),l}function Bc(t,e,n,i,r){var a=n._reactRootContainer;if(a){var s=a;if(typeof r=="function"){var o=r;r=function(){var l=hc(s);o.call(l)}}Oc(e,s,t,r)}else s=_M(n,e,t,r,i);return hc(s)}Y0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ns(e.pendingLanes);n!==0&&(fh(e,n|1),hn(e,Et()),!($e&6)&&(Ja=Et()+500,vr()))}break;case 13:Vr(function(){var i=Ci(t,1);if(i!==null){var r=rn();Jn(i,t,1,r)}}),Wh(t,1)}};dh=function(t){if(t.tag===13){var e=Ci(t,134217728);if(e!==null){var n=rn();Jn(e,t,134217728,n)}Wh(t,134217728)}};q0=function(t){if(t.tag===13){var e=sr(t),n=Ci(t,e);if(n!==null){var i=rn();Jn(n,t,e,i)}Wh(t,e)}};K0=function(){return Qe};Z0=function(t,e){var n=Qe;try{return Qe=t,e()}finally{Qe=n}};Of=function(t,e,n){switch(e){case"input":if(Cf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Cc(i);if(!r)throw Error(ne(90));R0(i),Cf(i,r)}}}break;case"textarea":P0(t,n);break;case"select":e=n.value,e!=null&&Fa(t,!!n.multiple,e,!1)}};F0=Bh;k0=Vr;var xM={usingClientEntryPoint:!1,Events:[xo,Aa,Cc,U0,O0,Bh]},Ss={findFiberByHostInstance:Lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},yM={bundleType:Ss.bundleType,version:Ss.version,rendererPackageName:Ss.rendererPackageName,rendererConfig:Ss.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ni.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=H0(t),t===null?null:t.stateNode},findFiberByHostInstance:Ss.findFiberByHostInstance||vM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xo.isDisabled&&Xo.supportsFiber)try{bc=Xo.inject(yM),ui=Xo}catch{}}An.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xM;An.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xh(e))throw Error(ne(200));return gM(t,e,null,n)};An.createRoot=function(t,e){if(!Xh(t))throw Error(ne(299));var n=!1,i="",r=xx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Vh(t,1,!1,null,null,n,!1,i,r),t[Ri]=e.current,eo(t.nodeType===8?t.parentNode:t),new jh(e)};An.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=H0(e),t=t===null?null:t.stateNode,t};An.flushSync=function(t){return Vr(t)};An.hydrate=function(t,e,n){if(!kc(e))throw Error(ne(200));return Bc(null,t,e,!0,n)};An.hydrateRoot=function(t,e,n){if(!Xh(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,a="",s=xx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=_x(e,null,t,1,n??null,r,!1,a,s),t[Ri]=e.current,eo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Fc(e)};An.render=function(t,e,n){if(!kc(e))throw Error(ne(200));return Bc(null,t,e,!1,n)};An.unmountComponentAtNode=function(t){if(!kc(t))throw Error(ne(40));return t._reactRootContainer?(Vr(function(){Bc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ri]=null})}),!0):!1};An.unstable_batchedUpdates=Bh;An.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!kc(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return Bc(t,e,n,!1,i)};An.version="18.3.1-next-f1338f8080-20240426";function yx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yx)}catch(t){console.error(t)}}yx(),y0.exports=An;var SM=y0.exports,$m=SM;Ef.createRoot=$m.createRoot,Ef.hydrateRoot=$m.hydrateRoot;var EM=t=>t.disabled||Array.isArray(t.accessibilityStates)&&t.accessibilityStates.indexOf("disabled")>-1,MM={adjustable:"slider",button:"button",header:"heading",image:"img",imagebutton:null,keyboardkey:null,label:null,link:"link",none:"presentation",search:"search",summary:"region",text:null},Sx=t=>{var e=t.accessibilityRole,n=t.role,i=n||e;if(i){var r=MM[i];if(r!==null)return r||i}},TM={article:"article",banner:"header",blockquote:"blockquote",button:"button",code:"code",complementary:"aside",contentinfo:"footer",deletion:"del",emphasis:"em",figure:"figure",insertion:"ins",form:"form",list:"ul",listitem:"li",main:"main",navigation:"nav",paragraph:"p",region:"section",strong:"strong"},bM={},wM=function(e){e===void 0&&(e=bM);var n=e.role||e.accessibilityRole;if(n==="label")return"label";var i=Sx(e);if(i){if(i==="heading"){var r=e.accessibilityLevel||e["aria-level"];return r!=null?"h"+r:"h1"}return TM[i]}},Ex={isDisabled:EM,propsToAccessibilityComponent:wM,propsToAriaRole:Sx};function co(t){"@babel/helpers - typeof";return co=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},co(t)}function AM(t,e){if(co(t)!="object"||!t)return t;var n;if(typeof Symbol<"u"&&(n=t[Symbol.toPrimitive])!==void 0){var i=n.call(t,e);if(co(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function RM(t){var e=AM(t,"string");return co(e)=="symbol"?e:e+""}function CM(t,e,n){return(e=RM(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ym(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function es(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ym(Object(n),!0).forEach(function(i){CM(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ym(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function So(t,e){if(t==null)return{};var n={};for(var i in t)if({}.hasOwnProperty.call(t,i)){if(e.indexOf(i)!==-1)continue;n[i]=t[i]}return n}var Ol={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexOrder:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,fontWeight:!0,gridRow:!0,gridRowEnd:!0,gridRowGap:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnGap:!0,gridColumnStart:!0,lineClamp:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0,scale:!0,scaleX:!0,scaleY:!0,scaleZ:!0,shadowOpacity:!0},PM=["ms","Moz","O","Webkit"],LM=(t,e)=>t+e.charAt(0).toUpperCase()+e.substring(1);Object.keys(Ol).forEach(t=>{PM.forEach(e=>{Ol[LM(e,t)]=Ol[t]})});var NM=t=>t==="currentcolor"||t==="currentColor"||t==="inherit"||t.indexOf("var(")===0;function DM(t){if(typeof t=="number")return t>>>0===t&&t>=0&&t<=4294967295?t:null;if(typeof t!="string")return null;const e=UM();let n;if(n=e.hex6.exec(t))return parseInt(n[1]+"ff",16)>>>0;const i=OM(t);return i??((n=e.rgb.exec(t))?(di(n[1])<<24|di(n[2])<<16|di(n[3])<<8|255)>>>0:(n=e.rgba.exec(t))?n[6]!==void 0?(di(n[6])<<24|di(n[7])<<16|di(n[8])<<8|Yo(n[9]))>>>0:(di(n[2])<<24|di(n[3])<<16|di(n[4])<<8|Yo(n[5]))>>>0:(n=e.hex3.exec(t))?parseInt(n[1]+n[1]+n[2]+n[2]+n[3]+n[3]+"ff",16)>>>0:(n=e.hex8.exec(t))?parseInt(n[1],16)>>>0:(n=e.hex4.exec(t))?parseInt(n[1]+n[1]+n[2]+n[2]+n[3]+n[3]+n[4]+n[4],16)>>>0:(n=e.hsl.exec(t))?(Au($o(n[1]),Bi(n[2]),Bi(n[3]))|255)>>>0:(n=e.hsla.exec(t))?n[6]!==void 0?(Au($o(n[6]),Bi(n[7]),Bi(n[8]))|Yo(n[9]))>>>0:(Au($o(n[2]),Bi(n[3]),Bi(n[4]))|Yo(n[5]))>>>0:(n=e.hwb.exec(t))?(IM($o(n[1]),Bi(n[2]),Bi(n[3]))|255)>>>0:null)}function Va(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function Au(t,e,n){const i=n<.5?n*(1+e):n+e-n*e,r=2*n-i,a=Va(r,i,t+1/3),s=Va(r,i,t),o=Va(r,i,t-1/3);return Math.round(a*255)<<24|Math.round(s*255)<<16|Math.round(o*255)<<8}function IM(t,e,n){if(e+n>=1){const s=Math.round(e*255/(e+n));return s<<24|s<<16|s<<8}const i=Va(0,1,t+1/3)*(1-e-n)+e,r=Va(0,1,t)*(1-e-n)+e,a=Va(0,1,t-1/3)*(1-e-n)+e;return Math.round(i*255)<<24|Math.round(r*255)<<16|Math.round(a*255)<<8}const Lt="[-+]?\\d*\\.?\\d+",ki=Lt+"%";function Ru(...t){return"\\(\\s*("+t.join(")\\s*,?\\s*(")+")\\s*\\)"}function qm(...t){return"\\(\\s*("+t.slice(0,t.length-1).join(")\\s*,?\\s*(")+")\\s*/\\s*("+t[t.length-1]+")\\s*\\)"}function Km(...t){return"\\(\\s*("+t.join(")\\s*,\\s*(")+")\\s*\\)"}let Cu;function UM(){return Cu===void 0&&(Cu={rgb:new RegExp("rgb"+Ru(Lt,Lt,Lt)),rgba:new RegExp("rgba("+Km(Lt,Lt,Lt,Lt)+"|"+qm(Lt,Lt,Lt,Lt)+")"),hsl:new RegExp("hsl"+Ru(Lt,ki,ki)),hsla:new RegExp("hsla("+Km(Lt,ki,ki,Lt)+"|"+qm(Lt,ki,ki,Lt)+")"),hwb:new RegExp("hwb"+Ru(Lt,ki,ki)),hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex4:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{6})$/,hex8:/^#([0-9a-fA-F]{8})$/}),Cu}function di(t){const e=parseInt(t,10);return e<0?0:e>255?255:e}function $o(t){return(parseFloat(t)%360+360)%360/360}function Yo(t){const e=parseFloat(t);return e<0?0:e>1?255:Math.round(e*255)}function Bi(t){const e=parseFloat(t);return e<0?0:e>100?1:e/100}function OM(t){switch(t){case"transparent":return 0;case"aliceblue":return 4042850303;case"antiquewhite":return 4209760255;case"aqua":return 16777215;case"aquamarine":return 2147472639;case"azure":return 4043309055;case"beige":return 4126530815;case"bisque":return 4293182719;case"black":return 255;case"blanchedalmond":return 4293643775;case"blue":return 65535;case"blueviolet":return 2318131967;case"brown":return 2771004159;case"burlywood":return 3736635391;case"burntsienna":return 3934150143;case"cadetblue":return 1604231423;case"chartreuse":return 2147418367;case"chocolate":return 3530104575;case"coral":return 4286533887;case"cornflowerblue":return 1687547391;case"cornsilk":return 4294499583;case"crimson":return 3692313855;case"cyan":return 16777215;case"darkblue":return 35839;case"darkcyan":return 9145343;case"darkgoldenrod":return 3095792639;case"darkgray":return 2846468607;case"darkgreen":return 6553855;case"darkgrey":return 2846468607;case"darkkhaki":return 3182914559;case"darkmagenta":return 2332068863;case"darkolivegreen":return 1433087999;case"darkorange":return 4287365375;case"darkorchid":return 2570243327;case"darkred":return 2332033279;case"darksalmon":return 3918953215;case"darkseagreen":return 2411499519;case"darkslateblue":return 1211993087;case"darkslategray":return 793726975;case"darkslategrey":return 793726975;case"darkturquoise":return 13554175;case"darkviolet":return 2483082239;case"deeppink":return 4279538687;case"deepskyblue":return 12582911;case"dimgray":return 1768516095;case"dimgrey":return 1768516095;case"dodgerblue":return 512819199;case"firebrick":return 2988581631;case"floralwhite":return 4294635775;case"forestgreen":return 579543807;case"fuchsia":return 4278255615;case"gainsboro":return 3705462015;case"ghostwhite":return 4177068031;case"gold":return 4292280575;case"goldenrod":return 3668254975;case"gray":return 2155905279;case"green":return 8388863;case"greenyellow":return 2919182335;case"grey":return 2155905279;case"honeydew":return 4043305215;case"hotpink":return 4285117695;case"indianred":return 3445382399;case"indigo":return 1258324735;case"ivory":return 4294963455;case"khaki":return 4041641215;case"lavender":return 3873897215;case"lavenderblush":return 4293981695;case"lawngreen":return 2096890111;case"lemonchiffon":return 4294626815;case"lightblue":return 2916673279;case"lightcoral":return 4034953471;case"lightcyan":return 3774873599;case"lightgoldenrodyellow":return 4210742015;case"lightgray":return 3553874943;case"lightgreen":return 2431553791;case"lightgrey":return 3553874943;case"lightpink":return 4290167295;case"lightsalmon":return 4288707327;case"lightseagreen":return 548580095;case"lightskyblue":return 2278488831;case"lightslategray":return 2005441023;case"lightslategrey":return 2005441023;case"lightsteelblue":return 2965692159;case"lightyellow":return 4294959359;case"lime":return 16711935;case"limegreen":return 852308735;case"linen":return 4210091775;case"magenta":return 4278255615;case"maroon":return 2147483903;case"mediumaquamarine":return 1724754687;case"mediumblue":return 52735;case"mediumorchid":return 3126187007;case"mediumpurple":return 2473647103;case"mediumseagreen":return 1018393087;case"mediumslateblue":return 2070474495;case"mediumspringgreen":return 16423679;case"mediumturquoise":return 1221709055;case"mediumvioletred":return 3340076543;case"midnightblue":return 421097727;case"mintcream":return 4127193855;case"mistyrose":return 4293190143;case"moccasin":return 4293178879;case"navajowhite":return 4292783615;case"navy":return 33023;case"oldlace":return 4260751103;case"olive":return 2155872511;case"olivedrab":return 1804477439;case"orange":return 4289003775;case"orangered":return 4282712319;case"orchid":return 3664828159;case"palegoldenrod":return 4008225535;case"palegreen":return 2566625535;case"paleturquoise":return 2951671551;case"palevioletred":return 3681588223;case"papayawhip":return 4293907967;case"peachpuff":return 4292524543;case"peru":return 3448061951;case"pink":return 4290825215;case"plum":return 3718307327;case"powderblue":return 2967529215;case"purple":return 2147516671;case"rebeccapurple":return 1714657791;case"red":return 4278190335;case"rosybrown":return 3163525119;case"royalblue":return 1097458175;case"saddlebrown":return 2336560127;case"salmon":return 4202722047;case"sandybrown":return 4104413439;case"seagreen":return 780883967;case"seashell":return 4294307583;case"sienna":return 2689740287;case"silver":return 3233857791;case"skyblue":return 2278484991;case"slateblue":return 1784335871;case"slategray":return 1887473919;case"slategrey":return 1887473919;case"snow":return 4294638335;case"springgreen":return 16744447;case"steelblue":return 1182971135;case"tan":return 3535047935;case"teal":return 8421631;case"thistle":return 3636451583;case"tomato":return 4284696575;case"turquoise":return 1088475391;case"violet":return 4001558271;case"wheat":return 4125012991;case"white":return 4294967295;case"whitesmoke":return 4126537215;case"yellow":return 4294902015;case"yellowgreen":return 2597139199}return null}var FM=DM;const kM=Qd(FM);var BM=t=>{if(t==null)return t;var e=kM(t);if(e!=null)return e=(e<<24|e>>>8)>>>0,e},$h=function(e,n){if(n===void 0&&(n=1),e!=null){if(typeof e=="string"&&NM(e))return e;var i=BM(e);if(i!=null){var r=i>>16&255,a=i>>8&255,s=i&255,o=(i>>24&255)/255,l=(o*n).toFixed(2);return"rgba("+r+","+a+","+s+","+l+")"}}},zM={backgroundColor:!0,borderColor:!0,borderTopColor:!0,borderRightColor:!0,borderBottomColor:!0,borderLeftColor:!0,color:!0,shadowColor:!0,textDecorationColor:!0,textShadowColor:!0};function nn(t,e){var n=t;return(e==null||!Ol[e])&&typeof t=="number"?n=t+"px":e!=null&&zM[e]&&(n=$h(t)),n}var Di=!!(typeof window<"u"&&window.document&&window.document.createElement),HM={},GM=!Di||window.CSS!=null&&window.CSS.supports!=null&&(window.CSS.supports("text-decoration-line","none")||window.CSS.supports("-webkit-text-decoration-line","none")),VM="monospace,monospace",Zm='-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',WM={borderColor:["borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"],borderBlockColor:["borderTopColor","borderBottomColor"],borderInlineColor:["borderRightColor","borderLeftColor"],borderRadius:["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],borderStyle:["borderTopStyle","borderRightStyle","borderBottomStyle","borderLeftStyle"],borderBlockStyle:["borderTopStyle","borderBottomStyle"],borderInlineStyle:["borderRightStyle","borderLeftStyle"],borderWidth:["borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth"],borderBlockWidth:["borderTopWidth","borderBottomWidth"],borderInlineWidth:["borderRightWidth","borderLeftWidth"],insetBlock:["top","bottom"],insetInline:["left","right"],marginBlock:["marginTop","marginBottom"],marginInline:["marginRight","marginLeft"],paddingBlock:["paddingTop","paddingBottom"],paddingInline:["paddingRight","paddingLeft"],overflow:["overflowX","overflowY"],overscrollBehavior:["overscrollBehaviorX","overscrollBehaviorY"],borderBlockStartColor:["borderTopColor"],borderBlockStartStyle:["borderTopStyle"],borderBlockStartWidth:["borderTopWidth"],borderBlockEndColor:["borderBottomColor"],borderBlockEndStyle:["borderBottomStyle"],borderBlockEndWidth:["borderBottomWidth"],borderEndStartRadius:["borderBottomLeftRadius"],borderEndEndRadius:["borderBottomRightRadius"],borderStartStartRadius:["borderTopLeftRadius"],borderStartEndRadius:["borderTopRightRadius"],insetBlockEnd:["bottom"],insetBlockStart:["top"],marginBlockStart:["marginTop"],marginBlockEnd:["marginBottom"],paddingBlockStart:["paddingTop"],paddingBlockEnd:["paddingBottom"]},Mx=(t,e)=>{if(!t)return HM;var n={},i=function(){var s=t[r];if(s==null)return 1;if(r==="backgroundClip")s==="text"&&(n.backgroundClip=s,n.WebkitBackgroundClip=s);else if(r==="flex")s===-1?(n.flexGrow=0,n.flexShrink=1,n.flexBasis="auto"):n.flex=s;else if(r==="font")n[r]=s.replace("System",Zm);else if(r==="fontFamily")if(s.indexOf("System")>-1){var o=s.split(/,\s*/);o[o.indexOf("System")]=Zm,n[r]=o.join(",")}else s==="monospace"?n[r]=VM:n[r]=s;else if(r==="textDecorationLine")GM?n.textDecorationLine=s:n.textDecoration=s;else if(r==="writingDirection")n.direction=s;else{var l=nn(t[r],r),c=WM[r];e&&r==="inset"?(t.insetInline==null&&(n.left=l,n.right=l),t.insetBlock==null&&(n.top=l,n.bottom=l)):e&&r==="margin"?(t.marginInline==null&&(n.marginLeft=l,n.marginRight=l),t.marginBlock==null&&(n.marginTop=l,n.marginBottom=l)):e&&r==="padding"?(t.paddingInline==null&&(n.paddingLeft=l,n.paddingRight=l),t.paddingBlock==null&&(n.paddingTop=l,n.paddingBottom=l)):c?c.forEach((f,d)=>{t[f]==null&&(n[f]=l)}):n[r]=l}};for(var r in t)i();return n};function jM(t,e){for(var n=t.length,i=e^n,r=0,a;n>=4;)a=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,a=(a&65535)*1540483477+(((a>>>16)*1540483477&65535)<<16),a^=a>>>24,a=(a&65535)*1540483477+(((a>>>16)*1540483477&65535)<<16),i=(i&65535)*1540483477+(((i>>>16)*1540483477&65535)<<16)^a,n-=4,++r;switch(n){case 3:i^=(t.charCodeAt(r+2)&255)<<16;case 2:i^=(t.charCodeAt(r+1)&255)<<8;case 1:i^=t.charCodeAt(r)&255,i=(i&65535)*1540483477+(((i>>>16)*1540483477&65535)<<16)}return i^=i>>>13,i=(i&65535)*1540483477+(((i>>>16)*1540483477&65535)<<16),i^=i>>>15,i>>>0}var XM=t=>jM(t,1).toString(36),$M=/[A-Z]/g,YM=/^ms-/,Pu={};function qM(t){return"-"+t.toLowerCase()}function KM(t){if(t in Pu)return Pu[t];var e=t.replace($M,qM);return Pu[t]=YM.test(e)?"-"+e:e}var Tx={},Yh={},zc={};Object.defineProperty(zc,"__esModule",{value:!0});zc.default=ZM;function ZM(t){return t.charAt(0).toUpperCase()+t.slice(1)}Object.defineProperty(Yh,"__esModule",{value:!0});Yh.default=tT;var QM=zc,JM=eT(QM);function eT(t){return t&&t.__esModule?t:{default:t}}function tT(t,e,n){var i=t[e];if(i&&n.hasOwnProperty(e))for(var r=(0,JM.default)(e),a=0;a<i.length;++a){var s=i[a]+r;n[s]||(n[s]=n[e])}return n}var qh={};Object.defineProperty(qh,"__esModule",{value:!0});qh.default=nT;function nT(t,e,n,i,r){for(var a=0,s=t.length;a<s;++a){var o=t[a](e,n,i,r);if(o)return o}}var Kh={};Object.defineProperty(Kh,"__esModule",{value:!0});Kh.default=iT;function Qm(t,e){t.indexOf(e)===-1&&t.push(e)}function iT(t,e){if(Array.isArray(e))for(var n=0,i=e.length;n<i;++n)Qm(t,e[n]);else Qm(t,e)}var Zh={};Object.defineProperty(Zh,"__esModule",{value:!0});Zh.default=rT;function rT(t){return t instanceof Object&&!Array.isArray(t)}Object.defineProperty(Tx,"__esModule",{value:!0});var aT=Tx.default=hT,sT=Yh,oT=Hc(sT),lT=qh,Jm=Hc(lT),cT=Kh,uT=Hc(cT),fT=Zh,dT=Hc(fT);function Hc(t){return t&&t.__esModule?t:{default:t}}function hT(t){var e=t.prefixMap,n=t.plugins;return function i(r){for(var a in r){var s=r[a];if((0,dT.default)(s))r[a]=i(s);else if(Array.isArray(s)){for(var o=[],l=0,c=s.length;l<c;++l){var f=(0,Jm.default)(n,a,s[l],r,e);(0,uT.default)(o,f||s[l])}o.length>0&&(r[a]=o)}else{var d=(0,Jm.default)(n,a,s,r,e);d&&(r[a]=d),r=(0,oT.default)(e,a,r)}}return r}}var bx={};function Fl(t){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Fl=function(n){return typeof n}:Fl=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Fl(t)}function pT(t){return _T(t)||vT(t)||gT(t)||mT()}function mT(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gT(t,e){if(t){if(typeof t=="string")return md(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(n);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return md(t,e)}}function vT(t){if(typeof Symbol<"u"&&Symbol.iterator in Object(t))return Array.from(t)}function _T(t){if(Array.isArray(t))return md(t)}function md(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function eg(t){return t.filter(function(e,n){return t.lastIndexOf(e)===n})}function wx(t){for(var e=0,n=arguments.length<=1?0:arguments.length-1;e<n;++e){var i=e+1<1||arguments.length<=e+1?void 0:arguments[e+1];for(var r in i){var a=i[r],s=t[r];if(s&&a){if(Array.isArray(s)){t[r]=eg(s.concat(a));continue}if(Array.isArray(a)){t[r]=eg([s].concat(pT(a)));continue}if(Fl(a)==="object"){t[r]=wx({},s,a);continue}}t[r]=a}}return t}var xT=/-([a-z])/g,yT=/^Ms/g,Lu={};function ST(t){return t[1].toUpperCase()}function Ax(t){if(Lu.hasOwnProperty(t))return Lu[t];var e=t.replace(xT,ST).replace(yT,"ms");return Lu[t]=e,e}var ET=/[A-Z]/g,MT=/^ms-/,Nu={};function TT(t){return"-"+t.toLowerCase()}function Rx(t){if(Nu.hasOwnProperty(t))return Nu[t];var e=t.replace(ET,TT);return Nu[t]=MT.test(e)?"-"+e:e}const bT=Object.freeze(Object.defineProperty({__proto__:null,default:Rx},Symbol.toStringTag,{value:"Module"}));function Gc(t){return Rx(t)}function Cx(t,e){return Gc(t)+":"+e}function wT(t){var e="";for(var n in t){var i=t[n];typeof i!="string"&&typeof i!="number"||(e&&(e+=";"),e+=Cx(n,i))}return e}var AT=/^(Webkit|Moz|O|ms)/;function RT(t){return AT.test(t)}var CT=/-webkit-|-moz-|-ms-/;function PT(t){return typeof t=="string"&&CT.test(t)}var uo={borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tg=["animationIterationCount","boxFlex","boxFlexGroup","boxOrdinalGroup","columnCount","flex","flexGrow","flexPositive","flexShrink","flexNegative","flexOrder","gridColumn","gridColumnEnd","gridColumnStart","gridRow","gridRowEnd","gridRowStart","lineClamp","order"],ng=["Webkit","ms","Moz","O"];function LT(t,e){return t+e.charAt(0).toUpperCase()+e.slice(1)}for(var Du=0,NT=tg.length;Du<NT;++Du){var ig=tg[Du];uo[ig]=!0;for(var Iu=0,DT=ng.length;Iu<DT;++Iu)uo[LT(ng[Iu],ig)]=!0}for(var IT in uo)uo[Gc(IT)]=!0;function UT(t){return uo.hasOwnProperty(t)}var OT=/^(ms|Webkit|Moz|O)/;function Px(t){var e=t.replace(OT,"");return e.charAt(0).toLowerCase()+e.slice(1)}function FT(t){return Px(Ax(t))}function kT(t,e){return e.join(";"+Gc(t)+":")}var BT=/(-ms-|-webkit-|-moz-|-o-)/g;function zT(t){return typeof t=="string"?t.replace(BT,""):t}const HT=Object.freeze(Object.defineProperty({__proto__:null,assignStyle:wx,camelCaseProperty:Ax,cssifyDeclaration:Cx,cssifyObject:wT,hyphenateProperty:Gc,isPrefixedProperty:RT,isPrefixedValue:PT,isUnitlessProperty:UT,normalizeProperty:FT,resolveArrayValue:kT,unprefixProperty:Px,unprefixValue:zT},Symbol.toStringTag,{value:"Module"})),GT=l0(HT);Object.defineProperty(bx,"__esModule",{value:!0});var VT=bx.default=$T,WT=GT,jT=/cross-fade\(/g,XT=["-webkit-",""];function $T(t,e){if(typeof e=="string"&&!(0,WT.isPrefixedValue)(e)&&e.indexOf("cross-fade(")!==-1)return XT.map(function(n){return e.replace(jT,n+"cross-fade(")})}var Lx={},Qh={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var e=/-webkit-|-moz-|-ms-/;function n(i){return typeof i=="string"&&e.test(i)}})(Qh);Object.defineProperty(Lx,"__esModule",{value:!0});var YT=Lx.default=JT,qT=Qh,KT=ZT(qT);function ZT(t){return t&&t.__esModule?t:{default:t}}var QT=["-webkit-",""];function JT(t,e){if(typeof e=="string"&&!(0,KT.default)(e)&&e.indexOf("image-set(")>-1)return QT.map(function(n){return e.replace(/image-set\(/g,n+"image-set(")})}var Nx={};Object.defineProperty(Nx,"__esModule",{value:!0});var eb=Nx.default=tb,rg={marginBlockStart:["WebkitMarginBefore"],marginBlockEnd:["WebkitMarginAfter"],marginInlineStart:["WebkitMarginStart","MozMarginStart"],marginInlineEnd:["WebkitMarginEnd","MozMarginEnd"],paddingBlockStart:["WebkitPaddingBefore"],paddingBlockEnd:["WebkitPaddingAfter"],paddingInlineStart:["WebkitPaddingStart","MozPaddingStart"],paddingInlineEnd:["WebkitPaddingEnd","MozPaddingEnd"],borderBlockStart:["WebkitBorderBefore"],borderBlockStartColor:["WebkitBorderBeforeColor"],borderBlockStartStyle:["WebkitBorderBeforeStyle"],borderBlockStartWidth:["WebkitBorderBeforeWidth"],borderBlockEnd:["WebkitBorderAfter"],borderBlockEndColor:["WebkitBorderAfterColor"],borderBlockEndStyle:["WebkitBorderAfterStyle"],borderBlockEndWidth:["WebkitBorderAfterWidth"],borderInlineStart:["WebkitBorderStart","MozBorderStart"],borderInlineStartColor:["WebkitBorderStartColor","MozBorderStartColor"],borderInlineStartStyle:["WebkitBorderStartStyle","MozBorderStartStyle"],borderInlineStartWidth:["WebkitBorderStartWidth","MozBorderStartWidth"],borderInlineEnd:["WebkitBorderEnd","MozBorderEnd"],borderInlineEndColor:["WebkitBorderEndColor","MozBorderEndColor"],borderInlineEndStyle:["WebkitBorderEndStyle","MozBorderEndStyle"],borderInlineEndWidth:["WebkitBorderEndWidth","MozBorderEndWidth"]};function tb(t,e,n){if(Object.prototype.hasOwnProperty.call(rg,t))for(var i=rg[t],r=0,a=i.length;r<a;++r)n[i[r]]=e}var Dx={};Object.defineProperty(Dx,"__esModule",{value:!0});var nb=Dx.default=ib;function ib(t,e){if(t==="position"&&e==="sticky")return["-webkit-sticky","sticky"]}var Ix={};Object.defineProperty(Ix,"__esModule",{value:!0});var rb=Ix.default=lb,ab=["-webkit-","-moz-",""],sb={maxHeight:!0,maxWidth:!0,width:!0,height:!0,columnWidth:!0,minWidth:!0,minHeight:!0},ob={"min-content":!0,"max-content":!0,"fill-available":!0,"fit-content":!0,"contain-floats":!0};function lb(t,e){if(sb.hasOwnProperty(t)&&ob.hasOwnProperty(e))return ab.map(function(n){return n+e})}var Ux={},Ox={};const cb=l0(bT);(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var e=cb,n=i(e);function i(a){return a&&a.__esModule?a:{default:a}}function r(a){return(0,n.default)(a)}})(Ox);Object.defineProperty(Ux,"__esModule",{value:!0});var ub=Ux.default=xb,fb=Ox,db=Jh(fb),hb=Qh,pb=Jh(hb),mb=zc,ag=Jh(mb);function Jh(t){return t&&t.__esModule?t:{default:t}}var gb={transition:!0,transitionProperty:!0,WebkitTransition:!0,WebkitTransitionProperty:!0,MozTransition:!0,MozTransitionProperty:!0},vb={Webkit:"-webkit-",Moz:"-moz-",ms:"-ms-"};function _b(t,e){if((0,pb.default)(t))return t;for(var n=t.split(/,(?![^()]*(?:\([^()]*\))?\))/g),i=0,r=n.length;i<r;++i){var a=n[i],s=[a];for(var o in e){var l=(0,db.default)(o);if(a.indexOf(l)>-1&&l!=="order")for(var c=e[o],f=0,d=c.length;f<d;++f)s.unshift(a.replace(l,vb[c[f]]+l))}n[i]=s.join(",")}return n.join(",")}function xb(t,e,n,i){if(typeof e=="string"&&gb.hasOwnProperty(t)){var r=_b(e,i),a=r.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(o){return!/-moz-|-ms-/.test(o)}).join(",");if(t.indexOf("Webkit")>-1)return a;var s=r.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function(o){return!/-webkit-|-ms-/.test(o)}).join(",");return t.indexOf("Moz")>-1?s:(n["Webkit"+(0,ag.default)(t)]=a,n["Moz"+(0,ag.default)(t)]=s,r)}}var tt=["Webkit"],yb=["Moz"],Sb=["Webkit","Moz"],vt=["Webkit","ms"],Eb=["Webkit","Moz","ms"];const Mb={plugins:[VT,YT,eb,nb,rb,ub],prefixMap:{appearance:Eb,userSelect:Sb,textEmphasisPosition:vt,textEmphasis:vt,textEmphasisStyle:vt,textEmphasisColor:vt,boxDecorationBreak:vt,clipPath:tt,maskImage:vt,maskMode:vt,maskRepeat:vt,maskPosition:vt,maskClip:vt,maskOrigin:vt,maskSize:vt,maskComposite:vt,mask:vt,maskBorderSource:vt,maskBorderMode:vt,maskBorderSlice:vt,maskBorderWidth:vt,maskBorderOutset:vt,maskBorderRepeat:vt,maskBorder:vt,maskType:vt,textDecorationStyle:tt,textDecorationSkip:tt,textDecorationLine:tt,textDecorationColor:tt,filter:tt,breakAfter:tt,breakBefore:tt,breakInside:tt,columnCount:tt,columnFill:tt,columnGap:tt,columnRule:tt,columnRuleColor:tt,columnRuleStyle:tt,columnRuleWidth:tt,columns:tt,columnSpan:tt,columnWidth:tt,backdropFilter:tt,hyphens:tt,flowInto:tt,flowFrom:tt,regionFragment:tt,textOrientation:tt,tabSize:yb,fontKerning:tt,textSizeAdjust:tt}};var Tb=aT(Mb),bb=["animationKeyframes"],sg=new Map,wb={},Ab=1,Rb=3,Cb={borderColor:2,borderRadius:2,borderStyle:2,borderWidth:2,display:2,flex:2,inset:2,margin:2,overflow:2,overscrollBehavior:2,padding:2,insetBlock:2.1,insetInline:2.1,marginInline:2.1,marginBlock:2.1,paddingInline:2.1,paddingBlock:2.1,borderBlockStartColor:2.2,borderBlockStartStyle:2.2,borderBlockStartWidth:2.2,borderBlockEndColor:2.2,borderBlockEndStyle:2.2,borderBlockEndWidth:2.2,borderInlineStartColor:2.2,borderInlineStartStyle:2.2,borderInlineStartWidth:2.2,borderInlineEndColor:2.2,borderInlineEndStyle:2.2,borderInlineEndWidth:2.2,borderEndStartRadius:2.2,borderEndEndRadius:2.2,borderStartStartRadius:2.2,borderStartEndRadius:2.2,insetBlockEnd:2.2,insetBlockStart:2.2,insetInlineEnd:2.2,insetInlineStart:2.2,marginBlockStart:2.2,marginBlockEnd:2.2,marginInlineStart:2.2,marginInlineEnd:2.2,paddingBlockStart:2.2,paddingBlockEnd:2.2,paddingInlineStart:2.2,paddingInlineEnd:2.2},gd="borderTopLeftRadius",vd="borderTopRightRadius",_d="borderBottomLeftRadius",xd="borderBottomRightRadius",yd="borderLeftColor",Sd="borderLeftStyle",Ed="borderLeftWidth",Md="borderRightColor",Td="borderRightStyle",bd="borderRightWidth",wd="right",Ad="marginLeft",Rd="marginRight",Cd="paddingLeft",Pd="paddingRight",Ld="left",pc={[gd]:vd,[vd]:gd,[_d]:xd,[xd]:_d,[yd]:Md,[Sd]:Td,[Ed]:bd,[Md]:yd,[Td]:Sd,[bd]:Ed,[Ld]:wd,[Ad]:Rd,[Rd]:Ad,[Cd]:Pd,[Pd]:Cd,[wd]:Ld},Vs={borderStartStartRadius:gd,borderStartEndRadius:vd,borderEndStartRadius:_d,borderEndEndRadius:xd,borderInlineStartColor:yd,borderInlineStartStyle:Sd,borderInlineStartWidth:Ed,borderInlineEndColor:Md,borderInlineEndStyle:Td,borderInlineEndWidth:bd,insetInlineEnd:wd,insetInlineStart:Ld,marginInlineStart:Ad,marginInlineEnd:Rd,paddingInlineStart:Cd,paddingInlineEnd:Pd},Fx=["clear","float","textAlign"];function Pb(t){var e={$$css:!0},n=[];function i(r,a,s){var o=Db(s,a),l=a+o,c=sg.get(l),f;if(c!=null)f=c[0],n.push(c[1]);else{var d=r!==a?l:o;f=ep("r",r,d);var h=Cb[r]||Rb,m=Ib(f,a,s),_=[m,h];n.push(_),sg.set(l,[f,_])}return f}return Object.keys(t).sort().forEach(r=>{var a=t[r];if(a!=null){var s;if(Fx.indexOf(r)>-1){var o=i(r,r,"left"),l=i(r,r,"right");a==="start"?s=[o,l]:a==="end"&&(s=[l,o])}var c=Vs[r];if(c!=null){var f=i(r,c,a),d=i(r,pc[c],a);s=[f,d]}if(r==="transitionProperty"){for(var h=Array.isArray(a)?a:[a],m=[],_=0;_<h.length;_++){var x=h[_];typeof x=="string"&&Vs[x]!=null&&m.push(_)}if(m.length>0){var p=[...h],u=[...h];m.forEach(g=>{var v=p[g];if(typeof v=="string"){var S=Vs[v],R=pc[S];p[g]=S,u[g]=R;var T=i(r,r,p),w=i(r,r,u);s=[T,w]}})}}s==null?s=i(r,r,a):e.$$css$localize=!0,e[r]=s}}),[e,n]}function Lb(t,e){var n={$$css:!0},i=[],r=t.animationKeyframes,a=So(t,bb),s=ep("css",e,JSON.stringify(t)),o="."+s,l;if(r!=null){var c=kx(r),f=c[0],d=c[1];l=f.join(","),i.push(...d)}var h=si(es(es({},a),{},{animationName:l}));return i.push(""+o+h),n[s]=s,[n,[[i,Ab]]]}function Nb(t,e){var n=t||wb,i={},r={},a=function(){var l=n[s],c=s,f=l;if(!Object.prototype.hasOwnProperty.call(n,s)||l==null)return 1;Fx.indexOf(s)>-1&&(l==="start"?f=e?"right":"left":l==="end"&&(f=e?"left":"right"));var d=Vs[s];if(d!=null&&(c=e?pc[d]:d),s==="transitionProperty"){var h=Array.isArray(l)?l:[l];h.forEach((m,_)=>{if(typeof m=="string"){var x=Vs[m];x!=null&&(h[_]=e?pc[x]:x,f=h.join(" "))}})}i[c]||(r[c]=f),c===s&&(i[c]=!0)};for(var s in n)a();return Mx(r,!0)}function Db(t,e){var n=nn(t,e);return typeof n!="string"?JSON.stringify(n||""):n}function Ib(t,e,n){var i=[],r="."+t;switch(e){case"animationKeyframes":{var a=kx(n),s=a[0],o=a[1],l=si({animationName:s.join(",")});i.push(""+r+l,...o);break}case"placeholderTextColor":{var c=si({color:n,opacity:1});i.push(r+"::-webkit-input-placeholder"+c,r+"::-moz-placeholder"+c,r+":-ms-input-placeholder"+c,r+"::placeholder"+c);break}case"pointerEvents":{var f=n;if(n==="auto")f="auto!important";else if(n==="none"){f="none!important";var d=si({pointerEvents:"none"});i.push(r+">* "+d)}else if(n==="box-none"){f="none!important";var h=si({pointerEvents:"auto"});i.push(r+">* "+h)}else if(n==="box-only"){f="auto!important";var m=si({pointerEvents:"none"});i.push(r+">* "+m)}var _=si({pointerEvents:f});i.push(""+r+_);break}case"scrollbarWidth":{n==="none"&&i.push(r+"::-webkit-scrollbar{display:none}");var x=si({scrollbarWidth:n});i.push(""+r+x);break}default:{var p=si({[e]:n});i.push(""+r+p);break}}return i}function si(t){var e=Tb(Mx(t)),n=Object.keys(e).map(i=>{var r=e[i],a=KM(i);return Array.isArray(r)?r.map(s=>a+":"+s).join(";"):a+":"+r}).sort().join(";");return"{"+n+";}"}function ep(t,e,n){var i=XM(e+n);return t+"-"+i}function Ub(t){var e=["-webkit-",""],n=ep("r","animation",JSON.stringify(t)),i="{"+Object.keys(t).map(a=>{var s=t[a],o=si(s);return""+a+o}).join("")+"}",r=e.map(a=>"@"+a+"keyframes "+n+i);return[n,r]}function kx(t){if(typeof t=="number")throw new Error("Invalid CSS keyframes type: "+typeof t);var e=[],n=[],i=Array.isArray(t)?t:[t];return i.forEach(r=>{if(typeof r=="string")e.push(r);else{var a=Ub(r),s=a[0],o=a[1];e.push(s),n.push(...o)}}),[e,n]}function Uu(t,e,n){if(Di){var i=e??document,r=i.getElementById(t);if(r==null)if(r=document.createElement("style"),r.setAttribute("id",t),typeof n=="string"&&r.appendChild(document.createTextNode(n)),i instanceof ShadowRoot)i.insertBefore(r,i.firstChild);else{var a=i.head;a&&a.insertBefore(r,a.firstChild)}return r.sheet}else return null}var Ob=Array.prototype.slice;function Ou(t){var e={},n={};if(t!=null){var i;Ob.call(t.cssRules).forEach((s,o)=>{var l=s.cssText;if(l.indexOf("stylesheet-group")>-1)i=Bb(s),e[i]={start:o,rules:[l]};else{var c=lg(l);c!=null&&(n[c]=!0,e[i].rules.push(l))}})}function r(s,o,l){var c=og(e),f=c.indexOf(o),d=f+1,h=c[d],m=h!=null&&e[h].start!=null?e[h].start:s.cssRules.length,_=Hb(s,l,m);if(_){e[o].start==null&&(e[o].start=m);for(var x=d;x<c.length;x+=1){var p=c[x],u=e[p].start||0;e[p].start=u+1}}return _}var a={getTextContent(){return og(e).map(s=>{var o=e[s].rules,l=o.shift();return o.sort(),o.unshift(l),o.join(`
`)}).join(`
`)},insert(s,o){var l=Number(o);if(e[l]==null){var c=Fb(l);e[l]={start:null,rules:[c]},t!=null&&r(t,l,c)}var f=lg(s);if(f!=null&&n[f]==null&&(n[f]=!0,e[l].rules.push(s),t!=null)){var d=r(t,l,s);d||e[l].rules.pop()}}};return a}function Fb(t){return'[stylesheet-group="'+t+'"]{}'}var kb=/["']/g;function Bb(t){return Number(t.selectorText.split(kb)[1])}function og(t){return Object.keys(t).map(Number).sort((e,n)=>e>n?1:-1)}var zb=/\s*([,])\s*/g;function lg(t){var e=t.split("{")[0].trim();return e!==""?e.replace(zb,"$1"):null}function Hb(t,e,n){try{return t.insertRule(e,n),!0}catch{return!1}}var Gb="react-native-stylesheet",Fu=new WeakMap,Gn=[],cg=["html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0);}","body{margin:0;}","button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}","input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none;}"];function Vb(t,e){e===void 0&&(e=Gb);var n;if(Di){var i=document;if(Gn.length===0)n=Ou(Uu(e)),cg.forEach(o=>{n.insert(o,0)}),Fu.set(i,Gn.length),Gn.push(n);else{var r=Fu.get(i);if(r==null){var a=Gn[0],s=a!=null?a.getTextContent():"";n=Ou(Uu(e,i,s)),Fu.set(i,Gn.length),Gn.push(n)}else n=Gn[r]}}else Gn.length===0?(n=Ou(Uu(e)),cg.forEach(o=>{n.insert(o,0)}),Gn.push(n)):n=Gn[0];return{getTextContent(){return n.getTextContent()},id:e,insert(o,l){Gn.forEach(c=>{c.insert(o,l)})}}}var tp={};Object.defineProperty(tp,"__esModule",{value:!0});tp.localizeStyle=Wb;var qo=new WeakMap,Bx="$$css$localize";function ug(t,e){var n={};for(var i in t)if(i!==Bx){var r=t[i];Array.isArray(r)?n[i]=e?r[1]:r[0]:n[i]=r}return n}function Wb(t,e){if(t[Bx]!=null){var n=e?1:0;if(qo.has(t)){var i=qo.get(t),r=i[n];return r==null&&(r=ug(t,e),i[n]=r,qo.set(t,i)),r}var a=ug(t,e),s=new Array(2);return s[n]=a,qo.set(t,s),a}return t}var jb=tp,Xb={},zx={height:0,width:0},$b=t=>{var e=t.shadowColor,n=t.shadowOffset,i=t.shadowOpacity,r=t.shadowRadius,a=n||zx,s=a.height,o=a.width,l=nn(o),c=nn(s),f=nn(r||0),d=$h(e||"black",i);if(d!=null&&l!=null&&c!=null&&f!=null)return l+" "+c+" "+f+" "+d},Yb=t=>{var e=t.textShadowColor,n=t.textShadowOffset,i=t.textShadowRadius,r=n||zx,a=r.height,s=r.width,o=i||0,l=nn(s),c=nn(a),f=nn(o),d=nn(e,"textShadowColor");if(d&&(a!==0||s!==0||o!==0)&&l!=null&&c!=null&&f!=null)return l+" "+c+" "+f+" "+d},qb=t=>{if(typeof t=="string")return t;var e=nn(t.offsetX)||0,n=nn(t.offsetY)||0,i=nn(t.blurRadius)||0,r=nn(t.spreadDistance)||0,a=$h(t.color)||"black",s=t.inset?"inset ":"";return""+s+e+" "+n+" "+i+" "+r+" "+a},Kb=t=>t.map(qb).join(", "),Zb=t=>{var e=Object.keys(t)[0],n=t[e];if(e==="matrix"||e==="matrix3d")return e+"("+n.join(",")+")";var i=nn(n,e);return e+"("+i+")"},Qb=t=>t.map(Zb).join(" "),Jb=t=>t.map(e=>nn(e)).join(" "),ew={borderBottomEndRadius:"borderEndEndRadius",borderBottomStartRadius:"borderEndStartRadius",borderTopEndRadius:"borderStartEndRadius",borderTopStartRadius:"borderStartStartRadius",borderEndColor:"borderInlineEndColor",borderEndStyle:"borderInlineEndStyle",borderEndWidth:"borderInlineEndWidth",borderStartColor:"borderInlineStartColor",borderStartStyle:"borderInlineStartStyle",borderStartWidth:"borderInlineStartWidth",end:"insetInlineEnd",marginEnd:"marginInlineEnd",marginHorizontal:"marginInline",marginStart:"marginInlineStart",marginVertical:"marginBlock",paddingEnd:"paddingInlineEnd",paddingHorizontal:"paddingInline",paddingStart:"paddingInlineStart",paddingVertical:"paddingBlock",start:"insetInlineStart"},tw={elevation:!0,overlayColor:!0,resizeMode:!0,tintColor:!0},Hx=function(e,n){n===void 0&&(n={});var i=e||Xb,r={};if(n.shadow,i.shadowColor!=null||i.shadowOffset!=null||i.shadowOpacity!=null||i.shadowRadius!=null){var a=$b(i);a!=null&&(r.boxShadow=a)}if(n.textShadow,i.textShadowColor!=null||i.textShadowOffset!=null||i.textShadowRadius!=null){var s=Yb(i);if(s!=null&&r.textShadow==null){var o=i.textShadow,l=o?o+", "+s:s;r.textShadow=l}}for(var c in i)if(!(tw[c]!=null||c==="shadowColor"||c==="shadowOffset"||c==="shadowOpacity"||c==="shadowRadius"||c==="textShadowColor"||c==="textShadowOffset"||c==="textShadowRadius")){var f=i[c],d=ew[c]||c,h=f;if(!(!Object.prototype.hasOwnProperty.call(i,c)||d!==c&&i[d]!=null))if(d==="aspectRatio"&&typeof h=="number")r[d]=h.toString();else if(d==="boxShadow"){Array.isArray(h)&&(h=Kb(h));var m=r.boxShadow;r.boxShadow=m?h+", "+m:h}else d==="fontVariant"?(Array.isArray(h)&&h.length>0&&(h=h.join(" ")),r[d]=h):d==="textAlignVertical"?i.verticalAlign==null&&(r.verticalAlign=h==="center"?"middle":h):d==="transform"?(Array.isArray(h)&&(h=Qb(h)),r.transform=h):d==="transformOrigin"?(Array.isArray(h)&&(h=Jb(h)),r.transformOrigin=h):r[d]=h}return r},np={};Object.defineProperty(np,"__esModule",{value:!0});var Gx=np.styleq=void 0,nw=new WeakMap,iw="$$css";function Vx(t){var e,n,i;return t!=null&&(e=t.disableCache===!0,n=t.disableMix===!0,i=t.transform),function(){for(var a=[],s="",o=null,l=e?null:nw,c=new Array(arguments.length),f=0;f<arguments.length;f++)c[f]=arguments[f];for(;c.length>0;){var d=c.pop();if(!(d==null||d===!1)){if(Array.isArray(d)){for(var h=0;h<d.length;h++)c.push(d[h]);continue}var m=i!=null?i(d):d;if(m.$$css){var _="";if(l!=null&&l.has(m)){var x=l.get(m);x!=null&&(_=x[0],a.push.apply(a,x[1]),l=x[2])}else{var p=[];for(var u in m){var g=m[u];u!==iw&&(typeof g=="string"||g===null?a.includes(u)||(a.push(u),l!=null&&p.push(u),typeof g=="string"&&(_+=_?" "+g:g)):console.error("styleq: ".concat(u," typeof ").concat(String(g),' is not "string" or "null".')))}if(l!=null){var v=new WeakMap;l.set(m,[_,p,v]),l=v}}_&&(s=s?_+" "+s:_)}else if(n)o==null&&(o={}),o=Object.assign({},m,o);else{var S=null;for(var R in m){var T=m[R];T!==void 0&&(a.includes(R)||(T!=null&&(o==null&&(o={}),S==null&&(S={}),S[R]=T),a.push(R),l=null))}S!=null&&(o=Object.assign(S,o))}}}var w=[s,o];return w}}var Wx=Vx();Gx=np.styleq=Wx;Wx.factory=Vx;var rw=["writingDirection"],jx=new WeakMap,mc=Vb(),Xx={shadow:!0,textShadow:!0};function aw(t,e){e===void 0&&(e={});var n=e,i=n.writingDirection,r=So(n,rw),a=i==="rtl";return Gx.factory({transform(s){var o=jx.get(s);return o!=null?jb.localizeStyle(o,a):Hx(s,es(es({},Xx),r))}})(t)}function $x(t){t.forEach(e=>{var n=e[0],i=e[1];mc!=null&&n.forEach(r=>{mc.insert(r,i)})})}function sw(t){var e=Pb(Hx(t,Xx)),n=e[0],i=e[1];return $x(i),n}function ow(t,e){var n=Lb(t,e),i=n[0],r=n[1];return $x(r),i}var Yx={position:"absolute",left:0,right:0,top:0,bottom:0},lw=qx({x:es({},Yx)}).x;function qx(t){return Object.keys(t).forEach(e=>{var n=t[e];if(n!=null&&n.$$css!==!0){var i;e.indexOf("$raw")>-1?i=ow(n,e.split("$raw")[0]):i=sw(n),jx.set(n,i)}}),t}function cw(t,e){return[t,e]}function uw(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];for(var i=e.flat(1/0),r={},a=0;a<i.length;a++){var s=i[a];s!=null&&typeof s=="object"&&Object.assign(r,s)}return r}function fw(){return{id:mc.id,textContent:mc.getTextContent()}}function Ii(t,e){e===void 0&&(e={});var n=e.writingDirection==="rtl",i=aw(t,e);return Array.isArray(i)&&i[1]!=null&&(i[1]=Nb(i[1],n)),i}Ii.absoluteFill=lw;Ii.absoluteFillObject=Yx;Ii.create=qx;Ii.compose=cw;Ii.flatten=uw;Ii.getSheet=fw;Ii.hairlineWidth=1;Di&&window.__REACT_DEVTOOLS_GLOBAL_HOOK__&&(window.__REACT_DEVTOOLS_GLOBAL_HOOK__.resolveRNStyle=Ii.flatten);var Vc=Ii,dw=["aria-activedescendant","accessibilityActiveDescendant","aria-atomic","accessibilityAtomic","aria-autocomplete","accessibilityAutoComplete","aria-busy","accessibilityBusy","aria-checked","accessibilityChecked","aria-colcount","accessibilityColumnCount","aria-colindex","accessibilityColumnIndex","aria-colspan","accessibilityColumnSpan","aria-controls","accessibilityControls","aria-current","accessibilityCurrent","aria-describedby","accessibilityDescribedBy","aria-details","accessibilityDetails","aria-disabled","accessibilityDisabled","aria-errormessage","accessibilityErrorMessage","aria-expanded","accessibilityExpanded","aria-flowto","accessibilityFlowTo","aria-haspopup","accessibilityHasPopup","aria-hidden","accessibilityHidden","aria-invalid","accessibilityInvalid","aria-keyshortcuts","accessibilityKeyShortcuts","aria-label","accessibilityLabel","aria-labelledby","accessibilityLabelledBy","aria-level","accessibilityLevel","aria-live","accessibilityLiveRegion","aria-modal","accessibilityModal","aria-multiline","accessibilityMultiline","aria-multiselectable","accessibilityMultiSelectable","aria-orientation","accessibilityOrientation","aria-owns","accessibilityOwns","aria-placeholder","accessibilityPlaceholder","aria-posinset","accessibilityPosInSet","aria-pressed","accessibilityPressed","aria-readonly","accessibilityReadOnly","aria-required","accessibilityRequired","role","accessibilityRole","aria-roledescription","accessibilityRoleDescription","aria-rowcount","accessibilityRowCount","aria-rowindex","accessibilityRowIndex","aria-rowspan","accessibilityRowSpan","aria-selected","accessibilitySelected","aria-setsize","accessibilitySetSize","aria-sort","accessibilitySort","aria-valuemax","accessibilityValueMax","aria-valuemin","accessibilityValueMin","aria-valuenow","accessibilityValueNow","aria-valuetext","accessibilityValueText","dataSet","focusable","id","nativeID","pointerEvents","style","tabIndex","testID"],hw={},pw=Object.prototype.hasOwnProperty,mw=Array.isArray,gw=/[A-Z]/g;function vw(t){return"-"+t.toLowerCase()}function _w(t){return t.replace(gw,vw)}function ta(t){return mw(t)?t.join(" "):t}var xw=Vc.create({auto:{pointerEvents:"auto"},"box-none":{pointerEvents:"box-none"},"box-only":{pointerEvents:"box-only"},none:{pointerEvents:"none"}}),yw=(t,e,n)=>{e||(e=hw);var i=e,r=i["aria-activedescendant"],a=i.accessibilityActiveDescendant,s=i["aria-atomic"],o=i.accessibilityAtomic,l=i["aria-autocomplete"],c=i.accessibilityAutoComplete,f=i["aria-busy"],d=i.accessibilityBusy,h=i["aria-checked"],m=i.accessibilityChecked,_=i["aria-colcount"],x=i.accessibilityColumnCount,p=i["aria-colindex"],u=i.accessibilityColumnIndex,g=i["aria-colspan"],v=i.accessibilityColumnSpan,S=i["aria-controls"],R=i.accessibilityControls,T=i["aria-current"],w=i.accessibilityCurrent,N=i["aria-describedby"],E=i.accessibilityDescribedBy,b=i["aria-details"],k=i.accessibilityDetails,$=i["aria-disabled"],Z=i.accessibilityDisabled,D=i["aria-errormessage"],V=i.accessibilityErrorMessage,X=i["aria-expanded"],q=i.accessibilityExpanded,I=i["aria-flowto"],B=i.accessibilityFlowTo,H=i["aria-haspopup"],K=i.accessibilityHasPopup,Q=i["aria-hidden"],F=i.accessibilityHidden,Y=i["aria-invalid"],re=i.accessibilityInvalid,ae=i["aria-keyshortcuts"],de=i.accessibilityKeyShortcuts,Ee=i["aria-label"],Ce=i.accessibilityLabel,ye=i["aria-labelledby"],Ve=i.accessibilityLabelledBy,z=i["aria-level"],It=i.accessibilityLevel,Me=i["aria-live"],Ne=i.accessibilityLiveRegion,ve=i["aria-modal"],at=i.accessibilityModal,Ue=i["aria-multiline"],C=i.accessibilityMultiline,M=i["aria-multiselectable"],W=i.accessibilityMultiSelectable,te=i["aria-orientation"],ee=i.accessibilityOrientation,ie=i["aria-owns"],xe=i.accessibilityOwns,fe=i["aria-placeholder"],ge=i.accessibilityPlaceholder,we=i["aria-posinset"],ke=i.accessibilityPosInSet,J=i["aria-pressed"],qe=i.accessibilityPressed,ze=i["aria-readonly"],Pe=i.accessibilityReadOnly,Se=i["aria-required"],me=i.accessibilityRequired;i.role,i.accessibilityRole;var Ie=i["aria-roledescription"],Ye=i.accessibilityRoleDescription,st=i["aria-rowcount"],He=i.accessibilityRowCount,se=i["aria-rowindex"],P=i.accessibilityRowIndex,ce=i["aria-rowspan"],ue=i.accessibilityRowSpan,Ae=i["aria-selected"],Te=i.accessibilitySelected,Ke=i["aria-setsize"],Je=i.accessibilitySetSize,yt=i["aria-sort"],Ut=i.accessibilitySort,Ze=i["aria-valuemax"],Ot=i.accessibilityValueMax,vn=i["aria-valuemin"],bo=i.accessibilityValueMin,wo=i["aria-valuenow"],qr=i.accessibilityValueNow,fs=i["aria-valuetext"],Kr=i.accessibilityValueText,_r=i.dataSet,xr=i.focusable,Ao=i.id,Jc=i.nativeID,Ro=i.pointerEvents,A=i.style,O=i.tabIndex,j=i.testID,L=So(i,dw),G=$||Z,le=Ex.propsToAriaRole(e),_e=r??a;_e!=null&&(L["aria-activedescendant"]=_e);var be=s!=null?r:o;be!=null&&(L["aria-atomic"]=be);var Re=l??c;Re!=null&&(L["aria-autocomplete"]=Re);var Oe=f??d;Oe!=null&&(L["aria-busy"]=Oe);var Le=h??m;Le!=null&&(L["aria-checked"]=Le);var De=_??x;De!=null&&(L["aria-colcount"]=De);var ft=p??u;ft!=null&&(L["aria-colindex"]=ft);var Ht=g??v;Ht!=null&&(L["aria-colspan"]=Ht);var St=S??R;St!=null&&(L["aria-controls"]=ta(St));var Pn=T??w;Pn!=null&&(L["aria-current"]=Pn);var it=N??E;it!=null&&(L["aria-describedby"]=ta(it));var Be=b??k;Be!=null&&(L["aria-details"]=Be),G===!0&&(L["aria-disabled"]=!0,(t==="button"||t==="form"||t==="input"||t==="select"||t==="textarea")&&(L.disabled=!0));var Zr=D??V;Zr!=null&&(L["aria-errormessage"]=Zr);var ot=X??q;ot!=null&&(L["aria-expanded"]=ot);var ti=I??B;ti!=null&&(L["aria-flowto"]=ta(ti));var ds=H??K;ds!=null&&(L["aria-haspopup"]=ds);var Oi=Q??F;Oi===!0&&(L["aria-hidden"]=Oi);var Qr=Y??re;Qr!=null&&(L["aria-invalid"]=Qr);var bt=ae??de;bt!=null&&(L["aria-keyshortcuts"]=ta(bt));var ni=Ee??Ce;ni!=null&&(L["aria-label"]=ni);var Jr=ye??Ve;Jr!=null&&(L["aria-labelledby"]=ta(Jr));var Kt=z??It;Kt!=null&&(L["aria-level"]=Kt);var yr=Me??Ne;yr!=null&&(L["aria-live"]=yr==="none"?"off":yr);var Co=ve??at;Co!=null&&(L["aria-modal"]=Co);var hs=Ue??C;hs!=null&&(L["aria-multiline"]=hs);var mp=M??W;mp!=null&&(L["aria-multiselectable"]=mp);var gp=te??ee;gp!=null&&(L["aria-orientation"]=gp);var vp=ie??xe;vp!=null&&(L["aria-owns"]=ta(vp));var _p=fe??ge;_p!=null&&(L["aria-placeholder"]=_p);var xp=we??ke;xp!=null&&(L["aria-posinset"]=xp);var yp=J??qe;yp!=null&&(L["aria-pressed"]=yp);var Sp=ze??Pe;Sp!=null&&(L["aria-readonly"]=Sp,(t==="input"||t==="select"||t==="textarea")&&(L.readOnly=!0));var Ep=Se??me;Ep!=null&&(L["aria-required"]=Ep,(t==="input"||t==="select"||t==="textarea")&&(L.required=me)),le!=null&&(L.role=le==="none"?"presentation":le);var Mp=Ie??Ye;Mp!=null&&(L["aria-roledescription"]=Mp);var Tp=st??He;Tp!=null&&(L["aria-rowcount"]=Tp);var bp=se??P;bp!=null&&(L["aria-rowindex"]=bp);var wp=ce??ue;wp!=null&&(L["aria-rowspan"]=wp);var Ap=Ae??Te;Ap!=null&&(L["aria-selected"]=Ap);var Rp=Ke??Je;Rp!=null&&(L["aria-setsize"]=Rp);var Cp=yt??Ut;Cp!=null&&(L["aria-sort"]=Cp);var Pp=Ze??Ot;Pp!=null&&(L["aria-valuemax"]=Pp);var Lp=vn??bo;Lp!=null&&(L["aria-valuemin"]=Lp);var Np=wo??qr;Np!=null&&(L["aria-valuenow"]=Np);var Dp=fs??Kr;if(Dp!=null&&(L["aria-valuetext"]=Dp),_r!=null){for(var eu in _r)if(pw.call(_r,eu)){var qy=_w(eu),Ip=_r[eu];Ip!=null&&(L["data-"+qy]=Ip)}}O===0||O==="0"||O===-1||O==="-1"?L.tabIndex=O:(xr===!1&&(L.tabIndex="-1"),t==="a"||t==="button"||t==="input"||t==="select"||t==="textarea"?(xr===!1||Z===!0)&&(L.tabIndex="-1"):le==="button"||le==="checkbox"||le==="link"||le==="radio"||le==="textbox"||le==="switch"?xr!==!1&&(L.tabIndex="0"):xr===!0&&(L.tabIndex="0"));var Up=Vc([A,Ro&&xw[Ro]],es({writingDirection:"ltr"},n)),Op=Up[0],Fp=Up[1];Op&&(L.className=Op),Fp&&(L.style=Fp);var kp=Ao??Jc;return kp!=null&&(L.id=kp),j!=null&&(L["data-testid"]=j),L.type==null&&t==="button"&&(L.type="button"),L},Sw=new Set(["Arab","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),fg=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","far","glk","he","iw","khw","ks","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]),dg=new Map;function Ew(t){var e=dg.get(t);if(e)return e;var n=!1;if(Intl.Locale)try{var i=new Intl.Locale(t).maximize().script;n=Sw.has(i)}catch{var r=t.split("-")[0];n=fg.has(r)}else{var a=t.split("-")[0];n=fg.has(a)}return dg.set(t,n),n}var Mw={direction:"ltr",locale:"en-US"},Kx=he.createContext(Mw);function Zx(t){return Ew(t)?"rtl":"ltr"}function Tw(t){var e=t.direction,n=t.locale,i=t.children,r=e||n;return r?Vl.createElement(Kx.Provider,{children:i,value:{direction:n?Zx(n):e,locale:n}}):i}function bw(){return he.useContext(Kx)}var ww=(t,e,n)=>{var i;t&&t.constructor===String&&(i=Ex.propsToAccessibilityComponent(e));var r=i||t,a=yw(r,e,n),s=Vl.createElement(r,a),o=a.dir?Vl.createElement(Tw,{children:s,direction:a.dir,locale:a.lang}):s;return o},Nd=t=>{if(t!=null){var e=t.nodeType===1;if(e&&typeof t.getBoundingClientRect=="function")return t.getBoundingClientRect()}},Ws={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexOrder:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,fontWeight:!0,gridRow:!0,gridRowEnd:!0,gridRowGap:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnGap:!0,gridColumnStart:!0,lineClamp:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0,scale:!0,scaleX:!0,scaleY:!0,scaleZ:!0,shadowOpacity:!0},Aw=["ms","Moz","O","Webkit"],Rw=(t,e)=>t+e.charAt(0).toUpperCase()+e.substring(1);Object.keys(Ws).forEach(t=>{Aw.forEach(e=>{Ws[Rw(e,t)]=Ws[t]})});function Cw(t,e,n){var i=e==null||typeof e=="boolean"||e==="";return i?"":!n&&typeof e=="number"&&e!==0&&!(Ws.hasOwnProperty(t)&&Ws[t])?e+"px":(""+e).trim()}function Pw(t,e){var n=t.style;for(var i in e)if(e.hasOwnProperty(i)){var r=i.indexOf("--")===0,a=Cw(i,e[i],r);i==="float"&&(i="cssFloat"),r?n.setProperty(i,a):n[i]=a}}var hg=t=>{var e=t.offsetHeight,n=t.offsetWidth,i=t.offsetLeft,r=t.offsetTop;for(t=t.offsetParent;t&&t.nodeType===1;)i+=t.offsetLeft+t.clientLeft-t.scrollLeft,r+=t.offsetTop+t.clientTop-t.scrollTop,t=t.offsetParent;return r-=window.scrollY,i-=window.scrollX,{width:n,height:e,top:r,left:i}},pg=(t,e,n)=>{var i=e||t&&t.parentNode;t&&i&&setTimeout(()=>{if(t.isConnected&&i.isConnected){var r=hg(i),a=hg(t),s=a.height,o=a.left,l=a.top,c=a.width,f=o-r.left,d=l-r.top;n(f,d,c,s,o,l)}},0)},Lw={A:!0,BODY:!0,INPUT:!0,SELECT:!0,TEXTAREA:!0},kl={blur(t){try{t.blur()}catch{}},focus(t){try{var e=t.nodeName;t.getAttribute("tabIndex")==null&&t.isContentEditable!==!0&&Lw[e]==null&&t.setAttribute("tabIndex","-1"),t.focus()}catch{}},measure(t,e){pg(t,null,e)},measureInWindow(t,e){t&&setTimeout(()=>{var n=Nd(t),i=n.height,r=n.left,a=n.top,s=n.width;e(r,a,s,i)},0)},measureLayout(t,e,n,i){pg(t,e,i)},updateView(t,e){for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var i=e[n];switch(n){case"style":{Pw(t,i);break}case"class":case"className":{t.setAttribute("class",i);break}case"text":case"value":t.value=i;break;default:t.setAttribute(n,i)}}},configureNextLayoutAnimation(t,e){e()},setLayoutAnimationEnabledExperimental(){}};function Dd(){return Dd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Dd.apply(null,arguments)}var Nw={children:!0,dataSet:!0,dir:!0,id:!0,ref:!0,suppressHydrationWarning:!0,tabIndex:!0,testID:!0,focusable:!0,nativeID:!0},Dw={"aria-activedescendant":!0,"aria-atomic":!0,"aria-autocomplete":!0,"aria-busy":!0,"aria-checked":!0,"aria-colcount":!0,"aria-colindex":!0,"aria-colspan":!0,"aria-controls":!0,"aria-current":!0,"aria-describedby":!0,"aria-details":!0,"aria-disabled":!0,"aria-errormessage":!0,"aria-expanded":!0,"aria-flowto":!0,"aria-haspopup":!0,"aria-hidden":!0,"aria-invalid":!0,"aria-keyshortcuts":!0,"aria-label":!0,"aria-labelledby":!0,"aria-level":!0,"aria-live":!0,"aria-modal":!0,"aria-multiline":!0,"aria-multiselectable":!0,"aria-orientation":!0,"aria-owns":!0,"aria-placeholder":!0,"aria-posinset":!0,"aria-pressed":!0,"aria-readonly":!0,"aria-required":!0,inert:!0,role:!0,"aria-roledescription":!0,"aria-rowcount":!0,"aria-rowindex":!0,"aria-rowspan":!0,"aria-selected":!0,"aria-setsize":!0,"aria-sort":!0,"aria-valuemax":!0,"aria-valuemin":!0,"aria-valuenow":!0,"aria-valuetext":!0,accessibilityActiveDescendant:!0,accessibilityAtomic:!0,accessibilityAutoComplete:!0,accessibilityBusy:!0,accessibilityChecked:!0,accessibilityColumnCount:!0,accessibilityColumnIndex:!0,accessibilityColumnSpan:!0,accessibilityControls:!0,accessibilityCurrent:!0,accessibilityDescribedBy:!0,accessibilityDetails:!0,accessibilityDisabled:!0,accessibilityErrorMessage:!0,accessibilityExpanded:!0,accessibilityFlowTo:!0,accessibilityHasPopup:!0,accessibilityHidden:!0,accessibilityInvalid:!0,accessibilityKeyShortcuts:!0,accessibilityLabel:!0,accessibilityLabelledBy:!0,accessibilityLevel:!0,accessibilityLiveRegion:!0,accessibilityModal:!0,accessibilityMultiline:!0,accessibilityMultiSelectable:!0,accessibilityOrientation:!0,accessibilityOwns:!0,accessibilityPlaceholder:!0,accessibilityPosInSet:!0,accessibilityPressed:!0,accessibilityReadOnly:!0,accessibilityRequired:!0,accessibilityRole:!0,accessibilityRoleDescription:!0,accessibilityRowCount:!0,accessibilityRowIndex:!0,accessibilityRowSpan:!0,accessibilitySelected:!0,accessibilitySetSize:!0,accessibilitySort:!0,accessibilityValueMax:!0,accessibilityValueMin:!0,accessibilityValueNow:!0,accessibilityValueText:!0},Iw={onClick:!0,onAuxClick:!0,onContextMenu:!0,onGotPointerCapture:!0,onLostPointerCapture:!0,onPointerCancel:!0,onPointerDown:!0,onPointerEnter:!0,onPointerMove:!0,onPointerLeave:!0,onPointerOut:!0,onPointerOver:!0,onPointerUp:!0},Uw={onBlur:!0,onFocus:!0},Ow={onKeyDown:!0,onKeyDownCapture:!0,onKeyUp:!0,onKeyUpCapture:!0},Fw={onMouseDown:!0,onMouseEnter:!0,onMouseLeave:!0,onMouseMove:!0,onMouseOver:!0,onMouseOut:!0,onMouseUp:!0},kw={onTouchCancel:!0,onTouchCancelCapture:!0,onTouchEnd:!0,onTouchEndCapture:!0,onTouchMove:!0,onTouchMoveCapture:!0,onTouchStart:!0,onTouchStartCapture:!0},Bw={style:!0};function zw(t,e){var n={};for(var i in t)t.hasOwnProperty(i)&&e[i]===!0&&(n[i]=t[i]);return n}var mg=Di?he.useLayoutEffect:he.useEffect,Id="__reactLayoutHandler",ku=null;function Hw(){return Di&&typeof window.ResizeObserver<"u"&&ku==null&&(ku=new window.ResizeObserver(function(t){t.forEach(e=>{var n=e.target,i=n[Id];typeof i=="function"&&kl.measure(n,(r,a,s,o,l,c)=>{var f={nativeEvent:{layout:{x:r,y:a,width:s,height:o,left:l,top:c}},timeStamp:Date.now()};Object.defineProperty(f.nativeEvent,"target",{enumerable:!0,get:()=>e.target}),i(f)})})})),ku}function Gw(t,e){var n=Hw();mg(()=>{var i=t.current;i!=null&&(i[Id]=e)},[t,e]),mg(()=>{var i=t.current;return i!=null&&n!=null&&(typeof i[Id]=="function"?n.observe(i):n.unobserve(i)),()=>{i!=null&&n!=null&&n.unobserve(i)}},[t,n])}function Vw(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){e.forEach(a=>{if(a!=null){if(typeof a=="function"){a(r);return}if(typeof a=="object"){a.current=r;return}console.error("mergeRefs cannot handle Refs of type boolean, number or string, received ref "+String(a))}})}}function Qx(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return he.useMemo(()=>Vw(...e),[...e])}var gg=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():Object.freeze({});function Ww(t){var e=he.useRef(gg);return e.current===gg&&(e.current=t()),e.current}function jw(t){t.pointerEvents,t.style;var e=Ww(()=>n=>{n!=null&&(n.measure=i=>kl.measure(n,i),n.measureLayout=(i,r,a)=>kl.measureLayout(n,i,a,r),n.measureInWindow=i=>kl.measureInWindow(n,i))});return e}var vg=()=>{},Xw={},$w=[];function _g(t){return t>20?t%20:t}function Jx(t,e){var n,i=!1,r,a,s=t.changedTouches,o=t.type,l=t.metaKey===!0,c=t.shiftKey===!0,f=s&&s[0].force||0,d=_g(s&&s[0].identifier||0),h=s&&s[0].clientX||t.clientX,m=s&&s[0].clientY||t.clientY,_=s&&s[0].pageX||t.pageX,x=s&&s[0].pageY||t.pageY,p=typeof t.preventDefault=="function"?t.preventDefault.bind(t):vg,u=t.timeStamp;function g(w){return Array.prototype.slice.call(w).map(N=>({force:N.force,identifier:_g(N.identifier),get locationX(){return R(N.clientX)},get locationY(){return T(N.clientY)},pageX:N.pageX,pageY:N.pageY,target:N.target,timestamp:u}))}if(s!=null)r=g(s),a=g(t.touches);else{var v=[{force:f,identifier:d,get locationX(){return R(h)},get locationY(){return T(m)},pageX:_,pageY:x,target:t.target,timestamp:u}];r=v,a=o==="mouseup"||o==="dragstart"?$w:v}var S={bubbles:!0,cancelable:!0,currentTarget:null,defaultPrevented:t.defaultPrevented,dispatchConfig:Xw,eventPhase:t.eventPhase,isDefaultPrevented(){return t.defaultPrevented},isPropagationStopped(){return i},isTrusted:t.isTrusted,nativeEvent:{altKey:!1,ctrlKey:!1,metaKey:l,shiftKey:c,changedTouches:r,force:f,identifier:d,get locationX(){return R(h)},get locationY(){return T(m)},pageX:_,pageY:x,target:t.target,timestamp:u,touches:a,type:o},persist:vg,preventDefault:p,stopPropagation(){i=!0},target:t.target,timeStamp:u,touchHistory:e.touchHistory};function R(w){if(n=n||Nd(S.currentTarget),n)return w-n.left}function T(w){if(n=n||Nd(S.currentTarget),n)return w-n.top}return S}var Yw="mousedown",qw="mousemove",Kw="mouseup",Zw="dragstart",Qw="touchstart",Jw="touchmove",e1="touchend",t1="touchcancel",n1="scroll",i1="select",r1="selectionchange";function ey(t){return t===Qw||t===Yw}function ty(t){return t===Jw||t===qw}function ny(t){return t===e1||t===Kw||iy(t)}function iy(t){return t===t1||t===Zw}function a1(t){return t===n1}function s1(t){return t===i1||t===r1}function o1(){var t=window.getSelection(),e=t.toString(),n=t.anchorNode,i=t.focusNode,r=n&&n.nodeType===window.Node.TEXT_NODE||i&&i.nodeType===window.Node.TEXT_NODE;return e.length>=1&&e!==`
`&&r}var ry="__reactResponderId";function l1(t){if(t.type==="selectionchange"){var e=window.getSelection().anchorNode;return xg(e)}else{var n=t.composedPath!=null?t.composedPath():xg(t.target);return n}}function xg(t){for(var e=[];t!=null&&t!==document.body;)e.push(t),t=t.parentNode;return e}function c1(t){return t!=null?t[ry]:null}function u1(t,e){t!=null&&(t[ry]=e)}function f1(t){for(var e=[],n=[],i=l1(t),r=0;r<i.length;r++){var a=i[r],s=c1(a);s!=null&&(e.push(s),n.push(a))}return{idPath:e,nodePath:n}}function d1(t,e){var n=t.length,i=e.length;if(n===0||i===0||t[n-1]!==e[i-1])return null;var r=t[0],a=0,s=e[0],o=0;n-i>0&&(a=n-i,r=t[a],n=i),i-n>0&&(o=i-n,s=e[o],i=n);for(var l=n;l--;){if(r===s)return r;r=t[a++],s=e[o++]}return null}function h1(t,e){if(!e||e.length===0)return!1;for(var n=0;n<e.length;n++){var i=e[n].target;if(i!=null&&t.contains(i))return!0}return!1}function p1(t){return t.type==="selectionchange"?o1():t.type==="select"}function m1(t){var e=t.altKey,n=t.button,i=t.buttons,r=t.ctrlKey,a=t.type,s=a==="touchstart"||a==="touchmove",o=a==="mousedown"&&(n===0||i===1),l=a==="mousemove"&&i===1,c=e===!1&&r===!1;return!!(s||o&&c||l&&c)}var yg=20;function kn(t){return t.timeStamp||t.timestamp}function g1(t){return{touchActive:!0,startPageX:t.pageX,startPageY:t.pageY,startTimeStamp:kn(t),currentPageX:t.pageX,currentPageY:t.pageY,currentTimeStamp:kn(t),previousPageX:t.pageX,previousPageY:t.pageY,previousTimeStamp:kn(t)}}function v1(t,e){t.touchActive=!0,t.startPageX=e.pageX,t.startPageY=e.pageY,t.startTimeStamp=kn(e),t.currentPageX=e.pageX,t.currentPageY=e.pageY,t.currentTimeStamp=kn(e),t.previousPageX=e.pageX,t.previousPageY=e.pageY,t.previousTimeStamp=kn(e)}function ip(t){var e=t.identifier;return e==null&&console.error("Touch object is missing identifier."),e}function _1(t,e){var n=ip(t),i=e.touchBank[n];i?v1(i,t):e.touchBank[n]=g1(t),e.mostRecentTimeStamp=kn(t)}function x1(t,e){var n=e.touchBank[ip(t)];n?(n.touchActive=!0,n.previousPageX=n.currentPageX,n.previousPageY=n.currentPageY,n.previousTimeStamp=n.currentTimeStamp,n.currentPageX=t.pageX,n.currentPageY=t.pageY,n.currentTimeStamp=kn(t),e.mostRecentTimeStamp=kn(t)):console.warn(`Cannot record touch move without a touch start.
`,"Touch Move: "+ay(t)+`
`,"Touch Bank: "+sy(e))}function y1(t,e){var n=e.touchBank[ip(t)];n?(n.touchActive=!1,n.previousPageX=n.currentPageX,n.previousPageY=n.currentPageY,n.previousTimeStamp=n.currentTimeStamp,n.currentPageX=t.pageX,n.currentPageY=t.pageY,n.currentTimeStamp=kn(t),e.mostRecentTimeStamp=kn(t)):console.warn(`Cannot record touch end without a touch start.
`,"Touch End: "+ay(t)+`
`,"Touch Bank: "+sy(e))}function ay(t){return JSON.stringify({identifier:t.identifier,pageX:t.pageX,pageY:t.pageY,timestamp:kn(t)})}function sy(t){var e=t.touchBank,n=JSON.stringify(e.slice(0,yg));return e.length>yg&&(n+=" (original size: "+e.length+")"),n}class S1{constructor(){this._touchHistory={touchBank:[],numberActiveTouches:0,indexOfSingleActiveTouch:-1,mostRecentTimeStamp:0}}recordTouchTrack(e,n){var i=this._touchHistory;if(ty(e))n.changedTouches.forEach(o=>x1(o,i));else if(ey(e))n.changedTouches.forEach(o=>_1(o,i)),i.numberActiveTouches=n.touches.length,i.numberActiveTouches===1&&(i.indexOfSingleActiveTouch=n.touches[0].identifier);else if(ny(e)&&(n.changedTouches.forEach(o=>y1(o,i)),i.numberActiveTouches=n.touches.length,i.numberActiveTouches===1))for(var r=i.touchBank,a=0;a<r.length;a++){var s=r[a];if(s!=null&&s.touchActive){i.indexOfSingleActiveTouch=a;break}}}get touchHistory(){return this._touchHistory}}var E1={},Sg=["onStartShouldSetResponderCapture","onStartShouldSetResponder",{bubbles:!0}],Eg=["onMoveShouldSetResponderCapture","onMoveShouldSetResponder",{bubbles:!0}],M1=["onScrollShouldSetResponderCapture","onScrollShouldSetResponder",{bubbles:!1}],T1={touchstart:Sg,mousedown:Sg,touchmove:Eg,mousemove:Eg,scroll:M1},Ud={id:null,idPath:null,node:null},gc=new Map,ji=!1,ri=0,ci={id:null,node:null,idPath:null},Od=new S1;function fo(t){ci=t}function ho(t){var e=gc.get(t);return e??E1}function Bu(t){var e=t.type,n=t.target;if(e==="touchstart"&&(ji=!0),(e==="touchmove"||ri>1)&&(ji=!1),!(e==="mousedown"&&ji||e==="mousemove"&&ji||e==="mousemove"&&ri<1)){if(ji&&e==="mouseup"){ri===0&&(ji=!1);return}var i=ey(e)&&m1(t),r=ty(e),a=ny(e),s=a1(e),o=s1(e),l=Jx(t,Od);(i||r||a)&&(t.touches?ri=t.touches.length:i?ri=1:a&&(ri=0),Od.recordTouchTrack(e,l.nativeEvent));var c=f1(t),f=!1,d;if(i||r||s&&ri>0){var h=ci.idPath,m=c.idPath;if(h!=null&&m!=null){var _=d1(h,m);if(_!=null){var x=m.indexOf(_),p=x+(_===ci.id?1:0);c={idPath:m.slice(p),nodePath:c.nodePath.slice(p)}}else c=null}c!=null&&(d=b1(c,t,l),d!=null&&(w1(l,d),f=!0))}if(ci.id!=null&&ci.node!=null){var u=ci,g=u.id,v=u.node,S=ho(g),R=S.onResponderStart,T=S.onResponderMove,w=S.onResponderEnd,N=S.onResponderRelease,E=S.onResponderTerminate,b=S.onResponderTerminationRequest;if(l.bubbles=!1,l.cancelable=!1,l.currentTarget=v,i)R!=null&&(l.dispatchConfig.registrationName="onResponderStart",R(l));else if(r)T!=null&&(l.dispatchConfig.registrationName="onResponderMove",T(l));else{var k=iy(e)||e==="contextmenu"||e==="blur"&&n===window||e==="blur"&&n.contains(v)&&t.relatedTarget!==v||s&&ri===0||s&&n.contains(v)&&n!==v||o&&p1(t),$=a&&!k&&!h1(v,t.touches);if(a&&w!=null&&(l.dispatchConfig.registrationName="onResponderEnd",w(l)),$&&(N!=null&&(l.dispatchConfig.registrationName="onResponderRelease",N(l)),fo(Ud)),k){var Z=!0;(e==="contextmenu"||e==="scroll"||e==="selectionchange")&&(f?Z=!1:b!=null&&(l.dispatchConfig.registrationName="onResponderTerminationRequest",b(l)===!1&&(Z=!1))),Z&&(E!=null&&(l.dispatchConfig.registrationName="onResponderTerminate",E(l)),fo(Ud),ji=!1,ri=0)}}}}}function b1(t,e,n){var i=T1[e.type];if(i!=null){for(var r=t.idPath,a=t.nodePath,s=i[0],o=i[1],l=i[2].bubbles,c=function(T,w,N){var E=ho(T),b=E[N];if(b!=null&&(n.currentTarget=w,b(n)===!0)){var k=r.slice(r.indexOf(T));return{id:T,node:w,idPath:k}}},f=r.length-1;f>=0;f--){var d=r[f],h=a[f],m=c(d,h,s);if(m!=null)return m;if(n.isPropagationStopped()===!0)return}if(l)for(var _=0;_<r.length;_++){var x=r[_],p=a[_],u=c(x,p,o);if(u!=null)return u;if(n.isPropagationStopped()===!0)return}else{var g=r[0],v=a[0],S=e.target;if(S===v)return c(g,v,o)}}}function w1(t,e){var n=ci,i=n.id,r=n.node,a=e.id,s=e.node,o=ho(a),l=o.onResponderGrant,c=o.onResponderReject;if(t.bubbles=!1,t.cancelable=!1,t.currentTarget=s,i==null)l!=null&&(t.currentTarget=s,t.dispatchConfig.registrationName="onResponderGrant",l(t)),fo(e);else{var f=ho(i),d=f.onResponderTerminate,h=f.onResponderTerminationRequest,m=!0;h!=null&&(t.currentTarget=r,t.dispatchConfig.registrationName="onResponderTerminationRequest",h(t)===!1&&(m=!1)),m?(d!=null&&(t.currentTarget=r,t.dispatchConfig.registrationName="onResponderTerminate",d(t)),l!=null&&(t.currentTarget=s,t.dispatchConfig.registrationName="onResponderGrant",l(t)),fo(e)):c!=null&&(t.currentTarget=s,t.dispatchConfig.registrationName="onResponderReject",c(t))}}var A1=["blur","scroll"],R1=["mousedown","mousemove","mouseup","dragstart","touchstart","touchmove","touchend","touchcancel","contextmenu","select","selectionchange"];function C1(){Di&&window.__reactResponderSystemActive==null&&(window.addEventListener("blur",Bu),R1.forEach(t=>{document.addEventListener(t,Bu)}),A1.forEach(t=>{document.addEventListener(t,Bu,!0)}),window.__reactResponderSystemActive=!0)}function P1(t,e,n){u1(e,t),gc.set(t,n)}function Mg(t){ci.id===t&&L1(),gc.has(t)&&gc.delete(t)}function L1(){var t=ci,e=t.id,n=t.node;if(e!=null&&n!=null){var i=ho(e),r=i.onResponderTerminate;if(r!=null){var a=Jx({},Od);a.currentTarget=n,r(a)}fo(Ud)}ji=!1,ri=0}function N1(){return ci.node}var D1={},I1=0;function U1(t){var e=he.useRef(null);return e.current==null&&(e.current=t()),e.current}function O1(t,e){e===void 0&&(e=D1);var n=U1(()=>I1++),i=he.useRef(!1);he.useEffect(()=>(C1(),()=>{Mg(n)}),[n]),he.useEffect(()=>{var r=e,a=r.onMoveShouldSetResponder,s=r.onMoveShouldSetResponderCapture,o=r.onScrollShouldSetResponder,l=r.onScrollShouldSetResponderCapture,c=r.onSelectionChangeShouldSetResponder,f=r.onSelectionChangeShouldSetResponderCapture,d=r.onStartShouldSetResponder,h=r.onStartShouldSetResponderCapture,m=a!=null||s!=null||o!=null||l!=null||c!=null||f!=null||d!=null||h!=null,_=t.current;m?(P1(n,_,e),i.current=!0):i.current&&(Mg(n),i.current=!1)},[e,t,n]),he.useDebugValue({isResponder:t.current===N1()}),he.useDebugValue(e)}var F1=he.createContext(!1),k1=["hrefAttrs","onLayout","onMoveShouldSetResponder","onMoveShouldSetResponderCapture","onResponderEnd","onResponderGrant","onResponderMove","onResponderReject","onResponderRelease","onResponderStart","onResponderTerminate","onResponderTerminationRequest","onScrollShouldSetResponder","onScrollShouldSetResponderCapture","onSelectionChangeShouldSetResponder","onSelectionChangeShouldSetResponderCapture","onStartShouldSetResponder","onStartShouldSetResponderCapture"],B1=Object.assign({},Nw,Dw,Iw,Uw,Ow,Fw,kw,Bw,{href:!0,lang:!0,onScroll:!0,onWheel:!0,pointerEvents:!0}),z1=t=>zw(t,B1),oy=he.forwardRef((t,e)=>{var n=t.hrefAttrs,i=t.onLayout,r=t.onMoveShouldSetResponder,a=t.onMoveShouldSetResponderCapture,s=t.onResponderEnd,o=t.onResponderGrant,l=t.onResponderMove,c=t.onResponderReject,f=t.onResponderRelease,d=t.onResponderStart,h=t.onResponderTerminate,m=t.onResponderTerminationRequest,_=t.onScrollShouldSetResponder,x=t.onScrollShouldSetResponderCapture,p=t.onSelectionChangeShouldSetResponder,u=t.onSelectionChangeShouldSetResponderCapture,g=t.onStartShouldSetResponder,v=t.onStartShouldSetResponderCapture,S=So(t,k1),R=he.useContext(F1),T=he.useRef(null),w=bw(),N=w.direction;Gw(T,i),O1(T,{onMoveShouldSetResponder:r,onMoveShouldSetResponderCapture:a,onResponderEnd:s,onResponderGrant:o,onResponderMove:l,onResponderReject:c,onResponderRelease:f,onResponderStart:d,onResponderTerminate:h,onResponderTerminationRequest:m,onScrollShouldSetResponder:_,onScrollShouldSetResponderCapture:x,onSelectionChangeShouldSetResponder:p,onSelectionChangeShouldSetResponderCapture:u,onStartShouldSetResponder:g,onStartShouldSetResponderCapture:v});var E="div",b=t.lang!=null?Zx(t.lang):null,k=t.dir||b,$=k||N,Z=z1(S);if(Z.dir=k,Z.style=[Tg.view$raw,R&&Tg.inline,t.style],t.href!=null&&(E="a",n!=null)){var D=n.download,V=n.rel,X=n.target;D!=null&&(Z.download=D),V!=null&&(Z.rel=V),typeof X=="string"&&(Z.target=X.charAt(0)!=="_"?"_"+X:X)}var q=jw(Z),I=Qx(T,q,e);return Z.ref=I,ww(E,Z,{writingDirection:$})});oy.displayName="View";var Tg=Vc.create({view$raw:{alignContent:"flex-start",alignItems:"stretch",backgroundColor:"transparent",border:"0 solid black",boxSizing:"border-box",display:"flex",flexBasis:"auto",flexDirection:"column",flexShrink:0,listStyle:"none",margin:0,minHeight:0,minWidth:0,padding:0,position:"relative",textDecoration:"none",zIndex:0},inline:{display:"inline-flex"}});function H1(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];if(!t){var a;if(e===void 0)a=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=0;a=new Error(e.replace(/%s/g,function(){return String(i[s++])})),a.name="Invariant Violation"}throw a.framesToPop=1,a}}var G1=H1;const bg=Qd(G1);var V1=Di?window.location.href:"";class W1{constructor(){this._eventCallbacks={}}_dispatchEvent(e){for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];var a=this._eventCallbacks[e];a!=null&&Array.isArray(a)&&a.map(s=>{s(...i)})}addEventListener(e,n){var i=this;return i._eventCallbacks[e]||(i._eventCallbacks[e]=[n]),i._eventCallbacks[e].push(n),{remove(){var r=i._eventCallbacks[e],a=r.filter(s=>s.toString()!==n.toString());i._eventCallbacks[e]=a}}}removeEventListener(e,n){console.error("Linking.removeEventListener('"+e+"', ...): Method has been deprecated. Please instead use `remove()` on the subscription returned by `Linking.addEventListener`.");var i=this._eventCallbacks[e],r=i.filter(a=>a.toString()!==n.toString());this._eventCallbacks[e]=r}canOpenURL(){return Promise.resolve(!0)}getInitialURL(){return Promise.resolve(V1)}openURL(e,n){arguments.length===1&&(n="_blank");try{return j1(e,n),this._dispatchEvent("onOpen",e),Promise.resolve()}catch(i){return Promise.reject(i)}}_validateURL(e){bg(typeof e=="string","Invalid URL: should be a string. Was: "+e),bg(e,"Invalid URL: cannot be empty")}}var j1=(t,e)=>{if(Di){var n=new URL(t,window.location).toString();n.indexOf("tel:")===0?window.location=n:window.open(n,e,"noopener")}};const Ko=new W1;var wg="DELAY",Xn="ERROR",Ag="LONG_PRESS_DETECTED",Jt="NOT_RESPONDER",ts="RESPONDER_ACTIVE_LONG_PRESS_START",Wc="RESPONDER_ACTIVE_PRESS_START",Fd="RESPONDER_INACTIVE_PRESS_START",X1="RESPONDER_GRANT",Bl="RESPONDER_RELEASE",ly="RESPONDER_TERMINATED",Rg=Object.freeze({NOT_RESPONDER:{DELAY:Xn,RESPONDER_GRANT:Fd,RESPONDER_RELEASE:Xn,RESPONDER_TERMINATED:Xn,LONG_PRESS_DETECTED:Xn},RESPONDER_INACTIVE_PRESS_START:{DELAY:Wc,RESPONDER_GRANT:Xn,RESPONDER_RELEASE:Jt,RESPONDER_TERMINATED:Jt,LONG_PRESS_DETECTED:Xn},RESPONDER_ACTIVE_PRESS_START:{DELAY:Xn,RESPONDER_GRANT:Xn,RESPONDER_RELEASE:Jt,RESPONDER_TERMINATED:Jt,LONG_PRESS_DETECTED:ts},RESPONDER_ACTIVE_LONG_PRESS_START:{DELAY:Xn,RESPONDER_GRANT:Xn,RESPONDER_RELEASE:Jt,RESPONDER_TERMINATED:Jt,LONG_PRESS_DETECTED:ts},ERROR:{DELAY:Jt,RESPONDER_GRANT:Fd,RESPONDER_RELEASE:Jt,RESPONDER_TERMINATED:Jt,LONG_PRESS_DETECTED:Jt}}),cy=t=>t.getAttribute("role"),kd=t=>t.tagName.toLowerCase(),Cg=t=>t===Wc||t===ts,zl=t=>cy(t)==="button",Pg=t=>t===Fd||t===Wc||t===ts,$1=t=>t===ly||t===Bl,Lg=t=>{var e=t.key,n=t.target,i=e===" "||e==="Spacebar",r=kd(n)==="button"||zl(n);return e==="Enter"||i&&r},Y1=450,q1=50;class K1{constructor(e){this._eventHandlers=null,this._isPointerTouch=!1,this._longPressDelayTimeout=null,this._longPressDispatched=!1,this._pressDelayTimeout=null,this._pressOutDelayTimeout=null,this._touchState=Jt,this._responderElement=null,this.configure(e)}configure(e){this._config=e}reset(){this._cancelLongPressDelayTimeout(),this._cancelPressDelayTimeout(),this._cancelPressOutDelayTimeout()}getEventHandlers(){return this._eventHandlers==null&&(this._eventHandlers=this._createEventHandlers()),this._eventHandlers}_createEventHandlers(){var e=(r,a)=>{r.persist(),this._cancelPressOutDelayTimeout(),this._longPressDispatched=!1,this._selectionTerminated=!1,this._touchState=Jt,this._isPointerTouch=r.nativeEvent.type==="touchstart",this._receiveSignal(X1,r);var s=zu(this._config.delayPressStart,0,q1);a!==!1&&s>0?this._pressDelayTimeout=setTimeout(()=>{this._receiveSignal(wg,r)},s):this._receiveSignal(wg,r);var o=zu(this._config.delayLongPress,10,Y1);this._longPressDelayTimeout=setTimeout(()=>{this._handleLongPress(r)},o+s)},n=r=>{this._receiveSignal(Bl,r)},i=r=>{var a=this._config.onPress,s=r.target;if(this._touchState!==Jt&&Lg(r)){n(r),document.removeEventListener("keyup",i);var o=s.getAttribute("role"),l=kd(s),c=o==="link"||l==="a"||l==="button"||l==="input"||l==="select"||l==="textarea",f=this._responderElement===s;a!=null&&!c&&f&&a(r),this._responderElement=null}};return{onStartShouldSetResponder:r=>{var a=this._config.disabled;return a&&zl(r.currentTarget)&&r.stopPropagation(),a==null?!0:!a},onKeyDown:r=>{var a=this._config.disabled,s=r.key,o=r.target;if(!a&&Lg(r)){this._touchState===Jt&&(e(r,!1),this._responderElement=o,document.addEventListener("keyup",i));var l=s===" "||s==="Spacebar",c=cy(o),f=c==="button"||c==="menuitem";l&&f&&kd(o)!=="button"&&r.preventDefault(),r.stopPropagation()}},onResponderGrant:r=>e(r),onResponderMove:r=>{this._config.onPressMove!=null&&this._config.onPressMove(r);var a=Ng(r);if(this._touchActivatePosition!=null){var s=this._touchActivatePosition.pageX-a.pageX,o=this._touchActivatePosition.pageY-a.pageY;Math.hypot(s,o)>10&&this._cancelLongPressDelayTimeout()}},onResponderRelease:r=>n(r),onResponderTerminate:r=>{r.nativeEvent.type==="selectionchange"&&(this._selectionTerminated=!0),this._receiveSignal(ly,r)},onResponderTerminationRequest:r=>{var a=this._config,s=a.cancelable,o=a.disabled,l=a.onLongPress;return!o&&l!=null&&this._isPointerTouch&&r.nativeEvent.type==="contextmenu"?!1:s??!0},onClick:r=>{var a=this._config,s=a.disabled,o=a.onPress;s?zl(r.currentTarget)&&r.stopPropagation():(r.stopPropagation(),this._longPressDispatched||this._selectionTerminated?r.preventDefault():o!=null&&r.altKey===!1&&o(r))},onContextMenu:r=>{var a=this._config,s=a.disabled,o=a.onLongPress;s?zl(r.currentTarget)&&r.stopPropagation():o!=null&&this._isPointerTouch&&!r.defaultPrevented&&(r.preventDefault(),r.stopPropagation())}}}_receiveSignal(e,n){var i=this._touchState,r=null;Rg[i]!=null&&(r=Rg[i][e]),!(this._touchState===Jt&&e===Bl)&&(r==null||r===Xn?console.error("PressResponder: Invalid signal "+e+" for state "+i+" on responder"):i!==r&&(this._performTransitionSideEffects(i,r,e,n),this._touchState=r))}_performTransitionSideEffects(e,n,i,r){if($1(i)&&(setTimeout(()=>{this._isPointerTouch=!1},0),this._touchActivatePosition=null,this._cancelLongPressDelayTimeout()),Pg(e)&&i===Ag){var a=this._config.onLongPress;a!=null&&r.nativeEvent.key==null&&(a(r),this._longPressDispatched=!0)}var s=Cg(e),o=Cg(n);if(!s&&o?this._activate(r):s&&!o&&this._deactivate(r),Pg(e)&&i===Bl){var l=this._config,c=l.onLongPress,f=l.onPress;if(f!=null){var d=c!=null&&e===ts;d||!o&&!s&&(this._activate(r),this._deactivate(r))}}this._cancelPressDelayTimeout()}_activate(e){var n=this._config,i=n.onPressChange,r=n.onPressStart,a=Ng(e);this._touchActivatePosition={pageX:a.pageX,pageY:a.pageY},r!=null&&r(e),i!=null&&i(!0)}_deactivate(e){var n=this._config,i=n.onPressChange,r=n.onPressEnd;function a(){r!=null&&r(e),i!=null&&i(!1)}var s=zu(this._config.delayPressEnd);s>0?this._pressOutDelayTimeout=setTimeout(()=>{a()},s):a()}_handleLongPress(e){(this._touchState===Wc||this._touchState===ts)&&this._receiveSignal(Ag,e)}_cancelLongPressDelayTimeout(){this._longPressDelayTimeout!=null&&(clearTimeout(this._longPressDelayTimeout),this._longPressDelayTimeout=null)}_cancelPressDelayTimeout(){this._pressDelayTimeout!=null&&(clearTimeout(this._pressDelayTimeout),this._pressDelayTimeout=null)}_cancelPressOutDelayTimeout(){this._pressOutDelayTimeout!=null&&(clearTimeout(this._pressOutDelayTimeout),this._pressOutDelayTimeout=null)}}function zu(t,e,n){return e===void 0&&(e=0),n===void 0&&(n=0),Math.max(e,t??n)}function Ng(t){var e=t.nativeEvent,n=e.changedTouches,i=e.touches;return i!=null&&i.length>0?i[0]:n!=null&&n.length>0?n[0]:t.nativeEvent}function Z1(t,e){var n=he.useRef(null);n.current==null&&(n.current=new K1(e));var i=n.current;return he.useEffect(()=>{i.configure(e)},[e,i]),he.useEffect(()=>()=>{i.reset()},[i]),he.useDebugValue(e),i.getEventHandlers()}var Q1=["activeOpacity","delayPressIn","delayPressOut","delayLongPress","disabled","focusable","onLongPress","onPress","onPressIn","onPressOut","rejectResponderTermination","style"];function J1(t,e){var n=t.activeOpacity,i=t.delayPressIn,r=t.delayPressOut,a=t.delayLongPress,s=t.disabled,o=t.focusable,l=t.onLongPress,c=t.onPress,f=t.onPressIn,d=t.onPressOut,h=t.rejectResponderTermination,m=t.style,_=So(t,Q1),x=he.useRef(null),p=Qx(e,x),u=he.useState("0s"),g=u[0],v=u[1],S=he.useState(null),R=S[0],T=S[1],w=he.useCallback(($,Z)=>{T($),v(Z?Z/1e3+"s":"0s")},[T,v]),N=he.useCallback($=>{w(n??.2,$)},[n,w]),E=he.useCallback($=>{w(null,$)},[w]),b=he.useMemo(()=>({cancelable:!h,disabled:s,delayLongPress:a,delayPressStart:i,delayPressEnd:r,onLongPress:l,onPress:c,onPressStart($){var Z=$.dispatchConfig!=null?$.dispatchConfig.registrationName==="onResponderGrant":$.type==="keydown";N(Z?0:150),f!=null&&f($)},onPressEnd($){E(250),d!=null&&d($)}}),[a,i,r,s,l,c,f,d,h,N,E]),k=Z1(x,b);return he.createElement(oy,Dd({},_,k,{accessibilityDisabled:s,focusable:!s&&o!==!1,pointerEvents:s?"box-none":void 0,ref:p,style:[Dg.root,!s&&Dg.actionable,m,R!=null&&{opacity:R},{transitionDuration:g}]}))}var Dg=Vc.create({root:{transitionProperty:"opacity",transitionDuration:"0.15s",userSelect:"none"},actionable:{cursor:"pointer",touchAction:"manipulation"}}),Hl=he.memo(he.forwardRef(J1));Hl.displayName="TouchableOpacity";const gn={personalInfo:{name:"David Bibawy",preferredName:"David Hany (davidhany73)",title:"Cybersecurity Specialist & Software Developer",tagline:"Securing modern digital frontiers and engineering intelligent systems at the intersection of offensive security, Edge AI, and cryptography.",avatar:"https://avatars.githubusercontent.com/u/347058330?v=4",bioLead:"I am a Cybersecurity Enthusiast & Software Developer passionate about building bulletproof applications, conducting red-team offensive research, and developing Machine Learning security models.",bioDetails:"Based in Alexandria, Egypt, pursuing a B.Sc. in Computer Science and AI with specialization in Cyber Security at Pharos University (Expected 2026). My work spans automated banking fraud detection, multimodal biometric verification, encrypted network communications, Web3 smart contract security, and low-level robotics interfaces.",location:"Alexandria, Egypt",email:"202201324@pua.edu.eg",phone:"+20 121 222 2818",cvFileName:"David_Hany_CV_v2.pdf",metrics:[{value:"11+",label:"Public Repositories"},{value:"120+",label:"Telecom Security Hours"},{value:"4",label:"Industry Certifications"},{value:"100%",label:"Verified Codebases"}]},socialLinks:{github:"https://github.com/davidhany73",githubUsername:"davidhany73",linkedin:"https://www.linkedin.com/in/david-hany-naeam-a9485032b",linkedinDisplay:"linkedin.com/in/david-hany-naeam-a9485032b",email:"mailto:202201324@pua.edu.eg",phone:"tel:+201212222818"},categories:[{label:"All Repositories",value:"all"},{label:"Cybersecurity & Red Team",value:"cyber"},{label:"AI & Machine Learning",value:"ai"},{label:"Web3 & Full-Stack",value:"web"},{label:"IoT & Systems",value:"systems"}],projects:[{id:"fraud-bank-detection",title:"Fraud Bank Detection System",category:"ai cyber",badge:"AI & FinTech Defense",badgeColor:"badge-ai",description:"Machine learning-powered banking fraud detection pipeline that analyzes transaction streams, flags anomalous behaviors in real time, and prevents unauthorized financial transfers using anomaly scoring.",tech:["Python","Machine Learning","Pandas","Scikit-Learn","Financial Security"],github:"https://github.com/davidhany73/Fraud-Bank-Detection-System",demo:null,featured:!0,stats:{language:"Python"}},{id:"multimodal-biometrics",title:"Multimodal Biometric Attendance System",category:"ai cyber",badge:"Computer Vision & AI",badgeColor:"badge-featured",description:"Autonomous biometric tracking suite integrating real-time facial recognition and multimodal feature extraction for secure, tamper-proof attendance management with zero proxy capability.",tech:["Python","OpenCV","Computer Vision","NumPy","Facial Recognition"],github:"https://github.com/davidhany73/Multimodal-Biometric-Attendance-System",demo:null,featured:!0,stats:{language:"Python"}},{id:"encrypted-secure-chat",title:"Encrypted Secure Chat Application",category:"cyber systems",badge:"Cryptography & Network",badgeColor:"badge-redteam",description:"Low-level client-server messaging system built in C featuring end-to-end cryptographic encryption, secure key exchange protocols, and tamper-resistant network sockets for private communication.",tech:["C","Cryptography","Socket Programming","OpenSSL","Network Security"],github:"https://github.com/davidhany73/Encrypted-Secure-Chat-Application",demo:null,featured:!0,stats:{language:"C"}},{id:"ethereum-web3-wallet",title:"Ethereum Web3 Crypto Wallet",category:"web",badge:"Web3 & Blockchain",badgeColor:"badge-featured",description:"Decentralized Web3 Ethereum wallet application facilitating cryptographic keypair generation, transaction signing, blockchain smart contract interaction, and token asset management.",tech:["JavaScript","Web3.js","Ethereum","Smart Contracts","Cryptography"],github:"https://github.com/davidhany73/Ethereum-Web3-Wallet",demo:null,featured:!0,stats:{language:"JavaScript"}},{id:"brute-force-simulator",title:"Brute Force Attack Simulator",category:"cyber",badge:"Red Team & Educational",badgeColor:"badge-redteam",description:"Defensive penetration testing tool simulating cryptographic password brute-force and dictionary attacks to benchmark entropy thresholds, audit password policies, and test rate-limiting.",tech:["Python","Red Teaming","Cryptanalysis","Multithreading","Security Auditing"],github:"https://github.com/davidhany73/Brute-Force-Simulation-Educational",demo:null,featured:!1,stats:{language:"Python"}},{id:"password-checker-strength",title:"Password Strength & Entropy Analyzer",category:"cyber",badge:"Defensive Security",badgeColor:"badge-featured",description:"Security validation tool assessing credential entropy, dictionary breach vulnerabilities, character variance, and NIST compliance to enforce robust authentication standards.",tech:["Python","Information Theory","NIST Guidelines","Regex","CLI Tool"],github:"https://github.com/davidhany73/Password-Checker_strenth",demo:null,featured:!1,stats:{language:"Python"}},{id:"instagram-clone-flask",title:"Instagram Clone (Flask & MySQL)",category:"web",badge:"Full-Stack Backend",badgeColor:"badge-featured",description:"Full-stack relational database clone featuring user authentication, session security, photo upload pipelines, database normalization, and optimized SQL schemas for high-concurrency testing.",tech:["Python","Flask","MySQL","RESTful API","HTML/CSS"],github:"https://github.com/davidhany73/Instagram-Clone-Flask-MySQL",demo:null,featured:!1,stats:{language:"Python / MySQL"}},{id:"smart-glove-robotic-hand",title:"Smart Glove Robotic Hand Interface",category:"systems",badge:"IoT & Embedded C++",badgeColor:"badge-featured",description:"Embedded robotic hardware interface translating human hand gestures via flex sensors and microcontrollers to actuate an articulated robotic hand with sub-millisecond responsiveness.",tech:["C++","Arduino","Embedded Systems","Robotics","Hardware Sensors"],github:"https://github.com/davidhany73/Smart-Glove-Robotic-Hand",demo:null,featured:!1,stats:{language:"C++"}},{id:"smart-attendance-qr",title:"Smart Attendance System (QR Code)",category:"web",badge:"Web Architecture",badgeColor:"badge-ai",description:"Dynamic QR-code based attendance tracking platform designed to eliminate proxy sign-ins through time-expiring cryptographic verification tokens and automatic database logging.",tech:["CSS / HTML","Python","QR Code Engine","Session Auth","Database"],github:"https://github.com/davidhany73/Smart-Attendance-System-QR-Code",demo:null,featured:!1,stats:{language:"HTML / CSS"}},{id:"security-review-access",title:"Security Review & Access Control Engine",category:"cyber",badge:"Access Governance",badgeColor:"badge-redteam",description:"Interactive security evaluation framework demonstrating role-based access control (RBAC), privilege boundaries, and access permission review protocols to mitigate privilege escalation.",tech:["HTML","RBAC","Access Control","Security Auditing","Policy Enforcement"],github:"https://github.com/davidhany73/security_review_access_C-r-",demo:null,featured:!1,stats:{language:"HTML"}},{id:"upheal-mindquest",title:"UpHeal / MindQuest (Graduation Project)",category:"ai cyber",badge:"Graduation Capstone",badgeColor:"badge-featured",description:"Multi-layered Android security paradigm featuring a Host-Based Intrusion Prevention System (HIPS), Edge AI for real-time visual classification, and Runtime Application Self-Protection (RASP) against reverse engineering.",tech:["Android Security","Edge AI","RASP","TensorFlow Lite","HIPS"],github:"https://github.com/davidhany73",demo:null,featured:!0,stats:{language:"Python / Java"}}],skills:{programming:[{name:"Python (ML, Sockets, Security Automation)",level:"95%"},{name:"C / C++ (Systems, Embedded, Sockets)",level:"90%"},{name:"JavaScript / Web3.js / React",level:"88%"},{name:"SQL (MySQL Database Architecture)",level:"86%"}],cybersecurity:[{name:"Penetration Testing & Red Teaming (Metasploit)",level:"92%"},{name:"Packet Inspection & Protocol Analysis (Wireshark)",level:"94%"},{name:"Cryptographic Engineering & End-to-End Encryption",level:"90%"},{name:"Kali Linux & Operating Systems Hardening",level:"95%"}],aiAndData:[{name:"Computer Vision & Biometrics (OpenCV)",level:"92%"},{name:"Machine Learning & Anomaly Detection (Scikit-Learn)",level:"90%"},{name:"TensorFlow Lite & Edge Intelligence",level:"86%"},{name:"Data Manipulation (NumPy, Pandas, MATLAB)",level:"88%"}]},experience:[{role:"Cyber Security Intern",organization:"WE Telecommunications",orgIcon:"fa-tower-broadcast",hours:"120 Hours Completed",period:"2023",location:"Alexandria, Egypt",bullets:["Conducted thorough vulnerability assessments on internal telecommunications networks utilizing <strong>Metasploit</strong> and Kali Linux security toolsets.","Monitored, captured, and analyzed live network packet traffic with <strong>Wireshark</strong> to proactively detect anomalies, unauthorized intrusions, and security vulnerabilities.","Assisted senior security analysts in designing, implementing, and hardening defensive network perimeter strategies."]}],education:[{degree:"B.Sc. in Computer Science and AI",specialization:"Major: Cyber Security",institution:"Pharos University in Alexandria (PUA)",period:"2022 – Expected 2026",location:"Alexandria, Egypt",gpa:"2.7",bullets:["Specialized coursework in Network Defense, Applied Cryptography, OS Hardening, Machine Learning, and Computer Vision.","Graduation Project: UpHeal / MindQuest — an intelligent mobile security paradigm fusing Edge AI with Runtime Application Self-Protection (RASP)."]}],certifications:[{name:"Cisco CCNA (200-301) Training Program",issuer:"WE Telecommunications • 120 Hours",date:"Aug 2024 – Sep 2024",icon:"fa-network-wired",tag:"Verified Intensive",color:"var(--cyan-neon)"},{name:"CompTIA Security+ Certification",issuer:"CompTIA Online",date:"2024",icon:"fa-lock",tag:"Globally Recognized",color:"var(--purple-neon)"},{name:"Google Cybersecurity Professional Certificate",issuer:"Coursera • Google",date:"2023",icon:"fa-google",iconPrefix:"fab",tag:"Professional Credential",color:"var(--green-cyber)"},{name:"Certificate of Appreciation (Talent Day Show)",issuer:"Pharos University • Alexandria",date:"Feb 2023",icon:"fa-trophy",tag:"University Honor",color:"#ffbd2e"}]},eA=gn.socialLinks.linkedin,tA=gn.socialLinks.github,uy=async t=>{try{if(Ko&&typeof Ko.openURL=="function"&&await Ko.canOpenURL(t).catch(()=>!0))return Ko.openURL(t)}catch{}typeof window<"u"&&window.open(t,"_blank","noopener,noreferrer")},jc=()=>uy(eA),fy=()=>uy(tA);function nA({onOpenCV:t}){const{audioEnabled:e,setAudioEnabled:n,playBeep:i,playChirp:r}=he.useContext(Ui),[a,s]=he.useState(!1),{personalInfo:o}=gn,l=[{href:"#hero",label:"Home"},{href:"#about",label:"About"},{href:"#projects",label:"Projects"},{href:"#experience",label:"Experience"},{href:"#skills",label:"Skills"},{href:"#certifications",label:"Certs"},{href:"#contact",label:"Contact"}],c=()=>{n(f=>!f),e||r(880)};return y.jsxs("nav",{className:"nav-hud holo-glass",children:[y.jsxs("a",{href:"#hero",className:"brand-badge",children:[y.jsx("div",{className:"brand-hex",children:"DB"}),y.jsxs("div",{className:"brand-text",children:[y.jsx("span",{className:"brand-title",children:o.name.toUpperCase()}),y.jsxs("span",{className:"brand-status",children:[y.jsx("span",{className:"pulse-dot"})," CYBER // AI DEVELOPER"]})]})]}),y.jsx("ul",{className:`nav-links ${a?"open":""}`,id:"nav-links",children:l.map(f=>y.jsx("li",{children:y.jsx("a",{href:f.href,className:"nav-link",onClick:()=>{s(!1),i(850,.03)},onMouseEnter:()=>i(850,.03),children:f.label})},f.href))}),y.jsxs("div",{className:"nav-actions",children:[y.jsx("button",{onClick:()=>{i(950,.04),jc()},className:"cyber-icon-btn holo-btn",title:`Connect on LinkedIn (${gn.socialLinks.linkedinDisplay})`,"aria-label":"LinkedIn Profile",children:y.jsx("i",{className:"fab fa-linkedin-in text-cyan"})}),y.jsx("button",{className:`cyber-icon-btn ${e?"active":""}`,onClick:c,title:e?"Sound: Enabled":"Sound: Muted","aria-label":"Toggle Sound",children:y.jsx("i",{className:`fas ${e?"fa-volume-up":"fa-volume-mute"}`})}),y.jsxs("button",{onClick:()=>{i(900,.04),t()},className:"cyber-btn cyber-btn-primary nav-connect-btn",children:[y.jsx("i",{className:"fas fa-file-pdf"}),y.jsx("span",{children:"RESUME"})]}),y.jsx("button",{className:"mobile-toggle",onClick:()=>s(f=>!f),"aria-label":"Toggle Navigation",children:y.jsx("i",{className:`fas ${a?"fa-times":"fa-bars"}`})})]})]})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rp="160",iA=0,Ig=1,rA=2,dy=1,aA=2,_i=3,pr=0,pn=1,Si=2,lr=0,Wa=1,Bd=2,Ug=3,Og=4,sA=5,Cr=100,oA=101,lA=102,Fg=103,kg=104,cA=200,uA=201,fA=202,dA=203,zd=204,Hd=205,hA=206,pA=207,mA=208,gA=209,vA=210,_A=211,xA=212,yA=213,SA=214,EA=0,MA=1,TA=2,vc=3,bA=4,wA=5,AA=6,RA=7,ap=0,CA=1,PA=2,cr=0,LA=1,NA=2,DA=3,IA=4,UA=5,OA=6,hy=300,ns=301,is=302,Gd=303,Vd=304,Xc=306,Wd=1e3,Kn=1001,jd=1002,tn=1003,Bg=1004,Hu=1005,Sn=1006,FA=1007,po=1008,ur=1009,kA=1010,BA=1011,sp=1012,py=1013,Qi=1014,Ji=1015,mo=1016,my=1017,gy=1018,Or=1020,zA=1021,Zn=1023,HA=1024,GA=1025,Fr=1026,rs=1027,VA=1028,vy=1029,WA=1030,_y=1031,xy=1033,Gu=33776,Vu=33777,Wu=33778,ju=33779,zg=35840,Hg=35841,Gg=35842,Vg=35843,yy=36196,Wg=37492,jg=37496,Xg=37808,$g=37809,Yg=37810,qg=37811,Kg=37812,Zg=37813,Qg=37814,Jg=37815,ev=37816,tv=37817,nv=37818,iv=37819,rv=37820,av=37821,Xu=36492,sv=36494,ov=36495,jA=36283,lv=36284,cv=36285,uv=36286,Sy=3e3,kr=3001,XA=3200,$A=3201,Ey=0,YA=1,Un="",kt="srgb",Li="srgb-linear",op="display-p3",$c="display-p3-linear",_c="linear",ct="srgb",xc="rec709",yc="p3",na=7680,fv=519,qA=512,KA=513,ZA=514,My=515,QA=516,JA=517,eR=518,tR=519,Xd=35044,dv="300 es",$d=1035,bi=2e3,Sc=2001;class cs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(n);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$u=Math.PI/180,Yd=180/Math.PI;function fr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[t&255]+Wt[t>>8&255]+Wt[t>>16&255]+Wt[t>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[n&63|128]+Wt[n>>8&255]+"-"+Wt[n>>16&255]+Wt[n>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function ln(t,e,n){return Math.max(e,Math.min(n,t))}function nR(t,e){return(t%e+e)%e}function Yu(t,e,n){return(1-n)*t+n*e}function hv(t){return(t&t-1)===0&&t!==0}function qd(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Ei(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function nt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Fe{constructor(e=0,n=0){Fe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ln(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),a=this.x-e.x,s=this.y-e.y;return this.x=a*i-s*r+e.x,this.y=a*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,n,i,r,a,s,o,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,a,s,o,l,c)}set(e,n,i,r,a,s,o,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=a,f[5]=l,f[6]=i,f[7]=s,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,a=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],f=i[4],d=i[7],h=i[2],m=i[5],_=i[8],x=r[0],p=r[3],u=r[6],g=r[1],v=r[4],S=r[7],R=r[2],T=r[5],w=r[8];return a[0]=s*x+o*g+l*R,a[3]=s*p+o*v+l*T,a[6]=s*u+o*S+l*w,a[1]=c*x+f*g+d*R,a[4]=c*p+f*v+d*T,a[7]=c*u+f*S+d*w,a[2]=h*x+m*g+_*R,a[5]=h*p+m*v+_*T,a[8]=h*u+m*S+_*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return n*s*f-n*o*c-i*a*f+i*o*l+r*a*c-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],f=e[8],d=f*s-o*c,h=o*l-f*a,m=c*a-s*l,_=n*d+i*h+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=d*x,e[1]=(r*c-f*i)*x,e[2]=(o*i-r*s)*x,e[3]=h*x,e[4]=(f*n-r*l)*x,e[5]=(r*a-o*n)*x,e[6]=m*x,e[7]=(i*l-c*n)*x,e[8]=(s*n-i*a)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-r*c,r*l,-r*(-c*s+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(qu.makeScale(e,n)),this}rotate(e){return this.premultiply(qu.makeRotation(-e)),this}translate(e,n){return this.premultiply(qu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qu=new We;function Ty(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ec(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function iR(){const t=Ec("canvas");return t.style.display="block",t}const pv={};function js(t){t in pv||(pv[t]=!0,console.warn(t))}const mv=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),gv=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Zo={[Li]:{transfer:_c,primaries:xc,toReference:t=>t,fromReference:t=>t},[kt]:{transfer:ct,primaries:xc,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[$c]:{transfer:_c,primaries:yc,toReference:t=>t.applyMatrix3(gv),fromReference:t=>t.applyMatrix3(mv)},[op]:{transfer:ct,primaries:yc,toReference:t=>t.convertSRGBToLinear().applyMatrix3(gv),fromReference:t=>t.applyMatrix3(mv).convertLinearToSRGB()}},rR=new Set([Li,$c]),et={enabled:!0,_workingColorSpace:Li,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!rR.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Zo[e].toReference,r=Zo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Zo[t].primaries},getTransfer:function(t){return t===Un?_c:Zo[t].transfer}};function ja(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ku(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ia;class by{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ia===void 0&&(ia=Ec("canvas")),ia.width=e.width,ia.height=e.height;const i=ia.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ia}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ec("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=ja(a[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ja(n[i]/255)*255):n[i]=ja(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let aR=0;class wy{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:aR++}),this.uuid=fr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(Zu(r[s].image)):a.push(Zu(r[s]))}else a=Zu(r);i.url=a}return n||(e.images[this.uuid]=i),i}}function Zu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?by.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sR=0;class mn extends cs{constructor(e=mn.DEFAULT_IMAGE,n=mn.DEFAULT_MAPPING,i=Kn,r=Kn,a=Sn,s=po,o=Zn,l=ur,c=mn.DEFAULT_ANISOTROPY,f=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sR++}),this.uuid=fr(),this.name="",this.source=new wy(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(js("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===kr?kt:Un),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wd:e.x=e.x-Math.floor(e.x);break;case Kn:e.x=e.x<0?0:1;break;case jd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wd:e.y=e.y-Math.floor(e.y);break;case Kn:e.y=e.y<0?0:1;break;case jd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return js("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===kt?kr:Sy}set encoding(e){js("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===kr?kt:Un}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=hy;mn.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,n=0,i=0,r=1){ht.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*a,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*a,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*a,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,a;const l=e.elements,c=l[0],f=l[4],d=l[8],h=l[1],m=l[5],_=l[9],x=l[2],p=l[6],u=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-x)<.01&&Math.abs(_-p)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+x)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,S=(m+1)/2,R=(u+1)/2,T=(f+h)/4,w=(d+x)/4,N=(_+p)/4;return v>S&&v>R?v<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(v),r=T/i,a=w/i):S>R?S<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(S),i=T/r,a=N/r):R<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(R),i=w/a,r=N/a),this.set(i,r,a,n),this}let g=Math.sqrt((p-_)*(p-_)+(d-x)*(d-x)+(h-f)*(h-f));return Math.abs(g)<.001&&(g=1),this.x=(p-_)/g,this.y=(d-x)/g,this.z=(h-f)/g,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class oR extends cs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new ht(0,0,e,n),this.scissorTest=!1,this.viewport=new ht(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(js("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===kr?kt:Un),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new mn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new wy(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wr extends oR{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Ay extends mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lR extends mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Eo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,a,s,o){let l=i[r+0],c=i[r+1],f=i[r+2],d=i[r+3];const h=a[s+0],m=a[s+1],_=a[s+2],x=a[s+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d;return}if(o===1){e[n+0]=h,e[n+1]=m,e[n+2]=_,e[n+3]=x;return}if(d!==x||l!==h||c!==m||f!==_){let p=1-o;const u=l*h+c*m+f*_+d*x,g=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const R=Math.sqrt(v),T=Math.atan2(R,u*g);p=Math.sin(p*T)/R,o=Math.sin(o*T)/R}const S=o*g;if(l=l*p+h*S,c=c*p+m*S,f=f*p+_*S,d=d*p+x*S,p===1-o){const R=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=R,c*=R,f*=R,d*=R}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,a,s){const o=i[r],l=i[r+1],c=i[r+2],f=i[r+3],d=a[s],h=a[s+1],m=a[s+2],_=a[s+3];return e[n]=o*_+f*d+l*m-c*h,e[n+1]=l*_+f*h+c*d-o*m,e[n+2]=c*_+f*m+o*h-l*d,e[n+3]=f*_-o*d-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(r/2),d=o(a/2),h=l(i/2),m=l(r/2),_=l(a/2);switch(s){case"XYZ":this._x=h*f*d+c*m*_,this._y=c*m*d-h*f*_,this._z=c*f*_+h*m*d,this._w=c*f*d-h*m*_;break;case"YXZ":this._x=h*f*d+c*m*_,this._y=c*m*d-h*f*_,this._z=c*f*_-h*m*d,this._w=c*f*d+h*m*_;break;case"ZXY":this._x=h*f*d-c*m*_,this._y=c*m*d+h*f*_,this._z=c*f*_+h*m*d,this._w=c*f*d-h*m*_;break;case"ZYX":this._x=h*f*d-c*m*_,this._y=c*m*d+h*f*_,this._z=c*f*_-h*m*d,this._w=c*f*d+h*m*_;break;case"YZX":this._x=h*f*d+c*m*_,this._y=c*m*d+h*f*_,this._z=c*f*_-h*m*d,this._w=c*f*d-h*m*_;break;case"XZY":this._x=h*f*d-c*m*_,this._y=c*m*d-h*f*_,this._z=c*f*_+h*m*d,this._w=c*f*d+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],a=n[8],s=n[1],o=n[5],l=n[9],c=n[2],f=n[6],d=n[10],h=i+o+d;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(f-l)*m,this._y=(a-c)*m,this._z=(s-r)*m}else if(i>o&&i>d){const m=2*Math.sqrt(1+i-o-d);this._w=(f-l)/m,this._x=.25*m,this._y=(r+s)/m,this._z=(a+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-i-d);this._w=(a-c)/m,this._x=(r+s)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+d-i-o);this._w=(s-r)/m,this._x=(a+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ln(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,a=e._z,s=e._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+s*o+r*c-a*l,this._y=r*f+s*l+a*o-i*c,this._z=a*f+s*c+i*l-r*o,this._w=s*f-i*o-r*l-a*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,s=this._w;let o=s*e._w+i*e._x+r*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=i,this._y=r,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-n;return this._w=m*s+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*a+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,o),d=Math.sin((1-n)*f)/c,h=Math.sin(n*f)/c;return this._w=s*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=a*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(a),i*Math.cos(a),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,n=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(vv.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(vv.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*n+a[3]*i+a[6]*r,this.y=a[1]*n+a[4]*i+a[7]*r,this.z=a[2]*n+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,a=e.elements,s=1/(a[3]*n+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*r+a[12])*s,this.y=(a[1]*n+a[5]*i+a[9]*r+a[13])*s,this.z=(a[2]*n+a[6]*i+a[10]*r+a[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*r-o*i),f=2*(o*n-a*r),d=2*(a*i-s*n);return this.x=n+l*c+s*d-o*f,this.y=i+l*f+o*c-a*d,this.z=r+l*d+a*f-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r,this.y=a[1]*n+a[5]*i+a[9]*r,this.z=a[2]*n+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,a=e.z,s=n.x,o=n.y,l=n.z;return this.x=r*l-a*o,this.y=a*s-i*l,this.z=i*o-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Qu.copy(this).projectOnVector(e),this.sub(Qu)}reflect(e){return this.sub(Qu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ln(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qu=new U,vv=new Eo;class Mo{constructor(e=new U(1/0,1/0,1/0),n=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Vn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Vn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Vn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(n===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Vn):Vn.fromBufferAttribute(a,s),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qo.copy(i.boundingBox)),Qo.applyMatrix4(e.matrixWorld),this.union(Qo)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Es),Jo.subVectors(this.max,Es),ra.subVectors(e.a,Es),aa.subVectors(e.b,Es),sa.subVectors(e.c,Es),zi.subVectors(aa,ra),Hi.subVectors(sa,aa),Sr.subVectors(ra,sa);let n=[0,-zi.z,zi.y,0,-Hi.z,Hi.y,0,-Sr.z,Sr.y,zi.z,0,-zi.x,Hi.z,0,-Hi.x,Sr.z,0,-Sr.x,-zi.y,zi.x,0,-Hi.y,Hi.x,0,-Sr.y,Sr.x,0];return!Ju(n,ra,aa,sa,Jo)||(n=[1,0,0,0,1,0,0,0,1],!Ju(n,ra,aa,sa,Jo))?!1:(el.crossVectors(zi,Hi),n=[el.x,el.y,el.z],Ju(n,ra,aa,sa,Jo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const hi=[new U,new U,new U,new U,new U,new U,new U,new U],Vn=new U,Qo=new Mo,ra=new U,aa=new U,sa=new U,zi=new U,Hi=new U,Sr=new U,Es=new U,Jo=new U,el=new U,Er=new U;function Ju(t,e,n,i,r){for(let a=0,s=t.length-3;a<=s;a+=3){Er.fromArray(t,a);const o=r.x*Math.abs(Er.x)+r.y*Math.abs(Er.y)+r.z*Math.abs(Er.z),l=e.dot(Er),c=n.dot(Er),f=i.dot(Er);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const cR=new Mo,Ms=new U,ef=new U;class Yc{constructor(e=new U,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):cR.setFromPoints(e).getCenter(i);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ms.subVectors(e,this.center);const n=Ms.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ms,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ef.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ms.copy(e.center).add(ef)),this.expandByPoint(Ms.copy(e.center).sub(ef))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pi=new U,tf=new U,tl=new U,Gi=new U,nf=new U,nl=new U,rf=new U;class Ry{constructor(e=new U,n=new U(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=pi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,n),pi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){tf.copy(e).add(n).multiplyScalar(.5),tl.copy(n).sub(e).normalize(),Gi.copy(this.origin).sub(tf);const a=e.distanceTo(n)*.5,s=-this.direction.dot(tl),o=Gi.dot(this.direction),l=-Gi.dot(tl),c=Gi.lengthSq(),f=Math.abs(1-s*s);let d,h,m,_;if(f>0)if(d=s*l-o,h=s*o-l,_=a*f,d>=0)if(h>=-_)if(h<=_){const x=1/f;d*=x,h*=x,m=d*(d+s*h+2*o)+h*(s*d+h+2*l)+c}else h=a,d=Math.max(0,-(s*h+o)),m=-d*d+h*(h+2*l)+c;else h=-a,d=Math.max(0,-(s*h+o)),m=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-s*a+o)),h=d>0?-a:Math.min(Math.max(-a,-l),a),m=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-a,-l),a),m=h*(h+2*l)+c):(d=Math.max(0,-(s*a+o)),h=d>0?a:Math.min(Math.max(-a,-l),a),m=-d*d+h*(h+2*l)+c);else h=s>0?-a:a,d=Math.max(0,-(s*h+o)),m=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(tf).addScaledVector(tl,h),m}intersectSphere(e,n){pi.subVectors(e.center,this.origin);const i=pi.dot(this.direction),r=pi.dot(pi)-i*i,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,a,s,o,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),f>=0?(a=(e.min.y-h.y)*f,s=(e.max.y-h.y)*f):(a=(e.max.y-h.y)*f,s=(e.min.y-h.y)*f),i>s||a>r||((a>i||isNaN(i))&&(i=a),(s<r||isNaN(r))&&(r=s),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,n,i,r,a){nf.subVectors(n,e),nl.subVectors(i,e),rf.crossVectors(nf,nl);let s=this.direction.dot(rf),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Gi.subVectors(this.origin,e);const l=o*this.direction.dot(nl.crossVectors(Gi,nl));if(l<0)return null;const c=o*this.direction.dot(nf.cross(Gi));if(c<0||l+c>s)return null;const f=-o*Gi.dot(rf);return f<0?null:this.at(f/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,n,i,r,a,s,o,l,c,f,d,h,m,_,x,p){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,a,s,o,l,c,f,d,h,m,_,x,p)}set(e,n,i,r,a,s,o,l,c,f,d,h,m,_,x,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=a,u[5]=s,u[9]=o,u[13]=l,u[2]=c,u[6]=f,u[10]=d,u[14]=h,u[3]=m,u[7]=_,u[11]=x,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/oa.setFromMatrixColumn(e,0).length(),a=1/oa.setFromMatrixColumn(e,1).length(),s=1/oa.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,a=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(a),d=Math.sin(a);if(e.order==="XYZ"){const h=s*f,m=s*d,_=o*f,x=o*d;n[0]=l*f,n[4]=-l*d,n[8]=c,n[1]=m+_*c,n[5]=h-x*c,n[9]=-o*l,n[2]=x-h*c,n[6]=_+m*c,n[10]=s*l}else if(e.order==="YXZ"){const h=l*f,m=l*d,_=c*f,x=c*d;n[0]=h+x*o,n[4]=_*o-m,n[8]=s*c,n[1]=s*d,n[5]=s*f,n[9]=-o,n[2]=m*o-_,n[6]=x+h*o,n[10]=s*l}else if(e.order==="ZXY"){const h=l*f,m=l*d,_=c*f,x=c*d;n[0]=h-x*o,n[4]=-s*d,n[8]=_+m*o,n[1]=m+_*o,n[5]=s*f,n[9]=x-h*o,n[2]=-s*c,n[6]=o,n[10]=s*l}else if(e.order==="ZYX"){const h=s*f,m=s*d,_=o*f,x=o*d;n[0]=l*f,n[4]=_*c-m,n[8]=h*c+x,n[1]=l*d,n[5]=x*c+h,n[9]=m*c-_,n[2]=-c,n[6]=o*l,n[10]=s*l}else if(e.order==="YZX"){const h=s*l,m=s*c,_=o*l,x=o*c;n[0]=l*f,n[4]=x-h*d,n[8]=_*d+m,n[1]=d,n[5]=s*f,n[9]=-o*f,n[2]=-c*f,n[6]=m*d+_,n[10]=h-x*d}else if(e.order==="XZY"){const h=s*l,m=s*c,_=o*l,x=o*c;n[0]=l*f,n[4]=-d,n[8]=c*f,n[1]=h*d+x,n[5]=s*f,n[9]=m*d-_,n[2]=_*d-m,n[6]=o*f,n[10]=x*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uR,e,fR)}lookAt(e,n,i){const r=this.elements;return _n.subVectors(e,n),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Vi.crossVectors(i,_n),Vi.lengthSq()===0&&(Math.abs(i.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Vi.crossVectors(i,_n)),Vi.normalize(),il.crossVectors(_n,Vi),r[0]=Vi.x,r[4]=il.x,r[8]=_n.x,r[1]=Vi.y,r[5]=il.y,r[9]=_n.y,r[2]=Vi.z,r[6]=il.z,r[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,a=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],f=i[1],d=i[5],h=i[9],m=i[13],_=i[2],x=i[6],p=i[10],u=i[14],g=i[3],v=i[7],S=i[11],R=i[15],T=r[0],w=r[4],N=r[8],E=r[12],b=r[1],k=r[5],$=r[9],Z=r[13],D=r[2],V=r[6],X=r[10],q=r[14],I=r[3],B=r[7],H=r[11],K=r[15];return a[0]=s*T+o*b+l*D+c*I,a[4]=s*w+o*k+l*V+c*B,a[8]=s*N+o*$+l*X+c*H,a[12]=s*E+o*Z+l*q+c*K,a[1]=f*T+d*b+h*D+m*I,a[5]=f*w+d*k+h*V+m*B,a[9]=f*N+d*$+h*X+m*H,a[13]=f*E+d*Z+h*q+m*K,a[2]=_*T+x*b+p*D+u*I,a[6]=_*w+x*k+p*V+u*B,a[10]=_*N+x*$+p*X+u*H,a[14]=_*E+x*Z+p*q+u*K,a[3]=g*T+v*b+S*D+R*I,a[7]=g*w+v*k+S*V+R*B,a[11]=g*N+v*$+S*X+R*H,a[15]=g*E+v*Z+S*q+R*K,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],f=e[2],d=e[6],h=e[10],m=e[14],_=e[3],x=e[7],p=e[11],u=e[15];return _*(+a*l*d-r*c*d-a*o*h+i*c*h+r*o*m-i*l*m)+x*(+n*l*m-n*c*h+a*s*h-r*s*m+r*c*f-a*l*f)+p*(+n*c*d-n*o*m-a*s*d+i*s*m+a*o*f-i*c*f)+u*(-r*o*f-n*l*d+n*o*h+r*s*d-i*s*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],f=e[8],d=e[9],h=e[10],m=e[11],_=e[12],x=e[13],p=e[14],u=e[15],g=d*p*c-x*h*c+x*l*m-o*p*m-d*l*u+o*h*u,v=_*h*c-f*p*c-_*l*m+s*p*m+f*l*u-s*h*u,S=f*x*c-_*d*c+_*o*m-s*x*m-f*o*u+s*d*u,R=_*d*l-f*x*l-_*o*h+s*x*h+f*o*p-s*d*p,T=n*g+i*v+r*S+a*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=g*w,e[1]=(x*h*a-d*p*a-x*r*m+i*p*m+d*r*u-i*h*u)*w,e[2]=(o*p*a-x*l*a+x*r*c-i*p*c-o*r*u+i*l*u)*w,e[3]=(d*l*a-o*h*a-d*r*c+i*h*c+o*r*m-i*l*m)*w,e[4]=v*w,e[5]=(f*p*a-_*h*a+_*r*m-n*p*m-f*r*u+n*h*u)*w,e[6]=(_*l*a-s*p*a-_*r*c+n*p*c+s*r*u-n*l*u)*w,e[7]=(s*h*a-f*l*a+f*r*c-n*h*c-s*r*m+n*l*m)*w,e[8]=S*w,e[9]=(_*d*a-f*x*a-_*i*m+n*x*m+f*i*u-n*d*u)*w,e[10]=(s*x*a-_*o*a+_*i*c-n*x*c-s*i*u+n*o*u)*w,e[11]=(f*o*a-s*d*a-f*i*c+n*d*c+s*i*m-n*o*m)*w,e[12]=R*w,e[13]=(f*x*r-_*d*r+_*i*h-n*x*h-f*i*p+n*d*p)*w,e[14]=(_*o*r-s*x*r-_*i*l+n*x*l+s*i*p-n*o*p)*w,e[15]=(s*d*r-f*o*r+f*i*l-n*d*l-s*i*h+n*o*h)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,a=e.z;return n[0]*=i,n[4]*=r,n[8]*=a,n[1]*=i,n[5]*=r,n[9]*=a,n[2]*=i,n[6]*=r,n[10]*=a,n[3]*=i,n[7]*=r,n[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),a=1-i,s=e.x,o=e.y,l=e.z,c=a*s,f=a*o;return this.set(c*s+i,c*o-r*l,c*l+r*o,0,c*o+r*l,f*o+i,f*l-r*s,0,c*l-r*o,f*l+r*s,a*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,a,s){return this.set(1,i,a,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,a=n._x,s=n._y,o=n._z,l=n._w,c=a+a,f=s+s,d=o+o,h=a*c,m=a*f,_=a*d,x=s*f,p=s*d,u=o*d,g=l*c,v=l*f,S=l*d,R=i.x,T=i.y,w=i.z;return r[0]=(1-(x+u))*R,r[1]=(m+S)*R,r[2]=(_-v)*R,r[3]=0,r[4]=(m-S)*T,r[5]=(1-(h+u))*T,r[6]=(p+g)*T,r[7]=0,r[8]=(_+v)*w,r[9]=(p-g)*w,r[10]=(1-(h+x))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let a=oa.set(r[0],r[1],r[2]).length();const s=oa.set(r[4],r[5],r[6]).length(),o=oa.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Wn.copy(this);const c=1/a,f=1/s,d=1/o;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=f,Wn.elements[5]*=f,Wn.elements[6]*=f,Wn.elements[8]*=d,Wn.elements[9]*=d,Wn.elements[10]*=d,n.setFromRotationMatrix(Wn),i.x=a,i.y=s,i.z=o,this}makePerspective(e,n,i,r,a,s,o=bi){const l=this.elements,c=2*a/(n-e),f=2*a/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let m,_;if(o===bi)m=-(s+a)/(s-a),_=-2*s*a/(s-a);else if(o===Sc)m=-s/(s-a),_=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,a,s,o=bi){const l=this.elements,c=1/(n-e),f=1/(i-r),d=1/(s-a),h=(n+e)*c,m=(i+r)*f;let _,x;if(o===bi)_=(s+a)*d,x=-2*d;else if(o===Sc)_=a*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const oa=new U,Wn=new xt,uR=new U(0,0,0),fR=new U(1,1,1),Vi=new U,il=new U,_n=new U,_v=new xt,xv=new Eo;class qc{constructor(e=0,n=0,i=0,r=qc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],l=r[1],c=r[5],f=r[9],d=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(ln(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ln(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(ln(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-ln(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(ln(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ln(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return _v.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_v,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return xv.setFromEuler(this),this.setFromQuaternion(xv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qc.DEFAULT_ORDER="XYZ";class Cy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dR=0;const yv=new U,la=new Eo,mi=new xt,rl=new U,Ts=new U,hR=new U,pR=new Eo,Sv=new U(1,0,0),Ev=new U(0,1,0),Mv=new U(0,0,1),mR={type:"added"},gR={type:"removed"};class $t extends cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dR++}),this.uuid=fr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DEFAULT_UP.clone();const e=new U,n=new qc,i=new Eo,r=new U(1,1,1);function a(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new We}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=$t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return la.setFromAxisAngle(e,n),this.quaternion.multiply(la),this}rotateOnWorldAxis(e,n){return la.setFromAxisAngle(e,n),this.quaternion.premultiply(la),this}rotateX(e){return this.rotateOnAxis(Sv,e)}rotateY(e){return this.rotateOnAxis(Ev,e)}rotateZ(e){return this.rotateOnAxis(Mv,e)}translateOnAxis(e,n){return yv.copy(e).applyQuaternion(this.quaternion),this.position.add(yv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Sv,e)}translateY(e){return this.translateOnAxis(Ev,e)}translateZ(e){return this.translateOnAxis(Mv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?rl.copy(e):rl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(Ts,rl,this.up):mi.lookAt(rl,Ts,this.up),this.quaternion.setFromRotationMatrix(mi),r&&(mi.extractRotation(r.matrixWorld),la.setFromRotationMatrix(mi),this.quaternion.premultiply(la.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(mR)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(gR)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,e,hR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,pR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const a=n[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++){const o=r[a];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];a(e.shapes,d)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(a(e.animations,l))}}if(n){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),f=s(e.images),d=s(e.shapes),h=s(e.skeletons),m=s(e.animations),_=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function s(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}$t.DEFAULT_UP=new U(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jn=new U,gi=new U,af=new U,vi=new U,ca=new U,ua=new U,Tv=new U,sf=new U,of=new U,lf=new U;let al=!1;class In{constructor(e=new U,n=new U,i=new U){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),jn.subVectors(e,n),r.cross(jn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,n,i,r,a){jn.subVectors(r,n),gi.subVectors(i,n),af.subVectors(e,n);const s=jn.dot(jn),o=jn.dot(gi),l=jn.dot(af),c=gi.dot(gi),f=gi.dot(af),d=s*c-o*o;if(d===0)return a.set(0,0,0),null;const h=1/d,m=(c*l-o*f)*h,_=(s*f-o*l)*h;return a.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getUV(e,n,i,r,a,s,o,l){return al===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),al=!0),this.getInterpolation(e,n,i,r,a,s,o,l)}static getInterpolation(e,n,i,r,a,s,o,l){return this.getBarycoord(e,n,i,r,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,vi.x),l.addScaledVector(s,vi.y),l.addScaledVector(o,vi.z),l)}static isFrontFacing(e,n,i,r){return jn.subVectors(i,n),gi.subVectors(e,n),jn.cross(gi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),jn.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return In.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return In.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,a){return al===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),al=!0),In.getInterpolation(e,this.a,this.b,this.c,n,i,r,a)}getInterpolation(e,n,i,r,a){return In.getInterpolation(e,this.a,this.b,this.c,n,i,r,a)}containsPoint(e){return In.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return In.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,a=this.c;let s,o;ca.subVectors(r,i),ua.subVectors(a,i),sf.subVectors(e,i);const l=ca.dot(sf),c=ua.dot(sf);if(l<=0&&c<=0)return n.copy(i);of.subVectors(e,r);const f=ca.dot(of),d=ua.dot(of);if(f>=0&&d<=f)return n.copy(r);const h=l*d-f*c;if(h<=0&&l>=0&&f<=0)return s=l/(l-f),n.copy(i).addScaledVector(ca,s);lf.subVectors(e,a);const m=ca.dot(lf),_=ua.dot(lf);if(_>=0&&m<=_)return n.copy(a);const x=m*c-l*_;if(x<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(ua,o);const p=f*_-m*d;if(p<=0&&d-f>=0&&m-_>=0)return Tv.subVectors(a,r),o=(d-f)/(d-f+(m-_)),n.copy(r).addScaledVector(Tv,o);const u=1/(p+x+h);return s=x*u,o=h*u,n.copy(i).addScaledVector(ca,s).addScaledVector(ua,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Py={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},sl={h:0,s:0,l:0};function cf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=et.workingColorSpace){return this.r=e,this.g=n,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=et.workingColorSpace){if(e=nR(e,1),n=ln(n,0,1),i=ln(i,0,1),n===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+n):i+n-i*n,s=2*i-a;this.r=cf(s,a,e+1/3),this.g=cf(s,a,e),this.b=cf(s,a,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,n=kt){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(a,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=kt){const i=Py[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ja(e.r),this.g=ja(e.g),this.b=ja(e.b),this}copyLinearToSRGB(e){return this.r=Ku(e.r),this.g=Ku(e.g),this.b=Ku(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return et.fromWorkingColorSpace(jt.copy(this),e),Math.round(ln(jt.r*255,0,255))*65536+Math.round(ln(jt.g*255,0,255))*256+Math.round(ln(jt.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=et.workingColorSpace){et.fromWorkingColorSpace(jt.copy(this),n);const i=jt.r,r=jt.g,a=jt.b,s=Math.max(i,r,a),o=Math.min(i,r,a);let l,c;const f=(o+s)/2;if(o===s)l=0,c=0;else{const d=s-o;switch(c=f<=.5?d/(s+o):d/(2-s-o),s){case i:l=(r-a)/d+(r<a?6:0);break;case r:l=(a-i)/d+2;break;case a:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=et.workingColorSpace){return et.fromWorkingColorSpace(jt.copy(this),n),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=kt){et.fromWorkingColorSpace(jt.copy(this),e);const n=jt.r,i=jt.g,r=jt.b;return e!==kt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Wi),this.setHSL(Wi.h+e,Wi.s+n,Wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Wi),e.getHSL(sl);const i=Yu(Wi.h,sl.h,n),r=Yu(Wi.s,sl.s,n),a=Yu(Wi.l,sl.l,n);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*n+a[3]*i+a[6]*r,this.g=a[1]*n+a[4]*i+a[7]*r,this.b=a[2]*n+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new je;je.NAMES=Py;let vR=0;class Yr extends cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vR++}),this.uuid=fr(),this.name="",this.type="Material",this.blending=Wa,this.side=pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zd,this.blendDst=Hd,this.blendEquation=Cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=vc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=na,this.stencilZFail=na,this.stencilZPass=na,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Wa&&(i.blending=this.blending),this.side!==pr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==zd&&(i.blendSrc=this.blendSrc),this.blendDst!==Hd&&(i.blendDst=this.blendDst),this.blendEquation!==Cr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==vc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==na&&(i.stencilFail=this.stencilFail),this.stencilZFail!==na&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==na&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(n){const a=r(e.textures),s=r(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Xa extends Yr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ap,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new U,ol=new Fe;class bn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Xd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ol.fromBufferAttribute(this,n),ol.applyMatrix3(e),this.setXY(n,ol.x,ol.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix3(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix4(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyNormalMatrix(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.transformDirection(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ei(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=nt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ei(n,this.array)),n}setX(e,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ei(n,this.array)),n}setY(e,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ei(n,this.array)),n}setZ(e,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ei(n,this.array)),n}setW(e,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=nt(n,this.array),i=nt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=nt(n,this.array),i=nt(i,this.array),r=nt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,a){return e*=this.itemSize,this.normalized&&(n=nt(n,this.array),i=nt(i,this.array),r=nt(r,this.array),a=nt(a,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xd&&(e.usage=this.usage),e}}class Ly extends bn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Ny extends bn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Yt extends bn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let _R=0;const Ln=new xt,uf=new $t,fa=new U,xn=new Mo,bs=new Mo,Pt=new U;class Cn extends cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_R++}),this.uuid=fr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ty(e)?Ny:Ly)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new We().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,n,i){return Ln.makeTranslation(e,n,i),this.applyMatrix4(Ln),this}scale(e,n,i){return Ln.makeScale(e,n,i),this.applyMatrix4(Ln),this}lookAt(e){return uf.lookAt(e),uf.updateMatrix(),this.applyMatrix4(uf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fa).negate(),this.translate(fa.x,fa.y,fa.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Yt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const a=n[i];xn.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),n)for(let a=0,s=n.length;a<s;a++){const o=n[a];bs.setFromBufferAttribute(o),this.morphTargetsRelative?(Pt.addVectors(xn.min,bs.min),xn.expandByPoint(Pt),Pt.addVectors(xn.max,bs.max),xn.expandByPoint(Pt)):(xn.expandByPoint(bs.min),xn.expandByPoint(bs.max))}xn.getCenter(i);let r=0;for(let a=0,s=e.count;a<s;a++)Pt.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(Pt));if(n)for(let a=0,s=n.length;a<s;a++){const o=n[a],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)Pt.fromBufferAttribute(o,c),l&&(fa.fromBufferAttribute(e,c),Pt.add(fa)),r=Math.max(r,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,a=n.normal.array,s=n.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],f=[];for(let b=0;b<o;b++)c[b]=new U,f[b]=new U;const d=new U,h=new U,m=new U,_=new Fe,x=new Fe,p=new Fe,u=new U,g=new U;function v(b,k,$){d.fromArray(r,b*3),h.fromArray(r,k*3),m.fromArray(r,$*3),_.fromArray(s,b*2),x.fromArray(s,k*2),p.fromArray(s,$*2),h.sub(d),m.sub(d),x.sub(_),p.sub(_);const Z=1/(x.x*p.y-p.x*x.y);isFinite(Z)&&(u.copy(h).multiplyScalar(p.y).addScaledVector(m,-x.y).multiplyScalar(Z),g.copy(m).multiplyScalar(x.x).addScaledVector(h,-p.x).multiplyScalar(Z),c[b].add(u),c[k].add(u),c[$].add(u),f[b].add(g),f[k].add(g),f[$].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let b=0,k=S.length;b<k;++b){const $=S[b],Z=$.start,D=$.count;for(let V=Z,X=Z+D;V<X;V+=3)v(i[V+0],i[V+1],i[V+2])}const R=new U,T=new U,w=new U,N=new U;function E(b){w.fromArray(a,b*3),N.copy(w);const k=c[b];R.copy(k),R.sub(w.multiplyScalar(w.dot(k))).normalize(),T.crossVectors(N,k);const Z=T.dot(f[b])<0?-1:1;l[b*4]=R.x,l[b*4+1]=R.y,l[b*4+2]=R.z,l[b*4+3]=Z}for(let b=0,k=S.length;b<k;++b){const $=S[b],Z=$.start,D=$.count;for(let V=Z,X=Z+D;V<X;V+=3)E(i[V+0]),E(i[V+1]),E(i[V+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new bn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new U,a=new U,s=new U,o=new U,l=new U,c=new U,f=new U,d=new U;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),x=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,_),a.fromBufferAttribute(n,x),s.fromBufferAttribute(n,p),f.subVectors(s,a),d.subVectors(r,a),f.cross(d),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),o.add(f),l.add(f),c.add(f),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),a.fromBufferAttribute(n,h+1),s.fromBufferAttribute(n,h+2),f.subVectors(s,a),d.subVectors(r,a),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Pt.fromBufferAttribute(e,n),Pt.normalize(),e.setXYZ(n,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,d=o.normalized,h=new c.constructor(l.length*f);let m=0,_=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?m=l[x]*o.data.stride+o.offset:m=l[x]*f;for(let u=0;u<f;u++)h[_++]=c[m++]}return new bn(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Cn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let f=0,d=c.length;f<d;f++){const h=c[f],m=e(h,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,h=c.length;d<h;d++){const m=c[d];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const a=e.morphAttributes;for(const c in a){const f=[],d=a[c];for(let h=0,m=d.length;h<m;h++)f.push(d[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,f=s.length;c<f;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bv=new xt,Mr=new Ry,ll=new Yc,wv=new U,da=new U,ha=new U,pa=new U,ff=new U,cl=new U,ul=new Fe,fl=new Fe,dl=new Fe,Av=new U,Rv=new U,Cv=new U,hl=new U,pl=new U;class Mn extends $t{constructor(e=new Cn,n=new Xa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){cl.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const f=o[l],d=a[l];f!==0&&(ff.fromBufferAttribute(d,e),s?cl.addScaledVector(ff,f):cl.addScaledVector(ff.sub(n),f))}n.add(cl)}return n}raycast(e,n){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ll.copy(i.boundingSphere),ll.applyMatrix4(a),Mr.copy(e.ray).recast(e.near),!(ll.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(ll,wv)===null||Mr.origin.distanceToSquared(wv)>(e.far-e.near)**2))&&(bv.copy(a).invert(),Mr.copy(e.ray).applyMatrix4(bv),!(i.boundingBox!==null&&Mr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Mr)))}_computeIntersections(e,n,i){let r;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,f=a.attributes.uv1,d=a.attributes.normal,h=a.groups,m=a.drawRange;if(o!==null)if(Array.isArray(s))for(let _=0,x=h.length;_<x;_++){const p=h[_],u=s[p.materialIndex],g=Math.max(p.start,m.start),v=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let S=g,R=v;S<R;S+=3){const T=o.getX(S),w=o.getX(S+1),N=o.getX(S+2);r=ml(this,u,e,i,c,f,d,T,w,N),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let p=_,u=x;p<u;p+=3){const g=o.getX(p),v=o.getX(p+1),S=o.getX(p+2);r=ml(this,s,e,i,c,f,d,g,v,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let _=0,x=h.length;_<x;_++){const p=h[_],u=s[p.materialIndex],g=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=g,R=v;S<R;S+=3){const T=S,w=S+1,N=S+2;r=ml(this,u,e,i,c,f,d,T,w,N),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=_,u=x;p<u;p+=3){const g=p,v=p+1,S=p+2;r=ml(this,s,e,i,c,f,d,g,v,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function xR(t,e,n,i,r,a,s,o){let l;if(e.side===pn?l=i.intersectTriangle(s,a,r,!0,o):l=i.intersectTriangle(r,a,s,e.side===pr,o),l===null)return null;pl.copy(o),pl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(pl);return c<n.near||c>n.far?null:{distance:c,point:pl.clone(),object:t}}function ml(t,e,n,i,r,a,s,o,l,c){t.getVertexPosition(o,da),t.getVertexPosition(l,ha),t.getVertexPosition(c,pa);const f=xR(t,e,n,i,da,ha,pa,hl);if(f){r&&(ul.fromBufferAttribute(r,o),fl.fromBufferAttribute(r,l),dl.fromBufferAttribute(r,c),f.uv=In.getInterpolation(hl,da,ha,pa,ul,fl,dl,new Fe)),a&&(ul.fromBufferAttribute(a,o),fl.fromBufferAttribute(a,l),dl.fromBufferAttribute(a,c),f.uv1=In.getInterpolation(hl,da,ha,pa,ul,fl,dl,new Fe),f.uv2=f.uv1),s&&(Av.fromBufferAttribute(s,o),Rv.fromBufferAttribute(s,l),Cv.fromBufferAttribute(s,c),f.normal=In.getInterpolation(hl,da,ha,pa,Av,Rv,Cv,new U),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new U,materialIndex:0};In.getNormal(da,ha,pa,d.normal),f.face=d}return f}class To extends Cn{constructor(e=1,n=1,i=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],f=[],d=[];let h=0,m=0;_("z","y","x",-1,-1,i,n,e,s,a,0),_("z","y","x",1,-1,i,n,-e,s,a,1),_("x","z","y",1,1,e,i,n,r,s,2),_("x","z","y",1,-1,e,i,-n,r,s,3),_("x","y","z",1,-1,e,n,i,r,a,4),_("x","y","z",-1,-1,e,n,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(f,3)),this.setAttribute("uv",new Yt(d,2));function _(x,p,u,g,v,S,R,T,w,N,E){const b=S/w,k=R/N,$=S/2,Z=R/2,D=T/2,V=w+1,X=N+1;let q=0,I=0;const B=new U;for(let H=0;H<X;H++){const K=H*k-Z;for(let Q=0;Q<V;Q++){const F=Q*b-$;B[x]=F*g,B[p]=K*v,B[u]=D,c.push(B.x,B.y,B.z),B[x]=0,B[p]=0,B[u]=T>0?1:-1,f.push(B.x,B.y,B.z),d.push(Q/w),d.push(1-H/N),q+=1}}for(let H=0;H<N;H++)for(let K=0;K<w;K++){const Q=h+K+V*H,F=h+K+V*(H+1),Y=h+(K+1)+V*(H+1),re=h+(K+1)+V*H;l.push(Q,F,re),l.push(F,Y,re),I+=6}o.addGroup(m,I,E),m+=I,h+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new To(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function as(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Qt(t){const e={};for(let n=0;n<t.length;n++){const i=as(t[n]);for(const r in i)e[r]=i[r]}return e}function yR(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Dy(t){return t.getRenderTarget()===null?t.outputColorSpace:et.workingColorSpace}const SR={clone:as,merge:Qt};var ER=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,MR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jr extends Yr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ER,this.fragmentShader=MR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=as(e.uniforms),this.uniformsGroups=yR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Iy extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=bi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class cn extends Iy{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Yd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($u*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yd*2*Math.atan(Math.tan($u*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,a,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan($u*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*r/l,n-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ma=-90,ga=1;class TR extends $t{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new cn(ma,ga,e,n);r.layers=this.layers,this.add(r);const a=new cn(ma,ga,e,n);a.layers=this.layers,this.add(a);const s=new cn(ma,ga,e,n);s.layers=this.layers,this.add(s);const o=new cn(ma,ga,e,n);o.layers=this.layers,this.add(o);const l=new cn(ma,ga,e,n);l.layers=this.layers,this.add(l);const c=new cn(ma,ga,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,a,s,o,l]=n;for(const c of n)this.remove(c);if(e===bi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Sc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,c,f]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,a),e.setRenderTarget(i,1,r),e.render(n,s),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(d,h,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Uy extends mn{constructor(e,n,i,r,a,s,o,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:ns,super(e,n,i,r,a,s,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bR extends Wr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(js("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===kr?kt:Un),this.texture=new Uy(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Sn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new To(5,5,5),a=new jr({name:"CubemapFromEquirect",uniforms:as(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:lr});a.uniforms.tEquirect.value=n;const s=new Mn(r,a),o=n.minFilter;return n.minFilter===po&&(n.minFilter=Sn),new TR(1,10,this).update(e,s),n.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(a)}}const df=new U,wR=new U,AR=new We;class Ar{constructor(e=new U(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=df.subVectors(i,n).cross(wR.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(df),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:n.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||AR.getNormalMatrix(e),r=this.coplanarPoint(df).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Tr=new Yc,gl=new U;class lp{constructor(e=new Ar,n=new Ar,i=new Ar,r=new Ar,a=new Ar,s=new Ar){this.planes=[e,n,i,r,a,s]}set(e,n,i,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=bi){const i=this.planes,r=e.elements,a=r[0],s=r[1],o=r[2],l=r[3],c=r[4],f=r[5],d=r[6],h=r[7],m=r[8],_=r[9],x=r[10],p=r[11],u=r[12],g=r[13],v=r[14],S=r[15];if(i[0].setComponents(l-a,h-c,p-m,S-u).normalize(),i[1].setComponents(l+a,h+c,p+m,S+u).normalize(),i[2].setComponents(l+s,h+f,p+_,S+g).normalize(),i[3].setComponents(l-s,h-f,p-_,S-g).normalize(),i[4].setComponents(l-o,h-d,p-x,S-v).normalize(),n===bi)i[5].setComponents(l+o,h+d,p+x,S+v).normalize();else if(n===Sc)i[5].setComponents(o,d,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Tr)}intersectsSprite(e){return Tr.center.set(0,0,0),Tr.radius=.7071067811865476,Tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Tr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(gl.x=r.normal.x>0?e.max.x:e.min.x,gl.y=r.normal.y>0?e.max.y:e.min.y,gl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(gl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Oy(){let t=null,e=!1,n=null,i=null;function r(a,s){n(a,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){n=a},setContext:function(a){t=a}}}function RR(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,f){const d=c.array,h=c.usage,m=d.byteLength,_=t.createBuffer();t.bindBuffer(f,_),t.bufferData(f,d,h),c.onUploadCallback();let x;if(d instanceof Float32Array)x=t.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)x=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=t.SHORT;else if(d instanceof Uint32Array)x=t.UNSIGNED_INT;else if(d instanceof Int32Array)x=t.INT;else if(d instanceof Int8Array)x=t.BYTE;else if(d instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function a(c,f,d){const h=f.array,m=f._updateRange,_=f.updateRanges;if(t.bindBuffer(d,c),m.count===-1&&_.length===0&&t.bufferSubData(d,0,h),_.length!==0){for(let x=0,p=_.length;x<p;x++){const u=_[x];n?t.bufferSubData(d,u.start*h.BYTES_PER_ELEMENT,h,u.start,u.count):t.bufferSubData(d,u.start*h.BYTES_PER_ELEMENT,h.subarray(u.start,u.start+u.count))}f.clearUpdateRanges()}m.count!==-1&&(n?t.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):t.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),f.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f&&(t.deleteBuffer(f.buffer),i.delete(c))}function l(c,f){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);if(d===void 0)i.set(c,r(c,f));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,c,f),d.version=c.version}}return{get:s,remove:o,update:l}}class cp extends Cn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const a=e/2,s=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,f=l+1,d=e/o,h=n/l,m=[],_=[],x=[],p=[];for(let u=0;u<f;u++){const g=u*h-s;for(let v=0;v<c;v++){const S=v*d-a;_.push(S,-g,0),x.push(0,0,1),p.push(v/o),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<o;g++){const v=g+c*u,S=g+c*(u+1),R=g+1+c*(u+1),T=g+1+c*u;m.push(v,S,T),m.push(S,R,T)}this.setIndex(m),this.setAttribute("position",new Yt(_,3)),this.setAttribute("normal",new Yt(x,3)),this.setAttribute("uv",new Yt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cp(e.width,e.height,e.widthSegments,e.heightSegments)}}var CR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,PR=`#ifdef USE_ALPHAHASH
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
#endif`,LR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,NR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,DR=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,IR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,UR=`#ifdef USE_AOMAP
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
#endif`,OR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,FR=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,kR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,BR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,HR=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,GR=`#ifdef USE_IRIDESCENCE
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
#endif`,VR=`#ifdef USE_BUMPMAP
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
#endif`,WR=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,jR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,XR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$R=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,YR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,KR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ZR=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,QR=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,JR=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,eC=`vec3 transformedNormal = objectNormal;
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
#endif`,tC=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nC=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iC=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,aC="gl_FragColor = linearToOutputTexel( gl_FragColor );",sC=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,oC=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,lC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cC=`#ifdef USE_ENVMAP
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
#endif`,uC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fC=`#ifdef USE_ENVMAP
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
#endif`,dC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gC=`#ifdef USE_GRADIENTMAP
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
}`,vC=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,_C=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,SC=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,EC=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,MC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,TC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,AC=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,RC=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,CC=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,PC=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,LC=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,NC=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,DC=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IC=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,UC=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,OC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,FC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,BC=`#if defined( USE_POINTS_UV )
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
#endif`,zC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,HC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,GC=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,VC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,WC=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,jC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,XC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$C=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,YC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ZC=`#ifdef USE_NORMALMAP
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
#endif`,QC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,JC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iP=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,rP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,aP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,oP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uP=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,fP=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,dP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,hP=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,pP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mP=`#ifdef USE_SKINNING
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
#endif`,gP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vP=`#ifdef USE_SKINNING
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
#endif`,_P=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,SP=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,EP=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,MP=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,TP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const RP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,CP=`uniform sampler2D t2D;
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
}`,PP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LP=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IP=`#include <common>
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
}`,UP=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,OP=`#define DISTANCE
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
}`,FP=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,kP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,BP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zP=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,HP=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,GP=`#include <common>
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
}`,VP=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,WP=`#define LAMBERT
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
}`,jP=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,XP=`#define MATCAP
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
}`,$P=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,YP=`#define NORMAL
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
}`,qP=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,KP=`#define PHONG
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
}`,ZP=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,QP=`#define STANDARD
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
}`,JP=`#define STANDARD
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
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,e2=`#define TOON
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
}`,t2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,n2=`uniform float size;
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
}`,i2=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,r2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,a2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,s2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,o2=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ge={alphahash_fragment:CR,alphahash_pars_fragment:PR,alphamap_fragment:LR,alphamap_pars_fragment:NR,alphatest_fragment:DR,alphatest_pars_fragment:IR,aomap_fragment:UR,aomap_pars_fragment:OR,batching_pars_vertex:FR,batching_vertex:kR,begin_vertex:BR,beginnormal_vertex:zR,bsdfs:HR,iridescence_fragment:GR,bumpmap_pars_fragment:VR,clipping_planes_fragment:WR,clipping_planes_pars_fragment:jR,clipping_planes_pars_vertex:XR,clipping_planes_vertex:$R,color_fragment:YR,color_pars_fragment:qR,color_pars_vertex:KR,color_vertex:ZR,common:QR,cube_uv_reflection_fragment:JR,defaultnormal_vertex:eC,displacementmap_pars_vertex:tC,displacementmap_vertex:nC,emissivemap_fragment:iC,emissivemap_pars_fragment:rC,colorspace_fragment:aC,colorspace_pars_fragment:sC,envmap_fragment:oC,envmap_common_pars_fragment:lC,envmap_pars_fragment:cC,envmap_pars_vertex:uC,envmap_physical_pars_fragment:EC,envmap_vertex:fC,fog_vertex:dC,fog_pars_vertex:hC,fog_fragment:pC,fog_pars_fragment:mC,gradientmap_pars_fragment:gC,lightmap_fragment:vC,lightmap_pars_fragment:_C,lights_lambert_fragment:xC,lights_lambert_pars_fragment:yC,lights_pars_begin:SC,lights_toon_fragment:MC,lights_toon_pars_fragment:TC,lights_phong_fragment:bC,lights_phong_pars_fragment:wC,lights_physical_fragment:AC,lights_physical_pars_fragment:RC,lights_fragment_begin:CC,lights_fragment_maps:PC,lights_fragment_end:LC,logdepthbuf_fragment:NC,logdepthbuf_pars_fragment:DC,logdepthbuf_pars_vertex:IC,logdepthbuf_vertex:UC,map_fragment:OC,map_pars_fragment:FC,map_particle_fragment:kC,map_particle_pars_fragment:BC,metalnessmap_fragment:zC,metalnessmap_pars_fragment:HC,morphcolor_vertex:GC,morphnormal_vertex:VC,morphtarget_pars_vertex:WC,morphtarget_vertex:jC,normal_fragment_begin:XC,normal_fragment_maps:$C,normal_pars_fragment:YC,normal_pars_vertex:qC,normal_vertex:KC,normalmap_pars_fragment:ZC,clearcoat_normal_fragment_begin:QC,clearcoat_normal_fragment_maps:JC,clearcoat_pars_fragment:eP,iridescence_pars_fragment:tP,opaque_fragment:nP,packing:iP,premultiplied_alpha_fragment:rP,project_vertex:aP,dithering_fragment:sP,dithering_pars_fragment:oP,roughnessmap_fragment:lP,roughnessmap_pars_fragment:cP,shadowmap_pars_fragment:uP,shadowmap_pars_vertex:fP,shadowmap_vertex:dP,shadowmask_pars_fragment:hP,skinbase_vertex:pP,skinning_pars_vertex:mP,skinning_vertex:gP,skinnormal_vertex:vP,specularmap_fragment:_P,specularmap_pars_fragment:xP,tonemapping_fragment:yP,tonemapping_pars_fragment:SP,transmission_fragment:EP,transmission_pars_fragment:MP,uv_pars_fragment:TP,uv_pars_vertex:bP,uv_vertex:wP,worldpos_vertex:AP,background_vert:RP,background_frag:CP,backgroundCube_vert:PP,backgroundCube_frag:LP,cube_vert:NP,cube_frag:DP,depth_vert:IP,depth_frag:UP,distanceRGBA_vert:OP,distanceRGBA_frag:FP,equirect_vert:kP,equirect_frag:BP,linedashed_vert:zP,linedashed_frag:HP,meshbasic_vert:GP,meshbasic_frag:VP,meshlambert_vert:WP,meshlambert_frag:jP,meshmatcap_vert:XP,meshmatcap_frag:$P,meshnormal_vert:YP,meshnormal_frag:qP,meshphong_vert:KP,meshphong_frag:ZP,meshphysical_vert:QP,meshphysical_frag:JP,meshtoon_vert:e2,meshtoon_frag:t2,points_vert:n2,points_frag:i2,shadow_vert:r2,shadow_frag:a2,sprite_vert:s2,sprite_frag:o2},oe={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},oi={basic:{uniforms:Qt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Qt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new je(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Qt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Qt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Qt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new je(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Qt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Qt([oe.points,oe.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Qt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Qt([oe.common,oe.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Qt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Qt([oe.sprite,oe.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Qt([oe.common,oe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Qt([oe.lights,oe.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};oi.physical={uniforms:Qt([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const vl={r:0,b:0,g:0};function l2(t,e,n,i,r,a,s){const o=new je(0);let l=a===!0?0:1,c,f,d=null,h=0,m=null;function _(p,u){let g=!1,v=u.isScene===!0?u.background:null;v&&v.isTexture&&(v=(u.backgroundBlurriness>0?n:e).get(v)),v===null?x(o,l):v&&v.isColor&&(x(v,1),g=!0);const S=t.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||g)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Xc)?(f===void 0&&(f=new Mn(new To(1,1,1),new jr({name:"BackgroundCubeMaterial",uniforms:as(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(R,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=v,f.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,f.material.toneMapped=et.getTransfer(v.colorSpace)!==ct,(d!==v||h!==v.version||m!==t.toneMapping)&&(f.material.needsUpdate=!0,d=v,h=v.version,m=t.toneMapping),f.layers.enableAll(),p.unshift(f,f.geometry,f.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Mn(new cp(2,2),new jr({name:"BackgroundMaterial",uniforms:as(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:pr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=et.getTransfer(v.colorSpace)!==ct,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||h!==v.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,d=v,h=v.version,m=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function x(p,u){p.getRGB(vl,Dy(t)),i.buffers.color.setClear(vl.r,vl.g,vl.b,u,s)}return{getClearColor:function(){return o},setClearColor:function(p,u=1){o.set(p),l=u,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,x(o,l)},render:_}}function c2(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||a!==null,o={},l=p(null);let c=l,f=!1;function d(D,V,X,q,I){let B=!1;if(s){const H=x(q,X,V);c!==H&&(c=H,m(c.object)),B=u(D,q,X,I),B&&g(D,q,X,I)}else{const H=V.wireframe===!0;(c.geometry!==q.id||c.program!==X.id||c.wireframe!==H)&&(c.geometry=q.id,c.program=X.id,c.wireframe=H,B=!0)}I!==null&&n.update(I,t.ELEMENT_ARRAY_BUFFER),(B||f)&&(f=!1,N(D,V,X,q),I!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(I).buffer))}function h(){return i.isWebGL2?t.createVertexArray():a.createVertexArrayOES()}function m(D){return i.isWebGL2?t.bindVertexArray(D):a.bindVertexArrayOES(D)}function _(D){return i.isWebGL2?t.deleteVertexArray(D):a.deleteVertexArrayOES(D)}function x(D,V,X){const q=X.wireframe===!0;let I=o[D.id];I===void 0&&(I={},o[D.id]=I);let B=I[V.id];B===void 0&&(B={},I[V.id]=B);let H=B[q];return H===void 0&&(H=p(h()),B[q]=H),H}function p(D){const V=[],X=[],q=[];for(let I=0;I<r;I++)V[I]=0,X[I]=0,q[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:X,attributeDivisors:q,object:D,attributes:{},index:null}}function u(D,V,X,q){const I=c.attributes,B=V.attributes;let H=0;const K=X.getAttributes();for(const Q in K)if(K[Q].location>=0){const Y=I[Q];let re=B[Q];if(re===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(re=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(re=D.instanceColor)),Y===void 0||Y.attribute!==re||re&&Y.data!==re.data)return!0;H++}return c.attributesNum!==H||c.index!==q}function g(D,V,X,q){const I={},B=V.attributes;let H=0;const K=X.getAttributes();for(const Q in K)if(K[Q].location>=0){let Y=B[Q];Y===void 0&&(Q==="instanceMatrix"&&D.instanceMatrix&&(Y=D.instanceMatrix),Q==="instanceColor"&&D.instanceColor&&(Y=D.instanceColor));const re={};re.attribute=Y,Y&&Y.data&&(re.data=Y.data),I[Q]=re,H++}c.attributes=I,c.attributesNum=H,c.index=q}function v(){const D=c.newAttributes;for(let V=0,X=D.length;V<X;V++)D[V]=0}function S(D){R(D,0)}function R(D,V){const X=c.newAttributes,q=c.enabledAttributes,I=c.attributeDivisors;X[D]=1,q[D]===0&&(t.enableVertexAttribArray(D),q[D]=1),I[D]!==V&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,V),I[D]=V)}function T(){const D=c.newAttributes,V=c.enabledAttributes;for(let X=0,q=V.length;X<q;X++)V[X]!==D[X]&&(t.disableVertexAttribArray(X),V[X]=0)}function w(D,V,X,q,I,B,H){H===!0?t.vertexAttribIPointer(D,V,X,I,B):t.vertexAttribPointer(D,V,X,q,I,B)}function N(D,V,X,q){if(i.isWebGL2===!1&&(D.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const I=q.attributes,B=X.getAttributes(),H=V.defaultAttributeValues;for(const K in B){const Q=B[K];if(Q.location>=0){let F=I[K];if(F===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(F=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(F=D.instanceColor)),F!==void 0){const Y=F.normalized,re=F.itemSize,ae=n.get(F);if(ae===void 0)continue;const de=ae.buffer,Ee=ae.type,Ce=ae.bytesPerElement,ye=i.isWebGL2===!0&&(Ee===t.INT||Ee===t.UNSIGNED_INT||F.gpuType===py);if(F.isInterleavedBufferAttribute){const Ve=F.data,z=Ve.stride,It=F.offset;if(Ve.isInstancedInterleavedBuffer){for(let Me=0;Me<Q.locationSize;Me++)R(Q.location+Me,Ve.meshPerAttribute);D.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Ve.meshPerAttribute*Ve.count)}else for(let Me=0;Me<Q.locationSize;Me++)S(Q.location+Me);t.bindBuffer(t.ARRAY_BUFFER,de);for(let Me=0;Me<Q.locationSize;Me++)w(Q.location+Me,re/Q.locationSize,Ee,Y,z*Ce,(It+re/Q.locationSize*Me)*Ce,ye)}else{if(F.isInstancedBufferAttribute){for(let Ve=0;Ve<Q.locationSize;Ve++)R(Q.location+Ve,F.meshPerAttribute);D.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let Ve=0;Ve<Q.locationSize;Ve++)S(Q.location+Ve);t.bindBuffer(t.ARRAY_BUFFER,de);for(let Ve=0;Ve<Q.locationSize;Ve++)w(Q.location+Ve,re/Q.locationSize,Ee,Y,re*Ce,re/Q.locationSize*Ve*Ce,ye)}}else if(H!==void 0){const Y=H[K];if(Y!==void 0)switch(Y.length){case 2:t.vertexAttrib2fv(Q.location,Y);break;case 3:t.vertexAttrib3fv(Q.location,Y);break;case 4:t.vertexAttrib4fv(Q.location,Y);break;default:t.vertexAttrib1fv(Q.location,Y)}}}}T()}function E(){$();for(const D in o){const V=o[D];for(const X in V){const q=V[X];for(const I in q)_(q[I].object),delete q[I];delete V[X]}delete o[D]}}function b(D){if(o[D.id]===void 0)return;const V=o[D.id];for(const X in V){const q=V[X];for(const I in q)_(q[I].object),delete q[I];delete V[X]}delete o[D.id]}function k(D){for(const V in o){const X=o[V];if(X[D.id]===void 0)continue;const q=X[D.id];for(const I in q)_(q[I].object),delete q[I];delete X[D.id]}}function $(){Z(),f=!0,c!==l&&(c=l,m(c.object))}function Z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:$,resetDefaultState:Z,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfProgram:k,initAttributes:v,enableAttribute:S,disableUnusedAttributes:T}}function u2(t,e,n,i){const r=i.isWebGL2;let a;function s(f){a=f}function o(f,d){t.drawArrays(a,f,d),n.update(d,a,1)}function l(f,d,h){if(h===0)return;let m,_;if(r)m=t,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](a,f,d,h),n.update(d,a,h)}function c(f,d,h){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<h;_++)this.render(f[_],d[_]);else{m.multiDrawArraysWEBGL(a,f,0,d,0,h);let _=0;for(let x=0;x<h;x++)_+=d[x];n.update(_,a,1)}}this.setMode=s,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function f2(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=n.precision!==void 0?n.precision:"highp";const l=a(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=s||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,S=s||e.has("OES_texture_float"),R=v&&S,T=s?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:a,precision:o,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:g,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:R,maxSamples:T}}function d2(t){const e=this;let n=null,i=0,r=!1,a=!1;const s=new Ar,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||i!==0||r;return r=h,i=d.length,m},this.beginShadows=function(){a=!0,f(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,m){const _=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,u=t.get(d);if(!r||_===null||_.length===0||a&&!p)a?f(null):c();else{const g=a?0:i,v=g*4;let S=u.clippingState||null;l.value=S,S=f(_,h,v,m);for(let R=0;R!==v;++R)S[R]=n[R];u.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,m,_){const x=d!==null?d.length:0;let p=null;if(x!==0){if(p=l.value,_!==!0||p===null){const u=m+x*4,g=h.matrixWorldInverse;o.getNormalMatrix(g),(p===null||p.length<u)&&(p=new Float32Array(u));for(let v=0,S=m;v!==x;++v,S+=4)s.copy(d[v]).applyMatrix4(g,o),s.normal.toArray(p,S),p[S+3]=s.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function h2(t){let e=new WeakMap;function n(s,o){return o===Gd?s.mapping=ns:o===Vd&&(s.mapping=is),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===Gd||o===Vd)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new bR(l.height/2);return c.fromEquirectangularTexture(t,s),e.set(s,c),s.addEventListener("dispose",r),n(c.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class p2 extends Iy{constructor(e=-1,n=1,i=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,s=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ia=4,Pv=[.125,.215,.35,.446,.526,.582],Pr=20,hf=new p2,Lv=new je;let pf=null,mf=0,gf=0;const Rr=(1+Math.sqrt(5))/2,va=1/Rr,Nv=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,Rr,va),new U(0,Rr,-va),new U(va,0,Rr),new U(-va,0,Rr),new U(Rr,va,0),new U(-Rr,va,0)];class Dv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){pf=this._renderer.getRenderTarget(),mf=this._renderer.getActiveCubeFace(),gf=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),n>0&&this._blur(a,0,0,n),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ov(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(pf,mf,gf),e.scissorTest=!1,_l(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ns||e.mapping===is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pf=this._renderer.getRenderTarget(),mf=this._renderer.getActiveCubeFace(),gf=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:mo,format:Zn,colorSpace:Li,depthBuffer:!1},r=Iv(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Iv(e,n,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=m2(a)),this._blurMaterial=g2(a,e,n)}return r}_compileMaterial(e){const n=new Mn(this._lodPlanes[0],e);this._renderer.compile(n,hf)}_sceneToCubeUV(e,n,i,r){const o=new cn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Lv),f.toneMapping=cr,f.autoClear=!1;const m=new Xa({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),_=new Mn(new To,m);let x=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(Lv),x=!0);for(let u=0;u<6;u++){const g=u%3;g===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):g===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const v=this._cubeSize;_l(r,g*v,u>2?v:0,v,v),f.setRenderTarget(r),x&&f.render(_,o),f.render(e,o)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ns||e.mapping===is;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ov()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uv());const a=r?this._cubemapMaterial:this._equirectMaterial,s=new Mn(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;_l(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,hf)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),s=Nv[(r-1)%Nv.length];this._blur(e,r-1,r,a,s)}n.autoClear=i}_blur(e,n,i,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",a),this._halfBlur(s,e,i,i,r,"longitudinal",a)}_halfBlur(e,n,i,r,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new Mn(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*Pr-1),x=a/_,p=isFinite(a)?1+Math.floor(f*x):Pr;p>Pr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Pr}`);const u=[];let g=0;for(let w=0;w<Pr;++w){const N=w/x,E=Math.exp(-N*N/2);u.push(E),w===0?g+=E:w<p&&(g+=2*E)}for(let w=0;w<u.length;w++)u[w]=u[w]/g;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=u,h.latitudinal.value=s==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:v}=this;h.dTheta.value=_,h.mipInt.value=v-i;const S=this._sizeLods[r],R=3*S*(r>v-Ia?r-v+Ia:0),T=4*(this._cubeSize-S);_l(n,R,T,3*S,2*S),l.setRenderTarget(n),l.render(d,hf)}}function m2(t){const e=[],n=[],i=[];let r=t;const a=t-Ia+1+Pv.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);n.push(o);let l=1/o;s>t-Ia?l=Pv[s-t+Ia-1]:s===0&&(l=0),i.push(l);const c=1/(o-2),f=-c,d=1+c,h=[f,f,d,f,d,d,f,f,d,d,f,d],m=6,_=6,x=3,p=2,u=1,g=new Float32Array(x*_*m),v=new Float32Array(p*_*m),S=new Float32Array(u*_*m);for(let T=0;T<m;T++){const w=T%3*2/3-1,N=T>2?0:-1,E=[w,N,0,w+2/3,N,0,w+2/3,N+1,0,w,N,0,w+2/3,N+1,0,w,N+1,0];g.set(E,x*_*T),v.set(h,p*_*T);const b=[T,T,T,T,T,T];S.set(b,u*_*T)}const R=new Cn;R.setAttribute("position",new bn(g,x)),R.setAttribute("uv",new bn(v,p)),R.setAttribute("faceIndex",new bn(S,u)),e.push(R),r>Ia&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Iv(t,e,n){const i=new Wr(t,e,n);return i.texture.mapping=Xc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _l(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function g2(t,e,n){const i=new Float32Array(Pr),r=new U(0,1,0);return new jr({name:"SphericalGaussianBlur",defines:{n:Pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:up(),fragmentShader:`

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
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Uv(){return new jr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:up(),fragmentShader:`

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
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Ov(){return new jr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:up(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function up(){return`

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
	`}function v2(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Gd||l===Vd,f=l===ns||l===is;if(c||f)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return n===null&&(n=new Dv(t)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||f&&d&&r(d)){n===null&&(n=new Dv(t));const h=c?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",a),h.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let f=0;f<c;f++)o[f]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function _2(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function x2(t,e,n,i){const r={},a=new WeakMap;function s(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const x=h.morphAttributes[_];for(let p=0,u=x.length;p<u;p++)e.remove(x[p])}h.removeEventListener("dispose",s),delete r[h.id];const m=a.get(h);m&&(e.remove(m),a.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(d,h){return r[h.id]===!0||(h.addEventListener("dispose",s),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const m=d.morphAttributes;for(const _ in m){const x=m[_];for(let p=0,u=x.length;p<u;p++)e.update(x[p],t.ARRAY_BUFFER)}}function c(d){const h=[],m=d.index,_=d.attributes.position;let x=0;if(m!==null){const g=m.array;x=m.version;for(let v=0,S=g.length;v<S;v+=3){const R=g[v+0],T=g[v+1],w=g[v+2];h.push(R,T,T,w,w,R)}}else if(_!==void 0){const g=_.array;x=_.version;for(let v=0,S=g.length/3-1;v<S;v+=3){const R=v+0,T=v+1,w=v+2;h.push(R,T,T,w,w,R)}}else return;const p=new(Ty(h)?Ny:Ly)(h,1);p.version=x;const u=a.get(d);u&&e.remove(u),a.set(d,p)}function f(d){const h=a.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&c(d)}else c(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:f}}function y2(t,e,n,i){const r=i.isWebGL2;let a;function s(m){a=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function f(m,_){t.drawElements(a,_,o,m*l),n.update(_,a,1)}function d(m,_,x){if(x===0)return;let p,u;if(r)p=t,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](a,_,o,m*l,x),n.update(_,a,x)}function h(m,_,x){if(x===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<x;u++)this.render(m[u]/l,_[u]);else{p.multiDrawElementsWEBGL(a,_,0,o,m,0,x);let u=0;for(let g=0;g<x;g++)u+=_[g];n.update(u,a,1)}}this.setMode=s,this.setIndex=c,this.render=f,this.renderInstances=d,this.renderMultiDraw=h}function S2(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=o*(a/3);break;case t.LINES:n.lines+=o*(a/2);break;case t.LINE_STRIP:n.lines+=o*(a-1);break;case t.LINE_LOOP:n.lines+=o*a;break;case t.POINTS:n.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function E2(t,e){return t[0]-e[0]}function M2(t,e){return Math.abs(e[1])-Math.abs(t[1])}function T2(t,e,n){const i={},r=new Float32Array(8),a=new WeakMap,s=new ht,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,f,d){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,x=_!==void 0?_.length:0;let p=a.get(f);if(p===void 0||p.count!==x){let V=function(){Z.dispose(),a.delete(f),f.removeEventListener("dispose",V)};var m=V;p!==void 0&&p.texture.dispose();const v=f.morphAttributes.position!==void 0,S=f.morphAttributes.normal!==void 0,R=f.morphAttributes.color!==void 0,T=f.morphAttributes.position||[],w=f.morphAttributes.normal||[],N=f.morphAttributes.color||[];let E=0;v===!0&&(E=1),S===!0&&(E=2),R===!0&&(E=3);let b=f.attributes.position.count*E,k=1;b>e.maxTextureSize&&(k=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const $=new Float32Array(b*k*4*x),Z=new Ay($,b,k,x);Z.type=Ji,Z.needsUpdate=!0;const D=E*4;for(let X=0;X<x;X++){const q=T[X],I=w[X],B=N[X],H=b*k*4*X;for(let K=0;K<q.count;K++){const Q=K*D;v===!0&&(s.fromBufferAttribute(q,K),$[H+Q+0]=s.x,$[H+Q+1]=s.y,$[H+Q+2]=s.z,$[H+Q+3]=0),S===!0&&(s.fromBufferAttribute(I,K),$[H+Q+4]=s.x,$[H+Q+5]=s.y,$[H+Q+6]=s.z,$[H+Q+7]=0),R===!0&&(s.fromBufferAttribute(B,K),$[H+Q+8]=s.x,$[H+Q+9]=s.y,$[H+Q+10]=s.z,$[H+Q+11]=B.itemSize===4?s.w:1)}}p={count:x,texture:Z,size:new Fe(b,k)},a.set(f,p),f.addEventListener("dispose",V)}let u=0;for(let v=0;v<h.length;v++)u+=h[v];const g=f.morphTargetsRelative?1:1-u;d.getUniforms().setValue(t,"morphTargetBaseInfluence",g),d.getUniforms().setValue(t,"morphTargetInfluences",h),d.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const _=h===void 0?0:h.length;let x=i[f.id];if(x===void 0||x.length!==_){x=[];for(let S=0;S<_;S++)x[S]=[S,0];i[f.id]=x}for(let S=0;S<_;S++){const R=x[S];R[0]=S,R[1]=h[S]}x.sort(M2);for(let S=0;S<8;S++)S<_&&x[S][1]?(o[S][0]=x[S][0],o[S][1]=x[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(E2);const p=f.morphAttributes.position,u=f.morphAttributes.normal;let g=0;for(let S=0;S<8;S++){const R=o[S],T=R[0],w=R[1];T!==Number.MAX_SAFE_INTEGER&&w?(p&&f.getAttribute("morphTarget"+S)!==p[T]&&f.setAttribute("morphTarget"+S,p[T]),u&&f.getAttribute("morphNormal"+S)!==u[T]&&f.setAttribute("morphNormal"+S,u[T]),r[S]=w,g+=w):(p&&f.hasAttribute("morphTarget"+S)===!0&&f.deleteAttribute("morphTarget"+S),u&&f.hasAttribute("morphNormal"+S)===!0&&f.deleteAttribute("morphNormal"+S),r[S]=0)}const v=f.morphTargetsRelative?1:1-g;d.getUniforms().setValue(t,"morphTargetBaseInfluence",v),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function b2(t,e,n,i){let r=new WeakMap;function a(l){const c=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function s(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:a,dispose:s}}class Fy extends mn{constructor(e,n,i,r,a,s,o,l,c,f){if(f=f!==void 0?f:Fr,f!==Fr&&f!==rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Fr&&(i=Qi),i===void 0&&f===rs&&(i=Or),super(null,r,a,s,o,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const ky=new mn,By=new Fy(1,1);By.compareFunction=My;const zy=new Ay,Hy=new lR,Gy=new Uy,Fv=[],kv=[],Bv=new Float32Array(16),zv=new Float32Array(9),Hv=new Float32Array(4);function us(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let a=Fv[r];if(a===void 0&&(a=new Float32Array(r),Fv[r]=a),e!==0){i.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=n,t[s].toArray(a,o)}return a}function Rt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ct(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Kc(t,e){let n=kv[e];n===void 0&&(n=new Int32Array(e),kv[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function w2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function A2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2fv(this.addr,e),Ct(n,e)}}function R2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Rt(n,e))return;t.uniform3fv(this.addr,e),Ct(n,e)}}function C2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4fv(this.addr,e),Ct(n,e)}}function P2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ct(n,e)}else{if(Rt(n,i))return;Hv.set(i),t.uniformMatrix2fv(this.addr,!1,Hv),Ct(n,i)}}function L2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ct(n,e)}else{if(Rt(n,i))return;zv.set(i),t.uniformMatrix3fv(this.addr,!1,zv),Ct(n,i)}}function N2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ct(n,e)}else{if(Rt(n,i))return;Bv.set(i),t.uniformMatrix4fv(this.addr,!1,Bv),Ct(n,i)}}function D2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function I2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2iv(this.addr,e),Ct(n,e)}}function U2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3iv(this.addr,e),Ct(n,e)}}function O2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4iv(this.addr,e),Ct(n,e)}}function F2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function k2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2uiv(this.addr,e),Ct(n,e)}}function B2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3uiv(this.addr,e),Ct(n,e)}}function z2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4uiv(this.addr,e),Ct(n,e)}}function H2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const a=this.type===t.SAMPLER_2D_SHADOW?By:ky;n.setTexture2D(e||a,r)}function G2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Hy,r)}function V2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Gy,r)}function W2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||zy,r)}function j2(t){switch(t){case 5126:return w2;case 35664:return A2;case 35665:return R2;case 35666:return C2;case 35674:return P2;case 35675:return L2;case 35676:return N2;case 5124:case 35670:return D2;case 35667:case 35671:return I2;case 35668:case 35672:return U2;case 35669:case 35673:return O2;case 5125:return F2;case 36294:return k2;case 36295:return B2;case 36296:return z2;case 35678:case 36198:case 36298:case 36306:case 35682:return H2;case 35679:case 36299:case 36307:return G2;case 35680:case 36300:case 36308:case 36293:return V2;case 36289:case 36303:case 36311:case 36292:return W2}}function X2(t,e){t.uniform1fv(this.addr,e)}function $2(t,e){const n=us(e,this.size,2);t.uniform2fv(this.addr,n)}function Y2(t,e){const n=us(e,this.size,3);t.uniform3fv(this.addr,n)}function q2(t,e){const n=us(e,this.size,4);t.uniform4fv(this.addr,n)}function K2(t,e){const n=us(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Z2(t,e){const n=us(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Q2(t,e){const n=us(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function J2(t,e){t.uniform1iv(this.addr,e)}function eL(t,e){t.uniform2iv(this.addr,e)}function tL(t,e){t.uniform3iv(this.addr,e)}function nL(t,e){t.uniform4iv(this.addr,e)}function iL(t,e){t.uniform1uiv(this.addr,e)}function rL(t,e){t.uniform2uiv(this.addr,e)}function aL(t,e){t.uniform3uiv(this.addr,e)}function sL(t,e){t.uniform4uiv(this.addr,e)}function oL(t,e,n){const i=this.cache,r=e.length,a=Kc(n,r);Rt(i,a)||(t.uniform1iv(this.addr,a),Ct(i,a));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||ky,a[s])}function lL(t,e,n){const i=this.cache,r=e.length,a=Kc(n,r);Rt(i,a)||(t.uniform1iv(this.addr,a),Ct(i,a));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||Hy,a[s])}function cL(t,e,n){const i=this.cache,r=e.length,a=Kc(n,r);Rt(i,a)||(t.uniform1iv(this.addr,a),Ct(i,a));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||Gy,a[s])}function uL(t,e,n){const i=this.cache,r=e.length,a=Kc(n,r);Rt(i,a)||(t.uniform1iv(this.addr,a),Ct(i,a));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||zy,a[s])}function fL(t){switch(t){case 5126:return X2;case 35664:return $2;case 35665:return Y2;case 35666:return q2;case 35674:return K2;case 35675:return Z2;case 35676:return Q2;case 5124:case 35670:return J2;case 35667:case 35671:return eL;case 35668:case 35672:return tL;case 35669:case 35673:return nL;case 5125:return iL;case 36294:return rL;case 36295:return aL;case 36296:return sL;case 35678:case 36198:case 36298:case 36306:case 35682:return oL;case 35679:case 36299:case 36307:return lL;case 35680:case 36300:case 36308:case 36293:return cL;case 36289:case 36303:case 36311:case 36292:return uL}}class dL{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=j2(n.type)}}class hL{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=fL(n.type)}}class pL{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,n[o.id],i)}}}const vf=/(\w+)(\])?(\[|\.)?/g;function Gv(t,e){t.seq.push(e),t.map[e.id]=e}function mL(t,e,n){const i=t.name,r=i.length;for(vf.lastIndex=0;;){const a=vf.exec(i),s=vf.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===r){Gv(n,c===void 0?new dL(o,t,e):new hL(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new pL(o),Gv(n,d)),n=d}}}class Gl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(n,r),s=e.getUniformLocation(n,a.name);mL(a,s,this)}}setValue(e,n,i,r){const a=this.map[n];a!==void 0&&a.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let a=0,s=n.length;a!==s;++a){const o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function Vv(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const gL=37297;let vL=0;function _L(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,n.length);for(let s=r;s<a;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${n[s]}`)}return i.join(`
`)}function xL(t){const e=et.getPrimaries(et.workingColorSpace),n=et.getPrimaries(t);let i;switch(e===n?i="":e===yc&&n===xc?i="LinearDisplayP3ToLinearSRGB":e===xc&&n===yc&&(i="LinearSRGBToLinearDisplayP3"),t){case Li:case $c:return[i,"LinearTransferOETF"];case kt:case op:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Wv(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const s=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+_L(t.getShaderSource(e),s)}else return r}function yL(t,e){const n=xL(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function SL(t,e){let n;switch(e){case LA:n="Linear";break;case NA:n="Reinhard";break;case DA:n="OptimizedCineon";break;case IA:n="ACESFilmic";break;case OA:n="AgX";break;case UA:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function EL(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ua).join(`
`)}function ML(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ua).join(`
`)}function TL(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function bL(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=t.getActiveAttrib(e,r),s=a.name;let o=1;a.type===t.FLOAT_MAT2&&(o=2),a.type===t.FLOAT_MAT3&&(o=3),a.type===t.FLOAT_MAT4&&(o=4),n[s]={type:a.type,location:t.getAttribLocation(e,s),locationSize:o}}return n}function Ua(t){return t!==""}function jv(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wL=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kd(t){return t.replace(wL,RL)}const AL=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function RL(t,e){let n=Ge[e];if(n===void 0){const i=AL.get(e);if(i!==void 0)n=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Kd(n)}const CL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $v(t){return t.replace(CL,PL)}function PL(t,e,n,i){let r="";for(let a=parseInt(e);a<parseInt(n);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Yv(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function LL(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===dy?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===aA?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===_i&&(e="SHADOWMAP_TYPE_VSM"),e}function NL(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ns:case is:e="ENVMAP_TYPE_CUBE";break;case Xc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function DL(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case is:e="ENVMAP_MODE_REFRACTION";break}return e}function IL(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case ap:e="ENVMAP_BLENDING_MULTIPLY";break;case CA:e="ENVMAP_BLENDING_MIX";break;case PA:e="ENVMAP_BLENDING_ADD";break}return e}function UL(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function OL(t,e,n,i){const r=t.getContext(),a=n.defines;let s=n.vertexShader,o=n.fragmentShader;const l=LL(n),c=NL(n),f=DL(n),d=IL(n),h=UL(n),m=n.isWebGL2?"":EL(n),_=ML(n),x=TL(a),p=r.createProgram();let u,g,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Ua).join(`
`),u.length>0&&(u+=`
`),g=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Ua).join(`
`),g.length>0&&(g+=`
`)):(u=[Yv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ua).join(`
`),g=[m,Yv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==cr?"#define TONE_MAPPING":"",n.toneMapping!==cr?Ge.tonemapping_pars_fragment:"",n.toneMapping!==cr?SL("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,yL("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ua).join(`
`)),s=Kd(s),s=jv(s,n),s=Xv(s,n),o=Kd(o),o=jv(o,n),o=Xv(o,n),s=$v(s),o=$v(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,u=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,g=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===dv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===dv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const S=v+u+s,R=v+g+o,T=Vv(r,r.VERTEX_SHADER,S),w=Vv(r,r.FRAGMENT_SHADER,R);r.attachShader(p,T),r.attachShader(p,w),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function N($){if(t.debug.checkShaderErrors){const Z=r.getProgramInfoLog(p).trim(),D=r.getShaderInfoLog(T).trim(),V=r.getShaderInfoLog(w).trim();let X=!0,q=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(X=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,p,T,w);else{const I=Wv(r,T,"vertex"),B=Wv(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+Z+`
`+I+`
`+B)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(D===""||V==="")&&(q=!1);q&&($.diagnostics={runnable:X,programLog:Z,vertexShader:{log:D,prefix:u},fragmentShader:{log:V,prefix:g}})}r.deleteShader(T),r.deleteShader(w),E=new Gl(r,p),b=bL(r,p)}let E;this.getUniforms=function(){return E===void 0&&N(this),E};let b;this.getAttributes=function(){return b===void 0&&N(this),b};let k=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=r.getProgramParameter(p,gL)),k},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=vL++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=T,this.fragmentShader=w,this}let FL=0;class kL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new BL(e),n.set(e,i)),i}}class BL{constructor(e){this.id=FL++,this.code=e,this.usedTimes=0}}function zL(t,e,n,i,r,a,s){const o=new Cy,l=new kL,c=[],f=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return E===0?"uv":`uv${E}`}function p(E,b,k,$,Z){const D=$.fog,V=Z.geometry,X=E.isMeshStandardMaterial?$.environment:null,q=(E.isMeshStandardMaterial?n:e).get(E.envMap||X),I=q&&q.mapping===Xc?q.image.height:null,B=_[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const H=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,K=H!==void 0?H.length:0;let Q=0;V.morphAttributes.position!==void 0&&(Q=1),V.morphAttributes.normal!==void 0&&(Q=2),V.morphAttributes.color!==void 0&&(Q=3);let F,Y,re,ae;if(B){const Ut=oi[B];F=Ut.vertexShader,Y=Ut.fragmentShader}else F=E.vertexShader,Y=E.fragmentShader,l.update(E),re=l.getVertexShaderID(E),ae=l.getFragmentShaderID(E);const de=t.getRenderTarget(),Ee=Z.isInstancedMesh===!0,Ce=Z.isBatchedMesh===!0,ye=!!E.map,Ve=!!E.matcap,z=!!q,It=!!E.aoMap,Me=!!E.lightMap,Ne=!!E.bumpMap,ve=!!E.normalMap,at=!!E.displacementMap,Ue=!!E.emissiveMap,C=!!E.metalnessMap,M=!!E.roughnessMap,W=E.anisotropy>0,te=E.clearcoat>0,ee=E.iridescence>0,ie=E.sheen>0,xe=E.transmission>0,fe=W&&!!E.anisotropyMap,ge=te&&!!E.clearcoatMap,we=te&&!!E.clearcoatNormalMap,ke=te&&!!E.clearcoatRoughnessMap,J=ee&&!!E.iridescenceMap,qe=ee&&!!E.iridescenceThicknessMap,ze=ie&&!!E.sheenColorMap,Pe=ie&&!!E.sheenRoughnessMap,Se=!!E.specularMap,me=!!E.specularColorMap,Ie=!!E.specularIntensityMap,Ye=xe&&!!E.transmissionMap,st=xe&&!!E.thicknessMap,He=!!E.gradientMap,se=!!E.alphaMap,P=E.alphaTest>0,ce=!!E.alphaHash,ue=!!E.extensions,Ae=!!V.attributes.uv1,Te=!!V.attributes.uv2,Ke=!!V.attributes.uv3;let Je=cr;return E.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Je=t.toneMapping),{isWebGL2:f,shaderID:B,shaderType:E.type,shaderName:E.name,vertexShader:F,fragmentShader:Y,defines:E.defines,customVertexShaderID:re,customFragmentShaderID:ae,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Ce,instancing:Ee,instancingColor:Ee&&Z.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:de===null?t.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Li,map:ye,matcap:Ve,envMap:z,envMapMode:z&&q.mapping,envMapCubeUVHeight:I,aoMap:It,lightMap:Me,bumpMap:Ne,normalMap:ve,displacementMap:h&&at,emissiveMap:Ue,normalMapObjectSpace:ve&&E.normalMapType===YA,normalMapTangentSpace:ve&&E.normalMapType===Ey,metalnessMap:C,roughnessMap:M,anisotropy:W,anisotropyMap:fe,clearcoat:te,clearcoatMap:ge,clearcoatNormalMap:we,clearcoatRoughnessMap:ke,iridescence:ee,iridescenceMap:J,iridescenceThicknessMap:qe,sheen:ie,sheenColorMap:ze,sheenRoughnessMap:Pe,specularMap:Se,specularColorMap:me,specularIntensityMap:Ie,transmission:xe,transmissionMap:Ye,thicknessMap:st,gradientMap:He,opaque:E.transparent===!1&&E.blending===Wa,alphaMap:se,alphaTest:P,alphaHash:ce,combine:E.combine,mapUv:ye&&x(E.map.channel),aoMapUv:It&&x(E.aoMap.channel),lightMapUv:Me&&x(E.lightMap.channel),bumpMapUv:Ne&&x(E.bumpMap.channel),normalMapUv:ve&&x(E.normalMap.channel),displacementMapUv:at&&x(E.displacementMap.channel),emissiveMapUv:Ue&&x(E.emissiveMap.channel),metalnessMapUv:C&&x(E.metalnessMap.channel),roughnessMapUv:M&&x(E.roughnessMap.channel),anisotropyMapUv:fe&&x(E.anisotropyMap.channel),clearcoatMapUv:ge&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:we&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&x(E.sheenRoughnessMap.channel),specularMapUv:Se&&x(E.specularMap.channel),specularColorMapUv:me&&x(E.specularColorMap.channel),specularIntensityMapUv:Ie&&x(E.specularIntensityMap.channel),transmissionMapUv:Ye&&x(E.transmissionMap.channel),thicknessMapUv:st&&x(E.thicknessMap.channel),alphaMapUv:se&&x(E.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ve||W),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:Ae,vertexUv2s:Te,vertexUv3s:Ke,pointsUvs:Z.isPoints===!0&&!!V.attributes.uv&&(ye||se),fog:!!D,useFog:E.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:Z.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:Q,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&k.length>0,shadowMapType:t.shadowMap.type,toneMapping:Je,useLegacyLights:t._useLegacyLights,decodeVideoTexture:ye&&E.map.isVideoTexture===!0&&et.getTransfer(E.map.colorSpace)===ct,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Si,flipSided:E.side===pn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:ue&&E.extensions.derivatives===!0,extensionFragDepth:ue&&E.extensions.fragDepth===!0,extensionDrawBuffers:ue&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:ue&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ue&&E.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function u(E){const b=[];if(E.shaderID?b.push(E.shaderID):(b.push(E.customVertexShaderID),b.push(E.customFragmentShaderID)),E.defines!==void 0)for(const k in E.defines)b.push(k),b.push(E.defines[k]);return E.isRawShaderMaterial===!1&&(g(b,E),v(b,E),b.push(t.outputColorSpace)),b.push(E.customProgramCacheKey),b.join()}function g(E,b){E.push(b.precision),E.push(b.outputColorSpace),E.push(b.envMapMode),E.push(b.envMapCubeUVHeight),E.push(b.mapUv),E.push(b.alphaMapUv),E.push(b.lightMapUv),E.push(b.aoMapUv),E.push(b.bumpMapUv),E.push(b.normalMapUv),E.push(b.displacementMapUv),E.push(b.emissiveMapUv),E.push(b.metalnessMapUv),E.push(b.roughnessMapUv),E.push(b.anisotropyMapUv),E.push(b.clearcoatMapUv),E.push(b.clearcoatNormalMapUv),E.push(b.clearcoatRoughnessMapUv),E.push(b.iridescenceMapUv),E.push(b.iridescenceThicknessMapUv),E.push(b.sheenColorMapUv),E.push(b.sheenRoughnessMapUv),E.push(b.specularMapUv),E.push(b.specularColorMapUv),E.push(b.specularIntensityMapUv),E.push(b.transmissionMapUv),E.push(b.thicknessMapUv),E.push(b.combine),E.push(b.fogExp2),E.push(b.sizeAttenuation),E.push(b.morphTargetsCount),E.push(b.morphAttributeCount),E.push(b.numDirLights),E.push(b.numPointLights),E.push(b.numSpotLights),E.push(b.numSpotLightMaps),E.push(b.numHemiLights),E.push(b.numRectAreaLights),E.push(b.numDirLightShadows),E.push(b.numPointLightShadows),E.push(b.numSpotLightShadows),E.push(b.numSpotLightShadowsWithMaps),E.push(b.numLightProbes),E.push(b.shadowMapType),E.push(b.toneMapping),E.push(b.numClippingPlanes),E.push(b.numClipIntersection),E.push(b.depthPacking)}function v(E,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),E.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),E.push(o.mask)}function S(E){const b=_[E.type];let k;if(b){const $=oi[b];k=SR.clone($.uniforms)}else k=E.uniforms;return k}function R(E,b){let k;for(let $=0,Z=c.length;$<Z;$++){const D=c[$];if(D.cacheKey===b){k=D,++k.usedTimes;break}}return k===void 0&&(k=new OL(t,b,E,a),c.push(k)),k}function T(E){if(--E.usedTimes===0){const b=c.indexOf(E);c[b]=c[c.length-1],c.pop(),E.destroy()}}function w(E){l.remove(E)}function N(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:S,acquireProgram:R,releaseProgram:T,releaseShaderCache:w,programs:c,dispose:N}}function HL(){let t=new WeakMap;function e(a){let s=t.get(a);return s===void 0&&(s={},t.set(a,s)),s}function n(a){t.delete(a)}function i(a,s,o){t.get(a)[s]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function GL(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function qv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Kv(){const t=[];let e=0;const n=[],i=[],r=[];function a(){e=0,n.length=0,i.length=0,r.length=0}function s(d,h,m,_,x,p){let u=t[e];return u===void 0?(u={id:d.id,object:d,geometry:h,material:m,groupOrder:_,renderOrder:d.renderOrder,z:x,group:p},t[e]=u):(u.id=d.id,u.object=d,u.geometry=h,u.material=m,u.groupOrder=_,u.renderOrder=d.renderOrder,u.z=x,u.group=p),e++,u}function o(d,h,m,_,x,p){const u=s(d,h,m,_,x,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function l(d,h,m,_,x,p){const u=s(d,h,m,_,x,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function c(d,h){n.length>1&&n.sort(d||GL),i.length>1&&i.sort(h||qv),r.length>1&&r.sort(h||qv)}function f(){for(let d=e,h=t.length;d<h;d++){const m=t[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:a,push:o,unshift:l,finish:f,sort:c}}function VL(){let t=new WeakMap;function e(i,r){const a=t.get(i);let s;return a===void 0?(s=new Kv,t.set(i,[s])):r>=a.length?(s=new Kv,a.push(s)):s=a[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function WL(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new U,color:new je};break;case"SpotLight":n={position:new U,direction:new U,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new U,color:new je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new U,skyColor:new je,groundColor:new je};break;case"RectAreaLight":n={color:new je,position:new U,halfWidth:new U,halfHeight:new U};break}return t[e.id]=n,n}}}function jL(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let XL=0;function $L(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function YL(t,e){const n=new WL,i=jL(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new U);const a=new U,s=new xt,o=new xt;function l(f,d){let h=0,m=0,_=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let x=0,p=0,u=0,g=0,v=0,S=0,R=0,T=0,w=0,N=0,E=0;f.sort($L);const b=d===!0?Math.PI:1;for(let $=0,Z=f.length;$<Z;$++){const D=f[$],V=D.color,X=D.intensity,q=D.distance,I=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=V.r*X*b,m+=V.g*X*b,_+=V.b*X*b;else if(D.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(D.sh.coefficients[B],X);E++}else if(D.isDirectionalLight){const B=n.get(D);if(B.color.copy(D.color).multiplyScalar(D.intensity*b),D.castShadow){const H=D.shadow,K=i.get(D);K.shadowBias=H.bias,K.shadowNormalBias=H.normalBias,K.shadowRadius=H.radius,K.shadowMapSize=H.mapSize,r.directionalShadow[x]=K,r.directionalShadowMap[x]=I,r.directionalShadowMatrix[x]=D.shadow.matrix,S++}r.directional[x]=B,x++}else if(D.isSpotLight){const B=n.get(D);B.position.setFromMatrixPosition(D.matrixWorld),B.color.copy(V).multiplyScalar(X*b),B.distance=q,B.coneCos=Math.cos(D.angle),B.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),B.decay=D.decay,r.spot[u]=B;const H=D.shadow;if(D.map&&(r.spotLightMap[w]=D.map,w++,H.updateMatrices(D),D.castShadow&&N++),r.spotLightMatrix[u]=H.matrix,D.castShadow){const K=i.get(D);K.shadowBias=H.bias,K.shadowNormalBias=H.normalBias,K.shadowRadius=H.radius,K.shadowMapSize=H.mapSize,r.spotShadow[u]=K,r.spotShadowMap[u]=I,T++}u++}else if(D.isRectAreaLight){const B=n.get(D);B.color.copy(V).multiplyScalar(X),B.halfWidth.set(D.width*.5,0,0),B.halfHeight.set(0,D.height*.5,0),r.rectArea[g]=B,g++}else if(D.isPointLight){const B=n.get(D);if(B.color.copy(D.color).multiplyScalar(D.intensity*b),B.distance=D.distance,B.decay=D.decay,D.castShadow){const H=D.shadow,K=i.get(D);K.shadowBias=H.bias,K.shadowNormalBias=H.normalBias,K.shadowRadius=H.radius,K.shadowMapSize=H.mapSize,K.shadowCameraNear=H.camera.near,K.shadowCameraFar=H.camera.far,r.pointShadow[p]=K,r.pointShadowMap[p]=I,r.pointShadowMatrix[p]=D.shadow.matrix,R++}r.point[p]=B,p++}else if(D.isHemisphereLight){const B=n.get(D);B.skyColor.copy(D.color).multiplyScalar(X*b),B.groundColor.copy(D.groundColor).multiplyScalar(X*b),r.hemi[v]=B,v++}}g>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=_;const k=r.hash;(k.directionalLength!==x||k.pointLength!==p||k.spotLength!==u||k.rectAreaLength!==g||k.hemiLength!==v||k.numDirectionalShadows!==S||k.numPointShadows!==R||k.numSpotShadows!==T||k.numSpotMaps!==w||k.numLightProbes!==E)&&(r.directional.length=x,r.spot.length=u,r.rectArea.length=g,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=T+w-N,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=E,k.directionalLength=x,k.pointLength=p,k.spotLength=u,k.rectAreaLength=g,k.hemiLength=v,k.numDirectionalShadows=S,k.numPointShadows=R,k.numSpotShadows=T,k.numSpotMaps=w,k.numLightProbes=E,r.version=XL++)}function c(f,d){let h=0,m=0,_=0,x=0,p=0;const u=d.matrixWorldInverse;for(let g=0,v=f.length;g<v;g++){const S=f[g];if(S.isDirectionalLight){const R=r.directional[h];R.direction.setFromMatrixPosition(S.matrixWorld),a.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(u),h++}else if(S.isSpotLight){const R=r.spot[_];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(u),R.direction.setFromMatrixPosition(S.matrixWorld),a.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(u),_++}else if(S.isRectAreaLight){const R=r.rectArea[x];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(u),o.identity(),s.copy(S.matrixWorld),s.premultiply(u),o.extractRotation(s),R.halfWidth.set(S.width*.5,0,0),R.halfHeight.set(0,S.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),x++}else if(S.isPointLight){const R=r.point[m];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(u),m++}else if(S.isHemisphereLight){const R=r.hemi[p];R.direction.setFromMatrixPosition(S.matrixWorld),R.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:r}}function Zv(t,e){const n=new YL(t,e),i=[],r=[];function a(){i.length=0,r.length=0}function s(d){i.push(d)}function o(d){r.push(d)}function l(d){n.setup(i,d)}function c(d){n.setupView(i,d)}return{init:a,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:o}}function qL(t,e){let n=new WeakMap;function i(a,s=0){const o=n.get(a);let l;return o===void 0?(l=new Zv(t,e),n.set(a,[l])):s>=o.length?(l=new Zv(t,e),o.push(l)):l=o[s],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class KL extends Yr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=XA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ZL extends Yr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const QL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,JL=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function eN(t,e,n){let i=new lp;const r=new Fe,a=new Fe,s=new ht,o=new KL({depthPacking:$A}),l=new ZL,c={},f=n.maxTextureSize,d={[pr]:pn,[pn]:pr,[Si]:Si},h=new jr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:QL,fragmentShader:JL}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new Cn;_.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Mn(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dy;let u=this.type;this.render=function(T,w,N){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const E=t.getRenderTarget(),b=t.getActiveCubeFace(),k=t.getActiveMipmapLevel(),$=t.state;$.setBlending(lr),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const Z=u!==_i&&this.type===_i,D=u===_i&&this.type!==_i;for(let V=0,X=T.length;V<X;V++){const q=T[V],I=q.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const B=I.getFrameExtents();if(r.multiply(B),a.copy(I.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(a.x=Math.floor(f/B.x),r.x=a.x*B.x,I.mapSize.x=a.x),r.y>f&&(a.y=Math.floor(f/B.y),r.y=a.y*B.y,I.mapSize.y=a.y)),I.map===null||Z===!0||D===!0){const K=this.type!==_i?{minFilter:tn,magFilter:tn}:{};I.map!==null&&I.map.dispose(),I.map=new Wr(r.x,r.y,K),I.map.texture.name=q.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const H=I.getViewportCount();for(let K=0;K<H;K++){const Q=I.getViewport(K);s.set(a.x*Q.x,a.y*Q.y,a.x*Q.z,a.y*Q.w),$.viewport(s),I.updateMatrices(q,K),i=I.getFrustum(),S(w,N,I.camera,q,this.type)}I.isPointLightShadow!==!0&&this.type===_i&&g(I,N),I.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(E,b,k)};function g(T,w){const N=e.update(x);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Wr(r.x,r.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(w,null,N,h,x,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(w,null,N,m,x,null)}function v(T,w,N,E){let b=null;const k=N.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(k!==void 0)b=k;else if(b=N.isPointLight===!0?l:o,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const $=b.uuid,Z=w.uuid;let D=c[$];D===void 0&&(D={},c[$]=D);let V=D[Z];V===void 0&&(V=b.clone(),D[Z]=V,w.addEventListener("dispose",R)),b=V}if(b.visible=w.visible,b.wireframe=w.wireframe,E===_i?b.side=w.shadowSide!==null?w.shadowSide:w.side:b.side=w.shadowSide!==null?w.shadowSide:d[w.side],b.alphaMap=w.alphaMap,b.alphaTest=w.alphaTest,b.map=w.map,b.clipShadows=w.clipShadows,b.clippingPlanes=w.clippingPlanes,b.clipIntersection=w.clipIntersection,b.displacementMap=w.displacementMap,b.displacementScale=w.displacementScale,b.displacementBias=w.displacementBias,b.wireframeLinewidth=w.wireframeLinewidth,b.linewidth=w.linewidth,N.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const $=t.properties.get(b);$.light=N}return b}function S(T,w,N,E,b){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===_i)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,T.matrixWorld);const Z=e.update(T),D=T.material;if(Array.isArray(D)){const V=Z.groups;for(let X=0,q=V.length;X<q;X++){const I=V[X],B=D[I.materialIndex];if(B&&B.visible){const H=v(T,B,E,b);T.onBeforeShadow(t,T,w,N,Z,H,I),t.renderBufferDirect(N,null,Z,H,T,I),T.onAfterShadow(t,T,w,N,Z,H,I)}}}else if(D.visible){const V=v(T,D,E,b);T.onBeforeShadow(t,T,w,N,Z,V,null),t.renderBufferDirect(N,null,Z,V,T,null),T.onAfterShadow(t,T,w,N,Z,V,null)}}const $=T.children;for(let Z=0,D=$.length;Z<D;Z++)S($[Z],w,N,E,b)}function R(T){T.target.removeEventListener("dispose",R);for(const N in c){const E=c[N],b=T.target.uuid;b in E&&(E[b].dispose(),delete E[b])}}}function tN(t,e,n){const i=n.isWebGL2;function r(){let P=!1;const ce=new ht;let ue=null;const Ae=new ht(0,0,0,0);return{setMask:function(Te){ue!==Te&&!P&&(t.colorMask(Te,Te,Te,Te),ue=Te)},setLocked:function(Te){P=Te},setClear:function(Te,Ke,Je,yt,Ut){Ut===!0&&(Te*=yt,Ke*=yt,Je*=yt),ce.set(Te,Ke,Je,yt),Ae.equals(ce)===!1&&(t.clearColor(Te,Ke,Je,yt),Ae.copy(ce))},reset:function(){P=!1,ue=null,Ae.set(-1,0,0,0)}}}function a(){let P=!1,ce=null,ue=null,Ae=null;return{setTest:function(Te){Te?Ce(t.DEPTH_TEST):ye(t.DEPTH_TEST)},setMask:function(Te){ce!==Te&&!P&&(t.depthMask(Te),ce=Te)},setFunc:function(Te){if(ue!==Te){switch(Te){case EA:t.depthFunc(t.NEVER);break;case MA:t.depthFunc(t.ALWAYS);break;case TA:t.depthFunc(t.LESS);break;case vc:t.depthFunc(t.LEQUAL);break;case bA:t.depthFunc(t.EQUAL);break;case wA:t.depthFunc(t.GEQUAL);break;case AA:t.depthFunc(t.GREATER);break;case RA:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ue=Te}},setLocked:function(Te){P=Te},setClear:function(Te){Ae!==Te&&(t.clearDepth(Te),Ae=Te)},reset:function(){P=!1,ce=null,ue=null,Ae=null}}}function s(){let P=!1,ce=null,ue=null,Ae=null,Te=null,Ke=null,Je=null,yt=null,Ut=null;return{setTest:function(Ze){P||(Ze?Ce(t.STENCIL_TEST):ye(t.STENCIL_TEST))},setMask:function(Ze){ce!==Ze&&!P&&(t.stencilMask(Ze),ce=Ze)},setFunc:function(Ze,Ot,vn){(ue!==Ze||Ae!==Ot||Te!==vn)&&(t.stencilFunc(Ze,Ot,vn),ue=Ze,Ae=Ot,Te=vn)},setOp:function(Ze,Ot,vn){(Ke!==Ze||Je!==Ot||yt!==vn)&&(t.stencilOp(Ze,Ot,vn),Ke=Ze,Je=Ot,yt=vn)},setLocked:function(Ze){P=Ze},setClear:function(Ze){Ut!==Ze&&(t.clearStencil(Ze),Ut=Ze)},reset:function(){P=!1,ce=null,ue=null,Ae=null,Te=null,Ke=null,Je=null,yt=null,Ut=null}}}const o=new r,l=new a,c=new s,f=new WeakMap,d=new WeakMap;let h={},m={},_=new WeakMap,x=[],p=null,u=!1,g=null,v=null,S=null,R=null,T=null,w=null,N=null,E=new je(0,0,0),b=0,k=!1,$=null,Z=null,D=null,V=null,X=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,B=0;const H=t.getParameter(t.VERSION);H.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(H)[1]),I=B>=1):H.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),I=B>=2);let K=null,Q={};const F=t.getParameter(t.SCISSOR_BOX),Y=t.getParameter(t.VIEWPORT),re=new ht().fromArray(F),ae=new ht().fromArray(Y);function de(P,ce,ue,Ae){const Te=new Uint8Array(4),Ke=t.createTexture();t.bindTexture(P,Ke),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Je=0;Je<ue;Je++)i&&(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)?t.texImage3D(ce,0,t.RGBA,1,1,Ae,0,t.RGBA,t.UNSIGNED_BYTE,Te):t.texImage2D(ce+Je,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Te);return Ke}const Ee={};Ee[t.TEXTURE_2D]=de(t.TEXTURE_2D,t.TEXTURE_2D,1),Ee[t.TEXTURE_CUBE_MAP]=de(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ee[t.TEXTURE_2D_ARRAY]=de(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ee[t.TEXTURE_3D]=de(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ce(t.DEPTH_TEST),l.setFunc(vc),Ue(!1),C(Ig),Ce(t.CULL_FACE),ve(lr);function Ce(P){h[P]!==!0&&(t.enable(P),h[P]=!0)}function ye(P){h[P]!==!1&&(t.disable(P),h[P]=!1)}function Ve(P,ce){return m[P]!==ce?(t.bindFramebuffer(P,ce),m[P]=ce,i&&(P===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=ce),P===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=ce)),!0):!1}function z(P,ce){let ue=x,Ae=!1;if(P)if(ue=_.get(ce),ue===void 0&&(ue=[],_.set(ce,ue)),P.isWebGLMultipleRenderTargets){const Te=P.texture;if(ue.length!==Te.length||ue[0]!==t.COLOR_ATTACHMENT0){for(let Ke=0,Je=Te.length;Ke<Je;Ke++)ue[Ke]=t.COLOR_ATTACHMENT0+Ke;ue.length=Te.length,Ae=!0}}else ue[0]!==t.COLOR_ATTACHMENT0&&(ue[0]=t.COLOR_ATTACHMENT0,Ae=!0);else ue[0]!==t.BACK&&(ue[0]=t.BACK,Ae=!0);Ae&&(n.isWebGL2?t.drawBuffers(ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ue))}function It(P){return p!==P?(t.useProgram(P),p=P,!0):!1}const Me={[Cr]:t.FUNC_ADD,[oA]:t.FUNC_SUBTRACT,[lA]:t.FUNC_REVERSE_SUBTRACT};if(i)Me[Fg]=t.MIN,Me[kg]=t.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(Me[Fg]=P.MIN_EXT,Me[kg]=P.MAX_EXT)}const Ne={[cA]:t.ZERO,[uA]:t.ONE,[fA]:t.SRC_COLOR,[zd]:t.SRC_ALPHA,[vA]:t.SRC_ALPHA_SATURATE,[mA]:t.DST_COLOR,[hA]:t.DST_ALPHA,[dA]:t.ONE_MINUS_SRC_COLOR,[Hd]:t.ONE_MINUS_SRC_ALPHA,[gA]:t.ONE_MINUS_DST_COLOR,[pA]:t.ONE_MINUS_DST_ALPHA,[_A]:t.CONSTANT_COLOR,[xA]:t.ONE_MINUS_CONSTANT_COLOR,[yA]:t.CONSTANT_ALPHA,[SA]:t.ONE_MINUS_CONSTANT_ALPHA};function ve(P,ce,ue,Ae,Te,Ke,Je,yt,Ut,Ze){if(P===lr){u===!0&&(ye(t.BLEND),u=!1);return}if(u===!1&&(Ce(t.BLEND),u=!0),P!==sA){if(P!==g||Ze!==k){if((v!==Cr||T!==Cr)&&(t.blendEquation(t.FUNC_ADD),v=Cr,T=Cr),Ze)switch(P){case Wa:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Bd:t.blendFunc(t.ONE,t.ONE);break;case Ug:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Og:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Wa:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Bd:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Ug:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Og:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}S=null,R=null,w=null,N=null,E.set(0,0,0),b=0,g=P,k=Ze}return}Te=Te||ce,Ke=Ke||ue,Je=Je||Ae,(ce!==v||Te!==T)&&(t.blendEquationSeparate(Me[ce],Me[Te]),v=ce,T=Te),(ue!==S||Ae!==R||Ke!==w||Je!==N)&&(t.blendFuncSeparate(Ne[ue],Ne[Ae],Ne[Ke],Ne[Je]),S=ue,R=Ae,w=Ke,N=Je),(yt.equals(E)===!1||Ut!==b)&&(t.blendColor(yt.r,yt.g,yt.b,Ut),E.copy(yt),b=Ut),g=P,k=!1}function at(P,ce){P.side===Si?ye(t.CULL_FACE):Ce(t.CULL_FACE);let ue=P.side===pn;ce&&(ue=!ue),Ue(ue),P.blending===Wa&&P.transparent===!1?ve(lr):ve(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);const Ae=P.stencilWrite;c.setTest(Ae),Ae&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),W(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Ce(t.SAMPLE_ALPHA_TO_COVERAGE):ye(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(P){$!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),$=P)}function C(P){P!==iA?(Ce(t.CULL_FACE),P!==Z&&(P===Ig?t.cullFace(t.BACK):P===rA?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ye(t.CULL_FACE),Z=P}function M(P){P!==D&&(I&&t.lineWidth(P),D=P)}function W(P,ce,ue){P?(Ce(t.POLYGON_OFFSET_FILL),(V!==ce||X!==ue)&&(t.polygonOffset(ce,ue),V=ce,X=ue)):ye(t.POLYGON_OFFSET_FILL)}function te(P){P?Ce(t.SCISSOR_TEST):ye(t.SCISSOR_TEST)}function ee(P){P===void 0&&(P=t.TEXTURE0+q-1),K!==P&&(t.activeTexture(P),K=P)}function ie(P,ce,ue){ue===void 0&&(K===null?ue=t.TEXTURE0+q-1:ue=K);let Ae=Q[ue];Ae===void 0&&(Ae={type:void 0,texture:void 0},Q[ue]=Ae),(Ae.type!==P||Ae.texture!==ce)&&(K!==ue&&(t.activeTexture(ue),K=ue),t.bindTexture(P,ce||Ee[P]),Ae.type=P,Ae.texture=ce)}function xe(){const P=Q[K];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function fe(){try{t.compressedTexImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ge(){try{t.compressedTexImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function we(){try{t.texSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ke(){try{t.texSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function qe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ze(){try{t.texStorage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Pe(){try{t.texStorage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Se(){try{t.texImage2D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function me(){try{t.texImage3D.apply(t,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ie(P){re.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),re.copy(P))}function Ye(P){ae.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),ae.copy(P))}function st(P,ce){let ue=d.get(ce);ue===void 0&&(ue=new WeakMap,d.set(ce,ue));let Ae=ue.get(P);Ae===void 0&&(Ae=t.getUniformBlockIndex(ce,P.name),ue.set(P,Ae))}function He(P,ce){const Ae=d.get(ce).get(P);f.get(ce)!==Ae&&(t.uniformBlockBinding(ce,Ae,P.__bindingPointIndex),f.set(ce,Ae))}function se(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},K=null,Q={},m={},_=new WeakMap,x=[],p=null,u=!1,g=null,v=null,S=null,R=null,T=null,w=null,N=null,E=new je(0,0,0),b=0,k=!1,$=null,Z=null,D=null,V=null,X=null,re.set(0,0,t.canvas.width,t.canvas.height),ae.set(0,0,t.canvas.width,t.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ce,disable:ye,bindFramebuffer:Ve,drawBuffers:z,useProgram:It,setBlending:ve,setMaterial:at,setFlipSided:Ue,setCullFace:C,setLineWidth:M,setPolygonOffset:W,setScissorTest:te,activeTexture:ee,bindTexture:ie,unbindTexture:xe,compressedTexImage2D:fe,compressedTexImage3D:ge,texImage2D:Se,texImage3D:me,updateUBOMapping:st,uniformBlockBinding:He,texStorage2D:ze,texStorage3D:Pe,texSubImage2D:we,texSubImage3D:ke,compressedTexSubImage2D:J,compressedTexSubImage3D:qe,scissor:Ie,viewport:Ye,reset:se}}function nN(t,e,n,i,r,a,s){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new WeakMap;let d;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,M){return m?new OffscreenCanvas(C,M):Ec("canvas")}function x(C,M,W,te){let ee=1;if((C.width>te||C.height>te)&&(ee=te/Math.max(C.width,C.height)),ee<1||M===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const ie=M?qd:Math.floor,xe=ie(ee*C.width),fe=ie(ee*C.height);d===void 0&&(d=_(xe,fe));const ge=W?_(xe,fe):d;return ge.width=xe,ge.height=fe,ge.getContext("2d").drawImage(C,0,0,xe,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+xe+"x"+fe+")."),ge}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function p(C){return hv(C.width)&&hv(C.height)}function u(C){return o?!1:C.wrapS!==Kn||C.wrapT!==Kn||C.minFilter!==tn&&C.minFilter!==Sn}function g(C,M){return C.generateMipmaps&&M&&C.minFilter!==tn&&C.minFilter!==Sn}function v(C){t.generateMipmap(C)}function S(C,M,W,te,ee=!1){if(o===!1)return M;if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ie=M;if(M===t.RED&&(W===t.FLOAT&&(ie=t.R32F),W===t.HALF_FLOAT&&(ie=t.R16F),W===t.UNSIGNED_BYTE&&(ie=t.R8)),M===t.RED_INTEGER&&(W===t.UNSIGNED_BYTE&&(ie=t.R8UI),W===t.UNSIGNED_SHORT&&(ie=t.R16UI),W===t.UNSIGNED_INT&&(ie=t.R32UI),W===t.BYTE&&(ie=t.R8I),W===t.SHORT&&(ie=t.R16I),W===t.INT&&(ie=t.R32I)),M===t.RG&&(W===t.FLOAT&&(ie=t.RG32F),W===t.HALF_FLOAT&&(ie=t.RG16F),W===t.UNSIGNED_BYTE&&(ie=t.RG8)),M===t.RGBA){const xe=ee?_c:et.getTransfer(te);W===t.FLOAT&&(ie=t.RGBA32F),W===t.HALF_FLOAT&&(ie=t.RGBA16F),W===t.UNSIGNED_BYTE&&(ie=xe===ct?t.SRGB8_ALPHA8:t.RGBA8),W===t.UNSIGNED_SHORT_4_4_4_4&&(ie=t.RGBA4),W===t.UNSIGNED_SHORT_5_5_5_1&&(ie=t.RGB5_A1)}return(ie===t.R16F||ie===t.R32F||ie===t.RG16F||ie===t.RG32F||ie===t.RGBA16F||ie===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function R(C,M,W){return g(C,W)===!0||C.isFramebufferTexture&&C.minFilter!==tn&&C.minFilter!==Sn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function T(C){return C===tn||C===Bg||C===Hu?t.NEAREST:t.LINEAR}function w(C){const M=C.target;M.removeEventListener("dispose",w),E(M),M.isVideoTexture&&f.delete(M)}function N(C){const M=C.target;M.removeEventListener("dispose",N),k(M)}function E(C){const M=i.get(C);if(M.__webglInit===void 0)return;const W=C.source,te=h.get(W);if(te){const ee=te[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&b(C),Object.keys(te).length===0&&h.delete(W)}i.remove(C)}function b(C){const M=i.get(C);t.deleteTexture(M.__webglTexture);const W=C.source,te=h.get(W);delete te[M.__cacheKey],s.memory.textures--}function k(C){const M=C.texture,W=i.get(C),te=i.get(M);if(te.__webglTexture!==void 0&&(t.deleteTexture(te.__webglTexture),s.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(W.__webglFramebuffer[ee]))for(let ie=0;ie<W.__webglFramebuffer[ee].length;ie++)t.deleteFramebuffer(W.__webglFramebuffer[ee][ie]);else t.deleteFramebuffer(W.__webglFramebuffer[ee]);W.__webglDepthbuffer&&t.deleteRenderbuffer(W.__webglDepthbuffer[ee])}else{if(Array.isArray(W.__webglFramebuffer))for(let ee=0;ee<W.__webglFramebuffer.length;ee++)t.deleteFramebuffer(W.__webglFramebuffer[ee]);else t.deleteFramebuffer(W.__webglFramebuffer);if(W.__webglDepthbuffer&&t.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&t.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let ee=0;ee<W.__webglColorRenderbuffer.length;ee++)W.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(W.__webglColorRenderbuffer[ee]);W.__webglDepthRenderbuffer&&t.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let ee=0,ie=M.length;ee<ie;ee++){const xe=i.get(M[ee]);xe.__webglTexture&&(t.deleteTexture(xe.__webglTexture),s.memory.textures--),i.remove(M[ee])}i.remove(M),i.remove(C)}let $=0;function Z(){$=0}function D(){const C=$;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),$+=1,C}function V(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function X(C,M){const W=i.get(C);if(C.isVideoTexture&&at(C),C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){const te=C.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(W,C,M);return}}n.bindTexture(t.TEXTURE_2D,W.__webglTexture,t.TEXTURE0+M)}function q(C,M){const W=i.get(C);if(C.version>0&&W.__version!==C.version){re(W,C,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,W.__webglTexture,t.TEXTURE0+M)}function I(C,M){const W=i.get(C);if(C.version>0&&W.__version!==C.version){re(W,C,M);return}n.bindTexture(t.TEXTURE_3D,W.__webglTexture,t.TEXTURE0+M)}function B(C,M){const W=i.get(C);if(C.version>0&&W.__version!==C.version){ae(W,C,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture,t.TEXTURE0+M)}const H={[Wd]:t.REPEAT,[Kn]:t.CLAMP_TO_EDGE,[jd]:t.MIRRORED_REPEAT},K={[tn]:t.NEAREST,[Bg]:t.NEAREST_MIPMAP_NEAREST,[Hu]:t.NEAREST_MIPMAP_LINEAR,[Sn]:t.LINEAR,[FA]:t.LINEAR_MIPMAP_NEAREST,[po]:t.LINEAR_MIPMAP_LINEAR},Q={[qA]:t.NEVER,[tR]:t.ALWAYS,[KA]:t.LESS,[My]:t.LEQUAL,[ZA]:t.EQUAL,[eR]:t.GEQUAL,[QA]:t.GREATER,[JA]:t.NOTEQUAL};function F(C,M,W){if(W?(t.texParameteri(C,t.TEXTURE_WRAP_S,H[M.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,H[M.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,H[M.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,K[M.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,K[M.minFilter])):(t.texParameteri(C,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(C,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==Kn||M.wrapT!==Kn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(C,t.TEXTURE_MAG_FILTER,T(M.magFilter)),t.texParameteri(C,t.TEXTURE_MIN_FILTER,T(M.minFilter)),M.minFilter!==tn&&M.minFilter!==Sn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,Q[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===tn||M.minFilter!==Hu&&M.minFilter!==po||M.type===Ji&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===mo&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(C,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function Y(C,M){let W=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",w));const te=M.source;let ee=h.get(te);ee===void 0&&(ee={},h.set(te,ee));const ie=V(M);if(ie!==C.__cacheKey){ee[ie]===void 0&&(ee[ie]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,W=!0),ee[ie].usedTimes++;const xe=ee[C.__cacheKey];xe!==void 0&&(ee[C.__cacheKey].usedTimes--,xe.usedTimes===0&&b(M)),C.__cacheKey=ie,C.__webglTexture=ee[ie].texture}return W}function re(C,M,W){let te=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(te=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(te=t.TEXTURE_3D);const ee=Y(C,M),ie=M.source;n.bindTexture(te,C.__webglTexture,t.TEXTURE0+W);const xe=i.get(ie);if(ie.version!==xe.__version||ee===!0){n.activeTexture(t.TEXTURE0+W);const fe=et.getPrimaries(et.workingColorSpace),ge=M.colorSpace===Un?null:et.getPrimaries(M.colorSpace),we=M.colorSpace===Un||fe===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const ke=u(M)&&p(M.image)===!1;let J=x(M.image,ke,!1,r.maxTextureSize);J=Ue(M,J);const qe=p(J)||o,ze=a.convert(M.format,M.colorSpace);let Pe=a.convert(M.type),Se=S(M.internalFormat,ze,Pe,M.colorSpace,M.isVideoTexture);F(te,M,qe);let me;const Ie=M.mipmaps,Ye=o&&M.isVideoTexture!==!0&&Se!==yy,st=xe.__version===void 0||ee===!0,He=R(M,J,qe);if(M.isDepthTexture)Se=t.DEPTH_COMPONENT,o?M.type===Ji?Se=t.DEPTH_COMPONENT32F:M.type===Qi?Se=t.DEPTH_COMPONENT24:M.type===Or?Se=t.DEPTH24_STENCIL8:Se=t.DEPTH_COMPONENT16:M.type===Ji&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Fr&&Se===t.DEPTH_COMPONENT&&M.type!==sp&&M.type!==Qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Qi,Pe=a.convert(M.type)),M.format===rs&&Se===t.DEPTH_COMPONENT&&(Se=t.DEPTH_STENCIL,M.type!==Or&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Or,Pe=a.convert(M.type))),st&&(Ye?n.texStorage2D(t.TEXTURE_2D,1,Se,J.width,J.height):n.texImage2D(t.TEXTURE_2D,0,Se,J.width,J.height,0,ze,Pe,null));else if(M.isDataTexture)if(Ie.length>0&&qe){Ye&&st&&n.texStorage2D(t.TEXTURE_2D,He,Se,Ie[0].width,Ie[0].height);for(let se=0,P=Ie.length;se<P;se++)me=Ie[se],Ye?n.texSubImage2D(t.TEXTURE_2D,se,0,0,me.width,me.height,ze,Pe,me.data):n.texImage2D(t.TEXTURE_2D,se,Se,me.width,me.height,0,ze,Pe,me.data);M.generateMipmaps=!1}else Ye?(st&&n.texStorage2D(t.TEXTURE_2D,He,Se,J.width,J.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,J.width,J.height,ze,Pe,J.data)):n.texImage2D(t.TEXTURE_2D,0,Se,J.width,J.height,0,ze,Pe,J.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ye&&st&&n.texStorage3D(t.TEXTURE_2D_ARRAY,He,Se,Ie[0].width,Ie[0].height,J.depth);for(let se=0,P=Ie.length;se<P;se++)me=Ie[se],M.format!==Zn?ze!==null?Ye?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,me.width,me.height,J.depth,ze,me.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,se,Se,me.width,me.height,J.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?n.texSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,me.width,me.height,J.depth,ze,Pe,me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,se,Se,me.width,me.height,J.depth,0,ze,Pe,me.data)}else{Ye&&st&&n.texStorage2D(t.TEXTURE_2D,He,Se,Ie[0].width,Ie[0].height);for(let se=0,P=Ie.length;se<P;se++)me=Ie[se],M.format!==Zn?ze!==null?Ye?n.compressedTexSubImage2D(t.TEXTURE_2D,se,0,0,me.width,me.height,ze,me.data):n.compressedTexImage2D(t.TEXTURE_2D,se,Se,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?n.texSubImage2D(t.TEXTURE_2D,se,0,0,me.width,me.height,ze,Pe,me.data):n.texImage2D(t.TEXTURE_2D,se,Se,me.width,me.height,0,ze,Pe,me.data)}else if(M.isDataArrayTexture)Ye?(st&&n.texStorage3D(t.TEXTURE_2D_ARRAY,He,Se,J.width,J.height,J.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ze,Pe,J.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Se,J.width,J.height,J.depth,0,ze,Pe,J.data);else if(M.isData3DTexture)Ye?(st&&n.texStorage3D(t.TEXTURE_3D,He,Se,J.width,J.height,J.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ze,Pe,J.data)):n.texImage3D(t.TEXTURE_3D,0,Se,J.width,J.height,J.depth,0,ze,Pe,J.data);else if(M.isFramebufferTexture){if(st)if(Ye)n.texStorage2D(t.TEXTURE_2D,He,Se,J.width,J.height);else{let se=J.width,P=J.height;for(let ce=0;ce<He;ce++)n.texImage2D(t.TEXTURE_2D,ce,Se,se,P,0,ze,Pe,null),se>>=1,P>>=1}}else if(Ie.length>0&&qe){Ye&&st&&n.texStorage2D(t.TEXTURE_2D,He,Se,Ie[0].width,Ie[0].height);for(let se=0,P=Ie.length;se<P;se++)me=Ie[se],Ye?n.texSubImage2D(t.TEXTURE_2D,se,0,0,ze,Pe,me):n.texImage2D(t.TEXTURE_2D,se,Se,ze,Pe,me);M.generateMipmaps=!1}else Ye?(st&&n.texStorage2D(t.TEXTURE_2D,He,Se,J.width,J.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ze,Pe,J)):n.texImage2D(t.TEXTURE_2D,0,Se,ze,Pe,J);g(M,qe)&&v(te),xe.__version=ie.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function ae(C,M,W){if(M.image.length!==6)return;const te=Y(C,M),ee=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+W);const ie=i.get(ee);if(ee.version!==ie.__version||te===!0){n.activeTexture(t.TEXTURE0+W);const xe=et.getPrimaries(et.workingColorSpace),fe=M.colorSpace===Un?null:et.getPrimaries(M.colorSpace),ge=M.colorSpace===Un||xe===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const we=M.isCompressedTexture||M.image[0].isCompressedTexture,ke=M.image[0]&&M.image[0].isDataTexture,J=[];for(let se=0;se<6;se++)!we&&!ke?J[se]=x(M.image[se],!1,!0,r.maxCubemapSize):J[se]=ke?M.image[se].image:M.image[se],J[se]=Ue(M,J[se]);const qe=J[0],ze=p(qe)||o,Pe=a.convert(M.format,M.colorSpace),Se=a.convert(M.type),me=S(M.internalFormat,Pe,Se,M.colorSpace),Ie=o&&M.isVideoTexture!==!0,Ye=ie.__version===void 0||te===!0;let st=R(M,qe,ze);F(t.TEXTURE_CUBE_MAP,M,ze);let He;if(we){Ie&&Ye&&n.texStorage2D(t.TEXTURE_CUBE_MAP,st,me,qe.width,qe.height);for(let se=0;se<6;se++){He=J[se].mipmaps;for(let P=0;P<He.length;P++){const ce=He[P];M.format!==Zn?Pe!==null?Ie?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,P,0,0,ce.width,ce.height,Pe,ce.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,P,me,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,P,0,0,ce.width,ce.height,Pe,Se,ce.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,P,me,ce.width,ce.height,0,Pe,Se,ce.data)}}}else{He=M.mipmaps,Ie&&Ye&&(He.length>0&&st++,n.texStorage2D(t.TEXTURE_CUBE_MAP,st,me,J[0].width,J[0].height));for(let se=0;se<6;se++)if(ke){Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,J[se].width,J[se].height,Pe,Se,J[se].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,me,J[se].width,J[se].height,0,Pe,Se,J[se].data);for(let P=0;P<He.length;P++){const ue=He[P].image[se].image;Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,P+1,0,0,ue.width,ue.height,Pe,Se,ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,P+1,me,ue.width,ue.height,0,Pe,Se,ue.data)}}else{Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Pe,Se,J[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,me,Pe,Se,J[se]);for(let P=0;P<He.length;P++){const ce=He[P];Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,P+1,0,0,Pe,Se,ce.image[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,P+1,me,Pe,Se,ce.image[se])}}}g(M,ze)&&v(t.TEXTURE_CUBE_MAP),ie.__version=ee.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function de(C,M,W,te,ee,ie){const xe=a.convert(W.format,W.colorSpace),fe=a.convert(W.type),ge=S(W.internalFormat,xe,fe,W.colorSpace);if(!i.get(M).__hasExternalTextures){const ke=Math.max(1,M.width>>ie),J=Math.max(1,M.height>>ie);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,ie,ge,ke,J,M.depth,0,xe,fe,null):n.texImage2D(ee,ie,ge,ke,J,0,xe,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),ve(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,ee,i.get(W).__webglTexture,0,Ne(M)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,te,ee,i.get(W).__webglTexture,ie),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ee(C,M,W){if(t.bindRenderbuffer(t.RENDERBUFFER,C),M.depthBuffer&&!M.stencilBuffer){let te=o===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(W||ve(M)){const ee=M.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Ji?te=t.DEPTH_COMPONENT32F:ee.type===Qi&&(te=t.DEPTH_COMPONENT24));const ie=Ne(M);ve(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ie,te,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ie,te,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,te,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,C)}else if(M.depthBuffer&&M.stencilBuffer){const te=Ne(M);W&&ve(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,te,t.DEPTH24_STENCIL8,M.width,M.height):ve(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,te,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,C)}else{const te=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ee=0;ee<te.length;ee++){const ie=te[ee],xe=a.convert(ie.format,ie.colorSpace),fe=a.convert(ie.type),ge=S(ie.internalFormat,xe,fe,ie.colorSpace),we=Ne(M);W&&ve(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,we,ge,M.width,M.height):ve(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,we,ge,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ge,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ce(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),X(M.depthTexture,0);const te=i.get(M.depthTexture).__webglTexture,ee=Ne(M);if(M.depthTexture.format===Fr)ve(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0);else if(M.depthTexture.format===rs)ve(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function ye(C){const M=i.get(C),W=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Ce(M.__webglFramebuffer,C)}else if(W){M.__webglDepthbuffer=[];for(let te=0;te<6;te++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[te]),M.__webglDepthbuffer[te]=t.createRenderbuffer(),Ee(M.__webglDepthbuffer[te],C,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),Ee(M.__webglDepthbuffer,C,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ve(C,M,W){const te=i.get(C);M!==void 0&&de(te.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),W!==void 0&&ye(C)}function z(C){const M=C.texture,W=i.get(C),te=i.get(M);C.addEventListener("dispose",N),C.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=t.createTexture()),te.__version=M.version,s.memory.textures++);const ee=C.isWebGLCubeRenderTarget===!0,ie=C.isWebGLMultipleRenderTargets===!0,xe=p(C)||o;if(ee){W.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(o&&M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer[fe]=[];for(let ge=0;ge<M.mipmaps.length;ge++)W.__webglFramebuffer[fe][ge]=t.createFramebuffer()}else W.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer=[];for(let fe=0;fe<M.mipmaps.length;fe++)W.__webglFramebuffer[fe]=t.createFramebuffer()}else W.__webglFramebuffer=t.createFramebuffer();if(ie)if(r.drawBuffers){const fe=C.texture;for(let ge=0,we=fe.length;ge<we;ge++){const ke=i.get(fe[ge]);ke.__webglTexture===void 0&&(ke.__webglTexture=t.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&C.samples>0&&ve(C)===!1){const fe=ie?M:[M];W.__webglMultisampledFramebuffer=t.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ge=0;ge<fe.length;ge++){const we=fe[ge];W.__webglColorRenderbuffer[ge]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,W.__webglColorRenderbuffer[ge]);const ke=a.convert(we.format,we.colorSpace),J=a.convert(we.type),qe=S(we.internalFormat,ke,J,we.colorSpace,C.isXRRenderTarget===!0),ze=Ne(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,ze,qe,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,W.__webglColorRenderbuffer[ge])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(W.__webglDepthRenderbuffer=t.createRenderbuffer(),Ee(W.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),F(t.TEXTURE_CUBE_MAP,M,xe);for(let fe=0;fe<6;fe++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)de(W.__webglFramebuffer[fe][ge],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ge);else de(W.__webglFramebuffer[fe],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);g(M,xe)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ie){const fe=C.texture;for(let ge=0,we=fe.length;ge<we;ge++){const ke=fe[ge],J=i.get(ke);n.bindTexture(t.TEXTURE_2D,J.__webglTexture),F(t.TEXTURE_2D,ke,xe),de(W.__webglFramebuffer,C,ke,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,0),g(ke,xe)&&v(t.TEXTURE_2D)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(o?fe=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(fe,te.__webglTexture),F(fe,M,xe),o&&M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)de(W.__webglFramebuffer[ge],C,M,t.COLOR_ATTACHMENT0,fe,ge);else de(W.__webglFramebuffer,C,M,t.COLOR_ATTACHMENT0,fe,0);g(M,xe)&&v(fe),n.unbindTexture()}C.depthBuffer&&ye(C)}function It(C){const M=p(C)||o,W=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let te=0,ee=W.length;te<ee;te++){const ie=W[te];if(g(ie,M)){const xe=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,fe=i.get(ie).__webglTexture;n.bindTexture(xe,fe),v(xe),n.unbindTexture()}}}function Me(C){if(o&&C.samples>0&&ve(C)===!1){const M=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],W=C.width,te=C.height;let ee=t.COLOR_BUFFER_BIT;const ie=[],xe=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=i.get(C),ge=C.isWebGLMultipleRenderTargets===!0;if(ge)for(let we=0;we<M.length;we++)n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let we=0;we<M.length;we++){ie.push(t.COLOR_ATTACHMENT0+we),C.depthBuffer&&ie.push(xe);const ke=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(ke===!1&&(C.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),ge&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,fe.__webglColorRenderbuffer[we]),ke===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[xe]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[xe])),ge){const J=i.get(M[we]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,J,0)}t.blitFramebuffer(0,0,W,te,0,0,W,te,ee,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ie)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ge)for(let we=0;we<M.length;we++){n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,fe.__webglColorRenderbuffer[we]);const ke=i.get(M[we]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,ke,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}}function Ne(C){return Math.min(r.maxSamples,C.samples)}function ve(C){const M=i.get(C);return o&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function at(C){const M=s.render.frame;f.get(C)!==M&&(f.set(C,M),C.update())}function Ue(C,M){const W=C.colorSpace,te=C.format,ee=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===$d||W!==Li&&W!==Un&&(et.getTransfer(W)===ct?o===!1?e.has("EXT_sRGB")===!0&&te===Zn?(C.format=$d,C.minFilter=Sn,C.generateMipmaps=!1):M=by.sRGBToLinear(M):(te!==Zn||ee!==ur)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),M}this.allocateTextureUnit=D,this.resetTextureUnits=Z,this.setTexture2D=X,this.setTexture2DArray=q,this.setTexture3D=I,this.setTextureCube=B,this.rebindTextures=Ve,this.setupRenderTarget=z,this.updateRenderTargetMipmap=It,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=de,this.useMultisampledRTT=ve}function iN(t,e,n){const i=n.isWebGL2;function r(a,s=Un){let o;const l=et.getTransfer(s);if(a===ur)return t.UNSIGNED_BYTE;if(a===my)return t.UNSIGNED_SHORT_4_4_4_4;if(a===gy)return t.UNSIGNED_SHORT_5_5_5_1;if(a===kA)return t.BYTE;if(a===BA)return t.SHORT;if(a===sp)return t.UNSIGNED_SHORT;if(a===py)return t.INT;if(a===Qi)return t.UNSIGNED_INT;if(a===Ji)return t.FLOAT;if(a===mo)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(a===zA)return t.ALPHA;if(a===Zn)return t.RGBA;if(a===HA)return t.LUMINANCE;if(a===GA)return t.LUMINANCE_ALPHA;if(a===Fr)return t.DEPTH_COMPONENT;if(a===rs)return t.DEPTH_STENCIL;if(a===$d)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(a===VA)return t.RED;if(a===vy)return t.RED_INTEGER;if(a===WA)return t.RG;if(a===_y)return t.RG_INTEGER;if(a===xy)return t.RGBA_INTEGER;if(a===Gu||a===Vu||a===Wu||a===ju)if(l===ct)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(a===Gu)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Vu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Wu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===ju)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(a===Gu)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Vu)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Wu)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===ju)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===zg||a===Hg||a===Gg||a===Vg)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(a===zg)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Hg)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Gg)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Vg)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===yy)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Wg||a===jg)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(a===Wg)return l===ct?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(a===jg)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Xg||a===$g||a===Yg||a===qg||a===Kg||a===Zg||a===Qg||a===Jg||a===ev||a===tv||a===nv||a===iv||a===rv||a===av)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(a===Xg)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===$g)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Yg)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===qg)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Kg)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Zg)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Qg)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Jg)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===ev)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===tv)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===nv)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===iv)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===rv)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===av)return l===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Xu||a===sv||a===ov)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(a===Xu)return l===ct?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===sv)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===ov)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===jA||a===lv||a===cv||a===uv)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(a===Xu)return o.COMPRESSED_RED_RGTC1_EXT;if(a===lv)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===cv)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===uv)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Or?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[a]!==void 0?t[a]:null}return{convert:r}}class rN extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Oa extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const aN={type:"move"};class _f{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const x of e.hand.values()){const p=n.getJointPose(x,i),u=this._getHandJoint(c,x);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=f.position.distanceTo(d.position),m=.02,_=.005;c.inputState.pinching&&h>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=n.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(aN)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Oa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class sN extends cs{constructor(e,n){super();const i=this;let r=null,a=1,s=null,o="local-floor",l=1,c=null,f=null,d=null,h=null,m=null,_=null;const x=n.getContextAttributes();let p=null,u=null;const g=[],v=[],S=new Fe;let R=null;const T=new cn;T.layers.enable(1),T.viewport=new ht;const w=new cn;w.layers.enable(2),w.viewport=new ht;const N=[T,w],E=new rN;E.layers.enable(1),E.layers.enable(2);let b=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let Y=g[F];return Y===void 0&&(Y=new _f,g[F]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(F){let Y=g[F];return Y===void 0&&(Y=new _f,g[F]=Y),Y.getGripSpace()},this.getHand=function(F){let Y=g[F];return Y===void 0&&(Y=new _f,g[F]=Y),Y.getHandSpace()};function $(F){const Y=v.indexOf(F.inputSource);if(Y===-1)return;const re=g[Y];re!==void 0&&(re.update(F.inputSource,F.frame,c||s),re.dispatchEvent({type:F.type,data:F.inputSource}))}function Z(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",D);for(let F=0;F<g.length;F++){const Y=v[F];Y!==null&&(v[F]=null,g[F].disconnect(Y))}b=null,k=null,e.setRenderTarget(p),m=null,h=null,d=null,r=null,u=null,Q.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){a=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){o=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(F){if(r=F,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",D),x.xrCompatible!==!0&&await n.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(S),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Y={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(r,n,Y),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new Wr(m.framebufferWidth,m.framebufferHeight,{format:Zn,type:ur,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let Y=null,re=null,ae=null;x.depth&&(ae=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Y=x.stencil?rs:Fr,re=x.stencil?Or:Qi);const de={colorFormat:n.RGBA8,depthFormat:ae,scaleFactor:a};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(de),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),u=new Wr(h.textureWidth,h.textureHeight,{format:Zn,type:ur,depthTexture:new Fy(h.textureWidth,h.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const Ee=e.properties.get(u);Ee.__ignoreDepthValues=h.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(o),Q.setContext(r),Q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function D(F){for(let Y=0;Y<F.removed.length;Y++){const re=F.removed[Y],ae=v.indexOf(re);ae>=0&&(v[ae]=null,g[ae].disconnect(re))}for(let Y=0;Y<F.added.length;Y++){const re=F.added[Y];let ae=v.indexOf(re);if(ae===-1){for(let Ee=0;Ee<g.length;Ee++)if(Ee>=v.length){v.push(re),ae=Ee;break}else if(v[Ee]===null){v[Ee]=re,ae=Ee;break}if(ae===-1)break}const de=g[ae];de&&de.connect(re)}}const V=new U,X=new U;function q(F,Y,re){V.setFromMatrixPosition(Y.matrixWorld),X.setFromMatrixPosition(re.matrixWorld);const ae=V.distanceTo(X),de=Y.projectionMatrix.elements,Ee=re.projectionMatrix.elements,Ce=de[14]/(de[10]-1),ye=de[14]/(de[10]+1),Ve=(de[9]+1)/de[5],z=(de[9]-1)/de[5],It=(de[8]-1)/de[0],Me=(Ee[8]+1)/Ee[0],Ne=Ce*It,ve=Ce*Me,at=ae/(-It+Me),Ue=at*-It;Y.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(Ue),F.translateZ(at),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const C=Ce+at,M=ye+at,W=Ne-Ue,te=ve+(ae-Ue),ee=Ve*ye/M*C,ie=z*ye/M*C;F.projectionMatrix.makePerspective(W,te,ee,ie,C,M),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}function I(F,Y){Y===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(Y.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(r===null)return;E.near=w.near=T.near=F.near,E.far=w.far=T.far=F.far,(b!==E.near||k!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),b=E.near,k=E.far);const Y=F.parent,re=E.cameras;I(E,Y);for(let ae=0;ae<re.length;ae++)I(re[ae],Y);re.length===2?q(E,T,w):E.projectionMatrix.copy(T.projectionMatrix),B(F,E,Y)};function B(F,Y,re){re===null?F.matrix.copy(Y.matrixWorld):(F.matrix.copy(re.matrixWorld),F.matrix.invert(),F.matrix.multiply(Y.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(Y.projectionMatrix),F.projectionMatrixInverse.copy(Y.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=Yd*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(F){l=F,h!==null&&(h.fixedFoveation=F),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=F)};let H=null;function K(F,Y){if(f=Y.getViewerPose(c||s),_=Y,f!==null){const re=f.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let ae=!1;re.length!==E.cameras.length&&(E.cameras.length=0,ae=!0);for(let de=0;de<re.length;de++){const Ee=re[de];let Ce=null;if(m!==null)Ce=m.getViewport(Ee);else{const Ve=d.getViewSubImage(h,Ee);Ce=Ve.viewport,de===0&&(e.setRenderTargetTextures(u,Ve.colorTexture,h.ignoreDepthValues?void 0:Ve.depthStencilTexture),e.setRenderTarget(u))}let ye=N[de];ye===void 0&&(ye=new cn,ye.layers.enable(de),ye.viewport=new ht,N[de]=ye),ye.matrix.fromArray(Ee.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(Ee.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),de===0&&(E.matrix.copy(ye.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),ae===!0&&E.cameras.push(ye)}}for(let re=0;re<g.length;re++){const ae=v[re],de=g[re];ae!==null&&de!==void 0&&de.update(ae,Y,c||s)}H&&H(F,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),_=null}const Q=new Oy;Q.setAnimationLoop(K),this.setAnimationLoop=function(F){H=F},this.dispose=function(){}}}function oN(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,Dy(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,g,v,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?a(p,u):u.isMeshToonMaterial?(a(p,u),d(p,u)):u.isMeshPhongMaterial?(a(p,u),f(p,u)):u.isMeshStandardMaterial?(a(p,u),h(p,u),u.isMeshPhysicalMaterial&&m(p,u,S)):u.isMeshMatcapMaterial?(a(p,u),_(p,u)):u.isMeshDepthMaterial?a(p,u):u.isMeshDistanceMaterial?(a(p,u),x(p,u)):u.isMeshNormalMaterial?a(p,u):u.isLineBasicMaterial?(s(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?l(p,u,g,v):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function a(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===pn&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===pn&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const g=e.get(u).envMap;if(g&&(p.envMap.value=g,p.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const v=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*v,n(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function s(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,g,v){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*g,p.scale.value=v*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function f(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function h(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,g){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===pn&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,u){u.matcap&&(p.matcap.value=u.matcap)}function x(p,u){const g=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(g.matrixWorld),p.nearDistance.value=g.shadow.camera.near,p.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function lN(t,e,n,i){let r={},a={},s=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(g,v){const S=v.program;i.uniformBlockBinding(g,S)}function c(g,v){let S=r[g.id];S===void 0&&(_(g),S=f(g),r[g.id]=S,g.addEventListener("dispose",p));const R=v.program;i.updateUBOMapping(g,R);const T=e.render.frame;a[g.id]!==T&&(h(g),a[g.id]=T)}function f(g){const v=d();g.__bindingPointIndex=v;const S=t.createBuffer(),R=g.__size,T=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,R,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,S),S}function d(){for(let g=0;g<o;g++)if(s.indexOf(g)===-1)return s.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const v=r[g.id],S=g.uniforms,R=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let T=0,w=S.length;T<w;T++){const N=Array.isArray(S[T])?S[T]:[S[T]];for(let E=0,b=N.length;E<b;E++){const k=N[E];if(m(k,T,E,R)===!0){const $=k.__offset,Z=Array.isArray(k.value)?k.value:[k.value];let D=0;for(let V=0;V<Z.length;V++){const X=Z[V],q=x(X);typeof X=="number"||typeof X=="boolean"?(k.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,$+D,k.__data)):X.isMatrix3?(k.__data[0]=X.elements[0],k.__data[1]=X.elements[1],k.__data[2]=X.elements[2],k.__data[3]=0,k.__data[4]=X.elements[3],k.__data[5]=X.elements[4],k.__data[6]=X.elements[5],k.__data[7]=0,k.__data[8]=X.elements[6],k.__data[9]=X.elements[7],k.__data[10]=X.elements[8],k.__data[11]=0):(X.toArray(k.__data,D),D+=q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,$,k.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(g,v,S,R){const T=g.value,w=v+"_"+S;if(R[w]===void 0)return typeof T=="number"||typeof T=="boolean"?R[w]=T:R[w]=T.clone(),!0;{const N=R[w];if(typeof T=="number"||typeof T=="boolean"){if(N!==T)return R[w]=T,!0}else if(N.equals(T)===!1)return N.copy(T),!0}return!1}function _(g){const v=g.uniforms;let S=0;const R=16;for(let w=0,N=v.length;w<N;w++){const E=Array.isArray(v[w])?v[w]:[v[w]];for(let b=0,k=E.length;b<k;b++){const $=E[b],Z=Array.isArray($.value)?$.value:[$.value];for(let D=0,V=Z.length;D<V;D++){const X=Z[D],q=x(X),I=S%R;I!==0&&R-I<q.boundary&&(S+=R-I),$.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=S,S+=q.storage}}}const T=S%R;return T>0&&(S+=R-T),g.__size=S,g.__cache={},this}function x(g){const v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),v}function p(g){const v=g.target;v.removeEventListener("dispose",p);const S=s.indexOf(v.__bindingPointIndex);s.splice(S,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete a[v.id]}function u(){for(const g in r)t.deleteBuffer(r[g]);s=[],r={},a={}}return{bind:l,update:c,dispose:u}}class fp{constructor(e={}){const{canvas:n=iR(),context:i=null,depth:r=!0,stencil:a=!0,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=s;const m=new Uint32Array(4),_=new Int32Array(4);let x=null,p=null;const u=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kt,this._useLegacyLights=!1,this.toneMapping=cr,this.toneMappingExposure=1;const v=this;let S=!1,R=0,T=0,w=null,N=-1,E=null;const b=new ht,k=new ht;let $=null;const Z=new je(0);let D=0,V=n.width,X=n.height,q=1,I=null,B=null;const H=new ht(0,0,V,X),K=new ht(0,0,V,X);let Q=!1;const F=new lp;let Y=!1,re=!1,ae=null;const de=new xt,Ee=new Fe,Ce=new U,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ve(){return w===null?q:1}let z=i;function It(A,O){for(let j=0;j<A.length;j++){const L=A[j],G=n.getContext(L,O);if(G!==null)return G}return null}try{const A={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${rp}`),n.addEventListener("webglcontextlost",se,!1),n.addEventListener("webglcontextrestored",P,!1),n.addEventListener("webglcontextcreationerror",ce,!1),z===null){const O=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&O.shift(),z=It(O,A),z===null)throw It(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Me,Ne,ve,at,Ue,C,M,W,te,ee,ie,xe,fe,ge,we,ke,J,qe,ze,Pe,Se,me,Ie,Ye;function st(){Me=new _2(z),Ne=new f2(z,Me,e),Me.init(Ne),me=new iN(z,Me,Ne),ve=new tN(z,Me,Ne),at=new S2(z),Ue=new HL,C=new nN(z,Me,ve,Ue,Ne,me,at),M=new h2(v),W=new v2(v),te=new RR(z,Ne),Ie=new c2(z,Me,te,Ne),ee=new x2(z,te,at,Ie),ie=new b2(z,ee,te,at),ze=new T2(z,Ne,C),ke=new d2(Ue),xe=new zL(v,M,W,Me,Ne,Ie,ke),fe=new oN(v,Ue),ge=new VL,we=new qL(Me,Ne),qe=new l2(v,M,W,ve,ie,h,l),J=new eN(v,ie,Ne),Ye=new lN(z,at,Ne,ve),Pe=new u2(z,Me,at,Ne),Se=new y2(z,Me,at,Ne),at.programs=xe.programs,v.capabilities=Ne,v.extensions=Me,v.properties=Ue,v.renderLists=ge,v.shadowMap=J,v.state=ve,v.info=at}st();const He=new sN(v,z);this.xr=He,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const A=Me.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Me.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(A){A!==void 0&&(q=A,this.setSize(V,X,!1))},this.getSize=function(A){return A.set(V,X)},this.setSize=function(A,O,j=!0){if(He.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=A,X=O,n.width=Math.floor(A*q),n.height=Math.floor(O*q),j===!0&&(n.style.width=A+"px",n.style.height=O+"px"),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(V*q,X*q).floor()},this.setDrawingBufferSize=function(A,O,j){V=A,X=O,q=j,n.width=Math.floor(A*j),n.height=Math.floor(O*j),this.setViewport(0,0,A,O)},this.getCurrentViewport=function(A){return A.copy(b)},this.getViewport=function(A){return A.copy(H)},this.setViewport=function(A,O,j,L){A.isVector4?H.set(A.x,A.y,A.z,A.w):H.set(A,O,j,L),ve.viewport(b.copy(H).multiplyScalar(q).floor())},this.getScissor=function(A){return A.copy(K)},this.setScissor=function(A,O,j,L){A.isVector4?K.set(A.x,A.y,A.z,A.w):K.set(A,O,j,L),ve.scissor(k.copy(K).multiplyScalar(q).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(A){ve.setScissorTest(Q=A)},this.setOpaqueSort=function(A){I=A},this.setTransparentSort=function(A){B=A},this.getClearColor=function(A){return A.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(A=!0,O=!0,j=!0){let L=0;if(A){let G=!1;if(w!==null){const le=w.texture.format;G=le===xy||le===_y||le===vy}if(G){const le=w.texture.type,_e=le===ur||le===Qi||le===sp||le===Or||le===my||le===gy,be=qe.getClearColor(),Re=qe.getClearAlpha(),Oe=be.r,Le=be.g,De=be.b;_e?(m[0]=Oe,m[1]=Le,m[2]=De,m[3]=Re,z.clearBufferuiv(z.COLOR,0,m)):(_[0]=Oe,_[1]=Le,_[2]=De,_[3]=Re,z.clearBufferiv(z.COLOR,0,_))}else L|=z.COLOR_BUFFER_BIT}O&&(L|=z.DEPTH_BUFFER_BIT),j&&(L|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(L)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",se,!1),n.removeEventListener("webglcontextrestored",P,!1),n.removeEventListener("webglcontextcreationerror",ce,!1),ge.dispose(),we.dispose(),Ue.dispose(),M.dispose(),W.dispose(),ie.dispose(),Ie.dispose(),Ye.dispose(),xe.dispose(),He.dispose(),He.removeEventListener("sessionstart",Ut),He.removeEventListener("sessionend",Ze),ae&&(ae.dispose(),ae=null),Ot.stop()};function se(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=at.autoReset,O=J.enabled,j=J.autoUpdate,L=J.needsUpdate,G=J.type;st(),at.autoReset=A,J.enabled=O,J.autoUpdate=j,J.needsUpdate=L,J.type=G}function ce(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ue(A){const O=A.target;O.removeEventListener("dispose",ue),Ae(O)}function Ae(A){Te(A),Ue.remove(A)}function Te(A){const O=Ue.get(A).programs;O!==void 0&&(O.forEach(function(j){xe.releaseProgram(j)}),A.isShaderMaterial&&xe.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,j,L,G,le){O===null&&(O=ye);const _e=G.isMesh&&G.matrixWorld.determinant()<0,be=Ao(A,O,j,L,G);ve.setMaterial(L,_e);let Re=j.index,Oe=1;if(L.wireframe===!0){if(Re=ee.getWireframeAttribute(j),Re===void 0)return;Oe=2}const Le=j.drawRange,De=j.attributes.position;let ft=Le.start*Oe,Ht=(Le.start+Le.count)*Oe;le!==null&&(ft=Math.max(ft,le.start*Oe),Ht=Math.min(Ht,(le.start+le.count)*Oe)),Re!==null?(ft=Math.max(ft,0),Ht=Math.min(Ht,Re.count)):De!=null&&(ft=Math.max(ft,0),Ht=Math.min(Ht,De.count));const St=Ht-ft;if(St<0||St===1/0)return;Ie.setup(G,L,be,j,Re);let Pn,it=Pe;if(Re!==null&&(Pn=te.get(Re),it=Se,it.setIndex(Pn)),G.isMesh)L.wireframe===!0?(ve.setLineWidth(L.wireframeLinewidth*Ve()),it.setMode(z.LINES)):it.setMode(z.TRIANGLES);else if(G.isLine){let Be=L.linewidth;Be===void 0&&(Be=1),ve.setLineWidth(Be*Ve()),G.isLineSegments?it.setMode(z.LINES):G.isLineLoop?it.setMode(z.LINE_LOOP):it.setMode(z.LINE_STRIP)}else G.isPoints?it.setMode(z.POINTS):G.isSprite&&it.setMode(z.TRIANGLES);if(G.isBatchedMesh)it.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)it.renderInstances(ft,St,G.count);else if(j.isInstancedBufferGeometry){const Be=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Zr=Math.min(j.instanceCount,Be);it.renderInstances(ft,St,Zr)}else it.render(ft,St)};function Ke(A,O,j){A.transparent===!0&&A.side===Si&&A.forceSinglePass===!1?(A.side=pn,A.needsUpdate=!0,Kr(A,O,j),A.side=pr,A.needsUpdate=!0,Kr(A,O,j),A.side=Si):Kr(A,O,j)}this.compile=function(A,O,j=null){j===null&&(j=A),p=we.get(j),p.init(),g.push(p),j.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),A!==j&&A.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights(v._useLegacyLights);const L=new Set;return A.traverse(function(G){const le=G.material;if(le)if(Array.isArray(le))for(let _e=0;_e<le.length;_e++){const be=le[_e];Ke(be,j,G),L.add(be)}else Ke(le,j,G),L.add(le)}),g.pop(),p=null,L},this.compileAsync=function(A,O,j=null){const L=this.compile(A,O,j);return new Promise(G=>{function le(){if(L.forEach(function(_e){Ue.get(_e).currentProgram.isReady()&&L.delete(_e)}),L.size===0){G(A);return}setTimeout(le,10)}Me.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let Je=null;function yt(A){Je&&Je(A)}function Ut(){Ot.stop()}function Ze(){Ot.start()}const Ot=new Oy;Ot.setAnimationLoop(yt),typeof self<"u"&&Ot.setContext(self),this.setAnimationLoop=function(A){Je=A,He.setAnimationLoop(A),A===null?Ot.stop():Ot.start()},He.addEventListener("sessionstart",Ut),He.addEventListener("sessionend",Ze),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(He.cameraAutoUpdate===!0&&He.updateCamera(O),O=He.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,O,w),p=we.get(A,g.length),p.init(),g.push(p),de.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),F.setFromProjectionMatrix(de),re=this.localClippingEnabled,Y=ke.init(this.clippingPlanes,re),x=ge.get(A,u.length),x.init(),u.push(x),vn(A,O,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(I,B),this.info.render.frame++,Y===!0&&ke.beginShadows();const j=p.state.shadowsArray;if(J.render(j,A,O),Y===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),qe.render(x,A),p.setupLights(v._useLegacyLights),O.isArrayCamera){const L=O.cameras;for(let G=0,le=L.length;G<le;G++){const _e=L[G];bo(x,A,_e,_e.viewport)}}else bo(x,A,O);w!==null&&(C.updateMultisampleRenderTarget(w),C.updateRenderTargetMipmap(w)),A.isScene===!0&&A.onAfterRender(v,A,O),Ie.resetDefaultState(),N=-1,E=null,g.pop(),g.length>0?p=g[g.length-1]:p=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function vn(A,O,j,L){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)j=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||F.intersectsSprite(A)){L&&Ce.setFromMatrixPosition(A.matrixWorld).applyMatrix4(de);const _e=ie.update(A),be=A.material;be.visible&&x.push(A,_e,be,j,Ce.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||F.intersectsObject(A))){const _e=ie.update(A),be=A.material;if(L&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ce.copy(A.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Ce.copy(_e.boundingSphere.center)),Ce.applyMatrix4(A.matrixWorld).applyMatrix4(de)),Array.isArray(be)){const Re=_e.groups;for(let Oe=0,Le=Re.length;Oe<Le;Oe++){const De=Re[Oe],ft=be[De.materialIndex];ft&&ft.visible&&x.push(A,_e,ft,j,Ce.z,De)}}else be.visible&&x.push(A,_e,be,j,Ce.z,null)}}const le=A.children;for(let _e=0,be=le.length;_e<be;_e++)vn(le[_e],O,j,L)}function bo(A,O,j,L){const G=A.opaque,le=A.transmissive,_e=A.transparent;p.setupLightsView(j),Y===!0&&ke.setGlobalState(v.clippingPlanes,j),le.length>0&&wo(G,le,O,j),L&&ve.viewport(b.copy(L)),G.length>0&&qr(G,O,j),le.length>0&&qr(le,O,j),_e.length>0&&qr(_e,O,j),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function wo(A,O,j,L){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;const le=Ne.isWebGL2;ae===null&&(ae=new Wr(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?mo:ur,minFilter:po,samples:le?4:0})),v.getDrawingBufferSize(Ee),le?ae.setSize(Ee.x,Ee.y):ae.setSize(qd(Ee.x),qd(Ee.y));const _e=v.getRenderTarget();v.setRenderTarget(ae),v.getClearColor(Z),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear();const be=v.toneMapping;v.toneMapping=cr,qr(A,j,L),C.updateMultisampleRenderTarget(ae),C.updateRenderTargetMipmap(ae);let Re=!1;for(let Oe=0,Le=O.length;Oe<Le;Oe++){const De=O[Oe],ft=De.object,Ht=De.geometry,St=De.material,Pn=De.group;if(St.side===Si&&ft.layers.test(L.layers)){const it=St.side;St.side=pn,St.needsUpdate=!0,fs(ft,j,L,Ht,St,Pn),St.side=it,St.needsUpdate=!0,Re=!0}}Re===!0&&(C.updateMultisampleRenderTarget(ae),C.updateRenderTargetMipmap(ae)),v.setRenderTarget(_e),v.setClearColor(Z,D),v.toneMapping=be}function qr(A,O,j){const L=O.isScene===!0?O.overrideMaterial:null;for(let G=0,le=A.length;G<le;G++){const _e=A[G],be=_e.object,Re=_e.geometry,Oe=L===null?_e.material:L,Le=_e.group;be.layers.test(j.layers)&&fs(be,O,j,Re,Oe,Le)}}function fs(A,O,j,L,G,le){A.onBeforeRender(v,O,j,L,G,le),A.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(v,O,j,L,A,le),G.transparent===!0&&G.side===Si&&G.forceSinglePass===!1?(G.side=pn,G.needsUpdate=!0,v.renderBufferDirect(j,O,L,G,A,le),G.side=pr,G.needsUpdate=!0,v.renderBufferDirect(j,O,L,G,A,le),G.side=Si):v.renderBufferDirect(j,O,L,G,A,le),A.onAfterRender(v,O,j,L,G,le)}function Kr(A,O,j){O.isScene!==!0&&(O=ye);const L=Ue.get(A),G=p.state.lights,le=p.state.shadowsArray,_e=G.state.version,be=xe.getParameters(A,G.state,le,O,j),Re=xe.getProgramCacheKey(be);let Oe=L.programs;L.environment=A.isMeshStandardMaterial?O.environment:null,L.fog=O.fog,L.envMap=(A.isMeshStandardMaterial?W:M).get(A.envMap||L.environment),Oe===void 0&&(A.addEventListener("dispose",ue),Oe=new Map,L.programs=Oe);let Le=Oe.get(Re);if(Le!==void 0){if(L.currentProgram===Le&&L.lightsStateVersion===_e)return xr(A,be),Le}else be.uniforms=xe.getUniforms(A),A.onBuild(j,be,v),A.onBeforeCompile(be,v),Le=xe.acquireProgram(be,Re),Oe.set(Re,Le),L.uniforms=be.uniforms;const De=L.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(De.clippingPlanes=ke.uniform),xr(A,be),L.needsLights=Ro(A),L.lightsStateVersion=_e,L.needsLights&&(De.ambientLightColor.value=G.state.ambient,De.lightProbe.value=G.state.probe,De.directionalLights.value=G.state.directional,De.directionalLightShadows.value=G.state.directionalShadow,De.spotLights.value=G.state.spot,De.spotLightShadows.value=G.state.spotShadow,De.rectAreaLights.value=G.state.rectArea,De.ltc_1.value=G.state.rectAreaLTC1,De.ltc_2.value=G.state.rectAreaLTC2,De.pointLights.value=G.state.point,De.pointLightShadows.value=G.state.pointShadow,De.hemisphereLights.value=G.state.hemi,De.directionalShadowMap.value=G.state.directionalShadowMap,De.directionalShadowMatrix.value=G.state.directionalShadowMatrix,De.spotShadowMap.value=G.state.spotShadowMap,De.spotLightMatrix.value=G.state.spotLightMatrix,De.spotLightMap.value=G.state.spotLightMap,De.pointShadowMap.value=G.state.pointShadowMap,De.pointShadowMatrix.value=G.state.pointShadowMatrix),L.currentProgram=Le,L.uniformsList=null,Le}function _r(A){if(A.uniformsList===null){const O=A.currentProgram.getUniforms();A.uniformsList=Gl.seqWithValue(O.seq,A.uniforms)}return A.uniformsList}function xr(A,O){const j=Ue.get(A);j.outputColorSpace=O.outputColorSpace,j.batching=O.batching,j.instancing=O.instancing,j.instancingColor=O.instancingColor,j.skinning=O.skinning,j.morphTargets=O.morphTargets,j.morphNormals=O.morphNormals,j.morphColors=O.morphColors,j.morphTargetsCount=O.morphTargetsCount,j.numClippingPlanes=O.numClippingPlanes,j.numIntersection=O.numClipIntersection,j.vertexAlphas=O.vertexAlphas,j.vertexTangents=O.vertexTangents,j.toneMapping=O.toneMapping}function Ao(A,O,j,L,G){O.isScene!==!0&&(O=ye),C.resetTextureUnits();const le=O.fog,_e=L.isMeshStandardMaterial?O.environment:null,be=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Li,Re=(L.isMeshStandardMaterial?W:M).get(L.envMap||_e),Oe=L.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Le=!!j.attributes.tangent&&(!!L.normalMap||L.anisotropy>0),De=!!j.morphAttributes.position,ft=!!j.morphAttributes.normal,Ht=!!j.morphAttributes.color;let St=cr;L.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(St=v.toneMapping);const Pn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,it=Pn!==void 0?Pn.length:0,Be=Ue.get(L),Zr=p.state.lights;if(Y===!0&&(re===!0||A!==E)){const Kt=A===E&&L.id===N;ke.setState(L,A,Kt)}let ot=!1;L.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Zr.state.version||Be.outputColorSpace!==be||G.isBatchedMesh&&Be.batching===!1||!G.isBatchedMesh&&Be.batching===!0||G.isInstancedMesh&&Be.instancing===!1||!G.isInstancedMesh&&Be.instancing===!0||G.isSkinnedMesh&&Be.skinning===!1||!G.isSkinnedMesh&&Be.skinning===!0||G.isInstancedMesh&&Be.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Be.instancingColor===!1&&G.instanceColor!==null||Be.envMap!==Re||L.fog===!0&&Be.fog!==le||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==ke.numPlanes||Be.numIntersection!==ke.numIntersection)||Be.vertexAlphas!==Oe||Be.vertexTangents!==Le||Be.morphTargets!==De||Be.morphNormals!==ft||Be.morphColors!==Ht||Be.toneMapping!==St||Ne.isWebGL2===!0&&Be.morphTargetsCount!==it)&&(ot=!0):(ot=!0,Be.__version=L.version);let ti=Be.currentProgram;ot===!0&&(ti=Kr(L,O,G));let ds=!1,Oi=!1,Qr=!1;const bt=ti.getUniforms(),ni=Be.uniforms;if(ve.useProgram(ti.program)&&(ds=!0,Oi=!0,Qr=!0),L.id!==N&&(N=L.id,Oi=!0),ds||E!==A){bt.setValue(z,"projectionMatrix",A.projectionMatrix),bt.setValue(z,"viewMatrix",A.matrixWorldInverse);const Kt=bt.map.cameraPosition;Kt!==void 0&&Kt.setValue(z,Ce.setFromMatrixPosition(A.matrixWorld)),Ne.logarithmicDepthBuffer&&bt.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshLambertMaterial||L.isMeshBasicMaterial||L.isMeshStandardMaterial||L.isShaderMaterial)&&bt.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),E!==A&&(E=A,Oi=!0,Qr=!0)}if(G.isSkinnedMesh){bt.setOptional(z,G,"bindMatrix"),bt.setOptional(z,G,"bindMatrixInverse");const Kt=G.skeleton;Kt&&(Ne.floatVertexTextures?(Kt.boneTexture===null&&Kt.computeBoneTexture(),bt.setValue(z,"boneTexture",Kt.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(bt.setOptional(z,G,"batchingTexture"),bt.setValue(z,"batchingTexture",G._matricesTexture,C));const Jr=j.morphAttributes;if((Jr.position!==void 0||Jr.normal!==void 0||Jr.color!==void 0&&Ne.isWebGL2===!0)&&ze.update(G,j,ti),(Oi||Be.receiveShadow!==G.receiveShadow)&&(Be.receiveShadow=G.receiveShadow,bt.setValue(z,"receiveShadow",G.receiveShadow)),L.isMeshGouraudMaterial&&L.envMap!==null&&(ni.envMap.value=Re,ni.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),Oi&&(bt.setValue(z,"toneMappingExposure",v.toneMappingExposure),Be.needsLights&&Jc(ni,Qr),le&&L.fog===!0&&fe.refreshFogUniforms(ni,le),fe.refreshMaterialUniforms(ni,L,q,X,ae),Gl.upload(z,_r(Be),ni,C)),L.isShaderMaterial&&L.uniformsNeedUpdate===!0&&(Gl.upload(z,_r(Be),ni,C),L.uniformsNeedUpdate=!1),L.isSpriteMaterial&&bt.setValue(z,"center",G.center),bt.setValue(z,"modelViewMatrix",G.modelViewMatrix),bt.setValue(z,"normalMatrix",G.normalMatrix),bt.setValue(z,"modelMatrix",G.matrixWorld),L.isShaderMaterial||L.isRawShaderMaterial){const Kt=L.uniformsGroups;for(let yr=0,Co=Kt.length;yr<Co;yr++)if(Ne.isWebGL2){const hs=Kt[yr];Ye.update(hs,ti),Ye.bind(hs,ti)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ti}function Jc(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function Ro(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(A,O,j){Ue.get(A.texture).__webglTexture=O,Ue.get(A.depthTexture).__webglTexture=j;const L=Ue.get(A);L.__hasExternalTextures=!0,L.__hasExternalTextures&&(L.__autoAllocateDepthBuffer=j===void 0,L.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),L.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,O){const j=Ue.get(A);j.__webglFramebuffer=O,j.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(A,O=0,j=0){w=A,R=O,T=j;let L=!0,G=null,le=!1,_e=!1;if(A){const Re=Ue.get(A);Re.__useDefaultFramebuffer!==void 0?(ve.bindFramebuffer(z.FRAMEBUFFER,null),L=!1):Re.__webglFramebuffer===void 0?C.setupRenderTarget(A):Re.__hasExternalTextures&&C.rebindTextures(A,Ue.get(A.texture).__webglTexture,Ue.get(A.depthTexture).__webglTexture);const Oe=A.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(_e=!0);const Le=Ue.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Le[O])?G=Le[O][j]:G=Le[O],le=!0):Ne.isWebGL2&&A.samples>0&&C.useMultisampledRTT(A)===!1?G=Ue.get(A).__webglMultisampledFramebuffer:Array.isArray(Le)?G=Le[j]:G=Le,b.copy(A.viewport),k.copy(A.scissor),$=A.scissorTest}else b.copy(H).multiplyScalar(q).floor(),k.copy(K).multiplyScalar(q).floor(),$=Q;if(ve.bindFramebuffer(z.FRAMEBUFFER,G)&&Ne.drawBuffers&&L&&ve.drawBuffers(A,G),ve.viewport(b),ve.scissor(k),ve.setScissorTest($),le){const Re=Ue.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+O,Re.__webglTexture,j)}else if(_e){const Re=Ue.get(A.texture),Oe=O||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Re.__webglTexture,j||0,Oe)}N=-1},this.readRenderTargetPixels=function(A,O,j,L,G,le,_e){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Ue.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&_e!==void 0&&(be=be[_e]),be){ve.bindFramebuffer(z.FRAMEBUFFER,be);try{const Re=A.texture,Oe=Re.format,Le=Re.type;if(Oe!==Zn&&me.convert(Oe)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=Le===mo&&(Me.has("EXT_color_buffer_half_float")||Ne.isWebGL2&&Me.has("EXT_color_buffer_float"));if(Le!==ur&&me.convert(Le)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Le===Ji&&(Ne.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-L&&j>=0&&j<=A.height-G&&z.readPixels(O,j,L,G,me.convert(Oe),me.convert(Le),le)}finally{const Re=w!==null?Ue.get(w).__webglFramebuffer:null;ve.bindFramebuffer(z.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(A,O,j=0){const L=Math.pow(2,-j),G=Math.floor(O.image.width*L),le=Math.floor(O.image.height*L);C.setTexture2D(O,0),z.copyTexSubImage2D(z.TEXTURE_2D,j,0,0,A.x,A.y,G,le),ve.unbindTexture()},this.copyTextureToTexture=function(A,O,j,L=0){const G=O.image.width,le=O.image.height,_e=me.convert(j.format),be=me.convert(j.type);C.setTexture2D(j,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,j.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,j.unpackAlignment),O.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,L,A.x,A.y,G,le,_e,be,O.image.data):O.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,L,A.x,A.y,O.mipmaps[0].width,O.mipmaps[0].height,_e,O.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,L,A.x,A.y,_e,be,O.image),L===0&&j.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),ve.unbindTexture()},this.copyTextureToTexture3D=function(A,O,j,L,G=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const le=A.max.x-A.min.x+1,_e=A.max.y-A.min.y+1,be=A.max.z-A.min.z+1,Re=me.convert(L.format),Oe=me.convert(L.type);let Le;if(L.isData3DTexture)C.setTexture3D(L,0),Le=z.TEXTURE_3D;else if(L.isDataArrayTexture||L.isCompressedArrayTexture)C.setTexture2DArray(L,0),Le=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,L.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,L.unpackAlignment);const De=z.getParameter(z.UNPACK_ROW_LENGTH),ft=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Ht=z.getParameter(z.UNPACK_SKIP_PIXELS),St=z.getParameter(z.UNPACK_SKIP_ROWS),Pn=z.getParameter(z.UNPACK_SKIP_IMAGES),it=j.isCompressedTexture?j.mipmaps[G]:j.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,it.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,it.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,A.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,A.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,A.min.z),j.isDataTexture||j.isData3DTexture?z.texSubImage3D(Le,G,O.x,O.y,O.z,le,_e,be,Re,Oe,it.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Le,G,O.x,O.y,O.z,le,_e,be,Re,it.data)):z.texSubImage3D(Le,G,O.x,O.y,O.z,le,_e,be,Re,Oe,it),z.pixelStorei(z.UNPACK_ROW_LENGTH,De),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ft),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Ht),z.pixelStorei(z.UNPACK_SKIP_ROWS,St),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Pn),G===0&&L.generateMipmaps&&z.generateMipmap(Le),ve.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?C.setTextureCube(A,0):A.isData3DTexture?C.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?C.setTexture2DArray(A,0):C.setTexture2D(A,0),ve.unbindTexture()},this.resetState=function(){R=0,T=0,w=null,ve.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===op?"display-p3":"srgb",n.unpackColorSpace=et.workingColorSpace===$c?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===kt?kr:Sy}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===kr?kt:Li}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class cN extends fp{}cN.prototype.isWebGL1Renderer=!0;class Vy extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class uN{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Xd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=fr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Zt=new U;class Mc{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)Zt.fromBufferAttribute(this,n),Zt.applyMatrix4(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Zt.fromBufferAttribute(this,n),Zt.applyNormalMatrix(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Zt.fromBufferAttribute(this,n),Zt.transformDirection(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}setX(e,n){return this.normalized&&(n=nt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Ei(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Ei(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Ei(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Ei(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=nt(n,this.array),i=nt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=nt(n,this.array),i=nt(i,this.array),r=nt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(n=nt(n,this.array),i=nt(i,this.array),r=nt(r,this.array),a=nt(a,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)n.push(this.data.array[r+a])}return new bn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Mc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)n.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Wy extends Yr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let _a;const ws=new U,xa=new U,ya=new U,Sa=new Fe,As=new Fe,jy=new xt,xl=new U,Rs=new U,yl=new U,Qv=new Fe,xf=new Fe,Jv=new Fe;class fN extends $t{constructor(e=new Wy){if(super(),this.isSprite=!0,this.type="Sprite",_a===void 0){_a=new Cn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new uN(n,5);_a.setIndex([0,1,2,0,2,3]),_a.setAttribute("position",new Mc(i,3,0,!1)),_a.setAttribute("uv",new Mc(i,2,3,!1))}this.geometry=_a,this.material=e,this.center=new Fe(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),xa.setFromMatrixScale(this.matrixWorld),jy.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ya.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&xa.multiplyScalar(-ya.z);const i=this.material.rotation;let r,a;i!==0&&(a=Math.cos(i),r=Math.sin(i));const s=this.center;Sl(xl.set(-.5,-.5,0),ya,s,xa,r,a),Sl(Rs.set(.5,-.5,0),ya,s,xa,r,a),Sl(yl.set(.5,.5,0),ya,s,xa,r,a),Qv.set(0,0),xf.set(1,0),Jv.set(1,1);let o=e.ray.intersectTriangle(xl,Rs,yl,!1,ws);if(o===null&&(Sl(Rs.set(-.5,.5,0),ya,s,xa,r,a),xf.set(0,1),o=e.ray.intersectTriangle(xl,yl,Rs,!1,ws),o===null))return;const l=e.ray.origin.distanceTo(ws);l<e.near||l>e.far||n.push({distance:l,point:ws.clone(),uv:In.getInterpolation(ws,xl,Rs,yl,Qv,xf,Jv,new Fe),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Sl(t,e,n,i,r,a){Sa.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(As.x=a*Sa.x-r*Sa.y,As.y=r*Sa.x+a*Sa.y):As.copy(Sa),t.copy(e),t.x+=As.x,t.y+=As.y,t.applyMatrix4(jy)}class Xy extends Yr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const e0=new xt,Zd=new Ry,El=new Yc,Ml=new U;class dN extends $t{constructor(e=new Cn,n=new Xy){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),El.copy(i.boundingSphere),El.applyMatrix4(r),El.radius+=a,e.ray.intersectsSphere(El)===!1)return;e0.copy(r).invert(),Zd.copy(e.ray).applyMatrix4(e0);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const h=Math.max(0,s.start),m=Math.min(c.count,s.start+s.count);for(let _=h,x=m;_<x;_++){const p=c.getX(_);Ml.fromBufferAttribute(d,p),t0(Ml,p,l,r,e,n,this)}}else{const h=Math.max(0,s.start),m=Math.min(d.count,s.start+s.count);for(let _=h,x=m;_<x;_++)Ml.fromBufferAttribute(d,_),t0(Ml,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function t0(t,e,n,i,r,a,s){const o=Zd.distanceSqToPoint(t);if(o<n){const l=new U;Zd.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:s})}}class hN extends mn{constructor(e,n,i,r,a,s,o,l,c){super(e,n,i,r,a,s,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zc extends Cn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const a=[],s=[];o(r),c(i),f(),this.setAttribute("position",new Yt(a,3)),this.setAttribute("normal",new Yt(a.slice(),3)),this.setAttribute("uv",new Yt(s,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(g){const v=new U,S=new U,R=new U;for(let T=0;T<n.length;T+=3)m(n[T+0],v),m(n[T+1],S),m(n[T+2],R),l(v,S,R,g)}function l(g,v,S,R){const T=R+1,w=[];for(let N=0;N<=T;N++){w[N]=[];const E=g.clone().lerp(S,N/T),b=v.clone().lerp(S,N/T),k=T-N;for(let $=0;$<=k;$++)$===0&&N===T?w[N][$]=E:w[N][$]=E.clone().lerp(b,$/k)}for(let N=0;N<T;N++)for(let E=0;E<2*(T-N)-1;E++){const b=Math.floor(E/2);E%2===0?(h(w[N][b+1]),h(w[N+1][b]),h(w[N][b])):(h(w[N][b+1]),h(w[N+1][b+1]),h(w[N+1][b]))}}function c(g){const v=new U;for(let S=0;S<a.length;S+=3)v.x=a[S+0],v.y=a[S+1],v.z=a[S+2],v.normalize().multiplyScalar(g),a[S+0]=v.x,a[S+1]=v.y,a[S+2]=v.z}function f(){const g=new U;for(let v=0;v<a.length;v+=3){g.x=a[v+0],g.y=a[v+1],g.z=a[v+2];const S=p(g)/2/Math.PI+.5,R=u(g)/Math.PI+.5;s.push(S,1-R)}_(),d()}function d(){for(let g=0;g<s.length;g+=6){const v=s[g+0],S=s[g+2],R=s[g+4],T=Math.max(v,S,R),w=Math.min(v,S,R);T>.9&&w<.1&&(v<.2&&(s[g+0]+=1),S<.2&&(s[g+2]+=1),R<.2&&(s[g+4]+=1))}}function h(g){a.push(g.x,g.y,g.z)}function m(g,v){const S=g*3;v.x=e[S+0],v.y=e[S+1],v.z=e[S+2]}function _(){const g=new U,v=new U,S=new U,R=new U,T=new Fe,w=new Fe,N=new Fe;for(let E=0,b=0;E<a.length;E+=9,b+=6){g.set(a[E+0],a[E+1],a[E+2]),v.set(a[E+3],a[E+4],a[E+5]),S.set(a[E+6],a[E+7],a[E+8]),T.set(s[b+0],s[b+1]),w.set(s[b+2],s[b+3]),N.set(s[b+4],s[b+5]),R.copy(g).add(v).add(S).divideScalar(3);const k=p(R);x(T,b+0,g,k),x(w,b+2,v,k),x(N,b+4,S,k)}}function x(g,v,S,R){R<0&&g.x===1&&(s[v]=g.x-1),S.x===0&&S.z===0&&(s[v]=R/2/Math.PI+.5)}function p(g){return Math.atan2(g.z,-g.x)}function u(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zc(e.vertices,e.indices,e.radius,e.details)}}class dp extends Zc{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,a,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new dp(e.radius,e.detail)}}class hp extends Zc{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new hp(e.radius,e.detail)}}class Qc extends Cn{constructor(e=1,n=32,i=16,r=0,a=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:a,thetaStart:s,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(s+o,Math.PI);let c=0;const f=[],d=new U,h=new U,m=[],_=[],x=[],p=[];for(let u=0;u<=i;u++){const g=[],v=u/i;let S=0;u===0&&s===0?S=.5/n:u===i&&l===Math.PI&&(S=-.5/n);for(let R=0;R<=n;R++){const T=R/n;d.x=-e*Math.cos(r+T*a)*Math.sin(s+v*o),d.y=e*Math.cos(s+v*o),d.z=e*Math.sin(r+T*a)*Math.sin(s+v*o),_.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),p.push(T+S,1-v),g.push(c++)}f.push(g)}for(let u=0;u<i;u++)for(let g=0;g<n;g++){const v=f[u][g+1],S=f[u][g],R=f[u+1][g],T=f[u+1][g+1];(u!==0||s>0)&&m.push(v,S,T),(u!==i-1||l<Math.PI)&&m.push(S,R,T)}this.setIndex(m),this.setAttribute("position",new Yt(_,3)),this.setAttribute("normal",new Yt(x,3)),this.setAttribute("uv",new Yt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class pp extends Cn{constructor(e=1,n=.4,i=12,r=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:a},i=Math.floor(i),r=Math.floor(r);const s=[],o=[],l=[],c=[],f=new U,d=new U,h=new U;for(let m=0;m<=i;m++)for(let _=0;_<=r;_++){const x=_/r*a,p=m/i*Math.PI*2;d.x=(e+n*Math.cos(p))*Math.cos(x),d.y=(e+n*Math.cos(p))*Math.sin(x),d.z=n*Math.sin(p),o.push(d.x,d.y,d.z),f.x=e*Math.cos(x),f.y=e*Math.sin(x),h.subVectors(d,f).normalize(),l.push(h.x,h.y,h.z),c.push(_/r),c.push(m/i)}for(let m=1;m<=i;m++)for(let _=1;_<=r;_++){const x=(r+1)*m+_-1,p=(r+1)*(m-1)+_-1,u=(r+1)*(m-1)+_,g=(r+1)*m+_;s.push(x,p,g),s.push(p,u,g)}this.setIndex(s),this.setAttribute("position",new Yt(o,3)),this.setAttribute("normal",new Yt(l,3)),this.setAttribute("uv",new Yt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pp(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class pN extends Yr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new je(16777215),this.specular=new je(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ey,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ap,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $y extends $t{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const yf=new xt,n0=new U,i0=new U;class mN{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lp,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;n0.setFromMatrixPosition(e.matrixWorld),n.position.copy(n0),i0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(i0),n.updateMatrixWorld(),yf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yf),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(yf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const r0=new xt,Cs=new U,Sf=new U;class gN extends mN{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Fe(4,2),this._viewportCount=6,this._viewports=[new ht(2,1,1,1),new ht(0,1,1,1),new ht(3,1,1,1),new ht(1,1,1,1),new ht(3,0,1,1),new ht(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),Cs.setFromMatrixPosition(e.matrixWorld),i.position.copy(Cs),Sf.copy(i.position),Sf.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Sf),i.updateMatrixWorld(),r.makeTranslation(-Cs.x,-Cs.y,-Cs.z),r0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(r0)}}class a0 extends $y{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new gN}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class vN extends $y{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class _N{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=s0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=s0();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function s0(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rp);function xN(){const t=he.useRef(null),{playLaser:e}=he.useContext(Ui);return he.useEffect(()=>{const n=t.current;if(!n)return;const i=new Vy,r=new cn(45,n.clientWidth/n.clientHeight,.1,1e3);r.position.z=7.2;const a=new fp({alpha:!0,antialias:!0});a.setSize(n.clientWidth,n.clientHeight),a.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.appendChild(a.domElement);const s=new Oa;i.add(s);const o=new dp(1.45,1),l=new pN({color:61695,emissive:334640,wireframe:!0,transparent:!0,opacity:.9,wireframeLinewidth:2}),c=new Mn(o,l);s.add(c);const f=new Qc(.75,32,32),d=new Xa({color:65484,transparent:!0,opacity:.75}),h=new Mn(f,d);s.add(h);function m(F,Y,re,ae,de,Ee){const Ce=new pp(F,Y,16,120),ye=new Xa({color:re,wireframe:!0,transparent:!0,opacity:.75}),Ve=new Mn(Ce,ye);return Ve.rotation.set(ae,de,Ee),Ve}const _=m(2.05,.022,61695,Math.PI/4,0,0),x=m(2.4,.018,11032055,-Math.PI/3,Math.PI/6,0),p=m(2.7,.022,65382,Math.PI/2.5,-Math.PI/4,Math.PI/5);s.add(_,x,p);const u=10,g=[],v=new hp(.12),S=new Xa({color:61695});for(let F=0;F<u;F++){const Y=new Mn(v,S),re=F/u*Math.PI*2,ae=1.9+F%3*.45;Y.position.set(Math.cos(re)*ae,Math.sin(re)*.6,Math.sin(re)*ae),s.add(Y),g.push({mesh:Y,speed:.014+F%4*.003,angle:re,dist:ae})}const R=400,T=new Cn,w=new Float32Array(R*3),N=new Float32Array(R*3),E=[new je(61695),new je(11032055),new je(65382),new je(3718648)];for(let F=0;F<R;F++){const Y=F*3,re=3.6+Math.random()*5.2,ae=Math.random()*Math.PI*2,de=Math.acos(Math.random()*2-1);w[Y]=re*Math.sin(de)*Math.cos(ae),w[Y+1]=re*Math.sin(de)*Math.sin(ae),w[Y+2]=re*Math.cos(de);const Ee=E[F%E.length];N[Y]=Ee.r,N[Y+1]=Ee.g,N[Y+2]=Ee.b}T.setAttribute("position",new bn(w,3)),T.setAttribute("color",new bn(N,3));const b=new Xy({size:.048,vertexColors:!0,transparent:!0,opacity:.8,blending:Bd}),k=new dN(T,b);i.add(k),i.add(new vN(397601,1.4));const $=new a0(61695,2.4,25);$.position.set(5,4,6),i.add($);const Z=new a0(11032055,2.2,25);Z.position.set(-5,-4,4),i.add(Z);let D=0,V=0,X=1;const q=F=>{var de,Ee,Ce,ye;const Y=n.getBoundingClientRect(),re=(F.clientX??((Ee=(de=F.touches)==null?void 0:de[0])==null?void 0:Ee.clientX)??0)-Y.left-Y.width/2,ae=(F.clientY??((ye=(Ce=F.touches)==null?void 0:Ce[0])==null?void 0:ye.clientY)??0)-Y.top-Y.height/2;D=re/Y.width*1.3,V=ae/Y.height*1.3};window.addEventListener("mousemove",q),n.addEventListener("touchmove",q,{passive:!0});const I=()=>{X=4,h.scale.set(1.6,1.6,1.6),setTimeout(()=>h.scale.set(1,1,1),220);try{e()}catch{}};n.addEventListener("click",I);const B=new _N;let H;const K=()=>{H=requestAnimationFrame(K);const F=B.getDelta(),Y=B.getElapsedTime();s.rotation.y+=(D-s.rotation.y)*.06,s.rotation.x+=(V-s.rotation.x)*.06,c.rotation.y+=.009*X,c.rotation.x+=.006*X,_.rotation.z+=.008*X,x.rotation.z-=.01*X,p.rotation.x+=.007*X;const re=Math.sin(Y*3.2)*.09+1;h.scale.lerp(new U(re,re,re),.12),g.forEach(ae=>{ae.angle+=ae.speed*X,ae.mesh.position.x=Math.cos(ae.angle)*ae.dist,ae.mesh.position.z=Math.sin(ae.angle)*ae.dist,ae.mesh.position.y=Math.sin(ae.angle*2.2+Y)*.65,ae.mesh.rotation.y+=.03}),k.rotation.y=Y*.025,k.rotation.x=Math.sin(Y*.018)*.12,X>1&&(X-=F*2.5,X<1&&(X=1)),a.render(i,r)};K();const Q=()=>{n&&(r.aspect=n.clientWidth/n.clientHeight,r.updateProjectionMatrix(),a.setSize(n.clientWidth,n.clientHeight))};return window.addEventListener("resize",Q),()=>{cancelAnimationFrame(H),window.removeEventListener("mousemove",q),window.removeEventListener("resize",Q),n.removeEventListener("click",I),n.removeEventListener("touchmove",q),a.dispose(),n.contains(a.domElement)&&n.removeChild(a.domElement)}},[]),y.jsxs("div",{className:"hero-3d-viewport holo-container",ref:t,children:[y.jsxs("div",{className:"hud-corner hud-tl",children:["NODE // HOLO-CORE",y.jsx("br",{}),"STATE: SECURE"]}),y.jsxs("div",{className:"hud-corner hud-tr",children:["PROTOCOL: 0x7E",y.jsx("br",{}),"ENCRYPT: POLY1305"]}),y.jsxs("div",{className:"hud-corner hud-bl",children:["HIPS: ACTIVE",y.jsx("br",{}),"FREQ: 433 MHz"]}),y.jsxs("div",{className:"hud-corner hud-br",children:["IP: 127.0.0.1",y.jsx("br",{}),"PORT: 3000 (EST)"]}),y.jsxs("div",{className:"hud-badge-interactive holo-pulse",children:[y.jsx("i",{className:"fas fa-hand-pointer text-cyan"}),y.jsx("span",{children:"INTERACTIVE 3D HOLO-CORE • DRAG & CLICK"})]})]})}function yN({onOpenCV:t}){const{playBeep:e}=he.useContext(Ui),[n,i]=he.useState(!1),r="./",{personalInfo:a}=gn;return y.jsx("section",{className:"hero-section",id:"hero",children:y.jsxs("div",{className:"container hero-grid",children:[y.jsxs("div",{className:"hero-content",children:[y.jsxs("div",{className:"hero-tagline-wrapper holo-border",children:[y.jsx("i",{className:"fas fa-shield-halved text-cyan"}),y.jsx("span",{children:"PROTOCOL 0x7E // QUANTUM DEFENSE & NEURAL AI"})]}),y.jsxs("div",{className:"hero-profile-header",children:[y.jsxs("div",{className:"profile-avatar-wrapper",children:[y.jsx("div",{className:"profile-scanner-ring"}),y.jsx("img",{src:n?"https://avatars.githubusercontent.com/u/347058330?v=4":a.avatar,alt:a.name,className:"profile-avatar-img",onError:()=>i(!0)}),y.jsx("span",{className:"profile-status-blip",title:"System Status: Active"})]}),y.jsxs("div",{className:"profile-meta-text",children:[y.jsxs("span",{className:"profile-handle-badge",children:[y.jsx("i",{className:"fab fa-github text-green"})," @",gn.socialLinks.githubUsername]}),y.jsxs("span",{className:"profile-location-text",children:[y.jsx("i",{className:"fas fa-location-dot text-cyan"})," ",a.location]})]})]}),y.jsx("h1",{className:"hero-name holo-title",children:a.name}),y.jsx("div",{className:"hero-alt-name",children:y.jsxs("span",{children:["Also known as ",y.jsx("strong",{children:a.preferredName})]})}),y.jsx("div",{className:"hero-role",children:y.jsx("span",{style:{color:"#000000",fontWeight:"800"},children:a.title})}),y.jsx("p",{className:"hero-description",children:a.tagline}),y.jsxs("div",{className:"hero-cta-group",children:[y.jsx(Hl,{activeOpacity:.8,onPress:()=>{e(850,.03),t()},style:{textDecoration:"none"},children:y.jsxs("div",{className:"cyber-btn cyber-btn-primary holo-glow",children:[y.jsx("i",{className:"fas fa-eye"}),y.jsx("span",{children:"Preview CV"})]})}),y.jsxs("a",{href:`${r}${a.cvFileName}`,download:"David_Hany_CV.pdf",className:"cyber-btn cyber-btn-outline",onMouseEnter:()=>e(850,.03),children:[y.jsx("i",{className:"fas fa-download text-cyan"}),y.jsx("span",{children:"Download PDF"})]}),y.jsx(Hl,{activeOpacity:.8,onPress:()=>{e(900,.03),jc()},style:{textDecoration:"none"},children:y.jsxs("div",{className:"cyber-btn cyber-btn-linkedin",children:[y.jsx("i",{className:"fab fa-linkedin-in text-cyan"}),y.jsx("span",{children:"LinkedIn"}),y.jsx("i",{className:"fas fa-check text-green",style:{fontSize:"0.85rem"}})]})}),y.jsx(Hl,{activeOpacity:.8,onPress:()=>{e(900,.03),fy()},style:{textDecoration:"none"},children:y.jsxs("div",{className:"cyber-btn cyber-btn-ghost",children:[y.jsx("i",{className:"fab fa-github text-green"}),y.jsx("span",{children:"GitHub"})]})})]}),y.jsx("div",{className:"hero-metrics holo-glass",children:a.metrics.map((s,o)=>y.jsxs("div",{className:"metric-item",children:[y.jsx("span",{className:"metric-value",style:{color:"#000000",fontWeight:"900"},children:s.value}),y.jsx("span",{className:"metric-label",children:s.label})]},o))})]}),y.jsx(xN,{})]})})}function SN(){const{personalInfo:t,education:e}=gn,n=e[0]||{};return y.jsx("section",{id:"about",children:y.jsxs("div",{className:"container",children:[y.jsxs("div",{className:"section-header",children:[y.jsxs("span",{className:"section-pretitle",children:[y.jsx("i",{className:"fas fa-fingerprint"})," OPERATOR_PROFILE // DOSSIER"]}),y.jsxs("h2",{className:"section-title holo-title",children:["About ",t.name]}),y.jsx("p",{className:"section-subtitle",children:"Bridging offensive cybersecurity tactics with edge artificial intelligence."})]}),y.jsxs("div",{className:"about-grid",children:[y.jsxs("div",{className:"about-cyber-terminal",children:[y.jsxs("div",{className:"terminal-header",children:[y.jsxs("div",{className:"terminal-dots",children:[y.jsx("span",{className:"dot dot-red"}),y.jsx("span",{className:"dot dot-yellow"}),y.jsx("span",{className:"dot dot-green"})]}),y.jsx("span",{className:"terminal-title",children:"david@cyber-node:~# identity-check --target davidhany73"}),y.jsxs("span",{className:"font-mono text-cyan",style:{fontSize:"0.7rem"},children:[y.jsx("i",{className:"fas fa-lock"})," SSL_SECURE"]})]}),y.jsxs("div",{className:"terminal-body",children:[y.jsxs("p",{children:[y.jsx("span",{className:"term-cmd",children:"operator@system:~$"})," whoami"]}),y.jsxs("p",{className:"term-output",children:["> ",y.jsx("span",{className:"term-val",children:t.name})," (",t.preferredName,")"]}),y.jsxs("p",{className:"term-output",children:["> ",y.jsx("span",{className:"term-param",children:"Title:"})," ",t.title]}),y.jsx("br",{}),y.jsxs("p",{children:[y.jsx("span",{className:"term-cmd",children:"operator@system:~$"}),' fetch-education --institution "PUA"']}),y.jsxs("p",{className:"term-output",children:["> ",y.jsx("span",{className:"term-param",children:"Degree:"})," ",n.degree]}),y.jsxs("p",{className:"term-output",children:["> ",y.jsx("span",{className:"term-param",children:"Specialization:"})," ",n.specialization]}),y.jsxs("p",{className:"term-output",children:["> ",y.jsx("span",{className:"term-param",children:"University:"})," ",n.institution]}),y.jsxs("p",{className:"term-output",children:["> ",y.jsx("span",{className:"term-param",children:"Timeline:"})," ",n.period," | GPA: ",n.gpa]}),y.jsx("br",{}),y.jsxs("p",{children:[y.jsx("span",{className:"term-cmd",children:"operator@system:~$"})," cat /etc/github-metrics.conf"]}),y.jsxs("p",{className:"term-output",children:["> GitHub Account: github.com/",gn.socialLinks.githubUsername]}),y.jsx("p",{className:"term-output",children:"> Repositories: 11 active systems (Python, C, C++, Web3, Flask)"}),y.jsx("p",{className:"term-output",children:"> Focus: Banking fraud classification, encrypted chat, biometric AI"})]})]}),y.jsxs("div",{className:"about-content",children:[y.jsx("p",{className:"about-bio-lead",children:t.bioLead}),y.jsx("p",{className:"about-bio-text",children:t.bioDetails}),y.jsx("div",{className:"about-features-grid",children:[{icon:"fa-crosshairs",title:"Red Teaming & C2",desc:"Custom penetration tools, brute force simulation, and security auditing."},{icon:"fa-brain",title:"Edge AI & Biometrics",desc:"Multimodal attendance pipelines, OpenCV facial recognition, and fraud ML."},{icon:"fa-shield-halved",title:"Encrypted Networks",desc:"End-to-end socket communications, C crypto engines, and key agreement."},{icon:"fa-cube",title:"Web3 & Full-Stack",desc:"Ethereum crypto wallets, Flask relational DBs, and embedded robotics."}].map(i=>y.jsxs("div",{className:"feature-box holo-border",children:[y.jsx("div",{className:"feature-icon",children:y.jsx("i",{className:`fas ${i.icon}`})}),y.jsx("h3",{className:"feature-title",children:i.title}),y.jsx("p",{className:"feature-desc",children:i.desc})]},i.title))})]})]})]})})}function EN({data:t}){return t.map((e,n)=>y.jsxs("div",{className:"timeline-card-wrapper",children:[y.jsx("div",{className:"timeline-node",children:y.jsx("div",{className:"timeline-node-inner"})}),y.jsxs("div",{className:"timeline-card holo-border",children:[y.jsxs("div",{className:"timeline-header",children:[y.jsxs("div",{children:[y.jsx("h3",{className:"timeline-role",children:e.role}),y.jsxs("div",{className:"timeline-org",children:[y.jsx("i",{className:`fas ${e.orgIcon}`})," ",e.organization]})]}),y.jsx("span",{className:"timeline-badge",children:e.hours})]}),y.jsxs("div",{className:"timeline-location-period",children:[y.jsxs("span",{children:[y.jsx("i",{className:"fas fa-calendar-alt"})," ",e.period]}),y.jsxs("span",{children:[y.jsx("i",{className:"fas fa-location-dot"})," ",e.location]})]}),y.jsx("ul",{className:"timeline-bullets",children:e.bullets.map((i,r)=>y.jsx("li",{dangerouslySetInnerHTML:{__html:i}},r))})]})]},n))}function MN({data:t}){return t.map((e,n)=>y.jsxs("div",{className:"timeline-card-wrapper",children:[y.jsx("div",{className:"timeline-node",children:y.jsx("div",{className:"timeline-node-inner"})}),y.jsxs("div",{className:"timeline-card holo-border",children:[y.jsxs("div",{className:"timeline-header",children:[y.jsxs("div",{children:[y.jsx("h3",{className:"timeline-role",children:e.degree}),y.jsxs("div",{className:"timeline-org",children:[y.jsx("i",{className:"fas fa-graduation-cap"})," ",e.institution]})]}),y.jsx("span",{className:"timeline-badge",children:e.specialization})]}),y.jsxs("div",{className:"timeline-location-period",children:[y.jsxs("span",{children:[y.jsx("i",{className:"fas fa-calendar-alt"})," ",e.period]}),y.jsxs("span",{children:[y.jsx("i",{className:"fas fa-location-dot"})," ",e.location]}),e.gpa&&y.jsxs("span",{children:[y.jsx("i",{className:"fas fa-award"})," GPA: ",e.gpa]})]}),y.jsx("ul",{className:"timeline-bullets",children:e.bullets.map((i,r)=>y.jsx("li",{dangerouslySetInnerHTML:{__html:i}},r))})]})]},n))}function TN(){const[t,e]=he.useState("experience"),{playBeep:n}=he.useContext(Ui),{experience:i,education:r}=gn;return y.jsx("section",{id:"experience",children:y.jsxs("div",{className:"container",children:[y.jsxs("div",{className:"section-header",children:[y.jsxs("span",{className:"section-pretitle",children:[y.jsx("i",{className:"fas fa-network-wired"})," CHRONOLOGY // TRACK RECORD"]}),y.jsx("h2",{className:"section-title holo-title",children:"Experience & Education"}),y.jsx("p",{className:"section-subtitle",children:"Practical industry telecommunications training paired with computer science rigor."})]}),y.jsx("div",{className:"timeline-tabs",children:["experience","education"].map(a=>y.jsx("button",{className:`tab-btn ${t===a?"active":""}`,onClick:()=>{e(a),n(850,.03)},children:a==="experience"?"Industry Experience":"Academic Background"},a))}),y.jsxs("div",{className:"timeline-container",children:[y.jsx("div",{className:"timeline-line"}),t==="experience"?y.jsx(EN,{data:i}):y.jsx(MN,{data:r})]})]})})}function bN({project:t,onHoverSound:e}){const n=he.useRef(null),i=a=>{const s=n.current;if(!s)return;const o=s.getBoundingClientRect(),l=a.clientX-o.left,c=a.clientY-o.top,f=o.width/2,d=o.height/2,h=(c-d)/d*-10,m=(l-f)/f*10;s.style.transform=`perspective(1000px) rotateX(${h}deg) rotateY(${m}deg) scale3d(1.02, 1.02, 1.02)`,s.style.setProperty("--mouse-x",`${l/o.width*100}%`),s.style.setProperty("--mouse-y",`${c/o.height*100}%`)},r=()=>{n.current&&(n.current.style.transform="perspective(1000px) rotateX(0) rotateY(0) scale3d(1,1,1)")};return y.jsxs("div",{className:`project-card holo-border ${t.featured?"project-featured":""}`,ref:n,onMouseMove:i,onMouseLeave:r,onMouseEnter:e,children:[y.jsxs("div",{className:"project-top",children:[y.jsxs("div",{className:"project-header-meta",children:[y.jsx("div",{className:"project-icon-box",children:y.jsx("i",{className:`fas ${t.category.includes("ai")?"fa-brain text-green":t.category.includes("c2")||t.category.includes("redteam")?"fa-skull text-red":t.category.includes("systems")?"fa-robot text-purple":t.category.includes("web")?"fa-cube text-cyan":"fa-shield-halved text-cyan"}`})}),y.jsx("span",{className:`project-badge ${t.badgeColor||"badge-featured"}`,children:t.badge})]}),y.jsx("h3",{className:"project-title",children:t.title}),y.jsx("p",{className:"project-desc",children:t.description})]}),y.jsxs("div",{className:"project-bottom",children:[y.jsx("div",{className:"project-tags",children:t.tech.map(a=>y.jsx("span",{className:"tag-chip",children:a},a))}),y.jsxs("div",{className:"project-actions",children:[y.jsxs("a",{href:t.github,target:"_blank",rel:"noopener noreferrer",className:"project-link-btn",title:`View ${t.title} on GitHub`,children:[y.jsx("i",{className:"fab fa-github"}),y.jsx("span",{children:"GitHub Repo"}),y.jsx("i",{className:"fas fa-arrow-up-right-from-square",style:{fontSize:"0.75rem"}})]}),t.demo&&y.jsxs("a",{href:t.demo,target:"_blank",rel:"noopener noreferrer",className:"project-link-btn text-green",style:{marginLeft:"auto"},children:[y.jsx("i",{className:"fas fa-play"}),y.jsx("span",{children:"Live Demo"})]})]})]})]})}function wN(){const[t,e]=he.useState("all"),[n,i]=he.useState(""),{playBeep:r}=he.useContext(Ui),{categories:a,projects:s}=gn,o=s.filter(l=>{const c=t==="all"||l.category.includes(t),f=n.trim()===""||l.title.toLowerCase().includes(n.toLowerCase())||l.description.toLowerCase().includes(n.toLowerCase())||l.tech.some(d=>d.toLowerCase().includes(n.toLowerCase()));return c&&f});return y.jsx("section",{id:"projects",children:y.jsxs("div",{className:"container",children:[y.jsxs("div",{className:"section-header",children:[y.jsxs("span",{className:"section-pretitle",children:[y.jsx("i",{className:"fas fa-code-branch"})," GITHUB_REPOSITORIES // SHOWCASE"]}),y.jsx("h2",{className:"section-title holo-title",children:"Featured Projects"}),y.jsxs("p",{className:"section-subtitle",children:["Dynamic repository showcase sourced directly from"," ",y.jsxs("a",{href:"https://github.com/davidhany73",target:"_blank",rel:"noopener noreferrer",className:"text-cyan font-mono",style:{textDecoration:"none"},children:["github.com/davidhany73 ",y.jsx("i",{className:"fas fa-arrow-up-right-from-square",style:{fontSize:"0.75rem"}})]})]})]}),y.jsxs("div",{className:"projects-controls-wrapper",children:[y.jsxs("div",{className:"projects-search-box holo-border",children:[y.jsx("i",{className:"fas fa-magnifying-glass text-cyan"}),y.jsx("input",{type:"text",placeholder:"Search projects by name, language, or tech stack (e.g. Python, OpenCV, C)...",value:n,onChange:l=>i(l.target.value),className:"projects-search-input"}),n&&y.jsx("button",{onClick:()=>i(""),className:"search-clear-btn","aria-label":"Clear search",children:"×"})]}),y.jsx("div",{className:"projects-filter-bar",children:a.map(l=>y.jsx("button",{className:`filter-btn ${t===l.value?"active":""}`,onClick:()=>{e(l.value),r(850,.03)},children:l.label},l.value))})]}),o.length>0?y.jsx("div",{className:"projects-grid",children:o.map(l=>y.jsx(bN,{project:l,onHoverSound:()=>r(850,.03)},l.id))}):y.jsxs("div",{className:"projects-empty-state holo-glass",children:[y.jsx("i",{className:"fas fa-folder-open text-dim",style:{fontSize:"2.5rem",marginBottom:"1rem"}}),y.jsxs("p",{className:"font-mono text-muted",children:['No repositories found matching "',n,'".']}),y.jsx("button",{onClick:()=>{i(""),e("all")},className:"cyber-btn cyber-btn-primary",style:{marginTop:"1rem",padding:"0.5rem 1.2rem",fontSize:"0.8rem"},children:"Reset Filters"})]})]})})}const o0=[{text:"Python",color:"#00f0ff"},{text:"C#",color:"#00f0ff"},{text:"Java",color:"#00f0ff"},{text:"JavaScript",color:"#00f0ff"},{text:"SQL / MySQL",color:"#00f0ff"},{text:"Wireshark",color:"#ff0055"},{text:"Metasploit",color:"#ff0055"},{text:"Kali Linux",color:"#ff0055"},{text:"Linux OS",color:"#ff0055"},{text:"Network Defense",color:"#ff0055"},{text:"RASP & HIPS",color:"#ff0055"},{text:"TensorFlow Lite",color:"#00ff66"},{text:"OpenCV",color:"#00ff66"},{text:"Pandas & NumPy",color:"#00ff66"},{text:"MATLAB",color:"#00ff66"},{text:"Node.js",color:"#a855f7"},{text:"Cryptography",color:"#00f0ff"},{text:"Android Security",color:"#00ff66"}];function AN(t,e){const n=document.createElement("canvas");n.width=320,n.height=80;const i=n.getContext("2d");i.fillStyle="rgba(10, 15, 25, 0.85)",i.strokeStyle=e,i.lineWidth=3;const r=10,a=10,s=300,o=60,l=12;i.beginPath(),i.moveTo(r+l,a),i.lineTo(r+s-l,a),i.quadraticCurveTo(r+s,a,r+s,a+l),i.lineTo(r+s,a+o-l),i.quadraticCurveTo(r+s,a+o,r+s-l,a+o),i.lineTo(r+l,a+o),i.quadraticCurveTo(r,a+o,r,a+o-l),i.lineTo(r,a+l),i.quadraticCurveTo(r,a,r+l,a),i.closePath(),i.fill(),i.stroke(),i.fillStyle="#ffffff",i.font='bold 26px "JetBrains Mono", monospace',i.textAlign="center",i.textBaseline="middle",i.fillText(t,160,40);const c=new hN(n);c.minFilter=Sn;const f=new Wy({map:c,transparent:!0,opacity:.92}),d=new fN(f);return d.scale.set(1.1,.28,1),d}function RN(){const t=he.useRef(null);return he.useEffect(()=>{const e=t.current;if(!e)return;const n=new Vy,i=new cn(50,e.clientWidth/e.clientHeight,.1,1e3);i.position.z=4.8;const r=new fp({alpha:!0,antialias:!0});r.setSize(e.clientWidth,e.clientHeight),r.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(r.domElement);const a=new Oa;n.add(a);const s=new Qc(1.9,16,16),o=new Xa({color:61695,wireframe:!0,transparent:!0,opacity:.12});a.add(new Mn(s,o));const l=o0.length,c=2.1,f=Math.PI*(3-Math.sqrt(5));o0.forEach((R,T)=>{const w=1-T/(l-1)*2,N=Math.sqrt(1-w*w),E=f*T,b=AN(R.text,R.color);b.position.set(Math.cos(E)*N*c,w*c,Math.sin(E)*N*c),a.add(b)});let d=!1,h={x:0,y:0},m=0,_=0;const x=R=>{d=!0;const T=R.touches?R.touches[0]:R;h={x:T.clientX,y:T.clientY}},p=()=>{d=!1},u=R=>{if(!d)return;const T=R.touches?R.touches[0]:R;m=(T.clientX-h.x)*.005,_=(T.clientY-h.y)*.005,a.rotation.y+=m,a.rotation.x+=_,h={x:T.clientX,y:T.clientY}};r.domElement.addEventListener("mousedown",x),window.addEventListener("mouseup",p),r.domElement.addEventListener("mousemove",u),r.domElement.addEventListener("touchstart",x,{passive:!0}),window.addEventListener("touchend",p),r.domElement.addEventListener("touchmove",u,{passive:!0});let g;const v=()=>{g=requestAnimationFrame(v),d||(a.rotation.y+=.005+m,a.rotation.x+=_,m*=.95,_*=.95),r.render(n,i)};v();const S=()=>{i.aspect=e.clientWidth/e.clientHeight,i.updateProjectionMatrix(),r.setSize(e.clientWidth,e.clientHeight)};return window.addEventListener("resize",S),()=>{cancelAnimationFrame(g),window.removeEventListener("mouseup",p),window.removeEventListener("touchend",p),window.removeEventListener("resize",S),r.dispose(),e.contains(r.domElement)&&e.removeChild(r.domElement)}},[]),y.jsxs("div",{className:"skills-3d-wrapper",ref:t,children:[y.jsx("div",{className:"hud-corner hud-tl",children:"3D SPHERE VIEW"}),y.jsx("div",{className:"hud-corner hud-tr",children:"FIBONACCI LATTICE"}),y.jsx("div",{className:"hud-corner hud-bl",children:"DRAG TO ROTATE"}),y.jsx("div",{className:"hud-corner hud-br",children:"TAGS: 18"})]})}function CN({name:t,level:e,colorClass:n,fillClass:i}){const r=he.useRef(null);return he.useEffect(()=>{const a=new IntersectionObserver(([s])=>{s.isIntersecting&&r.current&&(r.current.style.width=e)},{threshold:.2});return r.current&&a.observe(r.current),()=>a.disconnect()},[e]),y.jsxs("div",{className:"skill-bar-item",children:[y.jsxs("div",{className:"skill-bar-labels",children:[y.jsx("span",{children:t}),y.jsx("span",{style:{color:"#000000",fontWeight:"800"},children:e})]}),y.jsx("div",{className:"skill-progress-track",children:y.jsx("div",{className:`skill-progress-fill ${i}`,ref:r,style:{width:"0%"},"data-level":e})})]})}function PN(){const{skills:t}=gn,e=[{title:"Programming & Systems Development",iconClass:"icon-prog",icon:"fa-code",colorClass:"text-cyan",fillClass:"fill-cyan",skills:t.programming||[]},{title:"Cybersecurity, Cryptography & Red Team",iconClass:"icon-cyber",icon:"fa-shield-halved",colorClass:"text-purple",fillClass:"fill-purple",skills:t.cybersecurity||[]},{title:"AI, Machine Learning & Computer Vision",iconClass:"icon-ai",icon:"fa-brain",colorClass:"text-green",fillClass:"fill-green",skills:t.aiAndData||[]}];return y.jsx("section",{id:"skills",children:y.jsxs("div",{className:"container",children:[y.jsxs("div",{className:"section-header",children:[y.jsxs("span",{className:"section-pretitle",children:[y.jsx("i",{className:"fas fa-sliders"})," CAPABILITIES // TELEMETRY"]}),y.jsx("h2",{className:"section-title holo-title",children:"Technical Skills"}),y.jsx("p",{className:"section-subtitle",children:"Interactive 3D tag sphere paired with validated proficiency telemetry."})]}),y.jsxs("div",{className:"skills-layout",children:[y.jsx(RN,{}),y.jsx("div",{className:"skills-hud-container",children:e.map(n=>y.jsxs("div",{className:"skill-category-card holo-glass",children:[y.jsxs("div",{className:"skill-cat-header",children:[y.jsx("div",{className:`skill-cat-icon ${n.iconClass}`,children:y.jsx("i",{className:`fas ${n.icon}`})}),y.jsx("h3",{className:"skill-cat-title",children:n.title})]}),y.jsx("div",{className:"skill-bar-group",children:n.skills.map(i=>y.jsx(CN,{name:i.name,level:i.level,colorClass:n.colorClass,fillClass:n.fillClass},i.name))})]},n.title))})]})]})})}function LN(){const{certifications:t}=gn;return y.jsx("section",{id:"certifications",children:y.jsxs("div",{className:"container",children:[y.jsxs("div",{className:"section-header",children:[y.jsxs("span",{className:"section-pretitle",children:[y.jsx("i",{className:"fas fa-certificate"})," VERIFIED // ACCREDITATIONS"]}),y.jsx("h2",{className:"section-title holo-title",children:"Certifications & Awards"}),y.jsx("p",{className:"section-subtitle",children:"Globally accredited professional certifications and university recognitions."})]}),y.jsx("div",{className:"certs-grid",children:t.map((e,n)=>y.jsxs("div",{className:"cert-card holo-border",children:[y.jsx("div",{className:"cert-badge-icon",children:y.jsx("i",{className:`${e.iconPrefix||"fas"} ${e.icon}`})}),y.jsx("h3",{className:"cert-name",children:e.name}),y.jsx("p",{className:"cert-issuer",style:{color:"#0f172a",fontWeight:"700"},children:e.issuer}),y.jsxs("div",{className:"cert-date",children:[y.jsx("i",{className:"far fa-clock"})," ",e.date]}),y.jsxs("span",{className:"cert-verify-tag",style:{color:"#0f172a",fontWeight:"700"},children:[y.jsx("i",{className:"fas fa-shield-check",style:{color:"#059669"}})," ",e.tag]})]},n))})]})})}function NN(){const[t,e]=he.useState(!1),[n,i]=he.useState(!1),{playBeep:r,playLaser:a,playSuccess:s}=he.useContext(Ui),o=he.useContext(Yy),{personalInfo:l,socialLinks:c}=gn,f=(h,m)=>{navigator.clipboard&&navigator.clipboard.writeText(h).then(()=>{o(`Copied ${m}: ${h}`),s()})},d=h=>{h.preventDefault(),e(!0),a(),setTimeout(()=>{e(!1),i(!0),s(),o(`Encrypted Packet Dispatched to ${l.name}!`),h.target.reset(),setTimeout(()=>i(!1),3800)},1300)};return y.jsx("section",{id:"contact",children:y.jsxs("div",{className:"container",children:[y.jsxs("div",{className:"section-header",children:[y.jsxs("span",{className:"section-pretitle",children:[y.jsx("i",{className:"fas fa-satellite-dish"})," TRANSMIT // SECURE CHANNELS"]}),y.jsx("h2",{className:"section-title holo-title",children:"Initiate Contact"}),y.jsx("p",{className:"section-subtitle",children:"Reach out for red-team penetration engagements, Edge AI systems, or full-time roles."})]}),y.jsxs("div",{className:"contact-wrapper holo-glass",children:[y.jsx("div",{className:"hud-corner hud-tl",children:"COMMS // 256-BIT"}),y.jsx("div",{className:"hud-corner hud-tr",children:"STATUS // LISTENING"}),y.jsxs("div",{className:"contact-info-col",children:[y.jsx("h3",{className:"contact-headline",children:"Let's Architect Resilient Systems."}),y.jsx("p",{className:"contact-subtext",children:"Available for offensive security audits, custom C2 framework evaluations, and machine learning deployments at the edge."}),y.jsxs("div",{className:"contact-items-list",children:[y.jsxs("div",{className:"contact-channel-card holo-border",children:[y.jsx("div",{className:"channel-icon",style:{background:"rgba(0, 160, 255, 0.15)",borderColor:"var(--cyan-neon)"},children:y.jsx("i",{className:"fab fa-linkedin-in text-cyan"})}),y.jsxs("div",{className:"channel-details",children:[y.jsx("span",{className:"channel-label",children:"Professional Network"}),y.jsx("span",{className:"channel-val",children:c.linkedinDisplay})]}),y.jsxs("button",{type:"button",className:"copy-pill-btn holo-btn",onClick:()=>{r(950,.03),jc()},title:"Open LinkedIn",children:[y.jsx("i",{className:"fas fa-check text-green"})," Open"]})]}),y.jsxs("div",{className:"contact-channel-card holo-border",children:[y.jsx("div",{className:"channel-icon",children:y.jsx("i",{className:"fab fa-github text-green"})}),y.jsxs("div",{className:"channel-details",children:[y.jsx("span",{className:"channel-label",children:"GitHub Account"}),y.jsxs("span",{className:"channel-val",children:["github.com/",c.githubUsername]})]}),y.jsxs("a",{href:c.github,target:"_blank",rel:"noopener noreferrer",className:"copy-pill-btn holo-btn",style:{textDecoration:"none"},children:[y.jsx("i",{className:"fas fa-arrow-up-right-from-square"})," Repos"]})]}),y.jsxs("div",{className:"contact-channel-card holo-border",children:[y.jsx("div",{className:"channel-icon",children:y.jsx("i",{className:"fas fa-envelope text-cyan"})}),y.jsxs("div",{className:"channel-details",children:[y.jsx("span",{className:"channel-label",children:"Academic & Professional Email"}),y.jsx("span",{className:"channel-val",children:l.email})]}),y.jsxs("button",{type:"button",className:"copy-pill-btn",onClick:()=>f(l.email,"Email"),children:[y.jsx("i",{className:"far fa-copy"})," Copy"]})]}),y.jsxs("div",{className:"contact-channel-card holo-border",children:[y.jsx("div",{className:"channel-icon",children:y.jsx("i",{className:"fas fa-phone text-green"})}),y.jsxs("div",{className:"channel-details",children:[y.jsx("span",{className:"channel-label",children:"Mobile & WhatsApp"}),y.jsx("span",{className:"channel-val",children:l.phone})]}),y.jsxs("button",{type:"button",className:"copy-pill-btn",onClick:()=>f(l.phone,"Phone"),children:[y.jsx("i",{className:"far fa-copy"})," Copy"]})]}),y.jsxs("div",{className:"contact-channel-card holo-border",children:[y.jsx("div",{className:"channel-icon",children:y.jsx("i",{className:"fas fa-location-dot text-purple"})}),y.jsxs("div",{className:"channel-details",children:[y.jsx("span",{className:"channel-label",children:"Current Headquarters"}),y.jsx("span",{className:"channel-val",children:l.location})]})]})]})]}),y.jsxs("form",{className:"contact-form",onSubmit:d,children:[y.jsxs("div",{className:"form-group",children:[y.jsxs("label",{className:"form-label",htmlFor:"sender-name",children:[y.jsx("i",{className:"fas fa-user-astronaut"})," Operator Name"]}),y.jsx("input",{type:"text",id:"sender-name",className:"form-input holo-input",placeholder:"e.g. Sarah Connor",required:!0})]}),y.jsxs("div",{className:"form-group",children:[y.jsxs("label",{className:"form-label",htmlFor:"sender-email",children:[y.jsx("i",{className:"fas fa-at"})," Return Frequency (Email)"]}),y.jsx("input",{type:"email",id:"sender-email",className:"form-input holo-input",placeholder:"e.g. sarah@cyberdyne.io",required:!0})]}),y.jsxs("div",{className:"form-group",children:[y.jsxs("label",{className:"form-label",htmlFor:"sender-msg",children:[y.jsx("i",{className:"fas fa-terminal"})," Encrypted Payload"]}),y.jsx("textarea",{id:"sender-msg",className:"form-textarea holo-input",placeholder:"Discussing Red Team assessments, Edge AI security, or engineering opportunities...",required:!0})]}),y.jsx("button",{type:"submit",className:`btn-3d-submit ${t?"depressed":""}`,children:t?y.jsxs(y.Fragment,{children:[y.jsx("i",{className:"fas fa-spinner fa-spin"})," TRANSMITTING ENCRYPTED PACKETS..."]}):n?y.jsxs(y.Fragment,{children:[y.jsx("i",{className:"fas fa-check"})," TRANSMISSION CONFIRMED"]}):y.jsxs(y.Fragment,{children:[y.jsx("span",{children:"SEND SECURE MESSAGE"})," ",y.jsx("i",{className:"fas fa-paper-plane"})]})})]})]})]})})}function DN(){const{playBeep:t}=he.useContext(Ui),{personalInfo:e,socialLinks:n}=gn;return y.jsx("footer",{className:"site-footer",children:y.jsxs("div",{className:"container footer-content",children:[y.jsxs("div",{className:"footer-credits",children:[y.jsxs("p",{className:"font-display",style:{color:"#fff",fontSize:"0.95rem"},children:["© 2026 ",e.name.toUpperCase()," (",e.preferredName,") • ",e.title.toUpperCase()]}),y.jsxs("p",{style:{marginTop:"0.25rem",color:"var(--text-dim)",fontSize:"0.8rem"},children:["Engineered with React Native for Web • Three.js 3D Holo-Core • ",e.location]})]}),y.jsxs("div",{className:"footer-socials",children:[y.jsx("button",{onClick:()=>{t(900,.03),jc()},className:"social-link holo-btn",title:`LinkedIn (${n.linkedinDisplay})`,"aria-label":"LinkedIn",children:y.jsx("i",{className:"fab fa-linkedin-in text-cyan"})}),y.jsx("button",{onClick:()=>{t(900,.03),fy()},className:"social-link holo-btn",title:`GitHub (${n.githubUsername})`,"aria-label":"GitHub",children:y.jsx("i",{className:"fab fa-github text-green"})}),y.jsx("a",{href:n.email,className:"social-link",title:"Email",onClick:()=>t(900,.03),children:y.jsx("i",{className:"fas fa-envelope text-purple"})}),y.jsx("a",{href:n.phone,className:"social-link",title:"Phone",onClick:()=>t(900,.03),children:y.jsx("i",{className:"fas fa-phone text-cyan"})})]})]})})}function IN({show:t,message:e}){return y.jsxs("div",{className:`toast-cyber ${t?"show":""}`,children:[y.jsx("i",{className:"fas fa-terminal text-cyan"}),y.jsx("span",{children:e})]})}function UN(){return y.jsxs(y.Fragment,{children:[y.jsx("div",{className:"scanlines"}),y.jsx("div",{className:"cyber-vignette"})]})}function ON({isOpen:t,onClose:e}){if(!t)return null;const n="./",i=`${n}David_Hany_CV_v2.pdf?t=${Date.now()}`,r=`${n}David_Hany_CV_v2.pdf`;return y.jsx("div",{className:"modal-backdrop open",onClick:e,children:y.jsxs("div",{className:"modal-box",onClick:a=>a.stopPropagation(),style:{maxWidth:"920px"},children:[y.jsxs("div",{className:"modal-header",children:[y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[y.jsx("i",{className:"fas fa-file-invoice text-cyan",style:{fontSize:"1.2rem"}}),y.jsxs("div",{children:[y.jsx("h3",{className:"modal-title",style:{fontSize:"1.05rem",lineHeight:"1.2"},children:"David Hany • Curriculum Vitae"}),y.jsx("span",{className:"font-mono text-cyan",style:{fontSize:"0.68rem",letterSpacing:"0.05em"},children:"VERIFIED ATS FORMAT • 2 PAGES • 11 GITHUB REPOSITORIES"})]})]}),y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem"},children:[y.jsxs("a",{href:i,target:"_blank",rel:"noopener noreferrer",className:"cyber-btn cyber-btn-outline hide-mobile",style:{padding:"0.45rem 0.85rem",fontSize:"0.75rem"},title:"Open CV in separate tab",children:[y.jsx("i",{className:"fas fa-arrow-up-right-from-square text-cyan"})," Fullscreen"]}),y.jsxs("a",{href:r,download:"David_Hany_CV.pdf",className:"cyber-btn cyber-btn-primary",style:{padding:"0.45rem 0.95rem",fontSize:"0.75rem"},children:[y.jsx("i",{className:"fas fa-download"})," Download CV"]}),y.jsx("button",{className:"modal-close-btn",onClick:e,"aria-label":"Close modal",children:"×"})]})]}),y.jsx("div",{className:"modal-content-scroll",style:{padding:"1rem"},children:y.jsx("div",{style:{width:"100%",height:"620px",background:"#0a0e16",borderRadius:"12px",overflow:"hidden",border:"1px solid var(--border-cyber)"},children:y.jsx("object",{data:`${i}#toolbar=1&navpanes=0`,type:"application/pdf",width:"100%",height:"100%",style:{border:"none"},children:y.jsx("iframe",{src:`${i}#toolbar=1`,title:"David Hany CV",width:"100%",height:"100%",style:{border:"none"},children:y.jsxs("div",{style:{textAlign:"center",padding:"3rem 1.5rem",color:"#94a3b8"},children:[y.jsx("p",{style:{marginBottom:"1rem",fontSize:"1rem"},children:"Your device does not support inline PDF viewing."}),y.jsxs("a",{href:r,download:"David_Hany_CV.pdf",className:"cyber-btn cyber-btn-primary",children:[y.jsx("i",{className:"fas fa-download"})," Click Here to Download David_Hany_CV.pdf"]})]})})})})})]})})}function FN(){const[t,e]=he.useState(""),[n,i]=he.useState(14);return he.useEffect(()=>{const r=()=>{e(new Date().toLocaleTimeString("en-US",{hour12:!1})+" UTC")};r();const a=setInterval(r,1e3),s=setInterval(()=>{i(Math.floor(10+Math.random()*8))},3e3);return()=>{clearInterval(a),clearInterval(s)}},[]),y.jsxs("div",{className:"holo-telemetry-bar",children:[y.jsxs("div",{className:"telemetry-item",children:[y.jsx("span",{className:"telemetry-dot live"}),y.jsx("span",{className:"telemetry-label",children:"SYSTEM:"}),y.jsx("span",{className:"telemetry-val text-green",children:"ONLINE // HOLO-2.0"})]}),y.jsxs("div",{className:"telemetry-item hide-mobile",children:[y.jsx("span",{className:"telemetry-label",children:"CIPHER:"}),y.jsx("span",{className:"telemetry-val text-cyan",children:"CHACHA20-POLY1305"})]}),y.jsxs("div",{className:"telemetry-item hide-mobile",children:[y.jsx("span",{className:"telemetry-label",children:"PING:"}),y.jsxs("span",{className:"telemetry-val text-cyan",children:[n,"ms"]})]}),y.jsxs("div",{className:"telemetry-item hide-mobile",children:[y.jsx("span",{className:"telemetry-label",children:"GEO_NODE:"}),y.jsx("span",{className:"telemetry-val text-purple",children:"ALEXANDRIA [EG]"})]}),y.jsxs("div",{className:"telemetry-item",children:[y.jsx("span",{className:"telemetry-label",children:"SYS_TIME:"}),y.jsx("span",{className:"telemetry-val",children:t})]})]})}function kN({activeSection:t}){const{playBeep:e}=he.useContext(Ui),n=[{href:"#hero",icon:"fa-house",label:"Home"},{href:"#about",icon:"fa-user-shield",label:"Bio"},{href:"#experience",icon:"fa-timeline",label:"History"},{href:"#projects",icon:"fa-code-branch",label:"Projects"},{href:"#skills",icon:"fa-microchip",label:"Skills"},{href:"#contact",icon:"fa-paper-plane",label:"Contact"}];return y.jsx("nav",{className:"mobile-native-dock","aria-label":"Mobile Navigation",children:n.map(i=>y.jsxs("a",{href:i.href,className:`dock-tab ${t===i.href.slice(1)?"active":""}`,onClick:()=>e(900,.03),children:[y.jsx("i",{className:`fas ${i.icon}`}),y.jsx("span",{children:i.label})]},i.href))})}const Ui=he.createContext(),Yy=he.createContext();function BN(){const[t,e]=he.useState(!1),[n,i]=he.useState({show:!1,message:""}),[r,a]=he.useState(null),[s,o]=he.useState(!1),[l,c]=he.useState("hero"),f=p=>{i({show:!0,message:p}),setTimeout(()=>i({show:!1,message:""}),3800)},d=(p=600,u=.05,g="sine")=>{if(t)try{let v=r;v||(v=new(window.AudioContext||window.webkitAudioContext),a(v)),v.state==="suspended"&&v.resume();const S=v.createOscillator(),R=v.createGain();S.type=g,S.frequency.setValueAtTime(p,v.currentTime),R.gain.setValueAtTime(.04,v.currentTime),R.gain.exponentialRampToValueAtTime(1e-4,v.currentTime+u),S.connect(R),R.connect(v.destination),S.start(),S.stop(v.currentTime+u)}catch{}},h=(p=950)=>{if(t)try{let u=r;u||(u=new(window.AudioContext||window.webkitAudioContext),a(u)),u.state==="suspended"&&u.resume();const g=u.createOscillator(),v=u.createGain();g.type="sine",g.frequency.setValueAtTime(p,u.currentTime),g.frequency.exponentialRampToValueAtTime(p*1.5,u.currentTime+.08),v.gain.setValueAtTime(.05,u.currentTime),v.gain.exponentialRampToValueAtTime(.001,u.currentTime+.08),g.connect(v),v.connect(u.destination),g.start(),g.stop(u.currentTime+.08)}catch{}},m=()=>{if(t)try{let p=r;p||(p=new(window.AudioContext||window.webkitAudioContext),a(p)),p.state==="suspended"&&p.resume();const u=p.createOscillator(),g=p.createGain();u.type="sawtooth",u.frequency.setValueAtTime(800,p.currentTime),u.frequency.exponentialRampToValueAtTime(120,p.currentTime+.25),g.gain.setValueAtTime(.06,p.currentTime),g.gain.linearRampToValueAtTime(.001,p.currentTime+.25),u.connect(g),g.connect(p.destination),u.start(),u.stop(p.currentTime+.25)}catch{}},_=()=>{if(!t)return;[523.25,659.25,783.99,1046.5].forEach((u,g)=>{setTimeout(()=>d(u,.12,"triangle"),g*60)})};he.useEffect(()=>{const p=()=>{const u=["hero","about","experience","projects","skills","certifications","contact"],g=window.scrollY+200;for(const v of u){const S=document.getElementById(v);if(S){const R=S.offsetTop,T=S.offsetHeight;if(g>=R&&g<R+T){c(v);break}}}};return window.addEventListener("scroll",p,{passive:!0}),()=>window.removeEventListener("scroll",p)},[]);const x={audioEnabled:t,setAudioEnabled:e,playBeep:d,playChirp:h,playLaser:m,playSuccess:_};return y.jsx(Ui.Provider,{value:x,children:y.jsxs(Yy.Provider,{value:f,children:[y.jsx(UN,{}),y.jsx(FN,{}),y.jsx(nA,{onOpenCV:()=>o(!0)}),y.jsx(yN,{onOpenCV:()=>o(!0)}),y.jsx(SN,{}),y.jsx(TN,{}),y.jsx(wN,{}),y.jsx(PN,{}),y.jsx(LN,{}),y.jsx(NN,{}),y.jsx(DN,{}),y.jsx(kN,{activeSection:l}),y.jsx(ON,{isOpen:s,onClose:()=>o(!1)}),y.jsx(IN,{show:n.show,message:n.message})]})})}Ef.createRoot(document.getElementById("root")).render(y.jsx(Vl.StrictMode,{children:y.jsx(BN,{})}));
