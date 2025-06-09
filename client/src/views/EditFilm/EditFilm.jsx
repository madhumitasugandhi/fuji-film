import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import HomeImg from './../../assets/home.png';
import { toast, Toaster } from 'react-hot-toast';
import Footer from '../../components/Footer';

function EditFilm() {
  const [film, setFilm] = useState({
    title: '',
    cast: '',
    director: '',
    producers: '',
    poster: '',
    musicDirector: '',
    releaseYear: '', // ✅ fixed typo
    category: '',
    language: '',
    rating: '',
    shortDescription: ''
  });

  const { id } = useParams();

 const loadFilmDetails = async () => {
    if (!id) return;
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/films/${id}`);
      setFilm(response.data.data);
    } catch (error) {
      toast.error('Failed to load film details');
    }
  };

  const updateFilm = async () => {
    try {
      await axios.put(`${import.meta.env.VITE_API_URL}/films/${id}`, film);
      toast.success('Film updated successfully!');
    } catch (error) {
      toast.error('Failed to update film.');
    }
  };

  useEffect(() => {
    loadFilmDetails();
  }, [id]); 

  return (
    <div className="min-h-screen bg-black text-white p-6  pt-12"
    style={{
                backgroundColor: '#000000',
                backgroundImage: `
      radial-gradient(closest-side, rgba(139, 0, 20, 0.6), transparent 60%)
    `,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: '100% 100%',
                boxShadow: 'inset 0 0 160px rgba(139, 0, 20, 0.5)',
            }}>
      <div className="max-w-2xl mx-auto bg-[#1F1F2E] p-8 mb-4 rounded-xl shadow-lg border border-[#FF0033]">
        <h1 className="text-3xl font-bold text-[#FF0033] mb-6 text-center">Edit Details</h1>

        <Link to="/">
          <img
            src={HomeImg}
            alt="Home"
            className="fixed top-4 right-4 bg-[#1F1F2E] border border-[#FF0033] p-2 rounded-xl shadow-2xl w-14 h-14 cursor-pointer hover:scale-110 transition-transform duration-300 z-50"
          />
        </Link>

        <form
          className="space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            updateFilm();
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
            value={film.releaseYear} // ✅ fixed here
            setValue={(val) => setFilm({ ...film, releaseYear: val })}
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
            title="Update"
            type="submit"
          />
        </form>
      </div>
      <Toaster/>
      <Footer/>
    </div>
  );
}
export default EditFilm;
