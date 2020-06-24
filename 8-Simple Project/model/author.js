const mongoose = require("mongoose");
const authorSchema = mongoose.Schema({
    name: {
        title: String,
        required: true
    }

});

exports = monogoose.model("authors", authorSchema);