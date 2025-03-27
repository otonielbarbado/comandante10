import { useState } from "react";

const Energia = () => {
  const [energia, setEnergia] = useState(100);

  return (
    <div style={{ border: "2px solid #4CAF50", padding: "15px", margin: "10px", borderRadius: "8px", backgroundColor: "#e8f5e9" }}>
      <h2 style={{ color: "#2e7d32" }}>Energia</h2>
      <p style={{ color: energia < 30 ? "red" : "black", fontSize: "18px" }}>Nível: {energia}%</p>
      <button style={{ margin: "5px", padding: "5px 10px", backgroundColor: "#ff5722", color: "white", border: "none", borderRadius: "5px" }} onClick={() => setEnergia((prev) => Math.max(prev - 10, 0))}>
        Consumir Energia
      </button>
      <button style={{ margin: "5px", padding: "5px 10px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px" }} onClick={() => setEnergia(100)}>Recarregar</button>
    </div>
  );
};

export default Energia;
