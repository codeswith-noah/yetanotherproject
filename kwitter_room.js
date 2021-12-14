const firebaseConfig = {
    apiKey: "AIzaSyArG7ezIXbwuLKJl0VL36bHJxEhkBdqHQo",
    authDomain: "test0-d7e37.firebaseapp.com",
    databaseURL: "https://test0-d7e37-default-rtdb.firebaseio.com",
    projectId: "test0-d7e37",
    storageBucket: "test0-d7e37.appspot.com",
    messagingSenderId: "129190349304",
    appId: "1:129190349304:web:477d7b221ba4d80553ee0d"
  };

  firebase.initializeApp(firebaseConfig);

  function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
    purpose : "adding room"
    });

}