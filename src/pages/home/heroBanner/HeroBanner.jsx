import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./style.scss";
import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';
import Img from '../../../components/lazyLoadImage/Img';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';


export default function HeroBanner() {
	const navigate = useNavigate()
  const { url } = useSelector((state)=>state.home);
  const [background, setBackground] = useState('');
  const [query, setQuery] = useState('');

	const {data, loading} = useFetch('movie/upcoming');
	useEffect(() => {
		if (data?.results) { 
      console.log('url',url);
			const bg = url.backdrop + data.results[Math.floor(Math.random() * data.results.length)]?.backdrop_path;
			setBackground(bg);
      console.log('bg',bg);
		}
	}, [data]);

	const searchQueryHandler = (e) =>{
		if (e.key=== "Enter" && query.length > 0 ) {
			navigate(`/search/${query}`);
		}
	}
  return (
    <div className='heroBanner'>
      {!loading && <div className='backdrop-img'>
       <Img src={background} />
      </div>}
      <div ></div>
      <ContentWrapper>
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
      </ContentWrapper>
    </div>
  );
}
