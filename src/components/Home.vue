<template>
  <div :class="{ dark: dark }">
    <section
      class="min-h-[100vh] w-full flex flex-wrap justify-center gap-[36px] bg-[#fafafa] dark:bg-[#202C36] md:gap-[56px]"
    >
      <div
        class="w-[264px] h-[336px] bg-white mt-6 rounded-sm dark:bg-[#2B3844]"
        v-for="(country, index) in cardData"
        :key="country.name"
      ></div>
    </section>
  </div>
</template>

<script>
import data from "../../data.json";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      cardData: data,
    };
  },
  methods: {},
  computed: {
    ...mapGetters(["darkMode"]),
    dark() {
      return this.darkMode;
    },
  },
  mounted() {
    console.log(this.cardData);
  },
};
</script>
