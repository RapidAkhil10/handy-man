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

  const form = document.querySelector('#form-message')

  form.addEventListener('submit', (e) => {
	e.preventDefault();
	firestore.collection("Feedback").doc(form.mail.value).set({
        name: form.name.value,
        email: form.mail.value,
        message: form.message.value
    })
    .then(() => {
		console.log("Success sent");
		window.alert("Thank you for your feedback!");
		})
    .catch(error => {
		console.error(error);
		window.alert(error.message);
		});

	form.reset();
  })
