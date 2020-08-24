import React from 'react';
import styled from 'styled-components';

export class Filtros extends React.Component {
  state = {
    listaDeProdutos: this.props.listadeProdutos,
  }
  render() {
    
    return (
      <FormContainer>
      <h1>LABESPACE </h1>
      <Input
      value={this.props.valorMinimo}
      onChange={this.props.Minimo}
      placeholder={'Valor minimo'}
      type='number'
      />
      
      
      <Input
      value={this.props.valorMaximo}
      onChange={this.props.Maximo}
      placeholder={'Valor Maximo'}
      type='number'
      />
      
      
      <Input
      value={this.props.valorBuscar}
      onChange={this.props.Busca}
      placeholder={'Digite o nome do produto'}
      />
      </FormContainer>)
    }
    
  }
  const FormContainer = styled.div`
  width: 89vw;
  margin: 0 auto;
  background-color: #ea7f03 ;
  height: 40px;
  padding: 1px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items:center;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0px 0px 4px #57534a;


    h1 {
      color: #57534a;
      text-align: center;
      font-size: 150%;
      font-family: Philosopher, Arial;
      
    }
  `
  const Input = styled.input`
  margin-right: 4px;
  height: 20px;
  width: 15%;
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 5px;
  box-shadow: 0px 0px 4px #57534a;
  `
  
  export default Filtros;   