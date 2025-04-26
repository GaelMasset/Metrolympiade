<template>
  <header-component />
  <div class="leaderboard-page boldonse">

    <h1 class="titlePage">Classement général</h1>

    <div v-if="isLoading">Chargement...</div>
    <div v-else-if="error">Erreur : {{ error }}</div>
    <div v-else-if="leaderboard.length === 0">Aucune donnée à afficher.</div>
    
    <table v-else class="leaderboard-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Nom de l'équipe</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(team, index) in leaderboard" :key="team.team">
          <td>{{ index + 1 }}</td>
          <td>{{ team.team }}</td>
          <td>{{ team.points }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import HeaderComponent from "../components/Header.vue"
import useLeaderboard from "../composables/useLeaderboard.js"

export default {
  name: 'LeaderboardPage',
  components: {
    HeaderComponent
  },
  setup() {
    const { leaderboard, isLoading, error } = useLeaderboard()
    return { leaderboard, isLoading, error }
  }
}
</script>

<style scoped>
.leaderboard-page {
  padding: 2rem;
}

.titlePage{
  color:white;
  text-align: center;
  background-color: rgb(90, 6, 90);
  padding-right: 5rem;
}


.leaderboard-table {
  width: 100%;
  margin-top: 1rem;
  border-collapse: collapse;
  background-color: rgba(255, 255, 255, 0.9);
  color: black;
}

.leaderboard-table th, .leaderboard-table td {
  border: 1px solid #ccc;
  padding: 0.5rem 1rem;
  text-align: left;
}

.leaderboard-table th {
  background-color: #f2f2f2;
}
</style>

  