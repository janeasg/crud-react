import { useState } from "react";
function App() {
  const [Itens, setItens] = useState([]);
  const [texto, setTexto] = useState("");

  function adicionar() {
    setItens([...Itens, texto]);
    setTexto("");
  }

  function remover(index) {
    setItens(Itens.filter((_, i) => i !== index));
  }



  return (
    <>
      <input value={texto} onChange={(e) => setTexto(e.target.value)} />
      <button onClick={adicionar}>Adicionar</button>
      <ul>
        {Itens.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => remover(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </>
  );
}


export default App