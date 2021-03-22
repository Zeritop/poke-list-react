import React, { Fragment, useContext, useState } from 'react'
import PokeContext from '../context/pokemon/PokeContext';

const PokemonBuscador = () => {

    const { getProfilePokemon } = useContext(PokeContext);
    const [ name, setName ] = useState('');
    const [ error, setError ] = useState(false);

    setTimeout(() => {
        //console.log(error);
        setError(false);
    }, 3000)

    const handleChange = (e) => {
        setName(e.target.value);
        //console.log(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name === ''){
            setError(true);
        }else{
        setError(false);
        getProfilePokemon(name);
        setName('');
        
        //console.log(name)
        }
    }

    return ( 
        <Fragment>
            <form onSubmit={  handleSubmit }>
                <input 
                    type="text"  
                    placeholder="Busca un pokemon..."
                    className="input-buscador"
                    value={name}
                    onChange={handleChange}
                />
                <button className="btn-buscador" type="submit">Buscar</button>
            </form>
            {
                    error ? ( <p className="inputVacio">Ingresa un Pokemon</p> ) : (<div></div>)
            }
        </Fragment>
     );
}
 
export default PokemonBuscador;