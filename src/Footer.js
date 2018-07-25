import React from 'react';

const Footer = () => {
  return (
    <div className="footer-container">
      <h4 className="footer-initials">YS</h4>
      <div>
        <a href='mailto:yonislots@gmail.com'><img alt='mail-icon' className='nav-link' src={window.location.origin + '/assets/mail-icon.png'}></img></a>
        <a href='https://www.linkedin.com/in/yonislotwiner/' rel="noopener noreferrer" target='_blank'><img alt='linkedin-icon' className='nav-link middle-nav-link' src={window.location.origin + '/assets/linkedin-icon.png'}></img></a>
        <a href='https://github.com/johnnyslots' rel="noopener noreferrer" target='_blank'><img alt='github-icon' className='nav-link' src={window.location.origin + '/assets/github-icon.png'}></img></a>
      </div>
    </div>
  )
}

export default Footer;
