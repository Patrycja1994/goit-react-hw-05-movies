"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[186],{186:function(e,n,t){t.r(n);var r=t(861),a=t(439),c=t(757),u=t.n(c),s=t(689),i=t(791),o=t(390),f=t(184);n.default=function(){var e=(0,s.UO)().movieId,n=(0,i.useState)([]),t=(0,a.Z)(n,2),c=t[0],p=t[1];return(0,i.useEffect)((function(){var n=function(){var n=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Mn.fetchReviews(e);case 3:t=n.sent,p(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[e]),(0,f.jsxs)(f.Fragment,{children:[0!==c.length&&(0,f.jsx)("div",{children:(0,f.jsx)("ul",{children:c.map((function(e){return(0,f.jsxs)("li",{children:[(0,f.jsxs)("h2",{children:["Author: ",e.author]}),(0,f.jsx)("p",{children:e.content})]},e.id)}))})}),0===c.length&&(0,f.jsx)("div",{children:"We don't have any reviews for this movie"})]})}},390:function(e,n,t){t.d(n,{Hq:function(){return o},Mn:function(){return v},Tg:function(){return i},h_:function(){return f}});var r=t(861),a=t(757),c=t.n(a),u=t(912),s="eb7c9132ba6734f59534fa5b6e14e667";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("trending/movie/day?api_key=".concat(s));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("search/movie?api_key=".concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(n));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(n,"?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(n,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("movie/".concat(n,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v={fetchTrending:i,fetchByQuery:o,fetchById:f,fetchActors:p,fetchReviews:h}}}]);
//# sourceMappingURL=186.5e08902e.chunk.js.map