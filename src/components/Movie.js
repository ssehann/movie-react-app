import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";

// since a Movie doesn't need a state, we can use a function component
// instead of a class as in App.js
function Movie({ id, year, title, summary, poster, genres }) {
    const htmlAttributes = { maxLength: '1000' };

    return (
    <Link to={{
        pathname: `/movies/${id}`,
        state: {
            year:year,
            title:title,
            summary:summary,
            poster:poster,
            genres:genres
        }
    }}>
    <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <p className="movie__summary">{summary.length > 250 ?
                `${summary.substring(0, 250)}...` : summary
            }</p>
            <ul className="genres">
                {genres.map((genre, index) => <li key={index} className="genres__genre">{genre}</li>)}
            </ul>
        </div>
    </div>
    </Link>);
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;