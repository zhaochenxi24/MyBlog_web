<template>
  <div>
    <Header></Header>
    <Index></Index>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from '../common/Header.vue'
import Index from './Index.vue'
import Footer from '../common/Footer.vue'
export default {
  components: {
    Header,
    Index,
    Footer
  }
}
</script>
