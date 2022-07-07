const express = require('express');
const router = express.Router();
const { getExercise, getExercises, postExercise, updateExercise, deleteExercise } = require('../controllers/exerciseController');
const authorize = require("../_middleware/authorize");
const Role = require('../_helpers/role');

router.route('/')
        .get(authorize(), getExercises)
        .post(authorize(Role.Admin), postExercise);

router.route('/:id')
        .get(authorize(Role.Admin), getExercise)
        .delete(authorize(Role.Admin), deleteExercise)
        .put(authorize(Role.Admin), updateExercise);

module.exports = router;