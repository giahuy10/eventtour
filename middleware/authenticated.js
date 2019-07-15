import axios from 'axios';
const Cookie = process.client ? require('js-cookie') : undefined
export default function ({ store, redirect }) {
    // If the user is not authenticated
    if (!store.state.auth) {
        return redirect('/')
    }
    axios.get(`https://www.visitkorea.org.vn/api/user/validate_auth_cookie/?cookie=` + store.state.auth.accessToken)
        .then(function (res) {
            console.log(res);
            if (!res.data.valid) {
                console.log(store.state);
                Cookie.remove('auth');
                store.commit('setAuth', null);
                return redirect('/');
            }
        })
        .catch(function () {

        });
    // console.log(store.state.auth.accessToken);
}