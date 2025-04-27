<template>
  <div class="e-sign-container">
    <!-- Main Content -->
    <div class="main-content">
      <!-- Document -->
      <div class="document-container">
        <div class="document">
          <hr class="divider" />
          <div class="document-placeholder">
            <!-- Empty div to reserve space for the document -->
          </div>
          <div class="signature-section">
            <div class="signature-box">
              <label>Name:</label>
              <span v-if="signature" :class="signature.style">{{ signature.text }}</span>
              <span v-else class="placeholder">Cameron Williamson</span>
            </div>
            <div class="signature-box">
              <label>Signature:</label>
              <button
                  class="signature-placeholder"
                  :class="{ signed: signature }"
                  @click="showModal = true"
              >
                {{ signature ? signature.text : "Cameron Williamson" }}
              </button>
            </div>
            <div class="date-box">
              <label>Date:</label>
              <input type="text" placeholder="Date" v-model="date" readonly />
              <button class="add-date-btn" @click="showDatePickerModal = true">Add Date</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Date Picker Modal -->
    <DatePicker
        :isOpen="showDatePickerModal"
        @close="showDatePickerModal = false"
        @date-selected="handleDateSelected"
    />
  </div>
</template>

<script>
import DatePicker from './DatePicker.vue';

export default {
  components: {
    DatePicker,
  },
  data() {
    return {
      showModal: false,
      showDatePickerModal: false,
      signature: null,
      date: "",
    };
  },
  created() {
    if (this.$route.query.signature) {
      this.signature = JSON.parse(this.$route.query.signature);
    }
  },
  methods: {
    handleAddSignature(signature) {
      this.signature = signature;
      this.showModal = false;
    },
    handleDateSelected(selectedDate) {
      this.date = selectedDate.toLocaleDateString();
      this.showDatePickerModal = false;
    },
  },
};
</script>

<style scoped>
.e-sign-container {
  display: flex;
  height: 100vh;
  font-family: Arial, sans-serif;
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.document-container {
  flex: 1;
  padding: 20px;
  background: #e5e5e5;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-y: auto;
}

.document {
  width: 800px;
  background: white;
  padding: 40px;
  border: 2px dashed #ff4d4f;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
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

.signature-section {
  margin-top: 20px;
}

.signature-box,
.date-box {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.signature-box label,
.date-box label {
  font-weight: bold;
}

.signature-placeholder {
  background: #e8f0fe;
  border: 1px solid #1a73e8;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}

.signature-placeholder.signed {
  background: #d4edda;
  border-color: #28a745;
}

.placeholder {
  color: #888;
}

.date-box input {
  padding: 5px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
}

.add-date-btn {
  background: #1a73e8;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}

.font-style-1 {
  font-family: "Dancing Script", cursive;
}

.font-style-2 {
  font-family: "Great Vibes", cursive;
}

.font-style-3 {
  font-family: "Satisfy", cursive;
}

/* Responsive Design */
@media (max-width: 768px) {
  .document {
    width: 100%;
    padding: 20px;
  }

  .document-placeholder {
    height: 400px;
  }
}

@media (max-width: 480px) {
  .document {
    padding: 15px;
  }

  .document-placeholder {
    height: 300px;
  }
}

@media (min-width: 1200px) {
  .document {
    width: 850px;
    padding: 50px;
  }

  .document-placeholder {
    height: 650px;
  }
}
</style>