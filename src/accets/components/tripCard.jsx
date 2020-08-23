import React from "react";
import styled from "styled-components";


export default class TriCard extends React.Component {
    state= {
        listaCompletaDeProdutos: this.props.listaCompleta,
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

        const produtos = listaFiltrada.map((produto)=>{
            return(
                <PlanetCard>
                    <PlanetImage src={produto.planetImage} alt="Visite nosso planeta" />
                    <p>{produto.planetName}</p>
                    <p>{produto.package}</p>
                    <p>§$ {produto.price}</p>
                    <AddButton onClick={()=>this.props.addToCart(produto.id,produto.planetName,produto.price)}>Adicionar ao foguete</AddButton>
                </PlanetCard>
             )
        })
        
        return (
          produtos
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