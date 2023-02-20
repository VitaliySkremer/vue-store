<template>
  <button :class="{tab:true, active:props.active}">
    <slot/>
  </button>
</template>

<script setup lang="ts">

const props = defineProps<{
  active:boolean
}>()

</script>

<style lang="scss" scoped>

.tab {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 10px;
  display: flex;
  flex-direction: column;

  &::after {
    content:'';
    width: 100%;
    height: 2px;
    background-color: var(--main-color);
    transform: scale(0);
    transition: transform .2s ease;
  }

  &:hover::after {
    transform: scale(1);
  }
}

.active {
  &::after {
    transform: scale(1);
  }
}

</style>