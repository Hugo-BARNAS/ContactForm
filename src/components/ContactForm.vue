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
      /><br><br>
      <button type="submit">Créer</button>
    </form>
  </div>
</template>

<script>
import db from "../shared/db";
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
  // eslint-disable-next-line
  methods: {
    createContact() {
      db.create(this.contact)
        .then((data) => {
          console.log(data);
          //Méthode resetForm dans la méthode createContact juste après avoir insérer les données dans la bdd
          this.resetForm();
        })
        .catch((error) => {
          console.error(error);
        });
    },
    //Effacer les champs après l'envoi des données dans la bdd, on crée une méthode
    resetForm() {
      (this.contact.firstName = ""),
        (this.contact.lastName = ""),
        (this.contact.email = ""),
        (this.contact.phone = "");
    },
  },
};
</script>

<style scoped>
h2 {
  color: green;
}
</style>
