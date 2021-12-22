import axios from 'axios'

const BASE_URL = 'http://'

class Http {
  static async get (url, params = {}) {
    return await axios.get(BASE_URL + url, params)
  }

  static async post (url, params = {}) {
    return await axios.post(BASE_URL + url, params)
  }
}

export default class Api {
  // articles api methods
  static async getAllArticles () {
    return await Http.get('/articles')
  }

  static async getArticleById (articleId) {
    return await Http.get('/articles/' + articleId)
  }

  // categories api methods
  static async getAllCategories () {
    return await Http.get('/categories')
  }
}
