<template>
    <div>
        <button class="btn btn-success" @click="login">Login Face</button>
        <button class="btn btn-success" @click="loginG">Login Google</button>
    </div>
</template>

<script>
export default {
    layout: 'admin',
    
    methods : {
        login() {
            this.$auth.loginWith('facebook')
                .then(res => console.log(res))
                .catch(err => console.log(err)) 
        },
        loginG () {
            this.$auth.loginWith('google')
                .then(res => console.log(res))
                .catch(err => console.log(err))
        }

    }
}
</script>

<style>

</style>
