(this.webpackJsonpts=this.webpackJsonpts||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var c,a=n(1),r=n.n(a),s=n(8),i=n.n(s),u=(n(14),n(15),n(16),n(17),n(4)),o=n(7),l=n(6),j=n.n(l),d=n(9),h="https://rickandmortyapi.com/api/character/?page=1",b=[],f={fetchData:function(){var e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(h);case 2:return t=e.sent,e.next=5,t.json();case 5:if(c=e.sent,b.push.apply(b,Object(u.a)(c.results)),null===c.info.next){e.next=14;break}return h=c.info.next,e.next=11,f.fetchData();case 11:return e.abrupt("return",e.sent);case 14:return e.abrupt("return",b);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},m=f,p=n(0);var O=function(e){var t=e.setSearchInput;return Object(p.jsx)("input",{className:"search-bar",placeholder:"Search by character name",onChange:function(e){return t(e.target.value.toLowerCase().trim())}})};var v=function(e){var t=e.card;return Object(p.jsxs)("div",{className:"card-container",children:[Object(p.jsx)("img",{className:"card-avatar",src:t.image,alt:"img"}),Object(p.jsx)("h3",{className:"character-name",children:t.name}),Object(p.jsxs)("div",{className:"character-info",children:[Object(p.jsxs)("div",{className:"left-info",children:[Object(p.jsxs)("div",{className:"origin",children:["Origin - ",t.origin.name]}),Object(p.jsx)("div",{className:"species",children:t.species}),Object(p.jsxs)("div",{className:"loca",children:["Location - ",t.location.name]})]}),Object(p.jsx)("div",{className:"right",children:Object(p.jsx)("div",{className:"status",style:"Alive"===t.status?{background:"green",color:"white"}:"Dead"===t.status?{background:"red"}:{background:"grey",color:"white"},children:t.status})})]})]})};var x=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(o.a)(r,2),i=s[0],l=s[1];return Object(a.useEffect)((function(){m.fetchData().then((function(e){c(e)}))}),[]),Object(p.jsxs)("div",{className:"main-container",children:[Object(p.jsx)(O,{setSearchInput:l}),Object(p.jsx)("div",{className:"card-list-container",children:n?function(){var e=Object(u.a)(n);return i.length>0&&(e=e.filter((function(e){return e.name.toLowerCase().includes(i)}))),e}().map((function(e){return Object(p.jsx)(v,{card:e})})):null})]})};var g=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(x,{})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};i.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(g,{})}),document.getElementById("root")),N()}},[[20,1,2]]]);
//# sourceMappingURL=main.bebf49c6.chunk.js.map