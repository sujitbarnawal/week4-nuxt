<script setup lang="ts">
    import {useAuth} from "../composables/useAuth"

    useSeo(
        'Dashboard',
        'User Dashboard Overview'
    )

    definePageMeta({
        middleware:"auth"
    })

    const {user}=useAuth()

</script>
<template>
  <div class="pt-5 w-[90%] mx-auto">
    <h1 class="text-2xl font-semibold mb-4">
      Dashboard
    </h1>

    <p class="mb-6">
      Welcome, <span class="font-medium">{{ user?.name }}</span>
    </p>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="bg-white p-4 rounded-lg shadow">
        Total Projects: <strong>5</strong>
      </div>
      <div class="bg-white p-4 rounded-lg shadow">
        Active Tasks: <strong>12</strong>
      </div>
      <div class="bg-white p-4 rounded-lg shadow">
        Messages: <strong>3</strong>
      </div>
    </div>
  </div>
</template>
