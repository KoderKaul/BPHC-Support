const mongoose = require('mongoose');

const noticeSchema = mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        noticeTitle: String,
        noticeSubTitle: String,
        noticeDesc: String,
        noticeImage: String,
        eventTiming: String,
        noticeIssuedBy: String,
        createdAt: {
            type: Date,
            default: new Date(),
        },
    }
);


module.exports = mongoose.model("Notice",noticeSchema);