<script setup lang="ts">
import ContactDetails from '~/components/ContactDetails.vue';
import ContactForm from '~/components/ContactForm.vue';

</script>

<template>
    <section id="contact">
        <ContactDetails/>
        <ContactForm/>
        
    </section>
</template>


<style scoped>
#contact {
    width: 90%;
    margin: auto;
    padding: 40px;
    display: flex;
    gap: 20px;
}

@media (max-width:890px) {
    #contact {
        flex-direction: column;
    }
    
}

@media( max-width:450px){
    #contact{
        width: 100%;
    }
}
</style>