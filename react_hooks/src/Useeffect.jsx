import { useEffect, useState } from "react";

function Useeffect() {
  //USEEFFECT: `useEffect()` is a react hook to perform the side effects in functional component.

  //SYNTAX: useEffect(()=>{})

  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  },[]); //[]: Empty array dependency: It renders only once.

  return (
    <div>
      <h1>USEEFFECT:</h1>
      <h2>COUNTER VALUE: {count}</h2>
    </div>
  );
}

export default Useeffect;
