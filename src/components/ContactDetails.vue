<template>
  <div>
    <div v-if="!isInEditMode">
      <b-card title="Fiche d'identité">
        <b-card-text>
          <router-link :to="{ name: 'contact', params: { id: contact.id } }">
            {{ contact.data().firstName }} {{ contact.data().lastName }}
          </router-link>
        </b-card-text>
        <b-card-text>Téléphone : {{ contact.data().phone }}</b-card-text>
        <b-card-text>Email : {{ contact.data().email }}</b-card-text>
        <div>
          <b-button variant="danger" @click="deleteContact">Supprimer</b-button>
          <b-button variant="warning" @click="editContact">Modifier</b-button>
        </div>
      </b-card>
    </div>
    <div v-if="isInEditMode">
      <b-card title="Fiche d'identité">
        <b-form-input
          class="bform"
          type="text"
          v-model="contactCopy.firstName"
          name=""
          id=""
        />
        <b-form-input
          class="bform"
          type="text"
          v-model="contactCopy.lastName"
        />
        <b-form-input class="bform" type="text" v-model="contactCopy.email" />
        <b-form-input class="bform" type="text" v-model="contactCopy.phone" />
        <b-card-text>
          Mme {{ contact.data().lastName }} {{ contact.data().firstName }}
        </b-card-text>
        <b-card-text>Téléphone : {{ contact.data().phone }}</b-card-text>
        <b-card-text>Email : {{ contact.data().email }}</b-card-text>
        <div>
          <b-button class="button" variant="success" @click="saveEdit"
            >Enregistrer</b-button
          >
          <b-button variant="warning" @click="cancelEdit">Annuler</b-button>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contactCopy: {},
      isInEditMode: false,
    };
  },
  props: ["contact"],
  methods: {
    cancelEdit() {
      this.isInEditMode = false;
    },
    editContact() {
      //destructuring
      const { firstName, lastName, phone, email } = this.contact.data();
      this.contactCopy = {
        id: this.contact.id,
        firstName,
        lastName,
        phone,
        email,
      };
      console.log(this.contactCopy);
      this.isInEditMode = true;
    },
    deleteContact() {
      this.$emit("deleteContact", this.contactCopy);
    },
    saveEdit() {
      this.$emit("saveEdit", this.contactCopy);
      this.isInEditMode = false;
    },
  },
};
</script>

<style scoped>
button,
.bform {
  margin: 0.5vh;
}
</style>
