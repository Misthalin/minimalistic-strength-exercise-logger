const asyncHandler = require('express-async-handler');
const Exercise = require('../models/exerciseModel');

// @desc    Get exercises
// @route   GET /api/exercises
// @access  Private
const getExercises = asyncHandler(async (req, res) => {
    const currentUser = req.user.id;
    const exercises = await Exercise.find({_creator: currentUser});

    res.status(200).json(exercises);
});

// @desc    Post exercise
// @route   POST /api/exercises
// @access  Private
const postExercise = asyncHandler(async (req, res) => {
    const { typeOfExercise } = req.body;
    const currentUser = req.user.id;

    if( !typeOfExercise || !currentUser ) {
        res.status(400)
        throw new Error('Please add all fields')
    };

    const exercise = await Exercise.create({ typeOfExercise, _creator: currentUser });

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

    const updatedExercise = await Exercise.findByIdAndUpdate(req.params.id, req.body, {new: true});

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

const postSession = asyncHandler(async (req, res) => {
    console.log(req.body)
    // send userid, exerciseid, comment(optionally), sets(number, weight, repetitions)
    // add array of session sets
    // push to exercise object id
    // only post if _creator matches user id


    /*const currentUser = req.user.id;

    if( !typeOfExercise || !currentUser ) {
        res.status(400)
        throw new Error('Please add all fields')
    };

    const exercise = await Exercise.create({ typeOfExercise, _creator: currentUser });

    res.status(200).json(exercise);*/
})

module.exports = { getExercises, postExercise, updateExercise, deleteExercise, postSession };