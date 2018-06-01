import React from 'react'
import ReactDOM from 'react-dom'
import {RECEIVE_ALL_POKEMON, receiveAllPokemon} from './actions/pokemon_actions'
import {fetchAllPokemon} from './util/api_util'
import {configureStore} from './store/store'
import {requestAllPokemon} from './actions/pokemon_actions'
import {selectAllPokemon} from './reducers/selectors'
import Root from './components/root'
import { HashRouter, Route } from 'react-router-dom';

document.addEventListener('DOMContentLoaded',()=>{
  const rooteEl = document.getElementById('root');
  const store = configureStore();
  // window.requestAllPokemon = requestAllPokemon
  // window.selectAllPokemon = selectAllPokemon
  // window.getState = store.getState
  // window.dispatch = store.dispatch
  // window.fetchAllPokemon = fetchAllPokemon;
  // window.receiveAllPokemon = receiveAllPokemon;
  ReactDOM.render(<Root store = {store} />,rooteEl)
})
