import React, { Component } from 'react';

const Navbar = () => {
  return (
    <div className="nav-container">
      <h4 className="header-initials">YS</h4>
      <div>
        <a href='mailto:yonislots@gmail.com'><img className='nav-link' src='https://lh3.googleusercontent.com/xXGCyZkeBhqzBDEcshBYtE_VqSjf2bv4-8xu1RRjnSH7Y-iZ8E2DB9DPhB7Xfzdw9AaIl6JEkmj8UrNLyHLbzA62?crop=260'></img></a>
        <a href='https://www.linkedin.com/in/yonislotwiner/' target='_blank'><img className='nav-link middle-nav-link' src='https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_black-512.png'></img></a>
        <a href='https://github.com/johnnyslots' target='_blank'><img className='nav-link' src='https://cdn1.iconfinder.com/data/icons/logotypes/32/github-512.png'></img></a>
      </div>
    </div>
  )
}


export default Navbar;
