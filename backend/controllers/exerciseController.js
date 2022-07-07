const asyncHandler = require('express-async-handler');
const Exercise = require('../models/exerciseModel');

// @desc    Get exercises
// @route   GET /api/exercises
// @access  Private
const getExercises = asyncHandler(async (req, res) => {
    const exercises = await Exercise.find();

    res.status(200).json(exercises);
});

// @desc    Get exercise
// @route   GET /api/exercises/:id
// @access  Private
const getExercise = asyncHandler(async (req, res) => {
    const exercise = await Exercise.findById(req.params.id);

    if(!exercise) {
        res.status(400)
        throw new Error('Exercise not found')
    };

    res.status(200).json(exercise);
});

// @desc    Post exercise
// @route   POST /api/exercises
// @access  Private
const postExercise = asyncHandler(async (req, res) => {
    const { userId, exerciseName } = req.body;
    const sessionHistory = [];
    if( !userId || !exerciseName ) {
        res.status(400)
        throw new Error('Please add all fields')
    };

    const exercise = await Exercise.create({ userId, exerciseName, sessionHistory });

    res.status(200).json(exercise);
});

// @desc    Update exercise
// @route   PUT /api/exercises/:id
// @access  Private
const updateExercise = asyncHandler(async (req, res) => {
    const exercise = await Exercise.findById(req.params.id);

    if(!exercise) {
        res.status(400)
        throw new Error('Exercise not found')
    };

    const updatedExercose = await Exercise.findByIdAndUpdate(req.params.id, req.body, {new: true});

    res.status(200).json(updatedExercise);
});

// @desc    Delete exercise
// @route   DELETE /api/exercises/:id
// @access  Private
const deleteExercise = asyncHandler(async (req, res) => {
    const exercise = await Exercise.findById(req.params.id);
    if(!exercise) {
        res.status(400)
        throw new Error ('Exercise not found')
    };

    await exercise.remove();

    res.status(200).json({ id: req.params.id });
});

module.exports = { getExercise, getExercises, postExercise, updateExercise, deleteExercise };