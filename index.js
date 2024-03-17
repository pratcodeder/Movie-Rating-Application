require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const userRoutes = require("./routes/userRoutes.js");
const moviesRoutes = require("./routes/moviesRoutes.js") 

mongoose.connect(MONGODB_URI)
.then(() => console.log("connected to mongoDB"))
.catch((error) => console.error("could not connect to mongoDB", error));

app.use(cors())

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/movies" , moviesRoutes);

app.get("/", (req,res)=> {
    res.send("Backend server is running");
});

app.listen(PORT, ()=> {
    console.log(`server is listening to ${PORT}`);
});