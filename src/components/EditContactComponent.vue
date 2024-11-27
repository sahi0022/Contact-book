<template>
  <div v-if="editableContact" class="edit-contact container my-5 p-4 bg-light shadow-sm rounded">
   
    <h1 class="text-center mb-4 custom-heading">Edit Contact</h1>

    <form @submit.prevent="updateContact" class="form-container">
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="first-name" class="form-label">First Name:</label>
          <input id="first-name" v-model="editableContact.firstName" class="form-control" type="text" placeholder="Enter first name" required />
        </div>
        <div class="col-md-6 mb-3">
          <label for="last-name" class="form-label">Last Name:</label>
          <input id="last-name" v-model="editableContact.lastName" class="form-control" type="text" placeholder="Enter last name" required />
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="phone" class="form-label">Phone:</label>
          <input id="phone" v-model="editableContact.phone" class="form-control" type="text" placeholder="Enter phone number" required />
        </div>
        <div class="col-md-6 mb-3">
          <label for="email" class="form-label">Email:</label>
          <input id="email" v-model="editableContact.email" class="form-control" type="email" placeholder="Enter email address" required />
        </div>
      </div>

      <div class="form-group mb-3">
        <label for="address" class="form-label">Address:</label>
        <textarea id="address" v-model="editableContact.address" class="form-control" rows="3" placeholder="Enter address"></textarea>
      </div>

      <div class="form-group mb-3">
        <label for="type" class="form-label">Contact Type:</label>
        <select id="type" v-model="editableContact.type" class="form-control">
          <option value="Family">Family</option>
          <option value="Friend">Friend</option>
          <option value="Business">Business</option>
        </select>
      </div>

      <div class="d-flex justify-content-between">
        <div class="w-50">
          <button type="submit" class="btn update-btn btn-lg w-100">Update Contact</button>
        </div>
        <div class="w-50 text-end">
          <router-link to="/" class="back-btn btn mt-3 d-inline-flex align-items-center px-4 py-2">
            <i class="bi bi-arrow-left-circle me-2"></i> Back to Home
          </router-link>
        </div>
      </div>
    </form>
  </div>
  <p v-else class="text-center">Contact not found.</p>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      editableContact: { ...this.contact },
    };
  },
  methods: {
    updateContact() {
      const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
      const index = contacts.findIndex((c) => c.id === this.editableContact.id);
      if (index !== -1) {
        contacts[index] = this.editableContact;
        localStorage.setItem('contacts', JSON.stringify(contacts));
        this.$router.push({ name: 'details', params: { id: this.editableContact.id } });
      }
    },
  },
};
</script>

<style scoped>
.edit-contact {
  max-width: 800px;
  max-height: 600px;
  margin: 0 auto;
  border: 1px solid #ddd;
  border-radius: 12px;
  background-color: #f1eded !important; 
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.custom-heading {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  text-transform: uppercase;
  background: linear-gradient(135deg, #00bcd4, #3f51b5);
  -webkit-background-clip: text;
  background-clip: text;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
  letter-spacing: 2px;
  animation: heading-animation 1.5s ease-in-out infinite;
}

.form-group {
  margin-bottom: 1.5rem;
}

button {
  margin-top: 1rem;
}

h1 {
  font-size: 2rem;
  font-weight: 600;
}

.form-control {
  border-radius: 8px;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.1);
}

.form-control:focus {
  border-color: #007bff;
  box-shadow: 0 0 8px rgba(0, 123, 255, 0.3);
}

.update-btn {
  background: linear-gradient(145deg, #f1eded, #dcdcdc); 
  color: rgb(0, 0, 0);
  font-weight: bold;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background 0.3s ease, transform 0.2s ease;
}

.update-btn:hover {
  background: linear-gradient(145deg, #ffffff, #e0e0e0);
  color: rgb(0, 0, 0);
  transform: scale(1.05);
}

.update-btn i {
  font-size: 1.25rem;
}


.back-btn {
  background-color: #f1eded;
  color: rgb(0, 0, 0);
  font-weight: bold;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.back-btn:hover {
  background-color: #ffffff;
  color:rgb(0, 0, 0);
  transform: scale(1.05);
}

.back-btn i {
  font-size: 1.25rem;
}

@media (max-width: 768px) {
  .edit-contact {
    padding: 20px;
  }

  h1 {
    font-size: 1.5rem;
  }
}
</style>
