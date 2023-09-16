import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
  <nav className="navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <Link to = '/' style={{textDecoration:'none'}}><a className="navbar-brand">All Blogs</a></Link>
    <Link to = '/writlbog' style={{textDecoration:'none'}}> <a className="navbar-brand">Write Blogs</a></Link>
    <p className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </p>
  </div>
</nav>
    </div>
  )
}

export default Navbar
