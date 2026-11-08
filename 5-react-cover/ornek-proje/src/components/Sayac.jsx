// 4. State: useState ile bileşen hafızası
import { useState } from "react";

const Sayac = () => {
  // [değer, güncelleyici] = useState(başlangıç değeri)
  const [sayi, setSayi] = useState(0);

  return (
    <div>
      <button onClick={() => setSayi(sayi + 1)}>Tıklama: {sayi}</button>
      <button onClick={() => setSayi(0)}>Sıfırla</button>
    </div>
  );
};

export default Sayac;
