import React from "react";
import styled from "styled-components";

export default function TripCard(props) {
    //const {trip, addToCart} = props;
    return (
        <PlanetCard>
            <PlanetImage src={props.planetImage} alt="Visite nosso planeta" />
            <p>{props.planetName}</p>
            <p>{props.package}</p>
            <p>§$ {props.price}</p>
            <AddButton onClick={props.addToCart}>Adicionar ao foguete</AddButton>
        </PlanetCard>
    )
}



//=====  CSS

const PlanetCard = styled.span`
    border: thin dotted blueviolet;
    padding: 0.5vw;
    background-color: lightsteelblue;
    color: darkslateblue;
    display: ;  

`

// mome da tag tava styled.image
const PlanetImage = styled.img`
    max-width: 150px;
    margin: 0 auto;
`
const AddButton = styled.button`
    background-color: darkblue;
    color: lightyellow;
    padding: 1vw;
    margin: 0 auto;
    :hover{
        background-color: red;
    }
`