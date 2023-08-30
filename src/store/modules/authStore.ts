import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
  }),
  getters: {
    isAuthenticated: (state) => state.user !== null,
  },
  actions: {
    setUser(user: null) {
      this.user = user;
    },
    clearUser() {
      this.user = null;
    },
  },
});
