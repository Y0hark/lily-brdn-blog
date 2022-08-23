<template>
  <div>
    <p>Hello You</p>
    {{ this.$store.state.articles }}
  </div>
</template>
<script>
import Api from '../services/api.js'
import axios from 'axios'

export default {
  name: 'homePage',
  data() {
    return {
      articles: this.$store.articles,
    }
  },
  async mounted() {
    this.$store.commit('incrementCounter')
    this.$store.commit('setArticles', await Api.getAllArticles())
  },
}
</script>
<style></style>
