import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC8DShDxy_wjD1R2nVdev6jvdGkJWmKBG0",
    authDomain: "nailhub-shree.firebaseapp.com",
    projectId: "nailhub-shree",
    storageBucket: "nailhub-shree.appspot.com",
    messagingSenderId: "525438569763",
    appId: "1:525438569763:web:e4534b75650c074ead5096",
    measurementId: "G-HC278PVNP0"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
export { storage, analytics };
