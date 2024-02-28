import React, { useEffect, useState } from 'react'
import Blog from '../components/Blog'
import useData from '../components/useData'



function Home() {

  const {data , load, error} = useData('http://localhost:7000/my-blogs')

  return (
    <div className='home'>
      <h1>welcome to my tech blog</h1>
      <div className="blogs-cont">
        <div>
          {
            error && <h5>{error}</h5>
          }
          {
            load && <h5>loading...</h5>
          }
          {
            data

            &&

            data.map((blog, key) => {
              return <Blog key={key} title={blog.title} summary={blog.summary} id={blog.id} author={blog.author} />
            })
          }
        </div>
      </div>
    </div> 
  )
}

export default Home
