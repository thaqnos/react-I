import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CriaCard = props => {
    return(
        <div className="previsao">
            <h1 className="previsao__data">{props.titulo}</h1>
            <p className="previsao__resumo">{props.subtitulo}</p>
            {/* <img className="previsao__img" src={props.imagem} alt={props.alt}/> */}
            <FontAwesomeIcon className="previsao__icon" icon={props.icone} />
            <table className="previsao-temperatura">
                <tr className="previsao-temperatura__linha">
                    <th>Máxima</th>
                    <td>{props.grauMaxima}</td>
                </tr>
                <tr className="previsao-temperatura__linha">
                    <th>Mínima</th>                        
                    <td>{props.grauMinima}</td>
                </tr>
            </table>
        </div>
    )
}

export default CriaCard