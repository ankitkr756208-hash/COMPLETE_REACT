import React, { useRef } from 'react'

const Ref = () => {
    const bgRef=useRef(null)
    const changeBg=()=>{
        const colors=["red", "green", "blue", "yellow", "pink", "cyan"];
        bgRef.current.style.backgroundColor=colors[Math.floor(Math.random()*colors.length)];
        // setbg(colors[Math.floor(Math.random()*colors.length)]);
    }
    console.log("Re-rendering Components")
  return (
    <div
    ref={bgRef}
    style={{
        height:"100vh",
        // backgroundColor:bg,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    }}>
        <button onClick={changeBg}>Change Background</button>
    </div>
  )
}

export default Ref