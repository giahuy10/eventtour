<template>
    <div>
        <b-navbar toggleable="lg" class="navbar-fixed-top">
            <div class="container">
            <b-navbar-brand href="/">
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
            </b-navbar-nav>
            </b-collapse>
            </div>
        </b-navbar>
        </div>
</template>
<script>
export default {
    methods: {
        logout() {
            // Code will also be required to invalidate the JWT Cookie on external API
            localStorage.clear()
            this.$router.push('/');
        }
    }
}
</script>