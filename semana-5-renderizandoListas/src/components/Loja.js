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
                <LojaSkin key={x.id}
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
    { id: 1, nome: 'Hello Kitty', imagem: 'a.png', gemas: 2000 },
    { id: 2, nome: 'Kuromi', imagem: 'b.png', gemas: 2000 },
    { id: 3, nome: 'Cinnamoroll', imagem: 'c.png', gemas: 2000 },
    { id: 4, nome: 'Keroppi', imagem: 'd.png', gemas: 2000 },
    { id: 5, nome: 'My Melody', imagem: 'e.png', gemas: 2000 },
    { id: 6, nome: 'Badtz Maru', imagem: 'f.png', gemas: 2000 },
    { id: 7, nome: 'Pompompurin', imagem: 'g.png', gemas: 2000 },
    { id: 8, nome: 'Chococat', imagem: 'h.png', gemas: 2000 },
    { id: 9, nome: 'Aggretsuko', imagem: 'i.png', gemas: 2000 }
];

export default Loja;
