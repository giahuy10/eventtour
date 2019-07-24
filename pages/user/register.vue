<template>
    <div class="register-page inner-page">
        <div class="inner-box inner-register">
            <div class="text-center">
                <div class="row">
                    <div class="col-6 d-none d-sm-block">
                        <img class="logo-login" src="/imgs/logo.png" alt="">
                    </div>
                    <div class="col-12 col-md-6 text-right text-center-mobile">
                        <h3 class="gr-title">ĐĂNG KÝ</h3>
                    </div>
                </div>
                <hr> 
            </div>
            <div v-if="err.length > 0">
                
            <div class="alert alert-warning">
                <ul>
                <li v-for="(text, i) in err" :key="i" v-text="text"></li>
                </ul>
            </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-6">
                    <div class="form-group">
                    <input type="text" v-on:keyup.enter="$event.target.nextElementSibling.focus()" v-model="regiser.username" placeholder="Tên đăng nhập" class="form-control">
                    </div>

                </div>
                <div class="col-12 d-block d-sm-none">
                    <div class="form-group">
                    <input type="text" v-on:keyup.enter="$event.target.nextElementSibling.focus()" v-model="regiser.displayName" placeholder="Họ tên" class="form-control">
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="form-group">
                    <input type="password" v-on:keyup.enter="$event.target.nextElementSibling.focus()" v-model="regiser.password" placeholder="Mật khẩu" class="visible-xs form-control">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-6 d-none d-sm-block">
                    <div class="form-group">
                    <input type="text" v-on:keyup.enter="$event.target.nextElementSibling.focus()" v-model="regiser.displayName" placeholder="Họ tên" class="form-control">
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="form-group">
                    <input type="password" id="confirm-password" v-on:keyup.enter="$event.target.nextElementSibling.focus()" v-model="regiser.confirmPassword" placeholder="Xác nhận mật khẩu" class="form-control visible-xs ">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-6">
                    <div class="form-group">
                        <input type="email" v-on:keyup.enter="$event.target.nextElementSibling.focus()" v-model="regiser.email" placeholder="Email" class="form-control">
                    </div>
                </div>
                <div class="col-12 col-md-6">
                    <div class="row">
                        <div class="col-12 col-md-6">
                            <Facebook />
                        </div>
                        <div class="col-12 col-md-6">
                            <Google />
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <b-button variant="primary" v-if="loading" disabled>
                    <b-spinner variant="success" type="grow" label="Spinning"></b-spinner>Vui lòng chờ...
                </b-button>

                <a v-else href="#" class="btn btn-block btn-login" @click.prevent="handleRegister">
                    Đăng ký
                </a>
            </div>
            <hr>
            <div class="text-center">Đã có tài khoản? <nuxt-link to="/user/login" class="reg"><b> Đăng nhập</b></nuxt-link></div>

        </div>
        
    </div>
</template>

<script>
import Facebook from '~/components/FacebookLogin.vue'
import Google from '~/components/GoogleLogin.vue'
export default {
    components: {
        Facebook, Google
    },
    data () {
        return {
            err: [],
            loading: false,
            regiser: {
                username: '',
                password: '',
                confirmPassword: '',
                email: '',
                displayName: ''
            },
        }
    },
    methods: {
        validEmail: function (email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },
        handleRegister () {
            this.err = []
            if (!this.regiser.username) {
                this.err.push('Tài khoản không được bỏ trống')
            }
            if (!this.regiser.email) {
                this.err.push('Email không được bỏ trống')
            }
            if (!this.regiser.password || !this.regiser.confirmPassword) {
                this.err.push('Mật khẩu không được bỏ trống')
            }
            if (this.regiser.password  !== this.regiser.confirmPassword) {
                this.err.push('Xác nhận mật khẩu không đúng')
            }
            if (!this.validEmail(this.regiser.email)) {
                this.err.push('Email không đúng định dạng')
            }

            if (this.err.length < 1) {
            this.loading = true
            let app = this
            this.$axios.post('https://www.visitkorea.org.vn/api/get_nonce/?controller=user&method=register').then((response) => {
            let nonce = response.data.nonce
            this.$axios.post(`https://www.visitkorea.org.vn/api/user/register/?username=${this.regiser.username}&user_pass=${this.regiser.password}&email=${this.regiser.email}&nonce=${nonce}&display_name=${this.regiser.displayName}`)
                .then((reg) => {
                console.log(reg)
                let regUser = {
                    id: reg.data.user_id,
                    cookie: reg.data.cookie,
                    username: app.regiser.username,
                    email: app.regiser.email,
                    displayName: app.regiser.displayName
                }
                localStorage.setItem('checkUser', JSON.stringify(regUser))
               
                app.loading = false
                
        
                this.$router.push({path: '/single-info'})
                })
                .catch((err) => {
                    app.loading = false
                    this.err.push('Tài khoản hoặc email đã tồn tại')
                })
            }).catch((err) => {
            console.log(err)
            })
            }
        }
    }
}
</script>

<style lang="scss">
.inner-register {
    width: 700px;
    .logo-login {
        height: 60px;
        width: auto;
    }
    @media screen and (max-width: 767px) {
        .btn-facebook, .btn-google {
            margin-bottom: 20px;
        
        }
    }
}
 @media screen and (max-width: 767px) {
.text-center-mobile {
    text-align: center !important;
}
}
</style>
