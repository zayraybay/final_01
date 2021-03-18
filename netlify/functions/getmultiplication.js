let firebase = require('./firebase')

exports.handler = async function(event) {
  
    let db =  firebase.firestore()
    
    let querySnapshot = await db.collection('subjects').doc('multiplication')
                                .get

    let multiplication = querySnapshot.data()
    
    let multiplicationData = {
        question: multiplication.first.question,
        answerA: multiplication.first.answers[1],
        answerB: multiplication.first.answers[2],
        answerC: multiplication.first.answers[3],
        answerD: multiplication.first.answers[4],

        question: multiplication.second.question,
        answerA: multiplication.second.answers[1],
        answerB: multiplication.second.answers[2],
        answerC: multiplication.second.answers[3],
        answerD: multiplication.second.answers[4],

        question: multiplication.third.question,
        answerA: multiplication.third.answers[1],
        answerB: multiplication.third.answers[2],
        answerC: multiplication.third.answers[3],
        answerD: multiplication.third.answers[4],
    }
  
    return {
    statusCode: 200,
    body: JSON.stringify(multiplicationData)
  }
}