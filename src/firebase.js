import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

//Quando for colocar em produção, configure o seu projeto conforme as instruções em:
//https://medium.com/@impaachu/how-to-secure-your-firebase-project-even-when-your-api-key-is-publicly-available-a462a2a58843

const firebaseConfig = {
  apiKey: "cole-as-suas-informacoes",
  authDomain: "cole-as-suas-informacoes",
  databaseURL: "cole-as-suas-informacoes",
  projectId: "cole-as-suas-informacoes",
  storageBucket: "cole-as-suas-informacoes",
  messagingSenderId: "cole-as-suas-informacoes",
  appId: "cole-as-suas-informacoes",
  measurementId: "cole-as-suas-informacoes",
};
// Initializamos o Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

//Provider para efetuar o login com a Conta Google
const provider = new firebase.auth.GoogleAuthProvider();
export const entrarComGoogle = () => {
  auth.signInWithPopup(provider);
};

