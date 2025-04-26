<script setup>
  import {ref} from 'vue';

  let isLoading = ref(true);
  let myteam = ref();

 updateTeamValue();

 function updateTeamValue(){
  fetch("http://localhost:3000/teams/me", {
    headers: {
      "Authorization": "Bearer " + getUser().token
    }
  })
  .then(response => response.json())
  .then(data => {
    myteam.value = data
    isLoading.value = false;
    setTimeout(() => {
      document.getElementById("teamName").value = myteam.value.name;
    }, 200);

  })
  .catch(error => {
    console.error("Erreur lors de la récupération de l'équipe :", error)
    isLoading.value = false;
  });
 }

  function addMember() {
    if(document.getElementById("inputMember").value.length == 0){
      alert("Vous devez entrer un nom!");
      return;
    }
    isLoading.value = true;

    myteam.value.members.push(document.getElementById("inputMember").value);
  fetch("http://localhost:3000/teams/me", {
    method: "PUT",
    headers: {
      "Authorization": "Bearer " + getUser().token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: myteam.value.name,
      members: myteam.value.members
    })
  })
    .then(response => response.json())
    .then(data => {
      myteam.value = data
      updateTeamValue();
      document.getElementById("inputMember").value = "";
    })
    .catch(error => {
      console.error("Erreur lors de la mise à jour de l'équipe :", error)
    })
    
    isLoading.value = false;
  }
  
  async function updateTeamName(){
    console.log(document.getElementById("teamName").value);
    fetch("http://localhost:3000/teams/me", {
      method: "PUT",
      headers: {
        "Authorization": "Bearer " + getUser().token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ 
        "name": document.getElementById("teamName").value
      })
    })
    .then(response => response.json())
    .catch(error => console.error('Erreur:', error));
  }
</script>

<template>
  <header-component />
  <div class="myteam boldonse">

    <h1 class="titlePage">Mon équipe</h1>

    <div v-if="isLoading">Chargement...</div>
    <div v-else-if="error">Erreur : {{ error }}</div>
    <div v-else class="centered">
      <h2 class="infoInputTxt">Nom de l'équipe</h2>
      <input type="text" class="inputTxt" id="teamName"/>
      <button class="addMemberButton miLong" @click="updateTeamName()">Mettre à jour le nom de l'équipe</button>

      <h2 class="infoInputTxt">Membres de l'équipe</h2>

      <teamMember-component
        v-for="(member, index) in myteam.members"
        :key="index"
        :nom="member"
      />

      <button class="addMemberButton" @click="addMember()">Ajouter un membre</button>
      <input type="text" id="inputMember" class="inputMember" placeholder="Nom du membre à ajouter"/>
    </div>
  </div>
</template>
  
  <script>
  import TeamMemberComponent from "../components/teamMember.vue";
  import HeaderComponent from "../components/Header.vue";
  import getUser from "@/composables/getUser";

  export default {
    name: 'TeamPage',
    props: {
      
    },
    components: {
      HeaderComponent,
      TeamMemberComponent
    }
  }
  </script>
  
  <style>
.leaderboard-page {
  padding: 2rem;
}

.titlePage{
  color:white;
  text-align: center;
  background-color: rgb(90, 6, 90);
  padding-right: 5rem;
}

.centered{
  display: flex;
  align-items: center;
  flex-direction: column;
}
.inputTxt{
  height: 40px;
  width: 500px;
  font-size: 1.5rem;
}
.infoInputTxt{
  margin-top: 50px;
}


.myteam {
  
  padding: 2rem;
  margin-top: 1rem;
  border-collapse: collapse;
  background-color: rgba(255, 255, 255, 0.9);
  color: black;
}

.addMemberButton{
  border: 1.px solid rgb(58, 58, 58);
  width: 50%;
  height: 50px;
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  margin-top: 20px;
 margin-bottom: 20px;
  transition: transform 0.3s ease;
  font-size: 20px;
  color: black;
}
.addMemberButton:hover{
  transform: scale(1.05);
}
.addMemberButton:active{
  transform: scale(0.95);
}
.inputMember{
 margin-bottom: 100px;
 height: 50px;
 width: 50%;
 border-radius: 8px;
 font-size: 20px;
 text-align: center;
}
.miLong{
  width: 500px;
}


</style>