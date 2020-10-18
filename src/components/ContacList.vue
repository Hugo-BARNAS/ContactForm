<template>
  <div>
    <ul>
      <li v-for="contact in contacts" :key="contact.contacts">
        {{ contact.data().firstName }} {{ contact.data().lastName }}
        <!-- Appeler une méthode avec un paramètre au click qui est une fonction qui va émettre la méthode deleteContact-->
        <button @click="deleteContact(contact)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["contacts"],
  methods: {
    deleteContact(contact){
      //il va emmetre l'événement deleteContact et l'élément contact qu'on veut supprimer
      this.$emit('deleteContact', contact)
    }
  }
};
</script>

<style scoped>
li {
  list-style: none;
}
</style>
