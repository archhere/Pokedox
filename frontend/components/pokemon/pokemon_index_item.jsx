import React from 'react';
// import PokemonIndex from './pokemon_index';
import {Link} from 'react-router-dom'

const PokemonIndexItem = ({pokemon}) => {
  return (
    <div>
  <li><Link to="/pokemon/:pokemonId"> {pokemon.name}</Link> </li>
  <li><img src={pokemon.image_url} /></li>
    </div>
  )
}

export default PokemonIndexItem;
