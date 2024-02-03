<template>
  <div :class="{ dark: dark }">
    <section
      class="w-full h-[90vh] flex flex-col bg-[#fafafa] p-6 dark:bg-[#202C36]"
    >
      <button
        class="py-2 px-3 shadow-md bg-white flex justify-between items-center gap-2 dark:bg-[#2B3844]"
      >
        <i class="fa-solid fa-arrow-left"></i>
        <p>Back</p>
      </button>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["darkMode"]),
    dark() {
      return this.darkMode;
    },
  },
};
</script>
