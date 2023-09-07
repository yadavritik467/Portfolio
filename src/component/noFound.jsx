import React from 'react'
import { Link } from 'react-router-dom'

const NoFound = () => {
  return (
    <div className='error'>
     
        <h1>Seems like You have entered to wrong page 🥲</h1>


        {/* <a>GO_TO_HOME_PAGE</a> */}
        <Link to={"/"}>GO_TO_HOME_PAGE</Link>
        
      
    </div>
  )
}

export default NoFound
