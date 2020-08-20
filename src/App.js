import React from 'react';
import tripCard from "./accets/components/tripCard.jsx";
import BlackHole from "./accets/images/blackhole.jpg";
import Caprica from "./accets/images/caprica.jpg";
import Darillium from "./accets/images/darillium.jpg";
import Gallifrey from "./accets/images/gallifrey.jpg";
import Krypton from "./accets/images/krypton.jpg";
import Pandora from "./accets/images/pandora.jpg";
import Tanaris from "./accets/images/tanaris.png";
import Mars from "./accets/images/mars.jpg";
import logo from './logo.svg';
import './App.css';

const trip = [{
    id: 1,
    planetImage: {BlackHole}, 
    planetName: "Buraco Negro",
    price: 1000,
  },
  {
    id: 2,
    planetImage:{Caprica},
    planetName: "Caprica",
    price: 400,
  },
  {
    id: 3,
    planetImage:{Darillium},
    planetName: "Darillium",
    price: 750,
  },
  {
    id: 4,
    planetImage:{Gallifrey},
    planetName: "Gallifrey",
    price: 1200,
  },
  {
    id: 5,
    planetImage:{Krypton},
    planetName: "Krypton",
    price: 600,
  },
  {
    id: 6,
    planetImage:{Pandora},
    planetName: "Pandora",
    price: 1100,
  },
  {
    id: 7,
    planetImage:{Tanaris},
    planetName: "Tanaris",
    price: 500,
  },
  {
    id: 8,
    planetImage:{Mars},
    planetName: "Marte",
    price: 100,
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
