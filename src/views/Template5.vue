<template>
  <div class="template-page">
    <v-row>
      <v-col cols="8">
<div class="mt-4 mb-2 ml-5 download-container">
      <v-btn color="primary" @click="downloadNow">Download</v-btn>
      <h1>Extra Data 3 col</h1>
    </div>

    <div class="routine-container">
      <div class="routine routine--template5" id="routine" ref="routine">
        <div class="datse">
          <input type="text" class="date-input" v-model="routineDate" />
        </div>

        <table class="routine-table">
          <thead>
            <tr>
              <th class="column1">শ্রেণী</th>
              <th class="column2">বিষয়</th>
              <th class="column3">
                সময় <span class="font-normal">(সকাল)</span>
              </th>
            </tr>
          </thead>

          <tbody>
            <tr class="prak-row">
              <!-- <td class="column1">
                <input
                  type="text"
                  v-model="prakPrathomik.class"
                  class="table-input"
                />
              </td> -->
              <!-- <td class="column2">
                <input
                  type="text"
                  v-model="prakPrathomik.subject1"
                  class="table-input"
                />
                <input
                  type="text"
                  v-model="prakPrathomik.subject2"
                  class="table-input"
                  v-if="prakPrathomik.subject2"
                />
              </td> -->
              <!-- <td class="column3">
                <input
                  type="text"
                  v-model="prakPrathomik.duration"
                  class="table-input"
                />
              </td> -->
            </tr>
            <tr v-for="(r, i) in routine" :key="i">
              <td class="column1">
                <input type="text" v-model="r.class" class="table-input" />
              </td>
              <td class="column2">
                <input type="text" v-model="r.subject" class="table-input" />
              </td>
              <td class="column3">
                <input type="text" v-model="r.duration" class="table-input" />
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
      </v-col>

      <v-col cols="4">
<googledrive />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import html2canvas from "html2canvas";
import googledrive from "@/components/googledrive"

export default {
       components: {
       googledrive
    },
  data() {
    return {
      routineDate: "২২ এপ্রিলের সময়সুচি",
      coronaBreak: "জাতীয় সঙ্গীত ও করোনা সচেতনতা (সকাল ১১ঃ০০-১১ঃ০৫)",
      prakPrathomik: {
        class: "প্রাক-প্রাথমিক",
        subject1: "ক্রিয়াকালাপ ভিডিও",
        subject2: " আনন্দদায়ক শিখন (পুনঃপ্রচার)",
        duration: "০৯.০০-০৯.২০"
      },
      routine: [
        // {
        //   class: "১ম",
        //   subject: "বাংলা (পুনঃপ্রচার)",
        //   duration: "০৯.২০-০৯.৪০"
        // },
        {
          class: "২য়",
          subject: "ইংরেজি (পুনঃপ্রচার)",
          duration: "০৯.৪০-১০.০০"
        },
        // {
        //   class: "৩য়",
        //   subject: "গণিত",
        //   duration: "১০.০০-১০.২০"
        // },
        {
          class: "৪র্থ",
          subject: "বিজ্ঞান",
          duration: "১০.২০-১০.৪০"
        },
        {
          class: "৫ম",
          subject: "ইংরেজি",
          duration: "১০.৪০-১১.০০"
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
.routine--template5 .routine-table {
  margin-top: 16px;
}

.routine--template5 .routine-table th {
  padding: 8px 0;
  font-size: 23px;
}

.routine--template5 .routine-table td {
  border: 1px solid #fff;
  color: #fff;
  font-size: 23px;
  padding: 14px 0;
  text-align: center;
}

.font-normal {
  font-weight: normal;
}

.prak-row input {
  font-size: 21px;
}
</style>
