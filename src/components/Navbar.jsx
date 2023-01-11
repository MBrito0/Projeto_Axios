//import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
        <h2>
            <Link to = {'/'}>Vivi Coiffeur</Link>
        </h2>
        <ul>
            <li>
                <Link to = {'/'}>Home</Link>
            </li>
            <li>
                <Link to = {'/new'} className = "novo-botao">Novo Post</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar