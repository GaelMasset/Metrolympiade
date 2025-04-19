<template>
  <div>
    <header-component />
    <h1>La page gamepage</h1>
  </div>
</template>
  
  <script>
  import HeaderComponent from "../components/Header.vue";

  export default {
    name: 'GamePage',
    props: {
      
    },
    components: {
      HeaderComponent
    }
  }
  </script>
  
  