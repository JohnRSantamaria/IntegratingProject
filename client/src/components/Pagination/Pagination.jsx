import { connect, useDispatch } from "react-redux"
import { useEffect, useState } from "react";
import { getNineCards } from "../../redux/actions/actions";
import { useDB } from "../../hooks/useDB";
import { fetchDataBase } from "../../helpers/fetchDataBase";
import { fetchAllData } from "../../helpers/fetchAllData";
import { getDatabase, getRecipes, setIsLoading } from "../../redux/actions/actions";

import styles from "./Pagination.module.css";


const Pagination = ({ filteredR, dataBase }) => {

  const [disabledN , setDisabledN ] = useState(false);
  const [disabledB , setDisabledB ] = useState(false);

  const dispatch = useDispatch();

  const {infoDB} = useDB();

  useEffect(()=> {
    if(infoDB.length=== 0) return;
    if(dataBase.length !== infoDB.length){
      console.log("entro"); 
      dispatch(setIsLoading(true))
      fetchDataBase()
      .then(db => {
        dispatch(setIsLoading(false))
        dispatch(getDatabase(db));
      })

      fetchAllData()
      .then(recipes => {
        dispatch(getRecipes(recipes));
      })

    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [infoDB])


  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);

  useEffect(()=> {
    setCurrentPage(1)
  }, [filteredR])


  const totalPages = Math.ceil(filteredR.length / itemsPerPage); 

  // lógica para obtener la lista de items que corresponden a la página actual
  const indexOfLastItem = currentPage * itemsPerPage;  //1 * 9 = 9
  const indexOfFirstItem = indexOfLastItem - itemsPerPage; // 9 - 9 = 0
  const currentItems = filteredR.slice(indexOfFirstItem, indexOfLastItem); //0-9

  useEffect(()=>{
    dispatch(getNineCards(currentItems))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentItems]);

  // función para actualizar la página actual
  const handlePageChange = (page) => {
    setDisabledN(false);
    setDisabledB(false);
    setCurrentPage(page);
  };

  const prevPage = ()=> {
    if(currentPage-1!== 0) {
      setCurrentPage(currentPage-1)
      setDisabledN(false);
      return;
    };
    setDisabledB(true);
  }

  const nextPage = ()=> {
    if(currentPage !== totalPages) {
      setCurrentPage(currentPage+1)
      setDisabledB(false);
      return
    }; 
    setDisabledN(true);    
  }

  return (
    <div className={styles.centerPagination}>
      <div className={styles.containerP}>
        <button 
          onClick={prevPage}
          style={{color:disabledB&&"gray",borderColor:disabledB&&"gray",top:disabledB&&"0"}}
          disabled={disabledB}
        >back</button>


        {Array.from({ length: totalPages }).map((_, index) => (
          <button 
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </button>
        ))}


        <button 
          onClick={nextPage}
          style={{color:disabledN&&"gray",borderColor:disabledN&&"gray",top:disabledN&&"0"}}
          disabled={disabledN}
        >next</button>
      </div>

    </div>
  );

}

const mapStateToProps = (state) => {
  return {
    filteredR: state.filteredR,
    dataBase: state.dataBase,
    isLoadingState: state.isLoadingState
  }
}
export default connect(mapStateToProps)(Pagination)
