<template>
  <nav class="navbar is-info">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" to="/">
            <img src="/images/logo.png"  width="142" height="68">
        </nuxt-link>
        <button class="button navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item has-dropdown is-hoverable" v-if="isAuthenticated">
            <a class="navbar-link">
              {{ loggedInUser.name }}
            </a>
            <div class="navbar-dropdown">
              <nuxt-link class="navbar-item" to="/profile">Mi cuenta</nuxt-link>
              <hr class="navbar-divider">
              <a class="navbar-item" @click="logout">Salir</a>
            </div>
          </div>
          <template v-else>
            <nuxt-link class="navbar-item" to="/login">Ingresar</nuxt-link>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  methods: {
  async logout() {
    await this.$auth.logout();
  },
},
}
</script>