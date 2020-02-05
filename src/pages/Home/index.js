import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Hero from "components/Hero";
import MovieList from "components/MovieList";
import RatingFilter from 'components/RatingFilter';

const Home = props => {

     const [movieList, setMovieList] = useState([]);
     const [ratingFilter, setRatingFilter] = useState(false);

  const fetchRecommendedMovies = async () => {
    try {
      let movies = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US&sort_by=popularity.desc`
      );
      movies = await movies.json();
      setMovieList(movies.results);
    } catch (err) {
      console.log(err);
    }
  };

  const filterMoviesByRating = () => {
    const lowerBound = ratingFilter * 2 - 2;
    const upperBound = ratingFilter * 2;  
    const filteredMovies =   movieList.filter(movie=>{
       const avgVote = parseInt(movie.vote_average);
       console.log(avgVote, lowerBound,upperBound);
      if( avgVote > lowerBound && avgVote <=upperBound ){
          return movie;
       }
        
     });
    return filteredMovies.length? filteredMovies: null;
  }

  const onStarClick = (nextValue, prevValue, name)=>{
     console.log("click",nextValue, prevValue, name);
        if(prevValue === nextValue){
         //clear filter
         setRatingFilter(0);
     }else{
         setRatingFilter(nextValue); 
     }
  }


  useEffect(() => {
    fetchRecommendedMovies();
  }, []);

  /* useEffect(()=>{
         se(ratingFilter?true:false);
  },[ratingFilter]) */
  
    return (
        <div>
            <Hero />
            <RatingFilter onStarClick={onStarClick}
            rating = {ratingFilter}/>
            {ratingFilter?<MovieList movies={filterMoviesByRating()} />:(movieList ?(
                <MovieList movies={movieList} />
            ) : (
                "There was an error fetching the movies"
            ))}
        </div>
    )
}

Home.propTypes = {

}

export default Home
