const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");

// GET all workouts
const getAllWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({ createdAt: -1 }); // descending the data by created date
    res.status(200).json(workouts);
};

// GET a single workout
const getSingleWorkout = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "ID is not valid" });
    }

    console.log("params{}:", req.params);
    const workout = await Workout.findById(id);

    if (!workout) {
        return res.status(400).json({ error: "No such workout" });
    }

    res.status(200).json(workout);
};

// Create a workout
const createWorkout = async (req, res) => {
    const { title, reps, load } = req.body;

    // add doc to db
    try {
        const workout = await Workout.create({ title, reps, load });
        res.status(201).json(workout);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a workout

// Update a workout

module.exports = { getAllWorkouts, getSingleWorkout, createWorkout };
