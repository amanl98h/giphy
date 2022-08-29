import React, { useEffect, useState } from 'react'
import './App.css'
import Output from './components/Output/Output'
import Search from './components/Search/Search'
import { API } from './config'

export default function App() {
  const [count, setCount] = useState()
  const [data, setData] = useState()
  
  const getGiphy = async(e) => {
    const url = API + count
    const req = await fetch(url)
    const res = await req.json()
    console.log(res.data);
    setData(res.data)
  }
  // useEffect(() => {
  //   getGiphy()
  // }, [])
  return (
    <div className='body'>
      <Search 
      count={count}
      setCount={setCount} 
      getGiphy={getGiphy}
      />
      <Output data={data}/>
    </div>
  )
}
