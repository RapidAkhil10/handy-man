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

  var query = document.location.search;

  // To replace %20 with spaces
  const regex = /%20/;
  var match = regex.exec(query);
  while(match){
      query = query.replace(/%20/, ' ');
      match = regex.exec(query);
  }
  
  //Declaring extraction regex strings
  const regex_city = /city=(\w+)\,/;
  const regex_service = /service=(.*)$/;
  
  var match = regex_city.exec(query);
  const city = match[1];

  var match = regex_service.exec(query);
  const service = match[1];

  const serviceCollection = firebase.firestore().collection("Cities").doc(city).collection("Services").doc(service).collection("Service");

  serviceCollection.get()
        .then(snapshot => {
            snapshot.forEach(subservice => {

                console.log(subservice.id);
                const subservice_list = document.getElementById("list_of_subservice");

                const type_name = `
                    <li><a href = "confirm-booking.html?city=${city},service=${service},subservice=${subservice.id}">${subservice.id}</a></li>
                     `        
                subservice_list.innerHTML += type_name;
                console.log(type_name);
            })
        })
        .catch(error => {
            console.log(error);
        });


        const search = () => {
            let filter = document.getElementById('myInput').value.toUpperCase();
            let ul = document.getElementById("list_of_subservice");
        
            let li = ul.getElementsByTagName('li');
        
            for(var i = 0; i < li.length; i++)
            {
                let a = li[i].getElementsByTagName('a')[0];
        
                let textValue = a.textContent || a.innerText ;
        
                if(textValue.toUpperCase().indexOf(filter) > -1){
                    li[i].style.display = '';}
                else{
                    li[i].style.display = 'none';}
            }
        }
