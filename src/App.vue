<template>
  <v-app light>
    <v-navigation-drawer
      temporary
      v-model="drawer"
      light
      overflow
      absolute
    >
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg" />
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile v-for="item in items" :key="item.title" @click="">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class="primary">
      <v-toolbar-side-icon
        @click.native.stop="drawer = !drawer"
        class="hidden-sm-and-up"
      >
      </v-toolbar-side-icon>
      <v-toolbar-title>Meetups</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon class="hidden-xs-only" v-for="item in items" :key="item.title" @click="">
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer: false,
        items: [
          { title: 'Organize Meetup', icon: 'add_circle' },
          { title: 'View Meetups', icon: 'supervisor_account' },
          { title: 'Profile', icon: 'face' },
          { title: 'Signup', icon: 'done_all' },
          { title: 'Sign In', icon: 'https' }
        ]
      }
    }
  }
</script>
