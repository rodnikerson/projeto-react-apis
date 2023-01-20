import React, { useContext, useEffect, useState } from 'react'
import Logo from '../Imgs/logo.png'
import { Button, ButtonAdd, ButtonDel, Frase, PokemonsContainer, Title } from './Styles/Details.styled'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import DetailsCard from '../Components/DetailsCard'
import Loading from '../Components/Loading'
import PokemonContext from '../PokemonContext'
import ModalForAdd from '../Components/ModalForAdd'
import ModalForRemove from '../Components/ModalForRemove'

function Details() {
    const { myPokedex, addToPokedex, removeFromPokedex, caughtOpen, removeOpen } = useContext(PokemonContext)
    let params = useParams();
    const [pokemon, setPokemon] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
            .then(res => {
                setPokemon(res.data)
                setLoading(false)
            })
            .catch(err => console.log(err))
    }, [params.id])
    return (
        <>
            <Title>
                <Link to='/'>
                    <Button>Todos Pokémons</Button>
                </Link>
                <img src={Logo} alt="Pokemon Logo" />
                {myPokedex.some(myPokemon => myPokemon.name === pokemon.name) ?
                    <ButtonDel onClick={() => removeFromPokedex(pokemon)}>Excluir da Pokédex</ButtonDel>
                    :
                    <ButtonAdd onClick={() => addToPokedex(pokemon)}>Adicionar à Pokédex</ButtonAdd>}
            </Title>
            <PokemonsContainer>
                <Frase>Detalhes</Frase>
                {loading ? <Loading /> : <DetailsCard pokemon={pokemon} />}
            </PokemonsContainer>
            {caughtOpen && <ModalForAdd />}
            {removeOpen && <ModalForRemove />}
        </>
    )
}

export default Details