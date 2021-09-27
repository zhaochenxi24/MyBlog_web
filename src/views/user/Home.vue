<template>
  <div>
    <!-- <div class="demo"> -->
    <Header></Header>
    <comments>
      <el-main>
        <!-- 轮播图 -->
        <div class="Rotation">
          <el-carousel :interval="4000"
                       type="card"
                       height="200px">
            <el-carousel-item v-for="item in 6"
                              :key="item">
              <h3 class="medium">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
        <!-- -->
        <div class="TagCard">
          <el-row>
            <el-col :span="4"
                    v-for="(o, index) in 4"
                    :key="o"
                    :offset="index > 0 ? 2 : 0">
              <el-card class="TC-content">
                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                     class="image" />
              </el-card>
            </el-col>
          </el-row>
        </div>
        <!-- 标签页 -->
        <div class="TagPage">
          <el-tabs v-model="activeName"
                   type="card"
                   @tab-click="handleClick">
            <el-tab-pane label="最新文章">
              <div v-for="o in 4"
                   :key="o"
                   class="contentCard">
                <el-card class="box-card"
                         shadow="hover">
                  <div class="text item">
                    {{ "最新文章 " }}
                  </div>
                </el-card>
                <!-- <el-divider></el-divider> -->
              </div>
            </el-tab-pane>
            <el-tab-pane label="热门文章">
              <div v-for="o in 4"
                   :key="o"
                   class="contentCard">
                <el-card class="box-card"
                         shadow="hover">
                  <div class="text item">
                    {{ "热门文章 " }}
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
                    {{ "点赞最多 " }}
                  </div>
                </el-card>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-main>
    </comments>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '../common/Header.vue'
import Footer from '../common/Footer.vue'
export default {
  name: 'Demo',
  components: {
    Header, Footer
  }
}
</script>
<style>
/**全局 */
a {
  text-decoration: none;
}

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
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
/**标签页面的图片卡 */
.TagCard .TC-content {
  height: 120px;
  width: 100%;
  margin: 10px;
  padding: 0;
}
/**标签页的内容卡片 */
/* .TagPage .contentCard {
} */
.TagPage .box-card {
  height: 150px;
  margin-top: 5px;
  border: 0;
}
.el-menu-demo {
  width: 100%;
  border: 0px;
}
</style>
