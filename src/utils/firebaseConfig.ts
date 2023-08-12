import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC1VFJ14RM5IIe_HOec-XAxc8jX6RDWtbg",
    authDomain: "pokedex-54c48.firebaseapp.com",
    projectId: "pokedex-54c48",
    storageBucket: "pokedex-54c48.appspot.com",
    messagingSenderId: "735934100269",
    appId: "1:735934100269:web:21cedf1d62c85ee1a419a4"
  };

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const pokemonListRef = collection(firebaseDB, "pokemonList");
