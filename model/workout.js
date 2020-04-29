const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now()
  },
  exercises: [{
    type: {
        type: String
      },
    
      name: {
        type: String
      },
    
      weight: {
        type: Number
      },
    
      sets: {
        type: Number
      },
    
      reps: {
        type: Number
      },
    
      duration: {
        type: Number
      },
      distance: {
        type: Number
      }
  }]
})
const Workouts = mongoose.model("Workouts", WorkoutSchema);

module.exports = Workouts;