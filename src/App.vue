<template>
  <div id="app">
    <ContactForm />
    <!-- On écoute l'évent deleteContact et quand cet événement se produit on applique une méthode appelé deleteContact-->
    <ContactList @deleteContact="deleteContact" :contacts="contacts" />
  </div>
</template>

<script>
import ContactForm from "../src/components/ContactForm";
import ContactList from "../src/components/ContacList";
import db from "../src/shared/db";

export default {
  data() {
    return {
      contacts: [],
    };
  },
  name: "App",
  components: {
    ContactForm,
    ContactList,
  },
  created() {
    this.getAllContacts();
  },
  methods: {
    getAllContacts() {
      db.read()
        .then((user) => {
          console.log(user);
          this.contacts = user.docs;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    deleteContact(contact) {
      db.delete(contact.id)
        .then(() => {
          //on récupère tous les contacts sauf celui qu'on a supprimé
          this.getAllContacts();
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
