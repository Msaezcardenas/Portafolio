import React, { useState } from 'react';
import '../styles/_proyects.module.css';
import main from '../assets/images/avatar-1.jpg';
import avatar from '../assets/images/avatar-2.jpg';

function Proyects() {
  const [hover, setHover] = useState(false);
  const [showElement, setShowElement] = useState('');

  const onHover = (e) => {
    console.log('ist hover');
    console.log('event.currentTarget', e.currentTarget.type);
    console.log(e);
    console.log(e.target.dataset.id);

    if (hover) {
      setShowElement(e.target.dataset.id);
    }
    console.log(hover);
    setHover(!hover);
  };

  return (
    <div className='proyects'>
      <div className='rigthContainer'>
        <div
          className={`${
            showElement === 'mujer' && hover ? 'show jobShow' : 'imgConteiner'
          }`}
        >
          <img src={main} alt='job hunt' />
        </div>
        <div
          className={`${
            showElement === 'jobShow' && hover ? 'show jobShow' : 'imgConteiner'
          }`}
        >
          <img src={avatar} alt='job hunt' />
        </div>
      </div>
      <div className='leftContainer'>
        <h1>Proyectos</h1>
        <ul>
          <li
            className='job'
            id='jobify'
            name='jobify'
            data-id='jobShow'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Jobify
          </li>
          <li
            data-id='mujer'
            onMouseEnter={(e) => onHover(e)}
            onMouseLeave={(e) => onHover(e)}
          >
            SocialVeg
          </li>
          <li>SerachMov</li>
        </ul>
      </div>
    </div>
  );
}

export default Proyects;
