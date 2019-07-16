<template>
  <b-button block @click.prevent="loginByGoogle" variant="google"> <i class="fa fa-google-plus"></i> Google</b-button>
</template>

<script>

import firebase from '@/plugins/firebase'
const googleProvider = new firebase.auth.GoogleAuthProvider()
export default {
  methods: {
    loginByGoogle () {
      firebase.auth().signInWithPopup(googleProvider)
      .then(data => {
        console.log('ggg', data)
        let resUser = {
          id: 0,
          cookie: data.credential.accessToken,
          username: data.user.email,
          email: data.user.email,
          displayName: data.user.displayName
        }
        localStorage.setItem('checkUser', JSON.stringify(resUser))
        this.$router.push('/single-info')
      })
      .catch(err => {
          console.log('ggge', err)
          this.$router.push('/single-info')
      })
    },
  }
}
</script>

<style>

</style>
