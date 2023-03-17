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

/*
El código que compartes parece correcto para manejar el estado de isLoading y la búsqueda de recetas a través del hook personalizado "useSearch". Lo más probable es que el problema se encuentre en el componente que está utilizando el hook "useSearch" y cómo está manejando el valor del estado isLoading.

Por ejemplo, si el componente que usa el hook "useSearch" no está comprobando el valor de isLoading antes de mostrar los resultados de búsqueda, es posible que los resultados se muestren antes de que la búsqueda se haya completado, lo que hará que el spinner de carga no se muestre.

Asegúrate de agregar una comprobación de isLoading en el componente que usa el hook "useSearch" para mostrar el spinner de carga mientras isLoading sea verdadero y los resultados de búsqueda solo después de que isLoading sea falso.

Por ejemplo:

import React from "react";
import { useSearch } from "../hooks/useSearch";

const SearchResults = ({ searchValue }) => {
  const { isLoading, searchRecipes } = useSearch(searchValue);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {searchRecipes.map((recipe) => (
        <div key={recipe.id}>{recipe.name}</div>
      ))}
    </div>
  );
};

export default SearchResults;



*/