
import React from "react"
import BlackHole from "./accets/images/blackhole.jpg"
import Caprica from "./accets/images/caprica.jpg"
import Darillium from "./accets/images/darillium.jpg"
import Gallifrey from "./accets/images/gallifrey.jpg"
import Krypton from "./accets/images/krypton.jpg"
import Pandora from "./accets/images/pandora.jpg"
import Tanaris from "./accets/images/tanaris.png"
import Mars from "./accets/images/mars.jpg"

import Filtros from "./accets/components/Filtros"
import TripCard from "./accets/components/tripCard"
import {Carrinho, ItemCarrinho} from './accets/components/Carrinho'
import styled from 'styled-components';
import './App.css';

class App extends React.Component {

  //Aqui sera armazenado a lista de produtos
  //selecionados na pagina de produtos
  state = {
    valorInputMinimo: '',
    valorInputMaximo: '',
    valorInputBuscar: '',


    listaDeItems: [],

    valorTotal: '',
    apertouCarrinho: false,

    //lista completa de produtos
    trip: [
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
    
  }

//======= adicionar ao carrinho
  addCarrinho = ( nome, preco) => {
    const produto = {
      id: Date.now(),
      nomeProduto: nome ,
      quantidade: 1,
      preco: preco
    }

    const novaLista = [...this.state.listaDeItems, produto]
    this.setState({ listaDeItems: novaLista})

    this.atualizarValorTotal(novaLista)
    this.salvaStorage(novaLista)
    this.abriVenda()
  }

  salvaStorage= (carrinho) =>{
      localStorage.setItem("carrinho", JSON.stringify(carrinho))
  }

  //busca os dados salvos no Storage
  componentWillMount(){
    const backupCarrinho = JSON.parse(localStorage.getItem('carrinho'))
    
    if(backupCarrinho){
      this.setState({ listaDeItems: backupCarrinho})
      this.atualizarValorTotal(backupCarrinho)
    }
  }




// função para apagar item do carrinho
apagarProduto = (itemId) => {
  const listaAtualizada = this.state.listaDeItems.filter(item => {
    return itemId !== item.id;
  });
  
  this.setState({listaDeItems: listaAtualizada})

  this.atualizarValorTotal(listaAtualizada)
  this.salvaStorage(listaAtualizada)
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
  if(this.state.listaDeItems.length > 0){
    const arrayPrecos = this.state.listaDeItems.map((item)=> {
      return item.preco * item.quantidade
    })
    const total = arrayPrecos.reduce((total, proximo) => total + proximo)

    this.setState({valorTotal: total})
  }

}


abriCarrinho = () => {
  this.setState({
    apertouCarrinho: !this.state.apertouCarrinho
  })
}

abriVenda = () => {
  this.setState({
    apertouCarrinho: true
  })

  console.log(this.state.listaDeItems.length)
}

//========= Monitorando campos====================
onChangeMinimo = (event) => {
  this.setState({
    valorInputMinimo: event.target.value.toLowerCase()
  })
}

onChangeMaximo = (event) => {
  this.setState({
    valorInputMaximo: event.target.value.toLowerCase()
  })
};

onChangeBuscar = (event) => {
  this.setState({
    valorInputBuscar: event.target.value.toLowerCase()
  })
};


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
         listadeProdutos={this.state.trip}
         valorMinimo = {this.state.valorInputMinimo}
         Minimo={this.onChangeMinimo}

         valorMaximo = {this.state.valorInputMaximo}
         Maximo={this.onChangeMaximo}
         
         valorBusca = {this.state.valorInputBuscar}
         Busca={this.onChangeBuscar}
      />

     
        <TripCard
        
          listaCompleta={this.state.trip}
          valorMinimo = {this.state.valorInputMinimo}
          valorMaximo = {this.state.valorInputMaximo}
          valorBusca = {this.state.valorInputBuscar}
          addToCart = {this.addCarrinho}
          />

      
      <ContainerCarrinho visibilidade={this.state.apertouCarrinho}>
        <Carrinho 
          valorTotal={this.state.valorTotal} 
          item={itemsCarrinho}
          // listaCarrinho={this.state.listaDeItems}
          />
      </ContainerCarrinho>
      

      <Botao onClick={this.abriCarrinho}>Carrinho</Botao>
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
  display: ${props=> props.visibilidade ? 'block' : 'none'} ;
`
export default App;
