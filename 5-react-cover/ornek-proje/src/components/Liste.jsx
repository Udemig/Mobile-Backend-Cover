// 8. Listeler: map ile çiz, key ile tanıt

const meyveler = ["Elma", "Armut", "Muz", "Kiraz", "Karpuz"];

const Liste = () => {
  // key her öğe için benzersiz olmalı.
  return (
    <ul>
      {meyveler.map((meyve) => (
        <li key={meyve}>{meyve}</li>
      ))}
    </ul>
  );
};

export default Liste;
