import { useState } from "react";

const Comunicador = () => {
  const [mensagem, setMensagem] = useState("");
  const [historico, setHistorico] = useState<string[]>([]);

  const enviarMensagem = () => {
    if (mensagem.trim()) {
      setHistorico([...historico, `Você: ${mensagem}`]);
      setMensagem("");
      setTimeout(() => {
        setHistorico((prev) => [...prev, "Terra: Mensagem recebida!"]);
      }, 2000);
    }
  };

  return (
    <div style={{ border: "2px solid #2196F3", padding: "15px", margin: "10px", borderRadius: "8px", backgroundColor: "#e3f2fd" }}>
      <h2 style={{ color: "#1565C0" }}>Comunicador</h2>
      <input style={{ margin: "5px", padding: "5px", borderRadius: "5px", border: "1px solid #2196F3" }}
        type="text"
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
      />
      <button style={{ margin: "5px", padding: "5px 10px", backgroundColor: "#2196F3", color: "white", border: "none", borderRadius: "5px" }} onClick={enviarMensagem}>Enviar</button>
      <ul>
        {historico.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default Comunicador;