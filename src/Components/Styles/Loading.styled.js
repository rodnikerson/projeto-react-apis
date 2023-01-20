import styled, { keyframes } from "styled-components";

const RotateAnimation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

export const Wrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const Pokeball = styled.div`
    width: 60px;
    height: 60px;
    background-color: #fff;
    border-radius: 50% ;
    position: relative;
    overflow: hidden;
    border: 3px solid;
    animation: ${RotateAnimation} infinite 1s linear;

    &:after {
        content: '';
        position: absolute;
        width: 60px;
        height: 30px;
        background-color: red;
        border-bottom: 4px solid;
        top: -4px;
    }

    &:before{
        content: '';
        position: absolute;
        background-color: #fff;
        width: 10px;
        height:10px;
        border: 4px solid;
        border-radius: 50%;
        bottom: 18px;
        right: 18px;
        z-index: 1;
      }
`