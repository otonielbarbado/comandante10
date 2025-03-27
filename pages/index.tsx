import Energia from "../components/Energia";
import TempoEstelar from "../components/TempoEstelar";
import Comunicador from "../components/Comunicador";

const Home = () => {
    return (
      <div style={{ display: "flex", gap: "20px", padding: "20px", justifyContent: "center", backgroundColor: "#282c34", minHeight: "100vh" }}>
        <Energia />
        <Comunicador />
        <TempoEstelar />
      </div>
    );
  };
  
  export default Home;