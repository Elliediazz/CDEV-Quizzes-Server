const mongoose = require('mongoose')

const QuizSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String },
    questions: [{
        questionText: { type: String, required: true },
        answer1: { type: String, required: true },
        answer2: { type: String, required: true },
        answer3: { type: String, required: true },
        answer4: { type: String, required: true },
        correctAnswer: { type: Number, required: true }
    }]
})

module.exports = mongoose.model('Quiz', QuizSchema)