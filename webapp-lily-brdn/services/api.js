import axios from 'axios'

// const BASE_URL = "http://yohark.de:1337/api";
const BASE_URL = 'http://localhost:1338/api'

class Http {
  static async get(url, params = {}) {
    return await axios.get(BASE_URL + url, params)
  }

  static async post(url, body = {}) {
    return await axios.post(BASE_URL + url, body)
  }
}

export default class Api {
  // articles api methods
  static async getAllArticles() {
    const response = await Http.get('/articles')
    return response.data.data
  }

  static async getArticleById(articleId) {
    return await (
      await Http.get('/articles/' + articleId)
    ).data.data
  }

  // categories api methods
  static async getAllCategories() {
    return await (
      await Http.get('/categories')
    ).data.data
  }

  // comments api methods
  static async getAllCommentsForOneArticle(articleId) {
    return await Http.get('/comments/api::article.article:' + articleId)
  }

  static async postComment(articleId, comment) {
    return await Http.post(
      '/comments/api::article.article:' + articleId,
      comment
    )
  }
}
