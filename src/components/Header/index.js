import React from "react";
import './Header.css';
import Home from '@/src\app\page.js';

export default () => {
    return (
        <header className="header">

        <div className="pesquisa">
       <form>
        <input name="search" id='search' placeholder='Buscar...' onChange={evt => setFilter(evt.target.value)} value={filter} />
        </form>
      </div>
        </header>

    )
}