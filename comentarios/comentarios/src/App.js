import React from 'react';
import CriaComentarios from './componentes/CriaComentarios';
import comentarios from './dados/comentarios';
import './App.css';


function App() {
  return (
    <div>
      {comentarios.map((comentario, index) => {
          return (
            <CriaComentarios
            nome = {comentario.autora.nome}
            subtitulo = {comentario.subtitulo}
            comentario = {comentario.texto}
            imagem = {comentario.autora.imagem}
            />
          )
        })
      }
    </div>
  );
}

export default App;
