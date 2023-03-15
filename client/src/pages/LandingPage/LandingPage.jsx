import { Loader } from "../../components/Loader/Loader";
import { useRecipes } from "../../hooks/useRecipes";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { getRecipes } from "../../redux/actions/actions"; 

const LandingPage = () => {
  const { isLoading, recipes  } = useRecipes();
  
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getRecipes(recipes));
  } 

  return (
    <div>
      <p>Landing Page</p>
      {
        isLoading ? <Loader /> : <Link to="Food" onClick={handleClick}>Click me</Link>
      }
    </div>
  )
};


export default connect (null, null )(LandingPage);