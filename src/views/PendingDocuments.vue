<template>
  <div class="pending-documents">
    <!-- Sidebar -->
    <div class="sidebar">
      <div class="logo">DirectSign</div>
      <ul>
        <li @click="navigateTo('Dashboard')">Dashboard</li>
        <li class="active">Pending</li>
        <li @click="navigateTo('Signed')">Signed</li>
      </ul>
    </div>

    <!-- Main Content -->
    <div class="main-content">
      <!-- Header -->
      <header>
        <h1>Pending Documents</h1>
      </header>

      <!-- Document List -->
      <div class="document-list">
        <div class="document-item" v-for="(document, index) in documents" :key="index">
          <div class="document-icon">
            <img src="https://via.placeholder.com/40x40.png?text=📄" alt="Document Icon" />
          </div>
          <div class="document-details">
            <h3>{{ document.title }}</h3>
            <p>Create by: {{ document.creator }}</p>
            <p class="status">{{ document.status }}</p>
          </div>
          <button class="track-btn">Track Activities</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'PendingDocuments',
  setup() {
    const router = useRouter();

    // Hardcoded document data for now
    const documents = ref([
      { title: 'Document1', creator: 'Charith Madushan', status: 'Pending 2 Signatures' },
      { title: 'Document1', creator: 'Charith Madushan', status: 'Pending 2 Signatures' },
    ]);

    const navigateTo = (routeName: string) => {
      router.push({ name: routeName });
    };

    return {
      documents,
      navigateTo,
    };
  },
});
</script>

<style scoped>
.pending-documents {
  display: flex;
  height: 100vh;
  font-family: Arial, sans-serif;
}

/* Sidebar */
.sidebar {
  width: 200px;
  background: #f5f6fa;
  padding: 20px;
}

.logo {
  font-size: 18px;
  font-weight: bold;
  color: #7f8c8d;
  margin-bottom: 30px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  padding: 10px;
  color: #7f8c8d;
  cursor: pointer;
}

.sidebar li.active {
  background: #dfe6e9;
  border-radius: 5px;
}

/* Main Content */
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #f9fbff;
}

header {
  display: flex;
  justify-content: flex-start; /* Adjusted to align the title to the left */
  align-items: center;
  padding: 10px 20px;
  background: #fff;
  border-bottom: 1px solid #dcdcdc;
}

header h1 {
  font-size: 20px;
  color: #2c3e50;
}

/* Document List */
.document-list {
  padding: 20px;
  flex: 1;
  overflow-y: auto;
}

.document-item {
  display: flex;
  align-items: center;
  background: #fff;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.document-icon img {
  width: 40px;
  height: 40px;
  margin-right: 15px;
}

.document-details {
  flex: 1;
}

.document-details h3 {
  font-size: 16px;
  color: #2c3e50;
  margin: 0 0 5px 0;
}

.document-details p {
  font-size: 14px;
  color: #7f8c8d;
  margin: 0;
}

.document-details .status {
  color: #3498db;
}

.track-btn {
  padding: 8px 15px;
  background: #3498db;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
}

.track-btn:hover {
  background: #2980b9;
}
</style>