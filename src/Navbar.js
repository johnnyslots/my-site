import React from 'react';

const Navbar = () => {
  return (
    <div className="nav-container">
      <h4 className="header-initials">YS</h4>
      <div>
        <a href='mailto:yonislots@gmail.com'><img alt='mail-icon' className='nav-link' src={window.location.origin + '/assets/mail-icon.png'}></img></a>
        <a href='https://www.linkedin.com/in/yonislotwiner/' rel="noopener noreferrer" target='_blank'><img alt='linkedin-icon' className='nav-link middle-nav-link' src={window.location.origin + '/assets/linkedin-icon.png'}></img></a>
        <a href='https://github.com/johnnyslots' rel="noopener noreferrer" target='_blank'><img alt='github-icon' className='nav-link' src={window.location.origin + '/assets/github-icon.png'}></img></a>
      </div>
    </div>
  )
}


export default Navbar;
