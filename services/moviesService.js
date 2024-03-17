const Movies = require("../models/Movies");

const postMovie = async (moviesData) => {
    try { 
const movie = await Movies.create(moviesData);
return movie;
    } catch (error) {
        throw error;
    }

};

const updateMovie = async (id,updateData) =>{
    try {
        const movie = await Movies.findOneAndUpdate(
            {_id : id},
            {$set : updateData},
            {new : true}
        )
return movie;
    } catch (error) {
        throw error;
    }
};

const deleteMovie = async (id) => {
    try {
        const movie = await Movies.findOneAndDelete({_id : id});
        return movie;
    }catch(error) {
        throw error;
    }
};

const getByIdMovie = async (id) => {
    try {
const movie = await Movies.findOne({_id:id});
return movie;
    }catch (error) {
        throw error;
    }
};

const getAllMovies = async (id) => {
    try {
const movie = await Movies.find({});
return movie;
    }catch (error) {
        throw error;
    }
};

module.exports = {postMovie, updateMovie,deleteMovie,getByIdMovie,getAllMovies};