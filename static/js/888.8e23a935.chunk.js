"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[888],{888:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(861),a=n(439),s=n(757),c=n.n(s),i=n(791),u=n(87),o=n(689),l="MovieDetails_movieDetalis__O6Jjg",v="MovieDetails_genreList__Bg3ig",p="MovieDetails_buttonBack__rRdDS",d="MovieDetails_cast__reviews__SvFAv",f="MovieDetails_cast__DSRRH",h="MovieDetails_additional__EaCvI",_=n(390),x=n(184),m=function(){var e,t,n=(0,o.UO)().movieId,s=(0,i.useState)(null),m=(0,a.Z)(s,2),g=m[0],j=m[1],w=(0,o.TH)();return(0,i.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,_.h_)(n);case 3:t=e.sent,j(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(u.rU,{to:null!==(e=null===w||void 0===w||null===(t=w.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies",children:(0,x.jsx)("button",{className:p,type:"button",children:"Back to Home"})}),g&&(0,x.jsxs)("div",{className:l,children:[(0,x.jsx)("img",{width:"300px",src:"https://image.tmdb.org/t/p/w500"+g.poster_path,alt:g.original_title}),(0,x.jsxs)("div",{className:v,children:[(0,x.jsxs)("h1",{children:[g.title," (",g.release_date.slice(0,4),")"]}),(0,x.jsxs)("p",{children:["User score: ",g.popularity]}),(0,x.jsx)("h2",{children:"Overview"}),(0,x.jsx)("p",{children:g.overview}),(0,x.jsx)("h2",{children:"Genres"}),(0,x.jsx)("ul",{className:v,children:g.genres.map((function(e){return(0,x.jsx)("li",{className:v,children:e.name},e.id)}))})]})]}),(0,x.jsx)("hr",{}),(0,x.jsxs)("div",{children:[(0,x.jsx)("h3",{className:h,children:"Additional information"}),(0,x.jsxs)("ul",{className:d,children:[(0,x.jsx)("li",{className:f,children:(0,x.jsx)(u.rU,{to:"cast",children:"Cast"})}),(0,x.jsx)("li",{children:(0,x.jsx)(u.rU,{to:"reviews",children:"Reviews"})})]}),(0,x.jsx)("hr",{}),(0,x.jsx)(o.j3,{})]})]})}},390:function(e,t,n){n.d(t,{Hq:function(){return o},Mn:function(){return d},Tg:function(){return u},h_:function(){return l}});var r=n(861),a=n(757),s=n.n(a),c=n(912),i="eb7c9132ba6734f59534fa5b6e14e667";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day?api_key=".concat(i));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d={fetchTrending:u,fetchByQuery:o,fetchById:l,fetchActors:v,fetchReviews:p}}}]);
//# sourceMappingURL=888.8e23a935.chunk.js.map