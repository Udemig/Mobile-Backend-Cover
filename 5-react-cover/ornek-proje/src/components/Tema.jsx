import { useContext } from "react";
import { TemaContext } from "../context/TemaContext";

const Tema = () => {
  const { koyuMod, temaDegis } = useContext(TemaContext);

  return (
    <div>
      <h3>
        Mevcut Tema: <b>{koyuMod ? "Koyu" : "Açık"}</b>
      </h3>
      <button onClick={temaDegis}>Temayı Değiştir</button>
    </div>
  );
};

export default Tema;
