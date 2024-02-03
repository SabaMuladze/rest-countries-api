<template>
  <Header></Header>
  <router-view></router-view>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,300;6..12,600;6..12,800&display=swap");

h1 {
  @apply font-extrabold text-base dark:text-white;
}
p {
  @apply text-sm dark:text-white;
}
h2 {
  @apply font-extrabold text-lg dark:text-white;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Nunito Sans", sans-serif;
}
body {
  width: 100%;
  min-height: 100vh;
}
</style>
