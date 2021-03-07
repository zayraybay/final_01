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
  <div class="text-white-500 bold">Signed in as ${currentUser}</div>
  <a href="#" class="sign-out text-purple-400 underline">Sign Out</a>
  `
  document.querySelector('.sign-out').addEventListener('click', function(event){
      event.preventDefault()
      firebase.auth().signOut()
      document.location.href= "index.html"

  }) //closes sign-out event listener

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
