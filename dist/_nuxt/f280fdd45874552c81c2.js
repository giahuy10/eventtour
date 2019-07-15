/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{270:function(t,e,o){var content=o(286);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(43).default)("01ff3314",content,!0,{sourceMap:!1})},271:function(t,e,o){var content=o(288);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(43).default)("f0073d8a",content,!0,{sourceMap:!1})},280:function(t,e,o){"use strict";var n={created:function(){"undefined"!=typeof document&&l(this,function(t,e){var o,n,l,c;o=document,n=t,l=e,c=r?{passive:!1}:void 0,o.addEventListener(n,l,c)})},beforeDestroy:function(){"undefined"!=typeof document&&l(this,function(t,e){var o,n,l,c;o=document,n=t,l=e,c=r?{passive:!1}:void 0,o.removeEventListener(n,l,c)})}},r="undefined"!=typeof window&&function(){var t=!1;try{var desc={get:function(){t=!0}},e=Object.defineProperty({},"passive",desc);window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(e){t=!1}return t}();function l(t,e){var o=t.$options.events;Object.keys(o).forEach(function(n){e(n,function(e){return o[n].call(t,e)})})}function c(t,base){var e=base.getBoundingClientRect();return{left:t.clientX-e.left,top:t.clientY-e.top}}var d={mixins:[n],props:{disabled:Boolean},data:function(){return{isDrag:!1}},events:{mousedown:function(t){return this.dragStart(t,this.offsetByMouse)},mousemove:function(t){return this.dragMove(t,this.offsetByMouse)},mouseup:function(t){return this.dragEnd(t,this.offsetByMouse)},touchstart:function(t){return this.dragStart(t,this.offsetByTouch)},touchmove:function(t){return this.dragMove(t,this.offsetByTouch)},touchend:function(t){return this.dragEnd(t,this.offsetByTouch)},touchcancel:function(t){return this.dragEnd(t,this.offsetByTouch)}},methods:{isInTarget:function(t){return!!t&&(t===this.$el||this.isInTarget(t.parentElement))},offsetByMouse:function(t){return c(t,this.$el)},offsetByTouch:function(t){return c(0===t.touches.length?t.changedTouches[0]:t.touches[0],this.$el)},dragStart:function(t,e){this.disabled||void 0!==t.button&&0!==t.button||!this.isInTarget(t.target)||(t.preventDefault(),this.isDrag=!0,this.$emit("dragstart",t,e(t),this.$el))},dragMove:function(t,e){this.isDrag&&(t.preventDefault(),this.$emit("drag",t,e(t),this.$el))},dragEnd:function(t,e){this.isDrag&&(t.preventDefault(),this.isDrag=!1,this.$emit("dragend",t,e(t),this.$el))}},render:function(){return this.$slots.default&&this.$slots.default[0]}},h={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("span",{staticClass:"range-slider",class:{disabled:t.disabled}},[o("drag-helper",{attrs:{disabled:t.disabled},on:{dragstart:t.dragStart,drag:t.drag,dragend:t.dragEnd}},[o("span",{ref:"inner",staticClass:"range-slider-inner"},[o("input",{staticClass:"range-slider-hidden",attrs:{type:"text",name:t.name,disabled:t.disabled},domProps:{value:t.actualValue}}),t._v(" "),o("span",{staticClass:"range-slider-rail"}),t._v(" "),o("span",{staticClass:"range-slider-fill",style:{width:t.valuePercent+"%"}}),t._v(" "),o("span",{ref:"knob",staticClass:"range-slider-knob",style:{left:t.valuePercent+"%"}},[t._t("knob")],2)])])],1)},staticRenderFns:[],props:{name:String,value:[String,Number],disabled:{type:Boolean,default:!1},min:{type:[String,Number],default:0},max:{type:[String,Number],default:100},step:{type:[String,Number],default:1}},data:function(){return{actualValue:null,dragStartValue:null}},created:function(){var t=this._min,e=this._max,o=Number(this.value);(null==this.value||isNaN(o))&&(o=t>e?t:(t+e)/2),this.actualValue=this.round(o)},computed:{_min:function(){return Number(this.min)},_max:function(){return Number(this.max)},_step:function(){return Number(this.step)},valuePercent:function(){return(this.actualValue-this._min)/(this._max-this._min)*100}},watch:{value:function(t){var e=Number(t);null==t||isNaN(e)||(this.actualValue=this.round(e))},min:function(){this.actualValue=this.round(this.actualValue)},max:function(){this.actualValue=this.round(this.actualValue)}},methods:{dragStart:function(t,e){this.dragStartValue=this.actualValue,t.target!==this.$refs.knob&&this.drag(t,e)},drag:function(t,e){var o=this.$refs.inner.offsetWidth;this.actualValue=this.round(this.valueFromBounds(e.left,o)),this.emitInput(this.actualValue)},dragEnd:function(t,e){var o=this.$refs.inner.offsetWidth;this.actualValue=this.round(this.valueFromBounds(e.left,o)),this.dragStartValue!==this.actualValue&&this.emitChange(this.actualValue)},emitInput:function(t){this.$emit("input",t)},emitChange:function(t){this.$emit("change",t)},valueFromBounds:function(t,e){return t/e*(this._max-this._min)+this._min},round:function(t){return function(t,e,o,n){if(t<=e)return e;var r=Math.floor((o-e)/n)*n+e;if(t>=r)return r;var l=(t-e)/n,c=Math.floor(l),d=l-c;return 0===d?t:d<.5?n*c+e:n*(c+1)+e}(t,this._min,this._max,this._step)}},components:{DragHelper:d}};t.exports=h},281:function(t,e,o){var content=o(282);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(43).default)("66a429f7",content,!0,{sourceMap:!1})},282:function(t,e,o){(t.exports=o(42)(!1)).push([t.i,".range-slider{display:inline-block;padding:0 10px;height:20px;width:130px}.range-slider.disabled{opacity:.5}.range-slider-inner{display:inline-block;position:relative;height:100%;width:100%}.range-slider-fill,.range-slider-rail{display:block;position:absolute;top:50%;left:0;height:4px;border-radius:2px;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.range-slider-rail{width:100%;background-color:#e2e2e2}.range-slider-fill{background-color:#21fb92}.range-slider-knob{display:block;position:absolute;top:50%;left:0;box-sizing:border-box;height:20px;width:20px;border:1px solid #f5f5f5;border-radius:50%;background-color:#fff;box-shadow:1px 1px rgba(0,0,0,.2);-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);cursor:pointer}.range-slider-hidden{display:none}",""])},283:function(t,e,o){var content=o(284);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(43).default)("d86a91a4",content,!0,{sourceMap:!1})},284:function(t,e,o){(t.exports=o(42)(!1)).push([t.i,".hooper-next,.hooper-prev{background-color:transparent;border:none;padding:1em;position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);cursor:pointer}.hooper-next.is-disabled,.hooper-prev.is-disabled{opacity:.3;cursor:not-allowed}.hooper-next{right:0}.hooper-prev{left:0}.hooper-navigation.is-vertical .hooper-next{top:auto;bottom:0;-webkit-transform:none;-webkit-transform:initial;transform:none}.hooper-navigation.is-vertical .hooper-prev{top:0;bottom:auto;right:0;left:auto;-webkit-transform:none;-webkit-transform:initial;transform:none}.hooper-navigation.is-rtl .hooper-prev{left:auto;right:0}.hooper-navigation.is-rtl .hooper-next{right:auto;left:0}.hooper-slide{flex-shrink:0;height:100%;margin:0;padding:0;list-style:none}.hooper-pagination{position:absolute;bottom:0;right:50%;-webkit-transform:translateX(50%);transform:translateX(50%);display:-webkit-box;display:flex;padding:5px 10px}.hooper-indicators{display:-webkit-box;display:flex;list-style:none;margin:0;padding:0}.hooper-indicator.is-active,.hooper-indicator:hover{background-color:#4285f4}.hooper-indicator{margin:0 2px;width:12px;height:4px;border-radius:4px;border:none;padding:0;background-color:#fff;cursor:pointer}.hooper-pagination.is-vertical{bottom:auto;right:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.hooper-pagination.is-vertical .hooper-indicators{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.hooper-pagination.is-vertical .hooper-indicator{width:6px}.hooper-progress{position:absolute;top:0;right:0;left:0;height:4px;background-color:#efefef}.hooper-progress-inner{height:100%;background-color:#4285f4;-webkit-transition:.3s;transition:.3s}.hooper{position:relative;width:100%;height:200px}.hooper,.hooper *{box-sizing:border-box}.hooper-list{overflow:hidden;width:100%;height:100%}.hooper-track{display:-webkit-box;display:flex;box-sizing:border-box;width:100%;height:100%;padding:0;margin:0}.hooper.is-vertical .hooper-track{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;height:200px}.hooper.is-rtl{direction:rtl}.hooper-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}",""])},285:function(t,e,o){"use strict";var n=o(270);o.n(n).a},286:function(t,e,o){(t.exports=o(42)(!1)).push([t.i,'.w5[data-v-a2122c92]{width:50%}.w8[data-v-a2122c92]{width:80%}fieldset[data-v-a2122c92]{margin-bottom:10px!important}.form-group[data-v-a2122c92],p[data-v-a2122c92]{margin-bottom:0}p[data-v-a2122c92]{font-size:16px;color:#010101}.persion[data-v-a2122c92]{margin-right:5px}.col-form-label[data-v-a2122c92]{padding-bottom:0}.group[data-v-a2122c92]{margin-left:5px}h5[data-v-a2122c92]{color:#2d4197}.wraper[data-v-a2122c92]{background-image:url(/imgs/banner3.png);background-image:-webkit-gradient(linear,left top,left bottom,from(#fcfefe),to(#fff));background-image:linear-gradient(#fcfefe,#fff);background-size:100%;padding:80px 0 50px;background-repeat:no-repeat;background-position:bottom}.content[data-v-a2122c92]{width:1140px;background:#fff;box-shadow:5px 6px 9px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);margin:60px auto 50px;padding-top:30px;padding-bottom:30px}.group[data-v-a2122c92],.persion[data-v-a2122c92]{background-color:#ffba46;width:130px;opacity:1;height:75px;padding:10px;float:left;border-radius:4px;cursor:pointer}h4[data-v-a2122c92]{margin-bottom:20px}.group p[data-v-a2122c92],.persion p[data-v-a2122c92]{margin-top:10px}.footer-register[data-v-a2122c92]{margin-top:20px}.footer-register .btn[data-v-a2122c92]{margin-top:15px;background-color:#707070;border-radius:0;color:#fff;padding:4px 25px}.group img[data-v-a2122c92],.persion img[data-v-a2122c92]{width:25px}.group img[data-v-a2122c92]{width:37px}.custom-control-label[data-v-a2122c92]{color:#595959;font-size:14px}.custom-radio[data-v-a2122c92]{display:inline;margin-right:20px}.gr-title[data-v-a2122c92]{padding:10px 0}.gr-btn[data-v-a2122c92]{text-align:center;margin-top:30px}.gr-btn .btn[data-v-a2122c92]{width:200px}.content-title[data-v-a2122c92]{margin-bottom:20px;position:relative}.content-title[data-v-a2122c92]:before{content:"";width:3px;height:25px;background-color:#2d4197;position:absolute;left:-15px}.item-center[data-v-a2122c92]{border-left:1px solid #e6e6e6;border-right:1px solid #e6e6e6}.add-member[data-v-a2122c92]{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;flex-wrap:wrap;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.add-member img[data-v-a2122c92]{width:30px}@media(max-width:767px){.content[data-v-a2122c92]{width:320px}}',""])},287:function(t,e,o){"use strict";var n=o(271);o.n(n).a},288:function(t,e,o){(t.exports=o(42)(!1)).push([t.i,'.footer-regiser .btn a{color:#2d4197;text-align:center}.slider{width:100%}.range-slider-knob{background-color:#21fb92;border-color:#21fb92}button:focus,section:focus{outline:none}.days-block{margin-bottom:25px}.days-block ul{padding:0}.days-block li{width:10%;list-style:none;float:left}.days-block li a{padding:4px 15px;margin-right:5px;border:1px solid #ccc;display:inherit;text-align:center;color:#565656;font-weight:600}.days-block li:last-child a{margin-right:0}.days-block li .actived{background:#f67521;color:#fff}.days-block .hooper{width:100%;margin:0 auto;height:132px}.days-block .hooper .hooper-prev{left:-40px}.days-block .hooper .hooper-next{right:-40px}.days-block .hooper .is-disabled{display:none}.cuisine-block,.places-block{padding:0 15px}.cuisine-block .hooper,.places-block .hooper{padding-top:20px;padding-bottom:35px;height:auto}.cuisine-block .hooper .img-block,.places-block .hooper .img-block{height:100%;padding:0 10px}.cuisine-block .hooper .img-block img,.places-block .hooper .img-block img{height:100%}.cuisine-block .hooper .img-block p,.places-block .hooper .img-block p{color:#000}.cuisine-block .hooper .hooper-next,.places-block .hooper .hooper-next{right:-45px;top:47%}.cuisine-block .hooper .hooper-prev,.places-block .hooper .hooper-prev{left:-45px;top:47%}.plan-block .right-content{width:calc(100% - 280px);float:left;padding:30px;border:1px solid #a0a0a0}.plan-block .right-content p{padding-left:1.5em}.plan-block .right-content .item{margin-bottom:20px}.plan-block .right-content .item .text-content{margin-top:10px}.plan-block .left-content{width:280px;float:left}.plan-block .left-content input[type=time]{width:77px}.plan-block .left-content .time-block{padding:5px;width:281px;border:1px solid #a0a0a0;border-right:2px solid #fff;position:relative}.plan-block .left-content .time-block .without::-webkit-datetime-edit-ampm-field{display:none}.plan-block .left-content .add{margin-top:20px}.plan-block .left-content .add span{padding:5px 20px;border:1px solid #ccc;cursor:pointer}.img-block{height:200px}.text-content{height:118px}.line{position:relative}.line:before{content:"";position:absolute;height:2px;width:25px;background:#595959;top:-35px;left:41%}.action{margin-top:50px}.action .img-block{padding:0}.action .img-block img{height:100%;border:1px solid #ccc}.action .content-block{margin-top:20px;padding:0 50px}.action .content-block p{padding:0 20px}.action .main-content{padding:0 50px}.item-non-choice{margin-left:30px;position:relative}.item-non-choice:before{content:"";left:-30px;position:absolute;border:1px solid #ccc;width:20px;height:20px;top:2px}.location{text-align:center}.location .select-wrap select{background-color:#fff;border:none}.choiced-icon img{width:27px;vertical-align:unset;display:inline}.choiced-icon span{display:inline;font-size:14px;color:#9b9ca1}.btn-group-ct button{display:inline-block;border:none;width:170px}.btn-group-ct .btn-blue{background-color:#2e3192;margin-left:20px}.btn-group-ct .btn-blue:hover{background-color:#2d4197}.btn-group-ct .btn-gray{background-color:#8f8f8f}.btn-group-ct .btn-gray:hover{background-color:#595959}input{border-radius:20px;text-align:center}input[type=text]{height:40px;border-radius:20px}.content-header{width:730px;margin:0 auto}.content-header .form-item{margin-bottom:80px}.content-header .form-item .slider-block p span:last-child{float:right}.content-header .form-item .custom{background-color:#f7f3cd;border:1px solid #979598;width:80px;display:inline-block}.content-header .form-item input{width:70%;margin:0 auto}',""])},298:function(t,e,o){"use strict";o.r(e);o(15),o(13);var n=o(280),r=o.n(n),l=(o(281),o(283),{middleware:"authenticated",mounted:function(){var t=localStorage.getItem("single-info");t||((t=localStorage.getItem("group-info"))?localStorage.setItem("member-info",JSON.stringify(this.prevScreenData)):this.$router.push("/form-choice")),localStorage.setItem("member-info",t),t=localStorage.getItem("member-info"),console.log(t)},data:function(){return{srceenID:"tour-info",sliderValue:1,planeBrands:[{id:1,name:"Vietnam Airlines"},{id:2,name:"Vietjet Air"},{id:3,name:"Korean Air"},{id:4,name:"Jetstar"},{id:5,name:"AirAsia"},{id:6,name:"Khác"}],intendPays:[{id:1,value:"8-10 triệu đồng"},{id:2,value:"10-15 triệu đồng"},{id:3,value:"15-20 triệu đồng"},{id:4,value:"Khác"}],tourInfo:{name:null,intendTime:null,startDay:null,endDay:null,planeBr1:null,planeBr2:null,intendPay:null},hooperSettings:{itemsToShow:2,centerMode:!0},errors:[],showMore:!1}},components:{"range-slider":r.a},created:function(){},methods:{storeData:function(){if(this.errors=[],this.tourInfo.name||(this.errors[0]="Bạn chưa nhập tên."),this.tourInfo.intendTime||(this.errors[1]="Bạn chưa chọn số ngày dự kiến"),this.tourInfo.startDay||(this.errors[2]="Bạn chưa nhập thời gian đi"),this.tourInfo.endDay){var t=Math.round(Math.abs((this.tourInfo.endDay.getTime()-this.tourInfo.startDay.getTime())/864e5));this.tourInfo.endDay.getTime()<=this.tourInfo.startDay.getTime()?this.errors[3]="Ngày về không phù hợp":"Dưới 7 ngày"==this.tourInfo.intendTime?t>7&&(this.errors[3]="Số ngày lớn hơn 7"):t<=7&&(this.errors[3]="Số ngày nhỏ hơn 7")}else this.errors[3]="Bạn chưa nhập thời gian về";this.tourInfo.planeBr1||(this.errors[4]="Bạn chưa chọn hãng bay đi"),this.tourInfo.planeBr2||(this.errors[5]="Bạn chưa chọn hãng bay về"),this.tourInfo.intendPay||(this.errors[6]="Bạn chưa chọn kinh phí dự kiến"),0===this.errors.length&&(this.tourInfo.startDay=this.tourInfo.startDay.toJSON().slice(0,10).replace(/-/g,"/"),this.tourInfo.endDay=this.tourInfo.endDay.toJSON().slice(0,10).replace(/-/g,"/"),localStorage.setItem(this.srceenID,JSON.stringify(this.tourInfo)),this.$router.push("/choice-location"))}}}),c=(o(285),o(287),o(21)),component=Object(c.a)(l,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"wraper"},[o("div",{staticClass:"content"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-12"},[o("form",{attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.storeData()}}},[o("h5",{staticClass:"text-uppercase text-center"},[t._v("Thông tin chung")]),t._v(" "),o("div",{staticClass:"form-group"},[o("div",{staticClass:"content-header"},[o("div",{staticClass:"form-item"},[o("label",{attrs:{for:""}}),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.tourInfo.name,expression:"tourInfo.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Hãy đặt tên cho Tour du lịch bạn nhé"},domProps:{value:t.tourInfo.name},on:{input:function(e){e.target.composing||t.$set(t.tourInfo,"name",e.target.value)}}}),t._v(" "),t.errors[0]?o("i",{staticClass:"mes-err"},[t._v(t._s(t.errors[0]))]):t._e()]),t._v(" "),o("div",{staticClass:"form-item"},[t._m(0),t._v(" "),o("div",{staticClass:"slider-block"},[t._m(1),t._v(" "),o("range-slider",{staticClass:"slider",attrs:{min:"0",max:"10",step:"1"},model:{value:t.sliderValue,callback:function(e){t.sliderValue=e},expression:"sliderValue"}})],1),t._v(" "),t.errors[1]?o("i",{staticClass:"mes-err"},[t._v(t._s(t.errors[1]))]):t._e()])]),t._v(" "),o("div",{staticClass:"days-block"},[t._m(2),t._v(" "),o("ul",[t._l(10,function(i){return o("li",{key:i},[o("a",{staticClass:"actived",attrs:{href:""}},[t._v("Ngày "+t._s(i))])])}),t._v(" "),o("div",{staticStyle:{clear:"both"}})],2)]),t._v(" "),t._m(3),t._v(" "),t._m(4)]),t._v(" "),o("div",{staticClass:"text-center btn-group-ct",staticStyle:{"margin-top":"30px"}},[o("div",{staticClass:"dl-grid"},[o("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-login",modifiers:{"modal-login":!0}}],staticClass:"btn btn-login btn-gray btn-warning",attrs:{variant:"info",type:""}},[t._v("QUAY LẠI")])],1),t._v(" "),o("div",{staticClass:"dl-grid"},[o("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-login",modifiers:{"modal-login":!0}}],staticClass:"btn btn-login btn-blue",attrs:{variant:"info",type:""}},[t._v("NGÀY TIẾP THEO")])],1)])])])])])]),t._v(" "),t._m(5)]),t._v(" "),t._m(6)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{staticClass:"text-uppercase text-center"},[e("span",{staticClass:"line"},[this._v("thời gian dự kiến")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("span",[this._v("0 Ngày")]),this._v(" "),e("span",[this._v("10 Ngày")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",{staticClass:"text-uppercase text-center"},[e("span",{staticClass:"line"},[this._v("Lịch trình")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group location"},[e("div",{staticClass:"select-wrap"},[e("select",{staticClass:"form-coltrol",attrs:{name:"",id:""}},[e("option",{attrs:{value:""}},[this._v("sda")])])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"action"},[o("div",[o("h5",{staticClass:"content-title"},[t._v("Lựa chọn hoạt động")]),t._v(" "),o("div",{staticClass:"row"}),t._v(" "),o("div",{staticClass:"main-content"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-4"},[o("div",{staticClass:"img-block"},[o("img",{attrs:{src:"/imgs/introduce-img.png",alt:""}})]),t._v(" "),o("div",{staticClass:"content-block"},[o("div",{staticClass:"form-check"},[o("label",{staticClass:"form-check-label",attrs:{for:"check1"}},[o("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"check1"}}),o("b",[t._v("Tham quan công viên")])])]),t._v(" "),o("p",[o("span",[t._v("Giá: 50$")])]),t._v(" "),o("p",[o("span",[t._v("Thời gian: 10h - 12h")])])])]),t._v(" "),o("div",{staticClass:"col-md-4"},[o("div",{staticClass:"img-block"},[o("img",{attrs:{src:"/imgs/introduce-img.png",alt:""}})]),t._v(" "),o("div",{staticClass:"content-block"},[o("div",{staticClass:"form-check"},[o("label",{staticClass:"form-check-label",attrs:{for:"check1"}},[o("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"check1"}}),o("b",[t._v("Tham quan công viên")])])]),t._v(" "),o("p",[o("span",[t._v("Giá: 50$")])]),t._v(" "),o("p",[o("span",[t._v("Thời gian: 10h - 12h")])])])]),t._v(" "),o("div",{staticClass:"col-md-4"},[o("div",{staticClass:"img-block"},[o("img",{attrs:{src:"/imgs/introduce-img.png",alt:""}})]),t._v(" "),o("div",{staticClass:"content-block"},[o("div",{staticClass:"form-check"},[o("label",{staticClass:"form-check-label",attrs:{for:"check1"}},[o("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"check1"}}),o("b",[t._v("Tham quan công viên")])])]),t._v(" "),o("p",[o("span",[t._v("Giá: 50$")])]),t._v(" "),o("p",[o("span",[t._v("Thời gian: 10h - 12h")])])])])])])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"content"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-md-12"},[o("h5",[t._v("Bảng lịch trình")]),t._v(" "),o("table",{staticClass:"table table-bordered"},[o("thead",{staticStyle:{"background-color":"#2e3192",color:"#ffcf6c","text-align":"center"}},[o("tr",[o("th",[t._v("Ngày")]),t._v(" "),o("th",[t._v("Thành phố")]),t._v(" "),o("th",[t._v("Giờ")]),t._v(" "),o("th",[t._v("Hoạt động")]),t._v(" "),o("th",[t._v("Ẩm thực")]),t._v(" "),o("th",[t._v("Di chuyển")]),t._v(" "),o("th",[t._v("Nơi ở")]),t._v(" "),o("th",[t._v("Tổng chi phí")])])]),t._v(" "),o("tbody",{staticStyle:{"text-align":"center"}},[o("tr",[o("td",[t._v("John")]),t._v(" "),o("td",[t._v("Doe")]),t._v(" "),o("td",[t._v("10h30: 13h:30")]),t._v(" "),o("td",[t._v("john@example.comjohn@example.com ")]),t._v(" "),o("td",[t._v("sd")]),t._v(" "),o("td",[t._v("Thịt chó")]),t._v(" "),o("td",[t._v("Khách sạn")]),t._v(" "),o("td",[t._v("100.000$")])]),t._v(" "),o("tr",[o("td",[t._v("John")]),t._v(" "),o("td",[t._v("Doe")]),t._v(" "),o("td",[t._v("10h30: 13h:30")]),t._v(" "),o("td",[t._v("john@example.comjohn@example.com ")]),t._v(" "),o("td",[t._v("sd")]),t._v(" "),o("td",[t._v("Thịt chó")]),t._v(" "),o("td",[t._v("Khách sạn")]),t._v(" "),o("td",[t._v("100.000$")])]),t._v(" "),o("tr",[o("td",[t._v("John")]),t._v(" "),o("td",[t._v("Doe")]),t._v(" "),o("td",[t._v("10h30: 13h:30")]),t._v(" "),o("td",[t._v("john@example.comjohn@example.com ")]),t._v(" "),o("td",[t._v("sd")]),t._v(" "),o("td",[t._v("Thịt chó")]),t._v(" "),o("td",[t._v("Khách sạn")]),t._v(" "),o("td",[t._v("100.000$")])])])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{"background-image":"url(/imgs/footter.png)",height:"390px"}},[e("img",{attrs:{src:"",alt:""}})])}],!1,null,"a2122c92",null);e.default=component.exports}}]);