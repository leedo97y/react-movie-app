import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, rating, coverImage, title, year, summary, genres }) {
  return (
    <div className={styles.all}>
      <div className={styles.body}>
        <img className={styles.img} src={coverImage} alt={title} />
        <span className={styles.rate}>★ {rating}</span>
        <h2 className={styles.h2}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <span className={styles.year}>{year}</span>
        <ul className={styles.allGenres}>
          {genres.map((g) => (
            <li className={styles.genre} key={g}>
              {g}
            </li>
          ))}
        </ul>
        <p className={styles.summary}>
          {summary.length > 235 ? `${summary.slice(0, 235)} ...` : summary}
        </p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
