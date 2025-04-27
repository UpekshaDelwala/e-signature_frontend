<template>
  <div class="document-view">
    <!-- Sidebar -->
    <div class="sidebar">
      <div class="logo">DirectSign</div>
      <ul>
        <li class="active" @click="navigateTo('Dashboard')">Dashboard</li>
        <li @click="navigateTo('PendingDocuments')">Pending</li>
        <li @click="navigateTo('Signed')">Signed</li>
      </ul>
    </div>

    <!-- Main Content -->
    <div class="main-content">
      <!-- Header -->
      <header>
        <h1>Document</h1>
        <button class="logout-btn">Logout</button>
      </header>

      <div class="content-wrapper">
        <!-- Document Area -->
        <div class="document-area" @drop="onDrop" @dragover.prevent>
          <div class="document" ref="documentRef">
            <div v-if="documentUrl && fileType === 'pdf'" class="pdf-viewer">
              <embed :src="documentUrl" type="application/pdf" width="100%" height="600px" />
            </div>
            <div v-else-if="documentUrl && fileType === 'docx'" class="unsupported-message">
              <p>.docx files are not supported for viewing at this time. Please convert to PDF or use a different format.</p>
            </div>
            <div v-else class="no-document">
              <p>No document uploaded. Please go back and upload a .pdf or .docx file.</p>
            </div>
            <div v-for="(placeholder, index) in droppedPlaceholders" :key="index" class="dropped-placeholder" :style="{ top: placeholder.y + 'px', left: placeholder.x + 'px' }">
              {{ placeholder.type }}
            </div>
          </div>
        </div>

        <!-- Right Sidebar -->
        <div class="right-sidebar">
          <!-- Placeholders Menu -->
          <div class="placeholders-menu">
            <h3>Place Holders</h3>
            <div class="placeholder-item" draggable="true" @dragstart="onDragStart('Text Field')" data-type="Text Field">
              Text Field
              <span class="drag-icon">✋</span>
            </div>
            <div class="placeholder-item" draggable="true" @dragstart="onDragStart('Date')" data-type="Date">
              Date
              <span class="drag-icon">✋</span>
            </div>
            <div class="placeholder-item" draggable="true" @dragstart="onDragStart('Signature')" data-type="Signature">
              Signature
              <span class="drag-icon">✋</span>
            </div>
          </div>

          <!-- Invitees Section -->
          <div class="invitees-section">
            <h3>Invitees</h3>
            <ul>
              <li v-for="(invitee, index) in invitees" :key="index">
                <div class="invitee-details">
                  <span class="invitee-name">{{ invitee.name }}</span>
                  <span class="invitee-position">{{ invitee.position }}</span>
                </div>
                <span class="actions">
                  <button class="edit-btn" @click="editInvitee(index)">✏️</button>
                  <button class="delete-btn" @click="deleteInvitee(index)">🗑️</button>
                </span>
              </li>
              <li>
                <button class="add-invitee-btn" @click="openAddInviteeModal">Add Invitee +</button>
              </li>
            </ul>
          </div>

          <!-- Action Buttons -->
          <div class="action-buttons">
            <button class="send-btn" @click="openSendDocumentModal">Send</button>
            <button class="cancel-btn">Cancel</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modals -->
    <AddInviteeModal
        :is-open="showAddInviteeModal"
        :editing-invitee="editingInvitee"
        :edit-index="editIndex"
        @close="closeAddInviteeModal"
        @add-invitee="handleAddInvitee"
        @update-invitee="updateInvitee"
    />
    <SendDocumentModal :is-open="showSendDocumentModal" @close="showSendDocumentModal = false" @send-document="handleSendDocument" />
    <SuccessModal :is-open="showSuccessModal" @close="showSuccessModal = false" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onBeforeUnmount, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import AddInviteeModal from '../components/AddInviteeModal.vue';
import SendDocumentModal from '../components/SendDocumentModal.vue';
import SuccessModal from '../components/SuccessModal.vue';

export default defineComponent({
  name: 'DocumentView',
  components: {
    AddInviteeModal,
    SendDocumentModal,
    SuccessModal,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();

    // Access route params
    const documentUrl = ref<string | null>(typeof route.params.documentUrl === 'string' ? route.params.documentUrl : null);
    const fileType = ref<string | null>(typeof route.params.fileType === 'string' ? route.params.fileType : null);

    // Debugging logs to verify props
    onMounted(() => {
      console.log('DocumentView mounted');
      console.log('documentUrl:', documentUrl.value);
      console.log('fileType:', fileType.value);
    });

    // State
    const showAddInviteeModal = ref(false);
    const showSendDocumentModal = ref(false);
    const showSuccessModal = ref(false);
    const invitees = ref<Array<{ name: string; email: string; position: string; reviewOnly: boolean }>>([]);
    const sentDocuments = ref<Array<{ from: string; to: string; message: string }>>([]);
    const droppedPlaceholders = ref<Array<{ type: string; x: number; y: number }>>([]);
    const draggedType = ref<string | null>(null);
    const editingInvitee = ref<{ name: string; email: string; position: string; reviewOnly: boolean } | null>(null);
    const editIndex = ref(-1);
    const documentRef = ref<HTMLElement | null>(null);

    // Methods
    const navigateTo = (routeName: string) => {
      router.push({ name: routeName });
    };

    const openAddInviteeModal = () => {
      editingInvitee.value = null;
      editIndex.value = -1;
      showAddInviteeModal.value = true;
    };

    const closeAddInviteeModal = () => {
      showAddInviteeModal.value = false;
      editingInvitee.value = null;
      editIndex.value = -1;
    };

    const editInvitee = (index: number) => {
      editingInvitee.value = { ...invitees.value[index] };
      editIndex.value = index;
      showAddInviteeModal.value = true;
    };

    const updateInvitee = ({ invitee, index }: { invitee: { name: string; email: string; position: string; reviewOnly: boolean }; index: number }) => {
      invitees.value[index] = invitee;
    };

    const deleteInvitee = (index: number) => {
      invitees.value.splice(index, 1);
    };

    const openSendDocumentModal = () => {
      showSendDocumentModal.value = true;
    };

    const handleAddInvitee = (invitee: { name: string; email: string; position: string; reviewOnly: boolean }) => {
      invitees.value.push(invitee);
    };

    const handleSendDocument = (document: { from: string; to: string; message: string }) => {
      sentDocuments.value.push(document);
      showSuccessModal.value = true;
    };

    const onDragStart = (type: string) => {
      draggedType.value = type;
    };

    const onDrop = (event: DragEvent) => {
      if (!documentRef.value || !draggedType.value) return;
      const rect = documentRef.value.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      droppedPlaceholders.value.push({
        type: draggedType.value,
        x,
        y,
      });
    };

    // Clean up the URL when the component is unmounted to avoid memory leaks
    onBeforeUnmount(() => {
      if (documentUrl.value) {
        URL.revokeObjectURL(documentUrl.value);
      }
    });

    return {
      documentUrl,
      fileType,
      showAddInviteeModal,
      showSendDocumentModal,
      showSuccessModal,
      invitees,
      sentDocuments,
      droppedPlaceholders,
      draggedType,
      editingInvitee,
      editIndex,
      documentRef,
      navigateTo,
      openAddInviteeModal,
      closeAddInviteeModal,
      editInvitee,
      updateInvitee,
      deleteInvitee,
      openSendDocumentModal,
      handleAddInvitee,
      handleSendDocument,
      onDragStart,
      onDrop,
    };
  },
});
</script>

<style scoped>
.document-view {
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
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: #fff;
  border-bottom: 1px solid #dcdcdc;
}

header h1 {
  font-size: 20px;
  color: #2c3e50;
}

.logout-btn {
  padding: 5px 15px;
  background: #fff;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  cursor: pointer;
  color: #2c3e50;
}

.content-wrapper {
  display: flex;
  flex: 1;
  overflow: hidden;
}

/* Document Area */
.document-area {
  flex: 1;
  padding: 20px;
  overflow: auto;
  background: #f5f6fa;
}

.document {
  width: 600px;
  margin: 0 auto;
  background: #fff;
  padding: 30px;
  border: 2px dashed #dcdcdc;
  position: relative;
}

.pdf-viewer, .unsupported-message, .no-document {
  width: 100%;
  text-align: center;
}

.unsupported-message p, .no-document p {
  font-size: 14px;
  color: #2c3e50;
  margin: 20px 0;
}

.dropped-placeholder {
  position: absolute;
  padding: 5px 10px;
  background: #dfe6e9;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  font-size: 12px;
  color: #2c3e50;
}

/* Right Sidebar */
.right-sidebar {
  width: 250px;
  background: #f5f6fa;
  padding: 20px;
  border-left: 1px solid #dcdcdc;
}

.placeholders-menu h3,
.invitees-section h3 {
  font-size: 14px;
  color: #2c3e50;
  margin-bottom: 10px;
}

.placeholder-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  margin-bottom: 5px;
  background: #dfe6e9;
  border-radius: 4px;
  font-size: 14px;
  color: #2c3e50;
  cursor: move;
}

.drag-icon {
  font-size: 14px;
}

.invitees-section ul {
  list-style: none;
  padding: 0;
}

.invitees-section li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  margin-bottom: 5px;
  background: #dfe6e9;
  border-radius: 4px;
  font-size: 14px;
  color: #2c3e50;
}

.invitee-details {
  display: flex;
  flex-direction: column;
}

.invitee-name {
  font-size: 14px;
  color: #2c3e50;
}

.invitee-position {
  font-size: 12px;
  color: #7f8c8d;
  margin-top: 2px;
}

.actions button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
}

.add-invitee-btn {
  width: 100%;
  padding: 8px;
  background: #dfe6e9;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  color: #2c3e50;
}

.action-buttons {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.send-btn,
.cancel-btn {
  flex: 1;
  padding: 10px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
}

.send-btn {
  background: #3498db;
  border: none;
  color: white;
}

.cancel-btn {
  background: #fff;
  border: 1px solid #dcdcdc;
  color: #2c3e50;
}
</style>