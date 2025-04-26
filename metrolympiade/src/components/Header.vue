<script setup>
import getUser from "../composables/getUser.js";
const user = getUser(); 


</script>

<template>
    <div class="content boldonse">
        <div class="headerChild">
            <router-link to="/" class="link large">Metrolympiade</router-link>
        </div>
        <div class="headerChild">
            <router-link to="/leaderboard" class="link medium">Classement général</router-link>
        </div>
        <div v-if="user" class="headerChild">
          <router-link to="/team" class="link medium">Mon équipe</router-link>
        </div>
        <div v-if="user" class="headerChild">
          <router-link to="/games" class="link medium">Mes matchs</router-link>
        </div>
        <div class="headerChild">
          <router-link v-if="user" to="/profile" class="link small">Profil</router-link>
          <router-link v-else to="/profile" class="link small">Se connecter</router-link>
        </div>
    </div>
</template>
  
  <script>
  export default {
    name: 'header-component',
    props: {
      
    }
  }
  </script>

<style>


:root {
  --header-size: 100px;
  --font-size: 16px;
}


.content{
    background-color: rgb(255, 255, 255, 1);

    min-height: var(--header-size);
    width: calc(100vw-40px);

    padding: 0px 20px;

    display: flex;
    flex-direction: row;

    align-items: center;

}

.link {
  text-decoration: none;
  position: relative;
}

.link:hover {
  cursor: pointer;
}

.link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: currentColor;
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform .6s ease;
}

.link:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.large{
    font-size: 2rem;
    display: inline-block;
}
.medium{
    font-size: 1.5rem;
    display: inline-block;
}
.small{
    font-size: 1.2rem;
    display: inline-block;
}

.content > .headerChild:first-child{
    text-align: center;
    margin-right: 10%;
}

.content > .headerChild{
    flex-grow: 2;
}
.content > .headerChild:last-child{
    flex-grow: 1;
    margin-left: 10%;
}

@media(max-width: 1000px){
  .large{
    font-size: 1.5rem;
  }
  .medium{
      font-size: 1rem;
  }
  .small{
      font-size: 0.7rem;
  }
}

@media(max-width:750px){
  .content{
    flex-direction: column;
  }
  .large{
    font-size: 1.5rem;
  }
  .medium{
      font-size: 1.5rem;
  }
  .small{
      font-size: 1.5rem;
  }
  .content > .headerChild:first-child{
    margin: 0px;
    padding: 0px;
    text-align: left;
  }
  .content > .headerChild:last-child{
    margin: 0px;
    padding: 0px;
    text-align: left;
  }
  .content > .headerChild{
      flex-grow: 1;
      text-align: left;
      width: 100%;
  }
}
</style>
  
  