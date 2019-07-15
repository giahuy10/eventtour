<template>
    <div class="login">
        
        <div class="login-box">
            <div class="text-center">
                <img class="logo-login" src="/imgs/logo.png" alt="">
                <hr>
                <h3>ĐĂNG NHẬP</h3>
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
                    <b-button block @click.prevent="loginByFacebook" variant="facebook"> <i class="fa fa-facebook"></i> Facebook</b-button>
                </div>
                <div class="col-12 col-md-6">
                    <b-button block @click.prevent="loginByGoogle" variant="google"> <i class="fa fa-google-plus"></i> Google</b-button>
                </div>
            </div>
            <div class="form-group">
                <a  href="#" class="btn btn-block btn-login" @click.prevent="postLogin"> 
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
const googleProvider = new firebase.auth.GoogleAuthProvider()
const facebookProvider = new firebase.auth.FacebookAuthProvider()
export default {
    // middleware: 'notAuthenticated',
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
        loginByFacebook () {
            firebase.auth().signInWithPopup(facebookProvider)
            .then(data => {
                console.log('face', data)
                this.checkEmail(data.user, 'facebook')
            })
            .catch(err => {
                console.log('facee', err)
                firebase.auth().signInWithCredential(err.credential)
                    .then(res => console.log(res))
                firebase.auth().fetchSignInMethodsForEmail(err.email)
                    .then(providers => {
                        console.log(providers)
                    })

            })
        },
        loginByGoogle () {
            firebase.auth().signInWithPopup(googleProvider)
            .then(data => {
                console.log('ggg', data)
                this.checkEmail(data.user, 'google')
            })
            .catch(err => {
                console.log('ggge', err)
                this.checkEmail ({email: err.email}, 'google')
            })
        },
        checkEmail() {

        }
    }
}
</script>
<style lang="scss">

.btn-google {
  background: #dd4b39;
  color:#fff;
}
.btn-facebook {
  background: #3b5998;
  color:#fff;
}
.login {
    background: url('/imgs/clouds.png') no-repeat;
    padding-top: 170px;
}
.login-box {
    width: 400px;
    max-width: 100%;
    margin: 0 auto;
    box-shadow: 0 0 2px 2px #f3f3f3;
    padding: 20px;
    background: #fff;
    margin-bottom: 10px;
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