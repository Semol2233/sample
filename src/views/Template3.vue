<template>
  <div class="template-page">
    <v-row>
      <v-col cols="8">
<div class="mt-4 mb-2 ml-5 download-container">
      <v-btn color="primary" @click="downloadNow">Download</v-btn>
    </div>
    <div class="routine-container">
      <div class="routine routine--template10" id="routine" ref="routine">
        <div class="date">
          <input type="text" class="date-input" v-model="routineDate" />
        </div>

        <table class="routine-tabszle">
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
              <td class="column1">
                <input
                  type="text"
                  v-model="prakPrathomik.class"
                  class="table-input"
                />
              </td>
              <td class="column2">
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
              </td>
              <td class="column3">
                <input
                  type="text"
                  v-model="prakPrathomik.duration"
                  class="table-input"
                />
              </td>
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
      routineDate: "৩ মে এর সময়সূচি ",
      coronaBreak: "জাতীয় সঙ্গীত ও করোনা সচেতনতা (সকাল সকাল ১০.৪০-১০.৪৫)",
      prakPrathomik: {
        class: "প্রাক-প্রাথমিক",
        subject1: "ক্রিয়াকালাপ ভিডিও",
        subject2: " আনন্দদায়ক শিখন (পুনঃপ্রচার)",
        duration: "০৯.০০-০৯.২০"
      },
      routine: [
        {
          class: "১ম",
          subject: "বাংলা (পুনঃপ্রচার)",
          duration: "০৯.২০-০৯.৪০"
        },
        {
          class: "২য়",
          subject: "ইংরেজি (পুনঃপ্রচার)",
          duration: "০৯.৪০-১০.০০"
        },
        {
          class: "৩য়",
          subject: "গণিত",
          duration: "১০.০০-১০.২০"
        },
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
.routine--template3 .routine-table {
  margin-top: 17px;
}

.routine--template3 .routine-table th {
  padding: 8px 0;
  font-size: 23px;
}

.routine--template3 .routine-table td {
  border: 1px solid #fff;
  color: #fff;
  font-size: 22px;
  padding: 9px 0;
  text-align: center;
}

.font-normal {
  font-weight: normal;
}

.prak-row input {
  font-size: 21px;
}


.routine--template10 .column1 {
  width: 232px;
}
.routine--template10 .column1 .table-input {
  max-width: 162px;
}

.routine--template10 .column2 {
  width: 200px;
}
.routine--template10 .column2 .table-input {
  max-width: 253px;
}

.routine--template10 .column3 {
  width: 232px;
}
.routine--template10 .column3 .table-input {
  max-width: 222px;
}

.routine-tabszle {
border: 2px solid #fff;
    width: 683px;
    margin-left: 110px;
    margin-top: 14px;
    border-collapse: collapse;
}

.routine--template2 .routine-tabszle {
  margin-left: 104px;
  margin-top: 22px;
}

.routine-tabszle th {
  border: 1px solid #fff;
  border-collapse: collapse;
  color: #fff;
  font-size: 22px;
  padding: 10px 0;
  text-align: center;
  font-weight: bold;
}

.routine-tabszle td {
  border: 1px solid #fff;
  color: #fff;
  font-size: 20px;
  padding: 11px 0;
  text-align: center;
}
</style>
