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
        date: '2017-01-02',
        description: 'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.'
      },
      {
        id: 'ajajajaja',
        title: 'M2',
        imageUrl: 'https://www.holidayguru.ie/wp-content/uploads/2017/01/Time-Square-New-York-City-iStock-487537456-2.jpg',
        date: '2018-01-02',
        description: 'His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. Whats happened to me? he thought. It wasnt a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls.'
      }
    ],
    user: {
      id: '',
      registeredMeetups: []
    }
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
    createMeetup ({commit}, payload) {
      commit('createMeetup', payload)
    }
  },
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
