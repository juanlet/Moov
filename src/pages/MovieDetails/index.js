import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import './MovieDetails.scss';


const MovieDetails = props => {

 const [movieDetails,setMovieDetails] = useState({});
  
 const  fetchMovie = async (movieId) =>{
      try {
        let results =  await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US     
`);
      results = await results.json();
      setMovieDetails(results);
      } catch (err) {
          console.log(err);
      }
  }
  
  useEffect(()=>{
       const { movieId } = props.location.state;

      fetchMovie(movieId);
  },[]);  

    let {title,genres, backdrop_path,spoken_languages,original_title,original_language,budget,overview,revenue,vote_average,vote_count}  = movieDetails;

    if(genres){
      genres = genres.map(genre=>genre.name);
    }

    return (
        movieDetails && 
        <div className="movie-details">
            <div className="movie-details__heading">
                <Link to="/" className="heading__back-btn"><span>{"<"} Back</span></Link>
                <span className="movie-details__title"> {title}</span>
            </div>
            <div className="movie-details__content">
                <div className="movie-details__col left-col">
                  <div className="movie-details__image-holder">
                     <img src={`https://image.tmdb.org/t/p/w500/${backdrop_path} `} className="movie-details__image" alt="Logo" /></div>
                  <div className="movie-details__additional-information">
                        <div>Original Title: {original_title}</div>
                        <div>Genres: {genres && genres.join(',')} </div>
                        <div>Language: {original_language}</div>
                        <div>Budget: {budget?`${budget}`:'N/A'}</div>
                        <div>Revenue: {revenue?`${revenue}`:'N/A'}</div>
                   </div>
                </div>
                <div className="movie-details__col right-col">
                    <div className="movie-details__overview">{overview}</div>
                    <div className="rating-section">
                        <div className="metrics-card average">Score: {vote_average}</div>
                      <div className="metrics-card vote-count">Votes: {vote_count}</div>
                   </div>
                </div>
            </div>
          </div>
    )
}

MovieDetails.propTypes = {

}

 /* <div>Genres: 
                    <ul>
                       {genres.map(genre => <li key={genre.id}>genre.name</li>)}
                    </ul>
                </div>
                <div>Spoken_languages: {spoken_languages}</div> */

export default MovieDetails
