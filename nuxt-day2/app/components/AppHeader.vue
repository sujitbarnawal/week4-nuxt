<template>
    <nav class="navbar">
        <div class="links">
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/profile">My Profile</NuxtLink>
        </div>
    </nav>
</template>

<style scoped>
    .navbar{
        height: 60px;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        position: sticky;
        top: 0;
    }

    .links{
        display: flex;
        gap: 10px;
        font-size: 18px;
    }

    :deep(a){
        text-decoration: none;
        color: blue;
    }

    .router-link-active{
        text-decoration: underline;
    }

</style>

