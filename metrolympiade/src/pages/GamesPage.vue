<template>
  <div class="myGames-page" >
    <header-component />
    <h1>Mes matches</h1>

    <router-link to="/game"><button class="boldonse">Ajouter un match</button></router-link>

    <div v-if="isLoading">Chargement...</div>
    <div v-else-if="error">Erreur : {{ error }}</div>

    <div v-for="(match) in matches" v-bind:key="match.match" >

      <div class="card boldonse" v-if="match.team1Score > match.team2Score">
        
        <strong>
          <span>{{ match.team1 }}</span>
          <span>{{ match.team1Score }}</span>
        </strong>
        <p>
          <span>{{ match.team2 }}</span> 
          <span>{{ match.team2Score }}</span>
        </p>
      </div>

      <div class="card boldonse" v-else-if="match.team1Score < match.team2Score">
        <p>
          <span>{{ match.team1 }}</span>
          <span>{{ match.team1Score }}</span>
        </p>
        <strong>
          <span>{{ match.team2 }}</span> 
          <span>{{ match.team2Score }}</span>
        </strong>
      </div>

      <div class="card boldonse" v-else>
        <p>
          <span>{{ match.team1 }}</span> 
          <span>{{ match.team1Score }}</span>
        </p>
        <p>
          <span>{{ match.team2 }}</span> 
          <span>{{ match.team2Score }}</span>
        </p>
      </div>

    </div>
  </div>

  

</template>
  
  <script>
  import HeaderComponent from "../components/Header.vue";
  import useMatches from "../composables/useGames.js"
  
  export default {
    name: 'GamesPage',
    props: {
      
    },
    components: {
      HeaderComponent
    },
    setup() {
      const { matches, isLoading, error } = useMatches()
      return { matches, isLoading, error }
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
p{
  display: flex;
  justify-content: space-between; 
  margin: 0;
}
strong{
  display: flex;
  justify-content: space-between; 
  margin: 0;
}
</style>  
  