<template>
  <v-container>
    <!-- title -->
    <h1 class="primary--text text-h1 pa-9 mr-8" align="center">
      Lily<br />
      <span class="undertitle">Bardin</span>
    </h1>

    <!-- desktop category selector -->
    <desktop-cat-menu />
  </v-container>
</template>
<script>
import Api from '../services/api.js'

export default {
  name: 'homePage',
  data() {
    return {
      articles: this.$store.state.articles,
    }
  },
  async mounted() {
    this.$store.commit('incrementCounter')
    this.$store.commit('setArticles', await Api.getAllArticles())

    this.$store.commit('incrementCounter')
    this.$store.commit('setCategories', await Api.getAllCategories())

    console.log(
      'this.$store.state.saved_category',
      this.$store.state.saved_category
    )
  },
}
</script>
<style></style>
