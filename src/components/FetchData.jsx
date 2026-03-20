import React, { useEffect, useState } from 'react'

const FetchData = () => {
  const [apiData, setApiData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos")
      const data = await response.json()
      setApiData(data)   
    }

    fetchData()
  }, [])

  return (
    <div>
      {apiData.map((item) => (
        <div key={item.id} style={{textAlign:"center",backgroundColor:"pink",margin:"10px",padding:"10px"}}>
          <h2>{item.title}</h2>
        </div>
      ))}
    </div>
  )
}

export default FetchData