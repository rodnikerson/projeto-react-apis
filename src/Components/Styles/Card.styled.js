import styled from "styled-components";

export const PokemonCard = styled.div`
    border-radius: 12px;
    background: ${props => props.variant};
    width: 440px;
    height: 210px;
    padding: 12px;
    position: relative;
`

export const TopInfo = styled.div`
    display: flex;
    width: 100%;
    height: 50%;
    padding: 3px 8px;
`

export const Details = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    color: #FFF;
`

export const PokemonId = styled.p`
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
`

export const PokemonName = styled.p`
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    margin-bottom: 10px;
`

export const PokemonTypeContainer = styled.div`
    display: flex;
    gap: 7px;
`

export const PokemonTypeImg = styled.div`
    width: 24px;
    height: 24px;
    background-image: ${props => `url(${require(`../../Imgs/${props.variant}.png`)})`};
    background-repeat: no-repeat;
    background-position: center;
`

export const PokemonType = styled.span`
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    border: 1px dashed rgba(255, 255, 255, 0.47);
    border-radius: 8px;
    width: 99px;
    height: 31px;
    display: flex;
    gap: 5px;
    align-items: center;
    padding: 5px 8px;
    background: ${props => props.variant};
`

export const DetailsBtn = styled.button`
    width: 74px;
    height: 24px;
    margin-bottom: 8px;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    background: none;
    border: none;
    text-decoration-line: underline;
    cursor: pointer;
    color: #FFF;
    margin-top: auto;
    a {
        color: #FFF;
    }
`

export const Pokemon = styled.div`
    width: 100%;
    height: 50%;
    padding: 3px 8px;
    display: flex;
    justify-content: space-between;
`

export const PokemonImg = styled.img`
    width: 193px;
    height: 193px;
    position: absolute;
    top: -53px;
    right: 8px;
`

export const PokeBackground = styled.img`
    width: 270px;
    height: 270px;
    position: absolute;
    right: -33px;
    top: -40px;
`

export const CaptureBtn = styled.button`
    padding: 4px 10px;
    width: 146px;
    height: 38px;
    background: #FFF;
    border-radius: 8px;
    border: none;
    margin-top: auto;
    margin-left: 25px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    cursor: pointer;
    z-index: 1;
`

export const DiscardBtn = styled.button`
    padding: 4px 10px;
    width: 146px;
    height: 38px;
    background: #FF6262;
    color: #FFF;
    border-radius: 8px;
    border: none;
    margin-top: auto;
    margin-left: 25px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    cursor: pointer;
    z-index: 1;
`