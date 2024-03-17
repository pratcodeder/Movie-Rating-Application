const rating_reviewService = require("../services/rating_reviewService");


const postRating_Review = async (req, res) => {
    
    try {
const {rating,review} = req.body;
const userId = req.user.id;
const movieId = req.params.id;

const createReview = await rating_reviewService.postRatingReview({
    rating,
    review,
    userId,
    movieId,
});

res.status(201).json(createReview);
    }catch (error) {
    res.status(500).json({message: error.message});
}

};

const updateRating_Review = async (req, res) => {
    try {
        const {movieId,reviewId} = req.params;
        const userId = req.user.id;
        const reviewData = req.body;
        const review = await rating_reviewService.updateRatingReview({userId,movieId,reviewId,reviewData});
        if(!review) {
            res.status(404).json({message : "Review not found."})
        }

        res.status(200).json(review);

    }catch (error) {
    res.status(500).json({message: error.message});
}

};

const deleteRating_Review = async (req, res) => {
    try {
        const {movieId,reviewId} = req.params;
        const userId = req.user.id;
      
        const success = await rating_reviewService.deleteRatingReview({userId,movieId,reviewId});
        if(!success) {
            res.status(404).json({message : "Review not found."})
        }

        res.status(204).json({message : "Review deleted"});
    }catch (error) {
    res.status(500).json({message: error.message});
}

};

const getRating_Review = async (req, res) => {
    try {
        const movieId = req.params.id;
        const userId = req.user.id;
      
        const review = await rating_reviewService.getRatingReview({userId,movieId});
        if(!review) {
            res.status(404).json({message : "Reviews not found."})
        }

        res.status(200).json(review);
    }catch (error) {
    res.status(500).json({message: error.message});
}

};

const getAverageRating = async (req, res) => {
    try {
        const movieId = req.params.id;
        
      
        const review = await rating_reviewService.getAverageRating(movieId);
        if(!review) {
            res.status(404).json({message : "Ratings not found."})
        }

       const average = review.reduce((accu,movie) => accu + movie.rating,0);
       const answer = (average/review.length).toFixed(1);
        res.status(200).json(answer);
    }catch (error) {
    res.status(500).json({message: error.message});
}

};


module.exports ={postRating_Review,updateRating_Review,deleteRating_Review,getRating_Review,getAverageRating};