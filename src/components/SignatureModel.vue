<template>
  <div class="container">
    <div class="letterhead">
      <div>{{ companyName }}</div>
      <div>{{ companyAddress }}</div>
      <div>{{ todayDate }}</div>
    </div>

    <div class="address">
      <div>{{ recipientName }}</div>
      <div>{{ recipientAddress }}</div>
    </div>

    <hr class="divider" />

    <div class="document-placeholder">
      <!-- Empty div to reserve space for the document -->
    </div>

    <div class="closing">
      <div class="modal-overlay">
        <div class="modal">
          <div class="modal-header">
            <h2>Add Signature</h2>
            <button class="close-btn" @click="$emit('close')">×</button>
          </div>
          <div class="modal-content">
            <div class="tabs">
              <button class="tab active">Type</button>
              <button class="tab">Draw</button>
              <button class="tab">Upload</button>
            </div>
            <input type="text" v-model="name" placeholder="Cameron Williamson" class="name-input" />
            <div class="signature-options">
              <div
                  v-for="(style, index) in signatureStyles"
                  :key="index"
                  class="signature-box"
                  :class="{ selected: selectedStyle === index }"
                  @click="selectedStyle = index"
              >
                {{ name || "Cameron Williamson" }}
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <label>
              <input type="checkbox" v-model="saveAsDefault" />
              Save this signature as default
            </label>
            <button class="add-btn" @click="addSignature">Add Signature</button>
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
      name: "",
      selectedStyle: 0,
      saveAsDefault: false,
      signatureStyles: [
        { font: "font-style-1" },
        { font: "font-style-2" },
        { font: "font-style-3" },
      ],
      // Added to support AddSignature layout
      companyName: 'Company Name',
      companyAddress: '610 Fountain Ave, Burlington, NJ 08016',
      todayDate: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      recipientName: 'Burlington Township Student',
      recipientAddress: 'Street Address, City, State Zip',
    };
  },
  methods: {
    addSignature() {
      const signature = {
        text: this.name || "Cameron Williamson",
        style: this.signatureStyles[this.selectedStyle].font,
        saveAsDefault: this.saveAsDefault,
      };
      this.$emit("add-signature", signature);
      // Redirect to ESignDocument with signature data
      this.$router.push({
        path: '/esign-document',
        query: { signature: JSON.stringify(signature) }
      });
    },
  },
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

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent background to obscure document */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background: white;
  border-radius: 8px;
  width: 600px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 10px;
}

.modal-header h2 {
  font-size: 20px;
  color: #1a73e8;
  margin: 0;
}

.close-btn {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #666;
}

.tabs {
  display: flex;
  margin-top: 20px;
}

.tab {
  flex: 1;
  padding: 10px;
  border: 1px solid #e0e0e0;
  background: #f5f5f5;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tab.active {
  background: white;
  border-bottom: none;
}

.tab:first-child {
  border-right: none;
}

.tab:last-child {
  border-left: none;
}

.tab:not(.active) {
  border-bottom: 1px solid #e0e0e0;
}

.tab::before {
  content: "📝";
  margin-right: 5px;
}

.tab:nth-child(2)::before {
  content: "✍️";
}

.tab:nth-child(3)::before {
  content: "⬆️";
}

.name-input {
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 16px;
}

.signature-options {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.signature-box {
  flex: 1;
  padding: 20px;
  border: 2px solid #e0e0e0;
  border-radius: 4px;
  text-align: center;
  margin: 0 5px;
  cursor: pointer;
  font-size: 20px;
}

.signature-box.selected {
  border-color: #1a73e8;
  background: #e8f0fe;
}

.modal-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding-top: 10px;
  border-top: 1px solid #e0e0e0;
}

.add-btn {
  background: #1a73e8;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
}

.add-btn:hover {
  background: #1557b0;
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
  .container {
    width: 100%;
    padding: 20px;
    margin: 10px;
  }

  .document-placeholder {
    height: 400px;
  }

  .modal {
    width: 90%;
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

  .modal {
    width: 95%;
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