"use client"

const TMDB_BASE_URL = 'https://api.themoviedb.org/3'
const language = 'language=pt-BR'
const API_KEY = 'f9944b541279292b41c8fa75b161aecf'


const basicFetch = async (endpoint) =>{
  const req = await fetch(`${TMDB_BASE_URL}${endpoint}`);
  const json = await req.json();
return json; 
}


export default {

  getMovies: async () => {
    return [

      {

        slug: 'trending',
        title: 'Em Alta',
        items: await basicFetch (`/trending/movie/day?${language}&api_key=${API_KEY}`)

      },

      {

        slug: 'movies',
        title: 'Filmes',
        items: await basicFetch(`/discover/movie?include_adult=false&include_video=false&${language}&api_key=${API_KEY}`)

      },


      {

        slug: 'melhoresAvaliados',
        title: 'Melhores Avaliados',
        items: await basicFetch(`/movie/top_rated?${language}&api_key=${API_KEY}`)

      },
    ];
  },

  getMovieInfo: async (movieId) =>{

    let info = {};
    
    if(movieId){
      info = await basicFetch (`/movie/${movieId}?${language}&api_key=${API_KEY}`)
    }
    
    return info;
    }

}



