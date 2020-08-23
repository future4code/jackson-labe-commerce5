import React from "react";
import styled from "styled-components";


export default class TriCard extends React.Component {
    state= {
        listaCompletaDeProdutos: this.props.listaCompleta,
        ordenacao: 'crescente'
    }
      

    ordena = (event) => {
        if(event.target.value === 'decrescente'){
            this.setState({ordenacao: 'decrescente'})
        }else{
            this.setState({ordenacao: 'crescente'})
        }
    }
      render() {
        let listaFiltrada 
        if (this.props.valorMaximo==='' && this.props.valorMinimo==='' && this.props.valorBusca===''){
            listaFiltrada = this.state.listaCompletaDeProdutos 
        }else{
            listaFiltrada = this.state.listaCompletaDeProdutos.filter((produto)=>{
                return (produto.price<=this.props.valorMaximo && produto.price>=this.props.valorMinimo) || (produto.planetName.toLowerCase() === this.props.valorBusca.toLowerCase())
            })
           
        }

        //========== criando ordenação
        if(this.state.ordenacao === 'decrescente'){
            listaFiltrada.sort((item1,item2)=>{
                return item2.price - item1.price
            })  
        } else {
            listaFiltrada.sort((item1,item2)=>{
                return item1.price - item2.price
            }) 
        }

        
        const produtos = listaFiltrada.map((produto)=>{
            return(
                <PlanetCard>
                    <PlanetImage src={produto.planetImage} alt="Visite nosso planeta" />
                    <p>{produto.planetName}</p>
                    <p>{produto.package}</p>
                    <p>§$ {produto.price}</p>
                    <AddButton onClick={()=>this.props.addToCart(produto.planetName,produto.price)}>Adicionar ao foguete</AddButton>
                </PlanetCard>
             )
        })

        
        
        return (
        
            <Produtos>
                <h3>Quantidade de produtos: {produtos.length}</h3>
                <select onClick={this.ordena}>
                    <option value="crescente">Preço: crescente</option>
                    <option value="decrescente">Preço: decrescente</option>
                </select>
                {produtos}
            </Produtos>
        )
       
    }
}


//=====  CSS

const PlanetCard = styled.span`
    border: thin dotted blueviolet;
    padding: 0.5vw;
    background-color: lightsteelblue;
    color: darkslateblue;
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

const Produtos = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 50px repeat(2, 2fr);
  grid-row-gap:5px;
  grid-column-gap:5px;

  h3 {
      grid-column: 1/3;
      grid-row: 1/2;
      justify-self: self-start;
      align-self: center;
  }

  select {
    grid-column: 3/5;
    grid-row: 1/2;
    height: 20px;
    justify-self: self-end;
    align-self: center;
  }
`