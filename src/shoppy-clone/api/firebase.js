// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export async function login() {
    return signInWithPopup(auth, provider)
        .then((result) => {
            return result.user;
        })
        .catch(console.error);
}

export async function logout() {
    return signOut(auth).then(() => null);
}

// firebase가 자체적으로 user 정보를 메모리에 관리하고 있음
    // component의 생명주기와 관계 없이 user 상태가 저장됨
export function onUserStateChange(callback) {
    onAuthStateChanged(auth, (user) => {
        callback(user);
    });
}
