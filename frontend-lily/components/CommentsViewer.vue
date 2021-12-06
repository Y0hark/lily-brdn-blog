// Ce module permet d'afficher les commentaires sur les articles grâce à la liste (prop) "comments"
<template>
  <v-card class="pa-2 mt-5">
    <v-card-text class="text-h5 secondary--text">
      L'espace commentaires
    </v-card-text>
    <div v-for="(comment, index) in comments" :key="index">
      <v-card v-if="comment" class="pa-2 ma-2 elevation-0" outlined>
        <v-card-text class="secondary--text">
          {{ comment.surname }}
        </v-card-text>
        <v-card-text>
          {{ comment.copy }}
        </v-card-text>
      </v-card>
    </div>
  </v-card>
</template>
<script>
export default {
  props: {
    comments: { type: Array, default: null }
  }
}
</script>
