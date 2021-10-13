<template>
  <el-row class="coustomHeader">
    <el-menu :default-active="activeIndex"
             class="el-menu-demo"
             mode="horizontal"
             @select="handleSelect">
      <el-col :span="6">
        <el-menu-item index="1">这是一个logo</el-menu-item>
      </el-col>
      <el-menu-item index="2">
        <a href=""></a>
        首页
      </el-menu-item>
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
                  v-model="ser"
                  class="input-with-select">
          <el-button type="sbumit"
                     slot="append"
                     icon="el-icon-search"></el-button>
        </el-input>
      </el-col>
      <el-menu-item index="6"
                    class="pre-login"><a href="../#/user/login"><i class="el-icon-s-custom"></i></a></el-menu-item>
    </el-menu>
  </el-row>
</template>
<script>
export default {
  name: 'coustomHeader',
  date () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
.coustomHeader {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 1000;
}
</style>
