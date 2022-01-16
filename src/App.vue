<template>
  <div>
    <nav class="nav navbar navbar-expand navbar-dark bg-dark">
      <router-link to="https://vuejs.org" class="navbar-brand ms-1">
        <img src="./assets/logo.png" height="40">
        Vue
      </router-link>
      <div class="navbar-nav me-auto">
        <li class="nav-item"  v-if="isAdmin">
          <router-link to="/admin" class="nav-link" active-class="active">
            Admin
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/home" class="nav-link" active-class="active">
            Home
          </router-link>
        </li>
      </div>

      <div class="navbar-nav ms-auto" v-if="!currentUser">
        <li class="nav-item">
          <router-link to="/register" class="nav-link" active-class="active">
            Sign Up
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link" active-class="active">
            Sign In
          </router-link>
        </li>
      </div>

      <div class="navbar-nav ms-auto" v-if="currentUser">
        <li class="nav-item">
          <router-link to="/profile" class="nav-link" active-class="active">
            {{currentUser.name}}
          </router-link>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" @click="logOut">
            Sign Out
          </a>
        </li>
      </div>

    </nav>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import vuex from 'vuex';
import Role from './models/role';

export default {
  computed: {
    ...vuex.mapGetters(['currentUser']),
    isAdmin() {
      return this.currentUser?.role === Role.ADMIN;
    },
  },
  methods: {
    ...vuex.mapActions(['clearUser']),
    logOut() {
      this.clearUser();
      this.$router.push('/login');
    }
  },
}
</script>

<style>

</style>
