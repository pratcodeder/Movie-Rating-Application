const Review = require("../models/Reviews");

const postRatingReview = async (reviewData) => {
    try {
const review = await Review.create(reviewData);
return review;
    } catch (error) {
        throw error;
    }
};


const deleteRatingReview = async ({userId,movieId,reviewId}) => {
    try {
        const review = await Review.findOneAndDelete(
            {
                _id : reviewId,
                userId:userId,
                movieId : movieId,
            }
        )
        
        return review;
    } catch (error) {
        throw error;
    }
};

const updateRatingReview = async (updateData) => {
    try {
const review = await Review.findOneAndUpdate(
    {
        _id : updateData.reviewId,
        userId:updateData.userId,
        movieId : updateData.movieId,
    },
    {$set:updateData.reviewData},
    {new : true}
)

return review;
    } catch (error) {
        throw error;
    }
};

const getRatingReview = async ({userId,movieId}) => {
    try {
        const review = await Review.find(
            {
               
                userId:userId,
                movieId : movieId,
            }
        )
        
        return review;
    } catch (error) {
        throw error;
    }
};

const getAverageRating = async (movieId) => {
    try {
        const review = await Review.find(
            {
               
                
                movieId : movieId,
            }
        )
        
        return review;
    } catch (error) {
        throw error;
    }
};

module.exports ={getAverageRating,getRatingReview,updateRatingReview,deleteRatingReview,postRatingReview}