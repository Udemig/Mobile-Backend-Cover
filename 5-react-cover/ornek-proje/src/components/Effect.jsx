import { useEffect, useState } from "react";

// 9. useEffect: render dışındaki işler (başlık güncelleme, fetch, timer vb.)
const Effect = () => {
  const [sayi, setSayi] = useState(0);

  // [sayi] dependency array: sayi değiştiğikçe tekrar çalışır
  // [] yazsaydık sadece ilk çalışır
  useEffect(() => {
    document.title = `Sayı: ${sayi}`;
  }, [sayi]);

  return <button onClick={() => setSayi(sayi + 1)}>+1 (sekme başlığına bak)</button>;
};

export default Effect;
