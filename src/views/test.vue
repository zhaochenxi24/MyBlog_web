<template>
  <div>
    <div v-for="(item,index) in product"
         :key="index">
      <img :src="item.imgSrc"
           alt="">
    </div>
    <h1>123</h1>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      product: [
        {
          id: '1',
          imgSrc: '../../assets/userIndexRotation/1.jpg'
        },
        {
          id: '2',
          imgSrc: '../../assets/userIndexRotation/2.jpg'
        },
        {
          id: '3',
          imgSrc: '../../assets/userIndexRotation/3.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
