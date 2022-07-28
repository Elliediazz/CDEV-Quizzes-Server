const Quiz = require('../models/Quiz')

async function getAllQuizzes(req, res){
    try {
        const quizzes = await Quiz.find()
        res.send(quizzes)
    } catch (error) {
        console.log(error)
        res.status(500).json({'message': 'error getting all quizzes'})
    }
}

async function getQuizById(req, res){
    try {
        const { id } = req.params
        const quiz = await Quiz.findById(id)
        res.send(quiz)
    } catch (error) {
        console.log(error)
        res.status(500).json({'message': 'error getting quiz by ID'})
    }
}

async function addQuiz(req, res){
    try {
        const { title, auther, questions, questionText, answer1, answer2, answer3, answer4, correctAnswer } = req.body
        const quiz = await new Quiz({
            ...req.body
        }).save()

        res.status(201).json({ 'message': 'Quiz successfully created'})
    } catch (error) {
        console.log(error)
        res.status(500).json({'message': 'error creating quiz'})
    }
}

async function deleteQuiz(req, res){
    try {
        const { id } = req.params
        const quiz = await Quiz.findByIdAndDelete(id)
        res.json({"message": `Quiz id ${id} had been deleted.`})
    } catch (error) {
        console.log(error)
        res.status(500).json({'message': 'error deleting quiz'})
    }
}

//Get edit page
async function getEdit(req, res){
    try {
        const { id } = req.params
        const quiz = await Quiz.findBy(id)
        res.render('editQuiz', {
             quiz
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({'message': 'error retrieving Edit Page'})
    }
}

//Update quiz
async function updateQuiz(req, res){
    try {
        const { id } = req.params
        const quiz = await Quiz.findByIdAndUpdate(id, req.body)
        res.redirect(`/quiz/${id}`)
    } catch (error) {
        console.log(error)
        res.send('error updating quiz')
    }
}

module.exports = {
    getAllQuizzes,
    getQuizById,
    addQuiz,
    deleteQuiz,
    getEdit,
    updateQuiz
}