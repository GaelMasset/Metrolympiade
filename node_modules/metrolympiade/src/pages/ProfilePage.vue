<script setup>
import {useRouter} from "vue-router";
import getUser from "../composables/getUser.js";
const user = getUser(); 

const router = useRouter();

function logout() {
  localStorage.removeItem("user");
  router.push("/login");
}

console.log(user);

</script>

<template>
  <div>
    <header-component />
    <div class="card boldonse">
      <h1>{{user.username}}</h1>
      <id class="item">ID : {{ user.id }}</id>
      <p class="item">Email : {{ user.email }}</p>
      <p class="item">Équipe : {{ user.team.name }}</p>
      <button class="button boldonse" @click="logout">Se déconnecter</button>
    </div>  
  </div>
</template>
  
  <script>
  import HeaderComponent from "../components/Header.vue";

  export default {
    name: 'ProfilePage',
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

.button {
  width: 20em;
  text-align: center;
  margin: 5vw;
  border-radius: 5em;
  border: 0px;
  background-color: blueviolet;
  color: white;
}

.button:hover {
  cursor: pointer;
}

</style>
  