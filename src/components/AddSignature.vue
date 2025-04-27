<template>
  <div class="container">


    <hr class="divider" />

    <div class="document-placeholder">
      <!-- Empty div to reserve space for the document -->
    </div>

    <div class="closing">
      <div class="signature">
        <div class="signature-input">
          <label>Name: </label>
          <input type="text" v-model="signatureName" placeholder="Enter your name" />
        </div>
        <button class="sign-button" @click="addSignature">Add Signature</button>
        <div class="date-input">
          <label>Date: </label>
          <input type="text" v-model="signatureDate" placeholder="Enter date" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddSignature',
  data() {
    return {
      companyName: 'Company Name',
      companyAddress: '610 Fountain Ave, Burlington, NJ 08016',
      todayDate: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      recipientName: 'Burlington Township Student',
      recipientAddress: 'Street Address, City, State Zip',
      signatureName: '',
      signatureDate: ''
    };
  },
  methods: {
    addSignature() {
      if (this.signatureName) {
        alert('Signature added: ' + this.signatureName);
        this.$router.push('/signature-model'); // Navigate to SignatureModel after signing
      } else {
        alert('Please enter your name before adding a signature.');
      }
    }
  }
};
</script>

<style scoped>
.container {
  width: 800px;
  margin: 0 auto;
  padding: 40px;
  font-family: Arial, sans-serif;
  border: 2px dashed #b71c1c;
  line-height: 1.6;
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.letterhead,
.address,
.closing {
  margin-bottom: 30px;
}

.letterhead div,
.address div {
  margin-bottom: 5px;
  text-align: center;
}

.divider {
  border: none;
  border-top: 1px solid #000;
  margin: 0 auto 40px;
  width: 50%;
}

.document-placeholder {
  height: 600px; /* Reserves space to indicate a document's presence */
  background-color: #f5f5f5; /* Light background to differentiate */
  border: 1px solid #e0e0e0; /* Subtle border for visibility */
  margin-bottom: 20px;
}

.signature {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.signature-input,
.date-input {
  margin: 10px 0;
}

.signature-input label,
.date-input label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.signature-input input,
.date-input input {
  width: 200px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f0f4c3;
}

.sign-button {
  margin-left: 10px;
  padding: 8px 16px;
  background-color: #e0f7e0;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
}

.sign-button:hover {
  background-color: #d0e7d0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    width: 100%;
    padding: 20px;
    margin: 10px;
  }

  .document-placeholder {
    height: 400px;
  }

  .signature-input input,
  .date-input input {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 15px;
    margin: 5px;
  }

  .document-placeholder {
    height: 300px;
  }
}

@media (min-width: 1200px) {
  .container {
    width: 850px;
    padding: 50px;
  }

  .document-placeholder {
    height: 650px;
  }
}
</style>