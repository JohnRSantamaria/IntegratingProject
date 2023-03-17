import { connect, useDispatch } from "react-redux"
import { Loader } from "../Loader/Loader";
import { useSearch } from "../../hooks/useSearch";
import { searchRecipe } from "../../redux/actions/actions";
import { searchResults } from "../../redux/actions/actions";

const Search = ({search}) => {

  const {isLoading, searchRecipes } = useSearch(search);
  const dispatch = useDispatch();
  if(searchRecipes.length !== 0) {
    dispatch(searchResults(searchRecipes));
    dispatch(searchRecipe(""));
  }


  return (
    <span>
      {
        isLoading && <Loader />
      }
    </span>

  );
}

const mapStateToProps = (state)=> {
  return {
    search: state.search
  }
}

export default connect(mapStateToProps, null)(Search);
