firebase.auth().onAuthStateChanged(async function(user) {
let db = firebase.firestore()
      
let questions = await db.collection('subjects').doc('multiplication').get()
let questionsList = questions.data()
console.log(questionsList)
console.log(questionsList.first.question)
let quizDisplay = document.querySelector('#quiz')

// for (let i = 0; i < questionsList.length; i++){
    quizDisplay.insertAdjacentHTML('beforeend', `
    <div clas="w-full max-w-xl">
            <h1 class="font-bold text-5xl text-center text-purple-800">
                Multiplication Quiz
            </h1>
            <div class="bg-white p-12 rounded-lg shadow-lg w-full m-8">
                <p class="text-2xl font-bold">First Question: ${questionsList.first.question}</p>
                <label for="x" class="block mt-4 border border-gray-300 hover:bg-blue-200 rounded-lg py-2 px-6 text-lg" id="add-A">
                    <input type="answer" id="answerA" class="hidden" />
                    A. ${questionsList.first.answers[0]}
                </label>
                <label for="x" class="block mt-4 border border-gray-300 hover:bg-blue-200 rounded-lg py-2 px-6 text-lg" id="add-B">
                    <input type="answer" id="" class="hidden" />
                    B. ${questionsList.first.answers[1]}
                </label>
                <label for="x" class="block mt-4 border border-gray-300 hover:bg-blue-200 rounded-lg py-2 px-6 text-lg" id="add-C">
                    <input type="answer" id="" class="hidden" />
                    C. ${questionsList.first.answers[2]}
                </label>
                <label for="x" class="block mt-4 border border-gray-300 hover:bg-blue-200 rounded-lg py-2 px-6 text-lg" id="add-D">
                    <input type="answer" id="" class="hidden" />
                    D. ${questionsList.first.answers[3]}
                </label>
            </div>
        </div>`)
        //section stores users answers
          document.querySelector('#add-A').addEventListener('click', async function(event){
          event.preventDefault()
          console.log(`add-A was clicked` )
          let correctAnswer = -5
          if (questionsList.first.answers[0] == correctAnswer){
              document.querySelector("#add-A").insertAdjacentHTML('beforeend', `
              <div class="text-lg text-green-600 py-2">Correct!</div>`)
          } else {
              document.querySelector("#add-A").insertAdjacentHTML('beforeend', `
              <div class="text-lg text-red-600 py-2">Incorrect!</div>`)
          }
          await db.collection('answers').doc(`${user.uid} ${questionsList.first.question}`).set({
            answer:  `A:${questionsList.first.answers[0]}`
          })
        })
  // }

// Initializes FirebaseUI Auth
let ui = new firebaseui.auth.AuthUI(firebase.auth())
})