<script setup>
    //defineProps(["match"])
</script>

<template>
    <article class="card">
        <header>
            <p>{{ match.activity }}</p>
        </header>
        <p>{{ match.team1Score }}</p>
    </article>
</template>