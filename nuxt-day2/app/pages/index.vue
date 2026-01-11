<script setup lang="ts">
import type { Post } from '~/types/PostType';

    // import { useCounter } from '../composables/useCounter';
    // const {count,increment}=useCounter()
    const {data: posts}=await useFetch<Post[]>("https://jsonplaceholder.typicode.com/posts")
</script>

<template>
    <!-- <h1>Counter</h1>
    <p>{{ count }}</p>
    <button @click="increment">+</button> -->
    <div class="blog-list">
        <h1>Blog</h1>
        <NuxtLink class="block" v-for="post in posts" :key="post.id" :to="`/posts/${post.id}`">
            {{ post.title }}
        </NuxtLink>

    </div>

</template>

<style scoped>
    .block{
        display: block;
    }
</style>