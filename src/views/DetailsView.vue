
<template>
  <div class="details">
    <ContactDetailsComponent v-if="contact" :contact="contact" />
    <p v-else>Contact not found.</p>
  </div>
</template>

<script>
import ContactDetailsComponent from '../components/ContactDetailsComponent.vue';

export default {
  components: {
    ContactDetailsComponent,
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
.details {
  padding: 20px;
  background-color: #f9f7f3; 
  height: 100vh; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
