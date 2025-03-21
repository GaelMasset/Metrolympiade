<template>
  <div>
    <header-component />
    <h1>La page login</h1>
  </div>
</template>
  
  <script>
  import HeaderComponent from "../components/Header.vue";

  export default {
    name: 'LoginPage',
    props: {
      
    },
    components: {
      HeaderComponent
    }
  }
  </script>
  
  