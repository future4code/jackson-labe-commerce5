import React from "react";
import styled from "styled-components";

const PlanetCard = styled.span`
    border: thin dotted blueviolet;
    padding: 0.5vw;
    background-color: lightsteelblue;
    color: darkslateblue;
`
const PlanetImage = styled.image`
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

export default function TripCard(props) {
    const {trip, addToCart} = props;
    return (
        <PlanetCard>
            <PlanetImage src= {trip.planetImage} alt="Visite nosso planeta" />
                <p>{trip.planetName}</p>
                <p>{trip.package}</p>
                <p>§$ {trip.price}</p>
                <AddButton onClick={addToCart}>Adicionar ao foguete</AddButton>
        </PlanetCard>
    )
}