<script setup>
  import {ref, computed} from 'vue';

  const userName = ref("")
  const teamName = ref("")
  const email = ref("")
  const password = ref("")

  const isValid = computed(() => {
    return email.value.trim() && password.value.trim() && userName.value.trim() && teamName.value.trim();
  })

</script>

<template>
    <div>
    <header-component />
    
    <div class="card boldonse">
      <div class="item">
        <h3>Inscription</h3>
      </div>
      <div class="item">
        <form>
          <input type="text" class="formItem" placeholder="Nom d'utilisateur" v-model="userName"/>
          <input type="text" class="formItem" placeholder="Nom d'équipe" v-model="teamName"/>
          <input type="email" class="formItem" placeholder="Email" v-model="email"/>
          <input type="password" class="formItem" placeholder="Mot de passe" v-model="password"/>    
          <button class="formItem boldonse" type="submit" :disabled="!isValid">Inscription</button>
        </form>
      </div>
      
      <div class="item">
        <p> Déjà inscrit ? <router-link to="/login">Je me connecte</router-link></p>
      </div>
      
    </div>


  </div>
</template>
  
  <script>
  import HeaderComponent from "../components/Header.vue";

  export default {
    name: 'RegisterPage',
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
  
  