<template>
  <div class="card">
    <slot/>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>

.card {
  padding: 10px;
  background-color: white;
  box-shadow: 1px 2px 3px rgba(0,0,0,.5);
  border-radius: 5px;
}

</style>