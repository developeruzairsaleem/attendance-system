require("dotenv").config();

const MONGODB_CONNECTION_STRING = process.env.MONGODB_CONNECTION_STRING;
const PORT = process.env.PORT




module.exports = {
    MONGODB_CONNECTION_STRING,
    PORT
};

