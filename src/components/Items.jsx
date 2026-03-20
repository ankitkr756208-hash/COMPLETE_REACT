import React from 'react'

const Items = () => {
    const age=4;
    const aadhar=true ;
    const gmail=false;
  return (
    <>
    {aadhar && <h1>You can Open Bank Account</h1>}
    {gmail && <h1>You can make youtube Channel</h1>}
    </>
    // <div>
    //     {
    //       age>=18?(<>
    //       <h1>You can drive</h1></>)  : (<>
    //       you are not eligible to drive</>)
    //     }
    // </div>
    
  )
}

export default Items