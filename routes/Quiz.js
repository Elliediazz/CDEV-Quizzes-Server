const router = require('express').Router()
const { getAllQuizzes, getQuizById, addQuiz } = require('../controllers/Quiz')

router.get('/', (req, res) => {
    res.send("Quiz Home Page")
})

router.get('/all', getAllQuizzes)
router.get('/:id', getQuizById)
router.post('/', addQuiz)

module.exports = router