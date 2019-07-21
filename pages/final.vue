<template>
  <div class="final inner-page ">
    <div class="inner-box final-inner">
      <h3 class="text-center">Share link sự kiện trên Facebook</h3>
      <div class="text-center cursor">
        <input type="text" readonly v-model="linkFacebook" class="form-control share-post">
        <img style="width: 200px;" src="https://i.pinimg.com/originals/23/b7/d0/23b7d045f7cdf8fc7271a588afd6565e.png" alt="">
      </div>
      <div class="gift-code">
        <p><b>* Phần dành cho khách hàng có mã Gift code</b></p>
        <div class="form-group row">
          <label for="" class="col-sm-6">Điền thông tin Giftcode</label>
          <div class="col-sm-6">
            <input type="text" class="form-control" v-model="giftcode.code">
          </div>
        </div>
        <div class="form-group row">
          <label for="" class="col-sm-6 ">Số điện thoại mong muốn nhận quà</label>
          <div class="col-sm-6">
            <input type="text" class="form-control" v-model="giftcode.phone">
          </div>
        </div>
        <b-button variant="primary" v-if="loading" disabled>
            <b-spinner variant="success" type="grow" label="Spinning"></b-spinner>Vui lòng chờ...
        </b-button>
        <button v-else class="btn btn-primary" @click="checkGiftCode">Nhận quà</button>
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
      },
      err: [],
      loading: false,
      tour:{}
    }
  },
  mounted () {
    if (localStorage.getItem('tour')) {
      this.tour = JSON.parse(localStorage.getItem('tour'))
    }

  },
  methods: {
    checkGiftCode () {
      this.err = []
      let check = true
      if (!this.giftcode.code) {
        check = false
        this.err.push('Vui lòng nhập gift code')
      }
      if (!this.giftcode.phone) {
        check = false
        this.err.push('Vui lòng nhập số điện thoại của bạn')
      }
      if (check) {
        this.loading = true
        let tourId = this.tour.id ? this.tour.id: '0'
        this.$axios.get('http://localhost:5000/check_code?code='+this.giftcode.code+'&phone='+this.giftcode.phone)
          .then(res => {
            console.log(res)
            if (res.data.status == 1) {
              this.toast(res.data.data, 'success')
            } else {
              this.toast(res.data.data, 'warning')
            }
            this.loading = false
            this.giftcode = {
              code: '',
              phone: ''
            }
          })
          .catch(err => console.log(err))
      }
    },
    toast(msg, type) {

        this.$bvToast.toast(msg, {
            title: 'Thông báo',
            variant: type,
            solid: true
            })
    },
  }
}
</script>

<style lang="scss">
.final-inner {
  width: 700px;
  padding-top: 60px;
  .gift-code {
    margin-top: 30px;
    p {
      color: #000;
    }
    label {
      color: #000;
    }
    input {
      background: none;
      border-bottom: 2px solid #ccc;
      height: initial;
    }
  }
  h3 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  .share-post {
    background: #ffc6c6;
    border-radius: 10px; 
    margin-bottom: 20px;
  }
  
}
</style>

