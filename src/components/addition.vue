<template>
    <div>
        <h1>当前count值为：{{this.$store.state.count}}</h1>
        <h2>{{this.$store.getters.showCount}}</h2>
        <button @click="addHandle">点击+1</button>
        <button @click="addnHandle">点击+N</button>
        <button @click="addAsync">点击延时+1</button>
        <button @click="addnAsync">点击延时+N</button>
    </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    addHandle () {
      this.$store.commit('add')
    },
    addnHandle () {
      this.$store.commit('addN', 2)
    },
    addAsync () {
      this.$store.dispatch('addAsync')
    },
    addnAsync () {
      this.$store.dispatch('addNAsync', 2)
    }
  }
}
</script>
