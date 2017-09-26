<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm8 offset-sm2>
        <v-card>
          <v-card-media
            class="white--text"
            height="200px"
            :src="meetup.imageUrl"
          >
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex class="centered" xs12 align-end flexbox>
                  <span class="display-2 meetupTitle">{{ meetup.title }}</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-media>
          <v-card-title>
            <div>
              <h6 title class="grey--text mb-3">{{ meetup.date }}</h6>
              <span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat primary>
              <v-icon left>share</v-icon>
              Share
            </v-btn>
            <v-btn flat primary>
              <v-icon left>favorite</v-icon>
              Explore
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'meetup',
  props: [
    'id'
  ],
  computed: {
    meetup () {
      return this.$store.getters.loadedMeetup(this.id)
    }
  }
}
</script>

<style scoped>
.centered {
  align-self: center;
  text-align: center;
}
.meetupTitle {
  background: rgba(0,0,0,1);
  padding: 0.2em 0.5em;
}

</style>
