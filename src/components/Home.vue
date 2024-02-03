<template>
  <div :class="{ dark: dark }">
    <section
      class="min-h-[100vh] w-full flex flex-wrap justify-center gap-[36px] bg-[#fafafa] dark:bg-[#202C36] md:gap-[56px]"
    >
      <div
        class="w-[264px] h-[336px] bg-white mt-6 rounded-sm dark:bg-[#2B3844] hover:scale-110 transition-all"
        v-for="(country, index) in cardData"
        :key="country.name"
      >
        <img class="h-[160px] w-full" :src="country?.flags.png" alt="" />
        <div class="flex flex-col p-6">
          <h2 class="mb-[20px]">{{ country.name }}</h2>
          <p class="leading-7">Population: {{ country.population }}</p>
          <p class="leading-7">Region: {{ country.region }}</p>
          <p class="leading-7">Capital: {{ country.capital }}</p>
        </div>
      </div>
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
