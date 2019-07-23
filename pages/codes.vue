<template>
    <div class="container">
      <h3>Danh sách code</h3>
      <button class="btn" @click="status = item.id, getCodes()" :class="item.class" v-for="(item, index) in tabs" :key="index" v-text="item.name"></button>
      <table class="table table-borderd">
        <thead>
          <th>STT</th>
          <th>Code</th>
          <th>Trạng thái</th>
          <th>Số điện thoại kích hoạt</th>
          <th>Ngày kích hoạt</th>
        </thead>
        <tbody>
          <tr v-for="(code, index) in codes" :key="index">
            <td>{{index+1}}</td>
            <td v-text="code.code"></td>
            <td>{{code.status == 1 ? 'Chưa kích hoạt' : 'Đã kích hoạt'}}</td>
            <td v-text="code.phone"></td>
            <td>{{code.date ? code.date.$date : '' | moment('timezone', 'Etc/UTC', 'dddd, MMMM Do YYYY, h:mm:ss a')}}</td>
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
      status: 0,
      tabs: [
        {id: 0, name: 'Tất cả', class: 'btn-info'},
        {id: 1, name: 'Chưa kích hoạt', class: 'btn-success'},
        {id: -1, name: 'Đã kích hoạt', class: 'btn-warning'}
      ]
    }
  },
  methods: {
    getCodes () {
      this.$axios.get('https://ktoevents.mokara.com.vn/get_codes?status='+this.status)
      .then(res => {
        this.codes = res.data
      })
    }
  }
}
</script>

<style>

</style>
