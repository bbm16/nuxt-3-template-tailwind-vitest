<template>
  <WelcomeComponent :message="text" />
</template>

<script setup lang="ts">
import WelcomeComponent from "@/components/WelcomeComponent.vue";

const text = ref<string>("Hello, Nuxt 3!");
</script>
