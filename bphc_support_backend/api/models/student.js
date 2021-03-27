const mongoose = require('mongoose');

const studentSchema = mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        email: String,
        idNo: String,
        name: String,
        bhawan: String,
        roomNo: Number,
        phoneNo: String,
        studentImage: String
    }
);


module.exports = mongoose.model("Student",studentSchema);