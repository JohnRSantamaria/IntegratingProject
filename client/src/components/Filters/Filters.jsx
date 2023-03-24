import { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { fetchAllDiets } from "../../helpers/fetchAllDiets";
import { filteredRecipes, searchResults, getDietsData, setIsLoading } from "../../redux/actions/actions";
import styles from "./Filters.module.css";

const Filters = ({ apiData, dataBase, dietsData }) => {

  const dispatch = useDispatch();
  

  useState(()=>{
    if(dietsData.length === 0){
      dispatch(setIsLoading(true))
      fetchAllDiets()
      .then(diets=> {
        dispatch(setIsLoading(false))
        dispatch(getDietsData(diets))
      })
    }
  }, [dietsData])
  
  

  const handlerFilter = (event) => {
    dispatch(filteredRecipes(event.target.value));
  }  

  const placesFilterHandler = (event) => {
    if (event.target.value === "dataBase") {
      return dispatch(searchResults(dataBase))
    }
    if (event.target.value === "API") {
      return dispatch(searchResults(apiData))
    }
    if (event.target.value === "all") {
      return dispatch(filteredRecipes(event.target.value))
    }
  }

  return (

    <div className={styles.filtersContainer}>

      {
          <select onChange={handlerFilter} value="Diets">
            <option disabled hidden>Diets</option>
            <option key={0} value="all">all</option>
            {dietsData
              .map(({ id, name }) =>
                <option key={id} value={name}>
                  {name}
                </option>
              )}
          </select>
      }

      <select onChange={placesFilterHandler} value="From">
        <option disabled hidden>From</option>
        <option key={0} value="all">all</option>
        <option key={1} value="dataBase">data dase</option>
        <option key={2} value="API">API</option>
      </select>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    apiData: state.apiData,
    dataBase: state.dataBase,
    dietsData: state.dietsData
  }
}

export default connect(mapStateToProps, null)(Filters);