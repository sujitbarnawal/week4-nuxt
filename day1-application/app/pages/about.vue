<script setup lang="ts">
import { educations } from '~/assets/data/educationData';
import { services } from '~/assets/data/serviceData';
import { skills } from '~/assets/data/skillData';
import EducationCard from '~/components/EducationCard.vue';
import ServiceCard from '~/components/ServiceCard.vue';
import SkillsCard from '~/components/SkillsCard.vue';

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
            <h1 class="skills-title">Skills</h1>
            <div class="skills-cards">
                <SkillsCard v-for="skill in skills" :key="skill.title" :skill="skill"/>

            </div>

        </div>
        <div class="services">
            <h1 class="services-title">Services</h1>
            <div class="services-cards">
                <ServiceCard v-for="s in services" :key="s.title" :service="s"/>

            </div>

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

.skills-title {
    color: crimson;
    margin-bottom: 10px;
}

.skills-cards{
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    margin-top: 20px;
}
.services-title {
    color: crimson;
    margin-bottom: 10px;
}

.services-cards{
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    margin-top: 20px;
    margin-bottom: 40px;
}
@media (min-width:480px) {
    .about-me {
        width: 50%;
    }
}
</style>