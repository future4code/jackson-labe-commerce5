import React from 'react';
import styled from 'styled-components';




export class Filtros extends React.Component {
    state = {
      listaDeProdutos: this.props.listadeProdutos,
      valores:[],
      // valorInputMinimo: '',
      // valorInputMaximo: '',
      // valorInputBuscar: ''
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


//==========Filtra a lista de produtos ==================
    // componentDidUpdate() {
    //   const listaFiltrada = this.state.listaDeProdutos.filter((item)=>{
    //     return (item.price<=this.props.valorMaximo && item.price>=this.props.valorMinimo) ||
    //             (item.planetName.toLowerCase() === this.props.valorBuscar)
    //   })
    //   console.table(listaFiltrada)
    //   return listaFiltrada
    // }
    
// //========= Monitorando campos====================
//     onChangeMinimo = (event) => {
//       this.setState({
//         valorInputMinimo: event.target.value.toLowerCase()
//       })
//     }

//     onChangeMaximo = (event) => {
//       this.setState({
//         valorInputMaximo: event.target.value.toLowerCase()
//       })
//     };

//     onChangeNomeProduto = (event) => {
//       this.setState({
//         valorInputBuscar: event.target.value.toLowerCase()
//       })
//     };

    render() {
      const valorFinal = this.state.valores.map((vlr) => {
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
const Button = styled.button`
  height: 30px;
  width: 80%;
  border: 1px solid gray;
  outline: none;
  border-radius: 5px;
  padding: 5px;
  box-shadow: 0px 0px 4px gray;
`
  export default Filtros;   