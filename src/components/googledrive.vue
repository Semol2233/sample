<template>
  <div>

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

  </div>
</template>

<script>
import html2canvas from "html2canvas";

export default {
  components: {
  
  },
  data() {
    return {
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
.routine--template .routine-table td {
  border: 1px solid #fff;
  color: #fff;
  font-size: 23px;
  padding: 28px 0;
  text-align: center;
}

.width {
  margin-bottom: 404px;
}
</style>
