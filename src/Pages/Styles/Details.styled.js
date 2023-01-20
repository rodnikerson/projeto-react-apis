import styled from "styled-components";
import PokeballBackground from "../../Imgs/backgroundpokeball.png"

export const Title = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 160px;
    margin: 0 30px;
    position: relative;
`

export const Button = styled.button`
    background: none;
    width: 287px;
    height: 74px;
    border-radius: 8px;
    border: none;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    color: #1A1A1A;
    text-decoration: underline;
    cursor: pointer;
`

export const ButtonDel = styled.button`
    width: 226px;
    height: 57px;
    background: #FF6262;
    border-radius: 8px;
    border: none;
    color: #FFF;
    cursor: pointer;
`

export const ButtonAdd = styled.button`
    width: 226px;
    height: 57px;
    background: #32DE84;
    border-radius: 8px;
    border: none;
    color: black;
    cursor: pointer;
`

export const Frase = styled.h2`
    padding: 30px 0;
    color: #FFF
`

export const PokemonsContainer = styled.main`
    padding: 0 30px;
    background: #5D5D5D;
    min-height: calc(100vh - 160px);
    background-image: url(${PokeballBackground});
    background-size: 100vh, auto;
    background-repeat: no-repeat;
    background-position: center;
`