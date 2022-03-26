
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
  apiKey: "AIzaSyCBPNzG6vXq2-Ydi6rPiRAWUUaqikt5dN0",
  authDomain: "chaty-bird.firebaseapp.com",
  databaseURL: "https://chaty-bird-default-rtdb.firebaseio.com",
  projectId: "chaty-bird",
  storageBucket: "chaty-bird.appspot.com",
  messagingSenderId: "368324438363",
  appId: "1:368324438363:web:88af72eafb719357f2527e"
};



firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("username");
document.getElementById("username").innerHTML = "Welcome " + username + "!";

function addRoom(){
      room_name = document.getElementById("room_name").value;
      localStorage.setItem("room_name", room_name);
      
      firebase.database().ref("/").child(room_name).update({
      purpose:"adding room: " + room_name
      })

      window.location = "chatroom.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  console.log(Room_names);

  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
  document.getElementById("output").innerHTML+=row;
  //End code
  });});}
getData();


function redirectToRoomName(name){
  localStorage.setItem("room_name",name);
  
  window.location = "chatroom.html"
}



