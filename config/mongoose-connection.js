const mongoose = require("mongoose");
const config = require("config");
const dbgr = require("debug")("development:mongoose");


mongoose.connect("mongodb+srv://yashagr805:tpTkaOUKLkQhBQIu@cluster0.h8e8k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => dbgr("Successfully connected to MongoDB"))
    .catch((err) => dbgr(`Failed to connect to MongoDB: ${err.message}`));

module.exports = mongoose.connection;
