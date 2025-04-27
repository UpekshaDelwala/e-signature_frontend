<template>
  <div class="business-letter">
    <!-- Header -->

    <hr class="divider" />

    <!-- Document Placeholder -->
    <div class="document-placeholder">
      <!-- Empty div to reserve space for the document -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'BusinessLetter',
  data() {
    return {
      currentDate: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    };
  },
  methods: {
    navigateToAddSignature() {
      this.$router.push('/add-signature');
    }
  }
};
</script>

<style scoped>
.business-letter {
  width: 800px;
  margin: 0 auto;
  padding: 40px;
  font-family: Arial, sans-serif;
  border: 2px dashed #b71c1c;
  line-height: 1.6;
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.letter-title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
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
  .business-letter {
    width: 100%;
    padding: 20px;
    margin: 10px;
  }

  .letter-title {
    font-size: 20px;
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
  .business-letter {
    padding: 15px;
    margin: 5px;
  }

  .letter-title {
    font-size: 18px;
  }

  .document-placeholder {
    height: 300px;
  }
}

@media (min-width: 1200px) {
  .business-letter {
    width: 850px;
    padding: 50px;
  }

  .letter-title {
    font-size: 26px;
  }

  .document-placeholder {
    height: 650px;
  }
}
</style>