<script setup lang="ts">
    import {useAuth} from "../composables/useAuth"
    useSeo(
        'Profile',
        'Manage your profile information'
    )
    definePageMeta({
        middleware:'auth'
    })

    const {user}=useAuth()

    const name= ref(user?.value?.name??'')
    const email= ref(user?.value?.email??'')
    const success = ref(false)
    const loading = ref(false)

    const updateProfile=async()=>{
        if(!user.value) return
        try {
            loading.value=true
            await new Promise((res)=>setTimeout(res,1000))
            user.value.name=name.value
            user.value.email=email.value
            success.value=true
            setTimeout(()=>(success.value=false),2000)
        } catch (error) {
            console.log(error)
        } finally{
            loading.value=false
        }

    }

</script>

<template>
    <div class="w-[90%] m-auto pt-5">
        <form @submit.prevent="updateProfile" class="max-w-xl p-6 bg-white shadow-md rounded-lg">
            <h1 class="text-2xl font-semibold mb-6">User Profile</h1>
            <div class="absolute top-[30px] right-[30px] bg-green-600 text-white px-4 py-2 rounded-lg text-lg font-semibold" v-if="success">Profile Updated Successfully!</div>
            <label for="name">Username</label>
            <input type="text" v-model="name" class="w-full mb-4 px-4 py-2 focus:outline-none focus:ring border rounded-lg" placeholder="Username">
            <label for="email">Email</label>
            <input type="email" v-model="email" class="w-full mb-4 px-4 py-2 focus:outline-none focus:ring border rounded-lg" placeholder="Email">
            <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed
 text-white px-4 py-2 rounded-lg text-xl" :disabled="loading">{{loading?"Updating...":"Update Profile"}}</button>
        </form>
    </div>
    
</template>