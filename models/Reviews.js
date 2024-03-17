const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    rating : {
        type : Number,
        required : true
    },
    review : {
        type : String,
        required : true
    }, 
    userId : {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref : "User",
    },
    movieId : {
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref : "Movies",
    }
},
{
    timestamps :true
}
);

const Review = mongoose.model("Review",reviewSchema);

module.exports = Review;