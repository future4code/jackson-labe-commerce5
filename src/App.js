import React from "react"
// import tripCard from "./accets/components/tripCard.jsx";
import BlackHole from "./accets/images/blackhole.jpg"
import Caprica from "./accets/images/caprica.jpg"
import Darillium from "./accets/images/darillium.jpg"
import Gallifrey from "./accets/images/gallifrey.jpg"
import {Krypton} from "./accets/images/krypton.jpg"
import Pandora from "./accets/images/pandora.jpg"
import Tanaris from "./accets/images/tanaris.png"
import Mars from "./accets/images/mars.jpg"
import TripCard from "./accets/components/tripCard.jsx"
// import './App.css';

const trip = [
  {
    id: 1,
    planetImage: {BlackHole}, 
    planetName: "Buraco Negro",
    package: "3 dias estelares",
    price: 1000,
  },
  {
    id: 2,
    planetImage: {BlackHole}, 
    planetName: "Buraco Negro",
    package: "5 dias estelares",
    price: 1400,
  },
  {
    id: 3,
    planetImage:{Caprica},
    planetName: "Caprica",
    package: "3 dias estelares",
    price: 400,
  },
  {
    id: 4,
    planetImage:{Caprica},
    planetName: "Caprica",
    package: "5 dias estelares",
    price: 550,
  },
  {
    id: 5,
    planetImage:{Darillium},
    planetName: "Darillium",
    package: "3 dias estelares",
    price: 750,
  },
  {
    id: 6,
    planetImage:{Darillium},
    planetName: "Darillium",
    package: "5 dias estelares",
    price: 900,
  },
  {
    id: 7,
    planetImage:{Gallifrey},
    planetName: "Gallifrey",
    package: "3 dias estelares",
    price: 1200,
  },
  {
    id: 8,
    planetImage:{Gallifrey},
    planetName: "Gallifrey",
    package: "5 dias estelares",
    price: 1900,
  },
  {
    id: 9,
    planetImage:{Krypton},
    planetName: "Krypton",
    package: "3 dias estelares",
    price: 600,
  },
  {
    id: 10,
    planetImage:{Krypton},
    planetName: "Krypton",
    package: "5 dias estelares",
    price: 850,
  },
  {
    id: 11,
    planetImage:{Pandora},
    planetName: "Pandora",
    package: "3 dias estelares",
    price: 1100,
  },
  {
    id: 12,
    planetImage:{Pandora},
    planetName: "Pandora",
    package: "5 dias estelares",
    price: 1600,
  },
  {
    id: 13,
    planetImage:{Tanaris},
    planetName: "Tanaris",
    package: "3 dias estelares",
    price: 500,
  },
  {
    id: 14,
    planetImage:{Tanaris},
    planetName: "Tanaris",
    package: "5 dias estelares",
    price: 700,
  },
  {
    id: 15,
    planetImage:{Mars},
    planetName: "Marte",
    package: "3 dias estelares",
    price: 100,
  },
  {
    id: 16,
    planetImage:{Mars},
    planetName: "Marte",
    package: "5 dias estelares",
    price: 125,
  }
]

//configurei as props do componente TripCard
const tripGrid = trip.map((item) => {
  return (
    <TripCard
    planetImage={item.planetImage}
    planetName={item.planetName}
    package={item.package}
    price={item.price}
    //addToCart={/*função add ao carrinho*/}
    />
  );
})
class App extends React.Component {
  state = {
    id: trip.id,
    planetImage: trip.planetImage,
    planetName: trip.planetName,
    package: trip.package,
    price: trip.price,
  }
  render(){
    return(
      <div>
        {tripGrid}
      </div>
    )
  }
}

export default App;
