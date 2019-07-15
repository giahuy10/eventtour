<template>
    <div>
        <div class="wraper">
            <div class="content">
                <form action="" v-on:submit.prevent="storeData()">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            
                            <div>
                                <h6 class="text-uppercase gr-title">trưởng nhóm</h6>
                                
                                    <div class="form-group">
                                        <div class="form-item">
                                            <label for="">
                                                <span>Họ và tên:</span>
                                            </label>
                                            <input type="text" v-model="persons[0].fullName" autofocus placeholder="Họ và tên của bạn" class="form-control">
                                            <i v-if="errors[0]" class="mes-err">{{ errors[0] }}</i>
                                        </div>
                                        <div class="form-item w5">
                                            <label for="">
                                                <span>Tuổi:</span>
                                            </label>
                                            <input type="text" placeholder="" v-model="persons[0].age" class="form-control">
                                            <i v-if="errors[1]" class="mes-err">{{ errors[1] }}</i>
                                        </div>

                                        <b-form-group style="color:#2d4197" label="Giới tính">
                                            <b-form-radio v-model="persons[0].sex" value="0">Nam</b-form-radio>
                                            <b-form-radio v-model="persons[0].sex" value="1">Nữ</b-form-radio>
                                        </b-form-group>
                                        <i v-if="errors[2]" class="mes-err">{{ errors[2] }}</i>
                                        <div class="form-item w8">
                                            <label for="">
                                                <span>Số điện thoại:</span>
                                            </label>
                                            <input type="text" v-model="persons[0].phoneNumber" placeholder="Số điện thoại của bạn" class="form-control">
                                            <i v-if="errors[3]" class="mes-err">{{ errors[3] }}</i>
                                        </div>
                                        <div class="form-item w8">
                                            <label for="">
                                                <span>Email:</span>
                                            </label>
                                            <input type="email" v-model="persons[0].email" placeholder="Email của bạn" class="form-control">
                                            <i v-if="errors[4]" class="mes-err">{{ errors[4] }}</i>
                                        </div>
                                    </div>
                                
                            </div>
                        </div>
                        <div class="col-md-4 item-center">
                            <div>
                                <h6 class="text-uppercase gr-title">THÀNH VIÊN 1</h6>
                                <div class="form-group">
                                    <div class="form-item">
                                        <label for="">
                                            <span>Họ và tên:</span>
                                        </label>
                                        <input type="text"  v-model="persons[1].fullName" autofocus placeholder="Họ và tên của bạn" class="form-control">
                                        <!-- <i v-if="errors[0]" class="mes-err">{{ errors[0] }}</i> -->
                                    </div>
                                    <div class="form-item w5">
                                        <label for="">
                                            <span>Tuổi:</span>
                                        </label>
                                        <input type="text" placeholder="" class="form-control">
                                    </div>
                                    <b-form-group style="color:#2d4197" label="Giới tính">
                                        <b-form-radio v-model="persons[1].sex" value="0">Nam</b-form-radio>
                                        <b-form-radio v-model="persons[1].sex" value="1">Nữ</b-form-radio>
                                    </b-form-group>
                                    <div class="form-item w8">
                                        <label for="">
                                            <span>Số điện thoại:</span>
                                        </label>
                                        <input type="text" v-model="persons[1].phoneNumber" placeholder="Số điện thoại của bạn" class="form-control">
                                    </div>
                                    <div class="form-item w8">
                                        <label for="">
                                            <span>Email:</span>
                                        </label>
                                        <input type="email" v-model="persons[1].email" placeholder="Email của bạn" class="form-control">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="addedmember3" class="col-md-4">
                            <div>
                                <h6 class="text-uppercase gr-title">THÀNH VIÊN 2</h6>
                                <div class="form-group">
                                    <div class="form-item">
                                        <label for="">
                                            <span>Họ và tên:</span>
                                        </label>
                                        <input type="text"  v-model="persons[2].fullName" autofocus placeholder="Họ và tên của bạn" class="form-control">
                                    </div>
                                    <div class="form-item w5">
                                        <label for="">
                                            <span>Tuổi:</span>
                                        </label>
                                        <input type="text" placeholder="" class="form-control">
                                    </div>
                                    <b-form-group style="color:#2d4197" label="Giới tính">
                                        <b-form-radio v-model="persons[2].sex" value="0">Nam</b-form-radio>
                                        <b-form-radio v-model="persons[2].sex" value="1">Nữ</b-form-radio>
                                    </b-form-group>
                                    <div class="form-item w8">
                                        <label for="">
                                            <span>Số điện thoại:</span>
                                        </label>
                                        <input type="text" v-model="persons[2].phoneNumber" placeholder="Số điện thoại của bạn" class="form-control">
                                    </div>
                                    <div class="form-item w8">
                                        <label for="">
                                            <span>Email:</span>
                                        </label>
                                        <input type="email" v-model="persons[2].email" placeholder="Email của bạn" class="form-control">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-else class="col-md-4 add-member">
                            <div class="">
                                <img v-on:click="addedmember3 = !addedmember3" src="/imgs/add.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="gr-btn">
                    <button class="btn btn btn-login btn-warning">Bắt đầu phần thi</button>
                </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    middleware: 'authenticated',
    mounted: function () {
        let prevScreenData = localStorage.getItem("form-choice");
        if (!prevScreenData) {
            this.$router.push('/form-choice');
        }
        console.log(prevScreenData);
    },

    data: function () {
        return {
            addedmember3: false,
            srceenID: 'group-info',
            persons: [
                {   
                    fullName: null,
                    age: null,
                    sex: null,
                    phoneNumber: null,
                    email: null,
                },
                {   
                    fullName: null,
                    age: null,
                    sex: null,
                    phoneNumber: null,
                    email: null,
                },
                {   
                    fullName: null,
                    age: null,
                    sex: null,
                    phoneNumber: null,
                    email: null,
                },
            ],
            errors: []
        }
    },

    created: function () {
        this.setValue();
    },

    methods: {
        storeData: function () {
            this.validateData();
            let singleInfo = localStorage.getItem("single-info");

            // if already exist single-info data, delete it
            if (singleInfo) {
                localStorage.removeItem('single-info');
            }
            if (this.errors.length === 0) {
                if (!this.addedmember3) {
                    let persons = [this.persons[0], this.persons[1]];
                    localStorage.setItem(this.srceenID, JSON.stringify(persons));
                    this.$router.push('/tour-info');
                } else {
                    localStorage.setItem(this.srceenID, JSON.stringify(this.persons));
                    this.$router.push('/tour-info');
                }
            }
            
        },
        validateData: function () {
            this.errors = [];
            // for (let i = 0; i < 1; i++) {
                if (!this.persons[0].fullName) {
                    this.errors[0] = 'Bạn chưa nhập tên.';
                }
                if (!this.persons[0].age) {
                    this.errors[1] = 'Bạn chưa nhập tuổi.';
                } else {
                    if (isNaN(this.persons[0].age)) {
                        this.errors[1] = 'Bạn nhập sai tuổi.';
                    }
                }
                if (!this.persons[0].sex) {
                    this.errors[2] = 'Bạn chưa chọn giới tính.';
                }
                if (!this.persons[0].phoneNumber) {
                    this.errors[3]='Bạn chưa nhập số điện thoại.';
                }
                if (!this.persons[0].email) {
                    this.errors[4] = 'Bạn chưa nhập Email.';
                } else {
                    if (!this.validateEmail(this.persons[0].email))
                        this.errors[4] = 'Email chưa đúng!';
                }
            // }
        },
        setValue: function () {
            if (process.browser) {
                let singleInfo = localStorage.getItem("single-info");
                console.log(singleInfo);
            }
            
        },
        validateEmail: function (email) {
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(email).toLowerCase());
        }
    }
}
</script>

<style scoped>
    .w5 {width: 50%}
    .w8 {width: 80%}
    fieldset {margin-bottom: 10px !important}
    .form-group {margin-bottom:0px}
    p {margin-bottom: 0;color: #ffffff;font-size: 14px}
    .persion{margin-right: 5px}
    .col-form-label{padding-bottom: 0}
    .group{margin-left: 5px}
    h6 {color: #2d4197}
    .wraper{background-image: url(/imgs/banner3.png);padding: 80px 0px 300px 0;    background-size: 100%;
    background-repeat: no-repeat;
    background-position: bottom;}
    
    .content{width: 720px;margin: 0 auto;background: #fff; padding:30px 10px;box-shadow: 5px 6px 9px rgba(0,0,0,.2), 0 2px 2px rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12)}
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
    .item-center{border-left: 1px solid #e6e6e6;border-right: 1px solid #e6e6e6;}
    .add-member {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    .add-member img{width: 30px;cursor: pointer;}
    @media(max-width: 767px) {
        .content {
            width: 320px;
        }
    }
</style>
