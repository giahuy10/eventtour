<template>
    <div>
        <div class="container">
            <h3>Thông tin người chơi</h3>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Họ tên</th>
                            <th>Tuổi</th>
                            <th>Giới tính</th>
                            <th>Số điện thoại</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-if="tour.person">
                            <td>{{tour.person.fullName}}</td>
                            <td>{{tour.person.age}}</td>
                            <td>{{tour.person.sex == 1 ? "Nam" : "Nữ"}}</td>
                            <td>{{tour.person.phoneNumber}}</td>
                            <td>{{tour.person.email}}</td>
                        </tr>
                        <tr v-if="tour.persons && tour.persons.length > 0 && tour.persons[0].fullName">
                            <td>{{tour.persons[0].fullName}}</td>
                            <td>{{tour.persons[0].age}}</td>
                            <td>{{tour.persons[0].sex == 1 ? "Nam" : "Nữ"}}</td>
                            <td>{{tour.persons[0].phoneNumber}}</td>
                            <td>{{tour.persons[0].email}}</td>
                        </tr>
                        <tr v-if="tour.persons && tour.persons.length > 0 && tour.persons[1].fullName">
                            <td>{{tour.persons[1].fullName}}</td>
                            <td>{{tour.persons[1].age}}</td>
                            <td>{{tour.persons[1].sex == 1 ? "Nam" : "Nữ"}}</td>
                            <td>{{tour.persons[1].phoneNumber}}</td>
                            <td>{{tour.persons[1].email}}</td>
                        </tr>
                    </tbody>
                </table>
            <h3>Thông tin bài thi</h3>
            <div v-if="tour.type == 1">
                <!-- Add link -->
                <table class="table">
                    <tr>
                        <td><b>Tên tour</b></td>
                        <td v-text="tour.name"></td>
                    </tr>
                    <tr>
                        <td><b>Link bài thi</b></td>
                        <td >
                            <a :href="tour.link" target="_blank" v-text="tour.link"></a>
                        </td>
                    </tr>
                    <tr>
                        <td><b>Câu hỏi truyền cảm hứng</b></td>
                        <td v-text="tour.question"></td>
                    </tr>
                </table>
                
            </div>
            <div v-else>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <td>Ngày</td>
                            <td>Thành phố</td>
                            <td>Thời gian</td>
                            <td>Hoạt động</td>
                            <td>Chi phí hoạt động</td>
                            <td>Phương tiện di chuyển</td>
                            <td>Chi phí di chuyển</td>
                            <td>Ẩm thực</td>
                            <td>Chi phí ăn uống</td>
                            <td>Nơi ở</td>
                            <td>Chi phí nơi ở</td>
                            <td>Tổng chi phí</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(cols, index) in rows" :key="index">
                            <td :class="col.class" :colspan="col.colspan" :rowspan="col.rowspan" v-for="(col, index) in cols" :key="index">{{col.val}}</td>
                        </tr>
                    </tbody>
                </table>
                <h4>Câu hỏi truyền cảm hứng</h4>
                <div v-html="tour.question"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    layout: 'admin',
    data () {
        return {
            tour: {},
            rows: []
        };
    },

    mounted () {
        let tourId = this.$route.query.id;
        let url = 'https://ktoevents.mokara.com.vn/get_result?id=' + tourId;
        this.$axios.get(url).then( res => {
            console.log(res)
            this.tour = res.data
            this.genNewTable ()
        });
    },
    methods: {
        genNewTable () {
            let res = []
            let rows = []
            let total = []
            let totalFinal = 0
            
            for (var keyt in this.tour.progress) {
                var days = this.tour.progress[keyt]
                let maxRow =0
                let totalact = 0
                let totaltrans =0 
                let totalfood = 0
                let totalacc = 0
                var result = Object.keys(days).map(function(key) {
                    return days[key];
                    });
                result.sort((a,b) => (a.ordering > b.ordering) ? 1 : ((b.ordering > a.ordering) ? -1 : 0));
                result.forEach(act => {
                //for (var key in days) {
                   // var act = days[key]
           
                    let max = Math.max(act.activities.length, act.food.length, act.transport.length)
                    maxRow+= max
                    act.activities.sort((a,b) => (a.start > b.start) ? 1 : ((b.start > a.start) ? -1 : 0)); 

                    totalacc+=act.accommodation.hasOwnProperty('price') && act.accommodation.price? parseFloat(act.accommodation.price) : 0
                    for(let i = 0; i < max; i++) {
                        totalact+= act.activities[i] && act.activities[i].activities.price ? parseFloat(act.activities[i].activities.price) : 0
                        totaltrans+=act.transport[i] && act.transport[i].price ? parseFloat(act.transport[i].price) : 0
                        totalfood+=act.food.length > 0 && act.food[i] && act.food[i].price? parseFloat(act.food[i].price) : 0
                        
                        let cols = [
                         
                            {
                                val: act.activities[i] ? act.activities[i].start +' - '+act.activities[i].end : '',
                                type: 'time'
                            },
                            {
                                val: act.activities[i] ? act.activities[i].activities.name: '',
                                type: 'act',
                                key: i,
                                day: keyt,
                                city: act.city.id, 
                                id: act.activities[i] ? act.activities[i].activities.id : 0,
                                start: act.activities[i] ? act.activities[i].start : '',
                                end: act.activities[i] ? act.activities[i].end: ''

                            },
                            {
                                val: act.activities[i] ? act.activities[i].activities.price : ''
                            },
                            {
                                val: act.transport[i] ? act.transport[i].name : '',
                                type: 'trans',
                                key: i,
                                day: keyt,
                                city: act.city.id,
                            },
                            {
                                val: act.transport[i] ? act.transport[i].price : ''
                            },
                            {
                                val: act.food[i] ? act.food[i].name : '',
                                type: 'food',
                                key: i,
                                day: keyt,
                                city: act.city.id,
                            },
                            {
                                val: act.food[i] ? act.food[i].price : ''
                            }
                        ]
                        if (i == 0) {
                            cols.unshift({
                                val: act.city.name,
                                rowspan: max 
                            })
                            cols.push({
                                val: act.accommodation ? act.accommodation.name : '',
                                rowspan: max
                            })
                            cols.push({
                                val: act.accommodation ? act.accommodation.price : '',
                                rowspan: max
                            })
                            
                        }
                        // cols.push({
                        //     val: ''
                        // })
                        rows.push(cols)
                    }
                //}
                })
                rows.push([
                    { val: 'Tổng', class: 'bolder' },
                    { val: ''},
                    { val: ''},
                    { val: totalact.toFixed(2), class: 'bolder'},
                    { val: ''},
                    { val: totaltrans.toFixed(2), class: 'bolder'},
                    { val: ''},
                    { val: totalfood.toFixed(2), class: 'bolder'},
                    { val: ''},
                    { val: totalacc.toFixed(2), class: 'bolder'},
                    //{ val: ''}
                ])
                
                res.push(maxRow)
                total.push((parseFloat(totalact) + parseFloat(totaltrans) + parseFloat(totalfood) + parseFloat(totalacc)).toFixed(2))
                totalFinal += parseFloat(parseFloat(totalact) + parseFloat(totaltrans) + parseFloat(totalfood) + parseFloat(totalacc))
            }
           
            let day = [0]
            for(let i = 0; i < res.length; i++) {
                if (i == 0 ) {
                    day.push(day[0] + res[i] + 1 )
                } 
                if (i > 0 && i < res.length - 1) {
                    day.push(day[i] + res[i] + 1)
                }
                
            }
            for( let i = 0; i < day.length; i++) {
                if (rows[day[i]]) {
                    rows[day[i]].unshift({
                        val: i+1,
                        rowspan: res[i] + 1,
                        class: 'bolder'
                    })
                    rows[day[i]].push({
                        val: total[i],
                        rowspan: res[i] + 1,
                        class: 'bolder'
                    })
                }
                
            }
            rows.push([
                {val: 'Tổng', colspan: 11, class:'bold'},{class:'bold', val: totalFinal.toFixed(2)}
            ])
            this.rows = rows
       
        },
    }


}
</script>

<style lang="scss">
.container {
    width: 90%;
    max-width: 90%;
}
</style>
