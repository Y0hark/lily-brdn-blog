// Module d'affichage de contenu de Strapi
// En fonction des types de data reçus, une sequence de HTML est mise en place pour afficher ce contenu
// La props content est un objet sur lequel on itère et dans lequel sont contenu tous les components provenant de Strapi
<template>
  <v-card align="center">
    <!-- eslint-disable-next-line vue/no-v-html -->
    <v-card-text class="black--text" v-html="$md.render(String(article.copy))" />
    <div v-for="(contents, i) in article.content" :key="i">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <v-card-text v-if="contents.__typename === 'ComponentBlogParagraphe'" class="black--text" v-html="$md.render(String(contents.copy))" />
      <div v-if="contents.__typename === 'ComponentBlogImages'" class="d-none d-md-block">
        <v-row>
          <v-col
            v-for="(image, z) in contents.images"
            :key="z"
            :cols="12/contents.images.length"
          >
            <v-card-text>
              <v-img
                :src="image.url"
              />
            </v-card-text>
          </v-col>
        </v-row>
      </div>
      <div v-if="contents.__typename === 'ComponentBlogImages'" class="d-md-none">
        <v-carousel
          hide-delimiter-background
          delimiter-icon="mdi-minus"
          height="auto"
        >
          <v-carousel-item
            v-for="(image, m) in contents.images"
            :key="m"
            :src="image.url"
          />
        </v-carousel>
      </div>
      <div v-if="contents.__typename === 'ComponentBlogLien'" class="d-none d-md-block">
        <v-row no-gutters>
          <v-col
            v-for="(lien, index) in contents.link"
            :key="index"
            :cols="12/contents.link.length"
          >
            <link-prevue
              :url="lien.link"
            >
              <div slot-scope="props">
                <a :href="lien.link" target="__blank" style="text-decoration:none">
                  <v-card
                    align="center"
                    class="ma-2"
                  >
                    <v-img
                      :src="props.img"
                      :alt="props.title"
                    />
                    <v-card-title primary-title class="text-caption text-lowercase">
                      {{ props.title }}
                    </v-card-title>
                  </v-card>
                </a>
              </div>
            </link-prevue>
          </v-col>
        </v-row>
      </div>
      <div v-if="contents.__typename === 'ComponentBlogLien'" class="d-md-none">
        <v-carousel height="auto" class="pa-2">
          <v-carousel-item
            v-for="(lien, n) in contents.link"
            :key="n"
          >
            <link-prevue
              :url="lien.link"
            >
              <div slot-scope="props">
                <a :href="lien.link" target="__blank" style="text-decoration:none">
                  <v-img
                    :src="props.img"
                    :alt="props.title"
                  />
                </a>
              </div>
            </link-prevue>
          </v-carousel-item>
        </v-carousel>
      </div>
      <div v-if="contents.__typename === 'ComponentBlogQuote'">
        <v-card-text>
          <blockquote class="quote ml-10 mr-10 pa-2 rounded">
            <span class="backtides-top">"</span> <br>
            {{ contents.quote }}
            <span class="author">{{ contents.author }}</span>
          </blockquote>
        </v-card-text>
      </div>
    </div>
  </v-card>
</template>
<script>
import LinkPrevue from 'link-prevue'
export default {
  components: {
    LinkPrevue
  },
  props: {
    article: { type: Object, default: null }
  },
  data () {
    return {

    }
  }
}
</script>
<style lang="scss">
  .v-card__text, .v-card__title {
  word-break: normal; /* maybe !important  */
}

.quote {
  width: 60vw;
  left: -13vw;
  font-style:italic;
  color: #555555;
  border-left:8px solid #AA7060 ;
  line-height:1.6;
  position: relative;
  background:#EDEDED;
}

@media screen and (min-width: 300px) {
    .quote {
    width: 60vw;
    left: -10vw;
  }
}
@media screen and (min-width: 350px) {
    .quote {
    width: 60vw;
    left: -8vw;
  }
}
@media screen and (min-width: 450px) {
    .quote {
    width: 60vw;
    left: -4vw;
  }
}
@media screen and (min-width: 450px) {
    .quote {
    width: 60vw;
    left: 0;
  }
}
@media screen and (min-width: 1030px) {
    .quote {
    width: 50vw;
    left: 0;
  }
}
@media screen and (min-width: 1565px) {
    .quote {
    width: 40vw;
    left: 0;
  }
}

.author {
  display:block;
  color:#333333;
  font-style: normal;
  font-weight: bold;
  margin-top:1em;
}

.backtides-top {
  color:#AA7060;
  font-size:4em;
  position: absolute;
  top: -1vh;
  left: 1vw;
}
</style>
