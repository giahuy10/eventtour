<template>
    <div class="list-user">
        <div class="container">
            <h3>Danh sách người chơi</h3>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Tên tour</th>
                        <th>Loại</th>
                        <th>Tên người chơi</th>
                        <th>Email</th>
                        <th>Sđt</th>
                        <th>Thời gian</th>
                        <th>Chi tiết</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in results" :key="index">
                        <td v-text="item.name"></td>
                        <td>{{item.type == 1 ? 'Gửi link' : 'Chọn lịch trình'}}</td>
                        <td v-text="item.person.fullName"></td>
                        <td v-text="item.person.email"></td>
                        <td v-text="item.person.phoneNumber"></td>
                        <td>{{item.date ? item.date.$date : '' | moment("dddd, MMMM Do YYYY, h:mm:ss a")}}</td>
                        <td>
                            <a :href="'/user/'+item._id.$oid" class="btn btn-success" target="_blank" >Xem</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        
    </div>
    
</template>

<script>
export default {
    layout: 'admin',
    data () {
        return {
            results: [],
            type: 0
        }
    },
    mounted (){
        this.$axios.get('http://localhost:5000/get_results?type='+this.type)
            .then(res => {
                this.results = res.data
                console.log(res)
            })
    }

}
</script>

<style>

</style>
