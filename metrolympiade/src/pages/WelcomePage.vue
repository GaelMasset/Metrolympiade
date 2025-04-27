<template>
  <div class="boldonse">
    <header-component />
    <h1 class="welcome">Bienvenue</h1>
    
    <div class="infos">
      <div class="info">
        <h2>Podium</h2>
        <div v-if="isLoading">
          <p>Chargement ...</p>
        </div>
        <div v-else-if="error">
          <p>Podium inaccessible ...</p>
        </div>
        <div v-else>
          <ol>
            <li class="first">
              {{ leaderboard[0].team }}
            </li>
            <li class="second">
              {{ leaderboard[1].team }}
            </li>
            <li class="third">
              {{ leaderboard[2].team }}
            </li>
          </ol>
          <router-link to="/leaderboard">Reste du classement</router-link>
        </div>
      </div>

      <div v-if="user" class="info">
          <h2>Gestion</h2>
          <ul>
            <li>
              <router-link to="/team">Mon équipe</router-link>
            </li>
            <li>
              <router-link to="/games">Mes matchs</router-link>
            </li>
            <li>
              <router-link to="/profile">Mon profil</router-link>
            </li>
          </ul>      
      </div>
    </div>
  </div>
</template>
  
<script>
import HeaderComponent from "../components/Header.vue";
import useLeaderboard from "../composables/useLeaderboard.js";
import getUser from "../composables/getUser.js";

export default {
  name: 'WelcomePage',
  components: {
    HeaderComponent
  },
  setup() {
    const { leaderboard, isLoading, error } = useLeaderboard()
    const user = getUser(); 
    return { user, leaderboard, isLoading, error}
  }
}
</script>

<style>

.welcome {
  animation: appear 2s;
  text-shadow: rgb(90, 6, 90) 1px 0 5px;
  color: white;
  font-size: 5vw;
  text-align: center;
}

@keyframes appear {
  from {
    opacity: 0%;
  }
  to {
    opacity: 100%;
  }
}

.infos {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}

@media (max-width: 800px){
  .infos{
    flex-direction: column;
  }
}

.info {
  background-color: rgb(255 255 255 / 80%);
  border-radius: 0.5em;
  margin: 1vw;
  width: fit-content;
  padding: 2em;
}

.first {
  color: gold;
  font-size: xxx-large;
}

.second {
  color: silver;
  font-size: xx-large;
}

.third {
  color:orangered;
  font-size: x-large;
}

</style>
