(function(e){function t(t){for(var r,o,c=t[0],s=t[1],l=t[2],d=0,m=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(m.length)m.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"0b90":function(e,t,n){"use strict";var r=n("a5d2"),a=n.n(r);a.a},1258:function(e,t,n){},1350:function(e,t,n){"use strict";var r=n("6262"),a=n.n(r);a.a},2982:function(e,t,n){"use strict";var r=n("5639"),a=n.n(r);a.a},"2baa":function(e,t,n){},5639:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("TabMenu")],1)},i=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.ready?n("b-tabs",{attrs:{pills:"",card:""}},[n("b-tab",{attrs:{title:"ページ",active:""}},[n("ArticleEdit")],1),n("b-tab",{attrs:{title:"カテゴリ"}},[n("CategoryEdit")],1),n("b-tab",{attrs:{title:"設定"}},[n("SettingEdit")],1),n("b-tab",{attrs:{title:"公開"}},[n("Publish")],1)],1):n("div",{staticClass:"loading"},[n("b-spinner",{attrs:{variant:"primary"}})],1)],1)},c=[],s=(n("96cf"),n("1da1")),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.draftItem?n("div",{staticClass:"edit-area"},[n("b-button",{attrs:{variant:"primary",block:""},on:{click:e.onClickExitEdit}},[e._v("戻る")]),n("b-input-group",{attrs:{prepend:"ページID"}},[n("b-input",{model:{value:e.draftItem.articleId,callback:function(t){e.$set(e.draftItem,"articleId",t)},expression:"draftItem.articleId"}})],1),n("b-input-group",{attrs:{prepend:"タイトル"}},[n("b-input",{model:{value:e.draftItem.title,callback:function(t){e.$set(e.draftItem,"title",t)},expression:"draftItem.title"}})],1),n("b-input-group",{attrs:{prepend:"カテゴリ"}},[n("b-form-select",{attrs:{options:e.store.setting.categories,"value-field":"categoryId","text-field":"categoryName"},model:{value:e.draftItem.categoryId,callback:function(t){e.$set(e.draftItem,"categoryId",t)},expression:"draftItem.categoryId"}})],1),n("b-input-group",{attrs:{prepend:"キャプション画像"}},[n("div",{staticClass:"thumbnail",style:{backgroundImage:"url("+e.draftItem.captionImage+")"}}),n("b-button",{attrs:{variant:"primary"},on:{click:function(t){return e.$refs.imageSelectModal.show()}}},[e._v("select")]),n("ImageSelectModal",{ref:"imageSelectModal",model:{value:e.draftItem.captionImage,callback:function(t){e.$set(e.draftItem,"captionImage",t)},expression:"draftItem.captionImage"}})],1),n("b-input-group",{attrs:{prepend:"概要"}},[n("b-input",{model:{value:e.draftItem.description,callback:function(t){e.$set(e.draftItem,"description",t)},expression:"draftItem.description"}})],1),n("b-input-group",{attrs:{prepend:"状態"}},[n("b-form-select",{model:{value:e.draftItem.status,callback:function(t){e.$set(e.draftItem,"status",t)},expression:"draftItem.status"}},[n("option",{attrs:{value:"draft"}},[e._v("下書き")]),n("option",{attrs:{value:"public"}},[e._v("公開")])])],1),n("b-input-group",{attrs:{prepend:"作成日"}},[n("b-form-datepicker",{model:{value:e.draftItem.publishedDate,callback:function(t){e.$set(e.draftItem,"publishedDate",t)},expression:"draftItem.publishedDate"}})],1),n("b-input-group",{attrs:{prepend:"変更日"}},[n("b-form-datepicker",{model:{value:e.draftItem.modifiedDate,callback:function(t){e.$set(e.draftItem,"modifiedDate",t)},expression:"draftItem.modifiedDate"}})],1),n("b-button",{attrs:{variant:"primary",block:""},on:{click:e.onClickEditContent}},[e._v("本文を編集する")]),n("b-button",{attrs:{variant:"primary",block:""},on:{click:e.onClickPreView}},[e._v("プレビュー")]),n("MarkdownEditor",{ref:"markDownEditor",attrs:{articleId:e.draftItem.articleId}}),n("b-button",{attrs:{variant:"primary"},on:{click:e.onClickAdd}},[e._v("保存")]),n("b-button",{attrs:{variant:"danger"},on:{click:e.onClickDelete}},[e._v("削除")])],1):n("div",[n("b-table",{attrs:{items:e.store.articles,fields:e.fields,selectable:"","select-mode":"single","show-empty":"","empty-text":"ページがありません",hover:""},on:{"row-clicked":e.onClickRow}}),n("b-button",{attrs:{variant:"primary",block:""},on:{click:e.onClickAddArticle}},[e._v("新規作成")])],1)])},u=[],d=n("b85c"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-modal",{ref:"modal",attrs:{scrollable:"",size:"lg"},on:{ok:e.onClickOk}},[n("b-button",{attrs:{block:"",variant:"primary"},on:{click:function(t){return e.$refs.uploadFile.click()},dragenter:function(e){e.preventDefault()},dragover:function(e){e.preventDefault()},dragleave:function(e){e.preventDefault()},drop:function(t){return t.preventDefault(),e.onDropFile(t)}}},[e._v("アップロード")]),n("input",{ref:"uploadFile",attrs:{type:"file",multiple:""},on:{change:e.onUploadFileChange}}),n("div",{staticClass:"thumbnails-box",on:{drop:function(t){return t.preventDefault(),t.stopPropagation(),e.onDropFile(t)},dragenter:e.onDropFile}},e._l(e.store.media,(function(t){return n("div",{key:t.fileName,staticClass:"thumbnail-outline",attrs:{selected:e.selectedMedia===t},on:{click:function(n){return e.onClickMedia(t)}}},[n("div",{staticClass:"thumbnail",style:{backgroundImage:"url("+t.mediaUrl+")"}},[n("div",{staticClass:"square"})])])})),0)],1)},f=[],p={props:{value:String},data:function(){return{store:this.$store,selectedMedia:null}},methods:{show:function(){this.selectedMedia=null;var e,t=Object(d["a"])(this.store.media);try{for(t.s();!(e=t.n()).done;){var n=e.value;n.storageUrl===this.value&&(this.selectedMedia=n)}}catch(r){t.e(r)}finally{t.f()}this.$refs.modal.show()},onClickMedia:function(e){this.selectedMedia===e?this.selectedMedia=null:this.selectedMedia=e},onClickOk:function(){this.selectedMedia?this.$emit("input",this.selectedMedia.mediaUrl):this.$emit("input","")},onUploadFileChange:function(){var e,t=Object(d["a"])(this.$refs.uploadFile.files);try{for(t.s();!(e=t.n()).done;){var n=e.value;this.store.addMedia(n)}}catch(r){t.e(r)}finally{t.f()}},onDropFile:function(){var e,t=event.target.files?event.target.files:event.dataTransfer.files,n=Object(d["a"])(t);try{for(n.s();!(e=n.n()).done;){var r=e.value;this.store.addMedia(r)}}catch(a){n.e(a)}finally{n.f()}}}},b=p,h=(n("b41c"),n("2877")),v=Object(h["a"])(b,m,f,!1,null,"2dbed0f4",null),g=v.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.shown,expression:"shown"}],staticClass:"mde-container",attrs:{fullscreen:""},on:{keydown:e.onKeyDown}},[n("div",{staticClass:"toolbar"},[n("div",{staticClass:"tool-icon",on:{click:e.onClickSave}},[n("b-icon",{attrs:{icon:"upload"}})],1),n("div",{staticClass:"tool-icon",on:{click:e.onClickExit}},[n("b-icon",{attrs:{icon:"door-closed"}})],1),n("div",{staticClass:"tool-icon",on:{click:function(t){return e.$refs.imageSelectModal.show()}}},[n("b-icon",{attrs:{icon:"image"}})],1),n("b-form-select",{staticClass:"tool-select",attrs:{size:"sm",options:e.sectionSelectOptions},model:{value:e.selectedSection,callback:function(t){e.selectedSection=t},expression:"selectedSection"}}),n("div",{staticClass:"tool-icon",on:{click:e.onClickAddSection}},[n("b-icon",{attrs:{icon:"plus"}})],1),n("div",{staticClass:"message"},[e._v(e._s(e.message))])],1),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.selectedSection.markdown,expression:"selectedSection.markdown"}],ref:"markdownInput",staticClass:"writer",domProps:{value:e.selectedSection.markdown},on:{scroll:e.onScroll,input:function(t){t.target.composing||e.$set(e.selectedSection,"markdown",t.target.value)}}}),e._v(" "),n("div",{ref:"htmlPreview",staticClass:"viewer content-body",domProps:{innerHTML:e._s(e.htmlPreview)}}),n("ImageSelectModal",{ref:"imageSelectModal",on:{input:e.onSelectImage}})],1)},I=[],w=(n("c975"),n("0e54")),y=n.n(w),x=n("1487"),C=n.n(x),S={components:{ImageSelectModal:g},props:{articleId:String},data:function(){return{store:this.$store,shown:!1,markdown:"",sections:[],selectedSection:{markdown:"",html:""},message:"",insertImageUrl:""}},created:function(){y.a.setOptions({langPrefix:"hljs language-",highlight:function(e,t){return C.a.highlightAuto(e,[t]).value}})},methods:{open:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.shown=!0,t.next=3,e.store.getContent(e.articleId);case 3:n=t.sent,e.sections=n.sections,e.selectedSection=e.sections[0],console.log(e.sections),console.log(e.selectedSection);case 8:case"end":return t.stop()}}),t)})))()},onClickExit:function(){this.shown=!1},onClickSave:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=Object(d["a"])(e.sections);try{for(n.s();!(r=n.n()).done;)a=r.value,a.html=y()(a.markdown)}catch(i){n.e(i)}finally{n.f()}return t.next=4,e.store.saveContent(e.articleId,{sections:e.sections});case 4:e.message="Saved at ".concat((new Date).toLocaleString());case 5:case"end":return t.stop()}}),t)})))()},onClickAddSection:function(){this.selectedSection={markdown:"",html:""},this.sections.push(this.selectedSection)},onSelectImage:function(e){var t=this.selectedSection.markdown.length,n=this.$refs.markdownInput.selectionStart,r=this.selectedSection.markdown.substr(0,n),a="![](".concat(e,")"),i=this.selectedSection.markdown.substr(n,t);this.selectedSection.markdown=r+a+i},onScroll:function(){var e=event.target,t=this.$refs.htmlPreview,n=e.scrollTop/(e.scrollHeight-e.clientHeight);t.scrollTo(0,n*(t.scrollHeight-t.clientHeight))},onKeyDown:function(){event.ctrlKey&&"s"===event.key&&(event.preventDefault(),this.onClickSave())}},computed:{htmlPreview:function(){return this.selectedSection?y()(this.selectedSection.markdown):""},sectionSelectOptions:function(){var e,t=[],n=Object(d["a"])(this.sections);try{for(n.s();!(e=n.n()).done;){var r=e.value,a=r.markdown;a=a.substr(0,a.indexOf("\n")),t.push({text:a,value:r})}}catch(i){n.e(i)}finally{n.f()}return t}},watch:{}},O=S,_=(n("7d99"),Object(h["a"])(O,k,I,!1,null,"249cc495",null)),M=_.exports,R={components:{ImageSelectModal:g,MarkdownEditor:M},data:function(){var e=this;return{store:this.$store,fields:[{key:"articleId",label:"ID",sortable:!0},{key:"title",label:"タイトル",sortable:!0},{key:"categoryId",label:"カテゴリ",sortable:!0,formatter:function(t){return e.categoryDict[t]?e.categoryDict[t].categoryName:""}}],draftItem:null}},mounted:function(){},methods:{onClickAddArticle:function(){this.draftItem={articleId:"",title:"",categoryId:"",captionImage:"",description:"",publishedDate:"",modifiedDate:"",status:"draft"}},onClickRow:function(e){this.draftItem=JSON.parse(JSON.stringify(e))},onClickExitEdit:function(){this.draftItem=null},onClickEditContent:function(){this.$refs.markDownEditor.open()},onClickPreView:function(){window.open("/".concat(this.draftItem.articleId),"preview")},onClickAdd:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.store.addArticle(e.draftItem);case 2:e.draftItem=null;case 3:case"end":return t.stop()}}),t)})))()},onClickDelete:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(confirm("このページを削除しますか？")){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.store.deleteArticle(e.draftItem);case 4:e.draftItem=null;case 5:case"end":return t.stop()}}),t)})))()}},computed:{categoryDict:function(){var e,t={},n=Object(d["a"])(this.store.setting.categories);try{for(n.s();!(e=n.n()).done;){var r=e.value;t[r.categoryId]=r}}catch(a){n.e(a)}finally{n.f()}return t}}},$=R,j=(n("1350"),Object(h["a"])($,l,u,!1,null,"0ff02cf6",null)),D=j.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"edit-area"},[n("b-table",{attrs:{items:e.draftItem.categories,fields:e.fields,selectable:"","select-mode":"single","show-empty":"","empty-text":"カテゴリがありません",hover:""},on:{"row-clicked":e.onClickRow},scopedSlots:e._u([{key:"cell(buttons)",fn:function(t){return[n("b-button-group",{attrs:{size:"sm"}},[n("b-button",{on:{click:function(n){return e.onClickDeleteCategory(t.item)}}},[n("b-icon",{attrs:{icon:"trash-fill"}})],1),n("b-button",{on:{click:function(n){return e.onClickSwapUpCategory(t.item)}}},[n("b-icon",{attrs:{icon:"caret-up-square-fill"}})],1),n("b-button",{on:{click:function(n){return e.onClickSwapDownCategory(t.item)}}},[n("b-icon",{attrs:{icon:"caret-down-square-fill"}})],1)],1)]}}])}),n("b-button",{attrs:{variant:"primary",block:""},on:{click:e.onClickAddCategory}},[e._v("新規作成")]),n("b-input-group",{attrs:{prepend:"カテゴリID"}},[n("b-input",{model:{value:e.editItem.categoryId,callback:function(t){e.$set(e.editItem,"categoryId",t)},expression:"editItem.categoryId"}})],1),n("b-input-group",{attrs:{prepend:"カテゴリ名"}},[n("b-input",{model:{value:e.editItem.categoryName,callback:function(t){e.$set(e.editItem,"categoryName",t)},expression:"editItem.categoryName"}})],1),n("b-input-group",{attrs:{prepend:"関連記事"}},[n("b-form-select",{model:{value:e.editItem.relation,callback:function(t){e.$set(e.editItem,"relation",t)},expression:"editItem.relation"}},[n("option",{attrs:{value:"none"}},[e._v("関連付けなし")]),n("option",{attrs:{value:"same_categories"}},[e._v("同じカテゴリへのリンクを表示")]),n("option",{attrs:{value:"all_categories"}},[e._v("全カテゴリへのリンクを表示")])])],1),n("b-button",{attrs:{variant:"primary",block:""},on:{click:e.onClickSave}},[e._v("保存")])],1)])},E=[],N=(n("4de4"),n("a434"),{data:function(){return{store:this.$store,fields:[{key:"categoryId",label:"カテゴリID"},{key:"categoryName",label:"カテゴリ名"},{key:"buttons",label:""}],draftItem:{},editItem:{}}},mounted:function(){this.draftItem=JSON.parse(JSON.stringify(this.store.setting))},methods:{onClickRow:function(e){this.editItem=e},onClickAddCategory:function(){this.draftItem.categories||this.$set(this.draftItem,"categories",[]),this.draftItem.categories.push({categoryId:"",categoryName:"",relation:"none"})},onClickDeleteCategory:function(e){this.draftItem.categories=this.draftItem.categories.filter((function(t){return t!==e}))},onClickSwapUpCategory:function(e){var t=this.draftItem.categories.indexOf(e);0!==t&&this.draftItem.categories.splice(t-1,2,this.draftItem.categories[t],this.draftItem.categories[t-1])},onClickSwapDownCategory:function(e){var t=this.draftItem.categories.indexOf(e);t!==this.draftItem.categories.length-1&&this.draftItem.categories.splice(t,2,this.draftItem.categories[t+1],this.draftItem.categories[t])},onClickSave:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.store.saveSetting(e.draftItem);case 1:case"end":return t.stop()}}),t)})))()}}}),P=N,U=(n("0b90"),Object(h["a"])(P,A,E,!1,null,"1443f454",null)),T=U.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form-list"},[n("b-input-group",{attrs:{prepend:"サイト名"}},[n("b-input",{model:{value:e.draftItem.siteName,callback:function(t){e.$set(e.draftItem,"siteName",t)},expression:"draftItem.siteName"}})],1),n("b-input-group",{attrs:{prepend:"公開先URL"}},[n("b-input",{model:{value:e.draftItem.publishUrl,callback:function(t){e.$set(e.draftItem,"publishUrl",t)},expression:"draftItem.publishUrl"}})],1),n("b-input-group",{attrs:{prepend:"ロゴ画像"}},[n("div",{staticClass:"thumbnail",style:{backgroundImage:"url("+e.draftItem.logoImage+")"}}),n("b-button",{attrs:{variant:"primary"},on:{click:function(t){return e.$refs.logoImageSelectModal.show()}}},[e._v("select")]),n("ImageSelectModal",{ref:"logoImageSelectModal",model:{value:e.draftItem.logoImage,callback:function(t){e.$set(e.draftItem,"logoImage",t)},expression:"draftItem.logoImage"}})],1),n("b-input-group",{attrs:{prepend:"トップ画像"}},[n("div",{staticClass:"thumbnail",style:{backgroundImage:"url("+e.draftItem.topImage+")"}}),n("b-button",{attrs:{variant:"primary"},on:{click:function(t){return e.$refs.topImageSelectModal.show()}}},[e._v("select")]),n("ImageSelectModal",{ref:"topImageSelectModal",model:{value:e.draftItem.topImage,callback:function(t){e.$set(e.draftItem,"topImage",t)},expression:"draftItem.topImage"}})],1),n("div",[n("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle.editMenu",modifiers:{editMenu:!0}}],attrs:{block:"",variant:"primary"}},[e._v("メニュー編集")]),n("b-collapse",{attrs:{id:"editMenu"}},[n("b-card",[n("b-table",{attrs:{items:e.draftItem.menuItems,fields:e.menuItemFields,"show-empty":"","empty-text":"メニューがありません"},scopedSlots:e._u([{key:"cell(label)",fn:function(t){return[n("b-input",{model:{value:t.item.label,callback:function(n){e.$set(t.item,"label",n)},expression:"data.item.label"}})]}},{key:"cell(href)",fn:function(t){return[n("b-input",{model:{value:t.item.href,callback:function(n){e.$set(t.item,"href",n)},expression:"data.item.href"}})]}},{key:"cell(buttons)",fn:function(t){return[n("b-button-group",{attrs:{size:"sm"}},[n("b-button",{on:{click:function(n){return e.onClickDeleteMenuItem(t.item)}}},[n("b-icon",{attrs:{icon:"trash-fill"}})],1),n("b-button",{on:{click:function(n){return e.onClickSwapUpMenuItem(t.item)}}},[n("b-icon",{attrs:{icon:"caret-up-square-fill"}})],1),n("b-button",{on:{click:function(n){return e.onClickSwapDownMenuItem(t.item)}}},[n("b-icon",{attrs:{icon:"caret-down-square-fill"}})],1)],1)]}}])}),n("b-button",{attrs:{variant:"primary",block:""},on:{click:e.onClickAddMenuItem}},[e._v("追加")])],1)],1)],1),n("b-button",{attrs:{variant:"primary",block:""},on:{click:e.onClickSave}},[e._v("保存")])],1)},J=[],z={components:{ImageSelectModal:g},data:function(){return{store:this.$store,draftItem:{siteName:"",topImage:"",publishUrl:"",categories:[],menuItems:[]},menuItemFields:[{key:"label",label:"ラベル"},{key:"href",label:"リンク先"},{key:"buttons",label:""}]}},mounted:function(){this.draftItem=JSON.parse(JSON.stringify(this.store.setting))},methods:{onClickSave:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.store.saveSetting(e.draftItem);case 1:case"end":return t.stop()}}),t)})))()},onClickAddMenuItem:function(){this.draftItem.menuItems||this.$set(this.draftItem,"menuItems",[]),this.draftItem.menuItems.push({})},onClickDeleteMenuItem:function(e){this.draftItem.menuItems=this.draftItem.menuItems.filter((function(t){return t!==e}))},onClickSwapUpMenuItem:function(e){var t=this.draftItem.menuItems.indexOf(e);0!==t&&this.draftItem.menuItems.splice(t-1,2,this.draftItem.menuItems[t],this.draftItem.menuItems[t-1])},onClickSwapDownMenuItem:function(e){var t=this.draftItem.menuItems.indexOf(e);t!==this.draftItem.menuItems.length-1&&this.draftItem.menuItems.splice(t,2,this.draftItem.menuItems[t+1],this.draftItem.menuItems[t])}}},q=z,L=(n("b15b"),Object(h["a"])(q,F,J,!1,null,"66d5d6cb",null)),H=L.exports,K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form-list"},[e.busy?n("b-button",{attrs:{variant:"primary",block:""}},[n("b-spinner",{attrs:{small:""}})],1):n("b-button",{attrs:{variant:"primary",block:""},on:{click:e.onClickPublish}},[e._v("公開")]),n("b-alert",{attrs:{show:"",variant:"info"}},[e._l(e.publishResult.success,(function(t,r){return n("p",{key:r},[e._v("OK: "+e._s(t))])})),e._l(e.publishResult.error,(function(t,r){return n("p",{key:r},[e._v("ERROR: "+e._s(t))])}))],2)],1)},B=[],V=(n("d3b7"),{components:{},data:function(){return{store:this.$store,busy:!1,publishResult:{success:[],error:[]}}},methods:{onClickPublish:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.busy=!0,t.next=3,fetch("".concat(e.store.setting.publishUrl,"/publish.php"),{method:"POST"});case 3:return n=t.sent,t.next=6,n.json();case 6:e.publishResult=t.sent,e.busy=!1;case 8:case"end":return t.stop()}}),t)})))()}}}),Q=V,G=(n("2982"),Object(h["a"])(Q,K,B,!1,null,"5421405e",null)),W=G.exports,X={components:{ArticleEdit:D,CategoryEdit:T,SettingEdit:H,Publish:W},data:function(){return{store:this.$store,ready:!1}},mounted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.store.loadAll();case 2:e.ready=!0;case 3:case"end":return t.stop()}}),t)})))()}},Y=X,Z=(n("d6ed"),Object(h["a"])(Y,o,c,!1,null,"6cfc5b3b",null)),ee=Z.exports,te={components:{TabMenu:ee}},ne=te,re=(n("034f"),Object(h["a"])(ne,a,i,!1,null,null,null)),ae=re.exports,ie=n("5f5b"),oe=n("b1e0"),ce=(n("f9e3"),n("2dd8"),{}),se=(n("4160"),n("b0c0"),n("3ca3"),n("159b"),n("ddb0"),n("8aa5")),le=n.n(se),ue={create:function(){le.a.initializeApp({apiKey:"AIzaSyBxzmoDNJtculoSL4tEtTqoib_B-jmm74Q",authDomain:"kkrdemo-17842.firebaseapp.com",databaseURL:"https://kkrdemo-17842.firebaseio.com",projectId:"kkrdemo-17842",storageBucket:"kkrdemo-17842.appspot.com",messagingSenderId:"919163321944",appId:"1:919163321944:web:8001d8db7292c388d2542d"});var e=le.a.firestore(),t=le.a.storage().ref();return{articles:[],media:[],setting:{},loadAll:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.loadArticles(),e.loadSetting(),e.loadMedia()]);case 2:case"end":return t.stop()}}),t)})))()},loadArticles:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.collection("articles").get();case 2:r=n.sent,t.articles=[],r.forEach((function(e){var n=e.data();t.articles.push(n)}));case 5:case"end":return n.stop()}}),n)})))()},addArticle:function(t){var n=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.updatedAt=le.a.firestore.Timestamp.now(),r.next=3,e.collection("articles").doc(t.articleId).set(t);case 3:n.loadArticles();case 4:case"end":return r.stop()}}),r)})))()},deleteArticle:function(t){var n=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.collection("articles").doc(t.articleId).delete();case 2:n.loadArticles();case 3:case"end":return r.stop()}}),r)})))()},loadSetting:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.collection("settings").doc("setting").get();case 2:r=n.sent,t.setting=r.data();case 4:case"end":return n.stop()}}),n)})))()},saveSetting:function(t){var n=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.collection("settings").doc("setting").set(t);case 2:n.loadSetting();case 3:case"end":return r.stop()}}),r)})))()},loadMedia:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.collection("media").orderBy("updatedAt","desc").get();case 2:r=n.sent,t.media=[],r.forEach((function(e){var n=e.data();t.media.push(n)}));case 5:case"end":return n.stop()}}),n)})))()},addMedia:function(n){var r=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var i,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return i=t.child(n.name),a.next=3,i.put(n);case 3:return a.next=5,i.getDownloadURL();case 5:return o=a.sent,a.next=8,e.collection("media").doc(n.name).set({fileName:n.name,mediaUrl:"/media/".concat(n.name),storageUrl:o,updatedAt:le.a.firestore.Timestamp.now()});case 8:r.loadMedia();case 9:case"end":return a.stop()}}),a)})))()},deleteMedia:function(n){var r=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return i=t.child(n),a.next=3,i.delete();case 3:return a.next=5,e.collection("media").doc(n).delete();case 5:r.loadMedia();case 6:case"end":return a.stop()}}),a)})))()},getContent:function(t){return Object(s["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.collection("article-content").doc(t).get();case 2:if(r=n.sent,!r.exists){n.next=12;break}if(a=r.data(),!a.sections){n.next=9;break}return n.abrupt("return",a);case 9:return n.abrupt("return",{sections:[{markdown:a.markdown,html:a.html}]});case 10:n.next=13;break;case 12:return n.abrupt("return",{sections:[{markdown:"",html:""}]});case 13:case"end":return n.stop()}}),n)})))()},saveContent:function(t,n){return Object(s["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.collection("article-content").doc(t).set(n);case 2:case"end":return r.stop()}}),r)})))()}}}};r["default"].use(ie["a"]),r["default"].use(oe["a"]),r["default"].prototype.$utils=ce,r["default"].prototype.$store=ue.create(),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(ae)}}).$mount("#app")},6262:function(e,t,n){},"7d99":function(e,t,n){"use strict";var r=n("dcd7"),a=n.n(r);a.a},"85ec":function(e,t,n){},"9b4f":function(e,t,n){},a5d2:function(e,t,n){},b15b:function(e,t,n){"use strict";var r=n("2baa"),a=n.n(r);a.a},b41c:function(e,t,n){"use strict";var r=n("1258"),a=n.n(r);a.a},d6ed:function(e,t,n){"use strict";var r=n("9b4f"),a=n.n(r);a.a},dcd7:function(e,t,n){}});