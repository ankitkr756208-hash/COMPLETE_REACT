import React, { use, useContext } from 'react'
import MyContext from '../context/MyContext'
const People = () => {
//    const data=useContext(MyContext);
//    console.log(data);
    const {name, money, counter, setcounter, data} = useContext(MyContext);
  return (
    <div>
        <h1> Welcome to People Component =</h1>
        <h1>Name ={name}</h1>
        <h1>Money ={money}</h1>
        <h1>data ={data}</h1>
        <h1>counter ={counter}</h1>
        <button onClick={()=>setcounter(counter+1)}>Increase Counter</button>
        <button onClick={()=>setcounter(counter-1)}>Decrease Counter</button>
    </div>
  )
}

export default People