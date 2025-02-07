<template>
  <div class="container m-auto pt-4">
    <h1 class="w-full text-center text-3xl text-blue-400">
      {{ props.message }}
    </h1>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  message: string;
}>();
</script>
