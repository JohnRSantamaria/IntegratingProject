import { useEffect } from "react"
import { connect, useDispatch } from "react-redux"
import { searchRecipe, searchResults, setIsLoading } from "../../redux/actions/actions"
import { fetchSearchDataByName } from "../../helpers/fetchSearchDataByName"

const Search = ({search}) => {
  const  dispatch = useDispatch();

  useEffect(()=> {
    if(search){      
        dispatch(setIsLoading(true));
        fetchSearchDataByName(search)
        .then((result)=>{
        dispatch(setIsLoading(false));
        dispatch(searchResults(result));
        dispatch(searchRecipe(""));
      }).catch(error=> {
        dispatch(setIsLoading(false));
        window.alert("There are not Characters with that name");
      })        
      
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[search])
}

const mapStateToProps = (state)=> {
  return {
    search: state.search
  }
}

export default connect(mapStateToProps)(Search);
