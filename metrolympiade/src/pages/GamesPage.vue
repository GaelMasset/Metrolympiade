<template>
  <header-component />
  <div class="myGames-page boldonse">
    <h1 class="titlePage">Mes matchs</h1>
    <div class="button-div">
      <router-link to="/game"><button class="boldonse">Ajouter un match</button></router-link>
    </div>
    <div v-if="isLoading">Chargement...</div>
    <div v-else-if="error">Erreur : {{ error }}</div>

    <div v-for="(match) in matches" v-bind:key="match.match" >

      <div class="card boldonse"  v-if="match.team1Score > match.team2Score">
        <small>{{ match.activity }}   à  {{ fetchHours(match.startedAt) }}:{{ fetchMinutes(match.startedAt) }}</small>
        <strong>
          <span>{{ match.team1 }}</span>
          <span>{{ match.team1Score }}</span>
        </strong>
        <div class="normalText">
          <span>{{ match.team2 }}</span> 
          <span>{{ match.team2Score }}</span>
        </div>
      </div>

      <div class="card boldonse" v-else-if="match.team1Score < match.team2Score">
        <small>{{ match.activity }}  à   {{ fetchHours(match.startedAt) }}:{{ fetchMinutes(match.startedAt) }}</small>
        <div class="normalText">
          <span>{{ match.team1 }}</span>
          <span>{{ match.team1Score }}</span>
        </div>
        <strong>
          <span>{{ match.team2 }}</span> 
          <span>{{ match.team2Score }}</span>
        </strong>
      </div>

      <div class="card boldonse" v-else>
        <small>{{ match.activity }}   à  {{ fetchHours(match.startedAt) }}:{{ fetchMinutes(match.startedAt) }}</small>
        <div class="normalText">
          <span>{{ match.team1 }}</span> 
          <span>{{ match.team1Score }}</span>
        </div>
        <div class="normalText">
          <span>{{ match.team2 }}</span> 
          <span>{{ match.team2Score }}</span>
        </div>
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
    },
    methods:{
      fetchHours(dateString){
        const stringToDate= new Date(dateString)
        return stringToDate.getUTCHours()
      },
      fetchMinutes(dateString){
        const stringToDate = new Date(dateString)
        return stringToDate.getUTCMinutes()
      }
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
  min-height: 15em;
}

.normalText{
  display: flex;
  align-self: flex-start;
  justify-content: space-between;
  width: 80%;
  margin: 4%;
}

strong{
  display: flex;
  align-self: flex-start;
  justify-content: space-between;
  width: 80%;
  margin: 4%;
}

small{
  display: flex;
  align-self: flex-start;
  margin: 4%;
}

.button-div{
  display: flex;
  justify-content: flex-end;
  margin-right: 10%;
  margin-top: 5%;
}

button{
  background-color: blueviolet;
  color: white;
  width: auto;
  height: 5em;
}

.titlePage{
  color:white;
  text-align: center;
  background-color: rgb(90, 6, 90);
  padding-right: 5rem;
  margin-top: 2%;
}

.myGames-page{
  padding: 2rem;
}

</style>  
  