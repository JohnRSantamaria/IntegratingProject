import React, {useState} from "react";
import { Link } from "react-router-dom";
import styles from './Navigation.module.css';

import searchBtn from "../../utils/search-outline.svg"
import closeBtn from "../../utils/close-outline.svg";
import menuBtn from "../../utils/menu-outline.svg";


export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const [isToggleOn, setIsToggleOn] = useState(false);
  
  const handleClickSearchBtn =()=> {
    setIsOpen(true);
    setIsToggleOn(false);
  }
  
  const handleClickCloseBtn =()=> {
    setIsOpen(false);
  }

  const handleClickHeader = ()=> {
    setIsToggleOn(!isToggleOn);
    setIsOpen(false);
  }

  return (
    <header className={ isToggleOn? styles.open : ""}>
      <a href="/food" className={styles.logo} >Henry Food</a>
      <div className={styles.group}>
        <ul className={styles.navigation}>
          <li><Link to="/Food">Home</Link></li>
          <li><Link to="/Food/make">Create</Link></li>
        </ul>
        <div className={styles.search}>
          <span className={styles.icon}>
            <img 
              src={searchBtn}
              alt="SearchBtn" 
              name="search-outline" 
              className={`${styles.searchBtn} ${isOpen ? styles.active : ""}`}              
              onClick={handleClickSearchBtn}
            />
            <img 
              src={closeBtn} 
              alt="CloseBtn" 
              name="close-outline" 
              className={`${styles.closeBtn}  ${isOpen ? styles.active : ""}`}
              onClick={handleClickCloseBtn}
            />
          </span>
        </div>
        <img 
          src={menuBtn} 
          alt="MenuBtn" 
          className={`${styles.menuToggle}  ${isOpen ? styles.hide : ""}`}
          onClick={handleClickHeader}
        />
      </div>
      <div className={`${styles.searchBox}  ${isOpen ? styles.active : ""}`}>
        <input type="text" placeholder="search..." />
      </div>
    </header>
  );
}
