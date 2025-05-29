import React, { useState } from 'react'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import HomeImg from './../../assets/home.png'

function AddFilm() {
    const [film, setFilm] = useState({
        title: '',
        cast: '',
        director: '',
        producers: '',
        poster: '',
        musicDirector: '',
        releseYear: '',
        category: '',
        language: '',
        rating: '',
        shortDescription: ''
    });

    const addFilm = async () => {
        try {
            const response = await axios.post(`http://localhost:5002/films`, film);
            toast.success(response.data.message);

            setFilm({
                title: '',
                cast: '',
                director: '',
                producers: '',
                poster: '',
                musicDirector: '',
                releseYear: '',
                category: '',
                language: '',
                rating: '',
                shortDescription: ''
            });
        } catch (error) {
            toast.error('Failed to add film');
        }
    };

    return (
        <div className="min-h-screen bg-black text-white px-6 py-12">
            <div className="max-w-2xl mx-auto bg-[#1F1F2E] p-8 rounded-xl shadow-lg border border-[#FF0033]">
                <h1 className="text-3xl font-bold text-[#FF0033] mb-6 text-center">
                    Add Film
                </h1>
                <Link to="/">
                    <img
                        src={HomeImg}
                        alt="Add Film"
                        className="fixed top-4 right-4 bg-[#1F1F2E] border border-[#FF0033] p-2 rounded-xl shadow-2xl w-14 h-14 cursor-pointer hover:scale-110 transition-transform duration-300 z-50"
   

                    />
                </Link>
                <form
                    className="space-y-5"
                    onSubmit={(e) => {
                        e.preventDefault();
                        addFilm();
                    }}
                >
                    <Input
                        label="Title"
                        value={film.title}
                        setValue={(val) => setFilm({ ...film, title: val })}
                        placeholder="Enter film title"
                    />
                    <Input
                        label="Poster URL"
                        value={film.poster}
                        setValue={(val) => setFilm({ ...film, poster: val })}
                        placeholder="Enter URL"
                    />
                    <Input
                        label="Cast"
                        value={film.cast}
                        setValue={(val) => setFilm({ ...film, cast: val })}
                        placeholder="Enter cast"
                    />
                    <Input
                        label="Director"
                        value={film.director}
                        setValue={(val) => setFilm({ ...film, director: val })}
                        placeholder="Enter director name"
                    />
                    <Input
                        label="Producer"
                        value={film.producers}
                        setValue={(val) => setFilm({ ...film, producers: val })}
                        placeholder="Enter producers name"
                    />
                    <Input
                        label="Music Director"
                        value={film.musicDirector}
                        setValue={(val) => setFilm({ ...film, musicDirector: val })}
                        placeholder="Enter Music Director's name"
                    />
                    <Input
                        label="Releasing Year"
                        value={film.releseYear}
                        setValue={(val) => setFilm({ ...film, releseYear: val })}
                        placeholder="Enter Year"
                        type="number"
                    />
                    <Input
                        label="Genre"
                        value={film.category}
                        setValue={(val) => setFilm({ ...film, category: val })}
                        placeholder="Enter category of film"
                        type="text"
                    />
                    <Input
                        label="Language"
                        value={film.language}
                        setValue={(val) => setFilm({ ...film, language: val })}
                        placeholder="Enter Languages"
                        type="text"
                    />
                    <Input
                        label="Rating"
                        value={film.rating}
                        setValue={(val) => setFilm({ ...film, rating: val })}
                        placeholder="Enter rating"
                        type="text"
                    />
                    <div className="flex flex-col">
                        <label htmlFor="shortDescription" className="mb-1 font-semibold text-sm">
                            Short Description
                        </label>
                        <textarea
                            id="shortDescription"
                            value={film.shortDescription}
                            onChange={(e) => setFilm({ ...film, shortDescription: e.target.value })}
                            className="bg-gray-900 border border-gray-700 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-[#FF0033]"
                            placeholder="Enter a short description"
                            rows={3}
                        />
                    </div>
                    <Button
                        title="Add Film"
                        type="submit"
                    />
                </form>
            </div>
        </div>
    )
}

export default AddFilm
