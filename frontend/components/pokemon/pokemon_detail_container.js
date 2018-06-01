import { connect } from 'react-redux';
import PokemonIndex from './pokemon_index'
import {requestOnePokemon} from '../../actions/pokemon_actions'


const mapStateToProps = (state, ownProps)  => ({
  pokemon: state.entities.pokemon[ownProps.match.params.pokemonId]
})

const mapDispatchToProps = dispatch => ({
  requestAllPokemon: () => dispatch(requestAllPokemon())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail)
