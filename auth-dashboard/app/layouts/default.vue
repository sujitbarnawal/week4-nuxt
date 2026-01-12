<script setup lang="ts">
import AppNavbar from '~/components/AppNavbar.vue';

</script>

<template>
    <AppNavbar/>
    <main class="min-h-screen">
        <slot/>
    </main>
    
</template>