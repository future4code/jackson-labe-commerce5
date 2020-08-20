import React from "react";

const TripCard = {

}
const PlanetImage = {

}
const AddButton = {

}

export default function(props) {
    const {trip, addToCart} = props;
    return (
        <TripCard>
            <PlanetImage src= {trip.planetImage} alt="Visite nosso planeta" />
                <p>{trip.planetName}</p>
                <p>§$ {trip.price}</p>
                <AddButton onClick={}>Adicionar ao foguete</AddButton>
        </TripCard>
    )
}