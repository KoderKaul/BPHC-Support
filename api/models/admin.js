const mongoose = require('mongoose');

const adminSchema = mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        email: String,
        name: String,
        bhawan: String,
        adminImage: String
    }
);


module.exports = mongoose.model("Admin",adminSchema);