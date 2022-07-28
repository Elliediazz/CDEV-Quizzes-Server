const router = require('express').Router()
const { getAllQuizzes, getQuizById, addQuiz, deleteQuiz, getEdit, updateQuiz } = require('../controllers/Quiz')

router.get('/', (req, res) => {
    res.send("Quiz Home Page")
})

router.get('/all', getAllQuizzes)
router.get('/:id', getQuizById)
router.post('/', addQuiz)
router.delete('/:id', deleteQuiz)

//TODO update one quiz
router.get('/:id/edit', getEdit )
router.put('/:id', updateQuiz )

module.exports = router