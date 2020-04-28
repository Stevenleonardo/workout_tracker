// Dependencies
// ==================================
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const routes = require("./routes");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(routes);

// Connect to DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true, useUnifiedTopology: true });

// Start The Server
app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
});