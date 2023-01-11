import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="my-12 text-center">
    <h1 className=" text-4xl font-bold">404 Not Found</h1>
    <Link to="/"> Kembali ke Home</Link>
  </div>
  )
}

export default NotFound