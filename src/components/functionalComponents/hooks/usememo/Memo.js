import React, { useMemo, useState } from "react";

const UsememoExample = () => {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    const handleIncrementCounter1 = () => {
        setCounter1(counter1 + 1);
    };

    const handleIncrementCounter2 = () => {
        setCounter2(counter2 + 1);
    };

    const evenChecker = useMemo(() => {
        console.log("even checker calling");
        for (let i = 0; i < 10000; i++) {
            console.log(i);
        }
        return counter1 % 2 === 0 ? "Even" : "Odd";
    }, [counter1]);

    return (
        <>
            <h4>{counter1} counter1</h4>
            <h4>{counter2} counter2</h4>
            <h3>{evenChecker}</h3>

            <button onClick={handleIncrementCounter1}>Click to increment counter1</button>
            <button onClick={handleIncrementCounter2}>Click to increment counter2</button>
        </>
    );
};

export default UsememoExample;