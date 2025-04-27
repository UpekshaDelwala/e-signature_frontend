<template>
  <div class="document-sign-page">
    <!-- Sidebar -->

    <!-- Main Content -->
    <main class="main-content">
      <!-- Top Bar -->
      <header class="top-bar">

      </header>

      <!-- Document Area -->
      <section class="document-section">
        <!-- Actions -->
        <div class="actions">
          <button class="decline-button">Decline</button>
          <button class="confirm-button" @click="openOTPModal">Confirm</button>
        </div>

        <!-- Document -->
        <div class="document">


          <hr class="divider" />
          <div class="document-placeholder">
            <!-- Empty div to reserve space for the document -->
          </div>

          <!-- Signature Area -->
          <div class="signature-area">
            <div class="signature-block">
              <label>Name:</label>
              <div class="name-box">Cameron Williamson</div>
            </div>

            <div class="signature-block">
              <div class="signature-box">Cameron Williamson</div>
              <span class="label">Signature</span>
            </div>

            <div class="signature-block">
              <div class="date-box">{{ formattedDate }}</div>
              <span class="label">Date</span>
            </div>
          </div>
        </div>
      </section>

      <!-- OTP Modal -->
      <OTPModal :isOpen="isOTPModalOpen" @close="closeOTPModal" @confirm="handleOTPConfirm" />

      <!-- Success Modal -->
      <SuccessModal :isOpen="isSuccessModalOpen" @close="closeSuccessModal" />
    </main>
  </div>
</template>

<script>
import OTPModal from './OTPModel.vue'; // Updated the import path to match the correct file name
import SuccessModal from './SuccessModel.vue'; // Added import for SuccessModal

export default {
  name: 'DocumentSignPage',
  components: {
    OTPModal,
    SuccessModal, // Added SuccessModal to components
  },
  data() {
    return {
      isOTPModalOpen: false,
      isSuccessModalOpen: false, // Added state for SuccessModal visibility
    };
  },
  computed: {
    formattedDate() {
      const dateParam = this.$route.params.date;
      if (!dateParam) return "Today's Date";
      const [year, month, day] = dateParam.split('-').map(Number);
      const date = new Date(year, month - 1, day); // month is 0-based in JS
      return date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      });
    },
  },
  methods: {
    openOTPModal() {
      this.isOTPModalOpen = true;
    },
    closeOTPModal() {
      this.isOTPModalOpen = false;
    },
    handleOTPConfirm() {
      // Open the SuccessModal when the confirm event is received from OTPModal
      this.isSuccessModalOpen = true;
    },
    closeSuccessModal() {
      this.isSuccessModalOpen = false;
    },
  },
};
</script>

<style scoped>
/* Layout */
.document-sign-page {
  display: flex;
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
}

/* Sidebar */
.sidebar {
  width: 220px;
  background-color: #f9fbfd;
  border-right: 1px solid #ddd;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.logo h2 {
  margin-bottom: 40px;
  font-size: 24px;
  color: #007BFF;
}

.menu button {
  background: none;
  border: none;
  font-size: 16px;
  margin-bottom: 20px;
  color: #555;
  text-align: left;
  cursor: pointer;
}

.menu button:hover {
  color: #007BFF;
}

/* Main Content */
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* Top Bar */
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #ddd;
}

.top-bar h1 {
  font-size: 22px;
  color: #666;
}

.user-section {
  display: flex;
  align-items: center;
}

.user-name {
  margin-right: 20px;
  font-weight: bold;
  color: #007BFF;
}

.logout-button {
  background: none;
  border: 1px solid #ddd;
  padding: 6px 14px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  color: #007BFF; /* Added color to match the Figma design */
}

/* Document Section */
.document-section {
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.document {
  background: #fff;
  border: 2px dotted #9d2525;
  padding: 40px;
  width: 700px;
  max-width: 95%;
}

.document-title {
  text-align: center;
  color: #9d2525;
  font-size: 26px;
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

/* Signature Area */
.signature-area {
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
}

.signature-block {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.name-box,
.signature-box,
.date-box {
  padding: 6px 14px;
  border-radius: 10px;
  margin-top: 5px;
  font-size: 14px;
}

.name-box {
  background-color: #e0f4ff;
  color: #007BFF;
}

.signature-box {
  background-color: #e3ffe0;
  color: #28a745;
}

.date-box {
  background-color: #ffe0a8;
  color: #d18b00;
}

.label {
  margin-top: 5px;
  font-size: 12px;
  color: #999;
}

/* Actions */
.actions {
  margin-bottom: 20px;
  display: flex;
  justify-content: flex-start; /* Aligns buttons to the left within a centered container */
  gap: 12px;
  margin-left: 80px; /* Shifts buttons slightly to the right of center */
}

.actions button {
  background: none;
  border: 2px solid; /* Thicker border for larger appearance */
  padding: 10px 24px; /* Larger padding for bigger buttons */
  border-radius: 24px; /* Slightly larger border-radius */
  font-weight: bold;
  font-size: 16px; /* Larger text */
  cursor: pointer;
}

.decline-button {
  color: #d9534f;
  border-color: #d9534f;
}

.confirm-button {
  color: #5cb85c;
  border-color: #5cb85c;
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

  .actions {
    margin-left: 20px;
  }
}

@media (max-width: 480px) {
  .document {
    padding: 15px;
  }

  .document-placeholder {
    height: 300px;
  }

  .actions {
    margin-left: 10px;
    flex-direction: column;
    align-items: flex-start;
  }

  .actions button {
    width: 100%;
    margin-bottom: 10px;
  }
}

@media (min-width: 1200px) {
  .document {
    width: 750px;
    padding: 50px;
  }

  .document-placeholder {
    height: 650px;
  }
}
</style>