import React from 'react';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';


export const Card = ({id, title, image, diets}) => {
  return (
    <div className={styles.card}>
    <div className={`${styles.face} ${styles.front}`}>
      <img src={image} alt="Img de prueba" />
      <h3>{title}</h3>
    </div>
    <div className={`${styles.face} ${styles.back}`}>
      <h3>Diets</h3>
      <ul>
        {diets.map((d,i)=><li key={i} >{d}</li>)}
      </ul>
      <div className={styles.link}>
        <Link to={`/food/detail/${id}`}>Details</Link>
      </div>
    </div>
  </div>
  )
}
