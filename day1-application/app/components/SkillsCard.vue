<script setup lang="ts">
import type { SkillCategory } from '~/assets/data/skillData';



const props = defineProps<{
    skill: SkillCategory
}>()
</script>

<template>
    <div class="skills-card">
        <p class="category-title">{{ skill.title }}</p>
        <div class="skill-items">
            <p class="items" v-for="item in skill.items">
                {{ item }}
            </p>
        </div>


    </div>

</template>

<style scoped>
.skills-card {
    background-color: white;
    width: 400px;
    height: auto;
    border-radius: 10px;
    padding: 30px;
    font-size: 20px;
}
.category-title{
    font-size:20px;
    font-weight: bolder;
    margin-bottom: 10px;
}
.skill-items{
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}
.items{
    background-color: crimson;
    color: white;
    padding: 10px;
    border-radius: 20px;
    font-size: 15px;
    
}
</style>