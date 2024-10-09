import React, { useState } from "react";
import { Link } from 'react-router-dom';

const AlunoListar = () => {
    const [objetos, setObjetos] = useState([
        {id: "1", matricula: 123, nome:'Ana'},
        {id: "2", matricula: 123, nome:'Bruno'}
    ]);

    if (!objetos) {
        return <div>Carregando...</div>;
    }

    return(
        <div>
            <Link to={"/alunos/listar"} className="btn btn-primary">Listar</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>Matrícula</th>
                        <th>Nome</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        objetos.map(x => {
                            return (
                                <tr key={x.id}>
                                    <td>{x.matricula}</td>
                                    <td>{x.nome}</td>
                                    <td>
                                        <Link to={`/aluno/consultar/${x.id}`} classname="btn btn-secondary">Consultar</Link>
                                        <Link to={`/aluno/alterar/${x.id}`} classname="btn btn-warning">Alterar</Link>
                                        <button classname="btn btn-danger">Excluir</button>
                                    </td>

                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default AlunoListar;