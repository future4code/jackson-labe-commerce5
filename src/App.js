import React from 'react';
import {Carrinho, ItemCarrinho} from './Components/Carrinho/Carrinho'
import './App.css';

class App extends React.Component {



  //Aqui sera armazenado a lista de produtos
  //selecionados na pagina de produtos
  state = {
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
      {/* imprime o componente Carrinho com a lista de items criada no render */}
      <Carrinho valorTotal={this.state.valorTotal} item={itemsCarrinho}/>
    </div>
  )

}
}

export default App;
