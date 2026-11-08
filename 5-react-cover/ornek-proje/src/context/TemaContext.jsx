import { createContext, useState } from "react";

// context kurulum
export const TemaContext = createContext();

// context sağlayıcı wrapper bileşeni
export const TemaSaglayici = ({ children }) => {
  const [koyuMod, setKoyuMod] = useState(false);

  const temaDegis = () => setKoyuMod(!koyuMod);

  // value olarak eklenen değerler diğer bileşenlerde erişilebilir
  return <TemaContext value={{ koyuMod, temaDegis }}>{children}</TemaContext>;
};
