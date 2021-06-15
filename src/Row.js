import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'

//const base_url = "https:image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  //snippet of code which runs based on a specific condition/variable
  useEffect(() => {
    //if [blank], run once when the row loads,and don't run again
    async function fetchData() {
      const request = await axios.get(fetchURL); // for ex.https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213
      console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl){
      setTrailerUrl("");
    }else{
      movieTrailer(movie?.name || "")
      .then((url) => {
const urlParams =new URLSearchParams( new URL(url).search);
// get only the videoId which is indicated after v=  "https://www.youtube.com/watch?v=Hka0Zr8Dikc"
setTrailerUrl(urlParams.get("v"));
      }).catch(error => console.log(error));
    }
  }
  //console.log(movies)
  console.table(movies);
  return (
    <div className="row">
      {/* title */}
      <h2>{title}</h2>

      <div className="row_posters">
        {/* several row_poster(s) */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick= {() => handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`https:image.tmdb.org/t/p/original/${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {/* Container -> poster */}
      {trailerUrl && <Youtube videoId = {trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
