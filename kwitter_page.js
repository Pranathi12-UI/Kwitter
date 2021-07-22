//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAU1u_li3yV6cp9LI9EIl7QON79qsKmqR4",
      authDomain: "kwitter-2f94f.firebaseapp.com",
      databaseURL: "https://kwitter-2f94f-default-rtdb.firebaseio.com",
      projectId: "kwitter-2f94f",
      storageBucket: "kwitter-2f94f.appspot.com",
      messagingSenderId: "855830966607",
      appId: "1:855830966607:web:5235e80f68ee458637153a"
    };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
         name:user_name,
         message:msg,
         like:0   
      });

      document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
