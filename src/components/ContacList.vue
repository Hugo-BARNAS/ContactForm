<template>
  <div>
    <contactDetails :contact="contact" v-for='contact in contacts' :key="contact.data().id" @saveEdit="saveEdit" @deleteContact="deleteContact"></contactDetails>
  </div>
</template>

<script>
import contactDetails from './ContactDetails'
export default {
  props: ["contacts"],
  components:{
    contactDetails
  },
  methods: {
    deleteContact(contact){
      //il va emmetre l'événement deleteContact et l'élément contact qu'on veut supprimer
      this.$emit('deleteContact', contact)
    },
    saveEdit(editedContact){
      this.$emit('saveEdit', editedContact)
    },
  }
};
</script>

<style scoped>
li {
  list-style: none;
}

div{
  margin:5vh 20vw 5vh 20vw;
}
</style>
