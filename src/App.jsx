import React from 'react';
import PokemonList from './components/PokemonList';
import PokemonProfile from './components/PokemonProfile';

import PokemonState from './context/pokemon/PokemonState';

import './App.css';
import PokemonSiguiente from './components/PokemonSiguiente';
import PokemonAnterior from './components/PokemonAnterior';
import PokemonBuscador from './components/PokemonBuscador';

function App() {
  return (
    <PokemonState>
      <div className="container">
        <h2>Lista de Pokémon</h2>
        <PokemonBuscador />
        <div className="row">
          <PokemonList />
          <div className="card">
            <PokemonProfile />
          </div>
          <div className="container-btn">
            <PokemonAnterior />
            <PokemonSiguiente />
          </div>
        </div>
      </div>
      
    </PokemonState>
  );
}

export default App;
