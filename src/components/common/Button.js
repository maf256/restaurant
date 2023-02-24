import styled from "styled-components";
import { Theme } from "./Theme"

// variant => primary/secondary
// size => small/medium/large

export default function Button({ variant, size, children }) {
    return (
        <ButtonComponent variant={variant} size={size}>
            {children}
        </ButtonComponent>
    )
}

const ButtonComponent = styled.button`
    width: ${({size})=> Theme.Button[size].width};
    height: 45px;
    border: 1px solid white;
    margin: 5px;
    background-color: ${({variant})=> Theme.Button[variant].backgroundColor};
    color: ${({variant}) => Theme.Button[variant].color};
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    :hover {
        border-radius: 20px;
        transition: all ease-in 0.2s;
    }
`