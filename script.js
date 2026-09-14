import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCUO6mKmuoWnJxGzb4ANw9cte3p8O-wbg0",
    authDomain: "personal-tool-f0bb0.firebaseapp.com",
    projectId: "personal-tool-f0bb0",
    storageBucket: "personal-tool-f0bb0.firebasestorage.app",
    messagingSenderId: "759093847074",
    appId: "1:759093847074:web:4747e7582629be2331967b",
    measurementId: "G-S2L81GZT35"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const exploreBtn = document.getElementById("exploreBtn");
const message = document.getElementById("message");

if (exploreBtn) {
    exploreBtn.addEventListener("click", function () {
        message.textContent = "Welcome! Your journey begins here. ⚔️";
    });
}

window.createAccount = async function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        await createUserWithEmailAndPassword(auth, email, password);
        document.getElementById("authMessage").textContent =
            "Account created successfully! ✅";
    } catch (error) {
        document.getElementById("authMessage").textContent =
            error.message;
    }
};

window.login = async function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        await signInWithEmailAndPassword(auth, email, password);
        document.getElementById("authMessage").textContent =
            "Login successful! ✅";
    } catch (error) {
        document.getElementById("authMessage").textContent =
            error.message;
    }
};

window.logout = async function () {
    await signOut(auth);
};

onAuthStateChanged(auth, (user) => {
    const userStatus = document.getElementById("userStatus");

    if (user) {
        userStatus.textContent = "Logged in: " + user.email;
    } else {
        userStatus.textContent = "Not logged in";
    }
});
