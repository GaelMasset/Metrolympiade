<template>
  <div class="myGames-page" >
    <header-component />
    <h1>La page gamespage</h1>

    <div v-if="isLoading">Chargement...</div>
    <div v-else-if="error">Erreur : {{ error }}</div>
  </div>

  <p v-for="(matchs) in matches" v-bind:key="matchs.match">{{ matchs.team1Score }}</p>
</template>
  
  <script>
  import HeaderComponent from "../components/Header.vue";
  //import MatchCard from "../components/MatchCard.vue";
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
  
  