import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./New.module.css";
import Movie from "../components/Movie";

function New() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div>
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
          <div className={styles.movies}>
            {movies
              .filter((movie) => movie.year === 2022 || movie.year === 2023)
              .map((movie) => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  coverImg={movie.medium_cover_image}
                  title={movie.title}
                  summary={movie.summary}
                  genres={movie.genres}
                />
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default New;
