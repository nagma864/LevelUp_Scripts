const mongoose = require("mongoose");
const StudentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    grade: String,
});

const StudentsModel = mongoose.model("students", StudentSchema);
module.exports = StudentsModel;
