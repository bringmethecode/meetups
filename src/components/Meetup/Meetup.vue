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
              <blockquote class="meetupInfo">
                <h5 class="grey--text">{{ meetup.location }}</h5>
                <h6 class="grey--text">{{ meetup.date }}</h6>
              </blockquote>
              <span>{{ meetup.description }}</span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat primary>
              <v-icon left>share</v-icon>
              Share
            </v-btn>
            <v-btn flat primary>
              <v-icon left>favorite</v-icon>
              Subscribe
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
.meetupInfo {
  padding: 0.5em 1em;
  margin-bottom: 1em;
}
.meetupInfo h6 {
  font-size: 0.9em;
  margin: 0 !important;
}
.meetupInfo h5 {
  font-weight: 700;
  font-size: 1.1em;
}
</style>
