import styled from "styled-components";

export const StyledButton = styled.button`
    cursor: pointer;
    padding: 1.5em 0.5em;
    font-family: sans-serif;
    font-size: 1.25em;
    border: ${props => props.outline? 'lightblue': 'white'} 1px solid;
    background-color:  ${props => props.outline? 'white': 'lightblue'};
    width: ${props => props.fullWidth!== null ? '100%': 'auto'};
    &:hover{
        border: ${props => props.outline? 'lightblue': 'cornflowerblue'} 1px solid;
        background-color: ${props => props.outline? 'cornflowerblue': 'lightblue'};
        color: white;
    }

`