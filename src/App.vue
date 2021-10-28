<template>
  <div class="app">
    <Header v-if="!$route.meta.showNav"></Header>
    <router-view></router-view>
    <Footer v-if="!$route.meta.showNav"></Footer>
  </div>
</template>
<script>
import Header from '../src/views/user/common/Header.vue'
import Footer from '../src/views/user/common/Footer.vue'
export default {
  name: 'app',
  data () {
    return {
      header_show: true,
      footer_show: true
    }
  },
  components: {
    Header,
    Footer
  },
  methods: {
    header: function (bool) {
      this.header_show = bool
    },
    footer: function (bool) {
      this.footer_show = bool
    }
  }
}
</script>
