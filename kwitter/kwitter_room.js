
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAIaVL0Lwd0GyTjJED7oQ5vEhoCyrzzLd0",
      authDomain: "kwiter2-c14a0.firebaseapp.com",
      databaseURL: "https://kwiter2-c14a0-default-rtdb.firebaseio.com",
      projectId: "kwiter2-c14a0",
      storageBucket: "kwiter2-c14a0.appspot.com",
      messagingSenderId: "476238956591",
      appId: "1:476238956591:web:44f75b3baf9b1a99921eda"
 };
// Initialize Firebase
 firebase.initializeApp(firebaseConfig);

      var username=localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML="Welcome "+username;

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names +"</div><hr>"
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function addroom(){
      roomname=document.getElementById("room_name").value;
      firebase.database().ref("/").child(roomname).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",roomname);
      window.location="kwitter_page.html";

}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}