//YOUR FIREBASE LINKS
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

user_name = localStorage.getItem("username");
room_name = localStorage.getItem("room_name");

function send(){
    msg = document.getElementById("msg").value;
    console.log(msg);
    firebase.database().ref(room_name).push({
    name: user_name,
    likes: 0,
    message: msg
    })
    document.getElementById("msg").innerHTML = "";
}


function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}


function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
          document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                      firebase_message_id = childKey;
                      message_data = childData;
                      //Start code

                      //End code
                }
          });
    });
}
getData();



