import { connect, useDispatch } from "react-redux";

import { Loader } from "../Loader/Loader";
import { useDiets } from "../../hooks/useDiets";

import { filteredRecipes, searchResults, orderAlpha, orderHalthier } from "../../redux/actions/actions";
// import  Order  from "../Order/Order";

const Filters = ({ apiData, dataBase }) => {

  const dispatch = useDispatch();

  const { isLoading, diets } = useDiets();

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

  const handlerAlpha = (event) => {
    dispatch(orderAlpha(event.target.value))
  }

  const handlerScore = (event) => {
    dispatch(orderHalthier(event.target.value))
  }


  //*

  return (

    <div>
      {
        isLoading ?
          <Loader /> :
          <select onChange={handlerFilter} value="Diets">
            <option disabled hidden>Diets</option>
            <option key={0} value="all">all</option>
            {diets
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
      {/* /** */}
      <span>
        <select value="Alphabetical" onChange={handlerAlpha}>
          <option disabled hidden>Alphabetical</option>
          <option value="az">a-z</option>
          <option value="za">z-a</option>
        </select>

        <select value="Health Score" onChange={handlerScore}>
          <option disabled hidden>Health Score</option>
          <option value="healthier">healthier</option>
          <option value="less healthy">less healthy</option>
        </select>
      </span>


    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    apiData: state.apiData,
    dataBase: state.dataBase,
  }
}

export default connect(mapStateToProps, null)(Filters);