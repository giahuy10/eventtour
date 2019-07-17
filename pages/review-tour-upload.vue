<template>
  <div class="inner-page review-tour-upload">
    <div class="review-tour-inner inner-box">
      <h3 class="text-uppercase text-center gr-title text-blue">Tên tour <br> {{tour.name}}</h3>
      <div class="underline"><span></span></div>
      <div class="text-center review-mail">
        <a :href="tour.link" target="_blank">
        <img src="/imgs/review-mail.png" alt="">
        </a>
      </div>
      <div class="url">
        <input type="text" class="form-control" v-model="tour.link">
      </div>
    </div>
    <div class="review-tour-inner inner-box">
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
      question: '',
      loading: false
    }
  },
  mounted () {
    if (localStorage.getItem('tour-upload')) {
      this.tour = JSON.parse(localStorage.getItem('tour-upload'))
    } else {
      this.$router.push('/upload-tour')
    }
  },
  methods: {
    save () {
      this.loading = true
      localStorage.setItem('tour-upload', JSON.stringify(this.tour))
      localStorage.setItem('tour-upload-question', JSON.stringify(this.question))
      this.$router.push('/final')
    }
  }

}
</script>
<style lang="scss">
.review-tour-inner {
  width: 700px;
  h3 {
    font-size: 24px;
  }
}
</style>
