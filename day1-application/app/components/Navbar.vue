<script setup>
const isMobileMenuVisible = ref(false)

</script>

<template>
    <header>
        <div class="navbar">
            <p @click="navigateTo('/')" class="logo">Sujit<span class="logo-span">Barnawal</span>
            </p>
            <div class="links">
                <NuxtLink to="/">Home</NuxtLink>
                <NuxtLink to="/about">About</NuxtLink>
                <NuxtLink to="/projects">Projects</NuxtLink>
                <NuxtLink to="/contact">Contact</NuxtLink>
            </div>

            <p @click="isMobileMenuVisible=true" class="menu">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                    fill="crimson">
                    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                </svg>
            </p>
        </div>
        <div v-if="isMobileMenuVisible" class="mobile-links">
            <p @click="isMobileMenuVisible=false" class="close-menu">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                    fill="crimson">
                    <path
                        d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>

            </p>
            <NuxtLink @click="isMobileMenuVisible=false" to="/">Home</NuxtLink>
            <NuxtLink @click="isMobileMenuVisible=false" to="/about">About</NuxtLink>
            <NuxtLink @click="isMobileMenuVisible=false" to="/projects">Projects</NuxtLink>
            <NuxtLink @click="isMobileMenuVisible=false" to="/contact">Contact</NuxtLink>

        </div>
        
    </header>
    

</template>

<style scoped>
header {
    background-color: white;
    height: 70px;
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
}

.navbar {
    width: 90%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    font-size: 20px;
    font-weight: bolder;
    cursor: pointer;
}

.logo-span {
    color: crimson;
}

.links {
    display: none;
}

.menu {
    display: flex;
}

.mobile-links{
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    width: 50vw;
    background-color: white;
    display: flex;
    flex-direction: column;
    padding-left: 5%;
    padding: 20px;
    font-size: 20px;
    gap: 20px;
}

.close-menu{
    text-align: right;
}

@media (min-width:450px) {
    .menu {
        display: none;
    }

    .links {
        display: flex;
        gap: 10px;
    }
}

:deep(a) {
    color: crimson;
    text-decoration: none;
}

.router-link-active {
    text-decoration: underline;
}
</style>