(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{359:function(t,n,e){},372:function(t,n,e){"use strict";e(359)},381:function(t,n,e){"use strict";e.r(n);var a=e(64),s={props:{currentTag:{type:String,default:""}},computed:{tags(){return[{name:this.$recoLocales.tag.all,path:"/tag/"},...this.$tags.list]}},methods:{tagClick(t){this.$emit("getCurrentTag",t)},getOneColor:a.a}},r=(e(372),e(0)),c=Object(r.a)(s,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"tags"},t._l(t.tags,(function(e,a){return n("span",{key:a,class:{active:e.name==t.currentTag},style:{backgroundColor:t.getOneColor()},on:{click:function(n){return t.tagClick(e)}}},[t._v(t._s(e.name))])})),0)}),[],!1,null,"bb4232a6",null);n.default=c.exports}}]);