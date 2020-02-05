import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Hero from "components/Hero";
import MovieList from "components/MovieList";
import RatingFilter from 'components/RatingFilter';
import useDebounce from 'utils/useDebounce';

const Home = props => {

     const [movieList, setMovieList] = useState([]);
     const [ratingFilter, setRatingFilter] = useState(false);
     const [searchTerm, setSearchTerm] = useState('');
     const [isSearching, setIsSearching] = useState(false);
     const debouncedSearchTerm = useDebounce(searchTerm, 500);


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

  const searchMovies = async (term) => {
    console.log("term",term);
    try {
      let movies = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&query=${term}`)
      movies = await movies.json();
      setIsSearching(false);
      setMovieList(movies.results);
      console.log(movies);
    } catch (err) {
      console.log(err);
    }
  }

  const filterMoviesByRating = () => {
    const lowerBound = ratingFilter * 2 - 2;
    const upperBound = ratingFilter * 2;  
    const filteredMovies =   movieList.filter(movie=>{
       const avgVote = parseInt(movie.vote_average);
      if( avgVote > lowerBound && avgVote <=upperBound ){
          return movie;
       }
        
     });
    return filteredMovies.length? filteredMovies: null;
  }

  const onStarClick = (nextValue, prevValue, name)=>{
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


  useEffect(
    () => {
      // Make sure we have a value (user has entered something in input)
      if (debouncedSearchTerm) {
        // Set isSearching state
        setIsSearching(true);
        // Fire off our API call
        searchMovies(debouncedSearchTerm);
      } else {
       fetchRecommendedMovies();
      }
    },
    // This is the useEffect input array
    // Our useEffect function will only execute if this value changes ...
    // ... and thanks to our hook it will only change if the original ...
    // value (searchTerm) hasn't changed for more than 500ms.
    [debouncedSearchTerm]
  );


  /* useEffect(()=>{
         se(ratingFilter?true:false);
  },[ratingFilter]) */
  
    return (
        <div>
            <Hero setSearchTerm={setSearchTerm}/>
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
