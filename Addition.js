<<<<<<< HEAD
let db = firebase.firestore()
    
let questions = db.collection('subjects').doc('addition').get()
console.log(questions)



// Initializes FirebaseUI Auth
let ui = new firebaseui.auth.AuthUI(firebase.auth())
=======
firebase.auth().onAuthStateChanged(async function(user) {
  
  let db = firebase.firestore()

  if (user) {
    // Signed in
    console.log('user signed in')

    db.collection('users').doc(user.uid).set({
      email: user.email,
      name: user.displayName
  }) //closes db user auth

  let currentUser = user.displayName
  document.querySelector('.sign-in-or-sign-out').innerHTML = `
  <div class="text-purple-500 bold py-2">Signed in as ${currentUser}</div>
  <a href="#" class="sign-out text-white bg-purple-500 hover:bg-purple-400 focus:shadow-outline rounded mt-2 px-2 py-1 underline">Sign Out</a>
  `
  document.querySelector('.sign-out').addEventListener('click', function(event){
    event.preventDefault()
    console.log('sign out clicked')
    firebase.auth().signOut()
    document.location.href= "index.html"

  }) //closes sign-out event listener

  let subject = await db.collection('subject').doc(`addition`).get()
  let response =  subject.docs
  console.log(response)

  } else {
    // Signed out
    console.log('user signed out')

    // Initializes FirebaseUI Auth
    let ui = new firebaseui.auth.AuthUI(firebase.auth())

    // FirebaseUI configuration
    let authUIConfig = {
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      signInSuccessUrl: 'index.html'
    }

    // Starts FirebaseUI Auth
    ui.start('.sign-in-or-sign-out', authUIConfig)
  }
})
>>>>>>> 379839df34d6007f86072316181ccf1675a48b72
