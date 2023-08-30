<template>
  <div>
    <input v-model="username" placeholder="Username" />
    <input v-model="password" placeholder="Password" type="password" />
    <button @click="handleLogin">Login</button>
  </div>
</template>

<script setup>
  import { ref, createApp } from "vue";
  import { AuthSymbol } from "../services/AuthService";
  import { useAuthStore } from "../store/modules/authStore";

  const app = createApp();
  const authService = app.provide(AuthSymbol);
  const authStore = useAuthStore();

  const username = ref("");
  const password = ref("");

  const handleLogin = async () => {
    try {
      const user = await authService.login(username.value, password.value);
      authStore.setUser(user);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
</script>
