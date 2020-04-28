<template>
  <div class="home">
    <h1>Select a template</h1>
    <v-row class="mb-6" no-gutters>
      <v-col cols="12" md="4">
        <router-link to="/template1">
          <div class="template">
            <img src="/img/template1.png" alt="" />
          </div>
        </router-link>
      </v-col>

      <v-col cols="12" md="4">
        <router-link to="/template2">
          <div class="template">
            <img src="/img/template2.png" alt="" />
          </div>
        </router-link>
      </v-col>

      <v-col cols="12" md="4">
        <router-link to="/template3">
          <div class="template">
            <img src="/img/template3.png" alt="" />
          </div>
        </router-link>
      </v-col>

      <v-col cols="12" md="4">
        <router-link to="/template4">
          <div class="template">
            <img src="/img/template4.png" alt="" />
          </div>
        </router-link>
      </v-col>
       <v-col cols="12" md="4">
        <router-link to="/template5">
          <div class="template">
            <img src="/img/template3.png" alt="" />
          </div>
        </router-link>
      </v-col>


             <v-col cols="12" md="4">
        <router-link to="/template6">
          <div class="template">
            <img src="/img/template3.png" alt="" />
          </div>
        </router-link>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src



</script>

<style>
img {
  max-width: 100%;
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
</style>
