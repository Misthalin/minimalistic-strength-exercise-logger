const express = require('express');
const router = express.Router();
const { getExercises, postExercise, updateExercise, deleteExercise, postSession } = require('../controllers/exerciseController');
const authorize = require("../_middleware/authorize");

router.route('/')
        .get(authorize(), getExercises)
        .post(authorize(), postExercise)


/*router.route('/:id')
        .delete(authorize(), deleteExercise)
        .put(authorize(), updateExercise);*/

router.route('/session')
        .post(authorize(), postSession);

module.exports = router;