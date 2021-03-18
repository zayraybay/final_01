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