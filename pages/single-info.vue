<template>
    <div>
        <div class="wraper">
            
            <div class="content">
                <form action="" v-on:submit.prevent="storeData()" class="">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div>
                                <h5 class="text-uppercase gr-title text-center">Thông tin người chơi</h5>
                                <!-- <ul v-if="errors.length !== 0">
                                    <li v-for="(error, i) in errors" v-bind:key="i"><i class="mes-err">{{ error }}</i></li>
                                </ul> -->
                                <div class="form-group">
                                    <div class="form-item">
                                        <label for="">
                                            <b>Họ và tên người cùng đi:</b>
                                        </label>
                                        <input type="text" v-model="person.fullName" autofocus placeholder="Họ và tên của bạn" class="form-control">
                                        <i v-if="errors[0]" class="mes-err">{{ errors[0] }}</i>
                                    </div>
                                    <div class="form-item custom-form-control">
                                        <label for="">
                                            <b>Tuổi:</b>
                                        </label>
                                        <input v-model="person.age" type="text" placeholder="" class="form-control">
                                        <i v-if="errors[1]" class="mes-err">{{ errors[1] }}</i>
                                    </div>
                                    <!-- <div class="custom-form-control"> -->
                                        <label for="" class="custom-lable"> <b>Giới tính</b></label>
                                        <b-form-radio v-model="person.sex" value="0">Nam</b-form-radio>
                                        <b-form-radio v-model="person.sex" value="1">Nữ</b-form-radio>
                                        <i v-if="errors[2]" class="mes-err">{{ errors[2] }}</i>
                                    <!-- </div> -->
                                    
                                    <div class="form-item">
                                        <label for="">
                                            <b>Số điện thoại:</b>
                                        </label>
                                        <input type="text" v-model="person.phoneNumber" placeholder="Số điện thoại của bạn" class="form-control">
                                        <i v-if="errors[3]" class="mes-err">{{ errors[3] }}</i>
                                    </div>
                                    <div class="form-item">
                                        <label for="">
                                            <b>Email:</b>
                                        </label>
                                        <input type="email" v-model="person.email" placeholder="Email của bạn" class="form-control">
                                        <i v-if="errors[4]" class="mes-err">{{ errors[4] }}</i>
                                    </div>
                                    <div class="form-item">
                                        <span v-on:click="showMore = !showMore" class="item-non-choice place-name" v-if="!showMore"></span>
                                        <img v-on:click="showMore = !showMore" v-else style=" width: 27px;vertical-align: unset;display: inline;" src="/imgs/tick.png" alt="">
                                        <span>Tích vào đây nếu bạn đi theo nhóm</span>
                                    </div>
                                     <div class="choiced-icon">
                                         <label for="">
                                            <!-- <b>Email:</b> -->
                                        </label>
                                        <!-- <img src="/imgs/tick.png" alt=""> -->
                                       
                                    </div>
                                </div>
                                <div class="form-group form-group2" v-if="showMore">
                                    <div class="form-item">
                                        <label for="">
                                            <b>Họ và tên người cùng đi:</b>
                                        </label>
                                        <input type="text" v-model="persons[0].fullName" autofocus placeholder="Họ và tên của bạn" class="form-control">
                                        <i v-if="errors[0]" class="mes-err">{{ errors[0] }}</i>
                                    </div>
                                    <div class="form-item custom-form-control">
                                        <label for="">
                                            <b>Tuổi:</b>
                                        </label>
                                        <input v-model="persons[0].age" type="text" placeholder="" class="form-control">
                                        <i v-if="errors[1]" class="mes-err">{{ errors[1] }}</i>
                                    </div>
                                    <!-- <div class="custom-form-control"> -->
                                        <label for="" class="custom-lable"> <b>Giới tính</b></label>
                                        <b-form-radio v-model="persons[0].sex" value="0">Nam</b-form-radio>
                                        <b-form-radio v-model="persons[0].sex" value="1">Nữ</b-form-radio>
                                        <i v-if="errors[2]" class="mes-err">{{ errors[2] }}</i>
                                    <!-- </div> -->
                                    <div class="form-item">
                                        <label for="">
                                            <b>Họ và tên người cùng đi:</b>
                                        </label>
                                        <input type="text" v-model="persons[1].fullName" autofocus placeholder="Họ và tên của bạn" class="form-control">
                                        <i v-if="errors[0]" class="mes-err">{{ errors[0] }}</i>
                                    </div>
                                    <div class="form-item custom-form-control">
                                        <label for="">
                                            <b>Tuổi:</b>
                                        </label>
                                        <input v-model="persons[1].age" type="text" placeholder="" class="form-control">
                                        <i v-if="errors[1]" class="mes-err">{{ errors[1] }}</i>
                                    </div>
                                    <!-- <div class="custom-form-control"> -->
                                        <label for="" class="custom-lable"> <b>Giới tính</b></label>
                                        <b-form-radio v-model="persons[1].sex" value="0">Nam</b-form-radio>
                                        <b-form-radio v-model="persons[1].sex" value="1">Nữ</b-form-radio>
                                        <i v-if="errors[2]" class="mes-err">{{ errors[2] }}</i>
                                    <!-- </div> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="gr-btn">
                    <button type="submit" class="btn btn btn-login btn-warning">Bắt đầu phần thi</button>
                </div>
                </form>
            </div>
        </div>
        <div style="background-image:url(/imgs/footter.png);height:390px"></div>
    </div>
</template>
<script>
import VeeValidate from 'vee-validate';
export default {
    // middleware: 'authenticated',
    mounted: function () {

    },


    data: function () {
        return {
            srceenID: 'single-info',
            person: {
                fullName: '',
                age: '',
                sex: '',
                phoneNumber: '',
                email: '',
            },
            persons: [
                { fullName: '', age: '', sex: '' },
                { fullName: '', age: '', sex: '' },
            ],
            showMore: false,
            errors: [],
        }
    },

    methods: {
        storeData: function () {
            

            this.errors = [];
            if (!this.person.fullName) {
                this.errors[0] = 'Bạn chưa nhập tên.';
            }
            if (!this.person.age) {
                this.errors[1] = 'Bạn chưa nhập tuổi.';
            } else {
                if (isNaN(this.person.age)) {
                     this.errors[1] = 'Bạn nhập sai tuổi.';
                }
            }
            if (!this.person.sex) {
                this.errors[2] = 'Bạn chưa chọn giới tính.';
            }
            if (!this.person.phoneNumber) {
                this.errors[3]='Bạn chưa nhập số điện thoại.';
            }
            if (!this.person.email) {
                this.errors[4] = 'Bạn chưa nhập Email.';
            } else {
                if (!this.validateEmail(this.person.email))
                    this.errors[4] = 'Email chưa đúng!';
            }
            if (this.errors.length === 0) {
                localStorage.setItem(this.srceenID, JSON.stringify(this.person));
                this.$router.push('/tour-info');
            }
        }, 
        validateEmail: function (email) {
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(email).toLowerCase());
        }
    }
     
}
</script>

<style lang="scss" scoped>
    .w5 {width: 50%}
    .w8 {width: 80%}
    .custom-form-control {
        width: 48%;display: inline-block
    }
    fieldset {margin-bottom: 10px !important}
    .form-group {margin-bottom:0px;padding: 0 50px}
    .form-group2{
        padding-top: 20px;padding-bottom: 30px;border-radius: 5px;border:1px solid #ccc
    }
    p {margin-bottom: 0;color: #ffffff;font-size: 14px}
    .persion{margin-right: 5px}
    .col-form-label{padding-bottom: 0}
    .group{margin-left: 5px}
    h5 {color: #2d4197}
    .wraper{background-image:linear-gradient(#fcfefe, #fff);padding: 80px 0px 20px 0;    background-size: 100%;
    background-repeat: no-repeat;
    background-position: bottom;}
    
    .content{
        width: 800px;
        margin: 0 auto;background: #fff; padding:30px 70px;box-shadow: 5px 6px 20px rgba(0,0,0,.2), 0 2px 2px rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12);
        margin-top: 60px;
    }
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
    .custom-radio {display: inline-block;margin-right: 20px}
    .gr-title{padding: 10px 0px 30px 0}
    .gr-btn {text-align: center;margin-top: 30px}
    .gr-btn .btn {
        width: 200px;
    }
    .item-center{border-left: 1px solid #e6e6e6;border-right: 1px solid #e6e6e6;}
    .add-member img{width: 30px;}
    @media(max-width: 767px) {
        .content {
            width: 320px;
        }
    }
    .form-item {
        margin-top:20px
    }
    .form-item > label{
        width: 200px;display: inline-block;
    }
    .form-item > input {
        width: calc(100% - 205px);display: inline-block;
    }
    .custom-lable {
        margin: 0 20px
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
    .choiced-icon {
                    img {
                        width: 27px;vertical-align: unset;display: inline;
                    }
                    span {
                        display: inline;font-size: 14px;color: #9b9ca1;
                    }
                };
        .fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
