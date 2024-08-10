import React from "react";
import axios from "axios";
import Movie from "./Movie.js";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const json_data = await axios.get('https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating');
    const movies = json_data.data.data.movies;
    this.setState({ isLoading:false, movies:movies });
  }

  componentDidMount() {
    // since loading json using axios is slow, we can use async/await
    this.getMovies();
  }

  // if isLoading is true, it shows the loading message
  // otherwise, it maps over movies and renders a Movie component for each movie, passing movie details as props
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
          ) : (
            <div className="movies">
              {movies.map(movie => (
                <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} genres={movie.genres} />
              ))}
            </div>
          )
        }
      </section>
    );
  }
}

// lifecycle order
// constructor -> render -> componentDidMount
// initially, isLoading is true so it shows "Loading..." 
// componentDidMount -> getMovies -> render 
// getMovies fetches all movies and sets isLoading to false-> renders movies

export default App;