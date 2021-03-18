firebase.auth().onAuthStateChanged(async function(user) {

if(user){
let db = firebase.firestore()
      
let questions = await db.collection('subjects').doc('subtraction').get()
let questionsList = questions.data()
let firstQuestion = questionsList.first
console.log(firstQuestion)
let secondQuestion = questionsList.second
console.log(secondQuestion)
let thirdQuestion = questionsList.third
console.log(thirdQuestion)

let quizDisplay = document.querySelector('#quiz')
  // for (let i = 0; i < questionsList.length; i++){
    quizDisplay.insertAdjacentHTML('beforeend', `
    <div clas="w-full max-w-xl">
            <h1 class="font-bold text-5xl text-center text-purple-800">
                Subtraction Quiz
            </h1>
            <div class="bg-white p-12 rounded-lg shadow-lg w-full m-8">
                <p class="text-2xl font-bold">First Question: ${questionsList.first.question}</p>
                <label for="x" class="block mt-4 border border-gray-300 rounded-lg py-2 px-6 text-lg" id="sub-A">
                    <input type="answer" id="" class="hidden" />
                    A. ${questionsList.first.answers[0]}
                </label>
                <label for="x" class="block mt-4 border border-gray-300 rounded-lg py-2 px-6 text-lg" id="sub-B">
                    <input type="answer" id="" class="hidden" />
                    B. ${questionsList.first.answers[1]}
                </label>
                <label for="x" class="block mt-4 border border-gray-300 rounded-lg py-2 px-6 text-lg" id="sub-C">
                    <input type="answer" id="" class="hidden" />
                    C. ${questionsList.first.answers[2]}
                </label>
                <label for="x" class="block mt-4 border border-gray-300 rounded-lg py-2 px-6 text-lg" id="sub-D">
                    <input type="answer" id="" class="hidden" />
                    D. ${questionsList.first.answers[3]}
                </label>
            </div>
        </div>`)

let choiceA = document.querySelector("#sub-A")
let choiceB = document.querySelector("#sub-B")
let choiceC = document.querySelector("#sub-C")
let choiceD = document.querySelector("#sub-D")

choiceA.addEventListener("click",async function(event){
    choiceA.classList.add("opacity-20")
    let docRef = await db.collection('userSubtractionAnswers').add({
        userId: user.uid,    
        answerPicked: "A"})
})

choiceB.addEventListener("click",async function(event){
    choiceB.classList.add("opacity-20")
    let docRef = await db.collection('userSubtractionAnswers').add({
        userId: user.uid,    
        answerPicked: "B"})
})

choiceC.addEventListener("click",async function(event){
    choiceC.classList.add("opacity-20")
    let docRef = await db.collection('userSubtractionAnswers').add({
        userId: user.uid,    
        answerPicked: "C"})
})

choiceD.addEventListener("click",async function(event){
    choiceD.classList.add("opacity-20")
    let docRef = await db.collection('userSubtractionAnswers').add({
        userId: user.uid,    
        answerPicked: "D"})
})


// Initializes FirebaseUI Auth
let ui = new firebaseui.auth.AuthUI(firebase.auth())
}
})