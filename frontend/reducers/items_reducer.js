import merge from 'lodash/merge';
import { RECEIVE_ALL_POKEMON, RECEIVE_ONE_POKEMON} from '../actions/pokemon_actions'

const itemsReducer = (state = {}, action) => {
  switch (action.type){
    case RECEIVE_ONE_POKEMON:

      return merge({}, state, action.payload.items)
    default:
      return state;
  }
}
