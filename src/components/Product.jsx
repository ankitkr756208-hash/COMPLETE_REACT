import React from 'react'

import './Product.css'
const Product = ({phone,price,color,data}) => {
    const mystyle={
        backgroundColor:'blue'
    }
  return (
    <div
    //  style={{backgroundColor:'green',padding:'10px', margin:'10px',border:'1px solid red',borderRadius:'10px'}}
    // style={mystyle}
    className='cont'
     >
         <h1>phone-{phone}</h1>
        <h3>Price-{price}</h3>
        <h3>Color-{color}</h3>
       {/* {data && <>
        <p>ram ={data.ram}</p>
        <p>rom ={data.rom}</p>
        <p>chip ={data.chip}</p>
       </>} */}
    </div>
  )
}

export default Product