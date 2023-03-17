import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { searchRecipe } from "../../redux/actions/actions.js"

import styles from './Navigation.module.css';

import searchBtn from "../../utils/search-outline.svg"
import closeBtn from "../../utils/close-outline.svg";
import menuBtn from "../../utils/menu-outline.svg";


 const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const [isToggleOn, setIsToggleOn] = useState(false);
  const [searchValue, setSearchValue] = useState({
    searchBox:""
  });

  const dispatch = useDispatch();
  
  const handleClickSearchBtn =()=> {
    setIsOpen(true);
    setIsToggleOn(false);
    isOpen ? dispatch(searchRecipe(searchValue.searchBox))
    : setSearchValue({...searchValue,searchBox:""});   
  }
  
  const handleClickCloseBtn =()=> {
    setIsOpen(false);
  }

  const handleClickHeader = ()=> {
    setIsToggleOn(!isToggleOn);
    setIsOpen(false);
  }

  //Redux

  const onSearchChange = (e)=> {
    setSearchValue({
      ...searchValue,
      [e.target.name]: e.target.value
    });
  }
  const handleClick = ()=>{
    setIsToggleOn(!isToggleOn);
  }

  return (
    <header className={ isToggleOn? styles.open : ""}>
      <a href="/" className={styles.logo} >Henry Food</a>
      <div className={styles.group}>
        <ul className={styles.navigation}>
          <li><Link to="/food" onClick={handleClick}>Home</Link></li>
          <li><Link to="/food/make" onClick={handleClick}>Create</Link></li>
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
        <input 
          type="text" 
          name="searchBox"
          placeholder="look for your recipe..." 
          value={searchValue.searchBox} 
          onChange={onSearchChange} 
        />
      </div>
    </header>
  );
}

export default connect (null, null )(Navigation)