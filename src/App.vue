<template>
  <div id="app">
    <ContactForm />
    <!-- On écoute l'évent deleteContact et quand cet événement se produit on applique une méthode appelé deleteContact-->
    <ContactList
      @saveEdit="saveEdit"
      @deleteContact="deleteContact"
      :contacts="contacts"
    />
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
    saveEdit(editedContact){
      db.update(editedContact)
        .then(() => {
          this.getAllContacts();
        })
        .catch((error) => {
          console.error(error)
        })
        console.log(this.saveEdit)
      }
    }
  }
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
</style>
