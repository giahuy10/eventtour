<template>
    <div class="container">
      <h3>Danh sách code</h3>
      <table class="table table-borderd">
        <thead>
          <th>STT</th>
          <th>Code</th>
          <th>Tên người chơi</th>
          <th>Số điện thoại</th>
          <th>Email</th>
          <!-- <th>Thời gian</th> -->
          <th>Thông tin bài thi</th>
          
        </thead>
        <tbody>
          <tr v-for="(item, index) in data" :key="index">
            <td>{{index+1}}</td>
            <td v-text="item.code"></td>

            <td v-text="item.name"></td>
            <td v-text="item.phone"></td>
            <td v-text="item.email"></td>
            <!-- <td>{{item.created ? item.created : '' | moment('timezone', 'Etc/UTC', 'dddd, MMMM Do YYYY, h:mm:ss a')}}</td> -->
            <td> <a :href="'/tao-tour-tu-tuc-hanh-phuc-di-han/user?id='+item.user" class="btn btn-success" target="_blank" >Xem</a>
</td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
export default {
  layout: 'admin',
  mounted () {
    this.getCodes()
  },
  data () {
    return {
      codes: [],
      data: [],      
    }
  },
  methods: {
    getCodes () {
      this.$axios.get('https://new.pathoftheelders.com/listcode.php')
      .then(res => {
        console.log(res)
        this.data = res.data.data
        this.codes = res.data.code
      })
    }
  }
}
</script>

<style>

</style>
