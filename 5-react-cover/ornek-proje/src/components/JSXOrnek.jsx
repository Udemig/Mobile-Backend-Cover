// 2. JSX: JavaScript içinde HTML'e benzer yazım.
// { } içine herhangi bir JavaScript ifadesi konur

const JSXOrnek = () => {
  const ad = "Furkan Evin";

  return (
    <div>
      <h1 className="baslik">{ad}</h1>
      <p style={{ background: "red" }}>Merhabalar jsx denemesi {10 + 20}</p>

      <label htmlFor="search">ARA</label>
      <input id="search" type="text" />
    </div>
  );
};

export default JSXOrnek;
