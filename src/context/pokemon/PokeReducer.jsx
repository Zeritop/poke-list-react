import { GET_POKEMONES, GET_PROFILE_POKEMON, GET_NEXT_POKEMON, GET_PREVIOUS_POKEMON } from '../types';

export default (state, action) => {
    const { payload ,type } = action;
    
    switch(type){
        case GET_POKEMONES:
            return{
                ...state,
                pokemones: payload
            }
        case GET_PROFILE_POKEMON:
            return{
                ...state,
                selectedPokemon: payload
            }
        case GET_NEXT_POKEMON:
            return{
                ...state,
                pokemones: payload.pokemones,
                offset: payload.offset
            }
        case GET_PREVIOUS_POKEMON:
            return{
                ...state,
                pokemones: payload.pokemones,
                offset: payload.offset
            }               
        default:
            return state    
    }
}