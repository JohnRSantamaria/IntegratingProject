import { connect, useDispatch } from "react-redux"
import { useEffect, useState } from "react";
import { getNineCards } from "../../redux/actions/actions";


const Pagination = ({ filteredR }) => {

  const dispatch = useDispatch();
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
    setCurrentPage(page);
  };

  const prevPage = ()=> {
    if(currentPage-1!== 0) setCurrentPage(currentPage-1);
  }

  const nextPage = ()=> {
    if(currentPage !== totalPages) setCurrentPage(currentPage+1);
  }

  return (
    <div>
      <button onClick={prevPage}>back</button>
      {Array.from({ length: totalPages }).map((_, index) => (
        <button key={index + 1} onClick={() => handlePageChange(index + 1)}>
          {index + 1}
        </button>
      ))}
      <button onClick={nextPage}>next</button>
    </div>
  );

}

const mapStateToProps = (state) => {
  return {
    filteredR: state.filteredR,
  }
}
export default connect(mapStateToProps)(Pagination)
