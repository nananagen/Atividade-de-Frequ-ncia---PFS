import React, { useState } from "react";
import axios from "axios";
import './Styles.css';

const App = () => {
  const [response, setResponse] = useState('');
  const [aluno, setAluno] = useState({ id: '', nome: '', matricula: '' });

  const listar = () => {
    axios.get('http://localhost:3005/alunos').then(
      resultado => {
        setResponse(JSON.stringify(resultado.data, null, 2));
      }
    );
  };

  const consultarUnico = id => {
    axios.get(`http://localhost:3005/alunos/${id}`).then(
      resultado => {
        setResponse(JSON.stringify(resultado.data, null, 2));
      }
    );
  };

  const excluir = id => {
    axios.delete(`http://localhost:3005/alunos/${id}`).then(
      resultado => {
        setResponse(`Aluno com ID ${id} excluído.`);
      }
    );
  };

  const inserir = () => {
    axios.post('http://localhost:3005/alunos', aluno).then(
      resultado => {
        setResponse(`Aluno ${aluno.nome} inserido com sucesso.`);
      }
    );
  };

  const alterar = id => {
    axios.put(`http://localhost:3005/alunos/${id}`, aluno).then(
      resultado => {
        setResponse(`Aluno com ID ${id} alterado com sucesso.`);
      }
    );
  };

  const handleChange = (e) => {
    setAluno({ ...aluno, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <h1>CRUD de Alunos</h1>
      
      <div className="form-input">
        <label>ID:</label>
        <input type="text" name="id" value={aluno.id} onChange={handleChange} />
      </div>

      <div className="form-input">
        <label>Nome:</label>
        <input type="text" name="nome" value={aluno.nome} onChange={handleChange} />
      </div>

      <div className="form-input">
        <label>Matrícula:</label>
        <input type="text" name="matricula" value={aluno.matricula} onChange={handleChange} />
      </div>

      <button onClick={listar}>Listar Alunos</button>
      <button onClick={() => consultarUnico(aluno.id)}>Consultar Aluno</button>
      <button onClick={inserir}>Inserir Aluno</button>
      <button onClick={() => alterar(aluno.id)}>Alterar Aluno</button>
      <button onClick={() => excluir(aluno.id)}>Excluir Aluno</button>

      <pre className="response">{response}</pre>
    </div>
  );
};

export default App;
