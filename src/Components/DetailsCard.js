import React from 'react'
import backgroundColor from '../backgroundColor'
import { PokemonId, PokemonName, PokemonType, PokemonTypeContainer, PokemonTypeImg } from './Styles/Card.styled'
import { BackSprite, DetailsContainer, FrontSprite, Infos, InitialDetails, Name, Sprites, Stat, Stats, StatsBar, StatsNum, Title, PokemonImg, Moves, Move, StatsSum } from './Styles/DetailsCard.styled'

function DetailsCard(props) {
    const { pokemon } = props
    const backgroundPerType = backgroundColor[0]
    const miniBackgroundPerType = backgroundColor[1]
    let statsSum = 0
    return (
        <>
            <DetailsContainer variant={backgroundPerType[pokemon.types[0].type.name]}>
                <Sprites>
                    <FrontSprite alt={pokemon.name} src={pokemon.sprites.front_default} />
                    <BackSprite alt={pokemon.name} src={pokemon.sprites.back_default} />
                </Sprites>
                <Stats>
                    <Title>Base stats</Title>
                    {pokemon.stats.map((stat, idx) => {
                        statsSum += stat.base_stat
                        return (
                            <>
                                <hr />
                                <Stat key={idx}>
                                    <Name>{stat.stat.name.toUpperCase()}</Name>
                                    <StatsNum>{stat.base_stat}</StatsNum>
                                    <StatsBar name={stat.stat.name} bar={stat.base_stat}></StatsBar>
                                </Stat>
                            </>
                        )
                    })}
                    <hr />
                    <Stat>
                        <Name>Total</Name>
                        <StatsSum>{statsSum}</StatsSum>
                    </Stat>
                    <hr />
                </Stats>
                <InitialDetails>
                    <Infos>
                        <PokemonId>{pokemon.id.toString().length < 2 ? `#0${pokemon.id}` : `#${pokemon.id}`}</PokemonId>
                        <PokemonName>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</PokemonName>
                        <PokemonTypeContainer>
                            {pokemon.types.map(type => {
                                return (
                                    <PokemonType variant={miniBackgroundPerType[type.type.name]} key={`${pokemon.id}-${type.type.name}`}>
                                        <PokemonTypeImg variant={type.type.name}></PokemonTypeImg>
                                        {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
                                    </PokemonType>)
                            }
                            )
                            }
                        </PokemonTypeContainer>
                    </Infos>
                    <PokemonImg alt={pokemon.name} src={pokemon.sprites.other['official-artwork'].front_default} />
                    <Moves>
                        <Title>Moves:</Title>
                        {pokemon.moves.slice(0, 5).map(move => <Move>{move.move.name.charAt(0).toUpperCase() + move.move.name.slice(1)}</Move>)}
                    </Moves>
                </InitialDetails>
            </DetailsContainer>
        </>
    )
}

export default DetailsCard