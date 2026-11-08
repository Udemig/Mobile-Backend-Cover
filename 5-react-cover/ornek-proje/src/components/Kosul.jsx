import { useState } from "react";

// 7. Koşullu render
const Kosul = () => {
  const [giris, setGiris] = useState(false);

  return (
    <div>
      {/* Terneray Operator: İki durumdan birini seç */}
      {giris ? <p>Hoş geldin!</p> : <p>Lütfen giriş yap.</p>}

      {/* Ve Operator: Koşul doğruysa göster, değilse hiçbir şey gösterme */}
      {giris && <p>Gizli içerik burda olucak</p>}

      <button onClick={() => setGiris(!giris)}>{giris ? "Çıkış Yap" : "Giriş Yap"}</button>
    </div>
  );
};

export default Kosul;
