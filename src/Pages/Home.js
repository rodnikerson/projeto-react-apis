import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../Components/Card'
import Loading from '../Components/Loading'
import ModalForAdd from '../Components/ModalForAdd'
import ModalForRemove from '../Components/ModalForRemove'
import Logo from '../Imgs/logo.png'
import PokemonContext from '../PokemonContext'
import { Button, Container, Frase, PokemonsContainer, SentenceAndPokemonsContainer, Title } from './Styles/Home.styled'

function Home() {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true)
  const getPokemons = () => {
    let endpoints = [];
    for (let i = 1; i <= 386; i++) {
      endpoints = [...endpoints, `https://pokeapi.co/api/v2/pokemon/${i}/`]
    }
    axios.all(endpoints.map(endpoint => axios.get(endpoint)))
      .then(res => {
        setPokemons(res)
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
      })
  }
  useEffect(() => getPokemons(), [])
  const { caughtOpen, removeOpen } = useContext(PokemonContext)
  return (
    <Container>
      <Title>
        <img src={Logo} alt="Pokemon Logo" />
        <Link to="/pokedex">
          <Button>Pokédex</Button>
        </Link>
      </Title>
      <SentenceAndPokemonsContainer>
        <Frase>Todos Pokémons</Frase>
        <PokemonsContainer>
          {loading ? <Loading /> : pokemons.map((pokemon, index) => {
            return (
              <Card key={index} pokemon={pokemon.data} />
            )
          })}
        </PokemonsContainer>
      </SentenceAndPokemonsContainer>
      {caughtOpen && <ModalForAdd />}
      {removeOpen && <ModalForRemove />}
    </Container>
  )
}

export default Home