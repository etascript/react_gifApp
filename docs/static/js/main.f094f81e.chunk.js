(this["webpackJsonp04-gif-expert-app"]=this["webpackJsonp04-gif-expert-app"]||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n(7),i=n.n(r),s=(n(16),n(2)),u=n(9),o=function(e){var t=e.setCategories,n=Object(c.useState)(""),r=Object(s.a)(n,2),i=r[0],o=r[1];return Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(t((function(e){return[i].concat(Object(u.a)(e))})),o(""))},children:[Object(a.jsx)("h2",{children:"Add Category"}),Object(a.jsx)("input",{type:"text",id:"nombre",placeholder:"Ingrese una opci\xf3n nueva",value:i,onChange:function(e){o(e.target.value)}})]})},j=n(10),d=n(6),l=n.n(d),p=n(8),b=function(){var e=Object(p.a)(l.a.mark((function e(t){var n,a,c,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=pQwaCsSbBjJTmxnTljV8RmdBSu4jo3bL&limit=10&q=".concat(encodeURI(t)),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,r=c.data,i=r.map((function(e){return{id:e.id,title:e.title,url:e.images.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){return Object(a.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(a.jsx)("img",{src:e.url,alt:e.title}),Object(a.jsx)("p",{children:e.title})]})},m=function(e){var t=e.category,n=function(e){var t=Object(c.useState)({data:[],loading:!0}),n=Object(s.a)(t,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){b(e).then((function(e){setTimeout((function(){r({data:e,loading:!1})}),3e3)}))}),[e]),a}(t),r=n.data,i=n.loading;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{className:"animate__animated animate__fadeIn",children:t}),i&&Object(a.jsx)("p",{className:" animate__animated animate__flash",children:"Cargando"}),Object(a.jsx)("div",{className:"card-grid",children:r.map((function(e){return Object(a.jsx)(f,Object(j.a)({},e),e.id)}))})]})},h=function(){var e=Object(c.useState)(["One punch"]),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h2",{children:"Gif Expert App"}),Object(a.jsx)(o,{setCategories:r}),Object(a.jsx)("hr",{}),Object(a.jsx)("ol",{children:n.map((function(e){return Object(a.jsx)(m,{category:e},e)}))})]})},O=document.querySelector("#root");i.a.render(Object(a.jsx)(h,{}),O)}},[[18,1,2]]]);
//# sourceMappingURL=main.f094f81e.chunk.js.map