<template>
    <div class="login inner-page">
        
        <div class="login-box inner-box">
            <div class="text-center">
                <img class="logo-login" src="/imgs/logo.png" alt="">
                <hr>
                <h3 class="gr-title">ĐĂNG NHẬP</h3>
            </div>
            <div v-if="err.length > 0">
                <div class="alert alert-warning">
                <ul>
                    <li v-for="(text, i) in err" :key="i" v-text="text"></li>
                </ul>
                </div>
            </div>
                    
            <div class="form-group">
                <input type="text" v-on:keyup.enter="$event.target.nextElementSibling.focus()" v-model="login.username" placeholder="Tài khoản" class="form-control">
            </div>
            <div class="form-group">
                <input type="password" v-model="login.password" placeholder="Mật khẩu" class="form-control">
            </div>
            <div class="br text-center">

                <span>hoặc</span>

            </div>
            <div class="row">
                <div class="col-12 col-md-6">
                    <Facebook />
                </div>
                <div class="col-12 col-md-6">
                    <Google />
                </div>
            </div>
            <div class="form-group">
                <b-spinner v-if="loading" variant="success" type="grow" label="Spinning"></b-spinner>
                <a  href="#" v-else class="btn btn-block btn-login" @click.prevent="postLogin"> 
                    Đăng nhập
                </a>
            </div>
            <div class="login-footer">
                <div class="row">
                    <div class="col-6">
                        <input type="checkbox" name="" id=""> Lưu mật khẩu
                    </div>
                    <div class="col-6 text-right">
                        <a href="https://www.visitkorea.org.vn/lostpassword/" target="_blank">Quên mật khẩu?</a>
                    </div>
                </div>
                <hr>
                <div class="text-center">Chưa có tài khoản? <nuxt-link to="/user/register" class="reg"><b> Đăng ký thành viên</b></nuxt-link></div>
                
            </div>
        </div>
        <img src="/imgs/footter.png" alt="">
    </div>
</template>

<script>
import firebase from '@/plugins/firebase'
import Facebook from '~/components/FacebookLogin.vue'
import Google from '~/components/GoogleLogin.vue'
export default {
    // middleware: 'notAuthenticated',
    components: {
        Facebook, Google
    },
    data () {
        return {
            login: {
                username: '',
                password: ''
            },
            err: [],
            loading: false
        }
    },
    methods: {
        postLogin() {
            this.err = []
            if (!this.login.username || !this.login.password) {
                this.err.push('Tài khoản và mật khẩu không được bỏ trống')
            } else {
                this.loading = true
                this.$axios.post(`https://www.visitkorea.org.vn/api/user/generate_auth_cookie/?username=${this.login.username}&password=${this.login.password}`)
                .then((response) => {
                    console.log(response)
                if ( response.data.error ) {
                    this.err.push('Tài khoản hoặc mật khẩu không đúng')
                    this.loading = false
                } else {
                let resUser = {
                    id: response.data.user.id,
                    cookie: response.data.cookie,
                    username: response.data.user.username,
                    email: response.data.user.email,
                    displayName: response.data.user.displayname
                }
                localStorage.setItem('checkUser', JSON.stringify(resUser))
               
                this.loading = false
            
                this.$router.push({path: '/single-info'})
                }
                }).catch((err) => {
                    console.log(err)
                })
            }
        },
        
   
        checkEmail() {

        }
    }
}
</script>
<style lang="scss">



.login-box {
    width: 400px;
    
    .logo-login {
        height: 60px;
        width: auto;
    }
    .form-control {
        background: none;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
    .btn-login {
        margin-top: 20px;
        background: #1b3c82;
    }
    .login-footer {
        a.reg {
            color: green;
        }
    }
    .br.text-center {
        border-bottom: 1px solid #ccc;
        margin-bottom: 20px;
        position: relative;
        span {
        display: inline-block;
        background: #fff;
        top: -10px;
        position: absolute;
        padding: 0 10px;
        left: 43%;
        }
    }
}
</style>