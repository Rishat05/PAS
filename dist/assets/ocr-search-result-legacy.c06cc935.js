!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return o};var o={},n=Object.prototype,a=n.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},i=r.iterator||"@@iterator",s=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function l(t,e,o){return Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch($){l=function(t,e,o){return t[e]=o}}function d(t,e,o,n){var a=e&&e.prototype instanceof p?e:p,r=Object.create(a.prototype),i=new S(n||[]);return r._invoke=function(t,e,o){var n="suspendedStart";return function(a,r){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw r;return E()}for(o.method=a,o.arg=r;;){var i=o.delegate;if(i){var s=A(i,o);if(s){if(s===h)continue;return s}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if("suspendedStart"===n)throw n="completed",o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);n="executing";var c=u(t,e,o);if("normal"===c.type){if(n=o.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:o.done}}"throw"===c.type&&(n="completed",o.method="throw",o.arg=c.arg)}}}(t,o,i),r}function u(t,e,o){try{return{type:"normal",arg:t.call(e,o)}}catch($){return{type:"throw",arg:$}}}o.wrap=d;var h={};function p(){}function f(){}function m(){}var v={};l(v,i,(function(){return this}));var g=Object.getPrototypeOf,C=g&&g(g(k([])));C&&C!==n&&a.call(C,i)&&(v=C);var y=m.prototype=p.prototype=Object.create(v);function b(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(e,o){function n(r,i,s,c){var l=u(e[r],e,i);if("throw"!==l.type){var d=l.arg,h=d.value;return h&&"object"==t(h)&&a.call(h,"__await")?o.resolve(h.__await).then((function(t){n("next",t,s,c)}),(function(t){n("throw",t,s,c)})):o.resolve(h).then((function(t){d.value=t,s(d)}),(function(t){return n("throw",t,s,c)}))}c(l.arg)}var r;this._invoke=function(t,e){function a(){return new o((function(o,a){n(t,e,o,a)}))}return r=r?r.then(a,a):a()}}function A(t,e){var o=t.iterator[e.method];if(void 0===o){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,A(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=u(o,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function w(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function k(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,n=function e(){for(;++o<t.length;)if(a.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:E}}function E(){return{value:void 0,done:!0}}return f.prototype=m,l(y,"constructor",m),l(m,"constructor",f),f.displayName=l(m,c,"GeneratorFunction"),o.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},o.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,c,"GeneratorFunction")),t.prototype=Object.create(y),t},o.awrap=function(t){return{__await:t}},b(x.prototype),l(x.prototype,s,(function(){return this})),o.AsyncIterator=x,o.async=function(t,e,n,a,r){void 0===r&&(r=Promise);var i=new x(d(t,e,n,a),r);return o.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(y),l(y,c,"Generator"),l(y,i,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),o.keys=function(t){var e=[];for(var o in t)e.push(o);return e.reverse(),function o(){for(;e.length;){var n=e.pop();if(n in t)return o.value=n,o.done=!1,o}return o.done=!0,o}},o.values=k,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(o,n){return i.type="throw",i.arg=t,e.next=o,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n],i=r.completion;if("root"===r.tryLoc)return o("end");if(r.tryLoc<=this.prev){var s=a.call(r,"catchLoc"),c=a.call(r,"finallyLoc");if(s&&c){if(this.prev<r.catchLoc)return o(r.catchLoc,!0);if(this.prev<r.finallyLoc)return o(r.finallyLoc)}else if(s){if(this.prev<r.catchLoc)return o(r.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return o(r.finallyLoc)}}}},abrupt:function(t,e){for(var o=this.tryEntries.length-1;o>=0;--o){var n=this.tryEntries[o];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var r=n;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var i=r?r.completion:{};return i.type=t,i.arg=e,r?(this.method="next",this.next=r.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.finallyLoc===t)return this.complete(o.completion,o.afterLoc),w(o),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc===t){var n=o.completion;if("throw"===n.type){var a=n.arg;w(o)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,o){return this.delegate={iterator:k(t),resultName:e,nextLoc:o},"next"===this.method&&(this.arg=void 0),h}},o}function o(t,e,o,n,a,r,i){try{var s=t[r](i),c=s.value}catch(l){return void o(l)}s.done?e(c):Promise.resolve(c).then(n,a)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(a,r){var i=t.apply(e,n);function s(t){o(i,a,r,s,c,"next",t)}function c(t){o(i,a,r,s,c,"throw",t)}s(void 0)}))}}var a=document.createElement("style");a.innerHTML=".modal-card-head[data-v-57cd1f96],.modal-card-foot[data-v-57cd1f96]{align-items:center;background-color:#fff;display:flex;flex-shrink:0;justify-content:flex-start;position:relative}.modal-card-head[data-v-57cd1f96]{padding:20px}.modal-card-foot[data-v-57cd1f96]{justify-content:flex-end;padding:16px}p.modal-card-title[data-v-57cd1f96]{font-family:Hiragino Kaku Gothic Pro;font-style:normal;font-weight:600;font-size:20px;line-height:24px;letter-spacing:-.408px;color:#121723}.modal-card-body p[data-v-57cd1f96]{font-family:Hiragino Kaku Gothic Pro;font-style:normal;font-weight:300;font-size:16px;line-height:170%;padding:16px}.buttons[data-v-57cd1f96]{width:100%}.confirm[data-v-57cd1f96]{background:#121723;border-radius:4px}.btn-txt[data-v-57cd1f96]{color:#fff!important}.close[data-v-57cd1f96]{background:#FFFFFF;border:1px solid #121723;border-radius:4px}.close span[data-v-57cd1f96]{color:#121723!important}.modal-card-head[data-v-1a9c13cf],.modal-card-foot[data-v-1a9c13cf]{align-items:center;background-color:#fff;display:flex;flex-shrink:0;justify-content:flex-start;padding:20px;position:relative}p.modal-card-title[data-v-1a9c13cf]{text-align:center;font-weight:600;font-size:18px;line-height:22px;letter-spacing:-.408px;color:#121723}.buttons[data-v-1a9c13cf]{width:100%}.modal-card-head[data-v-11059bec],.modal-card-foot[data-v-11059bec]{align-items:center;background-color:#fff;display:flex;flex-shrink:0;justify-content:flex-start;padding:20px;position:relative}p.modal-card-title[data-v-11059bec]{text-align:center;font-weight:600;font-size:18px;line-height:22px;letter-spacing:-.408px;color:#121723}.buttons[data-v-11059bec]{width:100%}.color-text[data-v-11059bec]{color:#e94719!important}span.control-label[data-v-11059bec]{font-size:20px;font-weight:300}.img-div[data-v-11059bec]{margin:0 auto;height:414px;width:414px;background:#000}span.control-label[data-v-11059bec]{font-weight:300;font-size:20px;line-height:30px}img.video[data-v-11059bec]{position:relative!important;height:100%;width:100%}.gray-shed[data-v-11059bec]{position:absolute;background:rgba(255,255,255,.4);border:1px solid #ffffff}.colored-shed[data-v-11059bec]{position:absolute;background:rgba(14,177,232,.4);border:1px solid #0eb1e8}.input-field[data-v-608153f8]{padding:10px 0}.swtich[data-v-608153f8]{display:flex;align-content:center;justify-content:center;margin-bottom:10px;align-items:center}.swtich span[data-v-608153f8]{font-weight:300;font-size:14px;line-height:21px;margin-right:10px}button.button.btn-filter.is-fullwidth[data-v-608153f8]{width:90%;height:62px;margin:0 auto;background:#ffffff;border:1px solid #e94719;border-radius:70px}button.button.btn-filter.is-fullwidth img[data-v-608153f8]{margin-right:20px}button.button.btn-filter.is-fullwidth span[data-v-608153f8]{color:#e94719;font-weight:300;font-size:20px;line-height:30px}.customers[data-v-608153f8]{height:54.3vh;overflow-y:scroll}.customers-list[data-v-608153f8]{height:100%}.btn-container[data-v-608153f8]{padding:25px 0;border-top:1px solid #cbcfd6}.flip-list-move[data-v-608153f8]{transition:transform 1s}.not-found[data-v-608153f8]{width:253px;text-align:center;margin:0 auto;padding-top:36px}.not-found .not-found-text[data-v-608153f8]{font-style:normal;font-weight:600;font-size:20px;line-height:30px;text-align:center;color:#121723}\n",document.head.appendChild(a),System.register(["./HeaderComponent-legacy.84785abf.js","./index-legacy.b31cbbde.js","./CustomerDetailsComponent-legacy.b667d902.js","./Camera-legacy.64800c8e.js"],(function(t){"use strict";var o,a,r,i,s;return{setters:[function(t){o=t.H},function(t){a=t.n,r=t.s},function(t){i=t.C},function(t){s=t.c}],execute:function(){var c={},l=a({props:["customer"],components:{CustomerDetailsComponentVue:i},data:function(){return{isComponentModalActive:!1,customerSelected:!1}}},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"customer-list"}},[t.customer.CustomerID?o("div",{staticClass:"search-result",on:{click:function(e){t.isComponentModalActive=!0}}},[o("b-field",[o("b-radio-button",{attrs:{"native-value":t.customer.CustomerID},model:{value:t.customerSelected,callback:function(e){t.customerSelected=e},expression:"customerSelected"}},[o("span",{staticClass:"id"},[o("span",{staticClass:"lbl"},[t._v("ID")]),t._v(" "),o("strong",[t._v(t._s(t.customer.CustomerID))])]),2==t.customer.max_score?o("span",{staticClass:"name-bill-to"},[o("span",{staticClass:"lbl"},[t._v("屋号 ")]),o("strong",[t._v(t._s(t.customer.NameBillTo?t.customer.NameBillTo:"N/A"))])]):t._e(),2==t.customer.max_score?o("span",{staticClass:"contact"},[o("span",{staticClass:"lbl"},[t._v("契約者名（個人）")]),t._v(" "),o("strong",[t._v(t._s(t.customer.concat_Name_person?t.customer.concat_Name_person:"N/A"))])]):t._e(),1==t.customer.max_score?o("span",{staticClass:"name"},[o("span",{staticClass:"lbl"},[t._v("契約法人名 ")]),t._v(" "),o("strong",[t._v(t._s(t.customer.CompanyName1?t.customer.CompanyName1:"N/A"))])]):t._e(),1==t.customer.max_score?o("span",{staticClass:"company"},[o("span",{staticClass:"lbl"},[t._v("法人代表者名/担当者名 ")]),t._v(" "),o("strong",[t._v(t._s(t.customer.CompanyName2?t.customer.CompanyName2:"N/A"))])]):t._e()])],1)],1):t._e(),o("b-modal",{attrs:{width:300,"has-modal-card":"","trap-focus":"","destroy-on-hide":!1,"aria-role":"dialog","aria-label":"Example Modal","close-button-aria-label":"Close",animation:"slide-fade-down","aria-modal":""},scopedSlots:t._u([{key:"default",fn:function(e){return[o("customer-details-component-vue",{attrs:{customer:t.customer},on:{close:e.close}})]}}]),model:{value:t.isComponentModalActive,callback:function(e){t.isComponentModalActive=e},expression:"isComponentModalActive"}})],1)}),[],!1,d,null,null,null);function d(t){for(var e in c)this[e]=c[e]}var u=function(){return l.exports}(),h={},p=a({props:["total","page"],data:function(){return{}},methods:{goNext:function(){this.$emit("goNext")},goPrev:function(){this.$emit("goPrev")}}},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container",attrs:{id:"pagination"}},[o("div",{staticClass:"prev p-10"},[o("b-button",{staticClass:"prev-btn",attrs:{disabled:t.page+1==1,"icon-right":"chevron-left"},on:{click:t.goPrev}})],1),o("div",{staticClass:"page p-10"},[t._v(" "+t._s(t.page+1)+" / "+t._s(t.total)+" ")]),o("div",{staticClass:"next p-10"},[o("b-button",{staticClass:"next-btn",attrs:{disabled:t.page+1>=t.total,"icon-right":"chevron-right"},on:{click:t.goNext}})],1)])}),[],!1,f,null,null,null);function f(t){for(var e in h)this[e]=h[e]}var m=function(){return p.exports}(),v={},g=a({props:["title","bodyText"]},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"alart-showing-modal-comp"},[o("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[o("header",{staticClass:"modal-card-head"},[o("p",{staticClass:"modal-card-title"},[t._v(t._s(t.title))]),o("button",{staticClass:"delete",attrs:{type:"button"},on:{click:function(e){return t.$emit("close")}}})]),o("section",{staticClass:"modal-card-body"},[o("p",[t._v(t._s(t.bodyText))])]),o("footer",{staticClass:"modal-card-foot"},[o("b-button",{staticClass:"close",attrs:{label:"いいえ"},on:{click:function(e){return t.$emit("close")}}}),o("b-button",{staticClass:"confirm",on:{click:function(e){return t.$emit("closeParent")}}},[o("span",{staticClass:"btn-txt"},[t._v("中断する")])])],1)])])}),[],!1,C,"57cd1f96",null,null);function C(t){for(var e in v)this[e]=v[e]}var y=function(){return g.exports}(),b={},x=a({components:{AlartShowingModelComponent:y},data:function(){return{isComponentModalActive:!1,orc_searched_text:"",modalTitleText:"検索ワードの変更",modalBodyText:"再検索を中断しますか？"}},mounted:function(){this.orc_searched_text=this.$store.state.customer.openSearchQuery.search},methods:{checkSearchCondition:function(){this.orc_searched_text!==this.$store.state.customer.openSearchQuery.search?this.isComponentModalActive=!0:this.closeParent()},searchAgain:function(){this.orc_searched_text&&this.$store.dispatch("customer/setOpenSearchQuery",{name:"search",value:this.orc_searched_text}),this.$emit("searchAgain")},close:function(){this.isComponentModalActive=!1},closeParent:function(){this.$emit("close")}}},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"modal-card",staticStyle:{width:"auto"},attrs:{id:"research"}},[o("header",{staticClass:"modal-card-head"},[o("p",{staticClass:"modal-card-title"},[t._v("検索ワードの変更")]),o("button",{staticClass:"delete",attrs:{type:"button"},on:{click:t.checkSearchCondition}})]),o("section",{staticClass:"modal-card-body",staticStyle:{padding:"20px"}},[o("b-field",[o("b-input",{attrs:{maxlength:"200",type:"textarea"},model:{value:t.orc_searched_text,callback:function(e){t.orc_searched_text=e},expression:"orc_searched_text"}})],1)],1),o("footer",{staticClass:"modal-card-foot"},[o("div",{staticClass:"buttons"},[o("b-button",{class:t.orc_searched_text?"btn-orange":"btn-gray",attrs:{disabled:!t.orc_searched_text,expanded:""},on:{click:t.searchAgain}},[t._v("再検索")])],1)]),o("b-modal",{attrs:{width:300,"has-modal-card":"","trap-focus":"","destroy-on-hide":!1,"aria-role":"dialog","aria-label":"Example Modal","close-button-aria-label":"Close",animation:"slide-fade-down","aria-modal":""},model:{value:t.isComponentModalActive,callback:function(e){t.isComponentModalActive=e},expression:"isComponentModalActive"}},[[o("alart-showing-model-component",{attrs:{title:t.modalTitleText,bodyText:t.modalBodyText},on:{closeParent:t.closeParent,close:t.close}})]],2)],1)}),[],!1,A,"1a9c13cf",null,null);function A(t){for(var e in b)this[e]=b[e]}var _=function(){return x.exports}(),w={},S=a({components:{camera:s,AlartShowingModelComponent:y},data:function(){return{ContractStores:[],searchCondition:{},ocrResponseElements:[],ocrResponseSelectedElements:[],isComponentModalActive:!1,modalTitleText:"検索条件の変更",modalBodyText:"検索条件の変更を中断しますか？",newlySelectedElement:[]}},mounted:function(){this.getSelectedContractStore()},methods:{getSelectedContractStore:function(){this.searchCondition={search:this.$store.state.customer.openSearchQuery.search,corporation:1===this.$store.state.customer.openSearchQuery.corporation,personal:1===this.$store.state.customer.openSearchQuery.personal,ContractStore:this.$store.state.customer.openSearchQuery.ContractStore},this.ContractStores=this.$store.state.global.ContractStores,this.ocrResponseElements=this.$store.state.customer.ocrResponseElements,this.ocrResponseSelectedElements=this.$store.state.customer.ocrResponseSelectedElements},getCorporationSearchCondition:function(){this.searchCondition.corporation?this.searchCondition.corporation=1:this.searchCondition.corporation=0},getPersonalSearchCondition:function(){this.searchCondition.personal?this.searchCondition.personal=1:this.searchCondition.personal=0},getSelectedElement:function(t){var o=this;return n(e().mark((function n(){var a,r;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a=o.$store.state.customer.ocrResponseSelectedElements.find((function(e){return e.id===t.id})))){e.next=9;break}return a.selected=!1,t.selected=!1,e.next=6,o.$store.state.customer.ocrResponseSelectedElements.splice(o.$store.state.customer.ocrResponseSelectedElements.indexOf(a),1);case 6:o.newlySelectedElement.length>0&&o.newlySelectedElement.splice(o.newlySelectedElement.indexOf(a),1),e.next=13;break;case 9:return t.selected=!0,e.next=12,o.$store.dispatch("customer/setOCRResponseSelectedElements",t);case 12:o.newlySelectedElement.push(t);case 13:r="",o.$store.state.customer.ocrResponseSelectedElements.forEach((function(t){r+=" "+t.text})),o.searchCondition.search=r;case 16:case"end":return e.stop()}}),n)})))()},generateImage:function(){var t=document.getElementById("img_prev"),e=document.createElement("canvas"),o=e.getContext("2d");e.setAttribute("width",500),e.setAttribute("height",500),o.drawImage(t,0,0,500,500),this.$store.state.customer.ocrResponseElements.forEach((function(t,e){o.beginPath(),o.rect(t.x1/.828,t.y1/.828,t.x2/.828-t.x1/.828,t.y2/.828-t.y1/.828),t.selected?(o.fillStyle="rgba(14, 177, 232, 0.4)",o.fill(),o.strokeStyle="#0EB1E8",o.stroke()):(o.fillStyle="rgba(255, 255, 255, 0.2)",o.fill(),o.strokeStyle="#fff",o.stroke())}));var n=e.toDataURL("image/jpeg");this.$store.dispatch("customer/setBoundingBoxImage",n)},checkSearchCondition:function(){this.searchCondition.search!=this.$store.state.customer.openSearchQuery.search||this.searchCondition.corporation!=this.$store.state.customer.openSearchQuery.corporation||this.searchCondition.personal!=this.$store.state.customer.openSearchQuery.personal||this.searchCondition.ContractStore!=this.$store.state.customer.openSearchQuery.ContractStore?this.isComponentModalActive=!0:this.closeParent()},close:function(){this.isComponentModalActive=!1},closeParent:function(){var t=this;this.newlySelectedElement.length>0&&this.newlySelectedElement.forEach((function(e){var o=t.$store.state.customer.ocrResponseElements.find((function(t){return t.id===e.id}));o&&(o.selected=!1)})),this.$emit("close")},searchAgain:function(){this.searchCondition.search&&(this.generateImage(),this.$store.dispatch("customer/setOpenSearchQuery",{name:"search",value:this.searchCondition.search})),this.$store.dispatch("customer/setOpenSearchQuery",{name:"corporation",value:this.searchCondition.corporation?1:0}),this.$store.dispatch("customer/setOpenSearchQuery",{name:"personal",value:this.searchCondition.personal?1:0}),this.searchCondition.ContractStore&&this.$store.dispatch("customer/setOpenSearchQuery",{name:"ContractStore",value:this.searchCondition.ContractStore}),this.searchCondition.personal||this.searchCondition.corporation?this.$emit("searchAgain"):(this.isComponentModalActive=!1,r("検索対象を少なくとも1つ選択してください","is-danger"))}}},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"modal-card",staticStyle:{width:"auto"},attrs:{id:"ocr-search-condition"}},[o("header",{staticClass:"modal-card-head",staticStyle:{"padding-top":"40px"}},[o("p",{staticClass:"modal-card-title"},[t._v("検索条件の変更")]),o("button",{staticClass:"delete",attrs:{type:"button"},on:{click:t.checkSearchCondition}})]),o("section",{staticClass:"modal-card-body",staticStyle:{padding:"0"}},[o("div",{staticClass:"img-div"},[o("img",{staticClass:"video",attrs:{id:"img_prev",src:t.$store.state.global.capturedImages.length>0?t.$store.state.global.capturedImages[0].image:""}}),t._l(t.ocrResponseElements,(function(e,n){return o("div",{key:n,class:e.selected?"colored-shed":"gray-shed",style:{top:e.y1+"px",left:e.x1+"px",width:e.x2-e.x1+"px",height:e.y2-e.y1+"px"},on:{click:function(o){return t.getSelectedElement(e)}}})}))],2),o("div",{staticStyle:{padding:"0px 20px 20px"}},[o("b-field",{attrs:{label:"検索キーワード"}},[o("b-input",{attrs:{maxlength:"200",type:"textarea"},model:{value:t.searchCondition.search,callback:function(e){t.$set(t.searchCondition,"search",e)},expression:"searchCondition.search"}})],1),o("b-checkbox",{class:t.searchCondition.corporation?"color-text":"",attrs:{"native-value":"true"},on:{input:t.getCorporationSearchCondition},model:{value:t.searchCondition.corporation,callback:function(e){t.$set(t.searchCondition,"corporation",e)},expression:"searchCondition.corporation"}},[t._v(" 法人名/屋号 ")]),o("br"),o("b-checkbox",{class:t.searchCondition.personal?"color-text":"",attrs:{"native-value":"true"},on:{input:t.getPersonalSearchCondition},model:{value:t.searchCondition.personal,callback:function(e){t.$set(t.searchCondition,"personal",e)},expression:"searchCondition.personal"}},[t._v(" 個人名 ")]),o("br"),t.searchCondition.ContractStore?o("b-field",{attrs:{label:"拠点"}},[o("b-select",{attrs:{expanded:""},model:{value:t.searchCondition.ContractStore,callback:function(e){t.$set(t.searchCondition,"ContractStore",e)},expression:"searchCondition.ContractStore"}},t._l(t.ContractStores,(function(e){return o("option",{key:e.id,domProps:{value:e.id}},[t._v(" "+t._s(e.name)+" ")])})),0)],1):t._e()],1)]),o("footer",{staticClass:"modal-card-foot"},[o("div",{staticClass:"buttons"},[o("b-button",{class:t.searchCondition.search?"btn-orange":"btn-gray",attrs:{disabled:!t.searchCondition.search||!this.searchCondition.personal&&!this.searchCondition.corporation,expanded:""},on:{click:t.searchAgain}},[t._v("この条件で探す")])],1)]),o("b-modal",{attrs:{width:300,"has-modal-card":"","trap-focus":"","destroy-on-hide":!1,"aria-role":"dialog","aria-label":"Example Modal","close-button-aria-label":"Close",animation:"slide-fade-down","aria-modal":""},model:{value:t.isComponentModalActive,callback:function(e){t.isComponentModalActive=e},expression:"isComponentModalActive"}},[[o("alart-showing-model-component",{attrs:{title:t.modalTitleText,bodyText:t.modalBodyText},on:{closeParent:t.closeParent,close:t.close}})]],2)],1)}),[],!1,k,"11059bec",null,null);function k(t){for(var e in w)this[e]=w[e]}var E={},$=a({components:{HeadComponent:o,CustomerListComponentTwo:u,PaginationComponent:m,ReSearchModalComponent:_,OcrSearchConditionChangeComponent:function(){return S.exports}()},data:function(){return{isSearched:!1,DeleteFlag:!1,showWithdrawal:!0,radioButton:"",totalCustomers:[],backBtnTxt:"再撮影",isFullPage:!0,isLoading:!1,searched_id:"",isComponentModalActive:!1,isConditionChangeModalActive:!1,total:0,customers:[],ocrResponse:[],page:0,perPage:5,topFiveCustomers:[]}},mounted:function(){this.ocrResponse=this.$store.state.customer.ocrSearchResults,this.filterByDeleteFlag()},methods:{createChunk:function(){var t=this.totalCustomers,e=[],o=this.perPage;t.length>0&&(Array.from({length:Math.ceil(t.length/o)},(function(n,a){e.push(t.slice(a*o,a*o+o))})),this.total=e.length),this.customers=e},goNext:function(){this.page+=1},goPrev:function(){this.page-=1},searchAgain:function(){var t=this;return n(e().mark((function o(){return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$store.state.customer.openSearchQuery.search){e.next=4;break}return t.isLoading=!0,e.next=4,t.$store.dispatch("customer/getCustomersByOpenSearch").then((function(e){t.isLoading=!1,e.length>0?(t.ocrResponse=e,t.filterByDeleteFlag(),t.getTopFiveCustomers(),t.close()):(t.ocrResponse=e,t.filterByDeleteFlag(),t.close(),r("認識文字が見つかりませんでした。再度試すか検索文字を入力ください。","is-danger"))})).catch((function(e){t.close(),t.isLoading=!1,r("エラーが発生しました。再度試すか検索文字を入力ください。","is-danger")}));case 4:case"end":return e.stop()}}),o)})))()},filterByDeleteFlag:function(){if(this.page=0,this.DeleteFlag){var t=this.ocrResponse.filter((function(t){return 1===t.DeleteFlag||0===t.DeleteFlag}));this.totalCustomers=t,this.createChunk()}else{var e=this.ocrResponse.filter((function(t){return 0===t.DeleteFlag}));this.totalCustomers=e,this.createChunk()}},getTopFiveCustomers:function(){for(var t=[],e=0;e<5;e++)this.ocrResponse[e]&&t.push(this.ocrResponse[e]);this.$store.dispatch("customer/setTopFiveCustomers",t)},openModal:function(){this.isComponentModalActive=!0},close:function(){this.isComponentModalActive=!1,this.isConditionChangeModalActive=!1}}},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"ocr_search_result"}},[o("head-component",{attrs:{backBtnTxt:t.backBtnTxt,title:"選択してください",prevPage:"/capture-ocr-image"}}),o("div",{staticClass:"container-fluid"},[o("div",{staticClass:"input-field"},[o("b-field",[o("b-input",{attrs:{placeholder:"IDを入力して検索",icon:"magnify"},on:{focus:t.openModal},model:{value:t.$store.state.customer.openSearchQuery.search,callback:function(e){t.$set(t.$store.state.customer.openSearchQuery,"search",e)},expression:"$store.state.customer.openSearchQuery.search"}})],1)],1),o("div",{staticClass:"search"},[t.showWithdrawal?o("div",{staticClass:"swtich"},[o("span",{class:t.DeleteFlag?"color-text":"gray-text"},[t._v("退会者を含む")]),o("b-field",[o("b-switch",{attrs:{type:"is-danger"},on:{input:t.filterByDeleteFlag},model:{value:t.DeleteFlag,callback:function(e){t.DeleteFlag=e},expression:"DeleteFlag"}})],1)],1):t._e()])]),o("div",{staticClass:"customers container-fluid"},[t.totalCustomers.length>0?o("div",{staticClass:"customers-list"},t._l(t.customers[t.page],(function(t,e){return o("div",{key:e},[o("customer-list-component-two",{attrs:{customer:t}})],1)})),0):o("div",{staticClass:"not-found"},[o("p",{staticClass:"not-found-text"},[t._v(" [ "+t._s(t.$store.state.customer.openSearchQuery.search)+" ] "),o("br"),t._v(" は みつかりませんでした ")])])]),o("div",{staticClass:"container-fluid",attrs:{id:"pagination-div"}},[t.totalCustomers.length>0?o("pagination-component",{attrs:{page:t.page,total:t.total},on:{goNext:t.goNext,goPrev:t.goPrev}}):t._e()],1),o("div",{staticClass:"footer"},[o("div",{staticClass:"buttons"},[o("b-button",{staticClass:"btn-filter",attrs:{expanded:""},on:{click:function(e){t.isConditionChangeModalActive=!0}}},[o("img",{attrs:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAYAAACAl21KAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD2SURBVHgB7ZS7DcIwEIb/s5BooUFENGED2AAKHi0TMAKMAhvAFiCKhA0yghtEoEqDFApynAveAYUkouJrfLZPn6zTnWnfs0YMaiADiqELDIwBtpGBiKAVciI/UUQ8R1bEQWbdda0ZCEOkQGo8rS63Y7oc+D3LkU0LX0Bgt7L02ya+1qh4LA5E7yE5+nAMB5fNVVR2dRApNhc6iURq2667QXB73RPbftVWTI6E9ieJtfD1/SHFZe47tQYocphQekhmBCfFzWeJIbaPKquNJ936Wi9iL07yVpSGv+iHokKSJDNTJ8I6DMPJ1yKWr0Emey3h7F3v3HMGmYpX3uZAIY0AAAAASUVORK5CYII=",alt:"icon"}}),o("span",[t._v("検索条件の変更 - "+t._s(t.totalCustomers.length)+"件")])])],1)]),o("b-loading",{attrs:{"is-full-page":t.isFullPage,"can-cancel":!1},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}}),o("b-modal",{attrs:{"has-modal-card":"","full-screen":"","close-button-aria-label":"Close","can-cancel":!0,animation:"slide-fade-down"},model:{value:t.isComponentModalActive,callback:function(e){t.isComponentModalActive=e},expression:"isComponentModalActive"}},[o("re-search-modal-component",{on:{searchAgain:t.searchAgain,close:t.close}})],1),o("b-modal",{attrs:{"has-modal-card":"","full-screen":"","close-button-aria-label":"Close","can-cancel":!0,animation:"slide-fade-down"},model:{value:t.isConditionChangeModalActive,callback:function(e){t.isConditionChangeModalActive=e},expression:"isConditionChangeModalActive"}},[o("ocr-search-condition-change-component",{on:{searchAgain:t.searchAgain,close:t.close}})],1)],1)}),[],!1,M,"608153f8",null,null);function M(t){for(var e in E)this[e]=E[e]}t("default",function(){return $.exports}())}}}))}();
