<template>
    <div>
        <h1>当前count值为：{{count}}</h1>
        <h2>{{showCount}}</h2>
        <button @click="subHandle">点击-1</button>
        <button @click="subnHandle">点击-n</button>
        <button @click="subHandle1">点击延时-1</button>
        <button @click="subnHandle1">点击延时-n</button>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {

    }
  },
  methods: {
    ...mapMutations(['sub', 'subN']),
    ...mapActions(['subAsync', 'subNAsync']),
    subHandle () {
      this.sub()
    },
    subnHandle () {
      this.subN(2)
    },
    subHandle1 () {
      this.subAsync()
    },
    subnHandle1 () {
      this.subNAsync(2)
    }
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['showCount'])
  }
}
</script>
