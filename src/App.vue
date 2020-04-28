<template>
  <v-app id="inspire">
    <div class="login-container" v-if="!loggedIn">
      <div class="login-form">
        <v-text-field
          v-model="password"
          label="Enter Password"
          type="password"
          @keydown.enter="loginNow"
        ></v-text-field>
        <v-btn color="primary" @click="loginNow" class="login-button"
          >Login</v-btn
        >
      </div>
    </div>

    <template v-else>
      <v-navigation-drawer v-model="drawer" app>
        <v-list dense>
          <v-list-item link to="/">
            <v-list-item-action>
              <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar app color="indigo" dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <router-link to="/" class="logo-link">
          <v-toolbar-title>Routine Maker</v-toolbar-title>
        </router-link>
      </v-app-bar>

      <v-content>
        <router-view></router-view>
      </v-content>
      <v-footer color="indigo" app>
        <span class="white--text">&copy; 2020</span>
      </v-footer>
    </template>

    <v-snackbar v-model="snackbar">
      Invalid Password
      <v-btn color="pink" text @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import md5 from "md5";
export default {
  props: {
    source: String
  },

  data: () => ({
    drawer: '',
    password: "",
    loggedIn: true,
    snackbar: false
  }),
  methods: {
    loginNow() {
      console.log(this.password);
      if (md5(this.password) !== "cfba4847be151104d4fcd35c5af918df") {
        this.snackbar = true;
      } else {
        this.loggedIn = true;
        this.snackbar = false;
      }
    }
  }
};
</script>

<style>
.logo-link {
  color: #fff !important;
  text-decoration: none;
}

.login-container {
  width: 100vw;
  height: 100vh;
  display: flex;
}

.login-form {
  margin: auto;
  text-align: center;
  width: 307px;
  padding: 45px;
  box-shadow: 0 0 3px 2px #eee;
}

.login-input {
  width: 100%;
}

.login-button {
  width: 100%;
}
</style>
