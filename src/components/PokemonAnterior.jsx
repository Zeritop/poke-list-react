import React, { Fragment, useContext } from 'react'
import PokeContext from '../context/pokemon/PokeContext';

const PokemonAnterior = () => {

    const { getPreviousPokemon, offset } = useContext(PokeContext);

    return ( 
        <Fragment>
            {
                offset > 0 ? (
                    <button 
                    onClick={() => {
                        getPreviousPokemon(12) 
                        }
                    }
                    className="btn"
                    >
                        Anterior
                    </button>
                ) : (<div></div>)    
            }
            
        </Fragment>
     );
}
 
export default PokemonAnterior;