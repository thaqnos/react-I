import React from 'react';
import CriaCard from './componentes/CriaCard'
import nuvens from './img/nuvens.png'
import sol from './img/sol.png'
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="previsao-container">
      <CriaCard 
        titulo = "12/11/2019"
        subtitulo = "Nublado"
        imagem = {nuvens}
        alt = 'Desenho de nuvem nublada acizentada'
        grauMaxima = '25ºC'
        grauMinima = '18ºC'
      />

    <CriaCard 
        titulo = "13/11/2019"
        subtitulo = "Ensolarado"
        imagem = {sol}
        alt = 'Desenho de um sol amarelo com um sorrisinho'
        grauMaxima = '31ºC'
        grauMinima = '20ºC'
    />
    </div>
  );
}

export default App;
