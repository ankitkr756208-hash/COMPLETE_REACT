import React, { useState, useCallback } from 'react'
import Child from './Child'

const Demo = () => {
    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(0)

    const handleClick = useCallback(() => {
        setCounter1(prev => prev + 1)
    }, [])

    return (
        <div>
            <h1>Counter at Parent = {counter2}</h1>

            <button onClick={() => setCounter2(counter2 + 1)}>
                Increase Parent Counter
            </button>

            <Child handleClick={handleClick} counter1={counter1} />
        </div>
    )
}

export default Demo