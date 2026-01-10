<script setup lang="ts">
import { educations } from '~/assets/data/educationData';
import EducationCard from '~/components/EducationCard.vue';

</script>

<template>
    <section id="about">
        <div class="description">
            <h1 class="name">I'm Sujit Barnawal, a Web Developer</h1>
            <p class="about-me">
                As a passionate web developer with a strong focus on the MERN stack and frontend technologies, I'm
                dedicated to creating beautiful, functional websites that provide exceptional user experiences.
            </p>

        </div>
        <div class="education">
            <h1 class="edu-title">Education</h1>
            <div class="edu-cards">
                <EducationCard v-for="e in educations" :key="e.level" :education="e" />
            </div>


        </div>
        <div class="skills">

        </div>
        <div class="services">

        </div>

    </section>
</template>

<style scoped>
#about {
    width: 90%;
    margin: auto;
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.name {
    color: crimson;
}

.about-me {
    line-height: 1.5;
    font-size: 18px;
    padding-top: 10px;
}

.edu-title {
    color: crimson;
}

.edu-cards{
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    margin-top: 20px;
}

@media (min-width:480px) {
    .about-me {
        width: 50%;
    }
}
</style>