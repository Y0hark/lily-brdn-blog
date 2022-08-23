<template>
  <Nuxt />
</template>

<script>
export default {
  name: 'DefaultLayout',
  mounted() {
    this.$store.subscribe((mutation, state) => {
      localStorage.setItem('store', JSON.stringify(state))
    })
  },
  beforeCreate() {
    this.$store.commit('incrementCounter')
    this.$store.commit('initialiseStore')
  },
}
</script>
