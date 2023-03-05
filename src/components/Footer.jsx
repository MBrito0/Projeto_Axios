/*import React from 'react'*/
import { Link } from "react-router-dom"
import "./Footer.css"

import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'



const Footer = () => {
  return (
    <footer>
        <ul className="social_list">
          <li>
            <FaFacebook />
          </li>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaLinkedin />
          </li>
        </ul>
        <p className="copy_right"><span> Anne M. Coiffeur </span> &copy; 2021 </p>
    </footer>
  )
}

export default Footer