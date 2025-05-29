import Film from "../models/Film.js";

const postFilm = async (req, res) => {

    const {
        title,
        cast,
        director,
        producers,
        poster,
        musicDirector,
        releseYear,
        category,
        language,
        rating,
        shortDescription
    } = req.body;

    const newFilm = new Film({
        title: title,
        cast: cast,
        director: director,
        producers: producers,
        poster: poster,
        musicDirector: musicDirector,
        releseYear: releseYear,
        category: category,
        language: language,
        rating: rating,
        shortDescription: shortDescription
    });

    const savedFilm = await newFilm.save();

    return res.status(201).json({
        success: true,
        message: "Film createed...",
        data: savedFilm,
    });
};

const getFilm = async (req, res) => {


    const films = await Film.find().select("-__v");;
    return res.status(200).json({
        success: true,
        data: films,
        message: "All films retrived.."
    })
};

const getFilmById = async (req, res) => {
    const { id } = req.params;
    try {
        const film = await Film.findOne({ _id: id }).select("-__v -createdAt -updatedAt");


        if (film) {
            return res.status(200).json({
                success: true,
                data: film,
                message: "Film fetched",
            });
        }
        else {
            return res.status(404).json({
                success: false,
                data: null,
                message: "Films not found in Database",
            });
        }
    }
    catch (e) {
        return res.status(400).json({
            success: false,
            message: e.message,
            data: null,
        })
    }
};

const deleteFilmById = async (req, res) => {
    const { id } = req.params;

    try {
        const film = await Film.deleteOne({ _id: id });

        return res.status(200).json({
            success: true,
            data: film,
            message: "Film deleted",
        });

    }
    catch (e) {
        return res.status(400).json({
            success: false,
            message: e.message,
            data: null,
        })
    }

};

const updateFilmById = async (req, res) => {
    const { id } = req.params;

    const {
        title,
        cast,
        director,
        producers,
        poster,
        musicDirector,
        releseYear,
        category,
        language,
        rating,
        shortDescription
    } = req.body;

    try {
        const updatedFilm = await Film.updateOne(
            { _id: id },
            {
                $set: {
                    title,
                    cast,
                    director,
                    producers,
                    poster,
                    musicDirector,
                    releseYear,
                    category,
                    language,
                    rating,
                    shortDescription
                }
            }
        );

        return res.status(200).json({
            success: true,
            message: "Film data has been updated...",
            data: updatedFilm,
        });
    } catch (e) {
        return res.status(400).json({
            success: false,
            message: e.message,
            data: null,
        });
    }
};

const updateFilmRatingById = async (req, res)=>{
    const {id} = req.params;
    const {rating} = req.body;

    try{
        const updatedFilm = await Film.updateOne({_id: id}, {rating: rating});

         return res.status(200).json({
            success: true,
            message: "Film rating has been updated...",
            data: updatedFilm,
        });
    }
    catch(e){
         return res.status(400).json({
            success: false,
            message: e.message,
            data: null,
        });
    }
};

export {
    postFilm,
    getFilm,
    getFilmById,
    deleteFilmById,
    updateFilmById,
    updateFilmRatingById
};