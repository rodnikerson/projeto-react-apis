import { createContext, useEffect, useState } from "react";

const PokemonContext = createContext();

export function PokemonProvider({ children }) {
    useEffect(() => {
        const pokedex = JSON.parse(localStorage.getItem('pokedex'))
        return pokedex ? setMyPokedex(pokedex) : []
    }, [])
    const [myPokedex, setMyPokedex] = useState([])
    const [caughtOpen, setCaughtOpen] = useState(false)
    const [removeOpen, setRemoveOpen] = useState(false)
    const sortPokedex = (id) => {
        setMyPokedex(prev => prev.sort((a, b) => a.id > b.id ? 1 : -1))
    }
    const addToPokedex = (pokemon) => {
        setMyPokedex(prev => {
            let add = 0
            prev.map(eachPrev => eachPrev.name === pokemon.name ? add += 1 : add)
            return add < 1 ? [...prev, pokemon] : [...prev]
        })
        sortPokedex(pokemon.id)
        localStorage.setItem('pokedex', JSON.stringify(myPokedex))
        setCaughtOpen(true)
        setTimeout(() => setCaughtOpen(false), 2000)
    }
    const removeFromPokedex = (pokemon) => {
        setMyPokedex(prev => (prev.filter(el => el.name !== pokemon.name)))
        localStorage.setItem('pokedex', JSON.stringify(myPokedex))
        setRemoveOpen(true)
        setTimeout(() => setRemoveOpen(false), 2000)
    }

    return (
        <PokemonContext.Provider value={{
            myPokedex: myPokedex,
            addToPokedex: addToPokedex,
            removeFromPokedex: removeFromPokedex,
            caughtOpen: caughtOpen,
            setCaughtOpen: setCaughtOpen,
            removeOpen: removeOpen,
            setRemoveOpen: setRemoveOpen
        }}>
            {children}
        </PokemonContext.Provider>
    )
}

export default PokemonContext;