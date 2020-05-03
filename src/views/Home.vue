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

      <v-row class="mb-6" justify="center" no-gutters>
        <v-col cols="3" lg="4" class="ml-3">
          <v-card
            class=" mx-auto yellow accent-3"
            outlined
            tile
            max-width="600"
          >
            <router-link to="/template1">
              <v-img class="white--text align-end " src="/img/template1.png">
              </v-img>
            </router-link>
            <v-card-title class="yellow--text text--lighten-1 dfcdacasdcs"
              ><strong>আমার ঘরে আমার মাদ্রাসা </strong></v-card-title
            >
          </v-card>
        </v-col>

        <v-col cols="3" lg="4" class="ml-3">
          <v-card class=" mx-auto green accent-3" outlined tile max-width="600">
            <router-link to="/template2">
            <v-img class="white--text align-end " src="/img/template2.png">
            </v-img>
            </router-link>
             <v-card-title class="yellow--text text--lighten-1 dfcdacasdcs"
                ><strong>আমার ঘরে আমার স্কুল</strong></v-card-title
              >
          </v-card>
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
            <router-link to="/karigori">
              <v-img
                class="white--text align-end"
                src="/img/template3.png"
              ></v-img>
            </router-link>

            <v-card-title class="yellow--text text--lighten-1 dfcdacasdcs"
              ><strong>ঘরে বসে শিখি </strong></v-card-title
            >
          </v-card>
        </v-col>

        <v-col cols="3" lg="4" class="ml-3">
          <v-card class=" mx-auto green accent-3" outlined tile max-width="600">
            <router-link to="/ghorebose">
              <v-img class="white--text align-end " src="/img/template4.png">
              </v-img>
            </router-link>
            <v-card-title class="yellow--text text--lighten-1 dfcdacasdcs"
              ><strong>ঘরে বসে করিগরি শিক্ষা </strong></v-card-title
            >
          </v-card>
        </v-col>
      </v-row>

      <div class="ihgdushd">
        <v-row class="mb-6 mt-7" justify="center" no-gutters>
          <v-col cols="3" lg="4" class="ml-3">
            <v-card
              class=" mx-auto grey darken-4"
              outlined
              tile
              max-width="600"
            >
             <router-link to="/ramadan">
              <v-img class="white--text align-end " src="/img/1-01-01.jpg">
              </v-img>
               </router-link>
               <v-card-title class="yellow--text text--lighten-1 dfcdacasdcs"
                  ><strong>রামাদান</strong></v-card-title
                >
            </v-card>
          </v-col>

          <v-col cols="3" lg="4" class="ml-3">
            <v-card class="" outlined tile max-width="600"> </v-card>
          </v-col>
        </v-row>
      </div>
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
.dfcsdcssd {
  border: ;
}

.dfcdacasdcs {
  font-family: "Hind Siliguri", sans-serif;
  font-weight: bold;
  background-color: rgb(0, 0, 0);
}
</style>

//
<v-row class="mb-6" no-gutters>
  //     <v-col cols="12" md="4">
  //       <router-link to="/template1">
  
  //       </router-link>
  //     </v-col>

  //     <v-col cols="12" md="4">
  //       <router-link to="/template2">
  //         <div class="template">
  //           <img src="/img/template2.png" alt="" />
  //         </div>
  //       </router-link>
  //     </v-col>

  //     <!-- <v-col cols="12" md="4">
  //       <router-link to="/template3">
  //         <div class="template">
  //           <img src="/img/template3.png" alt="" />
  //         </div>
  //       </router-link>
  //     </v-col> -->

  //                    <v-col cols="12" md="4">
  //       <router-link to="/ramadan">
  //         <div class="template">
  //           <img src="/img/1-01-01.jpg" alt="" />
  //         </div>
  //       </router-link>
  //     </v-col>

  //     <v-col cols="12" md="4">
  //       <router-link to="/template4">
  //         <div class="template">
  //           <img src="/img/template4.png" alt="" />
  //         </div>
  //       </router-link>
  //     </v-col>
  //      <v-col cols="12" md="4">
  //       <router-link to="/template5">
  //         <div class="template">
  //           <img src="/img/template3.png" alt="" />
  //         </div>
  //       </router-link>
  //     </v-col>


  //            <v-col cols="12" md="4">
  //       <router-link to="/template6">
  //         <div class="template">
  //           <img src="/img/template3.png" alt="" />
  //         </div>
  //       </router-link>

  //     </v-col>
      
  //   </v-row>
