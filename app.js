// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyD_hKAG3mvTSjmkoEErG4YZq2iwkQgHgHs",
    authDomain: "proyectousuarios-3ba15.firebaseapp.com",
    projectId: "proyectousuarios-3ba15"
  });
  
  var db = firebase.firestore();
//agregar documentos
function guardar(){
    var name=document.getElementById('name').value;
    var surname=document.getElementById('surname').value;
    var birthday=document.getElementById('birthday').value;
    var age=document.getElementById('age').value;
    var place_born=document.getElementById('place_born').value;


    db.collection("users").add({
        first: name,
        last: surname,
        born: birthday,
        age:'',
        place_born : '',
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        document.getElementById('name').value='';
        document.getElementById('surname').value='';
        document.getElementById('birthday').value='';
        document.getElementById('age').value='';
        document.getElementById('place_born').value='';
    })
        .catch(function(error) {
        console.error("Error adding document: ", error);
    })
}
 