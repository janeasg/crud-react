import { useState } from "react";

function App() {
  const [Itens, setItens] = useState([]);
  const [texto, setTexto] = useState("");
  const [indiceAtualizar, setIndiceAtualizar] = useState(null);

  // Adicionar ou Atualizar
  function adicionar() {
    if (texto.trim() !== "") {
      if (indiceAtualizar !== null) {
        // Atualizar item
        const novaLista = [...Itens];
        novaLista[indiceAtualizar] = texto;
        setItens(novaLista);
        setIndiceAtualizar(null);
      } else {
        // Adicionar item
        setItens([...Itens, texto]);
      }
      setTexto("");
    }
  }

  // Remover item
  function remover(index) {
    setItens(Itens.filter((_, i) => i !== index));

    // Se estiver editando o item removido, cancela edição
    if (indiceAtualizar === index) {
      setIndiceAtualizar(null);
      setTexto("");
    }
  }

  // Preparar edição
  function editar(index) {
    setTexto(Itens[index]);        // coloca no input
    setIndiceAtualizar(index);     // guarda índice
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Lista de Itens</h1>

      <input
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Digite um item"
      />

      <button onClick={adicionar}>
        {indiceAtualizar !== null ? "Atualizar" : "Adicionar"}
      </button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {Itens.map((item, index) => (
          <li key={index} style={{ margin: "10px" }}>
            {item}{" "}
            <button onClick={() => editar(index)}>Editar</button>{" "}
            <button onClick={() => remover(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;