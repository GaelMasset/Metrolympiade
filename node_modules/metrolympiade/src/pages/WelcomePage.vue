<template>
  <div>
    <header-component />
    <h1>Bienvenue !!</h1>
  </div>
</template>
  
<script>
import HeaderComponent from "../components/Header.vue";

export default {
  name: 'WelcomePage',
  components: {
    HeaderComponent
  }
}
</script>
