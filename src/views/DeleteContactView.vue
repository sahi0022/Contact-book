<template>
    <div class="delete-contact-container">
      <h2>Delete Contact</h2>
      <p>Are you sure you want to delete this contact?</p>
      <div>
        
        <button class="btn btn-danger" @click="deleteContact">Yes, Delete</button>
     
        <router-link to="/" class="btn btn-secondary">Cancel</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['id'],
    methods: {
        deleteContact() {
  try {

    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];

    const updatedContacts = contacts.filter(contact => contact.id !== this.id);

    localStorage.setItem('contacts', JSON.stringify(updatedContacts));

    this.$emit('contact-deleted', updatedContacts);

    console.log('Deleted contact with ID:', this.id);

    this.$router.push('/');
  } catch (error) {
    console.error('Error deleting contact:', error);
  }
}

    },
  };
  </script>
  
  <style scoped>
  .delete-contact-container {
    text-align: center;
    padding: 20px;
  }
  
  .delete-contact-container h2 {
    color: #dc3545; 
  }
  
  .btn {
    margin: 10px;
  }
  </style>
  