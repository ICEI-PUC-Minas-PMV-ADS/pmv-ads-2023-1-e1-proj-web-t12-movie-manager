"use client"

import Link from 'next/link';
import './page.css';
import TMDB from '@/utils/TMDB';

const TMDB_BASE_URL = 'https://api.themoviedb.org/3'
const language = 'language=pt-BR'
const API_KEY = 'f9944b541279292b41c8fa75b161aecf'
const VITE_background_URL = 'https://image.tmdb.org/t/p/original'

export default async function Movie ({params}) {
    const movieId = params.movieId;
    const response = await fetch(`${TMDB_BASE_URL}/movie/${movieId}?${language}&api_key=${API_KEY}`);
    const movieData = await response.json();


    let genres = [];
    for (let i in movieData.genres){
        genres.push( movieData.genres[i].name);
    }

    return (
        <div className='page'> 
        <section className="destaque" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(${VITE_background_URL}${movieData.backdrop_path})`
   
    }}>
            <header>
            <div><Link href="/">Pagina Inicial</Link></div>
            <div><Link href="list/FilmesAssistidos">Filmes Assistidos</Link></div>
            <div><Link href="list/FilmesAssistir">Filmes Para Assistir</Link></div>
            </header> 
           <div className="destaque--vertifical">
            <div className="destaque-horizonaltal">
                <div className="destaque-nome">{movieData.title}</div>
                <div className="destaque-info">
                    <div className="destaque-pontos"><strong id="avaliacao">Avaliação IMD: </strong>{movieData.vote_average} %</div>
                    <div className="destaque-lancamento"><strong>Lançamento:</strong>{movieData.release_date}</div>
                    <div className="destaque-genero"><strong>Generos: </strong> {genres.join(', ')}</div>                              
                </div>
                <div className="destaque-sinopse"><strong>Sinopse: </strong>{movieData.overview}</div>

        </div>
        </div>
        </section>
    </div>

     );
    }
