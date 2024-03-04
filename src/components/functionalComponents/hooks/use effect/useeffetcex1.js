import React, { useState, useEffect } from "react";

const UseEffect = () => {
    const [counter, setCounter] = useState(0);
    const [counter1,setCounter1]=useState(0)

    useEffect(() => {
        console.log("useEffect");
    }, [counter,counter1]);

    const handleIncrement = () => {
        setCounter(counter + 1);
    };
    const handleIncrement2=()=>{
        setCounter1(counter1+1)
    }

    return (
        <>
            <h1>Hello</h1>
            <p>Counter: {counter}</p>
            <button onClick={handleIncrement}>Increment</button>

            <h1>counter 2{counter1}</h1>
            <button onClick={handleIncrement2}>Increment 2</button>
        </>
    );
};

export default UseEffect;
