import React from 'react'

const Filter = () => {
        const person=[
            {id:1,name:"Ankit",active:true},
            {id:2,name:"Aman",active:false},
            {id:3,name:"Alok",active:true},
            {id:4,name:"Atyu",active:true},
        ]
    
  return (
    <div>
        {person.filter((data)=> data.active).map(item=><div key={item.id}>
            <h1>{item.name}</h1>
        </div>)}
    </div>
  )
}

export default Filter