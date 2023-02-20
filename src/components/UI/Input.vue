<template>
  <input class="input"/>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>

.input {
  border: 2px solid var(--lightgray);
  outline: none;
  background-color: var(--lightgray);
  padding: 10px;
  border-radius: 5px;
  transition: border-color .2s ease;
  width: 100%;
  &:hover {
    border-color: var(--main-color);
  }

  &:focus {
    border-color: var(--main-color);
  }
}

</style>