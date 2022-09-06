<template>
  <v-app>
    <Nuxt />
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  mounted() {
    this.$store.subscribe((mutation, state) => {
      console.log('mutation', mutation)
      console.log('state', state)
      localStorage.setItem('store', JSON.stringify(state))
    })
  },
  beforeCreate() {
    this.$store.commit('incrementCounter')
    this.$store.commit('initialiseStore')
  },
}
</script>
