<template>
  <div class="upload-tour inner-page">
    <div class="upload-tour-inner inner-box">
        <h3 class="text-uppercase text-center heading-page">Dành cho lịch trình có sẵn</h3>
        <div class="form-group row">
          <label for="" class="col-sm-4 col-form-label text-right"><b>Tên tour của bạn</b></label>
          <div class="col-sm-8">
            <input type="text" @keypress="err = []" class="form-control" v-model="tour.name" placeholder="Hãy đặt tên cho tour du lịch của bạn nhé!">
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-4 col-form-label text-right"><b>Link đăng tải lịch trình</b></label>
          <div class="col-sm-8">
            <input type="text" @keypress="err = []" class="form-control" v-model="tour.link" placeholder="Hãy dán đường link đăng tải lịch trình của bạn vào đây nhé!">
          </div>
        </div>
        <div class="note">
          <p class="text-blue"><b><i>* Lưu ý</i></b></p>
          <p>
            <ul>
              <li>Bạn có thể đăng tải lịch trình dự thi lên Google Drive, Youtube, Dropbox,...</li>
              <li>Lịch trình dự thi đăng tải lên cần được đặt ở chế độ "Chỉ có người có đường link mới xem được file"</li>
              <li>KTO không chịu trách nhiệm trong trường hợp chúng tôi không thể mở được file bài thi của bạn</li>
            </ul>
        
          </p>
        </div>
        <div class="alert alert-warning" v-if="err.length > 0">
          <ul>
            <li v-for="(msg, index) in err" :key="index" v-text="msg"></li>
          </ul>
        </div>
        <div class="text-center">
            <button type="submit" class="btn btn-submit" @click="save">Nộp bài</button>
        </div>
    </div>
    <img src="/imgs/footter.png" alt="">
  </div>
</template>

<script>
export default {
  data () {
    return {
      tour: {
        name: '',
        link: ''
      },
      err: []
    }
  },
  methods: {
    save () {
      let check = true
      this.err = []
      if (!this.tour.name) {
        check = false
        this.err.push('Vui lòng nhập tên của chuyến đi')
      }
      if (!this.tour.link) {
        check = false
        this.err.push('Vui lòng dán link lịch trình của chuyến đi')
      }

      if (check) {
        localStorage.setItem('tour-upload', JSON.stringify(this.tour))
        this.$router.push('/review-tour-upload')
      } 
      
    }
  }
}
</script>

<style lang="scss">
.upload-tour-inner {
  width: 910px;
  @media screen and (min-width: 768px) {
    padding: 20px 100px !important;
    
  }
  
  .btn-submit {
    padding: 20px 100px;;
    margin-bottom: 45px;
    background: #ffa50d;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
  }
  @media screen and (max-width: 767px) {
    .col-form-label {
      text-align: center !important;
    }
  }
}
.note {
  font-size: 18px;
  p {
    color: #4e4e4e;
  }
  ul {
    padding-left: 80px;
  }
}
</style>

