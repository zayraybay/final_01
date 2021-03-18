firebase.auth().onAuthStateChanged(async function (user) {
    let db = firebase.firestore()

    if (user) {


        let questions = await db.collection('subjects').doc('subtraction').get()
        let questionsList = questions.data()

        // let questions = await fetch ('/.netlify/functions/getsubtraction')
        // let questionsList = await questions.json()
        console.log(questionsList)
        console.log(questionsList.first.question)
        let quizDisplay = document.querySelector('#quiz')


        //QUESTION 1
        // for (let i = 0; i < questionsList.length; i++){
        quizDisplay.insertAdjacentHTML('beforeend', `
    <div clas="w-full max-w-xl">
            <h1 class="font-bold text-5xl text-center text-purple-800">
                Subtraction Quiz
            </h1>
            <div id="first-question" class="bg-white p-12 rounded-lg shadow-lg w-full m-8">
                <p class="text-2xl font-bold">First Question: ${questionsList.first.question}</p>
                <label for="x" class="block mt-4 border border-gray-300 hover:bg-blue-200 rounded-lg py-2 px-6 text-lg" id="add-A">
                    <input type="answer" id="answerA" class="hidden" />
                    A. ${questionsList.first.answers[1]}
                </label>
                <label for="x" class="block mt-4 border border-gray-300 hover:bg-blue-200 rounded-lg py-2 px-6 text-lg" id="add-B">
                    <input type="answer" id="" class="hidden" />
                    B. ${questionsList.first.answers[2]}
                </label>
                <label for="x" class="block mt-4 border border-gray-300 hover:bg-blue-200 rounded-lg py-2 px-6 text-lg" id="add-C">
                    <input type="answer" id="" class="hidden" />
                    C. ${questionsList.first.answers[3]}
                </label>
                <label for="x" class="block mt-4 border border-gray-300 hover:bg-blue-200 rounded-lg py-2 px-6 text-lg" id="add-D">
                    <input type="answer" id="" class="hidden" />
                    D. ${questionsList.first.answers[4]}
                </label>
            </div>
        </div>`)
        //section stores users answers

        document.querySelector('#first-question #add-A').addEventListener('click', async function (event) {
            event.preventDefault()
            console.log(`add-A was clicked`)
            let correctAnswer = questionsList.first.answers[0]
            if (questionsList.first.answers[1] == correctAnswer) {
                document.querySelector("#first-question #add-A").insertAdjacentHTML('beforeend', `
              <div class="text-lg text-green-600 py-2">Correct!</div>`)
            } else {
                document.querySelector("#first-question #add-A").insertAdjacentHTML('beforeend', `
              <div class="text-lg text-red-600 py-2">Incorrect!</div>`)
            }
            await db.collection('answers').doc(`${user.uid} ${questionsList.first.question}`).set({
                answer: `B:${questionsList.first.answers[1]}`,
                question: `Q: ${questionsList.first.question}`,
                user: user.uid
            })
        }) //closes option A click

        document.querySelector('#first-question #add-B').addEventListener('click', async function (event) {
            event.preventDefault()
            console.log(`add-B was clicked`)
            let correctAnswer = questionsList.first.answers[0]
            if (questionsList.first.answers[2] == correctAnswer) {
                document.querySelector("#first-question #add-B").insertAdjacentHTML('beforeend', `
                <div class="text-lg text-green-600 py-2">Correct!</div>`)
            } else {
                document.querySelector("#first-question #add-B").insertAdjacentHTML('beforeend', `
                <div class="text-lg text-red-600 py-2">Incorrect!</div>`)
            }
            await db.collection('answers').doc(`${user.uid} ${questionsList.first.question}`).set({
                answer: `B:${questionsList.first.answers[2]}`,
                question: `Q: ${questionsList.first.question}`,
                user: user.uid
            })
        }) //closes option B click


        document.querySelector('#first-question #add-C').addEventListener('click', async function (event) {
            event.preventDefault()
            console.log(`add-C was clicked`)
            let correctAnswer = questionsList.first.answers[0]
            if (questionsList.first.answers[3] == correctAnswer) {
                document.querySelector("#first-question #add-C").insertAdjacentHTML('beforeend', `
                <div class="text-lg text-green-600 py-2">Correct!</div>`)
            } else {
                document.querySelector("#first-question #add-C").insertAdjacentHTML('beforeend', `
                <div class="text-lg text-red-600 py-2">Incorrect!</div>`)
            }
            await db.collection('answers').doc(`${user.uid} ${questionsList.first.question}`).set({
                answer: `C:${questionsList.first.answers[3]}`,
                question: `Q: ${questionsList.first.question}`,
                user: user.uid
            })
        }) //closes option C click

        document.querySelector('#first-question #add-D').addEventListener('click', async function (event) {
            event.preventDefault()
            console.log(`add-D was clicked`)
            let correctAnswer = questionsList.first.answers[0]
            if (questionsList.first.answers[4] == correctAnswer) {
                document.querySelector("#first-question #add-D").insertAdjacentHTML('beforeend', `
                  <div class="text-lg text-green-600 py-2">Correct!</div>`)
            } else {
                document.querySelector("#first-question #add-D").insertAdjacentHTML('beforeend', `
                  <div class="text-lg text-red-600 py-2">Incorrect!</div>`)
            }
            await db.collection('answers').doc(`${user.uid} ${questionsList.first.question}`).set({
                answer: `D:${questionsList.first.answers[4]}`,
                question: `Q: ${questionsList.first.question}`,
                user: user.uid
            })
        }) //closes option D click


        //QUESTION 2

        quizDisplay.insertAdjacentHTML('beforeend', `
            <div clas="w-full max-w-xl">
                    <div id="second-question" class="bg-white p-12 rounded-lg shadow-lg w-full m-8">
                        <p class="text-2xl font-bold">Second Question: ${questionsList.second.question}</p>
                        <label for="x" class="block mt-4 border border-gray-300 hover:bg-blue-200 rounded-lg py-2 px-6 text-lg" id="add-A">
                            <input type="answer" id="answerA" class="hidden" />
                            A. ${questionsList.second.answers[1]}
                        </label>
                        <label for="x" class="block mt-4 border border-gray-300 hover:bg-blue-200 rounded-lg py-2 px-6 text-lg" id="add-B">
                            <input type="answer" id="" class="hidden" />
                            B. ${questionsList.second.answers[2]}
                        </label>
                        <label for="x" class="block mt-4 border border-gray-300 hover:bg-blue-200 rounded-lg py-2 px-6 text-lg" id="add-C">
                            <input type="answer" id="" class="hidden" />
                            C. ${questionsList.second.answers[3]}
                        </label>
                        <label for="x" class="block mt-4 border border-gray-300 hover:bg-blue-200 rounded-lg py-2 px-6 text-lg" id="add-D">
                            <input type="answer" id="" class="hidden" />
                            D. ${questionsList.second.answers[4]}
                        </label>
                    </div>
                </div>`)
        //section stores users answers

        document.querySelector('#second-question #add-A').addEventListener('click', async function (event) {
            event.preventDefault()
            console.log(`add-A was clicked`)
            let correctAnswer = questionsList.second.answers[0]
            if (questionsList.second.answers[1] == correctAnswer) {
                document.querySelector("#second-question #add-A").insertAdjacentHTML('beforeend', `
                      <div class="text-lg text-green-600 py-2">Correct!</div>`)
            } else {
                document.querySelector("#second-question #add-A").insertAdjacentHTML('beforeend', `
                      <div class="text-lg text-red-600 py-2">Incorrect!</div>`)
            }
            await db.collection('answers').doc(`${user.uid} ${questionsList.second.question}`).set({
                answer: `B:${questionsList.second.answers[1]}`,
                question: `Q: ${questionsList.second.question}`,
                user: user.uid
            })
        }) //closes option A click

        document.querySelector('#second-question #add-B').addEventListener('click', async function (event) {
            event.preventDefault()
            console.log(`add-B was clicked`)
            let correctAnswer = questionsList.second.answers[0]
            if (questionsList.second.answers[2] == correctAnswer) {
                document.querySelector("#second-question #add-B").insertAdjacentHTML('beforeend', `
                        <div class="text-lg text-green-600 py-2">Correct!</div>`)
            } else {
                document.querySelector("#second-question #add-B").insertAdjacentHTML('beforeend', `
                        <div class="text-lg text-red-600 py-2">Incorrect!</div>`)
            }
            await db.collection('answers').doc(`${user.uid} ${questionsList.second.question}`).set({
                answer: `B:${questionsList.second.answers[2]}`,
                question: `Q: ${questionsList.second.question}`,
                user: user.uid
            })
        }) //closes option B click


        document.querySelector('#second-question #add-C').addEventListener('click', async function (event) {
            event.preventDefault()
            console.log(`add-C was clicked`)
            let correctAnswer = questionsList.second.answers[0]
            if (questionsList.second.answers[3] == correctAnswer) {
                document.querySelector("#second-question #add-C").insertAdjacentHTML('beforeend', `
                        <div class="text-lg text-green-600 py-2">Correct!</div>`)
            } else {
                document.querySelector("#second-question #add-C").insertAdjacentHTML('beforeend', `
                        <div class="text-lg text-red-600 py-2">Incorrect!</div>`)
            }
            await db.collection('answers').doc(`${user.uid} ${questionsList.second.question}`).set({
                answer: `C:${questionsList.second.answers[3]}`,
                question: `Q: ${questionsList.second.question}`,
                user: user.uid
            })
        }) //closes option C click

        document.querySelector('#second-question #add-D').addEventListener('click', async function (event) {
            event.preventDefault()
            console.log(`add-D was clicked`)
            let correctAnswer = questionsList.second.answers[0]
            if (questionsList.second.answers[4] == correctAnswer) {
                document.querySelector("#second-question #add-D").insertAdjacentHTML('beforeend', `
                          <div class="text-lg text-green-600 py-2">Correct!</div>`)
            } else {
                document.querySelector("#second-question #add-D").insertAdjacentHTML('beforeend', `
                          <div class="text-lg text-red-600 py-2">Incorrect!</div>`)
            }
            await db.collection('answers').doc(`${user.uid} ${questionsList.second.question}`).set({
                answer: `D:${questionsList.second.answers[4]}`,
                question: `Q: ${questionsList.second.question}`,
                user: user.uid
            })
        }) //closes option D click


        //QUESTION 3

        quizDisplay.insertAdjacentHTML('beforeend', `
            <div clas="w-full max-w-xl">
                    <div id="third-question" class="bg-white p-12 rounded-lg shadow-lg w-full m-8">
                        <p class="text-2xl font-bold">Third Question: ${questionsList.third.question}</p>
                        <label for="x" class="block mt-4 border border-gray-300 hover:bg-blue-200 rounded-lg py-2 px-6 text-lg" id="add-A">
                            <input type="answer" id="answerA" class="hidden" />
                            A. ${questionsList.third.answers[1]}
                        </label>
                        <label for="x" class="block mt-4 border border-gray-300 hover:bg-blue-200 rounded-lg py-2 px-6 text-lg" id="add-B">
                            <input type="answer" id="" class="hidden" />
                            B. ${questionsList.third.answers[2]}
                        </label>
                        <label for="x" class="block mt-4 border border-gray-300 hover:bg-blue-200 rounded-lg py-2 px-6 text-lg" id="add-C">
                            <input type="answer" id="" class="hidden" />
                            C. ${questionsList.third.answers[3]}
                        </label>
                        <label for="x" class="block mt-4 border border-gray-300 hover:bg-blue-200 rounded-lg py-2 px-6 text-lg" id="add-D">
                            <input type="answer" id="" class="hidden" />
                            D. ${questionsList.third.answers[4]}
                        </label>
                    </div>
                </div>`)
        //section stores users answers

        document.querySelector('#third-question #add-A').addEventListener('click', async function (event) {
            event.preventDefault()
            console.log(`add-A was clicked`)
            let correctAnswer = questionsList.third.answers[0]
            if (questionsList.third.answers[1] == correctAnswer) {
                document.querySelector("#third-question #add-A").insertAdjacentHTML('beforeend', `
                      <div class="text-lg text-green-600 py-2">Correct!</div>`)
            } else {
                document.querySelector("#third-question #add-A").insertAdjacentHTML('beforeend', `
                      <div class="text-lg text-red-600 py-2">Incorrect!</div>`)
            }
            await db.collection('answers').doc(`${user.uid} ${questionsList.third.question}`).set({
                answer: `B:${questionsList.third.answers[1]}`,
                question: `Q: ${questionsList.third.question}`,
                user: user.uid
            })
        }) //closes option A click

        document.querySelector('#third-question #add-B').addEventListener('click', async function (event) {
            event.preventDefault()
            console.log(`add-B was clicked`)
            let correctAnswer = questionsList.third.answers[0]
            if (questionsList.third.answers[2] == correctAnswer) {
                document.querySelector("#third-question #add-B").insertAdjacentHTML('beforeend', `
                        <div class="text-lg text-green-600 py-2">Correct!</div>`)
            } else {
                document.querySelector("#third-question #add-B").insertAdjacentHTML('beforeend', `
                        <div class="text-lg text-red-600 py-2">Incorrect!</div>`)
            }
            await db.collection('answers').doc(`${user.uid} ${questionsList.third.question}`).set({
                answer: `B:${questionsList.third.answers[2]}`,
                question: `Q: ${questionsList.third.question}`,
                user: user.uid
            })
        }) //closes option B click


        document.querySelector('#third-question #add-C').addEventListener('click', async function (event) {
            event.preventDefault()
            console.log(`add-C was clicked`)
            let correctAnswer = questionsList.third.answers[0]
            if (questionsList.third.answers[3] == correctAnswer) {
                document.querySelector("#third-question #add-C").insertAdjacentHTML('beforeend', `
                        <div class="text-lg text-green-600 py-2">Correct!</div>`)
            } else {
                document.querySelector("#third-question #add-C").insertAdjacentHTML('beforeend', `
                        <div class="text-lg text-red-600 py-2">Incorrect!</div>`)
            }
            await db.collection('answers').doc(`${user.uid} ${questionsList.third.question}`).set({
                answer: `C:${questionsList.third.answers[3]}`,
                question: `Q: ${questionsList.third.question}`,
                user: user.uid
            })
        }) //closes option C click

        document.querySelector('#third-question #add-D').addEventListener('click', async function (event) {
            event.preventDefault()
            console.log(`add-D was clicked`)
            let correctAnswer = questionsList.third.answers[0]
            if (questionsList.third.answers[4] == correctAnswer) {
                document.querySelector("#third-question #add-D").insertAdjacentHTML('beforeend', `
                          <div class="text-lg text-green-600 py-2">Correct!</div>`)
            } else {
                document.querySelector("#third-question #add-D").insertAdjacentHTML('beforeend', `
                          <div class="text-lg text-red-600 py-2">Incorrect!</div>`)
            }
            await db.collection('answers').doc(`${user.uid} ${questionsList.third.question}`).set({
                answer: `D:${questionsList.third.answers[4]}`,
                question: `Q: ${questionsList.third.question}`,
                user: user.uid
            })
        }) //closes option D click



        // }

    } //closes user signed in if statement 
    // Initializes FirebaseUI Auth
    let ui = new firebaseui.auth.AuthUI(firebase.auth())
})
