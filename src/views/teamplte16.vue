<template>
  <div class="template-page">
    <div class="mt-4 mb-2 ml-5 download-container">
      <v-btn color="primary" @click="downloadNow">Download</v-btn>
    </div>

    <div class="routine-container">
      <div class="routine routine--template16  " id="routine" ref="routine">
        <div class="datssse">
          <input type="text" class="ddate-input" v-model="routineDate" />
        </div>

        <table class="routssine-table">
          <thead class="hysdgugu">
            <tr>
              <th class="column1">শ্রেণী</th>
              <th class="column2">বিষয়</th>
              <th class="column3">সময়</th>
            </tr>
          </thead>

          <tbody class="hgdacudcs">
            <tr>
              <td class="column1">
                <input type="text" v-model="class_time" class="table-input" />
                
              </td>
              <td class="column2">
                <input type="text" v-model="subject" class="tasddble-input" />
                <input type="text" v-model="subject1" class="tasddble-input" />

              

              </td>

              <div class="column3">
                <!-- <input
                  type="text"
                  v-model="duration1" 
                  class="tasddble-input"
                /> -->

              </div>
            </tr>






                        <tr>
              <td class="column1">
                <input type="text" v-model="class_time3" class="table-input" />
                
              </td>
              <td class="column2">
                <input type="text" v-model="subject3" class="tasddble-input" />
                <input type="text" v-model="subject13" class="tasddble-input" />

              

              </td>

              <div class="column3"> 
                <input
                  type="text"
                  v-model="duration13" 
                  class="tasddble-input"
                />
                  <input
                  type="text"
                  v-model="duration23"   
                  class="tasddble-input"
                />

              </div>
            </tr>











                        <tr>
              <td class="column1">
                <input type="text" v-model="class_time4" class="table-input" />
                
              </td>
              <td class="column2">
                <input type="text" v-model="subject4" class="tasddble-input" />
                <input type="text" v-model="subject14" class="tasddble-input" />

              

              </td>

              <div class="column4">
               

              </div>
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
      routineDate: "৩ মে এর সময়সূচি",
           class_time: "৭ম",
          subject: "আকাইদ ও ফিকহ - পবিত্র পানির বৈশিষ্ট্য ,",
          subject1: "ঝুটা পানির বিধান ও পানির প্রকারভেদ", 
        


          class_time3: "৭ম",
          subject3: "আকাইদ ও ফিকহ - ইমান বিল মালাইকা ঈমান",
          subject13: " বিল রাসুল -( শেষ অংশ )", 
          duration13:"সকাল ১১:০০ থেকে",
          duration23:"১২:০০ পর্যন্ত",



          class_time4: "৭ম",
          subject4: "আরবি ১ম পত্র - পরিবেশ দূষণ ",
          subject14: "তালবিসুল বি আ ", 
          
  
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
          datas:
            " ১০.৪০-১০মাদ্রসা রুটিন ৬ থেকে ১০ শ্রেণী কারিগরি ঘরে বসে কারিগরি ক্রিয়াকলাপভিত্তিকআনন্দদায়ক শিখন"
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
        a.download = "tempslate1.jpg";
        a.click();
        this.$refs.routine.style.border = "1px solid #000";
      });
    }
  }
};
</script>

<style>
.datssse {
  font-family: "Hind Siliguri", sans-serif;
}

.hysdgugu {
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

.hgdacudcs {
  font-family: "Hind Siliguri", sans-serif;
}
.ddate-input {
    text-align: center;
    width: 664px;
    margin-top: 69px;
    height: 90px;
    color: white;
    font-size: 62px;
}

.routssine-table {
    border: 2px solid #fff;
    width: 1148px;
    margin-left: 100px;
    margin-top: 74px;
    border-collapse: collapse;
}

.routine--template2 .routssine-table {
  margin-left: 104px;
  margin-top: 22px;
}

.routssine-table th {
    border: 2px solid #fff;
    border-collapse: collapse;
    color: #fff;
    font-size: 39px;
    padding: 10px 0;
    text-align: center;
    font-weight: bold;

}

.routssine-table td {
border: 2px solid #fff;
    color: #fff;
    font-size: 37px;
    padding: 27px 0; 
    text-align: center;
}

.datssse {
    margin-left: 444px;
    width: 427px;
    height: 71px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: bold;
    font-size: 66p
}

.column2 .tasddble-input {
    width: 685px;
    height: 57px;
    text-align: center;
    color: white;
}
.column3 .tasddble-input {
    width: 297px;
    height: 49px;
    text-align: center;
    color: #fff;
    font-size: 37px;
    margin-top: 27px;
}

.column1 {
  min-width: 99px;
}

.column1 .table-input {
    max-width: 161px;
    color: white;
}

.column2 .table-input {
  max-width: 288px;
}

.column3 .table-input {
  max-width: 240px;
}


</style>
