<template>
    <footer class="footer">
        <p>
            © {{new Date().getFullYear()}} Sujit<span>Barnawal</span> 
        </p>

    </footer>
</template>

<style scoped>
    .footer{
        position: fixed;
        bottom: 0;
        height: 60px;
        background-color: white;
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: center;
    }
    p{
        font-size: 20px;
        font-weight: bolder;
    }

    span{
        color: crimson;
    }

</style>