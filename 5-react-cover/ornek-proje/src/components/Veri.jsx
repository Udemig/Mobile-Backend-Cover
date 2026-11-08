// 10. useEffect | useState | map
import { useEffect, useState } from "react";

// istek atılacak adres
const url = "https://jsonplaceholder.typicode.com/users";

const Veri = () => {
  // api'dan gelen veri state'i
  const [kullanicilar, setKullanicilar] = useState([]);

  // sayfa yüklendiğinde veriyi çek
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setKullanicilar(data));
  }, []);

  // her bir kullanıcı için ekrana bilgilerini bas
  return (
    <div>
      {kullanicilar.map((kullanici) => (
        <div>
          <h1>{kullanici.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Veri;
