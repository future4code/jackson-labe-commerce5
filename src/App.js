import React from 'react';

import BlackHole from "./accets/images/blackhole.jpg"
import Caprica from "./accets/images/caprica.jpg"
import Darillium from "./accets/images/darillium.jpg"
import Gallifrey from "./accets/images/gallifrey.jpg"
import Krypton from "./accets/images/krypton.jpg"
import Pandora from "./accets/images/pandora.jpg"
import Tanaris from "./accets/images/tanaris.png"
import Mars from "./accets/images/mars.jpg"

import TripCard from "./accets/Components/TripCard/TripCard"
import {Carrinho, ItemCarrinho} from './accets/Components/Carrinho/Carrinho'
import './App.css';


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


  //Aqui sera armazenado a lista de produtos
  //selecionados na pagina de produtos
  state = {
    id: trip.id,
    planetImage: trip.planetImage,
    planetName: trip.planetName,
    package: trip.package,
    price: trip.price,

    listaDeItems: [
      {
        id: 1,
        nomeProduto: 'fogete',
        quantidade: 1,
        preco: 80
      },
      {
        id:2,
        nomeProduto: 'Viagem pra lua',
        quantidade: 2,
        preco:100
      }
    ],
    valorTotal: ''
  }





// função para apagar item do carrinho
apagarProduto = (itemId) => {
  const listaAtualizada = this.state.listaDeItems.filter(item => {
    return itemId !== item.id;
  });
  
  this.setState({listaDeItems: listaAtualizada})

  this.atualizarValorTotal(listaAtualizada)
}




//atualiza o valor total do carrinho quando um item e adicionado ou apagado
atualizarValorTotal = (listaAtualizada) => {

  if(listaAtualizada.length > 0) {
      const arrayPrecos = listaAtualizada.map((item)=> {
        return item.preco * item.quantidade
      })
      const total = arrayPrecos.reduce((total, proximo) => total + proximo)
      this.setState({valorTotal: total})
  } else {
    this.setState({valorTotal: 0})
  }

}



//quando o componente é criado, soma os precos de todos os item
//do carrinho e atualiza no state
componentDidMount(){
  const arrayPrecos = this.state.listaDeItems.map((item)=> {
    return item.preco * item.quantidade
  })
  const total = arrayPrecos.reduce((total, proximo) => total + proximo)

  this.setState({valorTotal: total})
}





render(){

  //criando uma lista com todos os objetos da lista de Items do state
  const itemsCarrinho = this.state.listaDeItems.map((item)=>{
        return (
          <ItemCarrinho 
            key={item.id}
            qtdItem={item.quantidade}
            nomeItem={item.nomeProduto}
            apagarItem={()=>this.apagarProduto(item.id)}
          />
        )
      })



  return (
    <div className="App">
      {tripGrid}
      {/* imprime o componente Carrinho com a lista de items criada no render */}
      <Carrinho valorTotal={this.state.valorTotal} item={itemsCarrinho}/>
    </div>
  )

}
}

export default App;
