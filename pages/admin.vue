<template>
    <div class="list-user">
        <div class="container">
            <h3>Danh sách người chơi ({{results.length}})</h3>
            <download-excel v-if="loaded" class="cursor"
                :data   = "results" :fields = "json_fields">
                <i class="fa fa-download" aria-hidden="true"></i> Download Data
            </download-excel>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên tour</th>
                        <th>Loại</th>
                        <th>Tên người chơi</th>
                        <th>Email</th>
                        <th>SDT</th>
                        <td>GIFTCODE</td>
                        <th>Thời gian</th>
                        <th>Chi tiết</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in results" :key="index">
                        <td>{{index + 1}}</td>
                        <td v-text="item.name"></td>
                        <td>{{item.type == 1 ? 'Gửi link' : 'Chọn lịch trình'}}</td>
                        <td v-text="item.person.fullName"></td>
                        <td v-text="item.person.email"></td>
                        <td v-text="item.person.phoneNumber"></td>
                        <td v-text="item.code"></td>
                        <td>{{item.date ? item.date.$date : '' | moment('timezone', 'Etc/UTC','dddd, MMMM Do YYYY, h:mm:ss a')}} {{item.date.$date}}</td>
                        <td>
                            <a :href="'/tao-tour-tu-tuc-hanh-phuc-di-han/user?id='+item._id.$oid" class="btn btn-success" target="_blank" >Xem</a>
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
            loaded: false,
            type: 0,
            json_fields: {
                'Tên tour': 'name',
                'Loại': {
                    field: 'type',
                    callback: (value) => {
                        return value == 1 ? 'Gửi link' : 'Chọn lịch trình';
                    }
                },
                'Tên người chơi': 'person.fullName',
                'Email': 'person.email',
                'SDT': 'person.phoneNumber',
                'GIFTCODE': 'code',
                'Thời gian': {
                    field: 'date',
                    callback: (value) => {
                        var now = new Date(value.$date)
                        var year    = now.getFullYear();
                        var month   = now.getMonth()+1; 
                        var day     = now.getDate();
                        var hour    = now.getHours();
                        var minute  = now.getMinutes();
                        var second  = now.getSeconds(); 
                        if(month.toString().length == 1) {
                            month = '0'+month;
                        }
                        if(day.toString().length == 1) {
                            day = '0'+day;
                        }   
                        if(hour.toString().length == 1) {
                            hour = '0'+hour;
                        }
                        if(minute.toString().length == 1) {
                            minute = '0'+minute;
                        }
                        if(second.toString().length == 1) {
                            second = '0'+second;
                        }   
                        var dateTime = day+'/'+month+'/'+year+' '+hour+':'+minute+':'+second;   
                        return dateTime;
                    }
                }
            },
            json_meta: [
                [
                    {
                        'key': 'charset',
                        'value': 'utf-8'
                    }
                ]
            ],
        }
    },
    mounted (){
        this.$axios.get('https://ktoevents.mokara.com.vn/get_results?type='+this.type)
            .then(res => {
                this.results = res.data
                this.loaded = true
                console.log(res)
            })
    }

}
</script>

<style>

</style>
