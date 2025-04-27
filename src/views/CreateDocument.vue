<template>
  <div class="create-document">
    <!-- Main Content -->
    <div class="main-content">
      <h1>Create new document</h1>
      <div class="content">
        <div class="options">
          <label>
            <input type="radio" v-model="documentType" value="single" checked />
            Single document
          </label>
          <label>
            <input type="radio" v-model="documentType" value="group" />
            Group of documents
          </label>
        </div>
        <div class="upload-area">
          <img :src="uploadIllustration" alt="Upload Illustration" class="upload-illustration" />
          <input type="file" ref="fileInput" @change="handleFileUpload" accept=".pdf,.docx" style="display: none;" />
          <button class="add-document-btn" @click="triggerFileInput">Add Document</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import uploadIllustration from '@/assets/images/upload-illustration.png';

export default defineComponent({
  name: 'CreateDocument',
  setup() {
    const router = useRouter(); // Access the router instance
    const documentType = ref('single'); // Reactive state for documentType
    const uploadedDocumentUrl = ref<string | null>(null); // Reactive state for uploadedDocumentUrl
    const fileType = ref<string | null>(null); // Reactive state for fileType
    const fileInput = ref<HTMLInputElement | null>(null); // Typed ref for the file input

    const handleFileUpload = (event: Event) => {
      const input = event.target as HTMLInputElement;
      const file = input.files?.[0];
      if (file) {
        const validExtensions = ['pdf', 'docx'];
        const fileExtension = file.name.split('.').pop()?.toLowerCase();

        if (!fileExtension || !validExtensions.includes(fileExtension)) {
          alert('Please upload a file in .pdf or .docx format.');
          input.value = ''; // Clear the input
          return;
        }

        // Create a URL for the file
        const fileUrl = URL.createObjectURL(file);
        uploadedDocumentUrl.value = fileUrl;
        fileType.value = fileExtension;

        // Navigate to DocumentView with the file URL and type
        router.push({
          name: 'DocumentView',
          params: { documentUrl: uploadedDocumentUrl.value, fileType: fileType.value },
        });
      }
    };

    const triggerFileInput = () => {
      if (fileInput.value) {
        fileInput.value.click(); // Programmatically trigger the file input click
      }
    };

    // Clean up the URL when the component is unmounted to avoid memory leaks
    onBeforeUnmount(() => {
      if (uploadedDocumentUrl.value) {
        URL.revokeObjectURL(uploadedDocumentUrl.value);
      }
    });

    return {
      documentType,
      uploadedDocumentUrl,
      fileType,
      uploadIllustration,
      fileInput,
      handleFileUpload,
      triggerFileInput,
    };
  },
});
</script>

<style scoped>
.create-document {
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

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
}

.options {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
}

.options label {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #2c3e50;
}

.options input[type="radio"] {
  margin-right: 5px;
}

.upload-area {
  text-align: center;
}

.upload-illustration {
  width: 300px;
  height: 200px;
  margin-bottom: 20px;
}

.add-document-btn {
  padding: 10px 30px;
  background: #3498db;
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
}

.add-document-btn:hover {
  background: #2980b9;
}
</style>