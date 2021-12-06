// Construction de la page qui gère l'affichage de n'importe quel article de manière dynamique
// On y trouve un module d'affichage des components strapi ainsi qu'un module de commentaires
<template>
  <v-container>
    <v-btn
      class="d-xs-block d-sm-block d-md-none"
      style="position:fixed; z-index: 5;"
      text
      icon
      color="accent"
    >
      <nuxt-link to="/" class="text-decoration-none">
        <v-icon>mdi-arrow-left</v-icon>
      </nuxt-link>
    </v-btn>
    <v-row justify="center">
      <v-col align="center" cols="10">
        <div>
          <v-img
            class="photo-cover"
            :src="Object(article.cover).url"
          />
          <v-card class="floating-title pa-5 rounded-0 elevation-0" align="center">
            <v-card-text class="font-weight-bold accent--text text-h6">
              {{ Object(article.category).name }}
            </v-card-text>
            <v-card-text primary-title class="text-h2 secondary--text">
              {{ article.title }}
            </v-card-text>
            <v-card-text class="font-weight-bold accent--text text-h6">
              {{ article.date_of_pub }}
            </v-card-text>
          </v-card>
        </div>
        <content-viewer :article="article" />
        // Module de commentaires (en construction)
        <comments-viewer :comments="comments" />
        <v-card class="mt-5">
          <form v-if="showCommentForm === true">
            <v-card-text>
              <v-text-field
                v-model="comment.surname"
                label="Pseudo"
                required
              />
              <v-textarea
                v-model="comment.copy"
                label="Commentaire"
                required
                auto-grow
              />
            </v-card-text>
            <v-card-actions class="d-flex flex-column">
              <v-btn text class="text-h6 text-capitalize" color="primary" @click="createComment()">
                Poster
              </v-btn>
            </v-card-actions>
          </form>
        </v-card>
        <v-btn color="primary" class="pa-2 ma-2 text-h5 text-lowercase" text @click="showCommentForm = !showCommentForm">
          Laisse un commentaire !
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import CommentsViewer from '../../components/CommentsViewer.vue'
import ContentViewer from '../../components/ContentViewer.vue'
import articleQuerry from '~/apollo/queries/articles/article.gql'
import commentMutation from '~/apollo/mutations/comment_mutation.gql'
import commentsQuery from '~/apollo/queries/comments/comment.gql'
// import updateArticle from '~/apollo/mutations/update_article_comments_mutation.gql'
export default {
  components: {
    ContentViewer,
    CommentsViewer
  },
  data () {
    return {
      article: {},
      showCommentForm: false,
      comment: {
        surname: '',
        copy: '',
        id_article: 0
      },
      comments: []
    }
  },
  apollo: {
    article: {
      prefetch: false,
      query: articleQuerry,
      variables () {
        return { id: parseInt(this.$route.params.id) }
      }
    },
    comments: {
      prefetch: false,
      query: commentsQuery,
      variables () {
        return { id_article: parseInt(this.article.id) }
      }
    }
  },
  created () {
    this.formatTitles()
  },
  methods: {
    // Les titre étant convertis depuis Markdown, leur formattage ne suis pas la configuration du site
    // J'utilise cette fonction pour leur attribuer des classes une fois chargés sur la page
    formatTitles () {
      setTimeout(() => {
        const headingsList = document.querySelectorAll('h2, h3, h4, h5, h6')
        headingsList.forEach((heading) => {
          heading.classList.add('secondary--text')
          heading.classList.add('pa-2')
        })
      }, 1000)
    },
    createComment () {
      // Fonction de création de commentaires
      // Cette fonction est actuellement en test et en construction car la version initialement prévue ne fonctionnait pas comme attendu
      // Verifier comment faire pour ajouter le commentaire directement à la liste de commentaires de l'article concerné -- @Samuel GALIERE
      const comment = this.comment
      // const articleCommentsList = []
      comment.id_article = Number(this.article.id)

      this.$apollo.mutate({
        mutation: commentMutation,
        variables: {
          comment: { data: comment }
        }
      }).then(window.location.reload())

      // this.$apollo.query({
      //   query: commentsQuery,
      //   variables: {
      //     id_article: Number(this.article.id)
      //   }
      // })
      //   .then((data) => {
      //     data.data.comments.forEach((element) => {
      //       articleCommentsList.push(Number(element.id))
      //     })
      //   })

      // this.$apollo.mutate({
      //   mutation: updateArticle,
      //   variables: {
      //     id: this.article.id,
      //     article_comments: {
      //       comments: articleCommentsList
      //     }
      //   }
      // }).then(window.location.reload())
    }
  }
}
</script>
<style>
.photo-cover {
  height: 80vh;

}
  .floating-title {
    z-index: 2;
    position: absolute;
    width: 80vw;
    top: 25vh;
}
@media screen and (min-width: 700px) {
  .floating-title {
    width: 35%;
    z-index: 2;
    position: absolute;
    top: 35vh;
    right: 15vw;
  }
  .photo-cover {
  width: 60%;
  height: 100vh;
  right: 15vh;
}
}
@media screen and (min-width: 1265px) {
  .photo-cover {
  width: 60%;
  height: 100vh;
  right: 20vh;
}
}

</style>
