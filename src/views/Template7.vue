<template>
  <div class="template-page">
    <v-row>
      <v-col cols="8">
        <div class="mt-4 mb-2 ml-5 download-container">
          <v-btn color="primary" @click="downloadNow">Download</v-btn>
        </div>
        <div class="routine-container">
          <div class="routine routine--template7" id="routine" ref="routine">
            <div class="dasste">
              <input type="text" class="date-input" v-model="routineDate" />
            </div>

            <table class="routssine-table">
              <thead>
                <tr>
                  <th class="column1">শ্রেণী</th>
                  <th class="column2">১ম পিরিয়ড</th>
                  <th class="column3">২য় পিরিয়ড</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="(r, i) in routine" :key="i">
                  <td class="column1">
                    <input type="text" v-model="r.class" class="tasble-input" />
                  </td>
                  <td class="column2">
                    <input
                      type="text"
                      v-model="r.subject2"
                      class="tasble-input"
                    />
                    <input
                      type="text"
                      v-model="r.time2"
                      class="tasble-input tasble-input--small"
                    />
                  </td>
                  <td class="column3">
                    <hr class="blank" v-if="!r.subject3" />
                    <template v-else>
                      <input
                        type="text"
                        v-model="r.subject4"
                        class="tasble-input"
                      />
                      <input
                        type="text"
                        v-model="r.time4"
                        class="tasble-input tasble-input--small"
                      />
                    </template>
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
import googledrive from "@/components/googledrive";

export default {
  components: {
    googledrive
  },
  data() {
    return {
      routineDate: "৫ মে এর সময়সূচি ",
      routine: [
        {
          class: "৯ম",
          subject1: "কম্পিউটার ও তথ্য প্রযুক্তি",
          time1: "(বিকেল ০২:১০-০২:২৭)",
          subject2: "কম্পিউটার ও তথ্য প্রযুক্তি ",
          time2: "(দুপুর ০২:১০-০২:২৭)",
          subject3: "ওয়েল্ডিং এন্ড ফেব্রিকেশন ",
          time3: "(বিকেল ২.৫০)",
          subject4: "ওয়েল্ডিং এন্ড ফেব্রিকেশন",
          time4: "(দুপুর ০২:২৭-০২:৪৩)"
        },
        {
          class: "১০ম",
          subject1: "ওয়েল্ডিং অ্যান্ড ফেব্রিকেশন",
          time1: "(বিকেল ৩.১০)",
          subject2: "জেনারেল ইলেক্ট্রিক্যাল ওয়ার্কশপ ",
          time2: "(দুপুর ০২:৪৩-০৩:০০)",
          subject3: "",
          time3: "",
          subject4: "",
          time4: ""
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
.routine--template4 .routine-tasble {
  margin-top: 11px;
  margin-left: 167px;
  width: auto;
}

.routine--template4 .routine-tasble th {
  padding: 5px 0;
  font-size: 20px;
}

.routine--template4 .routine-tasble td {
  border: 1px solid #fff;
  color: #fff;
  font-size: 18px;
  padding: 5px 0;
  text-align: center;
}

.routine--template4 .column2 {
  width: 232px;
}
.routine--template4 .column2 .tasble-input {
  max-width: 222px;
}

.routine--template4 .column3 {
  width: 232px;
}

.routine--template4 .tasble-input {
  width: 222px;
}

.table-input--small {
  font-size: 16px;
}

hr.blank {
  width: 155px;
  border-top: 1px solid #015758;
  border-bottom: 1px solid #2f8788;
  margin: auto;
}

.routssine-table {
  border: 2px solid #fff;
  width: 577px;
  margin-left: 162px;
  margin-top: 6px;
  border-collapse: collapse;
}

.routssine-table th {
  border: 1px solid #fff;
  border-collapse: collapse;
  color: #fff;
  font-size: 22px;
  padding: 11px 0;
  text-align: center;
  font-weight: bold;
}

.routssine-table td {
  border: 1px solid #fff;
  color: #fff;
  font-size: 21px;
  padding: 14px 0;
  text-align: center;
}

.dasste {
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

.column2 .tasble-input {
  width: 255px;
}

.tasble-input {
  max-width: 100%;
  text-align: center;
}
.column3 .tasble-input {
  max-width: 217px;
}

.column1 .tasble-input {
  max-width: 98px;
}
</style>
