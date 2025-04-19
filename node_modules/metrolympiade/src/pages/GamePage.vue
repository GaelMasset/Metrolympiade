<template>
  <div>
    <header-component />
    <div class="card">
      <h1>Nouveau match </h1>
      <form>
        <label for="liste-adversaires">Adversaires</label>
        <select name="liste-adversaires" id="liste-adversaires">
          <option value="test">Test</option>
        </select>
        <br><br>

        <label for="liste-activites">Activités</label>
        <select name="liste-activites" id="liste-activites">
          <option value="test">Test</option>
        </select>
        <br><br>

        <label for="heure-de-debut">Heure de début</label>
        <input type="time" name="heure-de-debut" id="heure-de-debut">
        <br><br>

        <p>Scores finaux</p>
        <label for="score-team">teamName</label>
        <input type="number" name="score-team" id="score-team">
        <br>
        <label for="score-adversaire">Adversaire</label>
        <input type="number" name="score-adversaire" id="score-adversaire">
        <br><br>

        <input type="submit" value="Enregistrer">
      </form>
    </div>
    
  </div>
</template>
  
<script>
import HeaderComponent from "../components/Header.vue";

export default {
  name: 'GamePage',
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

</style>
  
  