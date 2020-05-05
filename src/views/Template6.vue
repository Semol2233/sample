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
        <div class="datssse">
          <input type="text" class="date-input" v-model="routineDate" />
        </div>

        <table class="routssine-table">
          <thead class="thead">
            <tr>
              <th class="column1">শ্রেণী</th>
              <th class="column2">বিষয়</th>
              <th class="column3">
                সময় <span class="font-normal">(সকাল)</span>
              </th>
            </tr>
          </thead>

          <tbody class="tbody">
            <tr class="prak-row">
              <td class="column1">
                <input
                  type="text"
                  v-model="prakPrathomik.class"
                  class="tabssle-input"
                />
              </td>
              <td class="column2">
                <input
                  type="text"
                  v-model="prakPrathomik.subject1"
                  class="tabssle-input"
                />
                <input
                  type="text"
                  v-model="prakPrathomik.subject2"
                  class="tabssle-input"
                  v-if="prakPrathomik.subject2"
                />
              </td>
              <td class="column3">
                <input
                  type="text"
                  v-model="prakPrathomik.duration"
                  class="tabssle-input"
                />
              </td>
            </tr>
            <tr v-for="(r, i) in routine" :key="i">
              <td class="column1">
                <input type="text" v-model="r.class" class="tabssle-input" />
              </td>
              <td class="column2">
                <input type="text" v-model="r.subject" class="tabssle-input" />
              </td>
              <td class="column3">
                <input type="text" v-model="r.duration" class="tabssle-input" />
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
        subject1: "ক্রিয়াকলাপভিত্তিক ",
        subject2: "আনন্দদায়ক শিখন",
        duration: "৯:৪০-১০:০০"
      },
      routine: [
        {
          class: "১ম",
          subject: "বাংলা (পুনঃপ্রচার)",
          duration: "১০:০০-১০:২০"
        },
        // {
        //   class: "২য়",
        //   subject: "ইংরেজি (পুনঃপ্রচার)",
        //   duration: "০৯.৪০-১০.০০"
        // },
        {
          class: "৩য়",
          subject: "গণিত",
          duration: "১০:২০-১০:৪০"
        }
        // {
        //   class: "৪র্থ",
        //   subject: "বিজ্ঞান",
        //   duration: "১০.২০-১০.৪০"
        // },
        // {
        //   class: "৫ম",
        //   subject: "ইংরেজি",
        //   duration: "১০.৪০-১১.০০"
        // }
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

.datssse{
    font-family: "Hind Siliguri", sans-serif;
}
.routine--template5 .routssine-table {
  margin-top: 13px;
}
.thead{
   font-family: "Hind Siliguri", sans-serif;

}
.routine--template5 .routssine-table th {
  padding: 6px 0;
  font-size: 23px;
}

.routine--template5 .routssine-table td {
border: 1px solid #fff;
    color: #fff;
    font-size: 22px;
    padding: 8px 0;
    text-align: center;
}

.routssine-input {
  max-width: 100%;
  text-align: center;
}
.font-normal {
  font-weight: normal;
}

.prak-row input {
  font-size: 21px;
}
.tbody{
  font-family: 'kongshomjregular';
}

.datssse {
  margin-left: 231px;
  width: 441px;
  height: 68px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: bold;
  font-size: 43px;
  margin-top: 104px;
}







.routssine-table{
  font-family: 'kongshomjregular';
}




  .column2 .tasddble-input {
width: 282px;
    height: 35px;
        text-align: center;
}
  .column3 .tasddble-input {
width: 282px;
    height: 35px;
        text-align: center;
}



.routssine-table {
    border: 2px solid #fff;
    width: 687px;
    margin-left: 109px;
    border-collapse: collapse;
}

.routine--template2 .routssine-table {
  margin-left: 104px;
  margin-top: 22px;
}

.routssine-table th {
  border: 1px solid #fff;
  border-collapse: collapse;
  color: #fff;
  font-size: 22px;
  padding: 10px 0;
  text-align: center;
  font-weight: bold;
}

.routssine-table td {
  border: 1px solid #fff;
  color: #fff;
  font-size: 25px;
  padding: 10px 0;
  text-align: center;
}


  .column2 .tabssle-input {
width: 258px;
    height: 34px;
        text-align: center;
}

  .column1 .tabssle-input {
    width: 148px;
    height: 32px;
    text-align: center;
}
.column3 .tabssle-input {
width: 222px;
    height: 32px;
    text-align: center;
}
</style>
