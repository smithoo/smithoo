import {
    getAuth,
    getRedirectResult,
    GoogleAuthProvider,
    signInWithRedirect,
    signOut,
} from 'firebase/auth';

const provider = new GoogleAuthProvider();

export function signInGoogle() {
    const auth = getAuth();
    signInWithRedirect(auth, provider);
}

export async function signOutGoogle() {
    try {
        const auth = getAuth();
        await signOut(auth);
    } catch (error) {
        console.log(error);
    }
}

export async function getGoogleAuthResult() {
    try {
        const auth = getAuth();
        const result = await getRedirectResult(auth);
        if (!result) {
            return;
        }
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (!credential) {
            return;
        }
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;

        console.log(token, user);
    } catch (error: any) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode, errorMessage, email, credential);
        // ...
    }
}
