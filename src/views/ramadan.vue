<template>
  <div class="template-page">
    <div class="mt-4 mb-2 ml-5 download-container">
      <v-btn color="primary" @click="downloadNow">Download</v-btn>
    </div>

    <div class="routine-container">
      <div class="routine routine--template10" id="routine" ref="routine">
        <div class="dassste">
          <input type="text" class="date-inpssut" v-model="routineDate" />
        </div>

        <div class="flex-container">
          <div v-for="(r, i) in routinessDate" :key="i">
            <div class="dassssste">
              <input type="text" class="date-inpssut" v-model="r.time" />
            </div>
          </div>
        </div>
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
      routineDate: "০৮ রমজান ০১ মে ,শুক্রবার ২০২০",
      routinessDate: [
        {
          time: "৩.৫৯ মি."
        },

        {
          time: "৪.০৫ মি."
        },
        {
          time: "৬.৩১ মি."
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




.flex-container {
  display: flex;
  flex-wrap: nowrap;
  margin-top: 99px;
  margin-left: 170px;
}

.date-inpssut {
  max-width: 100%;
  text-align: center;
}
.dassste {
    margin-left: 224px;
    width: 456px;
    height: 68px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: bold;
    font-size: 31px;
    margin-top: 163px;
}

.dassssste {
  width: 186px;
  height: 68px;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: bold;
  font-size: 31px;
}

.corona-input {
  width: 100%;
  text-align: center;
  font-size: 22px;
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
  width: 232px;
}
.routine--template9 .column1 .table-input {
  max-width: 222px;
}

.routine--template9 .column2 {
  width: 232px;
}
.routine--template9 .column2 .table-input {
  max-width: 222px;
}

.routine--template9 .column3 {
  width: 232px;
}
.routine--template9 .column3 .table-input {
  max-width: 222px;
}

.routine-tabsle {
  border: 2px solid #fff;
  width: 691px;
  margin-left: 97px;
  margin-top: 16px;
  border-collapse: collapse;
}

.routine--template2 .routine-tabsle {
  margin-left: 104px;
  margin-top: 22px;
}
.date-inpssut{
    max-width: 100%;
    text-align: center;
    width: 477px;
}
.routine-tabsle th {
  border: 1px solid #fff;
  border-collapse: collapse;
  color: #fff;
  font-size: 22px;
  padding: 10px 0;
  text-align: center;
  font-weight: bold;
}

.routine-tabsle td {
  border: 1px solid #fff;
  color: #fff;
  font-size: 20px;
  padding: 0px 0;
  text-align: center;
}
</style>
