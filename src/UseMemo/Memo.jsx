import React, { useState, useMemo } from 'react'

const Memo = () => {

    const [count, setcount] = useState(0);
    const [num, setnum] = useState(10);

    const complexFunction = (num) => {
        console.log("Calculation...");
        for (let i = 0; i < 10000; i++) {}   // heavy task
        return num * 2;
    }

    const result = useMemo(() => complexFunction(num), [num]);

    return (
        <div>
            <h2>Result = {result}</h2>

            <button onClick={() => setcount(count + 1)}>
                Increase Count
            </button>
            <h4>Count : {count}</h4>
            <h2>num={num}</h2>
            <button onClick={()=>setnum(num +1)}>Increase num</button>
        </div>
    )
}

export default Memo