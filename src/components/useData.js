import React, { useEffect, useState } from 'react'
const useData = (url) => {
    const [data, setdata] = useState(null)
    const [load, setload] = useState(true)
    const[error,seterror] = useState(null)
  
    useEffect(() => {
      setTimeout(()=>{
        fetch(url)
        .then(res => {
          if (!res.ok) {
            throw Error('failed to fetch blogs')
          }
          return res.json()
        })
        .then(data => {
          setdata(data)
          setload(false)
          seterror(null)
        })
        .catch(err => {
          seterror(err.message) 
          setload(false)
        })
      },1500)
    }, [url])

    return {data,load , error}
}

export default useData