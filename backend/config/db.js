const mongoose = require("mongoose");

module.exports = () => {
    try {
        mongoose.connect(process.env.DB);
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection failed:", error);
    }
};
