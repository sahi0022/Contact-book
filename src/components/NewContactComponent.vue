<template>
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card shadow-lg rounded custom-card">
            <div class="card-body">
              <h1 class="text-center mb-4 custom-heading">Add New Contact</h1>
  
              <form @submit.prevent="submitContact">
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="firstName" class="form-label">First Name</label>
                    <input type="text" id="firstName" v-model="contact.firstName" class="form-control" required />
                  </div>
  
                  <div class="col-md-6 mb-3">
                    <label for="lastName" class="form-label">Last Name</label>
                    <input type="text" id="lastName" v-model="contact.lastName" class="form-control" required />
                  </div>
                </div>
  
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="phone" class="form-label">Phone</label>
                    <input type="text" id="phone" v-model="contact.phone" class="form-control" required />
                  </div>
  
                  <div class="col-md-6 mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" id="email" v-model="contact.email" class="form-control" required />
                  </div>
                </div>
  
                <div class="form-group mb-3">
                  <label for="address" class="form-label">Address</label>
                  <textarea id="address" v-model="contact.address" class="form-control" rows="3"></textarea>
                </div>
  
                <div class="form-group mb-3">
                  <label for="type" class="form-label">Contact Type</label>
                  <select id="type" v-model="contact.type" class="form-control">
                    <option value="Family">Family</option>
                    <option value="Friend">Friend</option>
                    <option value="Business">Business</option>
                  </select>
                </div>
  
                <div class="row d-flex align-items-center justify-content-between">
                  <div class="col-md-5 mb-3">
                    <button type="submit" class="btn add-btn btn-lg w-100">Add Contact</button>
                  </div>
                  <div class="col-md-5 mt-1">
                    <router-link to="/" class="btn back-btn btn-lg w-100">
                      <i class="bi bi-arrow-left-circle me-2"></i> Back to Home
                    </router-link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        contact: {
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          address: '',
          type: 'Family', 
        },
      };
    },
    methods: {
      submitContact() {
        this.$emit('add-contact', { ...this.contact, id: Date.now() });
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
  }
  
  .custom-card {
    padding: 20px;
    background-color: #f1eded !important;
    border-radius: 8px;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  

.add-btn {
  background: linear-gradient(145deg, #f1eded, #dcdcdc); 
  color: rgb(0, 0, 0);
  font-weight: bold;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background 0.3s ease, transform 0.2s ease;
}

.add-btn:hover {
  background: linear-gradient(145deg, #ffffff, #e0e0e0); 
  color: rgb(0, 0, 0);
  transform: scale(1.05);
}

.add-btn i {
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
  
  .form-label {
    font-weight: bold;
    font-size: 1.1rem;
    color: #333;
  }
  
  button {
    margin-top: 20px;
  }
  
  .btn-primary {
    background-color: #007bff;
    color: white;
    font-weight: bold;
    border-radius: 30px;
    transition: background-color 0.3s ease, transform 0.2s ease;
  }
  
  .btn-primary:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }
  
  .btn-success {
    background-color: #28a745;
    color: white;
    font-weight: bold;
    border-radius: 30px;
    transition: background-color 0.3s ease, transform 0.2s ease;
  }
  
  .btn-success:hover {
    background-color: #218838;
    transform: scale(1.05);
  }
  
  @media (max-width: 768px) {
    .card-body {
      padding: 20px;
    }
  
    h1 {
      font-size: 1.75rem;
    }
  
    .col-md-6 {
      width: 100%;
    }
  }
  </style>
  