<template>
  <div>
    <b-button block @click.prevent="login" variant="facebook" class="d-none d-sm-block"> <i class="fa fa-facebook"></i> Facebook</b-button>
    <b-button block @click.prevent="login" variant="facebook" class="d-block d-sm-none"> <i class="fa fa-facebook"></i> Facebook</b-button>
  </div>
  
</template>

<script>
import firebase from '@/plugins/firebase'
const facebookProvider = new firebase.auth.FacebookAuthProvider()
export default {
  methods: {
    login() {
        this.$auth.loginWith('facebook')
            .then(res => console.log(res))
            .catch(err => console.log(err)) 
    },
    loginByFacebook () {
      firebase.auth().signInWithPopup(facebookProvider)
      .then(data => {
        console.log(data)
        let resUser = {
          id: 0,
          cookie: data.credential.accessToken,
          username: data.user.email,
          email: data.additionalUserInfo.profile.email,
          displayName: data.user.displayName
        }
        localStorage.setItem('checkUser', JSON.stringify(resUser))
        this.$router.push({name : 'single-info'})
      })
      .catch(err => {
        console.log(err)
          this.$router.push({name : 'single-info'})
      })
    },
    loginByFacebookMobile () {
      firebase.auth().signInWithPopup(facebookProvider)
      .then(data => {
        console.log(data)
        let resUser = {
          id: 0,
          cookie: data.credential.accessToken,
          username: data.user.email,
          email: data.additionalUserInfo.profile.email,
          displayName: data.user.displayName
        }
        localStorage.setItem('checkUser', JSON.stringify(resUser))
        this.$router.push({name : 'single-info'})
      })
      .catch(err => {
        console.log(err)
          this.$router.push({name : 'single-info'})
      })
    },
  }
}
</script>

<style>

</style>
