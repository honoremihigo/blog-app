import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
function Navbar() {
    return (
        <div className='navbar'>
            <h1>Tech<span>.</span>Blog</h1>
            <div className="nav-links">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/newblog' className="create" >CreateBlog</NavLink>
            </div>
        </div>
    )
}  

export default Navbar