<script>
import getUser from '@/composables/getUser';
import { ref } from 'vue';

export default {
    name: 'teamMember-component',
    props: {
        nom: {
            type: String,
            required: true,
        },
    },
    methods: {
        deleteMember() {
            let myteam = ref();

            fetch("http://localhost:3000/teams/me", {
                headers: {
                    "Authorization": "Bearer " + getUser().token,
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    myteam.value = data;

                    const index = myteam.value.members.findIndex(member => member === this.nom);
                    if (index !== -1) {
                        myteam.value.members.splice(index, 1);
                    }

                    return fetch("http://localhost:3000/teams/me", {
                        method: "PUT",
                        headers: {
                            "Authorization": "Bearer " + getUser().token,
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            name: myteam.value.name,
                            members: myteam.value.members,
                        }),
                    });
                })
                .then((response) => response.json())
                .then((data) => {
                    myteam.value = data;
                    window.location.reload();
                })
                .catch((error) => {
                    console.error("Erreur lors de la mise à jour de l'équipe :", error);
                });
        },
    },
};
</script>

<template>
    <div class="teamMemberContent boldonse">
        <p>{{ nom }}</p>
        <button class="deleteteammemberbutton" @click="deleteMember()">X</button>
    </div>
</template>




<style>
.teamMemberContent {
    min-width: calc(40% - 100px);
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: transform 0.2s ease-in;
    margin: 10px 50px;
    padding: 10px 10px;
    background-color: white;
    border-radius: 20px;
    border: 1px solid #b9b9b9;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

}
.teamMemberContent:hover {

}
.deleteteammemberbutton{
    width: 50px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border: none;
    border-radius: 8px;
}
.deleteteammemberbutton:hover{
    background-color: rgb(89, 35, 138);
}
.deleteteammemberbutton:active{
    background-color: rgb(53, 20, 84);
}
h1 {
    text-align: center;
}
</style>