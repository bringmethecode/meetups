<template>
  <v-container fill-height>
    <v-layout row align-center wrap>
      <v-flex xs12 md6>
        <h2 display-3>Welcome to Meetups</h2>
        <blockquote>
          A simple web app to organize and subscribe to local meetups.
        </blockquote>
        <br />
        <v-flex md12>
          <div class="text-xs-center">
            <v-btn
              outline
              class="primary--text"
              style="cursor: pointer"
              router
              to="/meetups"
            >Explore Meetups
            </v-btn>
            <v-btn
              outline
              class="red--text"
              style="cursor: pointer"
              router
              to="/organize"
            >Organize New
            </v-btn>
          </div>
        </v-flex>
      </v-flex>
      <v-flex xs12 md6>
        <v-carousel id="meetupsCarousel" hide-controls>
          <v-carousel-item
            v-for="meetup in meetups"
            :key="meetup.id"
            :src="meetup.imageUrl"
            transition="fade"
            reverseTransition="fade"
            @click="onLoadMeetup(meetup.id)"
          >
            <h2 class="meetupTitle">{{ meetup.title }}</h2>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'home',
  computed: {
    meetups () {
      return this.$store.getters.featuredMeetups
    }
  },
  methods: {
    onLoadMeetup (id) {
      this.$router.push('/meetups/' + id)
    }
  }
}

</script>

<style scoped>
#meetupsCarousel .fade-enter-active,
#meetupsCarousel .fade-leave-active,
#meetupsCarousel .fade-leave-to {
	transition: 0.3s ease-out;
	position: absolute;
	top: 0;
	left: 0;
}
#meetupsCarousel .fade-enter,
#meetupsCarousel .fade-leave,
#meetupsCarousel .fade-leave-to {
	opacity: 0;
}

.meetupTitle {
  background: rgba(0,0,0,1);
  padding: 0 0.5em;
  color: #fff;
  margin: 0;
  cursor: pointer;
}
</style>
