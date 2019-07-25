<template>
  <div class="final inner-page ">
    <div class="inner-box final-inner">
      <div class="gift-code">
        <p><b>* Phần dành cho khách hàng có mã GIFTCODE</b></p>
        <div class="form-group row">
          <label for="" class="col-sm-6">Điền thông tin GIFTCODE</label>
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
      <h3 class="text-center">Share link sự kiện trên Facebook</h3>
      <div class="text-center cursor">
        <input type="text" @click="copy" readonly v-model="linkFacebook" class="form-control share-post cursor" title="Click để copy đường link">
        <social-sharing @close="close()" url="https://www.visitkorea.org.vn/tao-tour-tu-tuc-hanh-phuc-di-han/"
                      title="Tạo tour tự túc - Hạnh phúc đi Hàn"
                      description="Bạn ước mơ một ngày được khám phá xứ sở Kim Chi nhưng điều kiện chưa cho phép? Tham gia ngay cuộc thi do tổng cục Du Lịch Hàn Quốc (KTO) tổ chức để nhận ngay tấm vé tới xử sở Kim Chi - Hoàn toàn miễn phí"
                      quote="Tham gia ngay để nhận chuyến du lịch Hàn Quốc miễn phí nhé!"
                      hashtags="KTO,VisitKorea"
                     
                      inline-template>
          <div class="btn btn-fb">
          
              <network network="facebook">
                <i class="fa fa-facebook"></i> Chia sẻ lên Facebook
              </network>
          
          </div>
          </social-sharing>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      linkFacebook: 'https://www.visitkorea.org.vn/tao-tour-tu-tuc-hanh-phuc-di-han/',
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
      console.log(this.tour)
    } else {
      this.$router.push({name : 'single-info'})
    }

  },
  methods: {
    close (){
      this.$router.push({name: 'index'})
    },
    copy(){
      this.$clipboard(this.linkFacebook)

      this.toast('Đường link đã được copy vào clipboard', 'success')
    },
    checkGiftCode () {
      this.err = []
      let check = true
      if (!this.giftcode.code) {
        check = false
        this.err.push('Vui lòng nhập GIFTCODE')
      }
      if (!this.giftcode.phone) {
        check = false
        this.err.push('Vui lòng nhập số điện thoại của bạn')
      }
      if (check) {
        this.loading = true
        let tourId = this.tour.id ? this.tour.id.$oid: '0'
        this.$axios.get('https://ktoevents.mokara.com.vn/check_code?code='+this.giftcode.code+'&phone='+this.giftcode.phone+'&tourid='+tourId)
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
  .btn.btn-fb {
    background: #3b64bd;
    color: #fff;
}
  width: 700px;
  padding-top: 60px;
  .gift-code {
    margin-bottom: 30px;
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

