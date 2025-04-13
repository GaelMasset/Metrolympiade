<template>
  <div>
    <header-component />
    <h1>Classement général</h1>
  </div>
</template>
  
  <script>
  import HeaderComponent from "../components/Header.vue";

  
  export default {
    name: 'LeaderboardPage',
    props: {
      
    },
    components: {
      HeaderComponent
    }
  }
  </script>
  
  