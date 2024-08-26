import React, { useState, useEffect } from 'react';
import Cabecalho from './Cabecalho';
import Rodape from './Rodape';
import LojaSkin from './LojaSkin';
import Loader from './Loader';
import './style.css';


const Loja = () => {
    const [estado, setEstado] = useState({ carregando: true, dados: [] });
    
    useEffect(() => {
        if (estado.carregando) {
            setTimeout(() => {
                setEstado({ carregando: false, dados: objetos });
            }, 2000);
        }
    }, [estado.carregando]);

    let componentes;

    if (estado.carregando) {
        componentes = <Loader />;
    } else {
        componentes = estado.dados.map(x => {
            return (
                <LojaSkin
                    nome={x.nome}
                    imagem={x.imagem}
                    gemas={x.gemas}
                />
            );
        })
    }

    return (<>
        <Cabecalho />
        <main>
            <div className="loja">
                {
                    componentes
                }
            </div>
        </main>
        <Rodape />
    </>);
};

const objetos = [
    { nome: 'Hello Kitty', imagem: 'a.png', gemas: 2000 },
    { nome: 'Kuromi', imagem: 'b.png', gemas: 2000 },
    { nome: 'Cinnamoroll', imagem: 'c.png', gemas: 2000 },
    { nome: 'Keroppi', imagem: 'd.png', gemas: 2000 },
    { nome: 'My Melody', imagem: 'e.png', gemas: 2000 },
    { nome: 'Badtz Maru', imagem: 'f.png', gemas: 2000 },
    { nome: 'Pompompurin', imagem: 'g.png', gemas: 2000 },
    { nome: 'Chococat', imagem: 'h.png', gemas: 2000 },
    { nome: 'Aggretsuko', imagem: 'i.png', gemas: 2000 }
];

export default Loja;
