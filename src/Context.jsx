/* eslint-disable react/prop-types */
import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
export const MovieDBApp = createContext();

const MovieDBprovider = ({ children }) => {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(false);
    const api_key = "2952f3ebb6ad025186ac1f330830d143";
    const handleSearch = async () => {
        try {
            const res = await fetch(
                `https://api.themoviedb.org/3/movie/changes?end_date=${endDate}&page=1&start_date=${startDate}&api_key=${import.meta.env.VITE_API_KEY}`
            );
            const data = await res.json();

            if (data !== null) {
                const pureids = (data.results || []).map((ids) => ids.id);

                if (pureids.length === 0) {
                    setError(true);

                    return;
                }

                const moviedetails = await Promise.all(
                    pureids.map((id) =>
                        fetch(
                            `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}`
                        ).then((res) => res.json())
                    )
                );

                setMovies(moviedetails);
            }
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        // const fetchMovies = async () => {
        //     try {
        //         const res = await fetch(
        //             `https://api.themoviedb.org/3/movie/changes?page=1&api_key=${import.meta.env.VITE_API_KEY}`
        //         );
        //         const data = await res.json();
        //         const pureids = data.results.map((ids) => ids.id);
        //         const moviedetails = await Promise.all(
        //             pureids.map((id) =>
        //                 fetch(
        //                     `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}`
        //                 ).then((res) => res.json())
        //             )
        //         );
        //         setMovies(moviedetails);
        //     } catch (e) {
        //         console.log(e);
        //     }
        // };
        // fetchMovies();
    }, []);

    return (
        <MovieDBApp.Provider
            value={{
                startDate,
                movies,
                setMovies,
                error,
                setError,
                setStartDate,
                endDate,
                handleSearch,
                setEndDate,
            }}
        >
            {children}
        </MovieDBApp.Provider>
    );
};
export default MovieDBprovider;
