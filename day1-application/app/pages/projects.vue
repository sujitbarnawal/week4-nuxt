<script setup lang="ts">
import { projects } from '~/assets/data/projectData';

</script>

<template>
    <section id="projects">
        <h1 class="projects-title">Projects</h1>
        <div class="projects-cards">
            <ProjectCard v-for="project in projects" :key="project.title" :project="project"/>
        </div>

    </section>
</template>

<style scoped>
#projects {
    width: 90%;
    margin: auto;
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.projects-cards{
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    margin-top: 20px;
}

.projects-title {
    color: crimson;
}
</style>