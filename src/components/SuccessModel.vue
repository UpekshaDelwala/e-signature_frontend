<template>
  <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center z-50">
    <!-- Overlay -->
    <div class="absolute inset-0 bg-gray-500 opacity-50" @click="closeModal"></div>

    <!-- Modal -->
    <div class="bg-white rounded-lg shadow-lg w-80 z-10 flex flex-col items-center p-6 relative">
      <!-- Close Button -->
      <button @click="closeModal" class="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Icon -->
      <div class="mb-4">
        <svg class="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      </div>

      <!-- Title -->
      <h3 class="text-2xl font-bold text-blue-500 mb-2">Success!</h3>

      <!-- Description -->
      <p class="text-gray-600 text-sm text-center mb-6">
        Your Signed document successfully sent
      </p>

      <!-- OK Button -->
      <button
          @click="closeModal"
          class="w-full py-2 border-2 border-blue-500 text-blue-500 rounded-full font-semibold hover:bg-blue-50"
      >
        OK
      </button>
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
.fixed {
  position: fixed;
}

.inset-0 {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.flex {
  display: flex;
}

.items-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.z-50 {
  z-index: 50;
}

.absolute {
  position: absolute;
}

.bg-gray-500 {
  background-color: rgba(128, 128, 128, 0.5);
}

.opacity-50 {
  opacity: 0.5;
}

.bg-white {
  background-color: #ffffff;
}

.rounded-lg {
  border-radius: 0.75rem;
}

.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.w-80 {
  width: 20rem;
}

.z-10 {
  z-index: 10;
}

.flex-col {
  flex-direction: column;
}

.p-6 {
  padding: 1.5rem;
}

.relative {
  position: relative;
}

.top-2 {
  top: 0.5rem;
}

.right-2 {
  right: 0.5rem;
}

.text-gray-500 {
  color: #6b7280;
}

.hover\:text-gray-700:hover {
  color: #4b5563;
}

.w-5 {
  width: 1.25rem;
}

.h-5 {
  height: 1.25rem;
}

.mb-4 {
  margin-bottom: 1rem;
}

.w-12 {
  width: 3rem;
}

.h-12 {
  height: 3rem;
}

.text-blue-500 {
  color: #3b82f6;
}

.text-2xl {
  font-size: 1.5rem;
}

.font-bold {
  font-weight: 700;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.text-gray-600 {
  color: #4b5563;
}

.text-sm {
  font-size: 0.875rem;
}

.text-center {
  text-align: center;
}

.mb-6 {
  margin-bottom: 1.5rem;
}

.w-full {
  width: 100%;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.border-2 {
  border-width: 2px;
}

.border-blue-500 {
  border-color: #3b82f6;
}

.rounded-full {
  border-radius: 9999px;
}

.font-semibold {
  font-weight: 600;
}

.hover\:bg-blue-50:hover {
  background-color: #eff6ff;
}
</style>