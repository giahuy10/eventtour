<template>
    <div>
        <div class="container">
            <h1>{{ user.userName }}</h1>
            <p>{{ user.Age }}</p>
            <p>{{ user.userSalary }}</p>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    
    data: function () {
        return {
            user: {
                userName: null,
                userAge: null,
                userSalary: null
            }
        };
    },


    created() {
        this.getUserInfos();
    },


    methods: {
        getUserInfos: function () {
            let t = this;
            let userID = this.$route.params.id;
            let url = 'http://dummy.restapiexample.com/api/v1/employee/' + userID;
            axios.get(url).then(function (res) {
                t.user.userName = res.data.employee_name;
                t.user.userAge = res.data.employee_age;
                t.user.userSalary = res.data.employee_salary;
                // console.log(res.data);
            });
        }
    },
}
</script>