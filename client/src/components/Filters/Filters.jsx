import { connect, useDispatch } from "react-redux";

import { Loader } from "../Loader/Loader";
import { useDiets } from "../../hooks/useDiets";
import { filteredRecipes, searchResults } from "../../redux/actions/actions";

import  Order  from "../Order/Order";

const Filters = ({ apiData, dataBase }) => {

  const dispatch = useDispatch();

  const { isLoading, diet } = useDiets();

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

    <div>
      {
        isLoading ?
          <Loader /> :
          <select onChange={handlerFilter} value="Diets">
            <option disabled hidden>Diets</option>
            <option key={0} value="all">all</option>
            {diet
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
      <Order/>

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