<template>
  <div :class="{ dark: dark }">
    <section
      class="w-full min-h-[88.7vh] flex flex-col bg-[#fafafa] p-6 dark:bg-[#202C36] xl:p-20 lg:"
    >
      <router-link
        to="/home"
        class="py-2 px-3 shadow-md bg-white w-fit flex justify-between items-center gap-2 dark:bg-[#2B3844]"
      >
        <i class="fa-solid fa-arrow-left dark:text-white"></i>
        <p>Back</p>
      </router-link>
      <div
        class="flex flex-col items-center h-[100%] mt-10 lg:flex-row lg:justify-between md:mt-20"
      >
        <div class="flex justify-center max-w-[560px]">
          <img
            class="w-full rounded-md max-w-[560px]"
            :src="cardData[0].flags.svg"
            alt=""
          />
        </div>
        <div class="flex flex-col pl-10 mt-10 lg:w-[50%] lg:mt-0">
          <div
            class="flex flex-col gap-5 md:flex-row md:items-center md:gap-20 md:justify-between"
          >
            <div>
              <h2 class="md:text-3xl">{{ cardData[0].name }}</h2>
              <div class="mt-5">
                <p class="leading-6 font-bold md:text-lg md:leading-9">
                  Native Name:
                  <span class="font-light">{{ cardData[0].nativeName }}</span>
                </p>
                <p class="leading-6 font-bold md:text-lg md:leading-9">
                  Population:
                  <span class="font-light">{{ cardData[0].population }}</span>
                </p>
                <p class="leading-6 font-bold md:text-lg md:leading-9">
                  Region:
                  <span class="font-light">{{ cardData[0].region }}</span>
                </p>
                <p class="leading-6 font-bold md:text-lg md:leading-9">
                  Sub Region:
                  <span class="font-light">{{ cardData[0].subregion }}</span>
                </p>
                <p class="leading-6 font-bold md:text-lg md:leading-9">
                  Capital:
                  <span class="font-light">{{ cardData[0].capital }}</span>
                </p>
              </div>
            </div>
            <div>
              <p class="leading-6 font-bold md:text-lg md:leading-9">
                Top Level Domain:
                <span class="font-light">{{
                  cardData[0]?.topLevelDomain[0]
                }}</span>
              </p>
              <p class="leading-6 font-bold md:text-lg md:leading-9">
                Currencies:
                <span class="font-light">{{
                  cardData[0].currencies[0]?.name
                }}</span>
              </p>
              <p class="leading-6 font-bold md:text-lg md:leading-9">
                Languages:
                <span
                  v-for="(language, index) in cardData[0]?.languages"
                  :key="index"
                  class="font-light"
                >
                  {{ language.name }},
                </span>
              </p>
            </div>
          </div>
          <div
            class="flex flex-col justify-center gap-2 mt-5 md:flex-row md:items-center md:justify-start"
          >
            <h2>Border Countries:</h2>
            <div class="flex flex-wrap gap-2">
              <a
                @click="handleClick(brdrCountr)"
                class="px-3 py-2 bg-white shadow-md dark:bg-[#2B3844] dark:text-white hover:scale-105 cursor-pointer"
                v-for="(brdrCountr, index) in cardData[0]?.borders"
                :key="brdrCountr"
              >
                {{ brdrCountr }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import data from "../../data.json";
export default {
  data() {
    return {
      name: this.$route.query.name,
      cardData: data,
    };
  },
  methods: {
    handleClick(brdrCountr) {
      this.$router.push({
        path: "/inner",
        query: { name: brdrCountr },
      });
      setTimeout(function () {
        window.location.reload();
      }, 100);
    },
  },
  computed: {
    ...mapGetters(["darkMode"]),
    dark() {
      return this.darkMode;
    },
  },
  mounted() {
    this.cardData = this.cardData.filter(
      (details) => details.alpha3Code == this.name
    );
  },
};
</script>
