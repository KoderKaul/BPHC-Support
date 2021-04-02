const mongoose = require('mongoose');

const courierSchema = mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        studentName: String,
        studentEmail: String,
        studentRoomNo: String,
        
    }
);


module.exports = mongoose.model("Courier",courierSchema);