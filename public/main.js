
document.addEventListener("DOMContentLoaded", event => {

  const app = firebase.app();
  console.log(app)
})


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
  } else {
    // No user is signed in.
  }
});


function loginClick(){

var userEmail = document.getElementById("email_field").value
var userPass = document.getElementById("password_field").value

firebase.auth().signInWithEmailAndPassword(userEmail, userPass).then(result => {
  console.log("success")
  var firebaseRef = firebase.database() .ref();
  firebaseRef.child("Text").set("Some Value");

})
.catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;

  window.alert("Error : " + errorMessage)
  // ...
});


}

function registerClick(){
  var userEmail = document.getElementById("email_field").value
  var userPass = document.getElementById("password_field").value
  var userPhone = document.getElementById("phone_field").value

  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  window.alert("Error: " + errorMessage);
});

}
