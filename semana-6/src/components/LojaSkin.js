import React, {useContext, useState} from 'react';
import './style.css';
import { CarteiraContext } from './Loja';

const LojaSkin = (props) => {
    const { saldo, debitar } = useContext(CarteiraContext);
    const [comprado, setComprado] = useState(false);

    const handleComprar = () => {
        if (saldo >= props.gemas) {
            debitar(props.gemas);
            setComprado(true);
        } else {
            alert("Saldo insuficiente para a compra!");
        }
    };

    return (
        <div className="card">
            <img src={`./assets/imgs/${props.imagem}`} alt={props.nome} />
            <div className="container">
                <p>{props.nome}</p>
                {comprado ? (
                    <div className="botao-comprado">
                        Já é seu!
                    </div>
                ) : (
                    saldo >= props.gemas ? (
                        <button className="botao-comprar" onClick={handleComprar}>
                            {props.gemas}
                            <img src="./assets/imgs/laco.png" alt="Gemas" />
                        </button>
                    ) : (
                        <div className="botao-comprar-desabilitado">
                            {props.gemas}
                        </div>
                    )
                )}
            </div>
        </div>
    );
}

export default LojaSkin;
