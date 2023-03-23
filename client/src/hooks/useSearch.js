import { useState, useEffect } from "react";
import { fetchSearchDataByName } from "../helpers/fetchSearchDataByName";

export const useSearch = (searchValue)=> {
  const [isLoading,setIsLoading] = useState(false);
  const [searchRecipes, setSearchRecipes] = useState([]);
  
  useEffect(()=> {
    if(searchValue){
      setIsLoading(true)
      fetchSearchDataByName(searchValue)
    .then((result) => {
      setSearchRecipes(result);
    })
    .finally(()=> {
      setIsLoading(false);
    });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  return{
    isLoading,
    searchRecipes
  } 

}
