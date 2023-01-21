import styled from "styled-components";

export const Container = styled.div`
    overflow-x: hidden;
    overflow-y: hidden;
`

export const Title = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 160px;
    position: relative;
`

export const Button = styled.button`
    position: absolute;
    right: 0;
    top: calc(160px - 111px);
    width: 287px;
    height: 74px;
    border-radius: 8px;
    border: none;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    margin: 0 30px 0 0;
    background: #33A4F5;
    color: #FFF;
    cursor: pointer;
`

export const Frase = styled.h2`
    padding: 30px 0;
    color: #FFF
`

export const SentenceAndPokemonsContainer = styled.main`
    padding: 0 30px 30px 30px;
    background: #5D5D5D;
    min-height: calc(100vh - 160px);
    
    @media (max-width: 1360px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-items: 
    }

    @media (min-width: 1360px) and (max-width: 1860px) {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: auto;
        justify-items: center;
        padding: 0 15px 30px 15px;
    }
`

export const PokemonsContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    grid-row-gap: 50px;
    justify-items: center;
    
    @media (max-width: 1360px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto;
    }

    @media (min-width: 1360px) and (max-width: 1860px) {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: auto;
    }
`
