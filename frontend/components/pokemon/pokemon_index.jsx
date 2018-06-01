import React from 'react';
import PokemonIndexItem from './pokemon_index_item'


class PokemonIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {

    return (
    <ul>
      {this.props.pokemon.map((poke, idx) => (



            <PokemonIndexItem  key={idx} pokemon={poke} />


      ))}
    </ul>
    )
  }
}

export default PokemonIndex;
