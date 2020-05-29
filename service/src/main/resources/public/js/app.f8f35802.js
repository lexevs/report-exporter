(function(t){function a(a){for(var r,i,l=a[0],o=a[1],c=a[2],v=0,d=[];v<l.length;v++)i=l[v],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&d.push(s[i][0]),s[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);u&&u(a);while(d.length)d.shift()();return n.push.apply(n,c||[]),e()}function e(){for(var t,a=0;a<n.length;a++){for(var e=n[a],r=!0,l=1;l<e.length;l++){var o=e[l];0!==s[o]&&(r=!1)}r&&(n.splice(a--,1),t=i(i.s=e[0]))}return t}var r={},s={app:0},n=[];function i(a){if(r[a])return r[a].exports;var e=r[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=r,i.d=function(t,a,e){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var r in t)i.d(e,r,function(a){return t[a]}.bind(null,r));return e},i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=a,l=l.slice();for(var c=0;c<l.length;c++)a(l[c]);var u=o;n.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";var r=e("85ec"),s=e.n(r);s.a},"03ea":function(t,a,e){},"0fe2":function(t,a,e){},"2c53":function(t,a,e){"use strict";var r=e("7250"),s=e.n(r);s.a},"3eea":function(t,a,e){},"428b":function(t,a,e){"use strict";var r=e("d03b"),s=e.n(r);s.a},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var r=e("2b0e"),s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"header-div"},[e("HeaderBar",{attrs:{msg:"Top"}}),e("SubHeaderBar",{attrs:{msg:"SubTop"}})],1),e("div",{staticClass:"main-content"},[e("router-view")],1),e("FooterBar",{attrs:{msg:"Bottom"}})],1)},n=[],i=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"header"},[e("nav",{staticClass:"navbar navbar-expand-md navbar-dark fixed-top evs-header"},[e("a",{staticClass:"navbar-brand active",attrs:{href:"https://www.cancer.gov/",target:"_blank"}},[t._v("NATIONAL CANCER INSTITUTE - CANCER.GOV ")]),e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})]),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarText"}},[e("ul",{staticClass:"navbar-nav mr-auto"},[e("li",{staticClass:"nav-item"})]),e("span",{staticClass:"navbar-text"},[e("ul",{staticClass:"navbar-nav mr-auto"},[e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("About Cancer"),e("span",{staticClass:"sr-only"},[t._v("(current)")])])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Research")])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Grants & Training")])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("News & Events")])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("About NCI")])])])])])])])}],o={name:"HeaderBar",props:{msg:String}},c=o,u=(e("9cdd"),e("2877")),v=Object(u["a"])(c,i,l,!1,null,"e7ff72f8",null),d=v.exports,p=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"subheader"},[e("nav",{staticClass:"navbar navbar-expand-md navbar-dark fixed evs-subheader"},[e("router-link",{attrs:{to:"/"}},[e("a",{staticClass:"navbar-brand active",attrs:{href:"#",target:"_blank"}},[t._v("EVS Report Exporter")])]),t._m(0),t._m(1)],1)])},f=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarText"}},[e("ul",{staticClass:"navbar-nav mr-auto"},[e("li",{staticClass:"nav-item"})]),e("span",{staticClass:"navbar-text"},[e("ul",{staticClass:"navbar-nav mr-auto"},[e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Documentation")])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Help")])])])])])}],b={name:"SubHeaderBar",props:{msg:String}},m=b,h=(e("c1a9"),Object(u["a"])(m,p,f,!1,null,"aa9df3c2",null)),g=h.exports,_=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"footer"},[e("div",{staticClass:"footer navbar-inverse navbar-fixed-bottom"},[e("div",{staticClass:"center-block"},[e("div",{staticClass:"small navbar-text text-center"},[e("p",[e("a",{attrs:{href:"http://www.cancer.gov/global/web/policies",title:"link to NCI Policies"}},[t._v("Policies")]),t._v(" | "),e("a",{attrs:{href:"http://www.cancer.gov/global/web/policies/accessibility",title:"link to NCI Accessibility Policies"}},[t._v("Accessibility")]),t._v(" | "),e("a",{attrs:{href:"http://www.cancer.gov/global/viewing-files",title:"link to NCI Tools for Viewing Files"}},[t._v("Viewing Files")]),t._v(" | "),e("a",{attrs:{href:"http://www.cancer.gov/global/web/policies/foia",title:"link to FOIA"}},[t._v("FOIA")])]),e("p",[e("a",{attrs:{href:"http://www.hhs.gov/",target:"_blank",title:"link to HHS.gov"}},[t._v("U.S. Department of Health and Human Services")]),t._v(" | "),e("a",{attrs:{href:"http://www.nih.gov/",target:"_blank",title:"link to NIH.gov"}},[t._v("National Institutes of Health")]),t._v(" | "),e("a",{attrs:{href:"http://www.cancer.gov/",title:"link to Cancer.gov"}},[t._v("National Cancer Institute")]),t._v(" | "),e("a",{attrs:{href:"http://www.usa.gov/",target:"_blank",title:"link to USA.gov"}},[t._v("USA.gov")])]),e("p",[t._v("NIH… Turning Discovery Into Health ®")])])])])])}],y={name:"FooterBar",props:{msg:String}},w=y,x=(e("2c53"),Object(u["a"])(w,_,C,!1,null,"12313f1e",null)),k=x.exports,E={name:"app",components:{HeaderBar:d,SubHeaderBar:g,FooterBar:k},data:function(){return{message:"Hello",selectedTags:[]}}},S=E,T=(e("034f"),Object(u["a"])(S,s,n,!1,null,null,null)),O=T.exports,$=e("1157"),j=e.n($),I=(e("4989"),e("ab8b"),e("8c4f")),N=(e("a89b"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"about"}},[t._v(' When you have a great story about how your product or service was built to change lives, share it. The "About Us" page is a great place for it to live, too. Good stories humanize your brand, providing context and meaning for your product. What’s more, good stories are sticky -- which means people are more likely to connect with them and pass them on. ')])}),H=[],A={name:"about"},B=A,P=(e("b8ab"),Object(u["a"])(B,N,H,!1,null,null,null)),R=P.exports,F=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"report-selection"},[t._m(0),e("div",{staticClass:"container"},[e("div",{staticClass:"card-deck mb-3 text-center"},[e("div",{staticClass:"card mb-4 box-shadow"},[t._m(1),e("div",{staticClass:"card-body"},[e("h1",{staticClass:"card-title pricing-card-title"},[t._v("title")]),t._m(2),e("router-link",{attrs:{to:"/readCodeEntry"}},[e("button",{staticClass:"btn btn-lg btn-block btn-primary",attrs:{type:"button"}},[t._v("Select")])])],1)]),e("div",{staticClass:"card mb-4 box-shadow"},[t._m(3),e("div",{staticClass:"card-body"},[e("h1",{staticClass:"card-title pricing-card-title"},[t._v("title")]),t._m(4),e("router-link",{attrs:{to:"/searchTermEntry"}},[e("button",{staticClass:"btn btn-lg btn-block btn-primary",attrs:{type:"button"}},[t._v("Select")])])],1)]),e("div",{staticClass:"card mb-4 box-shadow"},[t._m(5),e("div",{staticClass:"card-body"},[e("h1",{staticClass:"card-title pricing-card-title"},[t._v("title")]),t._m(6),e("router-link",{attrs:{to:"/resolveBranchEntry"}},[e("button",{staticClass:"btn btn-lg btn-block btn-primary",attrs:{type:"button"}},[t._v("Select")])])],1)])])])])},M=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"},[e("h1",{staticClass:"display-4"},[t._v("NCI Thesaurus")]),e("p",{staticClass:"lead"},[t._v("NCI Thesaurus (NCIt) provides reference terminology for many NCI and other systems. It covers vocabulary for clinical care, translational and basic research, and public information and administrative activities.")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card-header"},[e("h4",{staticClass:"my-0 font-weight-normal"},[t._v("Read Codes")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",{staticClass:"list-unstyled mt-3 mb-4"},[e("li",[t._v("Enter one or many entity codes")]),e("li",[t._v("Select the properties to output")]),e("li",[t._v("Select report format")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card-header"},[e("h4",{staticClass:"my-0 font-weight-normal"},[t._v("Search Terms")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",{staticClass:"list-unstyled mt-3 mb-4"},[e("li",[t._v("Enter one or more entity terms")]),e("li",[t._v("Select the properties to output")]),e("li",[t._v("Select report format")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card-header"},[e("h4",{staticClass:"my-0 font-weight-normal"},[t._v("Resolve Branch")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",{staticClass:"list-unstyled mt-3 mb-4"},[e("li",[t._v("Select root of branch ")]),e("li",[t._v("Select the properties to output")]),e("li",[t._v("Select report format")])])}],U={name:"ReportSelection",props:{msg:String}},V=U,D=(e("428b"),Object(u["a"])(V,F,M,!1,null,"2497b98e",null)),G=D.exports,J=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"read-codes-entry"}},[e("div",{staticClass:"container px-lg-5"},[e("div",{staticClass:"row row-cols-1 row justify-content-start row mx-lg-n5 py-5"},[e("div",{staticClass:"col py-3 px-lg-5"}),t._m(0),e("div",{staticClass:"col"},[e("tags-input",{attrs:{"element-id":"tags","add-tags-on-comma":!0,"add-tags-on-space":!0,typeahead:!1},model:{value:t.selectedTags,callback:function(a){t.selectedTags=a},expression:"selectedTags"}})],1),e("div",{staticClass:"col py-5"},[e("button",{staticClass:"btn btn-primary",on:{click:t.alertMessage}},[t._v("Search")])])])])])},W=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col"},[e("h5",[t._v(" NCI Thesaurus Entity Codes")])])}],z=e("0b72"),L={name:"read-code-entry",props:{msg:String,selectedTags:[]},components:{"tags-input":z["a"]},data:function(){return{message:"Hello World!"}},methods:{setSelectedTags:function(){this.selectedTags=[{key:"php",value:"PHP"}]},alertMessage:function(){alert("Entity Codes"+JSON.stringify(this.selectedTags))}}},Q=L,q=(e("7291"),Object(u["a"])(Q,J,W,!1,null,null,null)),K=q.exports,X=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"search-term-entry"}},[t._v(" Search Term Entry ")])},Y=[],Z={name:"search-term-entry"},tt=Z,at=(e("6114"),Object(u["a"])(tt,X,Y,!1,null,null,null)),et=at.exports,rt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"resolve-branch-entry"}},[t._v(" Resolve Branch Entry ")])},st=[],nt={name:"resolve-branch-entry"},it=nt,lt=(e("643a"),Object(u["a"])(it,rt,st,!1,null,null,null)),ot=lt.exports;window.$=window.jQuery=j.a,r["a"].config.productionTip=!1,r["a"].use(I["a"]);var ct=[{path:"/",component:G},{path:"/readCodeEntry",component:K,props:{msg:"this is it",selectedTags:[]}},{path:"/searchTermEntry",component:et},{path:"/resolveBranchEntry",component:ot},{path:"/about",component:R}],ut=new I["a"]({routes:ct,mode:"history"});new r["a"]({render:function(t){return t(O)},template:"<App/>",components:{App:O,"tags-input":z["a"]},router:ut}).$mount("#app")},6114:function(t,a,e){"use strict";var r=e("0fe2"),s=e.n(r);s.a},6291:function(t,a,e){},"643a":function(t,a,e){"use strict";var r=e("93f3"),s=e.n(r);s.a},7250:function(t,a,e){},7291:function(t,a,e){"use strict";var r=e("03ea"),s=e.n(r);s.a},"85ec":function(t,a,e){},"93f3":function(t,a,e){},"98e0":function(t,a,e){},"9cdd":function(t,a,e){"use strict";var r=e("3eea"),s=e.n(r);s.a},a89b:function(t,a,e){},b8ab:function(t,a,e){"use strict";var r=e("98e0"),s=e.n(r);s.a},c1a9:function(t,a,e){"use strict";var r=e("6291"),s=e.n(r);s.a},d03b:function(t,a,e){}});
//# sourceMappingURL=app.f8f35802.js.map