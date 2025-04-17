<script setup>
  import {ref, computed} from 'vue';
  import {useRouter} from "vue-router";

  const email = ref("")
  const password = ref("")

  const isLoading = ref(false)

  const isRegistered = ref(false)

  const error = ref(new Error(""))

  const router = useRouter()

  const isValid = computed(() => {
    return email.value.trim() && password.value.trim();
  })

  const isError = computed(() => {
    return error.value.message.length > 0
  })

  function finish() {
    router.push("/leaderboard")
  }

  function login() {
    isLoading.value = true

    const response = fetch('http://localhost:3000/auth/login', {
      method : "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    })

    response.then((res) => {
      if (!res.ok) {
        throw new Error("Identifiants incorrects");
      }
      return res.json();
    })
    .then((data) => {
      localStorage.setItem("user", JSON.stringify(data));
      console.log(localStorage.getItem("user"));
      isRegistered.value = true;
    })
    .catch((err) => {
      error.value = err;
    }).finally(() =>{
      isLoading.value = false
    })
  }

</script>

<template>
  <div>
    <header-component/>
    <div v-if="isLoading" class="card boldonse">
      <div class="item">
        <p> Chargement... </p>
      </div>
    </div>

    <div v-else-if="isRegistered" class="successCard boldonse">
      <div class="item">
        <p>Connexion réussie !</p>
        <button class="boldonse" @click="finish">Continuer</button>
      </div>
    </div>
    
    <div v-else>
      <div  class="card boldonse">
        <div class="item">
          <h3>Connexion</h3>
        </div>
        <div class="item">
          <form @submit.prevent="login">
            <input type="email" class="formItem" placeholder="Email" v-model="email"/>
            <input type="password" class="formItem" placeholder="Mot de passe" v-model="password"/>
            <button class="formItem boldonse" type="submit" :disabled="!isValid">Connexion</button>
          </form>
        </div>
        
        <div class="item">
          <p> Pas encore de compte ? <router-link to="/register">Je m'inscris</router-link></p>
        </div> 
      </div>

      <div class="errorCard boldonse" v-if="isError">
          <div class="item">
            <p>Connexion refusée : {{ error.message }}</p>
          </div>
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

.errorCard {
  width: 30em;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5em;
  background-color:tomato;
  color: darkred;
}

.successCard {
  width: 30em;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5em;
  background-color:darkgreen;
  color: greenyellow;
}

</style>