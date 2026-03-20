import React from 'react'

const Events = () => {
    const showAlert=() =>{
        alert("This is my brand new alert with event")
    }
    const bg_light= () =>{
        document.body.style.backgroundColor="white";
        document.body.style.color="black"
    }
    const bg_dark= () =>{
        document.body.style.backgroundColor="black";
        document.body.style.color="white"
    }
    let count=0;
     console.log("count value before=",count)
    let counter=(value) =>{
         count=value;
        alert("This is new alert" +value)
        console.log("count value after=",count)
    }
  return (
   <>
   <h1>Events</h1>
   <h1>Counter={count}</h1>
   <button onClick={showAlert}>Click !</button>
   <div>
    <button onMouseOver={bg_light}>Change To_light</button>
    <button onMouseOver={bg_dark}>Change To_Dark</button>
    <button onClick={()=>counter(20)}>count value</button>
   </div>
   </>
  )
}

export default Events