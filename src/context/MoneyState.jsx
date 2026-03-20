import React, { useState } from 'react'
import MyContext from './MyContext'

const MoneyState = (props) => {
    const money = 1000;
    const name = "Ankit Kumar";
     const [counter, setcounter] = useState(100 );
    const data="superman"
  return (
    <>
   <MyContext.Provider value={{money, name, counter, setcounter,data}}>
    {props.children}
   </MyContext.Provider>
    </>
  )
}

export default MoneyState