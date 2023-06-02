"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import './MovieRow.css';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const TMDB_BASE_URL = 'https://api.themoviedb.org/3'
const language = 'language=pt-BR'
const API_KEY = 'f9944b541279292b41c8fa75b161aecf'

const VITE_POSTER_URL = 'https://image.tmdb.org/t/p/w300'
const VITE_background_URL = 'https://image.tmdb.org/t/p/w700'



export default ({title, items, filter}) =>{

   // Scroll da lista de filmes para esquerda 
    const [scrollx, setScrollx] = useState(0);

    const handleleft = () =>{
        let x = scrollx + Math.round(window.innerWidth / 2 );

        if(x > 0){
            x = 0;
        }

        setScrollx (x);

    }

     // Scroll da lista de filmes para direita
    const handleright = () => {
        let x = scrollx - Math.round(window.innerWidth / 2 );
        let listW = items.results.length * 180;
        if ((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) - 60;
        }
        setScrollx (x);
    }


    return (
        <div className="MovieRow">
           <h2 id='titulo'>{title}</h2>
            <div className='MovieLeft' onClick={handleleft}>
                <KeyboardDoubleArrowLeftIcon style={{fontSize: 50}}/>
            </div>
            <div className='Movieright'onClick={handleright}>
                <KeyboardDoubleArrowRightIcon style={{fontSize: 50}}/>
            </div>
           <div className="MovieListArea">
                <div className= "Movie-Lista" style={{
                    marginLeft: scrollx, 
                    width: items.results.length * 180
                }}>
                    {items.results.length > 0 && items.results
                        .filter(item => filter?.trim() === "" || item.title.toLowerCase().includes(filter?.toLowerCase().trim()))
                        .map((item, key) =>(
                            <div key= {key} className="MovieRow-item">
                                <Link href={`/movie/${item.id}`}>
                                    <img src={`${VITE_POSTER_URL}${item.poster_path}`} alt={item.title} />
                                </Link>
                            </div> 
                    ))}
                </div>               
            </div>
        </div>

        
    );
}


