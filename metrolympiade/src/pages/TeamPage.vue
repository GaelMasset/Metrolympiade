<template>
  <header-component />
  <div class="myteam boldonse">

    <h1 class="titlePage">Mon équipe</h1>

    <div v-if="isLoading">Chargement...</div>
    <div v-else-if="error">Erreur : {{ error }}</div>
    <div v-else class="centered">
      <h2 class="infoInputTxt">Nom de l'équipe</h2>
      <input type="text" class="inputTxt"/>

      <h2 class="infoInputTxt">Membres de l'équipe</h2>

      <teamMember-component nom="Jean" />
      <teamMember-component nom="Jean" />
      <teamMember-component nom="Jean" />
    </div>
  </div>
</template>
  
  <script>
  import TeamMemberComponent from "../components/teamMember.vue";
import HeaderComponent from "../components/Header.vue";

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
  width: 100%;
  margin-top: 1rem;
  border-collapse: collapse;
  background-color: rgba(255, 255, 255, 0.9);
  color: black;
}


</style>