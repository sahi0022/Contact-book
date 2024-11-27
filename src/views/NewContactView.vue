
<template>
  <div class="addcontact">
    <NewContactComponent @add-contact="addContact" />
  </div>
</template>

<script>
import NewContactComponent from '../components/NewContactComponent.vue';

export default {
  components: {
    NewContactComponent,
  },
  methods: {
    addContact(contact) {
      const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
      contacts.push(contact);
      localStorage.setItem('contacts', JSON.stringify(contacts));
     
      this.$router.push({ name: 'details', params: { id: contact.id } });
    },
  },
};
</script>
<style>
.addcontact {
  padding: 20px;
  background-color: #f9f7f3; 
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>