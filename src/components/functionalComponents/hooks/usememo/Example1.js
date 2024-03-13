
// THe functionalities of factorial memo

import React, { useMemo, useState } from 'react';

function Example1() {
  const [counter, setCounter] = useState(0);
  const [number, setNumber] = useState(5);

  const calculateFactorial = (n) => {
    let answer = 1;
    for (let i = n; i >= 1; i--) {
      answer = answer * i;
    }
    console.log("Factorial:", answer);
    return answer;
  };

  const factorial = useMemo(() => {
    return calculateFactorial(number);
  }, [number]);

  return (
    <div>
      Example1
      {/* <button onClick={() => setCounter(counter + 1)}>Count Increment</button> */}
      <button onClick={() => setNumber(number + 1)}>Number Increment</button>
      Counter: {counter}
      <br />
      Number: {number}
      <br />
      Factorial: {factorial}
    </div>
  );
}

export default Example1;
