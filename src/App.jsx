import './App.css';
import { useState, useEffect } from 'react';
import { fetchDataFromApi } from './utils/api';
import { useSelector, useDispatch } from 'react-redux';
import { getApiConfigration, getGenres } from './store/homeSlice';

function App() {
  const dispatch = useDispatch();
  const [movies, setMovies] = useState([]);
  const {url} = useSelector((state) => state.home)
  console.log(url)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetchDataFromApi('movie/now_playing')
      .then((res) => {
        dispatch(getApiConfigration(res))
        setMovies(res.results);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div className="App">
      <h1>Movies</h1>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
