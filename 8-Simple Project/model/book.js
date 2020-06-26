const monogoose = require("mongoose");


const bookSchema = monogoose.Schema({
  
    title: {
        type: String,
        required:true
    },
    image: {
        type: String,
        required:false
    },
    description: {
        type: String,
        required:false
    },
    rating: {
        type: Number,
        required:false
    },
    authorId: {
        type: monogoose.Schema.Types.ObjectId,
        require: false
        
    }
   

});
module.exports = monogoose.model("books", bookSchema);