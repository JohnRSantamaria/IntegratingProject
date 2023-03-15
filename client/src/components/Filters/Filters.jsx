import { connect, useDispatch } from "react-redux";
import { filteredRecipes } from "../../redux/actions/actions";
import { Loader } from "../Loader/Loader";
import { useDiets } from "../../hooks/useDiets";

const Filters = () => {
  const { isLoading, diets } = useDiets();
  const dispatch = useDispatch();

  const handleFilter = (event) => {
    dispatch(filteredRecipes(event.target.value));
  }

  return (
    isLoading ?
      <Loader /> :
      <select onChange={handleFilter}>
      
        <option value="all">all</option>
        {diets
          .map(({ name }) =>
            <option value={name}>
              {name}

            </option>
          )}

      </select>
  )
}

export default connect(null, null)(Filters);