<template>
  <div class="myGames-page" >
    <header-component />
    <h1>La page gamespage</h1>

    <div v-if="isLoading">Chargement...</div>
    <div v-else-if="error">Erreur : {{ error }}</div>
  </div>

  <tr v-for="(matchs, index) in matches" v-bind:key="matchs.match">
    <td>{{ matchs.team1Score }}</td>
    <td>{{ index+1 }}</td>
    <!--<td>{{ MatchCard(matchs) }}</td>-->
  </tr>

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
  
  