 var firebaseConfig = {
    apiKey: "AIzaSyDdhHQcAqWyxJjzghUoeQGRLgWAm7EfeVA",
    authDomain: "fbase-handyman.firebaseapp.com",
    projectId: "fbase-handyman",
    storageBucket: "fbase-handyman.appspot.com",
    messagingSenderId: "35750949223",
    appId: "1:35750949223:web:a46a3e189eea5f0e4abfc2",
    measurementId: "G-1N851P41X3"
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

  login.addEventListener("click", e =>)
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


  
