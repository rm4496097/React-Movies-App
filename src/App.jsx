import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { fetchDataFromApi } from './utils/api';
import { useSelector, useDispatch } from 'react-redux';
import { getApiConfiguration , getGenres } from './store/homeSlice';


import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import PageNotFound from './pages/404/PageNotFound';
import Explore from './pages/explore/Explore';
import SearchResult from './pages/searchResults/SearchResult';
import Details from './pages/details/Details';
import { Button } from 'react-bootstrap';

function App() {
  const dispatch = useDispatch();
  const [movies, setMovies] = useState([]);
  const { url } = useSelector((state) => state.home)
  console.log(url)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetchDataFromApi('movie/now_playing')
      .then((res) => {
        dispatch(getApiConfiguration(res))
        console.log(res.results)
        setMovies(res.results);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <BrowserRouter >
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
