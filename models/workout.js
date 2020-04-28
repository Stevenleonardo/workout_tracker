const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: [true, 'Name is required.']
  },
  exercises: [
    {
      type: Schema.Types.ObjectId,
      ref: "Exercises"
    }
  ]
});

const Workouts = mongoose.model("Workouts", WorkoutSchema);

module.exports = Workouts;