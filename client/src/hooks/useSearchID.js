import { useEffect, useState } from "react";
import { fetchSearchById } from "../helpers/fetchSearchById";

export const useSearchID = (id) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    if (id) {
      fetchSearchById(id).then((response) => {
        setIsLoading(false);
        if(response.name) {
          setData(response);
        }else{
          window.alert("There are not Recipes with this id:"+id)
        }

      }).catch((error)=> {
        window.alert("There are not Recipes with this id:"+id)
      });
    }
  }, [id]);

  return {
    isLoading,
    data,
  };
};
