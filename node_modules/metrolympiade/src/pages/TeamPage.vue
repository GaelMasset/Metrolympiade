<template>
  <div>
    <header-component />
    <h1>La page teams</h1>
  </div>
    
</template>
  
  <script>
  import HeaderComponent from "../components/Header.vue";

  export default {
    name: 'TeamPage',
    props: {
      
    },
    components: {
      HeaderComponent
    }
  }
  </script>
  
  