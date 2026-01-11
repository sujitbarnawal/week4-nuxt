<script setup lang="ts">

import type { Project } from '~/assets/data/projectData';

const props = defineProps<{
    project: Project
}>()

</script>

<template>
    <div class="project-card">
        <img :src="project.image" :alt="project.title">
        <p class="project-title">{{ project.title }}</p>
        <p class="project-description">{{ project.description }}</p>
        <div class="tech-stack">
            <p class="tech-item" v-for="item in project.tech_stack">{{ item }}</p>
        </div>
        <div class="links">
            <a target="_blank" :href="project.github_link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="crimson" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-github text-white">
                    <path
                        d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4">
                    </path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
            </a>
            <a target="_blank" :href="project.live_link">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                    fill="crimson">
                    <path
                        d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
                </svg>
            </a>
        </div>


    </div>
</template>

<style scoped>
.project-card {
    background-color: white;
    width: 400px;
    height: auto;
    border-radius: 10px;
    font-size: 20px;
    overflow: hidden;           
}




img {
    width: 100%;
    height: 220px;             
    object-fit: cover;          
    object-position: center;   
    border-radius: 10px 10px 0 0;
    display: block;
}


.project-title {
    font-size: 20px;
    font-weight: bolder;
    padding-top: 10px;
    padding-left: 20px;
}

.project-description {
    font-size: 15px;
    font-weight: light;
    padding-left: 20px;
    padding-top: 20px;
    margin-bottom: 10px;
    color: gray;
}

.tech-stack {
    padding-left: 20px;
    display: flex;
    flex-wrap: wrap;
    font-size: 12px;
    gap: 10px;
}

.tech-item {
    background-color: crimson;
    color: white;
    padding: 10px;
    border-radius: 20px;
}

.links {
    display: flex;
    gap: 20px;
    padding-left: 20px;
    margin-top: 20px;
}

a {
    text-decoration: none;
    background-color: rgb(236, 196, 204);
    border-radius: 50%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>