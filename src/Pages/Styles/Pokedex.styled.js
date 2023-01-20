import styled from "styled-components";

export const Title = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 160px;
    position: relative;
`

export const Button = styled.button`
    position: absolute;
    left: 0;
    top: calc(160px - 111px);
    background: none;
    width: 287px;
    height: 74px;
    border-radius: 8px;
    border: none;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    margin: 0 0 0 30px;
    color: #1A1A1A;
    text-decoration: underline;
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
    
`