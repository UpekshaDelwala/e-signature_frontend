import type {RouteRecordRaw} from "vue-router";
import LandingPage from "@/views/LandingPage.vue";
import BusinessLetter from "@/components/BusinessLetter.vue";
import AddSignature from "@/components/AddSignature.vue";
import CreateDocument from "@/views/CreateDocument.vue";
import DocumentView from "@/views/DocumentView.vue";
import SignatureModel from "@/components/SignatureModel.vue";
import PendingDocuments from "@/views/PendingDocuments.vue";
import ESignDocument from "@/components/ESignDocument.vue";
import DatePicker from "@/components/DatePicker.vue";
import DocumentSignPage from "@/components/DocumentSignPage.vue";
import MainLayout from "@/views/layout/MainLayout.vue";

const routes: RouteRecordRaw[]=[
    {
        path: '/',
        name: 'LandingPage',
        component: LandingPage,
    },
    {
        path:"/sign",
        name: "MainLayout",
        component: MainLayout,
        children:[
            {
                path: 'a',
                name: 'BusinessLetter',
                component: BusinessLetter,
            },
            {
                path: 'add-signature',
                name: 'AddSignature',
                component: AddSignature,
            },
        ]
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
    },{
        path: '/signature-model',
        name: 'SignatureModel',
        component: SignatureModel,
    },
    {
        path: '/pending-documents',
        name: 'PendingDocuments',
        component: PendingDocuments,
    },{
        path: '/esign-document',
        name: 'ESignDocument',
        component: ESignDocument,
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DocumentView, // For now, redirect Dashboard to DocumentView; you can create a separate Dashboard page later
    },{
        path: '/date-picker',
        name: 'DatePicker',
        component: DatePicker,
    },
    {
        path: '/signed',
        name: 'Signed',
        component: DocumentView, // Placeholder; you can create a Signed page later
    },{
        path: '/document/:date?',
        name: 'DocumentSignPage',
        component: DocumentSignPage,
        props: true,
    },
];

export  {routes}