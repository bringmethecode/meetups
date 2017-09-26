import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        id: 'ajaja',
        title: 'M1',
        imageUrl: 'https://assets3.thrillist.com/v1/image/2078277/size/tmg-facebook_social.jpg',
        date: '2017-01-02'
      },
      {
        id: 'ajajajaja',
        title: 'M2',
        imageUrl: 'https://www.holidayguru.ie/wp-content/uploads/2017/01/Time-Square-New-York-City-iStock-487537456-2.jpg',
        date: '2018-01-02'
      }
    ],
    user: {
      id: '',
      registeredMeetups: []
    }
  },
  mutations: {},
  actions: {},
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    }
  }
})
