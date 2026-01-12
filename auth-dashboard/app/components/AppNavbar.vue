<script setup lang="ts">
    import {useAuth} from "../composables/useAuth"

    const {user,logout}=useAuth()

</script>

<template>
    <header class="flex items-center h-[60px] bg-white sticky top-0">
        <nav class="flex items-center justify-between w-[90%] m-auto">
            <h1 class="text-xl font-bold text-blue-600">NuxtAuth</h1>
            <div v-if="user" class="flex items-center gap-6">
                <NuxtLink to="/dashboard">Dashboard</NuxtLink>
                <NuxtLink to="/profile">Profile</NuxtLink>
                <button @click="logout">Logout</button>

            </div>


        </nav>
    </header>
</template>