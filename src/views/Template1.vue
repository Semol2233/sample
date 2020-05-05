<template>
  <div class="template-page">
    <v-row>
      <v-col cols="8">
        <div class="mt-4 mb-2 ml-5 download-container">
          <v-btn color="primary" @click="downloadNow">Download</v-btn>
        </div>

        <div class="routine-container">
          <div class="routine routine--template  " id="routine" ref="routine">
            <div class="datssse">
              <input type="text" class="ddate-input" v-model="routineDate" />
            </div>

            <table class="routssine-table">
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
                      class="tasddble-input"
                    />
                  </td>
                  <td class="column3">
                    <input
                      type="text"
                      v-model="r.duration"
                      class="tasddble-input"
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
.datssse{
    font-family: "Hind Siliguri", sans-serif;
}
.routine--template .routssine-table td {
  border: 1px solid #fff;
  color: #fff;
  font-size: 23px;
  padding: 30px 0;
  text-align: center;
}

.width {
  margin-bottom: 404px;
}

.routssine-table{
  font-family: 'kongshomjregular';
}
.ddate-input {
    text-align: center;
    width: 461px;
    margin-top: 5px;
    height: 68px;
}



.routssine-table {
    border: 2px solid #fff;
    width: 688px;
    margin-left: 108px;
    margin-top: 17px;
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


 .column1 {
  min-width: 99px;
} 

 .column1 .table-input {
  max-width: 104px;
}


.column2 .table-input {
  max-width: 288px;
}


.column3 .table-input {
  max-width: 240px;
} 
</style>
