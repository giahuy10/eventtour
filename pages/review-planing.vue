<template>
    <div class="inner-page review-planing">
        <div class="inner-box review-planing-inner">
            <h3 class="text-uppercase text-center gr-title text-blue">Tên tour <br> {{tour.name}}</h3>
             <table class="table table-bordered">
                    <thead>
                        <tr>
                            <td>Ngày</td>
                            <td>Thành phố</td>
                            <td>Thời gian</td>
                            <td>Hoạt động</td>
                            
                            <td>Phương tiện di chuyển</td>
                          
                            <td>Ẩm thực</td>
                           
                            <td>Nơi ở</td>
                           
                            <td>Tổng chi phí</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(cols, index) in rows" :key="index">
                            <td :class="col.class" :rowspan="col.rowspan" v-for="(col, index) in cols" :key="index">{{col.val}}</td>
                        </tr>
                    </tbody>
                </table>
        </div>
        <div class="review-planing-inner inner-box">
            <h3 class="text-uppercase text-center gr-title text-blue">Câu hỏi truyền cảm hứng</h3>
            <div class="underline"><span></span></div>
            <div class="question">Điều gì truyền cảm hứng cho bạn khi lên kế hoạch chuyến đi này?</div>
            <textarea name="" v-model="question" id="" cols="30" rows="10" class="form-control"></textarea>
            <div class="text-center">
                <b-button variant="primary" v-if="loading" disabled>
                    <b-spinner variant="success" type="grow" label="Spinning"></b-spinner>Vui lòng chờ...
                </b-button>
                <button v-else type="submit" class="btn btn btn-login btn-warning" @click="save">Tiếp theo</button>
            </div>
        </div>
        <img src="/imgs/footter.png" alt="">
    </div>
</template>

<script>
export default {
    data () {
        return {
            tour: {},
            rows: []
        }
    },
    mounted() {
        this.tour = JSON.parse(localStorage.getItem('tour'))
        // console.log(this.testData)
        this.genTable()
    },
    methods: {
        save () {
            this.$router.push('/final')
        },
        genTable () {
            let res = []
            let rows = []
            let total = []
            this.tour.plans.forEach((day, indexday) => {
                let maxRow =0
                let totalact = 0
                let totaltrans =0 
                let totalfood = 0
                let totalacc = 0
                
                
                day.forEach((act, index) => {
                    let max = Math.max(act.activities.length, act.food.length, act.transport.length)
                    maxRow+= max
                    totalacc+=act.accommodation.price ? parseFloat(act.accommodation.price) : 0
                    for(let i = 0; i < max; i++) {
                        totalact+= act.activities[i] ? parseFloat(act.activities[i].activities.price) : 0
                        totaltrans+=act.transport[i] ? parseFloat(act.transport[i].price) : 0
                        totalfood+=act.food[i] ? parseFloat(act.food[i].price) : 0
                        
                        let cols = [
                         
                            {
                                val: act.activities[i] ? act.activities[i].start : ''
                            },
                            {
                                val: act.activities[i] ? act.activities[i].activities.name: ''
                            },
                            
                            {
                                val: act.transport[i] ? act.transport[i].name : ''
                            },
                            
                            {
                                val: act.food[i] ? act.food[i].name : ''
                            },
                            
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
                                val: parseFloat(totalact) + parseFloat(totaltrans) + parseFloat(totalfood) + parseFloat(totalacc),
                                rowspan: max
                            })
                           
                        }
                        // cols.push({
                        //     val: ''
                        // })
                        rows.push(cols)
                    }
                })
                
                
                res.push(maxRow)
                total.push(parseFloat(totalact) + parseFloat(totaltrans) + parseFloat(totalfood) + parseFloat(totalacc))
            })
            console.log(rows)
            console.log(res)
            console.log(total)
            let day = [0]
            for(let i = 0; i < res.length; i++) {
                if (i == 0 ) {
                    day.push(day[0] + res[i]  )
                } 
                if (i > 0 && i < res.length - 1) {
                    day.push(day[i] + res[i] )
                }
                
            }
            console.log(day)
            for( let i = 0; i < day.length; i++) {
                if (rows[day[i]]) {
                    rows[day[i]].unshift({
                        val: i+1,
                        rowspan: res[i] ,
                        class: 'bolder'
                    })
                  
                }
                
            }
            
            this.rows = rows
        },
    }
}
</script>

<style lang="scss">
.review-planing-inner {
    width: 1170px;
}
</style>

