<template>
  <div>
    <header-component />
    <div v-if="isLoadingTeams && isLoadingActivities"  class="card boldonse">
      <div class="item">
        <p> Chargement... </p>
      </div>
    </div>

    <div v-else>
      <div class="card">
        <h1>Nouveau match </h1>
        <form>
          <label for="liste-adversaires">Adversaires</label>
          <select name="liste-adversaires" id="liste-adversaires">
            <option v-for="team in teams" :key="team.id" >{{ team.name }}</option>
          </select>
          <br><br>

          <label for="liste-activites">Activités</label>
          <select name="liste-activites" id="liste-activites">
            <option v-for="activity in activities" :key="activity.id">{{ activity.name }}</option>
          </select>
          <br><br>

          <label for="heure-de-debut">Heure de début</label>
          <input type="time" name="heure-de-debut" id="heure-de-debut">
          <br><br>

          <p>Scores finaux</p>
          <label for="score-team">{{ teamName }}</label>
          <input type="number" name="score-team" id="score-team">
          <br>
          <label for="score-adversaire">Adversaire</label>
          <input type="number" name="score-adversaire" id="score-adversaire">
          <br><br>

          <input type="submit" value="Enregistrer">
        </form>
      </div>
    </div>
    
  </div>
</template>
  
<script>
import HeaderComponent from "../components/Header.vue";
import getTeams from "../composables/getTeams.js";
import getActivities from "../composables/getActivities.js";

export default {
  name: 'GamePage',
  props: {
    
  },
  components: {
    HeaderComponent
  },
  setup() {
    const { teams, isLoadingTeams, errorTeams } = getTeams();
    const { activities, isLoadingActivities, errorActivities } = getActivities();
  
    return {
      teams,
      activities,
      isLoadingTeams,
      isLoadingActivities,
      errorTeams,
      errorActivities
    };
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

</style>
  
  