"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[337],{155:function(e,t,n){n.d(t,{Z:function(){return l}});var r="MoviesList_container__0JGj2",i="MoviesList_movies_list__EAcLe",s="MoviesList_movies_list__item__PJxaz",o=n(694),a=n.n(o),c=n(87),u=n(184),l=function(e){var t=e.moviesList,n=(e.title,e.location);return(0,u.jsx)("div",{className:a()(r,i),children:(0,u.jsx)("ul",{className:i,children:t.map((function(e){var t=e.id,r=e.title;return(0,u.jsx)("li",{className:s,children:(0,u.jsx)(c.rU,{to:"/movies/".concat(t),state:{from:n},children:r})},t)}))})})}},337:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(439),i=n(214),s=n(155),o=n(791),a=n(111),c="SearchForm_form__o80os",u=n(596),l=n(184),m=function(e){var t=e.onSubmit,n=(0,o.useState)(""),i=(0,r.Z)(n,2),s=i[0],m=i[1];return(0,l.jsx)(a.Z,{children:(0,l.jsxs)("form",{className:c,onSubmit:function(e){e.preventDefault();var n=s.trim();if(!n.length)return u.Am.warn("Enter something to search for"),void m("");t(n),m("")},children:[(0,l.jsx)("input",{name:"search",type:"text",required:!0,value:s,onChange:function(e){m(e.target.value)}}),(0,l.jsx)("button",{type:"submit",children:"Search"})]})})},f=n(476),h=n(123),v=n(87),_=n(689),d=function(){var e,t=(0,o.useState)(!1),n=(0,r.Z)(t,2),c=n[0],d=n[1],x=(0,o.useState)([]),j=(0,r.Z)(x,2),p=j[0],Z=j[1],g=(0,v.lr)(),S=(0,r.Z)(g,2),b=S[0],k=S[1],w=null!==(e=b.get("query"))&&void 0!==e?e:"",L=(0,_.TH)();return(0,o.useEffect)((function(){w&&(d(!0),(0,h.rQ)(f.Z.search,w).then((function(e){var t=e.data.results;Z(void 0===t?{}:t)})).catch((function(e){u.Am.error("Something wrong")})).finally((function(){d(!1)})))}),[w]),(0,l.jsx)(a.Z,{children:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(m,{onSubmit:function(e){k({query:e})}}),c&&!p.length?(0,l.jsx)(i.Z,{}):(0,l.jsx)(s.Z,{moviesList:p,location:L})]})})}}}]);
//# sourceMappingURL=337.7c5dd039.chunk.js.map