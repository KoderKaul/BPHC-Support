const mongoose = require('mongoose');

const problemSchema = mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        problemTitle: String,
        problemCategory: String,
        problemDesc: String,
        studentEmail: String,
        studentName: String,
        studentId: String,
        studentRoomNo: String,
        studentBhawan: String,
        problemStatus: String,
        problemDate: String
    }
);


module.exports = mongoose.model("Problem",problemSchema);