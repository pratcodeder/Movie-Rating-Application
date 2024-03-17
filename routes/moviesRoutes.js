const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/moviesController");
const authenticateToken = require("../middleware/authenticateToken.js");
const rating_reviewController = require("../controllers/rating_reviewController.js");
//Movies
router.post("/", authenticateToken , moviesController.postMovies);
router.put("/:id", authenticateToken , moviesController.updateMovies);
router.delete("/:id", authenticateToken, moviesController.deleteMovies);
router.get("/:id", authenticateToken, moviesController.getByIdMovies);
router.get("/", authenticateToken, moviesController.getAllMovies);

// Ratings and Reviews
router.post("/:id/reviews", authenticateToken , rating_reviewController.postRating_Review);
router.put("/:movieId/reviews/:reviewId", authenticateToken , rating_reviewController.updateRating_Review);
router.delete("/:movieId/reviews/:reviewId", authenticateToken , rating_reviewController.deleteRating_Review);
router.get("/:id/reviews", authenticateToken , rating_reviewController.getRating_Review);
router.get("/:id/averageRating", authenticateToken , rating_reviewController.getAverageRating);





module.exports = router;