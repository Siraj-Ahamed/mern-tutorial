const express = require("express");
// express app
const app = express();

const dotenv = require("dotenv");
dotenv.config();

app.get("/", (req, res) => {
    res.json({ message: "Welcome" });
});

// lisren for requests
app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
});
