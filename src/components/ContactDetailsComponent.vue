<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      
      <div class="col-md-8">
        <div class="card-custom shadow-lg rounded-3 border-0">
          <div class="card-body">
            <h1 class="card-title text-center mb-4">Contact Details</h1>

            <div v-if="contact" class="mb-4">
            
              <div class="detail-item">
                <strong>First Name:</strong> <span>{{ contact.firstName }}</span>
              </div>
              <div class="detail-item">
                <strong>Last Name:</strong> <span>{{ contact.lastName }}</span>
              </div>
              <div class="detail-item">
                <strong>Phone:</strong> <span>{{ contact.phone }}</span>
              </div>
              <div class="detail-item">
                <strong>Email:</strong> <span>{{ contact.email }}</span>
              </div>
              <div class="detail-item">
                <strong>Address:</strong> <span>{{ contact.address }}</span>
              </div>
              <div class="detail-item">
                <strong>Contact Type:</strong> <span>{{ contact.type }}</span>
              </div>

              <div class="button-group">
                <router-link :to="{ name: 'edit', params: { id: contact.id } }" class="w-48">
                  <button class="btn edit-btn btn-lg w-100">Edit Contact</button>
                </router-link>
                <router-link to="/" class="w-48">
                  <button class="btn back-btn btn-lg w-100">
                    <i class="bi bi-arrow-left-circle me-2"></i> Back to Home
                  </button>
                </router-link>
              </div>
            </div>

            <div v-else>
              <p class="text-center text-muted">Contact not found.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      contact: null,
    };
  },
  created() {
    const contactId = this.$route.params.id;
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    this.contact = contacts.find(contact => contact.id == contactId); 
  },
};
</script>

<style scoped>
.card-custom {
  background-color: #f1eded !important;
  border-radius: 8px;
  position: relative;
}
.edit-btn {
  background: linear-gradient(145deg, #f1eded, #dcdcdc); 
  color: rgb(0, 0, 0);
  font-weight: bold;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background 0.3s ease, transform 0.2s ease;
}

.edit-btn:hover {
  background: linear-gradient(145deg, #ffffff, #e0e0e0); 
  color: rgb(0, 0, 0);
  transform: scale(1.05);
}

.edit-btn i {
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

  

.card-body {
  padding: 40px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.card-title {
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: 30px;
}

.detail-item {
  font-size: 1.1rem;
  margin-bottom: 15px;
}

.detail-item strong {
  font-weight: 600;
  color: #333;
}

.detail-item span {
  font-weight: 400;
  color: #555;
}

button {
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 8px;
  padding: 14px;
}

.btn-primary {
  background-color: #007bff;
  color: white;
  font-weight: bold;
  padding: 12px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: #0056b3;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.btn-warning {
  background-color: #ffc107;
  color: black;
  font-weight: bold;
  padding: 12px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.btn-warning:hover {
  background-color: #e0a800;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.btn-primary, .btn-warning {
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.button-group {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 30px;
}

.button-group .w-48 {
  width: 48%;
}

@media (max-width: 768px) {
  .card-body {
    padding: 25px;
  }

  .card-title {
    font-size: 1.5rem;
  }

  .btn-lg {
    padding: 10px;
  }
}

@media (max-width: 576px) {
  .card-body {
    padding: 20px;
  }
}
</style>
