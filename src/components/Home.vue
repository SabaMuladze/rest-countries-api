<template>
  <div :class="{ dark: dark }">
    <section class="min-h-[100vh] w-full bg-[#fafafa] dark:bg-[#202C36]">
      <div
        class="w-full px-4 py-3 flex flex-col gap-3 md:flex-row md:justify-between"
      >
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
        <div>
          <div
            @click="toggleRegion"
            class="px-4 py-3 w-[200px] bg-white rounded-md dark:bg-[#2B3844] flex gap-5 items-center justify-between"
          >
            <p>Filter By Region</p>
            <i
              :class="{ 'rotate-180': Region }"
              class="fa-solid fa-angle-down transition-all dark:text-white"
            ></i>
          </div>
          <div
            v-if="Region"
            class="px-4 py-3 bg-white rounded-md dark:bg-[#2B3844] w-[200px] absolute flex flex-col gap-5 justify-center mt-3"
          >
            <p
              class="cursor-pointer hover:scale-105"
              @click="filterByRegion('Africa')"
            >
              Africa
            </p>
            <p
              class="cursor-pointer hover:scale-105"
              @click="filterByRegion('Americas')"
            >
              America
            </p>
            <p
              class="cursor-pointer hover:scale-105"
              @click="filterByRegion('Asia')"
            >
              Asia
            </p>
            <p
              class="cursor-pointer hover:scale-105"
              @click="filterByRegion('Europe')"
            >
              Europe
            </p>
            <p
              class="cursor-pointer hover:scale-105"
              @click="filterByRegion('Oceania')"
            >
              Oceania
            </p>
          </div>
        </div>
      </div>
      <div
        class="w-full flex flex-wrap justify-center gap-[36px] bg-[#fafafa] dark:bg-[#202C36] md:gap-[56px]"
      >
        <router-link
          :to="{
            path: '/inner',
            query: { name: country.alpha3Code },
          }"
          class="w-[264px] h-[336px] bg-white mt-6 rounded-md cursor-pointer dark:bg-[#2B3844] hover:scale-110 transition-all"
          v-for="(country, index) in cardData"
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
        </router-link>
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
      cardData: [],
      originalData: data,
      val: "",
      Region: false,
    };
  },
  methods: {
    filterCountries() {
      if (this.val.length > 0) {
        this.cardData = this.originalData.filter((country) =>
          country.name.toLowerCase().includes(this.val.toLowerCase())
        );
      } else {
        this.cardData = this.originalData;
      }
    },
    toggleRegion() {
      this.Region = !this.Region;
    },
    filterByRegion(region) {
      this.cardData = this.originalData.filter(
        (country) => country.region == region
      );
    },
  },
  computed: {
    ...mapGetters(["darkMode"]),
    dark() {
      return this.darkMode;
    },
  },
  mounted() {
    this.cardData = this.originalData;
  },
};
</script>
