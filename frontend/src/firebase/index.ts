// Import the functions you need from the SDKs you need
import { FirebaseApp, FirebaseOptions, initializeApp } from 'firebase/app';
import { Analytics, getAnalytics } from 'firebase/analytics';
import {
    getAuth,
    getRedirectResult,
    GoogleAuthProvider,
    signInWithRedirect,
    signOut,
} from 'firebase/auth';

// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

export class SmithooFirebase {
    private _app: FirebaseApp;
    private _analytics: Analytics;
    private _googleProvider: GoogleAuthProvider;

    constructor(config: FirebaseOptions) {
        this._app = initializeApp(config);
        this._analytics = getAnalytics(this.app);
        this._googleProvider = new GoogleAuthProvider();
    }

    get app(): FirebaseApp {
        return this._app;
    }

    get analytics(): Analytics {
        return this._analytics;
    }

    signInGoogle() {
        const auth = getAuth();
        signInWithRedirect(auth, this._googleProvider);
    }

    async signOutGoogle() {
        try {
            const auth = getAuth();
            await signOut(auth);
        } catch (error) {
            console.error(error);
        }
    }

    async getGoogleAuthResult() {
        try {
            const auth = getAuth();
            const result = await getRedirectResult(auth);
            // get result.user
            if (!result) {
                return null;
            }
            // This gives you a Google Access Token. You can use it to access Google APIs.
            // get credential.accessToken
            return GoogleAuthProvider.credentialFromResult(result);
        } catch (error: any) {
            // Handle Errors here.
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // The email of the user's account used.
            // const email = error.email;
            // The AuthCredential type that was used.
            // console.log(errorCode, errorMessage, email, credential);
            return GoogleAuthProvider.credentialFromError(error);
        }
    }
}

export default new SmithooFirebase(firebaseConfig);
