import React, { useReducer } from 'react';
import PokeContext from './PokeContext';
import PokeReducer from './PokeReducer';
import axios from 'axios';
import { GET_POKEMONES, GET_PROFILE_POKEMON, GET_NEXT_POKEMON, GET_PREVIOUS_POKEMON } from '../types';

const PokemonState = (props) => {

    const initialState = {
        pokemones: [],
        selectedPokemon: null,
        offset: 0
    }

    const [ state, dispatch ] = useReducer(PokeReducer, initialState);
    const offset = state.offset;

    const getPokemon = async () => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=12`);
        dispatch({
            type: GET_POKEMONES,
            payload: res.data.results
        })
    }

    const getProfilePokemon = async (id) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/` + id);
        dispatch({
            type: GET_PROFILE_POKEMON,
            payload: res.data
        })
    }

    const getNextPokemon = async (numero) => {
        const siguiente = offset + numero
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${siguiente}&limit=12`);
        dispatch({
            type: GET_NEXT_POKEMON,
            payload: {
                pokemones: res.data.results,
                offset: siguiente
            }
            
        })
    }

    const getPreviousPokemon = async (numero) => {
        const previous = offset - numero
        if(previous >= 0){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${previous}&limit=12`)
            dispatch({
                type: GET_PREVIOUS_POKEMON,
                payload: {
                    pokemones: res.data.results,
                    offset: previous
                }
            })
        }
        
    }


    return ( 
        <PokeContext.Provider value={{
            pokemones: state.pokemones,
            selectedPokemon: state.selectedPokemon,
            offset: state.offset,
            getPokemon,
            getProfilePokemon,
            getNextPokemon,
            getPreviousPokemon
        }}>
            { props.children }
        </PokeContext.Provider>
     );
}
 
export default PokemonState;