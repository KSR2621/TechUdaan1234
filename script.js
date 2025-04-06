// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyDI7bIBfyGR_r-EWPvpYjxj8c_OscWDMTU",
    authDomain: "techudaan-54467.firebaseapp.com",
    projectId: "techudaan-54467",
    storageBucket: "techudaan-54467.firebasestorage.app",
    messagingSenderId: "86201497781",
    appId: "1:86201497781:web:b1c428db8b320817b026fc",
    measurementId: "G-0XLX6MTS9F"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

document.addEventListener('DOMContentLoaded', () => {
    // Fade-in Animation
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('visible');
        }, index * 200);
    });

    // Get DOM elements
    const authButtons = document.getElementById('auth-buttons');
    const profileButton = document.getElementById('profile-button');

    // Check authentication state
    auth.onAuthStateChanged((user) => {
        if (user) {
            // User is signed in
            authButtons.style.display = 'none';
            profileButton.style.display = 'block';
            localStorage.setItem('isLoggedIn', 'true');
            saveUserData(user);
        } else {
            // No user is signed in
            authButtons.style.display = 'block';
            profileButton.style.display = 'none';
            localStorage.setItem('isLoggedIn', 'false');
        }
    });
});

// Function to save user data to Firestore
async function saveUserData(user) {
    try {
        const userRef = db.collection("users").doc(user.uid);
        await userRef.set({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName || "Anonymous",
            lastLogin: new Date().toISOString()
        }, { merge: true });
        console.log("User data saved successfully!");
    } catch (error) {
        console.error("Error saving user data: ", error);
    }
}

// Toggle mobile menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
