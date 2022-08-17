import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
  const [movieInfo, setMovieInfo] = useState([]);
  const [genre, setGenre] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovieInfo(json.data.movie);
    setGenre(json.data.movie.genres);
    setLoading(false);
    console.log(json);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h1 className={styles.loading}>Loading...</h1>
      ) : (
        <div className={styles.allBody}>
          <img
            className={styles.img}
            src={movieInfo.large_cover_image}
            alt={movieInfo.title}
          ></img>
          <h2 className={styles.title}>{movieInfo.title}</h2>
          <div className={styles.yearBody}>
            <span className={styles.year}> {movieInfo.year}</span>
            <span className={styles.star}>rate {movieInfo.rating}</span>
          </div>
          <div className={styles.likeBody}>
            <span className={styles.like}> Like {movieInfo.like_count}</span>
            <span className={styles.runtime}>
              {movieInfo.runtime !== 0 ? `runtime ${movieInfo.runtime}m` : null}
            </span>
          </div>
          <ul className={styles.allGenres}>
            {genre.map((g) => (
              <li className={styles.genre} key={g}>
                {g}
              </li>
            ))}
          </ul>
          <p className={styles.desc}>{movieInfo.description_full}</p>
        </div>
      )}
    </div>
  );
}

export default Detail;
// 디테일을 보여주는 세부 페이지 만듬 - 페이지 이동을 위해 route라는 폴더를 생성, 컴포넌트 폴더 생성
