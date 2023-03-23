import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { useRecipes } from "../../hooks/useRecipes";
import { useAPI } from "../../hooks/useAPI";
import { useDB } from "../../hooks/useDB";
import { getRecipes, getAPIdata, getDatabase } from "../../redux/actions/actions";

import { Loader } from "../../components/Loader/Loader";


import styles from "./LandingPage.module.css";

const LandingPage = () => {
  const dispatch = useDispatch();

  const { isLoading, recipes } = useRecipes();
  const { infoAPI } = useAPI();
  const { infoDB } = useDB();

  const handleClick = () => {
    dispatch(getRecipes(recipes));
    dispatch(getAPIdata(infoAPI));
    dispatch(getDatabase(infoDB));
  }

  return (
    <div className={styles.cLP}>
      <div className={styles.contentLP}>
        <div className={styles.titleLP}>
          <h1>HENRY FOOD</h1>
        </div>
        <div className={styles.loaderLP}>
          {isLoading ? <Loader /> : <Link
            to="/food"
            onClick={handleClick}
          >
            Start
          </Link>
          }
        </div>
      </div>
    </div>
  )
};


export default connect(null, null)(LandingPage);





