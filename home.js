
var firebaseConfig = {
  apiKey: "AIzaSyAgsF-o8JC6aOgeZGsbXbe2bNObTYtJwGI",
  authDomain: "secret-database-9b287.firebaseapp.com",
  databaseURL: "https://secret-database-9b287-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "secret-database-9b287",
  storageBucket: "secret-database-9b287.appspot.com",
  messagingSenderId: "486454168479",
  appId: "1:486454168479:web:26ee367d0a693d2969cbaa",
  measurementId: "G-CC5KDDT6Q7"
};

firebase.initializeApp(firebaseConfig);
var auth=firebase.auth();
function login(){
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in

    var user = userCredential.user;
    window.location="secret_database.html";
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });

}

