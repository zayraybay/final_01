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

  //Selects where the topic list is and populates the list
  let topicListClass = document.querySelector('#topiclist')
  let topicList = ["Addition", "Subtraction", "Multiplication"]
  
  for(let i =0; i<topicList.length; i++)
    {
        topicListClass.insertAdjacentHTML("beforeend",`<div class="w-1/5 p-4 topic-${topicList[i]}">
        <a href="${topicList[i]}.html" class="topic-button block text-center text-white bg-green-500 mt-4 px-4 py-2 rounded">${topicList[i]}</a>
        </div>`)
        document.querySelector(`.topic-${topicList[i]}`).addEventListener('click', async function(event){
          event.preventDefault()
          console.log(`${topicList[i]} was clicked` )
          document.location.href = `${topicList[i]}.html`
      })
    }

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
