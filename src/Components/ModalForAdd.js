import React from 'react'
import { ModalContainer, Sentence, Title } from './Styles/Modals.styled'

const ModalForAdd = () => {
    return (
        <ModalContainer>
            <Title>Gotcha!</Title>
            <Sentence>O Pokémon foi adicionado à sua Pokédex</Sentence>
        </ModalContainer>
    )
}

export default ModalForAdd