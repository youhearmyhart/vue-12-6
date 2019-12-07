<template>
  <div>
    {{value}}
    <button @click="bur">恭喜发财</button>
  </div>
</template>

<script>
import { store, mutations } from '@/pages/store.js'
export default {
  data () {
    return {
      value: store.name
    }

  },
  mounted () {
    mutations.setCount({ a: 1, b: 2 })
    console.log(store)
  },
  methods: {
    bur () {
      this.$router.push({ path: '/firstpages' })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
