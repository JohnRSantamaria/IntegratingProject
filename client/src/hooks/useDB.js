import { useState, useEffect } from "react";
import { fetchDataBase } from "../helpers/fetchDataBase"

export const useDB = (placesFilterHandler)=> {
  const [isLoadingDB, setIsLoadingDB] = useState(true);
  const [infoDB, setInfoDB] = useState([]);

  useEffect(()=> {
    fetchDataBase()
    .then(db=> {
      setIsLoadingDB(false);
      setInfoDB(db);
    })
  },[placesFilterHandler]);

  return{
    isLoadingDB,
    infoDB
  }
}