import React from 'react'
import { useEffect, useState } from 'react';

const PokeDash = () => {

    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon")
            .then(res => {
            return res.json()
            })
            .then(res => {
            setPokemon(res.results);
            })
            .catch(err => console.log(err))
            }, []
            )

    return (
        <div>
            <h1>PokeDash</h1>
            {pokemon.map((poke, i) => {
                return(
                    <div key={i}>
                        <p>{poke.name}</p>
                    </div>
                )
            })}

        </div>
    )
}

export default PokeDash