<template>
  <div class="home-component container bg-light shadow-sm rounded">

    <div class="search-container">
      <input 
        type="text" 
        v-model="searchTerm" 
        class="form-control search-input shadow-sm" 
        placeholder="Search contacts"
      />
    </div>

<div class="add-contact-button">
      <router-link to="/new-contact" class="btn btn-custom px-4 py-2">
        Add New Contact
      </router-link>
    </div>

    <ul class="list-group" v-if="contacts.length > 0 && filteredContacts.length > 0">
      <li 
        v-for="contact in filteredContacts" 
        :key="contact.id" 
        class="list-group-item d-flex justify-content-between align-items-center shadow-sm mb-3 rounded"
      >
        <div>
          <router-link :to="{ name: 'details', params: { id: contact.id } }" class="contact-link">
            {{ contact.firstName }} {{ contact.lastName }}
          </router-link>
        </div>

        <div>
          <router-link :to="{ name: 'edit', params: { id: contact.id } }">
            <button class="btn btn-edit btn-sm me-2">Edit</button>
          </router-link>

          <button 
            class="btn btn-delete btn-sm" 
            @click.prevent="confirmDelete(contact.id)"
          >
            Delete
          </button>
        </div>
      </li>
    </ul>

    <div v-else-if="contacts.length > 0 && filteredContacts.length === 0" class="no-contacts-message text-center">
      <p>No contact matches "{{ searchTerm }}". Please try again.</p>
    </div>

    <div v-else class="no-contacts-message text-center">
      <p>No contacts available. Please add a new contact.</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contacts: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      searchTerm: "",
    };
  },
  computed: {
    filteredContacts() {
      return this.contacts
        .filter(contact =>
          (contact.firstName + " " + contact.lastName)
            .toLowerCase()
            .includes(this.searchTerm.toLowerCase())
        )
        .sort((a, b) => a.lastName.localeCompare(b.lastName));
    },
  },
  methods: {
    confirmDelete(contactId) {
      const confirmDelete = window.confirm('Are you sure you want to delete this contact?');
      if (confirmDelete) {
        this.deleteContact(contactId);
      }
    },
    deleteContact(contactId) {
      const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
      const updatedContacts = contacts.filter(contact => contact.id !== contactId);
      localStorage.setItem('contacts', JSON.stringify(updatedContacts));
      this.$emit('contact-deleted', updatedContacts);
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
.home-component {
  padding: 20px;
  background-color: #f1eded !important; 
  border-radius: 8px;
  position: relative; 
  margin-top: 0; 
}
.no-contacts-message {
  padding: 20px;
  color: #888;
  font-size: 1.2rem;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-top: 20px;
}

.search-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.search-input {
  border-radius: 50px;
  padding-left: 20px;
  border: 1px solid #ddd;
  width: 300px;
}

.search-input:focus {
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

.add-contact-button {
  position: absolute;
  top: 20px;
  right: 20px;
}
.add-contact-button {
  background: linear-gradient(145deg, #eff1ed, #dcdcdc); 
  color: rgb(0, 0, 0);
  font-weight: bold;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background 0.3s ease, transform 0.2s ease;
}

.add-contact-button:hover {
  background: linear-gradient(145deg, #ffffff, #e0e0e0); 
  color: rgb(0, 0, 0);
  transform: scale(1.05);
}

.add-contact-button i {
  font-size: 1.25rem;
}

.list-group-item {
  background: linear-gradient(145deg, #f9f7f3, #dcdcdc);
  border: 1px solid #ddd;
  padding: 15px;
  font-size: 1.1rem;
  font-weight: 500;
}

.list-group-item:hover {
  background: #f1f1f1;
}

.list-group-item strong {
  color: #333;
}

.btn-edit,
.btn-delete {
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.btn-edit {
  background-color: #ffc107;
  color: white;
  border-radius: 5px;
  padding: 5px 10px;
  transition: all 0.3s ease;
}

.btn-edit:hover {
  background-color: #e0a800;
}

.btn-edit:active {
  background-color: #d39e00;
}

.btn-delete {
  background-color: #dc3545;
  color: white;
  border-radius: 5px;
  padding: 5px 10px;
  transition: all 0.3s ease;
}

.btn-delete:hover {
  background-color: #c82333;
}

.btn-delete:active {
  background-color: #bd2130;
}

.contact-link {
  text-decoration: none;
  color: inherit;
}

.no-contacts-message {
  padding: 20px;
  color: #888;
  font-size: 1.2rem;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-top: 20px;
}

@media (max-width: 768px) {
  .search-input {
    padding-left: 15px;
  }

  .list-group-item {
    font-size: 1rem;
  }
}
</style>
