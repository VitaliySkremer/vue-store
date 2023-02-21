<template>
  <div class="loader"/>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.loader {
  border-radius: 50%;
  border-bottom: 15px solid var(--main-color);
  border-top: 15px solid var(--main-color);
  border-left: 15px solid var(--main-color);
  border-right: 15px solid transparent;
  width: 100px;
  height: 100px;
  align-self: center;
  animation: loading 1s infinite ease;
  margin: auto;
}

@keyframes loading {
  100%{
    transform: rotateZ(360deg);
  }
}
</style>