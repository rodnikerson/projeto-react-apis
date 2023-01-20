import React from 'react'
import { ModalContainer, Sentence, Title } from './Styles/Modals.styled'

const ModalForRemove = () => {
    return (
        <ModalContainer>
            <Title>Oh, não!</Title>
            <Sentence>O Pokémon foi removido da sua Pokédex</Sentence>
        </ModalContainer>
    )
}

export default ModalForRemove