const mongoose = require("mongoose");
const config = require("config");
const dbgr = require("debug")("development:mongoose");

const MONGODB_URI = config.get("MONGODB_URI");

mongoose.connect(`${MONGODB_URI}`)
    .then(() => dbgr("Successfully connected to MongoDB"))
    .catch((err) => dbgr(`Failed to connect to MongoDB: ${err.message}`));

module.exports = mongoose.connection;