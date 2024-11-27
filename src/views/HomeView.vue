<template>
  <div class="home">
    <h1>Contact List</h1>
  
    <HomeComponent :contacts="contacts" @contact-deleted="updateContacts" />
  </div>
</template>

<script>
import HomeComponent from '../components/HomeComponent.vue';

export default {
  components: {
    HomeComponent,
  },
  data() {
    return {
 
      contacts: JSON.parse(localStorage.getItem("contacts")) || [],
    };
  },
  methods: {
    updateContacts(updatedContacts) {
      this.contacts = updatedContacts;
    },
  },
};
</script>

<style scoped>
.home {
  padding: 20px;
  background-color: #f9f7f3; 
  height: 100vh; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  background: linear-gradient(45deg, #007bff, #00bcd4);
  -webkit-background-clip: text;
  color: transparent;
}

h1::after {
  content: '';
  display: block;
  width: 50px;
  height: 3px;
  background-color: #007bff;
  margin: 10px auto 0;
}

</style>
