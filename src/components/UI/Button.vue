<template>
  <button class="button">
    <slot/>
  </button>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>

.button {
  background-color: transparent;
  border: 2px solid var(--main-color);
  color: var(--main-color);
  padding: 10px;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 5px;
  transition: background-color .2s ease;

  &:hover {
    background-color: var(--lightgray);
  }
}

</style>