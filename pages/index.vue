<template>
    <div>
        <div class="home-banner d-none d-sm-block" id="introduce">
            <div class="header-content">
                <p>Bạn ước mơ một ngày được khám phá xứ sở Kim Chi nhưng điều kiện chưa cho phép</p>
                <a href="#" v-scroll-to="'#introduce4'" class="text-uppercase btn btn-join btn-warning">Tham gia cuộc thi</a>
                <p class="normal">
                    Do tổng cục Du Lịch Hàn Quốc (KTO) tổ chức <br>
                    để nhận ngay tấm vé tới xử sở Kim Chi <br>
                    <b>Hoàn toàn miễn phí</b>
                </p>
            </div>
        </div>

        <div class="home-banner-m d-block d-sm-none">
            <a href="#" v-scroll-to="'#introduce4'">
            <img src="/imgs/Mobile_Home.png" alt="">
            </a>
        </div>

        
        <div class="cloud-bg">
        <section class="introduce2" id="introduce2">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="text-center container c">
                            <h3 style="" class="text-uppercase title">giải thưởng hấp dẫn</h3>
                        </div>
                    </div>
                </div>
                
                <div class="row" style="margin-top: 20px">
                    <div class="col-md-4 fix-bottom-parent">
                        <div class="fix-bottom">
                            <div class="img-block">
                                <img src="/imgs/2.png" alt="">
                                
                            </div>
                            <div class="img-content">
                                <b>1 Giải nhì</b>
                                <p><b class="fee">14.000.000VND/người</b></p>
                                <p>Tài trợ 75% chi phí chuyến du lịch <br> Hàn Quốc cho đội thắng cuộc</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 fix-bottom-parent">
                        <div class="fix-bottom">
                            <div class="img-block the-best">
                                <img src="/imgs/1.png" alt="">
                            </div>
                            <div class="img-content">
                                <b>01 Giải Nhất</b>
                                <p><b class="fee">16.000.000VND/người</b></p>
                                <p><b>Tài trợ 100% chi phí</b><br>
                                    Chuyến du lịch Hàn Quốc cho đội thắng cuộc
                                </p>
                            </div>
                        </div>
                    </div>
                     <div class="col-md-4 fix-bottom-parent">
                        <div class="fix-bottom">
                            <div class="img-block">
                                <img src="/imgs/3.png" alt="">
                            </div>
                            <div class="img-content">
                                <b>01 Giải Ba</b>
                                <p><b class="fee">12.000.000VND/người</b></p>
                                <p>Tài trợ 50% chi phí chuyến du lịch<br> Hàn Quốc cho đội thắng cuộc
                                </p>
                            </div>
                         </div>
                    </div>
                </div>
                <h5 style="color:#083e7c;margin-top:30px; font-weight: bold;" class="text-uppercase title text-center">và hàng trăm giải thưởng hấp dẫn khác</h5>
            </div>
            <!-- <div>
                <img src="/imgs/footer-img.png" alt="">
            </div> -->
        </section>


        <section class="introduce3" id="introduce3">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div>
                            <h3 class="text-uppercase title">cơ chế thi</h3>
                        </div>
                    </div>
                </div>
               <div class="row">
                   <div class="col-md-3">
                       <div class="item">
                           <div class="icon-block" style="width:40px">
                               <img src="/imgs/note.png" alt="">
                           </div>
                           <div class="content-block">
                               <div class="sub-title">
                                    <b>Vòng 1</b>
                               </div>
                               <p>
                                   Các cá nhân và đội nhóm sẽ tham gia xây dựng lịch trình du lịch tự túc tại Hàn Quốc hoặc đăng tải lịch trình đã được chuẩn bị sẵn lên trang web của KTO. BTC sẽ lựa chọn 12 lịch trình xuất sắc nhất để tham gia vào vòng thi thứ 2, ngoài ra sẽ có 100 phần quà kỷ niệm dành cho các đội chơi may mắn khác.
                               </p>
                           </div>
                       </div>
                   </div>
                   <div class="col-md-3">
                       <div class="item">
                           <div class="icon-block">
                               <img src="/imgs/camera.png" alt="">
                           </div>
                           <div class="content-block">
                               <div class="sub-title">
                                    <b>Vòng 2</b>
                               </div>
                               <p>
                                   12 cá nhân và/hoặc đội nhóm có lịch trình xuất sắc được lựa chọn từ vòng 1 sẽ thực hiện quay video trình bày ý tưởng về lịch trình đã xây dựng. BTC sẽ lựa chọn 3 lịch trình xuất sắc nhất và 3 lịch trình được yêu thích nhất để tham gia vòng 3, 6 lịch trình còn lại sẽ nhận quà tặng từ Ban tổ chức
                               </p>
                           </div>
                       </div>
                   </div>
                   <div class="col-md-3">
                       <div class="item">
                           <div class="icon-block">
                               <img src="/imgs/report.png" alt="">
                           </div>
                           <div class="content-block">
                              <div class="sub-title">
                                    <b>Vòng 3</b>
                               </div>
                               <p>
                                   6 cá nhân và/hoặc đội nhóm xuất sắc vượt qua vòng 2 sẽ tham gia thuyết trình và phản biện về lịch trình tour du lịch đã xây dựng. BTC sẽ trao các giải Nhất, Nhì, Ba tương ứng
                               </p>
                           </div>
                       </div>
                   </div>
                   <div class="col-md-3">
                       <div>
                           
                       </div>
                   </div>
               </div>
            </div>
        </section>
        </div>
        <section class="introduce4" id="introduce4">
            <div class="container">
                <div class="row">
                    
                    <div class="col-md-6">
                        <div>
                            <!-- <img src="/imgs/introduce2.png" alt=""> -->
                        </div>
                    </div>
                    <div class="col-md-6 left-content">
                        <h3 class="text-uppercase title">Thể lệ vòng 1</h3>
                        <div>
                            <div>
                                <div class="sub-title">
                                    <b class="text-uppercase">bước 1:</b>
                                </div>
                                <div class="content">
                                    <p>
                                        Đăng nhập vào tài khoản KTO của bạn (hoặc đăng ký cực dễ dàng!)
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div class="sub-title">
                                    <b class="text-uppercase" >bước 2:</b>
                                </div>
                                <div class="content">
                                    <p>
                                        Lựa chọn hình thức tham gia: Cá nhân hoặc theo Nhóm
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div class="sub-title">
                                    <b  class="text-uppercase">bước 3:</b>
                                </div>
                                <div class="content">
                                    <p>
                                        Bắt đầu phần thi vòng 1 - Hãy xây dựng một lịch trình du lịch tự túc tại Hàn Quốc thật hợp lý và sáng tạo theo khung lịch trình mà KTO cung cấp hoặc đăng tải lịch trình mà bạn đã chuẩn bị sẵn, bạn nhé!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             <section class="register" id="register">
            <div class="container">
                <div class="row">
                    <div class="text-center col-md-12" v-if="!checkedUser.email">
                        <b-button variant="info" @click="$router.push({path: '/user/register'})" class="btn-resg">Đăng ký</b-button>
                        <b-button variant="warning" @click="$router.push({path: '/user/login'})" class="btn-login">Đăng nhập</b-button>
                    </div>
                    <div class="text-center col-md-12" v-else>
                        <nuxt-link class="btn-login btn btn-warning" to="/single-info" no-prefetch>Tham gia</nuxt-link>
                        <button class="btn btn-success" @click="logout">Đăng xuất</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        
                    </div>
                </div>
            </div>
        </section>
        </section>
       
        <section class="introduce6" id="introduce6">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div>
                            <h4 class="text-uppercase title">Lưu ý cho thí sinh</h4>
                            <p>
                                - Bằng cách tham gia chương trình, người tham gia xem như đồng ý với tất cả thể lệ chương trình <br>
                                - Nghiêm cấm các hình thức gian lận trong cuộc thi. BTC có quyền loại người tham gia nếu phát hiện gian lận <br>
                                - Mỗi người tham gia chỉ được nhận tối đa 01 phần quà trong suốt chương trình. BTC không chịu trách nhiệm trong trường hợp không liên lạc được với người thắng cuộc do thông tin cung cấp không chính xác <br>
                                - Thể lệ này có hiệu lực kể từ thời điểm được đăng tải lên fanpage chính thức của chương trình <br>
                                - BTC có quyền tạm dừng hoặc thay đổi nội dung, thể lệ chương trình vào bất kỳ thời điểm nào trước khi kết thúc chương trình mà không cần thông báo trước <br>
                                - Sau khi nhận giải nếu phát hiện gian lận, người nhận giải có trách nhiệm phải hoàn trả nguyên vẹn giải thưởng cho BTC, mọi chi phí phát sinh sẽ do người nhận giải chi trả<br>
                                - Giải thưởng không bao gồm các chi phí làm giấy tờ Visa, Hộ chiếu cho người thắng cuộc <br>
                                - Giải thưởng không có giá trị quy đổi ra tiền mặt hoặc hiện vật khác có giá trị tương đương <br>
                                - Người thắng giải chịu mọi chi phí phát sinh khác (nếu có) <br>
                                - Quyết định cuối cùng của cuộc thi thuộc về BTC <br>
                                - Mọi chi tiết thắc mắc, các bạn vui lòng liên hệ qua Fanpage Tổng cục Du lịch Hàn Quốc tại Việt Nam – KTO để được giải đáp nhé! <br>
                                - Để tham khảo chi tiết cơ chế cuộc thi, thể lệ cuộc thi và giải thưởng, vui lòng tham khảo <a href=""><b>TẠI ĐÂY</b></a>
                            </p>
                        </div>
                    </div>
                </div>
               <div class="row">
                   <div class="col-md-12">

                   </div>
               </div>
            </div>
        </section>

        
        <section class="bottom-img">
            <div>
                <img src="imgs/footter.png" alt="">
            </div>
        </section>

  
    </div>
</template>

<script>

export default {
    css: [
        './assets/css/custom.css'
    ],
    data () {
        return {
            checkedUser: {}
        }
    },
    mounted () {
        if (localStorage.getItem('checkUser')) {
            this.checkedUser = JSON.parse(localStorage.getItem('checkUser'))
        }
    },
    methods: {
        logout() {
            localStorage.clear()
            location.reload()
        }
    }
    
}
</script>

<style scoped>
.btn-resg {margin-right: 15px;}
.btn-login {margin-right: 15px;}

.header-content p {
    font-weight: 400;font-size: 24px;color: #083e7c;position: relative;padding: 0 25px
}
.header-content .normal {
    font-size: inherit;font-weight: unset;margin-top: 10px
}
</style>

<style lang="scss">
.home-banner {
    background: url('/imgs/home-banner.jpg');
    background-position: center bottom;
    .header-content {
        text-align: center;
        padding: 330px 0 440px;
    }
}
.introduce4 {
    @media screen and (max-width: 767px) {
       background: none;
    } 
    @media screen and (min-width: 1200px) and (max-width: 1600px) {
        background-position: -130px 80px;
    }
}
.introduce6 {
    padding-top: 10px;
    @media screen and (min-width: 1200px) and (max-width: 1600px) {
        padding-top: 0;
    }
}
.introduce3 {
    @media screen and (max-width: 767px) {
        background: none;
        padding-top: 0;
    }
}
.introduce2 {
    @media screen and (max-width: 767px) {
        padding-bottom: 0;
    }
}
.home-banner-m {
    padding-top: 75px;
    img {
        width: 100%;
    }
}
.introduce6 {
    h4 {
        font-weight: bold;
        margin-bottom: 20px;
    }
}
#register {
    button.btn.btn-resg.btn-info {
        background: #3fb5f2 !important;
        border-color:  #3fb5f2 !important;
    }
    .container {
        @media screen and (max-width: 767px) {
            padding-top: 10px;
        }
    }
}
.cloud-bg {
    background: url(/imgs/cloud-bg.png) no-repeat;
    background-size: 100% auto;
}
</style>

