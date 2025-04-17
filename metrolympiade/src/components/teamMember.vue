<template>
    <div class="teamMemberContent boldonse">
        <h1>{{nom}}</h1>
    </div>
</template>
  
  <script>
  export default {
    name: 'teamMember-component',
    props: {
        nom: {
            type: String,
            required: true
        }
    }
  }
  </script>

<style>

.teamMemberContent{
    width: calc(80% - 100px);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease-in;
    margin: 10px 50px;
    padding: 10px;
    background-color: white;
    border-radius: 20px;
    border: 1px solid #b9b9b9;
}
.teamMemberContent:hover{
    transform: scale(1.1);
}
h1{
    text-align: center;
}


</style>
  
  