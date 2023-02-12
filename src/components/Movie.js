import PropTypes from "prop-types";
import {Link} from "react-router-dom";

function Movie({id, medium_cover_image, title, summary, genres}) {
    return <div>
    <img src={medium_cover_image} alt={title}></img>
    <h2>
      <Link to={`/movie/${id}`}>{title}</Link>
    </h2>
    <p>{summary.length > 230 ? `${summary.slice(0, 230)}...` : summary}</p>
      <ul>
        {genres !== null ? 
            genres.map((g, id) => <li key={id}>{g}</li>) : 
            null}
      </ul>
  </div>;
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;