<template>
  <div class="nav-bar">
    <b-navbar toggleable="lg" type="dark" variant="danger">
    <b-navbar-brand href="#">The Ticketing System</b-navbar-brand>

    <b-navbar-toggle target="nav_collapse" />

    <b-collapse is-nav id="nav_collapse" v-if="!!this.$store.getters.isAuthenticated">

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using button-content slot -->
          <template slot="button-content"><em>{{ this.$store.getters.userName }}</em></template>
          <b-dropdown-item @click="logOut">Signout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  </div>
</template>

<script>

export default {
  name: 'nav-bar',
  methods: {
      logOut() {
          this.$store.commit('signOut');
          this.$router.push({ name: 'login' });
      }
  }
}
</script>