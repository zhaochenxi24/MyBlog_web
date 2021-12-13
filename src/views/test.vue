<template>
  <div>
    <span :title="message">
      {{123}}</span>
    <p v-if="seen">现在你看到我了</p>
    <ol>
      <li v-for="todo in todos"
          :key="todo.test">
        {{ todo.test }}
      </li>
    </ol>
    <button @click="reverseMessage">反转消息</button>

    <input type="text"
           v-model="message">
    {{message}}
    <span v-once>这个将不会改变：{{message}}</span>
    <p v-html="h">旺中哇嘎改变：{{h}} </p>
    <span v-html="h">这个将不会改变：{{h}}</span>
    <p :disabled="isDisable">p:{{message}}</p>
    <button @[eventName]="reverseMessage">反转消息</button>
    <p>{{revserseH}}</p>
    <p>发布抓捕发布抓捕：{{revserseH}}</p>
    <p v-if="isLoop">123</p>
  </div>

</template>
<script>
export default {
  components: {},
  data () {
    return {
      message: 'Hello Vue!' + new Date().toLocaleString(),
      seen: true,
      todos: [
        { test: 'learn', test1: '12e' },
        { test: 'study' },
        { test: 'take' }
      ],
      template: '模板语法',
      h: '<p>123</p>',
      isDisable: true,
      eventName: 'focus',
      HH: ' ',
      isLoop: true
    }
  },
  // 如何生效
  // component:
  //   ('header-nav', {
  //     template: '<li>这是一个待办事项</li>'
  //   }),
  methods: {
    reverseMessage () {
      this.message = this.message.split('').reverse().join('')
    },
    revserseHH () {
      return this.h.split('').reverse().join('')
    }
  },
  computed: {
    revserseH () {
      return this.h.split('').reverse().join('')
    }
  }
}
</script>
<style scoped>
</style>
