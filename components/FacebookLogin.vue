<template>
  <b-button block @click.prevent="loginByFacebook" variant="facebook"> <i class="fa fa-facebook"></i> Facebook</b-button>
</template>

<script>
import firebase from '@/plugins/firebase'
const facebookProvider = new firebase.auth.FacebookAuthProvider()
export default {
  methods: {
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
        this.$router.push('/single-info')
      })
      .catch(err => {
        console.log(err)
          this.$router.push('/single-info')
      })
    },
  }
}
</script>

<style>

</style>
