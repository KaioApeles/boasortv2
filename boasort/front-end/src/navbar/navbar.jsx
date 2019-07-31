import React from  'react'
import { Link } from 'react-router-dom'

const navBar = () => {
  return(
    <nav className='navbar navbar-dark bg-dark navbar-expand-lg' id='navbar'>
      <div className='collapse navbar-collapse'>
        <ul className='navbar-nav justify-content-center'>
          <Link to='/sorteio'>
            <li><i className='fa fa-gift' aria-hidden="true"></i> Sorteio</li>
          </Link>
          <Link to='/cadastro'>
            <li><i className="fa fa-user-plus" aria-hidden="true"></i> Cadastro</li>
          </Link>
          <Link to='/lista'>
            <li><i className="fa fa-user" aria-hidden="true"></i> Lista</li>
          </Link>
        </ul>
      </div>
    </nav>
  )

}


export default navBar