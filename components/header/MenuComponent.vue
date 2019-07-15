<template>
    <div>
        <b-navbar toggleable="lg" class="navbar-fixed-top">
            <div class="container">
            <b-navbar-brand href="#">
                <img src="/imgs/logo.png" alt="">
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <!-- <b-navbar-nav>
                <b-nav-item href="#">Link</b-nav-item>
                <b-nav-item href="#" disabled>Disabled</b-nav-item>
            </b-navbar-nav> -->

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-item href="#introduce">Giới thiệu</b-nav-item>
                <b-nav-item href="#introduce2">Giải thưởng</b-nav-item>
                <b-nav-item href="#introduce4">Thể lệ</b-nav-item>

                <b-nav-item-dropdown v-if="getAuth" v-bind:text="getUserName" right icon>
                    <b-dropdown-item href="#" v-on:click="logout()">logout</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
            </b-collapse>
            </div>
        </b-navbar>
        </div>
</template>
<script>
const Cookie = process.client ? require('js-cookie') : undefined
export default {

    computed: {
        getAuth () {
            return this.$store.state.auth
        },
        getUserName () {
            let name = this.$store.state.auth.accessToken.split("|")[0];
            return name;
        }
    },
    methods: {
        logout() {
            // Code will also be required to invalidate the JWT Cookie on external API
            Cookie.remove('auth')
            this.$store.commit('setAuth', null);
            this.$router.push('/');
        }
    }
}
</script>