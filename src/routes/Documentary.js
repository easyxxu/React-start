import { useEffect, useState } from "react";
import styles from "./Documentary.module.css";
import Movie from "../components/Movie";
import { Link } from "react-router-dom";

function Documentary() {
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
  console.log("documentary page");
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
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
              <Link to={`/Category`}>Category</Link>
            </h3>
          </div>
          <div className={styles.category__view}>
            <button>
              <Link to={`/Category/Documentary`}>Documentary</Link>
            </button>
            <button>Drama</button>
            <button>History</button>
            <button>Action</button>
            <button>Adventure</button>
            <button>Fantasy</button>
            <button>Horror</button>
            <button>Mystery</button>
            <button>Thriller</button>
            <button>Comedy</button>
            <button>Crime</button>
            <button>Biography</button>
            <button>Music</button>
            <button>Family</button>
            <button>Sport</button>
            <button>Sci-Fi</button>
            <button>Reality-TV</button>
            <button>Talk-Show</button>
          </div>
          <div className={styles.movies}>
            {movies
              .filter((movie) => movie.genres === "Documentary")
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

export default Documentary;
