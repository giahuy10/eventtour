<template>
  <div class="upload-tour inner-page">
    <div class="upload-tour-inner inner-box">
        <h3 class="text-uppercase text-center gr-title">Dành cho lịch trình có sẵn</h3>
        <div class="form-group row">
          <label for="" class="col-sm-4 col-form-label text-right"><b>Tên tour của bạn</b></label>
          <div class="col-sm-8">
            <input type="text" class="form-control" v-model="tour.name" placeholder="Hãy đặt tên cho tour du lịch của bạn nhé!">
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-4 col-form-label text-right"><b>Link đăng tải lịch trình</b></label>
          <div class="col-sm-8">
            <input type="text" class="form-control" v-model="tour.link" placeholder="Hãy dán đường link đăng tải lịch trình của bạn vào đây nhé!">
          </div>
        </div>
        <div class="note">
          <p class="text-blue"><b><i>* Lưu ý</i></b></p>
          <p>
            - Bạn có thể đăng tải lịch trình dự thi lên Google Drive, Youtube, Dropbox,... <br>
            - Lịch trình dự thi đăng tải lên cần được đặt ở chế độ "Chỉ có người có đường link mới xem được file"
            - KTO không chịu trách nhiệm trong trường hợp chúng tôi không thể mở được file bài thi của bạn
          </p>
        </div>
        <div class="text-center">
            <button type="submit" class="btn btn btn-login btn-warning" @click="save">Nộp bài</button>
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
      }
    }
  },
  methods: {
    save () {
      localStorage.setItem('tour-upload', JSON.stringify(this.tour))
      this.$router.push('/review-tour-upload')
    }
  }
}
</script>

<style lang="scss">
.upload-tour-inner {
  width: 800px;
}
</style>

