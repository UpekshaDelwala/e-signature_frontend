<template>
  <div v-if="isOpen" class="modal-overlay">
    <div class="modal">
      <div class="modal-header">
        <h2>Add Invitee</h2>
        <button class="close-btn" @click="closeModal">×</button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" v-model="form.name" placeholder="Name" required />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="form.email" placeholder="Email" required />
          </div>
          <div class="form-group">
            <label for="contact">Contact No</label>
            <input type="tel" id="contact" v-model="form.contact" placeholder="Contact No" />
          </div>
          <div class="form-group position-group">
            <label for="position">Position:</label>
            <div class="position-input">
              <input type="number" id="position" v-model.number="form.position" min="1" required />
              <button type="button" class="increment-btn" @click="form.position++">+</button>
            </div>
          </div>
          <div class="form-group checkbox-group">
            <input type="checkbox" id="review-only" v-model="form.reviewOnly" />
            <label for="review-only">Review Only</label>
          </div>
          <button type="submit" class="add-btn">Add</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddInviteeModal',
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        contact: '',
        position: 1,
        reviewOnly: false,
      },
    };
  },
  methods: {
    closeModal() {
      this.$emit('close');
      this.resetForm();
    },
    handleSubmit() {
      this.$emit('add-invitee', { ...this.form });
      this.closeModal();
    },
    resetForm() {
      this.form = {
        name: '',
        email: '',
        contact: '',
        position: 1,
        reviewOnly: false,
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

.form-group input[type="text"],
.form-group input[type="email"],
.form-group input[type="tel"],
.form-group input[type="number"] {
  width: 100%;
  padding: 8px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  font-size: 14px;
}

.position-group {
  display: flex;
  align-items: center;
}

.position-input {
  display: flex;
  align-items: center;
  width: 100px;
}

.position-input input {
  width: 60px;
  margin-right: 5px;
}

.increment-btn {
  background: #ecf0f1;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
}

.checkbox-group {
  display: flex;
  align-items: center;
}

.checkbox-group label {
  margin-left: 5px;
  font-size: 14px;
}

.add-btn {
  width: 100%;
  padding: 10px;
  background: #ecf0f1;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  color: #2c3e50;
}

.add-btn:hover {
  background: #dfe6e9;
}
</style>