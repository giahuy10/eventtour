<template>
    <div>
        <b-modal :hide-footer="true" id="" title="Thông tin chung">
            <div class="form-group">
                <div class="form-item">
                    <label for="">
                        <b>Tên tour du lịch</b>
                    </label>
                    <input type="text" class="form-control">
                </div>
                <div class="form-item">
                    <label for="">
                        <b>Thời gian dự kiến</b>
                    </label>
                    <input type="text" class="form-control">
                </div>
                <div class="form-item">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-item">
                                <label for="">
                                    <b>Thời gian đi</b>
                                </label>
                                <input type="text" class="form-control">
                            </div>
                            <div class="form-item">
                                <label for="">
                                    <b>Hãng bay đi</b>
                                </label>
                                <select name="" class="form-control" id="">
                                    <option value="">Jet start</option>
                                </select>
                            </div>
                            
                        </div>
                        <div class="col-md-6">
                            <div class="form-item">
                                <label for="">
                                    <b>Thời gian về</b>
                                </label>
                                <input type="text" class="form-control">
                            </div>
                            <div class="form-item">
                                <label for="">
                                    <b>Hãng bay về</b>
                                </label>
                                <select name="" class="form-control" id="">
                                    <option value="">Jet start</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="form-item">
                    <label for="">
                        <b>Kinh phí dự kiến</b>
                    </label>
                    <select name="" class="form-control" id="">
                        <option value="">8 - 10tr</option>
                    </select>
                </div>
            </div>
            <div class="text-center">
                <div class="dl-grid" style="">
                    <b-button variant="info" v-b-modal.modal-login class="btn-resg">Tạo lịch trình hằng ngày</b-button>
                    hoạc
                    <b-button variant="warning" class="btn-login">Đính kèm lịch có sẵn</b-button>
                </div>
            </div>
        </b-modal>
        <b-modal :hide-footer="true" hide-close="true" id="modal-login" title="Đăng nhập">
            <i class="mes-err" v-if="loginInfo.error.status">{{ loginInfo.error.mess }}</i>
            <form action="" v-on:submit.prevent="login()">
                <div class="form-group">
                    <div class="form-item">
                        <label for="">
                            <span>Username:</span>
                        </label>
                        <input type="text" required v-model="loginInfo.username" placeholder="Tên đăng nhập" class="form-control">
                    </div>
                    <div class="form-item">
                        <label for="">
                            <span>Password:</span>
                        </label>
                        <input type="password" required v-model="loginInfo.password" placeholder="Password" class="form-control">
                    </div>
                    <div class="form-item submit-btn">
                        <button v-if="loginInfo.isWaiting" class="btn btn-info" type="submit">Đăng nhập</button>
                        <b-button v-else variant="primary" disabled>
                            <b-spinner small type="grow"></b-spinner>
                                Đang xử ly...
                        </b-button>
                    </div>
                </div>
            </form>
        </b-modal>
        <b-modal :hide-footer="true" id="modal-register" title="Đăng Ký">
            <i class="mes-err" v-if="registerInfo.error.status">{{ registerInfo.error.mess }}</i>
            <form action="" v-on:submit.prevent="register()">
                <div class="form-group">
                    <div class="form-item">
                        <label for="">
                            <span>Username:</span>
                        </label>
                        <input type="text" required v-model="registerInfo.username" autofocus placeholder="Tên đăng nhập" class="form-control">
                        <i class="mes-err" v-if="registerInfo.error.isEmptyName">Chưa nhập Username !</i>
                    </div>
                    <div class="form-item">
                        <label for="">
                            <span>Email:</span>
                        </label>
                        <input type="email" required placeholder="Email" v-model="registerInfo.email" class="form-control">
                        <i class="mes-err" v-if="registerInfo.error.isEmptyPass">Chưa nhập Password !</i>
                    </div>
                    <div class="form-item">
                        <label for="">
                            <span>Password:</span>
                        </label>
                        <input type="password" required v-model="registerInfo.password" placeholder="Password" class="form-control">
                        <i class="mes-err" v-if="registerInfo.error.isEmptyEmail">Chưa nhập E-mail !</i>
                    </div>
                    <!-- <div class="form-item">
                        <label for="">
                            <span>Nhập lại Password:</span>
                        </label>
                        <input type="password" v-model="registerInfo.rePassword" placeholder="Nhập lại Password" class="form-control">
                        <i class="mes-err" v-if="registerInfo.isWrongPass">Nhập lại password chưa khớp !</i>
                    </div> -->
                    <div class="form-item submit-btn">
                        <button v-if="registerInfo.isWaiting" class="btn btn-info" type="submit">Đăng ký</button>
                        <b-button v-else variant="primary" disabled>
                            <b-spinner small type="grow"></b-spinner>
                                Đang xử ly...
                        </b-button>
                    </div>
                </div>
            </form>
        </b-modal>
    </div>
</template>
<script>
const Cookie = process.client ? require('js-cookie') : undefined
export default {
    data: function () {
        return {
            registerInfo: {
                isWaiting: true, 
                username: '',
                password: '',
                rePassword: '',
                email: '',
                
                error: {
                    status: false,
                    mess: '',

                }
            },

            loginInfo: {
                isWaiting: true, 
                username: '',
                password: '',

                error: {
                    status: false,
                    mess: '',
                }
            }
        }
    },
    methods: {
        register: function () {
            this.registerInfo.isWaiting = false;
            let app = this;
            this.$axios.get('https://www.visitkorea.org.vn/api/get_nonce/?controller=user&method=register')
                .then((response) => {
                    let nonce = response.data.nonce;
                    if (nonce) {
                        this.$axios.get(`https://www.visitkorea.org.vn/api/user/register/?username=${this.registerInfo.username}&user_pass=${this.registerInfo.password}&email=${this.registerInfo.email}&nonce=${nonce}&display_name=${this.registerInfo.username}`)
                            .then(function (res) {
                                console.log();
                                if (res.data.status == 'ok') {
                                     const auth = {
                                        accessToken: res.data.cookie
                                    }
                                    app.$store.commit('setAuth', auth) // mutating to store for client rendering
                                    Cookie.set('auth', auth) // saving token in cookie for server rendering
                                    app.$router.push('/single-info');
                                }
                                    
                            })
                            .catch(function (err) {
                                // console.log(err.response);
                                app.showMess(err.response.data.error);
                                app.registerInfo.error.status = true;
                                // app.registerInfo.error.mess = err.response.data.error;
                                app.registerInfo.isWaiting = true;
                            })
                    }
                }).catch(function (err) {
                    console.log(err.response);
                })
        },

        showMess: function (noti = null) {
            switch (noti) {
                case 'Username already exists.':
                    this.registerInfo.error.mess = 'Tên đăng nhập đã tồn tại!';
                    break;
                case 'E-mail address is invalid.':
                    this.registerInfo.error.mess = 'Email không hợp lệ!';
                    break;
                case 'E-mail address is already in use.':
                    this.registerInfo.error.mess = 'Email đã được sử dụng';
                    break;
                case "You must include 'email' var in your request. ":
                    this.registerInfo.error.mess = 'Vui lòng nhập Email';
                    break;
                case "You must include 'username' var in your request. ":
                    this.registerInfo.error.mess = 'Vui lòng nhập Tên đăng nhập !';
                    break;
                case "You must include 'username' or 'email' var in your request to generate cookie.":
                    this.loginInfo.error.mess = 'Vui lòng nhập Tên đăng nhập !';
                    break;
                case "You must include a 'password' var in your request.":
                    this.loginInfo.error.mess = 'Vui lòng nhập mật khẩu !';
                    break;
                case "Invalid username/email and/or password.":
                    this.loginInfo.error.mess = 'Sai tài khoản hoạc mật khẩu !';
                    break;
                default:
                    this.registerInfo.error.mess = 'Dữ liệu không hợp lệ';
    
            }
             console.log(noti);
             console.log(this.registerInfo.error.mess);
        },



        /*   
         login
        @ para null
        @ return void 
        */

        login: function () {
            this.loginInfo.isWaiting = false;
            let app = this;
            this.$axios.post(`https://www.visitkorea.org.vn/api/user/generate_auth_cookie/?username=${this.loginInfo.username}&password=${this.loginInfo.password}`)
                .then(function (res) {
                    // console.log(res);
                    if (res.data.status == 'error') {
                        app.loginInfo.error.status = true;
                        app.showMess(res.data.error);
                        app.loginInfo.isWaiting = true;
                    } else {
                            
                            const auth = {
                                accessToken: res.data.cookie
                            }
                            app.$store.commit('setAuth', auth) // mutating to store for client rendering
                            Cookie.set('auth', auth) // saving token in cookie for server rendering
                            app.$router.push('/group-info');
                            
                    }
                })
                .catch(function (err) {
                    console.log(err.response.data);
                    app.showMess(err.response.data.error);
                    app.loginInfo.error.status = true;
                    app.loginInfo.isWaiting = true;
                   
                });
        }
    }
}
</script>
<style scoped>
    .mes-err {color: red;font-size: 12px}
</style>
