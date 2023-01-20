import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Card from '../Components/Card'
import ModalForRemove from '../Components/ModalForRemove'
import Logo from '../Imgs/logo.png'
import PokemonContext from '../PokemonContext'
import { SentenceAndPokemonsContainer, Frase, PokemonsContainer, Container } from './Styles/Home.styled'
import { Button, Title } from './Styles/Pokedex.styled'

function Pokedex() {
    const { myPokedex, removeOpen } = useContext(PokemonContext)
    return (
        <Container>
            <Title>
                <Link to="/">
                    <Button>Todos Pokémons</Button>
                </Link>
                <img src={Logo} alt="Pokemon Logo" />
            </Title>
            <SentenceAndPokemonsContainer>
                {myPokedex.length > 0 ?
                    <>
                        <Frase>Todos Pokémons</Frase>
                        <PokemonsContainer>
                            {myPokedex.map((pokemon, index) => {
                                return <Card key={index} pokemon={pokemon} />
                            })}
                        </PokemonsContainer>
                    </>
                    :
                    <Frase>Você ainda não capturou nenhum Pokémon.</Frase>
                }
            </SentenceAndPokemonsContainer>
            {removeOpen && <ModalForRemove />}
        </Container>
    )
}

export default Pokedex