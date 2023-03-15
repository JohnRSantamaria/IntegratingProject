import { useState, useEffect } from "react"
import { fetchAllData } from "../helpers/fetchAllData";

export const useRecipes = ()=> {
  const [isLoading, setIsLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);

  useEffect(()=> {
    fetchAllData()
    .then(recipes => {
      setIsLoading(false);
      setRecipes(recipes);
    });
  }, [])

  return{
    isLoading,
    recipes
  }

}
