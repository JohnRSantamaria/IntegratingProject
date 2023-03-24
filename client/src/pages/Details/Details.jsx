import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { Loader } from '../../components/Loader/Loader';
import { filteredRecipes } from '../../redux/actions/actions';
import { useNavigate } from 'react-router-dom';
import styles from "./Details.module.css";


export const Details = () => {
  const { id } = useParams();
  const [recipes, setRecipes] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3001/recipes/${id}`)
      .then(response => response.json())
      .then(result => {
        setIsLoading(false)
        setRecipes(result)
      })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])


  const handlerFilter = (event) => {
    dispatch(filteredRecipes(event.target.value));
    navigate("/food");
  }



  return (
    isLoading ? <Loader /> :

      <div className={styles.detailsContainer}>
        <div className={styles.backgroundDetails} />
        <div className={styles.imageContainerDetails}>
          <img src={recipes.image} alt={recipes.title} />
          <div className={styles.titleDetail}>
            <h1>{recipes.title}</h1>      
            <h3>★ {recipes.healthScore}</h3>
          </div>
        </div>
        <div className={styles.informationContainer}>
          <div className={styles.dietDetail}>
            {recipes.diets?.map(diet => (
              <button
                key={diet}
                value={diet}
                onClick={handlerFilter}

              >{diet}</button>))}
          </div>
          <div className={styles.centerContentDetails}>
            <div className={styles.summarryDetails}>
              <h3>Summary</h3>
              <div dangerouslySetInnerHTML={{ __html: recipes.summary }} />
            </div>
            <div className={styles.stepsDetail}>
              <h3>Steps</h3>
              {recipes.steps?.map(e => (
                  <h4>{`${e.number}. ${e.step}`}</h4>
              ))}
            </div>
          </div>

        </div>
      </div>
  )
}


