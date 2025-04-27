<template>
  <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center z-50">
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black opacity-50" @click="closeModal"></div>

    <!-- Modal -->
    <div class="bg-white rounded-lg shadow-lg p-6 w-80 z-10">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-semibold text-blue-900">Add Date</h2>
        <button @click="closeModal" class="text-gray-500 hover:text-gray-700">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <p class="text-gray-600 text-sm mb-4">Please select a date for your documnet</p>

      <!-- Date Navigation -->
      <div class="flex justify-between items-center mb-4">
        <button @click="previousMonth" class="text-blue-500 hover:text-blue-700">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <span class="text-gray-700 font-medium text-base">{{ monthName }} {{ year }}</span>
        <button @click="nextMonth" class="text-blue-500 hover:text-blue-700">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <!-- Calendar -->
      <div class="grid grid-cols-7 gap-1 text-center">
        <!-- Days of the Week -->
        <div v-for="day in daysOfWeek" :key="day" class="text-gray-500 text-xs font-medium">{{ day }}</div>

        <!-- Empty slots for days before the 1st -->
        <div v-for="n in firstDayOfMonth" :key="'empty-' + n" class="h-8"></div>

        <!-- Days of the Month -->
        <button
            v-for="day in daysInMonth"
            :key="day"
            @click="selectDate(day)"
            :class="[
              'h-8 w-8 rounded-full text-sm',
              selectedDate === day ? 'bg-blue-500 text-white' : 'hover:bg-blue-100',
              isDateDisabled(day) ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700'
            ]"
            :disabled="isDateDisabled(day)"
        >
          {{ day }}
        </button>
      </div>

      <!-- Add Date Button -->
      <button
          @click="addDate"
          class="mt-6 w-full py-2 bg-blue-500 text-white rounded-full border border-white hover:bg-blue-600"
          :disabled="!selectedDate"
      >
        Add Date
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DatePicker',
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
      selectedDate: null,
      daysOfWeek: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      currentYear: new Date().getFullYear(),
      currentMonth: new Date().getMonth(),
      currentDay: new Date().getDate()
    }
  },
  computed: {
    monthName() {
      return new Date(this.year, this.month).toLocaleString('default', { month: 'long' })
    },
    daysInMonth() {
      return new Date(this.year, this.month + 1, 0).getDate()
    },
    firstDayOfMonth() {
      return new Date(this.year, this.month, 1).getDay()
    }
  },
  methods: {
    previousMonth() {
      if (this.month === 0) {
        this.month = 11
        this.year--
      } else {
        this.month--
      }
    },
    nextMonth() {
      if (this.month === 11) {
        this.month = 0
        this.year++
      } else {
        this.month++
      }
    },
    selectDate(day) {
      if (!this.isDateDisabled(day)) {
        this.selectedDate = day
      }
    },
    isDateDisabled(day) {
      return this.year === this.currentYear && this.month === this.currentMonth && day < this.currentDay
    },
    addDate() {
      if (this.selectedDate) {
        const selected = new Date(this.year, this.month, this.selectedDate)
        const formattedDate = selected.toISOString().split('T')[0] // Format as YYYY-MM-DD
        this.$router.push({ name: 'DocumentSignPage', params: { date: formattedDate } })
        this.closeModal()
      }
    },
    closeModal() {
      this.selectedDate = null
      this.$emit('close')
    }
  }
}
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
.bg-black {
  background-color: rgba(0, 0, 0, 0.5);
}
.opacity-50 {
  opacity: 0.5;
}
.bg-white {
  background-color: #ffffff;
}
.rounded-lg {
  border-radius: 0.5rem;
}
.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
.p-6 {
  padding: 1.5rem;
}
.w-80 {
  width: 20rem;
}
.z-10 {
  z-index: 10;
}
.justify-between {
  justify-content: space-between;
}
.mb-4 {
  margin-bottom: 1rem;
}
.text-lg {
  font-size: 1.125rem;
}
.font-semibold {
  font-weight: 600;
}
.text-blue-900 {
  color: #1e3a8a;
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
.fill-none {
  fill: none;
}
.stroke-current {
  stroke: currentColor;
}
.text-gray-600 {
  color: #4b5563;
}
.text-sm {
  font-size: 0.875rem;
}
.text-blue-500 {
  color: #3b82f6;
}
.hover\:text-blue-700:hover {
  color: #1d4ed8;
}
.w-4 {
  width: 1rem;
}
.h-4 {
  height: 1rem;
}
.text-gray-700 {
  color: #374151;
}
.font-medium {
  font-weight: 500;
}
.text-base {
  font-size: 1rem;
}
.grid {
  display: grid;
}
.grid-cols-7 {
  grid-template-columns: repeat(7, minmax(0, 1fr));
}
.gap-1 {
  gap: 0.25rem;
}
.text-center {
  text-align: center;
}
.text-xs {
  font-size: 0.75rem;
}
.h-8 {
  height: 2rem;
}
.w-8 {
  width: 2rem;
}
.rounded-full {
  border-radius: 9999px;
}
.bg-blue-500 {
  background-color: #3b82f6;
}
.text-white {
  color: #ffffff;
}
.hover\:bg-blue-100:hover {
  background-color: #dbeafe;
}
.text-gray-400 {
  color: #9ca3af;
}
.cursor-not-allowed {
  cursor: not-allowed;
}
.mt-6 {
  margin-top: 1.5rem;
}
.w-full {
  width: 100%;
}
.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.border {
  border-width: 1px;
}
.border-white {
  border-color: #ffffff;
}
.hover\:bg-blue-600:hover {
  background-color: #2563eb;
}
</style>