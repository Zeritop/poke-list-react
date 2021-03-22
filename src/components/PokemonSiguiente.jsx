import React, { Fragment, useContext } from 'react';
import PokeContext from '../context/pokemon/PokeContext';

const PokemonSiguiente = () => {

    const  { getNextPokemon, offset } = useContext(PokeContext);

    //console.log(getNextPokemon());

    return ( 
        <Fragment>
            {
                offset <= 1105 ? (
                <button 
                    onClick={
                        () => { 
                            getNextPokemon(12) 
                        }
                    }
                    className="btn"
                    >
                        Siguiente
                    </button>
                    ) : (<div></div>)
            }
            
        </Fragment>
     );
}
 
export default PokemonSiguiente;