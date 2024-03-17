const moviesServices = require("../services/moviesService");

const postMovies = async (req,res) => {
    try {
const moviesData = req.body;
const data = await moviesServices.postMovie(moviesData);

res.status(201).json(data)
    } catch (error) {
        res.status(500).json({
            message : error.message
        })
    }
};

const updateMovies = async (req,res) => {
    try {
const updateData = req.body;
const {id} = req.params;

const movie = await moviesServices.updateMovie(id,updateData);

if(!movie) {
    res.status(404).json({message : "movie not found"});

}

res.status(200).json(movie);

    } catch (error) {
        res.status(500).json({message : error.message});
    }
};

const deleteMovies = async (req,res) => {
    try {
const {id} = req.params;
const success = await moviesServices.deleteMovie(id);
if(!success) {
    res.status(404).json({message : "Movie not found"});
}

res.status(204).json({message : "Movie deleted"});

    } catch (error)
 {
    res.status(500).json({message : error.message});
 }
};

const getByIdMovies = async (req,res) => {
    try {
const {id} = req.params;
const movie = await moviesServices.getByIdMovie(id);
if(!movie){
    res.status(404).json({message : "Movie not found"})
}

res.status(200).json(movie);
    }catch (error) {
        res.status(500).json({message : error.message});
    }
};

const getAllMovies = async (req,res) => {
    try {

const movie = await moviesServices.getAllMovies();

if(!movie){
    res.status(404).json({message : "Movies not found"})
}

let results = movie;

// Filter by genre if provided
if (req.query.genre) {
  results = results.filter(movie => movie.genre === req.query.genre);
}

// Filter by releaseYear if provided
if (req.query.releaseYear) {
  results = results.filter(movie => movie.releaseYear === parseInt(req.query.releaseYear));
}

// Filter by director if provided
if (req.query.director) {
  results = results.filter(movie => movie.director === req.query.director);
}


res.status(200).json(results);
    }catch (error) {
        res.status(500).json({message : error.message});
    }
};

module.exports = {postMovies, updateMovies,deleteMovies,getByIdMovies, getAllMovies};