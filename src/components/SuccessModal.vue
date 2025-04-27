<template>
  <div v-if="isOpen" class="modal-overlay">
    <div class="modal">
      <div class="modal-header">
        <h2>Successfully Sent</h2>
        <button class="close-btn" @click="closeModal">×</button>
      </div>
      <div class="modal-body">
        <div class="icon-container">
          <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 12L22 2L12 22L10 14L2 12Z" fill="#3498db"/>
            <path d="M10 14L17 14L12 22L10 14Z" fill="#2980b9"/>
          </svg>
        </div>
        <p>The document is sent to the respective owners to sign.</p>
        <button class="ok-btn" @click="closeModal">OK</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SuccessModal',
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background: white;
  border-radius: 10px;
  width: 400px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.modal-header h2 {
  margin: 0;
  font-size: 18px;
  font-weight: bold;
  color: #2c3e50;
}

.close-btn {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #7f8c8d;
}

.modal-body {
  text-align: center;
}

.icon-container {
  margin: 20px 0;
}

.modal-body p {
  font-size: 14px;
  color: #2c3e50;
  margin-bottom: 20px;
}

.ok-btn {
  width: 100%;
  padding: 10px;
  background: #ecf0f1;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  color: #2c3e50;
}

.ok-btn:hover {
  background: #dfe6e9;
}
</style>