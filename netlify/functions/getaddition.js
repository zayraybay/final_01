let firebase = require('./firebase')

exports.handler = async function(event) {
  
    let db =  firebase.firestore()
    
    let querySnapshot = await db.collection('subjects').doc('addition')
                                .get

    let addition = querySnapshot.data
    
    let additionData = {
        question: addition.first.question,
        answerA: addition.first.answers[1],
        answerB: addition.first.answers[2],
        answerC: addition.first.answers[3],
        answerD: addition.first.answers[4],

        question: addition.second.question,
        answerA: addition.second.answers[1],
        answerB: addition.second.answers[2],
        answerC: addition.second.answers[3],
        answerD: addition.second.answers[4],

        question: addition.third.question,
        answerA: addition.third.answers[1],
        answerB: addition.third.answers[2],
        answerC: addition.third.answers[3],
        answerD: addition.third.answers[4],
    }
  
    return {
    statusCode: 200,
    body: JSON.stringify(additionData)
  }
}