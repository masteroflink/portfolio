import React from 'react'
import './Navbar.css'
import DownloadModal from './DownloadModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-left'>
        <a href='/' className='logo'>
          Bruce Bruno
        </a>
      </div>
      <div className='navbar-center'>
        <ul className='nav-links'>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#skills'>Skills</a>
          </li>
          <li>
            <a href='#projects'>Projects</a>
          </li>
        </ul>
      </div>
      <div className='navbar-right'>
        <a className='socials' href='https://github.com/masteroflink'>
          <FontAwesomeIcon icon={faGithub} size='xl' />
        </a>
        <a className='socials' href='https://www.linkedin.com/in/bruce-bruno-159737111'>
          <FontAwesomeIcon icon={faLinkedin} size='xl' />
        </a>
        <DownloadModal />
      </div>
    </nav>
  )
}

export default Navbar;
