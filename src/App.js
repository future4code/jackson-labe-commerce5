
import React from "react"
// import tripCard from "./accets/components/tripCard.jsx";

import BlackHole from "./accets/images/blackhole.jpg"
import Caprica from "./accets/images/caprica.jpg"
import Darillium from "./accets/images/darillium.jpg"
import Gallifrey from "./accets/images/gallifrey.jpg"

import Krypton from "./accets/images/krypton.jpg"
import Pandora from "./accets/images/pandora.jpg"
import Tanaris from "./accets/images/tanaris.png"
import Mars from "./accets/images/mars.jpg"

import Filtros from "./accets/components/Filtros"
// import './App.css';


import TripCard from "./accets/components/tripCard"
import {Carrinho, ItemCarrinho} from './accets/components/Carrinho'
import styled from 'styled-components';
import './App.css';

//Lista de produtos do site
const trip = [
  {
    id: 1,
    planetImage: BlackHole, 
    planetName: "Buraco Negro",
    package: "3 dias estelares",
    price: 1000,
  },
  
  {
    id: 2,
    planetImage:Caprica,
    planetName: "Caprica",
    package: "3 dias estelares",
    price: 400,
  },
  {
    id: 3,
    planetImage:Darillium,
    planetName: "Darillium",
    package: "3 dias estelares",
    price: 750,
  },
  {
    id: 4,
    planetImage:Gallifrey,
    planetName: "Gallifrey",
    package: "3 dias estelares",
    price: 1200,
  },
  {
    id: 5,
    planetImage:Krypton,
    planetName: "Krypton",
    package: "3 dias estelares",
    price: 600,
  },
  {
    id: 6,
    planetImage:Pandora,
    planetName: "Pandora",
    package: "3 dias estelares",
    price: 1100,
  },
  {
    id: 7,
    planetImage:Tanaris,
    planetName: "Tanaris",
    package: "3 dias estelares",
    price: 500,
  },
  {
    id: 8,
    planetImage:Mars,
    planetName: "Marte",
    package: "3 dias estelares",
    price: 100,
  }
]



//Array de produtos em JSX
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
    valorTotal: '',
    apertouCarrinho: true
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


abriCarrinho = () => {
  this.setState({
    apertouCarrinho: !this.state.apertouCarrinho
  })
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
    <ContentApp>


      <Filtros
         listadeProdutos={trip}
      />
      <Produtos>
         {tripGrid }
      </Produtos>
      <ContainerCarrinho>
        <Carrinho valorTotal={this.state.valorTotal} item={itemsCarrinho}/>
      </ContainerCarrinho>
      

      <Botao onClick={this.abriCarrinho} tipoDisplay={"v"}>Carrinho</Botao>
    </ContentApp>
  )

}

}

const ContentApp = styled.div`
  width: 100vw;
  background-color: #B0C4DE;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  position: relative;
  `
const Botao = styled.button`
  position: absolute; 
  `
const ContainerCarrinho = styled.div`
  display: ${(props) =>{
    if(props.tipoDisplay === "v"){
      return "block"
    } else {
      return "none"
    }
  }};
`

const Produtos = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap:5px;
  grid-column-gap:5px;
`
export default App;
