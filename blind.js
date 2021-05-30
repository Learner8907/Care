var firebaseConfig = {
    apiKey: "AIzaSyD-dCcl5FIFVVtqN7xoGUWpJNukp_8hKo4",
    authDomain: "disable-235ef.firebaseapp.com",
    databaseURL: "https://disable-235ef-default-rtdb.firebaseio.com/",
    projectId: "disable-235ef",
    storageBucket: "disable-235ef.appspot.com",
    messagingSenderId: "953016031064",
    appId: "1:953016031064:web:da2267ceb3c159f1e7b72d",
    measurementId: "G-T4RJMLC2ZF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  document.getElementById("output").innerHTML="<ul>"
 

function getData() { firebase.database().ref("/"+"Blindness").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(message_data)
console.log(firebase_message_id)

job = message_data['job'];



message_line = "<li class='message_h4 text-success'>"+job+"</li>"
row = message_line+"<hr>";
document.getElementById("output").innerHTML = document.getElementById("output").innerHTML+ row;
//End code
      } });  }); }
getData();



function home()
{
  window.location="index.html";
}