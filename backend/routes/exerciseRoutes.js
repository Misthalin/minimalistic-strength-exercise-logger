const express = require('express');
const router = express.Router();
const { getExercise, getExercises, postExercise, updateExercise, deleteExercise } = require('../controllers/exerciseController');
const authorize = require("../_middleware/authorize");
const Role = require('../_helpers/role');

router.route('/')
        .get(authorize(), getExercises)
        .post(authorize(), postExercise);

router.route('/:id')
        .get(authorize(), getExercise)
        .delete(authorize(), deleteExercise)
        .put(authorize(), updateExercise);

module.exports = router;