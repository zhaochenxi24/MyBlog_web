<template>
  <div>
    <!-- 回到顶部 -->
    <el-backtop></el-backtop>
    <el-row class="coustomHeader">

      <el-menu class=" el-menu-demo"
               mode="horizontal"
               @select="handleSelect">
        <el-menu-item index="0"
                      style="padding-right:6.5%;padding-left:5%">The last moon light</el-menu-item>
        <el-menu-item index="1"
                      default-active>
          <a href="../#/Home">首页</a>

        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">游戏攻略</template>
          <a href="../#/switch/index">
            <el-menu-item index="2-1">switch</el-menu-item>
          </a>
          <el-menu-item index="2-2">ps5</el-menu-item>
          <el-menu-item index="2-3">steam</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">个人笔记</template>
          <el-menu-item index="3-1">java</el-menu-item>
          <el-menu-item index="3-2">python</el-menu-item>
          <el-menu-item index="3-3">杂项</el-menu-item>
        </el-submenu>
        <el-menu-item index="4"><a href="https://www.ele.me">话题</a></el-menu-item>
        <el-col :span="8">
          <el-input style="top: 10px;left:15%"
                    placeholder="请输入内容"
                    v-model="searchContent"
                    class="input-with-select">
            <el-button type="sbumit"
                       slot="append"
                       icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-menu-item index="5"
                      class="pre-login"
                      style="left:6.5%"><a href="../#/login"><i class="el-icon-s-custom"></i></a></el-menu-item>
      </el-menu>
    </el-row>

  </div>
</template>
<script >
export default {
  data () {
    return {
      searchContent: ''
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
a {
  text-decoration: none;
}
.coustomHeader {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 1000;
}
</style>
