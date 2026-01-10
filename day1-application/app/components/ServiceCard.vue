<script setup lang="ts">
import type { Service } from '~/assets/data/serviceData';

    const props=defineProps<{
        service:Service
    }>()
</script>

<template>
    <div class="service-card">
        <p class="service-title">{{ service.title }}</p>
        <p class="service-description">{{ service.description }}</p>

    </div>
</template>

<style scoped>
    .service-card{
        background-color: white;
        width: 400px;
        height: auto;
        border-radius: 10px;
        padding: 30px;
        font-size: 20px;
    }

    .service-title{
        font-weight: bolder;
        margin-bottom: 5px;
    }

    .service-description{
        font-size: 18px;
        margin-top: 5px;
    }
    

</style>