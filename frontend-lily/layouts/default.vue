<template>
  <v-app>
    <Nuxt />
    <footer-app />
  </v-app>
</template>

<script>
import FooterApp from '../components/FooterApp.vue'
export default {
  components: { FooterApp },
  data () {
    return {
    }
  }
}
</script>
