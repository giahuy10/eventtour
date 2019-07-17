<template>
  <div class="final inner-page ">
    <div class="inner-box final-inner">
      <h3 class="text-center">Share link sự kiện trên Facebook</h3>
      <div class="text-center cursor">
        <input type="text" readonly v-model="linkFacebook" class="form-control">
        <img style="width: 200px;" src="https://i.pinimg.com/originals/23/b7/d0/23b7d045f7cdf8fc7271a588afd6565e.png" alt="">
      </div>
      <div class="gift-code">
        <p><b>* Phần dành cho khách hàng có mã Gift code</b></p>
        <div class="form-group row">
          <label for="" class="col-sm-6 col-form-label">Điền thông tin Giftcode</label>
          <div class="col-sm-6">
            <input type="text" class="form-control" v-model="giftcode.code">
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-6 col-form-label">Số điện thoại mong muốn nhận quà</label>
          <div class="col-sm-6">
            <input type="text" class="form-control" v-model="giftcode.phone">
          </div>
        </div>
        <button class="btn btn-success" @click="checkGiftCode">Nhận quà</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      linkFacebook: 'https://facebook.com',
      giftcode: {
        code: '',
        phone: ''
      }
    }
  },
  mounted () {
    console.log(JSON.parse(localStorage.getItem('tour')))
  },
  methods: {
    checkGiftCode () {
      
    }
  }
}
</script>

<style lang="scss">
.final-inner {
  width: 700px;
}
</style>

