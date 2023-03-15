import { Loader } from "../../components/Loader/Loader";
import { useRecipes } from "../../hooks/useRecipes";
import { Link } from "react-router-dom";
export const LandingPage = () => {
  const { isLoading } = useRecipes();
  
  return (
    <div>
      <p>Landing Page</p>
      {
        isLoading? <Loader/> : <Link to="Food">Click me</Link>
      }
    </div>
  )
};
