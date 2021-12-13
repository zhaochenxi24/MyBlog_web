<template>
  <div>
    <el-main>
      <!-- 轮播图 -->
      <div class="Rotation">
        <el-carousel :interval="4000"
                     type="card"
                     height="200px">
          <el-carousel-item v-for="(item,index) in rotationList"
                            :key="index">
            <h3 class="medium">
              <img :src="item"
                   style=" max-width: 100%
                        height: auto">
            </h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <!--卡片图片展示 -->
      <div class="TagCard">
        <el-row class="TC">
          <el-col :span="5"
                  v-for="o in 4"
                  :key="o"
                  class="TC-content">
            <el-card :body-style="{ padding: '0px' }">
              <a href=""><img src="../../assets/userIndexRotation/3.jpg"
                     class="image"></a>
              <div class="TC-test">
                <a href="">好吃的汉堡</a>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <!-- 标签页 -->
      <div class="TagPage">
        <el-tabs v-model="activeName"
                 type="card">
          <el-tab-pane label="最新文章"
                       v-infinite-scroll="load"
                       infinite-scroll-disabled="disabled">
            <div v-for="(item,index) in newestArticle"
                 :key="index"
                 class="contentCard">
              <el-card class="box-card"
                       shadow="hover">
                <div class="el-image">
                  <a href="">
                    <el-image src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                              fit="contain"
                              alt=""></el-image>
                  </a>
                </div>
                <div class="title">
                  <a v-bind:[attributeName]="url">{{item.title}}</a>
                </div>
                <div class="describtion">
                  <a v-bind:[attributeName]="url">{{item.abstr}}</a>
                </div>
              </el-card>
            </div>
            <div class="loadAndNoMore">
              <p v-if="loading">加载中...</p>
              <p v-if="noMore">没有更多了</p>
            </div>
          </el-tab-pane>
          <el-tab-pane label="热门文章">
            <div v-for="(item,index) in hotsArticle"
                 :key="index"
                 class="contentCard">
              <el-card class="box-card"
                       shadow="hover">
                <div class="el-image">
                  <a href="">
                    <el-image src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                              fit="contain"
                              alt=""></el-image>
                  </a>
                </div>
                <div class="title">
                  <a href="">{{item.title}}</a>
                </div>
                <div class="describtion">
                  <a href="">{{item.abstr}}</a>
                </div>
              </el-card>
            </div>
          </el-tab-pane>
          <el-tab-pane label="评论最多">
            <div v-for="(item,index) in commentsArticle"
                 :key="index"
                 class="contentCard">
              <el-card class="box-card"
                       shadow="hover">
                <div class="el-image">
                  <a href="">
                    <el-image src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                              fit="contain"
                              alt=""></el-image>
                  </a>
                </div>
                <div class="title">
                  <a href="">{{item.title}}</a>
                </div>
                <div class="describtion">
                  <a href="">{{item.abstr}}</a>
                </div>
              </el-card>
            </div>
          </el-tab-pane>
          <el-tab-pane label="点赞最多">
            <div v-for="(item,index) in likesArticle"
                 :key="index"
                 class="contentCard">
              <el-card class="box-card"
                       shadow="hover">
                <div class="el-image">
                  <a href="">
                    <el-image src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                              fit="contain"
                              alt=""></el-image>
                  </a>
                </div>
                <div class="title">
                  <a href="">{{item.title}}</a>
                </div>
                <div class="describtion">
                  <a href="">{{item.abstr}}</a>
                </div>
              </el-card>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-main>

  </div>
</template>
<script>
// import home from './Home.vue'
export default {
  computed: {
    noMore () {
      return this.newestArticle.length >= 7
    },
    disabled () {
      return this.loading || this.noMore
    }
  },

  mounted: function () {
    this.newest()
    this.hots()
    this.comments()
    this.likes()
  },
  data () {
    return {
      loading: false,
      tagcard: '1',
      activeName: '0',
      rotationList: [
        require('../../assets/userIndexRotation/1.jpg'),
        require('../../assets/userIndexRotation/2.jpg'),
        require('../../assets/userIndexRotation/3.jpg'),
        require('../../assets/userIndexRotation/1.jpg'),
        require('../../assets/userIndexRotation/2.jpg'),
        require('../../assets/userIndexRotation/3.jpg')
      ],
      // jason数据定于变量为数组即可
      // newestArticle: {
      //   id: '',
      //   contentid: '',
      //   title: '',
      //   abstr: '',
      //   categoryid: '',
      //   categoryvalue: '',
      //   imgurl: '',
      //   createdate: '',
      //   top: ''
      // },
      newestArticle: {
      },
      hotsArticle: {
      },
      commentsArticle: {
      },
      likesArticle: {
      }
    }
  },
  methods: {
    load () {
      this.loading = true
      console.log(this.newestArticle)
      setTimeout(() => {
        this.page++
        this.loading = false
      }, 1000)
    },
    newest () {
      this.$axios
        .get('/index/newestArticle', {})
        .then(res => {
          this.newestArticle = res.data
        })
    },
    hots () {
      this.$axios
        .get('/index/hotsArticle', {})
        .then(res => {
          this.hotsArticle = res.data
        })
    },
    comments () {
      this.$axios
        .get('/index/commentsArticle', {})
        .then(res => {
          this.commentsArticle = res.data
        })
    },
    likes () {
      this.$axios
        .get('/index/likesArticle', {})
        .then(res => {
          this.likesArticle = res.data
        })
    }
  }
}
</script>
<style>
/**内容*/
body {
  background-color: whitesmoke;
  margin-top: 5%;
}
.el-main {
  height: 100%;
  width: 65%;
  left: 7%;
  position: relative;
  background-color: white;
  margin: 20px;
}
/**.el-carousel__item 轮播图*/
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  line-height: 200px;
  margin: 0;
}

/**标签页面的图片卡 */
.TagCard .TC {
  height: 100%;
  width: 100%;
  margin: 10px;
  padding: 0;
}
/* 卡片间隙调整 */
.TagCard .TC-content {
  margin-right: 2%;
  margin-left: 2%;
}
/* 文字调整 */
.TagCard .TC-test {
  padding: 10px;
  margin-left: 20%;
}
/* 图片调整 */
.TagCard .image {
  height: 100%;
  width: 100%;
  display: block;
}

/**标签页的内容卡片 */
.TagPage .box-card {
  height: 170px;
  margin-top: 5px;
  border: 0;
}
.TagPage .box-card .el-image {
  height: 130px;
  width: 200px;
}
.el-menu-demo {
  width: 100%;
  border: 0px;
}
.title {
  left: 55%;
  bottom: 130px;
  position: relative;
}
.describtion {
  left: 55%;
  bottom: 100px;
  position: relative;
}
.loadAndNoMore {
  text-align: center;
}
</style>
