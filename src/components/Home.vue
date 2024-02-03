<template>
  <div :class="{ dark: dark }">
    <section class="min-h-[100vh] w-full bg-[#fafafa] dark:bg-[#202C36]">
      <div class="w-full px-4 py-3">
        <div
          class="px-4 py-3 bg-white rounded-md dark:bg-[#2B3844] md:w-[480px]"
        >
          <input
            v-model="val"
            placeholder="Search for a country…"
            class="bg-white dark:bg-[#2B3844] w-full dark:text-white outline-none"
            type="text"
            @input="filterCountries"
          />
        </div>
      </div>
      <div
        class="w-full flex flex-wrap justify-center gap-[36px] bg-[#fafafa] dark:bg-[#202C36] md:gap-[56px]"
      >
        <div
          class="w-[264px] h-[336px] bg-white mt-6 rounded-md cursor-pointer dark:bg-[#2B3844] hover:scale-110 transition-all"
          v-for="(country, index) in originalData"
          :key="country.name"
        >
          <img class="h-[160px] w-full" :src="country?.flags.png" alt="" />
          <div class="flex flex-col justify-between p-6">
            <h2 class="mb-[10px]">{{ country.name }}</h2>
            <div>
              <p class="leading-6">Population: {{ country.population }}</p>
              <p class="leading-6">Region: {{ country.region }}</p>
              <p class="leading-6">Capital: {{ country.capital }}</p>
            </div>
          </div>
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
      originalData: [],
      val: "",
    };
  },
  methods: {
    filterCountries() {
      if (this.val.length > 0) {
        this.originalData = this.cardData.filter((country) =>
          country.name.toLowerCase().includes(this.val)
        );
      } else {
        this.originalData = this.cardData;
      }
    },
  },
  computed: {
    ...mapGetters(["darkMode"]),
    dark() {
      return this.darkMode;
    },
  },
  mounted() {
    this.originalData = this.cardData;
  },
};
</script>
