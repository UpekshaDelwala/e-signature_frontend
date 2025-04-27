import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../views/LandingPage.vue';
import CreateDocument from '../views/CreateDocument.vue';
import DocumentView from '../views/DocumentView.vue';
import PendingDocuments from '../views/PendingDocuments.vue'; // Add the new component

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
  },
  {
    path: '/create-document',
    name: 'CreateDocument',
    component: CreateDocument,
  },
  {
    path: '/document-view/:documentUrl/:fileType',
    name: 'DocumentView',
    component: DocumentView,
  },
  {
    path: '/pending-documents',
    name: 'PendingDocuments',
    component: PendingDocuments,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DocumentView, // For now, redirect Dashboard to DocumentView; you can create a separate Dashboard page later
  },
  {
    path: '/signed',
    name: 'Signed',
    component: DocumentView, // Placeholder; you can create a Signed page later
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;