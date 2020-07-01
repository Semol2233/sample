<template>
  <div class="template-page">
    <div class="mt-4 mb-2 ml-5 download-container">
      <v-btn color="primary" @click="downloadNow">Download</v-btn>
    </div>

    <div class="routine-container">
      <div class="routine routine--template9" id="routine" ref="routine">
        <div class="ddcdcate">
          <input type="text" class="date-input" v-model="routineDate" />
        </div>

        <table class="routine-tabsle">
          <thead>
            <tr>
              <th class="column1 ">শ্রেণী</th>
              <th class="column2">১ম পিরিয়ড</th>
              <th class="column3">২য় পিরিয়ড</th>
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
      coronaBreak: "জাতীয় সঙ্গীত ও করোনা সচেতনতা (সকাল ১০.৪০-১০.৪৫)",
      routine: [
        {
          class: "৬ষ্ঠ",
          subject1: "বাংলা",
          time1: "(দুপুর ০২.৩৫ - দুপুর ০২.৫৫)",
          subject2: "ইংরেজি",
          time2: "(সকাল ১১.৪৫)"
        },
        {
          class: "৭ম",
          subject1: "বাংলা",
          time1: "(দুপুর ০২.৫৫ - দুপুর ০৩.১৫)",
          subject2: "ইংরেজি",
          time2: "(সকাল ১১.৪৫)"
        },
        {
          class: "৮ম",
          subject1: "বাংলা",
          time1: "(দুপুর ৩.১৫ - দপুর ০৩.৩৫)",
          subject2: "গণিত",
          time2: "(দুপুর ১.০৫)"
        },
        {
          class: "৯ম",
          subject1: "গণিত",
          time1: "(দুপুর ৩.৩৫- দুপুর ০৩.৫৫)",
          subject2: "ইংরেজি",
          time2: "(দুপুর ১.৪৫)"
        },
        {
          class: "১০ম",
          subject1: "ইংরেজি",
          time1: "(দুপুর ০৩.৫৫ বিকাল ০৪.১৫)",
          subject2: "রসায়ন",
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
.ddcdcate {
    margin-left: 338px;
    width: 663px;
    height: 68px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: bold;
    font-size: 60px;
}

.template-page {
  font-family: "Hind Siliguri", sans-serif;
}
.corona-input {
  width: 100%;
  text-align: center;
  font-size: 29px;
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

.routine--template9 .column1 {
  width: 239px;
}
.routine--template9 .column1 .table-input {
  max-width: 325px;
}

.routine--template9 .column2 {
  width: 232px;
}
.routine--template9 .column2 .table-input {
  max-width: 299px;
}

.routine--template9 .column3 {
  width: 232px;
}
.routine--template9 .column3 .table-input {
  max-width: 302px;
}

.routine-tabsle {
  border: 2px solid #fff;
  width: 1055px;
  margin-left: 143px;
  margin-top: 38px;
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
  font-size: 32px;
  padding: 10px 0;
  text-align: center;
  font-weight: bold;
}

.routine-tabsle td {
  border: 1px solid #fff;
  color: #fff;
  font-size: 32px;
  padding: 0px 0;  
  text-align: center;
}
</style>
