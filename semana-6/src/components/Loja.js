import React, { useState, useEffect, createContext } from 'react';
import Cabecalho from './Cabecalho';
import Rodape from './Rodape';
import LojaSkin from './LojaSkin';
import Loader from './Loader';
import './style.css';

export const CarteiraContext = createContext([0, () => {}, () => {}]);

const Loja = () => {
    const [estado, setEstado] = useState({ carregando: true, dados: [], carteira: 4000 });
    //criar comprar (seçao venda)
    const creditar = quantia => {
        setEstado({...estado, carteira: estado.carteira + quantia});
    };
    const debitar = quantia => {
        setEstado({...estado, carteira: estado.carteira - quantia});
    };

    useEffect(() => {
        if (estado.carregando) {
            setTimeout(() => {
                setEstado({...estado, carregando: false, dados: objetos });
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
    <CarteiraContext.Provider value={{saldo: estado.carteira, creditar, debitar}}>
        <Cabecalho />
        <main>
            <div className="loja">
                {
                    componentes
                }
            </div>
        </main>
        <Rodape />
    </CarteiraContext.Provider>
    </>);
};

const objetos = [
    { id: 1, nome: 'Hello Kitty', imagem: 'a.png', gemas: 1000 },
    { id: 2, nome: 'Kuromi', imagem: 'b.png', gemas: 900 },
    { id: 3, nome: 'Cinnamoroll', imagem: 'c.png', gemas: 2000 },
    { id: 4, nome: 'Keroppi', imagem: 'd.png', gemas: 100 },
    { id: 5, nome: 'My Melody', imagem: 'e.png', gemas: 2000 },
    { id: 6, nome: 'Badtz Maru', imagem: 'f.png', gemas: 1000 },
    { id: 7, nome: 'Pompompurin', imagem: 'g.png', gemas: 800 },
    { id: 8, nome: 'Chococat', imagem: 'h.png', gemas: 500 },
    { id: 9, nome: 'Aggretsuko', imagem: 'i.png', gemas: 150 }
];

export default Loja;
