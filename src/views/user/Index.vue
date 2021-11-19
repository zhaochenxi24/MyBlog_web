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
        <el-row>
          <el-col :span="4"
                  v-for="(o, index) in 4"
                  :key="o"
                  :offset="index > 0 ? 2 : 0">
            <el-card class="TC-content">
              <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                   class="image"
                   style=" max-width: 100%
                        height: auto" />
            </el-card>
          </el-col>
        </el-row>
      </div>
      <!-- 标签页 -->
      <div class="TagPage">
        <el-tabs v-model="activeName"
                 type="card"
                 @tab-click='hotest'>
          <el-tab-pane label="最新文章">
            <div v-for="(item,index) in newestArticle"
                 :key="index"
                 class="contentCard">
              <el-card class="box-card"
                       shadow="hover">
                <div class="text item">
                  <div class="el-image">
                    <el-image src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                              fit="contain"
                              alt=""></el-image>
                  </div>
                  <div class="title">
                    <a href="">{{item.title}}</a>
                  </div>
                  <div class="describtion">
                    <a href="">{{item.abstr}}</a>
                  </div>
                </div>
              </el-card>
            </div>
          </el-tab-pane>
          <el-tab-pane label="热门文章">
            <div v-for="(item,index) in newestArticle"
                 :key="index"
                 class="contentCard">
              <el-card class="box-card"
                       shadow="hover">
                <div class="text item">
                  <div class="el-image">
                    <el-image src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                              fit="contain"
                              alt=""></el-image>
                  </div>
                  <div class="title">
                    <a href="">{{item.title}}</a>
                  </div>
                  <div class="describtion">
                    <a href="">{{item.abstr}}</a>
                  </div>
                </div>
              </el-card>
            </div>
          </el-tab-pane>
          <el-tab-pane label="评论最多">
            <div v-for="o in 4"
                 :key="o"
                 class="contentCard">
              <el-card class="box-card"
                       shadow="hover">
                <div class="text item">
                  {{ "评论最多 " }}
                </div>
              </el-card>
            </div>
          </el-tab-pane>
          <el-tab-pane label="点赞最多">
            <div v-for="o in 4"
                 :key="o"
                 class="contentCard">
              <el-card class="box-card"
                       shadow="hover">
                <div class="text item">
                  {{ "点赞最多" }}
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
  // comments: {
  //   home
  // },
  mounted: function () {
    this.newest()
  },
  data () {
    return {
      activeName: '0',
      rotationList: [
        require('../../assets/userIndexRotation/1.jpg'),
        require('../../assets/userIndexRotation/2.jpg'),
        require('../../assets/userIndexRotation/3.jpg'),
        require('../../assets/userIndexRotation/1.jpg'),
        require('../../assets/userIndexRotation/2.jpg'),
        require('../../assets/userIndexRotation/3.jpg')
      ],
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
      }
    }
  },
  methods: {
    handleClick (tab, event) {
    },
    newest () {
      this.$axios
        .get('/index/newestArticle', {})
        .then(res => {
          this.newestArticle = res.data
        })
    },
    hotest () {
      this.$axios
        .get('/index/hotestArticle', {})
        .then(res => {
          this.newestArticle = res.data
        })
    }
  }
}
</script>
<style>
/**
内容
*/
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
.TagCard .TC-content {
  height: 100%;
  width: 100%;
  margin: 10px;
  padding: 0;
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
</style>
