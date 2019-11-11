import React from 'react';
import CriaComentarios from './componentes/CriaComentarios';
import logo from './logo.svg';
import Doggo_um from './img/doggo.jpg';
import Doggo_dois from './img/doggo_2.jpg';
import './App.css';

function App() {
  return (
    <div>
      <CriaComentarios
        imagem = {Doggo_um}
        nome = 'Thaís'
        subtitulo = 'ISSO TÁ MUITO DIFICIL'
        comentario = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit magna dignissim eros interdum, sed placerat metus venenatis. Curabitur dignissim augue sit amet ipsum bibendum, eget mollis dolor viverra. Ut venenatis tristique ultrices. Nam consectetur faucibus accumsan. Morbi et ante felis. Nam aliquet dictum ex ut bibendum. Donec ut nisl ut nisi congue euismod. Quisque rutrum consectetur nisi interdum hendrerit. Morbi ut lacus id augue ornare semper. Phasellus convallis a enim non dignissim. Vivamus eget sodales lacus. Suspendisse potenti.'
      />

      <CriaComentarios
        imagem = {Doggo_dois}
        nome = 'Olivia'
        subtitulo = 'MEU DEUS'
        comentario = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit magna dignissim eros interdum, sed placerat metus venenatis. Curabitur dignissim augue sit amet ipsum bibendum, eget mollis dolor viverra. Ut venenatis tristique ultrices. Nam consectetur faucibus accumsan. Morbi et ante felis. Nam aliquet dictum ex ut bibendum. Donec ut nisl ut nisi congue euismod. Quisque rutrum consectetur nisi interdum hendrerit. Morbi ut lacus id augue ornare semper. Phasellus convallis a enim non dignissim. Vivamus eget sodales lacus. Suspendisse potenti.'
      />
    </div>
  );
}

export default App;
