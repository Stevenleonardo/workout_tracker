const db = require("../model");
const router = require("express").Router();

//gets all workouts
router.get("/workouts", (req, res) => {
});
//gets the first 7 workouts
router.get("/workouts/range", (req, res) => {
});
//creates a new workout
router.post("/workouts", (req, res) => {
});
//updates a workout
router.put("/workouts/:id", (req, res) => {
});

module.exports = router;