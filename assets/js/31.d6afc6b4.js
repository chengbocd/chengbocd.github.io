(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{390:function(e,s,t){},412:function(e,s,t){"use strict";t(390)},434:function(e,s,t){"use strict";t.r(s);t(15);var n={data:()=>({query:"",focused:!1,focusIndex:0,placeholder:void 0}),mounted(){this.placeholder=this.$site.themeConfig.searchPlaceholder||""},computed:{showSuggestions(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions(){const e=this.query.trim().toLowerCase();if(!e)return;const{pages:s}=this.$site,t=this.$site.themeConfig.searchMaxSuggestions,n=this.$localePath,o=s=>s&&s.title&&s.title.toLowerCase().indexOf(e)>-1,i=[];for(let e=0;e<s.length&&!(i.length>=t);e++){const u=s[e];if(this.getPageLocalePath(u)===n)if(o(u))i.push(u);else if(u.headers)for(let e=0;e<u.headers.length&&!(i.length>=t);e++){const s=u.headers[e];o(s)&&i.push(Object.assign({},u,{path:u.path+"#"+s.slug,header:s}))}}return i},alignRight(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},methods:{getPageLocalePath(e){for(const s in this.$site.locales||{})if("/"!==s&&0===e.path.indexOf(s))return s;return"/"},onUp(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go(e){this.showSuggestions&&(this.$router.push(this.suggestions[e].path),this.query="",this.focusIndex=0)},focus(e){this.focusIndex=e},unfocus(){this.focusIndex=-1}}},o=(t(412),t(0)),i=Object(o.a)(n,(function(){var e=this,s=e._self._c;return s("div",{staticClass:"search-box"},[s("i",{staticClass:"iconfont reco-search"}),e._v(" "),s("input",{ref:"input",class:{focused:e.focused},attrs:{"aria-label":"Search",placeholder:e.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:e.query},on:{input:function(s){e.query=s.target.value},focus:function(s){e.focused=!0},blur:function(s){e.focused=!1},keyup:[function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.go(e.focusIndex)},function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"up",38,s.key,["Up","ArrowUp"])?null:e.onUp.apply(null,arguments)},function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"down",40,s.key,["Down","ArrowDown"])?null:e.onDown.apply(null,arguments)}]}}),e._v(" "),e.showSuggestions?s("ul",{staticClass:"suggestions",class:{"align-right":e.alignRight},on:{mouseleave:e.unfocus}},e._l(e.suggestions,(function(t,n){return s("li",{key:n,staticClass:"suggestion",class:{focused:n===e.focusIndex},on:{mousedown:function(s){return e.go(n)},mouseenter:function(s){return e.focus(n)}}},[s("a",{attrs:{href:t.path},on:{click:function(e){e.preventDefault()}}},[s("span",{staticClass:"page-title"},[e._v(e._s(t.title||t.path))]),e._v(" "),t.header?s("span",{staticClass:"header"},[e._v("> "+e._s(t.header.title))]):e._e()])])})),0):e._e()])}),[],!1,null,null,null);s.default=i.exports}}]);