<template>
  <div class="template-page">
    <v-row>
      <v-col cols="8">
        <div class="mt-4 mb-2 ml-5 download-container">
          <v-btn color="primary" @click="downloadNow">Download</v-btn>
        </div>

        <div class="routine-container">
          <div class="routine routine--template  " id="routine" ref="routine">
            <div class="date">
              <input type="text" class="date-input" v-model="routineDate" />
            </div>

            <table class="routine-table">
              <thead>
                <tr>
                  <th class="column1">শ্রেণী</th>
                  <th class="column2">বিষয়</th>
                  <th class="column3">সময়</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="(r, i) in routine" :key="i">
                  <td class="column1">
                    <input type="text" v-model="r.class" class="table-input" />
                  </td>
                  <td class="column2">
                    <input
                      type="text"
                      v-model="r.subject"
                      class="table-input"
                    />
                  </td>
                  <td class="column3">
                    <input
                      type="text"
                      v-model="r.duration"
                      class="table-input"
                    />
                  </td>
                </tr>

                <!-- <tr v-for="(r, i) in routine" :key="i">
              <td>
                <div contenteditable="true" :value="r.class">
                  {{ r.class }}
                </div>
              </td>
              <td>
                <div contenteditable="true" :value="r.subject">
                  {{ r.subject }}
                </div>
              </td>
              <td>
                <div contenteditable="true" :value="r.duration">
                  {{ r.duration }}
                </div>
              </td>
            </tr> -->
              </tbody>
            </table>
          </div>
        </div>

        <b-container>
        </b-container>
      </v-col>

      <v-col cols="4">
        <v-card class="mx-auto" max-width="344">
          <v-card-text>
            <div></div>
            <p class="display-1 text--primary">
              Help Text Bangla
            </p>

            <div class="text--primary">
              <li v-for="item in items" :key="item.datas">
                   <h3>
                      {{ item.datas }}
                   </h3>
               </li>

          
            </div>
          </v-card-text>
          <v-card-actions> </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import html2canvas from "html2canvas";

export default {
  components: {
  
  },
  data() {
    return {
      routineDate: "৩ মে এর সময়সূচি",
      routine: [
        {
          class: "৭ম",
          subject: "আরবি ২য় পত্র",
          duration: "বিকাল ৪.০০ - ৪.২০"
        },
        {
          class: "৮ম",
          subject: "আরবি ২য় পত্র",
          duration: "বিকাল ৪.২০ - ৪.৪০"
        },
        {
          class: "৯ম",
          subject: "আরবি ২য় পত্র",
          duration: "বিকাল ৪.৪০ - ৫.০০"
        }
      ],
      items: [
        {
          datas: " ১০.৪৫ - ১১.০৫ -- বাংলাদেশ ও বিশ্বপরিচয় + বিজ্ঞান "
        },
        {
          datas: "  ১১.২৫ - ১২.০৫ -- বাংলাদেশ ও বিশ্বপরিচয় + বিজ্ঞান  "
        },
        {
          datas: " ১২.০৫ - ১২.৪৫ -- ইংরেজি + বাংলাদেশ ও বিশ্বপরিচয় "
        },
        {
          datas: " ১২.৪৫ - ০১.২৫ --ইংরেজি +  হিসাববিজ্ঞান  "
        },
        {
          datas: " ১.২৫-২.১০ -- বাংলাদেশ ও বিশ্বপরিচয় + গণিত "
        },
        {
          datas: " ১০.৪০-১০মাদ্রসা রুটিন ৬ থেকে ১০ শ্রেণী কারিগরি ঘরে বসে কারিগরি ক্রিয়াকলাপভিত্তিকআনন্দদায়ক শিখন"
        }
      ]
    };
  },
  mounted() {},
  methods: {
    downloadNow() {
      this.$refs.routine.style.border = "none";
      html2canvas(this.$refs.routine).then(canvas => {
        // document.body.appendChild(canvas);
        var a = document.createElement("a");
        // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
        a.href = canvas
          .toDataURL("image/jpeg")
          .replace("image/jpeg", "image/octet-stream");
        a.download = "template1.jpg";
        a.click();
        this.$refs.routine.style.border = "1px solid #000";
      });
    }
  }
};
</script>

<style>

.routine--template .routine-table td {
  border: 1px solid #fff;
  color: #fff;
  font-size: 23px;
  padding: 28px 0;
  text-align: center;
}

.width {
  margin-bottom: 404px;
}
</style>
