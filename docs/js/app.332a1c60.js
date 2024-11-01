(function(e){function t(t){for(var n,r,o=t[0],i=t[1],l=t[2],d=0,b=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&b.push(s[r][0]),s[r]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);u&&u(t);while(b.length)b.shift()();return c.push.apply(c,l||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],n=!0,o=1;o<a.length;o++){var i=a[o];0!==s[i]&&(n=!1)}n&&(c.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},s={app:0},c=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/vue-marquee-box/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=i;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23"),s={id:"app"},c={class:"container",role:"main"},r={class:"my-4"},o={class:"mb-3"},i={class:"my-4"},l={class:"my-4"};function u(e,t,a,u,d,b){var m=Object(n["m"])("MarqueeText");return Object(n["k"])(),Object(n["b"])("div",s,[t[21]||(t[21]=Object(n["d"])('<div class="bg-light py-5"><header class="container"><ul class="nav float-right"><li><a class="btn btn-primary btn-sm" href="https://github.com/EvodiaAut/vue-marquee-text-component" target="_blank"> Github </a></li></ul><h1>vue-marquee-text-component</h1><p class="lead"> [<a href="https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/" target="_blank">CSS GPU Animation</a>] Marquee Text for vuejs </p><div class="d-flex flex-wrap"><a href="https://www.npmjs.com/package/vue-marquee-text-component" target="_blank"><img class="m-1" src="https://img.shields.io/npm/v/vue-marquee-text-component.svg?style=for-the-badge" alt="vue-marquee-text-component npm"></a><a href="https://github.com/EvodiaAut/vue-marquee-text-component/blob/master/LICENSE.md" target="_blank"><img class="m-1" src="https://img.shields.io/github/license/mashape/apistatus.svg?style=for-the-badge" alt="vue-marquee-text-component license"></a><a href="https://www.npmjs.com/package/vue-marquee-text-component" target="_blank"><img class="m-1" src="https://img.shields.io/npm/dt/vue-marquee-text-component.svg?style=for-the-badge" alt="vue-marquee-text-component npm"></a></div></header></div>',1)),Object(n["c"])("main",c,[t[20]||(t[20]=Object(n["d"])('<section class="my-4"><h2 class="mb-3"> Props </h2><div class="table-responsive"><table class="table table-sm"><thead><tr><th scope="col"> Name </th><th scope="col"> Description </th><th scope="col"> Config </th></tr></thead><tbody><tr><th scope="row"> duration </th><td>Animation Duration</td><td><code>{ type: Number, default: 15 }</code></td></tr><tr><th scope="row"> repeat </th><td>Number of repeat the Slot <b>(It&#39;s important for to short content)</b></td><td><code>{ type: Number, default: 2 }</code></td></tr><tr><th scope="row"> paused </th><td>The property specifies whether the animation is running or paused</td><td><code>{ type: Boolean, default: false }</code></td></tr><tr><th scope="row"> reverse </th><td>The animation plays backwards each cycle</td><td><code>{ type: Boolean, default: false }</code></td></tr><tr><th scope="row"> vertical </th><td>The animation plays backwards each cycle</td><td><code>{ type: Boolean, default: false }</code></td></tr></tbody></table></div></section>',1)),Object(n["c"])("section",r,[Object(n["c"])("h3",o,[t[4]||(t[4]=Object(n["e"])(" Demo ")),t[5]||(t[5]=Object(n["c"])("small",null,"with test data",-1)),Object(n["c"])("button",{class:Object(n["i"])([{active:e.isPaused},"btn btn-sm btn-outline-primary ml-2"]),type:"button",onClick:t[0]||(t[0]=function(t){return e.isPaused=!e.isPaused})}," Pause ",2)]),Object(n["f"])(m,{duration:45,repeat:3,paused:e.isPaused,class:"py-2 bg-dark text-white"},{default:Object(n["n"])((function(){return t[6]||(t[6]=[Object(n["c"])("span",{class:"badge badge-success ml-2"},"0,38%",-1),Object(n["e"])(" ATX "),Object(n["c"])("span",{class:"badge badge-danger ml-2"},"0,16%",-1),Object(n["e"])(" DAX "),Object(n["c"])("span",{class:"badge badge-success ml-2"},"0,04%",-1),Object(n["e"])(" TecDax "),Object(n["c"])("span",{class:"badge badge-danger ml-2"},"0,19%",-1),Object(n["e"])(" MDAX "),Object(n["c"])("span",{class:"badge badge-success ml-2"},"0,03%",-1),Object(n["e"])(" ESTX50 "),Object(n["c"])("span",{class:"badge badge-info ml-2"},"0,00%",-1),Object(n["e"])(" NIKKEI "),Object(n["c"])("span",{class:"badge badge-success ml-2"},"0,03%",-1),Object(n["e"])(" EUR/CHF ")])})),_:1},8,["paused"]),Object(n["f"])(m,{duration:3,repeat:3,paused:e.isPaused,class:"py-2 bg-dark text-white mt-2"},{default:Object(n["n"])((function(){return t[7]||(t[7]=[Object(n["c"])("span",{class:"badge badge-success ml-2"},"0,38%",-1),Object(n["e"])(" ATX "),Object(n["c"])("span",{class:"badge badge-danger ml-2"},"0,16%",-1),Object(n["e"])(" DAX "),Object(n["c"])("span",{class:"badge badge-success ml-2"},"0,04%",-1),Object(n["e"])(" TecDax "),Object(n["c"])("span",{class:"badge badge-danger ml-2"},"0,19%",-1),Object(n["e"])(" MDAX "),Object(n["c"])("span",{class:"badge badge-success ml-2"},"0,03%",-1),Object(n["e"])(" ESTX50 "),Object(n["c"])("span",{class:"badge badge-info ml-2"},"0,00%",-1),Object(n["e"])(" NIKKEI "),Object(n["c"])("span",{class:"badge badge-success ml-2"},"0,03%",-1),Object(n["e"])(" EUR/CHF ")])})),_:1},8,["paused"]),Object(n["f"])(m,{duration:20,paused:e.isPaused,reverse:"",class:"py-2 mt-2 bg-light"},{default:Object(n["n"])((function(){return t[8]||(t[8]=[Object(n["e"])(" Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ")])})),_:1},8,["paused"])]),Object(n["c"])("section",i,[t[10]||(t[10]=Object(n["c"])("h4",{class:"mb-3"}," Listening to Events: Example - Stop on mouse hover ",-1)),Object(n["f"])(m,{repeat:3,paused:e.isPaused,class:"py-2 bg-dark text-white mt-2",onMouseenter:t[1]||(t[1]=function(t){return e.isPaused=!e.isPaused}),onMouseleave:t[2]||(t[2]=function(t){return e.isPaused=!1})},{default:Object(n["n"])((function(){return t[9]||(t[9]=[Object(n["c"])("span",{class:"badge badge-success ml-2"},"0,38%",-1),Object(n["e"])(" ATX "),Object(n["c"])("span",{class:"badge badge-danger ml-2"},"0,16%",-1),Object(n["e"])(" DAX "),Object(n["c"])("span",{class:"badge badge-success ml-2"},"0,04%",-1),Object(n["e"])(" TecDax "),Object(n["c"])("span",{class:"badge badge-danger ml-2"},"0,19%",-1),Object(n["e"])(" MDAX "),Object(n["c"])("span",{class:"badge badge-success ml-2"},"0,03%",-1),Object(n["e"])(" ESTX50 "),Object(n["c"])("span",{class:"badge badge-info ml-2"},"0,00%",-1),Object(n["e"])(" NIKKEI "),Object(n["c"])("span",{class:"badge badge-success ml-2"},"0,03%",-1),Object(n["e"])(" EUR/CHF ")])})),_:1},8,["paused"])]),Object(n["c"])("section",l,[t[15]||(t[15]=Object(n["c"])("h4",{class:"mb-3"}," To small content ",-1)),t[16]||(t[16]=Object(n["c"])("p",{class:"font-weight-bold mb-0"},[Object(n["e"])(" use prop "),Object(n["c"])("code",null,'{ :repeat="NUMBER" }'),Object(n["e"])(" when you know the content is not wider than parent ")],-1)),t[17]||(t[17]=Object(n["c"])("p",{class:"font-italic"}," Default we clone default slot two times ",-1)),Object(n["f"])(m,{duration:1},{default:Object(n["n"])((function(){return t[11]||(t[11]=[Object(n["c"])("span",{class:"badge badge-success"},"START",-1),Object(n["e"])(" Short text =( "),Object(n["c"])("span",{class:"badge badge-danger"},"END",-1)])})),_:1}),t[18]||(t[18]=Object(n["e"])(" after add prop ")),t[19]||(t[19]=Object(n["c"])("code",{class:"font-weight-bold"},'{ :repeat="10" }',-1)),Object(n["f"])(m,{duration:1,repeat:10},{default:Object(n["n"])((function(){return t[12]||(t[12]=[Object(n["c"])("span",{class:"badge badge-success"},"START",-1),Object(n["e"])(" Short text =( "),Object(n["c"])("span",{class:"badge badge-danger"},"END",-1)])})),_:1}),Object(n["f"])(m,{duration:1,repeat:200,vertical:"",class:"vertical-test"},{default:Object(n["n"])((function(){return[Object(n["c"])("span",{class:"badge badge-success",style:Object(n["j"])("height: ".concat(e.width,"px;"))}," START ",4),t[13]||(t[13]=Object(n["e"])(" Short text =( ")),t[14]||(t[14]=Object(n["c"])("span",{class:"badge badge-danger"},"END",-1))]})),_:1}),Object(n["c"])("a",{onClick:t[3]||(t[3]=function(t){return e.width+=10})},"222")])])])}a("a630"),a("a9e3"),a("3ca3"),a("38cf");var d=Object(n["g"])({name:"MarqueeText",props:{duration:{type:Number,default:15},repeat:{type:Number,default:2,validator:function(e){return e>0}},paused:{type:Boolean,default:!1},reverse:{type:Boolean,default:!1},vertical:{type:Boolean,default:!1}},render:function(){var e=this,t=this.duration,a=this.repeat,s=this.paused,c=this.reverse,r=this.vertical;return Object(n["h"])("div",{class:this.$style.wrap},[Object(n["h"])("div",{class:[s?this.$style.paused:"",this.$style.content]},Array.from({length:a},(function(a,s){return Object(n["h"])("div",{key:s,class:r?e.$style.textVertical:e.$style.text,style:{animationDuration:"".concat(t,"s"),animationDirection:c?"reverse":void 0}},e.$slots.default())})))])}}),b=a("c803"),m=a("6b0d"),p=a.n(m);const f={};f["$style"]=b["default"];const g=p()(d,[["__cssModules",f]]);var h=g,j=Object(n["g"])({name:"App",components:{MarqueeText:h},setup:function(){return{isPaused:Object(n["l"])(!1)}},data:function(){return{width:20}}});a("5b3b");const O=p()(j,[["render",u]]);var v=O,x=Object(n["a"])(v);x.mount("#app")},"5b3b":function(e,t,a){"use strict";a("f6f8")},"69da":function(e,t,a){var n=a("24fb"),s=a("983d");t=n(!1),t.i(s),t.push([e.i,"table code{white-space:nowrap}.vertical-test{width:200px;height:500px}.vertical-test .marquee-text-text{width:200px}",""]),e.exports=t},c803:function(e,t,a){"use strict";var n=a("da3a"),s=a.n(n);a.d(t,"default",(function(){return s.a}))},d4e4:function(e,t,a){var n=a("24fb");t=n(!1),t.push([e.i,".marquee-text-wrap{overflow:hidden}.marquee-text-content{width:100000px}.marquee-text-text{-webkit-animation-name:marquee-text-animation;animation-name:marquee-text-animation;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;float:left}.marquee-text-textVertical{-webkit-animation-name:marquee-text-animation-vertical;animation-name:marquee-text-animation-vertical;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.marquee-text-paused .marquee-text-text{-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes marquee-text-animation{0%{-webkit-transform:translateX(0);transform:translateX(0)}to{-webkit-transform:translateX(-100%);transform:translateX(-100%)}}@keyframes marquee-text-animation{0%{-webkit-transform:translateX(0);transform:translateX(0)}to{-webkit-transform:translateX(-100%);transform:translateX(-100%)}}@-webkit-keyframes marquee-text-animation-vertical{0%{-webkit-transform:translateY(0);transform:translateY(0)}to{-webkit-transform:translateY(-100%);transform:translateY(-100%)}}@keyframes marquee-text-animation-vertical{0%{-webkit-transform:translateY(0);transform:translateY(0)}to{-webkit-transform:translateY(-100%);transform:translateY(-100%)}}",""]),t.locals={wrap:"marquee-text-wrap",content:"marquee-text-content",text:"marquee-text-text",animation:"marquee-text-animation",textVertical:"marquee-text-textVertical","animation-vertical":"marquee-text-animation-vertical",paused:"marquee-text-paused"},e.exports=t},da3a:function(e,t,a){var n=a("d4e4");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var s=a("499e").default;s("0deff12e",n,!0,{sourceMap:!1,shadowMode:!1})},f6f8:function(e,t,a){var n=a("69da");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var s=a("499e").default;s("50e24b40",n,!0,{sourceMap:!1,shadowMode:!1})}});
//# sourceMappingURL=app.332a1c60.js.map