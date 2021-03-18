let db = firebase.firestore()
      
let questions = db.collection('subjects').doc('subtraction').get()
console.log(questions)



// Initializes FirebaseUI Auth
let ui = new firebaseui.auth.AuthUI(firebase.auth())