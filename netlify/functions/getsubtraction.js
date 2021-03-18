let firebase = require('./firebase')

exports.handler = async function(event) {
  
    let db =  firebase.firestore()
    
    let querySnapshot = await db.collection('subjects').doc('subtraction')
                                .get

    let subtraction = querySnapshot.data()
    
    let subtractionData = {
        question: subtraction.first.question,
        answerA: subtraction.first.answers[1],
        answerB: subtraction.first.answers[2],
        answerC: subtraction.first.answers[3],
        answerD: subtraction.first.answers[4],

        question: subtraction.second.question,
        answerA: subtraction.second.answers[1],
        answerB: subtraction.second.answers[2],
        answerC: subtraction.second.answers[3],
        answerD: subtraction.second.answers[4],

        question: subtraction.third.question,
        answerA: subtraction.third.answers[1],
        answerB: subtraction.third.answers[2],
        answerC: subtraction.third.answers[3],
        answerD: subtraction.third.answers[4],
    }
  
    return {
    statusCode: 200,
    body: JSON.stringify(subtractionData)
  }
}