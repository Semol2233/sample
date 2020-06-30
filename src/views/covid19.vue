<template>
  <div class="template-page">
    <div class="mt-4 mb-2 ml-5 download-container">
      <v-btn color="primary" @click="downloadNow">Download</v-btn>
    </div>

    <div class="routine-container">
      <div class="routine routine--template13a43" id="routine" ref="routine">
        <div class="dassste">
          <input
            type="text"
            style="
            max-width: 100%;
  text-align: center;
  width: 441px;
           
          
          "
            v-model="routineDate"
          />
        </div>

        <div class="dassdfcdessste">
          <input
            type="text"
            style="max-width: 100%;text-align: center;width: 441px; "
            v-model="total_sufeact_day"
          />
        </div>

        <div class="defdefcdefc">
          <div v-for="(r, i) in iedcr" :key="i">
            <div class="dffcdhg">
              <input type="text" class="date-inpssut" v-model="r.time" />
            </div>
          </div>
        </div>

        <div
          style="


        display: flex;
    flex-wrap: nowrap;
    margin-top: 49px; 
    margin-left: 42px; 
        "
        >
          <div>
            <div class="deusdcdfhu">
              <input type="text" class="date-inpssut" v-model="sorbo_mot" />
            </div>
          </div>

          <div>
            <div class="deusdcddcedsfhu">
              <input
                type="text"
                class="date-inpssut"
                v-model="sorbo_mot_metru"
              />
            </div>
          </div>
          <br />

          <div>
            <div class="deusdcdfdcdchu">
              <input
                type="text"
                class="date-inpssut"
                v-model="sorbo_mot_susuto"
              />
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
      routineDate: "সোমবার । জুন ২০২০",
      total_sufeact_day: "১৭,৯৯৯",

      sorbo_mot: "১,২৬,৬০৬",
      sorbo_mot_metru: "১৬২১",
      sorbo_mot_susuto: "৫১,৪৯৫",

      routinessDate: [
        {
          time: "----------------"
        },

        {
          time: "---------------------"
        }
      ],

      iedcr: [
        {
          time: "৩৯৪৬"
        },
        {
          time: "৩৯"
        },
        {
          time: "১৮২৯"
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
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream");
        a.download = "covid19.png";
        a.click();
        this.$refs.routine.style.border = "1px solid #000";
      });
    }
  }
};
</script>

<style>
.routine--template13a43 {
  font-family: "Hind Siliguri", sans-serif;
}

.flex-container {
  display: flex;
  flex-wrap: nowrap;
  margin-top: 81px;
  margin-left: 44px;
}

.date-inpssut {
  max-width: 100%;
  text-align: center;
}

.defdefcdefc {
  display: flex;
  flex-wrap: nowrap;
  margin-top: -24px;
  margin-left: 42px;
}
.dffcdhg {
  width: 230px;
  height: 68px;
  justify-content: center;
  align-items: center;
  color: rgb(255, 255, 255);
  font-weight: bold;
  font-size: 61px;
  margin-top: 150px;
  margin-left: 46px;
}
.dassste {
margin-left: 394px;
    width: 531px;
    height: 68px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: bold;
    font-size: 42px;
    margin-top: 60px;
}
.deusdcdfhu {
  width: 134px;
  height: 68px;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 26px;
  margin-top: 102px;
  color: black;
  margin-left: 185px;
}

.deusdcddcedfhu {
  width: 108px;
  height: 68px;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 19px;
  margin-top: 22px;
  color: rgb(0, 0, 0);
  margin-left: 96px;
}
.dassdfcdessste {
  margin-left: 515px;
  width: 207px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: 700;
  font-size: 55px;
  margin-top: 97px;
}
.deusdcddcedsfhu {
  width: 97px;
  height: 68px;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 26px;
  margin-top: 102px;
  color: rgb(0, 0, 0);
  margin-left: 158px;
}
.deusdcdfdcdchu {
  width: 110px;
  height: 68px;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 26px;
  margin-top: 102px; 
  color: rgb(0, 0, 0);
  margin-left: 152px;
}
.dassssste {
  margin-left: 222px;
  width: 456px;
  height: 68px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(255, 255, 255);
  font-weight: bold;
  font-size: 32px;
  margin-top: -39px;
}
.dassssste {
  width: 508px;
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
.date-inpssut {
  max-width: 100%;
  text-align: center;
  width: 211px;
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
