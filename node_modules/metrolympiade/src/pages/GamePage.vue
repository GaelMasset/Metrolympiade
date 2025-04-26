<script setup>

import { ref } from "vue";
import HeaderComponent from "../components/Header.vue";
import getTeams from "../composables/getTeams.js";
import getActivities from "../composables/getActivities.js";
import getUser from "../composables/getUser.js";

const { teams, isLoadingTeams, errorTeams } = getTeams();
const { activities, isLoadingActivities, errorActivities } = getActivities();

const form = ref({
  team2Id: '',
  activityId: '',
  startedAtTime: '',
  team1Score: 0,
  team2Score: 0
})

const teamName = getUser().team.name;

const handleSubmit = async () => {
  const jwtToken = getUser().token;

  const today = new Date().toISOString().split('T')[0];
  const startedAt = new Date(`${today}T${form.value.startedAtTime}:00Z`).toISOString();

  const body = {
    team2Id: form.value.team2Id,
    activityId: form.value.activityId,
    startedAt: startedAt,
    team1Score: form.value.team1Score,
    team2Score: form.value.team2Score
  }

  try {
    const res = await fetch('http://localhost:3000/matches', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwtToken}`
      },
      body: JSON.stringify(body)
    });

    const data = await res.json();
    if (res.ok) {
      alert('Match créé avec succès');
      console.log(data);
    } else {
      throw new Error(data.message || 'Erreur lors de la création');
    }

  } catch (error) {
    console.error('Erreur:', error);
    alert(error.message);
  }
}

</script>

<template>
  <div>
    <header-component />
    <div v-if="isLoadingTeams || isLoadingActivities" class="card boldonse">
      <div class="item">
        <p> Chargement... </p>
      </div>
    </div>
    <div v-else-if="errorTeams || errorActivities" class="card boldonse">
      <div class="item">
        <p>Erreur : {{ error }}</p>
      </div>
    </div>

    <div v-else>
      <div class="card">
        <h1>Nouveau match </h1>
        <form @submit.prevent="handleSubmit">
          <label for="liste-adversaires">Adversaires</label>
          <select name="liste-adversaires" id="liste-adversaires" v-model="form.team2Id" class="formItem">
            <option v-for="team in teams" :key="team.id" :value="team.id" >{{ team.name }}</option>
          </select>
          <br>

          <label for="liste-activites">Activités</label>
          <select name="liste-activites" id="liste-activites" v-model="form.activityId" class="formItem">
            <option v-for="activity in activities" :key="activity.id" :value="activity.id">{{ activity.name }}</option>
          </select>
          <br>

          <label for="heure-de-debut">Heure de début</label>
          <input type="time" name="heure-de-debut" id="heure-de-debut" v-model="form.startedAtTime" class="formItem">
          <br>

          <p>Scores finaux</p>
          <label for="score-team">{{ teamName }}</label>
          <input type="number" name="score-team" id="score-team" v-model.number="form.team1Score" class="formItem">
          <br>
          <label for="score-adversaire">Adversaire</label>
          <input type="number" name="score-adversaire" id="score-adversaire" v-model.number="form.team2Score" class="formItem">
          <br>

          <input type="submit" value="Enregistrer" class="formItem">
        </form>
      </div>
    </div>
    
  </div>
</template>
  


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
  
  