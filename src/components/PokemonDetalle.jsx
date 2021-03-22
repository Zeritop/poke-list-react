import React, { Fragment, useContext, useState } from 'react'
import PokeContext from '../context/pokemon/PokeContext';

const PokemonDetalle = () => {

    const { selectedPokemon } = useContext(PokeContext);
    const [ open, setOpen ] = useState(false);

    const closeDetails = () => {
        setOpen(false);
    }
    const openDetails = () => {
        setOpen(true);
    }

    return ( 
        <Fragment>
            <button className="btn-detalle" onClick={openDetails}>Detalles</button>
            <div className={open ? ('containerModal') : ('closeModal')}>
                <div className="cardModal">
                    {
                       <div className="cardModal__header">
                            <h2 className="mayus">{selectedPokemon.name}</h2>
                            <div className="cardModal__header-close" onClick={closeDetails}>X</div>
                       </div>
                    }
                    <hr/>
                    <div className="cardModal__body">
                        <label>Tipo:</label>
                        <ul>
                        {
                            selectedPokemon.types.map((item, index) => (
                                <li key={index}>{item.type.name}</li>
                            ))
                            
                        }
                        </ul>
                        <label>Habilidades:</label>
                        <ul>
                            {
                                selectedPokemon.abilities.map((item, index) => (
                                    <li key={index}>{item.ability.name}</li>
                                ))
                            }
                        </ul>
                        <label>Stats:</label>
                        <ul>
                            {
                                selectedPokemon.stats.map((item, index) => (
                                    <li key={index}>{item.base_stat} - {item.stat.name}</li>
                                ))
                            }   
                        </ul>
                        <label>Experiencia Base:</label>
                        <p>{selectedPokemon.base_experience}</p>
                        <div>
                            <label>Moves:</label>
                            <div className="cardModal__body-moves">
                                <ul>
                                    {
                                        selectedPokemon.moves.map((item, index) => (
                                            <li key={index}>{item.move.name}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
            </div>
        </Fragment>
     );
}
 
export default PokemonDetalle;