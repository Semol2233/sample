<template>
  <div class="template-page">
    <div class="mt-4 mb-2 ml-5 download-container">
      <v-btn color="primary" @click="downloadNow">Download</v-btn>
    </div>

    <div class="routine-container">
      <div class="routine routine--template11" id="routine" ref="routine">
        <div class="date">
          <input type="text" class="date-input" v-model="routineDate" />
        </div>

        <table class="routine-tabsle">
          <thead>
            <tr>
              <th class="column1 ">শ্রেণী</th>
              <th class="column2">১ম পিরিয়ড</th>
              <th class="column3">২য় পিরিয়ড</th>
              <th class="column4">৩য় পিরিয়ড</th>
            </tr>
          </thead> 

          <tbody>
            <tr>
              <td colspan="4">
                <input type="text" v-model="coronaBreak" class="corona-input" />
              </td>
            </tr>
            <tr v-for="(r, i) in routine" :key="i">
              <td class="column1">
                <input type="text" v-model="r.class" class="table-input" />
                <input
                  type="text"
                  v-model="r.time1"
                  class="table-input"
                  v-if="r.time1"
                />
              </td>
              <td class="column2">
                <input type="text" v-model="r.subject1" class="table-input" />
              </td>
              <td class="column3">
                <input type="text" v-model="r.subject2" class="table-input" />
              </td>
                      <td class="column4">
                <input type="text" v-model="r.subjddect1" class="table-input" />
                
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
  </div>
</template>

<script>
import html2canvas from "html2canvas";

export default {
  components: {},
  data() {
    return {
      routineDate: "৮ জুন এর সময়সূচি",
      coronaBreak: "জাতীয় সঙ্গীত ও করোনা সচেতনতা (সকাল ১০.৩৫ - ১০.৪০)",
      routine: [
        {
          class: "৬ষ্ঠ",
          subject1: "বাংলা",
          subjddect1: "----------------",
          time1: "(সকাল ১০.৪০ - সকাল ১১.২০)",
          subject2: "তথ্য ও যোগাযোগ প্রযুক্তি",
          time2: "(সকাল ১১.৪৫)"
        },
        {
          class: "৭ম",
          subject1: "বাংলাদেশ ও বিশ্বপরিচয়",
          subjddect1: "----------------",
          time1: "(সকাল ১১.২০ - দুপুর ১২.০০)",
          subject2: "বিজ্ঞান",
          time2: "(সকাল ১১.৪৫)"
        },
        {
          class: "৮ম",
          subject1: "ইংরেজি",
          subjddect1: "----------------",
          time1: "(দুপুর ১২.০০ - দুপুর ১২.৪০)",
          subject2: "গণিত",
          time2: "(দুপুর ১.০৫)"
        },
        {
          class: "৯ম",
          subject1: "বাংলা",
          subjddect1: "হিসাববিজ্ঞান",
          time1: "(দুপুর ১২.৪০ - দুপুর  ১.৪০)",
          subject2: "উচ্চতর গণিত",
          time2: "(দুপুর ১.৪৫)"
        },
        {
          class: "১০ম",
          subject1: "জীববিজ্ঞান",
          subjddect1: "গণিত",
          time1: "(দুপুর ১.৪০ - দুপুর  ২.৪৫)",
          subject2: "বাংলাদেশ ও বিশ্বপরিচয়",
          time2: "(দুপুর ২.২৫)"
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

.template-page{
   font-family: "Hind Siliguri", sans-serif;

}
.corona-input {
  width: 100%;
  text-align: center;
  font-size: 35px; 
}


.routine-table {
  border: 2px solid #fff;
  width: 1146px;
  margin-left: 116px;
  margin-top: 39px;
  border-collapse: collapse;
}
.routine--template2 .routine-table th {
  padding: 3px 0;
  font-size: 22px;
}

.routine--template2 .routine-table td {
  border: 1px solid #fff;
  color: #fff;
  font-size: 19px;
  padding: 2px 0;
  text-align: center;
}

.routine--template11 .column1 {
  width: 232px;
}
.routine--template11 .column1 .table-input {
    width: 313px;
}

.routine--template11 .column2 {
  width: 232px;
}
.routine--template11 .column2 .table-input {
  max-width: 248px;
}

.routine--template11 .column3 {
  width: 232px;
}
.routine--template11 .column3 .table-input {
  max-width: 253px;
}

.routine--template11 .column4 {
  width: 232px;
}
.routine--template11 .column4 .table-input {
  max-width: 168px;
}
.routine-tabsle {
border: 2px solid #fff;
    width: 1146px;
    margin-left: 117px;
    margin-top: 39px;
    border-collapse: collapse;
}

.routine--template2 .routine-tabsle {
  margin-left: 104px;
  margin-top: 22px;
}

.routine-tabsle th {
  border: 1px solid #fff;
  border-collapse: collapse;
  color: #fff;
  font-size: 35px;
  padding: 10px 0;
  text-align: center;
  font-weight: bold;
}

.routine-tabsle td {
    border: 1px solid #fff;
    color: #fff;
    font-size: 29px;
    padding: 10px 0;
    text-align: center;
}
</style>
