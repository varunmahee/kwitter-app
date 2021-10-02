const firebaseConfig = {
      apiKey: "AIzaSyCpO82jqBk6VFkAJ-bs9FmXJ8qH_cyruPc",
      authDomain: "kwitter-1df1e.firebaseapp.com",
      databaseURL: "https://kwitter-1df1e-default-rtdb.firebaseio.com",
      projectId: "kwitter-1df1e",
      storageBucket: "kwitter-1df1e.appspot.com",
      messagingSenderId: "976978657119",
      appId: "1:976978657119:web:92d37b1a694125bbb200ea"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";
function addRoom(){
      room_name = document.getElementById("room_name").nodeValue;
      firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_room.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name:" + Room_names);
      row = "<div class='room_name' id="+ Room_names + "onclick = 'redirecttoroomname(this.id)'>#"+ Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirecttoroomname(name){
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_room.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}