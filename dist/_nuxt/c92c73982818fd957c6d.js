(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{207:function(t,e,n){var content=n(224);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(41).default)("51d2b99e",content,!0,{sourceMap:!1})},223:function(t,e,n){"use strict";var r=n(207);n.n(r).a},224:function(t,e,n){(t.exports=n(40)(!1)).push([t.i,".review-tour-inner{width:700px}.review-tour-inner h3{font-size:24px}",""])},267:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{tour:{},question:""}},mounted:function(){localStorage.getItem("tour-upload")?this.tour=JSON.parse(localStorage.getItem("tour-upload")):this.$router.push("/upload-tour")},methods:{save:function(){localStorage.setItem("tour-upload",JSON.stringify(this.tour)),localStorage.setItem("tour-upload-question",JSON.stringify(this.question)),this.$router.push("/final")}}},o=(n(223),n(20)),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inner-page review-tour-upload"},[n("div",{staticClass:"review-tour-inner inner-box"},[n("h3",{staticClass:"text-uppercase text-center gr-title text-blue"},[t._v("Tên tour "),n("br"),t._v(" "+t._s(t.tour.name))]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"text-center review-mail"},[n("a",{attrs:{href:t.tour.link,target:"_blank"}},[n("img",{attrs:{src:"/imgs/review-mail.png",alt:""}})])]),t._v(" "),n("div",{staticClass:"url"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.tour.link,expression:"tour.link"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.tour.link},on:{input:function(e){e.target.composing||t.$set(t.tour,"link",e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"review-tour-inner inner-box"},[n("h3",{staticClass:"text-uppercase text-center gr-title text-blue"},[t._v("Câu hỏi truyền cảm hứng")]),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"question"},[t._v("Điều gì truyền cảm hứng cho bạn khi lên kế hoạch chuyến đi này?")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.question,expression:"question"}],staticClass:"form-control",attrs:{name:"",id:"",cols:"30",rows:"10"},domProps:{value:t.question},on:{input:function(e){e.target.composing||(t.question=e.target.value)}}}),t._v(" "),n("div",{staticClass:"text-center"},[n("button",{staticClass:"btn btn btn-login btn-warning",attrs:{type:"submit"},on:{click:t.save}},[t._v("Tiếp theo")])])]),t._v(" "),n("img",{attrs:{src:"/imgs/footter.png",alt:""}})])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"underline"},[e("span")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"underline"},[e("span")])}],!1,null,null,null);e.default=component.exports}}]);