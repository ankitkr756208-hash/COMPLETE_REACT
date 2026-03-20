import React from 'react'
import { useState } from 'react';

const UseState = () => {
    // let counter=0;
    const [counter,setCounter]=useState(0)
    const [Name,setName]=useState("Ankit")
    const [price,setprice]=useState(10.99)
    const [nums,setnums]=useState([])
    const [person,setperson]=useState({})

    


//const  counter=10

    const increase =(value)=>{
        // counter++;
        // console.log(counter)
        setCounter(counter + value )
    }
    const descrise =()=>{
        // counter--;
        // console.log(counter)
        setCounter(counter-1)
    }
  return (
    <>
    <h1>Counter ={counter}</h1>
    <button onClick={()=>increase(100)}>increase</button>
    <button onClick={descrise}>Descrese</button>
    </>
  )
}

export default UseState