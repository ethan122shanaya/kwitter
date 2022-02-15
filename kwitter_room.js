
var firebaseConfig = {
      apiKey: "AIzaSyDPC8gSWTntXyWYMM4mQ7VvuhYqpe8GtI8",
      authDomain: "kwitter-d4dea.firebaseapp.com",
      databaseURL: "https://kwitter-d4dea-default-rtdb.firebaseio.com",
      projectId: "kwitter-d4dea",
      storageBucket: "kwitter-d4dea.appspot.com",
      messagingSenderId: "116236468260",
      appId: "1:116236468260:web:1efdcdec758bafbc3818b1",
      measurementId: "G-6BBXYH412P"
    };
    
     firebase.initializeApp(firebaseConfig);

     user_name = localStorage.getItem("user_name"); 
     document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
  
function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
         purpose : "adding room name"
      });

         localStorage.setItem("room_name", room_name);
         
         window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
      consolele.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
window.location = "kwitter.html";
}