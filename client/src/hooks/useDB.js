import { useState, useEffect } from "react";
import { fetchDataBase } from "../helpers/fetchDataBase"
                    //placesFilterHandler
export const useDB = ()=> {
  const [isLoadingDB, setIsLoadingDB] = useState(true);
  const [infoDB, setInfoDB] = useState([]);

  useEffect(()=> {
    fetchDataBase()
    .then(db => {
      setIsLoadingDB(false);
      setInfoDB(db);
    })
  },[]);

  //placesFilterHandler
  
  return{
    isLoadingDB,
    infoDB
  }
}