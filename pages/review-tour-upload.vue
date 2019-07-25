<template>
  <div class="inner-page review-tour-upload">
    <div class="review-tour-inner inner-box">
      <div class="padding">

      
      <h3 class="text-uppercase text-center heading-page">Tên tour <br> {{tour.name}}</h3>
      <div class="underline text-center"><span></span></div>
      <div class="text-center review-mail">
        <a :href="tour.link" target="_blank">
        <img src="/tao-tour-tu-tuc-hanh-phuc-di-han/imgs/review-mail.png" alt="">
        </a>
      </div>
      <div class="url">
        <input type="text" class="form-control" v-model="tour.link">
      </div>
      </div>
    </div>
    <div class="review-tour-inner inner-box">
      <div class="padding">
        <h3 class="text-uppercase text-center heading-page">Câu hỏi truyền cảm hứng</h3>
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
          <button v-else type="submit" class="btn btn-save" @click="save">Nộp bài</button>
        </div>
      </div>
    </div>
    <img src="/tao-tour-tu-tuc-hanh-phuc-di-han/imgs/footter.png" alt="">
  </div>
</template>

<script>
export default {
  data () {
    return {
      tour: {},
      question: '',
      loading: false,
      err: []
    }
  },
  mounted () {
    if (localStorage.getItem('tour-upload')) {
      this.tour = JSON.parse(localStorage.getItem('tour-upload'))
      this.tour.person = JSON.parse(localStorage.getItem('person'))
      this.tour.persons = JSON.parse(localStorage.getItem('persons'))
      this.tour.type = 1
    } else {
      
      this.$router.push({name : 'upload-tour'})
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
      if (!this.tour.link) {
        check = false
        this.err.push('Vui lòng dán link lịch trình của chuyến đi')
      }
      if (check) {
        this.loading = true
        this.tour.question = this.question
        
        console.log('tour', this.tour)
        this.$axios.post('https://ktoevents.mokara.com.vn/add_result', this.tour)
          .then(res => {
            console.log(res)
            this.tour.id = res.data.result
            localStorage.setItem('tour', JSON.stringify(this.tour))
            this.$router.push({name : 'final'})
          })
          .catch(err => console.log(err))
        
      }
    }
  }

}
</script>
<style lang="scss">
.review-tour-inner {
  textarea {
    margin-bottom: 20px;
  }
  .btn-save {
    background: #41b6f2;
    color: #fff;
    font-weight: bold;
    font-size: 18px;
    margin: 20px 0 25px;
    text-transform: uppercase;
    border-radius: 0;
  }
  width: 910px;
  margin-bottom: 20px;
  .padding {
    @media screen and (min-width: 767px){
      padding:0 80px;
    }
    
  }
  .heading-page {
    font-size: 24px;
    padding-top: 25px;
    margin-bottom: 20px;
  }
  .url {
    input {
      border-radius: 20px;
      font-size: 20px;
      text-indent: 40px;
      background-image: url('/tao-tour-tu-tuc-hanh-phuc-di-han/imgs/pencil.png');
      background-repeat: no-repeat;
      background-position: right center;
          padding-right: 50px;
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
  .review-mail {
    margin-bottom: 35px;
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
        background: url('/tao-tour-tu-tuc-hanh-phuc-di-han/imgs/question.png');
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
</style>
