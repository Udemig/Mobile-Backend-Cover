// 3. Props ve children

// Props dışarıdan gelen veridir ve salt okunurdur.
// renk verilmezse varsayılan olarak 'blue' kullanılır.
function Selamla({ ad, renk = "blue" }) {
  return <p style={{ color: renk }}>Merhaba, {ad}</p>;
}

// children, etikeitn arasına yazılan içeriktir (wrapper)
function Kutu({ children }) {
  return <div className="kutu">{children}</div>;
}

const PropsOrnek = () => {
  return (
    <div>
      <Selamla ad="Ayşe" />
      <Selamla ad="Mehmet" renk="green" />

      <Kutu>
        <h4>Kutunun İçi</h4>
        <p>Bu içerik children olarka gider</p>
      </Kutu>
    </div>
  );
};

export default PropsOrnek;
