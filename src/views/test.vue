<template>

  <van-pull-refresh v-model="isLoading"
                    @refresh="onRefresh">
    <div class="container">
      <div v-if='noData'>
        暂无数据
      </div>
      <template v-else>
        <van-list v-model="loading"
                  :finished="finished"
                  finished-text="- 没有更多了 -"
                  @load="onLoad"
                  :offset="130">
          <div v-for="(item,index) in newestArticle"
               :key="index">
            <a href="">{{item.title}}</a>
          </div>
        </van-list>
      </template>
    </div>
  </van-pull-refresh>

</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      page: 1,
      loading: false, // 当loading为true时，转圈圈
      finished: false, // 数据是否请求结束，结束会先显示- 没有更多了 -
      newestArticle: {
        id: '',
        contentid: '',
        title: '',
        abstr: '',
        categoryid: '',
        categoryvalue: '',
        imgurl: '',
        createdate: '',
        top: ''
      },
      noData: false, // 如果没有数据，显示暂无数据
      isLoading: false // 下拉的加载图案
    }
  },
  methods: {

    getInfo () {
      this.$axios
        .get('/index/newestArticle', {
          limit: 3, // 每页请求条数
          page: this.page // 请求的页面
        })
        .then(res => {
          // 当请求成功
          if (res.code === 0) {
            this.loading = false
            this.myList = this.myList.concat(res.data)
            this.page++
            // 如果没有数据，显示暂无数据
            if (this.myList.length === 0 && this.page === 1) {
              this.noData = true
            }
            // 如果加载完毕，显示没有更多了
            if (res.data.length === 0) {
              this.finished = true
            }
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    // 列表加载
    onLoad () {
      setTimeout(() => {
        this.getInfo()
        this.loading = true
      }, 500)
    },
    onRefresh () {
      setTimeout(() => {
        // 重新初始化这些属性
        this.isLoading = false
        this.myList = []
        this.page = 1
        this.loading = false
        this.finished = false
        this.noData = false
        // 请求信息
        this.getInfo()
      }, 500)
    }
  }
}
</script>

<style scoped>
</style>
