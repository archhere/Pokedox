import { RECEIVE_ALL_POKEMON, RECEIVE_ONE_POKEMON} from '../actions/pokemon_actions'
import merge from 'lodash/merge';


const pokemonReducer = (state = {},action) => {
  switch (action.type){
    case RECEIVE_ALL_POKEMON:
      return action.pokemon
      case  RECEIVE_ONE_POKEMON:
      let pokePayload = action.payload.pokemon;
      let newState = merge({}, state,{[pokePayload.id]: pokePayload});
      return newState
    default:
      return state;
  }
}

export default pokemonReducer
