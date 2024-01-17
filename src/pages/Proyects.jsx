import React from 'react';
import styles from '../styles/pages/_proyects.module.scss';
import main from '../assets/images/avatar-1.jpg';

function Proyects() {
  return (
    <div className={styles.proyects}>
      <div className={styles.lefContainer}> Proyectos</div>
      <div className={styles.rigthContainer}>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </div>
  );
}

export default Proyects;
