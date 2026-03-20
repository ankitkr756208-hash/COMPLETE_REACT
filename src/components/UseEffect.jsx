import React, { useState, useEffect } from 'react'

const UseEffect = () => {
     const [counter, setcounter] = useState(0)

    useEffect(() => {
     console.log("Useeffect is running!")
     document.title="ANKIT"
    }, [])// dependence array
    
  return (
    <div>
        <h1>Counter={counter}</h1>
        <button onClick={()=>setcounter(counter+1)}>Increase</button>
        <button onClick={()=>setcounter(counter -1)}>Decrase</button>
    </div>
  )
}

export default UseEffect
