<template>
  <div>
    <header>
      <el-row>
        <el-menu :default-active="activeIndex"
                 class="el-menu-demo"
                 mode="horizontal"
                 @select="handleSelect">
          <el-col :span="6">
            <el-menu-item index="1">这是一个logo</el-menu-item>
          </el-col>
          <el-menu-item index="2">首页</el-menu-item>
          <el-submenu index="3">
            <template slot="title">游戏攻略</template>
            <el-menu-item index="2-1">switch</el-menu-item>
            <el-menu-item index="2-2">ps5</el-menu-item>
            <el-menu-item index="2-3">steam</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">个人笔记</template>
            <el-menu-item index="3-1">java</el-menu-item>
            <el-menu-item index="3-2">python</el-menu-item>
            <el-menu-item index="3-3">杂项</el-menu-item>
          </el-submenu>
          <el-menu-item index="5"><a href="https://www.ele.me">话题</a></el-menu-item>
          <el-col :span="8">
            <el-input style="top: 10px"
                      placeholder="请输入内容"
                      v-model="input"
                      class="input-with-select">
              <el-button type="sbumit"
                         slot="append"
                         icon="el-icon-search"></el-button>
            </el-input>
          </el-col>
          <el-menu-item index="6"
                        class="pre-login"><a href="http://localhost/user/login"><i class="el-icon-s-custom"></i></a></el-menu-item>
        </el-menu>
      </el-row>
    </header>
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
    <footer padless>
      <p style="text-align: center">
        . All rights resFerved © 2021 The Last Moon Light .蜀ICP备2021017363号
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      input: '',
      handleClick: '',
      activeIndex: '',
      activeName: ''
    }
  }
}
</script>

<style>
/**全局 */
a {
  text-decoration: none;
}
/**
页头
*/
/**
内容
*/
body {
  background-color: whitesmoke;
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
/**页脚 */
footer {
  margin-top: 100px;
}
</style>
