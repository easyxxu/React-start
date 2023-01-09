import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./Detail.module.css";
function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  }, [id]);
  useEffect(() => {
    getMovie();
  }, [getMovie]);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {/* 상단 메뉴바 */}
          <div className={styles.title}>
            <h2 className={styles.jiflix}>JIFLIX</h2>
            <h3 className={styles.menu1}>
              <Link to="/">Home</Link>
            </h3>
            <h3 className={styles.menu2}>
              <Link to={`/New`}>New</Link>
            </h3>
            <h3 className={styles.menu3}>
              <Link to="/">Category</Link>
            </h3>
          </div>
          <div key={movie.id} className={styles.movie}>
            <img
              src={movie.medium_cover_image}
              alt="movie_cover"
              className={styles.movie__img}
            />
            <h2 className={styles.movie__title}>"{movie.title}"</h2>
            <p className={styles.movie__summary}>{movie.description_full}</p>
          </div>
        </div>
      )}
    </div>
  );
}
export default Detail;
