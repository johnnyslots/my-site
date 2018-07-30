import React from 'react';
import mailIcon from './images/mail-icon.png';
import linkedinIcon from './images/linkedin-icon.png';
import githubIcon from './images/github-icon.png';

const Navbar = () => {
  return (
    <div className="nav-container">
      <h4 className="header-initials">YS</h4>
      <div>
        <a href='mailto:yonislots@gmail.com'><img alt='mail-icon' className='nav-link' src={mailIcon}></img></a>
        <a href='https://www.linkedin.com/in/yonislotwiner/' rel="noopener noreferrer" target='_blank'><img alt='linkedin-icon' className='nav-link middle-nav-link' src={linkedinIcon}></img></a>
        <a href='https://github.com/johnnyslots' rel="noopener noreferrer" target='_blank'><img alt='github-icon' className='nav-link' src={githubIcon}></img></a>
      </div>
    </div>
  )
}


export default Navbar;
