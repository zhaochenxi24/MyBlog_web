<template>
  <div>
    <el-steps :active="1">
      <el-step title="步骤 1"
               description="这是一段很长很长很长的描述性文字"></el-step>
      <el-step title="步骤 2"
               description="这是一段很长很长很长的描述性文字"></el-step>
      <el-step title="步骤 3"
               description="这段就没那么长了"></el-step>
    </el-steps>

    <el-button style="margin-top: 12px;"
               @click="next">下一步</el-button>
  </div>
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
