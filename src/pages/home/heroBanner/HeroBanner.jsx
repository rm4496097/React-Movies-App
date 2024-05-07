import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./style.scss";
import useFetch from '../../../hooks/useFetch';

export default function HeroBanner() {
	const navigate = useNavigate()
  const [background, setBackground] = useState('');
  const [query, setQuery] = useState('');

	const [data, loading] = useFetch('movie/upcoming');
	console.log('data');
	useEffect(() => {
		if (data?.results) { 
			console.log("data-result",data.results);
			const bg = data.results[Math.floor(Math.random() * data.results.length)]?.backdrop_path;
			console.log('bg',bg); 
			setBackground(bg);
		}
	}, [data]);

	const searchQueryHandler = (e) =>{
		if (e.key=== "Enter" && query.length > 0 ) {
			navigate(`/search/${query}`);
		}
	}
  return (
    <div className='heroBanner'>
      <div className='wrapper'>
        <div className='heroBannerContent'>
          <span className='title'>Welcome.</span>
          <span className='subTitle'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, error?
          </span>
          <div className='searchInput'>
            <input onKeyUp={searchQueryHandler} onChange={(e)=>setQuery(e.target.value)} type="text" placeholder='Lorem ipsum dolor sit amet consectetur ....' />
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}
