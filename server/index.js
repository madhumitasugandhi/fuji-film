import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
dotenv.config();

import {
    getHealth,
    getHome,
    getNotFound
} from './controllers/other.js';
import {
    getFilm,
    getFilmById,
    postFilm,
    deleteFilmById,
    updateFilmById,
    updateFilmRatingById
} from './controllers/film.js';


const app = express();
app.use(express.json());
app.use(cors());

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URL);

    if (conn) {
        console.log("Connected  to MongoDB..");
    }
}

//basic api
app.get('/', getHome);
app.get('/health', getHealth);


//Route for fuji-film application.
app.post("/films", postFilm);
app.get("/films", getFilm);
app.get("/films/:id", getFilmById);
app.delete("/films/:id", deleteFilmById);
app.put("/films/:id", updateFilmById);
app.patch("/films/rating/:id" , updateFilmRatingById)

//not found api
app.use(getNotFound);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
    connectDB();
})