<script setup>
const form = reactive({
    name: "",
    email: "",
    subject: "",
    message: ""
})

const loading = ref(false)
const showToast = ref(false)

const submitForm = async () => {

    loading.value = true
    await new Promise((resolve) => setTimeout(resolve, 1000))

    loading.value = false
    showToast.value = true

    form.name = ""
    form.email = ""
    form.subject = ""
    form.message = ""


    setTimeout(() => {
        showToast.value = false
    }, 3000)
}

</script>

<template>
    <form @submit.prevent="submitForm" class="contact-form">
        <h2>Send Me a Message</h2>
        <div class="input-group">
            <label for="name">Your Name</label>
            <input required placeholder="sujit" type="text" v-model="form.name">
        </div>
        <div class="input-group">
            <label for="email">Your Email</label>
            <input required placeholder="sujit@gmail.com" type="email" v-model="form.email">
        </div>


        <div class="input-group">
            <label for="subject">Subject</label>
            <input required placeholder="Project Inquiry" type="text" v-model="form.subject">
        </div>
        <div class="input-group">
            <label for="message">Subject</label>
            <textarea required placeholder="Your message" v-model="form.message" />
        </div>

        <button type="submit" :disabled="loading">
            {{ loading ? "Sending..." : "Send Message" }}
        </button>


        <div v-if="showToast" class="toast">
            ✅ Form submitted successfully
        </div>


    </form>
</template>

<style scoped>
.contact-form {
    background-color: white;
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
}

label {
    display: block;
    font-weight: 450;
    margin-bottom: 10px;
}

h2 {
    margin-bottom: 10px;
    color: crimson;
}


input,
textarea {
    padding: 10px;
    outline: none;
    border-radius: 10px;
    border: 1px solid rgb(218, 216, 216);
    font-size: 18px;
    width: 100%;
    margin-bottom: 20px;
}

.flex-input-groups {
    display: flex;
    gap: 20px;
    margin-top: 20px;
}

button {
    width: 200px;
    padding: 15px;
    border-radius: 10px;
    background-color: crimson;
    color: white;
    font-size: 18px;
    border: none;
    outline: none;
    margin-top: 15px;
    cursor: pointer;
}
.toast {
  position: fixed;
  top: 30px;
  right: 30px;
  background-color: #16a34a;
  color: white;
  padding: 14px 20px;
  border-radius: 5px;
  font-size: 16px;
}


button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

</style>