// Page d'accueil du site, on y trouve les appels aux différents modules et la présentation des articles sous forme de cartes
<template>
  <v-container>
    <v-btn
      class="d-xs-block d-sm-block d-md-none"
      text
      icon
      :style="{'position':'fixed'}"
      color="accent"
      @click="drawer = 'true'"
    >
      <v-icon>mdi-menu</v-icon>
    </v-btn>
    <v-navigation-drawer v-model="drawer" class="d-xs-block d-sm-block d-md-none" fixed temporary>
      <v-list
        nav
      >
        <v-list-item-group>
          <v-list-item
            v-for="(category, index) in categories"
            :key="index"
            class="primary--text text-h6 text-capitalize pa-2"
            active-class="activeCat"
            @click="sortArticles(category.name)"
          >
            {{ category.name }}
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <h1 class="primary--text text-h1 pa-9 mr-8" align="center">
      Lily<br> <span class="undertitle">Bardin</span>
    </h1>
    <v-toolbar class="d-none d-md-block">
      <v-spacer />
      <v-btn-toggle v-model="toggleCat" dense group>
        <v-btn
          v-for="(category, index) in categories"
          :key="index"
          color="secondary--text white text-h6 text-capitalize"
          active-class="activeCat"
          elevation="0"
          @click="sortArticles(category.name)"
        >
          {{ category.name }}
        </v-btn>
      </v-btn-toggle>
      <v-spacer />
    </v-toolbar>
    <v-container>
      <v-row>
        <insta-displayer />
      </v-row>
      <v-layout row wrap justify-end class="pa-2">
        <a href="https://www.instagram.com/lilybrdn/" target="_blank" rel="noopener noreferrer" class="text-decoration-none">@lilybrdn</a>
      </v-layout>
      <v-row align="stretch">
        <v-col
          v-for="article in articlesToDisplay"
          :key="article.id"
          xs="12"
          sm="6"
          md="4"
          xl="3"
          class="pa-12"
        >
          <nuxt-link :to="{ name: 'articles-id', params: {id: article.id} }" style="text-decoration:none">
            <v-card
              align="center"
              min-height="100%"
              elevation="0"
              outlined
              class="d-flex flex-column"
            >
              <v-img
                height="300"
                :src="article.cover.url"
              />
              <v-card-text align="center" class="accent--text text-h5 text-md-h4 text-xl-h2 title-card-pres">
                {{ article.title }}
              </v-card-text>
              <v-card-text align="center">
                <span class="font-weight-bold accent--text text-h6">{{ article.category.name }}</span>
                - {{ article.date_of_pub }}
              </v-card-text>
              <!-- eslint-disable-next-line vue/no-v-html -->
              <v-card-text>
                {{ preview(article.copy) }}
              </v-card-text>
              <v-spacer />
              <v-card-actions class="d-flex flex-column">
                <v-btn text class="text-h6" color="primary" :to="{ name: 'articles-id', params: {id: article.id} }">
                  Lire la suite
                </v-btn>
              </v-card-actions>
            </v-card>
          </nuxt-link>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import InstaDisplayer from '../components/InstaDisplayer.vue'
import articlesQuery from '~/apollo/queries/articles/articles.gql'
import categoriesQuery from '~/apollo/queries/categories/categories.gql'
export default {
  components: {
    InstaDisplayer
  },
  data () {
    return {
      categories: [],
      articles: [],
      flag: 'all',
      toggleCat: [],
      drawer: false
    }
  },
  computed: {
    // Fonction de tri des articles: tri en fonction de la date de publication
    articlesToDisplay () {
      const arraySorted = this.articles
      const articlesPreviews = []
      arraySorted.sort((a, b) => new Date(b.date_of_pub) - new Date(a.date_of_pub))
      arraySorted.forEach((element) => {
        if (this.flag === 'all') {
          articlesPreviews.push(element)
        } else if (element.category.name === this.flag) {
          articlesPreviews.push(element)
        }
      })
      return articlesPreviews
    }
  },
  apollo: {
    categories: {
      prefetch: true,
      query: categoriesQuery
    },
    articles: {
      prefetch: true,
      query: articlesQuery,
      variables () {
        return { id: parseInt(this.$route.params.id) }
      }
    }
  },
  methods: {
    // Fonction qui récupère les premiers caractères d'un article pour en faire une petite prévisualisation dans les cartes
    preview (copy) {
      return copy.substring(0, 150) + '...'
    },
    // Fonction de tri des articles en fonction d'un flag dont la valeur varie avec la catégorie sélectionnée dans la barre prévue à cet effet
    sortArticles (category) {
      this.drawer = false
      if (this.flag === category) {
        this.flag = 'all'
      } else {
        this.flag = category
      }
    }
  }
}
</script>
<style>
  .undertitle {
    font-size: 1.3rem;
    margin-left: 100px;
  }
  .activeCat {
    color: #F8F4F3;
  }
@media screen and (max-width: 600px) {
  .title-card-pres {
    min-height: 50px;
  }
}
@media screen and (min-width: 600px) {
  .title-card-pres {
    min-height: 120px;
  }
}
</style>
