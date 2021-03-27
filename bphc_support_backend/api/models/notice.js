const mongoose = require('mongoose');

const noticeSchema = mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        noticeTitle: String,
        noticeSubTitle: String,
        noticeDesc: String,
        noticeImage: String,
        noticeDate: String
    }
);


module.exports = mongoose.model("Notice",noticeSchema);