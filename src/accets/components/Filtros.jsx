import React from 'react';
import styled from 'styled-components';

export class Filtros extends React.Component {
  state = {
    listaDeProdutos: this.props.listadeProdutos,
  }
  render() {
    
    return (
      <FormContainer>
      <h2>Filtros:</h2>
      <h3> Valor mínimo:</h3>
      <Input
      value={this.props.valorMinimo}
      onChange={this.props.Minimo}
      placeholder={'Valor minimo'}
      type='number'
      />
      
      <h3> Valor máximo:</h3>
      <Input
      value={this.props.valorMaximo}
      onChange={this.props.Maximo}
      placeholder={'Maximo'}
      type='number'
      />
      
      <h3> Buscar Produto:</h3>
      <Input
      value={this.props.valorBuscar}
      onChange={this.props.Busca}
      placeholder={'Digite o nome do produto'}
      />
      </FormContainer>)
    }
    
  }
  const FormContainer = styled.div`
  width: 25vw;
  background-color: gray ;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  `
  const Input = styled.input`
  margin-right: 2px;
  height: 20px;
  width: 80%;
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 5px;
  box-shadow: 0px 0px 4px #57534a;
  `
  
  export default Filtros;   