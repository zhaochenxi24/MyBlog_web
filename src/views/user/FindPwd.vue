<template>
  <el-steps :space="200"
            :active="1"
            finish-status="success">
    <el-step title="已完成"></el-step>
    <el-step title="进行中"></el-step>
    <el-step title="步骤 3"></el-step>
    <el-button style="margin-top: 12px;"
               @click="next">下一步</el-button>
  </el-steps>

</template>
<script>
export default {
  data () {
    return {
      active: 0
    }
  },
  methods: {
    next () {
      if (this.active++ > 2) this.active = 0
    }
  }
}
</script>
