import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react';

const PokeDash = () => {

    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon")
            .then(res => {
            console.log(res.data.results);
            setPokemon(res.data.results);
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