(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,s){},15:function(t,e,s){"use strict";s.r(e);var n=s(3),r=s.n(n),o=s(6),i=s(4),c=s(5),a=s(8),u=s(7),l=s(1),b=s.n(l),h=(s(13),s(0)),d=function(t){var e=t.goods;return Object(h.jsx)("ul",{children:e.map((function(t){return Object(h.jsx)("li",{children:t},t)}))})},j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],y=function(t){Object(a.a)(s,t);var e=Object(u.a)(s);function s(){var t;Object(i.a)(this,s);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={goodsList:j,isVisible:!1,isReversed:!1,sortBy:""},t.showGoods=function(){t.setState({isVisible:!0})},t.reverse=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.sortByName=function(){t.setState({sortBy:"name"})},t.sortByLength=function(){t.setState({sortBy:"length"})},t.reset=function(){t.setState({isReversed:!1,sortBy:""})},t}return Object(c.a)(s,[{key:"render",value:function(){var t=this.state,e=t.goodsList,s=t.isVisible,n=t.isReversed,r=t.sortBy,i=Object(o.a)(e);return i.sort((function(t,e){switch(r){case"name":return t.localeCompare(e);case"length":return t.length-e.length;default:return 0}})),n&&i.reverse(),s?Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"Goods"}),Object(h.jsx)("button",{type:"button",onClick:this.reverse,children:"Reverse"}),Object(h.jsx)("button",{type:"button",onClick:this.sortByName,children:"Sort by Name"}),Object(h.jsx)("button",{type:"button",onClick:this.sortByLength,children:"Sort by Length"}),Object(h.jsx)("button",{type:"button",onClick:this.reset,children:"Reset"}),Object(h.jsx)(d,{goods:i})]}):Object(h.jsx)("button",{type:"button",onClick:this.showGoods,children:"Start"})}}]),s}(b.a.Component),p=y;r.a.render(Object(h.jsx)(p,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.774b9fb2.chunk.js.map