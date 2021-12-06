// Le module instaram du site qui récupère les derniers posts du compte de la propriétaire
<template>
  <!-- Un certain nombre de post sont affichés en fonction de la taille de l'écran -->
  <v-row v-if="instaFeed" justify="center" grid-list-xs class="pl-2 pr-2 overflow-y-auto">
    <v-col
      v-for="index in imagesLoop"
      :key="index"
      cols="3"
      sm="2"
      md="1"
      class="mt-3 pl-1 pr-1"
    >
      <!-- Les photos sont cliquables et permettent d'accéder directement au post sur l'application Instagram -->
      <a :href="instaFeed.data[index-1].permalink" target="__blank">
        <v-card>
          <v-img
            :src="instaFeed.data[index-1].media_url"
          />
        </v-card>
      </a>
    </v-col>
  </v-row>
</template>
<script>
import axios from 'axios'
// import instagramApi from '../credentials.json'
export default {
  data () {
    return {
      token: 'IGQVJYdlFuSlhKcGFXNU9hR0IwS0YtVWVYTkFKOU5xay1tQXBVZA0dNM3lKVUhDc2picndMemJXNkJvMGx3SllPUEJLVWdWRUVZAcFV5LUNPTkNvUl9NVFhneWlOdHNCd2R0VTljUzBR',
      apiBaseUrl: 'https://graph.instagram.com/me/',
      instaFeed: null
    }
  },
  computed: {
    // Suivant la taille d'écran, on n'affiche qu'un certain nombre d'images pour en assurer la visibilité'
    imagesLoop () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs' : return 4
        case 'sm' : return 6
        case 'md' : return 12
        case 'lg' : return 12
        case 'xl' : return 12
      }
      return null
    }
  },
  created () {
    // Les requêtes vers l'API instagram avec le module axios: la première rafraichis le token d'accès longue durée et la deuxième performe la requête
    axios
      .get('https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=' + this.token)
      .then(response => (this.token = response.data.access_token))
    axios
      .get(this.apiBaseUrl + 'media?fields=id,caption,media_url,permalink,timestamp&access_token=' + this.token)
      .then(response => (this.instaFeed = response.data))
  }
}
</script>
