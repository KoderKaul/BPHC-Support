const mongoose = require('mongoose');

const dashboardSchema = mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        loggedIn: Number,
        signedUp: Number
    }
);


module.exports = mongoose.model("Dashboard",dashboardSchema);