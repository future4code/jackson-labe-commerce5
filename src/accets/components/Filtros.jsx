import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  width: 20%;
  background-color: #B0C4DE;
  margin: 0 auto;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
 `
 const Input = styled.input`
  margin-right: 10px;
  height: 20px;
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 5px;
  box-shadow: 0px 0px 4px #57534a;
`
const Button = styled.button`
  height: 30px;
  border: 1px solid gray;
  outline: none;
  border-radius: 5px;
  padding: 5px;
  box-shadow: 0px 0px 4px gray;
`
export class Filtros extends React.Component {
    state = {
      valores:[],
      valorInputMinimo: '',
      valorInputMaximo: '',
      valorInputBuscar: ''
    }
    capturarValores = () => {
      if (this.state.valorInputMinimo === '' || this.state.valorInputMaximo === ''){
        alert('Preencha todos os campos');
      } else {
        const novoValor = {
          minimo: this.state.valorInputMinimo,
          maximo: this.state.valorInputMaximo,
          buscar: this.state.valorInputBuscar
        }
        const valorVerificado = [...this.state.valores, novoValor];
        this.setState({valores: valorVerificado});
      };
    };
    onChangeMinimo = (event) => {
      this.setState({
        valorInputMinimo: event.target.value
      })
    }
    onChangeMaximo = (event) => {
      this.setState({
        valorInputMaximo: event.target.value
      })
    };

    render() {
      const valorFianl = this.state.valores.map((vlr) => {
        return (
          <Filtros
            minimo={vlr.minimo}
            maximo={vlr.maximo}   
          />
        );
      });  
        return (
        <FormContainer>
          <h2>Filtros:</h2>
          <h3> Valor mínimo:</h3>
            <Input
              value={this.state.minimo}
              onChange={this.onChangeMinimo}
              placeholder={'Valor minimo'}
              tamanho={'90px'}
              type='number'
            />
            <h3> Valor máximo:</h3>
            <Input
              value={this.state.maximo}
              onChange={this.onChangeMaximo}
              placeholder={'Maximo'}
              tamanho={'90px'}
              type='number'
            />
            <h3> Buscar Produto:</h3>
            <Input
              value={this.state.buscar}
              placeholder={'Maximo'}
              tamanho={'90px'}
              
            />
            <Button >Buscar</Button>
          </FormContainer>)
    }

  }
  export default Filtros;   