<script setup lang="ts">

    import type { Education } from '~/assets/data/educationData.ts';

    const props=defineProps<{
        education:Education
    }>()

</script>

<template>
    <div class="edu-card">
        <p class="subject">{{ education.subject }} at {{ education.institute }}</p>
        <p class="level">Level: {{ education.level }}</p>
        <p class="time-interval">({{ education.start_year }}-{{ education.end_year }})</p>
        <p class="board">Examination Board: {{ education.board }}</p>
        <p class="grade">Grade: {{ education.marks }}</p>

    </div>
</template>

<style scoped>
    .edu-card{
        background-color: white;
        width: 400px;
        height: auto;
        border-radius: 10px;
        padding: 30px;
        font-size: 20px;
    }

    .subject{
        font-weight: bolder;
        margin-bottom: 5px;
    }
    .level{
        font-weight: bold;
        margin-bottom: 10px;
    }

</style>