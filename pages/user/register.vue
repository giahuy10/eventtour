<template>
    <div class="register">
        <div v-if="err.length > 0">
            <div class="alert alert-warning">
                <ul>
                <li v-for="(text, i) in err" :key="i" v-text="text"></li>
                </ul>
            </div>
            </div>
            
            <div class="form-group register-group">
                <input type="text" v-on:keyup.enter="$event.target.nextElementSibling.focus()" v-model="regiser.username" placeholder="Tên đăng nhập" class="form-control">

                <input type="password" v-on:keyup.enter="$event.target.nextElementSibling.focus()" v-model="regiser.password" placeholder="Mật khẩu" class="visible-xs form-control">

                <input type="text" v-on:keyup.enter="$event.target.nextElementSibling.focus()" v-model="regiser.displayName" placeholder="Họ tên" class="form-control">
            
                <input type="password" id="confirm-password" v-on:keyup.enter="$event.target.nextElementSibling.focus()" v-model="regiser.confirmPassword" placeholder="Xác nhận mật khẩu" class="form-control visible-xs ">

                <input type="email" v-on:keyup.enter="$event.target.nextElementSibling.focus()" v-model="regiser.email" placeholder="Email" class="form-control">
            
                <input type="password" v-on:keyup.enter="$event.target.nextElementSibling.focus()" v-model="regiser.password" placeholder="Mật khẩu" class="form-control hidden-xs">
            
                <input type="password" id="confirm-password" v-on:keyup.enter="$event.target.nextElementSibling.focus()" v-model="regiser.confirmPassword" placeholder="Xác nhận mật khẩu" class="form-control hidden-xs">
            </div>
            <div class="form-group">
            
                <a  href="#" class="btn btn-block btn-login" @click.prevent="handleRegister">
                    <div class="lds-facebook" v-if="loading"><div></div><div></div><div></div>
                    </div>
                    <div v-else>Đăng ký</div>
                
                </a>
            </div>
    </div>
</template>
