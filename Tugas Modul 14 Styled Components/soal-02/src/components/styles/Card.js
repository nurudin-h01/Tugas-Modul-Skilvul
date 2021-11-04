import styled from 'styled-components'

export const CardContainer = styled.div`
    border: rgba(192, 192, 192, 0.5) 1px solid;
    border-radius: 0.5em;
    width: ${props => props.width || "100%"};
    -webkit-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);
    margin: 5px;

`

export const CardImage = styled.img`
    width: 100%;
    height: 450px;
    object-fit: cover;
    border-top-left-radius: 0.5em;
    border-top-right-radius: 0.5em;
`

export const CardBody = styled.div`
    padding: 1em;
`
export const CardPrice = styled.div`
    font-family: sans-serif;
    font-size: 1.25em;
    font-weight: 600;
    margin: 0;
    margin-bottom: 0.5em;
    text-align: center;
`

export const CardProductName = styled.div`
    font-family: sans-serif;
    font-size: 1.25em;
    font-weight: 600;
    margin: 0;
    text-align: center;
    margin-bottom: 0.5em;
    color: gray;
`