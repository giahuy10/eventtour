<template>
    <div class="user-info inner-page">
        <div class="">
            
            <div class="user-info-inner inner-box">
             
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div>
                                <h5 class="text-uppercase gr-title text-center">Thông tin người chơi</h5>
  
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label"><b>Họ và tên:</b></label>
                                    <div class="col-sm-9">
                                    <input type="text" v-model="person.fullName" autofocus placeholder="Họ và tên của bạn" class="form-control">
                                    </div>
                                    <div class="col-12">
                                        <i v-if="errors[0]" class="mes-err">{{ errors[0] }}</i>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label">
                                        <b>Tuổi:</b> <br>
                                        <i v-if="errors[1]" class="mes-err">{{ errors[1] }}</i>
                                    </label>
                                    <div class="col-sm-9">
                                        <div class="row"> 
                                            <div class="col-sm-4">
                                                <input v-model="person.age" type="number" placeholder="" class="form-control age-mobile">
                                            </div>
                                            <div class="col-12 col-md-8 v-align">
                                                <label for="" class="custom-lable"> <b>Giới tính</b></label>
                                                <b-form-radio v-model="person.sex" value="1">Nam</b-form-radio>
                                                <b-form-radio v-model="person.sex" value="-1">Nữ</b-form-radio>
                                                <i v-if="errors[2]" class="mes-err">{{ errors[2] }}</i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label"><b>Số điện thoại:</b></label>
                                    <div class="col-sm-9">
                                    <input type="number" v-model="person.phoneNumber" placeholder="Số điện thoại của bạn" class="form-control"/>
                                    </div>
                                    <div class="col-12">
                                        <i v-if="errors[3]" class="mes-err">{{ errors[3] }}</i>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-3 col-form-label"><b>Email:</b></label>
                                    <div class="col-sm-9">
                                    <input type="email" v-model="person.email" placeholder="Email của bạn" class="form-control">
                                    </div>
                                    <div class="col-12">
                                        <i v-if="errors[4]" class="mes-err">{{ errors[4] }}</i>
                                    </div>
                                </div>
                                <div class="form-group">
                                    
                                    
                                
                                        <label for="" class="col-sm-3"></label>
                                        <div class="col-sm-9">
                                        <span v-on:click="showMore = !showMore" class="item-non-choice place-name" v-if="!showMore"></span>
                                        <img v-on:click="showMore = !showMore" v-else style=" width: 27px;vertical-align: unset;display: inline;" src="/imgs/tick.png" alt="">
                                        <span v-on:click="showMore = !showMore" class="cursor">Tích vào đây nếu bạn đi theo nhóm</span>
                                        </div>
                                   
                                  
                                </div>
                                <div class="form-group form-group2" v-if="showMore">
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label"><b>Thành viên 1:</b></label>
                                        <div class="col-sm-9">
                                        <input type="text" v-model="persons[0].fullName" autofocus placeholder="Họ và tên của thành viên thứ nhất" class="form-control">
                                        </div>
                                      
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">
                                            <b>Tuổi:</b> <br>
                                        </label>
                                        <div class="col-sm-9">
                                            <div class="row"> 
                                                <div class="col-sm-4">
                                                    <input v-model="persons[0].age" type="number" placeholder="" class="form-control age-mobile">
                                                </div>
                                                <div class="col-12 col-md-8 v-align">
                                                    <label for="" class="custom-lable"> <b>Giới tính</b></label>
                                                    <b-form-radio v-model="persons[0].sex" value="1">Nam</b-form-radio>
                                                    <b-form-radio v-model="persons[0].sex" value="-1">Nữ</b-form-radio>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label"><b>Số điện thoại:</b></label>
                                        <div class="col-sm-9">
                                        <input type="number" v-model="persons[0].phoneNumber" placeholder="Số điện thoại" class="form-control"/>
                                        </div>
                                      
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label"><b>Email:</b></label>
                                        <div class="col-sm-9">
                                        <input type="email" v-model="persons[0].email" placeholder="Email" class="form-control">
                                        </div>
                                     
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label"><b>Thành viên 2:</b></label>
                                        <div class="col-sm-9">
                                        <input type="text" v-model="persons[1].fullName" autofocus placeholder="Họ và tên của thành viên thứ hai" class="form-control">
                                        </div>
                                      
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">
                                            <b>Tuổi:</b> <br>
                                        </label>
                                        <div class="col-sm-9">
                                            <div class="row"> 
                                                <div class="col-sm-4">
                                                    <input v-model="persons[1].age" type="number" placeholder="" class="form-control age-mobile">
                                                </div>
                                                <div class="col-12 col-md-8 v-align">
                                                    <label for="" class="custom-lable"> <b>Giới tính</b></label>
                                                    <b-form-radio v-model="persons[1].sex" value="1">Nam</b-form-radio>
                                                    <b-form-radio v-model="persons[1].sex" value="-1">Nữ</b-form-radio>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label"><b>Số điện thoại:</b></label>
                                        <div class="col-sm-9">
                                        <input type="number" v-model="persons[1].phoneNumber" placeholder="Số điện thoại" class="form-control"/>
                                        </div>
                                       
                                    </div>
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label"><b>Email:</b></label>
                                        <div class="col-sm-9">
                                        <input type="email" v-model="persons[1].email" placeholder="Email " class="form-control">
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="gr-btn">
                    <button type="submit" class="btn btn btn-info" @click="storeData(1)">Gửi lịch trình có sẵn bạn đã chuẩn bị</button>
                    <button type="submit" class="btn btn btn-login btn-warning" @click="storeData(2)">Bắt đầu phần thi theo khung lịch trình của KTO</button>
                </div>
                
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
        if (localStorage.getItem('checkUser')) {
            var checkedUser = JSON.parse(localStorage.getItem('checkUser'))
            this.person.fullName = checkedUser.displayName
            this.person.email = checkedUser.email
        } else {
            this.$router.push('/')
        }
    },


    data: function () {
        return {
            srceenID: 'single-info',
            person: {
                fullName: '',
                age: '',
                sex: 1,
                phoneNumber: '',
                email: '',
            },
            persons: [
                { fullName: '', age: '', sex: 1, email: '', phoneNumber: '' },
                { fullName: '', age: '', sex: 1, email: '', phoneNumber: '' },
            ],
            showMore: false,
            errors: [],
        }
    },

    methods: {
        toast(msg, type) {

            this.$bvToast.toast(msg, {
                title: 'Thông báo',
                variant: type,
                solid: true
                })
        },
        storeData: function (type) {
            

            let check = true
            if (!this.person.fullName) {
                check = false
                this.toast('Vui lòng nhập họ tên của bạn', 'warning')
                this.toast('', 'warning')
            }
            if (!this.person.age) {
                check = false
                this.toast('Vui lòng nhập tuổi của bạn', 'warning')
            } else if (isNaN(this.person.age)) {
                check = false
                this.toast('', 'warning')
            } else if (this.person.age < 10) {
                check = false
                this.toast('Bạn chưa đủ tuổi tham gia cuộc thi này', 'warning')
            } else if (this.person.age > 100) {
                check = false
                this.toast('Bạn đã quá tuổi tham gia cuộc thi này', 'warning')
            } 
            if (!this.person.phoneNumber) {
                check = false
                this.toast('Vui lòng nhập số điện thoại của bạn', 'warning')
            }
            if (!this.person.email) {
                check = false
                this.toast('Vui lòng nhập email', 'warning')
            } else {
                if (!this.validateEmail(this.person.email)) {
                    check = false
                    this.toast('Định dạng email không chính xác', 'warning')
                }
                
            }

            if (this.showMore) {
                if (!this.persons[0].fullName) {
                check = false
                this.toast('Vui lòng nhập họ tên người chơi thứ nhất', 'warning')
                this.toast('', 'warning')
                }
                if (!this.persons[0].age) {
                    check = false
                    this.toast('Vui lòng nhập tuổi của người chơi thứ nhất', 'warning')
                } else if (isNaN(this.persons[0].age)) {
                    check = false
                    this.toast('', 'warning')
                } else if (this.persons[0].age < 10) {
                    check = false
                    this.toast('Người chơi thứ nhất chưa đủ tuổi tham gia cuộc thi này', 'warning')
                } else if (this.persons[0].age > 100) {
                    check = false
                    this.toast('Người chơi thứ nhất đã quá tuổi tham gia cuộc thi này', 'warning')
                } 
                if (!this.persons[0].phoneNumber) {
                    check = false
                    this.toast('Vui lòng nhập số điện thoại của người chơi thứ nhất', 'warning')
                }
                if (!this.persons[0].email) {
                    check = false
                    this.toast('Vui lòng nhập email của người chơi thứ nhất', 'warning')
                } else {
                    if (!this.validateEmail(this.persons[0].email)) {
                        check = false
                        this.toast('Định dạng email của người chơi thứ nhất không chính xác', 'warning')
                    }
                    
                }
                if (this.persons[1].fullName) {
                    if (!this.persons[1].age) {
                        check = false
                        this.toast('Vui lòng nhập tuổi của người chơi thứ hai', 'warning')
                    } else if (isNaN(this.persons[1].age)) {
                        check = false
                        this.toast('', 'warning')
                    } else if (this.persons[1].age < 10) {
                        check = false
                        this.toast('Người chơi thứ hai chưa đủ tuổi tham gia cuộc thi này', 'warning')
                    } else if (this.persons[1].age > 100) {
                        check = false
                        this.toast('Người chơi thứ hai đã quá tuổi tham gia cuộc thi này', 'warning')
                    } 
                    if (!this.persons[1].phoneNumber) {
                        check = false
                        this.toast('Vui lòng nhập số điện thoại của người chơi thứ hai', 'warning')
                    }
                    if (!this.persons[1].email) {
                        check = false
                        this.toast('Vui lòng nhập email của người chơi thứ hai', 'warning')
                    } else {
                        if (!this.validateEmail(this.persons[1].email)) {
                            check = false
                            this.toast('Định dạng email của người chơi thứ hai không chính xác', 'warning')
                        }
                        
                    }
                }
            }
            if (check) {
                localStorage.setItem('person', JSON.stringify(this.person));
                if (this.showMore) {
                    localStorage.setItem('persons', JSON.stringify(this.persons));
                }
                
                if (type == 1) {
                    this.$router.push('/upload-tour');
                } else {
                    this.$router.push('/editplaning-m2');
                }
                
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
    .custom-radio {display: inline-block;margin-right: 10px}
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
                        width: 27px;vertical-align: unset;display: inline-block;
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
.user-info {
    label {
        text-align: right;
        @media screen and (max-width: 767px){
            text-align: left;
        }
        &.custom-lable {
            padding-right: 0;
            text-align: left;
        }
    }
}
.user-info-inner {
    width: 800px;
    label.col-sm-3.col-form-label {
        padding: 0;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .v-align {
        display: flex;
       
        align-items: center;
    }
}
@media screen and (max-width: 767px){
    .form-group {
        padding: 0;
    }
    .form-item {
        > label {
            width: 105px;
            display: inline-block;
        }
    }
    .gr-btn {
        button:first-child {
            margin-bottom: 20px;
        }
    }
    .custom-lable {
        margin: 0;
    }
    .age-mobile {
        margin-bottom: 20px;
    }
} 
</style>

<style lang="scss">
  

</style>
