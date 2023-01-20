import React, { useContext } from 'react'
import { CaptureBtn, Details, DetailsBtn, DiscardBtn, PokeBackground, Pokemon, PokemonCard, PokemonId, PokemonImg, PokemonName, PokemonType, PokemonTypeContainer, PokemonTypeImg, TopInfo } from './Styles/Card.styled'
import PokeballBackground from '../Imgs/backgroundpokeball.png'
import { Link } from 'react-router-dom'
import PokemonContext from '../PokemonContext'
import backgroundColor from '../backgroundColor'

function Card(props) {
  const { pokemon } = props
  const { myPokedex, addToPokedex, removeFromPokedex } = useContext(PokemonContext)
  const backgroundPerType = backgroundColor[0]
  const miniBackgroundPerType = backgroundColor[1]
  return (
    <PokemonCard variant={backgroundPerType[pokemon.types[0].type.name]}>
      <TopInfo>
        <Details>
          <PokemonId>{pokemon.id.toString().length < 2 ? `#0${pokemon.id}` : `#${pokemon.id}`}</PokemonId>
          <PokemonName>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</PokemonName>
          <PokemonTypeContainer>
            {pokemon.types.map(type => {
              return (
                <PokemonType variant={miniBackgroundPerType[type.type.name]} key={`${pokemon.id}-${type.type.name}`}>
                  <PokemonTypeImg variant={type.type.name}></PokemonTypeImg>
                  {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
                </PokemonType>)
            })}
          </PokemonTypeContainer>
        </Details>
        <PokemonImg alt={pokemon.name} src={pokemon.sprites.other['official-artwork'].front_default} />
        <PokeBackground alt='Pokeball' src={`${PokeballBackground}`} />
      </TopInfo>
      <Pokemon>
        <DetailsBtn>
          <Link to={`/details/${pokemon.id}`}>Detalhes</Link>
        </DetailsBtn>
        {myPokedex.some(myPokemon => myPokemon.name === pokemon.name) ?
          <DiscardBtn onClick={() => removeFromPokedex(pokemon)}>Excluir</DiscardBtn>
          :
          <CaptureBtn onClick={() => addToPokedex(pokemon)}>Capturar!</CaptureBtn>}
      </Pokemon>
    </PokemonCard>
  )
}

export default Card