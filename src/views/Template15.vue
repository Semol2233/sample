<template>
  <div class="template-page">
    <div class="mt-4 mb-2 ml-5 download-container">
      <v-btn color="primary" @click="downloadNow">Download</v-btn>
    </div>

    <div class="routine-container">
      <div class="routine routine--template15" id="routine" ref="routine">
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
              <th class="column5">৪র্থ পিরিয়ড</th>

    

            </tr>
          </thead> 

          <tbody>
            <tr>
              <td colspan="5">
                <input type="text" v-model="coronaBreak" class="corona-input" />
              </td>
            </tr>
            <tr>
              <td class="column1">
                <input type="text" v-model="classss" class="table-input" />
                <input
                  type="text"
                  v-model="time1"
                  class="table-input"
                />
              </td>
              <td class="column2">
                <input type="text" v-model="prihod1" class="table-input" />
              </td>
              <td class="column3">
                <input type="text" v-model="part_one" class="table-input" v-if="part_one" />
                                    <input
                  type="text"
                  v-model="part_two"
                  class="table-input"
                />
              </td>
                      <td class="column4">
                <input type="text" v-model="p_1_1" class="table-input" />
                
              </td>
                   <td class="column4">
                <input type="text" v-model="p_1_2" class="table-input" /> 
                
              </td> 
               
            </tr>


            <!-- #2 -->


            <tr>
              <td class="column1">
                <input type="text" v-model="clasdsss" class="table-input" />
                <input
                  type="text"
                  v-model="timde1d"
                  class="table-input"
                  
                />
              </td>
              <td class="column2">
                <input type="text" v-model="pridhod1" class="table-input" v-if="part_two" />
              </td>
              <td class="column3">
                <input type="text" v-model="sub" class="table-input" />

              </td>
                      <td class="column4">
                <input type="text" v-model="pd_1_1" class="table-input" />
                
              </td>
                   <td class="column4">
                <input type="text" v-model="pd_1_2" class="table-input" /> 
                
              </td> 
               
            </tr>

            <!-- 3 -->
    


                <tr>
              <td class="column1">
                <input type="text" v-model="ssdsd" class="table-input" />
                <input
                  type="text"
                  v-model="tissmde1d"
                  class="table-input"
                  v-if="classsss"
                />
              </td>
              <td class="column2">
                <input type="text" v-model="pddddart_one" class="table-input" />
                    <input
                  type="text"
                  v-model="padrddt_two"
                  class="table-input"
                  v-if="padrddt_two"
                />
              </td>
              <td class="column3">
                <input type="text" v-model="pd_dd1_1" class="table-input" />
              </td>
                      <td class="column4">
                <input type="text" v-model="pd_dd1_2" class="table-input" />
                
              </td>
                   <td class="column4">
                <input type="text" v-model="pd_dds1_2" class="table-input" /> 
                
              </td> 
               
            </tr>


            <!-- 4? -->


                        <tr>
              <td class="column1">
                <input type="text" v-model="dfdf" class="table-input" />
                <input
                  type="text"
                  v-model="sdscf"
                  class="table-input"
                  v-if="classsss"
                />
              </td>
              <td class="column2">
                <input type="text" v-model="dgdffgr" class="table-input" />
                
              </td>
              <td class="column3">
                <input type="text" v-model="ssdgdffgr" class="table-input" />
                <input type="text" v-model="dgdffgr" class="table-input" />
              </td>
                      <td class="column4">
                <input type="text" v-model="grfrfgrg" class="table-input" />
                                                    <input
                  type="text"
                  v-model="gffgrfgr"
                  class="table-input"
                  v-if="gffgrfgr" 
                />
                 
              </td>
                   <td class="column4">
                <input type="text" v-model="fgvrfsgrfg" class="table-input" /> 
                
              </td> 
               
            </tr>



            <!-- 5 -->



                        <tr>
              <td class="column1">
                <input type="text" v-model="dfdsf" class="table-input" />
                <input
                  type="text"
                  v-model="sdsscf"
                  class="table-input"
                  v-if="classsss"
                />
              </td>
              <td class="column2">
                <input type="text" v-model="dgdsffgr" class="table-input" />
              </td>
              <td class="column3">
                <input type="text" v-model="ssdgsdffgr" class="table-input" />
              </td>
                      <td class="column4">
                <input type="text" v-model="dgdsssffgr" class="table-input" />
                
              </td>
                   <td class="column4">
                <input type="text" v-model="pd_dsfds1_2" class="table-input" /> 
                
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
      routineDate: "২৭ জুন এর সময়সূচি",
      coronaBreak: "জাতীয় সংগীত ও করোনা সচেতনতা (সকাল ১০:৩৫-১০:৪০)",
          classsss: "৬ষ্ঠ",
          subject1: "বিজ্ঞান",
          subject4: "p1",
          subjddect1: "p2", 
          subject2: "--",
// 1
          time1: "(সকাল ১০:৪০ সকাল ১১:২০)",
          classss :"৬ষ্ঠ",
          prihod1:"বিজ্ঞান",
          // part_one:"বাংলাদেশ",
          part_two:"ও বিশ্বপরিচয়",
          p_1_1:"----------",
          p_1_2:"----------",

          
// 2
          timde1d: "(সকাল ১১:২০ দুপুর ১২:০০)",
          clasdsss :"৭ম",
          pridhod1:"ইংরেজি",
          pddart_one:"বাংলাদেশ",
          padrt_two:"ও বিশ্বপরিচয়",
          sub:"বাংলা",
          pd_1_1:"----------",
          pd_1_2:"----------",



// 3
          tissmde1d: "(দুপুর ১২:০০ দুপুর ১২:২০)",
          ssdsd :"৮ম",
          prfdsfidhod1:"বিজ্ঞান",
          pddddart_one:"বাংলাদেশ",
          // padrddt_two:"ও বিশ্বপরিচয়",
          ddfdf:"বাংলা",
          pd_dd1_1:"----------",
          pd_dd1_2:"----------",
          pd_dds1_2:"----------",



// 4
          sdscf: "(দুপুর ১২:২০ দুপুর ০১:৪০)",
          dfdf :"৯ম",
          dgdffgr:"পৌরনীতি",
          ssdgdffgr:"অর্থনীতি",
          dgdssffgr:"বাংলা",

          grfrfgrg:"বাংলাদেশ",
          // gffgrfgr:"ও বিশ্বপরিচয়",
          fgvrfsgrfg:"বাংলা",
          pdfgfrg_dd1_1:"----------",
          pd_fdd1_2:"----------",
          pd_dfds1_2:"----------",




// 5
          sdsscf: "(দুপুর ০১:৪০ দুপুর ০২.:৪৫)",
          dfdsf :"১০ম",
          dgdsffgr:"উচ্চতর  গণিত",
          ssdgsdffgr:"বাংলা",
          dgdsssffgr:"ইংরেজি",

          grfsrfgrg:"বাংলাদেশ",
          gffgrsfgr:"ও বিশ্বপরিচয়",
          fgvrsfsgrfg:"বাংলা",
          pdfgsfrg_dd1_1:"----------",
          pd_fsdd1_2:"----------",
          pd_dsfds1_2:"----------",


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
  font-size: 28px;
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

.routine--template15 .column1 {
  width: 232px;
}
.routine--template15 .column1 .table-input {
  max-width: 322px;
}



.routine--template15 .column5 {
  width: 232px;
}
.routine--template15 .column5 .table-input {
  max-width: 215px;
}



.routine--template15 .column2 {
  width: 232px;
}
.routine--template15 .column2 .table-input {
  max-width: 229px;
}

.routine--template15 .column3 {
  width: 232px;
}
.routine--template15 .column3 .table-input {
  max-width: 215px;
}

.routine--template15 .column4 {
  width: 232px;
}
.routine--template15 .column4 .table-input {
  max-width: 214px;
}

.routine--template15 .column4 {
  width: 232px;
}
 


.routine-tabsle {
    border: 2px solid #fff;
    width: 1205px;
    margin-left: 76px;
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
  font-size: 35px; 
  padding: 10px 0;
  text-align: center;
  font-weight: bold;
}
 
.routine-tabsle td {
  border: 1px solid #fff;
  color: #fff;
  font-size: 29px;
  padding: 5px 0;
  text-align: center; 
}
</style>
