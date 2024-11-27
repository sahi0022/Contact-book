<template>
  <div class="background">
    <EditContactComponent v-if="contact" :contact="contact" />
    <p v-else>Contact not found.</p>
  </div>
</template>

<script>
import EditContactComponent from '../components/EditContactComponent.vue';

export default {
  components: {
    EditContactComponent,
  },
  data() {
    return {
      contact: null,
    };
  },
  created() {
    const contactId = this.$route.params.id;
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    this.contact = contacts.find((contact) => contact.id == contactId);
  },
};
</script>

<style scoped>

.background{
  background-color: #f9f7f3; 
  padding: 20px;
  background-color: #f9f7f3; 
  height: 100vh; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
