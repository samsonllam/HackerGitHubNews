<template>
  <v-layout
    column
    justify-center
    align-center>
    <v-flex
      xs12
      sm8
      md6>
      <v-card>
        <v-container
          fluid
          grid-list-md
        >
          <v-layout 
            row 
            wrap>
            <v-flex
              v-for="card in githubstories"
              v-bind="{ [`xs4`]: true }"
              :key="card.title"
            >
              <v-card
                color="black">
                <v-img
                  :src="image"
                  height="200px"
                >
                  <v-container
                    fill-height
                    fluid
                    pa-2
                  >
                    <v-layout fill-height>
                      <v-flex 
                        xs12 
                        align-end
                        flexbox>
                        <a 
                          :href="card.url"
                          target="_blank">
                          <span 
                            class="headline white--text" 
                            v-text="card.title"/>
                        </a>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-img>

                <v-card-actions>
                  <v-spacer/>
                  <v-btn 
                    icon 
                    color="white">
                    <v-icon>favorite</v-icon>
                  </v-btn>
                  <v-btn 
                    icon 
                    color="white">
                    <v-icon>bookmark</v-icon>
                  </v-btn>
                  <v-btn 
                    icon 
                    color="white">
                    <v-icon>share</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    image: require('@/assets/image.png'),
    topstories: [],
    githubstories: []
  }),
  mounted () {
    // fetch topstories
    this.$axios.$get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    .then(res => {
      this.topstories = res;

      // fetch githubstories
      this.topstories.forEach(storyId => {
        this.$axios.$get(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`)
        .then(res => {
          if( res.url && res.url.includes('github') ){
            this.githubstories.push(res)
          }
        })
      });
    })
    .catch(err => {
      console.log(err);
    })
  }
}
</script>
