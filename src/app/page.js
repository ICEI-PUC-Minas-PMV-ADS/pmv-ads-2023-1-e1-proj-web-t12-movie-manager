"use client"
import React, { useEffect, useState } from 'react';
import  './page.module.css';
import TMDB from '@/utils/TMDB';
import MovieRow from '@/components/MovieRow';
import FilmeDestaque from '@/components/FilmeDestaque';
import Link from 'next/link';

export default function Home() {

  const [movieList, setMovieList] = useState ([]);
  const [destaqueData, setDestaqueData] = useState ([]);
  const [filter, setFilter] = useState ("");

  
  useEffect(() => {
    const loadAll = async () => {
    // Lista de filmes (Home)  
    let list = await TMDB.getMovies();
    setMovieList(list);  

      // filme Destaque
    let destaque = list.filter(i => i.slug === 'movies');
    let escolhaAleatoria = Math.floor(Math.random() * (destaque[0].items.results.length - 1));
    let escolha = destaque[0].items.results[escolhaAleatoria];  
    let escolhaInfo = await TMDB.getMovieInfo(escolha.id);
    setDestaqueData(escolhaInfo);
    }

    loadAll();

  },[]);

  return (
    <div className='page'>
      <header className='header'>
        <div className='menu'>
          <div><Link href="list/FilmesAssistidos">Filmes Assistidos</Link></div>
          <div><Link href="list/FilmesAssistir">Filmes Para Assistir</Link></div>
          </div>
          <div className="pesquisa">
       <div className='search' >
        <input type="search" placeholder='Buscar...' onChange={evt => setFilter(evt.target.value)} value={filter} />
        </div>
      </div>
      </header>

    <div id='Destaque'>
      {destaqueData &&
      <FilmeDestaque item={destaqueData}/>
      }
    </div>

      <section className='lists'>
        {movieList.map((item, key) =>(
         <MovieRow key={key} title={item.title} items={item.items} filter={filter}/>
        ))}
      </section>

      <footer>
        
      </footer>
    </div>
    
  );
  
}

