<template>
    <div class="container">
      <h3>Danh sách code</h3>
      <table class="table table-borderd">
        <thead>
          <th>STT</th>
          <th>Code</th>
          <th>Số lượng còn lại</th>
          
        </thead>
        <tbody>
          <tr v-for="(code, index) in codes" :key="index">
            <td>{{index+1}}</td>
            <td v-text="code.code"></td>

            <td v-text="code.quantity"></td>
            <!-- <td>{{code.date ? code.date.$date : '' | moment('timezone', 'Etc/UTC', 'dddd, MMMM Do YYYY, h:mm:ss a')}}</td> -->
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
