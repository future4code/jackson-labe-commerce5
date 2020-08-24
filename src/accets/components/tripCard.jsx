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
                    <h3>{produto.planetName}</h3>
                    <h4>{produto.package}</h4>
                    <h5>§$ {produto.price}</h5>
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
    background-color: #DCDCDC;
    color: darkslateblue;
    box-shadow: 4px 0px 4px #57534a;
    width: 90%;
    display:flex;
    flex-direction:column;
    align-items:center;
    font-family: Arial;


    
`
// mome da tag tava styled.image
const PlanetImage = styled.img`
    
    margin: 0 auto;
    width:95%;
`
const AddButton = styled.button`
    background-color: #526A62;
    color: lightyellow;
    padding: 1vw;
    margin: 0 auto;
    :hover{
        background-color: #FE6E01;
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
      color: #57534a;
  }

  h4 {
    color: #57534a; 
  }

  h5 {
    color: #57534a;
  }

  select {
    grid-column: 3/5;
    grid-row: 1/2;
    height: 20px;
    justify-self: self-end;
    align-self: center;
  }
`