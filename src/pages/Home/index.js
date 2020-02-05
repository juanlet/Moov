import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Hero from "components/Hero";
import MovieList from "components/MovieList";
import RatingFilter from 'components/RatingFilter';
import useDebounce from 'utils/useDebounce';
import InformationDisplay from 'components/InformationDisplay';

const Home = props => {

     const [movieList, setMovieList] = useState([]);
     const [ratingFilter, setRatingFilter] = useState(0);
     const [searchTerm, setSearchTerm] = useState('');
     const [isSearching, setIsSearching] = useState(false);
     const [errorMessage,setErrorMessage] = useState('');
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
    try {
      let movies = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&query=${term}`)
      movies = await movies.json();
      setIsSearching(false);
      setMovieList(movies.results);
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

  //Debounces before sending the data after keystrokes
  useEffect(
    () => {
       setRatingFilter(0);

      if (debouncedSearchTerm) {
        setIsSearching(true);
        searchMovies(debouncedSearchTerm);
      } else {
       fetchRecommendedMovies();
      }
    },
    [debouncedSearchTerm]
  );
  
    let filteredMovies;
    if(ratingFilter > 0){
       filteredMovies = filterMoviesByRating();
    }
  console.log("FILTERED", filteredMovies)
    return (
        <div>
            <Hero setSearchTerm={setSearchTerm}/>
            <RatingFilter onStarClick={onStarClick}
            rating = {ratingFilter}/>
            {filteredMovies === null?<InformationDisplay message={"There are no movies to display."}/>:
            (  filteredMovies?
               <MovieList movies={filterMoviesByRating()} />:(movieList ?(
                <MovieList movies={movieList} />
            ) : (
                "There was an error fetching the movies. Please try again in a moment"
            ))
            )} 

        </div>
    )
}

Home.propTypes = {

}

export default Home
