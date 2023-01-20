import styled from "styled-components";

export const ModalContainer = styled.div`
    width: 400px;
    height: 195px;
    background: #FFF;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 5%;
    right: 2.5%;
    z-index: 1;
    animation: fade 2s linear;
    & {
        @keyframes fade {
            0%, 100% {
                opacity: 0;
            }
            50% {
                opacity: 1;
            }
        }
    }
`

export const Title = styled.p`
    font-weight: 700;
    font-size: 48px;
    line-height: 72px;
`

export const Sentence = styled.p`
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
`