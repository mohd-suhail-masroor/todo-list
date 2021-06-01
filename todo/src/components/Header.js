import React from 'react'
import {Link} from 'react-router-dom'
import './stylesheets/Header.css'

function Header() {
    return (
        <div className="header">
            <h1 className="header-heading">to do list</h1>
            <span className="buttons-span">
            <Link className='homeLink' to='/'>home</Link>
            <Link className='createLink' to='/Create'>add task</Link>
            </span>
          </div>
    )
}

export default Header
