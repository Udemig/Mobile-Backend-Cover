import { useState } from "react";

// 5. Olaylar (events)
const Olaylar = () => {
  const [mesaj, setMesaj] = useState("Henüz tıklanmadı");

  const hataVer = () => {
    setMesaj("Hata meydana geldi!!!");
  };

  return (
    <div>
      <button onClick={() => setMesaj("İşlem başarılı!")}>Başarılı</button>
      <button onClick={hataVer}>Hata</button>

      <p>{mesaj}</p>
    </div>
  );
};

export default Olaylar;
