<script setup lang="ts">
    import {useUser} from "../composables/useUser"
    const {user}=useUser()
    user.value={
        name:"Sujit Barnawal",
        email:"sujit@gmail.com"
    }

</script>
<template>
    <div>
       <p>Name: {{ user?.name }}</p>
       <p>Email: {{ user?.email }}</p>
    </div>


    
</template>