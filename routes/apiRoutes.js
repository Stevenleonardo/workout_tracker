const db = require("../model");
const router = require("express").Router();

//gets all workouts
router.get("/workouts", (req, res) => {
    db.Workouts.find({}, (err, data)=>{
        if (err) throw err;
        res.json(data);
    })
});
//gets the first 7 workouts
router.get("/workouts/range", (req, res) => {
    db.Workouts.find({}, (err, data)=>{
        if (err) throw err;
        res.json(data);
    })
});
//creates a new workout
router.post("/workouts", ({body}, res) => {
    db.Workouts.create(body, (err, data)=>{
        if (err) throw err;
        res.json(data);
    })
});
//updates a workout
router.put("/workouts/:id", (req, res) => {
    db.Workouts.findByIdAndUpdate(req.params.id, {$push:{exercises:req.body}}, (err,data)=>{
        if (err) throw err;
        res.json(data);
    })
});

module.exports = router;