<template>
  <v-layout :class="addMargin">
    <v-flex xs12 sm6 offset-sm3>
      <h6 title class="formTitle">ORGANIZE A NEW MEETUP</h6>
      <v-card>
        <v-form
          v-model="valid"
          ref="meetupForm"
          @submit.prevent="onSubmitMeetup"
        >

          <v-card-media :src="imageUrl" height="200px">
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex class="buttonContainer text-xs-center" xs12 align-center flexbox>
                  <v-btn class="addPhoto" flat>
                    <v-icon dark>add_a_photo</v-icon>
                  </v-btn>
                  <br />
                  <span class="photoDesc">ADD MEETUP IMAGE</span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-media>

          <v-container>
            <v-layout>
              <v-flex xs10 offset-xs1>
                <v-text-field
                  label="Meetup Title"
                  name="title"
                  id="title"
                  v-model="title"
                  :rules="titleRules"
                  required
                ></v-text-field>
                <v-text-field
                  label="Location"
                  name="location"
                  id="location"
                  v-model="location"
                  :rules="locationRules"
                  required
                ></v-text-field>
                <v-text-field
                  label="Description"
                  name="description"
                  id="description"
                  v-model="description"
                  :rules="descriptionRules"
                  multi-line
                  required
                ></v-text-field>
                <v-container class="pa-0">
                  <v-layout>
                    <v-flex xs6 offset-xs3>
                      <v-card-actions class="justifyContent">
                        <v-btn
                          type="submit"
                          :class="{ green: valid, red: !valid }"
                          :disabled="!valid"
                        >create
                        </v-btn>
                        <v-btn @click="clear">clear</v-btn>
                      </v-card-actions>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-flex>
            </v-layout>
          </v-container>

        </v-form>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: 'organize',
    data () {
      return {
        isMobile: false,
        imageUrl: require('@/assets/map.jpg'),
        title: '',
        location: '',
        description: '',
        titleRules: [
          (v) => !!v || 'Title is required',
          (v) => v && v.length >= 5 || 'Title must be at least 5 characters'
        ],
        locationRules: [
          (v) => !!v || 'Location is required',
          (v) => v && v.length >= 10 || 'Please give a more detailed address'
        ],
        descriptionRules: [
          (v) => !!v || 'Description is required',
          (v) => v && v.length >= 50 || 'So little info = :('
        ],
        valid: false
      }
    },
    computed: {
      addMargin: function () {
        if (window.innerWidth > 600) {
          return 'mt-5'
        }
      }
    },
    methods: {
      submit () {
        console.log(this.valid)
        if (this.$refs.form.validate()) {
          this.$refs.form.$el.submit()
        }
      },
      clear () {
        this.$refs.meetupForm.reset()
      },
      onSubmitMeetup () {
        if (!this.valid) {
          return
        }
        const data = {
          id: this.title,
          title: this.title,
          location: this.location,
          imageUrl: this.imageUrl,
          description: this.description,
          date: new Date()
        }
        this.$store.dispatch('createMeetup', data)
        this.$router.push('/meetups')
      }
    }
  }
</script>

<style scoped>
.justifyContent {
  justify-content: center;
}
.formTitle {
  color: #FFB300;
  text-align: center;
}
.buttonContainer {
  align-self: center;
}
.photoDesc {
  color: #fff;
  font-weight: 900;
}
.addPhoto {
  border-radius: 50%;
  height: 6.3em;
  background-color: #3D5AFE !important;
  border: none;
}
</style>
