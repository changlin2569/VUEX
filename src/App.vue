<template>
  <div>
    <my-addition></my-addition>

    ----------------------------------------------------------------

    <my-subtraction></my-subtraction>
  </div>
</template>

<script>
import Addition from './components/addition.vue'
import Subtraction from './components/subtraction.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    'my-addition': Addition,
    'my-subtraction': Subtraction
  }
}
</script>

<style scoped>

</style>
