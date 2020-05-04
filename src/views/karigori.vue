<template>
  <div class="home">
    <v-container class="grey lighten-5">
      <v-row class="mb-6" justify="center" no-gutters>
        <v-col lg="3" cols="6" class="adfgsadius mt-7 ml-3">
          <div>
            <div class="text-center mb-4">
              <v-btn color="primary" @click="alert = !alert">
                Hide
              </v-btn>
            </div>
            <v-alert
              :value="alert"
              color="grey darken-4"
              dark
              border="top"
              icon="mdi-medium"
              transition="scale-transition"
            >
              <strong>
                অনেক সময় কলাম ছোট বড় করা লাগতে পারে তখন - শিমুল বলতে হবে</strong
              >
            </v-alert>
          </div>
        </v-col>
      </v-row>

      <v-row class="mb-6 mt-7" justify="center" no-gutters>
        <v-col cols="8" lg="8" class="ml-3">
          <hr />
        </v-col>
      </v-row>
      <v-row class="mb-6 mt-7" justify="center" no-gutters>
        <v-col cols="3" lg="4" class="ml-3">
          <v-card class=" mx-auto grey darken-4" outlined tile max-width="600">
            <router-link to="/Template5">
              <v-img
                class="white--text align-end"
                src="/img/template3.png"
              ></v-img>
            </router-link>

            <v-card-title class="white--text text--lighten-1 dfcdacasdcs"
              ><strong> ঘরে বসে শিখি</strong></v-card-title
            >
          </v-card>
        </v-col>

        <v-col cols="3" lg="4" class="ml-3">
          <v-card class=" mx-auto green accent-3" outlined tile max-width="600">
            <router-link to="/template6">
              <v-img class="white--text align-end " src="/img/template3.png">
              </v-img>
            </router-link>
            <v-card-title class="white--text text--lighten-1 dfcdacasdcs"
              ><strong>ঘরে বসে শিখি</strong></v-card-title
            >
          </v-card>
        </v-col>
      </v-row>


    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      alert: true
    };
  }
};
</script>

<style>
.csccsc {
  width: 30px;
  height: 30px;
}

.template {
  margin: 22px;
  cursor: pointer;
  border: 1px solid #e0e0e0;
}

.template:hover {
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
}

.dyswdgw {
  width: 40px;
  height: 40px;
}

.v-application .mb-6 {
  margin-bottom: 1px !important;
}
.ihgdushd {
  margin-top: 300p;
}
.v-button {
  font-size: 12px;
  height: 30px;
  text-align: center;
}
.adfgsadius {
  width: 300px;
}


.dfcdacasdcs {
  font-family: "Hind Siliguri", sans-serif;
  font-weight: bold;
  background-color: rgb(0, 0, 0);
}
</style>
