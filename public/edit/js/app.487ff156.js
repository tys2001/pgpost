(function(e){function t(t){for(var r,o,c=t[0],s=t[1],l=t[2],d=0,f=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"331d":function(e,t,n){},"401e":function(e,t,n){"use strict";var r=n("dd21"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("TabMenu")],1)},i=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.ready?n("b-tabs",{attrs:{pills:"",card:""}},[n("b-tab",{attrs:{title:"ページ",active:""}},[n("ArticleEdit")],1),n("b-tab",{attrs:{title:"設定"}},[n("SettingEdit")],1),n("b-tab",{attrs:{title:"公開"}},[e._v("not implemented")])],1):n("div",{staticClass:"loading"},[n("b-spinner",{attrs:{variant:"primary"}})],1)],1)},c=[],s=(n("96cf"),n("1da1")),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.draftItem?n("div",{staticClass:"edit-area"},[n("b-button",{attrs:{variant:"primary",block:""},on:{click:e.onClickExitEdit}},[e._v("戻る")]),n("b-input-group",{attrs:{prepend:"ページID"}},[n("b-input",{model:{value:e.draftItem.articleId,callback:function(t){e.$set(e.draftItem,"articleId",t)},expression:"draftItem.articleId"}})],1),n("b-input-group",{attrs:{prepend:"タイトル"}},[n("b-input",{model:{value:e.draftItem.title,callback:function(t){e.$set(e.draftItem,"title",t)},expression:"draftItem.title"}})],1),n("b-input-group",{attrs:{prepend:"カテゴリ"}},[n("b-form-select",{attrs:{options:e.store.setting.categories,"value-field":"categoryId","text-field":"categoryName"},model:{value:e.draftItem.categoryId,callback:function(t){e.$set(e.draftItem,"categoryId",t)},expression:"draftItem.categoryId"}})],1),n("b-input-group",{attrs:{prepend:"キャプション画像"}},[n("div",{staticClass:"thumbnail",style:{backgroundImage:"url("+e.draftItem.captionImage+")"}}),n("b-button",{attrs:{variant:"primary"},on:{click:function(t){return e.$refs.imageSelectModal.show()}}},[e._v("select")]),n("ImageSelectModal",{ref:"imageSelectModal",model:{value:e.draftItem.captionImage,callback:function(t){e.$set(e.draftItem,"captionImage",t)},expression:"draftItem.captionImage"}})],1),n("b-button",{attrs:{variant:"primary",block:""},on:{click:e.onClickEditContent}},[e._v("本文を編集する")]),n("b-button",{attrs:{variant:"primary",block:""},on:{click:e.onClickPreView}},[e._v("プレビュー")]),n("MarkdownEditor",{ref:"markDownEditor",attrs:{articleId:e.draftItem.articleId}}),n("b-button",{attrs:{variant:"primary"},on:{click:e.onClickAdd}},[e._v("保存")]),n("b-button",{attrs:{variant:"danger"},on:{click:e.onClickDelete}},[e._v("削除")])],1):n("div",[n("b-table",{attrs:{items:e.store.articles,fields:e.fields,caption:"ページ一覧","caption-top":"",selectable:"","select-mode":"single","show-empty":"","empty-text":"ページがありません",hover:""},on:{"row-clicked":e.onClickRow}}),n("b-button",{attrs:{variant:"primary",block:""},on:{click:e.onClickAddArticle}},[e._v("新規作成")])],1)])},u=[],d=n("b85c"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-modal",{ref:"modal",attrs:{scrollable:"",size:"lg"},on:{ok:e.onClickOk}},[n("b-button",{attrs:{block:"",variant:"primary"},on:{click:function(t){return e.$refs.uploadFile.click()},dragenter:function(e){e.preventDefault()},dragover:function(e){e.preventDefault()},dragleave:function(e){e.preventDefault()},drop:function(t){return t.preventDefault(),e.onDropFile(t)}}},[e._v("アップロード")]),n("input",{ref:"uploadFile",attrs:{type:"file",multiple:""},on:{change:e.onUploadFileChange}}),n("div",{staticClass:"thumbnails-box",on:{drop:function(t){return t.preventDefault(),t.stopPropagation(),e.onDropFile(t)},dragenter:e.onDropFile}},e._l(e.store.media,(function(t){return n("div",{key:t.fileName,staticClass:"thumbnail-outline",attrs:{selected:e.selectedMedia===t},on:{click:function(n){return e.onClickMedia(t)}}},[n("div",{staticClass:"thumbnail",style:{backgroundImage:"url("+t.storageUrl+")"}},[n("div",{staticClass:"square"})])])})),0)],1)},m=[],p={props:{value:String},data:function(){return{store:this.$store,selectedMedia:null}},methods:{show:function(){this.selectedMedia=null;var e,t=Object(d["a"])(this.store.media);try{for(t.s();!(e=t.n()).done;){var n=e.value;n.storageUrl===this.value&&(this.selectedMedia=n)}}catch(r){t.e(r)}finally{t.f()}this.$refs.modal.show()},onClickMedia:function(e){this.selectedMedia===e?this.selectedMedia=null:this.selectedMedia=e},onClickOk:function(){this.selectedMedia?this.$emit("input",this.selectedMedia.storageUrl):this.$emit("input","")},onUploadFileChange:function(){var e,t=Object(d["a"])(this.$refs.uploadFile.files);try{for(t.s();!(e=t.n()).done;){var n=e.value;this.store.addMedia(n)}}catch(r){t.e(r)}finally{t.f()}},onDropFile:function(){var e,t=event.target.files?event.target.files:event.dataTransfer.files,n=Object(d["a"])(t);try{for(n.s();!(e=n.n()).done;){var r=e.value;this.store.addMedia(r)}}catch(a){n.e(a)}finally{n.f()}}}},g=p,b=(n("7a5a"),n("2877")),h=Object(b["a"])(g,f,m,!1,null,"5e2ee242",null),v=h.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.shown,expression:"shown"}],staticClass:"mde-container",attrs:{fullscreen:""},on:{keydown:e.onKeyDown}},[n("div",{staticClass:"toolbar"},[n("div",{staticClass:"tool-icon",on:{click:e.onClickSave}},[n("b-icon",{attrs:{icon:"upload"}})],1),n("div",{staticClass:"tool-icon",on:{click:e.exit}},[n("b-icon",{attrs:{icon:"door-closed"}})],1),n("div",{staticClass:"tool-icon",on:{click:function(t){return e.$refs.imageSelectModal.show()}}},[n("b-icon",{attrs:{icon:"image"}})],1),n("div",{staticClass:"message"},[e._v(e._s(e.message))])]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.markdown,expression:"markdown"}],ref:"markdownInput",staticClass:"writer",domProps:{value:e.markdown},on:{scroll:e.onScroll,mousemove:function(t){e.scrollTarget=null},touchmove:function(t){e.scrollTarget=null},input:function(t){t.target.composing||(e.markdown=t.target.value)}}}),e._v(" "),n("div",{ref:"htmlPreview",staticClass:"viewer content-body",domProps:{innerHTML:e._s(e.html)},on:{scroll:e.onScroll,mousemove:function(t){e.scrollTarget=null},touchmove:function(t){e.scrollTarget=null}}}),n("ImageSelectModal",{ref:"imageSelectModal",on:{input:e.onSelectImage}})],1)},I=[],w=n("0e54"),y=n.n(w),x=n("1487"),C=n.n(x),S={components:{ImageSelectModal:v},props:{articleId:String},data:function(){return{store:this.$store,shown:!1,markdown:"",message:"",insertImageUrl:"",scrollTarget:null,abortScroll:!1}},created:function(){y.a.setOptions({langPrefix:"hljs language-",highlight:function(e,t){return C.a.highlightAuto(e,[t]).value}})},methods:{open:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.shown=!0,t.next=3,e.store.getContent(e.articleId);case 3:n=t.sent,e.markdown=n.markdown;case 5:case"end":return t.stop()}}),t)})))()},exit:function(){this.shown=!1},onClickSave:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.store.saveContent(e.articleId,{markdown:e.markdown,html:e.html});case 2:e.message="Saved at ".concat((new Date).toLocaleString());case 3:case"end":return t.stop()}}),t)})))()},onSelectImage:function(e){var t=this.markdown.length,n=this.$refs.markdownInput.selectionStart,r=this.markdown.substr(0,n),a="![](".concat(e,")"),i=this.markdown.substr(n,t);this.markdown=r+a+i},onScroll:function(){var e=event.target;if(e===this.$refs.markdownInput){if(this.scrollTarget===this.$refs.markdownInput)return;this.scrollTarget=this.$refs.htmlPreview}else{if(this.scrollTarget===this.$refs.htmlPreview)return;this.scrollTarget=this.$refs.markdownInput}var t=e.scrollTop/(e.scrollHeight-e.clientHeight);this.scrollTarget.scrollTo(0,t*(this.scrollTarget.scrollHeight-this.scrollTarget.clientHeight))},onKeyDown:function(){event.ctrlKey&&"s"===event.key&&(event.preventDefault(),this.onClickSave())}},computed:{html:function(){return y()(this.markdown)}},watch:{}},M=S,O=(n("78dc"),Object(b["a"])(M,k,I,!1,null,"0338fbba",null)),_=O.exports,R={components:{ImageSelectModal:v,MarkdownEditor:_},data:function(){var e=this;return{store:this.$store,fields:[{key:"articleId",label:"ID",sortable:!0},{key:"title",label:"タイトル",sortable:!0},{key:"categoryId",label:"カテゴリ",sortable:!0,formatter:function(t){return e.categoryDict[t]?e.categoryDict[t].categoryName:""}}],draftItem:null}},mounted:function(){},methods:{onClickAddArticle:function(){this.draftItem={articleId:"",title:"",categoryId:"",captionImage:""}},onClickRow:function(e){this.draftItem=JSON.parse(JSON.stringify(e))},onClickExitEdit:function(){this.draftItem=null},onClickEditContent:function(){this.$refs.markDownEditor.open()},onClickPreView:function(){window.open("/".concat(this.draftItem.articleId),"preview")},onClickAdd:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.store.addArticle(e.draftItem);case 2:e.draftItem=null;case 3:case"end":return t.stop()}}),t)})))()},onClickDelete:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(confirm("このページを削除しますか？")){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.store.deleteArticle(e.draftItem);case 4:e.draftItem=null;case 5:case"end":return t.stop()}}),t)})))()}},computed:{categoryDict:function(){var e,t={},n=Object(d["a"])(this.store.setting.categories);try{for(n.s();!(e=n.n()).done;){var r=e.value;t[r.categoryId]=r}}catch(a){n.e(a)}finally{n.f()}return t}}},$=R,j=(n("d5f5"),Object(b["a"])($,l,u,!1,null,"7ec92538",null)),D=j.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form-list"},[n("b-input-group",{attrs:{prepend:"サイト名"}},[n("b-input",{model:{value:e.draftItem.siteName,callback:function(t){e.$set(e.draftItem,"siteName",t)},expression:"draftItem.siteName"}})],1),n("b-input-group",{attrs:{prepend:"トップ画像"}},[n("div",{staticClass:"thumbnail",style:{backgroundImage:"url("+e.draftItem.topImage+")"}}),n("b-button",{attrs:{variant:"primary"},on:{click:function(t){return e.$refs.imageSelectModal.show()}}},[e._v("select")]),n("ImageSelectModal",{ref:"imageSelectModal",model:{value:e.draftItem.topImage,callback:function(t){e.$set(e.draftItem,"topImage",t)},expression:"draftItem.topImage"}})],1),n("div",[n("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.editCategory",modifiers:{editCategory:!0}}],attrs:{block:"",variant:"primary"}},[e._v("カテゴリ編集")]),n("b-collapse",{attrs:{id:"editCategory"}},[n("b-card",[n("b-table",{attrs:{items:e.draftItem.categories,fields:e.categoryFields,"show-empty":"","empty-text":"カテゴリがありません"},scopedSlots:e._u([{key:"cell(categoryId)",fn:function(t){return[n("b-input",{model:{value:t.item.categoryId,callback:function(n){e.$set(t.item,"categoryId",n)},expression:"data.item.categoryId"}})]}},{key:"cell(categoryName)",fn:function(t){return[n("b-input",{model:{value:t.item.categoryName,callback:function(n){e.$set(t.item,"categoryName",n)},expression:"data.item.categoryName"}})]}},{key:"cell(buttons)",fn:function(t){return[n("b-button-group",{attrs:{size:"sm"}},[n("b-button",{on:{click:function(n){return e.onClickDeleteCategory(t.item)}}},[n("b-icon",{attrs:{icon:"trash-fill"}})],1),n("b-button",{on:{click:function(n){return e.onClickSwapUpCategory(t.item)}}},[n("b-icon",{attrs:{icon:"caret-up-square-fill"}})],1),n("b-button",{on:{click:function(n){return e.onClickSwapDownCategory(t.item)}}},[n("b-icon",{attrs:{icon:"caret-down-square-fill"}})],1)],1)]}}])}),n("b-button",{attrs:{variant:"primary",block:""},on:{click:function(t){return e.draftItem.categories.push({})}}},[e._v("追加")])],1)],1)],1),n("div",[n("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.editMenu",modifiers:{editMenu:!0}}],attrs:{block:"",variant:"primary"}},[e._v("メニュー編集")]),n("b-collapse",{attrs:{id:"editMenu"}},[n("b-card",[n("b-table",{attrs:{items:e.draftItem.menuItems,fields:e.menuItemFields,"show-empty":"","empty-text":"メニューがありません"},scopedSlots:e._u([{key:"cell(label)",fn:function(t){return[n("b-input",{model:{value:t.item.label,callback:function(n){e.$set(t.item,"label",n)},expression:"data.item.label"}})]}},{key:"cell(href)",fn:function(t){return[n("b-input",{model:{value:t.item.href,callback:function(n){e.$set(t.item,"href",n)},expression:"data.item.href"}})]}},{key:"cell(buttons)",fn:function(t){return[n("b-button-group",{attrs:{size:"sm"}},[n("b-button",{on:{click:function(n){return e.onClickDeleteMenuItem(t.item)}}},[n("b-icon",{attrs:{icon:"trash-fill"}})],1),n("b-button",{on:{click:function(n){return e.onClickSwapUpMenuItem(t.item)}}},[n("b-icon",{attrs:{icon:"caret-up-square-fill"}})],1),n("b-button",{on:{click:function(n){return e.onClickSwapDownMenuItem(t.item)}}},[n("b-icon",{attrs:{icon:"caret-down-square-fill"}})],1)],1)]}}])}),n("b-button",{attrs:{variant:"primary",block:""},on:{click:function(t){return e.draftItem.menuItems.push({})}}},[e._v("追加")])],1)],1)],1),n("b-button",{attrs:{variant:"primary"},on:{click:e.onClickSave}},[e._v("保存")])],1)},A=[],N=(n("4de4"),n("c975"),n("a434"),{components:{ImageSelectModal:v},data:function(){return{store:this.$store,draftItem:{siteName:"",topImage:"",categories:[],menuItems:[]},categoryFields:[{key:"categoryId",label:"カテゴリID"},{key:"categoryName",label:"カテゴリ名"},{key:"buttons",label:""}],menuItemFields:[{key:"label",label:"ラベル"},{key:"href",label:"リンク先"},{key:"buttons",label:""}]}},mounted:function(){this.draftItem=JSON.parse(JSON.stringify(this.store.setting))},methods:{onClickSave:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.store.saveSetting(e.draftItem);case 1:case"end":return t.stop()}}),t)})))()},onClickDeleteCategory:function(e){this.draftItem.categories=this.draftItem.categories.filter((function(t){return t!==e}))},onClickSwapUpCategory:function(e){var t=this.draftItem.categories.indexOf(e);0!==t&&this.draftItem.categories.splice(t-1,2,this.draftItem.categories[t],this.draftItem.categories[t-1])},onClickSwapDownCategory:function(e){var t=this.draftItem.categories.indexOf(e);t!==this.draftItem.categories.length-1&&this.draftItem.categories.splice(t,2,this.draftItem.categories[t+1],this.draftItem.categories[t])},onClickDeleteMenuItem:function(e){this.draftItem.menuItems=this.draftItem.menuItems.filter((function(t){return t!==e}))},onClickSwapUpMenuItem:function(e){var t=this.draftItem.menuItems.indexOf(e);0!==t&&this.draftItem.menuItems.splice(t-1,2,this.draftItem.menuItems[t],this.draftItem.menuItems[t-1])},onClickSwapDownMenuItem:function(e){var t=this.draftItem.menuItems.indexOf(e);t!==this.draftItem.menuItems.length-1&&this.draftItem.menuItems.splice(t,2,this.draftItem.menuItems[t+1],this.draftItem.menuItems[t])}}}),T=N,P=(n("401e"),Object(b["a"])(T,E,A,!1,null,"4a508760",null)),F=P.exports,U={components:{ArticleEdit:D,SettingEdit:F},data:function(){return{store:this.$store,ready:!1}},mounted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.store.loadAll();case 2:e.ready=!0;case 3:case"end":return t.stop()}}),t)})))()}},L=U,J=(n("f6fc"),Object(b["a"])(L,o,c,!1,null,"82e5ae12",null)),q=J.exports,z={components:{TabMenu:q}},H=z,K=(n("034f"),Object(b["a"])(H,a,i,!1,null,null,null)),G=K.exports,W=n("5f5b"),B=n("b1e0"),V=(n("f9e3"),n("2dd8"),{}),Y=(n("4160"),n("b0c0"),n("d3b7"),n("3ca3"),n("159b"),n("ddb0"),n("8aa5")),Q=n.n(Y),Z={create:function(){Q.a.initializeApp({apiKey:"AIzaSyB_m5uvIdIKbvW1ZWEphFQ_M22ERLLtLG0",authDomain:"tysfb-ac05c.firebaseapp.com",databaseURL:"https://tysfb-ac05c.firebaseio.com",projectId:"tysfb-ac05c",storageBucket:"tysfb-ac05c.appspot.com",messagingSenderId:"746165169108",appId:"1:746165169108:web:26381f1f5d41b674bb8441",measurementId:"G-G1YYLRWCGS"});var e=Q.a.firestore(),t=Q.a.storage().ref();return{articles:[],media:[],setting:{},loadAll:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.loadArticles(),e.loadSetting(),e.loadMedia()]);case 2:case"end":return t.stop()}}),t)})))()},loadArticles:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.collection("articles").get();case 2:r=n.sent,t.articles=[],r.forEach((function(e){var n=e.data();t.articles.push(n)}));case 5:case"end":return n.stop()}}),n)})))()},addArticle:function(t){var n=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.collection("articles").doc(t.articleId).set(t);case 2:n.loadArticles();case 3:case"end":return r.stop()}}),r)})))()},deleteArticle:function(t){var n=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.collection("articles").doc(t.articleId).delete();case 2:n.loadArticles();case 3:case"end":return r.stop()}}),r)})))()},loadSetting:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.collection("settings").doc("setting").get();case 2:r=n.sent,t.setting=r.data();case 4:case"end":return n.stop()}}),n)})))()},saveSetting:function(t){var n=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.collection("settings").doc("setting").set(t);case 2:n.loadSetting();case 3:case"end":return r.stop()}}),r)})))()},loadMedia:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.collection("media").get();case 2:r=n.sent,t.media=[],r.forEach((function(e){var n=e.data();t.media.push(n)}));case 5:case"end":return n.stop()}}),n)})))()},addMedia:function(n){var r=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var i,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return i=t.child(n.name),a.next=3,i.put(n);case 3:return a.next=5,i.getDownloadURL();case 5:return o=a.sent,a.next=8,e.collection("media").doc(n.name).set({fileName:n.name,mediaUrl:"/media/".concat(n.name),storageUrl:o});case 8:r.loadMedia();case 9:case"end":return a.stop()}}),a)})))()},deleteMedia:function(n){var r=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return i=t.child(n),a.next=3,i.delete();case 3:return a.next=5,e.collection("media").doc(n).delete();case 5:r.loadMedia();case 6:case"end":return a.stop()}}),a)})))()},getContent:function(t){return Object(s["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.collection("article-content").doc(t).get();case 2:if(r=n.sent,!r.exists){n.next=7;break}return n.abrupt("return",r.data());case 7:return n.abrupt("return",{markdown:""});case 8:case"end":return n.stop()}}),n)})))()},saveContent:function(t,n){return Object(s["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.collection("article-content").doc(t).set(n);case 2:case"end":return r.stop()}}),r)})))()}}}};r["default"].use(W["a"]),r["default"].use(B["a"]),r["default"].prototype.$utils=V,r["default"].prototype.$store=Z.create(),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(G)}}).$mount("#app")},"78dc":function(e,t,n){"use strict";var r=n("eda4"),a=n.n(r);a.a},"7a5a":function(e,t,n){"use strict";var r=n("f3af"),a=n.n(r);a.a},"85ec":function(e,t,n){},a8d8:function(e,t,n){},d5f5:function(e,t,n){"use strict";var r=n("a8d8"),a=n.n(r);a.a},dd21:function(e,t,n){},eda4:function(e,t,n){},f3af:function(e,t,n){},f6fc:function(e,t,n){"use strict";var r=n("331d"),a=n.n(r);a.a}});