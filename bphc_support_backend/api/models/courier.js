const mongoose = require('mongoose');

const courierSchema = mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        studentName: String,
        studentEmail: String,
        bhawan: String,
        roomNo: Number,
        courierDesc: String
    }
);


module.exports = mongoose.model("Courier",courierSchema);