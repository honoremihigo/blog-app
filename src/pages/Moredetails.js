import React from 'react'
import { useParams ,NavLink} from 'react-router-dom/cjs/react-router-dom.min'
import useData from '../components/useData'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'


function Moredetails() {
  const { id } = useParams()

  const { data:blog , load, error } = useData('http://localhost:7000/my-blogs/' + id)

  const goback = useHistory()


  const handledelete = () =>{
    fetch('http://localhost:7000/my-blogs/' + id,{
      method:"DELETE"
    })
    .then(()=>{
      goback.push('/')
    })
  }

  return (
    <div className='dteils'>
      {load && <h5>loading...</h5>}
      {error && <h5>{error}</h5>}
      {
        blog

        &&

        (
          <div className="cont-more">
            <div className='more-details'>
            <h1>{blog.title}</h1>
            <div className='p-cont'> <p>{blog.description}</p></div>
            <h5>{blog.author}</h5>
            <NavLink to="/">go back</NavLink>
            
            <button onClick={handledelete}>delete</button>
          </div>
          </div>
        )
      }
    </div>
  )
}

export default Moredetails
