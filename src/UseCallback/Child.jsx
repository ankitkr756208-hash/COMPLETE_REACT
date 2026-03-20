import React, { use, useEffect } from 'react'

const Child = ({handleClick,counter1}) => {
    useEffect(() => {
      console.log("Child Component is rendering")
    
    }, [handleClick])
    
  return (
    <div style={{margin:"10px",padding:"10px",border:"1px solid black"}}>
        <h1>Child Componenets ={counter1}</h1>
        <button onClick={handleClick}>Increase Child Counter</button>
    </div>
  )
}

export default Child