import { useRef } from "react";

const Ref = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    // inputa odaklan
    inputRef.current.focus();
    inputRef.current.style.background = "aqua";
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Odaklan</button>
    </div>
  );
};

export default Ref;
