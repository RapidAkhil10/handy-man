var firebaseConfig = {
    apiKey: "AIzaSyBf--OxQVMNwWvytd4jKLVs_CQsq6OxNzE",
    authDomain: "handyman-rapidakhil10.firebaseapp.com",
    projectId: "handyman-rapidakhil10",
    storageBucket: "handyman-rapidakhil10.appspot.com",
    messagingSenderId: "451869164523",
    appId: "1:451869164523:web:b1d12e653686208e6ccfae",
    measurementId: "G-R73E6554SN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const firestore = firebase.firestore();
  const email = document.getElementById("email");
  const pass = document.getElementById("password");
  const login = document.getElementById("logd");

  const auth = firebase.auth();

  //var docRef = firestore.collection("Users").doc(email.value);

  login.addEventListener("click", e => {
      console.log("Logged in successfully");
    e.preventDefault();

    const promise = auth.signInWithEmailAndPassword(email.value, pass.value)
    .then(() => {
        console.log("Logged in successfully");
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
        //Redirect code here
        window.location="services.html";
    })
    .catch(error => {
        console.error(error);
        window.alert(error.message);
    });
  
})


  
