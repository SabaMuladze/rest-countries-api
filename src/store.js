import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      darkMode: false,
    };
  },
  getters: {
    darkMode(state) {
      return state.darkMode;
    },
  },
  actions: {
    setDarkMode(context) {
      context.commit("toggleDarkMode");
    },
  },
  mutations: {
    toggleDarkMode(state) {
      return (state.darkMode = !state.darkMode);
    },
  },
});

export default store;
