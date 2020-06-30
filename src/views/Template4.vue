<template>
  <div class="template-page">
    <div class="mt-4 mb-2 ml-5 download-container">
      <v-btn color="primary" @click="downloadNow">Download</v-btn>
    </div>
    <div class="routine-container">
      <div class="routine routine--template4" id="routine" ref="routine">
        <div class="dasste">
          <input type="text" class="dasste-input" v-model="routineDate" />
        </div>

        <table class="routssine-table">
          <thead>
            <tr>
              <th class="column1">শ্রেণী</th>
              <th class="column2">১ম পিরিয়ড</th>
              <th class="column3">সময়</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td class="column1">
                <input type="text" v-model="class1" class="tasble-input" />
              </td>
              <td class="column2">
                <input type="text" v-model="subject1" class="tasble-input" />
                <!-- <input
                  type="text"
                  v-model="r.time2"
                  class="tasble-input tasble-input--small"
                /> -->
              </td>

              <div class="coludmn3">
              
              </div>
            </tr>

            <tr>
              <td class="column1">
                <input type="text" v-model="class12" class="tasble-input" />
              </td>
              <td class="column2">
                <input type="text" v-model="subject12" class="tasble-input" />
                
                <!-- <input
                  type="text"
                  v-model="r.time2"
                  class="tasble-input tasble-input--small"
                /> -->
              </td>

              <div class="column3">
                <input type="text" v-model="subject2" class="tasddble-input" />
                 <input type="text" v-model="subject4" class="tasddble-input" /> 
              </div>
            </tr>



 <tr>
              <td class="column1">
                <input type="text" v-model="class123" class="tasble-input" />
              </td>
              <td class="column2">
                <input type="text" v-model="subject123" class="tasble-input" />
                <!-- <input
                  type="text"
                  v-model="r.time2"
                  class="tasble-input tasble-input--small"
                /> -->
              </td>

              <div class="column3s"> 
             
              </div>
            </tr>










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
      routineDate: "০১ জুলাই - এর সময়সূচি ",

      class1: "৯ম",
      subject1: "জেনারেল ইলেকট্রনিক্স",


      class12: "১০ম",
      subject12: "পোল্ট্রি রিয়ারিং এন্ড ফ্রামিং",

      class123: "১০ম",
      subject123: "মেশিন টুলস অপারেশন",


      subject2: "সকাল ১০:০০",
      subject4: "থেকে ১১:০০ পর্যন্ত"

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
.template-page {
  font-family: "Hind Siliguri", sans-serif;
}
.routine--template7 .routine-tasble {
  margin-top: 11px;
  margin-left: 167px;
  width: auto;
}

.routine--template7 .routine-tasble th {
  padding: 5px 0;
  font-size: 20px;
}

.routine--template7 .routine-tasble td {
  border: 1px solid #fff;
  color: #fff;
  font-size: 18px;
  padding: 5px 0;
  text-align: center;
}

.routine--template7 .column2 {
  width: 232px;
}
.routine--template7 .column2 .tasddble-input {
  width: 282px;
  height: 35px;
  text-align: center;
}

.routine--template7 .tasddble-input {
  width: 282px;
  height: 35px;
  text-align: center;
  color: white;
  font-size: 23px;
  margin-top: 27px;
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

.column3 .tasddble-input {
    width: 233px;
    /* height: 9px; */
    text-align: center;
    color: white;
    font-size: 33px;
    margin-top: 6px;
}

.routssine-table {
    border: 2px solid #fff;
    width: 873px;
    margin-left: 245px;
    margin-top: 28px;
    border-collapse: collapse;
}

.routssine-table th {
  border: 1px solid #fff;
  border-collapse: collapse;
  color: #fff;
  font-size: 38px;
  padding: 11px 0;
  text-align: center;
  font-weight: bold;
}

.routssine-table td {
border: 1px solid #fff;
    color: #fff;
    font-size: 34px;
    padding: 35px 0;
    text-align: center;
}

.dasste {
    margin-left: 460px;
    width: 441px;
    height: 68px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: bold;
    font-size: 54px;
    margin-top: 116px;
}

.column2 .tasble-input {
  width: 526px;
}

.tasble-input {
  max-width: 100%;
  text-align: center;
}
.column3 .tasble-input {
  max-width: 209px;
  margin-top: 3px;
}

.column1 .tasble-input {
  max-width: 106px;
}

.dasste-input {
  max-width: 123%;
  text-align: center;
}
</style>
