<script setup lang="ts">
import { useAuth } from "../composables/useAuth"
const error = ref("")
const loading = ref(false)

const name = ref("")
const email = ref("")

const { login } = useAuth()

const submit = async () => {
    error.value = ""
    if (!name.value || !email.value) {
        error.value = "All Fields are required"
        return
    }
    try {
        loading.value = true
        await new Promise((res) => setTimeout(res, 1000))
        await login({
            name: name.value,
            email: email.value
        })


    } catch (e) {
        error.value = "Login Failed"
    } finally {
        loading.value = false
    }

}
</script>

<template>
    <div class="min-h-screen flex items-center justify-center">
        <form @submit.prevent="submit" class="w-full  max-w-md bg-white rounded-xl shadow-lg p-8">
            <h1 class="text-2xl font-semibold text-center mb-6">Login</h1>
            <div class="text-red-500 text-sm mb-4" v-if="error">{{ error }}</div>

            <input class="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring" type="text"
                placeholder="Enter Your Username" v-model="name">

            <input type="email" placeholder="Enter Your Email" v-model="email"
                class="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring">

            <button type="submit" class="w-full bg-blue-600 hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed
 text-white px-4 py-2 rounded-lg text-xl" :disabled="loading">
                {{ loading ? "Logging in..." : "Login" }}
            </button>

        </form>

    </div>
</template>