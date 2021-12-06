// Le footer du site
<template>
  <v-card
    flat
    tile
    class="text-center"
  >
    <v-card-text>
      <v-btn
        v-for="(icon, i) in icons"
        :key="i"
        class="accent--text"
        icon
        :href="icon.link"
        target="_blank"
      >
        <v-icon>
          {{ icon.icon }}
        </v-icon>
      </v-btn>
    </v-card-text>

    Merci à <a href="http://boliere.net" target="_blank" rel="noopener noreferrer">Samuel</a> pour le blog!
    <v-divider />

    <v-card-text>
      {{ new Date().getFullYear() }} — <strong class="accent--text">Lily Bardin</strong>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  data () {
    return {
      icons: {
        insta: {
          icon: 'mdi-instagram',
          link: 'https://www.instagram.com/lilybrdn/'
        },
        mail: {
          icon: 'mdi-gmail',
          link: 'mailto:lilybrdn@gmail.com'
        }
      }
    }
  }
}
</script>
