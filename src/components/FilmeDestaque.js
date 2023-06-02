"use client"
import React from 'react';
import './FilmeDestaque.css';
import Link from 'next/link';


const VITE_background_URL = 'https://image.tmdb.org/t/p/original'

export default ({item}) => {

    let genero = [];
    for (let i in item.genres){
        genero.push( item.genres[i].name);
    }

    return(
        <section className="destaque" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(${VITE_background_URL}${item.backdrop_path})`
   
    }}>
        <div className="filmedestaque--vertifical">
            <div className="filmedestaque-horizonaltal">
                <div className="filmedestaque-nome">{item.title}</div>
                <div className="destaque-info">
                    <div className="filmedestaque-sinopse"><strong>Sinopse: </strong>{item.overview}</div>
                    <div className="filmedestaque-botoes">
                        <Link href={`/list/add/${item.id}`}> + Minha Lista </Link>
                    </div>
                    <div className="filmedestaque-genero"><strong>Generos: </strong> {genero.join(', ')}</div>
                </div>
            </div>

        </div>

        </section>
    );
}
