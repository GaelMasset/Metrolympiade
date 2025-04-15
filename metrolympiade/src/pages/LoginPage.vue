<script setup>
  import {ref, computed} from 'vue';

  const email = ref("")
  const password = ref("")

  const isValid = computed(() => {
    return email.value.trim() && password.value.trim();
  })

</script>

<template>
  <div>
    <header-component />
    
    <div class="card boldonse">
      <div class="item">
        <h3>Connexion</h3>
      </div>
      <div class="item">
        <form>
          <input type="email" class="formItem" placeholder="Email" v-model="email"/>
          <input type="password" class="formItem" placeholder="Mot de passe" v-model="password"/>
          <button class="formItem boldonse" type="submit" :disabled="!isValid">Connexion</button>
        </form>
      </div>
      
      <div class="item">
        <p> Pas encore de compte ? <router-link to="/register">Je m'inscris</router-link></p>
      </div>
      
    </div>


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
  
<style>

.card {
  width: 30em;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5vw;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5em;
}

.item {
  width: 20em;
  text-align: center;
}

.formItem {
  width: 15em;
  margin: 1em;
  border-radius: 0.5em;
}

</style>