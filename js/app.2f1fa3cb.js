(function(){var t={3471:function(){$.scrollify({section:".box",scrollbars:"false",interstitialSection:"#header,#footer",easing:"swing",scrollSpeed:300,before:function(t,e){var r=e[t].attr("data-section-name");$(".pagination .active").removeClass("active"),$(".pagination").find('a[href="#'+r+'"]').addClass("active")},afterRender:function(){var t='<ul class="pagination">',e="";$(".box").each((function(r){this.Area,e="",r===$.scrollify.currentIndex()&&(e="active"),t+='<li><a class="'+e+'" href="#'+$(this).attr("data-section-name")+'"><span class="hover-text">'+$(this).attr("data-section-name").charAt(0).toUpperCase()+$(this).attr("data-section-name").slice(1)+"</span></a></li>"})),t+="</ul>",$("#box1").append(t),$(".pagination a").on("click",$.scrollify.move)}})},5704:function(t,e,r){"use strict";var o=r(7195),a=function(){var t=this,e=t._self._c;return e("div",[e("div",{class:{active:t.menuActive},attrs:{id:"hamburger"},on:{click:t.toggleMenu}},[e("span"),e("span"),e("span")]),t.menuActive?e("nav",[e("router-link",{attrs:{to:"/"}},[t._v("Home")]),e("router-link",{attrs:{to:"/companyoverview"}},[t._v("Overview")]),e("router-link",{attrs:{to:"/productintroduction"}},[t._v("Product")]),e("router-link",{attrs:{to:"/accesspoint"}},[t._v("Access")]),e("router-link",{attrs:{to:"/companyquery"}},[t._v("Query")])],1):t._e(),e("header",{attrs:{id:"header"}},[e("div",{staticClass:"fade-in",attrs:{id:"app"}},[e("img",{ref:"logo",staticClass:"logo app-logo",attrs:{src:r(6949),alt:"Logo"},on:{mouseover:t.enlargeLogo,mouseleave:t.resetLogo,click:t.goToTop}})])]),e("section",{staticClass:"box",attrs:{id:"box1","data-section-name":"Area1"}},[t.showHelloWorld?e("HelloWorld",{attrs:{msg:"\n      私たちrobottteは<span style='color: red;'>『年齢を重ねながら、幸せに暮らせる社会の実現』</span>に向け、\n      ロボの手で、人の手を支えて参ります。私たちの志、思いについて、記載しております。\n      私たちと一緒に、より良い未来を創造していきませんか。"}}):t._e(),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("router-view",{attrs:{name:"box1"}})],1),e("section",{staticClass:"box",attrs:{id:"box2","data-section-name":"Area2"}},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),t.showHelloWorld?e("HelloWorld",{attrs:{msg:"\n      開発しているプロダクトについてご紹介しております。\n      私たちのアプローチは、システムが人と競争するのではなく、\n      テクノロジーだからこそ役に立てる場所を見つけます。"}}):t._e(),e("router-view",{attrs:{name:"box2"}})],1),e("section",{staticClass:"box",attrs:{id:"box3","data-section-name":"Area3"}},[e("br"),t.showHelloWorld?e("HelloWorld",{attrs:{msg:"\n      私達の拠点情報になります。働く場所に囚われず、\n      リモートで働ける環境もございます。"}}):t._e(),e("router-view",{attrs:{name:"box3"}}),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],1),e("section",{staticClass:"box",attrs:{id:"box4","data-section-name":"Area4"}},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),t.showHelloWorld?e("HelloWorld",{attrs:{msg:"\n      お問合せはこちらにお願いします。"}}):t._e(),e("router-view",{attrs:{name:"box4"}})],1)])},n=[],s=(r(560),function(){var t=this,e=t._self._c;return e("div",{staticClass:"message",domProps:{innerHTML:t._s(t.formattedMsg)}},[e("div",{staticClass:"hello"},[e("h1",[t._v(t._s(t.msg))])])])}),i=[],l={name:"HelloWorld",props:{msg:String},computed:{formattedMsg(){return this.msg.replace(/\n/g,"<br>")}}},u=l,c=r(1001),d=(0,c.Z)(u,s,i,!1,null,"78e46ac4",null),p=d.exports,m=r(2241),b=(r(3471),r(4309)),v=r.n(b);o.ZP.use(m.ZP);var f={name:"App",components:{HelloWorld:p},mounted(){this.$nextTick((()=>{v()()}))},methods:{enlargeLogo(){this.$refs.logo.style.transform="scale(1.2)"},resetLogo(){this.$refs.logo.style.transform="scale(1)"},goToTop(){const t=this.$route.path;"/"!==t&&this.$router.push("/")},toggleMenu(){this.menuActive=!this.menuActive}},data(){return{currentSection:0,showHelloWorld:!0,menuActive:!1}},watch:{$route(t){this.showHelloWorld="/"===t.path}}},h=f,g=(0,c.Z)(h,a,n,!1,null,"0cf4a16c",null),_=g.exports,y=function(){var t=this,e=t._self._c;return e("div",{staticClass:"CompanyOverview"},[e("h1",[t._v(t._s(t.pageTitle))]),t._m(0)])},x=[function(){var t=this,e=t._self._c;return e("div",{staticStyle:{display:"flex","justify-content":"center"}},[e("ul",{staticStyle:{"list-style-position":"inside","text-align":"left"}},[e("li",[t._v("商号：株式会社robottte（和名：株式会社ロボテ）")]),e("li",[t._v("設立：2021年8月2日")]),e("li",[t._v("事業："),e("a",{attrs:{href:"https://hr-monster.io/"}},[t._v("HRモンスター")]),t._v("・"),e("a",{attrs:{href:"https://kaigo-edutainment.com/kimochi-reset/"}},[t._v("キモチのリセットボタン")])])])])}],w={data(){return{pageTitle:"会社概要"}}},C=w,$=(0,c.Z)(C,y,x,!1,null,"879136e2",null),P=$.exports,N=function(){var t=this,e=t._self._c;return e("div",{staticClass:"fade-in"},[e("div",{staticClass:"AccessPoint"},[e("h1",{staticClass:"fade-in"},[t._v(t._s(t.pageTitle))]),e("p",[t._v("本社：東京都港区南青山二丁目2番15号ウィン青山942")]),e("p",[t._v("支社：東京都練馬区北町２-21-10-702（INITIA練馬北町）")]),e("iframe",{attrs:{src:"https://maps.google.co.jp/maps?output=embed&q=東京都練馬区北町２-21-10"}})])])},T=[],k={data(){return{pageTitle:"AccessPoint"}}},q=k,A=(0,c.Z)(q,N,T,!1,null,"2e40273c",null),H=A.exports,M=function(){var t=this,e=t._self._c;return e("div",{staticClass:"ProductIntroduction"},[e("h1",[t._v(t._s(t.pageTitle))]),e("div",{staticClass:"bullets",staticStyle:{display:"flex","justify-content":"center"}},[e("br"),e("div",{staticClass:"fade-in",attrs:{id:"app"}},[e("a",{attrs:{href:"http://hr-monster.io/",target:"_blank"}},[e("img",{ref:"neon",staticClass:"neon app-neon",attrs:{src:r(7685),alt:"Neon"},on:{mouseover:t.enlargeNeon,mouseleave:t.resetNeon}})])]),e("ul",{staticStyle:{"list-style-position":"inside","text-align":"left"}},[e("br"),e("li",[t._v("月6980円～の24時間働ける担当者を雇用しませんか")]),e("li",[t._v("土日・夜間帯の応募者を即時対応し、効率化も図れるプラットフォーム")]),e("li",[t._v("職員入社後、早期離職防止できる定着のプラットフォーム")]),e("center",[e("br"),e("a",{attrs:{href:"https://hr-monster.io/"}},[t._v("HRモンスター紹介サイト")]),e("br"),e("a",{attrs:{href:"https://hr-monster.io/recruit/"}},[t._v("求職者向けサイト")])])],1)])])},j=[],O={data(){return{pageTitle:"製品紹介"}},methods:{enlargeNeon(){this.$refs.neon.style.transform="scale(1.2)"},resetNeon(){this.$refs.neon.style.transform="scale(1)"}}},S=O,Z=(0,c.Z)(S,M,j,!1,null,"231d2fba",null),W=Z.exports,E=function(){var t=this,e=t._self._c;return e("div",{staticClass:"CompanyQuery"},[e("h1",[e("center",[t._v(t._s(t.pageTitle))])],1),e("div",{staticClass:"form-container"},[e("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[e("div",[e("label",{attrs:{for:"inquiry"}},[t._v("問合せ:")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.inquiry,expression:"inquiry"}],attrs:{id:"inquiry"},domProps:{value:t.inquiry},on:{input:function(e){e.target.composing||(t.inquiry=e.target.value)}}})]),e("div",[e("label",{attrs:{for:"name"}},[t._v("名前:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",id:"name",required:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),e("div",[e("label",{attrs:{for:"phoneNumber"}},[t._v("電話番号:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.phoneNumber,expression:"phoneNumber"}],attrs:{type:"text",id:"phoneNumber",required:""},domProps:{value:t.phoneNumber},on:{input:function(e){e.target.composing||(t.phoneNumber=e.target.value)}}})]),e("div",[e("label",{attrs:{for:"email"}},[t._v("Email:")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",id:"email",required:""},domProps:{value:t.email},on:{blur:t.checkEmail,input:function(e){e.target.composing||(t.email=e.target.value)}}}),t.emailError?e("span",{staticStyle:{color:"red"}},[t._v("有効なEmailを入力してください。")]):t._e()]),e("div",{attrs:{id:"address-container"}},[e("label",{attrs:{for:"address"}},[t._v("住所(任意):")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],attrs:{type:"text",id:"address"},domProps:{value:t.address},on:{blur:t.showGoogleMap,input:function(e){e.target.composing||(t.address=e.target.value)}}})]),e("iframe",{attrs:{src:t.googleMapUrl,frameborder:"0"}}),t.googleMapVisible?e("div",{attrs:{id:"googleMap"}}):t._e(),t._m(0)])])])},I=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"submit-button-container"},[e("button",{attrs:{type:"submit"}},[t._v("送信")])])}],L=r(4582),U={data(){return{pageTitle:"お問合せ",name:"",phoneNumber:"",email:"",emailError:!1,address:"",inquiry:"",googleMapVisible:!1,googleMapUrl:"https://maps.google.co.jp/maps?output=embed&q=東京都練馬区北町２-21-10"}},methods:{checkEmail(){this.email.includes("@")?this.emailError=!1:this.emailError=!0},showGoogleMap(){this.googleMapUrl=`https://maps.google.co.jp/maps?output=embed&q=${encodeURIComponent(this.address)}`},submitForm(){const t={name:this.name,phoneNumber:this.phoneNumber,email:this.email,address:this.address,inquiry:this.inquiry};L.Z.post("https://robottte.jp/sendEmail",t).then((t=>{console.log(t.data)})).catch((t=>{console.error(t)}))}}},R=U,F=(0,c.Z)(R,E,I,!1,null,"1516d90b",null),Q=F.exports;o.ZP.use(m.ZP);const G=[{path:"/",components:{default:P,box1:P,box2:W,box3:H,box4:Q}}],V=new m.ZP({routes:G});var D=V,z=r(998),B=r.n(z);window.$=window.jQuery=B(),o.ZP.config.productionTip=!1,new o.ZP({router:D,render:t=>t(_)}).$mount("#app")},6949:function(t,e,r){"use strict";t.exports=r.p+"img/logo.b6838cef.png"},7685:function(t,e,r){"use strict";t.exports=r.p+"img/neon.21556d26.png"}},e={};function r(o){var a=e[o];if(void 0!==a)return a.exports;var n=e[o]={exports:{}};return t[o].call(n.exports,n,n.exports,r),n.exports}r.m=t,function(){var t=[];r.O=function(e,o,a,n){if(!o){var s=1/0;for(c=0;c<t.length;c++){o=t[c][0],a=t[c][1],n=t[c][2];for(var i=!0,l=0;l<o.length;l++)(!1&n||s>=n)&&Object.keys(r.O).every((function(t){return r.O[t](o[l])}))?o.splice(l--,1):(i=!1,n<s&&(s=n));if(i){t.splice(c--,1);var u=a();void 0!==u&&(e=u)}}return e}n=n||0;for(var c=t.length;c>0&&t[c-1][2]>n;c--)t[c]=t[c-1];t[c]=[o,a,n]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var o in e)r.o(e,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,o){var a,n,s=o[0],i=o[1],l=o[2],u=0;if(s.some((function(e){return 0!==t[e]}))){for(a in i)r.o(i,a)&&(r.m[a]=i[a]);if(l)var c=l(r)}for(e&&e(o);u<s.length;u++)n=s[u],r.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return r.O(c)},o=self["webpackChunkrobottte"]=self["webpackChunkrobottte"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=r.O(void 0,[998],(function(){return r(5704)}));o=r.O(o)})();
//# sourceMappingURL=app.2f1fa3cb.js.map