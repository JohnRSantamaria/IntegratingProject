import { connect, useDispatch } from "react-redux";
import { setError } from "../../redux/actions/actions";
import styles from "./Error.module.css";

const Error = ({listOfAllErros,showError}) => {
  const dispatch = useDispatch();

  return (    
    <div className={styles.modal} style={{display:showError?"flex":"none"}}> 
      <div className={styles.modalContainer}>
        <h1>Errors</h1>

        <button 
          className={styles.modalClose}
          onClick={()=> {dispatch(setError(false))}}          
        >x</button>
        
          <ul>
          {  listOfAllErros.map((error,i)=> (<li key ={i}>{error}</li>))}
          </ul>
        

      </div>
    </div>
  )
}
const mapStateToProps = (state)=> {
  return{
    listOfAllErros: state.listOfAllErros,
    showError: state.showError
  }
}
export default connect(mapStateToProps)(Error);