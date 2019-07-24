<template>
    <div class="planing inner-page" id="tour-title">
        <div class="planing-inner inner-box">
            <div class="overview">
                <h3 class="text-uppercase text-center gr-title text-blue" >Thông tin chung</h3>
                <input type="text" class="form-control text-center tour-name-input" v-model="tour.name" placeholder="Hãy đặt tên cho tour du lịch của bạn nhé!">
                <br><br><br>
                <h3 class="text-uppercase text-center gr-title text-blue">Thời gian dự kiến</h3>
               
                <div class="select-days d-none d-sm-block">
                    <vue-slider :key="componentKey" ref="slider" @error="error" v-model="tour.day" :min="min" :tooltip="'always'" :data="days" :marks="true" @change="changeDays">
                        <template v-slot:tooltip="{ value }">
                            <div class="custom-tooltip">{{ parseInt(value) * 200}}$</div>
                        </template>
                        <template v-slot:label="{ label, active }">
                            <div :class="['vue-slider-mark-label', 'custom-label-'+label, { active }]">
                                <span v-if="label > 2">{{ label }} ngày</span>
                                <span v-if="label == 1">Thời gian dự kiến</span>
                            </div>
                        </template>
                    </vue-slider>
                </div>
                <div class="select-days d-block d-sm-none">
                    <select name="" id="" class="form-control" v-model="tour.day">
                        <option :value="day" v-for="(day, index) in daysmobile" :key="index" v-text="day + 'ngày'"></option>
                    </select>
                    <div class="text-center pt-4">Chi phí dự kiến: ${{tour.day * 200}}</div>
                    
                </div>
                
            </div> 
        </div>

        <div class="planing-inner inner-box">
            <div class="progress-table" id="pros-table">
                <h3 class="text-uppercase text-center gr-title text-blue" >Bảng lịch trình</h3>
                <div class="underline text-center"><span></span></div>
                <div class="table-responsive" >
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <td>Ngày</td>
                            <td>Thành phố</td>
                            <td style="width: 100px;">Thời gian</td>
                            <td>Hoạt động</td>
                            <td>Chi phí hoạt động</td>
                            <td>Phương tiện di chuyển</td>
                            <td>Chi phí di chuyển</td>
                            <td>Ẩm thực</td>
                            <td>Chi phí ăn uống</td>
                            <td>Nơi ở</td>
                            <td>Chi phí nơi ở</td>
                            <td>Tổng chi phí</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(cols, rowindex) in rows" :key="rowindex">
                            <td :class="col.class" :rowspan="col.rowspan" v-for="(col, index) in cols" :key="index">
                                {{col.val}}
                                <br>
                                <template v-if="col.val">
                                    <template v-if="col.type == 'time'">
                                        <i @click="removeAct(col.key)" class="cursor fa fa-trash"></i>   
                                        <!-- <i @click="updateAct(col.key, col.city, col.day, col.start, col.end, col.id)" class="cursor fa fa-pencil"></i> -->
                                    </template>
                                    <!-- <template v-if="col.type == 'trans'">
                                        <i @click="removeTrans(col.key)" class="cursor fa fa-trash"></i>   
                                        <i @click="updateTrans(col.key, col.city, col.day)" title="Thay đổi phương tiện" class="cursor fa fa-pencil"></i>
                                    </template>
                                    <template v-if="col.type == 'food'">
                                        <i @click="removeFood(col.key)" class="cursor fa fa-trash"></i>   
                                        <i @click="updateFood(col.key, col.city, col.day)" title="Thay đổi món ăn" class="cursor fa fa-pencil"></i>
                                    </template> -->

                                </template>
                               
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <div class="text-center pt-4 mb-4">
                    <button class="btn btn-next-day" @click="submit" v-if="readySubmit"> <i class="fa fa-check"></i> Nộp bài</button>
                </div>
                <div class="underline text-center"><span></span></div>
            </div>
            <div class="progress-list" v-if="!readySubmit">
                <h3 class="text-uppercase text-center gr-title text-blue">Lịch trình </h3>
                <p @click="openVideo" class="cursor text-center"><i  class=" fa fa-question-circle" aria-hidden="true"></i> Hướng dẫn tạo lịch trình</p>
                <div class="days-button text-center">
                    <button class="btn btn-day" v-for="(day, index) in numberDays" :key="index" :class="currentDay == day ? 'active' : ''">Ngày {{day}}</button>
                </div>
               
                <select name="" id="" class="form-control select-city" v-model="currentCity" >
                    <option value="0">-- Chọn thành phố --</option>
                    <option :value="city.id" v-for="city in cities" :key="city.id">{{city.name}}</option>
                </select>

                <!-- MOBILE VERSION -->
                <div v-if="currentCity" class="wrap-progress mobile-progress d-block d-sm-none">
           
                    
                    
                    <h3 class="headline">Lựa chọn hoạt động 
                        <i class="fa fa-plus " @click="$refs['my-modal-2'].show(), addNewModal.title='Thêm mới hoạt động', addNewModal.type=1"></i>
                    </h3>
                    <div class="clearfix"></div>
                    <div class="time-block block-m">
                        <div class="row text-center">
                            <div class="col-6">
                                <div class="time-start">
                                    Thời gian bắt đầu <br>
                                    <vue-timepicker :yourFormat="yourFormat" :minute-interval="15" v-model="selectedTime.start"></vue-timepicker> <br>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="time-end">
                                    Thời gian kết thúc <br>
                                    <vue-timepicker :yourFormat="yourFormat" :minute-interval="15" v-model="selectedTime.end"></vue-timepicker>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="act-block block-m">
                        
                        <div class="mobile-slider">
                            <span class="cursor move-slider-button left" @click="moveAct(1)"><i class="fa fa-angle-left" aria-hidden="true"></i></span>
                            <div v-for="activity in cities[currentCity].activities" :key="activity.id">
                                <div class="activity-selection  text-center" v-if="activity.id == mobileSliderAct">
                                    <div class="row" >
                                        <div class="col-6">
                                            <img :src="'/imgs/act/'+currentCity+'/'+activity.id+'.jpg'" />
                                        </div>
                                        <div class="col-6 v-center">
                                            <div>
                                                <label> {{activity.name}}</label> <br>
                                                Giá: {{activity.price > 0 ? '$'+activity.price : 'Miễn phí'}} <br>
                                                <button class="btn btn-add-time" @click="selectedActivities = activity.id, saveTime()">Chọn</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <span class="cursor move-slider-button right" @click="moveAct(2)"><i class="fa fa-angle-right" aria-hidden="true"></i></span>
                        </div>
                    </div>
                    <h3 class="headline">Lựa chọn ẩm thực <i class="fa fa-plus" @click="$refs['my-modal-2'].show(), addNewModal.title='Thêm mới món ăn', addNewModal.type=3"></i>
                    </h3>
                    <div class="clearfix"></div>
                    <div class="food-block block-m">
                        <div class="mobile-slider">
                            <span class="cursor move-slider-button left" @click="moveFood(1)"><i class="fa fa-angle-left" aria-hidden="true"></i></span>
                            <div v-for="food in cities[currentCity].food" :key="food.id">
                                <div class="activity-selection  text-center" v-if="food.id == mobileSliderFood">
                                    <div class="row" >
                                        <div class="col-6">
                                            <img :src="'/imgs/food/'+currentCity+'/'+food.id+'.jpg'" />
                                        </div>
                                        <div class="col-6 v-center">
                                            <div>
                                                <label> {{food.name}}</label> <br>
                                                Giá: {{food.price > 0 ? '$'+food.price : 'Miễn phí'}} <br>
                                                <button class="btn btn-add-time" @click="saveFoodMobile(food.id)">Chọn</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <span class="cursor move-slider-button right" @click="moveFood(2)"><i class="fa fa-angle-right" aria-hidden="true"></i></span>
                        </div>
                    </div>
                    <h3 class="headline">Lựa chọn phương tiện <i class="fa fa-plus" @click="$refs['my-modal-2'].show(), addNewModal.title='Thêm mới phương tiện', addNewModal.type=2"></i>
                    </h3>
                    <div class="clearfix"></div>
                    <div class="trans-block block-m">
                        <div class="row">
                            <div class="col-8">
                                <multiselect v-model="selectedTransport" selectedLabel="Đã chọn" :searchable="false" :options="objtoarr(cities[currentCity].transport)" :multiple="true" :close-on-select="false" deselectLabel="Nhấp lại để xóa " selectLabel="Nhấp để chọn" :clear-on-select="false" :preserve-search="false" placeholder="Lựa chọn phương tiện" label="name" track-by="name">
                                    <template slot="selection" slot-scope="{ values, search, isOpen }">
                                        <span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">đã chọn {{ values.length }} phương tiện</span>
                                    </template>
                                    
                                </multiselect>
                                
                            </div>
                            <div class="col-4">
                                <button class="btn btn-add-time" @click="saveTrans(1)">Lưu</button>
                            </div>
                        </div>
                    </div>

                    <h3 class="headline">Lựa chọn chỗ ở <i class="fa fa-plus " @click="$refs['my-modal-2'].show(), addNewModal.title='Thêm mới chỗ ở', addNewModal.type=4"></i>
                    </h3>
                    <div class="clearfix"></div>
                    <div class="act-block block-m">
                        <div class="row">
                            <div class="col-8">
                                <select v-model="selectedAccommodation" class="form-control" name="" id="">
                                    <option value="0"> -- Chọn một chỗ ở --</option>
                                    <option  v-for="acc in cities[currentCity].accommodations" :value="acc.id" :key="acc.id">{{acc.name}} (${{acc.price}})</option>

                                </select>
                            </div>
                            <div class="col-4">
                                <button class="btn btn-add-time" @click="saveAcc">Lưu</button>
                            </div>
                        </div>
                    </div>
                        <div class="text-center pt-5">
                            <button class="btn btn-add-time" v-if="!readySubmit" @click="nextCity"><i class="fa fa-building-o" aria-hidden="true"></i> Thành phố tiếp theo</button> <br><br>
                            <!-- <button class="btn btn-add-time" v-if="!readySubmit" @click="editCity"><i class="fa fa-pencil" aria-hidden="true"></i> Sửa lại thành phố</button> -->
                            <button class="btn btn-next-day" @click="nextDay" v-if="currentDay < tour.day">
                                <i class="fa fa-sun-o" aria-hidden="true"></i> Ngày tiếp theo
                            </button>
                            <button class="btn btn-success" v-else @click="nextDay(1)"><i class="fa fa-history" aria-hidden="true"></i> Xem lại lịch trình</button>

                        </div>
                </div>
                <div v-if="currentCity" class="wrap-progress d-none d-sm-block">
                    <div class="row select-option">
                        <div class="col-12 col-md-3">
                            Lựa chọn thời gian
                        </div>
                        <div class="col-12 col-md-3 cursor" @click="currentTab = 1" :class="currentTab == 1 ? 'active': ''">
                            Lựa chọn hoạt động
                        </div>
                        <div class="col-12 col-md-3 cursor" @click="currentTab = 2" :class="currentTab == 2 ? 'active': ''">
                            Lựa chọn phương tiện
                        </div>
                        <div class="col-12 col-md-3 cursor" @click="currentTab = 3" :class="currentTab == 3 ? 'active': ''">
                            Lựa chọn ẩm thực
                        </div>
                    </div>
                    <div class="row select-progress">
                        <div class="col-12 col-md-3">
                            <div class="time-block text-center" v-if="currentTab == 1">
                                <div class="time-start">
                                    Thời gian bắt đầu <br>
                                        <vue-timepicker :yourFormat="yourFormat" :minute-interval="15" v-model="selectedTime.start"></vue-timepicker> <br>
                                </div>
                                    
                                    <div class="time-end">
                                        Thời gian kết thúc <br>
                                        <vue-timepicker :yourFormat="yourFormat" :minute-interval="15" v-model="selectedTime.end"></vue-timepicker>
                                    </div>
                            </div>
                            
                        </div>
                        <div class="col-12 col-md-9 progress-content">
                            <div class="activities" id="act-tab" v-if="currentTab == 1">
                                <div class="row" v-if="currentCity">
                                    <div class="col-12 col-md-4" v-for="activity in cities[currentCity].activities" :key="activity.id">
                                        <div class="activity-selection  text-center">
                                            <img :src="'/imgs/act/'+currentCity+'/'+activity.id+'.jpg'" />
                                            <label><input type="radio" :value="activity.id" v-model="selectedActivities"/> {{activity.name}}</label> <br>
                                                Giá: {{activity.price > 0 ? '$'+activity.price : 'Miễn phí'}}
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-4">
                                        <div class="add-option text-center activity-selection">
                                            <div class="new-name">Hoạt động khác</div>
                                            <input type="text" class="form-control" v-model="newact.name" placeholder="Tên hoạt động">
                                            <input type="text" class="form-control" v-model="newact.price" placeholder="Giá vé hoạt động">
                                            <button class="btn btn-add" @click="addNewAct">Thêm hoạt động</button>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                    <div class="text-center pt-5">
                                        <button v-if="!updatingAct" class="btn btn-add-time" @click="saveTime"><i class="fa fa-clock-o" aria-hidden="true"></i> Lưu hoạt động</button>
                                        <div v-else>
                                            <button class="btn btn-add-time" @click="overrideAct">
                                                <i class="fa fa-pencil"></i> Đổi hoạt động
                                            </button>
                                        </div>
                                        
                                    </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="transporter" id="trans-tab" v-if="currentTab == 2">
                                <div class="row" v-if="currentCity">
                                    <div class="col-12 col-md-4" v-for="transport in cities[currentCity].transport" :key="transport.id">
                                        <div class="trans-selection text-center">
                                            <img :src="tranThumb(transport.id)" /> <br>
                                            <label><input type="checkbox" :value="transport.id" v-model="selectedTransport"/>{{transport.name}} </label><br>
                                            Giá: ${{transport.price}}
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-4">
                                        <div class="add-option text-center trans-selection">
                                            <div class="new-name">Phương tiện khác</div>
                                            <input type="text" class="form-control" v-model="newtrans.name" placeholder="Tên phương tiện">
                                            <input type="text" class="form-control" v-model="newtrans.price" placeholder="Giá ($)">
                                            <button class="btn btn-add" @click="addNewTrans">Thêm phương tiện</button>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                    <div class="text-center pt-5">
                                        <button class="btn btn-add-time" @click="saveTrans"><i class="fa fa-truck" aria-hidden="true"></i> Lưu phương tiện</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div class="food" id="food-tab" v-if="currentTab == 3">
                                <div class="row" v-if="currentCity">
                                    <div class="col-12 col-md-4" v-for="food in cities[currentCity].food" :key="food.id">
                                        <div class="food-selection  text-center">
                                            <img :src="'/imgs/food/'+currentCity+'/'+food.id+'.jpg'" />
                                            <label><input type="checkbox" :value="food.id" v-model="selectedFood"/>{{food.name}} </label><br>
                                            Giá: ${{food.price}}
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-4">
                                        <div class="add-option text-center food-selection">
                                            <div class="new-name">Món ăn khác</div>
                                            <input type="text" class="form-control" v-model="newfood.name" placeholder="Tên món ăn">
                                            <input type="text" class="form-control" v-model="newfood.price" placeholder="Giá ($)">
                                            <button class="btn btn-add" @click="addNewFood">Thêm món ăn</button>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <p class="text-center"><i>* Có thể bỏ qua nếu bạn không lựa chọn ẩm thực ở đây</i></p>
                                    <div class="text-center pt-1">
                                        <button class="btn btn-add-time" @click="saveFood"><i class="fa fa-transgender-alt" aria-hidden="true"></i> Lưu món ăn</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <h4 class="select-acc-title">Lựa chọn chỗ ở</h4>
                        <div class="row" v-if="currentCity">
                            <div class="col-12 col-md-2 text-center select-acc" v-for="accommodation in cities[currentCity].accommodations" :key="accommodation.id">
                                <img :src="accThumb(accommodation.id)" alt=""> <br>
                                <label><input type="radio" :value="accommodation.id" v-model="selectedAccommodation"/> <br>
                                {{accommodation.name}}  </label><br>
                                Giá:  ${{accommodation.price}}
                                
                            </div>
                            <div class="col-12 col-md-2 add-option text-center">
                                <div class="new-name">Chỗ ở khác</div>
                                <input type="text" class="form-control" v-model="newacc.name" placeholder="Tên chỗ ở">
                                <input type="text" class="form-control" v-model="newacc.price" placeholder="Giá ($)">
                                <button class="btn btn-add" @click="addNewAcc">Thêm chỗ ở</button>
                            </div>
                            <div class="col-12 text-center pt-4">
                            <p><i>* Có thể bỏ qua nếu bạn không qua đêm ở thành phố này</i></p>
                            </div>
                        </div>
                        <div class="underline text-center"><span></span></div>
                        <div class="text-center pt-5">
                            <button class="btn btn-add-time" v-if="!readySubmit" @click="nextCity"><i class="fa fa-building-o" aria-hidden="true"></i> Thành phố tiếp theo</button>
                            <!-- <button class="btn btn-add-time" v-if="!readySubmit" @click="editCity"><i class="fa fa-pencil" aria-hidden="true"></i> Sửa lại thành phố</button> -->
                            <button class="btn btn-next-day" @click="nextDay" v-if="currentDay < tour.day">
                                <i class="fa fa-sun-o" aria-hidden="true"></i> Ngày tiếp theo
                            </button>
                            <button class="btn btn-success" v-else @click="nextDay(1)"><i class="fa fa-history" aria-hidden="true"></i> Xem lại lịch trình</button>

                           
                        </div>
                    
                    </div>
            </div>
        </div>
    <b-modal id="modal-1" ref="my-modal"  size="lg" title="Hướng dẫn tạo lịch trình" hide-footer>
        <div class="text-center">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Lky60WNXOro" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </b-modal>

    <b-modal id="modal-2" ref="my-modal-2" :title="addNewModal.title" hide-footer>
       
        <div class="form-group">
            <input type="text" class="form-control" v-model="addNewModal.name" placeholder="Tên">
        </div>
        <div class="form-group">
            <input type="number" class="form-control" v-model="addNewModal.price" placeholder="Giá ($)">
        </div>
        <div class="form-group">
            <button class="btn btn-success" @click="addNewModalSubmit(addNewModal.type)">Thêm</button>
        </div>
    </b-modal>
     <img src="/imgs/footter.png" alt="">
    </div>
</template>

<script>
import { uuid } from 'vue-uuid'; 
import Multiselect from 'vue-multiselect'
import VueTimepicker from 'vue2-timepicker'
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
const ERROR_TYPE = {
    VALUE: 1,
    INTERVAL: 2,
    MIN: 3,
    MAX: 4,
}
export default {
    components: {
        VueSlider, Multiselect, VueTimepicker
    },
    mounted () {
        if (!localStorage.getItem('person')) {
            this.$router.push('/single-info')
        }
        window.addEventListener('beforeunload', (event) => {
            event.returnValue = `Are you sure you want to leave?`;
        });
        
    },
 
    data () {
        return {
            updatingAct: false,
            updatingTrans: false,
            updatingFoods: false,
            currentUpdatingAct: 0,
            currentUpdatingTrans: 0,
            currentUpdatingFood: 0,
            mobileSliderAct: 1,
            mobileSliderFood: 1,
            slide: 0,
            sliding: null,
            addNewModal: {
                type: '',
                title: '',
                name: '',
                price: '',
                thumb: ''
            },
            modalTitle: '',
            newact: {
                name: '',
                price: '',
                thumb: ''
            },
            newacc: {
                name: '',
                price: '',
                thumb: ''
            },
            newfoodarr: [],
            newfood: {
                name: '',
                price: '',
                thumb: ''
            },
            newtrans: {
                name: '',
                price: '',
                thumb: ''
            },
            newtransarr: [],
            readySubmit: false,
            validDay: {
                acc: false,
                food: false
            },
            rows: [],
            currentTab: 1,
            selectedActivities: 0,
            selectedTransport: [],
            selectedFood: [],
            selectedAccommodation: 0,
      
            selectedTime: {
                start: {
                    HH: '07',
                    mm: '00',
                    ss: '00',
                    a: 'am'
                },
                end: {
                    HH: '07',
                    mm: '00',
                    ss: '00',
                    a: 'am'
                },
            },
            timeFrames: {},
            selectedPlans: [],
            yourFormat: 'hh:mm:ss a',
            
            planOfDay: [],
            newplanofday: {},
            tour: {
                name: '',
                day: '3',
                plans: [],
                newplans: {},
                progress: {}
            },
            min: 3,
            days: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
            daysmobile: ['3', '4', '5', '6', '7', '8', '9', '10'],
        
            currentDay: 1,
            cities: {
                1: { id: 1, name: 'Seoul',
                    transport: {
                        1: { id: 1, name: 'Xe buýt', price: '8', thumb: ''}, 
                        2: { id: 2, name: 'Tàu điện ngầm', price: '10', thumb: ''},
                        3: { id: 3, name: 'Tàu cao tốc', price: '11', thumb: ''},
                        4: { id: 4, name: 'Taxi', price: '20', thumb: ''},
                        5: { id: 5, name: 'Tàu hoả', price: '45', thumb: ''}
                    },
                    food: {
                        1: { id: 1, name: 'Canh xương hầm cay Gamjatang', price: '5.2', thumb: ''},
                        2: { id: 2, name: 'Mỳ lạnh Pyongyang', price: '11', thumb: ''},
                        3: { id: 3, name: 'Dồi lợn Sundae', price: '2.5', thumb: ''},
                        4: { id: 4, name: 'Giò heo Jokbal', price: '11', thumb: ''},
                        5: { id: 5, name: 'Bạch tuộc mini Jjukkumi', price: '12', thumb: ''}
                    },
                    accommodations: {
                        1: { id: 1, name: 'Resort', price: '200 ', thumb: ''},
                        2: { id: 2, name: 'Khách sạn', price: '120', thumb: ''},
                        3: { id: 3, name: 'Nhà cổ', price: '110', thumb: ''},
                        4: { id: 4, name: 'Homestay', price: '40', thumb: ''},
                        5: { id: 5, name: 'Nhà nghỉ', price: '20', thumb: ''}
                    },
                    activities: {
                        1: { id: 1, name: 'Thăm quan cung điện Gyeongbok', address:'161 Sajik-ro, Sejongno, Jongno-gu, Seoul', time:'Luôn mở cửa', price: '2.56', thumb: ''},
               
                        2: { id: 2, name: 'Leo núi, thăm quan tháp Namsan', address:'105, Namsangongwon-gil, Yongsan-gu, Seoul', time:'Luôn mở cửa', price: '8.54', thumb: ''},
                        3: { id: 3, name: 'Thăm quan làng Bukchon Hanok', address:'37, Gyedong-gil, Jongno-gu, Seoul', time:'Luôn mở cửa', price: '0', thumb: ''},
                        4: { id: 4, name: 'Vui chơi, chụp ảnh, thăm quan Lotte World', address:'240 Olympic-ro, Jamsil-dong, Songpa-gu, Seoul', time:'Luôn mở cửa', price: '48.70', thumb: ''},
                        5: { id: 5, name: 'Chụp ảnh và thăm quan Dongdaemun Design Plaza', address:'281 Eulji-ro, Euljiro 7(chil)-ga, Jung-gu, Seoul', time:'8AM - 6PM', price: '6.84', thumb: ''}
                    }
                }, 
                2: { id: 2, name: 'Busan',
                    transport: {
                        1: { id: 1, name: 'Xe buýt', price: '8'}, 
                        2: { id: 2, name: 'Tàu điện ngầm', price: '10'},
                        3: { id: 3, name: 'Tàu cao tốc', price: '11'},
                        4: { id: 4, name: 'Taxi', price: '20'},
                        5: { id: 5, name: 'Tàu hoả', price: '45'}
                    },
                    food: {
                        1: { id: 1, name: 'Bánh cá Eomuk', price: '8.5', thumb: ''},
                        2: { id: 2, name: 'Bánh Hotteok Ssiat', price: '1', thumb: ''},
                        3: { id: 3, name: 'Mỳ gạo lạnh Milmyeon', price: '4.3', thumb: ''},
                        4: { id: 4, name: 'Canh thịt heo Dwaeji Gukbap', price: '5', thumb: ''},
                        5: { id: 5, name: 'Combo gà-bia Chimaek', price: '22', thumb: ''},

                    },
                    accommodations: {
                        1: { id: 1, name: 'Resort', price: '170', thumb: ''},
                        2: { id: 2, name: 'Khách sạn', price: '80', thumb: ''},
                        3: { id: 3, name: 'Nhà cổ', price: '70', thumb: ''},
                        4: { id: 4, name: 'Homestay', price: '30', thumb: ''},
                        5: { id: 5, name: 'Nhà nghỉ', price: '15', thumb: ''},

                    },
                    activities: {
                        1: { id: 1, name: 'Thăm quan chùa cổ Haedong Yonggungsa', address:'86 Yonggung-gil, Gijang-eup, Gijang, Busan', time:'5AM - Hoàng hôn', price: '0', thumb: ''},
                        2: { id: 2, name: 'Thăm quan tháp Busan', address:'37-30 Yongdusan-gil, Gwangbokdong 2(i)-ga, Jung-gu, Busan', time:'10AM - 11PM', price: '6.84', thumb: ''},
                        3: { id: 3, name: 'Thăm quan, trải nghiệm Skywalk tại đảo Oryukdo', address:'936 Yongho-dong, Nam-gu, Busan', time:'9AM - 6PM', price: '0', thumb: ''},
                        4: { id: 4, name: 'Thăm quan đài thiên văn Cheongsapo Daritdol', address:'Jungdong 1-ro, Jung 2(i)-dong, Haeundae, Busan', time:'9AM - 6PM', price: '0', thumb: ''},
                        5: { id: 5, name: 'Trải nghiệm cáp treo ở bãi biển Songdo', address:'171 Songdohaebyeon-ro, Amnam-dong, Seo-gu, Busan', time:'9AM - 9.30PM (T6, T7 đến 10PM)', price: '12.82', thumb: ''},

                    }
                },
                3: { id: 3, name: 'Daegu',
                    transport: {
                        1: { id: 1, name: 'Xe buýt', price: '8'}, 
                        2: { id: 2, name: 'Tàu điện ngầm', price: '10'},
                        3: { id: 3, name: 'Tàu cao tốc', price: '11'},
                        4: { id: 4, name: 'Taxi', price: '20'},
                        5: { id: 5, name: 'Tàu hoả', price: '45'}
                    },
                    food: {
                        1: { id: 1, name: 'Thịt bò tươi Mungtigi', price: '33', thumb: ''},
                        2: { id: 2, name: 'Sườn bò nấu ớt Jjimgalbi', price: '9', thumb: ''},
                        3: { id: 3, name: 'Lòng bò nướng Makchang', price: '9', thumb: ''},
                        4: { id: 4, name: 'Cá đuối nướng Bokeo Bulgogi', price: '7.6', thumb: ''},
                        5: { id: 5, name: 'Gỏi cá Hwe Moochim', price: '8', thumb: ''},

                    },
                    accommodations: {
                        1: { id: 1, name: 'Resort', price: '170', thumb: ''},
                        2: { id: 2, name: 'Khách sạn', price: '80', thumb: ''},
                        3: { id: 3, name: 'Nhà cổ', price: '70', thumb: ''},
                        4: { id: 4, name: 'Homestay', price: '30', thumb: ''},
                        5: { id: 5, name: 'Nhà nghỉ', price: '15', thumb: ''},

                    },
                    activities: {
                        1: { id: 1, name: 'Thăm quan tháp 83 E-WORLD', address:'200 Duryugongwon-ro, Duryu-dong, Dalseo-gu, Daegu', time:'10.30AM - 10PM (cuối tuần từ 10AM)', price: '8.54', thumb: ''},
                        2: { id: 2, name: 'Mua sắm tại chợ Seomun', address:'45 Keunjang-ro 26-gil, Daesin-dong, Jung-gu, Daegu', time:'Luôn mở cửa', price: '0', thumb: ''},
                        3: { id: 3, name: 'Thăm quan đền Donghwasa', address:'1 Donghwasa 1-gil, Dohak-dong, Dong-gu, Daegu', time:'Luôn mở cửa', price: '2.14', thumb: ''},
                        4: { id: 4, name: 'Thăm quan bảo tàng quốc gia Daegu', address:'321 Cheongho-ro, Hwanggeum-dong, Suseong-gu, Daegu', time:'9AM - 6PM (T7, CN đến 7PM)', price: '0', thumb: ''},
                        5: { id: 5, name: 'Ghé thăm làng tranh Mabijeong', address:'Bonri-ri, Hwawon-eup, Dalseong-gun, Daegu', time:'Luôn mở cửa', price: '0', thumb: ''},

                    }
                },
                4: { id: 4, name: 'Incheon',
                    transport: {
                        1: { id: 1, name: 'Xe buýt', price: '8'}, 
                        2: { id: 2, name: 'Tàu điện ngầm', price: '10'},
                        3: { id: 3, name: 'Tàu cao tốc', price: '11'},
                        4: { id: 4, name: 'Taxi', price: '20'},
                        5: { id: 5, name: 'Tàu hoả', price: '45'}
                    },
                    food: {
                        1: { id: 1, name: 'Bánh xèo hải sản Haemul pajeon', price: '5', thumb: ''},
                        2: { id: 2, name: 'Gà chiên sốt chua ngọt Dakgangjeong', price: '12', thumb: ''},
                        3: { id: 3, name: 'Hotdog chiên khoai tây', price: '1.2', thumb: ''},
                        4: { id: 4, name: 'Cơm cuộn Kimbab', price: '8', thumb: ''},
                        5: { id: 5, name: 'Dồi lợn Sundae', price: '2.5', thumb: ''},

                    },
                    accommodations: {
                        1: { id: 1, name: 'Resort', price: '170', thumb: ''},
                        2: { id: 2, name: 'Khách sạn', price: '80', thumb: ''},
                        3: { id: 3, name: 'Nhà cổ', price: '70', thumb: ''},
                        4: { id: 4, name: 'Homestay', price: '30', thumb: ''},
                        5: { id: 5, name: 'Nhà nghỉ', price: '15', thumb: ''},

                    },
                    activities: {
                        1: { id: 1, name: 'Vui chơi, mua sắm tại đảo Wolmido', address:'36, Wolmimunhwa-ro, Jung-gu, Incheon', time:'Luôn mở cửa', price: '0', thumb: ''},
                        2: { id: 2, name: 'Vui chơi tại công viên trung tâm Songdo', address:'196 Technopark-ro, Songdo-dong, Yeonsu-gu, Incheon', time:'Luôn mở cửa', price: '0 vào cổng', thumb: ''},
                        3: { id: 3, name: 'Mua sắm, ăn uống tại Incheon Chinatown', address:'Gaho-dong, Jung-gu, Incheon', time:'Luôn mở cửa', price: '0', thumb: ''},
                        4: { id: 4, name: 'Thăm quan làng cổ tích Songwol-dong', address:'Jayugongwonseo-ro 45beon-gil, Songwol-dong 3(sam)-ga, Jung-gu, Incheon', time:'Luôn mở cửa', price: '0', thumb: ''},
                        5: { id: 5, name: 'Mua sắm ở chợ quốc tế Sinpo', address:'11-5 Uhyeon-ro 49beon-gil, Sinpo-dong, Jung-gu, Incheon', time:'Luôn mở cửa', price: '0', thumb: ''},

                    }
                }, 
                5: { id: 5, name: 'Daejeon',
                    transport: {
                        1: { id: 1, name: 'Xe buýt', price: '8'}, 
                        2: { id: 2, name: 'Tàu điện ngầm', price: '10'},
                        3: { id: 3, name: 'Tàu cao tốc', price: '11'},
                        4: { id: 4, name: 'Taxi', price: '20'},
                        5: { id: 5, name: 'Tàu hoả', price: '45'}
                    },
                    food: {
                        1: { id: 1, name: 'Salad thạch hạt sồi Gujeuk Dotorimuk', price: '2', thumb: ''},
                        2: { id: 2, name: 'Mỳ tam giác mạch Sutgol', price: '6', thumb: ''},
                        3: { id: 3, name: 'Gà hầm nhân sâm Samgyetang', price: '8', thumb: ''},
                        4: { id: 4, name: 'Cơm hầm rau củ Dolsotbap', price: '8', thumb: ''},
                        5: { id: 5, name: 'Canh xương bò hầm Seolleongtang', price: '10', thumb: ''},

                    },
                    accommodations: {
                        1: { id: 1, name: 'Resort', price: '170', thumb: ''},
                        2: { id: 2, name: 'Khách sạn', price: '80', thumb: ''},
                        3: { id: 3, name: 'Nhà cổ', price: '70', thumb: ''},
                        4: { id: 4, name: 'Homestay', price: '30', thumb: ''},
                        5: { id: 5, name: 'Nhà nghỉ', price: '15', thumb: ''},

                    },
                    activities: {
                        1: { id: 1, name: 'Vui chơi tại công viên giải trí Daejeon O-World', address:'70 Sajeonggongwon-ro, Sajeong-dong, Jung-gu, Daejeon', time:'9:30Am - 6PM', price: '10', thumb: ''},
                        2: { id: 2, name: 'Thăm quan bảo tàng khoa học quốc gia Daejeon', address:'481 Daedeok-daero, Guseong-dong, Yuseong-gu, Daejeon', time:'9:30AM - 5:20PM', price: '1.7', thumb: ''},
                        3: { id: 3, name: 'Thăm quan, vui chơi tại khu du lịch Hanbat', address:'Daejeon, Seo-gu, Mannyeon-dong, 396', time:'8AM - 7PM', price: '0', thumb: ''},
                        4: { id: 4, name: 'Đi dã ngoại ở rừng Jangtae', address:'Daejeon, Seo-gu, Giseong-dong, 461', time:'Luôn mở cửa', price: '0', thumb: ''},
                        5: { id: 5, name: 'Thăm quan Bảo tàng nghệ thuật Daejeon', address:'Daejeon, Seo-gu, Mannyeon-dong, 155', time:'10AM - 7PM', price: '2', thumb: ''},

                    }
                },
                6: { id: 6, name: 'Gwangju',
                    transport: {
                        1: { id: 1, name: 'Xe buýt', price: '8'}, 
                        2: { id: 2, name: 'Tàu điện ngầm', price: '10'},
                        3: { id: 3, name: 'Tàu cao tốc', price: '11'},
                        4: { id: 4, name: 'Taxi', price: '20'},
                        5: { id: 5, name: 'Tàu hoả', price: '45'}
                    },
                    food: {
                        1: { id: 1, name: 'Cơm lúa mạch Boribap', price: '4', thumb: ''},
                        2: { id: 2, name: 'Thịt viên nướng Tteok-galbi', price: '12', thumb: ''},
                        3: { id: 3, name: 'Gỏi xà lách cuốn đồ chiên xào', price: '9', thumb: ''},
                        4: { id: 4, name: 'Gỏi lợn cuốn Bossam', price: '9', thumb: ''},
                        5: { id: 5, name: 'Cơm gói Ssambap', price: '16', thumb: ''},

                    },
                    accommodations: {
                        1: { id: 1, name: 'Resort', price: '170', thumb: ''},
                        2: { id: 2, name: 'Khách sạn', price: '80', thumb: ''},
                        3: { id: 3, name: 'Nhà cổ', price: '70', thumb: ''},
                        4: { id: 4, name: 'Homestay', price: '30', thumb: ''},
                        5: { id: 5, name: 'Nhà nghỉ', price: '15', thumb: ''},

                    },
                    activities: {
                        1: { id: 1, name: 'Thăm quan vườn Soswaewon', address:'123 Jigok-ri, Nam-myeon, Damyang, Jeollanam', time:'9AM - 6PM', price: '1.7', thumb: ''},
                        2: { id: 2, name: 'Vui chơi tại trung tâm văn hoá châu Á', address:'38 Munhwajeondang-ro, Gwangsan-dong, Dong-gu, Kwangju', time:'10AM - 6PM', price: '0.85', thumb: ''},
                        3: { id: 3, name: 'Vui chơi, mua sắm tại Chợ ga Songjeong 1913', address:'13 Songjeong-ro 8beon-gil, Songjeong-dong, Gwangsan-gu, Gwangju', time:'9AM - 10PM', price: '0', thumb: ''},
                        4: { id: 4, name: 'Vui chơi tại công viên Gwangju Familyland', address:'677 Uchi-ro, Saengyong-dong, Buk-gu, Gwangju', time:'9:30AM - 9PM', price: '4.24', thumb: ''},
                        5: { id: 5, name: 'Thăm quan chùa Phật giáo Jeungsim', address:'177 Jeungsimsa-gil, Hagun-dong, Dong-gu, Kwangju', time:'9AM - 6PM', price: '0', thumb: ''},

                    }
                },
                7: { id: 7, name: 'Ulsan',
                    transport: {
                        1: { id: 1, name: 'Xe buýt', price: '8'}, 
                        2: { id: 2, name: 'Tàu điện ngầm', price: '10'},
                        3: { id: 3, name: 'Tàu cao tốc', price: '11'},
                        4: { id: 4, name: 'Taxi', price: '20'},
                        5: { id: 5, name: 'Tàu hoả', price: '45'}
                    },
                    food: {
                        1: { id: 1, name: 'Thịt ba chỉ nướng Samgyupsal', price: '17', thumb: ''},
                        2: { id: 2, name: 'Cơm trộn Bibimbap', price: '7.6', thumb: ''},
                        3: { id: 3, name: 'Canh hầm cá ngừ Chamchi Jiggae', price: '15', thumb: ''},
                        4: { id: 4, name: 'Thịt heo chiên sốt Donkasu', price: '8.5', thumb: ''},
                        5: { id: 5, name: 'Thịt bò chiên Bulgogi', price: '17', thumb: ''},

                    },
                    accommodations: {
                        1: { id: 1, name: 'Resort', price: '170', thumb: ''},
                        2: { id: 2, name: 'Khách sạn', price: '80', thumb: ''},
                        3: { id: 3, name: 'Nhà cổ', price: '70', thumb: ''},
                        4: { id: 4, name: 'Homestay', price: '30', thumb: ''},
                        5: { id: 5, name: 'Nhà nghỉ', price: '15', thumb: ''},

                    },
                    activities: {
                        1: { id: 1, name: 'Vui chơi, thăm quan mỏm Ganjeolgot', address:'39-2 Ganjeolgot 1-gil, Seosaeng-myeon, Ulju-gun, Ulsan', time:'Luôn mở cửa', price: '0', thumb: ''},
                        2: { id: 2, name: 'Vui chơi công viên Ulsan Grand Park', address:'94 Daegongwon-ro, Ok-dong, Nam-gu, Ulsan', time:'5Am - 23PM', price: '0', thumb: ''},
                        3: { id: 3, name: 'Thăm quan bảo tàng cá voi Jangsaengpo', address:'244, Jangsaengpogorae-ro, Nam-gu, Ulsan', time:'9AM - 6PM', price: '2', thumb: ''},
                        4: { id: 4, name: 'Thăm quan bảo tàng khắc đá Bangudae', address:'285 Bangudaean-gil, Eonyang-eup, Ulju-gun, Ulsan', time:'Luôn mở cửa', price: '0', thumb: ''},
                        5: { id: 5, name: 'Khám phá hang động thạch anh Ulsan', address:'112 Jasujeong-ro, Samnam-myeon, Ulju-gun, Ulsan', time:'9AM - 5PM', price: '6', thumb: ''},

                    }
                }, 
                8: { id: 8, name: 'Gyeonggi',
                    transport: {
                        1: { id: 1, name: 'Xe buýt', price: '8'}, 
                        2: { id: 2, name: 'Tàu điện ngầm', price: '10'},
                        3: { id: 3, name: 'Tàu cao tốc', price: '11'},
                        4: { id: 4, name: 'Taxi', price: '20'},
                        5: { id: 5, name: 'Tàu hoả', price: '45'}
                    },
                    food: {
                        1: { id: 1, name: 'Gà luộc cơm cháy Nurungji Baeksuk', price: '30', thumb: ''},
                        2: { id: 2, name: 'Cua sống ướp sốt đậu Ganjang Gejang', price: '14.4', thumb: ''},
                        3: { id: 3, name: 'Cháo gà ninh Namhansanseong Dakjuk', price: '21', thumb: ''},
                        4: { id: 4, name: 'Gà rán chua ngọt Yangnyeom Tongdak', price: '11.86', thumb: ''},
                        5: { id: 5, name: 'Sườn bò om cay Maeun Galbi Jjim', price: '12.7', thumb: ''},

                    },
                    accommodations: {
                        1: { id: 1, name: 'Resort', price: '150', thumb: ''},
                        2: { id: 2, name: 'Khách sạn', price: '70', thumb: ''},
                        3: { id: 3, name: 'Nhà cổ', price: '69', thumb: ''},
                        4: { id: 4, name: 'Homestay', price: '25', thumb: ''},
                        5: { id: 5, name: 'Nhà nghỉ', price: '12', thumb: ''},

                    },
                    activities: {
                        1: { id: 1, name: 'Vui chơi tại công viên Everland', address:'199 Everland-ro, Pogog-eup, Cheoin-gu, Yongin-si, Gyeonggi', time:'10AM - 9PM', price: '32', thumb: ''},
                        2: { id: 2, name: 'Thăm quan thành cổ Hwaseong', address:'1-2 Jangan-dong, Paldal-gu, Suwon, Gyeonggi', time:'Luôn mở cửa', price: '0', thumb: ''},
                        3: { id: 3, name: 'Thăm làng cổ Minsok', address:' 90 KR, Minsokchon-ro, Giheung-gu, Yongin-si, Gyeonggi', time:'9:30AM - 5:30PM', price: '0', thumb: ''},
                        4: { id: 4, name: 'Vui chơi tại công viên Seoul Grand Park', address:'102 Daegongwongwangjang-ro, Makgye-dong, Gwacheon-si, Gyeonggi', time:'10AM - 9PM', price: '20', thumb: ''},
                        5: { id: 5, name: 'Vui chơi tại công viên Seoul Land', address:'181 Gwangmyeong-ro, Makgye-dong, Gwacheon-si, Gyeonggi', time:'9:30AM - 10PM', price: '22', thumb: ''},

                    }
                },
                9: { id: 9, name: 'Gangwon',
                    transport: {
                        1: { id: 1, name: 'Xe buýt', price: '8'}, 
                        2: { id: 2, name: 'Tàu điện ngầm', price: '10'},
                        3: { id: 3, name: 'Tàu cao tốc', price: '11'},
                        4: { id: 4, name: 'Taxi', price: '20'},
                        5: { id: 5, name: 'Tàu hoả', price: '45'}
                    },
                    food: {
                        1: { id: 1, name: 'Cơm chay rau củ Gondre-bap', price: '6', thumb: ''},
                        2: { id: 2, name: 'Gà xào bắp cải Dakgalbi', price: '9', thumb: ''},
                        3: { id: 3, name: 'Cua tuyết Sokcho', price: '10.2', thumb: ''},
                        4: { id: 4, name: 'Canh cá minh thái Hwangtae', price: '11', thumb: ''},
                        5: { id: 5, name: 'Bánh bao nhân đậu đỏ Anheung Jjinbbang', price: '1', thumb: ''},

                    },
                    accommodations: {
                        1: { id: 1, name: 'Resort', price: '150', thumb: ''},
                        2: { id: 2, name: 'Khách sạn', price: '70', thumb: ''},
                        3: { id: 3, name: 'Nhà cổ', price: '69', thumb: ''},
                        4: { id: 4, name: 'Homestay', price: '25', thumb: ''},
                        5: { id: 5, name: 'Nhà nghỉ', price: '12', thumb: ''},

                    },
                    activities: {
                        1: { id: 1, name: 'Thăm quan đảo Nami', address:'1 Namisum-gil, Namsan-myeon, Chuncheon, Gangwon', time:'7:30AM - 9:45PM', price: '7', thumb: ''},
                        2: { id: 2, name: 'Thăm đền Woljeongsa', address:'Odaesan-ro, Jinbu-myeon, Pyeongchang-gun, Gangwon', time:'Luôn mở cửa', price: '0', thumb: ''},
                        3: { id: 3, name: 'Vui chơi tắm biển Gyeongpo', address:'1 Anhyeon-dong, Gangneung, Gangwon', time:'Luôn mở cửa', price: '0', thumb: ''},
                        4: { id: 4, name: 'Leo núi Taebaeksan', address:'Gangun-gun, Gangnam', time:'Luôn mở cửa', price: '0', thumb: ''},
                        5: { id: 5, name: 'Thăm quan đền Naksansa', address:'100 Naksansa-ro, Ganghyeon-myeon, Yangyang, Gangwon', time:'Luôn mở cửa', price: '0', thumb: ''},

                    }
                },
                10: { id: 10, name: 'Chungcheong Bắc',
                    transport: {
                        1: { id: 1, name: 'Xe buýt', price: '8'}, 
                        2: { id: 2, name: 'Tàu điện ngầm', price: '10'},
                        3: { id: 3, name: 'Tàu cao tốc', price: '11'},
                        4: { id: 4, name: 'Taxi', price: '20'},
                        5: { id: 5, name: 'Tàu hoả', price: '45'}
                    },
                    food: {
                        1: { id: 1, name: 'Cá ốt-me chiên sốt rau củ Dori Baengbaeng', price: '8.47', thumb: ''},
                        2: { id: 2, name: 'Gà sashimi Ggweonghoe', price: '33', thumb: ''},
                        3: { id: 3, name: 'Lẩu bò niêu đất Ttukbaegi Bulgogi', price: '10.2', thumb: ''},
                        4: { id: 4, name: 'Gỏi lợn cuốn Bossam', price: '8.5', thumb: ''},
                        5: { id: 5, name: 'Lẩu bò nấm HQ Bulgogi Jeongol', price: '14.4', thumb: ''},

                    },
                    accommodations: {
                        1: { id: 1, name: 'Resort', price: '150', thumb: ''},
                        2: { id: 2, name: 'Khách sạn', price: '70', thumb: ''},
                        3: { id: 3, name: 'Nhà cổ', price: '69', thumb: ''},
                        4: { id: 4, name: 'Homestay', price: '25', thumb: ''},
                        5: { id: 5, name: 'Nhà nghỉ', price: '12', thumb: ''},

                    },
                    activities: {
                        1: { id: 1, name: 'Thăm quan đền thờ Beopjusa', address:'405 beopjusa-ro, Songnisan-myeon, Boeun-gun', time:'Luôn mở cửa', price: '0', thumb: ''},
                        2: { id: 2, name: 'Công viên Songnisan National Park', address:'84 beopjusa-ro, Songnisan-myeon, 속리산면 Boeun-gun', time:'9AM - 6PM', price: '4', thumb: ''},
                        3: { id: 3, name: 'Leo núi Sobaeksan', address:'Yeongju', time:'Luôn mở cửa', price: '0', thumb: ''},
                        4: { id: 4, name: 'Thăm quan hang động Hang động Gosu', address:'8 Gosudonggul-gil, Danyang-eup, Danyang-gun', time:'9AM - 5PM', price: '11.2', thumb: ''},
                        5: { id: 5, name: 'Thăm quan Dodamsambong Peaks', address:'Byeonsan-bando National Park', time:'Luôn mở cửa', price: '30', thumb: ''},

                    }
                }, 
                11: { id: 11, name: 'Chungcheong Nam',
                    transport: {
                        1: { id: 1, name: 'Xe buýt', price: '8'}, 
                        2: { id: 2, name: 'Tàu điện ngầm', price: '10'},
                        3: { id: 3, name: 'Tàu cao tốc', price: '11'},
                        4: { id: 4, name: 'Taxi', price: '20'},
                        5: { id: 5, name: 'Tàu hoả', price: '45'}
                    },
                    food: {
                        1: { id: 1, name: 'Cơm niêu hàu Gulbap', price: '8.5', thumb: ''},
                        2: { id: 2, name: 'Hải sản ướp muối Jeotgal Jeongsik', price: '7', thumb: ''},
                        3: { id: 3, name: 'Lẩu trai sò Saejogae Shabu Shabu', price: '23', thumb: ''},
                        4: { id: 4, name: 'Cơm trộn Bibimbap', price: '8', thumb: ''},
                        5: { id: 5, name: 'Lẩu hải sản Haemul Ddukbaegi', price: '28', thumb: ''},

                    },
                    accommodations: {
                        1: { id: 1, name: 'Resort', price: '150', thumb: ''},
                        2: { id: 2, name: 'Khách sạn', price: '70', thumb: ''},
                        3: { id: 3, name: 'Nhà cổ', price: '69', thumb: ''},
                        4: { id: 4, name: 'Homestay', price: '25', thumb: ''},
                        5: { id: 5, name: 'Nhà nghỉ', price: '12', thumb: ''},

                    },
                    activities: {
                        1: { id: 1, name: 'Thăm quan Baeghwajeong', address:'4 Ssangbuk-ri, Buyeo-eup, Buyeo, Chungcheongnam', time:'Luôn mở cửa', price: '0', thumb: ''},
                        2: { id: 2, name: 'Thăm quan nhà Chung-Uisa', address:'261 Chusagotaek-ro, Sinam-myeon, Yesan-gun', time:'Luôn mở cửa', price: '0', thumb: ''},
                        3: { id: 3, name: 'Vui chơi tại bãi biển Daecheon', address:'Boryeong', time:'Luôn mở cửa', price: '0', thumb: ''},
                        4: { id: 4, name: 'Thăm quan chùa Daeungjeon', address:'640 Gwangdeok-ri, Gwangdeok-myeon, Dongnam-gu, Cheonan', time:'Luôn mở cửa', price: '0', thumb: ''},
                        5: { id: 5, name: 'Thăm quan nhà cổ Gongbuglu', address:'165 Geumseong-dong, Gongju', time:'Luôn mở cửa', price: '0', thumb: ''},

                    }
                },
                12: { id: 12, name: 'Jeolla Bắc',
                    transport: {
                        1: { id: 1, name: 'Xe buýt', price: '8'}, 
                        2: { id: 2, name: 'Tàu điện ngầm', price: '10'},
                        3: { id: 3, name: 'Tàu cao tốc', price: '11'},
                        4: { id: 4, name: 'Taxi', price: '20'},
                        5: { id: 5, name: 'Tàu hoả', price: '45'}
                    },
                    food: {
                       1: { id: 1, name: 'Cháo trai Baekhapjuk', price: '4.3', thumb: ''},
                        2: { id: 2, name: 'Lợn non hầm Aejeojjim', price: '5', thumb: ''},
                        3: { id: 3, name: 'Canh cá chạch Chueotang', price: '4.5', thumb: ''},
                        4: { id: 4, name: 'Canh giá đỗ Kongnamul Gukbap', price: '4.5', thumb: ''},
                        5: { id: 5, name: 'Mực xào cay Ojingeo-bokkeum', price: '7', thumb: ''},

                    },
                    accommodations: {
                        1: { id: 1, name: 'Resort', price: '150', thumb: ''},
                        2: { id: 2, name: 'Khách sạn', price: '70', thumb: ''},
                        3: { id: 3, name: 'Nhà cổ', price: '69', thumb: ''},
                        4: { id: 4, name: 'Homestay', price: '25', thumb: ''},
                        5: { id: 5, name: 'Nhà nghỉ', price: '12', thumb: ''},

                    },
                    activities: {
                        1: { id: 1, name: 'Vui chơi tại công viên Naejangsan National Park', address:'936 Naejangsan-ro, Naejang-dong, Jeongeup', time:'7AM - 6PM', price: '26', thumb: ''},
                        2: { id: 2, name: 'Leo núi Naejangsan', address:'Biên giới Jeolla Bắc - Nam', time:'Luôn mở cửa', price: '0', thumb: ''},
                        3: { id: 3, name: 'Thăm quan làng cổ Jeonju', address:'99 Girin-daero, Pungnamdong 3(sam)-ga, Wansan-gu, Jeonju', time:'Luôn mở cửa', price: '0', thumb: ''},
                        4: { id: 4, name: 'Thăm quan đền Gyeonggijeon', address:'44 Taejo-ro, Pungnam-dong, Wansan-gu, Jeonju', time:'Luôn mở cửa', price: '0', thumb: ''},
                        5: { id: 5, name: 'Đi chợ Nambu Market', address:'19-3 Pungnammun 1-gil, Jeonong 3(sam)-ga, Wansan-gu, Jeonju', time:'8AM - 6PM', price: '0', thumb: ''},

                    }
                },
                13: { id: 13, name: 'Jeolla Nam',
                    transport: {
                        1: { id: 1, name: 'Xe buýt', price: '8'}, 
                        2: { id: 2, name: 'Tàu điện ngầm', price: '10'},
                        3: { id: 3, name: 'Tàu cao tốc', price: '11'},
                        4: { id: 4, name: 'Taxi', price: '20'},
                        5: { id: 5, name: 'Tàu hoả', price: '45'}
                    },
                    food: {
                        1: { id: 1, name: 'Bò nướng than Gwangyang Bulgogi', price: '12', thumb: ''},
                        2: { id: 2, name: 'Cơm ống tre Daetongbap', price: '2.5', thumb: ''},
                        3: { id: 3, name: 'Cá hương nướng Euneogui', price: '4', thumb: ''},
                        4: { id: 4, name: 'Cháo bào ngư Jeonbokjuk', price: '5.3', thumb: ''},
                        5: { id: 5, name: 'Bạch tuộc xào Nakji Bokkeum', price: '13', thumb: ''},

                    },
                    accommodations: {
                        1: { id: 1, name: 'Resort', price: '150', thumb: ''},
                        2: { id: 2, name: 'Khách sạn', price: '70', thumb: ''},
                        3: { id: 3, name: 'Nhà cổ', price: '69', thumb: ''},
                        4: { id: 4, name: 'Homestay', price: '25', thumb: ''},
                        5: { id: 5, name: 'Nhà nghỉ', price: '12', thumb: ''},

                    },
                    activities: {
                        1: { id: 1, name: 'Thăm quan công viên Suncheon Bay National Garde', address:'Suncheon, Ocheon-dong, 162-11', time:'8:30AM - 6PM', price: '2.5', thumb: ''},
                        2: { id: 2, name: 'Vui chơi tại công viên Dadohaehaesang National Park', address:'446-1 Geumo-ro, Nam-myeon, Yeosu', time:'9AM - 6PM', price: '16.8', thumb: ''},
                        3: { id: 3, name: 'Thăm quan hòn đảo Hongdo', address:'Bờ biển tây nam của cảng Mokpo', time:'Luôn mở cửa', price: '0', thumb: ''},
                        4: { id: 4, name: 'Thăm quan đền chùa Songgwangsa', address:'Suncheon-si, Songgwang-myeon, Sinpyeong-ri, 12', time:'Luôn mở cửa', price: '0', thumb: ''},
                        5: { id: 5, name: 'Leo núi đến công viên núi Wolchulsan', address:'Quận Gangjin và Yeongam', time:'Luôn mở cửa', price: '0', thumb: ''},

                    }
                },
                14: { id: 14, name: 'Gyeongsang Bắc',
                    transport: {
                        1: { id: 1, name: 'Xe buýt', price: '8'}, 
                        2: { id: 2, name: 'Tàu điện ngầm', price: '10'},
                        3: { id: 3, name: 'Tàu cao tốc', price: '11'},
                        4: { id: 4, name: 'Taxi', price: '20'},
                        5: { id: 5, name: 'Tàu hoả', price: '45'}
                    },
                    food: {
                        1: { id: 1, name: 'Cua hoàng đế hấp Daege jjim', price: '55', thumb: ''},
                        2: { id: 2, name: 'Mì thạch hạt sồi Dotori Sujebi', price: '11', thumb: ''},
                        3: { id: 3, name: 'Cá cờ một nắng Gwamegi', price: '7', thumb: ''},
                        4: { id: 4, name: 'Đậu phụ non Sundubu', price: '4.6', thumb: ''},
                        5: { id: 5, name: 'Mì gà cay Jjimdak', price: '5.6', thumb: ''},

                    },
                    accommodations: {
                        1: { id: 1, name: 'Resort', price: '150', thumb: ''},
                        2: { id: 2, name: 'Khách sạn', price: '70', thumb: ''},
                        3: { id: 3, name: 'Nhà cổ', price: '69', thumb: ''},
                        4: { id: 4, name: 'Homestay', price: '25', thumb: ''},
                        5: { id: 5, name: 'Nhà nghỉ', price: '12', thumb: ''},

                    },
                    activities: {
                        1: { id: 1, name: 'Thăm quan đền phật giáo Phật Quốc tự', address:'15-1 Jinhyeon-dong, Gyeongju', time:'7:30AM - 6PM', price: '4.24', thumb: ''},
                        2: { id: 2, name: 'Thăm quan cung điện Donggung Palace and Wolji Pond', address:'102 Wonhwa-ro, Inwang-dong, Gyeongju', time:'9AM- 10PM', price: '1.7', thumb: ''},
                        3: { id: 3, name: 'Thăm quan động Seokguram', address:'Jinhyeon-dong, Gyeongju', time:'6:30AM - 6PM', price: '4.24', thumb: ''},
                        4: { id: 4, name: 'Thăm quan Làng dân gian Hahoe', address:'Andong, Pungcheon-myeon, 40', time:'9AM - 6PM', price: '4.24', thumb: ''},
                        5: { id: 5, name: 'Thăm quan đài quan sát thiên văn Cheomseongdae', address:'839-1 Inwang-dong, Gyeongju', time:'Luôn mở cửa', price: '0', thumb: ''},

                    }
                },
                15: { id: 15, name: 'Gyeongsang Nam',
                    transport: {
                        1: { id: 1, name: 'Xe buýt', price: '8'}, 
                        2: { id: 2, name: 'Tàu điện ngầm', price: '10'},
                        3: { id: 3, name: 'Tàu cao tốc', price: '11'},
                        4: { id: 4, name: 'Taxi', price: '20'},
                        5: { id: 5, name: 'Tàu hoả', price: '45'}
                    },
                    food: {
                        1: { id: 1, name: 'Cơm trộn bò tươi Yukhoe bibimbap', price: '8', thumb: ''},
                        2: { id: 2, name: 'Cá cần câu hầm rau củ Agujjim', price: '11', thumb: ''},
                        3: { id: 3, name: 'Cơm cuộn Kimbap', price: '8', thumb: ''},
                        4: { id: 4, name: 'Canh thịt heo Dwaeji Gukbap', price: '5', thumb: ''},
                        5: { id: 5, name: 'Gà xiên nướng Dak-kkochi', price: '7', thumb: ''},

                    },
                    accommodations: {
                        1: { id: 1, name: 'Resort', price: '150', thumb: ''},
                        2: { id: 2, name: 'Khách sạn', price: '70', thumb: ''},
                        3: { id: 3, name: 'Nhà cổ', price: '69', thumb: ''},
                        4: { id: 4, name: 'Homestay', price: '25', thumb: ''},
                        5: { id: 5, name: 'Nhà nghỉ', price: '12', thumb: ''},

                    },
                    activities: {
                        1: { id: 1, name: 'Thăm quan chùa Bát vạn đại tạng kinh', address:'10 Chiin-ri, Gaya-myeon, Hapcheon', time:'Luôn mở cửa', price: '0', thumb: ''},
                        2: { id: 2, name: 'Vui chơi tại công viên Jirisan National Park', address:'Daeseong-ri, Hwagae-myeon, Hadong', time:'Luôn mở cửa', price: '1.7', thumb: ''},
                        3: { id: 3, name: 'Vui chơi tại công viên Hallyeohaesang National Park', address:'Idong-myeon, Namhae', time:'5AM - 11PM', price: '5.08', thumb: ''},
                        4: { id: 4, name: 'Thăm quan chùa Tongdosa', address:'108 Tongdosa-ro, Habuk-myeon, Yangsan', time:'9AM - 5PM', price: '0', thumb: ''},
                        5: { id: 5, name: 'Thăm quan làng Dongpirang Mural Village', address:'6-18 Dongpirang 1-gil, Dongho-dong, Tongyeong-si', time:'Luôn mở cửa', price: '0', thumb: ''},

                    }
                },
                16: { id: 16, name: 'Jeju',
                    transport: {
                        1: { id: 1, name: 'Xe buýt', price: '8'}, 
                        2: { id: 2, name: 'Tàu điện ngầm', price: '10'},
                        3: { id: 3, name: 'Tàu cao tốc', price: '11'},
                        4: { id: 4, name: 'Taxi', price: '20'},
                        5: { id: 5, name: 'Tàu hoả', price: '45'}
                    },
                    food: {
                        1: { id: 1, name: 'Cá tráp nướng Okdom Gui', price: '11', thumb: ''},
                        2: { id: 2, name: 'Canh cá hố Galchi Jorim', price: '5', thumb: ''},
                        3: { id: 3, name: 'Thịt lợn đen nướng Heuk Dwaeji', price: '15', thumb: ''},
                        4: { id: 4, name: 'Gỏi mực nang sốt rau củ Hanchi Mulhwae', price: '4.5', thumb: ''},
                        5: { id: 5, name: 'Súp tảo mơ Jeju Momguk', price: '3.5', thumb: ''},

                    },
                    accommodations: {
                        1: { id: 1, name: 'Resort', price: '170', thumb: ''},
                        2: { id: 2, name: 'Khách sạn', price: '80', thumb: ''},
                        3: { id: 3, name: 'Nhà cổ', price: '70', thumb: ''},
                        4: { id: 4, name: 'Homestay', price: '30', thumb: ''},
                        5: { id: 5, name: 'Nhà nghỉ', price: '15', thumb: ''},

                    },
                    activities: {
                        1: { id: 1, name: 'Leo núi, thăm quan hầm nham thạch Manjanggul', address:'182 Manjanggul-gil, Gujwa-eup, Cheju, Jeju-do', time:'9AM - 6PM', price: '1.7', thumb: ''},
                        2: { id: 2, name: 'Thăm quan vườn quốc gia Hallasan', address:'2070-61 1100(Cheonbaek)-ro, Odeung-dong, Cheju, Jeju-do', time:'9AM - 5PM', price: '0', thumb: ''},
                        3: { id: 3, name: 'Thăm quan công viên tình yêu Jeju Loveland', address:'2894-72 1100(Cheonbaek)-ro, Yeon-dong, Cheju, Jeju-do', time:'9AM - 12PM', price: '7.64', thumb: ''},
                        4: { id: 4, name: 'Vui chơi tắm biển Hamdeok Beach', address:'Sinbuk-ro, Jochon-eup, Cheju, Jeju-do', time:'Luôn mở cửa', price: '0', thumb: ''},
                        5: { id: 5, name: 'Thăm quan bảo tàng Osulloc Tea Museum', address:'15 Sinhwayeoksa-ro, Andeok-myeon, Seogwipo, Jeju-do', time:'9AM - 7PM', price: '10', thumb: ''},

                    }
                },
                17: { id: 17, name: 'Sejong',
                    transport: {
                        1: { id: 1, name: 'Xe buýt', price: '8'}, 
                        2: { id: 2, name: 'Tàu điện ngầm', price: '10'},
                        3: { id: 3, name: 'Tàu cao tốc', price: '11'},
                        4: { id: 4, name: 'Taxi', price: '20'},
                        5: { id: 5, name: 'Tàu hoả', price: '45'}
                    },
                    food: {
                        1: { id: 1, name: 'Trứng hấp Gyeran jjim', price: '2.5', thumb: ''},
                        2: { id: 2, name: 'Bánh gạo sốt tương đen Jajang tteokbokki', price: '3.5', thumb: ''},
                        3: { id: 3, name: 'Thịt ba chỉ nướng Samgyupsal', price: '7', thumb: ''},
                        4: { id: 4, name: 'Lòng lợn hầm Gopchang-jeongol', price: '9', thumb: ''},
                        5: { id: 5, name: 'Cơm cuộn Kimbap', price: '8', thumb: ''},

                    },
                    accommodations: {
                        1: { id: 1, name: 'Resort', price: '170', thumb: ''},
                        2: { id: 2, name: 'Khách sạn', price: '80', thumb: ''},
                        3: { id: 3, name: 'Nhà cổ', price: '70', thumb: ''},
                        4: { id: 4, name: 'Homestay', price: '30', thumb: ''},
                        5: { id: 5, name: 'Nhà nghỉ', price: '15', thumb: ''},

                    },
                    activities: {
                        1: { id: 1, name: 'Thăm quan thư viện quốc gia ', address:'Dasom 3-ro, Sejong', time:'9AM - 9PM', price: '8.47', thumb: ''},
                        2: { id: 2, name: 'Thăm quan, vui chơi bên hồ Sejong', address:'216, Dasom-ro, Yeongi-myeon, Sejong', time:'Luôn mở cửa', price: '0', thumb: ''},
                        3: { id: 3, name: 'Thăm công viên gấu Beartree Park', address:'217, Sinsong-ro, Jeondong-myeon, Sejong', time:'9AM - 7PM', price: '8.47', thumb: ''},
                        4: { id: 4, name: 'Leo núi Sangyeobawi', address:'Sejong', time:'Luôn mở cửa', price: '0', thumb: ''},
                        5: { id: 5, name: 'Thăm quan chùa Yeongpyeong ', address:'Janggun Mountain. Sejong', time:'Luôn mở cửa', price: '0', thumb: ''},

                    }
                }
            },
            currentCity: 0,
            currentCityObject: {},
            selectedCity: [],
            renderComponent: true,
            componentKey: 0
        }
    },
    methods: {
   
        moveAct(type = 1) {
            if (type == 1) {
                if (this.mobileSliderAct > 1) {
                    this.mobileSliderAct = this.mobileSliderAct - 1
                }
            } else {
                if ( this.mobileSliderAct < Object.keys(this.cities[this.currentCity].activities).length) {
                    this.mobileSliderAct = this.mobileSliderAct + 1
                } 
            }
        },
        moveFood(type = 1) {
            if (type == 1) {
                if (this.mobileSliderFood > 1) {
                    this.mobileSliderFood = this.mobileSliderFood - 1
                }
            } else {
                if ( this.mobileSliderFood < Object.keys(this.cities[this.currentCity].food).length) {
                    this.mobileSliderFood = this.mobileSliderFood + 1
                } 
            }
        },
      
        genNewTable () {
            let res = []
            let rows = []
            let total = []
          
            for (var keyt in this.tour.progress) {
                var days = this.tour.progress[keyt]
                let maxRow =0
                let totalact = 0
                let totaltrans =0 
                let totalfood = 0
                let totalacc = 0
                
                for (var key in days) {
                    var act = days[key]
           
                    let max = Math.max(act.activities.length, act.food.length, act.transport.length)
                    maxRow+= max
                    act.activities.sort((a,b) => (a.start > b.start) ? 1 : ((b.start > a.start) ? -1 : 0)); 

                    totalacc+=act.accommodation ? parseFloat(act.accommodation.price) : 0
                    for(let i = 0; i < max; i++) {
                        totalact+= act.activities[i] ? parseFloat(act.activities[i].activities.price) : 0
                        totaltrans+=act.transport[i] ? parseFloat(act.transport[i].price) : 0
                        totalfood+=act.food[i] ? parseFloat(act.food[i].price) : 0
                        
                        let cols = [
                         
                            {
                                val: act.activities[i] ? act.activities[i].start +' - '+act.activities[i].end : '',
                                type: 'time'
                            },
                            {
                                val: act.activities[i] ? act.activities[i].activities.name: '',
                                type: 'act',
                                key: i,
                                day: keyt,
                                city: act.city.id, 
                                id: act.activities[i] ? act.activities[i].activities.id : 0,
                                start: act.activities[i] ? act.activities[i].start : '',
                                end: act.activities[i] ? act.activities[i].end: ''

                            },
                            {
                                val: act.activities[i] ? act.activities[i].activities.price : ''
                            },
                            {
                                val: act.transport[i] ? act.transport[i].name : '',
                                type: 'trans',
                                key: i,
                                day: keyt,
                                city: act.city.id,
                            },
                            {
                                val: act.transport[i] ? act.transport[i].price : ''
                            },
                            {
                                val: act.food[i] ? act.food[i].name : '',
                                type: 'food',
                                key: i,
                                day: keyt,
                                city: act.city.id,
                            },
                            {
                                val: act.food[i] ? act.food[i].price : ''
                            }
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
                                val: act.accommodation ? act.accommodation.price : '',
                                rowspan: max
                            })
                            
                        }
                        // cols.push({
                        //     val: ''
                        // })
                        rows.push(cols)
                    }
                }
                rows.push([
                    { val: 'Tổng', class: 'bolder' },
                    { val: ''},
                    { val: ''},
                    { val: totalact, class: 'bolder'},
                    { val: ''},
                    { val: totaltrans, class: 'bolder'},
                    { val: ''},
                    { val: totalfood, class: 'bolder'},
                    { val: ''},
                    { val: totalacc, class: 'bolder'},
                    //{ val: ''}
                ])
                
                res.push(maxRow)
                total.push((parseFloat(totalact) + parseFloat(totaltrans) + parseFloat(totalfood) + parseFloat(totalacc)).toFixed(2))
            }
           
            let day = [0]
            for(let i = 0; i < res.length; i++) {
                if (i == 0 ) {
                    day.push(day[0] + res[i] + 1 )
                } 
                if (i > 0 && i < res.length - 1) {
                    day.push(day[i] + res[i] + 1)
                }
                
            }
            for( let i = 0; i < day.length; i++) {
                if (rows[day[i]]) {
                    rows[day[i]].unshift({
                        val: i+1,
                        rowspan: res[i] + 1,
                        class: 'bolder'
                    })
                    rows[day[i]].push({
                        val: total[i],
                        rowspan: res[i] + 1,
                        class: 'bolder'
                    })
                }
                
            }
            
            this.rows = rows
            this.$scrollTo('#pros-table')
        },
        forceRerender() {
            this.$forceUpdate()
        },
        
    
        nextCity () {

          let check = true

          if (this.tour.progress[this.currentDay][this.currentCity].transport.length == 0) {
            check = false
            this.toast('Vui lòng chọn phương tiện di chuyển cho thành phố này ', 'warning')
          }
          if (this.tour.progress[this.currentDay][this.currentCity].activities.length == 0) {
            check = false
            this.toast('Vui lòng chọn hoạt động cho thành phố này ', 'warning')
          }

          if (check) {
            this.currentCity = 0
            this.currentTab = 1
            this.genNewTable()
            this.selectedTransport = []
            this.selectedFood = []
            this.selectedAccommodation = 0
          }

        },
        nextDay (type = 0) {
            
            let check = true
            if (!this.validDay.acc) {
                check = false
                this.toast('Vui lòng chọn nơi ở trong ngày này ', 'warning')
            }
            if (!this.validDay.food) {
                this.toast('Vui lòng chọn ẩm thực trong ngày', 'warning')
                check = false
            }
            if (check) {
              this.currentDay = this.currentDay + 1
              this.currentCity = 0
              this.currentTab = 1
              this.selectedTransport = []
              this.selectedFood = []
              this.selectedAccommodation = 0
              this.validDay = {
                acc: false,
                food: false
              }
              if (type == 1) {
                this.readySubmit = true
                }
              this.resetTime()
              this.genNewTable()
                
            }
            
           
        },
        toast(msg, type) {

            this.$bvToast.toast(msg, {
                title: 'Thông báo',
                variant: type,
                solid: true
                })
        },
        submit () {
            if (!this.tour.name) {
                this.toast('Vui lòng nhập tên chuyến đi', 'warning')
                this.$scrollTo('#tour-title')
            } else {
                localStorage.setItem('tour', JSON.stringify(this.tour))
                this.$router.push('/review-planing')
            }
            
        },
        saveTime () {
            if (this.selectedActivities) {
                let act = {
                        city: {
                            id: this.currentCity,
                            name: this.cities[this.currentCity].name
                        },
                        start: this.convertTime(this.selectedTime).start,
                        end: this.convertTime(this.selectedTime).end,
                        activities: this.cities[this.currentCity].activities[this.selectedActivities],
                        price: this.cities[this.currentCity].activities[this.selectedActivities].price,
                    
                    }
                this.tour.progress[this.currentDay][this.currentCity].activities.push(act)
                this.selectedActivities = 0
                this.nextTime()
                this.genNewTable()
                this.currentTab = 2
                this.toast('Thêm hoạt động thành công', 'success')
            } else{
                this.toast('Vui lòng chọn hoạt động trước', 'warning')
            }
            
        },
        removeAct (key) {
            console.log(key)
            if (confirm('Bạn chắc chắn muốn xóa hoạt dộng này?')) {
                this.tour.progress[this.currentDay][this.currentCity].activities.splice(key, 1)
                this.genNewTable()
            }
            
        },
        removeTrans (key) {
            console.log(key)
            if (confirm('Bạn chắc chắn muốn xóa phương tiện này này?')) {
                this.tour.progress[this.currentDay][this.currentCity].transport.splice(key, 1)
                this.genNewTable()
            }
        },
        removeFood (key) {
            console.log(key)
            if (confirm('Bạn chắc chắn muốn xóa món ăn này?')) {
                this.tour.progress[this.currentDay][this.currentCity].food.splice(key, 1)
                this.genNewTable()
            }
        },
        revertTime(start, end) {
            let startT = start.split(":");
            let endT = end.split(":");
            this.selectedTime = {
                start: {
                    HH: startT[0],
                    mm: startT[1],
                    ss: '00',
                    a: 'am'
                },
                end: {
                    HH: endT[0],
                    mm: endT[1],
                    ss: '00',
                    a: 'am'
                },
            }
        },
        updateAct (key, city, day, start, end, id) {
            this.$scrollTo('#act-tab')
            this.revertTime(start, end)
            this.updatingAct = true
            this.currentTab = 1
            this.currentDay = day
            this.currentCity = city
            this.currentUpdatingAct = key
            this.selectedActivities = id

            // this.updatingAct = false
        },
        updateTrans (key, city, day) {
        
            this.currentTab = 2
            this.$scrollTo('#trans-tab')
            this.updatingTrans = true
            
            this.currentDay = day
            this.currentCity = city
            this.selectedTransport = []
            // this.tour.progress[this.currentDay][this.currentCity].transport.forEach(item => {
            //     this.selectedTransport.push(item.id)
            // })

            // this.updatingAct = false
        },
        updateFood (key, city, day) {
            this.currentTab = 3
            this.$scrollTo('#food-tab')
            this.updatingFood = true
            
            this.currentDay = day
            this.currentCity = city
            this.currentUpdatingFood = key
            this.selectedFood = []
            this.tour.progress[this.currentDay][this.currentCity].food.forEach(item => {
                this.selectedFood.push(item.id)
            })
            // this.updatingAct = false
        },
        overrideAct () {
          this.tour.progress[this.currentDay][this.currentCity].activities[this.currentUpdatingAct] = {
              city: {
                    id: this.currentCity,
                    name: this.cities[this.currentCity].name
                },
                start: this.convertTime(this.selectedTime).start,
                end: this.convertTime(this.selectedTime).end,
                activities: this.cities[this.currentCity].activities[this.selectedActivities],
                price: this.cities[this.currentCity].activities[this.selectedActivities].price,
          }
          this.selectedActivities = 0
          this.currentUpdatingAct = 0
          this.updatingAct = false
          this.toast('Đổi hoạt động thành công', 'success')
          this.genNewTable()
        },
        addNewModalSubmit(type) {
            switch(type) {
                case 1:
                    // act
                    this.newact = this.addNewModal
                    this.addNewAct()
                    this.$refs['my-modal-2'].hide()
                    this.resetModal()
                    break;
                case 2:
                    // trans
                    this.newtrans = this.addNewModal
                    this.addNewTrans()
                    this.$refs['my-modal-2'].hide()
                    this.resetModal()
                    break;
                case 3:
                    // food
                    this.newfood = this.addNewModal
                    this.addNewFood()
                    this.$refs['my-modal-2'].hide()
                    this.resetModal()
                    break;
                case 4:
                    // acc
                    this.newacc = this.addNewModal
                    this.addNewAcc()
                    this.$refs['my-modal-2'].hide()
                    this.resetModal()
                    break;
                default:
                    this.newact = this.addNewModal
                    this.addNewAct()
                    this.$refs['my-modal-2'].hide()
                    this.resetModal()

            }
        },
        addNewAct () {
            let check = true
            if (!this.newact.name) {
                check = false
                this.toast('Vui lòng điền tên hoạt động', 'warning')
            }
            if (check) {
                this.newact.id = Object.keys(this.cities[this.currentCity].activities).length + 1
                
                this.cities[this.currentCity].activities[this.newact.id] = this.newact
                this.mobileSliderAct = this.newact.id
                this.newact = {
                    name: '',
                    price: 0,
                    thumb: ''
                }
                
                
                this.toast('Thêm hoạt động thành công', 'success')
            }
            
        },
        resetModal() {
            this.addNewModal = {
                type: '',
                title: '',
                name: '',
                price: '',
                thumb: ''
            }
        },
        addNewAcc() {
            let check = true
            if (!this.newacc.name) {
                check = false
                this.toast('Vui lòng điền tên chỗ ở','warning')
            }
            if (check) {
              this.validDay.acc = true
              this.tour.progress[this.currentDay][this.currentCity].accommodation = this.newacc
              this.genNewTable()
              this.toast('Thêm chỗ ở thành công', 'success')
            }
        },
        saveAcc(id) {
          this.validDay.acc = true
          this.tour.progress[this.currentDay][this.currentCity].accommodation = this.cities[this.currentCity].accommodations[id]
          this.toast('Chọn chỗ ở thành công', 'success')
          this.genNewTable()
        },
        saveTrans (type = 0) {
          if (this.selectedTransport.length == 0) {
            this.toast('Vui lòng chọn ít nhất một phương tiện', 'warning')
          } else {
            this.tour.progress[this.currentDay][this.currentCity].transport = []
            
            this.selectedTransport.forEach(item => {
                if (type == 1) {
                    this.tour.progress[this.currentDay][this.currentCity].transport.push(item)
                } 
                else {
                    this.tour.progress[this.currentDay][this.currentCity].transport.push(this.cities[this.currentCity].transport[item])
                }
            })
            this.currentTab = 3
            this.genNewTable()
            this.toast('Lưu phương tiện thành công', 'success')
          }
          
        },
        saveFoodMobile(id) {
            this.tour.progress[this.currentDay][this.currentCity].food.push(this.cities[this.currentCity].food[id])
            this.toast('Thêm món ăn thành công', 'success')
            this.validDay.food = true
            this.genNewTable()
        },
        saveFood (type = 0) {
          if (this.selectedFood.length == 0) {
            this.toast('Vui lòng chọn ít nhất một món ăn', 'warning')
          } else {
            this.validDay.food = true
            this.tour.progress[this.currentDay][this.currentCity].food = []
            this.selectedFood.forEach(item => {
                if (type == 1) {
                    this.tour.progress[this.currentDay][this.currentCity].food.push(item)

                } else {
                    this.tour.progress[this.currentDay][this.currentCity].food.push(this.cities[this.currentCity].food[item])

                }
            })
            this.currentTab = 1
            this.toast('Thêm món ăn thành công', 'success')
            this.genNewTable()
          }
        },
        addNewTrans () {
            let check = true
            if (!this.newtrans.name) {
                check = false
                this.toast('Vui lòng điền tên phương tiện', 'warning')
            }
            if (check) {
                this.newtrans.id = Object.keys(this.cities[this.currentCity].transport).length + 1
                this.cities[this.currentCity].transport[this.newtrans.id] = this.newtrans
                this.newtrans = {
                    name: '',
                    price: 0,
                    thumb: ''
                }
                this.toast('Tạo phương tiện mới thành công', 'success')
                
            }
            
        },
        addNewFood () {
            let check = true
            if (!this.newfood.name) {
                check = false
                this.toast('Vui lòng điền tên món ăn', 'warning')
            }
            if (check) {
              this.newfood.id = Object.keys(this.cities[this.currentCity].food).length + 1
              this.cities[this.currentCity].food[this.newfood.id] = this.newfood
              this.mobileSliderFood = this.newfood.id
                this.newfood = {
                    name: '',
                    price: 0,
                    thumb: ''
                }
                this.toast('Tạo món ăn mới thành công', 'success')
            }
            

        },
        objtoarr(obj) {
            var result = []
            for (var key in obj) {
                result.push(obj[key])
            }
            return result
        },
        nextTime () {
            this.selectedTime.start = this.selectedTime.end
        },
        
        resetTime () {
            this.selectedTime = {
                start: {
                    HH: '00',
                    mm: '00',
                    ss: '00',
                    a: 'am'
                },
                end: {
                    HH: '00',
                    mm: '00',
                    ss: '00',
                    a: 'am'
                },
            }
        },
        convertTime (time) {
            return {
                start: time.start.HH + ':'+ time.start.mm,
                end: time.end.HH + ':'+ time.end.mm
            }
        },
        changeDays (data) {
           // console.log('pre index', this.$refs.slider.getIndex())
            if (data < 3) {
                console.log('be qua roi', data)
                this.tour.day = 3
                alert('Thời gian tối thiểu là 3 ngày')
                location.reload()
                
            }
            
            
        },
        dragend (val) {
            console.log('dragend', val)
        },
        error(type, msg) {
            console('err type', type)
            console('err msg', msg)
            switch (type) {
            case ERROR_TYPE.MIN:
                break
            case ERROR_TYPE.MAX:
                break
            case ERROR_TYPE.VALUE:
                break
            }
            this.errorMsg = msg
        },
        accThumb(id) {
            switch(id) {
                case 1:
                    return '/imgs/resort.png'
                    break
                case 2:
                    return '/imgs/hotel.png'
                    break
                case 3:
                    return '/imgs/old-house.png'
                    break
                case 4:
                    return '/imgs/homestay.png'
                    break
                case 5:
                    return '/imgs/motel.png'
                    break
                default:
                    return '/imgs/resort.png'
            }
        },
        tranThumb(id) {
            switch(id) {
                case 1:
                    return '/imgs/bus.png'
                    break
                case 2:
                    return '/imgs/subway.png'
                    break
                case 3:
                    return '/imgs/metro.png'
                    break
                case 4:
                    return '/imgs/taxi.png'
                    break
                case 5:
                    return '/imgs/train.png'
                    break
                default:
                    return '/imgs/bus.png'
            }
        },
        openVideo () {
             this.$refs['my-modal'].show()
        },
        editCity () {
          this.initialCity(this.currentCity)
          this.selectedTransport = []
          this.selectedFood = []
          this.selectedAccommodation = 0
          this.genNewTable()
        },
        initialCity(cityId) {
          if (!this.tour.progress[this.currentDay]) {
            this.tour.progress[this.currentDay] = {}
          }
            
          this.tour.progress[this.currentDay][cityId] = {
            city : {
              name: this.cities[cityId].name,
              id: cityId
            },
            activities: [],
            accommodation: {},
            transport: [],
            food: []
          } 
        }
    },
    computed: {
        numberDays () {
            let arr = []
            for (let i = 0; i < this.tour.day; i++) { 
                arr.push(i+1)
            }
            return arr
        }
    },
    watch: {
        selectedCity(old) {
            let cities = {}
            this.currentCity = old[0].id
            old.forEach(item => {
                cities[item.id] = item
            });
            this.tour['day'+this.currentDay] = {
                cities
            }
        },
        selectedAccommodation (val) {
            
            if (val > 0) {
                this.validDay.acc = true
                this.saveAcc(val)
            }
            
        },
    
        tour(val) {
            console.log('day change', val.day)
        },
        currentCity: function(newVal, oldVal){
          console.log('old city : '+oldVal+ ' new city: '+newVal)
          if (newVal != 0) {
            if (oldVal != 0) {
              console.log('delete '+oldVal)
              delete this.tour.progress[this.currentDay][oldVal]; 
            }
            this.initialCity(newVal)
          }
        }
        

    }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>


<style lang="scss">

.underline {
    span {
      display: inline-block;
      width: 30px;
      height: 2px;
      background: #4e4e4e;
      margin-bottom: 25px;
    }
  }
.planing-inner {
    width: 1170px;
    h3 {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 20px;
    }
    .overview {
        padding: 20px 20px 40px 20px;
        .select-days {
            width: 80%;
            margin: 0 auto;
        }
    }
    .tour-name-input {
        border-radius: 20px;
    }
    
}
.vue-slider {
    .custom-tooltip {
        background: #f9a049;
        color: #fff;
        padding: 0 5px;
        border-radius: 5px 0 5px 0;
    }
    .vue-slider-process  {
        background: #f9a049;
    }
    .vue-slider-mark {
        height: 10px !important;
        width: 10px !important;
    }
    .vue-slider-mark-step {
   
        background-color: rgb(204, 204, 204);
        cursor: pointer;
    }
    .vue-slider-mark-label {
        cursor: pointer;
    }
    .vue-slider-mark-step.vue-slider-mark-step-active {
        background: #fff;
        border: 3px solid #f9a049;
    }
    .vue-slider-mark-label.custom-label-1 {
        left: 55px;
    }
}
.progress-table {
    table {
        font-size: 12px;
        thead {
            td {
                vertical-align: middle;
                text-align: center;
            }
        }
    }
    
}
.progress-list {
    .btn-day {
        border: 1px solid #ccc;
        border-radius: 0;
        margin-right: 2px;
        &.active{
            border-bottom: 2px solid #f9a049;
            color: #f9a049;
        }
    }
}
.select-option {
    > div {
        border: 1px solid #ccc;
        padding: 5px 10px;
        text-align: center;
        &.active {
            font-weight: bold;
            color: blue;
        }
    }
}


.table th, .table td {
    text-align: center;
    vertical-align: middle;
}
td.bolder {
    font-weight: bold;
}
table {
    thead {
        td {
            background: #41b6f2;
            color: #fff;
        }
    }
}
.select-city {
    max-width: 500px;
    border-radius: 30px;
    margin: 20px auto;
}
.select-progress {
    > div {
        border:  1px solid #ccc;
    }
    .progress-content {
        padding: 20px 15px;
        label {
            cursor: pointer;
        }
    }
}
.time-block {
    margin: 20px auto;
    .time-start {
        margin-bottom: 20px;
    }
}
.add-option {
    border: 1px solid #ccc;
    padding: 10px;
    .new-name {
        font-weight: bold;
    }
    input {
        background: none;
        border-bottom: 2px solid #ccc;
        height: initial;
    }
    .btn-add {
        background:#f9a049;
        color: #fff;
        margin-top: 10px;
        padding: 5px 10px;
    }
}
.select-acc-title {
    font-size: 24px;
    color: #083e7c;
    font-weight: bold;
    margin: 20px 0;
}
.select-acc {
    img {
        height: 100px;
        width: auto;
    }
}
.wrap-progress {
    padding: 20px 40px;
}
@media screen and (min-width: 768px) {
    .select-days {
        padding-top: 40px;
    }
}
iframe {
    margin: 0 auto;
}
.btn-add-time, .btn-next-day {
    
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    &:hover {
        color: #fff;
    }
}
.btn-add-time {
    background: #f9a049;
}
.btn-next-day {
    background: #3888f5;
    
}
.food .row > div, .activities .row > div, .transporter .row > div {
  margin-bottom: 20px;
  label {
    margin-top: 10px;
  }
}
.food-selection, .trans-selection, .activity-selection {
    height: 100%;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
}

.mobile-progress {
    padding: 0;
    .headline {
        font-size: 16px;
        font-weight: bold;
        color: #083e7c;
        background: url(/imgs/head-line.png) no-repeat;
        padding-left: 10px;
        margin-bottom: 15px;
    }
    .block-m {
        margin-bottom: 15px;
    }
    .time-block .time-start{
        margin-bottom: 0;
    }
    .mobile-slider {
        position: relative;
        .move-slider-button {
            position: absolute;
            top: 42%;
            border: 1px solid #ccc;
            padding: 5px 15px;
            background: #ebebeb;
            z-index: 99;
            &.right {
                right: -15px;
            }
            &.left {
                left: -15px;
            }
        }
        button.btn.btn-add-time {
            margin-top: 10px;
        }
    }
    .v-center {
        align-items: center;
        display: flex;
        justify-content: center;
    }
}
i.fa.fa-plus {
    border: 1px solid;
    padding: 5px;
    border-radius: 100%;
    width: 30px;
    text-align: center;
    margin-left: 10px;
}

</style>

