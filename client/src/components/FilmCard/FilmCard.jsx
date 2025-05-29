import React from 'react';
import Button from '../Button/Button';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';

function FilmCard({
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
    shortDescription
}) {

const navigate = useNavigate();


    const deleteFilm = async (_id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this film?");
        if (!confirmDelete) return;

        try {
            const response = await axios.delete(`http://localhost:5002/films/${_id}`);
            toast.success(response.data.message || "Film deleted successfully");

        } catch (error) {
            toast.error("Failed to delete the film");

        }
    };

  


    return (
        <div className="filmcard relative bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-lg rounded-2xl overflow-hidden max-w-4xl mx-auto p-6 flex flex-col md:flex-row gap-6 transition-all duration-300 hover:shadow-2xl">
            <img
                src={poster}
                alt={`${title} Poster`}
                className="w-full md:w-1/3 h-auto object-cover rounded-lg"
            />

            <div className="flex-1 flex flex-col gap-2">
                <h2 className="text-3xl font-extrabold text-fuchsia-600 dark:text-yellow-400">{title}</h2>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{shortDescription}</p>

                <ul className="text-sm space-y-1">
                    <li><strong>🎭 Cast:</strong> {cast}</li>
                    <li><strong>🎬 Director:</strong> {director}</li>
                    <li><strong>🎥 Producers:</strong> {producers}</li>
                    <li><strong>🎵 Music Director:</strong> {musicDirector}</li>
                    <li><strong>📅 Release Year:</strong> {releseYear}</li>
                    <li><strong>🏷️ Category:</strong> {category}</li>
                    <li><strong>🗣️ Language:</strong> {language}</li>
                    <li><strong>⭐ Rating:</strong> {rating}</li>
                </ul>
            </div>
            <div className='absolute bottom-4 right-4 flex gap-2'>
                <Button
                    title="Update"
                    onClick={() => {
                        navigate(`/film/edit/${_id}`)
                    }}
                />
                <Button
                    title="Delete"
                    onClick={() => deleteFilm(_id)}
                />
            </div>
        </div>
    );
}

export default FilmCard;
