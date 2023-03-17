import { useState, useEffect } from "react";
import { fetchAPI } from "../helpers/fetchAPI";

export const useAPI = ()=> {
  const [isLoadingAPI, setIsLoadingAPI] = useState(true);
  const [infoAPI, setInfoAPI] = useState([]);

  useEffect(()=> {
    fetchAPI()
    .then(api => {
      setIsLoadingAPI(false);
      setInfoAPI(api);
    })
  },[]);

  return{
    isLoadingAPI,
    infoAPI
  }
}