import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

  const data = useLoaderData()

  // const [data, setData] = useState([])

  // useEffect(() => {
  //  fetch('https://api.github.com/users/ankitjha93')
  //  .then((response) => response.json())
  //  .then(data =>{
  //   console.log(data)
  //   setData(data)
  //  })
  // },[])
  return (
    <div className='text-white text-center text-2xl m-4 p-4 bg-violet-700'>Github Followers : {data.followers}
      <img src={data.avatar_url} alt="GitHub Pic" width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/ankitjha93')
    return response.json();
}