import React, { useState, useRef } from "react";

function App() {
    //const [nome, setNome] = useState('');
    const [mensagem, setMensagem] = useState('');
    const inputRef = useRef(null);

    return(
        {/* <label>Nome</label>
        <input
        style={{ marginLeft: '10px', marginRight: '10px' }}
        type="text"
        value={nome}
        // chamar setNome causa renderização atoa
        onChange={e =>setNome(e.target.value)}
        />
        <button onClick={() => setNome(`Olá ${nome}!`)}>Mostrar</button>
        <p>{mensagem}</p> */}
        <div>
            <label>Nome</label>
            <input
            style={{ marginLeft: '10px', marginRight: '10px' }}
            type="text"
            ref={inputRef}
            />
            <button onClick={() => setMensagem(`Olá ${inputRef.current.value}!`)}>Mostrar</button>
            <p>{mensagem}</p>
        </div>
    );
}

export default App;