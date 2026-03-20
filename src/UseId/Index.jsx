import React, { useId } from 'react'

function Item({name}){
    const id=useId();
    return (<div>
        <span>Name={name}=</span>ID:{id}
    </div>
    );
}

const Index = () => {
    const data=["Apple","Mango","Banana","Grapes"]
  return (
    <div>
        {data.map((d) => <Item key={d} name={d}/>)}
    </div>
  )
}

export default Index
