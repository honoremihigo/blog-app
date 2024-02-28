import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
function Blog({title,summary,id,author}) {
  return (
    <div className='blog-card'>
        <div>
            <h1>{title}</h1>
            <p>{summary}</p>
            <p className='strong'> author: <span> {author}</span></p>
        </div>
        <NavLink to={`/moredetails/${id}`}>more</NavLink>
    </div>
  )
}

export default Blog
