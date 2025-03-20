<template>
    <div class="content boldonse">
        <div class="headerChild">
            <h1 class="link">Metrolympiade</h1>
        </div>
        <div class="headerChild">
            <h2 class="link">Classement général</h2>
        </div>
        <div class="headerChild">
            <h2 class="link">Mon équipe</h2>
        </div>
        <div class="headerChild">
            <h2 class="link">Mes matchs</h2>
        </div>
        <div class="headerChild">
            <h3 class="link">Profil</h3>
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
    width: 100vw;

    padding: 0px 20px;

    display: flex;
    flex-direction: row;

    align-items: center;

    position: fixed;
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

h1{
    font-size: 1.5rem;
    display: inline-block;
}
h2{
    font-size: 1rem;
    display: inline-block;
}
h3{
    font-size: 0.7rem;
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

</style>
  
  