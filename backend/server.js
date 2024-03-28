const express = require("express");
// express app
const app = express();

const dotenv = require("dotenv");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");

dotenv.config();

// middlewares
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// routes
app.get("/", (req, res) => {
    res.json({ message: "Welcome" });
});

app.use("/api/workouts", workoutRoutes);

// connect to db
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        // lisren for requests
        app.listen(process.env.PORT, () => {
            console.log(`connectes to db & listening on port ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
