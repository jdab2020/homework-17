const db = require("../models")

module.exports = function (app) {
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
            .then(results => {
                res.json(results);
            })
            .catch(err => {
                res.json(err);
            })
    })

    app.put("/api/workouts/:id", (req, res) => {

    })

    app.post("/api/workouts", ({body}, res) => {
        db.Workout.create({body})
            .then( results => {
                res.json(results);
            })
            .catch(err => {
                res.json(err);
            })
    })

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
            .then(results => {
                res.json(results);
            })
            .catch(err => {
                res.json(err);
            })
    })
}