import styled from "styled-components";
import PokeballBackground from '../../Imgs/backgroundpokeball.png'

export const DetailsContainer = styled.main`
    display: flex;
    width: 95vw;
    height: 60vh;
    background: transparent;
    padding: 20px 40px;
    gap: 2.5%;
    border-radius: 35px;
    background: ${props => props.variant};
`

export const Sprites = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 25%;
    border-radius: 14px;
    background: #FFF;
`
export const FrontSprite = styled.img`
    width: 280px;
    height: 280px;

    @media (max-width: 1360px) {
        width: 175px;
        height: 175px;
    }

    @media (min-width: 1360px) and (max-width: 1860px) {
        width: 190px;
        height: 190px;
    }
`

export const BackSprite = styled.img`
    width: 280px;
    height: 280px;

    @media (max-width: 1360px) {
        width: 175px;
        height: 175px;
    }

    @media (min-width: 1360px) and (max-width: 1860px) {
        width: 190px;
        height: 190px;
    }
`

export const Stats = styled.div`
    width: 25%;
    height: 100%;
    padding: 15px 30px;
    border-radius: 14px;
    background: #FFF;
`

export const Title = styled.p`
    font-weight: 800;
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 25px;
`

export const Stat = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    height: 2rem;
`

export const Name = styled.p`
    font-size: 0.675rem;
    width: 35%;

    @media (min-width: 1360px) and (max-width: 1860px) {
        font-size: 0.575rem;
    }

    @media (max-width: 1360px) {
        font-size: 0.55rem;
    }
`

export const StatsNum = styled.p`
    font-size: 0.675rem;
    width: 5%;
`

export const StatsBar = styled.span`
    width: calc(${props => props.bar}% * 0.35);
    height: 33%;
    background: ${props => props.name === 'special-attack' || props.name === 'special-defense' ? '#FFDE6A' : '#FF7C2D'};
`

export const StatsSum = styled.p`
    font-size: 0.675rem;
    font-weight: bold;
    width: 5%;
`

export const InitialDetails = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    position: relative;
    background-image: url(${PokeballBackground});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 85%;
`

export const Infos = styled.div`
    width: 50%;
    height: 33%;
    color: #FFF;
`

export const PokemonImg = styled.img`
    width: 193px;
    height: 193px;
    position: absolute;
    top: -110px;
    right: 0;
`

export const Moves = styled.div`
    height: 100%;
    width: 33%;
    padding: 16px;
    background: white;
    border-radius: 10px;

    @media (min-width: 1360px) and (max-width: 1860px) {
        height: 70%;
        width: 40%;
    }

    @media (max-width: 1360px) {
        height: 70%;
        width: 40%;
    }
`

export const Move = styled.span`
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    width: 66%;
    border: 1px dashed rgba(255, 255, 255, 0.47);
    border-radius: 10px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    padding: 5px 8px;
    gap: 17px;
    background: #ECECEC;
    color: black;

    @media (min-width: 1360px) and (max-width: 1860px) {
        height: 10%;
        width: 75%;
    }

    @media (max-width: 1360px) {
        width: 80%;
        height: 10%;
    }
`
