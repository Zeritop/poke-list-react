import React, { Fragment, useContext } from 'react'
import PokeContext from '../context/pokemon/PokeContext';
import PokemonDetalle from './PokemonDetalle';

const PokemonProfile = () => {

    const { selectedPokemon } = useContext(PokeContext);

    //console.log(selectedPokemon)

    return ( 
        <Fragment>
            {
                selectedPokemon ? (
                     <div>
                         <h3 
                         className="pokeSel"
                        > 
                                <span 
                                    className="mayus"
                                >
                                    {selectedPokemon.name + ' '}
                                </span> 
                            - #{selectedPokemon.id}
                        </h3>
                        <div className="card-image">
                            <img 
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${selectedPokemon.id}.png`} 
                                alt={selectedPokemon.name}
                            />
                        </div>
                         
                         <div className="container-stats">
                             <div className="item-stats">
                                 <div>{selectedPokemon.stats[0].base_stat}</div>
                                 <div className="mayus">{selectedPokemon.stats[0].stat.name}</div>
                             </div>
                            <div className="item-stats">
                                <p>{selectedPokemon.stats[1].base_stat}</p> 
                                <p className="mayus">{selectedPokemon.stats[1].stat.name}</p>
                            </div>
                            <div className="item-stats">
                                <p>{selectedPokemon.stats[2].base_stat}</p> 
                                <p className="mayus">{selectedPokemon.stats[2].stat.name}</p>
                            </div>
                            
                         </div>
                         <PokemonDetalle />
                    </div> 
                ) : (
                        <h3>Ningun Pokémon Seleccionado</h3>
                    )
            }
        </Fragment>
     );
}
 
export default PokemonProfile;