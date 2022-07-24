const mongoose = require('mongoose')

const QuizSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String },
    questions: [{
        questionText: { type: String, required: true },
        answer1: {
            text: { type: String, required: true },
            isCorrect: { type: Boolean, required: true }
        },
        answer2: {
            text: { type: String, required: true },
            isCorrect: { type: Boolean, required: true }
        },
        answer3: {
            text: { type: String, required: true },
            isCorrect: { type: Boolean, required: true }
        },
        answer4: {
            text: { type: String, required: true },
            isCorrect: { type: Boolean, required: true }
        }
    }]
})

module.exports = mongoose.model('Quiz', QuizSchema)