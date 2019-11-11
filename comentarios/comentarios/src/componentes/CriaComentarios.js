import React from 'react';

const DetalhesAutor = props => {
    return (
        <div>
            <h2 className="comentario__nome">{props.nome}</h2>
            <h3 class="comentario__subtitulo">{props.subtitulo}</h3>
        </div>
    )
}

const ComentarioTexto = props => {
    return (
        <div>
            <p>{props.comentario}</p>
        </div>
    )
}

const CriaComentarios = props => {
    return (
      <div className="comentario">
        <img className="comentario__perfil" src={props.imagem}/>
        <div>
            <DetalhesAutor
                nome = {props.nome}
                subtitulo = {props.subtitulo}
            />
          <hr/>
          <ComentarioTexto
            comentario = {props.comentario}
          />
        </div>
      </div>
    )
  }

export default CriaComentarios