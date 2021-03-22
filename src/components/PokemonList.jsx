import React, { Fragment, useContext, useEffect } from 'react';
import PokeContext from '../context/pokemon/PokeContext'


const PokemonList = () => {

    const { getPokemon, pokemones, getProfilePokemon } = useContext(PokeContext);

    useEffect(() => {
        getPokemon();
    }, [])
    //console.log(pokemones)

    return ( 
        <Fragment>
            <ul>
                {
                    pokemones.map(item => (
                        <li key={item.name} onClick={() => { getProfilePokemon(item.name) }
                        } className="mayus lista-pokemon">
                            <a href="#!">{item.name}</a>
                        </li>
                    ))
                }
            </ul>
        </Fragment>
     );
}
 
export default PokemonList;