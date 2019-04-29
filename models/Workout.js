const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creat Schema
const WorkoutSchema = new Schema({
  workout: {
    type: String,
    required: true
  },
  bodygroup: {
    type: String,
    required: true
  },
  reps: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Workout = mongoose.model('workout', WorkoutSchema);