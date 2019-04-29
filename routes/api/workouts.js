const express = require('express');
const router = express.Router();

// Workout model
const Workout = require('../../models/Workout');

// @route GET api/workouts
// @desc  Get all workouts
// @access Public
router.get('/', (req, res) => {
  Workout.find()
    .sort({ date: -1})
    .then(workouts => res.json(workouts));
});

// @route POST api/workouts
// @desc  Create a workout
// @access Public
router.post('/', (req, res) => {
  const newWorkout = new Workout({
    workout: req.body.workout,
    bodygroup: req.body.bodygroup,
    reps: req.body.reps
  });

  newWorkout.save().then(workouts => res.json(workouts).catch(err));
});

// @route DELETE api/workouts/:id
// @desc  Delete an workout
// @access Public
router.delete('/:id', (req, res) => {
  Workout.findById(req.params.id)
    .then(workout => workout.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});


module.exports = router;