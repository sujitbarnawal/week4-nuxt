<script setup lang="ts">
import type { Post } from '~/types/PostType';
    const route=useRoute()
    const {data:post}=await useFetch<Post>(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
</script>

<template>
    <div>
        <p>Post Id: {{ post?.id }}</p>
        <p>Post Title: {{ post?.title }}</p>
        <p>Post Body: {{ post?.body }}</p>
    </div>
    
</template>