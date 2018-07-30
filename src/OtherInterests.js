import React from 'react';
import musicianIcon from './images/musician-icon.png';
import martialArtsIcon from './images/martial-arts-icon.png';
import travelIcon from './images/travel-icon.png';

const OtherInterests = () => {
  return (
    <div className='other-interests-container'>
      <h1 className='other-interests-header'>Other things I do...</h1>
      <div className='other-interests-item-container'>
        <div className='other-interests-item'>
          <img alt='guitar-icon' src={musicianIcon} className='other-interests-image'></img>
          <h3 className='other-interests-item-name'>Music</h3>
        </div>
        <div className='other-interests-item other-interests-item-middle'>
          <img alt='martial-arts-icon' src={martialArtsIcon} className='other-interests-image '></img>
          <h3 className='other-interests-item-name'>Martial Arts</h3>
        </div>
        <div className='other-interests-item'>
          <img alt='travel-icon' src={travelIcon} className='other-interests-image'></img>
          <h3 className='other-interests-item-name'>Travel</h3>
        </div>
      </div>
    </div>
  )
}

export default OtherInterests;
