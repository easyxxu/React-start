import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Movie from "../components/Movie";
import styles from "./Home.module.css";
function Home() {
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
  // const useTitle = (initialTitle) => {
  //   const [title, setTitle] = useState(initialTitle);
  //   const updateTitle = () => {
  //     const htmlTitle = document.querySelector("title");
  //     htmlTitle.innerText = title;
  //   };
  //   useEffect(updateTitle, [title]);
  //   return setTitle;
  // };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);

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
          <div className={styles.movies}>
            {movies.map((movie) => (
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
export default Home;
