const mongoose = require("mongoose");
const authorSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true,
    }

});
module.exports = mongoose.model("authors", authorSchema);