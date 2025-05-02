<script setup>
import { RouterView } from 'vue-router'
import MenuCom from './components/MenuCom.vue'
</script>

<template>
  <header>
    <div class="col">
      <MenuCom />
    </div>
  </header>

  <RouterView />
</template>
<style>
@media (min-width: 1024px) {
  .col {
    min-height: 300vh;
    display: flex;
    align-items: center;
  }
}
</style>
