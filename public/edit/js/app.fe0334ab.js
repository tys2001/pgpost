(function(t){function e(e){for(var n,o,c=e[0],s=e[1],l=e[2],d=0,f=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,c=1;c<r.length;c++){var s=r[c];0!==a[s]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},a={app:0},i=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},"0b20":function(t,e,r){"use strict";var n=r("1f15"),a=r.n(n);a.a},1258:function(t,e,r){},"1f15":function(t,e,r){},"1ff3":function(t,e,r){"use strict";var n=r("267a"),a=r.n(n);a.a},"267a":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("TabMenu")],1)},i=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.ready?r("b-tabs",{attrs:{pills:"",card:""}},[r("b-tab",{attrs:{title:"ページ",active:""}},[r("ArticleEdit")],1),r("b-tab",{attrs:{title:"カテゴリ"}},[r("CategoryEdit")],1),r("b-tab",{attrs:{title:"設定"}},[r("SettingEdit")],1),r("b-tab",{attrs:{title:"公開"}},[t._v("not implemented")])],1):r("div",{staticClass:"loading"},[r("b-spinner",{attrs:{variant:"primary"}})],1)],1)},c=[],s=(r("96cf"),r("1da1")),l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.draftItem?r("div",{staticClass:"edit-area"},[r("b-button",{attrs:{variant:"primary",block:""},on:{click:t.onClickExitEdit}},[t._v("戻る")]),r("b-input-group",{attrs:{prepend:"ページID"}},[r("b-input",{model:{value:t.draftItem.articleId,callback:function(e){t.$set(t.draftItem,"articleId",e)},expression:"draftItem.articleId"}})],1),r("b-input-group",{attrs:{prepend:"タイトル"}},[r("b-input",{model:{value:t.draftItem.title,callback:function(e){t.$set(t.draftItem,"title",e)},expression:"draftItem.title"}})],1),r("b-input-group",{attrs:{prepend:"カテゴリ"}},[r("b-form-select",{attrs:{options:t.store.setting.categories,"value-field":"categoryId","text-field":"categoryName"},model:{value:t.draftItem.categoryId,callback:function(e){t.$set(t.draftItem,"categoryId",e)},expression:"draftItem.categoryId"}})],1),r("b-input-group",{attrs:{prepend:"キャプション画像"}},[r("div",{staticClass:"thumbnail",style:{backgroundImage:"url("+t.draftItem.captionImage+")"}}),r("b-button",{attrs:{variant:"primary"},on:{click:function(e){return t.$refs.imageSelectModal.show()}}},[t._v("select")]),r("ImageSelectModal",{ref:"imageSelectModal",model:{value:t.draftItem.captionImage,callback:function(e){t.$set(t.draftItem,"captionImage",e)},expression:"draftItem.captionImage"}})],1),r("b-input-group",{attrs:{prepend:"概要"}},[r("b-input",{model:{value:t.draftItem.description,callback:function(e){t.$set(t.draftItem,"description",e)},expression:"draftItem.description"}})],1),r("b-button",{attrs:{variant:"primary",block:""},on:{click:t.onClickEditContent}},[t._v("本文を編集する")]),r("b-button",{attrs:{variant:"primary",block:""},on:{click:t.onClickPreView}},[t._v("プレビュー")]),r("MarkdownEditor",{ref:"markDownEditor",attrs:{articleId:t.draftItem.articleId}}),r("b-button",{attrs:{variant:"primary"},on:{click:t.onClickAdd}},[t._v("保存")]),r("b-button",{attrs:{variant:"danger"},on:{click:t.onClickDelete}},[t._v("削除")])],1):r("div",[r("b-table",{attrs:{items:t.store.articles,fields:t.fields,selectable:"","select-mode":"single","show-empty":"","empty-text":"ページがありません",hover:""},on:{"row-clicked":t.onClickRow}}),r("b-button",{attrs:{variant:"primary",block:""},on:{click:t.onClickAddArticle}},[t._v("新規作成")])],1)])},u=[],d=r("b85c"),f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-modal",{ref:"modal",attrs:{scrollable:"",size:"lg"},on:{ok:t.onClickOk}},[r("b-button",{attrs:{block:"",variant:"primary"},on:{click:function(e){return t.$refs.uploadFile.click()},dragenter:function(t){t.preventDefault()},dragover:function(t){t.preventDefault()},dragleave:function(t){t.preventDefault()},drop:function(e){return e.preventDefault(),t.onDropFile(e)}}},[t._v("アップロード")]),r("input",{ref:"uploadFile",attrs:{type:"file",multiple:""},on:{change:t.onUploadFileChange}}),r("div",{staticClass:"thumbnails-box",on:{drop:function(e){return e.preventDefault(),e.stopPropagation(),t.onDropFile(e)},dragenter:t.onDropFile}},t._l(t.store.media,(function(e){return r("div",{key:e.fileName,staticClass:"thumbnail-outline",attrs:{selected:t.selectedMedia===e},on:{click:function(r){return t.onClickMedia(e)}}},[r("div",{staticClass:"thumbnail",style:{backgroundImage:"url("+e.mediaUrl+")"}},[r("div",{staticClass:"square"})])])})),0)],1)},m=[],p={props:{value:String},data:function(){return{store:this.$store,selectedMedia:null}},methods:{show:function(){this.selectedMedia=null;var t,e=Object(d["a"])(this.store.media);try{for(e.s();!(t=e.n()).done;){var r=t.value;r.storageUrl===this.value&&(this.selectedMedia=r)}}catch(n){e.e(n)}finally{e.f()}this.$refs.modal.show()},onClickMedia:function(t){this.selectedMedia===t?this.selectedMedia=null:this.selectedMedia=t},onClickOk:function(){this.selectedMedia?this.$emit("input",this.selectedMedia.mediaUrl):this.$emit("input","")},onUploadFileChange:function(){var t,e=Object(d["a"])(this.$refs.uploadFile.files);try{for(e.s();!(t=e.n()).done;){var r=t.value;this.store.addMedia(r)}}catch(n){e.e(n)}finally{e.f()}},onDropFile:function(){var t,e=event.target.files?event.target.files:event.dataTransfer.files,r=Object(d["a"])(e);try{for(r.s();!(t=r.n()).done;){var n=t.value;this.store.addMedia(n)}}catch(a){r.e(a)}finally{r.f()}}}},g=p,b=(r("b41c"),r("2877")),h=Object(b["a"])(g,f,m,!1,null,"2dbed0f4",null),v=h.exports,I=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"show",rawName:"v-show",value:t.shown,expression:"shown"}],staticClass:"mde-container",attrs:{fullscreen:""},on:{keydown:t.onKeyDown}},[r("div",{staticClass:"toolbar"},[r("div",{staticClass:"tool-icon",on:{click:t.onClickSave}},[r("b-icon",{attrs:{icon:"upload"}})],1),r("div",{staticClass:"tool-icon",on:{click:t.exit}},[r("b-icon",{attrs:{icon:"door-closed"}})],1),r("div",{staticClass:"tool-icon",on:{click:function(e){return t.$refs.imageSelectModal.show()}}},[r("b-icon",{attrs:{icon:"image"}})],1),r("div",{staticClass:"message"},[t._v(t._s(t.message))])]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.markdown,expression:"markdown"}],ref:"markdownInput",staticClass:"writer",domProps:{value:t.markdown},on:{scroll:t.onScroll,mousemove:function(e){t.scrollTarget=null},touchmove:function(e){t.scrollTarget=null},input:function(e){e.target.composing||(t.markdown=e.target.value)}}}),t._v(" "),r("div",{ref:"htmlPreview",staticClass:"viewer content-body",domProps:{innerHTML:t._s(t.html)},on:{scroll:t.onScroll,mousemove:function(e){t.scrollTarget=null},touchmove:function(e){t.scrollTarget=null}}}),r("ImageSelectModal",{ref:"imageSelectModal",on:{input:t.onSelectImage}})],1)},k=[],w=r("0e54"),y=r.n(w),x=r("1487"),C=r.n(x),S={components:{ImageSelectModal:v},props:{articleId:String},data:function(){return{store:this.$store,shown:!1,markdown:"",message:"",insertImageUrl:"",scrollTarget:null,abortScroll:!1}},created:function(){y.a.setOptions({langPrefix:"hljs language-",highlight:function(t,e){return C.a.highlightAuto(t,[e]).value}})},methods:{open:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.shown=!0,e.next=3,t.store.getContent(t.articleId);case 3:r=e.sent,t.markdown=r.markdown;case 5:case"end":return e.stop()}}),e)})))()},exit:function(){this.shown=!1},onClickSave:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.store.saveContent(t.articleId,{markdown:t.markdown,html:t.html});case 2:t.message="Saved at ".concat((new Date).toLocaleString());case 3:case"end":return e.stop()}}),e)})))()},onSelectImage:function(t){var e=this.markdown.length,r=this.$refs.markdownInput.selectionStart,n=this.markdown.substr(0,r),a="![](".concat(t,")"),i=this.markdown.substr(r,e);this.markdown=n+a+i},onScroll:function(){var t=event.target;if(t===this.$refs.markdownInput){if(this.scrollTarget===this.$refs.markdownInput)return;this.scrollTarget=this.$refs.htmlPreview}else{if(this.scrollTarget===this.$refs.htmlPreview)return;this.scrollTarget=this.$refs.markdownInput}var e=t.scrollTop/(t.scrollHeight-t.clientHeight);this.scrollTarget.scrollTo(0,e*(this.scrollTarget.scrollHeight-this.scrollTarget.clientHeight))},onKeyDown:function(){event.ctrlKey&&"s"===event.key&&(event.preventDefault(),this.onClickSave())}},computed:{html:function(){return y()(this.markdown)}},watch:{}},O=S,M=(r("78dc"),Object(b["a"])(O,I,k,!1,null,"0338fbba",null)),_=M.exports,R={components:{ImageSelectModal:v,MarkdownEditor:_},data:function(){var t=this;return{store:this.$store,fields:[{key:"articleId",label:"ID",sortable:!0},{key:"title",label:"タイトル",sortable:!0},{key:"categoryId",label:"カテゴリ",sortable:!0,formatter:function(e){return t.categoryDict[e]?t.categoryDict[e].categoryName:""}}],draftItem:null}},mounted:function(){},methods:{onClickAddArticle:function(){this.draftItem={articleId:"",title:"",categoryId:"",captionImage:"",description:""}},onClickRow:function(t){this.draftItem=JSON.parse(JSON.stringify(t))},onClickExitEdit:function(){this.draftItem=null},onClickEditContent:function(){this.$refs.markDownEditor.open()},onClickPreView:function(){window.open("/".concat(this.draftItem.articleId),"preview")},onClickAdd:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.store.addArticle(t.draftItem);case 2:t.draftItem=null;case 3:case"end":return e.stop()}}),e)})))()},onClickDelete:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(confirm("このページを削除しますか？")){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.store.deleteArticle(t.draftItem);case 4:t.draftItem=null;case 5:case"end":return e.stop()}}),e)})))()}},computed:{categoryDict:function(){var t,e={},r=Object(d["a"])(this.store.setting.categories);try{for(r.s();!(t=r.n()).done;){var n=t.value;e[n.categoryId]=n}}catch(a){r.e(a)}finally{r.f()}return e}}},$=R,j=(r("d13f"),Object(b["a"])($,l,u,!1,null,"f35e848c",null)),D=j.exports,E=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"edit-area"},[r("b-table",{attrs:{items:t.draftItem.categories,fields:t.fields,selectable:"","select-mode":"single","show-empty":"","empty-text":"カテゴリがありません",hover:""},on:{"row-clicked":t.onClickRow},scopedSlots:t._u([{key:"cell(buttons)",fn:function(e){return[r("b-button-group",{attrs:{size:"sm"}},[r("b-button",{on:{click:function(r){return t.onClickDeleteCategory(e.item)}}},[r("b-icon",{attrs:{icon:"trash-fill"}})],1),r("b-button",{on:{click:function(r){return t.onClickSwapUpCategory(e.item)}}},[r("b-icon",{attrs:{icon:"caret-up-square-fill"}})],1),r("b-button",{on:{click:function(r){return t.onClickSwapDownCategory(e.item)}}},[r("b-icon",{attrs:{icon:"caret-down-square-fill"}})],1)],1)]}}])}),r("b-button",{attrs:{variant:"primary",block:""},on:{click:t.onClickAddCategory}},[t._v("新規作成")]),r("b-input-group",{attrs:{prepend:"カテゴリID"}},[r("b-input",{model:{value:t.editItem.categoryId,callback:function(e){t.$set(t.editItem,"categoryId",e)},expression:"editItem.categoryId"}})],1),r("b-input-group",{attrs:{prepend:"カテゴリ名"}},[r("b-input",{model:{value:t.editItem.categoryName,callback:function(e){t.$set(t.editItem,"categoryName",e)},expression:"editItem.categoryName"}})],1),r("b-input-group",{attrs:{prepend:"関連記事"}},[r("b-form-select",{model:{value:t.editItem.relation,callback:function(e){t.$set(t.editItem,"relation",e)},expression:"editItem.relation"}},[r("option",{attrs:{value:"none"}},[t._v("関連付けなし")]),r("option",{attrs:{value:"same_categories"}},[t._v("同じカテゴリへのリンクを表示")]),r("option",{attrs:{value:"all_categories"}},[t._v("全カテゴリへのリンクを表示")])])],1),r("b-button",{attrs:{variant:"primary",block:""},on:{click:t.onClickSave}},[t._v("保存")])],1)])},A=[],T=(r("4de4"),r("c975"),r("a434"),{data:function(){return{store:this.$store,fields:[{key:"categoryId",label:"カテゴリID"},{key:"categoryName",label:"カテゴリ名"},{key:"buttons",label:""}],draftItem:{},editItem:{}}},mounted:function(){this.draftItem=JSON.parse(JSON.stringify(this.store.setting))},methods:{onClickRow:function(t){this.editItem=t},onClickAddCategory:function(){this.draftItem.categories.push({categoryId:"",categoryName:"",relation:"none"})},onClickDeleteCategory:function(t){this.draftItem.categories=this.draftItem.categories.filter((function(e){return e!==t}))},onClickSwapUpCategory:function(t){var e=this.draftItem.categories.indexOf(t);0!==e&&this.draftItem.categories.splice(e-1,2,this.draftItem.categories[e],this.draftItem.categories[e-1])},onClickSwapDownCategory:function(t){var e=this.draftItem.categories.indexOf(t);e!==this.draftItem.categories.length-1&&this.draftItem.categories.splice(e,2,this.draftItem.categories[e+1],this.draftItem.categories[e])},onClickSave:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.store.saveSetting(t.draftItem);case 1:case"end":return e.stop()}}),e)})))()}}}),N=T,U=(r("c98f"),Object(b["a"])(N,E,A,!1,null,"2cd9edee",null)),P=U.exports,F=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-list"},[r("b-input-group",{attrs:{prepend:"サイト名"}},[r("b-input",{model:{value:t.draftItem.siteName,callback:function(e){t.$set(t.draftItem,"siteName",e)},expression:"draftItem.siteName"}})],1),r("b-input-group",{attrs:{prepend:"公開先URL"}},[r("b-input",{model:{value:t.draftItem.publishUrl,callback:function(e){t.$set(t.draftItem,"publishUrl",e)},expression:"draftItem.publishUrl"}})],1),r("b-input-group",{attrs:{prepend:"トップ画像"}},[r("div",{staticClass:"thumbnail",style:{backgroundImage:"url("+t.draftItem.topImage+")"}}),r("b-button",{attrs:{variant:"primary"},on:{click:function(e){return t.$refs.imageSelectModal.show()}}},[t._v("select")]),r("ImageSelectModal",{ref:"imageSelectModal",model:{value:t.draftItem.topImage,callback:function(e){t.$set(t.draftItem,"topImage",e)},expression:"draftItem.topImage"}})],1),r("div",[r("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.editMenu",modifiers:{editMenu:!0}}],attrs:{block:"",variant:"primary"}},[t._v("メニュー編集")]),r("b-collapse",{attrs:{id:"editMenu"}},[r("b-card",[r("b-table",{attrs:{items:t.draftItem.menuItems,fields:t.menuItemFields,"show-empty":"","empty-text":"メニューがありません"},scopedSlots:t._u([{key:"cell(label)",fn:function(e){return[r("b-input",{model:{value:e.item.label,callback:function(r){t.$set(e.item,"label",r)},expression:"data.item.label"}})]}},{key:"cell(href)",fn:function(e){return[r("b-input",{model:{value:e.item.href,callback:function(r){t.$set(e.item,"href",r)},expression:"data.item.href"}})]}},{key:"cell(buttons)",fn:function(e){return[r("b-button-group",{attrs:{size:"sm"}},[r("b-button",{on:{click:function(r){return t.onClickDeleteMenuItem(e.item)}}},[r("b-icon",{attrs:{icon:"trash-fill"}})],1),r("b-button",{on:{click:function(r){return t.onClickSwapUpMenuItem(e.item)}}},[r("b-icon",{attrs:{icon:"caret-up-square-fill"}})],1),r("b-button",{on:{click:function(r){return t.onClickSwapDownMenuItem(e.item)}}},[r("b-icon",{attrs:{icon:"caret-down-square-fill"}})],1)],1)]}}])}),r("b-button",{attrs:{variant:"primary",block:""},on:{click:function(e){return t.draftItem.menuItems.push({})}}},[t._v("追加")])],1)],1)],1),r("b-button",{attrs:{variant:"primary",block:""},on:{click:t.onClickSave}},[t._v("保存")])],1)},L=[],J={components:{ImageSelectModal:v},data:function(){return{store:this.$store,draftItem:{siteName:"",topImage:"",publishUrl:"",categories:[],menuItems:[]},menuItemFields:[{key:"label",label:"ラベル"},{key:"href",label:"リンク先"},{key:"buttons",label:""}]}},mounted:function(){this.draftItem=JSON.parse(JSON.stringify(this.store.setting))},methods:{onClickSave:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.store.saveSetting(t.draftItem);case 1:case"end":return e.stop()}}),e)})))()},onClickDeleteCategory:function(t){this.draftItem.categories=this.draftItem.categories.filter((function(e){return e!==t}))},onClickSwapUpCategory:function(t){var e=this.draftItem.categories.indexOf(t);0!==e&&this.draftItem.categories.splice(e-1,2,this.draftItem.categories[e],this.draftItem.categories[e-1])},onClickSwapDownCategory:function(t){var e=this.draftItem.categories.indexOf(t);e!==this.draftItem.categories.length-1&&this.draftItem.categories.splice(e,2,this.draftItem.categories[e+1],this.draftItem.categories[e])},onClickDeleteMenuItem:function(t){this.draftItem.menuItems=this.draftItem.menuItems.filter((function(e){return e!==t}))},onClickSwapUpMenuItem:function(t){var e=this.draftItem.menuItems.indexOf(t);0!==e&&this.draftItem.menuItems.splice(e-1,2,this.draftItem.menuItems[e],this.draftItem.menuItems[e-1])},onClickSwapDownMenuItem:function(t){var e=this.draftItem.menuItems.indexOf(t);e!==this.draftItem.menuItems.length-1&&this.draftItem.menuItems.splice(e,2,this.draftItem.menuItems[e+1],this.draftItem.menuItems[e])}}},q=J,z=(r("1ff3"),Object(b["a"])(q,F,L,!1,null,"c44b614e",null)),H=z.exports,K={components:{ArticleEdit:D,CategoryEdit:P,SettingEdit:H},data:function(){return{store:this.$store,ready:!1}},mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.store.loadAll();case 2:t.ready=!0;case 3:case"end":return e.stop()}}),e)})))()}},G=K,W=(r("0b20"),Object(b["a"])(G,o,c,!1,null,"407160e1",null)),B=W.exports,V={components:{TabMenu:B}},Y=V,Q=(r("034f"),Object(b["a"])(Y,a,i,!1,null,null,null)),Z=Q.exports,X=r("5f5b"),tt=r("b1e0"),et=(r("f9e3"),r("2dd8"),{}),rt=(r("4160"),r("b0c0"),r("d3b7"),r("3ca3"),r("159b"),r("ddb0"),r("8aa5")),nt=r.n(rt),at={create:function(){nt.a.initializeApp({apiKey:"AIzaSyB_m5uvIdIKbvW1ZWEphFQ_M22ERLLtLG0",authDomain:"tysfb-ac05c.firebaseapp.com",databaseURL:"https://tysfb-ac05c.firebaseio.com",projectId:"tysfb-ac05c",storageBucket:"tysfb-ac05c.appspot.com",messagingSenderId:"746165169108",appId:"1:746165169108:web:26381f1f5d41b674bb8441",measurementId:"G-G1YYLRWCGS"});var t=nt.a.firestore(),e=nt.a.storage().ref();return{articles:[],media:[],setting:{},loadAll:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.loadArticles(),t.loadSetting(),t.loadMedia()]);case 2:case"end":return e.stop()}}),e)})))()},loadArticles:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.collection("articles").get();case 2:n=r.sent,e.articles=[],n.forEach((function(t){var r=t.data();e.articles.push(r)}));case 5:case"end":return r.stop()}}),r)})))()},addArticle:function(e){var r=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.updatedAt=nt.a.firestore.Timestamp.now(),n.next=3,t.collection("articles").doc(e.articleId).set(e);case 3:r.loadArticles();case 4:case"end":return n.stop()}}),n)})))()},deleteArticle:function(e){var r=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.collection("articles").doc(e.articleId).delete();case 2:r.loadArticles();case 3:case"end":return n.stop()}}),n)})))()},loadSetting:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.collection("settings").doc("setting").get();case 2:n=r.sent,e.setting=n.data();case 4:case"end":return r.stop()}}),r)})))()},saveSetting:function(e){var r=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.collection("settings").doc("setting").set(e);case 2:r.loadSetting();case 3:case"end":return n.stop()}}),n)})))()},loadMedia:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.collection("media").get();case 2:n=r.sent,e.media=[],n.forEach((function(t){var r=t.data();e.media.push(r)}));case 5:case"end":return r.stop()}}),r)})))()},addMedia:function(r){var n=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var i,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return i=e.child(r.name),a.next=3,i.put(r);case 3:return a.next=5,i.getDownloadURL();case 5:return o=a.sent,a.next=8,t.collection("media").doc(r.name).set({fileName:r.name,mediaUrl:"/media/".concat(r.name),storageUrl:o,updatedAt:nt.a.firestore.Timestamp.now()});case 8:n.loadMedia();case 9:case"end":return a.stop()}}),a)})))()},deleteMedia:function(r){var n=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return i=e.child(r),a.next=3,i.delete();case 3:return a.next=5,t.collection("media").doc(r).delete();case 5:n.loadMedia();case 6:case"end":return a.stop()}}),a)})))()},getContent:function(e){return Object(s["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.collection("article-content").doc(e).get();case 2:if(n=r.sent,!n.exists){r.next=7;break}return r.abrupt("return",n.data());case 7:return r.abrupt("return",{markdown:""});case 8:case"end":return r.stop()}}),r)})))()},saveContent:function(e,r){return Object(s["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.collection("article-content").doc(e).set(r);case 2:case"end":return n.stop()}}),n)})))()}}}};n["default"].use(X["a"]),n["default"].use(tt["a"]),n["default"].prototype.$utils=et,n["default"].prototype.$store=at.create(),n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(Z)}}).$mount("#app")},"63a2":function(t,e,r){},"78dc":function(t,e,r){"use strict";var n=r("eda4"),a=r.n(n);a.a},"85ec":function(t,e,r){},b41c:function(t,e,r){"use strict";var n=r("1258"),a=r.n(n);a.a},be5a:function(t,e,r){},c98f:function(t,e,r){"use strict";var n=r("63a2"),a=r.n(n);a.a},d13f:function(t,e,r){"use strict";var n=r("be5a"),a=r.n(n);a.a},eda4:function(t,e,r){}});