<template>
    <div class="inner-page review-planing">
        <div class="inner-box review-planing-inner">
            <h3 class="text-uppercase text-center gr-title text-blue">Tên tour <br> {{tour.name}}</h3>
            <div class="underline text-center"><span></span></div>
            <div class="table-responsive">
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
        </div>
        <div class="review-planing-inner inner-box">
            <div class="padding">
            <h3 class="text-uppercase text-center gr-title text-blue">Câu hỏi truyền cảm hứng</h3>
            <div class="underline text-center"><span></span></div>
            <div class="question">
                <p> Điều gì truyền cảm hứng cho bạn khi lên kế hoạch chuyến đi này?</p>
            </div>
            <textarea name="" v-model="question" id="" cols="30" rows="10" class="form-control"></textarea>
            <div class="alert alert-warning" v-if="err.length > 0">
                <ul>
                    <li v-for="(msg, index) in err" :key="index" v-text="msg"></li>
                </ul>
            </div>
            <div class="text-center">
                <b-button variant="primary" v-if="loading" disabled>
                    <b-spinner variant="success" type="grow" label="Spinning"></b-spinner>Vui lòng chờ...
                </b-button>
                <button v-else type="submit" class="btn btn btn-login btn-warning" @click="save">Tiếp theo</button>
            </div>
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
            rows: [],
            question: '',
            err: [],
            loading: false
        }
    },
    mounted() {
        if (localStorage.getItem('tour')) {
            this.tour = JSON.parse(localStorage.getItem('tour'))
            this.tour.person = JSON.parse(localStorage.getItem('person'))
            this.tour.persons = JSON.parse(localStorage.getItem('persons'))
            this.tour.type = 2
            this.genTable()
        }
        
    },
    methods: {
        save () {
            let check = true
            this.err = []
            if (!this.question) {
                check = false
                this.err.push('Vui lòng trả lời câu hỏi truyền cảm hứng')
            }
            if (check) {
                this.loading = true
         
                this.$axios.post('http://localhost:5000/add_result', this.tour)
                .then(res => {
                    console.log(res)
                    this.tour.id = res.data.result
                    this.loading = false
                    localStorage.setItem('tour', JSON.stringify(this.tour))
                    this.$router.push('/final')
                })
                .catch(err => console.log(err))
                
            }
            
        },
        genTable () {
            let res = []
            let rows = []
            let total = []
            for (var key in this.tour.progress) {
                var days = this.tour.progress[key]
                let maxRow =0
                let totalact = 0
                let totaltrans =0 
                let totalfood = 0
                let totalacc = 0
                
                
                for (var key in days) {
                    var act = days[key]
                    let max = Math.max(act.activities.length, act.food.length, act.transport.length)
                    maxRow+= max
                    totalacc+=act.accommodation.price ? parseFloat(act.accommodation.price) : 0
                    for(let i = 0; i < max; i++) {
                        totalact+= act.activities[i] ? parseFloat(act.activities[i].activities.price) : 0
                        totaltrans+=act.transport[i] ? parseFloat(act.transport[i].price) : 0
                        totalfood+=act.food[i] ? parseFloat(act.food[i].price) : 0
                        
                        let cols = [
                         
                            {
                                val: act.activities[i] ? act.activities[i].start + ' - ' + act.activities[i].end : ''
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
                                val: (parseFloat(totalact) + parseFloat(totaltrans) + parseFloat(totalfood) + parseFloat(totalacc)).toFixed(2),
                                rowspan: max
                            })
                           
                        }
                        // cols.push({
                        //     val: ''
                        // })
                        rows.push(cols)
                    }
                }
                
                
                res.push(maxRow)
                total.push(parseFloat(totalact) + parseFloat(totaltrans) + parseFloat(totalfood) + parseFloat(totalacc))
            }
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
    .padding {
    @media screen and (min-width: 767px){
      padding:0 80px;
    }
    
  }
  textarea {
      margin-bottom: 20px;
  }
  table {
    thead {
        td {
            background: #41b6f2;
            color: #fff;
            
        }
    }
    td {
        text-align: center;
        vertical-align: middle !important;
    }
}
    width: 1170px;
    .text-blue {
        font-size: 24px;
        font-weight: bold;
        margin-top: 20px;
    }
    .question {
        font-size: 16px;
        font-weight: bold;
        text-align: center;
        border: 1px solid #ccc;
        margin-bottom: 20px;
        p {
        position: relative;
        color: #2d4197;
        display: inline-block;
        margin: 10px 0;
        @media screen and (max-width: 767px) {
        padding-left: 70px;
        padding-right: 10px;
      }
        &::before {
            left: -50px;
            content: '';
            background: url('/imgs/question.png');
            display: block;
            width: 55px;
            height: 55px;
            position: absolute;
            background-size: cover;
            background-size: cover;
            top: -15px;
            left: -60px;
            @media screen and (max-width: 767px) {
          left: 10px;
          top: 0px;
        }
        }
        }
    }
}
.underline {
    span {
      display: inline-block;
      width: 30px;
      height: 2px;
      background: #4e4e4e;
      margin-bottom: 25px;
    }
  }
  
</style>

