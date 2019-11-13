import React from 'react';
import './App.css';   

class Contador extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contador: 0,
      mostrar: true,
      disabled: false
      // Aqui ficam os estados
    }
  }

  adicionarUm = () => {
    this.setState((prevState) => {
      return {
        contador: prevState.contador + 1
      }
    })
  }

  menosUm = () => {
    this.setState((prevState) => {
      return {
        contador: prevState.contador -1
      }
    })
  }

  resetar = () =>{
    this.setState(() => {
      return {
        contador: 0
      }
    })
  }

  fecharContador = () => {
    // Aqui eu defino o que acontece com o estado
    this.setState((prevState) => {
      console.log(prevState)
      return {
        mostrar: !prevState.mostrar
        // É A MESMA COISA QUE ISSO > mostrar: prevState.mostrar === true ? false : true 
        // posso fazer uma condição como resposta  
      }
    })
  }

  disabled = () => {
    this.setState((prevState) => {
      return {
        disabled: !prevState.disabled
      }
    })
  }

  render() {
    return (
      <div>
        <p>{this.state.contador}</p>
        <button onClick={this.fecharContador}>
          {this.state.mostrar === true ? "Bota os botão" : "Tira os botão"}
          </button><br/>
        {/* Aqui eu faço a condição sempre usando >THIS< */}
        {this.state.mostrar === true? '' :(
          <div>
            <button className="btnMaisUm" onClick={this.adicionarUm} disabled={this.state.disabled}>+1</button>
            <button className="btnMenosUm" onClick={this.menosUm} disabled={this.state.disabled}>-1</button>
            <button className="btnResetar" onClick={this.resetar} disabled={this.state.disabled}>resetar</button><br/>
            <button className="btndisabled" onClick={this.disabled}>{this.state.disabled === true ? "descongela os botão" : "congela os botão"}</button>
          </div>
        )}
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <h2>Contador</h2>
      <Contador/>
    </div>
  )
}

export default App;