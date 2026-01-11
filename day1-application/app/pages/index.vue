<template>
    <section id="home">
        <div class="description">
            <h1>Hi! I'm Sujit Barnawal</h1>
            <p>A passionate web developer specializing in the MERN stack with a strong focus on frontend development and
                creating beautiful, user-friendly websites.
            </p>

            <button @click="navigateTo('/projects')">View My Work</button>
            <button><a target="_blank" href="https://drive.google.com/file/d/12tyoPHYZfULl4HIoX8IABfn650ew9wGR/view">Download CV</a></button>

        </div>
        <div class="image">
            <img class="profile-img" src="../assets/images/sujit.jpg" alt="profile_img">

        </div>

    </section>
</template>

<style scoped>
#home {
    width: 90%;
    margin: auto;
    padding: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 40px;
    margin-top: 10%;
}

.description {
    width: 60%;
}

.image {
    border-radius: 50%;
    border: 5px solid grey;
    width: 300px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
}


.profile-img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
}


h1 {
    font-size: 50px;
    color: crimson;
}

p {
    font-size: 25px;
    margin-top: 10px;
    margin-bottom: 20px;
    line-height: 1.5;
}


button {
    padding: 16px 24px;
    font-size: 18px;
    border-radius: 10px;
    margin-right: 20px;
    margin-top: 10px;
    cursor: pointer;
}

a {
    text-decoration: none;
    color: black;
}


@media (max-width: 890px) {
    #home {
        flex-direction: column-reverse;
        text-align: center;
        margin-top: 5%;
    }

    .description {
        width: 100%;
    }

    h1 {
        font-size: 40px;
    }

    p {
        font-size: 20px;
    }

    button {
        margin-right: 10px;
    }
}


@media (max-width: 480px) {
    #home {
        padding: 20px;
    }

    .image {
        width: 220px;
        height: 220px;
    }

    h1 {
        font-size: 32px;
    }

    p {
        font-size: 18px;
    }

    button {
        width: 100%;
        font-size: 16px;
        padding: 14px;
    }
}

</style>