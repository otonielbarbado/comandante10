import { useState, useEffect } from "react";

const TempoEstelar = () => {
  const [tempo, setTempo] = useState(new Date().toLocaleTimeString());
  const [ativo, setAtivo] = useState(true);

  useEffect(() => {
    if (!ativo) return;
    const interval = setInterval(() => {
      setTempo(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, [ativo]);

  return (
    <div style={{ border: "2px solid #FFC107", padding: "15px", margin: "10px", borderRadius: "8px", backgroundColor: "#fff8e1" }}>
      <h2 style={{ color: "#FF8F00" }}>Tempo Estelar</h2>
      <p style={{ fontSize: "18px" }}>{tempo}</p>
      <button style={{ margin: "5px", padding: "5px 10px", backgroundColor: "#FFC107", color: "black", border: "none", borderRadius: "5px" }} onClick={() => setAtivo(!ativo)}>
        {ativo ? "Pausar" : "Retomar"}
      </button>
    </div>
  );
};

export default TempoEstelar;