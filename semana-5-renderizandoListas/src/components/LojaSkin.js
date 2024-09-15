import React from 'react';
import './style.css';

const LojaSkin = (props) => {
    return (
        <div className="card">
            <img src={`./assets/imgs/${props.imagem}`} />
            <div className="container">
                <p>{props.nome}</p>
                <button className="botao-comprar">
                    {props.gemas}
                    <img src="./assets/imgs/laco.png" />
                </button>
            </div>
        </div>
    );
}

export default LojaSkin;
