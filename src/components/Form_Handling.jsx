import React, { useState } from 'react'

const Form_Handling = () => {
    // const [name, setname] = useState('')
    // const [email, setemail] = useState()
    // const [password, setpassword] = useState()
    const [formData, setformData] = useState({
        name:'',
        email:'',
        password:'',
        phone:''
    });

    const changeHandler=(e)=>{
        const {name,value}=e.target;

        setformData({...formData,[name]:value})
    }

    const onSubmitHandler=(e)=>{
        e.preventDefault();
        console.log(name,email,password)
    };
  return (
   <>
   <form onSubmit={onSubmitHandler}>
   <div>
    Name:- <input
    onChange={changeHandler}
    name='name'
     value={formData.name} type="text" />
   </div>
   <br></br>
   <div>
    Email:- <input
     onChange={changeHandler}
    name='email'
     value={formData.email} type="email" />
   </div>
   <br></br>
   <div>
    Password:- <input
     onChange={changeHandler}
    name='password'
     value={formData.password} type="password" />
   </div>
   <br></br>
   <div>
    Phone:- <input
     onChange={changeHandler}
    name='phone'
     value={formData.phone} type="number" />
   </div>
   <br></br>
  <div>
     <button type='submit'>submit</button>
  </div>
   </form>
   </>
  )
}

export default Form_Handling