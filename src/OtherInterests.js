import React from 'react';

const OtherInterests = () => {
  return (
    <div className='other-interests-container'>
      <h1 className='other-interests-header'>Other things I do...</h1>
      <div className='other-interests-item-container'>
        <div className='other-interests-item'>
          <img alt='guitar-icon' src={window.location.origin + '/assets/musician-icon.png'} className='other-interests-image'></img>
          <h3 className='other-interests-item-name'>Music</h3>
        </div>
        <div className='other-interests-item other-interests-item-middle'>
          <img alt='martial-arts-icon' src={window.location.origin + '/assets/martial-arts-icon.png'} className='other-interests-image '></img>
          <h3 className='other-interests-item-name'>Martial Arts</h3>
        </div>
        <div className='other-interests-item'>
          <img alt='travel-icon' src={window.location.origin + '/assets/travel-icon.png'} className='other-interests-image'></img>
          <h3 className='other-interests-item-name'>Travel</h3>
        </div>
      </div>
    </div>
  )
}

export default OtherInterests;
