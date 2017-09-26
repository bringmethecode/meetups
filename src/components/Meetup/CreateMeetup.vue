<template>
  <v-layout class="mt-5">
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-media :src="require('@/assets/map.jpg')" height="200px">
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex class="buttonContainer text-xs-center" xs12 align-center flexbox>
                <v-btn class="addPhoto" flat>
                  <v-icon dark>add_a_photo</v-icon>
                </v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-container>
          <v-layout>
            <v-flex>
              <h6 title class="text-xs-center">ADD A NEW MEETUP</h6>
              <v-form v-model="valid" ref="form">
                <v-text-field
                  label="Name"
                  v-model="name"
                  :rules="nameRules"
                  :counter="10"
                  required
                ></v-text-field>
                <v-text-field
                  label="E-mail"
                  v-model="email"
                  :rules="emailRules"
                  required
                ></v-text-field>
                <v-select
                  label="Item"
                  v-model="select"
                  :items="items"
                  :rules="[(v) => !!v || 'Item is required']"
                  required
                ></v-select>
                <v-checkbox
                  label="Do you agree?"
                  v-model="checkbox"
                  :rules="[(v) => !!v || 'You must agree to continue!']"
                  required
                ></v-checkbox>

                <v-btn @click="submit" :class="{ green: valid, red: !valid }">submit</v-btn>
                <v-btn @click="clear">clear</v-btn>
              </v-form>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: 'organize',
    data () {
      return {
        valid: false,
        name: '',
        nameRules: [
          (v) => !!v || 'Name is required',
          (v) => v && v.length <= 10 || 'Name must be less than 10 characters'
        ],
        email: '',
        emailRules: [
          (v) => !!v || 'E-mail is required'
        ],
        select: null,
        items: [
          'Item 1',
          'Item 2',
          'Item 3',
          'Item 4'
        ],
        checkbox: false
      }
    },
    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          this.$refs.form.$el.submit()
        }
      },
      clear () {
        this.$refs.form.reset()
      }
    }

  }
</script>

<style scoped>
.buttonContainer {
  align-self: center;
}
.addPhoto {
  border-radius: 50%;
  height: 6.3em;
  background-color: #3D5AFE !important;
  border: none;
}
</style>
