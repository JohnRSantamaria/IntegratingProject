import { useState, useEffect } from "react";
import { fetchAllDiets } from "../helpers/fetchAllDiets";

export const useDiets = ()=> {
  const [isLoading, setIsLoading] = useState(true);
  const [diets, setDiets] = useState([]);

  useEffect(()=> {
    fetchAllDiets()
    .then(diets => {
      setIsLoading(false);
      setDiets(diets);
    })
  }, [])
  return{
    isLoading,
    diets
  }
}