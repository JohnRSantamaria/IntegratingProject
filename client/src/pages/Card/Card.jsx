import React from 'react';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';

import img from '../../utils/img1.jpeg';

export const Card = () => {
  return (
    <div className={styles.card}>
    <div className={`${styles.face} ${styles.front}`}>
      <img src={img} alt="Img de prueba" />
      <h3>Japan</h3>
    </div>
    <div className={`${styles.face} ${styles.back}`}>
      <h3>Japan</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, laborum ex veritatis accusantium alias illum minima ipsum, beatae, unde doloribus eaque ducimus temporibus ab itaque!</p>
      <div className={styles.link}>
        <Link to="/food/detail" >Details</Link>
      </div>
    </div>
  </div>
  )
}
