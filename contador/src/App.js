import React from 'react';
import logo from './logo.svg';
import './App.css';

const numero = 0

const iniciaContador = () => {
  if(numero === 0) {
    return <p>Contador não iniciado</p>
  } else {
    return <p>Contador iniciado</p>
  }
}

const Nav = props => {
  return(
    <div>
      <p>{props.nome}</p>
      <p>{props.titulo}</p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Nav 
      nome="thai"
      titulo="Titulommmmmm"
      />
      <h1>Contador</h1>
      <p class="numero">{numero}</p>
      {iniciaContador()}
    <div className="buttons">
      <button className="bton">+1</button>
      <button className="bton">-1</button>
    </div>
    <div>
      <button className="bton-reset">Resetar</button>
    </div>
    </div>
  );
}

export default App;
