(()=>{"use strict";var e={8426:(e,r,o)=>{var t=o(5271);onmessage=function(e){console.log("Worker started");var r=e.data,o=t.Wp.json_to_sheet(r),a=t.Wp.book_new();t.Wp.book_append_sheet(a,o,"Report");var s=t.M9(a,{bookType:"csv",type:"array"}),p=new Blob([s],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});console.log("Worker finished"),postMessage({excelData:p})}}},r={};function o(t){var a=r[t];if(void 0!==a)return a.exports;var s=r[t]={exports:{}};return e[t](s,s.exports,o),s.exports}o.m=e,o.x=()=>{var e=o.O(void 0,[271],(()=>o(8426)));return e=o.O(e)},(()=>{var e=[];o.O=(r,t,a,s)=>{if(!t){var p=1/0;for(c=0;c<e.length;c++){t=e[c][0],a=e[c][1],s=e[c][2];for(var n=!0,i=0;i<t.length;i++)(!1&s||p>=s)&&Object.keys(o.O).every((e=>o.O[e](t[i])))?t.splice(i--,1):(n=!1,s<p&&(p=s));if(n){e.splice(c--,1);var l=a();void 0!==l&&(r=l)}}return r}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[t,a,s]}})(),o.d=(e,r)=>{for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((r,t)=>(o.f[t](e,r),r)),[])),o.u=e=>"static/js/"+e+".ad98e349.chunk.js",o.miniCssF=e=>{},o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),o.p="/atlas/",(()=>{var e={426:1};o.f.i=(r,t)=>{e[r]||importScripts(o.p+o.u(r))};var r=self.webpackChunkatlas_app=self.webpackChunkatlas_app||[],t=r.push.bind(r);r.push=r=>{var a=r[0],s=r[1],p=r[2];for(var n in s)o.o(s,n)&&(o.m[n]=s[n]);for(p&&p(o);a.length;)e[a.pop()]=1;t(r)}})(),(()=>{var e=o.x;o.x=()=>o.e(271).then(e)})();o.x()})();