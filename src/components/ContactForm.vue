<template>
  <div>
    <h2>Contact Form</h2>
    <!-- pour écouter le submit dans le formulaire-->
    <form @submit.prevent="createContact">
      <input
        type="text"
        placeholder="prénom"
        v-model="contact.firstName"
      /><br />
      <input type="text" placeholder="nom" v-model="contact.lastName" /><br />
      <input type="text" placeholder="email" v-model="contact.email" /><br />
      <input
        type="text"
        placeholder="téléphone"
        v-model="contact.phone"
      /><br />
      <button type="submit">Créer</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contact: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      },
    };
  },
  methods: {
      createContact(){
          console.log(this.contact)
      }
  },
};
</script>

<style lang="scss" scoped></style>
