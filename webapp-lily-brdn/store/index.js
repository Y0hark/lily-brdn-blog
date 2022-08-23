export const state = () => ({
  count: 0,
  articles: [],
  categories: [],
  saved_category: '',
})

export const mutations = {
  incrementCounter(state) {
    state.count++
  },

  initialiseStore(state) {
    // Check if the store has already been initialized.
    if (localStorage.getItem('store')) {
      // Replace the state object with the stored state.
      this.replaceState(
        Object.assign(state, JSON.parse(localStorage.getItem('store')))
      )
    }
  },

  setArticles(state, articles) {
    state.articles = articles
  },

  setCategories(state, categories) {
    state.categories = categories
  },

  setSavedCategory(state, category) {
    state.saved_category = category
  },
}
