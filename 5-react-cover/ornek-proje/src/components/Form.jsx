import { useState } from "react";

// 6. Kontrollü input: değer state'te yaşar
const Form = () => {
  const [ad, setAd] = useState("");

  // value: ekranda görünen değer state'ten gelir
  // onChange: her tuş vuruşunda state güncellenir
  return (
    <div>
      <input type="text" value={ad} onChange={(e) => setAd(e.target.value)} />
      <p>
        Merhaba, <b>{ad}</b>
      </p>
    </div>
  );
};

export default Form;
