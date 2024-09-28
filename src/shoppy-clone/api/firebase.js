// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, ref, set, get } from "firebase/database";
import { v4 as uuid } from "uuid";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

export function login() {
    signInWithPopup(auth, provider).catch(console.error);
}

export function logout() {
    signOut(auth).catch(console.error);
}

// firebase가 자체적으로 user 정보를 메모리에 관리하고 있음
// component의 생명주기와 관계 없이 user 상태가 저장됨
// 이 observer 덕분에 로그인 로그아웃에서 user를 따로 리턴할 필요가 없음
export function onUserStateChange(callback) {
    onAuthStateChanged(auth, async (user) => {
        const updateUser = user ? await adminUser(user) : null;
        callback(updateUser);
    });
}

function adminUser(user) {
    return get(ref(database), "admins").then((snapshot) => {
        if (snapshot.exists()) {
            const admins = snapshot.val().admins;
            const isAdmin = admins.includes(user.uid);
            return { ...user, isAdmin };
        }
    });
}

export async function addNewProduct(product, image) {
    const id = uuid();
    set(ref(database, `products/${id}`), {
        ...product,
        id,
        price: parseInt(product.price),
        image,
        options: product.options.split(","),
    });
}
