import { useContext } from "react";
import Dugme from "./components/Dugme";
import Effect from "./components/Effect";
import Form from "./components/Form";
import JSXOrnek from "./components/JSXOrnek";
import Kosul from "./components/Kosul";
import Liste from "./components/Liste";
import Olaylar from "./components/Olaylar";
import PropsOrnek from "./components/PropsOrnek";
import Ref from "./components/Ref";
import Sayac from "./components/Sayac";
import Tema from "./components/Tema";
import Veri from "./components/Veri";
import { TemaContext } from "./context/TemaContext";

function App() {
  const { koyuMod } = useContext(TemaContext);

  return (
    <div className={koyuMod ? "koyu" : "acik"}>
      <h1>React Temelleri - Örnekler</h1>

      <section>
        <h2>1. Bileşen</h2>
        <Dugme />
        <Dugme />
      </section>

      <section>
        <h2>2. JSX</h2>
        <JSXOrnek />
      </section>

      <section>
        <h2>3. Props ve Children</h2>
        <PropsOrnek />
      </section>

      <section>
        <h2>4. State</h2>
        <Sayac />
      </section>

      <section>
        <h2>5. Olaylar</h2>
        <Olaylar />
      </section>

      <section>
        <h2>6. Form</h2>
        <Form />
      </section>

      <section>
        <h2>7. Kosul</h2>
        <Kosul />
      </section>

      <section>
        <h2>8. Çoklu Render</h2>
        <Liste />
      </section>

      <section>
        <h2>9. useEffect</h2>
        <Effect />
      </section>

      <section>
        <h2>10. Veri</h2>
        <Veri />
      </section>

      <section>
        <h2>11. Ref</h2>
        <Ref />
      </section>

      <section>
        <h2>12. Tema</h2>
        <Tema />
      </section>
    </div>
  );
}

export default App;
