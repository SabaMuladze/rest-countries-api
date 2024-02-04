<template>
  <div :class="{ dark: dark }">
    <header
      class="flex justify-between py-10 px-6 items-center shadow-md dark:bg-[#2B3844] md:px-14"
    >
      <div>
        <h1 class="dark:text-white cursor-pointer">Where in the world?</h1>
      </div>
      <div
        @click="toggleDarkMode"
        class="flex gap-2 items-center cursor-pointer"
      >
        <i class="fa-regular fa-moon dark:text-white"></i>
        <p class="dark:text-white">Dark mode</p>
      </div>
    </header>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  methods: {
    toggleDarkMode() {
      this.$store.dispatch("setDarkMode");
    },
  },
  computed: {
    ...mapGetters(["darkMode"]),
    dark() {
      return this.darkMode;
    },
  },
};
</script>
