import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

function Addblog() {

  const[title,settitle] = useState('')
  const[author,setauthor] = useState('')
  const[summary,setsummary] = useState('')
  const[description,setdes] = useState('')
  const[added,setadded] = useState(false)

  const goback = useHistory()

  const clickhandler = (e) =>{
    e.preventDefault();
    const addedblog = {title, author,summary,description}

    console.log(addedblog);

    setadded(true)

   setTimeout(()=>{
    fetch('http://localhost:7000/my-blogs',{
      method: 'POST',
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify(addedblog) 
    })
    .then(()=>{
      console.log('added');
      setadded(false)
      goback.push('/')
    })
   },1500)
  }

  return (
    <div className='add-new-blog'>
      <h1>add new blog</h1>
      <form action="">
        <input type="text" placeholder='title of story' value={title} onChange={(a)=>{settitle(a.target.value)}}/>
        <input type="text" placeholder='author of story' value={author} onChange={(a)=>{setauthor(a.target.value)}}/>
        <input type="text" placeholder='summary of story' value={summary} onChange={(a)=>{setsummary(a.target.value)}}/>
        <textarea  placeholder='decription of story' value={description} onChange={(a)=>{setdes(a.target.value)}} ></textarea>
        {!added &&   <button onClick={clickhandler}>add blog</button>}
        {added &&   <button onClick={clickhandler} disabled>adding blog ...</button>}
      </form>
    </div>
  )
}

export default Addblog
