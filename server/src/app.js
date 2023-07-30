const { appMidleware } = require("./Middleware/appMidleware");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mainRouter = require("./Routes");
const app = express();

// MIDLEWARE'S
app.use(express.json());
app.use(morgan("dev"));
app.use(appMidleware);
app.use(cors());
app.use("/rickandmorty", mainRouter);

module.exports = app;
