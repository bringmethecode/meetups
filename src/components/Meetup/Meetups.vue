<template>
  <v-container
    style="min-height: 0;"
    fluid
  >
    <v-layout
      row
      wrap
      class="mb-2"
      v-for="meetup in meetups"
      :key="meetup.id"
    >
      <v-flex xs12 sm8 offset-sm2>
        <v-card class="cyan darken-2 white--text">
          <v-container fluid>
            <v-layout row>
              <v-flex xs7 sm8 md9>
                <div>
                  <div class="headline">{{ meetup.title }}</div>
                  <div>{{ meetup.date }}</div>
                </div>
                <v-card-actions class="pl-0 pr-4 mt-4">
                  <v-btn outline dark class="mx-0" :to="'/meetups/' + meetup.id">
                    <v-icon>keyboard_arrow_right</v-icon>
                    View Meetup
                  </v-btn>
                </v-card-actions>
              </v-flex>
              <v-flex xs5 sm4 md3>
                <v-card-media
                  :src="meetup.imageUrl"
                  height="130px"
                ></v-card-media>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  name: 'meetups',
  computed: {
    meetups () {
      return this.$store.getters.loadedMeetups
    }
  }
}

</script>

<style>
</style>
