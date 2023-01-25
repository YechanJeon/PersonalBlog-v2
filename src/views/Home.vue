<template>
  <div id = 'homePage'>
    <Header/> 
    <router-view/>
    

  </div>
</template>

<script setup>

import Header from '../components/Header.vue'


</script>

<style>
  #homePage {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-content: stretch;
    background: white;
  }
</style>