<template>
  <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center z-50">
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black opacity-50" @click="closeModal"></div>

    <!-- Modal -->
    <div class="bg-white rounded-lg shadow-lg w-96 z-10 flex flex-col items-center p-6">
      <!-- Header -->
      <div class="flex justify-between items-center w-full mb-4">
        <div class="flex items-center">

          <h2 class="text-lg font-semibold text-blue-900">DirectSign</h2>
        </div>
        <button @click="closeModal" class="text-gray-500 hover:text-gray-700">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Title -->
      <h3 class="text-xl font-semibold text-gray-900 mb-2">Enter Your OTP Code</h3>

      <!-- Description -->
      <p class="text-gray-600 text-sm text-center mb-4">
        We have sent an OTP to <span class="font-semibold">+94754XXXX54</span>.<br />
        Please check your messages and enter the OTP code below.
      </p>

      <!-- Illustration -->
      <div class="mb-6">

      </div>

      <!-- OTP Input -->
      <input
          v-model="otp"
          type="text"
          placeholder="Enter Your OTP Code"
          class="w-full p-3 border-2 border-blue-500 rounded-full text-center text-gray-700 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
      <span class="text-blue-600 font-semibold text-sm mb-4">{{ otp || 'XXXXXX' }}</span>

      <!-- Confirm Button -->
      <button
          @click="confirmOTP"
          class="w-full py-3 bg-blue-500 text-white rounded-full border border-white hover:bg-blue-600 font-semibold"
      >
        Confirm & Sent
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OTPModal',
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      otp: '',
    };
  },
  methods: {
    closeModal() {
      this.otp = '';
      this.$emit('close');
    },
    confirmOTP() {
      // Emit the confirm event to trigger SuccessModal in DocumentSignPage.vue
      this.$emit('confirm');
      this.closeModal();
    },
  },
};
</script>

<style scoped>
.fixed { position: fixed; }
.inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
.flex { display: flex; }
.items-center { align-items: center; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
.z-50 { z-index: 50; }
.absolute { position: absolute; }
.bg-black { background-color: rgba(0, 0, 0, 0.5); }
.opacity-50 { opacity: 0.5; }
.bg-white { background-color: #ffffff; }
.rounded-lg { border-radius: 0.75rem; }
.shadow-lg { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); }
.w-96 { width: 24rem; }
.z-10 { z-index: 10; }
.flex-col { flex-direction: column; }
.p-6 { padding: 1.5rem; }
.mb-4 { margin-bottom: 1rem; }
.mb-2 { margin-bottom: 0.5rem; }
.mb-6 { margin-bottom: 1.5rem; }
.w-6 { width: 1.5rem; }
.h-6 { height: 1.5rem; }
.mr-2 { margin-right: 0.5rem; }
.text-lg { font-size: 1.125rem; }
.font-semibold { font-weight: 600; }
.text-blue-900 { color: #1e3a8a; }
.text-gray-500 { color: #6b7280; }
.hover\:text-gray-700:hover { color: #4b5563; }
.w-5 { width: 1.25rem; }
.h-5 { height: 1.25rem; }
.fill-none { fill: none; }
.stroke-current { stroke: currentColor; }
.text-xl { font-size: 1.25rem; }
.text-gray-900 { color: #1f2937; }
.text-gray-600 { color: #4b5563; }
.text-sm { font-size: 0.875rem; }
.text-center { text-align: center; }
.w-32 { width: 8rem; }
.h-32 { height: 8rem; }
.w-full { width: 100%; }
.p-3 { padding: 0.75rem; }
.border-2 { border-width: 2px; }
.border-blue-500 { border-color: #3b82f6; }
.rounded-full { border-radius: 9999px; }
.text-gray-700 { color: #374151; }
.focus\:outline-none:focus { outline: none; }
.focus\:ring-2:focus { box-shadow: 0 0 0 2px; }
.focus\:ring-blue-300:focus { box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3); }
.text-blue-600 { color: #2563eb; }
.py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
.bg-blue-500 { background-color: #3b82f6; }
.text-white { color: #ffffff; }
.border { border-width: 1px; }
.border-white { border-color: #ffffff; }
.hover\:bg-blue-600:hover { background-color: #2563eb; }
</style>