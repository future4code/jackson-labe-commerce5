import React from 'react'
import styled from 'styled-components'


export class Carrinho extends React.Component {
    render(){
        return(
            <ConteinerCarrinho>
                <h1>Carrinho</h1>
                <ListaPedidos>
                    {this.props.item} 
                </ListaPedidos>
                <h4>Total: R${this.props.valorTotal} </h4>
            </ConteinerCarrinho>
        )
    }
}

export class ItemCarrinho extends React.Component{
        render(){
            return(
                <ItemLista>
                    {this.props.qtdItem}x {this.props.nomeItem}
                    <BntExcluir onClick={()=> this.props.apagarItem(this.props.item) }>X</BntExcluir>
                </ItemLista>
            )
        }
}



// ===== CSS

const ConteinerCarrinho = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: 1px solid black;
    width: 20vw;
    height: 90vh;
`
const ListaPedidos = styled.ul`
    list-style: none;
    /* background-color: #0fa; */
    display:flex;
    flex-direction: column;
    align-items:center ;
    padding: 0;
    margin: 0;
    width: 100%;
`
const ItemLista = styled.li`
    width: 98%;
    border-bottom: 1px dashed black;
    /* background-color: #CCC; */
    padding: 5px 0;
    font-size: 18px;
    
`
const BntExcluir = styled.span`
    margin-left: 20px;
    border: none;
    background: none;
    outline: none;
    cursor: pointer;
    font-weight: bold;
    font-size: 16px;
    :hover{
        color: #f00;
    }
`




