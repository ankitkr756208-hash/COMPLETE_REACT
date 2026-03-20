import React, { useLayoutEffect, useState } from 'react'

const Index = () => {
    const [color, setcolor] = useState("black")

    useLayoutEffect(() => {
        document.body.style.backgroundColor = color;

    }, [color])//Dependcy
  return (
    <div style={{textAlign:"center",padding:"20px"}}>
        <div style={{textAlign:"center",padding:"20px"}}>
            <h2>Current Bg color={color}</h2>
            <button onClick={() => setcolor("red")}>Red</button>
            <button onClick={() => setcolor("green")}>Green</button>
            <button onClick={() => setcolor("blue")}>Blue</button>  
            <button onClick={() => setcolor("yellow")}>Yellow</button>

        </div>
    </div>
  )
}

export default Index