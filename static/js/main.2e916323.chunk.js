(this["webpackJsonptaiwan-tourist-attractions"]=this["webpackJsonptaiwan-tourist-attractions"]||[]).push([[0],{34:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(24),r=n.n(c),i=(n(34),n(7)),u=n(14),o=n(2),l=n(8),s=n(9),b=n(1),j=Object(a.createContext)(),O=function(){return Object(a.useContext)(j)};function h(e){var t=e.children,n=Object(a.useState)(),c=Object(s.a)(n,2),r=c[0],i=c[1];return Object(b.jsx)(j.Provider,{value:{currentCity:r,setCurrentCity:i},children:t})}var v=n(16),p=n(19),d=n.n(p),f=n(25),m=n(29);function x(){var e=(new Date).toGMTString(),t=new m.a("SHA-1","TEXT");t.setHMACKey("9OMUYT4YKIsedjuod5EZ5m4Zoeo","TEXT"),t.update("x-date: ".concat(e));var n=t.getHMAC("B64");return{Authorization:'hmac username="'.concat("f9cf2d2287ff4dd699af5d3e239e148a",'", algorithm="hmac-sha1", headers="x-date", signature="').concat(n,'"'),"X-Date":e,"Accept-Encoding":"gzip"}}var g,C,y,S,T="https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot",w=function(){var e=Object(f.a)(d.a.mark((function e(t,n){var a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=t?"".concat(T,"/").concat(t):"".concat(T),e.next=4,fetch("".concat(a,"?$format=JSON&$top=").concat(30,"&$skip=").concat(n),{headers:{authorization:x()}});case 4:return c=e.sent,e.next=7,c.json();case 7:return e.abrupt("return",e.sent);case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0);case 13:case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n){return e.apply(this,arguments)}}(),D=l.a.li(g||(g=Object(i.a)(["\n  margin-bottom: 2rem;\n"]))),E=l.a.h3(C||(C=Object(i.a)(["\n  margin-bottom: 1rem;\n  font-size: 1.25rem;\n"]))),z=l.a.p(y||(y=Object(i.a)(["\n  font-size: 1rem;\n"])));function H(e){var t=e.spotRef,n=e.name,a=e.description;return Object(b.jsxs)(D,{ref:t,children:[Object(b.jsx)(E,{children:n}),Object(b.jsx)(z,{children:a})]})}var M=l.a.ul(S||(S=Object(i.a)([""])));var k,A,K,N=function(){var e=Object(o.h)().city,t=O(),n=t.currentCity,c=t.setCurrentCity,r=Object(a.useState)([]),i=Object(s.a)(r,2),u=i[0],l=i[1],j=Object(a.useState)(!0),h=Object(s.a)(j,2),p=h[0],d=h[1],f=Object(a.useState)(!1),m=Object(s.a)(f,2),x=m[0],g=m[1],C=Object(a.useState)(!1),y=Object(s.a)(C,2),S=y[0],T=y[1],D=Object(a.useState)(0),E=Object(s.a)(D,2),z=E[0],k=E[1],A=Object(a.useRef)(),K=Object(a.useCallback)((function(e){p||(A.current&&A.current.disconnect(),A.current=new IntersectionObserver((function(e){e[0].isIntersecting&&x&&k((function(e){return e+30}))})),e&&A.current.observe(e))}),[x,p]);return Object(a.useEffect)((function(){c(e),l([]),k(0)}),[e,c]),Object(a.useEffect)((function(){d(!0),T(!1),w(n,z).then((function(e){l((function(t){return Object(v.a)(new Set([].concat(Object(v.a)(t),Object(v.a)(e))))})),g(e.length>0),d(!1)})).catch((function(){T(!0)}))}),[n,z]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(M,{children:u.map((function(e,t){return u.length===t+1?Object(b.jsx)(H,{spotRef:K,name:e.Name,description:e.Description?e.Description:e.DescriptionDetail},t):Object(b.jsx)(H,{name:e.Name,description:e.Description?e.Description:e.DescriptionDetail},t)}))}),Object(b.jsx)("div",{children:p&&"Loading..."}),Object(b.jsx)("div",{children:S&&"Error"})]})},I=l.a.nav(k||(k=Object(i.a)(["\n  margin-bottom: 2rem;\n"]))),Y=[{value:"",label:"\u5168\u90e8\u666f\u9ede"},{value:"Taipei",label:"\u81fa\u5317\u5e02"},{value:"NewTaipei",label:"\u65b0\u5317\u5e02"},{value:"Taoyuan",label:"\u6843\u5712\u5e02"},{value:"Taichung",label:"\u81fa\u4e2d\u5e02"},{value:"Tainan",label:"\u81fa\u5357\u5e02"},{value:"Kaohsiung",label:"\u9ad8\u96c4\u5e02"},{value:"Keelung",label:"\u57fa\u9686\u5e02"},{value:"Hsinchu",label:"\u65b0\u7af9\u5e02"},{value:"HsinchuCounty",label:"\u65b0\u7af9\u7e23"},{value:"MiaoliCounty",label:"\u82d7\u6817\u7e23"},{value:"ChanghuaCounty",label:"\u5f70\u5316\u7e23"},{value:"NantouCounty",label:"\u5357\u6295\u7e23"},{value:"YunlinCounty",label:"\u96f2\u6797\u7e23"},{value:"ChiayiCounty",label:"\u5609\u7fa9\u7e23"},{value:"Chiayi",label:"\u5609\u7fa9\u5e02"},{value:"PingtungCounty",label:"\u5c4f\u6771\u7e23"},{value:"YilanCounty",label:"\u5b9c\u862d\u7e23"},{value:"HualienCounty",label:"\u82b1\u84ee\u7e23"},{value:"TaitungCounty",label:"\u81fa\u6771\u7e23"},{value:"KinmenCounty",label:"\u91d1\u9580\u7e23"},{value:"PenghuCounty",label:"\u6f8e\u6e56\u7e23"},{value:"LienchiangCounty",label:"\u9023\u6c5f\u7e23"}];function J(e){var t=e.value,n=e.onChange;return Object(b.jsx)("select",{value:t,onChange:n,children:Y.map((function(e,t){return Object(b.jsx)("option",{value:e.value,children:e.label},t)}))})}function P(){var e=Object(o.g)(),t=O().currentCity;return Object(b.jsx)(I,{children:Object(b.jsx)(J,{value:t,onChange:function(t){e.push("/scenicSpot/".concat(t.target.value))}})})}var R=l.a.div(A||(A=Object(i.a)(["\n  margin: 0 auto;\n  max-width: 40rem;\n  padding: 3rem 1.5rem;\n"]))),X=l.a.h1(K||(K=Object(i.a)(["\n  margin-bottom: 2rem;\n  font-size: 2rem;\n"])));function $(){return Object(b.jsx)(h,{children:Object(b.jsx)(R,{children:Object(b.jsxs)(u.a,{children:[Object(b.jsx)(X,{children:"\u53f0\u7063\u89c0\u5149\u666f\u9ede"}),Object(b.jsx)(P,{}),Object(b.jsxs)(o.d,{children:[Object(b.jsx)(o.a,{exact:!0,from:"/",to:"/scenicSpot"}),Object(b.jsx)(o.b,{exact:!0,path:"/scenicSpot",component:N}),Object(b.jsx)(o.b,{path:"/scenicSpot/:city",component:N})]})]})})})}r.a.render(Object(b.jsx)($,{}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.2e916323.chunk.js.map