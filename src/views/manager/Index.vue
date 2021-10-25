<template>
  <el-container>
    <!-- 导航头 -->
    <el-header>
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple">ManageSystem</div>
        </el-col>
        <el-col :span="14">
          <div class="grid-content bg-purple">2</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple">登陆状态</div>
        </el-col>
        <el-col :span="2">
          <div class="grid-content bg-purple">登出 </div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <!-- 侧边导航菜单 -->
      <el-aside width="400px">
        <el-row class="tac">
          <el-col :span="12">
            <el-menu default-active="2"
                     class="el-menu-vertical-demo"
                     @open="handleOpen"
                     @close="handleClose">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航一</span>
                </template>
                <el-menu-item-group>
                  <template slot="title">分组一</template>
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
              </el-menu-item>
              <el-menu-item index="3"
                            disabled>
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-container>
        <!-- 内容 -->
        <el-main>Main</el-main>
        <!-- 页脚 -->
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>
