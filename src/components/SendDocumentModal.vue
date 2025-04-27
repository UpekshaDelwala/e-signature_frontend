<template>
  <div v-if="isOpen" class="modal-overlay">
    <div class="modal">
      <div class="modal-header">
        <h2>Send Document</h2>
        <button class="close-btn" @click="closeModal">×</button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="from">From:</label>
            <input type="email" id="from" v-model="form.from" placeholder="From" required />
          </div>
          <div class="form-group">
            <label for="to">To:</label>
            <input type="email" id="to" v-model="form.to" placeholder="To" required />
          </div>
          <div class="form-group">
            <label for="message">Message:</label>
            <textarea id="message" v-model="form.message" placeholder="Message" rows="4"></textarea>
          </div>
          <button type="submit" class="send-btn">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SendDocumentModal',
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      form: {
        from: '',
        to: '',
        message: '',
      },
    };
  },
  methods: {
    closeModal() {
      this.$emit('close');
      this.resetForm();
    },
    handleSubmit() {
      this.$emit('send-document', { ...this.form });
      this.closeModal();
    },
    resetForm() {
      this.form = {
        from: '',
        to: '',
        message: '',
      };
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

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  font-size: 14px;
  color: #2c3e50;
  margin-bottom: 5px;
}

.form-group input[type="email"],
.form-group textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  font-size: 14px;
  box-sizing: border-box;
}

.form-group textarea {
  resize: none;
  height: 80px;
}

.send-btn {
  width: 100%;
  padding: 10px;
  background: #ecf0f1;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  color: #2c3e50;
}

.send-btn:hover {
  background: #dfe6e9;
}
</style>