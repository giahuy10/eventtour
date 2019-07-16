<template>
    <div>
        <div class="wraper">
            <div class="content">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <form action="" v-on:submit.prevent="storeData()">
                                <h5 class="text-uppercase text-center">Thông tin chung</h5>
                                <div class="form-group">
                                    <div class="content-header">
                                        <!-- name tour block -->
                                        <div class="form-item">
                                            <label for="">
                                                <!-- <b>Tên tour du lịch</b> -->
                                            </label>
                                            <input type="text" v-model="tourInfo.name" class="form-control" placeholder="Hãy đặt tên cho Tour du lịch bạn nhé">
                                            <i v-if="errors[0]" class="mes-err">{{ errors[0] }}</i>
                                        </div>
                                        <!-- end name tour block -->


                                        <!-- thoi gian du kien -->
                                        <div class="form-item">
                                            <h5 class="text-uppercase text-center"><span class="line">thời gian dự kiến</span></h5>
                                            <div class="slider-block">
                                                <p>
                                                    <span>0 Ngày</span>
                                                    <span>10 Ngày</span>
                                                </p>
                                                <range-slider
                                                    class="slider"
                                                    min="0"
                                                    max="10"
                                                    step="1"
                                                    v-model="sliderValue">
                                                </range-slider>
                                               
                                            </div>
                                            <i v-if="errors[1]" class="mes-err">{{ errors[1] }}</i>
                                        </div>
                                    </div>
                                    <!-- ngay -->
                                    <div class="days-block">
                                        <h5 class="text-uppercase text-center"><span class="line">Lịch trình</span></h5>
                                        <ul>
                                            <li v-for="i in 10" v-bind:key=i>
                                                <a class="actived" href="">Ngày {{ i }}</a>
                                            </li>
                                            <div style="clear:both"></div>
                                        </ul>
                                    </div>
                                    <!-- het ngay -->
                                    <div class="form-group location">
                                        <div class="select-wrap">
                                            <select name="" class="form-coltrol" id="">
                                                <option class="" value="">sda</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="action">
                                        <div>
                                            <h5 class="content-title">Lựa chọn hoạt động</h5>
                                            <div class="row">
                                                <!-- <date-picker></date-picker> -->
                                            </div>
                                            <div class="main-content">
                                                <div class="row">
                                                    <div class="col-md-4">
                                                        <div class="img-block"> 
                                                            <img src="/imgs/introduce-img.png" alt="">
                                                        </div>
                                                        <div class="content-block">
                                                            <div class="form-check">
                                                                <label for="check1" class="form-check-label">
                                                                    <input type="checkbox" id="check1" class="form-check-input"><b>Tham quan công viên</b>
                                                                </label>
                                                            </div>
                                                            <p>
                                                                <span>Giá: 50$</span>
                                                            </p>
                                                            <p>
                                                                <span>Thời gian: 10h - 12h</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="img-block"> 
                                                            <img src="/imgs/introduce-img.png" alt="">
                                                        </div>
                                                        <div class="content-block">
                                                            <div class="form-check">
                                                                <label for="check1" class="form-check-label">
                                                                    <input type="checkbox" id="check1" class="form-check-input"><b>Tham quan công viên</b>
                                                                </label>
                                                            </div>
                                                            <p>
                                                                <span>Giá: 50$</span>
                                                            </p>
                                                            <p>
                                                                <span>Thời gian: 10h - 12h</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="img-block"> 
                                                            <img src="/imgs/introduce-img.png" alt="">
                                                        </div>
                                                        <div class="content-block">
                                                            <div class="form-check">
                                                                <label for="check1" class="form-check-label">
                                                                    <input type="checkbox" id="check1" class="form-check-input"><b>Tham quan công viên</b>
                                                                </label>
                                                            </div>
                                                            <p>
                                                                <span>Giá: 50$</span>
                                                            </p>
                                                            <p>
                                                                <span>Thời gian: 10h - 12h</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-center btn-group-ct" style="margin-top:30px">
                                    <div class="dl-grid" style="">
                                        <b-button variant="info" type="" v-b-modal.modal-login class="btn btn-login btn-gray btn-warning">QUAY LẠI</b-button>
                                    </div>
                                    <div class="dl-grid" style="">
                                        <b-button variant="info" type="" v-b-modal.modal-login class="btn btn-login btn-blue">NGÀY TIẾP THEO</b-button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
             <div class="content">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h5>Bảng lịch trình</h5>
                            <table class="table table-bordered">
                                <thead style="background-color:#2e3192;color:#ffcf6c;text-align:center">
                                    <tr>
                                        <th>Ngày</th>
                                        <th>Thành phố</th>
                                        <th>Giờ</th>
                                        <th>Hoạt động</th>
                                        <th>Ẩm thực</th>
                                        <th>Di chuyển</th>
                                        <th>Nơi ở</th>
                                        <th>Tổng chi phí</th>
                                    </tr>
                                </thead>
                                <tbody style="text-align:center">
                                    <tr>
                                        <td>John</td>
                                        <td>Doe</td>
                                        <td>10h30: 13h:30</td>
                                        <td>john@example.comjohn@example.com </td>
                                        <td>sd</td>
                                        <td>Thịt chó</td>
                                        <td>Khách sạn</td>
                                        <td>100.000$</td>
                                    </tr>
                                    <tr>
                                        <td>John</td>
                                        <td>Doe</td>
                                        <td>10h30: 13h:30</td>
                                        <td>john@example.comjohn@example.com </td>
                                        <td>sd</td>
                                        <td>Thịt chó</td>
                                        <td>Khách sạn</td>
                                        <td>100.000$</td>
                                    </tr>
                                    <tr>
                                        <td>John</td>
                                        <td>Doe</td>
                                        <td>10h30: 13h:30</td>
                                        <td>john@example.comjohn@example.com </td>
                                        <td>sd</td>
                                        <td>Thịt chó</td>
                                        <td>Khách sạn</td>
                                        <td>100.000$</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style="background-image:url(/imgs/footter.png);height:390px">
            <img src="" alt="">
        </div>
    </div>
</template>
<script>
// import VuePersianDatetimePicker from 'vue-persian-datetime-picker';
// import Datepicker from 'vuejs-datepicker';
// import {en, es} from 'vuejs-datepicker/dist/locale'

import RangeSlider from 'vue-range-slider'
import 'vue-range-slider/dist/vue-range-slider.css'
import 'hooper/dist/hooper.css';
export default {
    //middleware: 'authenticated',
    mounted: function () {
        let prevScreenData = localStorage.getItem("single-info");
        if (!prevScreenData) {
            prevScreenData = localStorage.getItem("group-info");
            if (!prevScreenData) {
                this.$router.push('/form-choice');
            } else {
                localStorage.setItem('member-info', JSON.stringify(this.prevScreenData));
            }
        }
        localStorage.setItem('member-info', prevScreenData);
        prevScreenData = localStorage.getItem('member-info');
        console.log(prevScreenData);
    },

    
    data: function (){
        return {
            srceenID: 'tour-info',
            sliderValue: 1,
            planeBrands: [
                {id: 1, name: 'Vietnam Airlines'},
                {id: 2, name: 'Vietjet Air'},
                {id: 3, name: 'Korean Air'},
                {id: 4, name: 'Jetstar'},
                {id: 5, name: 'AirAsia'},
                {id: 6, name: 'Khác'},
            ],
            intendPays: [
                {id: 1, value: '8-10 triệu đồng'},
                {id: 2, value: '10-15 triệu đồng'},
                {id: 3, value: '15-20 triệu đồng'},
                {id: 4, value: 'Khác'},
            ],

            tourInfo: {
                name: null,
                intendTime: null,
                startDay: null,
                endDay: null,
                planeBr1: null,
                planeBr2: null,
                intendPay: null,

            },
            hooperSettings: {
                itemsToShow: 2,
                centerMode: true
            },
            errors: [],
            showMore: false,
        }
    },
    components: {
        // 'date-picker': VuePersianDatetimePicker,
        // 'datepicker' : Datepicker,
        'range-slider': RangeSlider
    },
    created: function () {
        // this.getCurrentDay();
    },
    methods: {
        storeData: function () {
            this.errors = [];
            if (!this.tourInfo.name) {
                this.errors[0] = 'Bạn chưa nhập tên.';
            }
            if (!this.tourInfo.intendTime) {
                this.errors[1] = 'Bạn chưa chọn số ngày dự kiến';
            } 
            if (!this.tourInfo.startDay) {
                this.errors[2] = 'Bạn chưa nhập thời gian đi';
            }
            if (!this.tourInfo.endDay) {
                this.errors[3]='Bạn chưa nhập thời gian về';
            } else {
                let oneDay = 24*60*60*1000;
                let diffDays = Math.round(Math.abs((this.tourInfo.endDay.getTime() - this.tourInfo.startDay.getTime())/(oneDay)));
                if (this.tourInfo.endDay.getTime() <= this.tourInfo.startDay.getTime()) {
                    this.errors[3]='Ngày về không phù hợp';
                } else {
                    if (this.tourInfo.intendTime == 'Dưới 7 ngày') {
                        
                        if (diffDays > 7) {
                            this.errors[3]='Số ngày lớn hơn 7';
                        }
                    } else {
                        if (diffDays <= 7) {
                            this.errors[3]='Số ngày nhỏ hơn 7';
                        }
                    }
                }
            }
            if (!this.tourInfo.planeBr1) {
                this.errors[4]='Bạn chưa chọn hãng bay đi';
            }
            if (!this.tourInfo.planeBr2) {
                this.errors[5]='Bạn chưa chọn hãng bay về';
            }
            if (!this.tourInfo.intendPay) {
                this.errors[6]='Bạn chưa chọn kinh phí dự kiến';
            }
            


           
            if (this.errors.length === 0) {
                this.tourInfo.startDay = this.tourInfo.startDay.toJSON().slice(0,10).replace(/-/g,'/')
                this.tourInfo.endDay = this.tourInfo.endDay.toJSON().slice(0,10).replace(/-/g,'/');
                localStorage.setItem(this.srceenID, JSON.stringify(this.tourInfo));
                this.$router.push('/choice-location');
            }
            
        }
    }
}
</script>

<style scoped>
    .w5 {width: 50%}
    .w8 {width: 80%}
    fieldset {margin-bottom: 10px !important}
    .form-group {margin-bottom:0px}
    p {margin-bottom: 0;font-size: 16px;color: #010101}
    .persion{margin-right: 5px}
    .col-form-label{padding-bottom: 0}
    .group{margin-left: 5px}
    h5 {color: #2d4197}
    .wraper{background-image: url(/imgs/banner3.png);padding: 80px 0px 0 0; background-image: linear-gradient(#fcfefe, #fff); background-size: 100%;padding-bottom:50px; 
    background-repeat: no-repeat;
    background-position: bottom;}
    
    .content{width: 1140px;margin: 0 auto;background: #fff;box-shadow: 5px 6px 9px rgba(0,0,0,.2), 0 2px 2px rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12); margin-bottom: 50px;margin-top: 60px;padding-top: 30px;padding-bottom: 30px}
    .persion, .group{
        background-color: #ffba46; width: 130px;opacity: 1;height: 75px;padding: 10px;float: left;border-radius: 4px;cursor: pointer;
    }
    h4 {margin-bottom: 20px}
    .persion p, .group p {margin-top: 10px}
    .footer-register {margin-top: 20px}
    .footer-register .btn {margin-top: 15px; background-color: #707070; border-radius: 0;color: #fff;padding: 4px 25px}
    .persion img, .group img {width: 25px;}
    .group img {width: 37px}
    .custom-control-label {color: #595959;font-size: 14px}
    .custom-radio {display: inline;margin-right: 20px}
    .gr-title{padding: 10px 0}
    .gr-btn {text-align: center;margin-top: 30px}
    .gr-btn .btn {
        width: 200px;
    }
    .content-title {
        margin-bottom: 20px;position: relative;
    }
    .content-title::before {
        content: "";
        width: 3px;
        height: 25px;
        background-color: #2d4197;
        position: absolute;
        left: -15px;
    }
    .item-center{border-left: 1px solid #e6e6e6;border-right: 1px solid #e6e6e6;}
    .add-member {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    .add-member img{width: 30px;}
    @media(max-width: 767px) {
        .content {
            width: 320px;
        }
    }
</style>

<style lang="scss">
$blue: #2d4197;
.footer-regiser {
    .btn {
        a {
            color: $blue;
            text-align: center;
        }
    }
}
.slider {
  /* overwrite slider styles */
  width: 100%;
}
.range-slider-knob {
    background-color: #21fb92;
    border-color: #21fb92
}
section:focus ,button:focus{
    outline:none;
}
.days-block {
    // padding: 0 30px;position: relative;
    margin-bottom: 25px;
    ul {
        padding: 0;
    }
    li {
        width: 10%;
        list-style: none;float: left;
        a {
            padding: 4px 15px;margin-right:5px;border:1px solid #ccc;display: inherit;text-align: center;color: #565656;font-weight: 600
           
        }
        &:last-child a{
            margin-right: 0; 
        }
        .actived {
            background: #f67521;color: #ffffff
        }
    }
    .hooper {width: 100%;
        margin: 0 auto;height: 132px;
        .hooper-prev {
            left: -40px;
        }
        .hooper-next {
            right: -40px;
        }
        .is-disabled {display: none}
    }
}

.places-block, .cuisine-block {
    padding: 0 15px;
    .hooper {
        padding-top: 20px;
        padding-bottom:35px; 
        height: auto;
        .img-block {
            height: 100%;
            padding:0 10px;
            img {
                height: 100%;
            }
            p {
                color: #000
            }
        };
        .hooper-next {
            right: -45px;
            top: 47%
        };
        .hooper-prev {
            left: -45px;
            top: 47%
        }
    }
}
.plan-block {
    .right-content {
        width: calc(100% - 280px);float: left;
        padding: 30px; border: 1px solid #a0a0a0;
        p {
            padding-left: 1.5em 
        }
        .item {
            margin-bottom: 20px;
            .text-content {
                margin-top: 10px
            }
        }
    }
    .left-content {
        width: 280px;float: left;
        input[type="time"] {
            // border: none;
            width: 77px;
        }
        .time-block {
            border: 1px solid #a0a0a0;
            padding: 5px;
            width: 281px;border-right: 2px solid #fff;position: relative;
            .without::-webkit-datetime-edit-ampm-field {
                display: none;
            }
        }
        .add {
            margin-top: 20px;
            span {
                padding: 5px 20px; border: 1px solid #ccc;cursor: pointer;
            }
        }
    }
}

.img-block {
    height: 200px;

}
.text-content {
    height: 118px;
}
.line {
    position: relative;
    &::before {
        content: '';
        position: absolute;
        height: 2px;width: 25px;background: #595959;
        top: -35px;
        left: 41%;
        
    }
}
.action {
    margin-top: 50px;
    .img-block {
            padding: 0;
            img {
                height: 100%;border: 1px solid #ccc
            }
        }
    .content-block {
        margin-top: 20px;
        padding: 0 50px;
        p {
            padding: 0 20px;
        }
    }
    .main-content {
        padding: 0 50px;
    }
}
.item-non-choice {margin-left: 30px;position: relative; }
.item-non-choice::before {
    content: '';
    left: -30px;
    position: absolute;
    border: 1px solid #ccc;
    width: 20px;height: 20px;
    top: 2px;
}
.location {
    text-align: center;
    .select-wrap {
        select {
            background-color: #fff;
            border: none;
        }
    }
}
.choiced-icon {
                img {
                    width: 27px;vertical-align: unset;display: inline;
                }
                span {
                    display: inline;font-size: 14px;color: #9b9ca1;
                }
            };

.btn-group-ct {
    button {
        display: inline-block;border:none;width: 170px
    }
    .btn-blue {
        background-color: #2e3192;margin-left: 20px;
        &:hover {
            background-color: #2d4197;
        } 
        }
    .btn-gray {
        background-color: #8f8f8f;
        &:hover {
            background-color: #595959;
        }
    }
}
input{
    border-radius: 20px;text-align: center
}
input[type="text"] {
    height: 40px; border-radius: 20px;
}
.content-header {

    width: 730px;margin: 0 auto;
    .form-item {
        // text-align: center;
        margin-bottom: 80px;
        .slider-block {
            p {
                span:last-child {
                    float: right;
                }
            }
        }
        .custom {
            background-color:#f7f3cd;border:1px solid #979598;width: 80px;display: inline-block;
        }
        input {
            width: 70%;margin: 0 auto;
        }
    }
    
}
</style>
