﻿"use strict";(this.webpackChunkwebsdk=this.webpackChunkwebsdk||[]).push([[716,189],{43133:(t,e,n)=>{n.d(e,{Z:()=>s});var i=n(55402),o=n.n(i),r=n(60352),a=n.n(r)()(o());a.push([t.id,"\n.tiptap-vuetify-editor__action-render-btn{\n    border: unset!important;\n}\n.tiptap-vuetify-editor__content ul li{\n      list-style: unset !important;\n}\n.tiptap-vuetify-editor__content {\n      height: var(--height);\n      min-height: var(--minHeight);\n}\n",""]);const s=a},46729:(t,e,n)=>{n.r(e),n.d(e,{default:()=>x});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("tiptap-vuetify",{style:t.editorContentStyle,attrs:{"toolbar-attributes":{color:t.ToolBarcolor,style:{display:t.buttonsHide?"none":t.ToolBarcolor?"block":"unset"}},extensions:t.extensions,disabled:t.disabled},on:{blur:t.blurEvent,focus:t.focusEvent,input:t.inputEvent,init:t.initEvent},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)};i._withStripped=!0;var o=n(89146),r=n(27157),a=n.n(r),s=n(40135),u=n(39500),l=n(88304),d=(n(11174),n(47681),new(a())({lang:{current:"en"}}));o.default.use(a()),o.default.use(l.ER,{vuetify:d,iconsGroup:"mdi"});const c=o.default.extend({components:{TiptapVuetify:l.CL},name:"QRichText",props:{height:{type:String,default:"auto"},minHeight:{type:String,default:"auto"},ToolBarcolor:{type:String,default:""},disabled:{type:Boolean,default:!1},buttonsHide:{type:Boolean,default:!1}},data:function(){return{editorContentStyle:{"--height":"auto","--minHeight":"auto"},editor:new u.ML,extensions:[l.d8,[l.rU,{renderIn:"bubbleMenu"}],[l.v6,{renderIn:"bubbleMenu"}],[l.Re,{renderIn:"bubbleMenu"}],[l.V6,{renderIn:"toolbar"}],l.Ay,l.Ee,l.Re,l.Tx,l.HC,l.DY,l.GS,l.iA,l.xD,l.pj,l.SC,[l.X6,{options:{levels:[1,2,3]}}],l.EK,l.bo,l.nv,l.U1],htmlContent:"",content:"\n      <p>\n      To see the result, select the text.\n      A special menu will appear to which you can bind the necessary extensions and\n      the buttons will be displayed there.\n      </p>\n      <p>\n      <strong>Test text:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n      </p>"}},mounted:function(){},destroyed:function(){var t;null===(t=this.$el)||void 0===t||t.remove()},methods:{blurEvent:function(){this.$emit("blur")},focusEvent:function(){this.$emit("focus")},inputEvent:function(){this.$emit("input")},initEvent:function(t){var e=t.editor;this.editor=e},getElementFromString:function(t){var e=document.createElement("div");return e.innerHTML=t,e},insertContent:function(t){if(t&&this.editor&&this.editor.state&&this.editor.state.tr){var e=this.editor.state.selection,n=this.getElementFromString(t),i=s.aw.fromSchema(this.editor.state.schema).parseSlice(n),o=this.editor.state.tr.insert(e.anchor,i.content);this.editor.view.dispatch(o)}}},watch:{content:function(){this.$emit("change")},height:{immediate:!0,handler:function(t){this.editorContentStyle["--height"]=null!=t?t:"auto"}},minHeight:{immediate:!0,handler:function(t){this.editorContentStyle["--minHeight"]=null!=t?t:"auto"}}}});var h=n(75701),p=n.n(h),m=n(8236),f=n.n(m),b=n(6080),v=n.n(b),g=n(56850),A=n.n(g),y=n(87182),E=n.n(y),C=n(43133),S={styleTagTransform:function(t,e){e.innerHTML=`.shellContainerTarget{${t}}\n`,document.head.appendChild(e)}};S.setAttributes=A(),S.insert=v().bind(null,"head"),S.domAPI=f(),S.insertStyleElement=E(),p()(C.Z,S),C.Z&&C.Z.locals&&C.Z.locals;const x=(0,n(62264).Z)(c,i,[],!1,null,null,null).exports},65189:t=>{t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGElEQVQYlWNgYGCQwoKxgqGgcJA5h3yFAAs8BRWVSwooAAAAAElFTkSuQmCC"}}]);