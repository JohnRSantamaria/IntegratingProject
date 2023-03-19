import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";

import { Loader } from "../../components/Loader/Loader";
import { useRecipes } from "../../hooks/useRecipes";
import { useAPI } from "../../hooks/useAPI";
import { useDB } from "../../hooks/useDB";

import { getRecipes, getAPIdata, getDatabase } from "../../redux/actions/actions"; 



const LandingPage = () => {
  const dispatch = useDispatch();
  
  const { isLoading, recipes  } = useRecipes();
  const { infoAPI } = useAPI();
  const { infoDB} = useDB();  

  const handleClick = () => {
    dispatch(getRecipes(recipes));
    dispatch(getAPIdata(infoAPI));
    dispatch(getDatabase(infoDB));
  } 

  return (
    <div>
      <p>Landing Page</p>
      {
        isLoading  ?
        <Loader /> :
        <Link to="Food" onClick={handleClick}>Click me</Link>
      }
    </div>
  )
};


export default connect (null, null )(LandingPage);