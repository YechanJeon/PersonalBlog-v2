<template>
  <div id = 'homePage'>
    <Header/> 
    <router-view/>
    

  </div>
</template>

<script>

import Header from '../components/Header.vue'

export default {
  components : {
    Header,
  },
}

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