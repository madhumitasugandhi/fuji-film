import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import toast, { Toaster } from "react-hot-toast"
import FilmCard from '../../components/FilmCard/FilmCard'
import AddFilm from '../../assets/plus.png'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'

function Home() {

    const [films, setFilms] = useState([])

    const loadFilms = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/films`)
            setFilms(response?.data?.data);
            console.log(response);
            toast.success(response.data.message)
        }
        catch (error) {
            console.error(error?.response.data.message || error.message)
        }
    }
    useEffect(() => {
        loadFilms()
    }, [])

    return (
        <div
            className="min-h-screen flex flex-col items-center p-6 space-y-12"
            style={{
                backgroundColor: '#000000',
                backgroundImage: `
      radial-gradient(closest-side, rgba(139, 0, 20, 0.6), transparent 60%)
    `,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: '100% 100%',
                boxShadow: 'inset 0 0 160px rgba(139, 0, 20, 0.5)',
            }}
        >
            <h1 className="text-4xl font-serif font-bold text-[#FF0033] tracking-wide text-center">
                MovieHub 🎥🍿✨
            </h1>
            <div className="w-full max-w-5xl flex flex-wrap justify-center gap-8">
                {films.map((film, index) => {
                    const {
                        _id,
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
                        shortDescription,
                    } = film;

                    return (
                        <FilmCard
                            key={_id || index}
                            _id={_id}
                            title={title}
                            cast={cast}
                            director={director}
                            producers={producers}
                            poster={poster}
                            musicDirector={musicDirector}
                            releseYear={releseYear}
                            category={category}
                            language={language}
                            rating={rating}
                            shortDescription={shortDescription}
                        />
                    );
                })}
            </div>
            <Toaster />
            <Link to="/add-film">
                <img
                    src={AddFilm}
                    alt="Add Film"
                    className="fixed top-4 right-4 bg-[#1F1F2E] border border-[#FF0033] p-2 rounded-xl shadow-2xl w-14 h-14 cursor-pointer hover:scale-110 transition-transform duration-300 z-50"
   
                />
            </Link>
            <Footer/>
        </div>
    );

}

export default Home