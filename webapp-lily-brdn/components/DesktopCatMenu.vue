<template>
  <v-toolbar class="d-none d-md-block">
    <v-spacer></v-spacer>
    <v-btn-toggle v-model="saved_category" dense group>
      <v-btn
        v-for="(category, index) in categories"
        :key="index"
        color="secondary--text white text-h6 text-capitalize"
        active-class="activeCat"
        elevation="0"
        :value="category.attributes.name"
        @click="selectCategory(category.attributes.name)"
      >
        {{ category.attributes.name }}
      </v-btn>
    </v-btn-toggle>
    <v-spacer />
  </v-toolbar>
</template>
<script>
export default {
  name: 'DesktopCatMenu',
  data() {
    return {
      saved_category: this.$store.state.saved_category,
      categories: this.$store.state.categories,
    }
  },
  methods: {
    selectCategory(category) {
      if (this.$store.state.saved_category === category) {
        this.$store.commit('setSavedCategory', '')
      } else {
        this.$store.commit('setSavedCategory', category)
      }
    },
  },
}
</script>
<style>
.activeCat {
  color: #f8f4f3;
}
</style>
