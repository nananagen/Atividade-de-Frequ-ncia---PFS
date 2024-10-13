import axios from "axios";
import React, {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";

const AlunoAlterar = () => {
    const [objeto, setObjeto] = useState(
        {id: "2", matricula: 123, nome:'Bruno'}
    )

    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3005/alunos/${id}`)
            .then((resp) => {
                setObjeto(resp.data);
            })
    }, [id]);

    const salvar = e => {
        e.preventDefault();
        axios.put('http://localhost:3005/alunos', objeto);
    };

    const atualizarCampo = (nome, valor) => {
        let objNovo = {...objeto};
        objNovo[nome] = valor;
        setObjeto(objNovo);
    };

    if (objeto == null) {
        return <div>Carregando...</div>
        
    };

    return (
    <form>
        <div>
            <label className="form-label">Matrícula</label>
            <input className="form-control" disabled={true} value={objeto.matricula} onChange={e => atualizarCampo('matricula', e.target.matricula)}  type="text"/>
        </div>
        <div>
            <label className="form-label">Nome</label>
            <input className="form-control" disabled={true} value={objeto.nome} onChange={e => atualizarCampo('nome', e.target.nome)} type="text"/>
        </div>
        <button className="btn btn-secondary mt-2" onClick={e => salvar(e)}>Salvar</button>
        <button className="btn btn-secondary mt-2" >Voltar</button>
    </form>    
    );
}

export default AlunoAlterar;