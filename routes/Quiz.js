const router = require('express').Router()
const { getAllQuizzes, getQuizById, addQuiz, deleteQuiz } = require('../controllers/Quiz')

router.get('/', (req, res) => {
    res.send("Quiz Home Page")
})

router.get('/all', getAllQuizzes)
router.get('/:id', getQuizById)
router.post('/', addQuiz)
router.delete('/:id', deleteQuiz)

//TODO update one quiz

module.exports = router