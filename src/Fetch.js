import React, {useState, useEffect} from 'react'

const Fetch = () => {
  const [data, setData] = useState([])

    useEffect(() =>{
  fetch('https://kontests.net/api/v1/all')
    .then((response) => response.json())
    .then((data) => console.log(data));
    },[])
  return (
    <div>
      <h1>{data}</h1>
    </div>
  )
}

export default Fetch