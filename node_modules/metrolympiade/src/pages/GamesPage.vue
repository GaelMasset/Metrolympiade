<template>
  <div>
    <header-component />
    <h1>La page gamespage</h1>
  </div>
</template>
  
  <script>
  import HeaderComponent from "../components/Header.vue";

  export default {
    name: 'GamesPage',
    props: {
      
    },
    components: {
      HeaderComponent
    }
  }
  </script>
  
  