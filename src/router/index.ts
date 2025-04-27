import { createRouter, createWebHistory } from 'vue-router';
import BusinessLetter from '../components/BusinessLetter.vue';
import AddSignature from '../components/AddSignature.vue';
import SignatureModel from '../components/SignatureModel.vue';
import ESignDocument from '../components/ESignDocument.vue';
import DatePicker from '../components/DatePicker.vue';
import DocumentSignPage from '../components/DocumentSignPage.vue';


const routes = [
  {
    path: '/',
    name: 'BusinessLetter',
    component: BusinessLetter,
  },
  // {
  //   path: '/history',
  //   name: 'History',
  //   component: History // Commented out as History is not imported
  // },
  {
    path: '/add-signature',
    name: 'AddSignature',
    component: AddSignature,
  },
  {
    path: '/signature-model',
    name: 'SignatureModel',
    component: SignatureModel,
  },
  {
    path: '/esign-document',
    name: 'ESignDocument',
    component: ESignDocument,
  },
  {
    path: '/date-picker',
    name: 'DatePicker',
    component: DatePicker,
  },
  {
    path: '/document/:date?',
    name: 'DocumentSignPage',
    component: DocumentSignPage,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;