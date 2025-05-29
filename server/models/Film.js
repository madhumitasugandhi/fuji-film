import {model, Schema} from 'mongoose';

const filmSchema = new Schema({
    title: String,
    cast: String,
    director: String,
    producers: String,
    poster: String,
    musicDirector: String,
    releseYear: Number,
    category: String,
    language: String,
    rating: Number,
    shortDescription: String,
}, 
{timestamps:true}
);

const Film = model('Film', filmSchema);

export default Film;